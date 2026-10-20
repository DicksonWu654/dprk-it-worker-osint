# Onboarding and in-employment exfiltration attempts

`dphr5-ttp-onboarding-and-in-employment-exfiltration-attempts` · Tactic, technique or procedure · Reported by an affected organization · confidence high

> First-party observed attempts and defensive abstractions; the record shows an attempt, with loss status unresolved, while ordinary tools remain contextual.

| | |
|---|---|
| TTPs | attempted-data-exfiltration, early-employment-collection, repository-and-cloud-transfer-monitoring, role-baselined-access-review |
| Last verified | 2026-08-12 |

## Caveats

- The record describes reported conduct by specific fraudulent workers; theft, extortion, espionage, persistence, and sabotage remain case-specific.
- Evidence class: first-party observed incident and aggregate.
- Fraudulent employment, post-hire insider abuse, fake-interview malware, and external intrusion remain separate analytic tracks unless a source expressly establishes same-case overlap.
- Git, SharePoint, OneDrive, remote-access tools and LLMs are legitimate technologies; use context, role baselines, access scope and correlated behavior.
- Neither source establishes that all observed attempts succeeded.
- The record retains bounded source context; people, personas, accounts, entities, victim organizations, raw data, sensitive selectors, images, wallets, payment identifiers, and private repository content stay outside it.

## Source-backed context

- CrowdStrike observed attempted transfers through common code and cloud services in some cases, while Exabeam describes attempted company-data exfiltration within days of onboarding amid remote-access and C2-related activity.

## Sources

- CrowdStrike OverWatch, [CrowdStrike 2024 Threat Hunting Report](https://www.crowdstrike.com/explore/crowdstrike-2024-threat-hunting-report/crowdstrike-2024-threat-hunting-report), 2024-08-07 — PDF pages 18-21, Hunting the Insider Threat and FAMOUS CHOLLIMA case study. CrowdStrike reports that in an initial set of fraudulent-worker cases, some subjects attempted data exfiltration through Git, SharePoint or OneDrive while holding remote roles. The report pairs repository or cloud-transfer behavior with endpoint and identity evidence rather than treating use of those services as inherently malicious. CrowdStrike observed attempted transfers through common code and cloud services in some cases, while Exabeam describes attempted company-data exfiltration within days of onboarding amid remote-access and C2-related activity
- Exabeam, [From Hired to Fired: Lessons From a Real Insider Threat](https://www.exabeam.com/wp-content/uploads/SLIDEDECK-From-Hired-to-Fired-Lessons-From-a-Real-Insider-Threat.pdf), 2026-06-02 — Slides 5-12 and 24. Exabeam describes a newly onboarded user it attributed to a North Korean threat-actor scenario who immediately installed remote-access or C2-related software and attempted to exfiltrate company data. The organization isolated and ultimately disabled the endpoint and shared indicators with the FBI. CrowdStrike observed attempted transfers through common code and cloud services in some cases, while Exabeam describes attempted company-data exfiltration within days of onboarding amid remote-access and C2-related activity

*Data file: [`data/entities/ttp/dphr5-ttp-onboarding-and-in-employment-exfiltration-attempts.json`](../../../data/entities/ttp/dphr5-ttp-onboarding-and-in-employment-exfiltration-attempts.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
