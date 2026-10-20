# Historical North Korea platform enforcement and provider policy boundaries

`dwpr5-ttp-historical-platform-enforcement-policy-boundaries` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> First-party historical company representation and current provider policy context. Fiverr's 2019 disclosure covers historical sellers located in North Korea; attribution to DPRK IT workers, fraudulent applicants, state actors, or a particular service requires separate evidence. Provider restrictions state policy boundaries, while legal findings, observed incidents, and enforcement efficacy require separate evidence.

| | |
|---|---|
| TTPs | false-location, freelance-platform, payment-platform |
| lazarus.group profiles | dfp-ttp-upwork-verification-boundary |
| Last verified | 2026-08-12 |

## Caveats

- Provider restrictions and policy statements are prospective guidance rather than observed DPRK IT-worker incidents.
- The sellers' role is reported; DPRK IT-worker and state-agent classifications require separate evidence.
- Third-country contractor involvement is contracting context; sanctions assessment uses case-specific evidence.
- Geoblocking records a service restriction; real-world identity and third-country operation require separate evidence.
- IP and current location provide network context; they supply no nationality finding.
- The source leaves the type of services sold unspecified.
- Identity documents, selfies, liveness recordings, addresses, phone numbers, emails, tax records, payment details, credentials, device identifiers, IP addresses, and raw screening reports stay unreproduced.
- A policy describes intended controls; enforcement efficacy requires evidence.
- Platform-wide fraud metrics describe platform-wide activity; DPRK estimates require separate measurement.
- Keep fake-interview malware separate from fraudulent employment unless a first-party source establishes the overlap.
- Keep historical North Korea platform access distinct from a DPRK IT-worker attribution.
- Face, accent, language, nationality, travel, time zone, VPN use, location mismatch, and payment-method change require corroboration before an adverse conclusion.
- Omit revenue figures as unnecessary to the defensive finding.
- Payment-beneficiary review remains private and compliance-led; sensitive financial selectors are excluded from the public dataset.
- A persona is a reported platform identity, while legal identity and platform verification remain separate questions.
- Platform controls, restrictions, and verification outcomes are review inputs; DPRK affiliation, legal identity, nationality, work location, and sole-operator control require corroborating evidence.
- Publish provider-level controls and limitations; private account-level evidence remains outside the record.
- Retain only minimal control decisions and provenance; people, personas, accounts, entities, private profiles, payment identifiers, addresses, credentials, images, and raw screening artifacts stay outside the record.
- Sanctions, employment, criminal, and identity checks have jurisdictional and methodological limits; document exactly what was checked and when.
- Use legal and compliance review for actual sanctions decisions.
- Use multiple explainable signals, proportional human review, correction, and appeal; face, accent, language, nationality, travel, time zone, VPN use, location mismatch, or payment change alone are insufficient for adverse decisions.
- Use multiple independently explainable signals, human review, proportionality, correction, and appeal.

## Source-backed context

- Fiverr publicly represented in 2019 that it had historically hosted a small number of sellers in North Korea, had taken steps to terminate their accounts, implemented automated geoblocking, and relied in part on payment-processor sanctions controls.
- Upwork, Freelancer.com, HireGlobal, Remote, and Oyster explicitly restrict North Korea in platform access, work location, payment destination, or service availability. HireGlobal uniquely ties the worker's represented work location and payment destination to sanctions status.

## Sources

