# Jasper Sleet

`cluster-jasper-sleet` · Cluster or incident · Attributed by security researchers or press · confidence high

> Microsoft name for DPRK remote IT-worker activity; Microsoft-attributed unnamed-customer incident response finding; this record carries no public charge, adjudication, sanctions designation, victim identity, or individual identity determination.

| | |
|---|---|
| Aliases | Storm-0287 |
| TTPs | active-directory-reconnaissance, AI-enhanced identity documents and imagery, audit-log-clearing, cloud and identity abuse, fraudulent remote employment, out-of-band-remote-hands, post-hire-pikvm-remote-control, sensitive-data-egress |
| lazarus.group profiles | cluster-jasper-sleet |
| Last verified | 2026-08-12 |

## Caveats

- Four observed user accounts are four observations; worker and operator counts require separate evidence.
- Joshua Desire/codegod2222 is already normalized in platform-personas.json and remains represented there.
- Microsoft expressly links one authenticating identity to Jasper Sleet; the sentence covers that identity link, while other accounts require separate attribution.
- Microsoft threat-actor cluster name; legal identity remains unresolved.
- The blog and PDF are one source family, so they supply one corroboration line.
- The customer remains unnamed; victim identification is outside the record.
- The separate 3,000-account disruption statistic is already represented elsewhere; it is existing context rather than a new finding here.

## Source-backed context

- Microsoft reports four compromised user accounts connecting PiKVM devices to employer-issued workstations in one unnamed customer environment.
- Microsoft says unknown third parties used the devices for remote hands-on activity and sensitive-data extraction.
- The report timeline includes audit-log clearing, ADFind creation, repeated PiKVM USB mounts, and data egress during 2025.
- Microsoft says it disabled compromised accounts, restored affected devices to clean backups, and analyzed audit, endpoint, identity, and cloud-app telemetry.

## Sources

- Microsoft Incident Response, [Imposter for hire: How fake people can gain very real access](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/security/Cyberattacks-Series-Report-Q2-Final.pdf), 2025-12-11 — pp. 1-5; especially p. 2 “What happened?”, p. 3 attack-flow timeline, and p. 4 “How did Microsoft respond?”. The report says four user accounts were observed connecting PiKVM devices and that the technique enabled unknown third parties to perform remote hands-on activity and extract sensitive information. Its 2025 timeline reports audit-log clearing, ADFind creation, repeated PiKVM USB mounts, and data egress. Microsoft says it disabled threat-actor accounts, restored associated devices to pre-activity backups, and analyzed Unified Audit Logs and endpoint and identity telemetry. Evidence boundary: Companion full report for the same Microsoft customer investigation, not independent corroboration of the article. Timeline events are Microsoft observations; the public report does not identify the customer or disclose the underlying telemetry
- Microsoft Threat Intelligence, [Jasper Sleet: North Korean remote IT workers’ evolving tactics to infiltrate organizations](https://www.microsoft.com/en-us/security/blog/2025/06/30/jasper-sleet-north-korean-remote-it-workers-evolving-tactics-to-infiltrate-organizations), 2025-06-30 — Figures 2-7; Crafting fake personas; Establishing digital footprint; AI; Facilitators; Defense evasion. Names LinkedIn persona Joshua Desire and GitHub codegod2222; documents 3,000 suspended Microsoft accounts, Faceswap/AI image editing, voice changing, laptop farms, PiKVM/TinyPilot, VPN/VPS/proxies, RMM, stolen or rented identities, and facilitators
- Microsoft Incident Response, [Imposter for hire: How fake people can gain very real access](https://www.microsoft.com/en-us/security/blog/2025/12/11/imposter-for-hire-how-fake-people-can-gain-very-real-access), 2025-12-11 — Sections “What happened?” and “How did Microsoft respond?”. Microsoft says four compromised user accounts connected PiKVM devices to employer-issued workstations, allowing unknown third parties to perform remote hands-on activity and extract sensitive data. Microsoft says it traced the activity to Jasper Sleet, disabled compromised accounts, restored affected devices to clean backups, and reviewed audit and security telemetry. Evidence boundary: Microsoft-attributed account and incident-response findings for an unnamed customer. The article does not identify the customer, prove four distinct workers, or establish that every account was individually attributed to Jasper Sleet
- Microsoft Defender Security Research Team, Microsoft Threat Intelligence, [Detection strategies across cloud and identities against infiltrating IT workers](https://www.microsoft.com/en-us/security/blog/2026/04/21/detection-strategies-cloud-identities-against-infiltrating-it-workers), 2026-04-21 — Attack chain overview; Figures 1-4; detection table and hunting queries. Describes Workday job discovery/application, external interview communications, DocuSign, payroll changes from known infrastructure, anonymous proxies, impossible travel, and post-hire access to Teams, SharePoint, OneDrive, and Exchange Online

*Data file: [`data/entities/cluster/cluster-jasper-sleet.json`](../../../data/entities/cluster/cluster-jasper-sleet.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
