# Hotmon and NetProvider DPRK IT-worker communications tools

`hotmon-netprovider-tools` · Infrastructure · Attributed by security researchers or press · confidence high

> Gordon identifies Hotmon as a HopanaTech tool used by DPRK IT workers and NetProvider as a functionally similar variant

| | |
|---|---|
| Aliases | Hotmon, NetProvider |
| Organizations | HopanaTech |
| TTPs | Require key-file and password material for access, Reuse functionally similar software under a different interface/name, Use specialized peer-to-peer communication software among IT workers or with operators in the DPRK |
| Last verified | 2026-08-12 |

## Caveats

- The researcher lacked the key/password, so behavior was inferred from static inspection and community context.

## Source-backed context

- software: value: WinPcap-based peer-to-peer communication applications requiring a key file and password; relationship: observed-in-investigation

## Sources

- BSides Pyongyang, [Who Watches the Workmen? Hacking Activity Targeting DPRK IT Workers](https://www.youtube.com/watch?v=x4a24slACeU), 2026-07-07 — 01:45–09:31 Hopana Tech/Hotmon findings; 09:31–18:55 HEPTA-X investigation and attribution; 18:55–20:23 takeaways. Official conference-channel recording of Daniel Gordon’s research into backdoored software distributed to DPRK IT workers and a low-confidence attribution assessment for the HEPTA-X cluster

*Data file: [`data/entities/infrastructure/hotmon-netprovider-tools.json`](../../../data/entities/infrastructure/hotmon-netprovider-tools.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
