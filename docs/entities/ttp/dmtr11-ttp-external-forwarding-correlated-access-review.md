# Correlate new external email-forwarding rules with unusual cloud, repository, identity, and device telemetry

`dmtr11-ttp-external-forwarding-correlated-access-review` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> This is defensive practitioner guidance. It supplies no government attribution, legal finding, disclosed case record, or standalone basis for attributing a worker or account.

| | |
|---|---|
| TTPs | cloud-storage-access-correlation, device-custody-correlation, external-email-forwarding-rule-review, human-review, identity-continuity-correlation, mail-audit-log-preservation, source-repository-access-correlation |
| lazarus.group profiles | deep-detection-controls-2 coordinated termination inventory of forwarding rules |
| Last verified | 2026-08-12 |

## Caveats

- Correlate newly created external forwarding rules with cloud, repository, identity-continuity, and device-custody telemetry; a forwarding rule alone leaves malicious intent unresolved.
- Email forwarding has many legitimate uses; affiliation assessment requires additional evidence.
- External forwarding rules, high-volume access, off-hours activity, identity changes, and device changes all have legitimate explanations and are nonspecific individually.
- The record retains citation context; external address, victim, and raw selector details stay outside it.
- The package retains source-publication provenance required to audit the finding while excluding people, speakers, personas, accounts, organizations, destinations, addresses, victims, products, raw selectors, and executable artifacts.
- Practitioner guidance only; retain review status and treat the correlation as a lead pending independently verified incident telemetry.
- Private forwarding destinations are sensitive incident data and remain unpublished and narrowly circulated.
- The source presents practitioner guidance rather than a disclosed case with independently verifiable logs.
- The source omits illustrative destination geography; the cited method treats geography as an unreliable selector or nationality/affiliation proxy.
- Use the signal only as a correlated, role-aware review trigger with documented business context, proportional access governance, and a correction-and-appeal path; an adverse employment or attribution decision requires more evidence.

## Source-backed context

- Review newly created external auto-forwarding or inbox rules when they coincide with unusual bulk cloud-storage or source-repository access, atypical transfer timing, or identity- and device-continuity anomalies. Preserve mail-rule change and access audit telemetry, compare the activity with role expectations and approved business need, and route the correlation to human review rather than treating any component as proof.

## Sources

- Antisyphon Training / Black Hills Information Security, [How to Detect Malicious Remote Workers w/ James McQuiggan](https://share.transistor.fm/s/aff37195/transcript), 2026-03-17 — 44:03-44:51 (external forwarding in the SOC telemetry discussion). The publisher-hosted transcript states at 44:03-44:51 that newly created external email-forwarding rules should be reviewed with unusual cloud or repository access and related post-hire telemetry
- Black Hills Information Security / Antisyphon Training, [How to Detect Malicious Remote Workers — webcast slides](https://www.blackhillsinfosec.com/wp-content/uploads/2026/03/SLIDES_2026-03-11-AntiSyphon-DPRK-Hiring.pdf), 2026-03-11 — page 34 (SOC Telemetry). The publisher's stable URL redirects on the same site to /uploads/media/wp-content/...; only the original URL is retained to avoid duplicate registry entries. The first-party slide deck lists on page 34 email-forwarding rules created by new hires alongside unusual repository/cloud access and identity, endpoint, network, and data-protection telemetry

*Data file: [`data/entities/ttp/dmtr11-ttp-external-forwarding-correlated-access-review.json`](../../../data/entities/ttp/dmtr11-ttp-external-forwarding-correlated-access-review.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
