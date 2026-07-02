# Lantern FDI, Context Brief

Generated: 2026-06-24
Sources: Lantern investment memo (canonical, `inputs/lantern-memo.md`); industry context, NOT Lantern (`inputs/context/plasma-memo.md`, `inputs/context/buyer-calls.md`: 3 full Tegus diligence calls + Koons summary). No Lantern founder transcripts exist; buyer-voice used as proxy (flagged gap).

---

## What Lantern Does

**One line:** AI safety glasses that capture what an auto mechanic sees and says during a vehicle inspection, then automate the multi-point-inspection checklist, the customer video, the advisor review, and the quote.

Lantern is building the intelligence layer for blue-collar work. The wedge is dealership auto service. A mechanic already wears safety glasses; Lantern replaces them with a hands-free audio/video pair that records the inspection, then produces an AI-edited, voiced-over, customer-ready video MPI optimized for upsell and translatable into any language. The documentation and the sales asset are produced for the tech in the background while the tech keeps working. Expansion path: warranty-evidence capture, OEM remote expert assist, a searchable repair-video repository, then other trades (aviation, trucking, heavy equipment, HVAC, electrical, fire inspection).

## Round + Investment
- Raising **$15M** to build the founding team, execute design partnerships, develop semi-custom glasses with a joint-development manufacturer, and scale toward 1,000 rooftops.
- PVP point: **Adam Piasecki / Jason Shuman**

## Team
- **Austin Rief** (Co-founder/CEO) , co-founder and CEO of Morning Brew.
- **Grant Wilkinson** (Co-founder) , founder of Rosedale (AI forward-deployed transformation firm), built two #1 App Store apps (5M+ downloads), focused on physical AI.
- Advisors: **Matt Haiken** (owner Prestige Volvo / Polestar Short Hills / Lincoln of Englewood; Chairman, Volvo Cars Retailer Advisory Board; first activated design partner), **Car Dealership Guy** (largest car-dealer audience in America), **Emma Kelley** (5 years Apple hardware), **Garvan Doyle** (Head of Forward Deployed Engineering, Anthropic).

## The Bet (explicit ICP qualifier)
Multi-location franchised auto dealership groups with high service-bay throughput and significant documentation burden will pay a per-technician subscription to recover advisor labor, lift media-attach rates, and reduce warranty chargebacks. Comparable smart-glasses pricing benchmarks land near **$150/technician/month**; a 100-dealership footprint at ~15 techs/dealer implies roughly **$3M ARR**.
- **Stage 1 (wedge):** mid-size regional franchise groups, fast pilots, founder-led sales.
- **Stage 2 (expansion):** large and publicly-traded groups (40 to 190+ rooftops), longer cycles, corporate fixed-ops buyer.
- **Expansion logic:** land one rooftop, expand to the group, then expand product from inspection to warranty capture and real-time repair assist.

## Real Pipeline
**Design partners (signed / onboarding):**
- **Prestige Volvo** , activated, live with the video-capture-to-MPI-checklist MVP (owner Matt Haiken is also an advisor).
- **Steele Auto Group** , onboarding (100-location franchise group, Halifax, Canada).

**Pipeline (named):**
- **Viva Auto Group** and **Fiesta Auto Group** , ~20 locations, third design partner in pipeline.

Across the three design partners: line of sight into 100+ rooftops.

## Market Context
- 18,000+ franchised dealerships in the US; **40%+ belong to multi-location groups** (the ICP). Most groups have 2 to 5 rooftops; many regional groups run 10 to 50; the largest run hundreds.
- Structural labor shortage: five skilled tradespeople retire for every two who enter; McKinsey projects the trades need ~22x more hires than net-new jobs by 2032.
- Service is the dealer profit center: the maintenance shop is roughly half of dealer gross profit.
- OEMs are beginning to require video MPIs and meticulous warranty documentation, making this top of mind for every service manager.
- Dealers already spend heavily on software: DMS alone can run $10,000/month/dealer; one 5-store design partner spends $3M/year on software.

## Competitive Landscape
| Category | Players | Why they fail the wedge |
|----------|---------|---------|
| **Mobile-app video MPI** | TruVideo, XTime (Cox), DealerFX, AutoPoint (Solera), MyKaarma | App-on-a-phone form factor: hands-on, greasy gloves, workflow interruption; no automation of checklist/quote; described by operators as stale, PE-owned, un-improved for a decade. |
| **Competing smart glasses** | Plasma (Andrew Kinzer, ex-Outreach) | Same product and ICP; direct competitor. Solo founder, hardware-heavy. |
| **OEM AR-glasses programs** | Subaru, Ford (subscription glasses with repair-instruction libraries) | OEM-locked, instruction-focused, not a documentation/upsell automation layer; low observed tech utilization. |
| **DMS incumbents** | CDK, Reynolds & Reynolds (~70% share), Tekion (modern), Dealertrack (Cox) | Own the system of record; gate integration ("pay to play"); structural blocker, not a solution. |

**Startups to monitor:** Plasma; Rilla and Siro (AI voice coaching for field service, recording-consent precedent).

