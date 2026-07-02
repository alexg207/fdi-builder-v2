# FDI Builder v2 — the "show the work" experiment

Prototype for the next generation of Primary's Founder-Driven Intelligence deliverable.
Seeded from the Lantern Auto build (`alexg207/lantern-auto-fdi`) as the launching point.

## The idea

v1 hands a founder a finished dashboard. It doesn't show the machine behind it: how we
derive their ICP, invent the custom sales signals, scan the market, scrape the web and job
boards, and score every account. The craft is invisible, so the wow is muted.

v2 adds a **behind-the-scenes cinematic** — a live-feeling, animated walkthrough of the
build, driven by this founder's own real artifacts. The point is to impress founders by
showing them how we creatively problem-solve, not just handing over a black box.

## The flow

```
index.html  ──[ Watch how we built this ]──▶  build.html  ──▶  dashboard.html
 (landing)          (the new cinematic)          (the product)
```

- **`index.html`** — landing / cover page (v1, lightly rewired to feature the cinematic).
- **`build.html`** — NEW. The 7-act walkthrough. Pre-baked and deterministic (no live API
  calls), so it plays the same every time and never fails mid-demo. **Manual advance** — a
  clear "Continue" button moves you through at your own pace (`space`/`→` next, `←` back,
  `esc` skips straight to the dashboard, clickable progress rail jumps to any step).
  Reduced-motion aware.
- **`dashboard.html`** — the interactive intelligence dashboard (v1).
- **`build-data.js`** — the ONLY founder-specific file the cinematic reads. Extracted from
  `config.json`, `webset-spec.json`, `phase7-scored.json`, `companies-10.json`. Regenerate
  this per founder; `build.html` itself is generic.

## The 6 acts

1. **Derive the ICP** — memo + buyer calls + diligence collapse into a checkable qualifier.
2. **Invent the signals** — the 4 custom weighted axes (Warranty 35 / Opportunity 25 /
   Tooling 25 / Hiring 15), with Warranty Burden as the founder-specific WOW signal.
3. **Scan the universe** — count up the US+Canada dealer universe, exclude the vendors,
   funnel down to the accounts that clear all 5 criteria.
4. **Pull the evidence** — enrichment columns fill (rooftops, brands, DMS, MPI tooling,
   job-board hiring, named buyer) alongside a live citation feed. 6 tiered sources each.
5. **Score 0 to 100** — a hero account's axis scores blend on the founder's weights into a
   composite; tier derived from the score so chip and number can't disagree.
6. **Curate the shortlist** — the ranked 10 assemble, plus the signed design partners.
7. **The way in** — an interactive **network map** (radial SVG, adapted from the Lyric
   Network Map). **Primary** at center → **Primary's connectors** (partners, advisors,
   portfolio founders, operators) → the **warm paths they carry into the ICP accounts**.
   Accounts sized by score / colored by priority, each with its named fixed-ops buyer on
   hover; multiple-warm-path accounts get a ring. Drag / zoom / hover. The value is Primary's
   network reaching the shortlist — NOT the founder's. Illustrative for now; real connectors
   + reach populate per build from Primary's Affinity graph + team LinkedIn. Derives from
   `build-data.js` (`network.connectors[].reach` references company names). Now core FDI, as
   important as the dashboard.

Ends on a reveal → Enter the Dashboard. A persistent "Skip to dashboard" sits top-right the
whole way, so the walkthrough is never forced. `?act=N` deep-links straight to any step
(handy for demos and QA).

## Status

Experimentation branch of the FDI motion. Once the cinematic is proven with founders, the
generic `build.html` + a `build-data.js` generator step fold back into `fdi-template` and the
`generate-fdi-draft` skill as a new Phase (8c).
