# Persona-specific operational-security rules govern speech, login surfaces, and response time zones

`deep2-ttp-deep-ttp-03-bbc-persona-operational-security-rules` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> Defensive synthesis of cited public sources; the technique mapping supplies context rather than an identity attribution.

| | |
|---|---|
| TTPs | inconsistent-language-or-timezone, multiple-personas, shared-account |
| lazarus.group profiles | ttp-july-31-2026-joint-dprk-it-worker-alert |
| Last verified | 2026-08-12 |

## Caveats

- False-positive caution: Candidates may use assistive technology, interpreters, AI tools permitted by policy, or experience anxiety. Publish tool-use rules in advance and evaluate consistency and authorship rather than mannerisms.
- Remote teams, shift work, travel, caregiving, and VPNs create time-zone variation; language fluency and filler words are contextual signals, with nationality and intent requiring corroboration.
- The specific rules are a snapshot from one corpus and serve as examples rather than immutable signatures.

## Source-backed context

- BBC’s internal-rule evidence directs workers to rewrite technical answers into simple conversational English with natural fillers, avoid Gmail login on a shared PC so multiple identities are not exposed together, and answer clients on the claimed Serbian time zone. These are source-reported anti-correlation procedures, not immutable signatures.

## Sources

- BBC News Korea, [북한 IT 위장 취업조직의 실체…BBC가 입수한 북한 내부 기록을 열어보니 [Inside a DPRK IT employment-fraud organization: BBC reviews internal North Korean records]](https://www.bbc.com/korean/articles/clyx7gkyjr1o), 2026-06-26 — Secret-rules section. BBC reports explicit rules for conversational English, avoiding multi-identity Gmail exposure on shared PCs, and responding in the claimed time zone
- U.S. Departments of State, Treasury, and Justice; FBI; CISA; NSA; DC3; U.S. Space Force, [Alert to Countries, Companies, and Other Entities Regarding North Korean IT Workers](https://www.fbi.gov/file-repository/cyber-alerts/alert-to-countries-companies-and-other-entities-regarding-north-korean-information-technology-workers-073126.pdf/view), 2026-07-31 — PDF pp. 2-6; multi-indicator warning. The joint alert warns that no single behavior is definitive and indicators should be evaluated in combination

*Data file: [`data/entities/ttp/deep2-ttp-deep-ttp-03-bbc-persona-operational-security-rules.json`](../../../data/entities/ttp/deep2-ttp-deep-ttp-03-bbc-persona-operational-security-rules.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
