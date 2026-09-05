import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mosquito-repellent-guide-ontario-2026'
const DATE = '2026-04-26'
const UPDATED = '2026-09-04'
const TITLE = 'Mosquito Repellent Guide — Ontario 2026 (What Actually Works)'
const META_TITLE = 'Best Mosquito Repellent Canada 2026: Ranked'

const FAQS = [
  {
    question: 'What is the most effective mosquito repellent in 2026?',
    answer: 'For personal skin protection, DEET (up to 30% for adults, per Health Canada) and icaridin/picaridin (20%) remain the gold standard. Canadian labels put 25% DEET at up to 8 hours and 20% icaridin at up to 12; the Canadian Paediatric Society is more conservative at 5–8 hours for DEET and 5–7 for icaridin. Oil of lemon eucalyptus is the best-evidenced natural option, but check which lemon-eucalyptus active the label names: every synthetic PMD product registered in Canada is 10% PMD (Health Canada re-evaluation decision RVD2022-11), which the Canadian Paediatric Society rates at about 2 hours against mosquitoes, while the naturally sourced form — oil of lemon eucalyptus, hydrated, cyclized, sold as Citriodiol — is separately registered here at up to 30% and claims around 6 hours. For yard-wide protection, professional barrier spray applied to vegetation is dramatically more effective than personal repellents because it controls the population in your space rather than just on your skin.',
  },
  {
    question: 'Is DEET safe?',
    answer: 'Yes. DEET has been used for over 60 years and is the most extensively studied insect repellent. Health Canada approves DEET for use on adults and children 6 months and older, with concentration limits by age (10% max for children 6 months–12 years, up to 30% for adults). Despite long-standing internet myths, peer-reviewed research consistently shows DEET is safe when used as directed.',
  },
  {
    question: 'Picaridin vs DEET — which is better?',
    answer: 'Picaridin offers similar duration to DEET (6–10 hours at 20% concentration) without DEET\'s plastic/fabric-melting side effects. It\'s odourless and non-greasy. Many people prefer picaridin for everyday use; DEET still wins in extreme conditions (tropical jungles, dense bug pressure) at 30% — which is also the maximum concentration Health Canada permits for adults, so nothing stronger is sold here. For Ontario backyard use, 20% picaridin is excellent.',
  },
  {
    question: 'What about ultrasonic mosquito repellent devices?',
    answer: 'Multiple peer-reviewed studies have shown ultrasonic mosquito repellent devices have no measurable effect. The frequencies they produce do not deter mosquitoes. Health Canada agrees, listing electronic and ultrasonic devices among the products that do not protect well against biting insects. Save your money — these are marketing, not science.',
  },
  {
    question: 'Do mosquito-repellent bracelets work?',
    answer: 'No. Mosquito-repellent bracelets protect a few centimetres of skin around the wrist. Mosquitoes will simply bite your ankles, neck, or anywhere else exposed. Studies show they fail in real-world conditions despite marketing claims, and Health Canada lists repellent wristbands, neckbands and ankle bands among the products that do not protect well against biting insects.',
  },
  {
    question: 'What\'s the cheapest effective mosquito repellent?',
    answer: 'For personal use, a bottle of 20% icaridin or 25–30% DEET spray runs roughly $12–$25 and lasts most households a season — check current retail, since prices move. For yard-level control, Bti mosquito dunks (Summit Mosquito Dunks carry a Canadian label registered under the Pest Control Products Act — the PCP registration number is printed on the package) treat standing water at the source for well under the cost of a season of sprays. For full yard protection without personal repellent, professional barrier spray costs $99 per visit and controls the population for up to 30 days.',
  },
  {
    question: 'Are there mosquito repellents safe for babies?',
    answer: 'Health Canada says not to use a DEET repellent on an infant younger than 6 months, and that icaridin products should not be used under 6 months either — for babies, use a mosquito net over the crib or stroller. Two options do carry no age restriction on Health Canada’s personal insect repellents page: soybean-oil repellents, and metofluthrin clip-on devices (children should not change the refill disks). For children 6 months to 2 years, DEET is capped at 10% and no more than one application per day. Children 2 to 12 stay at that same 10% DEET ceiling but may apply up to 3 times daily — the concentration does not rise until after age 12, when Health Canada allows up to 30%.',
  },
  {
    question: 'When should I use repellent vs barrier spray?',
    answer: 'Personal repellent is for active outdoor activities (hiking, camping, evening walks). Barrier spray is for your home yard where you want continuous protection without re-applying repellent every time you step outside. The two strategies are complementary — most Ontario homeowners use barrier spray for their yard and personal repellent for off-property activities.',
  },
  {
    question: 'What is the best mosquito repellent in Canada?',
    answer: 'For skin, 20% icaridin (picaridin) is the best all-round mosquito repellent for most Canadians — odourless, and it will not damage plastics or fabrics. Natrapel is the version registered for sale in Canada under the Pest Control Products Act; its Canadian label claims up to 12 hours against mosquitoes and ticks, while the Canadian Paediatric Society uses a more conservative 5–7 hours. Imported bottles of other brands may not carry a Canadian PCP number — check the label. For the heaviest bug pressure such as cottage country or canoe trips, DEET edges it out; OFF Deep Woods sold in Canada is 25% DEET on an 8-hour label, and Health Canada allows adults up to 30%. And for a hands-off backyard, a Thermacell device or a professional barrier spray beats anything you put on your skin.',
  },
  {
    question: 'What is the best mosquito repellent device?',
    answer: 'The Thermacell patio repeller is the best mosquito repellent device for real-world use. Thermacell rates its fuel-powered repellers, including the Patio Shield, at a 15-foot (about 4.5 m) zone — roughly 225 sq ft, the size of an average deck — with no spray on your skin and no smoke; the 20-foot zone belongs to Thermacell’s larger rechargeable models. Skip ultrasonic plug-ins and repellent bracelets — peer-reviewed studies show they have no measurable effect, and Health Canada lists both electronic/ultrasonic devices and repellent wristbands among products that do not protect well against biting insects. For whole-yard, multi-week control, a professional barrier spray works on a different principle: it leaves a residual on the shaded vegetation where mosquitoes rest, so it covers the entire property instead of one seating area and keeps working between visits.',
  },
  {
    question: 'Do mosquito foggers work?',
    answer: 'Yard foggers (Cutter, Black Flag) do knock down adult mosquitoes for a few hours, which makes them handy right before a party or barbecue. One Canadian caveat: the fogger hardware is legal to own, but the fogging insecticide you put in it must carry a Health Canada PCP registration number — the US Cutter and Black Flag fogging concentrates are EPA-registered, not PMRA-registered, so do not import them. But the effect wears off the same evening once fresh mosquitoes drift in from neighbouring yards, and repeated fogging can harm pollinators. For lasting control, a professional barrier spray applied to resting vegetation lasts 21–30 days per treatment.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Best mosquito repellent in Canada 2026: 20% picaridin — 6–10 odourless hours; 25–30% DEET for cottage country. Ranked picks, tiers, and what to skip.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('mosquito-repellent-guide-ontario-2026')

export default function MosquitoRepellentGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to mosquito repellents for Ontario homeowners.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Repellent Guide', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Repellent Guide</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">An evidence-based 2026 buyer&rsquo;s guide. What actually repels mosquitoes, what&rsquo;s marketing, and which option fits your specific situation.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Natrapel 20% Picaridin Insect Repellent" asin="B0BYFF3S3V" search="natrapel picaridin insect repellent" label="Best overall repellent" />

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best all-round mosquito repellent for Canada in 2026 is 20% icaridin (picaridin) — 6–10 hours of odourless protection that won&rsquo;t melt plastics or fabrics. Natrapel is the 20% icaridin brand registered for sale in Canada under the Pest Control Products Act. For heavy cottage-country bug pressure, DEET still wins — the OFF Deep Woods sold in Canada is 25% DEET, and Health Canada allows adults up to 30%.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>20% picaridin protects for 6–10 hours, is odourless, and is safe on gear and plastics.</li>
              <li>25–30% DEET is the pick for cottage docks and dense bush — Canadian labels claim up to 8 hours, and Health Canada caps adults at 30%.</li>
              <li>Oil of lemon eucalyptus is the best-evidenced natural option, but read the active: synthetic PMD is registered in Canada only at 10% (Health Canada RVD2022-11), roughly 2 hours against mosquitoes, while the natural Citriodiol form is registered here at up to 30% and claims about 6 hours.</li>
              <li>The Thermacell Patio Shield creates a 15-foot (about 4.5 m) protection zone — roughly 225 sq ft — with no spray on your skin.</li>
              <li>Ultrasonic devices and repellent bracelets show no measurable effect in peer-reviewed studies — Health Canada lists both among products that do not protect well.</li>
              <li>For whole-yard control, professional barrier spray from $99 lasts 21–30 days per treatment.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>

          <p className="not-prose text-sm text-gray-600 mb-1">The repellents that actually pass the research test in Ontario — picaridin or DEET on skin, Thermacell for a still patio:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="natrapel picaridin insect repellent">Picaridin repellent on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="thermacell patio shield mosquito repeller">Thermacell patio repeller →</BuyLink>
          </div>
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">The <strong>best mosquito repellent</strong> in Canada for 2026 is 20% icaridin/picaridin (Natrapel is the brand registered here under the Pest Control Products Act) for everyday use, and 25–30% DEET when the bug pressure is heaviest — 30% being Health Canada&rsquo;s adult ceiling; the best mosquito repellent device is the Thermacell patio repeller. Dozens of other bottles line the shelves at Canadian Tire, Home Depot, and Shoppers Drug Mart, and most don&rsquo;t work as advertised — here is what the peer-reviewed research and Health Canada approvals say about each one.</p>

          <h2 id="best-repellents">Best Mosquito Repellents in Canada (2026)</h2>
          <p>Ranked by how well they hold up in real-world use and peer-reviewed testing. Every one below is protection you wear or place — for hands-off, whole-yard control skip to the strategy section. And if you only care about devices — Thermacell, traps, zappers — we&rsquo;ve ranked those head-to-head in our <Link href="/blog/best-mosquito-repellent-device-canada">best mosquito repellent device guide</Link>.</p>

          <div className="not-prose my-8">
            <AwardRow tag={AMZ_TAG}
              heading="Our Picks — Best Mosquito Repellents in Canada"
              awards={[
                {
                  badge: 'Best Overall',
                  name: 'Natrapel 20% Picaridin',
                  why: 'Odourless, long-wearing, and it won’t melt plastics or fabrics — and it is registered for sale in Canada under the Pest Control Products Act. The best all-round everyday backyard and travel pick for Ontario.',
                  search: 'natrapel picaridin insect repellent',
                  asin: 'B0BYFF3S3V',
                  score: 9.1,
                  featured: true,
                  pros: ['Canadian label claims up to 12 hrs vs mosquitoes and ticks', 'Odourless and non-greasy', 'Safe on gear, plastics and fabrics'],
                  cons: ['Slightly pricier than generic DEET', 'Protects skin only, not the yard'],
                },
                {
                  badge: 'Best for Heavy Bug Pressure',
                  name: 'OFF Deep Woods (25% DEET in Canada)',
                  why: 'The most-studied repellent in history and the pick when the bugs are relentless — cottage docks, canoe trips, and dense bush.',
                  search: 'off deep woods insect repellent',
                  score: 8.7,
                  pros: ['Up to 8 hours on the Canadian label', 'Decades of peer-reviewed evidence', 'Widely stocked in Canada'],
                  cons: ['Can damage plastics and synthetics', 'Noticeable odour'],
                },
                {
                  badge: 'Best Device',
                  name: 'Thermacell Patio Shield',
                  why: 'Warms a repellent mat to create the 15-foot (about 225 sq ft) zone Thermacell rates its fuel-powered repellers at — no spray on your skin.',
                  search: 'thermacell patio shield mosquito repeller',
                  score: 8.5,
                  pros: ['15 ft protection zone (~225 sq ft)', 'No skin spray or smoke', 'Great for still patios and campsites'],
                  cons: ['Needs calm, still air', 'Mats and fuel are consumables'],
                },
                {
                  badge: 'Best DEET-Free',
                  name: 'Repel Oil of Lemon Eucalyptus',
                  why: 'Lemon eucalyptus is the one natural repellent family Health Canada registers with real repellency evidence. Read the active before you buy: synthetic PMD is registered in Canada only at 10% (Health Canada RVD2022-11), while the naturally sourced Citriodiol form is registered here at up to 30%. Either way, check the label for a Canadian PCP number.',
                  search: 'repel lemon eucalyptus insect repellent',
                  score: 7.9,
                  pros: ['Best-evidenced natural active', 'DEET-free', 'Pleasant lemon scent'],
                  cons: ['Short duration — the Canadian Paediatric Society rates PMD at about 2 hrs vs mosquitoes', 'Health Canada: not for children under 3'],
                },
              ]}
              whichToBuy={
                <>
                  <strong>Everyday backyard and travel?</strong> The <em>Best Overall</em> picaridin is the easy call. <strong>Heading into heavy bush?</strong> Step up to the <em>Best for Heavy Bug Pressure</em> DEET. <strong>Want a still patio without spraying your skin?</strong> The <em>Best Device</em> Thermacell earns its spot — but to stop reaching for repellent at home entirely, nothing beats <Link href="/mosquito-control">professional barrier spray</Link> for whole-yard, multi-week control.
                </>
              }
            />
          </div>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="min-w-[560px] w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 text-gray-900">
                  <th className="py-3 pr-4 font-bold whitespace-nowrap">Repellent</th>
                  <th className="py-3 pr-4 font-bold whitespace-nowrap">Type</th>
                  <th className="py-3 pr-4 font-bold">Best for</th>
                  <th className="py-3 font-bold whitespace-nowrap">Where to buy</th>
                </tr>
              </thead>
              <tbody className="align-top text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">Natrapel Icaridin (20%)</td>
                  <td className="py-3 pr-4">Skin spray</td>
                  <td className="py-3 pr-4"><strong>Best overall</strong> — odourless everyday backyard &amp; travel pick; Canadian PCP-registered, label claims up to 12 hrs.</td>
                  <td className="py-3"><BuyLink tag={AMZ_TAG} search="natrapel picaridin insect repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">OFF Deep Woods (25% DEET in Canada)</td>
                  <td className="py-3 pr-4">Skin spray</td>
                  <td className="py-3 pr-4"><strong>Best for heavy bug pressure</strong> — cottage docks, canoe trips, dense bush.</td>
                  <td className="py-3"><BuyLink tag={AMZ_TAG} search="off deep woods insect repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">Thermacell Patio Shield</td>
                  <td className="py-3 pr-4">Area device</td>
                  <td className="py-3 pr-4"><strong>Best device</strong> — a 15&nbsp;ft (~225 sq ft) zone for still patios &amp; campsites, no skin spray.</td>
                  <td className="py-3"><BuyLink tag={AMZ_TAG} search="thermacell patio shield mosquito repeller" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">Oil of Lemon Eucalyptus / PMD (Repel)</td>
                  <td className="py-3 pr-4">Natural skin spray</td>
                  <td className="py-3 pr-4"><strong>Best DEET-free pick</strong> — plant-derived, real evidence; synthetic PMD is 10% in Canada (~2 hrs), natural Citriodiol up to 30% (~6 hrs).</td>
                  <td className="py-3"><BuyLink tag={AMZ_TAG} search="repel lemon eucalyptus insect repellent" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-gray-900">Backyard fogger (Cutter / Black Flag)</td>
                  <td className="py-3 pr-4">Yard fogger</td>
                  <td className="py-3 pr-4"><strong>Best one-off knockdown</strong> — clears a yard for hours before a party, not weeks. In Canada the fogging insecticide must carry a Health Canada PCP number; US concentrates are EPA-registered only.</td>
                  <td className="py-3"><BuyLink tag={AMZ_TAG} search="cutter backyard mosquito fogger" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-gray-900">Repellent bracelet / wristband</td>
                  <td className="py-3 pr-4">Wearable</td>
                  <td className="py-3 pr-4"><strong>Skip it</strong> — Health Canada lists repellent wristbands among products that do not protect well; you&rsquo;ll still get bitten on the ankles and neck.</td>
                  <td className="py-3"><BuyLink tag={AMZ_TAG} search="mosquito repellent bracelet" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Notice the pattern: every pick above protects <em>you</em>, not your yard. To stop reaching for repellent at home, pair any of them with a <Link href="/mosquito-control">professional yard barrier spray</Link> — and if ticks are a concern, our <Link href="/tick-control">tick control program</Link> treats the same visit.</p>

          <h2>The Tier System — Ranked by Evidence</h2>
          <p className="not-prose text-sm text-gray-600 mb-4 border-l-4 border-emerald-300 pl-4 py-2 bg-emerald-50 rounded-r">The actives Health Canada lists as registered for personal insect repellents in Canada are: <strong>DEET, icaridin, permethrin (factory-treated clothing only), soybean oil, metofluthrin, p-menthane-3,8-diol / oil of lemon eucalyptus,</strong> and a specific <strong>mixture of lemon, camphor, geranium, eucalyptus and pine-needle essential oils</strong>. Anything not on that list is not a registered personal repellent here, whatever its status in the United States. Look for a PCP number on the label.</p>

          <h3>🟢 Tier 1: Gold Standard (registered by Health Canada, peer-reviewed)</h3>
          <ul>
            <li><strong>DEET (up to 30% for adults)</strong> — the most-studied repellent in history. Canadian labels claim up to 8 hours (OFF Deep Woods 25%); the Canadian Paediatric Society rates 30% DEET at 5–8 hours. Health Canada caps adults at 30% and children 2–12 at 10%. Brands: OFF Deep Woods, Watkins.</li>
            <li><strong>Icaridin / picaridin (20%)</strong> — no plastic or fabric damage, odourless. Natrapel&rsquo;s Canadian label claims up to 12 hours against mosquitoes and ticks and 10 against black flies; the Canadian Paediatric Society uses a more conservative 5–7 hours. Health Canada: not for infants under 6 months.</li>
          </ul>
          <p className="text-sm text-gray-600"><strong>Correction (Sept 2026):</strong> this tier previously listed <strong>IR3535 (15–20%)</strong> as a Health Canada-approved option. It is not. IR3535 is EPA-registered in the United States, but it does not appear among the personal insect repellent actives Health Canada lists as registered in Canada, and we could not find a PCP-registered IR3535 product for the Canadian market.</p>

          <h3>🟡 Tier 2: Effective natural options</h3>
          <ul>
            <li><strong>Oil of lemon eucalyptus / PMD</strong> — the best-evidenced natural active, and registered by Health Canada. Health Canada registers two related lemon-eucalyptus actives, and the difference matters when you read a label. <strong>p-Menthane-3,8-diol (PMD)</strong> is the synthetic form: every PMD end-use product registered in Canada is <strong>10% PMD</strong> (Health Canada re-evaluation decision RVD2022-11 lists them all — they are the OFF! Botanicals line), and the Canadian Paediatric Society rates PMD at about 2 hours against mosquitoes and up to 5 against black flies. <strong>Oil of lemon eucalyptus, hydrated, cyclized</strong> (sold as Citriodiol) is the naturally sourced form and is separately registered here — Druide&rsquo;s made-in-Canada 30% Citriodiol repellent is registered with Health Canada and claims about 6 hours. So a 30% lemon-eucalyptus bottle is not automatically a US-only product; check which of the two actives the label names, and look for a PCP number. Health Canada: not for children under 3. Brands: OFF Botanicals (10% PMD), Druide (30% Citriodiol).</li>
          </ul>

          <h3>🟠 Tier 3: Real but short-duration</h3>
          <ul>
            <li><strong>Soybean oil products</strong> (Bite Blocker) — ~1.5 hours. Registered in Canada; Health Canada states there are no age restrictions on these products.</li>
            <li><strong>Registered essential-oil blend sprays</strong> — short-lived, roughly an hour or two, but legitimately registered. Not for children under 2.</li>
            <li><strong>Citronella oil skin sprays — no longer a registered option in Canada.</strong> Health Canada&rsquo;s PMRA proposed phasing out citronella-oil <em>personal</em> insect repellents after its 2004 re-evaluation, reconsidered following public feedback, and set out a new framework for essential-oil repellents in regulatory directive DIR2017-02. The outcome for buyers today: citronella does not appear on Health Canada&rsquo;s current list of registered personal repellent actives — the only essential-oil entry on that list is a specific mixture of lemon, camphor, geranium, eucalyptus and pine-needle oils. Citronella candles, coils and torches remain registered as <em>area</em> repellents — a different, and weak, product class.</li>
          </ul>

          <h3>🔴 Tier 4: Marketing more than mosquitoes (avoid)</h3>
          <ul>
            <li><strong>Ultrasonic devices</strong> — Studies confirm: zero effect. Health Canada lists electronic and ultrasonic devices among products that do not protect well.</li>
            <li><strong>Bracelets and wristbands</strong> — Protects only the wrist. Health Canada lists repellent wristbands, neckbands and ankle bands among products that do not protect well. If someone in your household already wears one and wants to know whether they are getting anything at all from it, our breakdown of <Link href="/blog/mosquito-repellent-bracelets-canada">mosquito repellent bracelets in Canada</Link> covers the narrow situations where a band is still worth wearing — a few minutes outdoors, or alongside a real repellent rather than instead of one.</li>
            <li><strong>Generic essential oil blends</strong> — 15–60 minutes weak repellency.</li>
            <li><strong>Bug zappers</strong> — Kill mostly beneficial insects, not biting mosquitoes; Health Canada lists electrocuting devices among products that do not protect well against biting insects. (CO2 traps have the strongest trapping research of any trap category, but note that Health Canada also lists odour-baited mosquito traps as not protecting people from bites as well as a personal repellent — see our <Link href="/blog/mosquito-magnet-canada">Mosquito Magnet review</Link>.)</li>
            <li><strong>Mosquito-repelling plant beds</strong> — Tiny effect; oils only release when leaves are crushed. Health Canada names citrosa houseplants specifically as a product that does not protect well.</li>
          </ul>

          <h2>What to Buy for What Situation</h2>
          <ul>
            <li><strong>Backyard BBQ (2–3 hours):</strong> 20% picaridin spray.</li>
            <li><strong>Long hike or camping:</strong> 30% DEET (Health Canada&rsquo;s adult maximum) or 20% icaridin.</li>
            <li><strong>Kids 2–12 years:</strong> DEET no stronger than 10%, up to 3 times a day — or 20% icaridin, which the Public Health Agency of Canada&rsquo;s travel-medicine committee and the Canadian Paediatric Society name as first choice for ages 6 months to 12 years. Health Canada&rsquo;s 10% DEET ceiling holds all the way to age 12; it does not rise with age within that band. For 6 months to 2 years, DEET is limited to one application per day.</li>
            <li><strong>Babies under 6 months:</strong> Health Canada says no DEET and no icaridin. Use a mosquito net over the crib or stroller plus long sleeves. Soybean-oil repellents and metofluthrin clip-ons are the two categories Health Canada lists with no age restriction. Parents at this stage almost always ask about the sticker-and-patch format next, because nothing goes on the baby&rsquo;s skin — what those patches realistically deliver, and why they are a supplement to a net rather than a replacement for one, is covered in our guide to <Link href="/blog/mosquito-repellent-stickers-patches-canada">mosquito repellent stickers and patches in Canada</Link>.</li>
            <li><strong>Pregnant women:</strong> The Public Health Agency of Canada&rsquo;s travel-medicine guidance considers DEET (20–30%) and icaridin (20%) safe in pregnancy and while breastfeeding, and Health Canada states adults including pregnant women may wear permethrin-treated clothing. Health Canada&rsquo;s repellent page itself sets no separate pregnancy approval, so treat this as PHAC guidance rather than a label approval.</li>
            <li><strong>Pets in yard:</strong> Don&rsquo;t apply human repellents to pets. Use vet-prescribed flea/tick preventatives + professional yard barrier spray.</li>
          </ul>

          <h2>The Strategy Most Ontario Homeowners Miss</h2>
          <p>Personal repellent is for outdoor activities <em>away</em> from your property. For your own backyard, a much better strategy is <strong>professional barrier spray</strong> — applied to vegetation perimeters and shrub interiors where mosquitoes rest. This controls the population in your yard for 21–30 days at a time, so you don&rsquo;t need to apply repellent every time you step outside. It works because of what the treatment is aimed at: every mosquito that bites you is a female needing a blood meal to develop her eggs — males feed on nectar and never bite — and those females spend the day resting in shaded leaf cover rather than out over open lawn, which is why the shrub interiors get sprayed and the grass largely does not. Our explainer on the <Link href="/blog/male-vs-female-mosquito">difference between male and female mosquitoes</Link> lays out the behaviour every repellent and every barrier spray is really working against.</p>
          <p>Most homeowners think the choice is between DIY repellent or nothing. The third option — and usually the best one — is professional yard treatment so personal repellent becomes unnecessary at home. That is the model we run across the GTA from our Mississauga base: the same May-to-September programs behind our <Link href="/toronto-mosquito-control">mosquito control in Toronto</Link> and <Link href="/mississauga-mosquito-control">Mississauga mosquito spraying</Link>.</p>

          <h2>Cost Comparison (per Ontario season)</h2>
          <ul>
            <li><strong>DIY personal repellent only:</strong> roughly $30–$60 a season for sprays and reapplications (approximate — retail prices move)</li>
            <li><strong>Bti mosquito dunks (water source treatment):</strong> a season&rsquo;s supply is the cheapest line on this list; Summit Mosquito Dunks are sold in Canada under a Health Canada label registered per the Pest Control Products Act, with the PCP number printed on the package</li>
            <li><strong>BuzzSkito Basic seasonal (5 sprays):</strong> $549</li>
            <li><strong>BuzzSkito Standard seasonal (10 sprays):</strong> $994</li>
          </ul>
          <p>For most Ontario yards, the Standard plan delivers a continuously bug-free yard from May through September. The cost works out to ~$100/month for full-yard control — comparable to monthly grocery spend on patio dinners that are now actually enjoyable. Season pricing scales with lot size, so if you are comparing a bottle of repellent against a full program, start with <Link href="/mosquito-control-cost">what mosquito control costs in Ontario</Link> by property size.</p>

          <h2>What to Skip</h2>
          <ul>
            <li>Ultrasonic plug-ins or yard devices (zero evidence)</li>
            <li>Mosquito-repelling bracelets/wristbands</li>
            <li>Citronella tiki torches — registered in Canada as area repellents, but Health Canada notes lanterns and coils do not protect people from bites as well as a personal repellent (roughly a 1-metre downwind effect)</li>
            <li>Bug zappers (kill the wrong insects)</li>
            <li>&ldquo;DIY essential oil&rdquo; sprays from Pinterest (most don&rsquo;t work)</li>
          </ul>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — Honest Guide</Link></li>
            <li><Link href="/blog/mosquito-repellent-plants-ontario">10 Mosquito-Repelling Plants for Ontario</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href="/blog/best-mosquito-repellent-device-canada">Best Mosquito Repellent Devices in Canada — Ranked</Link></li>
            <li><Link href="/blog/thermacell-e90-canada-review">Thermacell E90 Review — Canada</Link></li>
            <li><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Review — Is It Worth It in Canada?</Link></li>
            <li><Link href="/mosquito-control">Professional Yard Barrier Spray</Link></li>
          </ul>
        </div>
      </article>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Mosquito Repellent FAQ</h2>
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

      <CTASection heading="Skip Personal Repellent in Your Own Yard" subtext="Professional barrier spray controls the population, not just what's on your skin. From $99." variant="dark" />
    </>
  )
}
