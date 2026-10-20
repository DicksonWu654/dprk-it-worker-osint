# FBI 2026 identity-in-depth and facilitator-expansion guidance

`ttp-fbi-2026-identity-in-depth-facilitator-expansion` · Tactic, technique or procedure · Officially attributed (UN or government reporting; not a charge) · confidence confirmed

> The FBI publicly describes observed North Korean IT-worker tactics and defensive guidance in an October 2026 PSA; person-specific legal status requires a separate case source.

**Identity boundary.** A technique and mitigation record drawn from the FBI PSA; its generalized observations need a separate source before attachment to a named person.

| | |
|---|---|
| TTPs | identity-in-depth detection, facilitator recruitment, laptop farms, remote desktop and KVM access, extortion and threats |
| Last verified | 2026-10-18 |

## Caveats

- The PSA is generalized agency reporting; subject-level identity, facilitation, victim, account, and current-location status require separate sources.

## Claims (4)

| Claim | Value | Confidence | Status | Source |
|---|---|---|---|---|
| fbi recommends identity in depth detection | {"approach": "multiple layered access controls and detections throughout the employment lifecycle"} | confirmed | published | [Federal Bureau of Investigation, Internet Crime Complaint Center](https://www.ic3.gov/PSA/2026/PSA261013) (Tips to Protect Your Business — Identity in Depth, opening paragraphs); [Federal Bureau of Investigation, Internet Crime Complaint Center](https://www.ic3.gov/PSA/2026/PSA261013) (Tips to Protect Your Business — Identity in Depth, Identity in Depth paragraph) |
| fbi observed expanding facilitator services | {"services": ["on-camera appearances", "job interviews or meetings", "identity verification", "package shipping", "urinalysis or fingerprint submissions", "keeping employment devices connected from residences"]} | confirmed | published | [Federal Bureau of Investigation, Internet Crime Complaint Center](https://www.ic3.gov/PSA/2026/PSA261013) (The general public needs to be aware paragraph) |
| fbi observed remote access and kvm tools | {"remote_desktop_examples": ["AnyDesk", "TeamViewer", "RustDesk", "Chrome Remote Desktop", "Splashtop Streamer", "RMM software"], "hardware_examples": ["TinyPilot", "PiKVM", "GL.iNet"]} | confirmed | published | [Federal Bureau of Investigation, Internet Crime Complaint Center](https://www.ic3.gov/PSA/2026/PSA261013) (Identity in Depth, behavioral tendencies and recommendations); [Federal Bureau of Investigation, Internet Crime Complaint Center](https://www.ic3.gov/PSA/2026/PSA261013) (Identity in Depth, behavioral tendencies and recommendations) |
| fbi observed threats and extortion | {"observations": ["stolen identities", "extortion", "threats of physical violence to demand payments"]} | confirmed | published | [Federal Bureau of Investigation, Internet Crime Complaint Center](https://www.ic3.gov/PSA/2026/PSA261013) (Opening paragraph) |

<details><summary>Exact quotes</summary>

- **fbi recommends identity in depth detection** — “U.S. companies should recognize the scale, persistence, and rapid evolution of the North Korean ITW threat means ITWs cannot be identified reliably with a single indicator.” — Federal Bureau of Investigation, Internet Crime Complaint Center, Tips to Protect Your Business — Identity in Depth, opening paragraphs
- **fbi recommends identity in depth detection** — “"Identity in Depth" — layered detections, access controls, and continuous identity verification throughout employment — avoids unreliable filters while enabling moderate, weak, or unavoidable signals to justify enhanced scrutiny when aggregated together.” — Federal Bureau of Investigation, Internet Crime Complaint Center, Tips to Protect Your Business — Identity in Depth, Identity in Depth paragraph
- **fbi observed expanding facilitator services** — “ITWs are paying Americans for an expanding range of services to hide their own involvement in the scheme, including asking some to appear on camera, participate in job interviews or meetings, verify fraudulent identities, provide access to personal social media or professional networking accounts, ship packages, complete urinalysis tests or fingerprint submissions, or keep employment-related devices connected to the Internet from personal residences.” — Federal Bureau of Investigation, Internet Crime Complaint Center, The general public needs to be aware paragraph
- **fbi observed remote access and kvm tools** — “ITWs continue to use remote desktop software to connect to employment-related devices. Examples include AnyDesk, TeamViewer, RustDesk, Chrome Remote Desktop, Splashtop Streamer, and remote monitoring and management (RMM) software.” — Federal Bureau of Investigation, Internet Crime Complaint Center, Identity in Depth, behavioral tendencies and recommendations
- **fbi observed remote access and kvm tools** — “ITWs use external hardware such as TinyPilot, PiKVM, GL.iNet, and other Keyboard Video Mouse (KVM) over IP devices to control laptops.” — Federal Bureau of Investigation, Internet Crime Complaint Center, Identity in Depth, behavioral tendencies and recommendations
- **fbi observed threats and extortion** — “The FBI has observed North Korean ITWs use stolen identities, extort victims, and use threats of physical violence to demand payments.” — Federal Bureau of Investigation, Internet Crime Complaint Center, Opening paragraph

</details>

## Sources

- Federal Bureau of Investigation, Internet Crime Complaint Center, [North Korean IT Workers Expanding Use of Facilitators, Broadening Recruitment](https://www.ic3.gov/PSA/2026/PSA261013), 2026-10-13 — Opening; Tips to Protect Your Business — Identity in Depth; Evolution of North Korean IT Worker Tactics. The FBI PSA describes facilitator expansion, identity-in-depth detection, remote-access tooling, and escalation tactics.

*Data file: [`data/entities/ttp/ttp-fbi-2026-identity-in-depth-facilitator-expansion.json`](../../../data/entities/ttp/ttp-fbi-2026-identity-in-depth-facilitator-expansion.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
