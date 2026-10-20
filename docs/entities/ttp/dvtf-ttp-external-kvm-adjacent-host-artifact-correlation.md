# External KVM device identity and adjacent host-artifact correlation

`dvtf-ttp-external-kvm-adjacent-host-artifact-correlation` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> Source-attributed vendor observation and defensive abstraction; named-person attribution and adjudicated fact require separate sources.

| | |
|---|---|
| TTPs | device-telemetry-tampering, kvm-over-ip, remote-management-tool |
| lazarus.group profiles | deep2-ttp-deep-ttp-11-cloud-saas-posthire-correlation, hpg-ttp-device-pickup-hid-address-controls |
| Last verified | 2026-08-12 |

## Caveats

- IP-KVMs and remote-management tools serve legitimate support, lab, accessibility, and outsourcing uses; their presence is a contextual signal requiring case evidence for fraudulent employment or DPRK affiliation.
- Product-specific raw queries, commands, device values, IPs, and other brittle selectors are intentionally omitted.
- ReliaQuest presents aggregate observations rather than case-by-case evidence.
- Some recommended controls are practitioner guidance rather than independently measured detection efficacy.
- The source publishes qualitative detector guidance; measured efficacy requires testing against legitimate applicant, staffing, accessibility, support, lab, and outsourcing workflows.

## Source-backed context

- Join USB or hardware inventory, local DNS or mDNS, process or command telemetry, display-profile changes, asset custody, and approved-support-tool inventory during the early-tenure observation window.
- Alert on unapproved external-console device classes or artifact combinations rather than on mutable filenames alone; verify against procurement and accessibility exceptions.
- Do not treat COBO or an RMM blocklist as sufficient. Validate that the assigned worker retains the device and review hardware-mediated control alongside sign-in, location, and role-expected activity.
- For BYOD exceptions, use a managed virtual workspace or equivalent enforceable device-posture boundary rather than assuming endpoint telemetry exists.
- A worker or facilitator can combine hardware-mediated console control with software RMM, or substitute external KVM hardware when RMM is blocked; defenders may still observe device-enumeration or adjacent host artifacts.

## Sources

- ReliaQuest Threat Research Team, [Threat Spotlight: Red Flags for Red Star Hackers: Hunting for North Korean Insiders](https://reliaquest.com/blog/threat-spotlight-identifying-north-korean-insider-threats), 2025-05-08 — Key Points; VPS IP Address Activity; Multiple User Authentications from Same IP Address; IP-KVM Devices: The Ultimate Stealth Tool; Table 1: Indications of IP-KVM usage; Your Action Plan. ReliaQuest reports that IP-KVM devices can provide console control outside the host operating system and therefore may not leave the software footprint expected from ordinary remote-management tools. ReliaQuest publishes examples of host-visible traces in USB inventory, local name resolution, commands, and display-profile metadata associated with two IP-KVM families. ReliaQuest also reports actors renaming RMM and IP-KVM tooling as detection improves, and states that IP-KVM use is not exclusive to DPRK-linked workers

*Data file: [`data/entities/ttp/dvtf-ttp-external-kvm-adjacent-host-artifact-correlation.json`](../../../data/entities/ttp/dvtf-ttp-external-kvm-adjacent-host-artifact-correlation.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