## Key Risks
1. **DMS integration is table-stakes.** Operators will not adopt a tool that does not push into the DMS or the existing MPI layer (XTime). CDK/Reynolds gate integration deliberately.
2. **Recording consent / privacy.** Always-on video+audio of techs and customers hits state dual-party-consent laws and end-user adoption resistance (Rilla/Siro faced this).
3. **Sophisticated operators see it as incremental.** Best-in-class groups already hit 85 to 95% media attach via incentives and see glasses as marginal unless paired with integration or repair libraries.
4. **Hardware execution.** Semi-custom glasses require supply-chain, embedded, and certification work a software team has not yet proven.

## Buyer Insights
*(buyer-voice proxy; from Plasma diligence calls, NOT Lantern founder voice)*

### Dwayne Kinsley, Corporate Fixed-Operations Director, LA Car Guy (12 rooftops, import/luxury)
- Moved off XTime/DealerFX back to CDK in-house. Runs Mia/Pam AI for inbound calls.
- Techs spend ~1.5 hrs of an 8-hr shift on documentation; advisors spend ~1 to 1.5 hrs/day on packet review (a Lexus store runs 9 advisors).
- Warranty: 5 to 7% of monthly claims short-paid for missing documentation; warranty mix 30% up to 60-70% (Genesis); Korean brands require a photo of every old part.
- Media attach ~85% of MPI packets but only ~60% of ASRs (where conversion is actually driven).
- ⚠️ **CRITICAL buying language:** "Sign me up." / "Automating customer packet review would allow me to eliminate Service Advisor headcount." / "We wish we could just have one tool that would do everything... most people would pay."

### Daniel Negalha, Director of Fixed Operations, McGovern Auto Group (40 rooftops, 24 OEMs, 590 techs)
- Best-in-class: 410K ROs/yr, 230K photos/videos, $30M+ parts/labor revenue via text; **94-95% media attach** driven by a $1.3M tech-incentive program ($8-10K/tech).
- Estimates to a waiting customer in under 15 minutes convert at 45%+; conversion drops 10 to 15 points after.
- Warranty ~30-35% of revenue; 60-70% needs proper documentation; domestic brands (Ford, Stellantis, GM) deny first-time claims on technicalities.
- ⚠️ Sophisticated-operator signal: "I'd be 100% into it... if it could integrate to our current platform, I would love that," but sees marginal room left. Wants repair-library integration. Uses Subaru/Ford OEM AR glasses at a few stores.

### Joshua Utley, Service Manager, Earnhardt Auto Centers (17 brands, 11 locations)
- Self-described early adopter; runs CDK + AutoPoint + Mia, "5 to 8 apps at once."
- **Media attach only ~20%** today, wants 90%+ (was OEM-required 90% at a prior BMW store).
- Values the dual win: automation plus actual eye-safety compliance. "The pictures are what saved us" (disputed Stellantis warranty repair).

### Bejan Modarressi, Body Shop Director, Koons Automotive (190 rooftops, largest public group)
- Tekion DMS; ~30 min/job paperwork; **media attach ~70%**, management wants 100%; would "absolutely pilot it."

## Investment Thesis
1. Repeat, high-caliber founders (Morning Brew, Rosedale) with auto-industry distribution (Matt Haiken, Car Dealership Guy).
2. Hands-free glasses are the AI-native form factor for hands-occupied frontline work; mobile apps cannot match it.
3. A captured video+voice data flywheel compounds into defensible downstream workflows (real-time repair assist) and switching costs.

## Gotta Believes
1. Hands-free egocentric glasses become the dominant capture surface for frontline techs, and techs adopt because it makes them money and removes paperwork.
2. Auto service has enough unaddressed pain for high-velocity growth, and the product proves 10x better than mobile-app MPI.
3. Lantern can clear DMS/MPI integration, the table-stakes blocker.

## How Lantern Came to Primary
Sourced through the firm's auto/frontline thesis; PVP point Adam Piasecki / Jason Shuman. Primary holds parallel diligence on Plasma, a direct competitor; Plasma material is used here only as industry context and is excluded from the target universe.

## Market Segmentation (drives dashboard tabs)
- **Active Pipeline** = signed/onboarding design partners + named pipeline (Prestige Volvo, Steele, Viva, Fiesta). Reference/anchor tab.
- **Mid-Market Groups** = ~5 to 25-rooftop regional franchise groups (Stage 1 wedge: fast pilots, acute pain, founder-led sales).
- **Enterprise Groups** = 25+ rooftop and publicly-traded groups (Stage 2: corporate fixed-ops buyer, McGovern/Koons scale).

## ICP (Two Stages)
### Stage 1 , Mid-Market regional groups (NOW)
- 5 to 25 rooftops; franchised, service department at every rooftop.
- Brand mix weighted toward Korean (Hyundai/Genesis) or luxury/German (Porsche, Land Rover, BMW, Mercedes) , high warranty and documentation burden.
- Signals of pain: media-attach gap (well under 90%), legacy MPI tool, advisor headcount on packet review.
- Easier to convert: fast trials, single corporate fixed-ops decision-maker, social/insular peer networks (20 Groups).

