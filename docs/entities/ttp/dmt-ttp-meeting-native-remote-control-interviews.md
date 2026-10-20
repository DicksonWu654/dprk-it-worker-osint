# Meeting-native remote control and answer relay during interviews

`dmt-ttp-meeting-native-remote-control-interviews` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Source-qualified defensive abstraction only. The stated evidence class covers a defensive abstraction; legal identity, nationality, employer compromise, prevalence rate, and adjudicated fact require separate sources.

| | |
|---|---|
| TTPs | answer-relay, identity-continuity, meeting-remote-control, native-fronted-interview |
| lazarus.group profiles | conference-media-deep-dive: native-fronted interview / answer prompting, talks-presentations: AI-assisted interview activity |
| Last verified | 2026-08-12 |

## Caveats

- Claim attribution: Aidan Raney, SecretCon 2025.
- Evidence class: researcher-reported observed workflow.
- Fraudulent employment and fake-interview malware remain separate analytic tracks absent explicit same-case evidence.
- The record excludes people, personas, accounts, companies, victims, images, contact details, payment selectors, credentials, raw network indicators, and leaked material.
- Accent, ethnicity, nationality, appearance, location, camera or audio quality, productivity level, consumer email, shipping change, meeting feature, and technical anomaly are contextual signals; fraud or DPRK attribution requires independent evidence.
- The speaker says a call segment about detection bypass was omitted from the conference playback, so that portion is his oral account rather than independently visible evidence.
- Use behavior and continuity signals only in combination with independent verification, consistently applied human review, least privilege, and an appeal or correction path.
- WebEx, Teams, and Notepad are legitimate tools; this behavior requires context and corroboration.

## Source-backed context

- Raney says the suspected operation discussed using WebEx or Teams take-control features to avoid detections associated with standalone remote tools. During interviews, the remote operator could see and hear the same call and place answers in Notepad for the front person to read.
- Disable or narrowly authorize give-control/take-control features for candidate interviews and onboarding calls.
- Log meeting remote-control grants and correlate them with candidate identity, device, and endpoint telemetry.
- Require unscripted reasoning and continuity checks that cannot be satisfied by reading short relayed answers.
- Retain the source's observation class and do not generalize a controlled test, speaker claim, vendor sample, or demonstration into measured prevalence.

## Sources

- SecretCon Minnesota, [Key Insights from Infiltrating a DPRK Laptop Farm, The Evolving ITW Threat](https://www.youtube.com/watch?v=7jZ-xvWY6qU), 2025-11-29 — 09:29–09:53 and 17:37–18:02. Raney says the suspected operation discussed using WebEx or Teams take-control features to avoid detections associated with standalone remote tools. During interviews, the remote operator could see and hear the same call and place answers in Notepad for the front person to read

*Data file: [`data/entities/ttp/dmt-ttp-meeting-native-remote-control-interviews.json`](../../../data/entities/ttp/dmt-ttp-meeting-native-remote-control-interviews.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
