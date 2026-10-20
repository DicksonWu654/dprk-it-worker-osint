# Organization audit-log review for developer access continuity

`dder3-ttp-organization-audit-log-review` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> This is analyst-applied defensive context derived from generic first-party product documentation; it describes controls. Incident attribution, actor finding, legal allegation, adjudication, and measured effectiveness require separate evidence.

| | |
|---|---|
| TTPs | audit-logging, behavior-based-review, identity-continuity, post-hire-monitoring, repository-access-review |
| lazarus.group profiles | ttp-ttp-access-and-data-risk, ttp-ttp-identity-continuity |
| Last verified | 2026-08-12 |

## Caveats

- Account, handle, repository, portfolio, commit, and image similarity identify evidence types; legal identity requires source-explicit linkage or authoritative corroboration.
- Keep fake-interview malware separate from fraudulent employment unless a source explicitly connects the same account or operator to both activities.
- Platform features, account state, geographic field, signing credential, and verification result are contextual signals; legal identity, nationality, physical location, employment legitimacy, and sole operator control require separate evidence.
- Preserve provider caveats and label first-party product descriptions as provider claims rather than independently measured efficacy.
- This is generic first-party product documentation applied as a layered defensive control for DPRK IT-worker insider risk; it describes a control approach and its intended risk, with incident and detection evidence requiring separate sources.
- This record's aggregate scope excludes people, personas, accounts, companies, repositories, packages, images, private data, and raw selectors.
- Use multiple behavior-based signals, independent human review, proportional access controls, and an appeal or correction path.
- Use temporal, repository, device, identity, and authorization context together; nationality or DPRK assessment requires multi-signal source review.

## Source-backed context

- GitHub organization audit logs expose who acted, the affected repository, action, country, and time, and permit access-operation filtering.

## Sources

- GitHub Docs, [Reviewing the audit log for your organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization) — Opening description; audit-entry fields; operation:access search example. GitHub organization audit logs expose who acted, the affected repository, action, country, and time, and permit access-operation filtering

*Data file: [`data/entities/ttp/dder3-ttp-organization-audit-log-review.json`](../../../data/entities/ttp/dder3-ttp-organization-audit-log-review.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
