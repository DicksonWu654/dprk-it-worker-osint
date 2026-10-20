# NICKEL TAPESTRY

`cluster-nickel-tapestry` · Cluster or incident · Attributed by security researchers or press · confidence high

> Sophos/CTU research attributes the NICKEL TAPESTRY cluster; official regional guidance supplies context, while vendor-defined cluster attribution requires the cited research.

| | |
|---|---|
| Accounts | Telegram `Alex (Алекс) 88` (historical); FTP username `uniqueuser2024` (historical) |
| Locations (historical, per source) | European Union |
| TTPs | extortion, fraudulent remote-employment personas, ransom-demand, shared FTP and messaging infrastructure, source-code-exfiltration |
| lazarus.group profiles | cluster-nickel-tapestry, ttp-ttp-insider-threat |
| Last verified | 2026-08-12 |

## Caveats

- Return to the primary source before duplicating a vendor-derived identity or indicator.
- Exact URL/title absent. The underlying Secureworks research and U.S. government extortion warning are represented elsewhere, so this is retained as EU-level corroboration rather than as a new actor record.
- Official contextual guidance adds context only; separate cluster attribution and recommendations made by other sources rely on their own source records.
- Nickel Tapestry is a research cluster name rather than a legal identity.
- Vendor cluster name; shared indicators are assigned to a specific persona only with an explicit mapping.

## Source-backed context

- domain: value: kimonosafes.top; relationship: related-cluster
- CERT-EU's monthly brief independently elevated the shift from employment fraud to data theft and extortion for EU stakeholders. It adds official regional warning value but no new named actor.

## Sources

- CERT-EU, [Cyber Brief 24-11 - October 2024](https://cert.europa.eu/publications/threat-intelligence/cb24-11), 2024-11-05 — Section “North Korean IT workers extorted employers after infiltrating Western companies” (October 16 entry). CERT-EU's monthly brief independently elevated the shift from employment fraud to data theft and extortion for EU stakeholders. It adds official regional warning value but no new named actor
- Sophos Counter Threat Unit, [NICKEL TAPESTRY expands fraudulent worker operations](https://www.sophos.com/en-us/blog/nickel-tapestry-expands-fraudulent-worker-operations), 2025-05-08 — Actor personas; Tables 1 and 3; Figures 1-7; Tactics, techniques, and procedures. Names Brad Blaszczyk, Ivan Matskevich, Wyrick Cabel, and Julian Gus; links usernames Alex/Алекс 88 and uniqueuser2024, kimonosafes[.]top, resume/profile artifacts, IP-based KVM, RMM, VPN, and extortion

*Data file: [`data/entities/cluster/cluster-nickel-tapestry.json`](../../../data/entities/cluster/cluster-nickel-tapestry.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
