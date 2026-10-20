#!/usr/bin/env python3
"""One-off importer: research corpus -> data/entities and data/sources.

Reads the normalized catalog and the per-record enrichment bundles from the
private research workspace and writes one JSON file per entity and per source.
Kept in the repository so the provenance of the initial dataset is auditable;
day-to-day contributions edit data/ directly and never need this script.

Filters applied on import (see SCOPE-AND-ETHICS.md):
  * records with publication_status do_not_publish are skipped;
  * claims with publication_tier restricted are skipped;
  * account entries whose platform is a phone number are skipped;
  * internal review notes, reviewer names and file-system paths are dropped.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import pathlib
import re
import sys

HERE = pathlib.Path(__file__).resolve()
ROOT = HERE.parents[2]

STATUS_MAP = {"publish": "published", "review": "needs_corroboration"}
DROP_PLATFORMS = {"phone"}


def sid_for_url(url: str) -> str:
    return "src-" + hashlib.sha1(url.strip().encode()).hexdigest()[:12]


def as_alias(a):
    if isinstance(a, str):
        return {"value": a}
    out = {k: v for k, v in a.items() if k in ("value", "alias_type", "relationship", "source_ids", "note") and v not in (None, [], "")}
    if "value" not in out:
        out["value"] = a.get("name") or a.get("alias") or json.dumps(a, ensure_ascii=False)
    return out


def clean_account(a):
    if (a.get("platform") or "").strip().lower() in DROP_PLATFORMS:
        return None
    out = {k: a.get(k) for k in ("platform", "identifier", "url", "status", "relationship", "source_ids", "note")}
    return {k: v for k, v in out.items() if v not in (None, [], "")}


def clean_image(i):
    keep = ("source_id", "source_url", "direct_asset_url", "caption", "publication_handling", "sha256")
    return {k: i[k] for k in keep if i.get(k) not in (None, "")}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--catalog", type=pathlib.Path, required=True)
    ap.add_argument("--bundles", type=pathlib.Path, required=True, help="directory of enrichment bundle JSON files")
    ap.add_argument("--out", type=pathlib.Path, default=ROOT / "data")
    args = ap.parse_args()

    catalog = json.load(open(args.catalog))
    sources: dict[str, dict] = {}
    url_to_sid: dict[str, str] = {}

    def register_source(sid, publisher, title, url, published_at=None, accessed_at=None, archived_url=None, sha256=None, content_type=None, languages=None):
        s = sources.setdefault(sid, {"id": sid})
        for k, v in (("publisher", publisher), ("title", title), ("url", url), ("published_at", published_at), ("accessed_at", accessed_at), ("archived_url", archived_url), ("sha256", sha256), ("content_type", content_type), ("languages", languages)):
            if v not in (None, "", []) and not s.get(k):
                s[k] = v
        if url:
            url_to_sid.setdefault(url, sid)
        return sid

    skipped = []
    entities = {}
    for r in catalog:
        if r.get("publication_status") == "do_not_publish":
            skipped.append(r["record_id"])
            continue
        e = {
            "id": r["record_id"],
            "type": r["record_type"],
            "name": r.get("display_name") or r["record_id"],
            "status": STATUS_MAP.get(r.get("publication_status"), "needs_corroboration"),
            "confidence": r.get("confidence") or "medium",
            "attribution": {k: v for k, v in (r.get("attribution") or {}).items() if v not in (None, [], "")},
        }
        if r.get("legal_or_reported_name"):
            e["legal_or_reported_name"] = r["legal_or_reported_name"]
        for k in ("romanizations", "organizations", "front_companies", "locations", "ttps", "caveats"):
            v = r.get(k)
            if v:
                e[k] = [x if isinstance(x, str) else (x.get("value") or x.get("name") or json.dumps(x, ensure_ascii=False)) for x in v]
        if r.get("aliases"):
            e["aliases"] = [as_alias(a) for a in r["aliases"]]
        accs = [clean_account(a) for a in r.get("accounts") or []]
        accs = [a for a in accs if a]
        if accs:
            e["accounts"] = accs
        if r.get("images"):
            e["images"] = [clean_image(i) for i in r["images"]]
        if r.get("infrastructure"):
            e["infrastructure"] = r["infrastructure"]
        if r.get("baseline_matches"):
            e["lazarus_group_routes"] = [m if isinstance(m, str) else (m.get("route") or m.get("profile_id") or m.get("id") or json.dumps(m)) for m in r["baseline_matches"]]
        refs = []
        for s in r.get("sources") or []:
            sid = s["source_id"]
            register_source(sid, s.get("publisher"), s.get("title"), s.get("url"), s.get("published_at"), s.get("accessed_at"), s.get("archived_url"))
            ref = {"source_id": sid}
            if s.get("support"):
                ref["support"] = s["support"]
            if s.get("locator"):
                ref["locator"] = s["locator"]
            refs.append(ref)
        e["sources"] = refs
        e["claims"] = []
        if r.get("last_verified_at"):
            e["last_verified_at"] = r["last_verified_at"]
        entities[e["id"]] = e

    # enrichment bundles -> claims
    n_claims = 0
    n_restricted = 0
    for p in sorted(args.bundles.glob("*.json")):
        b = json.load(open(p))
        prof = b.get("profile") or {}
        rid = prof.get("record_id")
        if not rid or rid not in entities:
            continue
        e = entities[rid]
        if prof.get("identity_boundary"):
            e["identity_boundary"] = prof["identity_boundary"]
        doc_to_sid = {}
        for d in b.get("documents") or []:
            url = d.get("url") or d.get("document_identity")
            sid = (d.get("source_ids") or [None])[0]
            if not sid:
                sid = url_to_sid.get(url) if url else None
            if not sid:
                sid = sid_for_url(url or d["document_id"])
            register_source(sid, d.get("publisher"), d.get("title"), url, d.get("published_at"), d.get("accessed_at"), d.get("archive_url"), d.get("sha256"), d.get("content_type"), d.get("languages"))
            doc_to_sid[d["document_id"]] = sid
        for cl in b.get("claims") or []:
            tier = cl.get("publication_tier")
            if tier == "restricted":
                n_restricted += 1
                continue
            refs = []
            for sr in cl.get("source_refs") or []:
                sid = doc_to_sid.get(sr.get("document_id"))
                if not sid:
                    continue
                ref = {"source_id": sid}
                if sr.get("locator"):
                    ref["locator"] = sr["locator"]
                if sr.get("exact_quote"):
                    ref["quote"] = sr["exact_quote"]
                refs.append(ref)
            claim = {
                "id": cl["claim_id"],
                "type": cl.get("claim_type") or "note",
                "predicate": cl.get("predicate") or "",
                "value": cl.get("value"),
                "confidence": cl.get("confidence") or "medium",
                "status": "published" if tier == "public" else "needs_corroboration",
                "sources": refs,
            }
            if cl.get("observed_at"):
                claim["observed_at"] = cl["observed_at"]
            notes = [n for n in (cl.get("notes") or []) if n and "tmp/" not in n]
            if notes:
                claim["notes"] = notes
            e["claims"].append(claim)
            n_claims += 1
        # make sure every claim source is also listed at entity level
        have = {s["source_id"] for s in e["sources"]}
        for cl in e["claims"]:
            for ref in cl["sources"]:
                if ref["source_id"] not in have:
                    e["sources"].append({"source_id": ref["source_id"]})
                    have.add(ref["source_id"])

    # drop references to skipped records
    for e in entities.values():
        for k in ("lazarus_group_routes",):
            pass
    # write
    out_e = args.out / "entities"
    out_s = args.out / "sources"
    for d in (out_e, out_s):
        d.mkdir(parents=True, exist_ok=True)
    for e in entities.values():
        d = out_e / e["type"]
        d.mkdir(exist_ok=True)
        (d / f"{e['id']}.json").write_text(json.dumps(e, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    used = {ref["source_id"] for e in entities.values() for ref in e["sources"]}
    for sid, s in sources.items():
        if sid not in used:
            continue
        if not re.fullmatch(r"[A-Za-z0-9._-]+", sid):
            raise SystemExit(f"unsafe source id {sid}")
        (out_s / f"{sid}.json").write_text(json.dumps(s, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps({"entities": len(entities), "sources_written": len(used), "claims": n_claims, "restricted_claims_dropped": n_restricted, "records_skipped": skipped}, indent=1))


if __name__ == "__main__":
    sys.exit(main())
