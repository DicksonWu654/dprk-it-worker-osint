# Reviewable identity continuity across hiring and access stages

`divr6-ttp-reviewable-cross-stage-identity-continuity` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> First-party vendor guidance only; incident, allegation, adjudication, and independently measured effectiveness require separate evidence.

| | |
|---|---|
| TTPs | human-review, identity-continuity, pre-provisioning-review, risk-based-reverification, stage-linked-decision-record |
| lazarus.group profiles | ttp-ttp-access-and-data-risk, ttp-ttp-identity-continuity |
| Last verified | 2026-08-12 |

## Caveats

- A verification vendor's pass or fail covers the represented check. Legal identity, nationality, and a comprehensive background check require separate evidence.
- The cross-owner decision thread is a proposed identity-continuity control; detector and incident status are unvalidated.
- Keep identity-document data, biometric material, applicant addresses, and raw access telemetry out of the public record.
- Location supplies context; identity, nationality, sanctions status, physical control, employment legitimacy, and misconduct require corroboration.
- Location, time zone, VPN use, accent, appearance, and language require other evidence before rejection or attribution.
- The record scope excludes people, entities, accounts, images, identity documents, biometric material, templates, private data, and raw device, network, video, or screening signals.
- Re-verification should be tied to defined sensitive actions and risk, with notice, correction, appeal, and accessible alternatives.
- Use layered, explainable review with a lawful purpose, proportional retention, accessible alternatives, correction, and appeal; an anomaly or vendor decision is a review trigger rather than proof of fraud.
- Vendor guidance is retained as a defensive abstraction; incident, measured effectiveness, and DPRK-identification claims require independent evidence.

## Source-backed context

- Do not let each hiring or access stage create an unrelated identity result. Link the candidate's reviewed identity decision across application, interview, pre-Day-One provisioning, and later high-risk actions so that HR, IT, and security can determine whether the same authorized person remains in control. Require a human-reviewed gate before issuing credentials, and use risk-based re-verification for sensitive actions rather than indiscriminate continuous surveillance.

## Sources

- Proof, [North Korea's IT Worker Program: Why Onboarding and Access Security Must Evolve](https://www.proof.com/blog/beyond-the-perimeter-how-north-koreas-it-worker-program-underscores-the-need-to-future-proof-onboarding-and-access) — Key takeaways; Why traditional defenses fail against this threat; Building a defensible hiring and access security program; Stage 1: Resume submission through Stage 4: Ongoing access; Continuous identity for a continuous threat. Do not let each hiring or access stage create an unrelated identity result. Link the candidate's reviewed identity decision across application, interview, pre-Day-One provisioning, and later high-risk actions so that HR, IT, and security can determine whether the same authorized person remains in control. Require a human-reviewed gate before issuing credentials, and use risk-based re-verification for sensitive actions rather than indiscriminate continuous surveillance

*Data file: [`data/entities/ttp/divr6-ttp-reviewable-cross-stage-identity-continuity.json`](../../../data/entities/ttp/divr6-ttp-reviewable-cross-stage-identity-continuity.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
