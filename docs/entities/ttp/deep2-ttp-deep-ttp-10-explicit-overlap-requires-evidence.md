# Employment-fraud and fake-interview malware clusters may overlap, but linkage must be source-specific

`deep2-ttp-deep-ttp-10-explicit-overlap-requires-evidence` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Defensive synthesis of cited public sources. First-party platform control or threat-research guidance is normalized as defensive context; technique mapping describes methods. Identity attribution and proof of control effectiveness are outside scope.

| | |
|---|---|
| lazarus.group profiles | cluster-cl-sta-0237, cluster-wagemole, deep2-ttp-deep-ttp-10-explicit-overlap-requires-evidence |
| Last verified | 2026-08-12 |

## Caveats

- Employment fraud and fake-interview malware remain separate absent source-specific cluster, personnel, or infrastructure evidence.
- False-positive caution: Shared infrastructure, hosting provider, malware family, or country attribution alone may be insufficient to prove the same operators.
- False-positive caution: Threat-intelligence indicators age quickly and may be shared or reassigned. Avoid adverse employment decisions based only on technical IOCs.
- Shared infrastructure, personas, or state objective can coexist; employment-persona status is determined separately for each account.
- Shared state sponsorship or infrastructure can span malware and employment contexts; account classification requires source-specific linkage.
- The GitHub fake-interview malware account list is intentionally omitted; the dataset treats it separately from employment-persona records.
- This classification rule derives from the sources; personnel and infrastructure overlap remains an open question.

## Source-backed context

- Provider disclosures must preserve campaign separation: GitHub's 2023 Jade Sleet account and npm list belongs to a malicious repository-invitation campaign, whereas GitLab's 2026 report contains both malware and distinct fraudulent-employment case studies. Account lists should inherit the source's case-study mapping rather than a broad 'DPRK IT worker' label.
- Unit 42 explicitly links CL-STA-0237 fake-worker activity to BeaverTail video-conference phishing, demonstrating that overlap can occur. UN S/2020/151 nevertheless provides a strong default separation, and Kudelski’s June 2026 article primarily describes recruiter-to-victim malware. Therefore, only explicit cluster-level or case-level evidence should merge the two phenomena.

## Sources

- GitLab Threat Intelligence, [GitLab Threat Intelligence Team reveals North Korean tradecraft](https://about.gitlab.com/blog/gitlab-threat-intelligence-reveals-north-korean-tradecraft), 2026-02-19 — Executive summary; Year in Review; Case Studies 1-4; mitigations and appendices. GitHub's named 2023 accounts belong to a malicious repository-invitation campaign, while GitLab's 2026 reporting contains both malware and separate fraudulent-employment case studies. Account-level labels must inherit the source's case mapping
- United Nations Security Council Panel of Experts established pursuant to resolution 1874 (2009), [Final report of the Panel of Experts established pursuant to resolution 1874 (2009) (S/2020/151)](https://documents.un.org/api/symbol/access?l=en&s=S%2F2020%2F151&t=pdf), 2020-03-02 — Annex 29. UN Annex 29 supports default separation of IT-worker revenue activity from malicious cyber operations
- GitHub Security, [Security alert: social engineering campaign targets technology industry employees](https://github.blog/security/vulnerability-research/security-alert-social-engineering-campaign-targets-technology-industry-employees), 2023-07-18 — Threat actor profile; Attack chain; What GitHub is doing; Indicators. GitHub's named 2023 accounts belong to a malicious repository-invitation campaign, while GitLab's 2026 reporting contains both malware and separate fraudulent-employment case studies. Account-level labels must inherit the source's case mapping
- Kudelski Security Research Center, [How DPRK’s Contagious Interview Campaign Targets Developers](https://kudelskisecurity.com/research/how-dprks-contagious-interview-campaign-targets-developers), 2026-06-30 — Campaign summary and repository chain. Kudelski's reviewed campaign primarily describes recruiter-to-victim malware
- Palo Alto Networks Unit 42, [Fake North Korean IT Worker Linked to BeaverTail Video Conference App Phishing Attack](https://unit42.paloaltonetworks.com/fake-north-korean-it-worker-activity-cluster), 2024-11-14 — Executive Summary and attribution. Unit 42 provides a source-specific example of fake-worker and BeaverTail overlap

*Data file: [`data/entities/ttp/deep2-ttp-deep-ttp-10-explicit-overlap-requires-evidence.json`](../../../data/entities/ttp/deep2-ttp-deep-ttp-10-explicit-overlap-requires-evidence.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
