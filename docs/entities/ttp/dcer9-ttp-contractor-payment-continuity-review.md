# Contractor identity-to-payment continuity review

`dcer9-ttp-contractor-payment-continuity-review` · Tactic, technique or procedure · Attributed by security researchers or press · confidence medium · **needs corroboration**

> Chainalysis analytical guidance is abstracted into a privacy-safe control for generalized risk. Attribution and legal liability require separate evidence for any particular worker, contractor, payer, recipient, service, account, wallet, transaction, or organization.

| | |
|---|---|
| TTPs | contract-beneficiary-review, human-review, identity-payment-continuity, multi-signal-corroboration, split-payment-review, third-party-payment-review |
| lazarus.group profiles | dfp-ttp-payroll-beneficiary-screening-boundary, dwpr5-ttp-identity-location-contract-payout-continuity |
| Last verified | 2026-08-12 |

## Caveats

- Wallet addresses, account details, transaction identifiers, and raw screening matches are excluded.
- Nationality, citizenship, family location, ethnicity, appearance, accent, language, geography, compensation level, and one vendor or automated result require corroboration before any adverse or attribution decision.
- The record retains bounded source context; wallet addresses, transaction identifiers, accounts, payment credentials, raw screening matches, people, personas, entities, victims, images, biometric material, identity documents, private data, and sensitive selectors stay outside it.
- Stablecoin payment, multiple wallets, third-party payment, and low rates occur in legitimate global contracting; each requires corroboration before attribution.
- Stablecoin use, multiple payment destinations, third-party payment requests, and low rates occur in legitimate global contracting; each requires lawful corroboration and documented human review before any inference.
- The record is a source-qualified defensive control abstraction; person, entity, account, incident, and attribution profiles remain separate record types.
- Use only in combination with lawful identity, contract, location, ownership and sanctions controls.

## Source-backed context

- multi-signal-contractor-payment-continuity-control: evidence_class: first-party blockchain-analytics guidance; description: Chainalysis recommends treating stablecoin preference, requests to split payments among multiple wallets and complex third-party payment arrangements as review signals when combined with identity, location and credential inconsistencies.

## Sources

- Chainalysis, [North Korea IT Workers: Inside the DPRK’s Crypto Laundering Network](https://www.chainalysis.com/blog/dprk-it-workers-north-korea-crypto-laundering-networks), 2025-10-01 — Sections 'Generating revenue in cryptocurrency', 'Obfuscating revenue through blockchain technology', 'Off-ramping revenue to fiat', and 'Lessons learned for targeting crypto-enabled laundering networks'. Chainalysis recommends treating stablecoin preference, requests to split payments among multiple wallets and complex third-party payment arrangements as review signals when combined with identity, location and credential inconsistencies

*Data file: [`data/entities/ttp/dcer9-ttp-contractor-payment-continuity-review.json`](../../../data/entities/ttp/dcer9-ttp-contractor-payment-continuity-review.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
