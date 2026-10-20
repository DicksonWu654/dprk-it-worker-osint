# FAMOUS CHOLLIMA 2024 endpoint-plus-identity hunting workflow

`hpg-ttp-famous-chollima-2024-cross-domain-hunting` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> CrowdStrike vendor-attributed historical cluster and hunting assessment for the July 2023-June 2024 reporting window; legal identity status remains outside the assessment.

| | |
|---|---|
| TTPs | cloud-data-exfiltration, kvm-over-ip, multiple-simultaneous-jobs, remote-desktop, remote-management-tool, source-code-exfiltration |
| Last verified | 2026-08-12 |

## Caveats

- FAMOUS CHOLLIMA is CrowdStrike's vendor cluster name, separate from a legal identity.
- Keep this historical more-than-100-company applications-or-active-work denominator separate from CrowdStrike's later 2025 report of more than 320 infiltrated companies in a different preceding-12-month window.
- Victim identities, IP addresses, and endpoint artifacts are excluded.
- The more-than-100 figure covers applications or active work; confirmed successful hires and compromises require separate counts.

## Source-backed context

- CrowdStrike identified FAMOUS CHOLLIMA-associated people applying to or actively working at more than 100 unique companies during its July 2023-June 2024 reporting window; most were U.S.-based technology entities.
- In the initial case set, claimed U.S. residents held multiple remote IT roles, did minimal expected work, and in some incidents attempted exfiltration through Git, SharePoint or OneDrive.
- Observed remote-access tools included RustDesk, AnyDesk, TinyPilot, VS Code Dev Tunnels and Google Chrome Remote Desktop; CrowdStrike paired RMM/network anomalies with role-baseline and identity telemetry.
- CrowdStrike developed more than 20 hunting leads by combining endpoint and identity data and reported notifying some organizations within days of employment and network access.

## Sources

- CrowdStrike OverWatch, [CrowdStrike 2024 Threat Hunting Report](https://www.crowdstrike.com/explore/crowdstrike-2024-threat-hunting-report/crowdstrike-2024-threat-hunting-report), 2024-08-07 — PDF pp. 18-21, Hunting the Insider Threat and Case Study: FAMOUS CHOLLIMA Insider Threats Target 100+ U.S.-Based Companies. CrowdStrike identified FAMOUS CHOLLIMA-associated people applying to or actively working at more than 100 unique companies during its July 2023-June 2024 reporting window; most were U.S.-based technology entities. In the initial case set, claimed U.S. residents held multiple remote IT roles, did minimal expected work, and in some incidents attempted exfiltration through Git, SharePoint or OneDrive. Observed remote-access tools included RustDesk, AnyDesk, TinyPilot, VS Code Dev Tunnels and Google Chrome Remote Desktop; CrowdStrike paired RMM/network anomalies with role-baseline and identity telemetry. CrowdStrike developed more than 20 hunting leads by combining endpoint and identity data and reported notifying some organizations within days of employment and network access

*Data file: [`data/entities/ttp/hpg-ttp-famous-chollima-2024-cross-domain-hunting.json`](../../../data/entities/ttp/hpg-ttp-famous-chollima-2024-cross-domain-hunting.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
