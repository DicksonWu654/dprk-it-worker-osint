# Coordinated termination-risk response and evidence preservation

`dc2-ttp-coordinated-termination-risk-response` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> Sophos and DTEX defensive response guidance is informed by reported risk; guidance describes reported risk and leaves individual worker conduct case-specific.

| | |
|---|---|
| TTPs | cloud-data-exfiltration, data-publication-threat, extortion, source-code-exfiltration, trade-secret-theft |
| lazarus.group profiles | cluster-nickel-tapestry, deep2-vendor-dv-f02, drh-ttp-endpoint-custody-posthire-control-bundle |
| Last verified | 2026-08-12 |

## Caveats

- Apply controls consistently with privacy, employment, labor, accessibility, retention, notice, correction, and access-governance requirements.
- Counsel-approved communications and established incident-response/law-enforcement channels are the appropriate route; retaliatory or deceptive engagement is outside the process.
- Pre-termination downloads, handoffs, forwarding, and severance questions can be legitimate business activity.
- Preserve evidence proportionately and respect employment, monitoring, privacy, and labor law.
- Use the pattern to prioritize documented human-led review; DPRK affiliation, fraud, and malicious intent require a combined evidence record.

## Source-backed context

- Before an adverse termination, inventory sessions, tokens, repositories, secrets, data stores, forwarding rules, integrations, and managed devices; revoke in a coordinated window.
- Preserve logs and legal hold material, monitor unusual pre-termination downloads and post-revocation access attempts, and establish a controlled channel for extortion communications.
- Separate evidence preservation and employee safety from attribution: respond to the behavior even when DPRK linkage is uncertain.

## Sources

- Sophos, [Guide to implementing controls for the North Korean threat](https://assets.sophos.com/X24WTUEQ/at/77492sw46g8p4tgq37rsfrgr/guide-to-implementing-controls-north-korean-threat.pdf) — pp. 1-2, especially Matrix overview and Detection and prevention. The publisher-hosted PDF mirror repeats the cross-functional and detection-oriented framing of the Sophos guide; it is not independent corroboration
- Sophos, [Control matrix spreadsheet: North Korean IT workers](https://assets.sophos.com/X24WTUEQ/at/w5j9xswf4bsvjqc9r3tqp3t/control-matrix-spreadsheet-north-korean-it-workers-pm-v1.xlsx) — Worksheets: Project Tracker Sheet, Banking payroll and finance, Security and monitoring, Threat hunting. The Sophos matrix supplies implementation detail for coordinated offboarding, monitoring, and evidence-aware response
- DTEX Systems, [Exposing DPRK’s Cyber Syndicate and Hidden IT Workforce](https://reports.dtexsystems.com/DTEX-Exposing%20DPRK%20Cyber%20Syndicate%20and%20Hidden%20IT%20Workforce.pdf) — pp. 18-19 (Operational Security Lapses), pp. 36-38 (IT-worker methodology), p. 48 (Immediate Steps). DTEX recommends monitoring leaver risk and sharing relevant observations across security, HR, legal, finance, vendors, and appropriate authorities
- Sophos, [Implementation Guide: North Korean IT Workers](https://www.sophos.com/en-gb/trust/ciso-playbooks/implementation-guide-north-korean) — Page heading and sections: Matrix overview; Detection and prevention; linked PDF and control-matrix downloads. Sophos recommends data-loss controls for likely extortion paths, coordinated access revocation across worker types, and auditable access and employee-record changes

*Data file: [`data/entities/ttp/dc2-ttp-coordinated-termination-risk-response.json`](../../../data/entities/ttp/dc2-ttp-coordinated-termination-risk-response.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
