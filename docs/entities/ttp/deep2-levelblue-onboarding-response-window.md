# Onboarding event-sequence correlation and rapid containment

`deep2-levelblue-onboarding-response-window` · Tactic, technique or procedure · Reported by an affected organization · confidence high · **needs corroboration**

> Defensive pattern from one unnamed affected-organization case; Exabeam source-reported case chronology abstracted into a defensive sequence; generalization requires additional cases, and victim identity or endpoint artifact details stay outside the record.

| | |
|---|---|
| TTPs | malware-deployment, proxy-chain, remote-desktop, remote-management-tool, source-code-exfiltration, vpn |
| lazarus.group profiles | deep2-conference-dco-c3, deep2-levelblue-onboarding-response-window, drh-ttp-endpoint-custody-posthire-control-bundle |
| Last verified | 2026-08-12 |

## Caveats

- Affected-organization/vendor assessment of a suspected North Korea-linked operative; public legal identity and adjudication are outside the record, and the negative findings limit the harm claim.
- AI-generated investigation summaries require analyst validation and should expose the underlying events and uncertainty.
- Apply controls consistently with privacy, employment, labor, accessibility, retention, notice, correction, and access-governance requirements.
- Employer and worker identities remain unresolved.
- The two exact login IPs remain unpublished unless an operational IOC appendix specifically requires them; the behavioral sequence is the durable lesson.
- Enhanced monitoring must be time-bounded, disclosed where required, role-based, and applied consistently; it must not target nationality or appearance, and targeting criteria must follow documented conduct and source-backed risk.
- New hires legitimately install approved developer, accessibility, support, VPN, and virtualization tools during onboarding.
- Publish the exact ten-day chronology and the no-exfiltration/no-persistence result.
- The LevelBlue article and webinar describe the same August 2025 investigation and count as one source family.
- The March 17 blog and May 7 webinar describe the same case and provide a single corroboration stream.
- Use the pattern to prioritize documented human-led review; DPRK affiliation, fraud, and malicious intent require a combined evidence record.

## Source-backed context

- Place new employees and contractors in a transparent, role-specific observation cohort for a limited onboarding period, with stricter allowlisting for RMM, VPN, VM, streaming, and data-transfer tools.
- Correlate first-seen binaries or modules, install bursts, process lineage, network changes, privilege events, and user tenure into one investigation timeline.
- Use staged access and rapid containment authority, but preserve negative findings—such as no exfiltration or persistence—to avoid exaggerating the incident.
- Exabeam's case deck describes individually weak endpoint events becoming actionable after correlation with new-hire tenure, event sequence, user context, and role-inconsistent remote-access installation.
- Correlate a new hire's learned login baseline with unmanaged-device use, abrupt geographic changes, and threat-intelligence matches.
- The account was revoked one business day after the intelligence match; investigation found no exfiltration, persistence, backdoors, malicious artifacts, or residual access.

## Sources

- LevelBlue SpiderLabs, [Live Cyber Lab: How We Detected a Suspected North Korean IT Worker](https://go.levelblue.com/how-levelblue-detected-a-suspected-north-korean-remote-it-worker-in-10-days), 2026-05-07 — Webinar summary and learning objectives. The webinar corroborates the same August 2025 ten-day detected-hire case and rapid account revocation
- Exabeam, [From Hired to Fired: Lessons From a Real Insider Threat](https://www.exabeam.com/wp-content/uploads/SLIDEDECK-From-Hired-to-Fired-Lessons-From-a-Real-Insider-Threat.pdf), 2026-06-02 — slides 7-16 (event and UEBA chronology), slides 18-25 (techniques and controls). Exabeam's case deck describes individually weak endpoint events becoming actionable after correlation with new-hire tenure, event sequence, user context, and role-inconsistent remote-access installation. The deck recommends staged access, enhanced early-tenure monitoring, privilege review, and rapid containment when the combined evidence warrants it
- LevelBlue SpiderLabs, [How LevelBlue OTX and Cybereason XDR Detected a North Korea-Linked Remote IT Worker](https://www.levelblue.com/blogs/spiderlabs-blog/how-levelblue-otx-and-cybereason-xdr-detected-a-north-korea-linked-remote-it-worker), 2026-03-17 — Opening; Detection Timeline; Investigation Findings; MITRE ATT&CK Mapping. A suspected DPRK-linked applicant passed standard verification and was hired on August 15, 2025 for remote work involving Salesforce data. Cybereason XDR learned a China login baseline, then flagged an unmanaged-device login through a US endpoint on August 21. A second login on August 22 matched LevelBlue OTX intelligence for Astrill-associated infrastructure. The organization revoked the account on August 25, ten days after hiring and one business day after the threat-intelligence match. SpiderLabs reviewed interactions, group-chat additions, accessed resources, persistence mechanisms, and remote-access tooling and reported no residual access, backdoors, malicious artifacts, or evidence of exfiltration. LevelBlue maps the case to Valid Accounts (T1078), External Remote Services (T1133), and Multi-hop Proxy (T1090.003)

*Data file: [`data/entities/ttp/deep2-levelblue-onboarding-response-window.json`](../../../data/entities/ttp/deep2-levelblue-onboarding-response-window.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
