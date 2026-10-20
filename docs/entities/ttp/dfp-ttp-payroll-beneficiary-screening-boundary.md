# Payroll KYC and beneficiary screening do not prove worker identity continuity

`dfp-ttp-payroll-beneficiary-screening-boundary` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Financial anomalies are review signals; identity, facilitation, and DPRK attribution require other evidence. First-party platform control or threat-research guidance is normalized as defensive context; control-effectiveness status requires separate validation; Sophos-published payroll and finance guidance.

| | |
|---|---|
| TTPs | bank-account-mule, fiat-salary, money-laundering, payment-platform, payroll-fraud |
| lazarus.group profiles | deep2-ttp-deep-ttp-11-cloud-saas-posthire-correlation, dfp-ttp-payroll-beneficiary-screening-boundary, ttp-ttp-payments |
| Last verified | 2026-08-12 |

## Caveats

- Apply controls consistently with privacy, employment, labor, accessibility, retention, notice, correction, and access-governance requirements.
- Lawful financial products require risk-based policy, legal review, and documented exceptions rather than prohibition by brand or worker location.
- Financial data is sensitive. Minimize access and avoid exposing raw bank, tax, or payment identifiers in threat-intelligence outputs.
- Joint accounts, payroll providers, relocation, name changes, bank mergers, failed payments, and contractor intermediaries can be legitimate.
- KYC, sanctions screening, and beneficiary checks establish screening results; work performance and continuous account control require additional evidence.
- These controls address submitted identity, account, and beneficiary checks; identifying the true worker who controls the submitted identity, account, or beneficiary requires separate evidence. Deel publishes a general control description, and no DPRK-specific detection count is published here.
- Use the pattern to prioritize documented human-led review; DPRK affiliation, fraud, and malicious intent require a combined evidence record.

## Source-backed context

- Build a governed employee-beneficiary graph and alert on newly shared or rapidly changing beneficiary attributes across otherwise unrelated workers or contractors.
- Correlate payroll changes with HR identity events, endpoint/device changes, location claims, manager confirmation, and approved exceptions.
- Require secondary-channel verification and dual authorization for sensitive beneficiary changes, preserving an auditable override trail.
- Deel states that it performs KYC on platform customers, screens transactions and beneficiaries against sanctions and anti-fraud lists, applies enhanced due diligence to businesses, refreshes checks, and contractually prohibits platform access from North Korea and transactions involving restricted parties.

## Sources

- Sophos, [Guide to implementing controls for the North Korean threat](https://assets.sophos.com/X24WTUEQ/at/77492sw46g8p4tgq37rsfrgr/guide-to-implementing-controls-north-korean-threat.pdf) — pp. 1-2, especially Matrix overview and Detection and prevention. The publisher-hosted PDF mirror describes the same cross-functional Sophos control program and is retained as a static fallback, not independent corroboration
- Sophos, [Control matrix spreadsheet: North Korean IT workers](https://assets.sophos.com/X24WTUEQ/at/w5j9xswf4bsvjqc9r3tqp3t/control-matrix-spreadsheet-north-korean-it-workers-pm-v1.xlsx) — Worksheets: Project Tracker Sheet, Banking payroll and finance, Security and monitoring, Threat hunting. The Sophos matrix recommends reviewing shared beneficiary attributes, worker-to-beneficiary name mismatches, repeated or late beneficiary changes, returned payments, and repeated requests for exceptional payment channels
- Deel, [How Deel Runs Customer Checks](https://www.deel.com/blog/how-deel-runs-customer-checks), 2025-04-30 — Customer checks; KYC, transaction/beneficiary screening, EDD, periodic refresh. Deel describes customer KYC, transaction and beneficiary screening, enhanced due diligence, refreshed checks, and contractual restrictions involving North Korea and restricted parties
- Deel, [Terms of Service](https://www.deel.com/legal/terms-of-service) — Part I sections 5.3-5.4, prohibited regions and restricted parties. Deel describes customer KYC, transaction and beneficiary screening, enhanced due diligence, refreshed checks, and contractual restrictions involving North Korea and restricted parties
- Sophos, [Implementation Guide: North Korean IT Workers](https://www.sophos.com/en-gb/trust/ciso-playbooks/implementation-guide-north-korean) — Page heading and sections: Matrix overview; Detection and prevention; linked PDF and control-matrix downloads. Sophos recommends recurring review of sensitive employee master-data changes and separation of payroll entry, approval, reconciliation, and payment duties

*Data file: [`data/entities/ttp/dfp-ttp-payroll-beneficiary-screening-boundary.json`](../../../data/entities/ttp/dfp-ttp-payroll-beneficiary-screening-boundary.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
