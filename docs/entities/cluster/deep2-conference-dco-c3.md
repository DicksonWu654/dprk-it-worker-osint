# Exabeam July 2025 phantom-hire case

`deep2-conference-dco-c3` · Cluster or incident · Reported by an affected organization · confidence high · **needs corroboration**

> First-party case presentation; legal identity adjudication is absent.

| | |
|---|---|
| TTPs | forged-identity-document, proxy-interviewee, remote-desktop, vpn |
| Last verified | 2026-08-12 |

## Caveats

- Raw IOC bulk is excluded from this record.
- The employer/victim context beyond Exabeam's own presentation is incomplete; customer identities remain unresolved.
- The stolen identity victim name and local username are omitted entirely.

## Source-backed context

- Offer accepted June 16, pre-employment clearance June 26, onboarding July 7, and endpoint detections July 9, 2025.
- Actor immediately used streaming/remote-access, VPN, malicious-download, jump-box, and C2-like behavior; the SOC isolated and bricked the laptop and shared IOCs with the FBI.

## Sources

- Exabeam, [From Hired to Fired: Lessons From a Real Insider Threat](https://www.exabeam.com/wp-content/uploads/SLIDEDECK-From-Hired-to-Fired-Lessons-From-a-Real-Insider-Threat.pdf), 2026-06-02 — Slides 1-18, especially Summary of Events, Hiring Timeline, Picture This, UEBA Timeline, How the Attack Was Thwarted, Nation State Adversary Tools & Techniques. Offer accepted June 16, pre-employment clearance June 26, onboarding July 7, and endpoint detections July 9, 2025. Actor immediately used streaming/remote-access, VPN, malicious-download, jump-box, and C2-like behavior; the SOC isolated and bricked the laptop and shared IOCs with the FBI

*Data file: [`data/entities/cluster/deep2-conference-dco-c3.json`](../../../data/entities/cluster/deep2-conference-dco-c3.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
