#!/usr/bin/env python3
"""Compile data/ into build/ and docs/.

build/data.json        everything the viewer needs, one file
build/index.html       hosted viewer entrypoint
build/app.js            hosted viewer script
build/styles.css       hosted viewer stylesheet
build/fonts/           self-hosted fonts and their licences
build/entities.csv     one row per entity
build/people.csv       workers, personas and facilitators only
build/sources.csv      one row per source with the entities that cite it
build/stats.json       counts used by README badges and the viewer
docs/                  generated Markdown: index, one page per entity, indexes by type and legal posture

Never edit docs/ by hand; edit data/ and rebuild.
"""
from __future__ import annotations

import collections
import csv
import datetime as dt
import re
import shutil
import sys

from lib import (ATTRIBUTION_LABEL, ATTRIBUTION_ORDER, BUILD, DOCS, ENTITY_TYPES, PEOPLE_TYPES, ROOT, TYPE_LABEL,
                 dump_json, load_entities, load_sources)


def join(xs, sep=" | "):
    return sep.join(str(x) for x in xs if x not in (None, ""))


def alias_values(e):
    return [a.get("value") for a in e.get("aliases") or []]


def account_strings(e):
    return [f"{a.get('platform')}:{a.get('identifier')}" for a in e.get("accounts") or []]


def md_escape(s):
    return str(s).replace("|", "\\|").replace("\n", " ")


def defanged_url(url):
    """Return true for an address deliberately stored as non-clickable text."""
    value = str(url or "")
    return bool(re.search(r"^(?:hxxps?)://|\[\.\]|\(\.\)", value, re.I))


def source_link(label, url):
    """Render defanged source addresses as code, never as Markdown links."""
    if defanged_url(url):
        return f"{md_escape(label)} (`{md_escape(url)}`)"
    return f"[{md_escape(label)}]({url})"


def entity_row(e, sources):
    pubs = sorted({sources[r["source_id"]].get("publisher", "") for r in e.get("sources") or [] if r["source_id"] in sources} - {""})
    return {
        "id": e["id"],
        "type": e["type"],
        "name": e["name"],
        "legal_or_reported_name": e.get("legal_or_reported_name", ""),
        "aliases": join(alias_values(e)),
        "accounts": join(account_strings(e)),
        "organizations": join(e.get("organizations") or []),
        "front_companies": join(e.get("front_companies") or []),
        "locations": join(e.get("locations") or []),
        "attribution_status": e["attribution"]["status"],
        "legal_posture": e["attribution"].get("legal_posture", ""),
        "confidence": e["confidence"],
        "status": e["status"],
        "source_count": len(e.get("sources") or []),
        "claim_count": len(e.get("claims") or []),
        "publishers": join(pubs),
        "lazarus_group_routes": join(e.get("lazarus_group_routes") or []),
        "last_verified_at": e.get("last_verified_at", ""),
        "file": f"data/entities/{e['type']}/{e['id']}.json",
    }


def write_csv(path, rows, fields):
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, lineterminator="\n")
        w.writeheader()
        for r in rows:
            w.writerow({k: r.get(k, "") for k in fields})


