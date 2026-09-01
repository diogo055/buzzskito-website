# BuzzSkito Website — Repo Structural Map

Repo: `C:/Users/buzzs/buzzskito-website` — Next.js App Router (no `src/` dir; routes live in `app/`, shared code in `lib/` and `components/`). 546 `page.tsx` files total; 1 API route.

## 1. Page inventory by type

| Type | Count | Notes |
|---|---|---|
| Blog posts | **358** (+1 index at `app/blog/page.tsx`) | One directory per post under `app/blog/<slug>/page.tsx`. No dynamic routes — every post is a hand-registered static page. |
| City/neighbourhood mosquito pages | **80** | 79 routes matching `*-mosquito-control` (e.g. `app/mississauga-mosquito-control/`) plus the odd-one-out `app/burlington-mosquito-spray/`. Generated from the 19-entry `CITIES` array (`lib/constants.ts:76`, fields `mosquitoSlug`/`tickSlug`/`neighbourhoods`) plus ~60 neighbourhood pages. |
| City tick pages | **19** | `*-tick-spray` routes. |
| `pest-control-<city>` pages | **21** | 19 city pages + `pest-control-gta` (regional hub) + `pest-control-cost-canada` (cost/stats hub). |
| "Best companies" listicles | **13** | `best-mosquito-control-companies-{12 cities + gta}`. |
| Core service pages | **10** | `mosquito-control`, `tick-control`, both `-near-me`, both `-ontario`, `mosquito-control-cost`, `mosquito-control-pricing`, `mosquito-control-diy-vs-professional`, `mosquito-spray-safety`. |
| Vertical/commercial service pages | **9** | commercial, golf-course, wedding, pool-backyard, estate-property, hoa-condo-community, restaurant-patio, daycare-camp, property-manager. |
| Product-guide hubs | **5** | `app/pest-product-guides/` + sub-hubs `mosquito-gear`, `tick-gear`, `bed-bug-control`, `rodent-control`. (Additional in-blog hub pages exist, e.g. `app/blog/bed-bug-control-canada-hub/`.) |
| Tools/calculators | **4** (+1 lead form) | `am-i-a-mosquito-magnet`, `lyme-disease-risk-calculator`, `yard-risk-report`, `gta-mosquito-pressure-map` (scoring libs: `lib/mosquito-magnet-scoring.ts`, `lib/lyme-risk-scoring.ts`, `lib/yard-risk-scoring.ts`, `lib/project-map-pins.ts`); `free-yard-assessment` is the lead-gen form. |
| Stats/linkable-asset hubs | **7** | `lyme-disease-canada-statistics`, `ticks-in-ontario-statistics`, `west-nile-virus-ontario-tracker`, `ontario-lyme-disease-tracker-2026`, `deadliest-animal-in-canada`, `pest-control-cost-canada`, `buzzskito-2026-gta-mosquito-tick-report`. |
| Competitor comparisons | **3** | `buzzskito-vs-lawnsavers`, `buzzskito-vs-mosquito-buzz`, `buzzskito-vs-mosquitoman`. |
| Learn hub | **6** | `app/learn/` + 5 children. |
| Info/utility | ~10 | home, contact, how-it-works, reviews, service-areas, privacy-policy, terms, frequently-asked-question, buzzskito-history, mosquito-tick-control-glossary. |
| API routes | **1** | `app/api/indexnow/route.ts` only. |

**Registration arrays** (`lib/constants.ts`): `CITIES` (19 entries), `MOSQUITO_BLOGS`, `TICK_BLOGS`, and ~50 `NEW_BLOGS_*` wave arrays (`NEW_BLOGS` … `NEW_BLOGS_49`, plus named waves like `NEW_BLOGS_HIGH_BASKET_AUG22`, `NEW_BLOGS_FALL_AUG31`). Build guard `scripts/check-registered.mjs` (run in `npm run build`) fails the build if any `app/blog/<slug>` is missing from constants.ts, `app/sitemap.ts`, or `app/blog/page.tsx`.

## 2. Affiliate link architecture

**Link construction — single choke point, fail-closed:**
- `lib/amazon.ts` is "THE single module permitted to construct an Amazon URL." Tag comes only from env `PUBLIC_AMAZON_TAG` (set in `.env.production` = `buzzskito200b-20`; a Vercel env var overrides). If unset, `amazonUrl()` returns `null` and `AMAZON_ENABLED=false` — zero Amazon hrefs in built HTML.
- URL shapes: ASIN → `https://www.amazon.ca/dp/<ASIN>?tag=<t>&linkCode=ll1&language=en_CA`; search → `https://www.amazon.ca/s?k=<q>&tag=<t>&linkCode=ll2&language=en_CA`. Full RFC-3986 encoding of query.
- `components/AmazonLink.tsx` is the only component rendering the `<a>` — server component, `rel="nofollow sponsored noopener noreferrer"`, `target="_blank"`; renders plain `<span>` when disabled.

