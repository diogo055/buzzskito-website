import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Aldershot Burlington | BuzzSkito',
  description:
    'Professional mosquito control spray for Aldershot homes in Burlington. Royal Botanical Gardens wetlands and Burlington Bay waterfront create intense seasonal mosquito pressure. 30-day protection. Call (289) 216-5030.',
  canonical: '/aldershot-mosquito-control',
})

const NEIGHBOURHOOD = 'Aldershot'
const CITY = 'Burlington'
const SLUG = '/aldershot-mosquito-control'

const FAQS = [
  {
    question: 'Why does Aldershot have such significant mosquito activity?',
    answer: "Aldershot faces mosquito pressure from two major sources. To the north and west, the Royal Botanical Gardens (RBG) — over 1,100 hectares of naturalized land including Cootes Paradise, the RBG wetlands, and the La Salle Park corridor — sustains large mosquito populations in protected habitat that cannot be treated. To the south, Burlington Bay and the Lake Ontario shoreline create waterfront mosquito conditions with the high-humidity coastal microclimate that extends evening activity. Aldershot sits between these two sources, making it one of Burlington's most consistently affected neighbourhoods.",
  },
  {
    question: "How does the Royal Botanical Gardens affect Aldershot mosquito activity?",
    answer: "The Royal Botanical Gardens' Cootes Paradise Marsh — a 245-hectare wetland — is one of the largest freshwater marshes in southern Ontario and one of the most productive mosquito breeding sites near Burlington. The RBG's protected status means this breeding habitat is permanent and untreatable at the source. Properties in Aldershot adjacent to or near the RBG boundary experience season-long dispersal from this major source population.",
  },
  {
    question: 'When is mosquito season in Aldershot?',
    answer: "Aldershot's mosquito season runs from late April through September or early October. The lake's coastal microclimate moderates temperatures, producing both earlier spring emergence and later fall activity than inland Burlington. The RBG wetlands sustain breeding throughout this entire window, making Aldershot's effective mosquito season one of the longer ones in the area.",
  },
  {
    question: 'How many treatments does an Aldershot home need per season?',
    answer: "For RBG-adjacent or waterfront Aldershot properties, we recommend 4–5 treatments from May through September, spaced 21–28 days apart. The combination of RBG and lakeshore pressure makes 5 treatments a common recommendation for Aldershot. Call (289) 216-5030 for a free assessment at your specific address.",
  },
  {
    question: 'Does BuzzSkito serve all of Aldershot?',
    answer: "Yes. We serve all Aldershot streets including those adjacent to the Royal Botanical Gardens and Burlington Bay waterfront. We also serve all surrounding Burlington communities. Call (289) 216-5030 to confirm service at your address and book your free quote.",
  },
]

export default function AldershotMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Burlington', url: '/burlington-mosquito-spray' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/burlington-mosquito-spray" className="hover:text-white">Burlington</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Aldershot sits between the Royal Botanical Gardens and Burlington Bay — two of Burlington's most significant mosquito source zones. BuzzSkito's barrier spray protects Aldershot families all season long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Caught Between the RBG and the Bay</h2>
          <p>Aldershot's location between the Royal Botanical Gardens and Burlington Bay creates a textbook multi-source mosquito environment. The <strong>Royal Botanical Gardens</strong> — and specifically Cootes Paradise Marsh, a 245-hectare protected wetland on its southern edge — generates sustained, season-long mosquito dispersal into adjacent Aldershot properties. With over 1,100 hectares of naturalized land in protected status, the RBG's breeding habitat will not be reduced. It is a permanent feature of Aldershot's mosquito landscape.</p>
          <p><strong>Burlington Bay</strong> and the Lake Ontario shoreline add a southern dimension, with waterfront vegetation, the harbour, and LaSalle Park contributing additional populations and the humidity microclimate that keeps mosquitoes active later into the evening. BuzzSkito's barrier spray treats all resting vegetation on your Aldershot property, creating a protected zone that eliminates arriving mosquitoes from both sources before they reach your outdoor living areas.</p>

          <h2>Part of Our Burlington Mosquito Control Network</h2>
          <p>We serve all of Aldershot and surrounding Burlington. See our <Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline">Burlington mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/alton-village-mosquito-control" className="text-brand-700 hover:underline">Alton Village</Link> and <Link href="/roseland-mosquito-control" className="text-brand-700 hover:underline">Roseland</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Hamilton &amp; Burlington Mosquito &amp; Tick Control Guide</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Aldershot properties from RBG and waterfront mosquitoes. No contracts." />
    </>
  )
}
