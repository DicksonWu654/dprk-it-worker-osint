# Scope and ethics

This dataset exists so that hiring teams, incident responders, researchers and reporters can recognise a known persona or facilitator and find the public document that names them. It is a compilation of what governments, courts, the UN, security vendors and journalists have already published, with the citation attached to every statement. Every record starts from a published document.

The dataset was compiled by AI agents from public documents. Every claim quotes and links its source, and the quotes were re-checked against the originals, but it will contain mistakes. Check the source before relying on a record, and see [CORRECTIONS.md](CORRECTIONS.md) to report an error.

## What goes in

- People, personas, companies, infrastructure and techniques that a **public document** connects to the DPRK IT-worker scheme or to Lazarus-linked revenue generation.
- Every statement with a **source, a locator and, for claims, an exact quote**. The dataset says only what its sources say.
- The **legal posture the sources actually establish**, stated exactly. Convicted, sanctioned, charged, officially attributed, reported by an affected organization, attributed by a researcher, or a lead. Each keeps its own meaning.
- **Historical** account handles, employer names, locations and images as the source reported them, marked as historical.

## What stays out

- Phone numbers, street addresses, national identity numbers, payment-card or bank details.
- Identity-document images (passports, licences, tax forms). A written statement that the source showed one is enough.
- Present whereabouts. Locations are report context, dated to the source.
- Victim details: the people whose identities were stolen, the employees who were deceived.
- Anything from a private account, a login, a paywall bypass, active scanning, malware execution, or contact with a subject.
- Facial recognition or any identity inference from appearance. Identity comes from sources alone.
- The workers' families, and anything about a worker beyond what the scheme documents establish. Individual DPRK IT workers act under state direction and surrender most of their pay. They appear here as subjects of reporting.

## How records are separated

A **persona** is a name an employer or platform saw. A **worker** is a person a government or court has named. A **facilitator** is someone outside the DPRK who provided identities, laptops, bank accounts or companies. A **front company** is an entity a government has named. A **cluster** is an incident or a group of related observations that a publisher described without naming individuals.

Records are linked only where a source links them. A shared name, handle, photograph, IP address or wallet is recorded as a lead. Every record carries an `identity_boundary` that says what it is and what stays separate from it.

## Confidence and status

`confidence` is about the sourcing: `confirmed` (primary official document), `high` (multiple independent publishers or one authoritative publisher with detail), `medium` (single publisher or indirect), `lead` (unverified).

`status` is the editorial call: `published`, or `needs_corroboration` when a record rests on a single source family or has an open identity question. Flagged records stay visible so the gap can be closed.

## Corrections and removal

Anyone, and first of all anyone named here, can ask for a correction or a review. See [CORRECTIONS.md](CORRECTIONS.md). A correction that shows a source was misread is made and logged. A named person's request for review is handled before anything else and privately where asked.

## Licence and reuse

Data is released under CC BY 4.0, code under MIT. Wherever you can, cite the underlying document directly; the dataset gives you everything needed to do so.
