# Identity-ambiguity response across the worker lifecycle

`dfplr22-ttp-identity-ambiguity-response` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Provider-authored defensive analysis and response guidance; incident disclosure, identity determination, official attribution, adjudication, and independently validated efficacy study fall outside its scope.

| | |
|---|---|
| TTPs | borrowed-identity, credential-sharing, laptop-forwarding, proxy-interviewee |
| lazarus.group profiles | dfef-ttp-lifecycle-identity-continuity |
| Last verified | 2026-08-12 |

## Caveats

- Camera or audio problems, VPN use, atypical hours, travel, shared housing, common service providers, assistive technology, new online profiles, or geography may have benign explanations.
- Minimize and bound retention of identity, voice, face, device, collaboration, authentication, logistics, location, and employment data; use human review rather than a public watchlist or automatic rejection or termination rule.
- Identity-continuity guidance identifies the boundaries among actors, affected organizations, incidents, accounts, and selectors.
- Use multiple independently explainable signals, trained human review, documented rationale, correction and appeal paths, accessibility accommodations, and proportionate access controls.

## Source-backed context

- Treat supported inconsistencies as an identity-ambiguity response problem rather than as proof of nationality, identity, affiliation, or misconduct.
- Preserve relevant evidence before changing access, then apply proportionate temporary access limits while trained reviewers assess the ambiguity.
- Compare continuity across application, interview, onboarding, device use, authentication, collaboration, shipping, work location, schedule, role, and early work product.
- Use controlled real-time identity reconfirmation with accessible non-biometric alternatives and human review.

## Sources

- VerSprite, [DPRK IT Workers: The Operational Reality Most Organizations Are Missing](https://versprite.com/resources/blog/dprk-it-workers-security-detection-hiring-risk), 2026-04-24 — Sections “The Real Problem: Identity Consistency,” “What Organizations Should Monitor,” “When the Signals Do Not Add Up,” “Controls That Still Matter,” “Common Mistakes Organizations Make,” and “Practical Defensive Questions.”. VerSprite frames the risk as failure to validate whether one consistent person operates an approved identity across application, interview, onboarding, device use, collaboration, and work. It recommends correlating identity, endpoint, collaboration, shipping, and authentication evidence; limiting access during review; preserving evidence; and reconfirming identity under controlled real-time conditions rather than waiting for malware or treating one weak signal as proof. Evidence boundary: Provider-authored defensive analysis, not a disclosed VerSprite incident, named-customer case, official attribution, adjudication, benchmark, false-positive study, or independent product-efficacy evaluation. Most campaign background is synthesized from public advisories and known cases

*Data file: [`data/entities/ttp/dfplr22-ttp-identity-ambiguity-response.json`](../../../data/entities/ttp/dfplr22-ttp-identity-ambiguity-response.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
