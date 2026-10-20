# Standardized Git workflows can mirror client repositories and synchronize commits under intended personas

`deep2-ttp-deep-ttp-12-private-repo-mirroring-and-identity-synchronization` · Tactic, technique or procedure · Attributed by security researchers or press · confidence high · **needs corroboration**

> Defensive synthesis of cited public sources; the technique mapping supplies context rather than an identity attribution.

| | |
|---|---|
| TTPs | code-repository-reuse, shared-code, source-code-exfiltration |
| lazarus.group profiles | infrastructure-gitlab-2026-account-indicator-set |
| Last verified | 2026-08-12 |

## Caveats

- Commit metadata can be rewritten during legitimate rebases, migrations, pair programming, or by bots; authorship anomalies require corroboration before account-sharing attribution.
- False-positive caution: Repository mirroring, backups, migrations, monorepo tooling, and CI systems are legitimate. Baseline by role and approved destination.

## Source-backed context

- GitLab reports standardized tooling used to mirror private repositories and synchronize commits under intended developer identities, both reducing persona mistakes and retaining copies of client code. This combines code theft risk, shared-team operation, and authorship manipulation more specifically than generic repository reuse.

## Sources

- GitLab Threat Intelligence, [GitLab Threat Intelligence Team reveals North Korean tradecraft](https://about.gitlab.com/blog/gitlab-threat-intelligence-reveals-north-korean-tradecraft), 2026-02-19 — Case Studies 1-4; appendices; organization, identity, repository, performance, and extortion findings. GitLab reports standardized tooling used to mirror private repositories and synchronize commits under intended developer identities, both reducing persona mistakes and retaining copies of client code. This combines code theft risk, shared-team operation, and authorship manipulation more specifically than generic repository reuse

*Data file: [`data/entities/ttp/deep2-ttp-deep-ttp-12-private-repo-mirroring-and-identity-synchronization.json`](../../../data/entities/ttp/deep2-ttp-deep-ttp-12-private-repo-mirroring-and-identity-synchronization.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
