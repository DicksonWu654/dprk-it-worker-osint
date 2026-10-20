# PC-1234

`persona-dtex-pc-1234` · Employment persona · Attributed by security researchers or press · confidence medium · **needs corroboration**

> internal payment-server administrator account

**Identity boundary.** PC-1234 is a DTEX-reported historical administrator label on an internal DPRK payment server; it remains a role label separate from any legal identity and from the unknown actor who reportedly impersonated it to distribute malware.

| | |
|---|---|
| Accounts | luckyguys internal platform `PC-1234` (historical) |
| Last verified | 2026-08-11 |

## Caveats

- An internal handle identifies a label rather than a legal identity; DTEX also reports a prior impersonator using it to push malware.
- Presented names and account labels are source-reported personas or handles; legal identity requires source evidence.

## Claims (7)

| Claim | Value | Confidence | Status | Source |
|---|---|---|---|---|
| publisher reported internal server role | {"label": "PC-1234", "role": "server administrator account", "platform_context": "DTEX-reported internal payment server"} | high | published | [DTEX Systems](https://www.dtex.ai/blog/dprk-it-worker-money-trail) (Payment workflow) |
| publisher reported payment processing role | {"activity": "processed and confirmed payments", "scope": "DTEX-described payment-server stream"} | high | published | [DTEX Systems](https://www.dtex.ai/blog/dprk-it-worker-money-trail) (Payment workflow) |
| publisher reported historical direct message counterparty | {"counterparty_label": "Rascal", "topics": ["payment transfers", "use of fraudulent identities"], "period": "2025-12 to 2026-04"} | high | needs corroboration | [DTEX Systems](https://www.dtex.ai/blog/dprk-it-worker-money-trail) (Payment workflow) |
| publisher reported payment verification and instructions | {"activity": "verified submitted payments and issued follow-on instructions", "instruction_scope": ["platform access", "account usage"]} | high | needs corroboration | [DTEX Systems](https://www.dtex.ai/blog/dprk-it-worker-money-trail) (Payment workflow) |
| publisher assessed payment stream link | {"assessment": "payment confirmations were repeatedly framed around PC-1234 and an RB wallet", "publisher_assessed_reference": "likely Ryongbong General Corporation", "selector_retained": false} | medium | needs corroboration | [DTEX Systems](https://www.dtex.ai/blog/dprk-it-worker-money-trail) (RB wallet and assessed linkage); [DTEX Systems](https://www.dtex.ai/blog/dprk-it-worker-money-trail) (RB wallet and assessed linkage) |
| publisher reported label impersonation | {"impersonator": "unknown actor", "activity": "impersonated PC-1234 and pushed malware-laced software", "same_operator": false} | high | needs corroboration | [DTEX Systems](https://www.dtex.ai/blog/dprk-it-worker-money-trail) (Unknown efforts and targeting) |
| edited press relayed dtex tracking and activity assessment | {"label": "PC-1234", "reported_role": "single administrator of the internal payment-server data", "tracking_source": "DTEX", "tracking_duration": "for a while", "wallet_cluster_status": "reported active", "selector_retained": false} | medium | needs corroboration | [CyberScoop](https://cyberscoop.com/north-korea-it-worker-scheme-funds-russia-war-ukraine/) (Paragraph beginning Data from the internal North Korean payment server) |

<details><summary>Exact quotes</summary>

- **publisher reported internal server role** — “the server administrator account PC-1234” — DTEX Systems, Payment workflow
- **publisher reported payment processing role** — “all payments were processed and confirmed through the server administrator account PC-1234” — DTEX Systems, Payment workflow
- **publisher reported historical direct message counterparty** — “direct messages between the user Rascal and PC-1234 covered payment transfers and the use of fraudulent identities from December 2025 through April 2026” — DTEX Systems, Payment workflow
- **publisher reported payment verification and instructions** — “Once submitted, those payments were verified by PC-1234, who responded with follow-on instructions tied to platform access and account usage” — DTEX Systems, Payment workflow
- **publisher assessed payment stream link** — “assess that references to the “RB wallet” are likely references to the OFAC sanctioned Ryongbong General Corporation” — DTEX Systems, RB wallet and assessed linkage
- **publisher assessed payment stream link** — “The same chat stream repeatedly frames payment confirmation around PC-1234 and the RB wallet” — DTEX Systems, RB wallet and assessed linkage
- **publisher reported label impersonation** — “Separate information from internal holdings a year prior identified an actor impersonating PC-1234 and pushing malware-laced software to DPRK IT workers.” — DTEX Systems, Unknown efforts and targeting
- **edited press relayed dtex tracking and activity assessment** — “Data from the internal North Korean payment server, which was first published by ZachXBT in April, is controlled by “PC-1234,” a single administrator that DTEX has been tracking for a while. The wallet and its cluster of activity remains active, Barnhart said.” — CyberScoop, Paragraph beginning Data from the internal North Korean payment server

</details>

## Sources

- DTEX Systems, [From Payroll to Pyongyang: The DPRK IT Worker Money Trail](https://www.dtex.ai/blog/dprk-it-worker-money-trail), 2026-07-21 — Payment workflow screenshots; RB-wallet assessment screenshot; https://www.dtex.ai/payment_breakdown.html; https://www.dtex.ai/org_hierarchy.html; https://www.dtex.ai/geography_map.html. DTEX says payments were processed and confirmed through this administrator account Repeatedly acknowledged RB-wallet payments and issued follow-on instructions
- CyberScoop, [North Korea's IT worker scheme funds Russia's war effort](https://cyberscoop.com/north-korea-it-worker-scheme-funds-russia-war-ukraine/), 2026-07-21

*Data file: [`data/entities/persona/persona-dtex-pc-1234.json`](../../../data/entities/persona/persona-dtex-pc-1234.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
