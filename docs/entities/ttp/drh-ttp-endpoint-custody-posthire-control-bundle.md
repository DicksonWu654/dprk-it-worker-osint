# Endpoint custody, post-hire re-verification, behavior, and payment correlation

`drh-ttp-endpoint-custody-posthire-control-bundle` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> Behavioral or remote-work observations are nonspecific and require corroboration; DTEX defensive practitioner guidance and first-party platform/threat-research guidance supply context, while identity attribution and measured control effectiveness require separate evidence.

| | |
|---|---|
| TTPs | credential-sharing, laptop-forwarding, payment-platform, privilege-escalation, remote-desktop, remote-management-tool, unauthorized-subcontractor |
| lazarus.group profiles | deep2-ttp-deep-ttp-11-cloud-saas-posthire-correlation, drh-ttp-endpoint-custody-posthire-control-bundle, hpg-ttp-device-pickup-hid-address-controls |
| Last verified | 2026-08-12 |

## Caveats

- Automated provisioning can accelerate harm when identity assurance, endpoint custody, and least-privilege scoping fail before activation.
- Generic guidance for identity assurance and role scoping; automated provisioning can accelerate harm when checks fail before activation.
- Hardware-key possession identifies an authentication factor; interview identity, later endpoint operation, and remote delegation remain separate questions.
- Low engagement, missed meetings, or remote work are nonspecific review context; attribution requires corroborated signals.
- Most incident denominators in the article come from DOJ or secondary reporting and should remain sourced to the underlying primary records.
- This records hardware-token control context; DPRK incident or measured anti-DPRK outcome remains unestablished. Hardware-token possession alone leaves interview completion and later endpoint operation unresolved.

## Source-backed context

- Deel recommends role- and time-bound access, SSO/MFA for all worker types, HRIS-triggered provisioning, immediate offboarding revocation, MDM/endpoint controls, and auditable access across employees, contractors, and EOR workers.
- Okta describes new hires completing identity proofing on first login with a pre-enrolled YubiKey, HR and IT teams monitoring transactions, and a read-only API check of legal/preferred first names to reduce legitimate name-mismatch failures.
- DTEX recommends mapping contractors, vendors, endpoints, and device chain-of-custody rather than relying on a background check as the terminal trust decision.
- It recommends live interviews plus post-hire re-verification, contextual review of low engagement or unexplained disappearance, monitoring for suspicious remote access, and correlation of device and payment activity.
- The recommendations emphasize that a quiet, timely, technically competent worker can still present insider risk; behavioral indicators require corroboration and should not be used alone.

## Sources

- Deel, [How to Ensure Secure Access for Contractors and EOR Workers](https://www.deel.com/blog/how-to-ensure-secure-access-for-contractors-and-eor-workers), 2026-03-31 — Access gaps; least privilege; audit checklist; six principles; offboarding failure points. Deel recommends role- and time-bound contractor access, SSO and MFA, HR-triggered provisioning, immediate revocation, endpoint controls, and auditable access across worker types
- DTEX, [Insider Risk Lessons from the DPRK IT Worker Crackdown](https://www.dtexsystems.com/blog/insider-risk-lessons-from-dprk-crackdown), 2025-07-02 — Why it matters now; five practical steps, especially Insider threats are coordinated, Background checks can't catch ghosts, and Silence and compliance are not the same as trustworthiness. DTEX recommends mapping contractors, vendors, endpoints, and device chain-of-custody rather than relying on a background check as the terminal trust decision. It recommends live interviews plus post-hire re-verification, contextual review of low engagement or unexplained disappearance, monitoring for suspicious remote access, and correlation of device and payment activity. The recommendations emphasize that a quiet, timely, technically competent worker can still present insider risk; behavioral indicators require corroboration and should not be used alone
- Okta, [Enhancing security: Identity proofing for new hires](https://www.okta.com/blog/industry-insights/enhancing-security-identity-proofing-for-new-hires), 2025-07-09 — Behind the scenes; implementation evolution; pre-enrolled YubiKey onboarding. Okta describes an internal onboarding implementation using first-login identity proofing with a pre-enrolled hardware key, HR/IT monitoring, and constrained name matching. It is not a DPRK incident or measured anti-DPRK outcome

*Data file: [`data/entities/ttp/drh-ttp-endpoint-custody-posthire-control-bundle.json`](../../../data/entities/ttp/drh-ttp-endpoint-custody-posthire-control-bundle.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
