# Unnamed August 2025 ten-day detected-hire incident

`deep2-levelblue-august-2025-incident` · Cluster or incident · Reported by an affected organization · confidence medium · **needs corroboration**

> Affected-organization/vendor assessment of a suspected North Korea-linked operative; public legal identity and adjudication are outside the record, and the negative findings limit the harm claim.

| | |
|---|---|
| TTPs | proxy-chain, remote-desktop, vpn |
| Last verified | 2026-08-12 |

## Caveats

- Affected-organization/vendor assessment of a suspected North Korea-linked operative; public legal identity and adjudication are outside the record, and the negative findings limit the harm claim.
- Employer and worker identities remain unresolved.
- The two exact login IPs remain unpublished unless an operational IOC appendix specifically requires them; the behavioral sequence is the durable lesson.
- Publish the exact ten-day chronology and the no-exfiltration/no-persistence result.
- The LevelBlue article and webinar describe the same August 2025 investigation and count as one source family.
- The March 17 blog and May 7 webinar describe the same case and provide a single corroboration stream.

## Source-backed context

- A suspected DPRK-linked applicant passed standard verification and was hired on August 15, 2025 for remote work involving Salesforce data.
- Cybereason XDR learned a China login baseline, then flagged an unmanaged-device login through a US endpoint on August 21. A second login on August 22 matched LevelBlue OTX intelligence for Astrill-associated infrastructure.
- The organization revoked the account on August 25, ten days after hiring and one business day after the threat-intelligence match.
- SpiderLabs reviewed interactions, group-chat additions, accessed resources, persistence mechanisms, and remote-access tooling and reported no residual access, backdoors, malicious artifacts, or evidence of exfiltration.
- LevelBlue maps the case to Valid Accounts (T1078), External Remote Services (T1133), and Multi-hop Proxy (T1090.003).

## Sources

- LevelBlue SpiderLabs, [Live Cyber Lab: How We Detected a Suspected North Korean IT Worker](https://go.levelblue.com/how-levelblue-detected-a-suspected-north-korean-remote-it-worker-in-10-days), 2026-05-07 — Webinar summary and learning objectives. The webinar corroborates the same August 2025 ten-day detected-hire case and rapid account revocation
- LevelBlue SpiderLabs, [How LevelBlue OTX and Cybereason XDR Detected a North Korea-Linked Remote IT Worker](https://www.levelblue.com/blogs/spiderlabs-blog/how-levelblue-otx-and-cybereason-xdr-detected-a-north-korea-linked-remote-it-worker), 2026-03-17 — Opening; Detection Timeline; Investigation Findings; MITRE ATT&CK Mapping. A suspected DPRK-linked applicant passed standard verification and was hired on August 15, 2025 for remote work involving Salesforce data. Cybereason XDR learned a China login baseline, then flagged an unmanaged-device login through a US endpoint on August 21. A second login on August 22 matched LevelBlue OTX intelligence for Astrill-associated infrastructure. The organization revoked the account on August 25, ten days after hiring and one business day after the threat-intelligence match. SpiderLabs reviewed interactions, group-chat additions, accessed resources, persistence mechanisms, and remote-access tooling and reported no residual access, backdoors, malicious artifacts, or evidence of exfiltration. LevelBlue maps the case to Valid Accounts (T1078), External Remote Services (T1133), and Multi-hop Proxy (T1090.003)

*Data file: [`data/entities/cluster/deep2-levelblue-august-2025-incident.json`](../../../data/entities/cluster/deep2-levelblue-august-2025-incident.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
