# BuzzSkito Website — Project Context

## Business
- **Company:** BuzzSkito Mosquito & Tick Control (BuzzSkito LTD, Reg# 1001003669)
- **Owner:** Diogo (goes by Alex externally). NOT a developer — needs step-by-step guidance.
- **Phone:** (289) 216-5030
- **Email:** support@buzzskito.ca (for customers), info@buzzskito.ca (for emails sent via Resend)
- **Base:** Mississauga, Ontario, Canada
- **Service area:** 19+ GTA cities (Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, Thornhill + 30+ neighbourhoods)
- **Season:** May–September. Peak: June–July.
- **Fleet:** 1 van (expanding to 2), 1 technician (expanding to 2)
- **Google Reviews:** 150 five-star reviews (5.0 average), ZERO bad reviews

## Pricing (CRITICAL — get this right)
- **Single treatment:** From $99 (standard lot under 10K sq ft)
- **Basic Season:** $549 — 5 sprays, monthly (May–Sep)
- **Standard Season:** $994 — 10 sprays, bi-weekly (May–Sep) ← MOST POPULAR
- **Exclusive Season:** $2,049 — 20+ sprays, weekly (May–Sep)
- **Tick standalone:** $597/season (5 sprays)
- **Tick bundle:** $497/season when added to any mosquito plan (save $100)
- **Pricing scales by lot size:** 10K–100K sq ft. Full matrix in src/lib/pricing.ts on the Hub
- **Costs (CORRECTED Aug 2026 — the old "$25/job commission" was superseded and was
  producing wrong margin maths):** the technician has been **salaried since Jun 1**, so
  cost is per DAY not per job. Live source of truth is `src/lib/season-ops-data.ts` in
  the Hub: technician $170/day + insurance $8 + gas $40 = **$218 per service day**,
  plus **~$8 product per visit**.
  - **The marginal cost of one more visit on a day the van is already out is ~$8**,
    against $170.88 average revenue per stop. This is why a bonus spray is a far
    better incentive than an equivalent discount — roughly 21x the perceived value
    per dollar spent. Never pay in dollars what you can pay in sprays.
  - A tick treatment rides along on an existing mosquito stop (verified: zero separate
    tick trips across 59 bundled applications), but tick is a different application, so
    budget **~$107 per season**, not $8 — the $8 constant carries no tick line item and
    no lot-size scaling.

## Tech Stack
- **Website:** Next.js (App Router) + Tailwind CSS, deployed on Vercel at buzzskito.ca
- **Dashboard (Hub):** Next.js 16 + Tailwind + Supabase + Stripe + Resend, deployed at app.buzzskito.ca
- **GitHub:** diogo055/buzzskito-website and diogo055/buzzskito-hub
- **Git user:** Must use `diogo055` account (not buzzskito-afk) for Vercel deploys
- **Database:** Supabase (bjcfwwwumrhumuoavizi.supabase.co)
- **Payments:** Stripe (dynamic Payment Links API — auto-creates checkout for each customer's price)
- **Email:** Resend (domain verified: buzzskito.ca, sends from info@buzzskito.ca)
- **Notifications:** Slack webhook for new leads
- **Analytics:** Google Analytics (G-X7RV1EQWD8), Ahrefs Web Analytics, Facebook Pixel

## Critical Rules
1. **NEVER auto-send emails to customers.** All quote emails are sent manually from the dashboard.
2. **Tick sprays = 5 per season** (not 2). This has been a recurring error.
3. **Use "Alex & The BuzzSkito Team"** in email sign-offs (not Diogo's real name).
4. **Always verify build before pushing.** Run `npx next build` and check for errors.
5. **Push website to `diogo` remote** (`git push diogo main`), NOT `origin`.
6. **Push Hub to `origin`** (`git push`).

## Competitors
- **Mosquito Man:** 900+ reviews, franchise, ~$450 seasonal, 6+ yr domain, 200+ backlinks
- **LawnSavers:** 1,070+ reviews, $129+/treatment, lawn care primary
- **Mosquito.Buzz:** National franchise, city-specific pages

## SEO Setup
- 150+ pages (city pages, neighbourhood pages, blog posts, service pages)
- IndexNow installed (buzzskito.ca/api/indexnow)
- llms.txt for AI crawlers
- robots.txt allows: OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot. Blocks: GPTBot, CCBot.
- GSC MCP server connected (sc-domain:buzzskito.ca)
- Schema: LocalBusiness + Service + FAQ + HowTo + Speakable + AggregateRating on every page

## Dashboard Features (app.buzzskito.ca)
- Ranking Strength score (100 tracked keywords)
- GSC data (updated manually via Claude Code sessions)
- Season forecast engine
- Lead management with Call Order, delete, search, filter
- Quiz funnel leads with risk level + answers
- Quote preview with lot size selector + editable prices + custom Stripe links
- Email open/click tracking via Resend webhooks
- Slack escalation for stale leads (15 min)
- Win/loss tracking with lost reason dropdown
