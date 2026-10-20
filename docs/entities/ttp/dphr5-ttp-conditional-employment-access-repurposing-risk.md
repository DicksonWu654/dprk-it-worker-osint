# Conditional repurposing of employment-derived access

`dphr5-ttp-conditional-employment-access-repurposing-risk` · Tactic, technique or procedure · Officially attributed (UN or government reporting; not a charge) · confidence medium · **needs corroboration**

> The source gives a conditional aggregate risk assessment covering a potential handoff to a named intrusion team or a completed named-case intrusion; establishment of either event requires corroborating evidence.

| | |
|---|---|
| TTPs | employment-access-repurposing, insider-risk-response, persistence-review, reachable-system-forensics |
| Last verified | 2026-08-12 |

## Caveats

- The record describes reported conduct by specific fraudulent workers; theft, extortion, espionage, persistence, and sabotage remain case-specific.
- Evidence class: government and vendor assessment.
- Fraudulent employment, post-hire insider abuse, fake-interview malware, and external intrusion remain separate analytic tracks unless a source expressly establishes same-case overlap.
- The record retains bounded source context; people, personas, accounts, entities, victim organizations, raw data, sensitive selectors, images, wallets, payment identifiers, and private repository content stay outside it.
- The Dutch source describes domestic cyber incidents separately from fraudulent workers; the source's worker reporting covers a separate subject.
- This pass located no public primary source that safely proves a specific worker handed employer access to a named DPRK intrusion team.

## Source-backed context

- Dutch, Microsoft and Sophos reporting treats legitimate employment access as a contingent pathway to sensitive information, espionage, persistence or access reuse by other DPRK activity. The strongest public language is conditional or aggregate rather than a complete named-case handoff narrative.

## Sources

- General Intelligence and Security Service (AIVD), Military Intelligence and Security Service (MIVD), and National Coordinator for Security and Counterterrorism (NCTV), Netherlands, [Dreigingsbeeld Statelijke Actoren 2025 [State Actor Threat Assessment 2025]](https://www.aivd.nl/documenten/publicaties/2025/07/17/dreigingsbeeld-statelijke-actoren-2025), 2025-07-17 — North Korea section and official summary. The Dutch assessment separately notes DPRK cyber incidents affecting Dutch targets and deceptive IT employment at Western companies, then warns that access or sensitive data obtained through the employment pathway may be exploited opportunistically. Dutch, Microsoft and Sophos reporting treats legitimate employment access as a contingent pathway to sensitive information, espionage, persistence or access reuse by other DPRK activity. The strongest public language is conditional or aggregate rather than a complete named-case handoff narrative
- Microsoft Threat Intelligence, [Jasper Sleet: North Korean remote IT workers’ evolving tactics to infiltrate organizations](https://www.microsoft.com/en-us/security/blog/2025/06/30/jasper-sleet-north-korean-remote-it-workers-evolving-tactics-to-infiltrate-organizations), 2025-06-30 — From North Korea to the world; Remediate; insider-risk detections. Microsoft states that technology roles can expose sensitive information and says workers have used access to steal intellectual property, source code or trade secrets and in some cases extort employers. Its response guidance recommends treating a confirmed placement as an insider-risk incident and examining all accessible systems for persistence or modification. Dutch, Microsoft and Sophos reporting treats legitimate employment access as a contingent pathway to sensitive information, espionage, persistence or access reuse by other DPRK activity. The strongest public language is conditional or aggregate rather than a complete named-case handoff narrative
- Sophos Counter Threat Unit, [NICKEL TAPESTRY expands fraudulent worker operations](https://www.sophos.com/en-us/blog/nickel-tapestry-expands-fraudulent-worker-operations), 2025-05-08 — Opening threat overview; data-theft extortion and insider-threat paragraphs. Sophos says several extortion attempts were reported in 2024, source-code and intellectual-property theft remains an ongoing post-termination risk, and data may be taken within days of hiring but reserved for later coercion. It separately frames cloud or API access, credential theft, trade-secret knowledge and access reuse by other DPRK groups as insider-risk possibilities. Dutch, Microsoft and Sophos reporting treats legitimate employment access as a contingent pathway to sensitive information, espionage, persistence or access reuse by other DPRK activity. The strongest public language is conditional or aggregate rather than a complete named-case handoff narrative

*Data file: [`data/entities/ttp/dphr5-ttp-conditional-employment-access-repurposing-risk.json`](../../../data/entities/ttp/dphr5-ttp-conditional-employment-access-repurposing-risk.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
