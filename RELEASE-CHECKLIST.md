# Release checklist

Complete this checklist for each release. The viewer publishes the compiled dataset as a single file, so review the generated output as well as the source records.

## Data and privacy

- [ ] Review `data/`, `docs/`, `build/` and any local source copies for excluded data under [SCOPE-AND-ETHICS.md](SCOPE-AND-ETHICS.md).
- [ ] Retain historical account indicators only when needed for a documented research purpose. Defang retained contact selectors and remove unrelated contacts. Keep wallet indicators only where an official designation or seizure supports their inclusion; generalize private-network addresses.
- [ ] Inspect any bundled documents page by page for victim details, identity documents, contact selectors and financial information. Prefer a link to the official document when redistribution is unnecessary.
- [ ] Run `make validate` after redactions. Resolve every sensitive-data finding; each exception must identify the exact field, value and reason.

## Citations and legal posture

- [ ] Check claim sources, locators and exact quotations. Use shorter verbatim excerpts when omitting sensitive values. Remove unsupported citations and claims left without support.
- [ ] Recheck charges, designations, case outcomes and scheduled dates against current primary sources. Preserve identity boundaries and state unresolved questions.
- [ ] Archive mutable sources where possible or label them as snapshots with an access date. Record access and extraction limits without implying verification.
- [ ] Confirm redistribution terms for local copies and quoted excerpts. The compilation licence does not grant rights to other publishers' material.

## Build and publication

- [ ] Run `make validate`, `make build` and `git diff --check`. Commit regenerated `docs/` and `build/`, including viewer assets and font licences.
- [ ] Serve `build/` alone and check the overview, search and a record in a browser. Confirm data and fonts load, source links work, and there are no console errors. Also check `make serve` at `/viewer/`.
- [ ] Check release files and Git history for secrets, personal maintainer details and internal notes. Exclude local configuration, logs, screenshots, caches and temporary captures from commits.
- [ ] Update README counts from `build/stats.json` and add a public changelog entry.
- [ ] Review the hosting settings, the release branch and any custom domain. Replace repository and viewer URL placeholders when preparing a deployment. Confirm the deployment serves only `build/`.

Record the review date, reviewer, commit and accepted exceptions in the release issue or pull request. Each exception must identify the affected material and explain why it is retained.
