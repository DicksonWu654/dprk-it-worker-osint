#!/usr/bin/env python3
"""Validate every file under data/.

Checks, in order:
  1. JSON parses and is pretty-printed the way tools/format.py writes it.
  2. Entities and sources match their JSON Schemas.
  3. File name equals the id; entity lives in the folder for its type.
  4. Every source_id referenced by an entity, alias, account, attribution or
     claim exists in data/sources/.
  5. Every source is referenced by at least one entity.
  6. Sensitive-data lint across entities and sources. Every exception names
     one file, field, matched value, and written reason.
Exit code 1 on any error or unexplained sensitive-data match.
"""
from __future__ import annotations

import json
import re
import sys

try:
    import jsonschema
except ImportError:  # pragma: no cover
    print("pip install jsonschema", file=sys.stderr)
    sys.exit(2)

from lib import ROOT, SCHEMA, SOURCES, iter_entity_files, load_json

PHONE = re.compile(r"(?<![\w/.])(\+?\d[\d\s().-]{8,}\d)(?![\w/.])")
IPV4 = re.compile(r"^\d{1,3}(\.\d{1,3}){2,3}$")
CARD = re.compile(r"\b(?:\d[ -]?){13,19}\b")
URL_WITH_PATH = re.compile(
    r"(?ix)(?:(?:hxxps?|https?)://|(?<![\w@]))"
    r"[a-z0-9-]+(?:(?:\.|\[\.\])[a-z0-9-]+)+/[^\s<>'\"]+"
)
STREET = re.compile(r"\b\d{1,6}\s+[A-Z][a-z]+\s+(?:Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Lane|Ln\.|Drive|Dr\.|Way|Court|Ct\.)\b", re.I)
EMAIL = re.compile(r"(?<![\w.+-])[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}(?![\w.-])", re.I)
HANDLE = re.compile(r"(?<![\w.+@-])@[A-Za-z0-9_][A-Za-z0-9_-]{2,}")
PRIVATE_IP = re.compile(r"(?<!\d)(?:10(?:\.\d{1,3}){3}|192\.168(?:\.\d{1,3}){2}|172\.(?:1[6-9]|2\d|3[01])(?:\.\d{1,3}){2})(?!\d)")
LOCAL_PATH = re.compile(
    # Avoid matching these segments inside public URL paths.
    r"(?i:file://)|(?<![\w/])(?:/(?:home/[^/\s]+|Users/[^/\s]+|root|tmp)/|~/)"
    r"|(?i:(?<![\w])[a-z]:[\\/])"
)
DOC_WORDS = re.compile(r"\b(passport|driver'?s licen[cs]e|national id|ssn|social security number|W-2|I-9)\b", re.I)
LINT_SKIP_KEYS = {"sha256", "id", "source_id", "source_ids"}
URL_KEYS = {"url", "source_url", "direct_asset_url", "archived_url"}
EXCEPTIONS = ROOT / "tools" / "sensitive_allowlist.json"
EXCEPTION_KINDS = {"phone", "card_or_account", "street_address"}
# This is an FBI API route name, not an account handle. It is allowed only in
# the source URL field on that host; all other @ selectors must be defanged.
ROUTE_ALLOWLIST = {
    ("url", "@wanted-person", "https://api.fbi.gov/@wanted-person/"):
        "FBI public wanted-person API route, not an account selector",
}
# Social and messaging addresses are retained only in defanged form. This is
# intentionally broad so a newly added platform URL cannot become clickable in
# generated Markdown or the viewer.
UNDEFANGED_SOCIAL_URL = re.compile(
    r"(?i)https?://(?:www\.)?(?:t\.me|x\.com|twitter\.com|linkedin\.com)(?:[/:?#]|$)"
)


def walk_strings(obj, path=""):
    if isinstance(obj, dict):
        for k, v in obj.items():
            yield from walk_strings(v, f"{path}.{k}" if path else k)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from walk_strings(v, f"{path}[{i}]")
    elif isinstance(obj, str):
        yield path, obj


def mask_url_path_digits(value):
    """Mask digits in URL paths and slugs before sensitive-number scans."""

    def replace(match):
        token = match.group(0)
        scheme = token.find("://")
        path_start = token.find("/", scheme + 3 if scheme >= 0 else 0)
        if path_start < 0:
            return token
        path_end = min((i for i in (token.find("?", path_start), token.find("#", path_start)) if i >= 0), default=len(token))
        path = re.sub(r"\d", " ", token[path_start:path_end])
        return token[:path_start] + path + token[path_end:]

    return URL_WITH_PATH.sub(replace, value)


def platform_numeric_identifiers(obj):
    """Return numeric account identifiers explicitly tied to a platform."""
    identifiers = set()
    if not isinstance(obj, dict):
        return identifiers
    for account in obj.get("accounts") or []:
        if not isinstance(account, dict) or not account.get("platform"):
            continue
        identifier = account.get("identifier")
        if isinstance(identifier, str) and re.fullmatch(r"\d+", identifier):
            identifiers.add(identifier)
    for claim in obj.get("claims") or []:
        if not isinstance(claim, dict):
            continue
        value = claim.get("value")
        if not isinstance(value, dict) or not value.get("platform"):
            continue
        identifier = value.get("identifier")
        if isinstance(identifier, str) and re.fullmatch(r"\d+", identifier):
            identifiers.add(identifier)
    return identifiers


