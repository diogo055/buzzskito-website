import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control East York Toronto | BuzzSkito',
  description:
    'Professional mosquito control spray for East York homes. Don Valley and Taylor Creek corridors drive intense seasonal mosquito pressure. 30-day protection. Call (289) 216-5030.',
  canonical: '/east-york-mosquito-control',
})

const NEIGHBOURHOOD = 'East York'
const CITY = 'Toronto'
const SLUG = '/east-york-mosquito-control'

const FAQS = [
  {
    question: 'Why do East York properties have such a bad mosquito problem?',
    answer: "East York sits between two of Toronto's most active mosquito corridors: the Don Valley to its west and Taylor Creek Park running through its centre. Both provide ideal breeding conditions — permanent streams, seasonal wet areas, dense vegetation, and sheltered microclimates. From May through August, mosquitoes from these corridors disperse nightly into adjacent residential properties, with peak pressure occurring during the evening hours.",
  },
  {
    question: 'Which East York streets have the most mosquito activity?',
    answer: "Properties adjacent to Taylor Creek Park — particularly along Dawes Road, Cosburn Avenue, and streets backing onto the park ravine — consistently see the highest mosquito activity in East York. Streets bordering the Don Valley on East York's western edge also experience elevated pressure. Even interior East York streets away from ravines are affected by dispersal from these major source populations.",
  },
  {
    question: 'When does mosquito season start in East York?',
    answer: "East York's mosquito season typically begins in late April or early May, with peak activity from late May through July. The Taylor Creek and Don Valley microclimates can support earlier emergence in warm springs. Activity tapers in August and September but remains meaningful through the end of summer, particularly near ravine edges.",
  },
  {
    question: 'How many treatments does an East York property need per season?',
    answer: "For properties adjacent to Taylor Creek Park or the Don Valley, we recommend 4–5 treatments from May through September, spaced 21–28 days apart. Interior East York properties with no direct ravine exposure are typically well-protected with 3–4 treatments. Call (289) 216-5030 for a free assessment tailored to your specific address.",
  },
  {
    question: 'Does BuzzSkito serve all East York neighbourhoods?',
    answer: "Yes. We serve all East York communities including Danforth Village, Woodbine Heights, O'Connor-Parkview, East End-Danforth, and all streets adjacent to Taylor Creek and the Don Valley. We also serve all surrounding areas including Leaside, Scarborough, and all of Toronto. Call (289) 216-5030 to confirm availability at your address.",
  },
]

export default function EastYorkMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Toronto', url: '/toronto-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/east-york-mosquito-control')) }} />

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
            East York sits between the Don Valley and Taylor Creek Park — two of Toronto's most active mosquito corridors. BuzzSkito provides professional barrier spray so East York families can enjoy their yards all season long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>East York's Mosquito Corridors</h2>
          <p>East York is bracketed by two significant mosquito source zones. The Don Valley runs along the western border, while Taylor Creek Park — a continuous greenway stretching east to west through the heart of East York — creates a secondary breeding and dispersal corridor that affects properties on both sides of the park trail. Taylor Creek itself provides permanent moving water, adjacent seasonal wet areas, and dense streamside vegetation that sustains mosquito populations from the first warm days of spring through September.</p>
          <p>BuzzSkito's barrier spray targets the resting vegetation on your East York property — shrubs, fence lines, garden borders, and the underside of lower tree canopy — creating a treated zone that eliminates arriving mosquitoes from these corridors before they reach your patio or play area. A single treatment delivers up to 30 days of residual protection.</p>

          <h2>Part of Our Toronto Mosquito Control Network</h2>
          <p>We serve all of East York and surrounding areas. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/leaside-mosquito-control" className="text-brand-700 hover:underline">Leaside</Link> and <Link href="/don-mills-mosquito-control" className="text-brand-700 hover:underline">Don Mills</Link> for adjacent neighbourhood coverage.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/when-to-schedule-first-mosquito-treatment-ontario" className="text-brand-700 hover:underline">When to Book Your First Mosquito Treatment of the Season</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting East York properties from Don Valley and Taylor Creek mosquitoes. No contracts." />
    </>
  )
}
