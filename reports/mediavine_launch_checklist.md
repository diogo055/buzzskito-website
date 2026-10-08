# Mediavine — where things stand and what is left before launch

Last updated 2026-10-06. Ads are **not serving yet**: Mediavine keeps the site in "launch mode"
until Google approves it and you press Launch.

## Done (live on buzzskito.ca)

| Mediavine step / requirement | Status |
|---|---|
| Ads script installed and verified | Done. On 357 informational pages (blog, /learn, product guides, 5 data pages). |
| No ads on service pages | Done. City, service, pricing, quote, contact and review pages do not load Mediavine's script. Moving to or from the homepage or any ad page is a normal full page load, so the script cannot follow a visitor onto a service page. |
| Homepage | Carries the script (Mediavine checks the domain root) with every ad switched off by Mediavine's own "disable all ads" page setting. |
| Ads.txt | Done. `buzzskito.ca/ads.txt` serves the exact line from your onboarding screen. |
| Privacy policy | Done. Mediavine's required section is in the policy word for word, and the policy is linked from every page. |
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
5. **Payment profile and business details** — required before they can pay you.

## Before you press "Launch My Site" — four things

### 1. Decide what happens at the bottom of the phone screen (my recommendation: their strip off)

On a phone you already have two bars of your own at the bottom: Call / Text / Get price, and the
Amazon "Check price" bar. Mediavine wants to pin its own ad strip there too, plus a small
floating video in the bottom-left corner.

There is not room for all of it, and it is also a rules problem: Google says buttons must not sit
close to a sticky ad, because people tap the ad by accident, and the site owner gets the blame.

**Recommended: launch with these three switched off in Mediavine's dashboard.**

| Setting | Where (per Mediavine's help pages) |
|---|---|
| Mobile Adhesion — off | Settings → Ad Settings |
| Tablet Adhesion — off | Settings → Ad Settings |
| Universal Player on mobile — off | Settings → Video |

You keep every in-article ad on phones, and everything on desktop. You give up the bottom strip
on phones, which costs some ad revenue. It cannot cost you a quote request or an Amazon click.
We can test turning the strip on later, on real ads.

If you leave them on, the site copes: your bars step up above a space reserved for the ad and
stay there with a gap, so nothing overlaps. But ads plus your bars then cover a third or more of
a phone screen.

### 2. Send Mediavine the note below and wait for a reply

Their terms start a 90-day "Set-Up Period" on the first day ads appear, during which you may not
change the ad placement they set. So the setup should be agreed with them first. The note also
asks them to do the three switches above if you would rather not hunt for them.

### 3. Tell me the day it goes live

I can only check real ads once they are running. I want to look at the homepage, three service
pages and a few articles on a phone and on a desktop right away.

### 4. The new guide library and Mediavine's AI-content policy (added 2026-10-08)

Mediavine's written policy (mediavine.com/ai, March 2024) says: "We do not monetize
low-quality, mass-produced, unedited or undisclosed AI content that is scraped from other
websites." AI-assisted content as such is not banned, and they publish no page-count or
speed limit. Their contract lets them end the agreement at their discretion.

Where the 76 new guides stand against that sentence:

| Their word | The guides |
|---|---|
| low-quality | Each cites 3 to 6 government or university sources and was fact-checked claim by claim |
| scraped | Written from the sources, not copied; no quotes lifted |
| undisclosed | Each page states it was drafted with AI assistance |
| unedited | Checked by a second AI pass. **No person has read them yet.** This is the weak point. |
| mass-produced | 76 pages at once. Nothing they have written sets a number, but it is their word. |

**What closes the gap: you read them.** Google's own guidance says AI-assisted content should
be manually reviewed before publishing. When you have read a page and are happy with it, tell
me and I add your name and the date to that page; it then shows "Reviewed by" in its byline.
Start with the 13 mosquito and tick guides, which are your own field. Point 9 in the note
below asks Mediavine to confirm the library fits their policy.

## Note to send to Mediavine (publishers@mediavine.com, or your onboarding contact)

> Subject: buzzskito.ca — custom Next.js site: please confirm our setup before launch
>
> Hi,
>
> buzzskito.ca is a custom Next.js (React) site, not WordPress. We are a local mosquito and tick
> control company with a large library of articles and product guides. Before launch I would like
> to confirm how we have set things up, and ask for a few settings.
>
> **How it is installed**
>
> 1. Ads run on our content pages only: everything under /blog, /learn and /pest-product-guides,
>    plus five data pages. The script wrapper is in the head of those pages.
> 2. Our service, city, pricing, quote and contact pages do not load the wrapper. We do not want
>    display ads beside our own quote forms.
> 3. The homepage loads the wrapper together with
>    `<div id="mediavine-settings" data-blocklist-all="1"></div>`, so your install check finds it
>    but no ads show. The same div is in the HTML of our other no-ad pages, where the wrapper is
>    not loaded. If you would rather block those URLs on your side, or would prefer we not load
>    the wrapper on the homepage at all, tell us and we will change it.
> 4. Next.js normally changes pages without a full reload. We force a normal full page load on
>    every link into or out of a page that carries the wrapper, so each article is a fresh
>    pageview. We do not need URL-change or single-page-app handling switched on.
>
> Please confirm this is acceptable.
>
> **Settings we would like for launch**
>
> 5. Mobile Adhesion and Tablet Adhesion off, and Universal Player off on mobile. On phones we
>    already have our own fixed Call / Text bar and a product bar at the bottom, and we do not
>    want buttons sitting next to a sticky ad. Desktop adhesion and the desktop player can stay
>    on. If any of these is a dashboard setting we should change ourselves, tell us which.
> 6. In-content ads: please do not place a unit directly before or after an element with the
>    class `not-prose`. Those are our product buttons and quote boxes.
> 7. Your content selector `.max-w-3xl.mx-auto.prose-brand` matches our article body. It does not
>    match /pest-product-guides, the five data pages or the /blog and /learn index pages. Tell us
>    what you need there.
> 8. Our header is sticky at every screen width and about 93px tall. On desktop and tablet,
>    sticky in-content ads should stop below it rather than under it.
>
> **New content since you approved us**
>
> 9. We have added a reference library of about 76 guides on common household pests (bed
>    bugs, ants, mice, cockroaches, mosquitoes, ticks) for readers in the US and Canada. They
>    were drafted with AI assistance from government and university sources, each one was then
>    fact-checked against those sources, and every page says this on the page and lists its
>    sources. They carry no affiliate links. [Add if true: "I have read and approved each
>    one."] Please confirm this fits your content policy, or tell us what you would need
>    changed.
>
> Is there anything else you need from us before launch?
>
> Thanks,
> Alex — BuzzSkito

## At launch (I do these)

- Swap the one-line ads.txt for Mediavine's full file when they ask for it.
- Check live on a phone and a desktop: no ad on the homepage or any service page; nothing of
  yours overlaps an ad on article pages; the homepage still loads fast.

## One thing for your lawyer

The privacy policy still says "We do not sell your personal information." Mediavine's section,
now directly below it, describes interest-based advertising and a US "do not sell or share"
opt-out. Under some US state laws that kind of ad sharing counts as a sale. Ask whether the
earlier sentence should be reworded. I did not change it.