- Fiverr International Ltd., [Response to SEC comments regarding Draft Registration Statement on Form F-1](https://investors.fiverr.com/node/6531/html), 2019-03-15 — Dated March 15, 2019; General, response to comment 15; HTML lines 243-258 in the rendered filing. Fiverr stated that it historically had a small number of sellers in North Korea, had taken steps to terminate existing North Korea accounts, implemented automated geoblockers in the first quarter of 2019, and noted that third-party payment processors used controls intended to prevent dealings with comprehensively sanctioned jurisdictions and designated persons. Do not label the sellers as DPRK IT workers or government actors. Omit revenue figures and any unsupported inference about services, identities, or later evasion. Fiverr publicly represented in 2019 that it had historically hosted a small number of sellers in North Korea, had taken steps to terminate their accounts, implemented automated geoblocking, and relied in part on payment-processor sanctions controls
- Oyster, [Can I hire a contractor in any country?](https://support.oysterhr.com/hc/en-us/articles/4405735992593-Can-I-hire-a-contractor-in-any-country) — Sanctioned countries list; Korea (the Democratic People's Republic of) entry. Oyster says it cannot support hiring in the Democratic People's Republic of Korea among other listed sanctioned locations. Do not infer observed DPRK workers or enforcement efficacy from availability policy. Upwork, Freelancer.com, HireGlobal, Remote, and Oyster explicitly restrict North Korea in platform access, work location, payment destination, or service availability. HireGlobal uniquely ties the worker's represented work location and payment destination to sanctions status
- Remote, [Contractor of Record (COR) Availability Guide](https://support.remote.com/hc/en-us/articles/39459533116301-Contractor-of-Record-COR-Availability-Guide), 2026-05-22 — Geographic Restrictions; Asia; North Korea entry. Remote lists North Korea among locations where its Contractor of Record service is unavailable. Availability policy is not an observed enforcement case. Upwork, Freelancer.com, HireGlobal, Remote, and Oyster explicitly restrict North Korea in platform access, work location, payment destination, or service availability. HireGlobal uniquely ties the worker's represented work location and payment destination to sanctions status
- Upwork, [Who's eligible to join and use Upwork?](https://support.upwork.com/hc/en-us/articles/211067778-Who-s-eligible-to-join-and-use-Upwork) — What are the restrictions on eligibility to use Upwork?; Location restrictions. Upwork states that businesses or individuals in North Korea may not register for or use the platform and that previously suspended users may not create replacement accounts. Policy language is not evidence that evasion cannot occur or that a user outside North Korea is lawful. Upwork, Freelancer.com, HireGlobal, Remote, and Oyster explicitly restrict North Korea in platform access, work location, payment destination, or service availability. HireGlobal uniquely ties the worker's represented work location and payment destination to sanctions status
- Freelancer.com, [Restricted Countries and Regions](https://www.freelancer.com/support/freelancer/general/restrictions-in-some-countries) — Restricted Countries and Regions; North Korea entry; Account closure and reinstatement statement. Freelancer.com says users or businesses based in North Korea are not permitted to use the site and that accounts closed or suspended under this restriction will not be reinstated. Do not infer a DPRK IT-worker incident or effective detection from the policy alone. Upwork, Freelancer.com, HireGlobal, Remote, and Oyster explicitly restrict North Korea in platform access, work location, payment destination, or service availability. HireGlobal uniquely ties the worker's represented work location and payment destination to sanctions status
- Toptal / HireGlobal, [HireGlobal Workforce Member Agreement](https://www.toptal.com/hireglobal/workforce-member-agreement) — Section 5 representations and warranties; Definitions of Prohibited Regions and Prohibited List; Termination and payment consequences. HireGlobal requires workforce members not to reside or work from North Korea, not to route funds to financial institutions in prohibited regions, and not to appear on specified sanctions or export-control lists; changes in status must be disclosed. Contractual representations and list screening are controls, not proof of actual location or beneficial recipient. Do not publish worker or payment records. Upwork, Freelancer.com, HireGlobal, Remote, and Oyster explicitly restrict North Korea in platform access, work location, payment destination, or service availability. HireGlobal uniquely ties the worker's represented work location and payment destination to sanctions status

*Data file: [`data/entities/ttp/dwpr5-ttp-historical-platform-enforcement-policy-boundaries.json`](../../../data/entities/ttp/dwpr5-ttp-historical-platform-enforcement-policy-boundaries.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