### Stage 2 , Large / public groups (LATER)
- 25 to 190+ rooftops (McGovern 40, Koons 190). Sophisticated, often already at high attach.
- Win via integration depth (DMS/XTime, repair libraries) and warranty-recovery + headcount-reduction ROI, not basic attach lift.

## Buyer Personas & Messaging
**Best targets (ranked):**
1. **Corporate Fixed-Operations Director** (group-level, owns vendor decisions across rooftops) , MOST receptive.
2. **Service Manager** (store-level champion).
3. **Dealer Principal / Group Owner** (economic buyer for multi-rooftop rollouts).
4. **NOT** the DMS incumbent relationship, and not framed around replacing advisors *to* advisors (frame headcount efficiency to the buyer, not the champion's team).

**Messaging angles (ranked):**
1. **Warranty-chargeback recovery** , automated OEM-grade documentation reduces the 5-7% of denied/short-paid claims (CFO language).
2. **Advisor + tech labor recovery** , reclaim ~1 to 1.5 hrs/day per advisor and per tech; "eliminate packet-review headcount."
3. **Media attach to 95%+ and faster speed-to-quote** , drives upsell conversion (45%+ when under 15 minutes to a waiting customer).
4. **Hands-free + eye-safety twofer** , no behavioral change, replaces glasses already on the tech's face.

## Key People
| Person | Role | Notes |
|--------|------|-------|
| Austin Rief | Co-founder/CEO, Lantern | ex Morning Brew |
| Grant Wilkinson | Co-founder, Lantern | ex Rosedale |
| Matt Haiken | Advisor + first design partner | Prestige Volvo owner; Volvo Retailer Advisory Board chair |
| Adam Piasecki / Jason Shuman | PVP point | Sent memo + diligence |

## Founder Voice , Verbatim Quotes
**GAP: no Lantern founder transcripts exist.** Adam confirmed no deck and few direct Austin/Lantern calls. Pull real Austin/Grant quotes before founder delivery. Buyer-voice quotes (see Buyer Insights) used as proxy in the interim.

## Lookalike Anchors
1. **LA Car Guy / Sullivan Automotive** , 12 import/luxury rooftops, high warranty mix, fixed-ops-led, AI-curious.
2. **McGovern Automotive Group** , 40 rooftops, 24 OEMs, fast-growing, sophisticated fixed-ops org.
3. **Earnhardt Auto Centers** , 17 brands / 11 locations, early adopter, large media-attach gap (20%).
4. **Koons Automotive** , 190 rooftops, largest public group, attach gap to 100% goal.
5. Regional import/luxury-heavy groups in the 10 to 50-rooftop range generally.

## Exclusions
- **Plasma** , direct competitor (do not target; quarantine from product claims).
- **TruVideo, XTime, DealerFX, AutoPoint, MyKaarma** , competing/legacy MPI vendors.
- **CDK, Reynolds, Tekion, Dealertrack** , DMS incumbents (not customers).
- **Prestige Volvo, Steele, Viva, Fiesta** , existing design partners/pipeline (show in Active Pipeline tab, not as cold targets).
- Single-rooftop independents and non-franchised used-car lots (sub-scale).
- Non-US/Canada groups.

## The "Wow" Signal
**A group's brand mix predicts both its documentation pain and its warranty-dollar leakage, the exact two things Lantern recovers.** Korean (Hyundai/Genesis) and luxury/German franchises carry 50 to 70% warranty mix with mandatory part-level photo/serial documentation; 5 to 7% of those claims are short-paid for missing evidence. Pair that with a media-attach gap and legacy MPI tooling and the ROI is self-evident.

> "Sign me up... automating customer packet review would allow me to eliminate Service Advisor headcount." , Dwayne Kinsley, Fixed-Ops Director, LA Car Guy

`WOW_EVIDENCE_SHAPE`: cited evidence that a target carries Korean or luxury/German franchises (implying 50%+ warranty mix), OR a named OEM photo/video documentation mandate, OR a documented media-attach rate well under the 90% industry north-star.

## Deliverable / Timeline
- **Audience:** Lantern founders (Austin/Grant) for outbound; internal Primary GTM use.
- **Format:** interactive HTML intelligence dashboard (single page, `index.html` + `data.js`), deployable.
- **Success metric:** 9 to 10 high-confidence, well-sourced dealer-group targets the founders can walk into, mapped on the signal axes below.
- **Open gap to close before founder delivery:** real Austin/Grant voice quotes.

## Signal Axes (Phase 5 input)
1. **Hiring** , service/fixed-ops hiring velocity (techs, advisors, service managers, BDC).
2. **Opportunity** , group scale: rooftop count x bays/lifts x tech/advisor headcount = labor-hours-saved TAM.
3. **Documentation & Warranty Burden** (founder-specific, WOW axis) , brand-mix-driven warranty intensity + OEM documentation/video mandate exposure.
4. **MPI Tooling Gap** (founder-specific) , current MPI/video tool + media-attach gap + AI-adoption posture (displacement vs integration).

`SECTION_2_LABEL`: **Service Footprint** (rows: Use Cases, Current Stack, Pain Points, Estimated Spend).
