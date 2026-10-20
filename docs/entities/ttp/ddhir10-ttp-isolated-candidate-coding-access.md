# Isolated candidate coding access and supply-chain trust boundaries

`ddhir10-ttp-isolated-candidate-coding-access` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> First-party vendor and employer investigation. Fraud classification and suspected DPRK inclusion are source-reported; DPRK subset count, legal identity, adjudication, victim profile, and prevalence remain unreported.

| | |
|---|---|
| TTPs | automatic-script-review, ephemeral-assessment-environments, restricted-build-egress, temporary-least-privilege-credentials, trusted-promotion-workflow |
| lazarus.group profiles | ttp-ttp-access-and-data-risk |
| Last verified | 2026-08-12 |

## Caveats

- Candidate-level evidence is intentionally excluded. Use multiple explainable signals, trained human review, correction and appeal.
- Applicant profiles, resumes, document metadata, contact details, identity documents, biometrics, images, private repositories, copied code, credentials, tokens, device or network telemetry, payment accounts, beneficiary names, wallets, and addresses stay unpublished and unprobed.
- Socket's 80 confirmed fraudulent candidates are a candidate-fraud count; DPRK-worker status requires separate evidence.
- Appearance, accent, language, nationality, ethnicity, location, time zone, VPN use, camera behavior, repository absence, profile age, resume-builder metadata, payment method, and any one automated signal require corroboration before classification.
- Keep fake-interview malware separate from fraudulent employment unless an exact source explicitly establishes the overlap.
- Persona, platform account, repository, portfolio, and payment identity are labels rather than a legal identity.
- Present this as a general secure-development control informed by Socket's hiring investigation; candidate and package maliciousness, DPRK linkage, and raw package, repository, dependency, credential, network, device or applicant selectors remain outside the publication.
- Publish defensive workflow at an abstract level. Exact indicators meet the public, attributable, necessary, non-personal and safe threshold only when each condition is documented; the cited indicators are withheld.
- Socket's 80-case corpus is non-DPRK-specific; the article discloses no count of cases involving suspected DPRK operators.
- The source gives 80 fraudulent candidates; DPRK-linked status across the group and a DPRK subset count require separate evidence.
- This product-neutral control remains review-only here; any later promotion should be editorially deduplicated from existing isolated-code controls and separated from vendor efficacy or candidate-attribution claims.
- Treat vendor product and efficacy claims as claims; use source-described observations and product-neutral controls as the validation basis.
- Use multiple independently explainable signals, trained human review, documented reasons, proportionality, correction and appeal, accessible verification alternatives, and bounded retention.

## Source-backed context

- Socket recommends running candidate trials with least privilege through containerized sandboxes, ephemeral repositories, temporary credentials and read-only access; reviewing scripts that execute automatically, including package lifecycle and CI jobs; restricting build egress; and monitoring dependency changes before candidate or contractor code can affect trusted repositories or production workflows.

## Sources

- Socket, [Identifying and Preventing Fraudulent Engineering Candidates: An Investigation into 80 Confirmed Cases](https://socket.dev/blog/fraudulent-engineering-candidates-investigation), 2025-09-17 — Opening paragraphs: 80 confirmed fraudulent candidates identified in the prior two months; coordinated campaign includes suspected North Korean operators; Methodology; What We Observed Across 80 Resumes; Scraped Vacancies and AI-Assisted Resume Generation; Identity Signals; Outlook and Recommendations. Do not report 80 DPRK candidates. Socket confirms 80 fraudulent candidates and separately says the coordinated campaign included suspected North Korean operators without publishing a DPRK subset count. Candidate names, contact details, resumes, profile links, metadata values, images and raw risk evidence are intentionally omitted. Evidence class: vendor-described review of its own fraudulent-candidate corpus with bounded suspected-DPRK attribution

*Data file: [`data/entities/ttp/ddhir10-ttp-isolated-candidate-coding-access.json`](../../../data/entities/ttp/ddhir10-ttp-isolated-candidate-coding-access.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