def phone_matches(value, field="", platform_ids=frozenset()):
    """Yield phone-like tokens that are not URL paths or platform IDs."""
    phone_text = mask_url_path_digits(value)
    # Dates and public IPv4 indicators resemble phone numbers. Mask only
    # those tokens, not an entire sentence that could also contain a phone.
    phone_text = re.sub(r"\b(?:19|20)\d{2}-\d{2}-\d{2}\b|\b\d{1,3}(?:\.\d{1,3}){3}\b", lambda m: " " * len(m.group()), phone_text)
    for m in PHONE.finditer(phone_text):
        token = m.group(1).strip()
        digits = len(re.sub(r"\D", "", token))
        if digits < 9 or IPV4.fullmatch(token) or re.fullmatch(r"[\d\s.-]{0,4}(19|20)\d{2}[\d\s.-]*", token):
            continue
        if token in platform_ids and (field.startswith("accounts[") or field.startswith("claims[")):
            continue
        yield token


def self_check_phone_detection():
    """Keep ordinary free-text phone detection separate from identifiers and URLs."""
    expected = ["+1 (707) 159-4535", "707-159-4535"]
    actual = list(phone_matches('quote: +1 (707) 159-4535; then 707-159-4535', "quote"))
    if actual != expected:
        raise AssertionError(f"free-text phone check returned {actual!r}")
    if list(phone_matches("5031331438", "claims[0].value.identifier", {"5031331438"})):
        raise AssertionError("platform numeric identifier was flagged")
    if list(phone_matches("x.com/a/status/1824047425822310580", "quote")):
        raise AssertionError("URL path identifier was flagged")


