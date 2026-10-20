# Ballena Azul controlled-work toolset and infrastructure observations

`anyrun-ballena-azul-toolset-infrastructure` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> Technical observations are from a controlled research environment; source labels some infrastructure as DPRK-operated or associated with Famous Chollima

| | |
|---|---|
| Accounts | IP/hosting `62.33.223.165 / INVESTSTROY-NET (InvestStroyTrest)` (historical); VPN `AstrillVPN exit-node set` (historical) |
| Organizations | Famous Chollima, InvestStroyTrest, Lazarus Group |
| Front companies | Ballena Azul LTD / Blue Whale LTD |
| Locations (historical, per source) | DPRK-operated VPS infrastructure (source attribution) |
| TTPs | account synchronization exposing stored browser data, AI-assisted coding, translation, and troubleshooting, CAPTCHA friction and disposable VDI behavior, device and environment reconnaissance, proxying into employer VDI from longer-lived servers, remote desktop installation, selective network and cursor disruption observed during the controlled experiment, Telegram channel renaming after infrastructure takedowns, testnet wallet/faucet activity |
| Last verified | 2026-08-11 |

## Caveats

- Tool presence is an indicator; maliciousness or DPRK control in another environment requires independent evidence.

## Source-backed context

- ai: value: ChatGPT and browser AI-assistance extensions; relationship: observed-in-investigation
- proxy: value: operative servers used as proxies/vantage points into VDIs; relationship: observed-in-investigation
- remote-desktop: value: AnyDesk and Google Remote Desktop; relationship: observed-in-investigation
- vpn: value: AstrillVPN; relationship: observed-in-investigation

## Sources

- ANY.RUN, [Smile, You’re on Camera! Part 2: Lazarus IT Workers Exposed](https://any.run/cybersecurity-blog/lazarus-group-it-workers-investigation-part-two), 2026-08-10 — Chapter VI; Famous Chollima New Toolset & Infrastructure; IOCs. Chapters VI and the IOCs section describe the toolset, VDI observations, proxy servers, VPN exit nodes, and published infrastructure indicators

*Data file: [`data/entities/ttp/anyrun-ballena-azul-toolset-infrastructure.json`](../../../data/entities/ttp/anyrun-ballena-azul-toolset-infrastructure.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
