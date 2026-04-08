import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Don Mills Toronto | BuzzSkito',
  description:
    'Professional mosquito control spray for Don Mills homes. The Don Valley ravine and Flemingdon Park green corridors create significant seasonal mosquito pressure. 30-day protection. Call (289) 216-5030.',
  canonical: '/don-mills-mosquito-control',
})

const NEIGHBOURHOOD = 'Don Mills'
const CITY = 'Toronto'
const SLUG = '/don-mills-mosquito-control'

const FAQS = [
  {
    question: 'Why does Don Mills have a significant mosquito problem?',
    answer: "Don Mills was designed as Canada's first planned community, with abundant green space and ravine corridors woven throughout the neighbourhood. While that greenery is a key part of Don Mills' appeal, the Don Valley ravine on its western border and the numerous smaller ravines, ponds, and stormwater features within the community provide extensive mosquito breeding and resting habitat. The neighbourhood's mature tree canopy — some of the densest in North York — extends daytime resting habitat for arriving mosquitoes.",
  },
  {
    question: 'Which parts of Don Mills have the most mosquito activity?',
    answer: "Properties backing onto the Don Valley ravine — particularly along the western edge of Don Mills near the ravine trail system — experience the most intense and consistent mosquito pressure. Properties near the Flemingdon Park ravine corridors and those adjacent to the neighbourhood's ponds and green spaces also report elevated activity. The entire community benefits from barrier spray given mosquitoes' 3 km dispersal range from the Don Valley source.",
  },
  {
    question: 'When does mosquito season run in Don Mills?',
    answer: "Mosquito season in Don Mills typically runs from late April through September, with the peak from late May through July. The Don Valley's sheltered microclimate can produce early emergence in warm springs. Activity gradually declines through August and September but remains meaningful near the ravine edge.",
  },
  {
    question: 'How many treatments does a Don Mills home need per season?',
    answer: "Don Valley-adjacent Don Mills properties typically benefit from 4–5 treatments spaced 21–28 days apart, from May through September. Properties further from the ravine may be well-served by 3–4 visits. Call (289) 216-5030 for a free property assessment and recommended schedule.",
  },
  {
    question: 'Does BuzzSkito serve all Don Mills streets?',
    answer: "Yes. We serve all of Don Mills including Flemingdon Park and all streets adjacent to the Don Valley ravine system. We also serve all surrounding areas including Leaside, East York, North York, and all of Toronto. Call (289) 216-5030 to confirm availability at your address and get a free quote.",
  },
]

export default function DonMillsMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Toronto', url: '/toronto-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/don-mills-mosquito-control')) }} />

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
            Don Mills' planned green corridors and ravine proximity to the Don Valley create ideal conditions for season-long mosquito activity. BuzzSkito delivers professional barrier spray so Don Mills families can reclaim their outdoor spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Mosquito Pressure in Don Mills</h2>
          <p>Don Mills was designed with green space as a central feature — and the same ravines and naturalized corridors that make it an attractive neighbourhood also create above-average mosquito conditions. The Don Valley ravine running along the western boundary is the primary source: its permanent streams, seasonal wet areas, and dense vegetation sustain mosquito populations from late April through September. The Flemingdon Park ravine system adds a secondary pressure zone on the neighbourhood's southern edge.</p>
          <p>BuzzSkito's barrier spray creates a treated perimeter around your Don Mills property by targeting the vegetation where incoming mosquitoes rest when they first arrive on your lot. This disrupts the movement from the ravine corridors into your immediate outdoor living area, typically reducing active mosquito presence by 80–95% within 24 hours of treatment.</p>

          <h2>Part of Our Toronto Mosquito Control Network</h2>
          <p>We serve all of Don Mills and surrounding neighbourhoods. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/leaside-mosquito-control" className="text-brand-700 hover:underline">Leaside</Link> and <Link href="/east-york-mosquito-control" className="text-brand-700 hover:underline">East York</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Don Mills properties from ravine mosquitoes. No contracts." />
    </>
  )
}
