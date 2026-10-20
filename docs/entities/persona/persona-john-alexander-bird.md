# John Alexander Bird

`persona-john-alexander-bird` · Employment persona · Attributed by security researchers or press · confidence high

> Nisos-reported persona presentation only; civil identity, employer, residence, nationality, legal finding, and current status remain unverified.

**Identity boundary.** Nisos-reported developer persona historically linked to GitHub account imcode65. GitHub repository history maps six jab-p commits and the author labels kanbei0605, kanbei, and code0605 to the distinct kanbei65 account and records a portfolio-link chain from kanbei0605 to code-0605 to imcode65. These are platform and repository relationships; civil identity, one-person status, account-transfer mechanism, and present controller each require separate evidence. The current exact kanbei0605 account has a separate numeric GitHub ID.

| | |
|---|---|
| Accounts | GitHub `imcode65` (removed) |
| Locations (historical, per source) | Maryland |
| TTPs | BootstrapMade template imported for persona portfolio |
| Last verified | 2026-08-30 |

## Caveats

- The record is limited to source-bounded context; precise address, contact selector, image, current location, civil identity, and present controller require separate evidence.
- Role and location are source-reported persona claims; employment or residence remains unverified.
- This record describes a reported employment persona/account cluster; the apparent identity owner's nationality remains source-unresolved.

## Claims (12)