def entity_page(e, sources, cited_by):
    L = []
    t = TYPE_LABEL[e["type"]]
    L.append(f"# {md_escape(e['name'])}")
    L.append("")
    flag = " · **needs corroboration**" if e["status"] == "needs_corroboration" else ""
    L.append(f"`{e['id']}` · {t} · {ATTRIBUTION_LABEL[e['attribution']['status']]} · confidence {e['confidence']}{flag}")
    L.append("")
    if e.get("attribution", {}).get("legal_posture"):
        L.append(f"> {md_escape(e['attribution']['legal_posture'])}")
        L.append("")
    if e.get("identity_boundary"):
        L.append(f"**Identity boundary.** {md_escape(e['identity_boundary'])}")
        L.append("")
    facts = []
    if e.get("legal_or_reported_name"):
        facts.append(("Legal or reported name", e["legal_or_reported_name"]))
    if e.get("romanizations"):
        facts.append(("Romanizations", join(e["romanizations"], ", ")))
    if e.get("aliases"):
        facts.append(("Aliases", join(alias_values(e), ", ")))
    if e.get("accounts"):
        facts.append(("Accounts", join([f"{a.get('platform')} `{a.get('identifier')}`" + (f" ({a.get('status')})" if a.get("status") else "") for a in e["accounts"]], "; ")))
    for k, label in (("organizations", "Organizations"), ("front_companies", "Front companies"), ("locations", "Locations (historical, per source)"), ("ttps", "TTPs"), ("lazarus_group_routes", "lazarus.group profiles")):
        if e.get(k):
            facts.append((label, join(e[k], ", ")))
    if e.get("last_verified_at"):
        facts.append(("Last verified", e["last_verified_at"]))
    if facts:
        L.append("| | |")
        L.append("|---|---|")
        for k, v in facts:
            L.append(f"| {k} | {md_escape(v)} |")
        L.append("")
    if e.get("caveats"):
        L.append("## Caveats")
        L.append("")
        for c in e["caveats"]:
            L.append(f"- {md_escape(c)}")
        L.append("")
    if e.get("claims"):
        L.append(f"## Claims ({len(e['claims'])})")
        L.append("")
        L.append("| Claim | Value | Confidence | Status | Source |")
        L.append("|---|---|---|---|---|")
        for c in e["claims"]:
            val = c.get("value")
            if isinstance(val, (dict, list)):
                import json as _j
                val = _j.dumps(val, ensure_ascii=False)
            refs = []
            for r in c.get("sources") or []:
                s = sources.get(r["source_id"], {})
                label = s.get("publisher") or r["source_id"]
                if s.get("url"):
                    label = source_link(label, s["url"])
                if r.get("locator"):
                    label += f" ({md_escape(r['locator'])})"
                refs.append(label)
            L.append(f"| {md_escape(c['predicate'].replace('_', ' '))} | {md_escape(val if val is not None else '')} | {c['confidence']} | {c['status'].replace('_', ' ')} | {'; '.join(refs)} |")
        L.append("")
        quotes = [(c, r) for c in e["claims"] for r in c.get("sources") or [] if r.get("quote")]
        if quotes:
            L.append("<details><summary>Exact quotes</summary>")
            L.append("")
            for c, r in quotes:
                s = sources.get(r["source_id"], {})
                L.append(f"- **{md_escape(c['predicate'].replace('_', ' '))}** — “{md_escape(r['quote'])}” — {md_escape(s.get('publisher', r['source_id']))}{', ' + md_escape(r['locator']) if r.get('locator') else ''}")
            L.append("")
            L.append("</details>")
            L.append("")
    if e.get("infrastructure"):
        L.append("## Source-backed context")
        L.append("")
        for item in e["infrastructure"]:
            if isinstance(item, dict):
                stmts = item.get("statements") or ([item["statement"]] if item.get("statement") else [])
                for s in stmts:
                    L.append(f"- {md_escape(s)}")
                if not stmts:
                    kv = "; ".join(f"{k}: {v}" for k, v in item.items() if k not in ("source_ids", "type") and isinstance(v, (str, int, float)))
                    if kv:
                        L.append(f"- {md_escape(item.get('type', ''))}: {md_escape(kv)}")
        L.append("")
    L.append("## Sources")
    L.append("")
    for r in e.get("sources") or []:
        s = sources.get(r["source_id"])
        if not s:
            continue
        title = s.get("title") or s.get("url")
        line = f"- {md_escape(s.get('publisher', ''))}, {source_link(title, s['url'])}"
        if s.get("published_at"):
            line += f", {s['published_at']}"
        if r.get("locator"):
            line += f" — {md_escape(r['locator'])}"
        if r.get("support"):
            line += f". {md_escape(r['support'])}"
        L.append(line)
    L.append("")
    L.append(f"*Data file: [`data/entities/{e['type']}/{e['id']}.json`](../../../data/entities/{e['type']}/{e['id']}.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*")
    L.append("")
    return "\n".join(L)


