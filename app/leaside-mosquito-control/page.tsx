import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Leaside Toronto | BuzzSkito',
  description:
    'Mosquito control in Leaside, Toronto. Barrier spray near Don Valley from $99. Safe for kids & pets. Call (289) 216-5030.',
  canonical: '/leaside-mosquito-control',
})

const NEIGHBOURHOOD = 'Leaside'
const CITY = 'Toronto'
const SLUG = '/leaside-mosquito-control'

const FAQS = [
  {
    question: 'Why is Leaside affected by mosquitoes?',
    answer: "Leaside is bordered by the Don Valley ravine on its west and south sides, and Taylor Creek Park runs along its east. Both are established mosquito breeding corridors. The Don Valley in particular — with its permanent streams, dense vegetation, and sheltered microclimate — sustains large mosquito populations from May through August that disperse into adjacent Leaside properties each evening.",
  },
  {
    question: 'Which Leaside streets have the most mosquito activity?',
    answer: "Properties on Laird Drive, Randolph Road, Bessborough Drive, and other streets with direct ravine views or backing onto the Don Valley ravine consistently report the highest mosquito activity. Streets adjacent to Taylor Creek Park on Leaside's east side also experience elevated pressure. However, due to mosquito dispersal range (up to 3 km), even interior Leaside streets see meaningful activity throughout the season.",
  },
  {
    question: 'How many treatments does my Leaside property need?',
    answer: "For Don Valley or Taylor Creek-adjacent Leaside properties, we recommend 4–5 treatments from May through September. Interior properties with no direct ravine exposure may be well-served by 3–4 visits. Call (289) 216-5030 for a free assessment tailored to your specific property.",
  },
  {
    question: 'Does BuzzSkito serve East York and Moore Park as well?',
    answer: "Yes. We serve all of Leaside and the adjacent East York, Moore Park, Rosedale, and Thorncliffe Park neighbourhoods. Call (289) 216-5030 or visit our Toronto mosquito control page for city-wide coverage details.",
  },
  {
    question: "Is BuzzSkito's spray safe for Leaside's established residential gardens?",
    answer: "Yes. Our Health Canada–approved, water-based formula is safe for all established garden plantings. We apply it to the resting surfaces mosquitoes use — leaf undersides and shrub foliage — not to blooms, bare soil, or tree trunks. After a 30-minute drying period, the area is fully safe for children and pets.",
  },
]

export default function LeasideMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Toronto', url: '/toronto-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/leaside-mosquito-control')) }} />

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
            Leaside's proximity to the Don Valley and Taylor Creek corridors creates consistent seasonal mosquito pressure. BuzzSkito provides professional barrier spray so Leaside families can reclaim their outdoor spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Mosquito Pressure in Leaside</h2>
          <p>Leaside is one of Toronto's most established residential neighbourhoods — and one of the most consistently mosquito-affected, precisely because of its desirable ravine setting. The Don Valley borders Leaside's west and south edges, and Taylor Creek Park forms a natural corridor along the east. Both are active mosquito breeding zones from May through August, dispersing populations into adjacent residential properties throughout the season.</p>
          <p>BuzzSkito's barrier spray creates a treated zone around your Leaside property by targeting the vegetation where mosquitoes from these corridors rest when they arrive on your lot. This interrupts the cycle between the ravine source and your outdoor living areas, typically reducing active mosquito presence by 80–95% within the first 24 hours of treatment.</p>

          <h2>Part of Our Toronto Mosquito Control Network</h2>
          <p>We serve all of Leaside and surrounding areas. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control</Link> page for city-wide coverage, or our <Link href="/rosedale-mosquito-control" className="text-brand-700 hover:underline">Rosedale</Link>, <Link href="/east-york-mosquito-control" className="text-brand-700 hover:underline">East York</Link>, and <Link href="/don-mills-mosquito-control" className="text-brand-700 hover:underline">Don Mills</Link> pages for adjacent neighbourhood coverage.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Leaside properties from Don Valley mosquitoes. No contracts." />
    </>
  )
}
