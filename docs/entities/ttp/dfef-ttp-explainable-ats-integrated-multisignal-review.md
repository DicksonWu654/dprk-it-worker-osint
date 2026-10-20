# Explainable ATS-integrated multi-signal review

`dfef-ttp-explainable-ats-integrated-multisignal-review` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> First-party employer, platform, or hiring-service disclosure with defensive guidance; legal attribution remains at source and service level.

| | |
|---|---|
| TTPs | direct-application, multiple-personas |
| lazarus.group profiles | drh-ttp-continuous-recruitment-integrity-governance |
| Last verified | 2026-08-12 |

## Caveats

- Deep-first-party-platforms covers Greenhouse/CLEAR and Persona identity workflows; this adds ATS-native explainability, job-scoped configuration, and review/reporting mechanics.
- This record carries no identification or inference of an unnamed customer, applicant, identity-theft victim, or account.
- Source-reported product or platform outcome statements require independent audit for efficacy claims.
- These pages provide platform guidance; DPRK-specific detection rate and validated performance remain unreported. Device and network attributes can create false positives for travelers, shared networks, accessibility tools, and privacy-protective users.

## Source-backed context

- Configure deeper review for roles according to access and business risk
- Surface specific signals and logs rather than a nationality or fraud verdict
- Require multiple signals and a human determination
- Retain auditable outcomes and trends while minimizing applicant data
- Provide candidate notice, appeal, accessibility, and lawful data-retention controls
- Ashby's product documentation illustrates a risk-based ATS workflow: customers select jobs for checks; the system considers device, IP, email, phone, location, identity, and assessment signals; reviewers see the underlying reasons; and humans mark outcomes rather than accepting an opaque fraud verdict.

## Sources

- Ashby, [Ashby Launches the First ATS-Integrated Fraud Detection System](https://www.ashbyhq.com/blog/all/ashby-launches-the-first-ats-integrated-fraud-detection-system), 2025-09-16 — Our Philosophy; What We Built. Ashby says its ATS surfaces specific location, identity-verification, and assessment signals for customer review instead of issuing an opaque fraud verdict
- Ashby, [Bulk candidate fraud checks](https://www.ashbyhq.com/product-updates/bulk-candidate-fraud-checks), 2026-03-24 — Bulk Run Fraud Check action; completion log; filtered review queue. Ashby documents bulk fraud checks, completion logs, and a review queue filtered to candidates with multiple signals
- Ashby, [Introducing Fraudulent Candidate Detection and Management to help you focus on legitimate candidates](https://www.ashbyhq.com/product-updates/introducing-fraudulent-candidate-detection-and-management-to-help-you-focus-on-legitimate-candidates), 2025-09-16 — How Fraudulent Candidate Management in Ashby helps; signal types; reviewer workflow. Ashby documents device, IP, email, and phone signals, multi-signal risk groupings, reviewer drill-down, manual determinations, and aggregate reporting

*Data file: [`data/entities/ttp/dfef-ttp-explainable-ats-integrated-multisignal-review.json`](../../../data/entities/ttp/dfef-ttp-explainable-ats-integrated-multisignal-review.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
