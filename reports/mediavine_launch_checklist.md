# Mediavine — where things stand and what is left before launch

Last updated 2026-10-06. Ads are **not serving yet**: Mediavine keeps the site in "launch mode"
until Google approves it and you press Launch.

## Done (live on buzzskito.ca)

| Mediavine step / requirement | Status |
|---|---|
| Ads script installed and verified | Done. On 357 informational pages (blog, /learn, product guides, 5 data pages). |
| No ads on service pages | Done. City, service, pricing, quote, contact and review pages do not load Mediavine's script at all. The homepage carries it (Mediavine checks the domain root) with every ad switched off by Mediavine's own page setting. |
| Ads.txt | Done. `buzzskito.ca/ads.txt` serves the exact line from your onboarding screen. |
| Privacy policy | Done. Mediavine's required section is in the policy word for word, and the policy is linked from every page. |
| Your bars vs Mediavine's sticky bottom ad | Done. The phone Call / Text / Get price bar and the Amazon buy bar move up above their ad automatically. Nothing of yours can cover it. |
| Build check | Every deploy is blocked if a service page ever carries the ad script. |

Also ad-free on purpose: 18 blog posts that are really local service or pricing pages, the
yard-risk quiz, the calculators, the pressure map, the 2026 GTA report, the pest-control cost
guide and the glossary. Tell me if you want any of them to show ads.

## Your steps in the Mediavine dashboard

1. **Ads.txt** — press Verify.
2. **Google MCM** — enter the email of the Google account you want paid through, then accept the
   invite Google emails you. Google's review usually takes 3–5 business days, sometimes up to
   three weeks. Nothing for me to do here.
3. **Identity verification** — yours to do (photo ID).
4. **Settings → Google Analytics 4** — connect your GA4 property. Mediavine lists this as
   required for launch.
5. **Payment profile** — required before they can pay you.

## Before you press "Launch My Site" — three things

1. **Send Mediavine the note below** and wait for a reply. Their terms start a 90-day "Set-Up
   Period" on the first day ads appear, during which you may not change the ad placement they
   set. So the setup should be agreed with them first.
2. **Get the Universal Player turned off on mobile.** It is a small floating video in the
   bottom-left corner of the phone screen, exactly where your Call button sits. With it on,
   your bars have to climb above it, and bars plus ads then cover over 40% of a phone screen
   (measured in a simulation). With it off, only the thin ad strip sits under your bars. Look
   for it in the dashboard's video settings; the note below also asks them to do it.
3. **Tell me the day it goes live.** I can only check real ads once they are running, and I
   want to look at the homepage, three service pages and a few articles on a phone right away.

## Note to send to Mediavine (publishers@mediavine.com, or your onboarding contact)

> Subject: buzzskito.ca — custom Next.js install, ads on content pages only
>
> Hi,
>
> buzzskito.ca is a custom site built on Next.js (React, App Router), not WordPress. Before we
> launch I want to confirm the setup with you.
>
> 1. Where ads run. The script wrapper is in the head of our content pages: everything under
>    /blog, /learn and /pest-product-guides, plus five data pages. Our service, city, pricing,
>    quote and contact pages do not load the wrapper. The homepage loads it with
>    `<div id="mediavine-settings" data-blocklist-all="1"></div>` so your install check passes
>    but no ads show there. We are a local service company and do not want display ads next to
>    our own quote forms. Please confirm this is acceptable.
> 2. Navigation. Next.js normally changes pages without a full reload. We force a normal full
>    page load on every link into or out of an ad page, so each article is a fresh pageview for
>    your wrapper. We do not need any single-page-app handling switched on in the wrapper.
> 3. Bottom of the screen on phones. We have our own fixed Call / Text bar and a product bar.
>    They move up above your adhesion unit automatically and never overlap it. Could you turn
>    the Universal Player off on mobile for this site? It docks where those bars are.
> 4. In-content ads. Your content selector `.max-w-3xl.mx-auto.prose-brand` matches our article
>    body. /pest-product-guides and the five data pages use different containers; tell us what
>    you need there.
>
> Is there anything else you need from us before launch?
>
> Thanks,
> Alex — BuzzSkito

## At launch (I do these)

- Swap the one-line ads.txt for Mediavine's full file: a 301 redirect from `/ads.txt` to
  `https://adstxt.mediavine.com/sites/5cb2e89b-2d2f-47ba-9cbf-599f203df724/ads.txt`.
- Check live on a phone and a desktop: no ad on the homepage or any service page; your bars
  clear the bottom ad; nothing covers an ad on article pages.

## One thing for your lawyer

The privacy policy still says "We do not sell your personal information." Mediavine's section,
now directly below it, describes interest-based advertising and a US "do not sell or share"
opt-out. Under some US state laws that kind of ad sharing counts as a sale. Ask whether the
earlier sentence should be reworded. I did not change it.
