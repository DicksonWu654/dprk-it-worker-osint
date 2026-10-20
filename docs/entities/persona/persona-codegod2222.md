# codegod2222

`persona-codegod2222` · Employment persona · Attributed by security researchers or press · confidence high · **needs corroboration**

> Microsoft Threat Intelligence reports Figure 3 as a GitHub profile used by a North Korean IT worker. This is a publisher attribution to a historical platform account; it carries no civil-identity finding, criminal allegation, sanctions designation, proof of nationality for an apparent profile subject, or present-controller determination.

**Identity boundary.** Microsoft Figure 3 reports codegod2222 as a GitHub profile used by a North Korean IT worker. Figure 2 separately reports the Joshua Desire LinkedIn persona; their adjacency leaves account, label, and apparent profile-subject linkage unresolved.

| | |
|---|---|
| Accounts | GitHub `codegod2222` (removed) |
| TTPs | source-reported public developer-profile backstopping |
| Last verified | 2026-08-16 |

## Caveats

- A surviving third-party issue mention shows only that codegod2222 appeared in the record; authorship of deleted content, account control at that time, and code contribution remain unestablished.
- Microsoft Figure 3 reports codegod2222 as a GitHub profile used by a North Korean IT worker. Figure 2 separately reports the Joshua Desire LinkedIn persona; their adjacency leaves account, label, and apparent profile-subject linkage unresolved.
- The profile title and experience text are historical account claims visible in Microsoft's figure; employment or experience status remains source-reported.
- Zero current GitHub and archive search results leave deletion timing, deletion cause, renaming, and universal historical absence unresolved.

## Claims (5)

| Claim | Value | Confidence | Status | Source |
|---|---|---|---|---|
| publisher reported historical github account | {"platform": "GitHub", "handle": "codegod2222", "source_reported_status": "taken down by publication time", "current_exact_endpoint_status": "not found", "present_controller_established": false} | high | needs corroboration | [Microsoft Threat Intelligence](https://www.microsoft.com/en-us/security/blog/2025/06/30/jasper-sleet-north-korean-remote-it-workers-evolving-tactics-to-infiltrate-organizations) (Figure 3 alternative text and caption); [GitHub](https://api.github.com/users/codegod2222) (Complete response) |
| publisher attributed historical account to dprk it worker activity | {"publisher": "Microsoft Threat Intelligence", "platform": "GitHub", "handle": "codegod2222", "attribution_scope": "profile used by a North Korean IT worker", "civil_identity_established": false, "same_as_joshua_desire_established": false} | high | needs corroboration | [Microsoft Threat Intelligence](https://www.microsoft.com/en-us/security/blog/2025/06/30/jasper-sleet-north-korean-remote-it-workers-evolving-tactics-to-infiltrate-organizations) (Figure 3 alternative text) |
| source displayed historical profile title | {"platform": "GitHub", "handle": "codegod2222", "claimed_title": "Full Stack Mobile & Web Expert", "verified_employment": false} | high | needs corroboration | [Microsoft Threat Intelligence](https://www.microsoft.com/en-us/security/blog/2025/06/30/jasper-sleet-north-korean-remote-it-workers-evolving-tactics-to-infiltrate-organizations) (Figure 3 bounded non-contact visual transcription) |
| source displayed historical experience claim | {"platform": "GitHub", "handle": "codegod2222", "claimed_experience": "13+ Years Experience in Software Development", "verified_experience": false} | high | needs corroboration | [Microsoft Threat Intelligence](https://www.microsoft.com/en-us/security/blog/2025/06/30/jasper-sleet-north-korean-remote-it-workers-evolving-tactics-to-infiltrate-organizations) (Figure 3 bounded non-contact visual transcription) |
| current exact handle searches returned no results | {"platform": "GitHub", "handle": "codegod2222", "user_results": 0, "author_commit_results": 0, "repository_results": 0, "historical_absence_established": false, "renaming_or_deletion_cause_established": false} | high | needs corroboration | [GitHub](https://api.github.com/search/users?per_page=10&q=codegod2222) (Three complete query counts) |

<details><summary>Exact quotes</summary>

- **publisher reported historical github account** — “Screenshot of a GitHub profile from a North Korean IT worker using the username codegod2222” — Microsoft Threat Intelligence, Figure 3 alternative text and caption
- **publisher reported historical github account** — “"message": "Not Found"” — GitHub, Complete response
- **publisher attributed historical account to dprk it worker activity** — “GitHub profile from a North Korean IT worker using the username codegod2222” — Microsoft Threat Intelligence, Figure 3 alternative text
- **source displayed historical profile title** — “Full Stack Mobile & Web Expert” — Microsoft Threat Intelligence, Figure 3 bounded non-contact visual transcription
- **source displayed historical experience claim** — “13+ Years Experience in Software Development” — Microsoft Threat Intelligence, Figure 3 bounded non-contact visual transcription
- **current exact handle searches returned no results** — “"total_count": 0” — GitHub, Three complete query counts

</details>

## Source-backed context

- third-party-handle-mention: account: codegod2222; repository: ffmpegwasm/ffmpeg.wasm; observed_at: 2024-09-14; account_authorship_or_contribution_established: False
- historical-account-status: account: codegod2222; status_at_cutoff: not found; removal_cause_or_date_established: False
- source-displayed-profile-claims: platform: GitHub; account: codegod2222; profile_title: Full Stack Mobile & Web Expert; experience_claim: 13+ Years Experience in Software Development; verified_employment_or_experience: False
- archive-availability-check: account: codegod2222; returned_cdx_rows: 0; historical_absence_established: False

## Sources

- GitHub, [Current exact-handle user, author-commit, and repository searches for codegod2222](https://api.github.com/search/users?per_page=10&q=codegod2222) — Three complete zero-result aggregate searches. Exact current user, author-commit, and repository searches returned zero results; those bounded results do not establish historical absence
- GitHub, [Current exact user endpoint status for codegod2222](https://api.github.com/users/codegod2222) — Complete Not Found response. The exact public user endpoint returned Not Found at the cutoff; cause, timing, renaming, and present controller are not established
- GitHub, [Surviving third-party mention of codegod2222 in ffmpeg.wasm issue 688](https://github.com/ffmpegwasm/ffmpeg.wasm/issues/688), 2024-09-14 — avi12 comment created 2024-09-14T06:13:07Z. A surviving third-party 2024 GitHub comment mentions [@]codegod2222; it does not establish account authorship, control, or code contribution
- Internet Archive, [Public CDX checks for the exact GitHub account and repository paths](https://web.archive.org/cdx/search/cdx?output=json&url=github.com%2Fcodegod2222) — Two complete zero-row CDX responses. Public CDX checks returned no account or repository rows; the empty result does not prove no historical capture or content existed
- Microsoft Threat Intelligence, [Jasper Sleet: North Korean remote IT workers’ evolving tactics to infiltrate organizations](https://www.microsoft.com/en-us/security/blog/2025/06/30/jasper-sleet-north-korean-remote-it-workers-evolving-tactics-to-infiltrate-organizations), 2025-06-30 — Crafting fake personas and profiles, Figure 2; Establishing digital footprint, Figure 3. Microsoft Figure 3 reports GitHub handle codegod2222 as a profile used by a North Korean IT worker, displays bounded role/experience claims, and says the profile had been taken down; Figure 2 separately depicts Joshua Desire

*Data file: [`data/entities/persona/persona-codegod2222.json`](../../../data/entities/persona/persona-codegod2222.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