def main() -> int:
    entities = load_entities()
    sources = load_sources()
    cited_by = collections.defaultdict(set)
    for e in entities.values():
        for r in e.get("sources") or []:
            cited_by[r["source_id"]].add(e["id"])
        for c in e.get("claims") or []:
            for r in c.get("sources") or []:
                cited_by[r["source_id"]].add(e["id"])

    rows = [entity_row(e, sources) for e in entities.values()]
    order = {a: i for i, a in enumerate(ATTRIBUTION_ORDER)}
    rows.sort(key=lambda r: (ENTITY_TYPES.index(r["type"]), order.get(r["attribution_status"], 9), r["name"].lower()))
    fields = list(rows[0].keys())
    write_csv(BUILD / "entities.csv", rows, fields)
    write_csv(BUILD / "people.csv", [r for r in rows if r["type"] in PEOPLE_TYPES], fields)
    src_rows = []
    for sid, s in sources.items():
        src_rows.append({"id": sid, "publisher": s.get("publisher", ""), "title": s.get("title", ""), "url": s.get("url", ""), "published_at": s.get("published_at", ""), "archived_url": s.get("archived_url") or "", "sha256": s.get("sha256", ""), "cited_by_count": len(cited_by.get(sid, ())), "cited_by": join(sorted(cited_by.get(sid, ())))})
    src_rows.sort(key=lambda r: (-r["cited_by_count"], r["publisher"], r["title"]))
    write_csv(BUILD / "sources.csv", src_rows, list(src_rows[0].keys()))

    stats = {
        "generated_at": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "entities": len(entities),
        "people": sum(1 for e in entities.values() if e["type"] in PEOPLE_TYPES),
        "by_type": dict(collections.Counter(e["type"] for e in entities.values())),
        "by_attribution": dict(collections.Counter(e["attribution"]["status"] for e in entities.values() if e["type"] in PEOPLE_TYPES)),
        "by_status": dict(collections.Counter(e["status"] for e in entities.values())),
        "claims": sum(len(e.get("claims") or []) for e in entities.values()),
        "sources": len(sources),
        "publishers": len({s.get("publisher") for s in sources.values()}),
    }
    dump_json(BUILD / "stats.json", stats)
    dump_json(BUILD / "data.json", {"stats": stats, "entities": list(entities.values()), "sources": sources})

    # Package the complete viewer, including fonts and their licences, so
    # build/ can be served on its own or under a subpath.
    shutil.copytree(ROOT / "viewer", BUILD, dirs_exist_ok=True)

    # docs
    if DOCS.exists():
        shutil.rmtree(DOCS)
    for e in entities.values():
        p = DOCS / "entities" / e["type"] / f"{e['id']}.md"
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(entity_page(e, sources, cited_by), encoding="utf-8")
    # indexes
    idx = ["# Index", "", f"{stats['entities']} entities · {stats['people']} people, personas and facilitators · {stats['claims']} sourced claims · {stats['sources']} sources. Generated by `make build`; do not edit.", ""]
    idx.append("Browse: [by type](#by-type) · [people by legal posture](by-legal-posture.md) · [sources](sources.md)")
    idx.append("")
    idx.append("## By type")
    idx.append("")
    for t in ENTITY_TYPES:
        es = [e for e in entities.values() if e["type"] == t]
        if not es:
            continue
        idx.append(f"### {TYPE_LABEL[t]} ({len(es)})")
        idx.append("")
        for e in sorted(es, key=lambda x: x["name"].lower()):
            flag = " ⚑" if e["status"] == "needs_corroboration" else ""
            idx.append(f"- [{md_escape(e['name'])}](entities/{t}/{e['id']}.md){flag}")
        idx.append("")
    idx.append("⚑ needs corroboration: rests on one source family or an open identity question.")
    (DOCS / "README.md").write_text("\n".join(idx) + "\n", encoding="utf-8")

    lp = ["# People by legal posture", "", "Postures are kept strictly separate. A charge is an allegation. UN or government reporting is not a charge. Research attribution is a publisher's assessment.", ""]
    people = [e for e in entities.values() if e["type"] in PEOPLE_TYPES]
    for a in ATTRIBUTION_ORDER:
        grp = sorted([e for e in people if e["attribution"]["status"] == a], key=lambda x: (x["type"], x["name"].lower()))
        if not grp:
            continue
        lp.append(f"## {ATTRIBUTION_LABEL[a]} ({len(grp)})")
        lp.append("")
        lp.append("| Name | Type | Confidence | Status | Sources | Claims |")
        lp.append("|---|---|---|---|---:|---:|")
        for e in grp:
            lp.append(f"| [{md_escape(e['name'])}](entities/{e['type']}/{e['id']}.md) | {TYPE_LABEL[e['type']]} | {e['confidence']} | {e['status'].replace('_', ' ')} | {len(e.get('sources') or [])} | {len(e.get('claims') or [])} |")
        lp.append("")
    (DOCS / "by-legal-posture.md").write_text("\n".join(lp) + "\n", encoding="utf-8")

    sp = ["# Sources", "", f"{len(sources)} public documents, most-cited first.", "", "| Publisher | Title | Date | Cited by |", "|---|---|---|---:|"]
    for r in src_rows:
        sp.append(f"| {md_escape(r['publisher'])} | {source_link(r['title'] or r['url'], r['url'])} | {r['published_at']} | {r['cited_by_count']} |")
    (DOCS / "sources.md").write_text("\n".join(sp) + "\n", encoding="utf-8")

    print(f"built {stats['entities']} entities, {stats['sources']} sources, {stats['claims']} claims -> build/, docs/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
