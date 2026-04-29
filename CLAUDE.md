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
- **Google Reviews:** 129 five-star reviews (5.0 average), ZERO bad reviews

## Pricing (CRITICAL — get this right)
- **Single treatment:** From $99 (standard lot under 10K sq ft)
- **Basic Season:** $549 — 5 sprays, monthly (May–Sep)
- **Standard Season:** $994 — 10 sprays, bi-weekly (May–Sep) ← MOST POPULAR
- **Exclusive Season:** $2,049 — 20+ sprays, weekly (May–Sep)
- **Tick standalone:** $597/season (5 sprays)
- **Tick bundle:** $497/season when added to any mosquito plan (save $100)
- **Pricing scales by lot size:** 10K–100K sq ft. Full matrix in src/lib/pricing.ts on the Hub
- **Tech commission:** $25/job. Product cost: ~$8/job.

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
