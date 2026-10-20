# Gate first application access during new-device onboarding

`deppr17-ttp-device-setup-application-gating` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> Commercial provider-described control design only; a commercial publisher-side implementation description within one product family. The source covers control design rather than incident, adjudication, nationality, independently measured effectiveness, government recommendation, customer outcome, attribution, or endorsement.

| | |
|---|---|
| TTPs | correction-and-appeal, human-review, identity-continuity-before-application-access, new-device-onboarding-gate, policy-gated-application-access, present-versus-future-control-timing, risk-triggered-access-revocation, separate-device-possession-from-worker-identity |
| lazarus.group profiles | dcir5-ttp-resolve-identity-before-account-provisioning, deppr17-ttp-device-setup-application-gating, ttp-ttp-device-custody, ttp-ttp-identity-continuity |
| Last verified | 2026-08-12 |

## Caveats

- The failed, rejected, or inconclusive verification remains a review signal; DPRK affiliation, nationality, identity fraud, and malicious intent require corroborating sources.
- A verification result, profile inconsistency, location-related mismatch, synthetic-media alert, or other single signal remains only one signal; legal identity, nationality, DPRK affiliation, present account control, and malicious intent require corroboration.
- Controls require notice, proportionality, minimization, bounded retention, trained human review, meaningful correction and appeal, accessible alternatives, anti-discrimination safeguards, and jurisdiction-specific legal review.
- The control sequence runs from device setup to MFA enrollment to application access.
- Device possession and directory-account creation show access conditions; operator identity and protected-application authorization require separate evidence.
- Device possession, device location, or directory-account creation leaves device operation and malicious intent as separate questions.
- Accent, appearance, disability accommodations, travel, geography, device replacement, remote work, VPN use, and any single automated signal require a lawful, corroborated basis before they inform risk.
- Every adverse employment or access decision requires trained human review, documented reasons, meaningful correction and appeal, accessible alternatives, proportionality, anti-bias testing, minimization, bounded retention, and legal review.
- Future in-session step-up verification must remain labeled as future rather than represented as a current capability in the cited article.
- Provider implementation and product statements describe controls; independently validated efficacy and error-rate studies belong to separate evidence.
- Shared workspaces, travel, disability, emergency onboarding, device replacement, and other lawful conditions require documented accommodations and alternate review paths.
- These are commercial product and integration claims; efficacy and error rates require independent validation.

## Source-backed context

- For high-risk remote onboarding, separate device delivery and directory-account creation from permission to reach applications. Before the new device can enroll the factor needed for application access, perform a reviewable identity-continuity check tied to the approved hire; rejected or inconclusive results should notify accountable teams and support appeal rather than automatically establishing fraud.
- Cloudflare says its Access policy evaluates the external identity result before protected email, code repositories, or other internal applications are reached.
- The same page describes risk-triggered application revocation as currently available and in-session step-up verification as a future capability.

## Sources

- Cloudflare Blog, [Defeating the deepfake: stopping laptop farms and insider threats](https://blog.cloudflare.com/deepfakes-insider-threats-identity-verification), 2026-03-04 — Visible article header: March 4, 2026; author Ann Ming Samborski; Sections “Enter identity-verified zero trust” and “How it works”; Section “A layered defense”; Section “Beyond onboarding: continuous verification”; Page JSON-LD and article metadata: datePublished 2026-03-04T06:00:00.000Z; dateModified 2026-07-15T14:31:39.349Z. Cloudflare describes its own Access enforcement point: after a successful external identity result, Cloudflare Access grants or denies protected-application access under policy before email, code repositories, or other internal resources are reached. The page describes risk-triggered application revocation as current behavior and in-session step-up verification as a future capability. Evidence boundary: this is publisher-side implementation provenance for the same Cloudflare–Nametag commercial integration family, not independent effectiveness evidence, a customer outcome, or a product endorsement
- Nametag, [How Cloudflare and Nametag Are Closing the Identity Assurance Gap in Zero Trust Workforce Onboarding](https://getnametag.com/newsroom/cloudflare-nametag-zero-trust-onboarding), 2025-10-28 — Opening; laptop-farm context; workflow steps describing rejection, appeal, notification, MFA enrollment, and application gating; closing paragraph. Nametag says its Cloudflare Access integration verifies the person configuring a new device and can keep applications inaccessible when verification is rejected, while notifying IT/security and permitting an appeal. The page explicitly ties the design to North Korean IT-worker laptop-farm risk. Evidence boundary: provider-described integration design; not a disclosed customer incident or independently measured effectiveness result Normalized control: For high-risk remote onboarding, separate device delivery and directory-account creation from permission to reach applications. Before the new device can enroll the factor needed for application access, perform a reviewable identity-continuity check tied to the approved hire; rejected or inconclusive results should notify accountable teams and support appeal rather than automatically establishing fraud. Limitations: Vendor-described architecture has no independently measured effectiveness result in the cited source. Do not retain precise locations, device identifiers, identity documents, selfies, biometric templates, or raw verification telemetry in the public dataset. Shared workspaces, travel, disability, device replacement, emergency onboarding, and lawful remote-work patterns require documented accommodations and alternate review paths. Device location or possession cannot establish nationality, sanctions status, or malicious intent

*Data file: [`data/entities/ttp/deppr17-ttp-device-setup-application-gating.json`](../../../data/entities/ttp/deppr17-ttp-device-setup-application-gating.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
