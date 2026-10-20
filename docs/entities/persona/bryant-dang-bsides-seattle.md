# Bryant Dang

`bryant-dang-bsides-seattle` · Employment persona · Attributed by security researchers or press · confidence high · **needs corroboration**

> Jesse Buonanno calls Bryant an actual DPRK candidate in a worked detection example; legal identity and government attribution remain unresolved.

**Identity boundary.** Source-reported employment or online persona; civil identity verification remains open for this label, account, and image.

| | |
|---|---|
| Aliases | Bryant Dang |
| Accounts | LinkedIn `Bryant Dang persona profile (URL not disclosed)` (historical); Email `bryantdang1018@outlook[.]com` (historical) |
| Organizations | BSides Seattle |
| Locations (historical, per source) | Indonesia, Philippines, and Malaysia (source-observed client-origin signals, not residence claims) |
| TTPs | Maintain a sparse LinkedIn account with little activity or connection history, Route application traffic through data-center/tunnel infrastructure, Submit an unusually verbose, apparently LLM-assisted résumé, Use a fresh email following a word-plus-digits naming pattern, Use a VoIP number shared with multiple suspicious candidates |
| Last verified | 2026-08-12 |

## Caveats

- Regional network signals describe network context; physical location requires a separate location source.
- The BSides Seattle event page returned HTTP 404 on 2026-08-12 and is retained only as last-known historical provenance; the live official recording with timestamps is the claim-bearing source.
- The BSides Seattle recording and historical event page document one presentation and form one source family; corroboration remains within that family.
- The phone number was deliberately redacted and remains unreconstructed here.
- The precise underlying employer/case is undisclosed.
- This is a source-reported persona label from public conference material; legal and civil identity status is unverified.

## Claims (8)

