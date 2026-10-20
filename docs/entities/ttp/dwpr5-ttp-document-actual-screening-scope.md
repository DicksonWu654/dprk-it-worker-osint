# Document the actual scope and limits of workforce-platform screening

`dwpr5-ttp-document-actual-screening-scope` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> This is a cross-provider comparison of publicly stated control scope. Identity verification, background screening, sanctions review, and employment-history checks remain distinct; the limitations describe controls rather than incidents or findings about platform users.

| | |
|---|---|
| TTPs | freelance-platform, stolen-identity |
| lazarus.group profiles | dfef-ttp-lifecycle-identity-continuity, dfp-ttp-upwork-verification-boundary |
| Last verified | 2026-08-12 |

## Caveats

- Avoid collecting unnecessary criminal or sensitive personal data.
- Provider ranking and effectiveness claims require independent testing.
- Identity documents, selfies, liveness recordings, addresses, phone numbers, emails, tax records, payment details, credentials, device identifiers, IP addresses, and raw screening reports stay unreproduced.
- Platform-wide fraud metrics describe platform-wide activity; DPRK estimates require separate measurement.
- Document check scope, jurisdiction, consent, result date, and decision owner.
- Identity verification confirms an identity check; employment history, technical authorship, and beneficial payee status require separate evidence.
- Keep fake-interview malware separate from fraudulent employment unless a first-party source establishes the overlap.
- Keep historical North Korea platform access distinct from a DPRK IT-worker attribution.
- Face, accent, language, nationality, travel, time zone, VPN use, location mismatch, and payment-method change require corroboration before an adverse conclusion.
- Payment-beneficiary review remains private and compliance-led; sensitive financial selectors are excluded from the public dataset.
- A persona is a reported platform identity, while legal identity and platform verification remain separate questions.
- Platform controls, restrictions, and verification outcomes are review inputs; DPRK affiliation, legal identity, nationality, work location, and sole-operator control require corroborating evidence.
- Publish provider-level controls and limitations; private account-level evidence remains outside the record.
- Retain only minimal control decisions and provenance; people, personas, accounts, entities, private profiles, payment identifiers, addresses, credentials, images, and raw screening artifacts stay outside the record.
- Sanctions, employment, criminal, and identity checks have jurisdictional and methodological limits; document exactly what was checked and when.
- Use multiple explainable signals, proportional human review, correction, and appeal; face, accent, language, nationality, travel, time zone, VPN use, location mismatch, or payment change alone are insufficient for adverse decisions.
- Use multiple independently explainable signals, human review, proportionality, correction, and appeal.

## Source-backed context

- Provider controls vary materially: mandatory identity verification may coexist with optional, jurisdiction-limited, or absent employment and criminal checks. Oyster explicitly says it verifies contractor identity but does not conduct contractor employment or criminal checks; Remote distinguishes standard EOR identity/right-to-work checks from selectable background checks; HireGlobal presents broader screening as a service claim. Employers must map what was actually checked rather than assuming an EOR or contractor platform completed a comprehensive background investigation.

## Sources

- Oyster, [Does Oyster perform identity verification or employment checks for Contractors?](https://support.oysterhr.com/hc/en-us/articles/34221847419409-Does-Oyster-perform-identity-verification-or-employment-checks-for-Contractors) — Identity verification; Employment checks; Conducting background checks on your own. Oyster says it performs contractor identity verification but not employment or criminal background checks, and advises customers conducting their own checks to disclose scope and obtain consent. Publish the limitation with the control. Do not imply identity verification validates work history or sanctions status unless separately established. Provider controls vary materially: mandatory identity verification may coexist with optional, jurisdiction-limited, or absent employment and criminal checks. Oyster explicitly says it verifies contractor identity but does not conduct contractor employment or criminal checks; Remote distinguishes standard EOR identity/right-to-work checks from selectable background checks; HireGlobal presents broader screening as a service claim. Employers must map what was actually checked rather than assuming an EOR or contractor platform completed a comprehensive background investigation
- Remote, [What are Remote's Background Check Services?](https://support.remote.com/hc/en-us/articles/34566185236237-What-are-Remote-s-Background-Check-Services), 2026-07-09 — How It Works; Background Check History Table; Do you offer identity verification and right-to-work checks?; What happens if a background check reveals concerning information?. Remote documents pre-onboarding education, employment, sanctions, and jurisdiction-dependent criminal checks; standard EOR identity and right-to-work checks; a screening history view; customer review of discrepancies; and provider review of sanctions or criminal-record concerns for EOR and COR candidates. Emphasize jurisdictional limits, candidate consent, and human decision-making. Avoid contact details, reports, or private findings. Provider controls vary materially: mandatory identity verification may coexist with optional, jurisdiction-limited, or absent employment and criminal checks. Oyster explicitly says it verifies contractor identity but does not conduct contractor employment or criminal checks; Remote distinguishes standard EOR identity/right-to-work checks from selectable background checks; HireGlobal presents broader screening as a service claim. Employers must map what was actually checked rather than assuming an EOR or contractor platform completed a comprehensive background investigation
- Remote, [Why am I being asked to do a KYC verification?](https://support.remote.com/hc/en-us/articles/4410443737869-Why-am-I-being-asked-to-do-a-KYC-verification) — Why this step is important; Regulations; Security. Remote says all employees and contractors must complete KYC to address identity misuse, impersonation, fraud, and AML obligations. Do not treat mandatory KYC as proof that employment-history, identity-lender, or post-hire continuity risk is resolved. Provider controls vary materially: mandatory identity verification may coexist with optional, jurisdiction-limited, or absent employment and criminal checks. Oyster explicitly says it verifies contractor identity but does not conduct contractor employment or criminal checks; Remote distinguishes standard EOR identity/right-to-work checks from selectable background checks; HireGlobal presents broader screening as a service claim. Employers must map what was actually checked rather than assuming an EOR or contractor platform completed a comprehensive background investigation
- Toptal / HireGlobal, [Fast, compliant background checks built into global hiring](https://www.toptal.com/hireglobal/background-checks) — What's available in your global background check; Identity verification; Global watchlist screening; Employment verification. HireGlobal says workforce members receive identity verification during onboarding and offers watchlist, employment, education, and other checks. Characterize this as provider product documentation, not validated efficacy or DPRK-specific enforcement. Provider controls vary materially: mandatory identity verification may coexist with optional, jurisdiction-limited, or absent employment and criminal checks. Oyster explicitly says it verifies contractor identity but does not conduct contractor employment or criminal checks; Remote distinguishes standard EOR identity/right-to-work checks from selectable background checks; HireGlobal presents broader screening as a service claim. Employers must map what was actually checked rather than assuming an EOR or contractor platform completed a comprehensive background investigation

*Data file: [`data/entities/ttp/dwpr5-ttp-document-actual-screening-scope.json`](../../../data/entities/ttp/dwpr5-ttp-document-actual-screening-scope.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
