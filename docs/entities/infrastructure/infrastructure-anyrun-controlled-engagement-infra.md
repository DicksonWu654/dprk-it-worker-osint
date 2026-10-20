# infrastructure observed during controlled worker engagement

`infrastructure-anyrun-controlled-engagement-infra` · Infrastructure · Attributed by security researchers or press · confidence high · **needs corroboration**

> high as observed; provider classification caveat applies

| | |
|---|---|
| Organizations | Alibaba Cloud, Datacamp, Gorilla Servers, Server-Mania, Vultr |
| Last verified | 2026-08-11 |

## Caveats

- Hosting/VPN provider use is common infrastructure context. Wallets are published cluster-level IOCs with an uncertain one-to-one persona mapping.
- Named hosting and VPN providers offer legitimate services; observed use supplies contextual provider information.
- The ANY.RUN article and DEF CON deck are one controlled-investigation source family; the deck is retained only for slide-specific routing context.

## Source-backed context

- source-published-indicator: value: 104.250.148.58; description: Astrill VPN exit node; relationship: reported-link
- source-published-indicator: value: 107.150.38.250; description: Astrill VPN exit node; relationship: reported-link
- source-published-indicator: value: 192.200.115.226; description: Astrill VPN exit node; relationship: reported-link
- source-published-indicator: value: 199.168.112.175; description: Astrill VPN exit node; relationship: reported-link
- source-published-indicator: value: 206.217.134.34; description: Astrill VPN exit node; relationship: reported-link
- source-published-indicator: value: 185.152.67.39; description: DPRK-operated VPS; relationship: reported-link
- source-published-indicator: value: 45.77.71.42; description: DPRK-operated VPS; relationship: reported-link
- source-published-indicator: value: 62.33.223.165; description: InvestStroyTrest / Vladivostok residential or routing infrastructure; relationship: reported-link
- source-published-indicator: value: 89.187.185.11; description: source inconsistency: article IOC calls DPRK-operated VPS; narrative/slides call Astrill VPN node; relationship: reported-link

## Sources

- ANY.RUN, [Smile, You’re on Camera! Part 2: Lazarus IT Workers Exposed](https://any.run/cybersecurity-blog/lazarus-group-it-workers-investigation-part-two), 2026-08-10 — Chapter VI: “The North Korean Job”; “Famous Chollima New Toolset & Infrastructure”; “IOCs” appendix. The article narrative and IOC appendix report the controlled-engagement IP, VPN, VPS, provider,, including the article’s inconsistent classification of 89.187.185.11
- BCA LTD / NorthScan / ANY.RUN, [Smile, You’re on Camera! A Live Stream from Inside Lazarus’ IT Workers Scheme](https://media.defcon.org/DEF%20CON%2034/DEF%20CON%2034%20presentations/DEF%20CON%2034%20presentations/DEF%20CON%2034%20-%20Heiner%20Garc%C3%ADa%2C%20Mauro%20Eldritch%20-%20Smile%2C%20you%27re%20on%20camera%20Livestreaming%20from%20North%20Korea%27s%20IT%20workers%20laptop%20farm%20-%20Are%20v2.pdf), 2026-08-09 — PDF pp. 23–26, exit-node and InvestStroyTrest routing context. Slides 23–26 specifically diagram the exit-node and InvestStroyTrest routing context for 62.33.223.165 and 89.187.185.11; the deck is part of the same investigation and does not independently corroborate the article

*Data file: [`data/entities/infrastructure/infrastructure-anyrun-controlled-engagement-infra.json`](../../../data/entities/infrastructure/infrastructure-anyrun-controlled-engagement-infra.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
