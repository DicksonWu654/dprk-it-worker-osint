# Internal payment/remittance platform and pivots

`infrastructure-dtex-luckyguys` · Infrastructure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Medium-high for platform; mixed for organizational mapping. Residential systems and commercial services require corroboration before any malicious label. Vendor research attribution began from a public researcher lead and passive telemetry; legal adjudication remains absent.

| | |
|---|---|
| Organizations | 128-53 / Base4, Chongjin, Command 710, Forest IT, Hamhung, Health IT, Print Teams, Pyongsong, Rason/Wonsan, RB / Ryonbong, Saenal, Sobaeksu, Songkwang, Unit 1020, University of Transport |
| TTPs | remote-access-endpoint, residential-proxy, vpn |
| lazarus.group profiles | infrastructure-dtex-luckyguys, persona-dtex-pc-1234 |
| Last verified | 2026-08-12 |

## Caveats

- Commercial VPNs, residential systems, and services have legitimate uses; telemetry appearance alone supplies a weak signal requiring context.
- Make Team Cymru the direct source for the second certificate-linked endpoint already summarized indirectly through DTEX.
- Prefer hunting/triage language over strict blocklisting.
- Publish percentages and behavior patterns; VPN provider and residential country are context signals for a multi-signal review.
- Several links are DTEX assessments built from curated leaked chats and partner reporting, rather than court findings.
- This record uses the exact existing catalog ID and is merge-only; it extends the existing infrastructure entity.

## Source-backed context

- source-published-indicator: value: 216.158.225.144; description: certificate pivot reported by Team Cymru and summarized by DTEX; relationship: reported-link
- source-published-indicator: value: luckyguys.site; description: internal payment/remittance and messaging platform; relationship: reported-link
- source-published-indicator: value: rbluckyguys.com; description: login panel referenced RB Luckyguys Management; relationship: reported-link
- source-published-indicator: value: luckyguys.cloud; description: related domain registered January 6, 2026; relationship: reported-link
- source-published-indicator: value: 163.245.219.19; description: reported resolution for luckyguys.site; relationship: reported-link
- Team Cymru analyzed 30 days of network activity around luckyguys[.]site infrastructure initially publicized by ZachXBT. VPN-associated connections were 37.5% Astrill, 32.25% Mullvad, and 6.25% Proton VPN.
- US and Latvian residential systems communicated with the infrastructure and also showed Astrill use and access to Gmail, ChatGPT, and Workana.
- An X.509 certificate-name pivot identified a second endpoint associated with luckyguys[.]site that was not in the initial reporting.
- Traffic to both observed endpoints dropped sharply after the April 8 public exposure, which Team Cymru assessed as consistent with infrastructure abandonment after attribution.
- Team Cymru assesses a distributed worker/facilitator network, possible home systems or laptop farms, sanctions-evasion workflows, and overlap with known fake-worker tradecraft.

## Sources

- DTEX Systems, [From Payroll to Pyongyang: The DPRK IT Worker Money Trail](https://www.dtex.ai/blog/dprk-it-worker-money-trail), 2026-07-21 — Payment workflow screenshots; RB-wallet assessment screenshot; https://www.dtex.ai/payment_breakdown.html; https://www.dtex.ai/org_hierarchy.html; https://www.dtex.ai/geography_map.html. luckyguys.site: internal payment/remittance and messaging platform 163.245.219.19: reported resolution for luckyguys.site 216.158.225.144: certificate pivot reported by Team Cymru and summarized by DTEX luckyguys.cloud: related domain registered January 6, 2026 rbluckyguys.com: login panel referenced RB Luckyguys Management
- Team Cymru, [Unmasking DPRK Cyber Threat Actors: Fake IT Worker Infrastructure & Post-Exposure Analysis](https://www.team-cymru.com/post/dprk-fake-it-worker-cyber-threat-actors-infrastructure), 2026-04-22 — VPN Usage Patterns; Residential IP Analysis; Additional IP Uncovered; Key Assessment. Team Cymru analyzed 30 days of network activity around luckyguys[.]site infrastructure initially publicized by ZachXBT. VPN-associated connections were 37.5% Astrill, 32.25% Mullvad, and 6.25% Proton VPN. US and Latvian residential systems communicated with the infrastructure and also showed Astrill use and access to Gmail, ChatGPT, and Workana. An X.509 certificate-name pivot identified a second endpoint associated with luckyguys[.]site that was not in the initial reporting. Traffic to both observed endpoints dropped sharply after the April 8 public exposure, which Team Cymru assessed as consistent with infrastructure abandonment after attribution. Team Cymru assesses a distributed worker/facilitator network, possible home systems or laptop farms, sanctions-evasion workflows, and overlap with known fake-worker tradecraft

*Data file: [`data/entities/infrastructure/infrastructure-dtex-luckyguys.json`](../../../data/entities/infrastructure/infrastructure-dtex-luckyguys.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
