#!/usr/bin/env python3
"""Rewrite every data file in canonical form (2-space indent, UTF-8, trailing newline, keys as authored)."""
from __future__ import annotations

import sys

from lib import SOURCES, dump_json, iter_entity_files, load_json


def main() -> int:
    n = 0
    for p in list(iter_entity_files()) + sorted(SOURCES.glob("*.json")):
        dump_json(p, load_json(p))
        n += 1
    print(f"formatted {n} files")
    return 0


if __name__ == "__main__":
    sys.exit(main())
