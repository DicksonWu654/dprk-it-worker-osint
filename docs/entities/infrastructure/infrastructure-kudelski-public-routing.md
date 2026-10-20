# public exit-node and routing infrastructure

`infrastructure-kudelski-public-routing` · Infrastructure · Attributed by security researchers or press · confidence high · **needs corroboration**

> medium-high as source-observed infrastructure; ownership/role can change

| | |
|---|---|
| Last verified | 2026-08-11 |

## Caveats

- Treat shared VPN/ISP ranges as context; each user's status requires separate evidence.

## Source-backed context

- source-published-indicator: value: 83.234.227.10; cluster: Team 821-39 / Skyfreight Limited; relationship: reported-link
- source-published-indicator: value: 83.234.227.20; cluster: Team 821-39 / Skyfreight Limited; relationship: reported-link
- source-published-indicator: value: 83.234.227.41; cluster: Team 821-39 / Skyfreight Limited; relationship: reported-link
- source-published-indicator: value: 83.234.227.51; cluster: Team 821-39 / Skyfreight Limited; relationship: reported-link
- source-published-indicator: value: 83.234.227.9; cluster: Team 821-39 / Skyfreight Limited; relationship: reported-link
- source-published-indicator: value: 188.43.235.177; note: DZHV-gw.transtelecom.net; source links it to train-company infrastructure; relationship: reported-link
- source-published-indicator: value: 185.242.4.0/24; note: M247 Japan range associated with Mullvad exits; relationship: reported-link
- source-published-indicator: value: 37.120.154.0/24; note: M247 Japan range associated with Mullvad exits; relationship: reported-link
- source-published-indicator: value: 80.83.238.59; note: Vladivostok MTS exit node; source also pivots on 80.83.238.0/24; relationship: reported-link
- source-published-indicator: value: 188.43.33.253; status: inactive/changed; note: reverse DNS changed from investstroytrest-gw.transtelecom.net to SevDirInfr-gw.transtelecom.net; shifted Khabarovsk to Moscow; relationship: reported-link
- source-published-indicator: value: 188.43.33.252; status: inactive/changed; note: same reverse-DNS and location shift; relationship: reported-link
- source-published-indicator: value: 188.43.136.32; status: possibly reattributed; relationship: reported-link
- source-published-indicator: value: 188.43.136.34; status: possibly reattributed; relationship: reported-link

## Sources

- Kudelski Security Research Center, [DPRK Fake IT Workers: Inside Their Evolving Network Infrastructure](https://kudelskisecurity.com/research/dprk-fake-it-workers-inside-their-evolving-network-infrastructure), 2026-07-17 — Figure 2: Russian exit-node mapping; Figure 4: public-facing infrastructure; Figure 5: Team 313 network; Figure 6: RB administrative network; Figures 7-8: KUT website/network; Figure 9: offensive infrastructure. 188.43.33.253: reverse DNS changed from investstroytrest-gw.transtelecom.net to SevDirInfr-gw.transtelecom.net; shifted Khabarovsk to Moscow 188.43.33.252: same reverse-DNS and location shift 80.83.238.59: Vladivostok MTS exit node; source also pivots on 80.83.238.0/24 188.43.235.177: DZHV-gw.transtelecom.net; source links it to train-company infrastructure 188.43.136.32: source-published indicator 188.43.136.34: source-published indicator 83.234.227.9: source-published indicator 83.234.227.10: source-published indicator 83.234.227.20: source-published indicator 83.234.227.41: source-published indicator 83.234.227.51: source-published indicator 37.120.154.0/24: M247 Japan range associated with Mullvad exits 185.242.4.0/24: M247 Japan range associated with Mullvad exits

*Data file: [`data/entities/infrastructure/infrastructure-kudelski-public-routing.json`](../../../data/entities/infrastructure/infrastructure-kudelski-public-routing.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
