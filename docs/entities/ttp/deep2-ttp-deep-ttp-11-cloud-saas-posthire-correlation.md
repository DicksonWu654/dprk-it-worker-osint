# Post-hire cloud, SaaS, and wrong-employer authentication correlation

`deep2-ttp-deep-ttp-11-cloud-saas-posthire-correlation` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Defensive synthesis of cited public sources; DTEX source-reported cross-company observations combined with Sophos defensive guidance; technique mapping describes methods rather than an identity; affected employers are unnamed and adjudication status is unreported.

| | |
|---|---|
| TTPs | cloud-data-exfiltration, credential-sharing, kvm-over-ip, multiple-simultaneous-jobs, payroll-fraud, remote-desktop, remote-management-tool, vpn |
| lazarus.group profiles | cluster-jasper-sleet, deep2-ttp-deep-ttp-08-collaborator-laptop-identity-contracts, deep2-ttp-deep-ttp-11-cloud-saas-posthire-correlation, ttp-july-31-2026-joint-dprk-it-worker-alert, ttp-late-2026-06-transparent-chatgpt-overlays-and-pikvm-sessions-let-an |
| Last verified | 2026-08-12 |

## Caveats

- Apply controls consistently with privacy, employment, labor, accessibility, retention, notice, correction, and access-governance requirements.
- Browser autofill and stale cached credentials can create isolated wrong-domain failures.
- Consultants, managed-service providers, client support personnel, developers with test tenants, and corporate acquisitions can legitimately access multiple domains.
- False-positive caution: Overly restrictive onboarding can impede legitimate workers. Define transparent, role-based milestones and prompt exception handling.
- False-positive caution: Remote onboarding, travel, payroll corrections, and privacy tools are common. Require a sequence of inconsistent events and human verification.
- Require device ownership, contractual scope, session timing, and approved-customer context before escalation.
- Use the pattern to prioritize documented human-led review; DPRK affiliation, fraud, and malicious intent require a combined evidence record.

## Source-backed context

- On managed endpoints, correlate failed logons, credential-provider events, browser/VDI launches, and remote-session metadata for organization identifiers inconsistent with the device's tenant and approved customers.
- Investigate sequences that combine a wrong-tenant artifact with unapproved RMM/KVM, simultaneous remote sessions, or unexplained access to an external VDI.
- Block unauthorized cross-company pivoting and isolate the device when policy or customer confidentiality is at risk, while preserving evidence for a human-led investigation.
- DTEX reports investigations in which operators reused similar credentials, exposed another employer's virtual workspace, used one employer endpoint to reach another employer environment, or let multiple people operate under one account.
- Microsoft’s 2026 detection guidance ties Workday applications and external interview communications to DocuSign onboarding, payroll changes from known infrastructure, anonymous proxies/impossible travel, and access to Teams, SharePoint, OneDrive, and Exchange Online. The material contribution is a cross-control-plane detection model rather than a single endpoint indicator.

## Sources

- Sophos, [Control matrix spreadsheet: North Korean IT workers](https://assets.sophos.com/X24WTUEQ/at/w5j9xswf4bsvjqc9r3tqp3t/control-matrix-spreadsheet-north-korean-it-workers-pm-v1.xlsx) — Worksheets: Project Tracker Sheet, Banking payroll and finance, Security and monitoring, Threat hunting. Sophos recommends reviewing failed authentication associated with an unexpected organization domain as one component of a broader concurrent-employment investigation
- DTEX Systems, [Exposing DPRK’s Cyber Syndicate and Hidden IT Workforce](https://reports.dtexsystems.com/DTEX-Exposing%20DPRK%20Cyber%20Syndicate%20and%20Hidden%20IT%20Workforce.pdf) — pp. 18-19 (Operational Security Lapses), pp. 36-38 (IT-worker methodology), p. 48 (Immediate Steps). DTEX reports investigations in which operators reused similar credentials, exposed another employer's virtual workspace, used one employer endpoint to reach another employer environment, or let multiple people operate under one account
- U.S. Departments of State, Treasury, and Justice; FBI; CISA; NSA; DC3; U.S. Space Force, [Alert to Countries, Companies, and Other Entities Regarding North Korean IT Workers](https://www.fbi.gov/file-repository/cyber-alerts/alert-to-countries-companies-and-other-entities-regarding-north-korean-information-technology-workers-073126.pdf/view), 2026-07-31 — PDF pp. 2-6; verification and telemetry guidance. The joint alert supports layered verification and combined telemetry rather than single-indicator decisions
- Microsoft Defender Security Research Team, Microsoft Threat Intelligence, [Detection strategies across cloud and identities against infiltrating IT workers](https://www.microsoft.com/en-us/security/blog/2026/04/21/detection-strategies-cloud-identities-against-infiltrating-it-workers), 2026-04-21 — Attack chain and detection table. Microsoft correlates hiring/onboarding, identity risk, payroll changes, and cloud/SaaS access in a cross-control-plane model

*Data file: [`data/entities/ttp/deep2-ttp-deep-ttp-11-cloud-saas-posthire-correlation.json`](../../../data/entities/ttp/deep2-ttp-deep-ttp-11-cloud-saas-posthire-correlation.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
