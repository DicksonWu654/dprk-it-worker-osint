# Unit 42 Wagemole enterprise response and employment-access harms

`dvr14-ttp-unit42-wagemole-enterprise-response-and-harm` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Unit 42's first-party incident-response observation and source-attributed campaign characterization; adjudication, named-victim count, and case-level findings require separate evidence.

| | |
|---|---|
| TTPs | employment-derived-access, enterprise-incident-response, espionage, unauthorized-financial-payments |
| lazarus.group profiles | cluster-wagemole |
| Last verified | 2026-08-12 |

## Caveats

- The source leaves the unit represented by each environment unresolved across worker, successful hire, employer, and distinct-incident counts.
- The dataset contains up to 20 victim or worker records.
- Previously cataloged personas, accounts, companies and infrastructure selectors have no source link to these environments.
- The source offers context on espionage activity; scope, target, success, and current status require separate evidence.
- The source leaves payment categories open: payroll, fraud, theft, reimbursement, or another type.
- Use 'Unit 42 states/reports' and 'Wagemole-related activity.' The count covers the source's reported activity; named victims, unique workers, successful hires, legal findings, and current compromise require separate evidence.

## Source-backed context

- Unit 42 reports that Wagemole remained active in 2025 and that its responders identified and evicted related activity from more than 20 enterprise environments. It further states that access obtained through contractor and employee roles enabled unauthorized financial payments and espionage.
- Observed boundary: Unit 42 says its responders identified and evicted Wagemole-related activity from more than 20 enterprise environments during 2025. The aggregate is a vendor-reported response metric, not a count of named victims, unique workers, successful hires, employers, or independently verified incidents.
- Attributed boundary: Unit 42 characterizes access obtained through contractor and employee roles as enabling unauthorized financial payments and espionage. The source does not specify payment type or establish the scope, target, success, or current status of espionage for each environment.

## Sources

- Palo Alto Networks Unit 42, [2026 Unit 42 Global Incident Response Report](https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report) — North Korea: Weaponized HR Part I; Wagemole bullet; PDF page 14. Unit 42 states that Wagemole operatives obtained unauthorized remote employment with U.S. and European organizations and covertly routed income to the DPRK regime. Unit 42 states that access obtained through contractor and employee roles enabled unauthorized financial payments and espionage. Unit 42 states that Wagemole remained active in 2025 and that its responders identified and evicted related activity from more than 20 enterprise environments. The source reports publication timing only at month precision: 2026-02; published_at is therefore left null rather than inventing a day. Normalized finding: Unit 42 reports that Wagemole remained active in 2025 and that its responders identified and evicted related activity from more than 20 enterprise environments. It further states that access obtained through contractor and employee roles enabled unauthorized financial payments and espionage

*Data file: [`data/entities/ttp/dvr14-ttp-unit42-wagemole-enterprise-response-and-harm.json`](../../../data/entities/ttp/dvr14-ttp-unit42-wagemole-enterprise-response-and-harm.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
