# Continuous recruitment-integrity and cross-sector identity-risk governance

`drh-ttp-continuous-recruitment-integrity-governance` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> Defensive governance synthesis from public platform, policy, practitioner, and official guidance; official contextual controls inform the recommendations, while the broader bundle and DPRK incident remain unattributed.

| | |
|---|---|
| TTPs | borrowed-identity, company-network-access, continuous-remote-access-monitoring, credential-sharing, false-employment-persona, identity-verification, inconsistent-language-or-timezone, interview-assistance, multiple-personas, proxy-interviewee, referral-network, regime-revenue-remittance, remote-workforce-infiltration, stolen-identity |
| lazarus.group profiles | deep2-ttp-deep-ttp-11-cloud-saas-posthire-correlation, dfp-ttp-payroll-beneficiary-screening-boundary, drh-ttp-continuous-recruitment-integrity-governance, pindrop-unnamed-hiring-observations, ttp-ttp-insider-threat, ttp-ttp-recruiting |
| Last verified | 2026-10-18 |

## Caveats

- Apply controls consistently with privacy, employment, labor, accessibility, retention, notice, correction, and access-governance requirements.
- Checks are optional and jurisdiction-dependent; published material supplies no DPRK-specific efficacy or enforcement data.
- Controls must be applied consistently and lawfully; demographic, accent, nationality, ethnicity, or appearance-based screening is excluded.
- Isolated VPN, device and location anomalies require corroboration. The DPRK example in this article relies partly on secondary reporting.
- Identity and remote-access anomalies are screening signals that require corroboration before supporting a nationality, identity, intent, or DPRK-affiliation finding.
- Identity verification and background checks are optional, jurisdiction-dependent, and point-in-time controls; their assurance is limited to the documented review.
- Official contextual guidance adds context only; separate cluster attribution and recommendations made by other sources rely on their own source records.
- Pindrop's internal applicant ratios describe its own sample; labor-market use or detector thresholds require independent validation.
- Profile age, camera behavior, time-zone mismatch, VPN use, pauses, and language differences are weak signals with many benign explanations.
- Reverification should be risk-based, proportionate, privacy-preserving, and paired with human review and applicable legal safeguards.
- Risk-based reverification must be lawful, proportionate, accessible, and privacy-preserving; routine biometric surveillance falls outside that control.
- The landing page and PDF are one publication family and supply one corroboration line.
- The report provides general official guidance; a Singapore employer hire or compromise requires a separate incident source.
- These are policy recommendations describing desired controls; actor behavior remains unobserved.
- This is first-party vendor guidance and product positioning; DPRK detection-rate measurement requires an independent study. Identity checks require human review and privacy/legal safeguards.
- Use the pattern to prioritize documented human-led review; DPRK affiliation, fraud, and malicious intent require a combined evidence record.

## Claims (1)

