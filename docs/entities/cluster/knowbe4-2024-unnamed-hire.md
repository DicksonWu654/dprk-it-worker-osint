# KnowBe4 July 2024 unnamed DPRK IT-worker hire

`knowbe4-2024-unnamed-hire` · Cluster or incident · Reported by an affected organization · confidence confirmed

> KnowBe4 says Mandiant and the FBI corroborated its conclusion; the operator remains unnamed and no public charge is linked in the disclosure.

| | |
|---|---|
| Organizations | Federal Bureau of Investigation, KnowBe4, Mandiant |
| Locations (historical, per source) | North Korea or China (KnowBe4’s general physical-location explanation, not a confirmed location for this person), United States (stolen identity and laptop-farm context) |
| TTPs | Attempt to manipulate session-history files and transfer potentially harmful files, Begin suspicious activity immediately after the workstation was received, Evade follow-up calls and provide weak explanations after SOC contact, Pass four video interviews using the face shown in an AI-enhanced application image, Request laptop delivery into a U.S. laptop-farm workflow, Use a valid stolen U.S. identity to pass background and reference checks |
| Last verified | 2026-08-11 |

## Caveats

- The stolen U.S. identity and operator name remain undisclosed; KnowBe4 intentionally withheld them during an active FBI investigation.
- KnowBe4 reports attempted malware blocked before execution, with no breach, illegal access, data loss, compromise, or exfiltration; its companion FAQ limits the reviewed account to its own email inbox.
- Person-bearing imagery is source-page-only. Keep it uncached, uncropped, and unpublished; facial recognition, visual matching, legal-identity bridging, and inferences about current appearance, ownership, control, nationality, or location are outside scope.
- The July 23 disclosure and July 25 FAQ are one first-party incident source family; corroboration count is one source family.
- This source was already listed in research/raw/security-vendors.json; this record adds first-party incident detail rather than a new named persona.

## Source-backed context

- endpoint: value: Company-issued Mac workstation
- remote-access: value: AnyDesk and VPN behavior described in the incident report
- remote-access: value: Raspberry Pi / laptop-farm mechanics described by KnowBe4

## Sources

- KnowBe4, [How a North Korean Fake IT Worker Tried to Infiltrate Us](https://blog.knowbe4.com/how-a-north-korean-fake-it-worker-tried-to-infiltrate-us), 2024-07-23 — Incident Report Summary; July 15 timeline; stock-photo/AI comparison. KnowBe4 says it hired a principal software engineer using a valid stolen U.S. identity. Four video interviews and background checks passed; the company says Mandiant and the FBI corroborated its DPRK assessment. EDR alerted when the new Mac began suspicious activity on July 15, 2024. KnowBe4 says no illegal access, data loss, compromise, or exfiltration occurred
- KnowBe4, [Frequently Asked Questions About KnowBe4's Fake IT Worker Blog](https://blog.knowbe4.com/north-korean-fake-it-worker-faq), 2024-07-25 — Updated July 27, 2024; Q1-Q5 incident and access boundaries; Q7 hiring-process statement; Q9 changed equipment-delivery procedure. KnowBe4 clarifies that it was not breached; the worker had no access to customer data, private networks, cloud infrastructure, code, confidential information, or the KnowBe4 platform; the reviewed user account accessed nothing beyond its own email inbox; the attempted malware was blocked and did not execute; and the laptop was quarantined within minutes. The FAQ is a companion clarification to the July 23 incident disclosure, not independent corroboration

*Data file: [`data/entities/cluster/knowbe4-2024-unnamed-hire.json`](../../../data/entities/cluster/knowbe4-2024-unnamed-hire.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
