# Unit 42 low-cost synthetic identity pipeline and IDV bypass demonstration

`deep2-vendor-dv-f09` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Security-vendor research finding; legal identity and adjudication remain outside the finding.

| | |
|---|---|
| TTPs | ai-altered-profile-photo, fabricated-resume, forged-identity-document |
| Last verified | 2026-08-12 |

## Caveats

- The synthetic-candidate demonstration leaves whether the accounts were DPRK-operated unresolved.
- The identity-verification vendor is unnamed publicly in the article; the record carries the description only, with raw document and synthetic face material outside it.
- This was Unit 42's controlled red-team experiment; it records a simulated hiring scenario only, and any observed DPRK persona or successful hire requires separate evidence.

## Source-backed context

- Unit 42 created two fully synthetic job-candidate identities using commercial GenAI avatar and resume services at a reported total cost of US$8.20.
- The test accounts passed one external identity-verification provider's selfie and document checks using an expired genuine document and an AI-generated avatar, and were then used to apply for remote positions including government and defense roles.
- Unit 42 correlated the experiment to Wagemole tradecraft and emphasized inconsistencies among resume, identity document, deepfake presentation, and claimed location/time zone.

## Sources

- Palo Alto Networks Unit 42, [False Face: Unit 42 Demonstrates the Alarming Ease of Synthetic Identity Creation](https://unit42.paloaltonetworks.com/north-korean-synthetic-identity-creation), 2025-04-21 — Interviewing North Koreans; Creating a Synthetic Identity; Verifying the Synthetic Identity. Unit 42 created two fully synthetic job-candidate identities using commercial GenAI avatar and resume services at a reported total cost of US$8.20. The test accounts passed one external identity-verification provider's selfie and document checks using an expired genuine document and an AI-generated avatar, and were then used to apply for remote positions including government and defense roles. Unit 42 correlated the experiment to Wagemole tradecraft and emphasized inconsistencies among resume, identity document, deepfake presentation, and claimed location/time zone

*Data file: [`data/entities/ttp/deep2-vendor-dv-f09.json`](../../../data/entities/ttp/deep2-vendor-dv-f09.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
