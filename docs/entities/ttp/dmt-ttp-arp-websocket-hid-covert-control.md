# ARP, WebSocket, synthetic-input, and conferencing abuse monitoring

`dmt-ttp-arp-websocket-hid-covert-control` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Source-qualified defensive abstraction only. The stated evidence class covers a defensive abstraction; legal identity, nationality, employer compromise, prevalence rate, and adjudicated fact require separate sources.

| | |
|---|---|
| TTPs | arp-relay, conference-software-automation, python-execution, synthetic-hid-input, websocket-c2 |
| lazarus.group profiles | deep-ttp-detection: post-hire remote access, talks-presentations: remote-control and laptop-farm tooling |
| Last verified | 2026-08-12 |

## Caveats

- Claim attribution: Avi Sambira / Sygnia, first-party writeup, SecTor deck, and recording description.
- Deck pages 17–29 are explicitly demonstrations; they support feasibility, while incident counts require observed case evidence.
- Evidence class: first-party forensic case summary with live-demo component.
- Fraudulent employment and fake-interview malware remain separate analytic tracks absent explicit same-case evidence.
- The record excludes people, personas, accounts, companies, victims, images, contact details, payment selectors, credentials, raw network indicators, and leaked material.
- Accent, ethnicity, nationality, appearance, location, camera or audio quality, productivity level, consumer email, shipping change, meeting feature, and technical anomaly are contextual signals; fraud or DPRK attribution requires independent evidence.
- Sygnia observed Zoom security prompts intact and zero confirmed data exfiltration.
- The affected client, worker, code, and raw selectors remain undisclosed.
- The live demonstration establishes feasibility only; incident count remains unchanged.
- Use behavior and continuity signals only in combination with independent verification, consistently applied human review, least privilege, and an appeal or correction path.

## Source-backed context

- Sygnia says a U.S. federal raid on a suspected laptop farm recovered a corporate laptop that was returned to the employer and analyzed. The system used lightweight Python modules for user-presence beaconing, WebSocket C2, WebSocket-to-ARP rebroadcast, ARP listening, HID input simulation, and Zoom automation. Sygnia explicitly says no Zoom security feature or prompt was bypassed and no confirmed data exfiltration was observed.
- Collect ARP-layer visibility and hunt unexpected broadcasts, relay behavior, MAC/IP pairings, and volume changes.
- Restrict unfamiliar outbound WebSocket destinations and correlate long-lived sessions with developer endpoints and Python processes.
- Audit Zoom launch and remote-control workflows, synthetic HID activity, and unauthorized Python or shell execution.
- Where appropriate, use switch protections such as Dynamic ARP Inspection and phase controls to fit operational constraints.
- Retain the source's observation class and do not generalize a controlled test, speaker claim, vendor sample, or demonstration into measured prevalence.

## Sources

- Sygnia / SecTor 2025, [A North Korean Cyber Operation: Exposing ARP-based Covert C2s, WebSocket Malware, and Video Conference Software Abuse](https://i.blackhat.com/SecTor-2025/Sector-25-Sambira-Unmasking-a-North-Koren-IT-Farm.pdf), 2025-10-01 — Writeup Executive Summary through Technical Mitigations; deck pages 7–15 and 31–33. Sygnia says a U.S. federal raid on a suspected laptop farm recovered a corporate laptop that was returned to the employer and analyzed. The system used lightweight Python modules for user-presence beaconing, WebSocket C2, WebSocket-to-ARP rebroadcast, ARP listening, HID input simulation, and Zoom automation. Sygnia explicitly says no Zoom security feature or prompt was bypassed and no confirmed data exfiltration was observed
- Sygnia, [Unmasking a North Korean IT Farm: How North Korean IT Workers Stay Undetected](https://www.sygnia.co/blog/unmasking-north-korean-it-farm), 2025-04-28 — Writeup Executive Summary through Technical Mitigations; deck pages 7–15 and 31–33. Sygnia says a U.S. federal raid on a suspected laptop farm recovered a corporate laptop that was returned to the employer and analyzed. The system used lightweight Python modules for user-presence beaconing, WebSocket C2, WebSocket-to-ARP rebroadcast, ARP listening, HID input simulation, and Zoom automation. Sygnia explicitly says no Zoom security feature or prompt was bypassed and no confirmed data exfiltration was observed
- Black Hat / SecTor, [Unmasking a North Korean IT Farm](https://www.youtube.com/watch?v=wUQJ5pjZDgo), 2026-04-19 — Writeup Executive Summary through Technical Mitigations; deck pages 7–15 and 31–33. Sygnia says a U.S. federal raid on a suspected laptop farm recovered a corporate laptop that was returned to the employer and analyzed. The system used lightweight Python modules for user-presence beaconing, WebSocket C2, WebSocket-to-ARP rebroadcast, ARP listening, HID input simulation, and Zoom automation. Sygnia explicitly says no Zoom security feature or prompt was bypassed and no confirmed data exfiltration was observed

*Data file: [`data/entities/ttp/dmt-ttp-arp-websocket-hid-covert-control.json`](../../../data/entities/ttp/dmt-ttp-arp-websocket-hid-covert-control.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
