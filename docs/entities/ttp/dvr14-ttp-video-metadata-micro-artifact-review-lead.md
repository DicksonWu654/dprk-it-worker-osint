# Video-metadata micro-artifact review lead for live deepfake interviews

`dvr14-ttp-video-metadata-micro-artifact-review-lead` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> Cloudforce One's published assessment is retained as an evidence-limited review lead; validation methods and detector performance remain unpublished by the source.

| | |
|---|---|
| TTPs | deepfake-interview-review, human-in-the-loop-corroboration, video-metadata-review |
| Last verified | 2026-08-12 |

## Caveats

- Apply this signal within human review and corroboration, rather than as an automated rejection rule.
- Faceprints, raw interview video, and biometric templates are excluded from this dataset.
- A metadata anomaly calls for review; deepfake use, fraudulent employment, nationality, and DPRK affiliation require corroboration.
- Retain the video-metadata item only as a vendor-assessed corroborating lead. Candidate rejection and DPRK attribution require separate evidence. The report's biometrics-only recommendation requires privacy, accessibility, legal, spoof-resistance, and non-biometric-alternative safeguards before defensive use.
- The report omits technical definition, implementation detail, test corpus, sample size, sensitivity, specificity, and false-positive rate.
- The source recommends zero-trust biometric verification; this record keeps the recommendation under review. Any identity-assurance control requires privacy, accessibility, legal, retention, consent, spoof-resistance, and non-biometric-alternative review.
- Video metadata can be altered by legitimate conferencing software, accessibility tooling, virtual backgrounds, bandwidth adaptation, recording, privacy tools, and ordinary media processing.

## Source-backed context

- Cloudforce One identifies specific video metadata micro-artifacts consistent with real-time deepfake rendering as one of several high-fidelity indicators in North Korean remote IT-worker schemes.
- The vendor’s metadata-layer micro-artifact concept is a proposed corroborating lead, not a validated detection method.
- Materially new but evidence-limited lead: preserve conferencing metadata only when lawful and necessary for security review, assess source-described metadata-layer rendering anomalies, and require independent identity, device, location, and hiring-process evidence before escalation.

## Sources

- Cloudflare Cloudforce One, [2026 Cloudflare Threat Report](https://cf-assets.www.cloudflare.com/slt3lc6tev37/sWDBUMNVtEJB9ZFLt1dUU/7dbc689952ed8aa04c483c9a97862f06/Cloudflare-2026-threat-full-report.pdf) — PDF page 12, The industrialization of insider threats; PDF page 55, Implement human-in-the-loop verification for remote hiring. Cloudforce One describes North Korean remote IT-worker schemes as an industrialized insider threat using fraudulent identities, AI-driven deepfakes, U.S.-based laptop farms, facilitators, RMM access, and comprehensive LinkedIn and GitHub personas. Alongside impossible-travel and mouse-jiggling indicators, Cloudforce One identifies video metadata micro-artifacts consistent with real-time deepfake rendering as a high-fidelity detection indicator. The source reports publication timing only at year precision: 2026; published_at is therefore left null rather than inventing a day. The PDF metadata records document creation on 2026-03-23; this is not asserted as the public release date. Normalized finding: Cloudforce One identifies specific video metadata micro-artifacts consistent with real-time deepfake rendering as one of several high-fidelity indicators in North Korean remote IT-worker schemes

*Data file: [`data/entities/ttp/dvr14-ttp-video-metadata-micro-artifact-review-lead.json`](../../../data/entities/ttp/dvr14-ttp-video-metadata-micro-artifact-review-lead.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
