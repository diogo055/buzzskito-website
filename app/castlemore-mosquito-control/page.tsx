import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Castlemore Brampton | BuzzSkito',
  description:
    'Professional mosquito control spray for Castlemore homes in Brampton. Humber River and conservation corridors drive intense seasonal mosquito activity. 30-day protection. Call (289) 216-5030.',
  canonical: '/castlemore-mosquito-control',
})

const NEIGHBOURHOOD = 'Castlemore'
const CITY = 'Brampton'
const SLUG = '/castlemore-mosquito-control'

const FAQS = [
  {
    question: 'Why does Castlemore have significant mosquito activity?',
    answer: "Castlemore sits in Brampton's northeast, adjacent to the Humber River corridor and Claireville Conservation Area — one of the GTA's largest conservation areas at over 1,500 hectares. The Humber River running along Castlemore's eastern boundary provides permanent flowing water, seasonal wet areas, and extensive streamside vegetation that sustain mosquito populations from May through September. The conservation area amplifies this with its ponds, wetlands, and naturalized vegetation.",
  },
  {
    question: 'Is Claireville Conservation Area a major mosquito source for Castlemore?',
    answer: "Yes. Claireville Conservation Area — which includes Claireville Reservoir, West Humber River, and large tracts of naturalized wetland — is one of the most significant mosquito breeding zones in Brampton. Properties in Castlemore adjacent to or within 2 km of the conservation area boundary experience consistent season-long dispersal from this source. The conservation area's protected status means the breeding habitat will remain, making property-level barrier spray the most reliable control strategy.",
  },
  {
    question: 'When is mosquito season in Castlemore?',
    answer: "Castlemore's mosquito season runs from late April through September. Peak activity occurs from late May through July, when temperatures and moisture conditions are optimal and source populations in the conservation area and Humber River are at their largest. Activity remains meaningful through August and into September near the conservation area boundary.",
  },
  {
    question: 'How many treatments does a Castlemore home need per season?',
    answer: "For properties near Claireville Conservation Area or the Humber River, we recommend 4–5 treatments spaced 21–28 days apart from May through September. Properties further from these features may need 3–4 visits. Call (289) 216-5030 for a free assessment at your specific Castlemore address.",
  },
  {
    question: 'Does BuzzSkito serve all of Castlemore and northeast Brampton?',
    answer: "Yes. We serve all Castlemore streets and all adjacent northeast Brampton communities. We also serve all surrounding areas including Vaughan and all of Brampton. Call (289) 216-5030 to confirm service at your specific address.",
  },
]

export default function CastlemoreMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Brampton', url: '/brampton-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/castlemore-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/brampton-mosquito-control" className="hover:text-white">Brampton</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Castlemore's proximity to Claireville Conservation Area and the Humber River creates consistent season-long mosquito pressure. BuzzSkito provides professional barrier spray so Castlemore families can enjoy their outdoor spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Claireville Conservation Area and Castlemore Mosquitoes</h2>
          <p>Claireville Conservation Area — one of the largest conservation areas in the GTA at over 1,500 hectares — borders Castlemore on the east and provides extensive protected habitat that functions as a persistent mosquito source for adjacent residential areas. Claireville Reservoir, the West Humber River corridor, and the large naturalized wetland sections within the conservation area sustain breeding populations throughout the season. Because the conservation area is protected land, the breeding habitat cannot be reduced — making property-level barrier spray the most practical approach for Castlemore homeowners.</p>
          <p>BuzzSkito treats all resting vegetation on your Castlemore property, with particular attention to the perimeter facing the conservation area or Humber River corridor. A single treatment provides up to 30 days of residual protection on all treated surfaces.</p>

          <h2>Part of Our Brampton Mosquito Control Network</h2>
          <p>We serve all of Castlemore and surrounding Brampton. See our <Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">Brampton mosquito control</Link> page for city-wide coverage, or our <Link href="/heart-lake-mosquito-control" className="text-brand-700 hover:underline">Heart Lake</Link> and <Link href="/springdale-mosquito-control" className="text-brand-700 hover:underline">Springdale</Link> pages for adjacent neighbourhood coverage.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Castlemore properties from conservation area mosquitoes. No contracts." />
    </>
  )
}
