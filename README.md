# DPRK IT-worker OSINT

[![Validate](https://github.com/DicksonWu654/dprk-it-worker-osint/actions/workflows/validate.yml/badge.svg)](https://github.com/DicksonWu654/dprk-it-worker-osint/actions/workflows/validate.yml) [![Code: MIT](https://img.shields.io/badge/code-MIT-11160e.svg)](LICENSE) [![Data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-d9ff5a.svg)](LICENSE-DATA.md)

A defensive research dataset on the North Korean IT-worker scheme. It compiles public reporting on workers, employment personas, facilitators, front companies, infrastructure and tactics. Records link to the documents that support them; claims include source locators and quotations.

[Open the viewer](https://dprk-osint.dicksonwu.xyz) · [Repository](https://github.com/DicksonWu654/dprk-it-worker-osint) · [Browse records on GitHub](docs/README.md)

## How this was compiled

This dataset was compiled by AI agents from public documents. Every claim quotes and links its source, and the quotes were re-checked against the originals, but it will contain mistakes. Check the source before relying on a record, and [request a correction](CORRECTIONS.md) if something is wrong.

| Measure | Count |
|---|---:|
| Entities | 913 |
| People, personas and facilitators | 395 |
| Front companies | 82 |
| Sourced claims | 3,889 |
| Public sources | 986 |
| Publishers | 373 |

Counts come from [build/stats.json](build/stats.json). See [CHANGELOG.md](CHANGELOG.md) for the October 2026 update.

## Use it

The viewer searches names, aliases, historical handles, companies, source titles and quoted passages. Start with a search or browse Records, filter by type or legal posture, then open a record to read its claims and sources. Source links lead to the underlying publications. The index holds only what public documents connect to the scheme, so a missing result reflects the sources, and only that.

For local use, install Python 3.10 or newer, then run:

```sh
make setup
make serve
```

Open http://localhost:8765/viewer/. `make build` produces a self-contained static site in `build/`, including its data and fonts. Serve that directory directly with `python3 -m http.server -d build`. The public copy at https://dprk-osint.dicksonwu.xyz is deployed from `build/` as configured in `.openai/hosting.json`.

For reuse, [data/entities/](data/entities/) and [data/sources/](data/sources/) hold the source records. [build/data.json](build/data.json) contains the compiled dataset; [entities.csv](build/entities.csv), [people.csv](build/people.csv) and [sources.csv](build/sources.csv) are flat exports. Edit source records and rebuild generated files.

## Read a record

Read the legal posture, confidence, editorial status and identity boundary before drawing conclusions. A charge means prosecutors have filed criminal charges and a court decides the case; a designation is an administrative action; research attribution is a publisher's assessment. Confidence describes the sourcing. `needs_corroboration` marks an unresolved identity or sourcing question and remains visible.

A persona is an identity an employer or platform saw. A worker is a person named by a government or court. Records are linked only where a source supports the link. Shared names, handles or photographs count as leads. Follow each claim's citation and read its caveats. Field definitions: [DATA-MODEL.md](DATA-MODEL.md).

## Exclusions and corrections

The dataset excludes phone numbers, street addresses, identity-document images, bank or card details, victim details, present whereabouts, private-account material and biometric inference. Retained historical contact selectors are defanged. All material is collected passively from publications. See [SCOPE-AND-ETHICS.md](SCOPE-AND-ETHICS.md).

To contribute, propose a public source or submit a sourced record through an [issue](https://github.com/DicksonWu654/dprk-it-worker-osint/issues/new) or pull request. Follow [CONTRIBUTING.md](CONTRIBUTING.md), then run `make validate` and `make build`.

For errors or removal requests, use the [correction form](https://github.com/DicksonWu654/dprk-it-worker-osint/issues/new?template=correction.yml) and identify the record and requested change. For sensitive matters, give only the record id and write “private review requested.” Requests from named people take priority. See [CORRECTIONS.md](CORRECTIONS.md).

Data: [CC BY 4.0](LICENSE-DATA.md). Code: [MIT](LICENSE). Cite the underlying documents when reusing the data. Maintainers: [release checklist](RELEASE-CHECKLIST.md).
