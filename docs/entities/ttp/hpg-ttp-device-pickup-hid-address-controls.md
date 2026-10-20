# Verified device custody, possession, and remote-control correlation

`hpg-ttp-device-pickup-hid-address-controls` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> Device, shipping, remote-access, and location signals require corroboration and serve as contextual indicators. Mandiant defensive guidance is based on vendor-observed aggregate activity, with Mandiant source-reported aggregate patterns combined with Sophos guidance.

| | |
|---|---|
| TTPs | device-telemetry-tampering, kvm-over-ip, laptop-farm, laptop-forwarding, remote-management-tool, vpn |
| lazarus.group profiles | drh-ttp-endpoint-custody-posthire-control-bundle, hpg-ttp-device-pickup-hid-address-controls, ttp-late-2026-15-workers-immediately-inventory-controlled-hosts-with-dxd |
| Last verified | 2026-08-12 |

## Caveats

- Alternate shipping addresses, reception desks, relocation services, and equipment depots are common.
- Apply controls consistently with privacy, employment, labor, accessibility, retention, notice, correction, and access-governance requirements.
- Commercial VPNs, HIDs and alternate shipping addresses all have benign uses and require contextual correlation.
- Choose privacy-preserving identity assurance appropriate to law and policy; biometrics and demographic screening require a separate legal and policy basis from this source.
- Geolocation is approximate; VPNs, mobile networks, corporate egress, travel, and privacy controls can make it wrong.
- Human-interface-device logging and address divergence are contextual controls; DPRK affiliation requires additional source-backed signals.
- RMM, KVM, hardware tokens, and activity helpers have legitimate enterprise or accessibility uses; alert on unauthorized combinations rather than product presence alone.
- Use the pattern to prioritize documented human-led review; DPRK affiliation, fraud, and malicious intent require a combined evidence record.

## Source-backed context

- Bind approved shipping destination, courier events, asset serial, hardware-backed authentication, enrollment telemetry, and observed device location to the same onboarding case.
- Hunt for combinations of unauthorized KVM/RMM, several remote-control products, persistent uptime with little role-expected interaction, and sudden address/location divergence.
- Maintain explicit allowlists and exception workflows for IT support, accessibility, travel, relocations, mailrooms, shared workspaces, and managed service providers.
- Mandiant recommends confirming device delivery and possession during onboarding and reports cases involving multiple remote-management tools, network KVM use, and activity-simulation software after shipment.
- Require in-person pickup of corporate laptops with identity verification when feasible; apply enhanced verification when equipment is shipped somewhere not listed in employment records.
- Log human-interface-device connections and monitor new-hire endpoints for remote-access software and VPN use.
- Mandiant specifically highlighted Astrill VPN in this 2025 guidance, but use of any commercial VPN is not attribution by itself.

## Sources

- Sophos, [Control matrix spreadsheet: North Korean IT workers](https://assets.sophos.com/X24WTUEQ/at/w5j9xswf4bsvjqc9r3tqp3t/control-matrix-spreadsheet-north-korean-it-workers-pm-v1.xlsx) — Worksheets: Project Tracker Sheet, Banking payroll and finance, Security and monitoring, Threat hunting. The Sophos matrix recommends review of late shipping changes or courier redirection, a defined enhanced-monitoring period for new hires, and correlation of persistent device uptime with limited role-expected activity
- Google Cloud / Mandiant, [M-Trends 2025: Data, Insights, and Recommendations From the Frontlines](https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025?hl=en), 2025-04-24 — Blog paragraphs headed The Evolving Threat Landscape and Emerging Trends; executive-edition PDF pp. 4-5, Democratic People's Republic of Korea Insider Threats. Require in-person pickup of corporate laptops with identity verification when feasible; apply enhanced verification when equipment is shipped somewhere not listed in employment records. Log human-interface-device connections and monitor new-hire endpoints for remote-access software and VPN use. Mandiant specifically highlighted Astrill VPN in this 2025 guidance, but use of any commercial VPN is not attribution by itself
- Google Cloud / Mandiant, [Staying a Step Ahead: Mitigating the DPRK IT Worker Threat](https://cloud.google.com/blog/topics/threat-intelligence/mitigating-dprk-it-worker-threat), 2024-09-23 — Incident Response Observations; Mitigations: Information Technology; Mitigations: Human Resources. Mandiant recommends confirming device delivery and possession during onboarding and reports cases involving multiple remote-management tools, network KVM use, and activity-simulation software after shipment

*Data file: [`data/entities/ttp/hpg-ttp-device-pickup-hid-address-controls.json`](../../../data/entities/ttp/hpg-ttp-device-pickup-hid-address-controls.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
