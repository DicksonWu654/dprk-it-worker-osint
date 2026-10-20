# Role-baselined repository access for recent hires

`dc2-ttp-role-baselined-repository-access` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high

> This is Sophos-published repository-monitoring guidance with no published sensitivity, specificity, or universal threshold.

| | |
|---|---|
| TTPs | code-repository-reuse, shared-code, source-code-exfiltration, trade-secret-theft |
| lazarus.group profiles | deep2-vendor-dv-f02, drh-ttp-endpoint-custody-posthire-control-bundle, ttp-package-maintainer-continuity-monitoring |
| Last verified | 2026-08-12 |

## Caveats

- A low commit count is normal for reviewers, managers, researchers, support engineers, and short-lived investigations.
- Apply controls consistently with privacy, employment, labor, accessibility, retention, notice, correction, and access-governance requirements.
- Onboarding, incident response, migrations, monorepos, build systems, code search, backup jobs, and role changes can generate high-volume legitimate access.
- Use role-aware peer groups and project context; long hours and off-hours work are ordinary work patterns requiring corroboration before risk treatment.
- Use the pattern to prioritize documented human-led review; DPRK affiliation, fraud, and malicious intent require a combined evidence record.

## Source-backed context

- For new hires and contractors, baseline repository scope, clone/download-to-contribution ratio, access time, network origin, and role entitlement over rolling windows.
- Escalate only when several dimensions diverge from both the user's own history and peers with the same role, then validate against assigned projects and onboarding tasks.
- Pair the hunt with least privilege and staged repository grants so onboarding does not expose unrelated code by default.

## Sources

- Sophos, [Guide to implementing controls for the North Korean threat](https://assets.sophos.com/X24WTUEQ/at/77492sw46g8p4tgq37rsfrgr/guide-to-implementing-controls-north-korean-threat.pdf) — pp. 1-2, especially Matrix overview and Detection and prevention. The publisher-hosted PDF mirror confirms that the linked matrix spans security monitoring and threat hunting; it is not independent corroboration of the individual matrix controls
- Sophos, [Control matrix spreadsheet: North Korean IT workers](https://assets.sophos.com/X24WTUEQ/at/w5j9xswf4bsvjqc9r3tqp3t/control-matrix-spreadsheet-north-korean-it-workers-pm-v1.xlsx) — Worksheets: Project Tracker Sheet, Banking payroll and finance, Security and monitoring, Threat hunting. The matrix proposes reviewing combinations of previously unseen repositories, unusual clone or download volume relative to contribution, new access methods, and repository scope inconsistent with the assigned role
- Sophos, [Implementation Guide: North Korean IT Workers](https://www.sophos.com/en-gb/trust/ciso-playbooks/implementation-guide-north-korean) — Page heading and sections: Matrix overview; Detection and prevention; linked PDF and control-matrix downloads. Sophos recommends inventorying code repositories and comparing a worker's recent access with a longer personal history

*Data file: [`data/entities/ttp/dc2-ttp-role-baselined-repository-access.json`](../../../data/entities/ttp/dc2-ttp-role-baselined-repository-access.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
