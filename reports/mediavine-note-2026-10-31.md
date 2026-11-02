# Note to Mediavine, ready to send

**To:** publishers@mediavine.com, or your onboarding contact, from your Mediavine account email.
**Check before sending:** this version asks for the phone sticky ad ON. If you'd rather keep it off, tell me and I'll change point 5. Replaces the Oct 12 draft in `mediavine_launch_checklist.md`, which is out of date.

---

**Subject:** buzzskito.ca: Google MCM PIN entered, and please confirm our setup before launch

Hi,

**Google MCM**

I received my Google PIN by mail and entered it today, Oct 31. Google Ad Manager now shows both Identity Verification and Address Verification as Completed (network 23382985231), but your dashboard still shows "PIN Pending". Please tell me if anything else is needed on my side.

AdSense also shows "Connect your site to AdSense: Required", with a "Let's go" button. I have not clicked it, because you manage my ads and I understood I should not add AdSense code to my site. Should I leave it alone?

**How the site is set up**

buzzskito.ca is a custom Next.js (React) site, not WordPress. We are a local mosquito and tick control company with a large library of articles, guides and reader tools.

1. Ads run on our content pages only: /blog, /learn, /pest-product-guides and /tools, plus five data pages. The wrapper is in the head of those pages. Pages that mainly list other pages, 18 local service posts and our local lead tools do not load it.
2. Our service, city, pricing, quote and contact pages do not load the wrapper. We do not want display ads beside our own quote forms.
3. The homepage loads the wrapper together with `<div id="mediavine-settings" data-blocklist-all="1"></div>`, so your install check finds it but no ads show. If you would rather block that page on your side, tell us and we will change it.
4. Next.js normally changes pages without a full reload. We force a normal full page load on every link into or out of a page that carries the wrapper, so each article is a fresh pageview. We do not need URL-change or single-page-app handling switched on.
5. We answer 403 to visitors from Singapore and China, because that traffic was almost all short bot sessions. Anything that declares itself as a crawler or link preview passes from any country. Please tell us if this could affect anything on your side.

Please confirm this is acceptable.

**Settings we would like for launch**

6. Mobile and Tablet Adhesion ON, and Universal Player OFF on mobile. Desktop adhesion and the desktop player can stay on. Some articles have our own bar on the bottom edge of the screen, either a product bar or a slim "next article" bar. When your ad slot appears, those bars step up above a fixed band we reserve (60, 100 or 150 px, plus a 12 px gap) and stay there, so nothing sits over, under or in front of your ad. Please confirm this meets your rules and Google's, or tell us what you need changed. What does the phone sticky ad typically earn on a site our size?
7. In-content ads: please do not place a unit directly before or after an element with the class `not-prose`. Those are our product buttons and our "Next article" and "Related" link blocks. Please confirm you can do this.
8. Your content selector `.max-w-3xl.mx-auto.prose-brand` matches our article body. It does not match /pest-product-guides, the five data pages or the index pages, and it may not match /tools. Tell us what you need there.
9. Our header is sticky at every screen width and about 93 px tall. On desktop and tablet, sticky in-content ads should stop below it rather than under it.

**New content since you approved us**

10. We have added a reference library of about 250 guides on household pests for readers in the US and Canada, and we are adding more each week. They were drafted with AI assistance from government and university sources, and each one was then fact-checked against those sources. A note at the foot of each page says how it was made and lists its sources. The photos are real and credited. Most of the guides written for US readers carry one amazon.com product box with Amazon's required disclosure.
11. We plan to keep building, including more buying guides for Canadian readers. Please confirm the library fits your content policy. Is there a pace of new pages you would want us to stay within, or anything you would need changed?

Is there anything else you need from us before launch? We would like to be live before Black Friday, Nov 27, if we can.

Thanks,
Alex, BuzzSkito
