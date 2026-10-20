# Transaction-time review of remittances for DPRK IT-worker risk

`dpr13-ttp-bank-transaction-time-remittance-review` · Tactic, technique or procedure · Reported by an affected organization · confidence high

> First-party provider descriptions of controls adopted in response to government warnings; they document provider controls rather than observed DPRK case evidence, an enforcement action, or an adjudication.

| | |
|---|---|
| TTPs | documented-remittance-escalation, payment-to-hiring-control-continuity, proportionate-transaction-decision, risk-based-transaction-context-review |
| lazarus.group profiles | ttp-ttp-payment-routing |
| Last verified | 2026-08-12 |

## Caveats

- A request for information or supporting documentation is a routine review step; suspicion requires additional case-specific evidence.
- Kosan Shinkin Bank and Toyota Shinkin Bank provide supporting implementation evidence; their source dates are known only to month precision and are normalized to 2025-09-01 with that limitation stated in source support.
- The sources describe possible inquiries, review, and refusal. Customer, beneficiary, account, payment, suspicious-activity report, frozen asset, declined remittance, and enforcement outcome require separate disclosures.
- These notices implement or reference Japanese government warnings; they provide policy context, with observed DPRK case evidence outside this record.
- These provider statements document control design; product efficacy and DPRK detection require independent validation.
- Risk-based, documented human review with independent corroboration; automatic blocking follows documented evidence rather than nationality, geography, occupation, remote work, or online-platform use.

## Source-backed context

- Several Japanese deposit-taking institutions state that, when a remittance or similar request raises a possible DPRK IT-worker connection, they may review the transaction context, ask relevant platform operators or commissioning businesses about implementation of government-requested countermeasures, and in some policies decline the transaction after review. This is a provider-stated implementation layer at payment execution, not evidence that any institution observed or stopped a DPRK-linked payment.

## Sources

- Higo Bank, [「北朝鮮IT労働者に関する企業等に対する注意喚起」に係る対応強化について [researcher translation: Strengthened response concerning the advisory for companies on North Korean IT workers]](https://www.higobank.co.jp/article/info/attention/detail/003979.html), 2025-03-03 — Opening paragraph and paragraph beginning with the notice to customers that provide or use online IT-service platforms. Higo Bank says it had been checking for relevant transactions when accepting foreign remittances and announced stronger handling after the January 14, 2025 trilateral statement on DPRK cryptocurrency theft and public-private cooperation. For foreign-remittance requests from customers that operate online IT-service contracting platforms or commission work through them, the bank says it may ask individually about the transaction and the customer's implementation of countermeasures requested in the government advisory. Evidence boundary: This is a bank-announced review policy. The notice does not identify a customer, counterparty, beneficiary, account, remittance, refusal, suspicious-activity report, or enforcement outcome
- Japan Post Bank, [「北朝鮮IT労働者に関する企業等に対する注意喚起」（更新版）について [researcher translation: Regarding the updated advisory for companies on North Korean IT workers]](https://www.jp-bank.japanpost.jp/news/2025/news_id002303.html), 2025-09-10 — Dated notice, second paragraph. Japan Post Bank says that when a customer requests an international remittance or similar transaction to a company suspected of a DPRK IT-worker connection, the bank may ask the company individually whether it is implementing the countermeasures requested by Japanese authorities, depending on the transaction's content and circumstances. Evidence boundary: The bank describes a possible inquiry workflow. It does not disclose that it observed, processed, suspended, reported, or rejected a DPRK-linked transaction
- Kosan Shinkin Bank, [「北朝鮮IT労働者に関する企業等に対する注意喚起」について [researcher translation: Regarding the advisory for companies on North Korean IT workers]](https://www.shinkin.co.jp/kosan/common/docs/corporate/service/exchange/g.pdf), 2025-09-01 — PDF page 1, final substantive paragraph. Date precision: month only (2025-09); the first day is a normalization placeholder, not a claimed exact publication day. The institution says that when a customer is a platform operator or commissioning company covered by the government advisory, it may check whether the requested countermeasures are being followed during transactions. Evidence boundary: Supporting evidence of sector implementation; no transaction or customer case disclosed
- Toyota Shinkin Bank, [「北朝鮮IT労働者に関する企業等に対する注意喚起」の内容更新のお知らせ [researcher translation: Notice of updated content in the advisory for companies on North Korean IT workers]](https://www.shinkin.co.jp/toyota/important/documents/20250911.pdf), 2025-09-01 — PDF page 1, paragraph concerning remittance requests. Date precision: month only (2025-09); the first day is a normalization placeholder, not a claimed exact publication day. The institution says it may confirm transaction details and the customer's implementation of government-requested measures when a remittance request raises a suspected DPRK IT-worker connection. Evidence boundary: Supporting policy statement; no observed transaction, customer, or refusal disclosed
- Sumitomo Mitsui Trust Bank, [「北朝鮮IT労働者に関する企業等に対する注意喚起」（更新版）について [researcher translation: Regarding the updated advisory for companies on North Korean IT workers]](https://www.smtb.jp/-/media/tb/personal/news/2025/pdf/20250918.pdf), 2025-09-18 — PDF page 1, lines 7-9 in extracted text. Sumitomo Mitsui Trust Bank says it will carefully confirm details when it receives a remittance or similar request suspected of a DPRK IT-worker connection and may decline to handle the transaction. Evidence boundary: The notice establishes a possible control outcome, not an observed refusal or a finding against any customer or beneficiary

*Data file: [`data/entities/ttp/dpr13-ttp-bank-transaction-time-remittance-review.json`](../../../data/entities/ttp/dpr13-ttp-bank-transaction-time-remittance-review.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
