# Tenant-scoped ATS decisioning with employer-specific backtesting

`dicr14-ttp-tenant-scoped-ats-decisioning` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> First-party provider observations and source-attributed investigations; first-party vendor guidance describes generic ATS and candidate-fraud controls. DPRK incident, legal finding, applicant determination, validated detection result, court finding, identity determination, prevalence estimate, and product-efficacy status require separate evidence.

| | |
|---|---|
| TTPs | anti-bias-monitoring, bounded-retention, comparison-cohort, correction-and-appeal, employer-specific-backtesting, employer-specific-shadow-mode-backtesting, human-review, minimized-cross-tenant-corroboration, tenant-scoped-ats-decisioning |
| lazarus.group profiles | dicr14-ttp-tenant-scoped-ats-decisioning, ttp-ttp-identity-continuity, ttp-ttp-recruiting |
| Last verified | 2026-08-12 |

## Caveats

- Automatic rejection from a consortium or vendor score
- Behavioral-biometric profiling
- Cross-employer applicant blacklists
- Cross-employer intelligence is minimized and review-only; portable blacklists remain outside the dataset.
- Tenant isolation, per-employer validation, and separation of processors from decision owners are required; portable adverse identity labels stay out of the system.
- Identity-document imagery, synthetic-image examples, biometric templates, candidate-level telemetry, and raw graph nodes stay out of publication and operational use.
- People, applicants, workers, employers, accounts, private identifiers, raw cross-tenant data, biometric material, identity documents, images, recordings, device fingerprints, network selectors, and exact detection rules stay out of the record.
- Face recognition, face search, accent, language, nationality, geography, VPN use, device type and virtual-camera use require corroboration before adverse action.
- Face recognition or face-search
- Keep every adverse decision employer-specific and reversible: cross-employer intelligence may create only a minimized, reason-coded review prompt; a portable applicant or worker blacklist is outside the workflow.
- Measure rule performance per employer and disable or revise rules whose false-positive or disparate-impact behavior is unacceptable.
- Nationality, accent, language, or geography inference
- A single device, network, location, audiovisual, document, or behavioral anomaly requires corroboration before it can establish fraud or DPRK affiliation.
- Identity or attribution requires more than a single face, image, document, VPN, location, device, network, profile, résumé, repository, contact, or behavior signal.
- Pindrop explicitly says its VPN prevalence had not yet been compared with a non-fraudulent cohort and that VPN use was not used alone for escalation.
- Preserve trained human review, documented reasons, meaningful correction and appeal, accessible alternatives, anti-bias testing, and bounded retention before or after any adverse action.
- Provide notice when lawful, meaningful correction and appeal, accessible alternative verification, documented reasons, and time-bounded retention.
- Raw device-fingerprint sharing
- Require at least one independently corroborating inconsistency and trained human review before adverse action.
- Require multiple independently explainable signals, trained human review, documented reasons, lawful purpose, proportionality, accessibility alternatives, correction, appeal, and bounded retention.
- Retain denominators, cohort definitions, error analysis, and local validation before using any hiring signal operationally.
- Shared devices, corporate networks, universities, staffing firms, accessibility tools, privacy services, travel, household reuse, and common infrastructure can create legitimate correlations.
- Successful or failed verification is one bounded observation; legal identity, nationality, DPRK affiliation, worker continuity, present account control and product-wide performance require separate evidence.
- This is generic vendor guidance abstracted as a defensive architecture control; reported DPRK incident, independently validated efficacy and service-based DPRK affiliation require separate evidence.
- This package retains only public context; private identifiers, faces, voiceprints, biometrics, documents, accounts, addresses, payments, and raw device/network signals stay excluded.
- Treat vendor claims as vendor claims; validated detection rate or product-based DPRK affiliation requires independent evidence.
- Use explainable multi-signal review, minimization, bounded retention, trained human adjudication, correction, appeal, accessibility accommodations, and applicable legal review.
- Voiceprint identification

## Source-backed context

