# UNC5267

`cluster-unc5267` · Cluster or incident · Attributed by security researchers or press · confidence high

> Mandiant umbrella cluster for DPRK IT-worker operations

| | |
|---|---|
| TTPs | commercial remote-management tooling, laptop farms and IP-KVM access, resume and image reuse across personas, VPN and VoIP use |
| Last verified | 2026-08-11 |

## Caveats

- DTEX lists UNC5267 and Wagemole together; this dataset keeps distinct vendors’ cluster labels separate rather than auto-merging them.
- The first-party PDF exposes no verified public release date; PDF metadata and HTTP Last-Modified values are not publication evidence.
- Vendor cluster names are analytic labels; legal identities require source-specific attribution.

## Source-backed context

- portfolio-domain: value: daniel-ayala.netlify.app; relationship: reported-link

## Sources

- Google Cloud / Mandiant, [Staying a Step Ahead: Mitigating the DPRK IT Worker Threat](https://cloud.google.com/blog/topics/threat-intelligence/mitigating-dprk-it-worker-threat), 2024-09-23 — UNC5267; Incident Response Observations; Figures 1-3; URLs and Network IOCs. Documents reused multi-persona resumes, altered resume imagery, a Netlify portfolio at daniel-ayala[.]netlify[.]app, laptop farms, IP-KVMs, six RMM tools, Astrill VPN, VoIP, Caffeine, and network IOCs
- DTEX Systems, [Exposing DPRK’s Cyber Syndicate and Hidden IT Workforce](https://reports.dtexsystems.com/DTEX-Exposing%20DPRK%20Cyber%20Syndicate%20and%20Hidden%20IT%20Workforce.pdf), 2025-05-14 — PDF pp. 31-40, Figures 9-12. DTEX discusses UNC5267 and Wagemole alongside a source-reported Dandong IT-worker group, persona creation, facilitators, interview assistance, laptop farms, payment laundering, and MFA-bypass tradecraft. Internal workspace and routing selectors are intentionally omitted

*Data file: [`data/entities/cluster/cluster-unc5267.json`](../../../data/entities/cluster/cluster-unc5267.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
