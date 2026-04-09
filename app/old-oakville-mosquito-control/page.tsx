import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Old Oakville | BuzzSkito',
  description:
    'Mosquito control in Old Oakville. Barrier spray near the lakeshore from $99. Safe for kids & pets. Call (289) 216-5030.',
  canonical: '/old-oakville-mosquito-control',
})

const NEIGHBOURHOOD = 'Old Oakville'
const CITY = 'Oakville'
const SLUG = '/old-oakville-mosquito-control'

const FAQS = [
  {
    question: 'Why does Old Oakville have a mosquito problem despite being an established neighbourhood?',
    answer: "Old Oakville's mosquito activity is directly tied to its desirable features. Sixteen Mile Creek runs along the neighbourhood's eastern edge, providing permanent flowing water and floodplain vegetation that sustains mosquito breeding. The Lake Ontario waterfront to the south creates a high-humidity microclimate that supports larger populations and extends evening activity. And Old Oakville's exceptional mature tree canopy — the largest oaks and maples in Oakville — provides dense daytime resting habitat for mosquitoes dispersing from these water sources.",
  },
  {
    question: "How does Sixteen Mile Creek affect Old Oakville mosquito activity?",
    answer: "Sixteen Mile Creek provides year-round flowing water, adjacent floodplain areas, and dense streamside vegetation — the core requirements for mosquito breeding and dispersal. The creek's proximity to Old Oakville's eastern residential streets means consistent season-long pressure for properties within the dispersal range. The historic Oakville Harbour area, where the creek meets Lake Ontario, concentrates mosquito activity from both sources simultaneously.",
  },
  {
    question: 'How many treatments does an Old Oakville home need per season?',
    answer: "For creek-adjacent or waterfront Old Oakville properties, we recommend 4–5 treatments spaced 21–28 days apart from May through September. Interior Old Oakville properties may be well-served by 3–4 treatments. The neighbourhood's mature tree canopy can extend effective mosquito activity later into the season, which is worth factoring into your treatment schedule. Call (289) 216-5030 for a free assessment.",
  },
  {
    question: "Is BuzzSkito's treatment safe for Old Oakville's established heritage gardens?",
    answer: "Yes. Our Health Canada–approved, water-based formula is safe for all established plantings including mature specimen trees, heritage garden features, and all ornamental plantings. We apply it to resting surfaces — leaf undersides and shrub foliage — not to open blooms, bare soil, or tree bark. After a 30-minute drying period, the area is fully safe for children, pets, and garden pollinators.",
  },
  {
    question: 'Does BuzzSkito serve all of Old Oakville?',
    answer: "Yes. We serve all Old Oakville streets including those adjacent to Sixteen Mile Creek and the Lake Ontario waterfront. We also serve all Oakville neighbourhoods. Call (289) 216-5030 to confirm service at your specific address and book your free quote.",
  },
]

export default function OldOakvilleMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Oakville', url: '/oakville-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/old-oakville-mosquito-control')) }} />

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
            Old Oakville's Sixteen Mile Creek, Lake Ontario waterfront, and exceptional mature canopy create significant seasonal mosquito pressure. BuzzSkito's professional barrier spray protects Old Oakville families all season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Old Oakville's Water and Canopy Mosquito Factors</h2>
          <p>Old Oakville's mosquito problem follows the same pattern seen in Rosedale and Forest Hill in Toronto: the features that make the neighbourhood most desirable — water proximity, mature tree canopy, established gardens — also create above-average mosquito conditions. <strong>Sixteen Mile Creek</strong> provides year-round flowing water and a continuous breeding corridor along the neighbourhood's eastern boundary. The <strong>Lake Ontario waterfront</strong> and <strong>Oakville Harbour</strong> combine water access with the high-humidity coastal microclimate that extends mosquito activity well into the evening hours.</p>
          <p>Old Oakville's exceptional tree canopy — majestic oaks and maples on many streets — completes the picture by providing dense daytime resting habitat, allowing arriving mosquito populations to persist within the neighbourhood between breeding cycles at the creek and shoreline.</p>

          <h2>Part of Our Oakville Mosquito Control Network</h2>
          <p>We serve all of Old Oakville and surrounding Oakville. See our <Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Oakville mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/glen-abbey-mosquito-control" className="text-brand-700 hover:underline">Glen Abbey</Link> and <Link href="/bronte-mosquito-control" className="text-brand-700 hover:underline">Bronte</Link>.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Old Oakville properties from creek and waterfront mosquitoes. No contracts." />
    </>
  )
}
