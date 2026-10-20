# Protected repository rulesets and change constraints

`dder3-ttp-protected-repository-rulesets` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> This is analyst-applied defensive context derived from generic first-party product documentation; it describes controls. Incident attribution, actor finding, legal allegation, adjudication, and measured effectiveness require separate evidence.

| | |
|---|---|
| TTPs | change-control, force-push-restrictions, protected-branches, repository-rulesets, signed-commits |
| lazarus.group profiles | ttp-ttp-access-and-data-risk |
| Last verified | 2026-08-12 |

## Caveats

- Account, handle, repository, portfolio, commit, and image similarity identify evidence types; legal identity requires source-explicit linkage or authoritative corroboration.
- Keep fake-interview malware separate from fraudulent employment unless a source explicitly connects the same account or operator to both activities.
- Platform features, account state, geographic field, signing credential, and verification result are contextual signals; legal identity, nationality, physical location, employment legitimacy, and sole operator control require separate evidence.
- Preserve provider caveats and label first-party product descriptions as provider claims rather than independently measured efficacy.
- Signed commits prove possession of a signing credential; legal identity and physical location require separate evidence. Combine controls with least privilege, independent review, credential hygiene, and post-hire access monitoring.
- This is generic first-party product documentation applied as a layered defensive control for DPRK IT-worker insider risk; it describes a control approach and its intended risk, with incident and detection evidence requiring separate sources.
- This record's aggregate scope excludes people, personas, accounts, companies, repositories, packages, images, private data, and raw selectors.
- Use multiple behavior-based signals, independent human review, proportional access controls, and an appeal or correction path.

## Source-backed context

- GitHub rulesets can constrain pushes and branch or tag operations, require signed commits, and block force pushes for selected repository scopes.

## Sources

- GitHub Docs, [About rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) — About rulesets; branch and tag rulesets; signed-commit and force-push example; push rulesets for private or internal repositories and fork networks. GitHub rulesets can constrain pushes and branch or tag operations, require signed commits, and block force pushes for selected repository scopes

*Data file: [`data/entities/ttp/dder3-ttp-protected-repository-rulesets.json`](../../../data/entities/ttp/dder3-ttp-protected-repository-rulesets.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
