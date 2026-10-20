# Pre-contract screening audit, renewal, and decision trail

`dwpr5-ttp-screening-audit-renewal-decision-trail` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Public product and help-center documentation abstracted into governance guidance; DPRK-specific incident, legal obligation, sanctions determination and provider-efficacy validation require separate sources.

| | |
|---|---|
| TTPs | freelance-platform, payment-platform |
| lazarus.group profiles | dfef-ttp-lifecycle-identity-continuity, dfp-ttp-payroll-beneficiary-screening-boundary |
| Last verified | 2026-08-12 |

## Caveats

- A sanctions-screen result calls for expert review; the cited result supplies context for sanctions screening rather than DPRK attribution.
- Provider documentation describes pre-activation status, audit trails, expiry monitoring, screening history, discrepancy review, and sanctions review; effectiveness requires independent measurement beyond the documentation.
- Identity documents, selfies, liveness recordings, addresses, phone numbers, emails, tax records, payment details, credentials, device identifiers, IP addresses, and raw screening reports stay unreproduced.
- Platform-wide fraud metrics describe platform-wide activity; DPRK estimates require separate measurement.
- Keep fake-interview malware separate from fraudulent employment unless a first-party source establishes the overlap.
- Keep historical North Korea platform access distinct from a DPRK IT-worker attribution.
- Face, accent, language, nationality, travel, time zone, VPN use, location mismatch, and payment-method change require corroboration before an adverse conclusion.
- Research access stayed outside private APIs; implementation endpoints or thresholds remain unpublished.
- Payment-beneficiary review remains private and compliance-led; sensitive financial selectors are excluded from the public dataset.
- A persona is a reported platform identity, while legal identity and platform verification remain separate questions.
- Platform controls, restrictions, and verification outcomes are review inputs; DPRK affiliation, legal identity, nationality, work location, and sole-operator control require corroborating evidence.
- Publish provider-level controls and limitations; private account-level evidence remains outside the record.
- Respect country-specific limits, consent, correction, and appeal rights.
- Retain only decisions and minimal evidence references; raw screening data stays out of the record.
- Retain only minimal control decisions and provenance; people, personas, accounts, entities, private profiles, payment identifiers, addresses, credentials, images, and raw screening artifacts stay outside the record.
- Sanctions, employment, criminal, and identity checks have jurisdictional and methodological limits; document exactly what was checked and when.
- Use multiple explainable signals, proportional human review, correction, and appeal; face, accent, language, nationality, travel, time zone, VPN use, location mismatch, or payment change alone are insufficient for adverse decisions.
- Use multiple independently explainable signals, human review, proportionality, correction, and appeal.

## Source-backed context

- Deel and Remote document workflows for confirming identity or screening status before contract activation or onboarding, reviewing sanctions and employment checks, retaining screening history or audit trails, and tracking pending or expiring verification. The useful abstraction is an auditable decision record with human review and periodic reassessment rather than a one-time badge.

## Sources

- Deel, [Screenings](https://developer.deel.com/api/platform/screenings), 2026-01-01 — Automated Global Onboarding; Contractor Screening; Multi-Country Compliance Program. Deel's public documentation describes confirming KYC before contract activation, screening contractor entities against sanctions and watchlists, retaining an audit trail, and monitoring verification status and expiration. This research accessed only public documentation and did not call an API. Publish workflow concepts, never endpoints, tokens, worker data, thresholds, or screening results. Deel and Remote document workflows for confirming identity or screening status before contract activation or onboarding, reviewing sanctions and employment checks, retaining screening history or audit trails, and tracking pending or expiring verification. The useful abstraction is an auditable decision record with human review and periodic reassessment rather than a one-time badge
- Remote, [What are Remote's Background Check Services?](https://support.remote.com/hc/en-us/articles/34566185236237-What-are-Remote-s-Background-Check-Services), 2026-07-09 — How It Works; Background Check History Table; Do you offer identity verification and right-to-work checks?; What happens if a background check reveals concerning information?. Remote documents pre-onboarding education, employment, sanctions, and jurisdiction-dependent criminal checks; standard EOR identity and right-to-work checks; a screening history view; customer review of discrepancies; and provider review of sanctions or criminal-record concerns for EOR and COR candidates. Emphasize jurisdictional limits, candidate consent, and human decision-making. Avoid contact details, reports, or private findings. Deel and Remote document workflows for confirming identity or screening status before contract activation or onboarding, reviewing sanctions and employment checks, retaining screening history or audit trails, and tracking pending or expiring verification. The useful abstraction is an auditable decision record with human review and periodic reassessment rather than a one-time badge

*Data file: [`data/entities/ttp/dwpr5-ttp-screening-audit-renewal-decision-trail.json`](../../../data/entities/ttp/dwpr5-ttp-screening-audit-renewal-decision-trail.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
