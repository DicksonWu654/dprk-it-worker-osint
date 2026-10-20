# Data model

Two kinds of file, both plain JSON, both validated by `make validate`.

## Entity — `data/entities/<type>/<id>.json`

| Field | Required | Meaning |
|---|---|---|
| `id` | yes | Lowercase, stable, matches the file name. Never reused after deletion. |
| `type` | yes | `worker` (person named by a government or court) · `persona` (name an employer or platform saw) · `facilitator` · `front_company` · `organization` · `cluster` (incident or grouped observations) · `infrastructure` · `ttp` · `lead` |
| `name` | yes | Display name. For a persona, the persona name. |
| `legal_or_reported_name` | | Name as printed in an official document. |
| `romanizations` | | Other spellings of the same name. |
| `aliases[]` | | `{value, alias_type, relationship, source_ids, note}`. An alias is what a source calls an alias, never an inference. |
| `accounts[]` | | `{platform, identifier, url, archived_url, status, relationship, source_ids, note}`. `status` is `historical` unless the source says otherwise. `relationship` says how the source ties the account to the entity. Defanged archive addresses are shown as text only. Numeric platform IDs are identifiers, and digits in URL paths or slugs are not phone numbers; free-text phone-like numbers remain prohibited. |
| `organizations`, `front_companies`, `locations`, `ttps` | | Strings, as the sources give them. Locations are historical report context. |
| `infrastructure[]` | | Free-form structured objects for IPs, domains, indicator sets, and source-backed statements. |
| `images[]` | | `{source_id, source_url, direct_asset_url, caption, publication_handling, sha256}`. Default handling is link-only. |
| `attribution` | yes | `status` (see below), `legal_posture` (one sentence on what the sources establish and do not), `as_of`, `source_ids`. |
| `confidence` | yes | `confirmed` · `high` · `medium` · `lead` |
| `status` | yes | `published` · `needs_corroboration` |
| `identity_boundary` | | What the record is and is not; what must not be merged into it. |
| `caveats[]` | | Things a reader must not infer. |
| `lazarus_group_routes[]` | | Profile slugs on lazarus.group that a source links to this entity. A trailing `?` marks a possible, unconfirmed link. |
| `sources[]` | yes, ≥1 | `{source_id, support, locator}`. `support` is one sentence on what the source says about the entity. |
| `claims[]` | | Atomic statements; see below. |
| `last_verified_at` | | Date the record was last checked against its sources. |

### `attribution.status`

| Value | Means |
|---|---|
| `convicted` | A court entered a conviction. |
| `sanctioned-designation` | Designated by OFAC, the UN, South Korea or another government. Administrative, not criminal. |
| `charged-allegation` | Charged. An allegation; presumed innocent. |
| `officially-attributed` | Named in UN Panel, MSMT or government reporting that is not a charge. |
| `affected-organization-report` | Reported by a company that encountered the persona. |
| `research-attributed` | Assessed by a security vendor, researcher or journalist. |
| `unverified-lead` | A lead only. |

### Claim

```json
{
  "id": "claim-kang-official-name-forms",
  "type": "identity_name",
  "predicate": "officially_charged_name_forms",
  "value": {"name": "Kang Tae Bok", "korean": "강태복"},
  "confidence": "confirmed",
  "status": "published",
  "observed_at": "2025-06-30",
  "sources": [{"source_id": "gov-ndga-2025-indictment", "locator": "PDF file page 2, unsealed caption", "quote": "KANG TAE BOK (강태복)"}],
  "notes": ["Officially reported identity in a pending criminal case; this is not an adjudication of guilt."]
}
```

`type` is one of `identity_name`, `alias`, `account`, `employment`, `organization_affiliation`, `legal_event`, `incident`, `location`, `relationship`, `image`, `infrastructure`, `skill`, `wallet`, `contact`, `note`. `predicate` is a short snake_case label. `value` is free-form. `quote` is verbatim from the source; never paraphrase.

## Source — `data/sources/<id>.json`

| Field | Required | Meaning |
|---|---|---|
| `id` | yes | Stable id, matches the file name. |
| `publisher` | yes | Who published it, as named on the document. |
| `title` | | As printed. |
| `url` | yes | Where it lives. |
| `published_at` | | Date printed on the document. Leave out for living pages. Never an access date. |
| `accessed_at` | | When it was last read. |
| `archived_url` | | Wayback or similar. |
| `sha256` | | Hash of the reviewed copy. |
| `content_type`, `languages` | | |
| `local_copy` | | Path under `sources/documents/` when a public-domain copy is kept here. |

## Generated files

`make build` writes `build/data.json` (everything, for the viewer), `build/entities.csv`, `build/people.csv`, `build/sources.csv`, `build/stats.json`, and one Markdown page per entity plus indexes under `docs/`. Commit them; CI checks they match the data.
