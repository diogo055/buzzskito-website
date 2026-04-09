import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control York Mills Toronto | BuzzSkito',
  description:
    'Mosquito control in York Mills, Toronto. Barrier spray near Don Valley from $99. No contracts. Call (289) 216-5030.',
  canonical: '/york-mills-mosquito-control',
})

const NEIGHBOURHOOD = 'York Mills'
const CITY = 'Toronto'
const SLUG = '/york-mills-mosquito-control'

const FAQS = [
  {
    question: 'Why are mosquitoes a problem in York Mills?',
    answer: "York Mills sits directly above the Don Valley ravine, one of Toronto's most productive mosquito breeding corridors. The neighbourhood's most desirable properties — large-lot estates with sweeping ravine views — are also the most exposed to mosquito dispersal from the valley below. The Don River and its tributaries provide permanent breeding habitat, while York Mills' exceptional tree canopy creates ideal daytime resting conditions for arriving mosquitoes.",
  },
  {
    question: 'Which York Mills streets have the most mosquito activity?',
    answer: "Properties directly backing onto the Don Valley ravine — particularly along Old Yonge Street, Fifeshire Road, and the private estates on the ravine edge — experience the most intense mosquito pressure. Streets within 600 metres of the ravine edge on both sides of Yonge Street also see meaningful activity. Even properties further from the valley benefit from barrier spray given mosquitoes' documented 3 km dispersal range from Don Valley source populations.",
  },
  {
    question: 'How many treatments does a York Mills property need?',
    answer: "For ravine-adjacent York Mills properties, we recommend 4–5 treatments from May through September, spaced 21–28 days apart. Larger estate lots with extensive perimeter vegetation may require more thorough treatment than smaller residential lots — our technician will assess your property and recommend accordingly. Call (289) 216-5030 for a free quote.",
  },
  {
    question: "Is BuzzSkito's treatment safe for York Mills' established estate gardens?",
    answer: "Yes. Our Health Canada–approved, water-based formula is safe for application around all established plantings including mature specimen trees, formal hedges, perennial borders, and ornamental gardens. We apply it to resting surfaces — leaf undersides and shrub foliage — not to open blooms, bare soil, or tree trunks. After a 30-minute drying period, the area is fully safe for children, pets, and all garden pollinators.",
  },
  {
    question: 'Does BuzzSkito serve all of York Mills and surrounding North York?',
    answer: "Yes. We serve all of York Mills, Lawrence Park, Hoggs Hollow, and surrounding North York neighbourhoods. We also serve the full Toronto area. Call (289) 216-5030 to confirm service at your specific address and book your free assessment.",
  },
]

export default function YorkMillsMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Toronto', url: '/toronto-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/york-mills-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/toronto-mosquito-control" className="hover:text-white">Toronto</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, Toronto</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            York Mills' prestigious ravine-adjacent estates face some of North York's most intense mosquito pressure from the Don Valley below. BuzzSkito provides professional barrier spray so York Mills families can enjoy their grounds all season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>The York Mills Mosquito Challenge</h2>
          <p>York Mills shares the same dynamic as Rosedale and Forest Hill: the neighbourhood's most desirable properties are the most exposed to mosquitoes. The Don Valley ravine that creates the dramatic topography and privacy of York Mills' estate lots also sustains the mosquito populations that affect those same properties each summer. The valley's permanent streams, seasonal wet areas, and sheltered microclimate produce reliable, season-long mosquito breeding habitat directly below York Mills' residential areas.</p>
          <p>BuzzSkito treats all resting vegetation on your York Mills property — shrubs, ornamental hedges, garden borders, the underside of accessible tree canopy, and any fence lines adjacent to ravine edges. For larger estate lots, we give particular attention to the property's ravine-facing perimeter and any naturalized transition zones between maintained grounds and the valley edge.</p>

          <h2>Part of Our Toronto Mosquito Control Network</h2>
          <p>We serve all of York Mills and North York. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/willowdale-mosquito-control" className="text-brand-700 hover:underline">Willowdale</Link> and <Link href="/rosedale-mosquito-control" className="text-brand-700 hover:underline">Rosedale</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {NEIGHBOURHOOD}</h2>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting York Mills properties from Don Valley mosquitoes. No contracts." />
    </>
  )
}