- For a multi-employer ATS, onboarding, identity, or fraud service, separate the reusable signal layer from the adverse hiring decision. Keep thresholds, rules, case outcomes, and reviewer actions scoped to the employer tenant; test proposed rules in shadow mode against that tenant's labeled outcomes before enforcement; and use cross-customer intelligence only as minimized or anonymized corroboration that triggers review. The provider should not create a portable applicant blacklist or make the final employment decision.

## Sources

- SEON, [Applicant Tracking System Fraud: How ATS Platforms Can Stop It at Scale](https://seon.io/resources/applicant-tracking-system-fraud-how-ats-platforms-can-stop-it-at-scale), 2026-01-15 — Applicant Tracking System Fraud Trends; ATS Fraud Prevention Best Practices; How SEON Protects ATS Platforms From Fraud. For a multi-employer ATS, onboarding, identity, or fraud service, separate the reusable signal layer from the adverse hiring decision. Keep thresholds, rules, case outcomes, and reviewer actions scoped to the employer tenant; test proposed rules in shadow mode against that tenant's labeled outcomes before enforcement; and use cross-customer intelligence only as minimized or anonymized corroboration that triggers review. The provider should not create a portable applicant blacklist or make the final employment decision. Source boundary: The page is vendor guidance and product positioning, not a public DPRK case study. No customer, applicant, detection-rate methodology, error rate, or independent validation is disclosed. The page discusses behavioral biometrics and device/network signals that are intentionally excluded from the retained control abstraction. Publication safeguard: Publish only tenant isolation, customer-specific validation, and minimized cross-tenant corroboration. Do not publish or recommend behavioral biometrics, raw fingerprints, portable applicant watchlists, nationality inference, automatic rejection, or exact detection rules
- SEON, [What is Fake Candidate Fraud? How to Detect It](https://seon.io/resources/fake-candidate-fraud-detection), 2025-06-30 — How to Detect Fake Candidates; How to Prevent Fake Candidate Fraud; Why is Fake Candidate Fraud Increasing?. For a multi-employer ATS, onboarding, identity, or fraud service, separate the reusable signal layer from the adverse hiring decision. Keep thresholds, rules, case outcomes, and reviewer actions scoped to the employer tenant; test proposed rules in shadow mode against that tenant's labeled outcomes before enforcement; and use cross-customer intelligence only as minimized or anonymized corroboration that triggers review. The provider should not create a portable applicant blacklist or make the final employment decision. Source boundary: The source is generic vendor guidance and supplies no first-party DPRK incident. Several listed checks are and therefore do not create a new control finding. Raw communications, device, network, behavioral, facial, and document evidence are excluded from this package. Publication safeguard: Use only to support the no-single-indicator rule. Do not reproduce indicator lists as a rejection checklist or retain applicant-level signals
- Pindrop, [Extending GitLab’s Findings: What Hiring Telemetry from Pulse for Meetings Reveals](https://www.pindrop.com/article/hiring-telemetry-pulse-for-meetings-insights), 2026-02-25 — Opening comparison with GitLab; Pindrop Research: Fraud runs rampant in job applicant pools; Device telemetry; Geography & network characteristics; Synthetic identity construction; From one suspicious node to a cluster; Beyond deepfakes: What hiring telemetry actually shows. Pindrop says it had not yet compared VPN prevalence in its confirmed-fraud cases with a non-fraudulent interview cohort and therefore did not automatically escalate based on VPN use alone. This provides concrete first-party provenance for the existing requirement to validate signals against an employer-specific legitimate cohort and preserve denominators before operational use. Evidence boundary: Provider-reported observations from Pindrop's own pipeline. The article does not publish methodology sufficient to reproduce its labels, cohort sizes for every percentage, independent validation, named candidates, legal identities, or a labor-market prevalence estimate. Its 'confirmed fraud' and 'linked to North Korea' labels are source labels, not adjudications

*Data file: [`data/entities/ttp/dicr14-ttp-tenant-scoped-ats-decisioning.json`](../../../data/entities/ttp/dicr14-ttp-tenant-scoped-ats-decisioning.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
