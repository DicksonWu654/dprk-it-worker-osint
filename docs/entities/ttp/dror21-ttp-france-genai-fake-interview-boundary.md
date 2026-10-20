# France CERT generative-AI fake-interview boundary

`dror21-ttp-france-genai-fake-interview-boundary` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> Official secondary threat synthesis with conditional attribution to cited vendor reporting; French incident, legal finding, sanction, adjudication, and independent technical corroboration remain outside the cited reporting.

| | |
|---|---|
| TTPs | fake-interview-social-engineering, generative-ai-assisted-synthetic-profiles, malware-delivery-context |
| Last verified | 2026-08-12 |

## Caveats

- Fake-interview malware activity must remain separate from fraudulent-employment records unless a source explicitly connects the same conduct and evidence.
- The normalized record intentionally omits campaign, actor, company, employee, account, and victim names.
- The publication page and PDF are one official source family; the official report and cited vendor reporting form a dependent claim chain, so corroboration remains source-dependent.

## Source-backed context

- A national CERT threat synthesis conditionally restates cited reporting that generative AI was used to create false company and employee profiles on social networks during 2024-2025.
- Official-language context does not establish a new incident, actor, victim, employment case, or independent technical attribution.

## Sources

- CERT-FR / Agence nationale de la sécurité des systèmes d'information (ANSSI), [Generative AI and Cyberattacks — 2025 Threat Summary](https://www.cert.ssi.gouv.fr/cti/CERTFR-2026-CTI-001), 2026-02-04 — Publication page title, date, summary, and downloadable-report link. Supports the February 4, 2026 publication chronology and official provenance of the threat synthesis. The page and downloadable report are one CERT source family and must not be counted as independent corroboration
- CERT-FR / Agence nationale de la sécurité des systèmes d'information (ANSSI), [Generative AI and Cyberattacks — 2025 Threat Summary](https://www.cert.ssi.gouv.fr/uploads/CERTFR-2026-CTI-001.pdf), 2026-02-04 — PDF page 4, section 1.1, first bullet under 'Conception de contenus à des fins d’ingénierie sociale et de reconnaissance'; footnote 6 and reference [6] on PDF page 9. Supports a narrow secondary-source claim that, according to cited vendor reporting and using conditional attribution, generative-AI services reportedly helped create false company and employee profiles on social networks during 2024-2025. The cited context is fake-interview malware delivery; the report does not describe a French victim, an authority-observed local incident, or use of those profiles for fraudulent employment

*Data file: [`data/entities/ttp/dror21-ttp-france-genai-fake-interview-boundary.json`](../../../data/entities/ttp/dror21-ttp-france-genai-fake-interview-boundary.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
