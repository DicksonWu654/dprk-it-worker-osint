# Applicant and reference-network correlation

`hpg-ttp-applicant-reference-network-correlation` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> Nisos research and hiring guidance treats shared applicant or reference artifacts as correlation leads. Sophos-published defensive guidance supplies defensive context; any applicant's DPRK-linked status requires separate evidence.

| | |
|---|---|
| TTPs | code-hosting-account, fabricated-employment-history, fabricated-resume, multiple-personas, referral-network, shared-portfolio, shared-resume |
| lazarus.group profiles | drh-ttp-continuous-recruitment-integrity-governance, hpg-ttp-applicant-reference-network-correlation |
| Last verified | 2026-08-12 |

## Caveats

- A shared contact value is a correlation lead; a common operator requires separate evidence.
- Apply controls consistently with privacy, employment, labor, accessibility, retention, notice, correction, and access-governance requirements.
- Apply retention limits, access controls, explainable review, and appeal/correction paths to applicant data.
- The article's email addresses, phone numbers, profile images, and current-employer claims stay out of the dataset.
- Nationality, ethnicity, accent, age, disability, and ordinary language variation are excluded as graph features.
- Reverse-image matching supports inconsistency review; facial recognition and civil-identity inference stay outside the method.
- Templates, staffing agencies, family members, accessibility helpers, shared residences, alumni networks, and repeated applicants can create benign graph edges.
- Use the pattern to prioritize documented human-led review; DPRK affiliation, fraud, and malicious intent require a combined evidence record.

## Source-backed context

- Create a privacy-governed applicant entity graph spanning candidate, resume fingerprint, contact channels, claimed employers, references, role families, and application timing.
- Score combinations such as duplicated contact data plus divergent roles plus applicant-controlled references; do not auto-reject on one edge.
- Retain reviewer-visible provenance so recruiters can distinguish an exact duplicate from a common template, shared recruiter, household contact, or legitimate reapplication.
- Nisos recommended cross-referencing applicant phone numbers, email addresses, GitHub accounts, portfolio text, profile images, claimed locations and retained reference contact information because the network reused them.
- Nisos assessed references may be the same person or connected to the applicant's network, making reference-graph correlation a distinct hiring control.

## Sources

- Sophos, [Guide to implementing controls for the North Korean threat](https://assets.sophos.com/X24WTUEQ/at/77492sw46g8p4tgq37rsfrgr/guide-to-implementing-controls-north-korean-threat.pdf) — pp. 1-2, especially Matrix overview and Detection and prevention. The publisher-hosted PDF mirror repeats the Sophos guidance on preserving interview observations and independently validating claimed organizations and reference contact routes; it is not independent corroboration
- Sophos, [Control matrix spreadsheet: North Korean IT workers](https://assets.sophos.com/X24WTUEQ/at/w5j9xswf4bsvjqc9r3tqp3t/control-matrix-spreadsheet-north-korean-it-workers-pm-v1.xlsx) — Worksheets: Project Tracker Sheet, Banking payroll and finance, Security and monitoring, Threat hunting. The Sophos matrix recommends reviewing cloned resumes, duplicated contact attributes, materially incompatible role applications, and artificially reinforcing reference networks through governed ATS or HRIS workflows
- Nisos, [How To Proactively Mitigate The DPRK IT Worker Employment Scam](https://nisos.com/blog/dprk-it-worker-scam-mitigation), 2025-03-27 — Executive Summary; Risk Mitigation Steps; Fake Persona Network; Karl Chong subsections. Nisos recommended cross-referencing applicant phone numbers, email addresses, GitHub accounts, portfolio text, profile images, claimed locations and retained reference contact information because the network reused them. Nisos assessed references may be the same person or connected to the applicant's network, making reference-graph correlation a distinct hiring control
- Sophos, [Implementation Guide: North Korean IT Workers](https://www.sophos.com/en-gb/trust/ciso-playbooks/implementation-guide-north-korean) — Page heading and sections: Matrix overview; Detection and prevention; linked PDF and control-matrix downloads. Sophos recommends preserving interview observations across the hiring team and independently validating claimed organizations and reference contact routes

*Data file: [`data/entities/ttp/hpg-ttp-applicant-reference-network-correlation.json`](../../../data/entities/ttp/hpg-ttp-applicant-reference-network-correlation.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
