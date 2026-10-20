# Risk-based developer-account verification

`dder3-ttp-risk-based-developer-account-verification` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> This is analyst-applied defensive context derived from generic first-party product documentation; it describes controls. Incident attribution, actor finding, legal allegation, adjudication, and measured effectiveness require separate evidence.

| | |
|---|---|
| TTPs | account-creation-friction, account-integrity, human-review, identity-continuity, risk-based-verification |
| lazarus.group profiles | ttp-ttp-identity-continuity |
| Last verified | 2026-08-12 |

## Caveats

- Account, handle, repository, portfolio, commit, and image similarity identify evidence types; legal identity requires source-explicit linkage or authoritative corroboration.
- Verification artifacts stay out of the dataset. Identity lending and facilitators can defeat verification; employment legitimacy requires broader evidence.
- Keep fake-interview malware separate from fraudulent employment unless a source explicitly connects the same account or operator to both activities.
- Platform features, account state, geographic field, signing credential, and verification result are contextual signals; legal identity, nationality, physical location, employment legitimacy, and sole operator control require separate evidence.
- Preserve provider caveats and label first-party product descriptions as provider claims rather than independently measured efficacy.
- This is generic first-party product documentation applied as a layered defensive control for DPRK IT-worker insider risk; it describes a control approach and its intended risk, with incident and detection evidence requiring separate sources.
- This record's aggregate scope excludes people, personas, accounts, companies, repositories, packages, images, private data, and raw selectors.
- Use multiple behavior-based signals, independent human review, proportional access controls, and an appeal or correction path.

## Source-backed context

- GitLab describes email verification for all users and additional phone or credit-card verification for higher-risk account creation.

## Sources

- GitLab Docs, [Identity verification](https://docs.gitlab.com/security/identity_verification) — Account verification stages; risk-score-dependent email, phone, and credit-card verification; phone-number verification limitations. GitLab describes email verification for all users and additional phone or credit-card verification for higher-risk account creation

*Data file: [`data/entities/ttp/dder3-ttp-risk-based-developer-account-verification.json`](../../../data/entities/ttp/dder3-ttp-risk-based-developer-account-verification.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
