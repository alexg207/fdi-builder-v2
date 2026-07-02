# Lantern FDI, Build Notes

Build date: 2026-06-24 · Slug: `lantern-auto` · Builder: Claude Code (FDI skill)

## What this is
Intelligence dashboard for Lantern (AI safety glasses automating auto-dealership service inspection, MPI video, advisor review, and quoting). 10 cold-target dealer groups scored on 4 signal axes, plus a 3-account Active Pipeline tab of Lantern's design partners. For founder outbound + internal Primary GTM use.

## Sources used
- **Lantern canonical:** investment memo only (`inputs/lantern-memo.md`). No deck, no founder transcripts.
- **Industry context (NOT Lantern):** Plasma investment memo + 3 Tegus diligence calls (LA Car Guy, Earnhardt, McGovern) + Koons summary (`inputs/context/`). Plasma is a **direct competitor** (same product + ICP, parallel Primary look); used only for ICP definition, signal taxonomy, buyer-voice, and competitive map. Quarantined from all Lantern product claims.

## Structural decisions
- **Segments:** Active Pipeline (3 design partners) / Mid-Market (Stage-1 wedge, 4 groups) / Enterprise (Stage-2 stretch, 6 groups).
- **SECTION_2_LABEL:** "Service Footprint" (Use Cases, Current Stack, Pain Points, Estimated Spend).
- **Profile rows (vertical-adapted):** Industry, Rooftops, Employees, DMS Provider, Digital Maturity (replaces the inference-vertical Revenue/Cloud/AI-Maturity rows; rooftops is the verifiable scale metric since most groups are private).
- **4 axes** (mapped onto template fields):
  | Axis (UI label) | Template field | Weight | Driver |
  |---|---|---|---|
  | Warranty Burden | competitive_distress | 35% | franchised brand mix → warranty + documentation intensity (the WOW signal) |
  | Opportunity | signal_score | 25% | rooftop count + service footprint + momentum |
  | Tooling Gap | data_residency | 25% | current MPI/video tool maturity + displacement |
  | Service Hiring | JOB_LISTINGS → computeJobSignal | 15% | open service/fixed-ops roles (HIRING_KEYWORD_REGEX) |
- **Tiers are RELATIVE** within an all-qualified set (every company cleared 5/5 Webset criteria). Spread: 7 high / 4 med / 2 low (satisfies G1 ≤7-high/≥1-low). No axis flatline (G2, all ≤50% identical).
- **Brand accent:** recolored the template's green to a warm amber "lantern glow."

## The WOW signal (why brand mix is the primary axis)
A group's franchised brand mix predicts both pains Lantern fixes: documentation burden (Korean/luxury require part-level photo/serial capture) and warranty-dollar leakage (5-7% of claims short-paid; warranty is 30-70% of service revenue). Brand mix is also externally verifiable (OEM dealer locators), so score-5 requires cited brand evidence, never inference.

## Curation (15 → 10)
Kept the 10 highest weighted fit. Dropped: Shottenkirk (domestic-heavy, low burden), Kendall (mainstream brands), Berkshire Hathaway Auto (103 rooftops but diluted across 27 brands, odd owner), Pfaff (Lithia subsidiary, centralized buying), Craig Zinn (5 rooftops, sub-scale).

## Standout
**West Herr** is the only confirmed in-market video-MPI adopter (~650 techs on iPhones, CBT News Dec 2025). It ranks med on the weighted score (mainstream-heavy brand mix lowers Warranty Burden) but is arguably the warmest near-term displacement target. Flagged in its card.

## Data-quality corrections applied
- **Penske:** Webset said 198 rooftops; 10-K shows 353 global (148 US). Used "148 US (353 global)."
- **AutoCanada:** Webset 77; YE2024 AIF = 82 total (64 Canada, US "Leader" segment being divested). Used "64 Canada (82 total)."
- **Group 1:** 259 (FY2024) confirmed; 254 in 2025 per Automotive News.
- **Castle:** 17-18 rooftops; HQ municipality is "Oakbrook Terrace" (one word).
- **Viva + Fiesta** are ONE combined El Paso group (Viva & Fiesta Auto Group, Jamie Dick), not two. NOT the unrelated Bert Ogden "Fiesta" in the Rio Grande Valley. Confirm with Lantern.

## Open gaps (close before founder delivery)
1. **Founder voice = none.** No Austin/Grant quotes exist (confirmed by Adam). Buyer-voice used as proxy in framing. Pull real founder quotes and splice into gtm_thesis/overview before sending to Lantern.
2. **Contacts unverified.** Lovelace MCP was down (502); fixed-ops contacts were sourced via Exa people-search. Names + titles + LinkedIn URLs are real Exa hits but should be re-verified before any outreach.
3. **Prestige Volvo has 2 sources** (below the 4 floor). Design partner, exempt from the cold-target floor, but worth enriching.
4. **DMS unknown** for indiGO, Fields, Krause, Go Auto, Castle (marked "Not disclosed", not fabricated).
5. **Media-attach rate** is not externally verifiable per-company; Tooling Gap axis leans on tool maturity + AI posture (per the honesty flag), with West Herr the one cited exception.

## Name collision
Distinct from the prior `alexg207/lantern-fdi` repo (a different company: wholesale-distributor purchasing agents). Unrelated, same name. This build uses slug `lantern-auto`.

## Deploy status
Local-only (not pushed). `inputs/context/` holds Plasma's confidential diligence; decide remote handling (gitignore the context dir vs push private) before creating a GitHub remote.
