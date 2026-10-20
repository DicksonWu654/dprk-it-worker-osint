# Hiring-lifecycle composite detection for DPRK IT-worker applicants

`conference-hiring-composite-detection` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> Buonanno presents a concrete composite-scoring framework. First-party platform control and threat-research guidance provide defensive context, while the BSides Pyongyang parody talk warns that simplistic “expert” indicators can be weaponized against legitimate applicants; identity attribution and measured control effectiveness require other evidence.

| | |
|---|---|
| Organizations | BSides Pyongyang, BSides Seattle |
| TTPs | Avoid simplistic nationality, accent, geography, camera, or résumé-format heuristics as standalone rules, Back-propagate confirmed recruiter fraud labels across shared applicant identifiers, coding-test-outsourcing, Correlate applicant emails, phone numbers, IPs, social profiles, coding-platform telemetry, and recruiter labels, Define an incident-response playbook for already-hired workers, Flag fresh email accounts and VoIP numbers only as components of a broader score, inconsistent-language-or-timezone, interview-assistance, proxy-interviewee, Retain a human risk owner for late-stage rejection or investigation decisions, Treat shared identifiers across substantially different candidate names as a stronger signal, Use account age, breach history, and established legitimate service history as possible negative evidence |
| lazarus.group profiles | conference-hiring-composite-detection |
| Last verified | 2026-08-12 |

## Caveats

- Candidate-cheating indicators are nonspecific; combine multiple validated signals and retain human review.
- Composite signals require validation and bias testing.
- Geography, accent, camera quality, and language proficiency are contextual signals; nationality requires cited source evidence.
- Nationality, accent, language proficiency, geography, camera use, and résumé style are contextual features for review; demographic decisions require independent evidence, with no standalone rule based on them.
- Greenhouse warns that a VOIP number or location mismatch alone is fraud-indeterminate; these are triage signals requiring attribution and nationality evidence.
- The article is broad hiring guidance rather than DPRK-specific telemetry, and some examples cite third-party reporting.
- The BSides Seattle event page returned HTTP 404 on 2026-08-12 and is retained only as last-known historical provenance; the live official recording with timestamps is the claim-bearing source.
- The BSides Seattle recording and historical event page document one presentation and form one source family; corroboration remains within that family.

## Source-backed context

- Greenhouse describes surfacing phone, email, IP, location, repeated-pattern, disposable-contact, and VOIP risk signals inside the applicant workflow, with blocklists and recruiter review rather than automatic rejection.
- LinkedIn highlights deepfake face/voice masking, human stand-ins, live AI assistance during technical interviews, automated tailored applications, and reused unproctored assessments as a combined hiring-integrity risk.

## Sources

- BSides Seattle, [From Application to Access: The DPRK Remote Worker Playbook](https://www.bsidesseattle.com/events/2025/from-application-to-access%3A-the-dprk-remote-worker-playbook), 2026-03-30 — Event abstract and speaker biography \| Availability note (2026-08-12): the official event page returned HTTP 404; retained only as stale historical provenance because no exact official replacement or archive was verified. Last-known official event-page provenance for the talk title, abstract, and speaker; it is not the sole support for any retained claim
- Greenhouse, [How Real Talent protects candidates and companies from fraud in hiring](https://www.greenhouse.com/blog/how-real-talent-protects-candidates-and-companies-from-fraud-in-hiring), 2026-01-07 — What Real Talent actually does about fraud; Fraud signals you can see and act on. Greenhouse describes combining phone, email, IP, location, repeated-pattern, disposable-contact, and VoIP signals in the ATS, using recruiter review rather than automatic rejection
- Greenhouse, [Find top candidates faster and stop fake job applicants with AI: Introducing Greenhouse Real Talent with CLEAR](https://www.greenhouse.com/blog/introducing-greenhouse-real-talent), 2025-06-03 — Candidate chaos; Meet Real Talent; CLEAR update. Greenhouse describes combining phone, email, IP, location, repeated-pattern, disposable-contact, and VoIP signals in the ATS, using recruiter review rather than automatic rejection
- LinkedIn Talent Solutions, What Talent Leaders Need to Know — and Do — About the Upsurge in Candidate Cheating (`hxxps://www[.]linkedin[.]com/business/talent/blog/talent-acquisition/what-talent-leaders-need-to-know-about-candidate-cheating`), 2025-07-08 — 'What are we up against?'; 'What's coming?'; employer checklist. LinkedIn Talent Solutions describes deepfake face or voice masking, human stand-ins, live AI assistance, automated tailored applications, and reused unproctored assessments as generic hiring-integrity risks
- BSides Seattle, [From Application to Access: Detecting DPRK IT Workers Before They Become Insider Threats](https://www.youtube.com/watch?v=NSFh4XH-Lo4), 2026-03-30 — 17:33–20:37 worked Bryant example; 13:30–17:32 composite detection; 20:37–23:31 controls. Official BSides Seattle recording of Jesse Buonanno’s systematic hiring-lifecycle detection framework and a worked example involving a source-labeled DPRK candidate named Bryant
- BSides Pyongyang, [Weaponizing Western Stupidity to Get Hired at the Fortune 50](https://www.youtube.com/watch?v=WD0M3sbb528), 2026-07-07 — 00:15–01:48 parody/disclaimer; 04:53–19:42 critique and defensive recommendations. Official conference-channel recording. The speaker explicitly labels the presentation parody and critiques simplistic hiring indicators rather than publishing an actor case

*Data file: [`data/entities/ttp/conference-hiring-composite-detection.json`](../../../data/entities/ttp/conference-hiring-composite-detection.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
