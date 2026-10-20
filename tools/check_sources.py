#!/usr/bin/env python3
"""HEAD-check every source URL and report the ones that no longer answer.

Passive: one request per URL, no retries beyond one GET fallback, a polite
User-Agent, and a 2-second pause between hosts. Writes build/source-health.csv.
"""
from __future__ import annotations

import csv
import sys
import time
import urllib.error
import urllib.request
from collections import defaultdict
from urllib.parse import urlparse

from lib import BUILD, load_sources

UA = "dprk-it-worker-osint source-health/1.0 (+https://github.com/DicksonWu654/dprk-it-worker-osint)"


def probe(url: str) -> tuple[str, str]:
    for method in ("HEAD", "GET"):
        req = urllib.request.Request(url, method=method, headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=20) as r:
                return str(r.status), r.geturl()
        except urllib.error.HTTPError as ex:
            if method == "HEAD" and ex.code in (403, 405):
                continue
            return str(ex.code), ""
        except Exception as ex:  # noqa: BLE001
            return f"error: {type(ex).__name__}", ""
    return "unknown", ""


def main() -> int:
    sources = load_sources()
    by_host = defaultdict(list)
    for s in sources.values():
        by_host[urlparse(s["url"]).netloc].append(s)
    rows = []
    bad = 0
    for host, items in sorted(by_host.items()):
        for s in items:
            status, final = probe(s["url"])
            ok = status.startswith("2") or status.startswith("3")
            bad += 0 if ok else 1
            rows.append({"id": s["id"], "publisher": s.get("publisher", ""), "url": s["url"], "status": status, "final_url": final, "archived_url": s.get("archived_url") or ""})
            print(f"{status:<18} {s['id']}")
        time.sleep(2)
    BUILD.mkdir(exist_ok=True)
    with open(BUILD / "source-health.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)
    print(f"{len(rows)} sources checked, {bad} not answering 2xx/3xx -> build/source-health.csv")
    return 0


if __name__ == "__main__":
    sys.exit(main())