| Claim | Value | Confidence | Status | Source |
|---|---|---|---|---|
| speaker reported dprk candidate | {"name": "Bryant Dang", "identity_status": "employment persona; civil identity unverified"} | high | published | [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 17:49; visually verified slide heading); [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 17:49-17:55; yt-dlp English auto-caption (en-orig and en tracks)) |
| speaker reported fresh email signal | {"platform": "Outlook", "breach_history": "none found", "vendor_fraud_score": "80/100", "provider_first_seen": true, "publisher_reported_pattern": "known DPRK-style name-plus-digits email pattern"} | high | published | [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 18:17-18:24; composite-detection slide; selector omitted); [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 18:29-18:34; composite-detection slide; selector omitted); [Jesse Buonanno / Security Dozo](https://docs.google.com/presentation/d/1yQZeV3lED610bYG3u8X3IDw4We4oP9XNsGdfoxUQCIs/edit?usp=sharing) (PDF p. 19, email result column; selector omitted, contiguous fragment 1 of 3); [Jesse Buonanno / Security Dozo](https://docs.google.com/presentation/d/1yQZeV3lED610bYG3u8X3IDw4We4oP9XNsGdfoxUQCIs/edit?usp=sharing) (PDF p. 19, email result column; selector omitted, contiguous fragment 2 of 3); [Jesse Buonanno / Security Dozo](https://docs.google.com/presentation/d/1yQZeV3lED610bYG3u8X3IDw4We4oP9XNsGdfoxUQCIs/edit?usp=sharing) (PDF p. 19, email result column; selector omitted, contiguous fragment 3 of 3) |
| speaker reported shared voip signal | {"provider": "Onvoy", "vendor_fraud_score": "85/100", "other_suspicious_candidates": 4, "number": "redacted by source"} | high | published | [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 18:52-19:03; composite-detection slide) |
| speaker reported network signals | {"origin": "data center", "traffic": "tunnel", "client_origin_signals": ["Indonesia", "Philippines", "Malaysia"]} | high | published | [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 19:06-19:18; composite-detection slide) |
| speaker reported profile characteristics | {"platform": "LinkedIn", "profile_path": "brdang", "profile_picture": false, "activity": "low", "connections": "low", "connections_observed": 182, "current_status": "not established"} | high | needs corroboration | [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 18:04-18:08; visually verified profile slide); [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 19:20-19:24); [Jesse Buonanno / Security Dozo](https://docs.google.com/presentation/d/1yQZeV3lED610bYG3u8X3IDw4We4oP9XNsGdfoxUQCIs/edit?usp=sharing) (PDF p. 18, visually verified résumé/profile slide) |
| speaker assessed resume as wordy and llm generated | {"artifact": "application résumé", "speaker_assessment": "very wordy and apparently LLM-generated", "underlying_authorship_established": false} | high | needs corroboration | [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 17:55-18:02; visually verified résumé slide) |
| speaker reported composite detection result | {"score": 16, "result": "well above the worked-example auto-reject threshold", "policy_context": "speaker described auto-reject as optional and recommended a human-in-the-loop risk-owner decision"} | high | published | [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 19:20-19:29, composite-score conclusion); [Jesse Buonanno / Security Dozo](https://docs.google.com/presentation/d/1yQZeV3lED610bYG3u8X3IDw4We4oP9XNsGdfoxUQCIs/edit?usp=sharing) (PDF p. 19, visually verified score conclusion); [Jesse Buonanno / Security Dozo](https://docs.google.com/presentation/d/1yQZeV3lED610bYG3u8X3IDw4We4oP9XNsGdfoxUQCIs/edit?usp=sharing) (PDF p. 20, response controls, contiguous fragment 1 of 2); [Jesse Buonanno / Security Dozo](https://docs.google.com/presentation/d/1yQZeV3lED610bYG3u8X3IDw4We4oP9XNsGdfoxUQCIs/edit?usp=sharing) (PDF p. 20, response controls, contiguous fragment 2 of 2) |
| publisher hosted link only worked example media | {"source_page": "https://www.youtube.com/watch?v=NSFh4XH-Lo4", "locator": "17:49-19:29", "media_description": "conference recording shows the Bryant worked-example résumé, sparse LinkedIn profile, and composite-detection slides", "handling": "link_only", "detached_resume_or_profile_republication": false, "identification_use": false} | high | needs corroboration | [BSides Seattle](https://www.youtube.com/watch?v=NSFh4XH-Lo4) (Video 17:49-19:29; visually verified worked-example slides) |

<details><summary>Exact quotes</summary>

- **speaker reported dprk candidate** — “Meet Bryant Dang” — BSides Seattle, Video 17:49; visually verified slide heading
- **speaker reported dprk candidate** — “And now we're going to meet Bryant. And this was an actual DPRK candidate that applied.” — BSides Seattle, Video 17:49-17:55; yt-dlp English auto-caption (en-orig and en tracks)
- **speaker reported fresh email signal** — “First, we’ll check to see if it’s in any breaches to establish that it has a history, which it is not.” — BSides Seattle, Video 18:17-18:24; composite-detection slide; selector omitted
- **speaker reported fresh email signal** — “the fraud score that came back from our fraud vendor rated it 80 out of 100.” — BSides Seattle, Video 18:29-18:34; composite-detection slide; selector omitted
- **speaker reported fresh email signal** — “No Breaches” — Jesse Buonanno / Security Dozo, PDF p. 19, email result column; selector omitted, contiguous fragment 1 of 3
- **speaker reported fresh email signal** — “Scored 80/100 by provider” — Jesse Buonanno / Security Dozo, PDF p. 19, email result column; selector omitted, contiguous fragment 2 of 3
- **speaker reported fresh email signal** — “TRUE - First time seen by provider” — Jesse Buonanno / Security Dozo, PDF p. 19, email result column; selector omitted, contiguous fragment 3 of 3
- **speaker reported shared voip signal** — “The phone number was registered to Onvoy. And this one particularly came back with four other suspicious candidates tied to that phone number.” — BSides Seattle, Video 18:52-19:03; composite-detection slide
- **speaker reported network signals** — “It was data center origin, which had tunnel traffic, and the original client information came from Indonesia, Philippines, and Malaysia.” — BSides Seattle, Video 19:06-19:18; composite-detection slide
- **speaker reported profile characteristics** — “And this is his LinkedIn profile, which you’ll see has little to no activity on it.” — BSides Seattle, Video 18:04-18:08; visually verified profile slide
- **speaker reported profile characteristics** — “Already showed you the LinkedIn, no profile picture, low activity, low connections.” — BSides Seattle, Video 19:20-19:24
- **speaker reported profile characteristics** — “www.linkedin.com/in/brdang ... 182 connections” — Jesse Buonanno / Security Dozo, PDF p. 18, visually verified résumé/profile slide
- **speaker assessed resume as wordy and llm generated** — “It's very wordy, very obviously like LLM generated. Not all applications are going to look like this, but this just happens to be a particularly bad one.” — BSides Seattle, Video 17:55-18:02; visually verified résumé slide
- **speaker reported composite detection result** — “So, for us, this is a—we're now at plus 16 and well above the auto reject limit.” — BSides Seattle, Video 19:20-19:29, composite-score conclusion
- **speaker reported composite detection result** — “16 Score well above threshold to auto-reject” — Jesse Buonanno / Security Dozo, PDF p. 19, visually verified score conclusion
- **speaker reported composite detection result** — “Auto Reject - *Optional* based on risk tolerance and severity confidence” — Jesse Buonanno / Security Dozo, PDF p. 20, response controls, contiguous fragment 1 of 2
- **speaker reported composite detection result** — “Have SOP for risk owner to make human in the loop final decision” — Jesse Buonanno / Security Dozo, PDF p. 20, response controls, contiguous fragment 2 of 2
- **publisher hosted link only worked example media** — “And now we’re going to meet Bryant.” — BSides Seattle, Video 17:49-19:29; visually verified worked-example slides

</details>

## Source-backed context

- email: value: Outlook account created for the persona; relationship: observed-in-investigation
- network: value: Data-center/tunnel traffic with source-observed Southeast Asian client-origin signals; relationship: observed-in-investigation
- telephony: value: Onvoy VoIP number, redacted by speaker; relationship: observed-in-investigation

## Sources

- BSides Seattle, [From Application to Access: The DPRK Remote Worker Playbook](https://www.bsidesseattle.com/events/2025/from-application-to-access%3A-the-dprk-remote-worker-playbook), 2026-03-30 — Event abstract and speaker biography \| Availability note (2026-08-12): the official event page returned HTTP 404; retained only as stale historical provenance because no exact official replacement or archive was verified. Last-known official event-page provenance for the talk title, abstract, and speaker; it is not the sole support for any retained claim
- BSides Seattle, [From Application to Access: Detecting DPRK IT Workers Before They Become Insider Threats](https://www.youtube.com/watch?v=NSFh4XH-Lo4), 2026-03-30 — 17:33–20:37 worked Bryant example; 13:30–17:32 composite detection; 20:37–23:31 controls. Official BSides Seattle recording of Jesse Buonanno’s systematic hiring-lifecycle detection framework and a worked example involving a source-labeled DPRK candidate named Bryant
- Jesse Buonanno / Security Dozo, [From Application to Access: Detecting DPRK IT Workers Before They Become Insider Threats](https://docs.google.com/presentation/d/1yQZeV3lED610bYG3u8X3IDw4We4oP9XNsGdfoxUQCIs/edit?usp=sharing)

*Data file: [`data/entities/persona/bryant-dang-bsides-seattle.json`](../../../data/entities/persona/bryant-dang-bsides-seattle.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
