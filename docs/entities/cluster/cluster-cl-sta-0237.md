# CL-STA-0237

`cluster-cl-sta-0237` · Cluster or incident · Attributed by security researchers or press · confidence high · **needs corroboration**

> Unit 42 temporary cluster explicitly linking fake-worker and BeaverTail phishing activity

| | |
|---|---|
| Accounts | Email `312011217@qq[.]com` (historical); Email `adonis_eros@outlook[.]com` (historical); Email `alhinglovena3000@gmail[.]com` (historical); Email `brightstar1116@outlook[.]com` (historical); Email `buyerlao@outlook[.]com` (historical); Email `casey_qadir@outlook[.]com` (historical); Email `cescernand@outlook[.]com` (historical); Email `devstar1116@gmail[.]com` (historical); Email `ebcappservices@gmail[.]com` (historical); Email `hakajakin@outlook[.]com` (historical); Email `ideationbrand@gmail[.]com` (historical); Email `jumphon2103@gmail[.]com` (historical); Email `legend_dev@outlook[.]com` (historical); Email `liko.sonexarth@gmail[.]com` (historical); Email `liko.sonexarth@hotmail[.]com` (historical); Email `lisettekolson8@gmail[.]com` (historical); Email `longines0924@gmail[.]com` (historical); Email `lujindane@outlook[.]com` (historical); Email `matthewhall14541@gmail[.]com` (historical); Email `mobilephetjum@gmail[.]com` (historical); Email `niko.sonexarth@gmail[.]com` (historical); Email `niko.sonexarth@hotmail[.]com` (historical); Email `oscar.vetres127@europe[.]com` (historical); Email `oscar.vetres127@gmail[.]com` (historical); Email `phetchamphone1998@gmail[.]com` (historical); Email `pinefirst@outlook[.]com` (historical); Email `reply9998@gmail[.]com` (historical); Email `richard.stewart.1202@gmail[.]com` (historical); Email `richard.stewart.1202@outlook[.]com` (historical); Email `sniper_bruce@outlook[.]com` (historical); Email `stp.walsh33@gmail[.]com` (historical); Email `techcare127@gmail[.]com` (historical); Email `truepai415@gmail[.]com` (historical); Email `truestar222@outlook[.]com` (historical); Email `volodimir.work2020@gmail[.]com` (historical); Email `zhangming_k@yahoo[.]com` (historical); Email `zhuming1116@gmail[.]com` (historical) |
| TTPs | BeaverTail video-conference phishing, fraudulent remote-employment activity, shared email and network infrastructure |
| Last verified | 2026-08-11 |

## Caveats

- The cluster spans both fake-worker and malware-delivery activity; IOC-to-persona attribution requires source support.
- These are historical cluster indicators; current account or domain-holder status is unreported.

## Source-backed context

- domain: value: effertz-carroll.com; relationship: related-cluster
- domain: value: freeconference.io; relationship: related-cluster
- domain: value: ftpserver0909.com; relationship: related-cluster
- domain: value: ipcheck.cloud; relationship: related-cluster
- domain: value: mirotalk.io; relationship: related-cluster
- domain: value: mirotalk.net; relationship: related-cluster
- domain: value: regioncheck.net; relationship: related-cluster
- ip: value: 167.88.36.13; relationship: related-cluster

## Sources

- Palo Alto Networks Unit 42, [Fake North Korean IT Worker Linked to BeaverTail Video Conference App Phishing Attack](https://unit42.paloaltonetworks.com/fake-north-korean-it-worker-activity-cluster), 2024-11-14 — Executive Summary; Fake resumes Figures 1-2; Attribution; Indicators of Compromise. Tracks CL-STA-0237, likely Laos-based, and explicitly links its fake-worker activity to BeaverTail video-conference phishing while retaining attribution uncertainty. Publishes 38 email indicators, six domains, and one IP

*Data file: [`data/entities/cluster/cluster-cl-sta-0237.json`](../../../data/entities/cluster/cluster-cl-sta-0237.json). Found a problem? See [CORRECTIONS.md](../../../CORRECTIONS.md).*
