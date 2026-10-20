# HEPTA-X activity targeting DPRK IT workers

`hepta-x-it-worker-targeting-cluster` · Cluster or incident · Unverified lead · confidence lead · **needs corroboration**

> Gordon assesses with low confidence that HEPTA-X may itself be North Korean activity spying on DPRK IT workers. Generic TTPs, weak operational security, and imperfect exclusions of other actors limit confidence

| | |
|---|---|
| Aliases | HEPTA-X |
| Organizations | BSides Pyongyang, Cyble |
| TTPs | Add the created account to Remote Desktop permissions, Connect to actor infrastructure through AstrillVPN, Create a local administrative account with a weak reused password, Enable RDP for persistent remote access, Exclude System32 from Windows Defender scanning, Retrieve a second-stage payload from shared command-and-control infrastructure, Steal browser credentials with ChromePass, Trojanize software likely to be downloaded specifically by DPRK IT workers, Use open directories and shared infrastructure that permit campaign pivoting |
| Last verified | 2026-08-12 |

## Caveats

- HEPTA-X remains an unconfirmed DPRK attribution.
- The reported exposure stays within the cited source boundary; a natural-person identity requires additional evidence.
- The talk explicitly rules out several alternatives only imperfectly and keeps attribution at low confidence.
- This is an actor/cluster lead; worker-persona status requires separate evidence.

## Source-backed context

- hosting: value: Namecheap-linked/adversary-registered infrastructure and open directories described in talk; relationship: observed-in-investigation
- malware-delivery: value: Backdoored installers for Hotmon, IP Messenger, Google Update, and WinRAR-like software; relationship: observed-in-investigation
- tooling: value: QuasarRAT, ChromePass, zipped LNK/PowerShell lures, RDP enablement; relationship: observed-in-investigation

## Sources

- BSides Pyongyang, [Who Watches the Workmen? Hacking Activity Targeting DPRK IT Workers](https://www.youtube.com/watch?v=x4a24slACeU), 2026-07-07 — 01:45–09:31 Hopana Tech/Hotmon findings; 09:31–18:55 HEPTA-X investigation and attribution; 18:55–20:23 takeaways. Official conference-channel recording of Daniel Gordon’s research into backdoored software distributed to DPRK IT workers and a low-confidence attribution assessment for the HEPTA-X cluster

*Data file: [`data/entities/cluster/hepta-x-it-worker-targeting-cluster.json`](../../../data/entities/cluster/hepta-x-it-worker-targeting-cluster.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
