import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Caledon | BuzzSkito – Rural Property Mosquito Spray',
  description:
    'Professional mosquito spray in Caledon. Serving Bolton, Caledon East, Palgrave, Inglewood, Alton & all Caledon communities. Humber River headwaters, Credit River, and Forks of the Credit drive intense rural mosquito pressure. Call (289) 216-5030.',
  canonical: '/caledon-mosquito-control',
})

const CITY = 'Caledon'
const SLUG = '/caledon-mosquito-control'
const TICK_SLUG = '/caledon-tick-spray'
const NEIGHBOURHOODS = ['Bolton','Caledon East','Caledon Village','Palgrave','Inglewood','Alton','Cheltenham','Belfountain']
const FAQS = [
  {
    question: 'Why is mosquito season so intense in rural Caledon?',
    answer: "Caledon sits at the headwaters of both the Humber River and the Credit River, two of Ontario's most significant watersheds. The rolling terrain captures and holds water across hundreds of natural ponds, beaver ponds, low-lying pasture depressions, and seasonal wetlands that don't drain quickly after rain. Unlike suburban municipalities where storm infrastructure manages runoff, Caledon's rural landscape retains water naturally — and that water is prime mosquito breeding habitat. Properties near the Credit River upper reaches, Forks of the Credit Provincial Park, or the Caledon Trailway corridor face a particularly long and intense season.",
  },
  {
    question: 'Do estate lots in Caledon need more treatments than smaller suburban properties?',
    answer: "Generally yes. Larger lots in Caledon often include features that generate local mosquito breeding: low-wet areas along fence lines, decorative ponds, horse troughs, livestock water sources, densely wooded windbreak plantings, and unmaintained areas where organic material and standing water accumulate. We recommend a thorough first-visit assessment for rural Caledon properties to identify all contributing sources before establishing a treatment schedule. Most estate lots benefit from five seasonal treatments, with some requiring six in particularly active years.",
  },
  {
    question: 'Is Forks of the Credit Provincial Park a mosquito source for nearby properties?',
    answer: "Forks of the Credit Provincial Park, near Inglewood and Belfountain, is one of the most picturesque areas in the GTA — and one of the most active mosquito source areas for nearby residential properties. The Credit River's upper reaches through the park create miles of floodplain wetland and riparian scrub that are highly productive mosquito breeding habitat. Properties in Inglewood and around Belfountain are among the first in Caledon to see heavy mosquito activity each spring.",
  },
]

export default function CaledonMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential and estate properties serving all ${CITY} communities.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential and rural properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/caledon-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From Bolton&apos;s Humber River frontage to Belfountain near the Forks of the Credit — BuzzSkito delivers professional mosquito barrier spray for Caledon&apos;s rural properties and estate lots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Caledon</h2>
          <p>Caledon&apos;s location at the headwaters of two major Ontario watersheds makes it one of the most mosquito-productive municipalities in the GTA region. The Humber River headwaters originate across multiple Caledon tributaries, while the Credit River&apos;s upper reaches flow through Inglewood and Belfountain before heading south through the Forks of the Credit Provincial Park. The Oak Ridges Moraine, which runs through the northern portion of Caledon, adds a further dimension of pond and wetland habitat through its unique groundwater recharge topography.</p>
          <p>Rural Caledon properties typically deal with mosquitoes at volumes that suburban homeowners rarely experience. Natural ponds, beaver impoundments, roadside ditches, and low-wet pasture areas all contribute to breeding pressure that begins as soon as temperatures consistently exceed 10°C in spring. The Caledon Trailway and adjacent agricultural hedgerow corridors further distribute mosquito populations across the municipality through the season.</p>

          <h2>Caledon Communities We Serve</h2>
          <p>BuzzSkito provides mosquito control across Caledon, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Caledon Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Rural property assessment</strong> — We identify ponds, wet areas, tree lines, and livestock features specific to your Caledon lot.</li>
            <li><strong>Full-yard barrier spray</strong> — Treatment of all vegetation, shrub borders, fence lines, and tree understorey within your property boundary.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula works continuously between visits; safe for kids, pets, and horses after a 30-minute dry time.</li>
            <li><strong>Flexible scheduling</strong> — We accommodate larger rural lots and multi-building properties common across Caledon.</li>
          </ul>

          <h2>Also Providing Tick Control in Caledon</h2>
          <p>Caledon sits at the heart of Ontario&apos;s highest confirmed blacklegged tick activity area. The Oak Ridges Moraine, forested creek corridors, and agricultural edge habitat create perfect tick conditions throughout the municipality. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Caledon tick spray service</Link> — for rural properties, combining both treatments is strongly recommended.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Caledon property from mosquitoes this season. No contracts." />
    </>
  )
}
