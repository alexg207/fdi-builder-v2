// ══════════════════════════════════════════════════════════════════════════
// FDI Intelligence Map — Lantern (data.js)
// ══════════════════════════════════════════════════════════════════════════
// Founder: Lantern. AI safety glasses that capture what an auto mechanic sees
// and says during a vehicle inspection, then automate the multi-point
// inspection checklist, the customer video, the advisor review, and the quote.
//
// Axis mapping (vertical-adapted):
//   competitive_distress → "Warranty Burden"  (brand-mix-driven warranty + documentation intensity)
//   data_residency       → "Tooling Gap"      (current MPI/video tool + AI posture; displacement vs integration)
//   signal_score         → "Opportunity"      (rooftop scale / expansion momentum)
//   JOB_LISTINGS         → Hiring sub-score    (service/fixed-ops hiring velocity)
//
// COLLECTIONS:
//   ROW_SOURCES, SEGMENTS, CONTACT_MAP, COMPANY_SOURCES, JOB_LISTINGS,
//   RESIDENCY_MAP, PRIMARY_TEAM
// ══════════════════════════════════════════════════════════════════════════


/* ────────────────────────────────────────────────────────────────────────
   ROW_SOURCES — citation strings for individual data rows
   ──────────────────────────────────────────────────────────────────────── */
const ROW_SOURCES = {
  // Prestige Volvo
  "Prestige Volvo (Prestige Collection)|Company Profile|Rooftops": "Car Dealership Guy Podcast #59 — Matt Haiken, President, Prestige Collection",
  "Prestige Volvo (Prestige Collection)|Company Profile|Industry": "Car Dealership Guy Podcast #59 — Matt Haiken ($300M rev, #1 Volvo)",
  "Prestige Volvo (Prestige Collection)|Service Footprint|Pain Points": "Car Dealership Guy Podcast #59 — Matt Haiken (Volvo/Polestar EV warranty complexity)",

  // Steele Auto Group
  "Steele Auto Group|Company Profile|Rooftops": "Steele Auto Group — Dealerships (32 brands, 62 locations)",
  "Steele Auto Group|Company Profile|Industry": "Steele Auto Group — Our Story (HQ Dartmouth NS, founded 1990)",
  "Steele Auto Group|Service Footprint|Pain Points": "North America Outlook — Steele Auto Group: Setting the Pace in Canada (TX expansion)",

  // Viva & Fiesta
  "Viva & Fiesta Auto Group|Company Profile|Rooftops": "Viva Auto Group — Locations (9 franchise rooftops; El Paso TX / Las Cruces NM)",
  "Viva & Fiesta Auto Group|Company Profile|Industry": "El Paso Inc. — Viva & Fiesta Auto Group buys Toyota of Las Cruces (Jamie Dick)",

  // indiGO Auto Group
  "indiGO Auto Group|Company Profile|Rooftops": "indiGO Auto Group — About (30 franchised dealerships; Pon ownership)",
  "indiGO Auto Group|Company Profile|Industry": "Pon — indiGO Auto Group portfolio (parent-company record)",
  "indiGO Auto Group|Service Footprint|Pain Points": "indiGO Auto Group — Locations directory (ultra-luxury + Korean roster)",
  "indiGO Auto Group|Service Footprint|Use Cases": "Automotive News — IndiGO buys MB/Genesis/Hyundai of Palm Springs (Nov 2025)",

  // Fields Auto Group
  "Fields Auto Group|Company Profile|Rooftops": "Fields Auto Group — Corporate culture page (~three dozen franchises)",
  "Fields Auto Group|Company Profile|Industry": "Fields Auto Group — Locations directory",
  "Fields Auto Group|Service Footprint|Pain Points": "Fields Auto Group — Locations directory (BMW/MB/Porsche/Bentley/JLR roster)",
  "Fields Auto Group|Service Footprint|Use Cases": "Fields Auto Group — Corporate culture page (active service-tech hiring banner)",

  // Krause Auto Group
  "Krause Auto Group|Company Profile|Rooftops": "Krause Auto Group — Our Group (28 dealerships / 1,800 employees)",
  "Krause Auto Group|Company Profile|Industry": "Automotive News — 2026 Top 150 Dealership Groups (Krause 29 stores)",
  "Krause Auto Group|Service Footprint|Pain Points": "Krause Auto Group — Our Group (Korean + German-luxury + hypercar roster)",
  "Krause Auto Group|Service Footprint|Use Cases": "Automotive News — Krause buys Nissan/Genesis dealerships in $110M deal (2024)",

  // Castle Automotive Group
  "Castle Automotive Group|Company Profile|Rooftops": "Castle Automotive Group — Ranks #109 in 2025 Automotive News Top 150 (18 locations / 25 franchises)",
  "Castle Automotive Group|Company Profile|Industry": "Castle Automotive Group — Ranks #109 in 2025 Automotive News Top 150",
  "Castle Automotive Group|Service Footprint|Pain Points": "Castle Automotive Group — Ranks #109 (Genesis/Hyundai/Kia + GM/Chrysler domestic)",
  "Castle Automotive Group|Service Footprint|Use Cases": "Castle Automotive Group — Acquires Castle Hyundai of Oak Lawn",

  // Penske
  "Penske Automotive Group|Company Profile|Rooftops": "SEC — Penske 2024 Form 10-K (353 franchised: 148 US / 205 non-US)",
  "Penske Automotive Group|Company Profile|Industry": "Penske Investors — Q4/FY2024 results (Bloomfield Hills, NYSE:PAG)",
  "Penske Automotive Group|Company Profile|DMS Provider": "Reynolds & Reynolds — DMS agreement extended with Penske (ERA-IGNITE)",
  "Penske Automotive Group|Service Footprint|Pain Points": "SEC — Penske 2024 Form 10-K (72% premium-brand revenue mix)",

  // Ed Napleton
  "Ed Napleton Automotive Group|Company Profile|Rooftops": "Ed Napleton — Company history (74 franchises, 7 states)",
  "Ed Napleton Automotive Group|Company Profile|Industry": "BBB — Ed Napleton Automotive Group profile (57 locations; founded 1977)",
  "Ed Napleton Automotive Group|Company Profile|DMS Provider": "Dealertrack (Cox) — Napleton DMS case study (Dealertrack + Xtime + VinSolutions)",
  "Ed Napleton Automotive Group|Service Footprint|Current Stack": "Dealertrack (Cox) — Napleton DMS case study (Xtime MPI confirmed in place)",
  "Ed Napleton Automotive Group|Service Footprint|Pain Points": "Dealertrack (Cox) — Napleton DMS case study (Genesis/Hyundai/Kia + luxury roster)",

  // Group 1
  "Group 1 Automotive|Company Profile|Rooftops": "SEC — Group 1 Automotive 2024 Form 10-K (145 US + 114 UK dealerships)",
  "Group 1 Automotive|Company Profile|Industry": "Group1corp — Q4/FY2024 results (259 dealerships, NYSE:GPI)",
  "Group 1 Automotive|Company Profile|DMS Provider": "Group1corp — Statement on CDK cybersecurity incident (US ops on CDK DMS)",
  "Group 1 Automotive|Service Footprint|Pain Points": "Group 1 Careers — Service Technicians listings (175 tech + 65 advisor reqs)",

  // West Herr
  "West Herr Auto Group|Company Profile|Rooftops": "West Herr — Homepage (41 dealerships, largest in NY State)",
  "West Herr Auto Group|Company Profile|DMS Provider": "Car Dealership Guy News — West Herr inside RouteOne/Dealertrack toolkits",
  "West Herr Auto Group|Service Footprint|Current Stack": "CBT News — West Herr equipped 650 techs with iPhones for video MPIs (Dec 2025)",
  "West Herr Auto Group|Service Footprint|Pain Points": "CBT News — West Herr video MPI program (Druzynski interview, Dec 2025)",
  "West Herr Auto Group|Service Footprint|Use Cases": "CBT News — West Herr equipped 650 techs with iPhones for video MPIs (Dec 2025)",

  // Go Auto
  "Go Auto|Company Profile|Rooftops": "Car Dealership Guy News — Go Auto reaches 76 dealerships (Dec 2025)",
  "Go Auto|Company Profile|Industry": "Go Auto — Corporate homepage (70+ dealerships, 32 brands; Edmonton)",
  "Go Auto|Service Footprint|Current Stack": "Go Auto — Corporate homepage (DIY video walkarounds + Go Auto App)",
  "Go Auto|Service Footprint|Pain Points": "Car Dealership Guy News — Go Auto reaches 76 dealerships (Korean-heavy roster)",

  // AutoCanada
  "AutoCanada|Company Profile|Rooftops": "AutoCanada Investors — Q4 2024 MD&A (64 Canadian + 17 US dealerships)",
  "AutoCanada|Company Profile|Industry": "AutoCanada Investors — Q4 2024 results (TSX:ACQ; Edmonton)",
  "AutoCanada|Company Profile|DMS Provider": "AutoCanada Investors — 2024 Annual Information Form (CDK DMS; CDK outage)",
  "AutoCanada|Service Footprint|Current Stack": "AutoCanada Investors — 2024 Annual Information Form (CDK Digital Vehicle Inspections)",
  "AutoCanada|Service Footprint|Pain Points": "AutoCanada Investors — Q4 2024 MD&A (US 'Leader' segment being divested)"
};


/* ────────────────────────────────────────────────────────────────────────
   SEGMENTS — the spine of the dashboard
   ──────────────────────────────────────────────────────────────────────── */
