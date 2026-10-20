# Socure first-party suspected-applicant disclosure

`dfpr12-ttp-socure-suspected-applicant-disclosure` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> First-party Socure account of an applicant encounter. Socure describes the case as likely tied to a North Korean employment-fraud scam, a suspected probabilistic assessment rather than government attribution, adjudication, confirmed legal identity, or proof that the applicant was hired or caused harm.

| | |
|---|---|
| TTPs | no-hire-no-post-hire-harm-boundary, pre-hire-identity-review, suspected-applicant-disclosure, suspected-not-confirmed-attribution-boundary, verification-noncompletion-escalation |
| lazarus.group profiles | dcsr9-ttp-electric-utility-suspected-applicant-activity, ttp-ttp-identity-continuity, ttp-ttp-recruiting |
| Last verified | 2026-08-12 |

## Caveats

- Keep the source label as a label rather than a legal identity or standalone persona; applicant account and private selector details stay outside the record.
- DPRK affiliation requires more than nationality, accent, language, appearance, disability, geography, remote-work status, payment method, camera behavior, or any single inconsistency.
- Merge the Socure URLs and first-party provenance into the existing context record, preserve the suspected/no-hire boundary, and publish only behavior-level controls. The source label remains contextual; legal identity and standalone persona profile require separate evidence.
- This record retains no person, persona, account, organization, image, identity document, biometric artifact, credential, financial selector, device or network selector or private applicant data.
- Sources report an attempted scheme; completed impact remains unreported, including hire, payroll entry, corporate access, data loss, theft, extortion, sabotage, and other completed harm.
- Suspected or vendor-assessed linkage is an unconfirmed attribution; legal identity, adjudication, and harm require separate evidence.
- Socure phrases the DPRK linkage as 'likely tied'; government attribution, adjudicated finding, legal identity, and public technical attribution package status remain unlocated.
- The first-party encounter, described screening steps, and no-completion/no-follow-up outcome are Socure's own statements.
- Verification noncompletion, interview nonattendance, application inconsistency, geography and other single signals require corroboration before supporting DPRK affiliation or fraud.

## Source-backed context

- Socure says its own recruiting and fraud teams found several fabricated applicants. It describes one applicant that did not complete requested document and live-selfie verification or attend a follow-up interview, and Socure assessed the case as likely tied to a North Korean employment-fraud scam. The sources do not report that the applicant was hired, entered payroll, received corporate access, or caused post-hire harm.

## Sources

- Socure, [Hiring the Enemy: When Job Scams Target Companies and Consumers Alike](https://www.socure.com/blog/hiring-the-enemy-employment-fraud), 2025-05-29 — Opening through 'Socure vs. Fake Job Applicants'; applicant-pool measurements; applicant comparison; follow-up verification; 'What Employers Should Do'. Socure says its recruiters found several fabricated applicants. It describes one applicant that it assessed as likely tied to a North Korean employment-fraud scam; the applicant did not complete requested document and live-selfie verification or attend the follow-up interview. Provenance: The visible page and JSON-LD both provide the 2025-05-29 publication date; JSON-LD provides the 2025-10-16 modification date. The page is the claim-bearing first-party source. A Fortune article linked by Socure is corroborating reporting, not the basis for Socure's own observations
- Socure, [Socure Launches Workforce Verification Solution to Combat Surge in Imposter Workers and Hiring Fraud](https://www.socure.com/news-and-press/workforce-verification-solution-launch), 2025-07-16 — Dateline and opening; integration and risk-monitoring paragraphs; Rivka Gewirtz Little quotation; DPRK context paragraph. Socure says its solution integrates with HR platforms, job boards, payroll systems, and applicant-tracking systems. It describes identity-risk review at application and ongoing assessment through recruiting, hiring, and onboarding, and it restates the probabilistic assessment of the same applicant encounter. Provenance: The release has a visible July 16, 2025 dateline and embeds the complete claim-bearing text in first-party page data

*Data file: [`data/entities/ttp/dfpr12-ttp-socure-suspected-applicant-disclosure.json`](../../../data/entities/ttp/dfpr12-ttp-socure-suspected-applicant-disclosure.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