**Cluster tracking IDs** (`lib/amazon-clusters.ts`): 15 IDs in `CLUSTER_TAGS` — `buzzskito-{mosquito,tick,bedbug,rodent,wildlife,flies,airpurifier,dehumidifier,fogger,sprayer,steamer,wasp,ant,roach,general}-20`. `tagForSlug(slug)` maps a blog slug through an ordered regex `RULES` list (bed-bug first, pest verticals before device verticals, `general` fallback). The cluster tag overrides the default env tag in the URL but never overrides the fail-closed switch. Build guard `scripts/check-amazon.mjs` (in `npm run build`) scans `.next` output and fails on any Amazon URL with an unknown/missing tag or any hotlinked Amazon asset; it keeps a deliberate mirror copy of the 15 tags.

**Component chain:** page → `BuyLink` (amber CTA button) / `AwardRow` → `AwardCard` / `TopPick` / `StickyBuyBar` (mobile sticky bar via client `StickyBarShell`) → all funnel into `AmazonLink`. `AwardRow` and `StickyBuyBar` carry their own inline Amazon disclosure; `AffiliateDisclosure` renders Amazon's mandated sentence above the first link, fail-closed.

**Usage counts** (`grep -rl` over `app/**/page.tsx`):
- `BuyLink`: **302** pages · `StickyBuyBar`: **295** · `AffiliateDisclosure`: **303** · `AwardRow`: **177** · `TopPick`: **122** · direct `AmazonLink` import: **24** · `AdjacentPestCTA`: **151** pages (mirrored in the generated `ADJACENT_PEST_ROUTES` set, `lib/adjacent-pest-routes.ts`, 151 routes).
- **ASIN pins vs search links:** only **15 pages** use `asin="…"`, with **13 distinct ASINs** (B07C44DM6D ×4, B00F6EV306 ×3, rest ×1 — e.g. SafeRest `B004BAEF7E` on `app/blog/bed-bug-mattress-encasement-canada/page.tsx:103`). Everything else — ~300 pages — uses `search=` links (Amazon search-results URLs, no product attribution).

**Lead-side components:** `ExitIntentPopup` (mounted once in `app/layout.tsx:141`, client; posts to `app.buzzskito.ca/api/quote-request`; hard-disabled on all `/blog/*` routes; 7-day localStorage cooldown). `LeadBarGate` (`app/layout.tsx:145`) suppresses the mobile call/quote bar only on the 151 adjacent-pest routes so `StickyBuyBar` owns `bottom-0` there. `AdjacentPestCTA` has two variants: `adjacent` ("We research {pest}. We don't treat them.") and `equipment` ("This is the gear we actually run."), both pitching `/free-yard-assessment` conditioned on GTA.

## 3. Analytics/tracking

All in `app/layout.tsx` (site-wide):
- **GA4**: gtag.js with `BUSINESS.gaId` (G-X7RV1EQWD8), `gtag('config', …, { page_path })` — pageviews only (lines 170–180).
- **Microsoft Clarity**: project `qp6yufkbs2` (heatmaps/session recording).
- **Ahrefs Web Analytics**: `analytics.ahrefs.com/analytics.js`, key `adzUhHnOF26pvyR27wLfvQ`.
- **Facebook Pixel**: `fbq('init')` + `fbq('track','PageView')` only (lines 205–219).
- **Vercel SpeedInsights**.

**Per-link affiliate click tracking does NOT exist.** There is no `gtag('event', …)`, no `fbq` custom event, no `sendBeacon`, no outbound-click listener anywhere in `app/`, `components/`, or `lib/` — `AmazonLink` is a server component with a bare `<a>`. The only affiliate attribution is server-side on Amazon's end via the 15 cluster tracking IDs (Associates "Tracking ID" report granularity = cluster, not page or link). Lead attribution (not affiliate) exists via first-touch cookies in `lib/attribution.ts` (`bz_landing`/referrer, 30-day sticky, reported to the Hub with `source_component`).

## 4. SEO wiring