def load_exceptions(errors):
    try:
        entries = json.loads(EXCEPTIONS.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        errors.append(f"{EXCEPTIONS}: cannot load sensitive-data allowlist: {exc}")
        return {}
    allowed = {}
    for i, item in enumerate(entries):
        if not isinstance(item, dict) or set(item) != {"file", "field", "kind", "match", "reason"} or not all(isinstance(v, str) and v.strip() for v in item.values()):
            errors.append(f"{EXCEPTIONS}: entry {i} needs file, field, kind, exact match, and written reason")
            continue
        if item["kind"] not in EXCEPTION_KINDS or not item["file"].startswith("data/") or len(item["reason"]) < 20:
            errors.append(f"{EXCEPTIONS}: entry {i} has an invalid kind, file, or reason")
            continue
        key = (item["file"], item["field"], item["kind"], item["match"])
        if key in allowed:
            errors.append(f"{EXCEPTIONS}: duplicate exception {key}")
        allowed[key] = item["reason"]
    return allowed


def lint_sensitive(p, obj, allowed, used, errors):
    file = p.relative_to(ROOT).as_posix()
    platform_ids = platform_numeric_identifiers(obj)

    def flag(field, kind, match):
        key = (file, field, kind, match)
        if key in allowed:
            used.add(key)
        else:
            errors.append(f"{file}: unexplained {kind} at {field}: {match!r}")

    for field, value in walk_strings(obj):
        for m in LOCAL_PATH.finditer(value):
            errors.append(f"{file}: local filesystem path at {field}: {m.group(0)!r}")
        for m in UNDEFANGED_SOCIAL_URL.finditer(value):
            errors.append(f"{file}: undefanged social-profile URL at {field}: {m.group(0)!r}")
        for m in EMAIL.finditer(value):
            flag(field, "raw_email", m.group(0))
        for m in PRIVATE_IP.finditer(value):
            flag(field, "private_ip", m.group(0))
        for m in HANDLE.finditer(value):
            if any(field == route_field and m.group(0) == token and value.startswith(prefix) and reason
                   for (route_field, token, prefix), reason in ROUTE_ALLOWLIST.items()):
                continue
            flag(field, "raw_handle", m.group(0))
        if field.rsplit(".", 1)[-1] in LINT_SKIP_KEYS:
            continue
        for token in phone_matches(value, field, platform_ids):
            if len(re.sub(r"\D", "", token)) >= 13 and CARD.fullmatch(token):
                continue  # Report one finding through the card/account rule.
            flag(field, "phone", token)
        # URL path IDs and archive timestamps are not payment selectors. Raw
        # contact selectors, phones, and street addresses are still checked.
        if field.rsplit(".", 1)[-1] not in URL_KEYS:
            for m in CARD.finditer(mask_url_path_digits(value)):
                if len(re.sub(r"\D", "", m.group(0))) >= 13 and "0x" not in value:
                    flag(field, "card_or_account", m.group(0))
        for m in STREET.finditer(value):
            flag(field, "street_address", m.group(0))


def self_check_local_path_detection():
    """Plant paths in nested strings, including fields skipped by number lint."""
    samples = (
        "/home/researcher/capture/", "/Users/researcher/capture/",
        "/root/capture/", "/tmp/capture/", r"C:\Users\researcher\capture",
        r"c:\users\researcher\capture", "C:/Users/researcher/capture",
        "file:///capture/document", "~/capture/",
    )
    for folder in ("data/entities/persona", "data/sources"):
        p = ROOT / folder / "local-path-self-check.json"
        for sample in samples:
            obj = {"claims": [{"notes": [f"Capture:{sample}"]}], "id": sample}
            errors = []
            lint_sensitive(p, obj, {}, set(), errors)
            path_errors = [e for e in errors if "local filesystem path at" in e]
            if (len(path_errors) != 2
                    or not any("claims[0].notes[0]" in e for e in path_errors)
                    or not any(" at id:" in e for e in path_errors)):
                raise AssertionError(f"planted local path was not rejected: {sample!r}")
        errors = []
        lint_sensitive(p, {"notes": ["sources/documents/capture.pdf",
                                   "https://example.org/en/home/report",
                                   "https://example.org/Users/researcher/report"]},
                       {}, set(), errors)
        if errors:
            raise AssertionError(f"public URL or repository path was flagged: {errors!r}")


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []
    try:
        self_check_phone_detection()
        self_check_local_path_detection()
    except AssertionError as exc:
        errors.append(f"validator self-check failed: {exc}")
    allowed = load_exceptions(errors)
    used = set()
    ent_schema = load_json(SCHEMA / "entity.schema.json")
    src_schema = load_json(SCHEMA / "source.schema.json")
    ev = jsonschema.Draft202012Validator(ent_schema)
    sv = jsonschema.Draft202012Validator(src_schema)

    sources = {}
    for p in sorted(SOURCES.glob("*.json")):
        raw = p.read_text(encoding="utf-8")
        try:
            s = json.loads(raw)
        except json.JSONDecodeError as ex:
            errors.append(f"{p}: invalid JSON: {ex}")
            continue
        if json.dumps(s, indent=2, ensure_ascii=False) + "\n" != raw:
            errors.append(f"{p}: not formatted; run tools/format.py")
        for err in sv.iter_errors(s):
            errors.append(f"{p}: {err.message} at {'/'.join(map(str, err.path))}")
        if s.get("id") != p.stem:
            errors.append(f"{p}: id {s.get('id')!r} does not match file name")
        sources[p.stem] = s
        lint_sensitive(p, s, allowed, used, errors)

    referenced = set()
    entities = {}
    for p in iter_entity_files():
        raw = p.read_text(encoding="utf-8")
        try:
            e = json.loads(raw)
        except json.JSONDecodeError as ex:
            errors.append(f"{p}: invalid JSON: {ex}")
            continue
        if json.dumps(e, indent=2, ensure_ascii=False) + "\n" != raw:
            errors.append(f"{p}: not formatted; run tools/format.py")
        for err in ev.iter_errors(e):
            errors.append(f"{p}: {err.message} at {'/'.join(map(str, err.path))}")
        if e.get("id") != p.stem:
            errors.append(f"{p}: id {e.get('id')!r} does not match file name")
        if e.get("type") != p.parent.name:
            errors.append(f"{p}: type {e.get('type')!r} but stored under {p.parent.name}/")
        if e.get("id") in entities:
            errors.append(f"{p}: duplicate id {e['id']}")
        entities[e.get("id")] = e

        def need(sid, where):
            referenced.add(sid)
            if sid not in sources:
                errors.append(f"{p}: {where} cites unknown source {sid!r}")

        for ref in e.get("sources") or []:
            need(ref["source_id"], "sources")
        for sid in (e.get("attribution") or {}).get("source_ids") or []:
            need(sid, "attribution")
        for a in e.get("aliases") or []:
            for sid in a.get("source_ids") or []:
                need(sid, f"alias {a.get('value')!r}")
        for a in e.get("accounts") or []:
            for sid in a.get("source_ids") or []:
                need(sid, f"account {a.get('identifier')!r}")
        for c in e.get("claims") or []:
            for ref in c.get("sources") or []:
                need(ref["source_id"], f"claim {c.get('id')}")
        for r in e.get("lazarus_group_routes") or []:
            pass
        lint_sensitive(p, e, allowed, used, errors)
        for img in e.get("images") or []:
            if DOC_WORDS.search(img.get("caption") or "") and img.get("publication_handling") not in ("link-only", "do-not-publish", None):
                errors.append(f"{p}: identity-document image must be link-only or do-not-publish")

    for key in allowed.keys() - used:
        errors.append(f"{EXCEPTIONS}: stale exception {key}")

    for sid in sources:
        if sid not in referenced:
            warnings.append(f"data/sources/{sid}.json: not referenced by any entity")

    for w in warnings:
        print("warning:", w)
    for err in errors:
        print("error:", err)
    print(f"{len(entities)} entities, {len(sources)} sources, {len(errors)} errors, {len(warnings)} warnings")
    return 1 if errors or warnings else 0


if __name__ == "__main__":
    sys.exit(main())
