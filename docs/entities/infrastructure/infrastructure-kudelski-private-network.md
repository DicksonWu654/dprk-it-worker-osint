# internal RFC1918 architecture; non-routable context only

`infrastructure-kudelski-private-network` · Infrastructure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> mixed

| | |
|---|---|
| Last verified | 2026-08-11 |

## Caveats

- RFC1918 values are private-network addresses; their recurrence across unrelated networks makes them unsuitable as internet IOCs.

## Source-backed context

- internal-network-cluster: value: English-training server; confidence_note: high observed, low threat significance; relationship: reported-link
- internal-network-cluster: value: Team 313; confidence_note: medium for observed network; low for generalized gateway convention; relationship: reported-link
- internal-network-cluster: value: RB / Ryonbong; confidence_note: medium-high source assessment; relationship: reported-link
- internal-network-cluster: value: KUT / Kim Chaek University of Technology; confidence_note: medium; relationship: reported-link
- internal-network-cluster: value: PUG; confidence_note: low; acronym, location, and purpose unresolved; relationship: reported-link

## Sources

- Kudelski Security Research Center, [DPRK Fake IT Workers: Inside Their Evolving Network Infrastructure](https://kudelskisecurity.com/research/dprk-fake-it-workers-inside-their-evolving-network-infrastructure), 2026-07-17 — Figure 2: Russian exit-node mapping; Figure 4: public-facing infrastructure; Figure 5: Team 313 network; Figure 6: RB administrative network; Figures 7-8: KUT website/network; Figure 9: offensive infrastructure. Team 313: private-network address (redacted) Huawei HiLink router gateway RB / Ryonbong: private-network address (redacted) WebRTC server, CallPC communications tool KUT / Kim Chaek University of Technology: institutional email (redacted), 41-KUT, 42-KUT, HQ, Ryonbong, 13-team reference set PUG: user/team label Yuhang English-training server: private-network address (redacted) WordPress media server

*Data file: [`data/entities/infrastructure/infrastructure-kudelski-private-network.json`](../../../data/entities/infrastructure/infrastructure-kudelski-private-network.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
