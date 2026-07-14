# AMAZON ASSOCIATES — FORENSIC AUDIT (Phase 1)

**Repo:** `buzzskito-website` (buzzskito.ca) · **Branch:** `amazon-compliance` · **Date:** 2026-07-13
**Status:** READ-ONLY audit complete. No remediation performed. Awaiting go-ahead.

---

## STACK REPORT (Phase 0)

| Item | Value |
|---|---|
| Framework | **Next.js 14.2.5**, App Router, React 18.3 |
| Language | TypeScript / TSX |
| Package manager | **npm** (`package-lock.json`) |
| Build command | `next build` → output **`.next/`** (SSR/RSC + static chunks). `postbuild` = `node scripts/index-urls.mjs` (IndexNow ping, internal URLs only — no Amazon) |
| Deploy target | **Vercel** (buzzskito.ca). Env vars set in Vercel dashboard (Production/Preview). Pushed via `diogo` remote. |
| Content model | **Hardcoded JSX** in `app/blog/<slug>/page.tsx` (no MDX/CMS). Blog metadata in `lib/constants.ts`. |
| Existing affiliate abstraction | **Yes** — `lib/affiliate.ts` (tag config + `amazon()` builder), `components/BuyLink.tsx` (renders links), `components/AffiliateDisclosure.tsx` (disclosure text). All Amazon URLs flow through this one path. |

---

## ROOT CAUSE (why Amazon rejected `buzzskito20-20`)

**The site rewrites every Amazon link on the client, US-side, to a *different* tracking ID.**

- `components/BuyLink.tsx` is a **client component** (`'use client'`). It **server-renders** the Canadian link `https://www.amazon.ca/s?k=…&tag=buzzskito20-20` (correctly tagged), but in a `useEffect` it **detects US visitors by timezone and swaps the href to `https://www.amazon.com/…&tag=buzzskito200d-20`** after hydration.
- Amazon's reviewer is US-based. When they loaded the page, the JS swap fired and **every visible Special Link carried `buzzskito200d-20`, not the `buzzskito20-20` ID of the account under review.** Hence their exact wording: *"not using tracking IDs associated with your store in any of the Amazon Special Links… unable to determine the source of traffic."*
- **Proof in the build output:** all **78** client chunks that render a BuyLink contain both `amazon.com` and the US tag `buzzskito200d-20`; the server HTML shows the `.ca` tag but the executed page shows the `.com`/US tag.

Secondary latent issues (all fixed by the Phase 2 rebuild):
1. **Fail-OPEN builder** — `amazon()` (`lib/affiliate.ts:57`) returns a **bare, untagged** Amazon URL if the tag is ever empty (`return tag ? tagged : untagged`). Not currently triggered (tag is hardcoded), but it is architecturally capable of emitting a naked Amazon URL — the opposite of the required fail-closed behaviour.
2. **Search links** (`/s?k=…`) rather than product `/dp/ASIN` Special Links.
3. **Manually-written Amazon prices** in prose (policy violation — Amazon prices must not be stated manually).
4. **Disclosure wording** is not Amazon's mandated sentence, and there is no sitewide footer disclosure.

---

## FINDINGS TABLE

### T1 — CRITICAL (crawler-visible untagged/mis-tagged link or client rewriting)

| File | Line | Reference | Tag present? | Proposed action |
|---|---|---|---|---|
| `components/BuyLink.tsx` | 41–49 | **Client-side `useEffect` geo-swap** → rewrites href to `amazon.com` with `buzzskito200d-20` | Wrong tag after swap (US) | Replace with a **server-only, fail-closed** `<AmazonLink>` (no client rewriting). This is the actual rejection cause. |
| `lib/affiliate.ts` | 50–58 | `amazon()` URL builder | **Fail-open** (emits untagged URL if tag empty) | Replace with fail-closed `amazonUrl()` that returns `null` when no tag. |
| `lib/affiliate.ts` | 20–21 | Hardcoded tags `buzzskito20-20` / `buzzskito200d-20` (rejected IDs) | n/a | Remove hardcoded tags; read tag from `PUBLIC_AMAZON_TAG` env only. |
| `app/blog/**/page.tsx` (78 files) | — | **272 `<BuyLink>`** tags → render **156 distinct `amazon.ca` Special Links** in server HTML, all swapped to `.com`/US-tag on the client | `.ca` tag server / wrong tag client | Re-point all to `<AmazonLink>`; with no tag set they render as **plain text** (fail-closed). Pages keep their URLs. |

**Distinct Amazon URLs currently emitted:** **156** (server HTML, all `amazon.ca?tag=buzzskito20-20`) + client-swap variants to `amazon.com?tag=buzzskito200d-20` across 78 chunks. Bare `https://www.amazon.ca` base string appears in bundles but is not a rendered anchor href. **Zero rendered hrefs are fully untagged** — the violation is the *client rewrite to a different tag*, not a missing tag in static HTML.

