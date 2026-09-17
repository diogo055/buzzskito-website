import type { Metadata } from 'next'
import Link from 'next/link'
import CityHero from '@/components/CityHero'
import CTASection from '@/components/CTASection'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Woodbridge Mosquito Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    "Woodbridge specialist mosquito barrier spray. Licensed Ontario operator, from $99/treatment, no contracts, rain-back guarantee on every plan. Sonoma Heights, West Woodbridge, East Woodbridge, Pine Valley. Call (289) 216-5030.",
  canonical: '/woodbridge-mosquito-control',
})

const CITY = 'Woodbridge'
const SLUG = '/woodbridge-mosquito-control'
const TICK_SLUG = '/woodbridge-tick-spray'
const NEIGHBOURHOODS = ['Islington Woods','Weston Downs','Pine Valley','Sonoma Heights','Vellore Village','East Woodbridge']
const FAQS = [
  {
    question: 'Do you provide mosquito control in Woodbridge and Kleinburg?',
    answer: 'Yes. BuzzSkito serves all of Woodbridge including Islington Woods, Weston Downs, Pine Valley, Sonoma Heights, Vellore Village, and East Woodbridge. We also serve Kleinburg village and the surrounding rural properties along the Humber River. Call (289) 216-5030 to confirm service at your specific address.',
  },
  {
    question: 'Why is Islington Woods such a high-pressure mosquito area in Woodbridge?',
    answer: "Islington Woods backs directly onto the Humber River valley and is immediately adjacent to Boyd Conservation Area — two of Vaughan's most significant natural mosquito source areas. The neighbourhood's own mature tree canopy creates the cool, humid microclimate that adult mosquitoes prefer for resting, and the close proximity to the Humber River floodplain means that new adults are continuously emerging from the valley below throughout the season. Properties in Islington Woods typically see the earliest spring emergence and the longest active season of any Woodbridge neighbourhood.",
  },
  {
    question: 'Does the Pine Valley area have a different mosquito pattern than other Woodbridge neighbourhoods?',
    answer: "Pine Valley and Weston Downs are positioned near the Black Creek confluence and the Humber River corridor, giving them a similar though slightly less intense mosquito challenge compared to Islington Woods. The mature residential tree canopy throughout Pine Valley — many properties have large oaks and maples that create dense shade — provides excellent adult mosquito resting habitat. The golf course corridors in the area also contribute through their irrigation ponds and rough-edge vegetation. A May start to barrier spray treatment covers the main emergence window effectively.",
  },
  {
    question: 'How is professional barrier spray applied on a landscaped Woodbridge property?',
    answer: "Our licensed technician applies the barrier spray according to its label directions, as a fine mist to leaf surfaces on your vegetation and shrubs. Keep kids and pets off the treated area until the spray has dried, as the product label directs. We take care around any pollinator garden areas and avoid spraying directly on open flowers. Our technicians are fully licensed and trained in urban residential applications.",
  },
  {
    question: 'How many mosquito treatments does a Woodbridge property need per season?',
    answer: 'Season plans run May through September: Basic (5 sprays, monthly), Standard (10 sprays, every 2 weeks) or Exclusive (20+ sprays, weekly). Woodbridge properties near Boyd Conservation Area, the Humber River, or Black Creek typically benefit from Standard’s two-week spacing: new mosquitoes are continuously emerging nearby, making consistent re-application important. Properties further from these corridors may be well-served by Basic.',
  },
  {
    question: 'Does BuzzSkito provide tick control in Woodbridge as well?',
    answer: 'Yes. Boyd Conservation Area and the Humber River valley in Woodbridge are established blacklegged tick habitat. Properties in Islington Woods that back onto the Boyd Conservation Area boundary carry meaningful tick risk throughout the active season (May through October). Many Woodbridge homeowners bundle mosquito and tick treatments — both can be done on the same visit, so both pests are covered.',
  },
]

