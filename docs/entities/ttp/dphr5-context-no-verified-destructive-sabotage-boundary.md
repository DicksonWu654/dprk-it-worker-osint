# No verified destructive sabotage or ransomware case in reviewed employment evidence

`dphr5-context-no-verified-destructive-sabotage-boundary` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> Review of public sources through August 12, 2026 verified no destructive sabotage; undisclosed or later cases require separate evidence.

| | |
|---|---|
| TTPs | analytic-boundary, destructive-impact-not-verified, evidence-classification, ransomware-not-verified |
| Last verified | 2026-08-12 |

## Caveats

- An official conference abstract mentioning ransomware or malware describes presentation scope; incident status requires a separate incident source.
- The record describes reported conduct by specific fraudulent workers; theft, extortion, espionage, persistence, and sabotage remain case-specific.
- Evidence class: negative finding and analytic boundary.
- Exabeam's incident timeline includes endpoint containment and possible local cleanup after detection; the public deck leaves destructive business impact unestablished.
- Fraudulent employment, post-hire insider abuse, fake-interview malware, and external intrusion remain separate analytic tracks unless a source expressly establishes same-case overlap.
- The record retains bounded source context; people, personas, accounts, entities, victim organizations, raw data, sensitive selectors, images, wallets, payment identifiers, and private repository content stay outside it.
- The Missouri case includes public posting of proprietary material and later removal of that posted copy after payment; employer-system deletion status is unreported.

## Source-backed context

- Reviewed official cases and first-party reports support extortion, public disclosure, attempted exfiltration, direct financial theft, privileged access and defensive concern about persistence or modification. They do not publicly establish ransomware deployment, encryption for impact, deliberate production destruction or deletion of an employer's authoritative source repositories by a fraudulent worker.
- Do not label public posting followed by removal of the posted copy, endpoint cleanup, or precautionary persistence review as ransomware, wiper activity, destructive sabotage, or deletion of an employer's authoritative source repository.

## Sources

- Exabeam, [From Hired to Fired: Lessons From a Real Insider Threat](https://www.exabeam.com/wp-content/uploads/SLIDEDECK-From-Hired-to-Fired-Lessons-From-a-Real-Insider-Threat.pdf), 2026-06-02 — Slides 5-12 and 24. Exabeam describes a newly onboarded user it attributed to a North Korean threat-actor scenario who immediately installed remote-access or C2-related software and attempted to exfiltrate company data. The organization isolated and ultimately disabled the endpoint and shared indicators with the FBI. Reviewed official cases and first-party reports support extortion, public disclosure, attempted exfiltration, direct financial theft, privileged access and defensive concern about persistence or modification. They do not publicly establish ransomware deployment, encryption for impact, deliberate production destruction or deletion of an employer's authoritative source repositories by a fraudulent worker
- U.S. Department of Justice, [Indictment, United States v. Jong Song Hwa et al.](https://www.justice.gov/opa/media/1380081/dl), 2024-12-11 — Paragraphs 6, 23-25, 28-44 and 63-67; PDF pages 3, 8-12 and 16. The indictment alleges that conspirators used employment access to obtain proprietary material, demanded additional payments after termination or discovery, threatened publication, and in three described episodes posted employer material on a public software-development website. One posting allegedly caused substantial loss and damage; in another episode, posted source code was removed after a payment. Reviewed official cases and first-party reports support extortion, public disclosure, attempted exfiltration, direct financial theft, privileged access and defensive concern about persistence or modification. They do not publicly establish ransomware deployment, encryption for impact, deliberate production destruction or deletion of an employer's authoritative source repositories by a fraudulent worker
- Microsoft Threat Intelligence, [Jasper Sleet: North Korean remote IT workers’ evolving tactics to infiltrate organizations](https://www.microsoft.com/en-us/security/blog/2025/06/30/jasper-sleet-north-korean-remote-it-workers-evolving-tactics-to-infiltrate-organizations), 2025-06-30 — From North Korea to the world; Remediate; insider-risk detections. Microsoft states that technology roles can expose sensitive information and says workers have used access to steal intellectual property, source code or trade secrets and in some cases extort employers. Its response guidance recommends treating a confirmed placement as an insider-risk incident and examining all accessible systems for persistence or modification. Reviewed official cases and first-party reports support extortion, public disclosure, attempted exfiltration, direct financial theft, privileged access and defensive concern about persistence or modification. They do not publicly establish ransomware deployment, encryption for impact, deliberate production destruction or deletion of an employer's authoritative source repositories by a fraudulent worker

*Data file: [`data/entities/ttp/dphr5-context-no-verified-destructive-sabotage-boundary.json`](../../../data/entities/ttp/dphr5-context-no-verified-destructive-sabotage-boundary.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
