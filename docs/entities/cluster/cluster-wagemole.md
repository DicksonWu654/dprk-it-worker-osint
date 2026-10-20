# Wagemole

`cluster-wagemole` · Cluster or incident · Attributed by security researchers or press · confidence high

> Unit 42 label for job-seeking DPRK IT-worker activity

| | |
|---|---|
| Front companies | Baby Box Info, Cubix Tech, Helix US |
| TTPs | fraudulent remote-employment personas, front-company use, identity and resume fabrication |
| Last verified | 2026-08-11 |

## Caveats

- CL-STA-0237 indicators are retained on their own narrower cluster record.
- The first-party PDF exposes no verified public release date; PDF metadata and HTTP Last-Modified values are not publication evidence.
- Vendor cluster names are analytic labels; legal identities require source-specific attribution.

## Sources

- DTEX Systems, [Exposing DPRK’s Cyber Syndicate and Hidden IT Workforce](https://reports.dtexsystems.com/DTEX-Exposing%20DPRK%20Cyber%20Syndicate%20and%20Hidden%20IT%20Workforce.pdf), 2025-05-14 — PDF pp. 31-40, Figures 9-12. DTEX discusses UNC5267 and Wagemole alongside a source-reported Dandong IT-worker group, persona creation, facilitators, interview assistance, laptop farms, payment laundering, and MFA-bypass tradecraft. Internal workspace and routing selectors are intentionally omitted
- Palo Alto Networks Unit 42, [Fake North Korean IT Worker Linked to BeaverTail Video Conference App Phishing Attack](https://unit42.paloaltonetworks.com/fake-north-korean-it-worker-activity-cluster), 2024-11-14 — Executive Summary; Fake resumes Figures 1-2; Attribution; Indicators of Compromise. Tracks CL-STA-0237, likely Laos-based, and explicitly links its fake-worker activity to BeaverTail video-conference phishing while retaining attribution uncertainty. Publishes 38 email indicators, six domains, and one IP
- Palo Alto Networks Unit 42, [Global Companies Are Unknowingly Paying North Koreans: Here’s How to Catch Them](https://unit42.paloaltonetworks.com/north-korean-it-workers), 2024-11-13 — Examples of Fake IT Worker Personas; Front companies; profile/resume figures. Names Robert, Evan Andrew Daniel, Andrew Gibson, Jacob Samuel John, Stephen Bright, and Ian Roger Gough; identifies Baby Box Info, Helix US, and Cubix Tech. Jovi Arellano is described as an identity-theft victim, not an actor persona

*Data file: [`data/entities/cluster/cluster-wagemole.json`](../../../data/entities/cluster/cluster-wagemole.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
