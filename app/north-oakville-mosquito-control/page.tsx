import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control North Oakville | BuzzSkito',
  description:
    'Professional mosquito control spray for North Oakville (Uptown Core, Dundas) homes. Stormwater ponds and Sixteen Mile Creek drive seasonal mosquito activity. 30-day protection. Call (289) 216-5030.',
  canonical: '/north-oakville-mosquito-control',
})

const NEIGHBOURHOOD = 'North Oakville'
const CITY = 'Oakville'
const SLUG = '/north-oakville-mosquito-control'

const FAQS = [
  {
    question: 'Why does North Oakville have a mosquito problem?',
    answer: "North Oakville — including communities like Uptown Core, Dundas, Glenorchy, and Preserve — is one of the fastest-growing areas in Halton Region. New developments in this area typically contain stormwater management ponds built to handle drainage from their large impervious footprints. These ponds become active mosquito breeding sites each season. Additionally, Sixteen Mile Creek and its tributaries run through North Oakville, adding natural water-source mosquito pressure alongside the engineered pond habitats.",
  },
  {
    question: 'Are stormwater ponds in North Oakville a significant mosquito source?',
    answer: "Yes. North Oakville contains numerous stormwater management ponds in newer subdivisions, and these ponds are among the most consistent mosquito breeding sites in the area. They maintain water year-round, have shallow warming margins, and support the aquatic vegetation structure that supports breeding. The Town of Oakville manages these ponds for drainage — not mosquito control. Barrier spray on your property is the most practical residential response.",
  },
  {
    question: 'When does mosquito season run in North Oakville?',
    answer: "North Oakville's mosquito season runs from late April through September. Stormwater ponds warm quickly in spring, often allowing emergence to begin earlier than at natural water bodies. Peak activity is from late May through July. Sixteen Mile Creek contributes to sustained late-season breeding through August and September.",
  },
  {
    question: 'How many treatments does a North Oakville home need per season?',
    answer: "For properties near stormwater ponds or Sixteen Mile Creek, 4 treatments from May through September are typically sufficient. Properties directly adjacent to ponds may benefit from 5 treatments. Call (289) 216-5030 for a free assessment tailored to your specific North Oakville address.",
  },
  {
    question: 'Does BuzzSkito serve all of North Oakville?',
    answer: "Yes. We serve all North Oakville communities including Uptown Core, Dundas, Glenorchy, Preserve, Rural Oakville, and all newer subdivisions. We also serve all of Oakville. Call (289) 216-5030 to confirm service at your specific address and book your free quote.",
  },
]

export default function NorthOakvilleMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Oakville', url: '/oakville-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/north-oakville-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/oakville-mosquito-control" className="hover:text-white">Oakville</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            North Oakville's rapidly growing communities contain stormwater ponds that create consistent seasonal mosquito breeding. BuzzSkito's professional barrier spray gives North Oakville families up to 30 days of protection per treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Stormwater Ponds and Mosquitoes in North Oakville</h2>
          <p>North Oakville's rapid development has produced one of the most pond-dense residential landscapes in Halton Region. Stormwater management ponds — required infrastructure in new subdivisions to handle runoff from paved surfaces — are built to hold water year-round. Their shallow, warm margins and aquatic vegetation provide ideal mosquito larval habitat. Many first-time homeowners in new North Oakville subdivisions discover in their first season that pond-facing backyards come with unexpected mosquito pressure not present in the sales centre renderings.</p>
          <p>Sixteen Mile Creek and its tributaries add natural creek-source pressure to the engineered pond pressure, particularly in the Dundas and Glenorchy areas. BuzzSkito's barrier spray creates a treated zone around your North Oakville property — targeting all resting vegetation — providing up to 30 days of protection per treatment regardless of the pond or creek proximity.</p>

          <h2>Part of Our Oakville Mosquito Control Network</h2>
          <p>We serve all of North Oakville and surrounding communities. See our <Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Oakville mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/west-oak-trails-mosquito-control" className="text-brand-700 hover:underline">West Oak Trails</Link> and <Link href="/glen-abbey-mosquito-control" className="text-brand-700 hover:underline">Glen Abbey</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting North Oakville properties from stormwater pond mosquitoes. No contracts." />
    </>
  )
}
