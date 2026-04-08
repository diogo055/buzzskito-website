import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control North York | BuzzSkito – Don Valley Ravine Protection',
  description:
    'Professional mosquito spray in North York. Serving Don Mills, Willowdale, Lawrence Park, Bayview Village, York Mills & all North York neighbourhoods. Don River valley and ravine system create intense seasonal mosquito pressure. Call (289) 216-5030.',
  canonical: '/north-york-mosquito-control',
})

const CITY = 'North York'
const SLUG = '/north-york-mosquito-control'
const TICK_SLUG = '/north-york-tick-spray'
const NEIGHBOURHOODS = ['Don Mills','Willowdale','Lawrence Park','York Mills','Bayview Village','Lansing','North York Centre','Parkwoods']
const FAQS = [
  {
    question: 'Why do Don Mills and Bayview Village properties have persistent mosquito problems?',
    answer: "Don Mills and Bayview Village back onto the Don River valley and Wilket Creek ravine — two of Toronto's widest and most continuously moist ravine systems. Serena Gundy Park sits at the confluence of the East Don River and Wilket Creek, with extensive floodplain forest that generates mosquitoes throughout the season. Properties on the valley edges in Don Mills, Parkwoods, and Bayview Village face an almost constant supply of adults drifting up from the ravine, particularly at dawn and dusk. Barrier spray on your yard vegetation is the practical solution for managing this pressure without affecting the ravine itself.",
  },
  {
    question: 'Is the Burke Brook ravine a mosquito source for Lawrence Park homeowners?',
    answer: "Burke Brook ravine, which runs through the heart of Lawrence Park, is one of North York's more significant neighbourhood-scale mosquito sources. The slow-moving stream, shaded by a mature canopy of sugar maples and white cedars, maintains the cool, humid conditions that mosquito larvae need to develop and that adults need to rest and survive between feedings. Sunnybrook Park and its associated creek margins extend this pattern east toward York Mills and Bayview Village. Homeowners backing directly onto Burke Brook or the ravine should prioritize early-May treatments.",
  },
  {
    question: 'Does Willowdale have as much mosquito pressure as the ravine areas?',
    answer: "Willowdale, North York Centre, and Lansing are more urban in character and generally have lower baseline mosquito pressure than the ravine-adjacent communities. However, mature street trees, garden ponds, improperly drained low-lying yards, and neighbourhood parks still produce localized pressure throughout the season. Willowdale homeowners with large, landscaped backyards — particularly those with ornamental water features or dense shrub borders — benefit meaningfully from professional barrier spray.",
  },
]

export default function NorthYorkMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/north-york-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From Burke Brook ravine in Lawrence Park to Serena Gundy Park in Don Mills — BuzzSkito delivers professional mosquito barrier spray to every North York neighbourhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in North York</h2>
          <p>North York is threaded by one of Toronto&apos;s most extensive ravine networks. The Don River valley runs along the eastern side of the district, with Wilket Creek and the East Don River feeding through Serena Gundy Park and the Lower Don. Sunnybrook Park — one of the city&apos;s largest ravine parks — extends the valley corridor west through Bayview Village and York Mills, while Burke Brook ravine cuts through the heart of Lawrence Park. The West Don Lands and its tributaries add further standing water habitat in the northwest reaches of the district near Parkwoods and Don Mills.</p>
          <p>This ravine network is one of North York&apos;s defining assets — but for homeowners, it means a dependable and often intense mosquito season. Adults emerging from ravine-bottom floodplains drift upslope into adjacent neighbourhoods throughout the summer, resting on yard vegetation and feeding at dusk. Professional barrier spray applied to your property&apos;s shrubs, hedges, and garden borders is the most effective way to manage this influx without impacting the ravine ecosystem itself.</p>

          <h2>North York Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all North York communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our North York Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Ravine-edge assessment</strong> — We identify your property&apos;s relationship to the valley, ravine slopes, and any standing water on or adjacent to your lot.</li>
            <li><strong>Full-yard barrier spray</strong> — All vegetation, hedges, fence lines, and ornamental plantings treated to eliminate resting adults and create a protective barrier.</li>
            <li><strong>28-day residual coverage</strong> — Health Canada–approved formula continues protecting between visits; safe for children and pets after a 30-minute dry time.</li>
            <li><strong>Seasonal program</strong> — Five visits May through September, timed to Don River valley and Burke Brook emergence patterns.</li>
          </ul>

          <h2>Also Providing Tick Control in North York</h2>
          <p>North York&apos;s ravine network — Don Valley, Serena Gundy Park, and Lawrence Park — provides extensive blacklegged tick habitat in the heart of Toronto. Tick populations have been confirmed along these corridors in recent years. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">North York tick spray service</Link> — bundling both treatments gives your property complete protection.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your North York property from mosquitoes this season. No contracts." />
    </>
  )
}
