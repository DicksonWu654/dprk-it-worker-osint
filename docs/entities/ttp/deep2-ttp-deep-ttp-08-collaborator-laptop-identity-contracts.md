# Collaborator contracts can bundle laptop access, identity use, interview/fronting, and freelance-platform operation

`deep2-ttp-deep-ttp-08-collaborator-laptop-identity-contracts` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> Defensive synthesis of cited public sources; the technique mapping supplies context rather than an identity attribution.

| | |
|---|---|
| TTPs | borrowed-identity, foreign-based-facilitator, laptop-farm, proxy-interviewee |
| lazarus.group profiles | front-company-710tech-li, nisos-june-2025-laptop-farm |
| Last verified | 2026-08-12 |

## Caveats

- False-positive caution: IT support, labs, developers, and managed service providers legitimately use RMM/KVM. Maintain allowlists and role-based baselines.
- False-positive caution: People move, use mailrooms, or need accessibility/household assistance. Address mismatch is a clarification signal; clarification comes before any rejection decision.
- Kudelski's unseen .bat-file tests were assessed only at low confidence; attribution to a specific payload requires further evidence.

## Source-backed context

- Kudelski reports contracts offered to collaborators to operate laptop farms or provide laptop and identity access. Following one contract, actors used collaborator identity/machines for mentoring-platform sessions and freelance applications. The same article reports external collaborators acting as interviewers. This materially links identity lending, endpoint custody, and interview assistance in one facilitation agreement.

## Sources

- Nisos, [People, Process, Personas: Nisos Exposes the Human Risk in DPRK Employment Fraud Schemes](https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/dprk-employment-fraud-operation.pdf), 2026-06-16 — PiKVM and native interview workflow. Nisos documents PiKVM and native-fronted interview workflow in a controlled investigation
- Kudelski Security Research Center, [How DPRK’s Contagious Interview Campaign Targets Developers](https://kudelskisecurity.com/research/how-dprks-contagious-interview-campaign-targets-developers), 2026-06-30 — Fake interview and collaborator sections. Kudelski reports collaborator agreements covering laptop or identity access and interview fronting
- Nisos, [From Red Flags to Laptop Farms: How We Exposed a DPRK IT Worker Fraud Operation from the Inside](https://nisos.com/blog/dprk-it-worker-fraud-laptop-farm), 2026-03-20 — Instrumented laptop investigation. Nisos documents an instrumented employer-laptop investigation and remote-access setup

*Data file: [`data/entities/ttp/deep2-ttp-deep-ttp-08-collaborator-laptop-identity-contracts.json`](../../../data/entities/ttp/deep2-ttp-deep-ttp-08-collaborator-laptop-identity-contracts.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
