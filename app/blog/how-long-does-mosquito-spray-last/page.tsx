import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogPostCTA from '@/components/BlogPostCTA'
import BuyLink from '@/components/BuyLink'
import StickyBuyBar from '@/components/StickyBuyBar'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'

const POST = MOSQUITO_BLOGS.supporting[1]
const UPDATED = '2026-07-12'

export const metadata: Metadata = buildMetadata({
  title: 'How Long Does Mosquito Spray Last in Ontario?',
  description:
    'How long does mosquito spray last? Barrier spray, foggers, DEET, citronella and dunks compared, with BuzzSkito plan schedules and GTA re-treat timing.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
  modifiedTime: '2026-07-12',
})

const FAQS = [
  {
    question: 'How long does mosquito spray last?',
    answer: 'Professional barrier spray leaves a residual on the leaves where mosquitoes rest, and that residual is renewed on your plan\'s schedule — every 2 weeks on BuzzSkito\'s Standard plan, monthly on Basic. Consumer yard foggers last 1–7 days depending on weather and vegetation density. Personal repellents like DEET last 4–8 hours on skin. A professional treatment is a licensed application according to label directions, aimed at shaded shrubs and vegetation.',
  },
  {
    question: 'How long does backyard mosquito protection last after professional treatment?',
    answer: 'A professional barrier spray treatment leaves a residual on the vegetation in your yard where mosquitoes rest, and that residual is renewed on a schedule rather than applied once. For GTA properties, BuzzSkito renews it on your plan\'s schedule through the May-to-September season: monthly on Basic (5 sprays), every 2 weeks on Standard (10 sprays, our most popular plan), or weekly on Exclusive (20+ sprays). Properties near ravines or with heavy vegetation often choose one of the more frequent schedules.',
  },
  {
    question: 'Does spraying for mosquitoes work, or do they come right back?',
    answer: 'Professional barrier spray works — but it treats your property, not the regional source. Mosquitoes from nearby ravines, parks, or neighbouring properties will continue to fly toward your yard. The spray kills them when they land on treated vegetation to rest. This is why the treatment is renewed on a schedule rather than applied once: it reduces the adult mosquitoes resting in your yard, not the source population. Renewing it on your plan\'s schedule (every 2 weeks on Standard, monthly on Basic, weekly on Exclusive) keeps that going all season.',
  },
  {
    question: 'Is it better to spray in the morning or evening?',
    answer: 'Morning application (after dew has dried, typically 9–11 AM) is generally optimal. This gives the product maximum time to dry and bond to leaf surfaces before any evening humidity or dew. Mosquitoes are most active at dusk and dawn, so a morning application ensures protection is fully cured before peak activity. We avoid midday applications in direct intense sun, which can accelerate breakdown before the product fully cures.',
  },
  {
    question: 'How long after mosquito spray can you go outside?',
    answer: 'People and pets can go back into the treated area once the spray has dried, as the product label directs. During application and while the product is wet, we ask that people and pets stay indoors or away from the yard.',
  },
  {
    question: 'Does rain wash away mosquito spray?',
    answer: 'Heavy rain before the product has dried can wash it off. At BuzzSkito, we monitor weather forecasts before scheduling treatments, and every plan includes a rain-back guarantee: if rain falls within 1 hour of your treatment, we come back and re-treat free.',
  },
  {
    question: 'How many mosquito treatments do I need per season in Ontario?',
    answer: 'BuzzSkito plans cover the GTA mosquito season from May through September on three schedules: Basic is 5 sprays, one a month; Standard is 10 sprays, every 2 weeks, and is our most popular plan; Exclusive is 20+ sprays, weekly. Properties near ravines, rivers, or wetlands often choose Standard or Exclusive, because nearby breeding sites keep resupplying the yard. A single one-time treatment before a specific event (wedding, party) is also available, from $99 on a standard lot under 10,000 sq ft.',
  },
  {
    question: 'How long does DIY or store-bought mosquito spray last compared to professional?',
    answer: 'Store-bought yard sprays and foggers typically deliver about 1–2 days of protection before mosquitoes return. They are labelled for homeowner use, so check the product label for its own re-application interval. A professional barrier spray leaves a residual on the leaves where mosquitoes rest, and on a BuzzSkito plan that residual is renewed for you on schedule — every 2 weeks on Standard, monthly on Basic — so you are not re-spraying the yard yourself every few days.',
  },
  {
    question: 'How long after mosquito spray can dogs go outside?',
    answer: 'Dogs can go back outside once the barrier spray has dried, as the product label directs. While the product is still wet, keep pets indoors or off the treated area. If your dog tends to chew or graze on plants, keep it away from the treated shrubs.',
  },
  {
    question: 'How long should you stay off the lawn after mosquito spray?',
    answer: 'Stay off the treated area until the spray has dried, as the product label directs. Barrier spray targets the shaded shrubs and vegetation where mosquitoes rest rather than the open lawn, but the same wait-until-dry rule applies to any treated surface. Damp or overcast weather can extend drying time.',
  },
  {
    question: 'How long does mosquito fogging last?',
    answer: 'Mosquito fogging provides only short-term knockdown — typically a few hours up to about 1–3 days. Fogging (thermal or ULV) kills the adult mosquitoes flying at the moment of application but leaves little residual, so new mosquitoes move back in quickly. A residual barrier spray instead leaves a residual on the leaves where mosquitoes rest, renewed on your plan\'s schedule, which is why we use barrier spray rather than fogging in GTA yards.',
  },
  {
    question: 'How long does a mosquito barrier treatment last?',
    answer: 'A barrier treatment leaves a residual insecticide that dries onto the leaf and shrub surfaces where mosquitoes rest and kills them on contact when they land. Heavy rain before it dries, intense heat and UV, and dense untreated vegetation nearby all work against it, which is why BuzzSkito renews the residual on a fixed schedule from May through September — every 2 weeks on the Standard plan, monthly on the Basic plan. Every plan also includes a rain-back guarantee: rain within 1 hour of your treatment and we come back and re-treat free.',
  },
]

