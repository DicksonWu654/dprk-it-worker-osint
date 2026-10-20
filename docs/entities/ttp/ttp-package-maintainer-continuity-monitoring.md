# Package-maintainer continuity and provenance monitoring

`ttp-package-maintainer-continuity-monitoring` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> Source-attributed public security research; legal adjudication, civil-identity finding, and same-operator scope remain unresolved.

| | |
|---|---|
| TTPs | package-publisher change control |
| Last verified | 2026-08-12 |

## Caveats

- A familiar maintainer name offers a continuity lead after an account takeover; continuity requires source-backed account evidence.
- Treat a compromised maintainer as a victim; coordinate privately and avoid publishing credentials, exploit details, or infrastructure selectors.

## Source-backed context

- Defenders and package ecosystems should correlate abrupt maintainer or publisher changes, newly linked repository organizations, package-version timing, provenance/signing changes, and unexpected infrastructure transitions. A familiar maintainer name is not sufficient after an account takeover.

## Sources

- Ketman, [DPRK IT Worker-Related Account Takeover](https://www.ketman.org/dprk-it-worker-related-account-takeover.html), 2025-06-18 — Sections “Account Takeover” and “Safety Measures,” especially the repository redirects, release timing, privileged-account activity, and contributor/package-monitoring guidance. Defenders and package ecosystems should correlate abrupt maintainer or publisher changes, newly linked repository organizations, package-version timing, provenance/signing changes, and unexpected infrastructure transitions. A familiar maintainer name is not sufficient after an account takeover

*Data file: [`data/entities/ttp/ttp-package-maintainer-continuity-monitoring.json`](../../../data/entities/ttp/ttp-package-maintainer-continuity-monitoring.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