| Claim | Value | Confidence | Status | Source |
|---|---|---|---|---|
| strategic risk assessment | {"publication": "cises-2026-09-12-remote-work-risk", "statement": "CISES assesses structural weaknesses in digital labour markets, identity verification, and remote-work ecosystems."} | high | needs corroboration | [Centre for International Security Studies (CISES)](https://cises.org/2026/09/12/remote-work-as-a-vector-of-strategic-risk/) (Analysis section) |

<details><summary>Exact quotes</summary>

- **strategic risk assessment** — “This activity exploits structural weaknesses in digital labour markets, identity-verification systems, and remote-work ecosystems.” — Centre for International Security Studies (CISES), Analysis section

</details>

## Source-backed context

- Remote offers optional contractor background checks covering education, employment history, sanctions, and criminal records where available, while KYC is intended to address identity misuse, impersonation, fraud, and AML obligations.
- Persona models candidate fraud as a lifecycle: AI-generated or false applications, proxy/deepfake screening, legitimate credential and device issuance, insider access, then residual access after offboarding. It recommends signal aggregation and reverification before provisioning and at later high-risk moments.
- Pindrop reports that inconsistencies in its hiring experience sometimes appeared only across repeated interactions and says operators adapted previously common profile-age, camera, and time-zone behaviors.
- Treat identity assurance as a series of checkpoints: interview, onboarding, first privileged access, material profile or payroll change, device replacement, and selected risk-based post-hire moments.
- Compare identity continuity across live interactions, trusted-channel references, device possession, account recovery, work behavior, and approved exceptions rather than relying on static profile-age or camera rules.
- Create a feedback loop between recruiters, managers, fraud, IT, and security because each function sees only part of the sequence.
- CSA describes disguised freelance-developer or remote-employee roles as a route for DPRK-linked workers to gain access to company networks and direct earnings to the DPRK.
- CSA recommends identity verification and continuous monitoring of remote access in response to this remote-workforce threat.
- Persona recommends identity verification at application/screen, before key interviews, at offer/onboarding, and at later high-risk events, linking the verified hiring identity to provisioning, credential issuance, device enrollment, recovery, and offboarding. It explicitly identifies North Korean IT workers among organized/state-sponsored hiring threats.
- 38 North recommends recruitment-integrity standards for sensitive industries and an AML-style, continuous risk-based approach to employee identity rather than one-time onboarding verification.
- The analysis recommends integrating HR into security, sanctions, compliance, and counter-proliferation functions and creating cross-sector information-sharing mechanisms linking cyber, financial, regulatory, recruitment, and private-sector stakeholders.
- Suggested operational controls include live video onboarding, post-hire or surprise re-verification, digital-footprint review, behavioral anomaly detection, and stronger human escalation paths.

## Sources

- Cyber Security Agency of Singapore, [Singapore Cyber Landscape 2024/2025](https://isomer-user-content.by.gov.sg/36/995dbbd7-a1de-4edb-b731-8fa36eb5546e/Singapore%20Cyber%20Landscape%202024_2025.pdf), 2025-09-03 — PDF file page 55, printed p. 108, section “The Targeting of Remote Workforce (SCL2020)”; concluding callback on printed p. 109. CSA describes fake North Korean IT workers disguising themselves as freelance developers or remote employees, gaining company-network access and covertly funneling funds to the DPRK. It says the development reinforces identity verification and continuous monitoring of remote access. Evidence boundary: Official general defensive guidance. It does not identify a Singapore incident, affected employer, worker, facilitator, account, or adjudicated event
- Remote, [Background check services for contractors](https://support.remote.com/hc/en-us/articles/35902813907085-Background-check-services-for-contractors), 2025-04-30 — Service scope and optional onboarding workflow. Remote documents optional, jurisdiction-dependent contractor background checks and KYC intended to address identity misuse, impersonation, fraud, sanctions, and AML obligations
- Remote, [Why am I being asked to do a KYC verification?](https://support.remote.com/hc/en-us/articles/4410443737869-Why-am-I-being-asked-to-do-a-KYC-verification) — Purpose of KYC and identity verification. Remote documents optional, jurisdiction-dependent contractor background checks and KYC intended to address identity misuse, impersonation, fraud, sanctions, and AML obligations
- Persona, [The rise of fake job applicants: Why workforce security must start before day one](https://withpersona.com/blog/fake-job-applicants-why-workforce-security-must-start-before-day-one), 2026-01-21 — Candidate-fraud attack chain; signs; Zero Trust for hiring; verification checkpoints. Persona models identity risk across the application-to-offboarding lifecycle and recommends aggregated signals and later reverification instead of treating onboarding as the terminal trust decision \| Persona recommends staged identity checks from application and interviews through offer, onboarding, provisioning, recovery, and high-risk events, while explicitly discussing North Korean IT-worker risk
- Persona, [Introducing Persona's candidate verification solution: Stop AI-powered candidate fraud before it reaches your workforce](https://withpersona.com/blog/introducing-candidate-verification-solution-by-persona), 2026-03-11 — How candidate verification works; A single platform for the candidate and employee life cycle; Stop security threats before day one. Persona recommends staged identity checks from application and interviews through offer, onboarding, provisioning, recovery, and high-risk events, while explicitly discussing North Korean IT-worker risk
- 38 North, [The Global Threat of DPRK IT Workers](https://www.38north.org/2025/10/the-global-threat-of-dprk-it-workers), 2025-10-07 — A Deeper Look Into ITW Typologies; Recommendations and a Path Forward; Conclusion. 38 North recommends recruitment-integrity standards for sensitive industries and an AML-style, continuous risk-based approach to employee identity rather than one-time onboarding verification. The analysis recommends integrating HR into security, sanctions, compliance, and counter-proliferation functions and creating cross-sector information-sharing mechanisms linking cyber, financial, regulatory, recruitment, and private-sector stakeholders. Suggested operational controls include live video onboarding, post-hire or surprise re-verification, digital-footprint review, behavioral anomaly detection, and stronger human escalation paths
- Cyber Security Agency of Singapore, [Singapore Cyber Landscape 2024/2025](https://www.csa.gov.sg/resources/publications/singapore-cyber-landscape-2024-2025), 2025-09-03 — Publication date and report-download link. The official landing page dates Singapore Cyber Landscape 2024/2025 to September 3, 2025 and links the exact PDF. Evidence boundary: Publication metadata and provenance companion to the report PDF; not independent corroboration
- Pindrop, [Why DPRK IT Workers Change Everything](https://www.pindrop.com/resource/why-dprk-it-workers-change-everything), 2026-07-28 — Attackers are adapting as quickly as defenders; Identity verification is becoming continuous; This isn't just an HR problem. Pindrop reports that inconsistencies in its hiring experience sometimes appeared only across repeated interactions and says operators adapted previously common profile-age, camera, and time-zone behaviors. Pindrop and its guest recommend trusted-channel reference validation and continued identity checks while warning that no single indicator is definitive
- Centre for International Security Studies (CISES), [Remote Work as a Vector of Strategic Risk](https://cises.org/2026/09/12/remote-work-as-a-vector-of-strategic-risk/), 2026-09-12 — Analysis section. CISES assesses structural weaknesses in digital labour markets, identity verification, and remote-work ecosystems.

*Data file: [`data/entities/ttp/drh-ttp-continuous-recruitment-integrity-governance.json`](../../../data/entities/ttp/drh-ttp-continuous-recruitment-integrity-governance.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
