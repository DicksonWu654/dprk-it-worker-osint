# KVM over IP and spoofed video input on a company endpoint

`ttp-vega-kvm-remote-worker-2026` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> This record preserves the cited publication’s defensive research or advisory description; legal identity requires separate evidence.

**Identity boundary.** A source-bounded technique record for KVM over IP and spoofed video input on a company endpoint; an explicit source link is required to connect it to a person, persona or campaign.

| | |
|---|---|
| TTPs | KVM over IP and spoofed video input on a company endpoint |
| Last verified | 2026-10-18 |

## Caveats

- The technique description is source-bounded; attribution or employment decisions require a separate rule and evidence.
- This public dataset retains no victim details, contact selectors, addresses, credentials, wallets, or private data.
- The Vertex infrastructure-hunting reference lacks matching reviewed article text; its reference remains separate from the KVM hardware observation and actor attribution.

## Claims (1)

| Claim | Value | Confidence | Status | Source |
|---|---|---|---|---|
| source reported hardware tradecraft | {"hardware": ["USB-to-UART serial console adapter", "IP-based keyboard, video and mouse appliance", "USB video capture device"]} | high | needs corroboration | [Vega Threat Intel](https://threats.vega.io/brief/dprk-remote-worker-kvm-hardware-implant/) (Investigation summary) |

<details><summary>Exact quotes</summary>

- **source reported hardware tradecraft** — “Forensic review subsequently identified a USB-to-UART serial console adapter, an IP-based keyboard, video, and mouse appliance, and a USB video capture device connected to the host.” — Vega Threat Intel, Investigation summary

</details>

## Sources

- Vega Threat Intel, [DPRK Remote Worker Investigation: KVM over IP Hardware, Spoofed Video Input and Commercial Proxy Infrastructure on a Company Issued Endpoint](https://threats.vega.io/brief/dprk-remote-worker-kvm-hardware-implant/), 2026-09-06 — Investigation summary. Vega summarizes Huntress forensic observations of a suspected North Korean remote worker endpoint.
- Vertex Project, [DPRK IT Worker Infrastructure Hunting](https://vertex.link/blogs/dprk-it-worker-infrastructure-hunting/), 2026-10-12 — Matching article text unavailable; see source note. Unverified related infrastructure-hunting reference: the recorded URL returned an unrelated anniversary page, so it supplies no supporting evidence for the KVM observation.

*Data file: [`data/entities/ttp/ttp-vega-kvm-remote-worker-2026.json`](../../../data/entities/ttp/ttp-vega-kvm-remote-worker-2026.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