const AMZ_TAG = tagForSlug('how-long-does-mosquito-spray-last')

export default function MosquitoSprayLastPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date, dateModified: '2026-07-12' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How Long Does Mosquito Spray Last', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`, '2026-07-12')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Spray Duration</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">A professional mosquito barrier spray leaves a residual on the leaves where mosquitoes rest, and that residual is renewed every 2 weeks on BuzzSkito&rsquo;s Standard plan or monthly on Basic, while DIY store-bought sprays and foggers last just 1&ndash;2 days. Heavy rain before it dries and stretches of intense heat and UV work against it, which is why GTA yards are treated on a regular schedule from May through September.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Professional barrier spray leaves a residual on the leaves where mosquitoes rest, renewed on your plan&rsquo;s schedule (every 2 weeks on Standard, monthly on Basic).</li>
            <li>Consumer store-bought yard sprays and foggers deliver just 1&ndash;2 days of real protection.</li>
            <li>DEET personal repellent lasts 4&ndash;8 hours on skin; citronella candles only while burning.</li>
            <li>People and pets can re-enter the treated yard once the spray has dried, as the product label directs.</li>
            <li>BuzzSkito plans run May through September: Basic is 5 sprays monthly, Standard is 10 sprays every 2 weeks (most popular), and Exclusive is 20+ sprays weekly.</li>
            <li>Heavy rain before the spray dries can wash it off. {PROMISES.rainBack}</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>
        <BlogPostCTA />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={POST.date} dateModified={UPDATED} />
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          This guide breaks down exactly how long different mosquito treatments last, what shortens or extends protection, and how to build a schedule that keeps your GTA yard covered all season. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Mosquito Control Guide</Link>.
        </p>

        <h2>How Long Each Type of Mosquito Spray Lasts</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Treatment Type</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Rain Resistant?</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Professional barrier spray (BuzzSkito)', duration: 'Renewed on your plan’s schedule', rain: 'Rain-back guarantee' },
                { type: 'Consumer yard fogger spray', duration: '1–7 days', rain: 'Partially' },
                { type: 'Citronella candles/torches', duration: 'While burning only', rain: 'No' },
                { type: 'DEET personal repellent', duration: '4–8 hours (on skin)', rain: 'Minimal' },
                { type: 'Mosquito dunks (standing water)', duration: '30 days in water', rain: 'N/A' },
              ].map(({ type, duration, rain }) => (
                <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{type}</td>
                  <td className="px-4 py-2 text-brand-700 font-semibold">{duration}</td>
                  <td className="px-4 py-2 text-gray-600">{rain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AffiliateDisclosure />
        <p>The one DIY item from that table worth pairing with professional treatment: BTi mosquito dunks for any standing water you cannot drain (rain barrels, pond edges). They stop larvae for 30 days and complement — rather than replace — the barrier spray doing the yard-wide work. <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks on Amazon.ca →</BuyLink></p>

        <h2>How Professional Spray Differs From DIY Options</h2>
        <p>BuzzSkito&rsquo;s residual treatment is a licensed application according to label directions, aimed at the vegetation surfaces where mosquitoes rest, and it dries onto those leaves. That residual is renewed on your plan&rsquo;s schedule &mdash; every 2 weeks on the Standard plan, monthly on Basic &mdash; rather than left to fade. Consumer products are labelled for homeowner use, and each label sets its own application rate and re-application interval. Fogging works differently again: a thermal or ULV fogger kills the mosquitoes flying at the moment of application and leaves essentially no residual behind, so the yard is open again within hours — our guide to <Link href="/blog/mosquito-fogger-canada" className="text-brand-700 hover:underline">mosquito fogging</Link> covers when that short-term knockdown is still worth doing. For a full side-by-side breakdown, see our guide on <Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. professional mosquito control</Link>.</p>
        <p>If what you actually want is that few-hours knockdown before a specific evening &mdash; a backyard party, a graduation, a Saturday barbecue &mdash; the fogger is the tool built for it, and it is a different purchase from a sprayer. One Canadian caveat decides what you can put in it: the fogging concentrate has to carry a Canadian PCP registration number on the label, and the US-market concentrates are EPA-registered only, so buy the insecticide here rather than importing it with the machine. <BuyLink tag={AMZ_TAG} search="backyard mosquito fogger">Check backyard foggers on Amazon.ca &rarr;</BuyLink></p>
        <p>If you do apply your own registered concentrate between visits, the equipment decides how even the coverage actually is — and evenness is what buys you duration. The target is the underside of shaded leaves and the shrub line rather than the open lawn, and a one-litre trigger bottle holds neither the pressure nor the volume to wet that much foliage consistently, so you end up with patchy cover that thins out days before the rest. Perimeter and shrub work is done with a pump or backpack sprayer, at the rate and re-application interval printed on your product label. <BuyLink tag={AMZ_TAG} search="backpack pump sprayer">Check backpack sprayers on Amazon.ca &rarr;</BuyLink></p>
        <p>Check what you are allowed to put in it first. A homeowner in Ontario may only apply a product whose label carries a Pest Control Products (PCP) registration number <em>and</em> reads DOMESTIC class &mdash; Commercial and Restricted class products require an Ontario exterminator licence, which is the licence a professional company holds. Ontario&rsquo;s cosmetic pesticides ban (O. Reg. 63/09 under the Pesticides Act) prohibits many lawn-and-garden pesticide uses outright, with specific pathways for health-protection uses. Our <Link href="/blog/backpack-sprayer-canada" className="text-brand-700 hover:underline">Canadian backpack sprayer guide</Link> walks through the rules and the models, and the <Link href="/blog/field-king-backpack-sprayer-review-canada" className="text-brand-700 hover:underline">Field King review</Link> covers the one most homeowners end up with.</p>

        <h2>Does Spraying for Mosquitoes Actually Work?</h2>
        <p>Yes — with an important clarification. Barrier spray works by reducing the adult mosquitoes resting on your property, not by removing the source. Mosquitoes breed in standing water — ravines, ditches, neighbours' yards — and fly to your property looking for a place to rest and feed. When they land on treated vegetation, the residual insecticide kills them.</p>
        <p>This is why the barrier is renewed on a schedule (every 2 weeks on the Standard plan, monthly on Basic, weekly on Exclusive): you're maintaining an ongoing barrier against a continuous source, not making a one-time fix. The barrier also only ever deals with the mosquitoes that reach your yard, so any standing water you do control — rain barrels, clogged gutters, plant saucers — is worth treating with a BTI larvicide such as granular <Link href="/blog/mosquito-bits-canada-vs-dunks" className="text-brand-700 hover:underline">BTI mosquito bits</Link>, which kill the larvae before they ever emerge as adults. Homeowners near Toronto's ravines, Mississauga's Credit River, or any natural watercourse will see the most dramatic results because their mosquito pressure is highest and the treated barrier makes the biggest difference.</p>
        <p>Gutters are the standing water most people never look at. A blocked run holds a shallow film of warm water for days after a storm, which is exactly the nursery Culex wants, and it sits directly above the yard you just paid to have treated. Clearing them each spring and autumn is the fix; a mesh or micro-screen guard over the trough is what stops them filling with leaf litter again by August. <BuyLink tag={AMZ_TAG} search="gutter guard mesh">Check gutter guards on Amazon.ca &rarr;</BuyLink></p>

        <h2>What Affects How Long Mosquito Spray Lasts?</h2>

        <h3>Rainfall</h3>
        <p>Heavy rain before the product has dried can wash it off. At BuzzSkito, we monitor weather forecasts and won't apply before heavy rain. {PROMISES.rainBack}</p>

        <h3>Temperature and UV Exposure</h3>
        <p>Extended periods of intense heat and direct sunlight can accelerate the breakdown of residual insecticides. In areas of your property in full sun, the residual may break down faster than in shaded areas. This is why we apply thorough coverage to all vegetation, including shaded areas where breakdown is slower.</p>

        <h3>Best Time to Spray: Morning vs. Evening</h3>
        <p>Morning application — after dew has dried, typically between 9 and 11 AM — gives the best results. This allows maximum drying time before evening humidity. We avoid direct midday sun applications in peak summer as intense UV can interfere with the curing process. Evening application is possible but leaves less drying time before overnight dew.</p>

        <h3>Vegetation Density</h3>
        <p>Dense shrubs and thick plant canopy require more product to achieve thorough coverage. Properties with heavy landscaping may need more frequent treatments to maintain effective protection through the vegetation.</p>
        <p>There is a homeowner-side lever here that costs nothing per visit: thinning the densest cover. Mosquitoes spend the day resting inside shaded, still, humid foliage, so an overgrown cedar run or a shrub bed that has closed in on itself is both more resting habitat and harder for any spray to penetrate to the leaf undersides. Opening those beds up with a trim in late spring means less habitat and better coverage on every treatment that follows. <BuyLink tag={AMZ_TAG} search="cordless hedge trimmer">Check hedge trimmers on Amazon.ca &rarr;</BuyLink></p>

        <h3>Mosquito Pressure from Neighbouring Properties</h3>
        <p>If adjacent properties have significant mosquito breeding or have dense untreated vegetation, you may experience more pressure at your property boundaries. This is normal — barrier spray is most effective when applied comprehensively, including property perimeters.</p>
        <p>Where that boundary pressure lands on one spot — a deck, a fire-pit ring, a dining table near the fence line — a heat-activated zone repeller is a reasonable second layer for a still evening. It holds a defined area around the furniture rather than treating the yard, so it complements the residual on the vegetation instead of replacing it, and it loses most of its effect in a breeze. <BuyLink tag={AMZ_TAG} search="thermacell mosquito repeller">Check patio zone repellers on Amazon.ca &rarr;</BuyLink></p>

        <h2>Re-Application Schedule for GTA Properties</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Plan</th>
                <th className="px-4 py-2 text-left">Schedule</th>
                <th className="px-4 py-2 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                { treatment: 'Basic — 5 sprays', timing: 'Monthly, May to September', why: 'One visit a month, starting at mosquito season onset in May and running into early fall, when GTA mosquitoes are still active' },
                { treatment: 'Standard — 10 sprays (most popular)', timing: 'Every 2 weeks, May to September', why: 'Half the gap between visits, including through the June–July peak of mosquito activity' },
                { treatment: 'Exclusive — 20+ sprays', timing: 'Weekly, May to September', why: 'For yards beside ravines, creeks, or wetlands with late-summer pressure from nearby water' },
                { treatment: 'Tick add-on — 5 sprays', timing: 'Through the season, with your mosquito visits', why: 'Includes the early-June tick nymph peak — $497 added to any mosquito plan, or $597 on its own, plus HST' },
              ].map(({ treatment, timing, why }) => (
                <tr key={treatment} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-brand-700">{treatment}</td>
                  <td className="px-4 py-2 text-gray-800">{timing}</td>
                  <td className="px-4 py-2 text-gray-600">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Whichever plan you choose, each visit renews the residual on the leaves, and every plan includes a rain-back guarantee: rain within 1 hour of a treatment and we come back and re-treat free. Timing your first spray to the local <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">start of mosquito season</Link> keeps the barrier ahead of peak populations.</p>
        <p>None of those schedules covers your skin once you leave the property — a neighbour&rsquo;s patio, a ball diamond, a ravine trail at dusk. That layer is a personal repellent carrying a Canadian PCP registration number, which in practice means DEET or icaridin (picaridin). The label sets the concentration, how often to reapply, and which products are appropriate for children, so read it rather than guessing from the bottle size. <BuyLink tag={AMZ_TAG} search="picaridin insect repellent">Check DEET and picaridin repellents on Amazon.ca &rarr;</BuyLink></p>

        <h2>How Long After Mosquito Spray Can You Go Outside?</h2>
        <p>People and pets can re-enter the treated area once the spray has dried, as the product label directs. During application and while the product is wet, people and pets should remain indoors or away from the yard.</p>

        <p>For reference, the <Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">full safety guide for mosquito spray around kids and pets</Link> covers all re-entry protocols in detail.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works</Link></li>
          <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
          <li><Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">How Much Does Mosquito Control Cost in Ontario? (2026 Pricing Guide)</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Dunks (BTi larvicide)" search="summit mosquito dunks" label="For standing water" />

      <CTASection heading="Professional Barrier Spray with a Rain-Back Guarantee" subtext={`${PROMISES.rainBack} ${PROMISES.biteFreeScope}.`} />
    </>
  )
}