export default function WoodbridgeMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Woodbridge' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/woodbridge-mosquito-control', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: CITY },
        ]}
        title={<>{CITY} Mosquito Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Licensed Ontario pesticide operator treating every Woodbridge neighbourhood, from Islington Woods backing onto Boyd Conservation Area to Pine Valley&apos;s Black Creek corridor. Treatments applied according to label directions.</>}
        image="/spray-backyard.webp"
      />

      
      <TypicalPrices service="mosquito" city={CITY} />

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">How It Works</p>
          <h2 className="h2-display text-brand-950 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your property — identifying water features, dense vegetation, and mosquito pressure zones specific to your area.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies a barrier product, according to its label directions, to vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer.' },
              { step: '3', title: 'Rain-Back Guarantee', desc: 'Rain within 1 hour of your treatment? We come back and re-treat free, on every plan. Standard & Exclusive plans also carry the Bite-Free Guarantee.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-brand-800 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Woodbridge</h2>
          <p>Woodbridge occupies one of the most mosquito-active positions in Vaughan. The community is wrapped on its western and northern sides by Boyd Conservation Area — the Humber River&apos;s largest conservation park — with the Humber River floodplain running directly adjacent to Islington Woods and Weston Downs. Black Creek, which originates in Maple and flows south through Woodbridge, joins the Humber in this area, adding its own contribution of standing water habitat along the confluence zone near Pine Valley.</p>
          <p>The mature residential tree canopy that characterizes much of Woodbridge — particularly in Islington Woods and Weston Downs, where homes are often shaded by large oaks, maples, and spruce — amplifies the mosquito problem by providing ideal daytime resting conditions. Adult mosquitoes emerging from the Humber River floodplain drift into these shaded neighbourhoods and spend the day resting on leaf surfaces, fence lines, and hedges until they feed at dusk. Professional barrier spray targets these resting surfaces, and repeat visits keep the treated zone renewed as new mosquitoes drift in from the valley.</p>

          <h2>Woodbridge Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Woodbridge communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Woodbridge Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Canopy and valley-edge assessment</strong> — We map your property&apos;s relationship to the Humber River, Boyd Conservation Area, and Black Creek corridor.</li>
            <li><strong>Full-yard barrier spray</strong> — All vegetation, hedges, ornamental plantings, fence lines, and tree understorey treated on every visit.</li>
            <li><strong>Label-directed application</strong> — {PROMISES.labelLine}, by a licensed operator. Stay off treated areas until the spray has dried.</li>
            <li><strong>Seasonal program</strong> — Five visits (Basic), 10 (Standard) or 20+ (Exclusive) May through September, timed to Humber River and Boyd Conservation Area emergence patterns.</li>
          </ul>

          <h2>Also Providing Tick Control in Woodbridge</h2>
          <p>Boyd Conservation Area and the Humber River valley in Woodbridge are established blacklegged tick habitat — risk is high for properties adjacent to the conservation boundary, particularly in Islington Woods. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Woodbridge tick spray service</Link> — many homeowners bundle both treatments so both pests are covered through the season.</p>


          <CityPriceCard city={CITY} service="mosquito" />

          <h2>Pricing — Treatments from $99</h2>
          <p>BuzzSkito offers flexible pricing for every budget. No contracts, no cancellation fees.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Plan</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">Treatments</th>
                  <th className="px-4 py-3 text-left">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Single Treatment</td><td className="px-4 py-3 font-extrabold text-brand-700">From $99</td><td className="px-4 py-3">1</td><td className="px-4 py-3">One-time</td></tr>
                <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-semibold">Basic Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$549</td><td className="px-4 py-3">5</td><td className="px-4 py-3">Monthly (May–Sep)</td></tr>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Standard Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$994</td><td className="px-4 py-3">10</td><td className="px-4 py-3">Every 2 weeks</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold">Exclusive Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$2,049</td><td className="px-4 py-3">20+</td><td className="px-4 py-3">Weekly</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose">Pricing is for standard residential lots under 10,000 sq ft, plus HST. Larger properties receive custom quotes. <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">See full pricing details</Link> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a free quote</Link>.</p>

          <h2>Why Professional Treatment Outperforms DIY</h2>
          <p>Citronella candles, essential oil sprays, and consumer foggers provide temporary relief in a small radius — typically 30 minutes to 2 hours in the immediate area of use. Professional barrier spray treats the resting surfaces across your whole property, creating a residual barrier that is renewed on a set schedule through the season. The difference is coverage and duration: DIY products address symptoms; barrier spray addresses the source of activity on your lot.</p>
          <p>For a detailed comparison, see our <Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> guide.</p>

          <h2>When to Start Treatment</h2>
          <p>In the GTA, mosquito season typically runs from late April through September. The best time to book your first treatment is early-to-mid May, before populations peak. Starting early establishes a protective barrier before breeding cycles accelerate in June and July. <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">Read our full seasonal timing guide</Link>.</p>



          <h2>Compare Woodbridge Pest Control Options</h2>
          <p>Looking at all your Woodbridge pest control options? See our specialist guide: <Link href="/pest-control-woodbridge" className="text-brand-700 hover:underline font-semibold">Pest Control in Woodbridge</Link> — explains why a mosquito and tick specialist beats a generalist for the two pests that actually drive Woodbridge backyard misery.</p>
          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Testimonials</p>
          <h2 className="h2-display text-brand-950 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Katharine M.', text: 'Fantastic experience with the mosquito control last summer! We\u2019re re-signing for this season once again \u2014 we can finally enjoy our yard again in Mississauga.' },
              { author: 'Anthony', text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!' },
            ].map(({ author, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 150+ reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city={CITY} service="mosquito" location="price_card_faq" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Woodbridge property from mosquitoes this season. No contracts." />
    </>
  )
}
