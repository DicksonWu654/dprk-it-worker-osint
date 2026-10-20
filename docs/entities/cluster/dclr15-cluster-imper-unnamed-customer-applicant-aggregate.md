# imper.ai unnamed-customer applicant screening aggregate

`dclr15-cluster-imper-unnamed-customer-applicant-aggregate` · Cluster or incident · Attributed by security researchers or press · confidence medium · **needs corroboration**

> imper.ai's vendor assessment from pre-employment verification for one unnamed enterprise customer, recovered from an exact archive of the first-party URL; the source expressly stops short of definitive attribution

| | |
|---|---|
| TTPs | correlated-pre-employment-verification, human-corroboration-before-attribution, multi-signal-device-network-identity-review |
| Last verified | 2026-08-12 |

## Caveats

- Appearance, accent, nationality, ethnicity, language, geography, remote-work preference, camera behavior, VPN use, and any single device, network, phone, or account-age signal require corroboration before attribution.
- Applicant-stage reporting covers the application stage; a successful hire, system access, post-hire conduct, or harm requires an express statement from the cited source.
- Four flags are review signals; confirmed DPRK-national or worker counts require separate evidence.
- The customer and candidates remain unidentified.
- Network, software, phone, email-age, and latency signals are individual context indicators; the finding requires a combined human-reviewed record.
- This record covers aggregate context; applicant, worker, identity-theft victim, current account, private customer, and anonymized legal-entity identity require separate evidence.

## Source-backed context

- imper.ai assessed four of 600 screened candidates in Q1 2026 as exhibiting a correlated set of indicators consistent with DPRK IT-worker tradecraft.
- Stage: pre_employment_verification.
- Reported outcome: Four candidates flagged; no hire or access reported.
- Aggregate only: the vendor reports four flagged candidates among 600 screened in Q1 2026; neither the customer nor any candidate is identified.

## Sources

- imper.ai, [Detecting DPRK IT Workers: High-Confidence Network & Identity Indicators (Q1 2026)](https://imper.ai/dprk-it-worker-detection-hiring-pipeline), 2026-04-13 — TL;DR / Executive Summary; opening paragraph; Observed TTPs; Attribution confidence. Provenance: imper.ai reports observations made during its own pre-employment verification work for an unnamed global enterprise. The live site blocked unauthenticated retrieval during this pass; the exact first-party page was recovered from an Internet Archive capture dated 2026-05-11. imper.ai says it screened 600 candidates in Q1 2026 and identified four with overlapping device, network, remote-access, location-consistency, VoIP, and low-history account signals that it assessed as consistent with published DPRK IT-worker tradecraft. It rates attribution moderate-to-high and expressly does not claim definitive attribution without more corroboration. Normalized boundary: imper.ai assessed four of 600 screened candidates in Q1 2026 as exhibiting a correlated set of indicators consistent with DPRK IT-worker tradecraft. Attribution boundary: Vendor assessment of four applicants for one unnamed customer; no government finding, legal identity, hire, or post-hire access is established. Publication boundary: Retain only the aggregate 600-screened/four-flagged applicant finding and the source's own attribution caveat. Do not publish candidate selectors or treat VPN, latency, remote-access software, VoIP, or account age alone as determinative

*Data file: [`data/entities/cluster/dclr15-cluster-imper-unnamed-customer-applicant-aggregate.json`](../../../data/entities/cluster/dclr15-cluster-imper-unnamed-customer-applicant-aggregate.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
