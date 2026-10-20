# GitLab 2026 account-indicator set

`infrastructure-gitlab-2026-account-indicator-set` · Infrastructure · Attributed by security researchers or press · confidence high · **needs corroboration**

> GitLab-published insider-risk indicators grouped across four IT-worker case studies

| | |
|---|---|
| Organizations | GitLab Case Study 1: Kil-Nam Kang cell, GitLab Case Study 2: synthetic identity/service-abuse team, GitLab Case Study 3: operator controlling 21 personas, GitLab Case Study 4: Moscow-based worker |
| TTPs | centralized financial and performance tracking, identity-generation automation, large-scale synthetic persona management, private repository mirroring |
| Last verified | 2026-08-11 |

## Caveats

- GitLab warns that some values may relate to compromised or purchased identities; investigate context rather than blocklisting blindly.
- The single IP is explicitly mapped by GitLab to Kil-Nam Kang, whose profile already exists in platform-personas.json.
- The values are preserved as grouped infrastructure evidence; named-profile treatment is outside scope.
- Phone-number indicator sets published by the source are omitted from this repository by policy; see the cited GitLab report.
- Only source-labelled threat-actor and synthetic-persona email indicators remain, defanged as historical source-reported selectors; developer, administrative/testing, and malformed values were removed.

## Source-backed context

- account-indicator-set: case_study: 1; category: Threat actor-controlled email; identifier_type: email; count: 72; relationship: related-cluster
- account-indicator-set: case_study: 2; category: Synthetic persona email; identifier_type: email; count: 135; relationship: related-cluster
- account-indicator-set: case_study: 3; category: Threat actor persona email; identifier_type: email; count: 3; relationship: related-cluster
- account-indicator-set: case_study: 4; category: Threat actor persona email; identifier_type: email; count: 88; relationship: related-cluster
- ip: value: 111.197.183.74; relationship: explicitly-used; mapped_record: persona-kil-nam-kang

## Sources

- GitLab Threat Intelligence, [GitLab Threat Intelligence Team reveals North Korean tradecraft](https://about.gitlab.com/blog/gitlab-threat-intelligence-reveals-north-korean-tradecraft), 2026-02-19 — Case Study 1; assessed organization-chart figure; Case Studies 2-4; Appendix 2 IOC table. Explicitly names a Beijing cell manager and eight cell members in the organization-chart figure; publishes threat-actor-controlled, synthetic-persona, developer, mirror-identity, and persona account indicators. Private projects exposed financial records, performance reviews, identity-generation automation, private-repository mirroring, 21-persona operation, and a Moscow worker

*Data file: [`data/entities/infrastructure/infrastructure-gitlab-2026-account-indicator-set.json`](../../../data/entities/infrastructure/infrastructure-gitlab-2026-account-indicator-set.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
