# Kyle Lankford

`kyle-lankford-healthcare-applicant` · Employment persona · Reported by an affected organization · confidence high · **needs corroboration**

> Trellix assessed the applicant as a likely DPRK operative; no public charge or adjudication was identified.

**Identity boundary.** Trellix-reported employment persona Kyle Lankford; the civil identity is unverified. Keep the unnamed healthcare provider, recruiter and historical email indicators protected; the source's 'likely North Korean operative' language is an affected-organization assessment, while legal adjudication requires a court record.

| | |
|---|---|
| Aliases | Kyle Lankford |
| Accounts | Email `kyle12lank@gmail[.]com` (historical); Email `suptalentdev@gmail[.]com` (historical) |
| Organizations | Trellix, Unnamed major U.S. healthcare provider |
| Locations (historical, per source) | United States (claimed/target context) |
| TTPs | Apply for principal software engineer role under an employment persona, Blend into normal recruitment workflow using legitimate SaaS and mail infrastructure, Complete ordinary CodeSignal assessment without obvious behavioral red flags, Use fluent, professional, malware-free email follow-up, Use multiple email addresses connected through public threat intelligence |
| Last verified | 2026-08-11 |

## Caveats

- Historical email indicators require editorial review before display; current ownership remains a future verification question.
- Kyle Lankford is an employment persona with an unverified legal identity.
- The affected healthcare provider remains unnamed in public sources.
- The displayed name is a source-reported employment persona or handle; legal or civil identity requires a source bridge.
- The email addresses are historical threat indicators; current-account status requires current source evidence.

## Claims (6)

