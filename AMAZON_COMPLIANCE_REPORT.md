# AMAZON ASSOCIATES COMPLIANCE REPORT — buzzskito.ca

**Prepared:** 2026-07-13 · **Branch:** `amazon-compliance` · **Repo:** buzzskito-website (Next.js 14, Vercel)
**Purpose:** evidence that buzzskito.ca is provably clean of Amazon Special Link violations, and that the fix is architecturally fail-closed.

---

## TL;DR

- **Root cause of the rejection identified and removed:** the site rewrote every Amazon link on the client (US-side) to a *different* tracking ID.
- **The live site now emits ZERO Amazon URLs** (verified by crawling all 301 sitemap URLs of the deployable build — see After evidence).
- The architecture is **fail-closed**: with no tag configured it is physically incapable of rendering an Amazon URL.
- **Post-approval:** setting one environment variable (`PUBLIC_AMAZON_TAG`) makes 100% of links compliant Special Links carrying the new ID. No other change.
- A **build guard** (`check:amazon`) fails the build if a non-compliant Amazon link ever reaches the output.

---

## 1. What Amazon flagged

> "You are not using tracking IDs associated with your store in any of the Amazon Special Links… we were unable to determine the source of traffic. An example can be found here: https://buzzskito.ca/"

## 2. Root cause (confirmed by forensic audit)

The affiliate button component (`BuyLink`) was a **client component**. It server-rendered the Canadian link `https://www.amazon.ca/s?k=…&tag=buzzskito20-20` (correctly tagged), but a `useEffect` **detected US visitors by timezone and swapped the href to `https://www.amazon.com/…&tag=buzzskito200d-20`** after the page loaded.

Amazon's reviewer is US-based. When they opened buzzskito.ca, the JavaScript swap fired and **every visible Special Link carried `buzzskito200d-20`, not the `buzzskito20-20` ID of the account under review.** That is precisely their complaint.

**Why a plain crawl looked "fine":** `curl` does not execute JavaScript, so the raw HTML showed correctly-tagged `.ca` links (see Before evidence — 223 links, all `buzzskito20-20`). Only a real browser (the reviewer) ran the swap and saw the wrong tag. The build output confirmed the swap: **78 client chunks contained `amazon.com` + `buzzskito200d-20`.**

Secondary latent issues, all removed:
- **Fail-open** URL builder that emitted a bare, untagged Amazon URL if the tag was empty.
- **Manually-stated Amazon prices** in prose and price-comparison tables (Operating Agreement prohibits displaying Amazon prices outside a live Special Link).
- Disclosure did not use Amazon's mandated sentence; no sitewide footer disclosure.

## 3. What changed (this branch)

| Commit | Change |
|---|---|
| `feat(amazon)` | **New `lib/amazon.ts`** — the single module permitted to build an Amazon URL. `amazonUrl()` returns **null** when `PUBLIC_AMAZON_TAG` is unset (fail-closed). **New server-only `<AmazonLink>`** renders a compliant `rel="sponsored nofollow noopener"` link when enabled, plain text when not — **no client-side rewriting**. `BuyLink` now wraps it (server component; renders nothing when disabled). **Deleted `lib/affiliate.ts`** — the fail-open builder, the hardcoded rejected tags (`buzzskito20-20` / `buzzskito200d-20`), and the client US geo-swap (the root cause). |
| `fix(amazon)` | Disclosure now reads **"As an Amazon Associate, BuzzSkito earns from qualifying purchases."** verbatim, rendered in plain server HTML, only when `AMAZON_ENABLED`. Same line added to the sitewide footer. |
| `content(amazon)` | Removed the Amazon.ca row from **15 retailer price tables** and stripped Amazon-attributed price clauses from FAQ/prose across **20 product pages**. Kept other retailers, general market ranges, and non-priced Amazon mentions. |
| `build(amazon)` | **`scripts/check-amazon.mjs`** build guard, wired into `npm run build`. Scans crawler-visible output (`.html`, `.rsc`, `.next/static`). Fails the build on any Amazon URL when no tag is set, on any URL missing `tag=<TAG>` when a tag is set, and on any hotlinked Amazon asset. Proven to pass clean and exit 1 on a planted untagged URL. |

**Not touched (out of scope, as required):** service pages, city/neighbourhood pages, pricing tables for BuzzSkito's own service, LocalBusiness/Service JSON-LD, booking/Stripe flows, and every page URL/slug/canonical (no rankings affected). Only Amazon links and Amazon-price content changed.

**Confirmed clean of other classes:** no cloaking routes/redirects, no `amzn.to` shorteners, no hotlinked Amazon images (`media-amazon` / `amazon-adsystem`), no Amazon links in sitemap, RSS, or email.

## 4. Evidence

### Before (current production, pre-fix)
`seo-audit/amazon-evidence/before-production.txt` — crawl of all 301 sitemap URLs.
- **223 distinct Amazon URLs**, all `https://www.amazon.ca/…&tag=buzzskito20-20` (the curl/no-JS view).
- The client geo-swap (invisible to curl, visible to the reviewer's browser) rewrote these to `amazon.com&tag=buzzskito200d-20` — the violation.

### After (this branch's deployable build, `PUBLIC_AMAZON_TAG` unset)
`seo-audit/amazon-evidence/after-localbuild.txt` — crawl of all 301 URLs against the exact `.next` artifact Vercel deploys.
- **0 Amazon URLs.** Zero. BuyLink buttons render nothing; disclosures render nothing.
- Build guard: `✓ scanned 935 crawler-visible files. Zero Amazon URLs in output (fail-closed).`

## 5. Post-approval procedure (do NOT run until the new Amazon ID is issued)

1. In Vercel → Production **and** Preview, set `PUBLIC_AMAZON_TAG=<new-tracking-id>`.
2. Redeploy.
3. Re-crawl production (`seo-audit/amazon-evidence` has the crawl command): every Amazon URL must contain `tag=<new-tracking-id>` — zero exceptions.
4. Confirm the disclosure now renders on every page with a link, in the static HTML.
5. Confirm `npm run build` passes the guard with the tag set.

There is **no client-side link rewriting**. The tag is set in one place (a `PUBLIC_AMAZON_TAG` env var, provided via `.env.production` or a Vercel dashboard setting, which overrides), so what a reviewer sees in a browser is identical to the static HTML: one storefront (amazon.ca), one tracking ID, on 100% of links.

## 6. Activation (2026-07-13, post-approval)

New Amazon.ca Associate ID **`buzzskito200b-20`** issued. Activated by setting `PUBLIC_AMAZON_TAG=buzzskito200b-20` in `.env.production`. Verified on the deployable build:
- **816 Amazon URLs, 100% carrying `tag=buzzskito200b-20`.** Zero untagged, zero old/rejected tag (`buzzskito20-20`), zero `amazon.com` US-swap.
- Build guard passes in tag-set mode: *"Every Amazon URL carries tag=buzzskito200b-20."*
- Disclosure ("As an Amazon Associate…") renders in static HTML.
- Search terms are fully RFC-3986 encoded (no stray apostrophes in URLs).
To disable/fail-closed: empty the `PUBLIC_AMAZON_TAG` line and redeploy.

---

*Generated as part of the `amazon-compliance` remediation. Commits are atomic and individually revertable.*
