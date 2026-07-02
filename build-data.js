/* ============================================================================
   build-data.js  —  drive-data for the FDI v2 "behind the scenes" cinematic
   ----------------------------------------------------------------------------
   Every value here is REAL, pulled from this build's own artifacts:
     - config.json          -> founder, ICP, geo, excluded competitors
     - webset-spec.json      -> searchQuery, criteria, enrichments, scoring model
     - phase7-scored.json    -> per-axis scores, composites, sources, contacts
     - companies-10.json     -> curated list + design partners
   To regenerate for a new founder: rebuild this file from that founder's
   artifacts. The cinematic (build.html) is generic; only this data changes.
   ============================================================================ */
window.BUILD_DATA = {
  founder: {
    name: "Lantern",
    cobrand: "Primary",
    tagline: "The Intelligence Layer for Blue-Collar Work",
    oneLine: "AI safety glasses that automate the auto mechanic's inspection, MPI video, advisor review, and quoting, hands-free.",
    // amber accent, matched to index.html / dashboard.html
    logoSvg: '<svg viewBox="0 0 24 24"><circle cx="12" cy="2.9" r="1.3"/><path d="M12 4.2V5.6"/><path d="M6.4 9.4 12 5.4l5.6 4"/><path d="M7.6 9.4h8.8v9.2a1.2 1.2 0 0 1-1.2 1.2H8.8a1.2 1.2 0 0 1-1.2-1.2z"/><path d="M12 11.4v6.4"/><path d="M9 20.8h6"/></svg>'
  },

  // ---- Act 1: derive the ICP -------------------------------------------------
  icp: {
    read: [
      { label: "Founder memo & deck", meta: "the thesis, in their words" },
      { label: "Buyer & customer calls", meta: "fixed-ops directors, dealer principals" },
      { label: "Category diligence", meta: "video-MPI + warranty landscape" },
      { label: "Our own research", meta: "market mapping + comparable groups" }
    ],
    qualifier: [
      "Multi-rooftop franchised dealership group",
      "Runs its own service / fixed-ops departments",
      "Headquartered in the US or Canada",
      "Brand mix heavy in Korean or luxury-German franchises",
      "High warranty + photo-documentation burden"
    ],
    buyer: "Fixed-Operations Director / Service Director",
    geo: "United States + Canada"
  },

  // ---- context stats (shown briefly in the ICP act) --------------------------
  marketStats: [
    { num: "51% vs 24%", label: "Customers approve more work when they see photo/video proof of it (J.D. Power)." },
    { num: "~1.5 hrs/day", label: "Lost to paperwork per technician, time that never touches a vehicle." },
    { num: "5-7%", label: "Warranty claims short-paid because the documentation was not there." },
    { num: "30-70%", label: "Warranty's share of service revenue, the slice that lives on documentation." }
  ],

  // ---- Act 1: the process / stack — flex how methodical & tool-driven this is -
  // Tools are REAL and per-founder-vertical. Keep accurate; regenerate per build.
  process: {
    lead: "Every dashboard runs the same pipeline: our own ICP and signal design, a stack of best-in-class research tools, and Claude reasoning over the evidence, with an analyst checking each step.",
    foot: "Proprietary method · best-in-class tools · human-checked at every stage.",
    stages: [
      { stage: "Discover", tools: ["Exa Websets", "Parallel"],         method: "Semantic search and deep research across the live web, not a static list buy." },
      { stage: "Enrich",   tools: ["Clay", "SEC EDGAR", "trade press"], method: "Firmographics and primary records, every claim tiered and cited." },
      { stage: "Signal",   tools: ["Sumble", "job boards", "LinkedIn"], method: "Live hiring and role data, pulled per company." },
      { stage: "Score",    tools: ["Claude", "weighted model"],        method: "Reasoning over the evidence into one cited 0-to-100 score." },
      { stage: "Map",      tools: ["Affinity", "LinkedIn"],            method: "Primary's relationship graph surfaces the warm paths in." }
    ]
  },

  // ---- Act 2: invent the signals (the 4 custom axes) -------------------------
  axes: [
    { key: "warranty", name: "Warranty Burden", weight: 35, kind: "Founder-specific",
      measures: "The share of a group's brand mix that's Korean or luxury-German, where every part has to be photo-documented.",
      five: "Majority Korean/luxury-German rooftops, or a cited OEM photo/video mandate." },
    { key: "scale", name: "Opportunity", weight: 25, kind: "Standard",
      measures: "How many rooftops the group runs, the size of the service footprint Lantern can deploy across.",
      five: "25+ rooftops." },
    { key: "tooling", name: "Tooling Gap", weight: 25, kind: "Founder-specific",
      measures: "How dated or absent their current inspection tooling is, and how open the seat is for Lantern.",
      five: "Legacy or no MPI-video tooling plus a cited dissatisfaction signal." },
    { key: "hiring", name: "Service Hiring", weight: 15, kind: "Standard",
      measures: "Open service-technician and fixed-ops roles, a live read on where demand is outrunning staff.",
      five: "10+ open service / fixed-ops roles." }
  ],
  hiringRegex: "/(service|master|diesel|lube)\\s+(technician|advisor|manager)|fixed[\\s-]?ops|shop foreman|mechanic/i",

  // ---- Act 3: scan the universe ----------------------------------------------
  scan: {
    universeLabel: "franchised dealership rooftops, US + Canada",
    universe: 18000,          // rooftops in the addressable universe (cited on landing)
    groups: 460,              // multi-rooftop groups that clear the structural gate
    matched: 15,              // strongest matches pulled to enrich (MANY more qualify; 15 = the top set we surfaced)
    curated: 10,              // locked shortlist
    partners: 3,              // signed / onboarding design partners
    query: "Multi-location franchised dealer groups that run their own fixed-ops and carry a high-warranty brand mix.",
    excludes: ["Plasma", "TruVideo", "XTime", "Cox Automotive", "DealerFX", "AutoPoint",
               "MyKaarma", "CDK", "Reynolds & Reynolds", "Tekion", "Dealertrack",
               "single-rooftop dealers", "used-car-only lots"]
  },

  // ---- Act 4: pull the evidence (enrichment columns we scrape per company) ----
  enrichments: [
    { field: "Rooftops", src: "OEM dealer locators" },
    { field: "Franchised brands", src: "brand pages" },
    { field: "DMS provider", src: "case studies / filings" },
    { field: "MPI / video tool", src: "trade press" },
    { field: "Service hiring", src: "careers pages + job boards" },
    { field: "Fixed-ops buyer", src: "LinkedIn" },
    { field: "Ownership / status", src: "SEC filings / news" },
    { field: "Sources", src: "6-per-company, tiered" }
  ],

  // ---- Acts 4-6: the scored companies (real per-axis scores + composites) -----
  // score = composite (0-5) * 20, rounded. axes s = {warranty, scale, tooling, hiring} 0-5.
  companies: [
    { name: "Penske Automotive Group", seg: "Enterprise", tier: "high", score: 93,
      s: { warranty: 5.0, scale: 5.0, tooling: 3.5, hiring: 5.0 },
      rooftops: "148 US", hq: "Bloomfield Hills, MI", ownership: "Public · NYSE:PAG",
      brands: "Audi · BMW · Mercedes · Porsche · Land Rover · Genesis",
      tool: "Reynolds & Reynolds DMS, no glasses layer", hiring: "acute tech demand",
      wow: "72% of retail revenue from premium brands (10-K) = peak warranty burden.",
      contact: { name: "Steve St. Denis", title: "Fixed Operations Director, Central Region" },
      sources: [{ t: "SEC — Penske 2024 Form 10-K", tier: 1 }, { t: "Automotive News — 2026 Top 150 (Penske #2)", tier: 2 }], srcCount: 5 },

    { name: "indiGO Auto Group", seg: "Mid-Market", tier: "high", score: 90,
      s: { warranty: 5.0, scale: 4.0, tooling: 4.0, hiring: 5.0 },
      rooftops: "30", hq: "Houston, TX", ownership: "Private · Pon Holdings",
      brands: "Porsche · Bentley · Lamborghini · Rolls-Royce · Ferrari · Genesis",
      tool: "no public MPI-automation tool", hiring: "~24 open service roles",
      wow: "Near-entirely ultra-luxury + Korean roster = maximum part-level documentation burden.",
      contact: { name: "Ralph Rodriguez", title: "Fixed Ops Director" },
      sources: [{ t: "Pon — indiGO portfolio (parent record)", tier: 1 }, { t: "Automotive News — indiGO buys Palm Springs stores", tier: 2 }], srcCount: 5 },

    { name: "Ed Napleton Automotive Group", seg: "Enterprise", tier: "high", score: 89,
      s: { warranty: 4.5, scale: 4.5, tooling: 4.0, hiring: 5.0 },
      rooftops: "57", hq: "Oakbrook Terrace, IL", ownership: "Family-owned",
      brands: "Genesis · Hyundai · BMW · Mercedes · Porsche · Lexus · Maserati",
      tool: "Xtime MPI on Dealertrack = displaceable legacy stack", hiring: "15+ open service roles",
      wow: "Cox/Dealertrack case study confirms Xtime MPI in place, a legacy stack to displace.",
      contact: { name: "Ed Carlson", title: "Corporate Fixed Operations Director" },
      sources: [{ t: "Dealertrack (Cox) — Napleton DMS case study", tier: 1 }, { t: "BBB — Napleton profile (57 locations)", tier: 1 }], srcCount: 5 },

    { name: "Fields Auto Group", seg: "Mid-Market", tier: "high", score: 87,
      s: { warranty: 5.0, scale: 4.0, tooling: 4.0, hiring: 4.0 },
      rooftops: "~33", hq: "Northfield, IL", ownership: "Family-owned",
      brands: "BMW · Mercedes · Porsche · Bentley · JLR · Lamborghini · Rolls-Royce",
      tool: "no public MPI-automation tool", hiring: "active service-tech hiring",
      wow: "One of the most luxury-concentrated rosters in the set = maximum documentation finesse.",
      contact: { name: "Brian Cullinan", title: "Director of Fixed Operations" },
      sources: [{ t: "Fields — corporate culture page", tier: 1 }, { t: "Kerrigan Advisors — Fields store sale", tier: 2 }], srcCount: 4 },

    { name: "Group 1 Automotive", seg: "Enterprise", tier: "high", score: 86,
      s: { warranty: 4.0, scale: 5.0, tooling: 3.5, hiring: 5.0 },
      rooftops: "145 US", hq: "Houston, TX", ownership: "Public · NYSE:GPI",
      brands: "Genesis · Hyundai · BMW · Mercedes · Audi · JLR · Lexus",
      tool: "CDK DMS (hit by 2024 outage), integration play at scale", hiring: "175 tech + 65 advisor reqs",
      wow: "259 rooftops on CDK; 175 open technician reqs = acute service-labor scaling.",
      contact: { name: "Roy Boitnott", title: "National Aftersales Director" },
      sources: [{ t: "SEC — Group 1 2024 Form 10-K", tier: 1 }, { t: "Group 1 — CDK incident statement", tier: 1 }], srcCount: 4 },

    { name: "Krause Auto Group", seg: "Mid-Market", tier: "med", score: 85,
      s: { warranty: 5.0, scale: 3.5, tooling: 4.0, hiring: 4.0 },
      rooftops: "28", hq: "Alpharetta, GA", ownership: "Family-owned",
      brands: "Hyundai · Genesis · Mercedes · BMW · McLaren · Lamborghini · Koenigsegg",
      tool: "no public MPI tool", hiring: "6-10 open service roles",
      wow: "Korean + German-luxury + hypercar roster; fastest riser on the AN Top-150.",
      contact: { name: "John Rowland", title: "VP of Fixed Operations" },
      sources: [{ t: "Krause — Our Group (28 stores)", tier: 1 }, { t: "Automotive News — 2026 Top 150", tier: 1 }], srcCount: 4 },

    { name: "West Herr Auto Group", seg: "Enterprise", tier: "med", score: 85,
      s: { warranty: 3.5, scale: 4.0, tooling: 5.0, hiring: 5.0 },
      rooftops: "41", hq: "Blasdell, NY", ownership: "Private · largest in NY State",
      brands: "BMW · Mercedes · Audi · Hyundai · Kia (domestic-heavy 24-brand roster)",
      tool: "already runs phone-based video MPI at scale", hiring: "~650 service techs",
      wow: "VERIFIED: equipped ~650 techs with iPhones for video MPIs, replace the phone with hands-free glasses.",
      contact: { name: "Thomas Druzynski", title: "Director of Service Operations" },
      sources: [{ t: "CBT News — West Herr 650 techs on video MPI (Druzynski)", tier: 2 }, { t: "West Herr — homepage (41 dealerships)", tier: 1 }], srcCount: 4 },

    { name: "Go Auto", seg: "Enterprise", tier: "med", score: 84,
      s: { warranty: 4.5, scale: 4.5, tooling: 3.0, hiring: 5.0 },
      rooftops: "76", hq: "Edmonton, AB", ownership: "Family-owned · Canadian",
      brands: "Hyundai · Kia · Genesis · Mercedes (Korean-concentrated core)",
      tool: "DIY video walkarounds + own app, digital-ready", hiring: "scaling fast into US",
      wow: "Korean-heavy roster (peak photo-every-part burden) + already using video = digital-ready buyer.",
      contact: { name: "Michael King", title: "Fixed Operations Director" },
      sources: [{ t: "Car Dealership Guy — Go Auto reaches 76 stores", tier: 2 }, { t: "W. P. Carey — Go Auto sale-leaseback case study", tier: 1 }], srcCount: 4 },

    { name: "AutoCanada", seg: "Enterprise", tier: "low", score: 78,
      s: { warranty: 4.0, scale: 4.0, tooling: 3.0, hiring: 5.0 },
      rooftops: "64 Canada", hq: "Edmonton, AB", ownership: "Public · TSX:ACQ",
      brands: "BMW · Mercedes · Audi · Porsche · Hyundai · Kia (23-brand roster)",
      tool: "runs CDK Digital Vehicle Inspections, integration-led", hiring: "distributed hiring",
      wow: "Modern digital-inspection stack on CDK; mid-transformation = budget scrutiny.",
      contact: { name: "Gary McDonald", title: "VP Fixed Operations" },
      sources: [{ t: "AutoCanada — 2024 Annual Information Form", tier: 1 }, { t: "AutoCanada — Q4 2024 MD&A", tier: 1 }], srcCount: 4 },

    { name: "Castle Automotive Group", seg: "Mid-Market", tier: "low", score: 72,
      s: { warranty: 4.0, scale: 3.0, tooling: 4.0, hiring: 3.0 },
      rooftops: "17-18", hq: "Oakbrook Terrace, IL", ownership: "Private",
      brands: "Genesis · Hyundai · Kia + GM / Chrysler domestic",
      tool: "no public MPI tool", hiring: "$5K tech-hiring bonus, 3-6 roles",
      wow: "Korean burden + domestic claim-denial pain; cleanest small-group wedge for a fast pilot.",
      contact: { name: "Jim McLaughlin", title: "VP of Fixed Operations & CX" },
      sources: [{ t: "Castle — ranks #109 on AN Top 150", tier: 1 }, { t: "Castle — Hyundai Oak Lawn acquisition", tier: 1 }], srcCount: 4 }
  ],

  // ---- already-signed design partners (shown at the reveal) -------------------
  partners: [
    { name: "Prestige Volvo", status: "Signed · live with MVP", note: "Volvo #1-volume NJ, owner is also a Lantern advisor" },
    { name: "Steele Auto Group", status: "Onboarding", note: "~60 rooftops, Canada + Texas, full Korean + German-luxury mix" },
    { name: "Viva & Fiesta Auto Group", status: "Pipeline", note: "El Paso, TX, mass-market + Korean" }
  ],

  // ---- Act 7: the warm-path layer — WHO AT PRIMARY opens the door ------------
  // The value is PRIMARY's network, not the founder's. Connectors = the people /
  // relationships Primary has; each carries a warm path INTO shortlist accounts.
  // ILLUSTRATIVE for now — real named connectors + reach populate per build from
  // Primary's Affinity graph + team LinkedIn. `reach` uses company names exactly as
  // in `companies` above, so the map derives each account's score/tier/buyer by lookup.
  network: {
    hub: "Primary",
    illustrative: true,
    // Each connector OWNS a clean set of accounts (its sector on the map). This is a
    // partition, one primary warm path per account, so the layout never crosses.
    connectors: [
      { key: "pp", role: "Primary Partner",     accounts: ["Penske Automotive Group", "Group 1 Automotive", "AutoCanada"] },
      { key: "aa", role: "Auto-retail Advisor", accounts: ["indiGO Auto Group", "Fields Auto Group", "Krause Auto Group"] },
      { key: "pf", role: "Portfolio Founder",   accounts: ["Ed Napleton Automotive Group", "Castle Automotive Group"] },
      { key: "on", role: "Operator Network",    accounts: ["West Herr Auto Group", "Go Auto"] }
    ],
    // Secondary warm paths — shown as a ring + in the tooltip, NOT as a crossing edge.
    alsoReaches: {
      "Penske Automotive Group": ["on"],
      "Group 1 Automotive": ["pf"],
      "Fields Auto Group": ["on"],
      "West Herr Auto Group": ["aa"]
    }
  }
};