| Claim | Value | Confidence | Status | Source |
|---|---|---|---|---|
| reported employment persona | {"name": "Kyle Lankford", "role_applied_for": "Principal Software Engineer", "target": "unnamed major U.S. healthcare provider", "identity_status": "employment persona, not verified civil identity"} | high | published | [Trellix Advanced Research Center](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign) (The Evolving Threat, paragraph after OSINT discussion) |
| reported application timeline | {"assessment_platform": "CodeSignal", "assessment_invited_at": "2025-07-10", "assessment_completed_at": "2025-07-16", "follow_up_at": "2025-08-04"} | high | published | [Trellix Advanced Research Center](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign) (Table 1, July 10, 2025 row); [Trellix Advanced Research Center](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign) (Table 1, July 16, 2025 row); [Trellix Advanced Research Center](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign) (Table 1, August 4, 2025 row) |
| vendor assessed likely dprk operative | {"assessor": "Trellix", "assessment_type": "vendor threat-hunting assessment", "assessment_month": "2025-08", "assessment": "likely North Korean operative", "basis": "correlation with known DPRK IT-worker indicators and further investigation"} | high | needs corroboration | [Trellix Advanced Research Center](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign) (Table 1, August 2025 threat-hunt row); [Trellix Advanced Research Center](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign) (Table 1, August 2025 investigation and exposure row) |
| reported correspondence characteristics | {"malware": false, "phishing_urls": false, "obvious_red_flags": false} | high | published | [Trellix Advanced Research Center](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign) (Paragraph after Table 1) |
| source reported follow up mail mechanics | {"sent_at": "2025-08-04T09:19:34-04:00", "service_assessment": "consistent with Gmail web client", "dmarc_alignment": "passed", "spoofing_observed": false, "attachment": "signature logo; no malware", "body_url_scope": "legitimate CodeSignal help resources through the employer's secure URL wrapper"} | high | published | [Trellix Advanced Research Center](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign) (Table 2, applicant follow-up header and content analysis); [Trellix Advanced Research Center via Internet Archive](https://web.archive.org/web/20260419181426id_/https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign/) (Table 2, attachment and URLs in body rows) |
| vendor reported osint indicator provenance | {"reporting_vendor": "Trellix", "upstream_public_source_label": "[@]SttyK", "upstream_dataset_description": "approximately 1,400 email addresses linked by the analyst to North Korean IT workers operating abroad", "use": "Trellix says the public indicators initiated its telemetry hunt and that applicant addresses later correlated with known DPRK IT-worker indicators"} | high | needs corroboration | [Trellix Advanced Research Center](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign) (The Evolving Threat, opening two paragraphs and Table 1 August 2025 threat-hunt row); [Trellix Advanced Research Center via Internet Archive](https://web.archive.org/web/20260419181426id_/https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign/) (Table 1, August 2025 threat-hunt row) |

<details><summary>Exact quotes</summary>

- **reported employment persona** — “In this case, an individual using the name ‘Kyle Lankford’ had applied for a Principal Software Engineer position at the healthcare company.” — Trellix Advanced Research Center, The Evolving Threat, paragraph after OSINT discussion
- **reported application timeline** — “July 10, 2025 Initial screening & Assessment invitation Company (Talent Acquisition) emailed ‘Kyle Lankford’ with instructions for an online CodeSignal technical assessment.” — Trellix Advanced Research Center, Table 1, July 10, 2025 row
- **reported application timeline** — “July 16, 2025 Assessment completed The candidate completed the coding test as instructed.” — Trellix Advanced Research Center, Table 1, July 16, 2025 row
- **reported application timeline** — “August 4, 2025 Follow-up from applicant ‘Kyle’ emailed the recruiter, politely asking if there were any updates on the application status after the assessment.” — Trellix Advanced Research Center, Table 1, August 4, 2025 row
- **vendor assessed likely dprk operative** — “August 2025 Threat hunt triggered (Trellix SecondSight) Trellix’s SecondSight threat hunting service correlated the applicant’s email addresses with known DPRK IT worker indicators.” — Trellix Advanced Research Center, Table 1, August 2025 threat-hunt row
- **vendor assessed likely dprk operative** — “August 2025 Investigation & exposure Upon deeper analysis of the email exchanges and background checks, the candidate was identified as a likely North Korean operative.” — Trellix Advanced Research Center, Table 1, August 2025 investigation and exposure row
- **reported correspondence characteristics** — “The emails exchanged between the ‘applicant’ and the company contained no malware, no phishing URLs, and no obvious red flags.” — Trellix Advanced Research Center, Paragraph after Table 1
- **source reported follow up mail mechanics** — “No spoofing; DMARC alignment passed via Google.” — Trellix Advanced Research Center, Table 2, applicant follow-up header and content analysis
- **source reported follow up mail mechanics** — “All URLs were legitimate resources (e.g., MFA setup guide, assessment tips) wrapped by an email security gateway (urldefense), which found no issues.” — Trellix Advanced Research Center via Internet Archive, Table 2, attachment and URLs in body rows
- **vendor reported osint indicator provenance** — “uncovered approximately 1,400 email addresses linked to North Korean IT workers operating abroad.” — Trellix Advanced Research Center, The Evolving Threat, opening two paragraphs and Table 1 August 2025 threat-hunt row
- **vendor reported osint indicator provenance** — “Trellix's SecondSight threat hunting service correlated the applicant's email addresses with known DPRK IT worker indicators.” — Trellix Advanced Research Center via Internet Archive, Table 1, August 2025 threat-hunt row

</details>

## Source-backed context

- mail-provider: value: Gmail; note: DMARC-aligned Google mail; no spoofing reported.
- application-platform: value: CodeSignal; note: Legitimate assessment platform; not malicious infrastructure.

## Sources

- Trellix Advanced Research Center, [Unmasking Hidden Threats: Spotting a DPRK IT-Worker Campaign](https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign), 2025-09-23 — Lines 280-326; Tables 1-2. Trellix reports stopping a likely DPRK applicant targeting a major unnamed U.S. healthcare provider. It publishes the employment persona Kyle Lankford, two Gmail addresses, the principal-software-engineer role, CodeSignal timeline, and the fact that the messages contained no malware or suspicious URLs. The no-locale URL is the verified canonical endpoint; the former en-ca URL was a historical locale endpoint
- Trellix Advanced Research Center via Internet Archive, [Unmasking Hidden Threats: Spotting a DPRK IT-Worker Campaign](https://web.archive.org/web/20260419181426id_/https://www.trellix.com/blogs/research/unmasking-hidden-threats-spotting-a-dprk-it-worker-campaign/), 2025-09-23

*Data file: [`data/entities/persona/kyle-lankford-healthcare-applicant.json`](../../../data/entities/persona/kyle-lankford-healthcare-applicant.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
