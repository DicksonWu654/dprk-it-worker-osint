# Platform verification limitations and fair account-integrity review

`dwpr5-ttp-verification-limitations-and-fair-review` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> First-party platform documentation describes controls and limitations; provider observations and source-attributed investigations supply context, while incident disclosure, identity finding, nationality assessment, court finding, labor-market prevalence and independently validated efficacy require separate sources. Verification remains a bounded process rather than a conclusive determination.

| | |
|---|---|
| TTPs | fair-human-review, false-location, freelance-platform, point-in-time-verification-limit |
| lazarus.group profiles | dfp-ttp-fiverr-account-location-integrity, dwpr5-ttp-verification-limitations-and-fair-review |
| Last verified | 2026-08-12 |

## Caveats

- Avoid claims about unnamed accounts or platform prevalence.
- Identity-verification limitations and location-only anomalies call for human review; DPRK affiliation requires corroborating evidence.
- Identity-document imagery, synthetic-image examples, biometric templates, candidate-level telemetry, and raw graph nodes stay out of publication and operational use.
- Identity documents, selfies, liveness recordings, addresses, phone numbers, emails, tax records, payment details, credentials, device identifiers, IP addresses, and raw screening reports stay unreproduced.
- Platform-wide fraud metrics describe platform-wide activity; DPRK estimates require separate measurement.
- Keep fake-interview malware separate from fraudulent employment unless a first-party source establishes the overlap.
- Keep historical North Korea platform access distinct from a DPRK IT-worker attribution.
- Face, accent, language, nationality, travel, time zone, VPN use, location mismatch, and payment-method change require corroboration before an adverse conclusion.
- Facial comparison, accent, nationality, and travel heuristics are contextual signals requiring corroboration.
- Identity or attribution requires more than a single face, image, document, VPN, location, device, network, profile, résumé, repository, contact, or behavior signal.
- Payment-beneficiary review remains private and compliance-led; sensitive financial selectors are excluded from the public dataset.
- A persona is a reported platform identity, while legal identity and platform verification remain separate questions.
- Platform controls, restrictions, and verification outcomes are review inputs; DPRK affiliation, legal identity, nationality, work location, and sole-operator control require corroborating evidence.
- Publish limitations adjacent to control descriptions.
- Publish provider-level controls and limitations; private account-level evidence remains outside the record.
- Retain only minimal control decisions and provenance; people, personas, accounts, entities, private profiles, payment identifiers, addresses, credentials, images, and raw screening artifacts stay outside the record.
- Sanctions, employment, criminal, and identity checks have jurisdictional and methodological limits; document exactly what was checked and when.
- Successful or failed verification is one bounded observation; legal identity, nationality, DPRK affiliation, worker continuity, present account control and product-wide performance require separate evidence.
- Use explainable multi-signal review, minimization, bounded retention, trained human adjudication, correction, appeal, accessibility accommodations, and applicable legal review.
- Use multiple explainable signals, proportional human review, correction, and appeal; face, accent, language, nationality, travel, time zone, VPN use, location mismatch, or payment change alone are insufficient for adverse decisions.
- Use multiple independently explainable signals, human review, proportionality, correction, and appeal.

## Source-backed context

- Fiverr combines identity evidence, selfie/liveness matching, region consistency, account-integrity review, and enforcement for concealed identity/location or multiple accounts. Crucially, Fiverr says verification depends on user-supplied information and cannot guarantee every verified freelancer is who they claim to be, and says routine travel or logging in from different places alone does not trigger a flag.

## Sources

- GitLab Threat Intelligence, [GitLab Threat Intelligence Team reveals North Korean tradecraft](https://about.gitlab.com/blog/gitlab-threat-intelligence-reveals-north-korean-tradecraft), 2026-02-19 — Case Study 3: synthetic identity construction workflow, verification-status field, aggregate success result, implications and mitigations; Case Study 4: payment-processor rotation and facilitator/device-access observations. GitLab reports just-over-40-percent success across one observed operation's attempts to obtain enhanced verification on unnamed professional networking services. This source-reported result is a bounded point-in-time observation, not proof of legal identity or worker continuity. Evidence boundary: GitLab's source-attributed investigation, not a court finding. The platform being verified is not named in the relevant claim, the attempt count and decision criteria are not disclosed, and successful platform verification does not establish civil identity, worker continuity, present account control, or product-wide failure rate
- Fiverr, [Verify your identity](https://help.fiverr.com/hc/en-us/articles/13127850435345-Verify-your-identity) — ID verification Step by step; How we use your data; ID verified freelancers; FAQs. Fiverr may require an original government ID, selfie authenticity and matching, correct region selection, and no active VPN during verification. It also warns that verification relies on user-supplied information and cannot guarantee every verified freelancer is who they claim to be. Publish the explicit limitation alongside the controls. Never use face, language, VPN use, or location alone as an attribution signal. Fiverr combines identity evidence, selfie/liveness matching, region consistency, account-integrity review, and enforcement for concealed identity/location or multiple accounts. Crucially, Fiverr says verification depends on user-supplied information and cannot guarantee every verified freelancer is who they claim to be, and says routine travel or logging in from different places alone does not trigger a flag
- Fiverr, [How we enforce policies](https://help.fiverr.com/hc/en-us/articles/37554748438673-How-we-enforce-policies) — Account Ineligible to Sell; Account suspension; What if I don't agree with a decision?. Fiverr says accounts can lose selling eligibility for multiple accounts, concealed identity or location, or activity previously associated with fraud, while noting that ordinary travel or multiple login locations alone do not trigger a flag. Preserve the negative: travel or multiple locations alone are not a valid adverse conclusion. Fiverr combines identity evidence, selfie/liveness matching, region consistency, account-integrity review, and enforcement for concealed identity/location or multiple accounts. Crucially, Fiverr says verification depends on user-supplied information and cannot guarantee every verified freelancer is who they claim to be, and says routine travel or logging in from different places alone does not trigger a flag
- Pindrop, [Extending GitLab’s Findings: What Hiring Telemetry from Pulse for Meetings Reveals](https://www.pindrop.com/article/hiring-telemetry-pulse-for-meetings-insights), 2026-02-25 — Opening comparison with GitLab; Pindrop Research: Fraud runs rampant in job applicant pools; Device telemetry; Geography & network characteristics; Synthetic identity construction; From one suspicious node to a cluster; Beyond deepfakes: What hiring telemetry actually shows. Pindrop reports at least two source-labeled suspected cases in which synthetic imagery passed document verification. Evidence boundary: Provider-reported observations from Pindrop's own pipeline. The article does not publish methodology sufficient to reproduce its labels, cohort sizes for every percentage, independent validation, named candidates, legal identities, or a labor-market prevalence estimate. Its 'confirmed fraud' and 'linked to North Korea' labels are source labels, not adjudications

*Data file: [`data/entities/ttp/dwpr5-ttp-verification-limitations-and-fair-review.json`](../../../data/entities/ttp/dwpr5-ttp-verification-limitations-and-fair-review.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
