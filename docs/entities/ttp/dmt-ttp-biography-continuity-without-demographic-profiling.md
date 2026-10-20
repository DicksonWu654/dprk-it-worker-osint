# Biography continuity checks without demographic profiling

`dmt-ttp-biography-continuity-without-demographic-profiling` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> Source-qualified defensive abstraction only. The stated evidence class covers a defensive abstraction; legal identity, nationality, employer compromise, prevalence rate, and adjudicated fact require separate sources.

| | |
|---|---|
| TTPs | adaptive-interviewing, anti-profiling, biography-continuity, independent-verification |
| lazarus.group profiles | conference-hiring-composite-detection, deep-first-party-platforms: identity continuity |
| Last verified | 2026-08-12 |

## Caveats

- Claim attribution: Christophe Haubursin, Tunnel Vision controlled interview.
- Evidence class: controlled journalistic interview.
- Fraudulent employment and fake-interview malware remain separate analytic tracks absent explicit same-case evidence.
- Nervousness, language difficulty, or imprecise geography can have benign explanations.
- The record excludes people, personas, accounts, companies, victims, images, contact details, payment selectors, credentials, raw network indicators, and leaked material.
- Accent, ethnicity, nationality, appearance, location, camera or audio quality, productivity level, consumer email, shipping change, meeting feature, and technical anomaly are contextual signals; fraud or DPRK attribution requires independent evidence.
- The candidate identity was source-labeled and remains legally unadjudicated.
- Use behavior and continuity signals only in combination with independent verification, consistently applied human review, least privilege, and an appeal or correction path.

## Source-backed context

- In the controlled interview, the candidate gave inconsistent or thin answers about claimed residence, upbringing, language history, and future in-person work. The useful signal is inconsistency with the claimed biography and independent records, not accent, appearance, nationality, or location alone.
- Ask specific, ordinary questions tied to the claimed work and education history, and verify answers through independent records.
- Repeat key identity and experience questions across interview rounds to test continuity.
- Never turn accent, ethnicity, nationality, camera quality, or geography into standalone rejection rules.
- Retain the source's observation class and do not generalize a controlled test, speaker claim, vendor sample, or demonstration into measured prevalence.

## Sources

- Tunnel Vision / Christophe Haubursin, [I tried to hire a North Korean scammer](https://www.youtube.com/watch?v=Y7x0gvfFa0Q), 2025-06-25 — 08:37–11:44. In the controlled interview, the candidate gave inconsistent or thin answers about claimed residence, upbringing, language history, and future in-person work. The useful signal is inconsistency with the claimed biography and independent records, not accent, appearance, nationality, or location alone

*Data file: [`data/entities/ttp/dmt-ttp-biography-continuity-without-demographic-profiling.json`](../../../data/entities/ttp/dmt-ttp-biography-continuity-without-demographic-profiling.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
