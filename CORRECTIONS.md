# Corrections

Anything in this dataset can be wrong: a source misread, a posture overstated, two people merged into one, a case that has since been resolved. Corrections are part of the work.

This dataset was compiled by AI agents from public documents. Every claim quotes and links its source, and the quotes were re-checked against the originals, but it will contain mistakes. If a record and its source disagree, please report it using the steps below.

## How to ask

- Open a [correction issue](https://github.com/DicksonWu654/dprk-it-worker-osint/issues/new?template=correction.yml). Give the entity id, what is wrong, and the source that shows it.
- Or open a pull request that changes the data file and explains the change.
- If the matter is sensitive, open the issue with only the entity id and the words "private review requested"; a maintainer will reply with a private channel.

## If you are named here

Say so in the issue or email. Your request is handled before anything else. While it is being reviewed, the record is marked `needs_corroboration` and, if you ask, the review is kept private. Your word that the record is wrong is enough to start a review. The record has to match its cited source; where it goes further, it changes.

## What happens

1. The maintainer checks the cited source against the record.
2. If the record says more than the source, the record is corrected or the claim removed, and the change is noted in the commit message with a link to the issue.
3. If a record described a charge, designation or case that has since changed, the posture and dates are updated and the earlier state is kept in the git history.
4. If two people were merged, the record is split and each half gets its own `identity_boundary`.
5. The issue is closed with a link to the commit.

Every correction stays visible in the git history. `git log -- data/entities/<type>/<id>.json` shows every change to a record.

## Withdrawn records

A record that turns out to have no supportable basis is deleted outright. Its id stays retired, and the commit message says why it was removed.
