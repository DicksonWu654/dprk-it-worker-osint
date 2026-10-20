# Expose type-specific verification in recruiter review without treating it as dispositive

`dpr13-ttp-type-specific-verification-in-recruiter-review` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> First-party provider-described LinkedIn control normalized as review-only defensive context; it carries a source-level control observation, with identity, nationality, sanctions, misconduct, and DPRK attribution outside scope.

| | |
|---|---|
| TTPs | multiple-personas, stolen-identity |
| lazarus.group profiles | dfp-ttp-linkedin-verification-scope |
| Last verified | 2026-08-12 |

## Caveats

- A missing, expired, removed, or geographically unavailable verification requires review under the same privacy and fairness safeguards as any other signal; it cannot by itself trigger automatic rejection or serve as a proxy for nationality, immigration status, disability, socioeconomic status, or other protected or sensitive characteristics.
- DPRK affiliation rests on authoritative case-specific evidence. Verified badges, profile evidence, GitHub history, patents, repository language, account age, geography, names, avatars, follower graphs, and sparse activity are contextual signals requiring corroboration.
- LinkedIn verification or badge status confirms the provider-documented verification type and state. Background checks, sanctions, nationality, work location, technical authorship, current operator, and DPRK attribution require separate evidence.
- The record scope excludes people, personas, accounts, entities, organizations, applicant data, contact details, images, identity documents, biometrics, credentials, payment data, private selectors, raw risk features, and current-account observations.
- Professional-profile, GitHub, patent, repository, skill, chronology, and activity evidence may reflect collaboration, copied claims, renamed or shared accounts, identity changes, privacy choices, sparse history, or ordinary data error. Require job-relevant corroboration and an explainable walkthrough rather than inferring misconduct.
- Provider claim only; independently validated effectiveness, coverage, sensitivity, specificity and DPRK-detection evidence require separate studies. Verification records an event, while continuous account or endpoint control and nationality or sanctions status require separate evidence.
- Provider-described product capability only; independent evaluation, deployment evidence, customer outcome, accuracy, sensitivity, specificity, false-positive rate, and DPRK-detection evidence require validation.
- The control remains review-level; automated adverse action, account investigation, current-operator identification, and watchlist use require separate evidence and authorization.
- Use lawful purpose limitation, data minimization, access controls, bounded retention, documented human review, plausible benign alternatives, bias and disparate-impact testing, accessible alternatives, notice where appropriate, and meaningful correction or appeal.

## Source-backed context

- LinkedIn's May 2026 release describes a Verified Applicant Spotlight for recruiting teams. LinkedIn's help documentation clarifies that verification is optional and type-specific and may be displayed in Recruiter. The defensible delta is workflow visibility: expose what was verified, by which verification category, and whether it remains active so a reviewer can use it as one corroborating signal.

## Sources

- LinkedIn Talent Solutions, [Quarterly Product Release — 2026 Hiring Release](https://business.linkedin.com/hire/product-update) — 2026 Hiring Release \| MAY 2026; Find qualified candidates faster with credible sources and proof of work; Professional sources and Verified Skills; Quickly discover verified applicants; Verified Applicant Spotlight. LinkedIn says its May 2026 hiring release can surface professional sources and Verified Skills from GitHub, patents, and other sources in Hiring Assistant or Recruiter when available. The same release describes a Verified Applicant Spotlight intended to help recruiting teams identify applicants verified through LinkedIn's network and reduce fake-applicant risk. The source labels this release 2026-05; no exact publication day is stated
- LinkedIn, Verifications on your LinkedIn profile (`hxxps://www[.]linkedin[.]com/help/linkedin/answer/a1359065`) — Identity verification; Workplace verification; Verification details; paragraphs describing optional verification, badge meaning, removal, and Recruiter display. LinkedIn distinguishes identity, workplace, and educational verifications; states that verifications are optional; says badges expose the active verification type; describes circumstances in which a verification may be removed; and says job-seeker verifications may appear in enterprise features such as Recruiter Spotlights

*Data file: [`data/entities/ttp/dpr13-ttp-type-specific-verification-in-recruiter-review.json`](../../../data/entities/ttp/dpr13-ttp-type-specific-verification-in-recruiter-review.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
