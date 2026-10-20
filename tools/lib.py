"""Shared helpers for the tools. Standard library only, except jsonschema in validate."""
from __future__ import annotations

import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
ENTITIES = DATA / "entities"
SOURCES = DATA / "sources"
BUILD = ROOT / "build"
DOCS = ROOT / "docs"
SCHEMA = ROOT / "schema"

ENTITY_TYPES = ["worker", "persona", "facilitator", "front_company", "organization", "cluster", "infrastructure", "ttp", "lead"]
PEOPLE_TYPES = ["worker", "persona", "facilitator"]

ATTRIBUTION_ORDER = [
    "convicted",
    "sanctioned-designation",
    "charged-allegation",
    "officially-attributed",
    "affected-organization-report",
    "research-attributed",
    "unverified-lead",
]
ATTRIBUTION_LABEL = {
    "convicted": "Convicted",
    "sanctioned-designation": "Sanctioned or designated",
    "charged-allegation": "Charged (allegation; presumed innocent)",
    "officially-attributed": "Officially attributed (UN or government reporting; not a charge)",
    "affected-organization-report": "Reported by an affected organization",
    "research-attributed": "Attributed by security researchers or press",
    "unverified-lead": "Unverified lead",
}
TYPE_LABEL = {
    "worker": "DPRK IT worker",
    "persona": "Employment persona",
    "facilitator": "Facilitator",
    "front_company": "Front company",
    "organization": "Organization",
    "cluster": "Cluster or incident",
    "infrastructure": "Infrastructure",
    "ttp": "Tactic, technique or procedure",
    "lead": "Lead",
}


def load_json(path: pathlib.Path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def dump_json(path: pathlib.Path, obj) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, indent=2, ensure_ascii=False)
        f.write("\n")


def iter_entity_files():
    for t in ENTITY_TYPES:
        d = ENTITIES / t
        if d.is_dir():
            yield from sorted(d.glob("*.json"))


def load_entities() -> dict[str, dict]:
    out = {}
    for p in iter_entity_files():
        e = load_json(p)
        out[e["id"]] = e
    return out


def load_sources() -> dict[str, dict]:
    out = {}
    for p in sorted(SOURCES.glob("*.json")):
        s = load_json(p)
        out[s["id"]] = s
    return out
