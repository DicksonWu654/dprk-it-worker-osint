# No-detected-loss outcome as an incident taxonomy guard

`dphr5-ttp-no-detected-loss-outcome-taxonomy` · Tactic, technique or procedure · Reported by an affected organization · confidence medium · **needs corroboration**

> Source-qualified suspected-worker case with a public summary showing no detected loss; unobserved activity is beyond the summary.

| | |
|---|---|
| TTPs | exfiltration-review, outcome-classification, persistence-review, rapid-containment, residual-access-review |
| Last verified | 2026-08-12 |

## Caveats

- The identity or sanctions concern remains despite undetected data loss.
- The record describes reported conduct by specific fraudulent workers; theft, extortion, espionage, persistence, and sabotage remain case-specific.
- Evidence class: first-party negative forensic outcome.
- Fraudulent employment, post-hire insider abuse, fake-interview malware, and external intrusion remain separate analytic tracks unless a source expressly establishes same-case overlap.
- Negative findings are bounded by each investigation's visibility and public summary.
- The record retains bounded source context; people, personas, accounts, entities, victim organizations, raw data, sensitive selectors, images, wallets, payment identifiers, and private repository content stay outside it.

## Source-backed context

- LevelBlue reports a suspected-worker case terminated rapidly after anomalous activity with no evidence of exfiltration, persistence or residual access. Existing Sygnia and KnowBe4 first-party cases in the corpus likewise report no confirmed exfiltration or data loss in their reviewed incidents.
- Track access, attempted transfer, confirmed loss, persistence, residual access, and no detected loss as distinct outcomes; continue evidence preservation and proportionate review even when no loss is detected.

## Sources

- LevelBlue SpiderLabs, [Live Cyber Lab: How We Detected a Suspected North Korean IT Worker](https://go.levelblue.com/how-levelblue-detected-a-suspected-north-korean-remote-it-worker-in-10-days), 2026-05-07 — Event summary and investigation outcome. LevelBlue says a suspected worker passed checks and onboarding but was terminated within one business day after anomalous activity prompted investigation. The company reported no evidence of exfiltration, persistence or residual access. LevelBlue reports a suspected-worker case terminated rapidly after anomalous activity with no evidence of exfiltration, persistence or residual access. Existing Sygnia and KnowBe4 first-party cases in the corpus likewise report no confirmed exfiltration or data loss in their reviewed incidents

*Data file: [`data/entities/ttp/dphr5-ttp-no-detected-loss-outcome-taxonomy.json`](../../../data/entities/ttp/dphr5-ttp-no-detected-loss-outcome-taxonomy.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
