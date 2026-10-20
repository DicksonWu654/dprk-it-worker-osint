# Milan Zubic / resplegend

`persona-milan-zubic-resplegend` · Employment persona · Attributed by security researchers or press · confidence medium · **needs corroboration**

> An accessible downstream summary of an archived meowmfer investigation attributes the account cluster to DPRK IT-worker activity. GitHub independently verifies the narrower public author/account mappings and Verida contribution count; DPRK attribution, civil identity, criminal allegation, sanctions designation, employment relationship, and malicious code change are outside GitHub's finding.

**Identity boundary.** Milan Zubic is a public Git author/persona label that GitHub maps to the resplegend account. A downstream research summary places resplegend and Milan Zubic in a related cluster with icetrust0212, while GitHub maps those labels to two distinct account IDs. The record covers two platform accounts; person-level identity and current control require separate evidence.

| | |
|---|---|
| Aliases | Milan Zubic, resplegend, trust0212-fantohm, trust0212-phantohm, trust0212, icetrust0212, Milan Zubic, icetrust0212, icebera, Patrick Kishi |
| Accounts | GitHub `icetrust0212` (historical); GitHub `resplegend` (historical); email `zaza[dot]liveedu[at]gmail[dot]com` (historical); GitHub `icebera` (historical) |
| Organizations | Unknown Company |
| TTPs | multiple related public developer accounts, rotating public developer author labels |
| lazarus.group profiles | milan-zubic |
| Last verified | 2026-10-18 |

## Caveats

- GitHub commit attribution supports account/author-label association on the platform; related accounts still require separate evidence to establish one natural person.
- GitHub maps Milan Zubic commits to resplegend and trust0212/fantohm author labels to icetrust0212; the mapping shows two platform accounts, with person-level identity requiring further evidence.
- Milan Zubic is a public Git author/persona label that GitHub maps to the resplegend account. A downstream research summary places resplegend and Milan Zubic in a related cluster with icetrust0212, while GitHub maps those labels to two distinct account IDs. The record covers two platform accounts; person-level identity and current control require separate evidence.
- Public commit emails, Telegram identifiers, phone numbers, VPN/IP indicators, application contacts, wallet addresses, portraits, and present-location signals are excluded.
- The current icebera account has a different GitHub numeric ID from icetrust0212; the Lazarus.group snapshot supports separate account records.
- The exact trust0212 user endpoint returned Not Found. Platform attribution of historical trust0212 commits to icetrust0212 is stronger than string similarity; the endpoint reason and the FireTail applicant-to-commit-author linkage remain unresolved.
- The original archive endpoint was access-challenged during review; the DPRK-specific and cross-account attribution comes from one downstream summary of that thread.
- Lazarus Group profile is a research-attributed secondary source; legal identity and shared names, handles, photographs, and associates require separate source links before any merge.

## Claims (18)

