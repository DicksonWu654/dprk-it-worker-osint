# Contributing

Additions and corrections are welcome. The bar is simple: public source, exact citation, exact legal posture, no excluded data. Read [SCOPE-AND-ETHICS.md](SCOPE-AND-ETHICS.md) once before your first change.

## Setup

```bash
git clone https://github.com/DicksonWu654/dprk-it-worker-osint
cd dprk-it-worker-osint
make setup        # installs jsonschema, the only dependency
make validate     # should pass on a clean checkout
make serve        # viewer at http://localhost:8765/viewer/
```

Python 3.10 or newer. Nothing else.

## Adding a source

1. Check it is not already there: `grep -rl "the-url" data/sources/`.
2. Scaffold: `python3 tools/new_entity.py --source --id <publisher-year-short-title> --publisher "…" --url "…"`.
3. Fill `title` and `published_at` as printed on the document. For a living page, remove `published_at`.
4. If you kept a copy, add its `sha256` and set `local_copy` to its path under `sources/documents/`.

## Adding an entity

1. Search first: `make search Q="name or handle"`. If a record exists, add to it rather than creating a duplicate.
2. Scaffold: `make new TYPE=persona ID=jane-doe-upwork` (types: worker, persona, facilitator, front_company, organization, cluster, infrastructure, ttp, lead).
3. Fill every `TODO`. In particular:
   - `attribution.status` is what the sources establish, nothing more. A DOJ indictment is `charged-allegation`. An OFAC notice is `sanctioned-designation`. A vendor report is `research-attributed`.
   - `attribution.legal_posture` is one sentence saying what the sources show and what they do not.
   - `identity_boundary` says what this record is and which existing records it must not be merged with.
   - Each claim has an exact `quote` and a `locator` (page, paragraph, section, row, timestamp).
4. Start with `"status": "needs_corroboration"` unless two independent source families support the record.
5. `make validate` then `make build`, and commit the generated `docs/` and `build/` changes too.

## Editing an entity

Change the data file, never the generated Markdown. Keep the `id`. If you change a legal posture, say why in the commit message and cite the document. If you split a merged record, give each half its own `identity_boundary`.

## Style

- Names and titles as printed in the source, including capitalisation and diacritics. Romanizations go in `romanizations`.
- Quotes verbatim, including typos. Use `[sic]` only if a reader would think the quote itself is a transcription error.
- Dates ISO `YYYY-MM-DD`. Use the date printed on the document, never the access date.
- Plain language in `support`, `legal_posture` and `caveats`. Short sentences. No adjectives about the person.
- Ids are lowercase with hyphens. Prefix by type for people (`worker-`, `persona-`, `facilitator-`) and use the source family for others (`un-2024-…`, `ofac-2025-…`).

## Pull requests

CI runs `make validate` and checks `docs/` and `build/` are regenerated. The PR template is a checklist; tick it honestly. One entity or one source family per PR keeps review fast.

## What will be declined

Records with no public source. Merges based on a shared name, handle or photo alone. Anything in the excluded-data list. Adjectives. Speculation about present whereabouts. Anything about a worker's family.