- **`lib/seo.ts`** (463 lines): `buildMetadata()` (canonical, OG, twitter, noIndex), plus schema builders: `localBusinessSchema`, `serviceSchema`, `itemListSchema`, `personSchema`, `howToSchema`, `breadcrumbSchema`, `faqSchema`, `blogPostingSchema`, `speakableSchema`, `websiteSchema`, `organizationSchema`. `ALL_AREA_SERVED` = the 19 cities as `City` nodes.
- **Sitemap**: `app/sitemap.ts` — hand-assembled from core list + `CITIES` + every `NEW_BLOGS_*` array; static `LAST_CONTENT_UPDATE = 2026-07-01` (deliberately not `new Date()`).
- **IndexNow**: `app/api/indexnow/route.ts` — GET scans `app/` for `page.tsx` dirs and submits up to 10K URLs with key `855fb831a76f01df649d905dd72478b0`.
- **robots**: `app/robots.ts` — allows all AI bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, and since Jul 16 2026 also GPTBot + CCBot), disallows `/api/`, `/_next/`. (Note: CLAUDE.md's "Blocks GPTBot, CCBot" is stale vs. the code.)
- **llms.txt**: `public/llms.txt` — company/service/pricing facts for AI crawlers.

## 5. Schema usage by page class

Site-wide from `app/layout.tsx`: `WebSite` + `Organization` + `Person` (#alex) on **every** page, plus geo meta tags (`geo.region=CA-ON`, `geo.placename=Mississauga`, `geo.position`/ICBM).

Per-page (grep counts over `page.tsx`):
- **Blog posts** (358): `BlogPosting` (716 refs), `BreadcrumbList` (718), `FAQPage` (716), `speakable WebPage` (713); `HowTo` on 12, `ItemList` on 2. **No `localBusinessSchema` on any blog page** (0 matches under `app/blog`).
- **Non-blog pages**: `localBusinessSchema` on 262, `serviceSchema` 268, `howToSchema` 240, `faqSchema` 362, `breadcrumbSchema` 370, `speakableSchema` 373, `itemListSchema` 34.
- **AggregateRating: confirmed ONLY on homepage + /reviews.** `includeAggregateRating: true` appears exactly twice — `app/page.tsx:68` and `app/reviews/page.tsx:45`. It is opt-in in `localBusinessSchema` (`lib/seo.ts:115`), with comments (`lib/seo.ts:319–323`) forbidding expansion; `components/Footer.tsx:14` documents why the footer emits no schema.

## 6. Geo signals on content (blog) pages — facts

There is **no `app/blog/layout.tsx`** — every blog post renders inside the root layout only. Read end-to-end: `app/blog/best-mosquito-trap-canada/page.tsx` (mosquito) and `app/blog/bed-bug-mattress-encasement-canada/page.tsx` (adjacent-pest).

**Signals present on ALL blog pages (via root layout):**
- Geo meta tags in `<head>`: `geo.region: CA-ON`, `geo.placename: Mississauga`, `geo.position`/`ICBM` coordinates (`app/layout.tsx` metadata `other`).
- `Organization` schema: `foundingLocation` with `PostalAddress` (Mississauga, ON, CA), `contactPoint.areaServed: 'CA-ON'`, GTA-heavy `knowsAbout` (e.g. "GTA mosquito ecology", "Toronto ravine mosquito habitat").
- `Person` schema: `homeLocation` PostalAddress Mississauga, ON, CA.
- Footer boilerplate: "Serving 19 cities across the GTA", "Mississauga, ON", Ontario Pesticide Operator Licence line, links to GTA/Ontario tracker + service-area pages, sister-company GTA blurb.
- `BlogPosting` schema: author/publisher = BuzzSkito org, `inLanguage: en-CA` — but **no address/areaServed of its own**.
- **No `LocalBusiness`/`PostalAddress`/`areaServed` schema is emitted by any blog page itself** — `localBusinessSchema` count under `app/blog` is zero. (Root layout's Organization node carries the only PostalAddress.)

**Mosquito post body (best-mosquito-trap-canada):** heavy in-copy GTA boilerplate — Quick Answer footer "BuzzSkito, GTA mosquito & tick control · 150+ five-star Google reviews", sections "Traps vs Professional Barrier Spray for GTA Yards" and "The Smart Stack for a GTA Backyard" naming Mississauga/Brampton/Oakville, an inline "Or let us handle it" aside ("serving 19 GTA cities", phone number), and a closing `CTASection` quote pitch. `ExitIntentPopup` and the mobile lead bar are present as components but the popup never fires on `/blog/*`.

**Adjacent-pest post body (bed-bug-mattress-encasement-canada):** geo footprint is deliberately thinner but not zero — `SpecialistDisclosure` ("BuzzSkito is a GTA mosquito & tick control service — we don't treat bed bugs"), `AdjacentPestCTA` at the end ("If you're in the Greater Toronto Area… yard quote", phone), one internal link to `/pest-control-cost-canada`. Quick Answer footer is non-geo ("BuzzSkito Pest Product Guides · independent Canadian research"); body copy is Canada-wide (PMRA, amazon.ca), not GTA. Mobile lead bar is suppressed on these 151 routes by `LeadBarGate`.

Net: every one of the 358 blog posts — including the ~151 adjacent-pest product pages aimed largely at non-GTA/US traffic — ships Mississauga geo meta tags, an Ontario-scoped Organization schema with a Mississauga PostalAddress, and GTA footer boilerplate from the shared root layout; the page-level geo dose then varies from heavy (mosquito/tick posts) to a two-component disclosure/CTA (adjacent-pest posts).