### T2 — POLICY (prices, disclosure)

| File | Line | Reference | Tier | Proposed action |
|---|---|---|---|---|
| `app/blog/mosquito-bits-canada-vs-dunks/page.tsx` | 28, 146 | "Amazon.ca varies $13–$22…"; "Mosquito Bits 8-oz: $15–$22" | T2 | Remove the Amazon-specific price; keep generic "widely available at major Canadian retailers." |
| `app/blog/mosquito-dunks-canada-guide/page.tsx` | 45 | "Amazon.ca varies $11–$19…" | T2 | Remove Amazon price. |
| `app/blog/bug-zappers-canada-do-they-work/page.tsx` | 20 | "…and Amazon.ca ($25–$200)" | T2 | Remove Amazon price. |
| `app/blog/citronella-candles-canada-do-they-work/page.tsx` | 33 | Amazon.ca in priced retailer list | T2 | Remove Amazon price. |
| `app/blog/mosquito-coils-canada/page.tsx` | 33 | Amazon.ca "$6–$14 a pack" | T2 | Remove Amazon price. |
| `app/blog/permethrin-canada-yard-clothing-spray/page.tsx` | 151 | "…and Amazon.ca for $24–$38" | T2 | Remove Amazon price. |
| `app/blog/best-mosquito-trap-canada/page.tsx` | 135 | Amazon.ca in priced retailer list | T2 | Remove Amazon price. |
| `app/blog/hidden-mosquito-breeding-spots-backyard/page.tsx` | 85 | "…Amazon.ca · $10–$20 per 6-pack" | T2 | Remove Amazon price. |
| **Retailer price-comparison tables** (multiple product pages, e.g. mosquito-bits, thermacell, dynatrap) | — | Tables with an "Amazon.ca" row/column showing a price | T2 | Drop the Amazon.ca row from price tables (keep other retailers) or remove the price column. Full sweep during remediation. |
| `components/AffiliateDisclosure.tsx` | 7–15 | Disclosure says "BuzzSkito may earn a small commission…" — **not** Amazon's mandated sentence | T2 | Replace with **"As an Amazon Associate, BuzzSkito earns from qualifying purchases."** Render conditionally on `AMAZON_ENABLED`. Add same line to sitewide footer. |

### T3 — HYGIENE

| File | Reference | Tier | Proposed action |
|---|---|---|---|
| `app/blog/**` | **~297** non-priced "Amazon.ca" text mentions (e.g. "sold at Canadian Tire, Home Depot… and Amazon.ca") | T3 | Mentioning a retailer by name is permitted; leave content but review during remediation so no *price* rides alongside. Low priority. |
| `lib/affiliate.ts` | `PRODUCTS` registry (search terms, no ASINs) | T3 | Rebuild will need real ASINs for `/dp/` Special Links, or keep search-based tagged links. Decision for Phase 2. |

---

## OFF-SITE SURFACES — CLEAN
- `app/sitemap.ts`, API routes, `scripts/*.mjs`: **no Amazon references.**
- No RSS/Atom feed, no PDF/invoice generator, no email templates in this repo (customer email lives in the separate `buzzskito-hub` repo and contains no Amazon links).
- `next.config.mjs` / `vercel.json` redirects: **no Amazon redirects/rewrites**; no `/go` `/out` `/recommends` cloaking routes; no `middleware`.
- No hotlinked Amazon images (`media-amazon`, `ssl-images-amazon`, `amazon-adsystem`), no Amazon widgets/iframes, no `amzn.to` shorteners.

---

## SUMMARY

- **Total distinct Amazon URLs emitted by the build:** 156 (all `amazon.ca`, tagged `buzzskito20-20`), rewritten client-side to `amazon.com` (tagged `buzzskito200d-20`) for US visitors across 78 chunks.
- **T1 (critical):** the client-side US geo-swap (root cause) + fail-open builder + hardcoded rejected tags + 272 BuyLinks across 78 pages.
- **T2 (policy):** 8+ manual Amazon-price lines + retailer price tables + non-mandated disclosure wording + no footer disclosure.
- **T3 (hygiene):** ~297 non-priced Amazon retailer mentions; search-based (non-ASIN) links.
- **Good news:** one central abstraction, no cloaking, no hotlinked assets, no off-site Amazon links — remediation is contained.

**Recommended end-state (matches your brief):** rebuild `lib/affiliate.ts` + `<AmazonLink>` to be **fail-closed** (no tag ⇒ plain text, zero Amazon URLs in HTML), strip Amazon prices, fix the disclosure sentence, add a `check-amazon` build guard, and gate everything on `PUBLIC_AMAZON_TAG`. With the env var unset (now), the production site will emit **zero** Amazon URLs; setting it later re-enables 100% compliant links with one change.

**STOP — awaiting go-ahead before Phase 2 remediation.**
