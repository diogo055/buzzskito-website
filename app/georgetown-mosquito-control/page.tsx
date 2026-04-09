import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Georgetown | BuzzSkito – Credit River to Silver Creek Protection',
  description:
    'Mosquito control in Georgetown, Halton Hills. Professional barrier spray from $99. No contracts. Call (289) 216-5030.',
  canonical: '/georgetown-mosquito-control',
})

const CITY = 'Georgetown'
const SLUG = '/georgetown-mosquito-control'
const TICK_SLUG = '/georgetown-tick-spray'
const NEIGHBOURHOODS = ['Old Georgetown','Glen Williams','Norval','Stewarttown','Limehouse','Silver Creek','Halton Hills']
const FAQS = [
  {
    question: 'Why is Georgetown\'s Credit River frontage such an active mosquito zone?',
    answer: "The Credit River runs directly through Georgetown, with a wide floodplain valley and associated riparian forest that generates active mosquito breeding from May through September. The river's slower-moving sections between Georgetown and Norval hold standing water along the banks during and after rainfall, and the mature willow and alder canopy over the floodplain provides ideal resting habitat. Properties in Old Georgetown and along the river-facing streets in Norval and Stewarttown consistently see some of the highest mosquito activity in Halton Hills.",
  },
  {
    question: 'What about the Silver Creek and Limehouse conservation areas?',
    answer: "Silver Creek Conservation Area and Limehouse Conservation Area, both managed by Conservation Halton, contain stream corridors, ponds, and karst topography that creates unique standing water features — including water that pools in the limestone crevice landscape near Limehouse. Silver Creek itself runs through residential portions of Georgetown before reaching the conservation area, and properties along the Silver Creek corridor see elevated mosquito pressure particularly in June and July. Homeowners near these areas benefit from an early-May first treatment.",
  },
  {
    question: 'Is there a difference in mosquito pressure between older Georgetown and newer developments?',
    answer: "Old Georgetown and Glen Williams, which back onto the Credit River valley and have mature tree canopy and established garden landscapes, typically see the most intense pressure. Newer developments on Georgetown's northern and eastern fringes are further from the river and creek corridors, but they often include engineered stormwater ponds that provide local breeding habitat. In both cases, professional barrier spray is the most effective way to reduce mosquito activity on your property throughout the season.",
  },
]

export default function GeorgetownMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/georgetown-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From the Credit River valley through Old Georgetown to the Limehouse Conservation Area — BuzzSkito delivers professional mosquito barrier spray across all Georgetown neighbourhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Georgetown</h2>
          <p>Georgetown&apos;s location on the Credit River makes it one of the most naturally picturesque communities in Halton Hills — and one of the most active mosquito communities in the western GTA. The Credit River cuts directly through the centre of town, with a floodplain valley that widens as it approaches Norval and Stewarttown. The riparian forest along the river banks, combined with the karst limestone landscape of the Niagara Escarpment foothills nearby, creates a diverse mosaic of standing water, seeps, and shaded creek margins that are highly productive mosquito habitat.</p>
          <p>Silver Creek Conservation Area adds another dimension north of town, and the Limehouse Conservation Area, with its unique limestone quarry and pond features, creates additional breeding habitat upstream. The combination of the Credit River corridor and the Silver Creek system means Georgetown homeowners face pressure from multiple source areas throughout the season — typically running from early May through mid-September.</p>

          <h2>Georgetown Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Georgetown communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Georgetown Mosquito Treatment Process</h2>
          <ul>
            <li><strong>River and creek proximity review</strong> — We assess your property&apos;s position relative to the Credit River, Silver Creek, and any pond or wetland features.</li>
            <li><strong>Full-yard barrier spray</strong> — Complete treatment of shrubs, hedges, garden borders, fence lines, and tree understorey on every visit.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula provides continuous coverage between visits; safe for kids and pets after 30 minutes.</li>
            <li><strong>Seasonal program</strong> — Five visits May through September, aligned with Credit River corridor mosquito emergence patterns.</li>
          </ul>

          <h2>Also Providing Tick Control in Georgetown</h2>
          <p>Georgetown backs onto Credit River valley and Niagara Escarpment trail systems — confirmed tick habitat areas throughout Halton Hills. Properties near Glen Williams, Limehouse, and the conservation area trails are particularly at risk. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Georgetown tick spray service</Link> — most Halton Hills homeowners bundle both treatments for complete protection.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Georgetown property from mosquitoes this season. No contracts." />
    </>
  )
}