| Claim | Value | Confidence | Status | Source |
|---|---|---|---|---|
| github attributed git author label | {"author_label": "Milan Zubic", "platform": "GitHub", "mapped_account": "resplegend", "reviewed_commit_results": 11, "verified_civil_identity": false} | high | needs corroboration | [GitHub](https://api.github.com/search/commits?per_page=100&q=author-name%3A%22Milan+Zubic%22) (All eleven items, commit.author.name and author.login); [GitHub](https://api.github.com/repos/resplegend/catalyx/commits/997db9aec9bc6c16a3fc653d0a55190339e2eebd) (commit.author.name and top-level author.login) |
| historical github account associated with author label | {"platform": "GitHub", "handle": "resplegend", "author_label": "Milan Zubic", "status": "historical", "current_controller_inferred": false} | high | needs corroboration | [GitHub](https://api.github.com/users/resplegend) (Complete public user response); [GitHub](https://api.github.com/repos/resplegend/catalyx/commits/997db9aec9bc6c16a3fc653d0a55190339e2eebd) (top-level author.login) |
| research summary reported related identity cluster | {"reported_labels": ["Milan Zubic", "resplegend", "icetrust0212", "trust0212", "trust0212-fantohm"], "underlying_source": "archived meowmfer thread", "same_natural_person_established": false, "independent_dprk_attribution_families": 1} | medium | needs corroboration | [Lazarus.day, summarizing an archived meowmfer thread](https://lazarus.day/reports/ive-traced-a-confirmed-dprk-it-worker-who-served-as-the-primary-developer-of-verida-networks-credential-verification-system-u3ueS) (Share summary paragraph) |
| github mapped author labels to related account | {"platform_account": "icetrust0212", "git_author_labels": ["trust0212", "trust0212-fantohm", "trust0212-phantohm"], "same_as_resplegend_established": false} | high | needs corroboration | [GitHub](https://api.github.com/repos/Dexify-Finance/dexify-token-contract/commits/a2ec6c7e6ff42fa331300e1f6a6154acc8cda358) (commit.author.name and top-level author.login); [GitHub](https://api.github.com/repos/resplegend/kitty-ai/commits/78e49110f3c8ac892286739be9706028426ec6a3) (commit.author.name and top-level author.login); [GitHub](https://api.github.com/repos/dawoodidrees/Kennedy24/commits/1768517dd8c757b8b1c36f3a62af2f479277a310) (commit.author.name and top-level author.login) |
| github recorded related account repository contributions | {"platform": "GitHub", "account": "icetrust0212", "repository": "verida/proof-connector-dapp", "contributions": 103, "employment_established": false, "malicious_change_established": false} | high | needs corroboration | [GitHub](https://api.github.com/repos/verida/proof-connector-dapp/contributors?anon=1&per_page=100) (icetrust0212 contributor row); [Lazarus.day, summarizing an archived meowmfer thread](https://lazarus.day/reports/ive-traced-a-confirmed-dprk-it-worker-who-served-as-the-primary-developer-of-verida-networks-credential-verification-system-u3ueS) (Share summary paragraph) |
| github account collision nonmerge | {"distinct_accounts": ["resplegend", "icetrust0212", "icebera"], "distinct_numeric_ids": true, "rename_or_same_operator_established": false} | high | needs corroboration | [GitHub](https://api.github.com/users/resplegend) (Complete public user response); [GitHub](https://api.github.com/users/icetrust0212) (Complete public user response); [GitHub](https://api.github.com/users/icebera) (Complete public user response) |
| profile-name | {"field": "name", "value": "Milan Zubic"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, profile, name) |
| basic-information-real-name | {"name": "Milan Zubic"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, Basic Information, Real Name) |
| basic-information-gender | {"gender": "male"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, Basic Information, Gender) |
| basic-information-aliases | {"name": "icetrust0212"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, Basic Information, Aliases) |
| basic-information-aliases | {"name": "icebera"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, Basic Information, Aliases) |
| basic-information-fake-names | {"name": "Patrick Kishi"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, Basic Information, Fake Names) |
| contact-information-emails | {"platform": "email", "identifier": "zaza[dot]liveedu[at]gmail[dot]com"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, Contact Information, Emails) |
| employment-history-identified | {"field": "Identified", "value": "Jan 1, 2025"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, Employment History, Identified) |
| employment-history-company | {"organization": "Unknown Company"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, Employment History, company) |
| github-github-id | {"platform": "GitHub", "identifier": "icebera"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, GitHub, GitHub ID) |
| github-usernames | {"platform": "GitHub", "identifier": "icebera"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, GitHub, Usernames) |
| salary-details-addresses | {"address": "0x35FcB352027cdDc632b7aE8a50A0410C5bf36248"} | lead | needs corroboration | [Security Alliance (Lazarus Group site)](https://www.lazarus.group/team) (lazarus.group /team/milan-zubic, Salary Details, Addresses) |

<details><summary>Exact quotes</summary>

- **github attributed git author label** — “"name":"Milan Zubic"” — GitHub, All eleven items, commit.author.name and author.login
- **github attributed git author label** — “"login":"resplegend"” — GitHub, commit.author.name and top-level author.login
- **historical github account associated with author label** — “"login":"resplegend"” — GitHub, Complete public user response
- **historical github account associated with author label** — “"login":"resplegend"” — GitHub, top-level author.login
- **research summary reported related identity cluster** — “The author links icetrust0212 to related identities including trust0212, trust0212-fantohm, resplegend, and “Milan Zubic” through commit emails, authored commits, job applications, Telegram activity, and prior Lazarus/Bluenoroff research.” — Lazarus.day, summarizing an archived meowmfer thread, Share summary paragraph
- **github mapped author labels to related account** — “"name":"trust0212"” — GitHub, commit.author.name and top-level author.login
- **github mapped author labels to related account** — “"name":"trust0212-fantohm"” — GitHub, commit.author.name and top-level author.login
- **github mapped author labels to related account** — “"name":"trust0212-phantohm"” — GitHub, commit.author.name and top-level author.login
- **github recorded related account repository contributions** — “"contributions":103” — GitHub, icetrust0212 contributor row
- **github recorded related account repository contributions** — “The developer reportedly made 103 commits to the credential-verification system” — Lazarus.day, summarizing an archived meowmfer thread, Share summary paragraph
- **github account collision nonmerge** — “"login":"resplegend"” — GitHub, Complete public user response
- **github account collision nonmerge** — “"login":"icetrust0212"” — GitHub, Complete public user response
- **github account collision nonmerge** — “"login":"icebera"” — GitHub, Complete public user response
- **profile-name** — “Milan Zubic” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, profile, name
- **basic-information-real-name** — “Milan Zubic” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, Basic Information, Real Name
- **basic-information-gender** — “male” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, Basic Information, Gender
- **basic-information-aliases** — “icetrust0212” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, Basic Information, Aliases
- **basic-information-aliases** — “icebera” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, Basic Information, Aliases
- **basic-information-fake-names** — “Patrick Kishi” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, Basic Information, Fake Names
- **contact-information-emails** — “zaza[dot]liveedu[at]gmail[dot]com” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, Contact Information, Emails
- **employment-history-identified** — “Jan 1, 2025” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, Employment History, Identified
- **employment-history-company** — “Unknown Company” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, Employment History, company
- **github-github-id** — “icebera” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, GitHub, GitHub ID
- **github-usernames** — “icebera” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, GitHub, Usernames
- **salary-details-addresses** — “0x35FcB352027cdDc632b7aE8a50A0410C5bf36248” — Security Alliance (Lazarus Group site), lazarus.group /team/milan-zubic, Salary Details, Addresses

</details>

## Source-backed context

- public-code-contribution: repository: verida/proof-connector-dapp; account: icetrust0212; contributions: 103; employment_established: False; malicious_change_established: False
- historical-account-status: account: trust0212; status_at_cutoff: not found; reason_or_date_established: False
- account-collision-boundary: distinct_github_account_ids: True; rename_or_continuity_established: False
- github-author-account-crosswalk: author_label: Milan Zubic; platform_account: resplegend; reviewed_result_count: 11; natural_person_identity_established: False
- github-author-account-crosswalk: platform_account: icetrust0212; natural_person_identity_established: False

## Sources

- GitHub, [GitHub commit mapping trust0212 author label to icetrust0212](https://api.github.com/repos/Dexify-Finance/dexify-token-contract/commits/a2ec6c7e6ff42fa331300e1f6a6154acc8cda358), 2023-02-20 — commit.author.name and top-level author.login. Representative platform-native commit maps the trust0212 Git author label to the icetrust0212 GitHub account
- GitHub, [GitHub commit mapping trust0212-phantohm author label to icetrust0212](https://api.github.com/repos/dawoodidrees/Kennedy24/commits/1768517dd8c757b8b1c36f3a62af2f479277a310), 2024-04-10 — commit.author.name and top-level author.login. Representative platform-native commit maps the trust0212-phantohm spelling variant to the icetrust0212 GitHub account
- GitHub, [GitHub commit mapping Milan Zubic author label to resplegend](https://api.github.com/repos/resplegend/catalyx/commits/997db9aec9bc6c16a3fc653d0a55190339e2eebd), 2025-12-09 — commit.author.name and top-level author.login. Representative platform-native commit maps the Milan Zubic Git author label to the resplegend GitHub account
- GitHub, [GitHub commit mapping trust0212-fantohm author label to icetrust0212](https://api.github.com/repos/resplegend/kitty-ai/commits/78e49110f3c8ac892286739be9706028426ec6a3), 2024-04-11 — commit.author.name and top-level author.login. Representative platform-native commit maps the trust0212-fantohm Git author label to the icetrust0212 GitHub account
- GitHub, [GitHub contributors: verida/proof-connector-dapp](https://api.github.com/repos/verida/proof-connector-dapp/contributors?anon=1&per_page=100) — Complete six-row public contributor response. GitHub's public contributor response records 103 contributions by icetrust0212 to verida/proof-connector-dapp; it does not establish employment or a malicious contribution
- GitHub, [GitHub public commit search: author-name Milan Zubic](https://api.github.com/search/commits?per_page=100&q=author-name%3A%22Milan+Zubic%22) — Complete eleven-result public search response. All eleven complete author-name search results use the Milan Zubic author label and map to the resplegend GitHub account
- GitHub, [GitHub public user record: icebera](https://api.github.com/users/icebera) — Complete public JSON response. The current icebera account has a GitHub numeric ID distinct from icetrust0212; it cannot be treated as a rename or continuation from the baseline association alone
- GitHub, [GitHub public user record: icetrust0212](https://api.github.com/users/icetrust0212) — Complete public JSON response. Verifies the public icetrust0212 GitHub account as a distinct platform account without establishing civil identity or present controller
- GitHub, [GitHub public user record: resplegend](https://api.github.com/users/resplegend) — Complete public JSON response. Verifies the public resplegend GitHub account as a distinct platform account without establishing civil identity or present controller
- GitHub, [GitHub public user status: trust0212](https://api.github.com/users/trust0212) — Complete public JSON response. The exact trust0212 public user endpoint returned Not Found at the cutoff; cause and date are not established
- Lazarus.day, summarizing an archived meowmfer thread, [I've traced a confirmed #DPRK IT worker who served as the primary developer of Verida Network's credential verification system](https://lazarus.day/reports/ive-traced-a-confirmed-dprk-it-worker-who-served-as-the-primary-developer-of-verida-networks-credential-verification-system-u3ueS), 2026-04-17 — Share summary paragraph. Downstream summary of the archived meowmfer thread linking Milan Zubic, resplegend, trust0212 variants, and icetrust0212 and reporting 103 Verida repository contributions; retained as review-only attribution
- Security Alliance (Lazarus Group site), [Lazarus Group team registry and profile pages](https://www.lazarus.group/team) — https://www.lazarus.group/team/milan-zubic. Lazarus Group lists Milan Zubic in its DPRK ITW registry profile and presents the profile fields captured in the external inventory; the site is a research-attributed secondary source.

*Data file: [`data/entities/persona/persona-milan-zubic-resplegend.json`](../../../data/entities/persona/persona-milan-zubic-resplegend.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