const SEGMENTS = [

  /* ====================================================================
     SEGMENT 0 — Active Pipeline
     ==================================================================== */
  {
    id: 'pipeline',
    label: 'Active Pipeline',
    icon: '🎯',
    eyebrow: 'DESIGN PARTNERS + NAMED PIPELINE',
    title: 'Active Accounts',
    desc: 'Companies already signed as design partners or in active pipeline conversations. Use this view to track current motion and reference-account positioning.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    companies: [

      // ── 1. Prestige Volvo (Prestige Collection) — signed, live with MVP
      {
        name: 'Prestige Volvo (Prestige Collection)',
        domain: 'prestigevolvo.com',
        subtitle: 'New Jersey number-one-volume Volvo group, live on the inspection-to-MPI MVP as first design partner.',
        tier: 'high',
        tags: [
          { t: 'Signed Design Partner', c: 'brand', tip: 'Activated, live with the video-capture-to-MPI MVP' },
          { t: 'Owner is Lantern advisor', c: 'neutral', tip: 'Matt Haiken chairs the Volvo Cars Retailer Advisory Board' },
          { t: 'European luxury + Polestar EV', c: 'stack', tip: 'Volvo/Polestar warranty complexity' }
        ],
        overview: 'Prestige Collection is New Jersey\'s number-one-volume Volvo retailer, a roughly $300M-revenue group spanning a Volvo flagship, Lincoln of Englewood, and Polestar EV. Owner Matt Haiken is both the first activated design partner and a Lantern advisor who chairs the Volvo Cars Retailer Advisory Board, giving Lantern a working reference account plus a credibility channel into Volvo retail nationally. The MVP captures the inspection and produces a customer-ready video MPI in the background while the tech keeps working.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (Volvo, Lincoln, Polestar)'],
              ['Rooftops', '~3 active (Volvo East Hanover flagship, Lincoln of Englewood, Polestar)'],
              ['Employees', 'Not publicly disclosed'],
              ['DMS Provider', 'Not disclosed'],
              ['Digital Maturity', 'High. Owner chairs the Volvo Retailer Advisory Board and runs the live Lantern MVP.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across Volvo and Polestar EV work.'],
              ['Current Stack', 'Live on the Lantern inspection-to-MPI MVP; prior MPI vendor not disclosed.'],
              ['Pain Points', 'Advisor labor on packet review and warranty short-pay leakage are the dollars in play; Polestar and Volvo EV claims carry heavier part-level documentation, and as a flagship the group needs media-attach lift to protect upsell margin.'],
              ['Estimated Spend', '$60k-$200k/yr service software, est. from ~3 rooftops x per-rooftop DMS and MPI spend.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Already executed: signed and live. Focus is reference development and a documented ROI case for the rest of Volvo retail.'],
              ['Key Evidence', 'Activated MVP; owner is an advisor and chairs the Volvo Cars Retailer Advisory Board.'],
              ['Urgency Level', 'EXECUTE'],
              ['Target Buyer', 'Buyer: Dealer Principal / Group Owner. Champion: Fixed Operations Director.'],
              ['Messaging Angle', 'Turn the flagship into the proof point: "Show the rest of Volvo retail the warranty and attach numbers from your own bays."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: [
          'Signed and live with the MVP; first activated design partner',
          'Owner Matt Haiken chairs the Volvo Cars Retailer Advisory Board (national reference channel)',
          'Roughly $300M revenue across Volvo, Lincoln, and Polestar (CDG Podcast #59)'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Small footprint, but the owner-advisor and Volvo board seat make it the anchor reference for the whole vertical.',
        competitive_distress: 4,
        distress_reason: 'European luxury plus Polestar EV carries moderate-to-high warranty and documentation burden; no Korean franchises, so part-level photo load is below the Korean-heavy groups.',
        distress_signals: [
          'Volvo and Polestar EV warranty complexity (CDG Podcast #59)',
          'Flagship #1-volume Volvo store concentrates documentation work'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Already displaced its prior MPI workflow with the Lantern MVP, so the tooling-gap question is settled for this account; the open work is depth and ROI proof, not displacement.',
        residency_signals: [
          'Live on the Lantern inspection-to-MPI MVP today',
          'Owner-advisor accelerates feedback and product iteration'
        ],
        residency_signal_types: ['positive', 'positive'],
        gtm_thesis: 'Prestige is the anchor reference: signed, live, and owned by a Lantern advisor who chairs the Volvo Cars Retailer Advisory Board, earning EXECUTE priority now. The motion is to harden ROI evidence into a packet the founders carry into every Volvo and European-luxury group. Sell the owner a distribution flywheel, not one store. <strong>Buyer:</strong> Dealer Principal / Group Owner. <strong>Champion:</strong> Fixed Operations Director. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── 2. Steele Auto Group — onboarding, 2nd design partner
      {
        name: 'Steele Auto Group',
        domain: 'steeleauto.com',
        subtitle: 'Roughly 60-rooftop Canada-plus-Texas group onboarding now, with the highest warranty mix of the partners.',
        tier: 'high',
        tags: [
          { t: 'Onboarding', c: 'brand', tip: 'Second design partner, currently onboarding' },
          { t: 'Korean + German-luxury', c: 'stack', tip: 'Hyundai/Genesis + Audi/Porsche/MB/JLR/Volvo' },
          { t: 'Cross-border: Canada + TX', c: 'neutral' }
        ],
        overview: 'Steele Auto Group is Atlantic Canada\'s largest dealer group, running roughly 56 to 62 rooftops and about 32 brands across Canada and a new Texas expansion. Its roster is the highest-burden of the three partners: full Korean (Hyundai/Genesis) plus German luxury (Audi, Porsche, Mercedes-Benz, Jaguar-Land Rover, Volvo) layered on mass-market volume. That brand mix, spread across ~60 service departments and two countries, makes it the partner where Lantern\'s warranty-recovery and attach story scales fastest into a full group rollout.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (~32 brands)'],
              ['Rooftops', '~56-62 (Atlantic Canada + Texas)'],
              ['Employees', 'Not publicly disclosed'],
              ['DMS Provider', 'Not disclosed'],
              ['Digital Maturity', 'Med-High. Multi-brand operator scaling cross-border into Texas (North America Outlook).']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across Korean and German-luxury service work.'],
              ['Current Stack', 'DMS not disclosed; prior MPI/video tooling not disclosed across the ~60 rooftops.'],
              ['Pain Points', 'Warranty short-pay leakage and advisor packet-review labor drain real margin every month; the Korean and German-luxury mix demands part-level photo evidence, and rooftop sprawl across two countries makes consistency hard to enforce.'],
              ['Estimated Spend', '$1.5M-$4M/yr service software, est. from ~60 rooftops x per-rooftop DMS spend (one ~5-store peer reports $3M/yr all-in software).']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'In flight: onboarding the second design partner. Land a lead rooftop, prove the warranty case, then expand across the ~60-store group.'],
              ['Key Evidence', 'Highest warranty-burden roster of the partners; ~32 brands across ~60 rooftops in two countries.'],
              ['Urgency Level', 'EXECUTE'],
              ['Target Buyer', 'Buyer: President / COO. Champion: Corporate Fixed Operations Director.'],
              ['Messaging Angle', 'Standardize documentation across 60 bays: "One inspection capture that holds up for Genesis, Porsche, and the warranty auditor, in every store."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: [
          'Onboarding now as the second design partner',
          '~56-62 rooftops across Atlantic Canada plus active Texas expansion (Steele Dealerships page)',
          '~32 brands including full Korean + German-luxury (North America Outlook)'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Largest of the partners by rooftops, with cross-border expansion live, so a group-wide rollout is the biggest near-term ARR lever.',
        competitive_distress: 5,
        distress_reason: 'Highest warranty burden of the three partners: full Korean (Hyundai/Genesis) plus German luxury across ~60 rooftops means heavy part-level documentation and short-pay exposure.',
        distress_signals: [
          'Korean franchises (Hyundai/Genesis) require part-level photo documentation',
          'German-luxury brands (Audi/Porsche/MB/JLR) carry heavy warranty mix'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'No public MPI-automation tool disclosed across the group; onboarding means Lantern is being adopted before an entrenched legacy layer is fully standardized, lowering displacement friction.',
        residency_signals: [
          'No public MPI-automation vendor named across the ~60 rooftops',
          'Active onboarding signals genuine intent, not a stalled evaluation'
        ],
        residency_signal_types: ['negative', 'positive'],
        gtm_thesis: 'Steele is the highest-leverage partner: the biggest footprint and the highest warranty burden, onboarding right now, which earns EXECUTE priority. The motion is land-and-expand from the onboarding rooftop into a standardized capture layer across all ~60 service departments, anchored on warranty-recovery ROI. Sell group-wide standardization to the operator, not a per-store pilot. <strong>Buyer:</strong> President / COO. <strong>Champion:</strong> Corporate Fixed Operations Director. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── 3. Viva & Fiesta Auto Group — pipeline, 3rd design partner
      {
        name: 'Viva & Fiesta Auto Group',
        domain: 'vivaautogroup.com',
        subtitle: 'El Paso mass-market group, ~9 rooftops with Korean Kia/Hyundai, third design partner in pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'brand', tip: 'Third design partner, in pipeline' },
          { t: 'Korean: Kia/Hyundai', c: 'stack', tip: 'Korean franchises drive part-level photo burden' },
          { t: 'Mass-market volume', c: 'neutral' }
        ],
        overview: 'Viva & Fiesta Auto Group is a single combined El Paso operator (the Viva and Fiesta banners are two halves of one group, not the unrelated Rio Grande Valley Fiesta). It runs roughly 9 franchise rooftops plus powersports across El Paso, Las Cruces, Albuquerque, and Santa Fe, anchored on mass-market volume (Chevrolet, Ford, CDJR, Toyota, Nissan) with Korean Kia and Hyundai franchises. The Korean exposure plus high service throughput gives Lantern a clean documentation-and-attach wedge without luxury-integration complexity.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group + powersports'],
              ['Rooftops', '~9 franchise rooftops (El Paso TX + Las Cruces/Albuquerque/Santa Fe NM)'],
              ['Employees', 'Not publicly disclosed'],
              ['DMS Provider', 'Not disclosed'],
              ['Digital Maturity', 'Med. Mass-market multi-store operator; no public AI-service tooling disclosed.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across high-volume mass-market and Korean service work.'],
              ['Current Stack', 'DMS not disclosed; prior MPI/video tooling not disclosed.'],
              ['Pain Points', 'Lost upsell margin from a media-attach gap and advisor labor on packet review are dollars left on the table; Kia and Hyundai claims still demand part-level photo evidence, while high mass-market throughput strains bay-level documentation.'],
              ['Estimated Spend', '$180k-$500k/yr service software, est. from ~9 rooftops x per-rooftop DMS spend.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Pipeline: land the third design partner. Fast pilot at a lead rooftop, then expand across the ~9-store group.'],
              ['Key Evidence', 'Named third design partner; Korean Kia/Hyundai plus high mass-market volume; founder-led dealer principal relationship.'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: Dealer Principal / Group Owner. Champion: Fixed Operations Director.'],
              ['Messaging Angle', 'Volume play: "Lift attach and speed-to-quote on every mass-market RO, and document the Korean claims so they do not get short-paid."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: [
          'Named third design partner in pipeline',
          '~9 franchise rooftops plus powersports across TX and NM (Viva Auto Group Locations)',
          'Korean Kia/Hyundai franchises drive part-level documentation burden'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Mid-size footprint with a warm dealer-principal relationship; a fast pilot can convert the whole group quickly.',
        competitive_distress: 3,
        distress_reason: 'Moderate burden: Korean Kia/Hyundai carry part-level photo requirements, but the mass-market core (Chevy/Ford/Toyota) and absence of German luxury keep documentation intensity below the Korean-and-luxury groups.',
        distress_signals: [
          'Korean Kia/Hyundai franchises require part-level photo documentation',
          'Mass-market volume concentrates many ROs but lower per-claim warranty mix'
        ],
        distress_signal_types: ['negative', 'positive'],
        data_residency: 3,
        residency_reason: 'No public MPI-automation tool disclosed and a mass-market posture suggests a real attach gap, an easy displacement; no cited evidence of an advanced in-market video tool to overcome.',
        residency_signals: [
          'No public MPI-automation vendor named',
          'Mass-market high-volume stores typically run below the 90% attach north-star'
        ],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Viva & Fiesta wins on sheer El Paso border RO volume: a single mass-market operator pushing huge service throughput through Chevy, Ford, and Toyota bays, where small per-RO attach gains compound fast. The Kia and Hyundai franchises add the second hook, part-level short-pay defense on every Korean claim. Pilot the highest-volume rooftop, then expand across the ~9-store group. <strong>Buyer:</strong> Dealer Principal / Group Owner. <strong>Champion:</strong> Fixed Operations Director. <strong>NOT</strong> the DMS-incumbent relationship.'
      }

    ]
  },

  /* ====================================================================
     SEGMENT 1 — Mid-Market (Stage 1 ICP, near-term)
     ==================================================================== */
  {
    id: 'midmarket',
    label: 'Mid-Market',
    icon: '🚀',
    eyebrow: 'STAGE 1 ICP — NEAR-TERM',
    title: 'Mid-Market Targets',
    desc: 'Companies in the founder\'s near-term ideal customer profile. Lower friction to convert, faster sales cycles.',
    companies: [

      // ── indiGO Auto Group
      {
        name: 'indiGO Auto Group',
        domain: 'indigoautogroup.com',
        subtitle: 'Ultra-luxury 30-rooftop group with peak part-level documentation burden and ~24 open service roles.',
        tier: 'high',
        tags: [
          { t: 'Ultra-luxury + Korean', c: 'stack', tip: 'Porsche/Bentley/Rolls-Royce/Ferrari + Hyundai/Genesis' },
          { t: 'Pon Holdings owned', c: 'neutral', tip: 'Private, owned by Pon (Netherlands) since 2019' },
          { t: 'Hiring: ~24 service roles', c: 'neutral' }
        ],
        overview: 'indiGO Auto Group is a 30-rooftop, Houston-based group owned by Netherlands-based Pon Holdings since 2019. Its roster is near-entirely ultra-luxury (Porsche, Bentley, Lamborghini, Rolls-Royce, Ferrari, Aston Martin, McLaren) layered with Hyundai, Genesis, and Mercedes-Benz, the brand-mix shape that drives maximum warranty mix and part-level documentation finesse. With no public MPI-automation tool and roughly 24 open service roles, it is a clean Stage-1 wedge where Lantern\'s documentation and warranty-recovery ROI is self-evident.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (ultra-luxury + Korean)'],
              ['Rooftops', '30'],
              ['Employees', '~218 (HQ partial count)'],
              ['DMS Provider', 'Not disclosed'],
              ['Digital Maturity', 'Med. Acquisitive and Pon-backed, but no public AI-service or MPI tooling disclosed.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across ultra-luxury and Korean service work.'],
              ['Current Stack', 'Legacy MPI tooling; specific vendor not disclosed.'],
              ['Pain Points', 'Warranty short-pay leakage and advisor packet-review labor cost this group six figures it can win back; the ultra-luxury and Korean roster requires part-level photo and serial documentation, and ~24 open service roles signal a labor squeeze on bays already short-staffed.'],
              ['Estimated Spend', '$600k-$1.5M/yr service software, est. from 30 rooftops x per-rooftop DMS spend.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land a flagship Porsche or Genesis rooftop on a fast pilot, then expand across the 30-store group via the corporate fixed-ops buyer.'],
              ['Key Evidence', 'Ultra-luxury + Korean roster (peak documentation burden); ~24 open service roles; Pon-backed acquisitive growth.'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: Corporate Fixed Operations Director. Champion: Service and Parts Director.'],
              ['Messaging Angle', '"Your Porsche and Genesis bays generate the most warranty documentation in the country; capture it hands-free and stop the short-pays."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: [
          'Acquired Mercedes-Benz/Genesis/Hyundai of Palm Springs in Nov 2025 (Automotive News)',
          'Pon Holdings backing supports continued acquisitive expansion',
          '30 franchised rooftops across an ultra-luxury and Korean roster'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: '30 rooftops with active acquisitions puts this in the 30-49 opportunity band; group-wide rollout is a sizable Stage-1 win.',
        competitive_distress: 5,
        distress_reason: 'Near-entirely ultra-luxury plus a Korean roster (Hyundai/Genesis) means maximum part-level photo and serial documentation and one of the highest warranty-mix exposures in the set.',
        distress_signals: [
          'Ultra-luxury roster (Porsche/Bentley/Rolls-Royce/Ferrari) carries heavy warranty documentation',
          'Korean franchises (Hyundai/Genesis) require a photo of every replaced part'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'No public MPI-automation tool disclosed and ~24 open service roles suggest documentation is still manual, so there is nothing entrenched to rip out; no cited in-market video-MPI program to overcome.',
        residency_signals: [
          'No public MPI-automation vendor named (indiGO Locations)',
          '~24 open service roles indicate manual, labor-heavy documentation today'
        ],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'indiGO is bought into hardest on its acute hiring squeeze: ~24 open service roles mean glasses let the existing crew document more cars without backfilling reqs. Pon-backed acquisition pace then does the expanding, each newly bought store onboards onto Lantern as it joins. Land a fast pilot at a flagship Porsche or Genesis rooftop. <strong>Buyer:</strong> Corporate Fixed Operations Director. <strong>Champion:</strong> Service and Parts Director. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── Fields Auto Group
      {
        name: 'Fields Auto Group',
        domain: 'fieldsauto.com',
        subtitle: 'Elite-luxury 30-plus-rooftop family group with one of the most warranty-concentrated rosters in the set.',
        tier: 'high',
        tags: [
          { t: 'Elite luxury', c: 'stack', tip: 'BMW/MB/Porsche/Bentley/JLR/Lamborghini/Rolls-Royce' },
          { t: 'Family-owned since 1971', c: 'neutral' },
          { t: 'Hiring: service techs', c: 'neutral' }
        ],
        overview: 'Fields Auto Group is a family-owned group (founded 1971) running roughly 32 to 34 rooftops out of Northfield, IL, with one of the most luxury-concentrated rosters in the entire target set: BMW, Mercedes-Benz, Porsche, Bentley, Jaguar-Land Rover, Lamborghini, Rolls-Royce, McLaren, Volvo, and Lexus. That concentration drives maximum warranty documentation finesse. With no public MPI-automation tool and an active service-tech hiring banner, Fields is a high-fit Stage-1 wedge for Lantern\'s warranty and attach story.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (elite luxury)'],
              ['Rooftops', '~32-34'],
              ['Employees', '1,001-5,000'],
              ['DMS Provider', 'Not disclosed'],
              ['Digital Maturity', 'Med. Established luxury operator; no public AI-service or MPI tooling disclosed.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across elite-luxury service work.'],
              ['Current Stack', 'Legacy MPI tooling; specific vendor not disclosed.'],
              ['Pain Points', 'Warranty short-pay leakage and advisor labor on packet review bleed margin the group can recover; the elite-luxury roster (BMW/MB/Porsche/Bentley/JLR) demands part-level documentation finesse, and active service-tech hiring signals strained bay capacity.'],
              ['Estimated Spend', '$640k-$1.6M/yr service software, est. from ~33 rooftops x per-rooftop DMS spend.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land a flagship BMW or Porsche rooftop on a fast pilot, then expand across the group via the corporate fixed-ops decision-maker.'],
              ['Key Evidence', 'One of the most luxury-concentrated rosters in the set; ~33 rooftops; active service-tech hiring banner.'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: Director of Fixed Operations. Champion: Service Manager.'],
              ['Messaging Angle', '"Your luxury bays produce the most documentation-sensitive claims; capture them hands-free and recover the short-paid dollars."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: [
          'Active service-tech hiring banner across stores (Fields corporate culture page)',
          'Portfolio reshaping via Kerrigan-advised luxury-store transactions',
          '~32-34 rooftops across an elite-luxury roster'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: '~33 rooftops places this in the 30-49 opportunity band; a luxury-concentrated group rollout is a strong Stage-1 win.',
        competitive_distress: 5,
        distress_reason: 'One of the most luxury-concentrated rosters in the set (BMW/MB/Porsche/Bentley/JLR/Lamborghini/Rolls-Royce) drives maximum warranty mix and the most documentation-sensitive claims, even without Korean franchises.',
        distress_signals: [
          'Elite-luxury roster carries heavy, finesse-intensive warranty documentation',
          'Multi-brand luxury concentration multiplies OEM-specific evidence requirements'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'No public MPI-automation tool disclosed and an active service-tech hiring banner imply manual documentation under labor strain, a greenfield install with no incumbent to unseat; no cited in-market video-MPI program to overcome.',
        residency_signals: [
          'No public MPI-automation vendor named (Fields Locations)',
          'Active service-tech hiring signals manual, labor-heavy bays'
        ],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Fields is the pure-luxury proof point: family-owned since 1971 with zero Korean franchises, so the warranty burden comes entirely from BMW, Mercedes-Benz, Porsche, and Bentley finesse, the hardest claims to document by hand. If Lantern recovers short-pays on a luxury-only roster, it recovers them anywhere. Pilot a flagship BMW or Porsche store, then expand group-wide. <strong>Buyer:</strong> Director of Fixed Operations. <strong>Champion:</strong> Service Manager. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── Krause Auto Group
      {
        name: 'Krause Auto Group',
        domain: 'krauseautogroup.com',
        subtitle: 'Fastest riser on the Automotive News Top 150, with a Korean, German-luxury, and hypercar roster.',
        tier: 'med',
        tags: [
          { t: 'Korean + German + hypercar', c: 'stack', tip: 'Hyundai/Genesis + MB/BMW/Volvo + McLaren/Lamborghini/Rolls-Royce' },
          { t: 'Family-owned since 1991', c: 'neutral' },
          { t: 'Hiring: 6-10 service roles', c: 'neutral' }
        ],
        overview: 'Krause Auto Group is an Alpharetta, GA family group (founded 1991) running 28 to 29 rooftops and roughly 1,800 employees. Its roster spans Korean (Hyundai/Genesis), German luxury (Mercedes-Benz, BMW, Volvo), and hypercar (McLaren, Lamborghini, Rolls-Royce, Aston Martin, Koenigsegg, Lotus), a maximum-burden combination. It is the fastest riser on the 2026 Automotive News Top-150 (22 to 29 stores), with no public MPI tool and 6 to 10 open service roles across the Southeast, making it a strong Stage-1 target.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (Korean + German + hypercar)'],
              ['Rooftops', '28-29'],
              ['Employees', '~1,800'],
              ['DMS Provider', 'Not disclosed'],
              ['Digital Maturity', 'Med. Fast-growing acquisitive group; no public AI-service or MPI tooling disclosed.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across Korean, German-luxury, and hypercar service work.'],
              ['Current Stack', 'Legacy MPI tooling; specific vendor not disclosed.'],
              ['Pain Points', 'Warranty short-pay leakage and advisor packet-review labor are profit Lantern puts back on the books; the Korean-plus-luxury roster demands part-level photo and serial documentation, and rapid acquisitions strain consistent process across new stores.'],
              ['Estimated Spend', '$560k-$1.4M/yr service software, est. from ~28 rooftops x per-rooftop DMS spend.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land a Genesis or Mercedes-Benz rooftop on a fast pilot, then ride the acquisition pace to standardize across new stores.'],
              ['Key Evidence', 'Fastest riser on the AN Top-150 (22 to 29 stores); Korean + German-luxury + hypercar roster; 6-10 open service roles.'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: VP of Fixed Operations. Champion: Director of Fixed Operations.'],
              ['Messaging Angle', 'Tie to growth: "As you fold in new luxury and Korean stores, standardize documentation capture from day one and protect warranty dollars at scale."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: [
          'Fastest riser on the 2026 AN Top-150, from 22 to 29 stores (Automotive News)',
          '$110M Nissan/Genesis acquisition in 2024 (Automotive News)',
          '6-10 open service roles across GA/SC/NC/FL'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: '28-29 rooftops with the fastest growth rate in the set; acquisition pace creates repeated standardize-on-rollout openings.',
        competitive_distress: 5,
        distress_reason: 'Korean (Hyundai/Genesis) plus German-luxury plus hypercar roster is a maximum-burden combination, with part-level photo requirements and heavy warranty mix across the franchise base.',
        distress_signals: [
          'Korean franchises (Hyundai/Genesis) require part-level photo documentation',
          'German-luxury and hypercar brands carry the heaviest warranty documentation finesse'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'No public MPI tool disclosed and 6-10 open service roles imply manual, labor-heavy documentation, an uncontested entry; rapid acquisitions also mean new stores arrive without an entrenched layer.',
        residency_signals: [
          'No public MPI-automation vendor named',
          'Acquisitive growth brings new stores onto Lantern before legacy lock-in'
        ],
        residency_signal_types: ['negative', 'positive'],
        gtm_thesis: 'Krause is the fastest-growing group in the set, folding Korean, German-luxury, and hypercar stores onto a maximum-burden roster, rating HIGH urgency. The wedge is a fast pilot at a Genesis or Mercedes-Benz rooftop, then a standardize-on-acquisition motion that puts Lantern in each new store from day one, before any local tool takes hold. <strong>Buyer:</strong> VP of Fixed Operations. <strong>Champion:</strong> Director of Fixed Operations. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── Castle Automotive Group
      {
        name: 'Castle Automotive Group',
        domain: 'castleautomotivegroup.com',
        subtitle: 'Small Illinois group with Korean and domestic claim-denial pain, the cleanest fast-pilot wedge.',
        tier: 'low',
        tags: [
          { t: 'Korean + domestic', c: 'stack', tip: 'Genesis/Hyundai/Kia + GM/Chrysler' },
          { t: 'Private since 1980', c: 'neutral' },
          { t: 'Hiring: $5K tech bonus', c: 'neutral' }
        ],
        overview: 'Castle Automotive Group is a private Illinois group (founded 1980) running 18 locations / 25 franchises across IL and Northwest Indiana, ranked #109 on the 2025 Automotive News Top-150 and rising fast. Its roster pairs Korean (Genesis/Hyundai/Kia) with GM and Chrysler domestic franchises, where first-time warranty claims are routinely denied on technicalities. The prize is small, but with no public MPI tool and an active $5K tech bonus it is the cleanest, fastest clean pilot in the set.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (Korean + domestic)'],
              ['Rooftops', '18 locations / 25 franchises (IL + NW Indiana)'],
              ['Employees', 'Not publicly disclosed (moves ~20,000+ vehicles/yr)'],
              ['DMS Provider', 'Not disclosed'],
              ['Digital Maturity', 'Med-Low. Fast-rising small group; no public AI-service or MPI tooling disclosed.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across Korean and domestic service work.'],
              ['Current Stack', 'Legacy MPI tooling; specific vendor not disclosed.'],
              ['Pain Points', 'Warranty short-pay leakage is the headline recoverable dollar here: domestic brands (GM/Chrysler) deny first-time claims on technicalities, while Korean franchises demand part-level photos, and a $5K tech bonus signals an acute labor gap.'],
              ['Estimated Spend', '$300k-$800k/yr service software, est. from ~17 rooftops x per-rooftop DMS spend.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land a Genesis or Hyundai rooftop on a fast pilot focused on claim-denial defense, then expand across the 18-location group.'],
              ['Key Evidence', '#109 on AN Top-150 and rising; Korean + domestic claim-denial pain; active $5K tech hiring bonus.'],
              ['Urgency Level', 'HIGH'],
              ['Target Buyer', 'Buyer: VP of Fixed Operations & Customer Experience. Champion: Regional Fixed Operations Director.'],
              ['Messaging Angle', 'Lead with claim defense: "Stop GM and Chrysler from denying first-time claims; capture the part-level evidence hands-free, every time."']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: [
          'Ranked #109 on the 2025 AN Top-150 and rising (Castle press)',
          'Acquired Castle Hyundai of Oak Lawn while reshaping the portfolio',
          'Active $5K tech hiring bonus across 3-6 open roles'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: '18 locations sits in the 15-24 opportunity band; the smallest prize in the set, but the cleanest fast clean-pilot wedge for a quick reference.',
        competitive_distress: 3,
        distress_reason: 'Korean franchises (Genesis/Hyundai/Kia) require part-level photos, and GM/Chrysler domestic brands deny first-time claims on technicalities, so documentation directly defends recoverable warranty dollars.',
        distress_signals: [
          'Domestic brands (GM/Chrysler) deny first-time warranty claims on technicalities',
          'Korean franchises (Genesis/Hyundai/Kia) require part-level photo documentation'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'No public MPI tool disclosed and an active $5K tech bonus imply manual documentation under labor strain, leaving open bays with no tool to displace; no cited in-market video-MPI program to overcome.',
        residency_signals: [
          'No public MPI-automation vendor named',
          'Active $5K tech hiring bonus signals manual, labor-strained bays'
        ],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Castle is the smallest prize but the fastest, cleanest pilot: 18 locations with Korean part-level photo requirements and domestic claim-denial pain, the exact two things Lantern documents away. Land a quick HIGH-urgency win at a Genesis or Hyundai store on claim-denial defense, bank the reference, then expand across the group. <strong>Buyer:</strong> VP of Fixed Operations & Customer Experience. <strong>Champion:</strong> Regional Fixed Operations Director. <strong>NOT</strong> the DMS-incumbent relationship.'
      }

    ]
  },

  /* ====================================================================
     SEGMENT 2 — Enterprise (Stage 2 ICP, stretch)
     ==================================================================== */
  {
    id: 'enterprise',
    label: 'Enterprise',
    icon: '🏢',
    eyebrow: 'STAGE 2 ICP — STRETCH',
    title: 'Enterprise Targets',
    desc: 'Large and publicly-traded dealer groups. Longer cycles, corporate fixed-ops buyer, won on integration depth and warranty-recovery ROI.',
    companies: [

      // ── Penske Automotive Group
      {
        name: 'Penske Automotive Group',
        domain: 'penskeautomotive.com',
        subtitle: 'Number-two US group, 148 rooftops, 72% premium-brand revenue mix driving high warranty burden.',
        tier: 'high',
        tags: [
          { t: 'Premium-heavy roster', c: 'stack', tip: '72% of 2024 retail revenue from premium brands' },
          { t: 'Reynolds DMS', c: 'neutral', tip: 'Reynolds & Reynolds ERA-IGNITE' },
          { t: 'Public (NYSE:PAG)', c: 'neutral' }
        ],
        overview: 'Penske Automotive Group is the number-two US dealership group, running 148 US rooftops (353 globally) out of Bloomfield Hills, MI with ~28,700 employees. Per its 2024 10-K, 72% of retail revenue comes from premium brands (Audi, BMW, Mercedes-Benz, Porsche, Land Rover) plus Genesis and Hyundai, a very high warranty and documentation burden. It runs a Reynolds & Reynolds DMS with no glasses automation, making this an enterprise integration play at the top of the market.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (premium-heavy, public)'],
              ['Rooftops', '148 US (353 global)'],
              ['Employees', '~28,700'],
              ['DMS Provider', 'Reynolds & Reynolds (ERA-IGNITE)'],
              ['Digital Maturity', 'High. Reynolds DMS operator; public NYSE:PAG group with scaled service ops.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across a premium-heavy service network.'],
              ['Current Stack', 'Reynolds & Reynolds DMS (ERA-IGNITE); no glasses-based MPI automation disclosed.'],
              ['Pain Points', 'At 72% premium revenue, warranty short-pay leakage and advisor packet-review labor scale into enterprise-size dollars; with the just-renewed Reynolds ERA-IGNITE contract, any tool that cannot write the RO and inspection back into Reynolds is dead on arrival.'],
              ['Estimated Spend', '$15M-$35M/yr service software, est. from 148 US rooftops x per-rooftop DMS spend (DMS alone runs ~$10k/mo/dealer).']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Enterprise integration play: prove the warranty-recovery and headcount ROI at a region, with a Reynolds integration commitment, before a corporate rollout.'],
              ['Key Evidence', '72% premium revenue mix (10-K); 148 US rooftops; Reynolds DMS with no glasses automation.'],
              ['Urgency Level', 'COLD'],
              ['Target Buyer', 'Buyer: Corporate Fixed Operations Director. Champion: Fixed Operations Director, Region.'],
              ['Messaging Angle', '"At 72% premium revenue, your warranty short-pay and advisor labor are an eight-figure line; capture the documentation hands-free and integrate it into Reynolds."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: [
          '148 US rooftops, 353 globally per the 2024 10-K (SEC)',
          'Ranked #2 on the 2026 Automotive News Top-150 (Automotive News)',
          '72% of 2024 retail revenue from premium brands (SEC 10-K)'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: '148 US rooftops sits at the top of the 100-plus opportunity band; a corporate rollout is the largest ARR target in the set.',
        competitive_distress: 5,
        distress_reason: 'A 72% premium-brand revenue mix (Audi/BMW/MB/Porsche/Land Rover plus Genesis/Hyundai) means a very high warranty mix and documentation burden across nearly the entire service network.',
        distress_signals: [
          '72% of 2024 retail revenue from premium brands (SEC 10-K)',
          'Genesis/Hyundai franchises add part-level photo documentation requirements'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 3,
        residency_reason: 'Runs a Reynolds & Reynolds DMS with no glasses-based MPI automation disclosed, so the tooling gap is real but the entry motion is integration-led, not a quick displacement, given Reynolds gates third-party access.',
        residency_signals: [
          'Sophisticated Reynolds DMS with no glasses automation (Reynolds press)',
          'Reynolds gates integration, raising the table-stakes bar for entry'
        ],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Penske is the largest prize: 148 US rooftops at a 72% premium-brand revenue mix, where warranty and advisor-labor leakage is an eight-figure line, but the Reynolds DMS gate makes it COLD and integration-led. The wedge is a regional ROI proof paired with a Reynolds integration commitment ahead of a corporate rollout. Sell the recovery to the corporate buyer. <strong>Buyer:</strong> Corporate Fixed Operations Director. <strong>Champion:</strong> Fixed Operations Director, Region. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── Ed Napleton Automotive Group
      {
        name: 'Ed Napleton Automotive Group',
        domain: 'ednapleton.com',
        subtitle: 'Family group of 57 rooftops running Xtime MPI on Dealertrack, a displaceable legacy stack.',
        tier: 'high',
        tags: [
          { t: 'Korean + luxury', c: 'stack', tip: 'Genesis/Hyundai/Kia + BMW/MB/Porsche/Lexus/Maserati' },
          { t: 'Xtime MPI on Dealertrack', c: 'neutral', tip: 'Confirmed via Cox/Dealertrack case study' },
          { t: 'Hiring: 15+ service roles', c: 'neutral' }
        ],
        overview: 'Ed Napleton Automotive Group is a family-owned group (founded 1977) running 57 rooftops and 74 franchises across 7 states, with 3,500-plus employees. Its 25-brand roster carries strong Korean (Genesis/Hyundai/Kia) and luxury (BMW, Mercedes-Benz, Porsche, Lexus, Maserati, Aston Martin) franchise counts. A Cox/Dealertrack case study confirms it runs Xtime MPI on Dealertrack, a displaceable legacy stack, and it has 15-plus open service roles, making it a high-fit Stage-2 displacement target.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (Korean + luxury, 25 brands)'],
              ['Rooftops', '57 (74 franchises, 7 states)'],
              ['Employees', '3,500+'],
              ['DMS Provider', 'Dealertrack (+ Xtime, VinSolutions)'],
              ['Digital Maturity', 'Med-High. Runs Cox Xtime MPI on Dealertrack per the case study; a modern but displaceable stack.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across Korean and luxury service work.'],
              ['Current Stack', 'Dealertrack DMS with Xtime MPI and VinSolutions (Cox case study).'],
              ['Pain Points', 'Warranty short-pay leakage and advisor packet-review labor are an annual line worth reclaiming across 57 stores; the Korean-plus-luxury roster demands part-level documentation, and the existing Xtime phone-based MPI still leaves an attach gap and a hands-on workflow.'],
              ['Estimated Spend', '$5.7M-$13M/yr service software, est. from 57 rooftops x per-rooftop DMS spend.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Displacement play: position hands-free glasses against the existing Xtime phone MPI, prove ROI at a region, then expand across the 57-store group.'],
              ['Key Evidence', 'Confirmed Xtime MPI on Dealertrack (Cox case study); strong Korean + luxury franchise count; 15+ open service roles.'],
              ['Urgency Level', 'COLD'],
              ['Target Buyer', 'Buyer: Corporate Fixed Operations Director. Champion: Regional Fixed Operations Director.'],
              ['Messaging Angle', 'Lead with displacement: "Your techs already do Xtime MPIs by phone; replace the greasy phone with hands-free glasses that document and quote in the background."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: [
          '57 rooftops and 74 franchises across 7 states (Ed Napleton history)',
          '15+ open service roles signal active fixed-ops scaling',
          'Confirmed Xtime MPI on Dealertrack (Cox/Dealertrack case study)'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: '57 rooftops sits in the 50-99 opportunity band; a group-wide displacement of Xtime is a large Stage-2 win.',
        competitive_distress: 5,
        distress_reason: 'Strong Korean (Genesis/Hyundai/Kia) plus luxury (BMW/MB/Porsche/Lexus/Maserati) franchise counts within a 25-brand roster drive heavy warranty mix and part-level documentation requirements.',
        distress_signals: [
          'Korean franchises (Genesis/Hyundai/Kia) require part-level photo documentation',
          'Luxury brands (BMW/MB/Porsche/Maserati) carry heavy warranty documentation'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Confirmed running Xtime MPI on Dealertrack (Cox case study), an explicit legacy phone-based stack to displace; the gap is real and named, though displacement requires overcoming an installed tool rather than greenfield.',
        residency_signals: [
          'Confirmed Xtime phone-based MPI in place (Cox/Dealertrack case study)',
          '15+ open service roles indicate the existing tool has not closed the labor gap'
        ],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Napleton is the clearest named-displacement target in the enterprise set: a Cox case study confirms Xtime phone-based MPI on Dealertrack across 57 Korean-and-luxury rooftops, exactly the greasy-phone workflow Lantern replaces. The motion is a regional displacement proof against Xtime, then a group-wide rollout, sold on warranty recovery and advisor-labor ROI. <strong>Buyer:</strong> Corporate Fixed Operations Director. <strong>Champion:</strong> Regional Fixed Operations Director. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── Group 1 Automotive
      {
        name: 'Group 1 Automotive',
        domain: 'group1auto.com',
        subtitle: '259 rooftops on CDK, with 175 open technician and 65 advisor reqs signaling acute labor scaling.',
        tier: 'high',
        tags: [
          { t: 'Korean + luxury', c: 'stack', tip: 'Genesis/Hyundai/Kia + BMW/MB/Audi/JLR/Lexus' },
          { t: 'CDK', c: 'neutral', tip: 'CDK DMS on US ops' },
          { t: 'Hiring: 175 techs + 65 advisors', c: 'neutral' }
        ],
        overview: 'Group 1 Automotive is a public group (NYSE:GPI) running 259 rooftops (145 US, 114 UK) out of Houston, TX with ~20,413 employees. Its 22-brand roster includes Korean (Genesis/Hyundai/Kia) and luxury (BMW, Mercedes-Benz, Audi, Jaguar-Land Rover, Lexus). US ops run on CDK, the DMS hit by the June 2024 outage. With 175 open technician and 65 open advisor reqs, Group 1 shows acute service-labor scaling, making it a large enterprise integration play.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (22 brands, public)'],
              ['Rooftops', '259 (145 US + 114 UK, FY2024)'],
              ['Employees', '~20,413'],
              ['DMS Provider', 'CDK (US ops)'],
              ['Digital Maturity', 'High. Public NYSE:GPI operator at scale on CDK; no glasses-based MPI automation disclosed.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across a 22-brand US and UK service network.'],
              ['Current Stack', 'CDK DMS on US ops; no glasses-based MPI automation disclosed.'],
              ['Pain Points', 'Advisor labor cost and warranty short-pay leakage scale across 259 rooftops, and 175 open tech plus 65 advisor reqs make labor recovery the headline ROI; after the June 2024 CDK outage, IT will demand a certified CDK integration and a fallback before any rollout.'],
              ['Estimated Spend', '$14M-$30M/yr service software, est. from 145 US rooftops x per-rooftop DMS spend.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Enterprise integration play: prove labor-recovery ROI at a region, with a CDK integration commitment, before a corporate rollout.'],
              ['Key Evidence', '259 rooftops on CDK; 175 open tech + 65 advisor reqs; Korean + luxury roster.'],
              ['Urgency Level', 'COLD'],
              ['Target Buyer', 'Buyer: National Aftersales Director. Champion: Regional Aftersales Director.'],
              ['Messaging Angle', '"With 175 open techs, automate the documentation off your existing crew and reclaim advisor packet-review hours across 259 stores."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: [
          '259 rooftops, 145 US and 114 UK per the 2024 10-K (SEC)',
          'Record FY2024 revenue of $19.9B (Group1corp)',
          '175 open technician plus 65 advisor reqs (Group 1 Careers)'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: '259 rooftops puts this at the top of the 100-plus opportunity band; the open-req volume signals an acute, immediate labor problem to solve.',
        competitive_distress: 4,
        distress_reason: 'Korean (Genesis/Hyundai/Kia) plus luxury (BMW/MB/Audi/JLR/Lexus) within a 22-brand roster drives meaningful warranty mix, though the broad mainstream base keeps it below the premium-only groups.',
        distress_signals: [
          'Korean franchises (Genesis/Hyundai/Kia) require part-level photo documentation',
          'Luxury brands (BMW/MB/Audi/JLR) carry heavy warranty documentation'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 3,
        residency_reason: 'Runs CDK across US ops with no glasses-based MPI automation disclosed, so the tooling gap is real but entry is integration-led; CDK gates third-party access and was the June 2024 outage vendor, raising the table-stakes bar.',
        residency_signals: [
          'CDK DMS on US ops with no glasses automation (Group1corp)',
          'CDK gates integration, the table-stakes blocker per CONTEXT'
        ],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Group 1 has the most acute labor signal in the set: 175 open technician and 65 advisor reqs across 259 CDK rooftops, making labor recovery the headline ROI, though the CDK gate keeps it COLD and integration-led. The motion is a regional labor-recovery proof with a CDK integration commitment ahead of rollout. Sell labor recovery to the aftersales buyer. <strong>Buyer:</strong> National Aftersales Director. <strong>Champion:</strong> Regional Aftersales Director. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── West Herr Auto Group
      {
        name: 'West Herr Auto Group',
        domain: 'westherr.com',
        subtitle: 'Largest NY group; equipped ~650 techs with iPhones for video MPIs, the warmest displacement signal.',
        tier: 'med',
        tags: [
          { t: 'iPhone video MPI at scale', c: 'stack', tip: 'Equipped ~650 techs with iPhones for video MPIs (CBT News, Dec 2025)' },
          { t: 'CDK', c: 'neutral', tip: 'CDK DMS' },
          { t: 'Hiring: tech/express/advisor', c: 'neutral' }
        ],
        overview: 'West Herr Auto Group is the largest dealer group in New York State, running 41 rooftops out of Blasdell, NY with ~3,000 employees and ~650 service techs. Its 24-brand roster is domestic and mainstream-heavy with BMW, Mercedes-Benz, Audi, Hyundai, and Kia. Most importantly, CBT News (Dec 2025) confirms West Herr equipped ~650 techs with iPhones for video MPIs, the clearest in-market displacement signal in the set: replace the phone with hands-free glasses.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (24 brands, largest in NY)'],
              ['Rooftops', '41'],
              ['Employees', '~3,000 (~650 service techs)'],
              ['DMS Provider', 'CDK'],
              ['Digital Maturity', 'High. Equipped ~650 techs with iPhones for video MPIs at scale (CBT News, Dec 2025).']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture; already runs phone-based video MPI at scale.'],
              ['Current Stack', 'CDK DMS plus ~650 iPhones used for video MPIs across the bays (CBT News, Dec 2025).'],
              ['Pain Points', 'The iPhone video-MPI program proves intent but leaves advisor labor and a hands-on, greasy-glove workflow on the table; lost upsell margin and warranty documentation still depend on a tech juggling a phone instead of working hands-free.'],
              ['Estimated Spend', '$4.1M-$9.5M/yr service software, est. from 41 rooftops x per-rooftop DMS spend plus a ~650-device video-MPI program.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Warmest displacement in the set: position hands-free glasses as the upgrade to the existing ~650-iPhone video-MPI program.'],
              ['Key Evidence', 'Equipped ~650 techs with iPhones for video MPIs (CBT News, Dec 2025); 41 rooftops on CDK.'],
              ['Urgency Level', 'COLD'],
              ['Target Buyer', 'Buyer: VP of Fixed Operations. Champion: Director of Service Operations.'],
              ['Messaging Angle', '"You already proved video MPI works with 650 iPhones; now take the phone out of greasy hands and let glasses capture and quote automatically."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: [
          'Equipped ~650 service techs with iPhones for video MPIs (CBT News, Dec 2025)',
          'Largest dealer group in New York State with 41 rooftops (West Herr homepage)',
          'Active technician, express, and advisor hiring across the group'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: '41 rooftops sits in the 30-49 opportunity band, with ~650 techs already proving the video-MPI use case Lantern upgrades.',
        competitive_distress: 3,
        distress_reason: 'A domestic and mainstream-heavy 24-brand roster carries moderate warranty mix; BMW/MB/Audi plus Hyundai/Kia add documentation load, but the base is lighter than the premium-only groups.',
        distress_signals: [
          'Luxury and Korean franchises (BMW/MB/Audi + Hyundai/Kia) add documentation load',
          'Domestic/mainstream-heavy base keeps overall warranty mix moderate'
        ],
        distress_signal_types: ['negative', 'positive'],
        data_residency: 5,
        residency_reason: 'Verified wow-shape displacement: CBT News (Dec 2025) confirms West Herr equipped ~650 techs with iPhones for video MPIs, an in-market video-MPI program at scale. That is the warmest displacement signal in the set, since Lantern simply replaces the phone with hands-free glasses and removes the workflow interruption.',
        residency_signals: [
          'Verified ~650-iPhone video-MPI program at scale (CBT News, Dec 2025)',
          'Phone form factor is exactly the hands-on workflow Lantern replaces'
        ],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'West Herr is the warmest displacement in the set: CBT News confirms it equipped ~650 techs with iPhones for video MPIs, proving the use case and exposing the greasy-phone workflow Lantern removes. The motion is an upgrade pitch, glasses replacing the phones, proven regionally then rolled across 41 stores; COLD reflects the CDK gate, not fit. <strong>Buyer:</strong> VP of Fixed Operations. <strong>Champion:</strong> Director of Service Operations. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── Go Auto
      {
        name: 'Go Auto',
        domain: 'goauto.ca',
        subtitle: 'Korean-heavy 76-rooftop Canadian group already running video walkarounds, a digital-ready buyer.',
        tier: 'med',
        tags: [
          { t: 'Korean-concentrated', c: 'stack', tip: 'Hyundai/Kia/Genesis + Mercedes-Benz' },
          { t: 'Video walkarounds + own app', c: 'neutral', tip: 'DIY video walkarounds + Go Auto App' },
          { t: 'Hiring: service roles', c: 'neutral' }
        ],
        overview: 'Go Auto is a family-owned Canadian group running 76 North American rooftops out of Edmonton, AB with ~5,500 employees. Its compact 5-brand core is Korean-concentrated (Hyundai, Kia, Genesis) plus Mercedes-Benz, a heavy photo-every-part burden shape. It already runs DIY video walkarounds and its own Go Auto App, marking a digital-ready buyer. Having entered the US in 2023, it is scaling fast, making it a strong enterprise target with low behavior-change friction.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (Korean-concentrated)'],
              ['Rooftops', '76 (North America)'],
              ['Employees', '~5,500'],
              ['DMS Provider', 'Not disclosed'],
              ['Digital Maturity', 'High. Runs DIY video walkarounds and a proprietary Go Auto App (Go Auto homepage).']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture across a Korean-heavy service network.'],
              ['Current Stack', 'DIY video walkarounds plus the proprietary Go Auto App; DMS not disclosed.'],
              ['Pain Points', 'Advisor labor and warranty short-pay leakage are margin recoverable across 76 stores; the Korean concentration drives a heavy photo-every-part burden, and the DIY video walkarounds are manual and inconsistent versus an automated hands-free capture.'],
              ['Estimated Spend', '$7.6M-$17M/yr service software, est. from 76 rooftops x per-rooftop DMS spend plus a proprietary app program.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land a Korean flagship on a pilot, position glasses as the automated upgrade to DIY video walkarounds, then ride US expansion to scale.'],
              ['Key Evidence', 'Korean-concentrated roster (heavy burden); already runs video walkarounds + own app; 76 rooftops and scaling in the US.'],
              ['Urgency Level', 'COLD'],
              ['Target Buyer', 'Buyer: Fixed Operations Director. Champion: Fixed Operations Director, Region.'],
              ['Messaging Angle', '"You already do video walkarounds by hand; let glasses capture the Korean part-level evidence and quote automatically, in any language."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: [
          'Reached 76 dealerships, adding five US stores in Dec 2025 (Car Dealership Guy News)',
          'Fourth 2025 acquisition (Heninger Toyota) and a $210M sale-leaseback (W. P. Carey)',
          'Korean-concentrated roster driving a heavy photo-every-part burden'
        ],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: '76 rooftops sits in the 50-99 opportunity band, with fast US expansion creating repeated rollout openings.',
        competitive_distress: 4,
        distress_reason: 'Korean-concentrated core (Hyundai/Kia/Genesis) drives a heavy photo-every-part documentation burden; the compact 5-brand roster plus Mercedes-Benz keeps the franchise count narrow but the per-claim load high.',
        distress_signals: [
          'Korean franchises (Hyundai/Kia/Genesis) require a photo of every replaced part',
          'Compact roster concentrates volume into high-burden Korean service work'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 2,
        residency_reason: 'Already runs DIY video walkarounds and a proprietary Go Auto App, so it is a digital-ready buyer, but those are manual home-grown tools rather than an entrenched vendor, an integration-and-upgrade motion more than a rip-and-replace.',
        residency_signals: [
          'DIY video walkarounds plus proprietary Go Auto App in place (Go Auto homepage)',
          'Home-grown tooling signals digital readiness but manual, inconsistent capture'
        ],
        residency_signal_types: ['negative', 'positive'],
        gtm_thesis: 'Go Auto is a digital-ready Korean-heavy buyer: 76 rooftops on a photo-every-part roster, already doing DIY video walkarounds and running its own app, scaling fast into the US. The motion positions glasses as the automated upgrade to manual walkarounds, landing a Korean flagship then riding US expansion; COLD reflects the enterprise cycle. <strong>Buyer:</strong> Fixed Operations Director. <strong>Champion:</strong> Fixed Operations Director, Region. <strong>NOT</strong> the DMS-incumbent relationship.'
      },

      // ── AutoCanada
      {
        name: 'AutoCanada',
        domain: 'autocan.ca',
        subtitle: 'Public Canadian group running CDK digital inspections at scale, mid-transformation and budget-scrutinized.',
        tier: 'low',
        tags: [
          { t: 'Luxury + Korean', c: 'stack', tip: 'BMW/MB/Audi/Porsche + Hyundai/Kia' },
          { t: 'CDK Digital Vehicle Inspections', c: 'neutral', tip: 'Modern digital-inspection stack on CDK' },
          { t: 'Public (TSX:ACQ)', c: 'neutral' }
        ],
        overview: 'AutoCanada is a public Canadian group (TSX:ACQ) running 64 Canadian rooftops (82 total at YE2024, with the US "Leader" segment being divested) out of Edmonton, AB. Its 23-brand roster includes luxury (BMW, Mercedes-Benz, Audi, Porsche) plus Korean (Hyundai/Kia). It already runs CDK Digital Vehicle Inspections at scale, an integration-led motion, but it is mid-divestiture and transformation, so budget scrutiny tempers urgency, placing it as a low-tier stretch target.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Franchised auto dealer group (23 brands, public)'],
              ['Rooftops', '64 Canada (82 total YE2024; US segment divesting)'],
              ['Employees', 'Rooftop-distributed'],
              ['DMS Provider', 'CDK'],
              ['Digital Maturity', 'High. Runs CDK Digital Vehicle Inspections at scale per the 2024 Annual Information Form.']
            ]
          },
          {
            title: 'Service Footprint',
            rows: [
              ['Use Cases', 'MPI and ASR documentation, customer video upsell, warranty-evidence capture; already runs digital vehicle inspections.'],
              ['Current Stack', 'CDK DMS with CDK Digital Vehicle Inspections (2024 Annual Information Form).'],
              ['Pain Points', 'Advisor labor cost and warranty short-pay leakage are recoverable profit, but a mid-divestiture transformation puts every software line under budget scrutiny; the existing CDK digital inspections also raise the bar for displacement.'],
              ['Estimated Spend', '$6.4M-$15M/yr service software, est. from 64 Canadian rooftops x per-rooftop DMS spend.']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Patient integration play: wait for transformation to settle, then position glasses as the hands-free upgrade to CDK digital inspections with a clear ROI case.'],
              ['Key Evidence', 'Runs CDK Digital Vehicle Inspections at scale; 64 Canadian rooftops; mid-divestiture transformation under budget scrutiny.'],
              ['Urgency Level', 'COLD'],
              ['Target Buyer', 'Buyer: VP Fixed Operations. Champion: Senior Director of Fixed Operations.'],
              ['Messaging Angle', 'Lead with ROI under scrutiny: "You already digitized inspections on CDK; glasses make them hands-free and recover warranty dollars without adding headcount during the transformation."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: [
          '64 Canadian rooftops, 82 total at YE2024 (Q4 2024 MD&A)',
          'Mid-divestiture transformation reshaping the portfolio (2024 AIF)',
          'Luxury plus Korean roster across 23 brands'
        ],
        signal_types: ['positive', 'positive', 'negative'],
        opp_reason: '64 Canadian rooftops sits in the 50-99 opportunity band, though the divestiture and budget scrutiny temper near-term urgency.',
        competitive_distress: 3,
        distress_reason: 'Luxury (BMW/MB/Audi/Porsche) plus Korean (Hyundai/Kia) within a 23-brand roster drives meaningful warranty mix and documentation load across the franchise base.',
        distress_signals: [
          'Luxury franchises (BMW/MB/Audi/Porsche) carry heavy warranty documentation',
          'Korean franchises (Hyundai/Kia) require part-level photo documentation'
        ],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 2,
        residency_reason: 'Already runs CDK Digital Vehicle Inspections at scale, a capable modern stack, so this is an integration-and-upgrade motion rather than greenfield; the bar to dislodge an in-place digital-inspection tool is higher.',
        residency_signals: [
          'Modern CDK Digital Vehicle Inspections stack in place (2024 AIF)',
          'A capable in-place digital-inspection tool raises the displacement bar'
        ],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'AutoCanada is an integration-led stretch target: 64 CDK rooftops already running digital vehicle inspections on a luxury-and-Korean roster, but mid-divestiture budget scrutiny keeps it low-tier and COLD. The motion is patient: wait for the transformation to settle, then pitch glasses as the ROI-positive upgrade to CDK inspections. <strong>Buyer:</strong> VP Fixed Operations. <strong>Champion:</strong> Senior Director of Fixed Operations. <strong>NOT</strong> the DMS-incumbent relationship.'
      }

    ]
  }

];


/* ────────────────────────────────────────────────────────────────────────
   CONTACT_MAP — per-company warm-intro mapping
   ──────────────────────────────────────────────────────────────────────── */
const CONTACT_MAP = {
  // Pipeline
  "Prestige Volvo (Prestige Collection)": [],
  "Steele Auto Group": [],
  "Viva & Fiesta Auto Group": [],

  // Mid-Market
  "indiGO Auto Group": [
    { name: "Ralph Rodriguez", title: "Fixed Ops Director", type: "business", linkedin: "https://linkedin.com/in/ralph-rodriguez-03248744", connections: [] },
    { name: "Joseph Beneke", title: "Service and Parts Director", type: "business", linkedin: "https://linkedin.com/in/joseph-beneke-60038ba4", connections: [] }
  ],
  "Fields Auto Group": [
    { name: "Brian Cullinan", title: "Director of Fixed Operations (all stores + 2 collision centers)", type: "business", linkedin: "https://linkedin.com/in/brian-cullinan-a558ba37", connections: [] }
  ],
  "Krause Auto Group": [
    { name: "John Rowland", title: "VP of Fixed Operations", type: "business", linkedin: "https://linkedin.com/in/john-rowland-34941bb", connections: [] },
    { name: "Eric Ford", title: "Director of Fixed Operations", type: "business", linkedin: "https://linkedin.com/in/eric-ford-6b485563", connections: [] }
  ],
  "Castle Automotive Group": [
    { name: "Jim McLaughlin", title: "VP of Fixed Operations & Customer Experience", type: "business", linkedin: "https://linkedin.com/in/jim-mclaughlin-73550b1b0", connections: [] },
    { name: "Hayley Navarro", title: "Regional Fixed Operations Director", type: "business", linkedin: "https://linkedin.com/in/hayley-navarro-3860611bb", connections: [] }
  ],

  // Enterprise
  "Penske Automotive Group": [
    { name: "Steve St. Denis", title: "Fixed Operations Director, Central Region", type: "business", linkedin: "https://linkedin.com/in/steve-st-denis-28019b13", connections: [] }
  ],
  "Ed Napleton Automotive Group": [
    { name: "Ed Carlson", title: "Corporate Fixed Operations Director", type: "business", linkedin: "https://linkedin.com/in/ed-carlson-04748424", connections: [] },
    { name: "Sean Przychodzen", title: "Regional Fixed Operations Director", type: "business", linkedin: "https://linkedin.com/in/sean-przychodzen-19004512b", connections: [] }
  ],
  "Group 1 Automotive": [
    { name: "Roy Boitnott", title: "National Aftersales Director", type: "business", linkedin: "https://linkedin.com/in/roy-boitnott-879a7924", connections: [] },
    { name: "Mike Patrick", title: "Regional Aftersales Director (CA/NM/El Paso)", type: "business", linkedin: "https://linkedin.com/in/mike-patrick-7400a84b", connections: [] }
  ],
  "West Herr Auto Group": [
    { name: "Jay Galligan", title: "VP of Fixed Operations", type: "business", linkedin: "https://linkedin.com/in/jay-galligan-15050a25", connections: [] },
    { name: "Thomas Druzynski", title: "Director of Service Operations", type: "business", linkedin: "https://linkedin.com/in/thomas-druzynski-400aa980", connections: [] }
  ],
  "Go Auto": [
    { name: "Michael King", title: "Fixed Operations Director", type: "business", linkedin: "https://linkedin.com/in/michael-king-137b0190", connections: [] },
    { name: "Michael Oakeley", title: "Fixed Operations Director", type: "business", linkedin: "https://linkedin.com/in/mikeoakeley", connections: [] }
  ],
  "AutoCanada": [
    { name: "Gary McDonald", title: "VP Fixed Operations", type: "business", linkedin: "https://linkedin.com/in/gary-mcdonald-a8bb9083", connections: [] },
    { name: "Ken Crockett", title: "Senior Director of Fixed Operations", type: "business", linkedin: "https://linkedin.com/in/ken-crockett-a79a8aa5", connections: [] }
  ]
};


/* ────────────────────────────────────────────────────────────────────────
   COMPANY_SOURCES — primary references per company
   ──────────────────────────────────────────────────────────────────────── */
const COMPANY_SOURCES = {
  "Prestige Volvo (Prestige Collection)": [
    { name: "Car Dealership Guy Podcast #59 — Matt Haiken, President, Prestige Collection ($300M rev, #1 Volvo)", url: "https://dealershipguy.com/59-becoming-a-1-volvo-dealership-300m-in-revenue-from-throwaway-brands-the-great-ev-recessio/" },
    { name: "Lincoln of Englewood — part of the Prestige Collection", url: "https://www.lincolnofenglewood.com/welcome-to-lincoln-of-englewood.htm" }
  ],
  "Steele Auto Group": [
    { name: "Steele Auto Group — Our Story (HQ Dartmouth NS, founded 1990)", url: "https://steeleauto.com/about/steeleauto" },
    { name: "Steele Auto Group — Dealerships (32 brands, 62 locations)", url: "https://steeleauto.com/about/dealerships" },
    { name: "North America Outlook — Steele Auto Group: Setting the Pace in Canada (TX expansion)", url: "https://www.northamericaoutlookmag.com/retail/steele-auto-group-setting-the-pace-in-canada" }
  ],
  "Viva & Fiesta Auto Group": [
    { name: "El Paso Inc. — Viva & Fiesta Auto Group buys Toyota of Las Cruces (Jamie Dick; brand list)", url: "https://www.elpasoinc.com/news/local_news/el-paso-auto-group-buys-toyota-of-las-cruces/article_30a34a4a-6053-11ec-9156-0712e090a38d.html" },
    { name: "Viva Auto Group — Locations (9 franchise rooftops; El Paso TX / Las Cruces NM)", url: "https://vivaautogroup.com/locations" },
    { name: "KVIA — Viva & Fiesta Auto Group acquires Vescovo Toyota of Las Cruces", url: "https://kvia.com/news/business-technology/2021/12/13/el-pasos-viva-fiesta-auto-group-acquires-vescova-toyota-of-las-cruces/" }
  ],
  "indiGO Auto Group": [
    { name: "indiGO Auto Group — About (30 franchised dealerships; Pon ownership)", url: "https://www.indigoautogroup.com/about-indigo-auto-group.html" },
    { name: "Pon — indiGO Auto Group portfolio (parent-company record)", url: "https://pon.com/en/activities/automotive/luxury-cars/indigo-auto-group/" },
    { name: "Automotive News — IndiGO buys MB/Genesis/Hyundai of Palm Springs (Nov 2025)", url: "https://www.autonews.com/retail/mergers-acquisitions/an-indigo-buys-mercedes-genesis-hyundai-1121/" },
    { name: "Automotive News — IndiGO fully owned by Pon Holdings (2019)", url: "https://www.autonews.com/mobility-report/indigo-now-fully-owned-dutch-company/" },
    { name: "indiGO Auto Group — Locations directory", url: "https://www.indigoautogroup.com/locations.html" }
  ],
  "Fields Auto Group": [
    { name: "Fields Auto Group — Corporate culture page (~three dozen franchises)", url: "https://www.fieldsauto.com/fields--corporate-culture.htm" },
    { name: "Fields Auto Group — Locations directory", url: "https://www.fieldsauto.com/locations/index.htm" },
    { name: "CBT News — Lithia acquires two stores from Fields Auto Group (2021)", url: "https://www.cbtnews.com/lithia-acquires-two-stores-from-fields-auto-group/" },
    { name: "Kerrigan Advisors — Represents Fields in CJDR Sanford & Land Rover Orlando sale", url: "https://www.kerriganadvisors.com/in-the-news/kerrigan-advisors-represents-the-fields-auto-group-in-sale-of-cjdr-sanford-and-land-rover-orlando" }
  ],
  "Krause Auto Group": [
    { name: "Krause Auto Group — Our Group (28 dealerships / 1,800 employees)", url: "https://www.krauseautogroup.com/our-group" },
    { name: "Automotive News — Krause buys Nissan/Genesis dealerships in $110M deal (2024)", url: "https://www.autonews.com/dealers/krause-auto-buys-nissan-genesis-car-dealerships-110m-deal/" },
    { name: "CBT News — Krause Auto $110M landmark acquisition", url: "https://www.cbtnews.com/krause-auto-makes-landmark-deal-with-110-million-acquisition/" },
    { name: "Automotive News — 2026 Top 150 Dealership Groups (Krause 29 stores)", url: "https://www.autonews.com/retail/top-150-dealership-groups/2026/" }
  ],
  "Castle Automotive Group": [
    { name: "Castle Automotive Group — Ranks #109 in 2025 Automotive News Top 150 (18 locations / 25 franchises)", url: "https://castleautomotivegroup.com/castle-automotive-group-ranks-top-150-dealership-groups/" },
    { name: "Castle Automotive Group — Corporate homepage (18 locations / 25 franchises, IL & Indiana)", url: "https://castleautomotivegroup.com/" },
    { name: "Castle Automotive Group — Acquires Castle Hyundai of Oak Lawn, sells Indiana Ford", url: "https://castleautomotivegroup.com/castle-automotive-group-new-acquisition-and-strategic-sale/" },
    { name: "Castle Automotive Group — Our Company & Culture (history)", url: "https://castleautomotivegroup.com/our-company-culture/" },
    { name: "Automotive News — 2025 Top 150 Dealership Groups (Castle #109)", url: "https://www.autonews.com/retail/top-150-dealership-groups/2026/" },
    { name: "CBT News — dealership fixed-ops technology coverage", url: "https://www.cbtnews.com/" }
  ],
  "Penske Automotive Group": [
    { name: "SEC — Penske 2024 Form 10-K (353 franchised: 148 US / 205 non-US; 72% premium revenue)", url: "https://www.sec.gov/Archives/edgar/data/1019849/000101984925000022/pag-20241231.htm" },
    { name: "Penske Investors — Q4/FY2024 results (Bloomfield Hills, NYSE:PAG)", url: "https://investors.penskeautomotive.com/news/news-details/2025/PENSKE-AUTOMOTIVE-GROUP-REPORTS-FOURTH-QUARTER-AND-FULL-YEAR-2024-RESULTS/default.aspx" },
    { name: "Reynolds & Reynolds — DMS agreement extended with Penske (ERA-IGNITE)", url: "https://www.reyrey.com/company/media-center/news-releases/reynolds-and-reynolds-and-penske-automotive-group-extend" },
    { name: "Digital Dealer — Reynolds extends DMS agreement with Penske", url: "https://digitaldealer.com/news/reynolds-and-reynolds-extends-agreement-with-penske-automotive-group/54167/" },
    { name: "Automotive News — 2026 Top 150 Dealership Groups (Penske #2)", url: "https://www.autonews.com/retail/top-150-dealership-groups/2026/" }
  ],
  "Ed Napleton Automotive Group": [
    { name: "BBB — Ed Napleton Automotive Group profile (57 locations; founded 1977)", url: "https://www.bbb.org/us/il/oakbrook-terrace/profile/new-car-dealers/ed-napleton-automotive-group-0654-16446" },
    { name: "Ed Napleton — Company history (74 franchises, 7 states)", url: "https://www.ednapleton.com/ed-napleton-auto-group-history.htm" },
    { name: "Dealertrack (Cox) — Napleton DMS case study (Dealertrack + Xtime + VinSolutions)", url: "https://us.dealertrack.com/wp-content/uploads/sites/2/2024/03/napleton-automotive-case-study.pdf" },
    { name: "Dealertrack — Napleton testimonial page", url: "https://us.dealertrack.com/content/dealertrack/en/dealer-management-solutions/dms-testimonial/napleton-auto-group.html" },
    { name: "Ed Napleton — Locations directory", url: "https://www.ednapleton.com/locations/index.htm" }
  ],
  "Group 1 Automotive": [
    { name: "SEC — Group 1 Automotive 2024 Form 10-K (145 US + 114 UK dealerships)", url: "https://www.sec.gov/Archives/edgar/data/1031203/000103120325000021/a2024_10kxasxfiledx2x14x25.pdf" },
    { name: "Group1corp — Q4/FY2024 results (259 dealerships, NYSE:GPI)", url: "https://www.group1corp.com/2025-01-29-Group-1-Automotive-Reports-2024-Fourth-Quarter-Financial-Results-and-Record-Full-Year-Revenues-of-19-9-billion" },
    { name: "Group1corp — Statement on CDK cybersecurity incident (US ops on CDK DMS)", url: "https://www.group1corp.com/2024-06-24-Group-1-Automotive-Provides-Statement-on-CDK-Cybersecurity-Incident" },
    { name: "Group 1 Careers — Service Technicians listings (175 tech + 65 advisor)", url: "https://www.group1careers.com/results.html?category=Service+Technicians" }
  ],
  "West Herr Auto Group": [
    { name: "West Herr — Homepage (41 dealerships, largest in NY State)", url: "https://westherr.com/" },
    { name: "CBT News — West Herr equipped 650 techs with iPhones for video MPIs (Druzynski interview, Dec 2025)", url: "https://www.cbtnews.com/how-video-mpis-are-building-trust-between-dealerships-and-customers-tom-druzynski-west-herr-automotive-group/" },
    { name: "CBT News — Driving efficiency in dealership service operations, West Herr", url: "https://www.cbtnews.com/driving-efficiency-in-dealership-service-operations-tom-druzynski-west-herr-automotive-group/" },
    { name: "Car Dealership Guy News — West Herr in-house fintech inside RouteOne/Dealertrack toolkits", url: "https://news.dealershipguy.com/p/how-west-herr-auto-group-s-in-house-fintech-solution-is-tackling-the-affordability-crunch-2025-08-07" }
  ],
  "Go Auto": [
    { name: "Car Dealership Guy News — Go Auto reaches 76 dealerships (Dec 2025)", url: "https://news.dealershipguy.com/p/canadian-dealer-group-go-auto-adds-five-u-s-stores-in-washington-california-2025-12-15" },
    { name: "Go Auto — Corporate homepage (70+ dealerships, 32 brands; Edmonton)", url: "https://www.goauto.ca/" },
    { name: "Auto Remarketing — Go Auto's fourth 2025 acquisition (Heninger Toyota)", url: "https://www.autoremarketing.com/arcanada/go-auto-grows-again-with-its-fourth-dealership-acquisition-of-2025/" },
    { name: "W. P. Carey — Go Auto sale-leaseback case study ($210M, 14 dealerships)", url: "https://www.wpcarey.com/portfolio/case-study-library/goauto" }
  ],
  "AutoCanada": [
    { name: "AutoCanada Investors — 2024 Annual Information Form (82 franchised; CDK DMS; CDK outage)", url: "https://investors.autocan.ca/wp-content/uploads/2025/04/AutoCanada_AIF.pdf" },
    { name: "AutoCanada Investors — Q4 2024 MD&A (64 Canadian + 17 US dealerships)", url: "https://investors.autocan.ca/wp-content/uploads/2025/03/Q4-2024-MDNA-Final.pdf" },
    { name: "AutoCanada Investors — Q4 2024 results (TSX:ACQ; Edmonton)", url: "https://investors.autocan.ca/2025/03/autocanada-announces-fourth-quarter-results-2024/" },
    { name: "AutoCanada — Corporate site (64 Canadian dealerships)", url: "https://autocan.ca/" }
  ]
};


/* ────────────────────────────────────────────────────────────────────────
   JOB_LISTINGS — Hiring evidence per company
   ──────────────────────────────────────────────────────────────────────── */
const JOB_LISTINGS = {
  // Pipeline partners — light or empty
  "Prestige Volvo (Prestige Collection)": [],
  "Steele Auto Group": [],
  "Viva & Fiesta Auto Group": [],

  // Mid-Market
  "indiGO Auto Group": [
    { title: "Porsche Service Technician", team: "Posting", techs: "Service Technician, ultra-luxury MPI, fixed-ops", url: "https://indigoautogroup.hrmdirect.com/employment/job-openings.php?search=true", date: "Active 2026" },
    { title: "Mercedes-Benz Service Technician", team: "Posting", techs: "Master Technician, warranty documentation, fixed-ops", url: "https://indigoautogroup.hrmdirect.com/employment/job-openings.php?search=true", date: "Active 2026" },
    { title: "Service Advisor", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://indigoautogroup.hrmdirect.com/employment/job-openings.php?search=true", date: "Active 2026" },
    { title: "Express Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://indigoautogroup.hrmdirect.com/employment/job-openings.php?search=true", date: "Active 2026" },
    { title: "Service & Parts Support", team: "Posting", techs: "Service Technician, parts, fixed-ops", url: "https://indigoautogroup.hrmdirect.com/employment/job-openings.php?search=true", date: "Active 2026" }
  ],
  "Fields Auto Group": [
    { title: "Porsche Service Technician", team: "Posting", techs: "Service Technician, luxury MPI, fixed-ops", url: "https://fieldsautogroup.hireology.careers/", date: "Active 2026" },
    { title: "Mercedes-Benz Service Technician", team: "Posting", techs: "Master Technician, warranty documentation, fixed-ops", url: "https://fieldsautogroup.hireology.careers/", date: "Active 2026" },
    { title: "Service Advisor", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://fieldsautogroup.hireology.careers/", date: "Active 2026" },
    { title: "Express Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://fieldsautogroup.hireology.careers/", date: "Active 2026" }
  ],
  "Krause Auto Group": [
    { title: "Service Technician (all levels)", team: "Posting", techs: "Service Technician, luxury MPI, fixed-ops", url: "https://careers.hireology.com/krauseautogroup", date: "Active 2026" },
    { title: "Service Advisor", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://careers.hireology.com/krauseautogroup", date: "Active 2026" },
    { title: "Nissan Service Technician", team: "Posting", techs: "Service Technician, warranty documentation, fixed-ops", url: "https://careers.hireology.com/krauseautogroup", date: "Active 2026" },
    { title: "Express Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://careers.hireology.com/krauseautogroup", date: "Active 2026" }
  ],
  "Castle Automotive Group": [
    { title: "Service Technician (all levels, $5K sign-on bonus)", team: "Posting", techs: "Service Technician, MPI, fixed-ops", url: "https://castleautomotivegroup.com/career-opportunities/technician/", date: "Active 2026" },
    { title: "Service Advisor", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://castleautomotivegroup.com/career-opportunities/technician/", date: "Active 2026" },
    { title: "Express Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://castleautomotivegroup.com/career-opportunities/technician/", date: "Active 2026" }
  ],

  // Enterprise
  "Penske Automotive Group": [
    { title: "Automotive Technician (BMW Austin)", team: "Posting", techs: "Service Technician, premium MPI, fixed-ops", url: "https://pagjobs.com/job-category/service-and-parts/jobs/", date: "Active 2026" },
    { title: "Flat Rate Technician (Toyota)", team: "Posting", techs: "Service Technician, warranty documentation, fixed-ops", url: "https://pagjobs.com/job-category/service-and-parts/jobs/", date: "Active 2026" },
    { title: "Service Advisor (Lexus of Orlando)", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://pagjobs.com/job-category/service-and-parts/jobs/", date: "Active 2026" },
    { title: "Express Service Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://pagjobs.com/job-category/service-and-parts/jobs/", date: "Active 2026" },
    { title: "Master Technician", team: "Posting", techs: "Master Technician, fixed-ops, warranty documentation", url: "https://pagjobs.com/job-category/service-and-parts/jobs/", date: "Active 2026" }
  ],
  "Ed Napleton Automotive Group": [
    { title: "Service Technician (Honda)", team: "Posting", techs: "Service Technician, MPI, fixed-ops", url: "https://careers.hireology.com/napletonautomotivegroup", date: "Active 2026" },
    { title: "Service Advisor (CDJR)", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://careers.hireology.com/napletonautomotivegroup", date: "Active 2026" },
    { title: "Assistant Service Manager (Aston Martin)", team: "Posting", techs: "Fixed Operations Director, warranty documentation, fixed-ops", url: "https://careers.hireology.com/napletonautomotivegroup", date: "Active 2026" },
    { title: "Express Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://careers.hireology.com/napletonautomotivegroup", date: "Active 2026" },
    { title: "Diesel Technician", team: "Posting", techs: "Diesel Technician, fixed-ops, warranty documentation", url: "https://careers.hireology.com/napletonautomotivegroup", date: "Active 2026" }
  ],
  "Group 1 Automotive": [
    { title: "Service Technician", team: "Posting", techs: "Service Technician, MPI, fixed-ops", url: "https://www.group1careers.com/results.html?category=Service+Technicians", date: "Active 2026" },
    { title: "Diesel / Medium-Duty Technician", team: "Posting", techs: "Diesel Technician, fixed-ops, warranty documentation", url: "https://www.group1careers.com/results.html?category=Service+Technicians", date: "Active 2026" },
    { title: "Service Advisor", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://www.group1careers.com/results.html?category=Service+Technicians", date: "Active 2026" },
    { title: "Express Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://www.group1careers.com/results.html?category=Service+Technicians", date: "Active 2026" },
    { title: "Shop Foreman", team: "Posting", techs: "Shop Foreman, fixed-ops, warranty documentation", url: "https://www.group1careers.com/results.html?category=Service+Technicians", date: "Active 2026" }
  ],
  "West Herr Auto Group": [
    { title: "Service Technician", team: "Posting", techs: "Service Technician, video MPI, fixed-ops", url: "https://westherrjobs.com/positions/", date: "Active 2026" },
    { title: "Express Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://westherrjobs.com/positions/", date: "Active 2026" },
    { title: "Quicklane Technician", team: "Posting", techs: "Express Technician, quicklane, fixed-ops", url: "https://westherrjobs.com/positions/", date: "Active 2026" },
    { title: "Service Advisor", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://westherrjobs.com/positions/", date: "Active 2026" },
    { title: "Service Manager", team: "Posting", techs: "Fixed Operations Director, fixed-ops, warranty documentation", url: "https://westherrjobs.com/positions/", date: "Active 2026" }
  ],
  "Go Auto": [
    { title: "Journeyman Service Technician", team: "Posting", techs: "Master Technician, video walkaround, fixed-ops", url: "https://www.goauto.ca/about/careers/service", date: "Active 2026" },
    { title: "Service Advisor", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://www.goauto.ca/about/careers/service", date: "Active 2026" },
    { title: "Service Manager", team: "Posting", techs: "Fixed Operations Director, fixed-ops, warranty documentation", url: "https://www.goauto.ca/about/careers/service", date: "Active 2026" },
    { title: "Apprentice Technician", team: "Posting", techs: "Service Technician, fixed-ops, MPI", url: "https://www.goauto.ca/about/careers/service", date: "Active 2026" },
    { title: "Express Lube Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://www.goauto.ca/about/careers/service", date: "Active 2026" }
  ],
  "AutoCanada": [
    { title: "Journeyman Automotive Technician", team: "Posting", techs: "Master Technician, CDK digital inspection, fixed-ops", url: "https://www.autocan.ca/ac-careers/", date: "Active 2026" },
    { title: "Service Advisor", team: "Posting", techs: "Service Advisor, packet review, fixed-ops", url: "https://www.autocan.ca/ac-careers/", date: "Active 2026" },
    { title: "Fixed Operations Director (Western Canada)", team: "Posting", techs: "Fixed Operations Director, fixed-ops, warranty documentation", url: "https://www.autocan.ca/ac-careers/", date: "Active 2026" },
    { title: "Express Technician", team: "Posting", techs: "Express Technician, fixed-ops, MPI", url: "https://www.autocan.ca/ac-careers/", date: "Active 2026" },
    { title: "Apprentice Technician", team: "Posting", techs: "Service Technician, fixed-ops, MPI", url: "https://www.autocan.ca/ac-careers/", date: "Active 2026" }
  ]
};


/* ────────────────────────────────────────────────────────────────────────
   RESIDENCY_MAP — vertical-specific axis-2 scoring (Tooling Gap)
   ──────────────────────────────────────────────────────────────────────── */
const RESIDENCY_MAP = {
  // Pipeline
  "Prestige Volvo (Prestige Collection)": { score: 4, reason: "Already displaced prior MPI workflow with the live Lantern MVP; open work is ROI depth, not displacement." },
  "Steele Auto Group": { score: 4, reason: "No public MPI-automation tool across ~60 rooftops; onboarding before a legacy layer is standardized." },
  "Viva & Fiesta Auto Group": { score: 3, reason: "No public MPI-automation tool; mass-market posture implies a real attach gap and easy displacement." },

  // Mid-Market
  "indiGO Auto Group": { score: 4, reason: "No public MPI tool; ~24 open service roles imply manual documentation, a greenfield install." },
  "Fields Auto Group": { score: 4, reason: "No public MPI tool; active service-tech hiring implies manual, labor-strained documentation." },
  "Krause Auto Group": { score: 4, reason: "No public MPI tool; acquisitive growth brings new stores onboard before legacy lock-in." },
  "Castle Automotive Group": { score: 4, reason: "No public MPI tool; active $5K tech bonus implies manual documentation under labor strain." },

  // Enterprise
  "Penske Automotive Group": { score: 3, reason: "Sophisticated Reynolds DMS, no glasses automation; integration-led entry, not a quick displacement." },
  "Ed Napleton Automotive Group": { score: 4, reason: "Confirmed Xtime phone-based MPI on Dealertrack (Cox case study); an explicit, displaceable legacy stack." },
  "Group 1 Automotive": { score: 3, reason: "CDK across US ops, no glasses automation; CDK gates integration, so entry is integration-led." },
  "West Herr Auto Group": { score: 5, reason: "Verified: equipped ~650 techs with iPhones for video MPIs (CBT News, Dec 2025), the clearest in-market displacement (replace the phone with hands-free glasses)." },
  "Go Auto": { score: 3, reason: "Runs DIY video walkarounds and a proprietary app; an integration-and-upgrade motion, not clean displacement." },
  "AutoCanada": { score: 3, reason: "Runs CDK Digital Vehicle Inspections at scale; sophisticated existing tool raises the displacement bar." }
};


/* ────────────────────────────────────────────────────────────────────────
   PRIMARY_TEAM — list used for warm-intro attribution
   ──────────────────────────────────────────────────────────────────────── */
const PRIMARY_TEAM = ['Alex Giles', 'Charles Holley', 'Gaby Lorenzi', 'Jason Gelman', 'Tobias', 'Ross', 'Cassie', 'Tanmaye', 'Ben', 'Hannah', 'Doug', 'Emily', 'Bridget', 'Shuman', 'Adam Piasecki'];


/* ────────────────────────────────────────────────────────────────────────
   Exports
   ──────────────────────────────────────────────────────────────────────── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ROW_SOURCES, SEGMENTS, CONTACT_MAP, COMPANY_SOURCES, RESIDENCY_MAP, JOB_LISTINGS, PRIMARY_TEAM };
}
