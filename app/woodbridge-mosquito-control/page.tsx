import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Woodbridge | From $99, No Contracts | BuzzSkito',
  description:
    'Professional mosquito barrier spray in Woodbridge. Boyd Conservation Area and Humber River drive intense mosquito pressure. Serving Islington Woods, Pine Valley, Sonoma Heights & all Woodbridge. Call (289) 216-5030.',
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
    question: 'Is professional barrier spray safe for my landscaped Woodbridge property?',
    answer: "Yes. Our Health Canada–approved, water-based barrier spray formula is applied as a fine mist to leaf surfaces on your vegetation and shrubs — it does not harm established trees, ornamental plants, or lawn turf. The product is safe for kids and pets to be on the treated area once the spray has dried, which typically takes 30 minutes under normal conditions. We take care around any pollinator garden areas and avoid spraying directly on open flowers. Our technicians are fully licensed and trained in urban residential applications.",
  },
  {
    question: 'How many mosquito treatments does a Woodbridge property need per season?',
    answer: 'For properties in Woodbridge — particularly those near Boyd Conservation Area, the Humber River, or Black Creek — we recommend 5 treatments from May through September, spaced 21–28 days apart. The proximity to Boyd Conservation Area and the Humber River valley means new mosquitoes are continuously emerging nearby, making consistent re-application important. Properties further from these corridors may be well-protected with 4 treatments.',
  },
  {
    question: 'Does BuzzSkito provide tick control in Woodbridge as well?',
    answer: 'Yes. Boyd Conservation Area and the Humber River valley in Woodbridge are established blacklegged tick habitat. Properties in Islington Woods that back onto the Boyd Conservation Area boundary carry meaningful tick risk throughout the active season (May through October). Many Woodbridge homeowners bundle mosquito and tick treatments — the same visit covers both for complete yard protection.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/woodbridge-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From Islington Woods backing onto Boyd Conservation Area to Pine Valley&apos;s Black Creek corridor — BuzzSkito delivers professional mosquito barrier spray to every Woodbridge neighbourhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Woodbridge</h2>
          <p>Woodbridge occupies one of the most mosquito-active positions in Vaughan. The community is wrapped on its western and northern sides by Boyd Conservation Area — the Humber River&apos;s largest conservation park — with the Humber River floodplain running directly adjacent to Islington Woods and Weston Downs. Black Creek, which originates in Maple and flows south through Woodbridge, joins the Humber in this area, adding its own contribution of standing water habitat along the confluence zone near Pine Valley.</p>
          <p>The mature residential tree canopy that characterizes much of Woodbridge — particularly in Islington Woods and Weston Downs, where homes are often shaded by large oaks, maples, and spruce — amplifies the mosquito problem by providing ideal daytime resting conditions. Adult mosquitoes emerging from the Humber River floodplain drift into these shaded neighbourhoods and spend the day resting on leaf surfaces, fence lines, and hedges until they feed at dusk. Professional barrier spray eliminates these resting adults and keeps new ones from establishing in your yard.</p>

          <h2>Woodbridge Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Woodbridge communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Woodbridge Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Canopy and valley-edge assessment</strong> — We map your property&apos;s relationship to the Humber River, Boyd Conservation Area, and Black Creek corridor.</li>
            <li><strong>Full-yard barrier spray</strong> — All vegetation, hedges, ornamental plantings, fence lines, and tree understorey treated on every visit.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula continues working between visits; safe for kids and pets after a 30-minute dry time.</li>
            <li><strong>Seasonal program</strong> — Five visits May through September, timed to Humber River and Boyd Conservation Area emergence patterns.</li>
          </ul>

          <h2>Also Providing Tick Control in Woodbridge</h2>
          <p>Boyd Conservation Area and the Humber River valley in Woodbridge are established blacklegged tick habitat — risk is high for properties adjacent to the conservation boundary, particularly in Islington Woods. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Woodbridge tick spray service</Link> — bundling both treatments gives your property complete protection through the season.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
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