| Claim | Value | Confidence | Status | Source |
|---|---|---|---|---|
| publisher reported portfolio template creation | {"historical_github_account": "imcode65", "persona_name": "John Alexander Bird", "artifact": "portfolio website", "template_source": "bootstrapmade.com", "reported_date": "2023-11-30"} | high | published | [Nisos](https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/Assessment-of-DPRK-IT-Worker-Tradecraft.pdf) (PDF p. 6, Bootstrapmade paragraph) |
| current public account endpoint status | {"platform": "GitHub", "historical_handle": "imcode65", "status": "HTTP 404 Not Found"} | high | needs corroboration | [GitHub](https://api.github.com/users/imcode65) (JSON field message); [GitHub](https://api.github.com/users/imcode65) (JSON field status) |
| current public historical repository endpoint redirect | {"historical_endpoint": "imcode65/jab-p", "http_status": 301, "current_repository_name": "kanbei65/jab-p", "repository_id": 725469101} | high | published | [GitHub](https://api.github.com/repositories/725469101) (JSON field id); [GitHub](https://api.github.com/repositories/725469101) (JSON field full_name) |
| current public commit preserves bootstrapmade template metadata | {"repository": "kanbei65/jab-p", "historical_commit": "99ef14829b03685f67862a53164393eaaaef23f3", "template_name": "Personal - v4.7.0", "template_publisher": "BootstrapMade.com"} | high | published | [GitHub](https://api.github.com/repos/kanbei65/jab-p/commits/99ef14829b03685f67862a53164393eaaaef23f3) (JSON field sha); [GitHub](https://api.github.com/repos/kanbei65/jab-p/commits/99ef14829b03685f67862a53164393eaaaef23f3) (assets/css/style.css patch header); [GitHub](https://api.github.com/repos/kanbei65/jab-p/commits/99ef14829b03685f67862a53164393eaaaef23f3) (assets/css/style.css patch header) |
| publisher report persona page link only media reference | {"publisher": "Nisos", "source_page": "PDF file p. 6 (printed p. 6)", "subject_label": "John Alexander Bird", "source_qualifier": "likely DPRK persona", "media_type": "publisher report page", "handling": "link_and_narrative_only", "person_bearing_source_media": true, "direct_asset_retained": false, "image_extracted": false, "image_compared": false, "appearance_inference": false, "civil_identity_inferred": false, "current_control_inferred": false} | high | published | [Nisos](https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/Assessment-of-DPRK-IT-Worker-Tradecraft.pdf) (PDF file p. 6 (printed p. 6), visually reviewed Graphic 8 caption and adjacent Bootstrapmade paragraph) |
| nisos reported persona claimed developer roles | {"claimed_roles": ["senior front-end engineer", "full-stack developer"], "employment_established": false} | high | published | [Nisos](https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/dprk-it-worker-scam-mitigation.pdf) (PDF file p. 11, John Alexander Bird, first sentence) |
| nisos reported persona claimed coarse location | {"claimed_location": "Maryland", "precision": "state", "present_location_inferred": false} | high | published | [Nisos](https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/dprk-it-worker-scam-mitigation.pdf) (PDF file p. 11, John Alexander Bird, first sentence) |
| nisos assessed no active personal website at publication | {"active_personal_website_observed": false, "publisher_assessment": "likely not actively seeking employment yet", "current_status_inferred": false} | high | published | [Nisos](https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/dprk-it-worker-scam-mitigation.pdf) (PDF file p. 3, Executive Summary, final two sentences) |
| github mapped repository author labels to account | {"repository": "kanbei65/jab-p", "reviewed_commits": 6, "git_author_labels": ["kanbei0605", "kanbei", "code0605"], "mapped_account": "kanbei65", "mapped_account_id": 91700749, "civil_identity_established": false, "present_controller_established": false} | high | needs corroboration | [GitHub](https://api.github.com/repos/kanbei65/jab-p/commits?per_page=100) (JSON commit-list author.login fields (six rows)) |
| repository recorded portfolio github link transitions | {"repository": "kanbei65/jab-p", "historical_github_link_chain": ["kanbei0605", "code-0605", "imcode65"], "transition_dates": ["2024-03-11", "2024-04-19"], "same_natural_person_established": false, "account_transfer_or_rename_mechanism_established": false} | high | needs corroboration | [GitHub](https://api.github.com/repos/kanbei65/jab-p/commits/cf3908ce606e58e5eea9e7d9e81baedeb61cb11d) (github_url_changes); [GitHub](https://api.github.com/repos/kanbei65/jab-p/commits/c5b028516e1adcd20a3d7219c082368c6b680723) (github_url_changes) |
| github exact handle collision nonmerge | {"author_label_or_historical_link": "kanbei0605", "current_exact_handle_account_id": 116683582, "mapped_repository_account": "kanbei65", "mapped_repository_account_id": 91700749, "distinct_numeric_ids": true, "same_account_or_operator_established": false} | high | needs corroboration | [GitHub](https://api.github.com/users/kanbei65) (login and id); [GitHub](https://api.github.com/users/kanbei0605) (login and id) |
| github recorded repository contribution count | {"repository": "kanbei65/jab-p", "account": "kanbei65", "account_id": 91700749, "contributions": 6, "employment_established": false, "malicious_activity_established": false, "john_bird_same_person_established": false} | high | needs corroboration | [GitHub](https://api.github.com/repos/kanbei65/jab-p/contributors?per_page=100&anon=1) (Only returned contributor row) |

<details><summary>Exact quotes</summary>

- **publisher reported portfolio template creation** — “Nisos observed that likely DPRK-afﬁliated GitHub account imcode65 created a portfolio website for a persona named John Alexander Bird importing a template from website bootstrapmade[.]com on 30 November 2023.” — Nisos, PDF p. 6, Bootstrapmade paragraph
- **current public account endpoint status** — “"message": "Not Found"” — GitHub, JSON field message
- **current public account endpoint status** — “"status": "404"” — GitHub, JSON field status
- **current public historical repository endpoint redirect** — “"id": 725469101” — GitHub, JSON field id
- **current public historical repository endpoint redirect** — “"full_name": "kanbei65/jab-p"” — GitHub, JSON field full_name
- **current public commit preserves bootstrapmade template metadata** — “"sha": "99ef14829b03685f67862a53164393eaaaef23f3"” — GitHub, JSON field sha
- **current public commit preserves bootstrapmade template metadata** — “Template Name: Personal - v4.7.0” — GitHub, assets/css/style.css patch header
- **current public commit preserves bootstrapmade template metadata** — “Author: BootstrapMade.com” — GitHub, assets/css/style.css patch header
- **publisher report persona page link only media reference** — “Graphic 8: Photo of likely DPRK persona John Alexander Bird.” — Nisos, PDF file p. 6 (printed p. 6), visually reviewed Graphic 8 caption and adjacent Bootstrapmade paragraph
- **nisos reported persona claimed developer roles** — “John Alexander Bird claims to be a senior front-end engineer and full-stack developer based in Maryland.” — Nisos, PDF file p. 11, John Alexander Bird, first sentence
- **nisos reported persona claimed coarse location** — “John Alexander Bird claims to be a senior front-end engineer and full-stack developer based in Maryland.” — Nisos, PDF file p. 11, John Alexander Bird, first sentence
- **nisos assessed no active personal website at publication** — “This persona does not have an active personal website, suggesting that it is likely not actively seeking employment as part of the employment scheme yet.” — Nisos, PDF file p. 3, Executive Summary, final two sentences
- **github mapped repository author labels to account** — “"login": "kanbei65"” — GitHub, JSON commit-list author.login fields (six rows)
- **repository recorded portfolio github link transitions** — “"https://github.com/code-0605"” — GitHub, github_url_changes
- **repository recorded portfolio github link transitions** — “"https://github.com/imcode65"” — GitHub, github_url_changes
- **github exact handle collision nonmerge** — “"id": 91700749” — GitHub, login and id
- **github exact handle collision nonmerge** — “"id": 116683582” — GitHub, login and id
- **github recorded repository contribution count** — “"contributions": 6” — GitHub, Only returned contributor row

</details>

## Source-backed context

- source-reported-persona-claim-fragment: claimed_role: senior front-end engineer and full-stack developer; claimed_location: Maryland; employment_established: False; present_location_inferred: False; civil_identity_established: False

## Sources

- Nisos, [Assessment of DPRK IT Worker Tradecraft Between 2022 and 2025](https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/Assessment-of-DPRK-IT-Worker-Tradecraft.pdf), 2025-04-29 — Templates For Websites and Graphics 8-10, report p. 6. GitHub account imcode65 created a portfolio website for persona “John Alexander Bird.”
- Nisos, [How To Proactively Mitigate The DPRK IT Worker Employment Scam](https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/dprk-it-worker-scam-mitigation.pdf), 2025-03-27 — PDF file p. 11, John Alexander Bird, first sentence \| PDF file p. 11, John Alexander Bird, first sentence \| PDF file p. 3, Executive Summary, final two sentences. John Alexander Bird claims to be a senior front-end engineer and full-stack developer based in Maryland. \| John Alexander Bird claims to be a senior front-end engineer and full-stack developer based in Maryland. \| This persona does not have an active personal website, suggesting that it is likely not actively seeking employment as part of the employment scheme yet
- GitHub, [GitHub user endpoint status: imcode65](https://api.github.com/users/imcode65)
- GitHub, [GitHub repository redirect: historical endpoint imcode65/jab-p](https://api.github.com/repos/imcode65/jab-p)
- GitHub, [GitHub repository status: repository ID 725469101](https://api.github.com/repositories/725469101)
- GitHub, [GitHub commit status: jab-p 99ef148](https://api.github.com/repos/kanbei65/jab-p/commits/99ef14829b03685f67862a53164393eaaaef23f3), 2023-11-30
- GitHub, [Complete public commit list for kanbei65/jab-p](https://api.github.com/repos/kanbei65/jab-p/commits?per_page=100), 2024-04-19
- GitHub, [jab-p commit changing the portfolio GitHub link from kanbei0605 to code-0605](https://api.github.com/repos/kanbei65/jab-p/commits/cf3908ce606e58e5eea9e7d9e81baedeb61cb11d), 2024-03-11
- GitHub, [jab-p commit changing the portfolio GitHub link from code-0605 to imcode65](https://api.github.com/repos/kanbei65/jab-p/commits/c5b028516e1adcd20a3d7219c082368c6b680723), 2024-04-19
- GitHub, [Current public GitHub user metadata for kanbei65](https://api.github.com/users/kanbei65)
- GitHub, [Current public GitHub user metadata for kanbei0605](https://api.github.com/users/kanbei0605)
- GitHub, [Complete public contributor response for kanbei65/jab-p](https://api.github.com/repos/kanbei65/jab-p/contributors?per_page=100&anon=1)

*Data file: [`data/entities/persona/persona-john-alexander-bird.json`](../../../data/entities/persona/persona-john-alexander-bird.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
