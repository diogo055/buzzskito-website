import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Forest Hill Toronto | BuzzSkito',
  description:
    'Professional mosquito control spray for Forest Hill homes. Ravine-adjacent properties face intense mosquito pressure from the Don Valley corridor. 30-day protection. Call (289) 216-5030.',
  canonical: '/forest-hill-mosquito-control',
})

const NEIGHBOURHOOD = 'Forest Hill'
const CITY = 'Toronto'
const SLUG = '/forest-hill-mosquito-control'

const FAQS = [
  {
    question: 'Why is Forest Hill particularly bad for mosquitoes?',
    answer: "Forest Hill's ravines and the Don Valley corridor directly adjacent to its east and south borders create significant mosquito pressure. The neighbourhood's mature, dense tree canopy — some of the densest in Toronto — provides ideal daytime resting habitat for mosquitoes that breed in the valley below. Properties on roads backing onto the ravine edge face the most intense activity.",
  },
  {
    question: 'When is mosquito season in Forest Hill?',
    answer: "Mosquito season in Forest Hill typically runs from late April through September, with peak activity from late May through July. Ravine-adjacent properties may notice activity beginning earlier in the season — sometimes as early as mid-April in warm years — as mosquitoes emerge from the valley vegetation.",
  },
  {
    question: 'How many treatments does a Forest Hill home need?',
    answer: "For Forest Hill properties with ravine exposure, we recommend 4–5 treatments spaced 21–28 days apart. This provides continuous coverage through the full active season. Properties further from the ravine edge may be well-protected with 3–4 visits. Our technician assesses your specific lot and recommends accordingly.",
  },
  {
    question: 'Does BuzzSkito serve Forest Hill specifically?',
    answer: "Yes. BuzzSkito serves all Forest Hill properties — both Forest Hill South and Forest Hill Village. We serve all surrounding Toronto neighbourhoods as well including Rosedale, Lawrence Park, Leaside, and the Annex. Call (289) 216-5030 for a free quote.",
  },
  {
    question: "Is mosquito spray safe for Forest Hill's mature trees and established gardens?",
    answer: "Yes. Our Health Canada–approved, water-based formula is applied to the undersides of leaves and shrub foliage — the surfaces mosquitoes actually rest on — not to tree bark, soil, or open blooms. Once dry (approximately 30 minutes), it is safe for pollinators, birds, and all garden inhabitants.",
  },
]

export default function ForestHillMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Toronto', url: '/toronto-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

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
            Forest Hill's ravine-adjacent properties and exceptional tree canopy create intense mosquito conditions. BuzzSkito provides professional barrier spray so Forest Hill families can enjoy their backyards all season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Forest Hill Has a Mosquito Problem</h2>
          <p>Forest Hill is one of Toronto's most desirable neighbourhoods — and also one of its most mosquito-affected. The Don Valley ravine system borders Forest Hill to the east and south, creating a direct connection between the valley's mosquito breeding habitat and residential properties. Forest Hill's exceptional tree canopy — mature oaks, maples, and elms found on nearly every street — provides dense daytime resting habitat that allows mosquito populations to persist throughout the season even on calm days.</p>
          <p>Properties on roads with ravine views or that back onto any valley edge consistently experience the heaviest pressure. Even interior properties benefit from barrier spray treatment given the dispersal range of mosquitoes from the Don Valley source population.</p>

          <h2>Our Approach for Forest Hill Properties</h2>
          <p>BuzzSkito treats all vegetation on your Forest Hill property — shrubs, garden borders, the underside of tree canopy where reachable, fence lines adjacent to ravine edges, and any ornamental plantings that provide resting habitat. For properties with direct ravine edge, we give particular attention to the property boundary and the transition zone between maintained lawn and any naturalized vegetation.</p>

          <h2>Part of Our Toronto Mosquito Control Network</h2>
          <p>We also serve all surrounding neighbourhoods. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control</Link> page for city-wide coverage details, or our <Link href="/rosedale-mosquito-control" className="text-brand-700 hover:underline">Rosedale</Link> and <Link href="/leaside-mosquito-control" className="text-brand-700 hover:underline">Leaside</Link> pages for adjacent neighbourhood coverage.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Forest Hill properties from mosquitoes. No contracts." />
    </>
  )
}
