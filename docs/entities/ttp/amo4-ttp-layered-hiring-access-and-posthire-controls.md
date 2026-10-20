# Layered hiring verification, least privilege, and post-hire monitoring

`amo4-ttp-layered-hiring-access-and-posthire-controls` · Tactic, technique or procedure · Officially attributed (UN or government reporting; not a charge) · confidence high · **needs corroboration**

> Non-binding cyber guidance. Local privacy, employment, recording and anti-discrimination law governs implementation

| | |
|---|---|
| TTPs | employment-payment-consistency-review, lawful-background-verification, least-privilege, live-applicant-verification, periodic-access-review, professional-history-corroboration, remote-management-activity-monitoring, role-based-access-control, system-log-review |
| lazarus.group profiles | Continuous recruitment-integrity and cross-sector identity-risk governance, Financial-sector end-to-end workforce identity and access controls, Identity continuity across application, interview, shipment, onboarding, and work, Post-hire detection should correlate cloud/SaaS identity behavior with HR and payroll changes |
| Last verified | 2026-08-12 |

## Caveats

- Any physical-meeting invitation should offer a genuine, lawful verification option and avoid deceptive or discriminatory pretexts.
- Republish identity documents or record interviews only with a lawful basis, notice, retention controls and access restrictions.
- Financial-account checks should verify employment-payment consistency while keeping account numbers and unrelated financial data private.
- The record retains aggregate context; people, entities, accounts, locations, images, identifiers, victim data, and payment selectors stay outside it.
- This is defensive advisory context rather than a named incident, legal outcome, or designation.
- Use platform-history discrepancies as prompts for human review; DPRK affiliation requires additional evidence.

## Source-backed context

- The advisory recommends layered live interview verification, comparison of claimed professional history across relevant platforms, reputable background-check support, bank-account/KYC reliability checks, and—where lawful and proportionate—local or in-person verification. For hired remote workers it recommends role-based access, least privilege, periodic access review, network-traffic review for unusual connections or remote-management activity, and system-log analysis for anomalous behavior.
- The national CERT connects applicant verification to post-hire access review; its guidance does not establish facts about a person.

## Sources

- Israel National Cyber Directorate, [Unmasking North Korea's Digital Deception: The Covert Operations of DPRK IT Workers in the Age of AI and Deepfakes](https://www.gov.il/BlobFolder/reports/alert_1813/en/ALERT-CERT-IL-W-1814.pdf) — PDF pp. 3-10, especially 'AI and Deepfake Technologies,' 'Persistency,' and 'Detecting and Preventing North Korean IT Worker Infiltration.'. The advisory recommends layered live interview verification, comparison of claimed professional history across relevant platforms, reputable background-check support, bank-account/KYC reliability checks, and—where lawful and proportionate—local or in-person verification. For hired remote workers it recommends role-based access, least privilege, periodic access review, network-traffic review for unusual connections or remote-management activity, and system-log analysis for anomalous behavior. Official gov.il advisory and publisher-hosted English PDF. The gov.il edge returned access controls during direct passive retrieval, but the official PDF was text-indexed and available through public search. No precise publication date was established from the accessible official text, so the date is deliberately null rather than inferred from crawl metadata or the alert number. The retained official document is English-language; no translated wording is supplied or inferred
- Israel National Cyber Directorate, [Unmasking North Korea's Digital Deception: The Covert Operations of DPRK IT Workers in the Age of AI and Deepfakes](https://www.gov.il/en/pages/alert_1813) — Official advisory landing page and publisher-hosted PDF link. Official gov.il landing page for the advisory. It preserves publisher and publication-family provenance but does not independently corroborate the claim-bearing PDF

*Data file: [`data/entities/ttp/amo4-ttp-layered-hiring-access-and-posthire-controls.json`](../../../data/entities/ttp/amo4-ttp-layered-hiring-access-and-posthire-controls.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
