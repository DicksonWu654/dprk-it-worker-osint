#!/usr/bin/env python3
"""Search entities by name, alias, account identifier, email, wallet or free text.

    python3 tools/search.py bbshark99
    python3 tools/search.py --json "Kim Kwang Jin"
"""
from __future__ import annotations

import argparse
import json
import sys

from lib import load_entities


def haystack(e):
    parts = [e.get("id"), e.get("name"), e.get("legal_or_reported_name")]
    parts += e.get("romanizations") or []
    parts += [a.get("value") for a in e.get("aliases") or []]
    parts += [a.get("identifier") for a in e.get("accounts") or []]
    parts += [a.get("url") or "" for a in e.get("accounts") or []]
    parts += e.get("organizations") or []
    parts += e.get("front_companies") or []
    parts += e.get("locations") or []
    for c in e.get("claims") or []:
        parts.append(json.dumps(c.get("value"), ensure_ascii=False) if c.get("value") is not None else "")
    for item in e.get("infrastructure") or []:
        parts.append(json.dumps(item, ensure_ascii=False))
    return " ".join(str(p) for p in parts if p).lower()


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("query")
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args()
    q = a.query.lower().strip()
    hits = []
    for e in load_entities().values():
        h = haystack(e)
        if q in h:
            where = "name" if q in (e.get("name") or "").lower() else "alias" if any(q in (x.get("value") or "").lower() for x in e.get("aliases") or []) else "account" if any(q in (x.get("identifier") or "").lower() for x in e.get("accounts") or []) else "text"
            hits.append((where, e))
    if a.json:
        print(json.dumps([{"id": e["id"], "type": e["type"], "name": e["name"], "matched": w, "attribution": e["attribution"]["status"], "status": e["status"]} for w, e in hits], indent=1, ensure_ascii=False))
    else:
        for w, e in hits:
            print(f"{e['type']:<14} {e['id']:<55} {e['name']:<40} [{w}] {e['attribution']['status']} · {e['status']}")
        print(f"{len(hits)} hit(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
