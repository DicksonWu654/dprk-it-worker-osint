# Bounded provider reporting on fraudulent engineering candidates

`ddhir10-ttp-bounded-provider-candidate-corpus` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> First-party vendor and employer investigation. Fraud classification and suspected DPRK inclusion are source-reported; DPRK subset count, legal identity, adjudication, victim profile, and prevalence remain unreported.

| | |
|---|---|
| TTPs | aggregate-fraud-review, anti-prevalence-inference, source-scoped-attribution |
| lazarus.group profiles | ttp-ttp-recruiting |
| Last verified | 2026-08-12 |

## Caveats

- Candidate-level evidence is intentionally excluded. Use multiple explainable signals, trained human review, correction and appeal.
- Applicant profiles, resumes, document metadata, contact details, identity documents, biometrics, images, private repositories, copied code, credentials, tokens, device or network telemetry, payment accounts, beneficiary names, wallets, and addresses stay unpublished and unprobed.
- Socket's 80 confirmed fraudulent candidates are a candidate-fraud count; DPRK-worker status requires separate evidence.
- Appearance, accent, language, nationality, ethnicity, location, time zone, VPN use, camera behavior, repository absence, profile age, resume-builder metadata, payment method, and any one automated signal require corroboration before classification.
- Keep fake-interview malware separate from fraudulent employment unless an exact source explicitly establishes the overlap.
- Persona, platform account, repository, portfolio, and payment identity are labels rather than a legal identity.
- Publish defensive workflow at an abstract level. Exact indicators meet the public, attributable, necessary, non-personal and safe threshold only when each condition is documented; the cited indicators are withheld.
- Socket's 80-case corpus is non-DPRK-specific; the article discloses no count of cases involving suspected DPRK operators.
- The source gives 80 fraudulent candidates; DPRK-linked status across the group and a DPRK subset count require separate evidence.
- Treat vendor product and efficacy claims as claims; use source-described observations and product-neutral controls as the validation basis.
- Use multiple independently explainable signals, trained human review, documented reasons, proportionality, correction and appeal, accessible verification alternatives, and bounded retention.
- Use Socket's exact scope and attribution boundary. The 80-case count describes the source corpus; DPRK prevalence, candidate-level evidence, nationality, victim, and rejected-applicant identities require separate sources, and this dataset keeps those inferences out.

## Source-backed context

- Socket says its talent and threat-research teams analyzed 80 resumes and profiles that it ultimately classified as fraudulent during a two-month period. Socket describes them as part of a coordinated campaign that included suspected North Korean operators, but it does not state that every candidate was DPRK-linked or publish a DPRK subset count.

## Sources

- Socket, [Identifying and Preventing Fraudulent Engineering Candidates: An Investigation into 80 Confirmed Cases](https://socket.dev/blog/fraudulent-engineering-candidates-investigation), 2025-09-17 — Opening paragraphs: 80 confirmed fraudulent candidates identified in the prior two months; coordinated campaign includes suspected North Korean operators; Methodology; What We Observed Across 80 Resumes; Scraped Vacancies and AI-Assisted Resume Generation; Identity Signals; Outlook and Recommendations. Do not report 80 DPRK candidates. Socket confirms 80 fraudulent candidates and separately says the coordinated campaign included suspected North Korean operators without publishing a DPRK subset count. Candidate names, contact details, resumes, profile links, metadata values, images and raw risk evidence are intentionally omitted. Evidence class: vendor-described review of its own fraudulent-candidate corpus with bounded suspected-DPRK attribution

*Data file: [`data/entities/ttp/ddhir10-ttp-bounded-provider-candidate-corpus.json`](../../../data/entities/ttp/ddhir10-ttp-bounded-provider-candidate-corpus.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
