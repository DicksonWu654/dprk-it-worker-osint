# Capture-path integrity evaluated separately from liveness

`divr6-ttp-capture-path-integrity` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> These are first-party provider observations and source-attributed investigations. The material is vendor guidance with generic controls, while incident, allegation, adjudication, court, identity, prevalence, and efficacy findings require separate sources.

| | |
|---|---|
| TTPs | auditable-decision, capture-path-integrity, human-review, injection-resistance, liveness-control-boundary, verification-bypass-observation |
| lazarus.group profiles | divr6-ttp-capture-path-integrity, ttp-ttp-deepfake-interview, ttp-ttp-identity-continuity |
| Last verified | 2026-08-12 |

## Caveats

- A failed or anomalous capture-path check calls for review; DPRK or fraud attribution requires corroborating evidence.
- Accessibility software, virtual-camera tools, remote-assistance workflows, older hardware, and browser restrictions can produce legitimate anomalies.
- Capture-path assurance is distinct from generic deepfake detection; it addresses capture integrity, while candidate identity and affiliation require separate evidence.
- Identity-document imagery, synthetic-image examples, biometric templates, candidate-level telemetry, and raw graph nodes stay out of publication and operational use.
- Keep applicant video, selfies, face templates, identity documents, and raw behavioral/device signals out of the public dataset.
- Location supplies context; identity, nationality, sanctions status, physical control, employment legitimacy, and misconduct require corroboration.
- The record scope excludes people, entities, accounts, images, identity documents, biometric material, templates, private data, and raw device, network, video, or screening signals.
- Identity or attribution requires more than a single face, image, document, VPN, location, device, network, profile, résumé, repository, contact, or behavior signal.
- Successful or failed verification is one bounded observation; legal identity, nationality, DPRK affiliation, worker continuity, present account control and product-wide performance require separate evidence.
- Use explainable multi-signal review, minimization, bounded retention, trained human adjudication, correction, appeal, accessibility accommodations, and applicable legal review.
- Use layered, explainable review with a lawful purpose, proportional retention, accessible alternatives, correction, and appeal; an anomaly or vendor decision is a review trigger rather than proof of fraud.
- Use proportional retention, consent, correction, appeal, and human review.
- Vendor guidance is retained as a defensive abstraction; incident, measured effectiveness, and DPRK-identification claims require independent evidence.

## Source-backed context

- Challenge-response liveness can still fail if synthetic or prerecorded video is injected as the camera input. For applicant authentication, treat camera-feed provenance and injection resistance as separate assurance questions from whether a subject can complete a prompt. Preserve an auditable decision record and route unresolved cases to trained human review rather than automatically rejecting a candidate.

## Sources

- Pindrop, [Extending GitLab’s Findings: What Hiring Telemetry from Pulse for Meetings Reveals](https://www.pindrop.com/article/hiring-telemetry-pulse-for-meetings-insights), 2026-02-25 — Opening comparison with GitLab; Pindrop Research: Fraud runs rampant in job applicant pools; Device telemetry; Geography & network characteristics; Synthetic identity construction; From one suspicious node to a cluster; Beyond deepfakes: What hiring telemetry actually shows. Pindrop reports at least two source-labeled suspected cases in which synthetic imagery passed document verification. Evidence boundary: Provider-reported observations from Pindrop's own pipeline. The article does not publish methodology sufficient to reproduce its labels, cohort sizes for every percentage, independent validation, named candidates, legal identities, or a labor-market prevalence estimate. Its 'confirmed fraud' and 'linked to North Korea' labels are source labels, not adjudications
- Proof, [The Attack That Breaks the Identity Check You Just Deployed](https://www.proof.com/blog/the-attack-that-breaks-the-identity-check-you-just-deployed), 2026-08-11 — Key takeaways; How biometric injection attacks work; Why hiring pipelines are increasingly targeted by injection attacks; How layered identity verification defends against biometric injection attacks. Challenge-response liveness can still fail if synthetic or prerecorded video is injected as the camera input. For applicant authentication, treat camera-feed provenance and injection resistance as separate assurance questions from whether a subject can complete a prompt. Preserve an auditable decision record and route unresolved cases to trained human review rather than automatically rejecting a candidate

*Data file: [`data/entities/ttp/divr6-ttp-capture-path-integrity.json`](../../../data/entities/ttp/divr6-ttp-capture-path-integrity.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
