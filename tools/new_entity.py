#!/usr/bin/env python3
"""Scaffold a new entity (and optionally a new source) with every required field present.

    python3 tools/new_entity.py --type persona --id jane-doe-upwork --name "Jane Doe"
    python3 tools/new_entity.py --source --id nisos-2026-report --publisher Nisos --url https://...

Fill in the TODO values, then run `make validate`.
"""
from __future__ import annotations

import argparse
import datetime as dt
import sys

from lib import ENTITIES, ENTITY_TYPES, SOURCES, dump_json


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--type", choices=ENTITY_TYPES)
    ap.add_argument("--id", required=True)
    ap.add_argument("--name")
    ap.add_argument("--source", action="store_true", help="scaffold a source instead of an entity")
    ap.add_argument("--publisher")
    ap.add_argument("--url")
    a = ap.parse_args()
    today = dt.date.today().isoformat()

    if a.source:
        p = SOURCES / f"{a.id}.json"
        if p.exists():
            sys.exit(f"{p} exists")
        dump_json(p, {
            "id": a.id,
            "publisher": a.publisher or "TODO publisher",
            "title": "TODO title as printed",
            "url": a.url or "https://TODO",
            "published_at": "TODO YYYY-MM-DD or remove for living pages",
            "accessed_at": today,
            "archived_url": None,
        })
        print(p)
        return 0

    if not a.type:
        sys.exit("--type is required for an entity")
    p = ENTITIES / a.type / f"{a.id}.json"
    if p.exists():
        sys.exit(f"{p} exists")
    dump_json(p, {
        "id": a.id,
        "type": a.type,
        "name": a.name or "TODO display name",
        "status": "needs_corroboration",
        "confidence": "medium",
        "attribution": {
            "status": "research-attributed",
            "legal_posture": "TODO one sentence: what the sources establish and what they do not",
            "as_of": today,
            "source_ids": ["TODO-source-id"],
        },
        "identity_boundary": "TODO what this record is and is not; what must not be merged into it",
        "aliases": [],
        "accounts": [],
        "locations": [],
        "caveats": [],
        "sources": [{"source_id": "TODO-source-id", "support": "TODO what the source says", "locator": "TODO page or section"}],
        "claims": [
            {
                "id": f"claim-{a.id}-todo",
                "type": "note",
                "predicate": "todo_predicate",
                "value": "TODO",
                "confidence": "medium",
                "status": "needs_corroboration",
                "sources": [{"source_id": "TODO-source-id", "locator": "TODO", "quote": "TODO exact quote"}],
            }
        ],
        "last_verified_at": today,
    })
    print(p)
    return 0


if __name__ == "__main__":
    sys.exit(main())
