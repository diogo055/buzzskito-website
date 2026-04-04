import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Fletcher\'s Meadows Brampton | BuzzSkito',
  description:
    'Professional mosquito control spray for Fletcher\'s Meadows homes in Brampton. Humber River, stormwater ponds, and Creditview Creek create seasonal mosquito pressure. 30-day protection. Call (289) 216-5030.',
  canonical: '/fletcher-meadows-mosquito-control',
})

const NEIGHBOURHOOD = "Fletcher's Meadows"
const CITY = 'Brampton'
const SLUG = '/fletcher-meadows-mosquito-control'

const FAQS = [
  {
    question: "Why does Fletcher's Meadows have elevated mosquito activity?",
    answer: "Fletcher's Meadows sits in northwest Brampton, adjacent to the Humber River corridor on its west side and containing multiple stormwater management ponds within the development. The Humber River provides a continuous, seasonally active mosquito breeding corridor from its watershed source areas through Brampton. The neighbourhood's internal ponds add a secondary local breeding source, and the combination of both factors makes Fletcher's Meadows one of the more mosquito-affected areas in northwest Brampton.",
  },
  {
    question: "Is the Humber River a significant mosquito source for Fletcher's Meadows?",
    answer: "Yes. The Humber River corridor — with its permanent flowing water, floodplain vegetation, and adjacent seasonal wet areas — sustains mosquito breeding from late April through September. Properties on Fletcher's Meadows' western streets closest to the Humber River floodplain face the highest consistent pressure. Mosquitoes from the Humber corridor can disperse up to 3 km, meaning the entire neighbourhood is within effective dispersal range.",
  },
  {
    question: "When is mosquito season in Fletcher's Meadows?",
    answer: "Mosquito season in Fletcher's Meadows runs from late April through September, with peak activity from late May through July. The Humber River's year-round water flow means breeding can begin earlier than in areas relying on seasonal rainfall alone. Stormwater pond contributions extend the active season into September.",
  },
  {
    question: "How many treatments does a Fletcher's Meadows home need?",
    answer: "For properties near the Humber River corridor or stormwater ponds, we recommend 4–5 treatments from May through September, spaced 21–28 days apart. Call (289) 216-5030 for a free assessment tailored to your specific address in Fletcher's Meadows.",
  },
  {
    question: "Does BuzzSkito serve all of Fletcher's Meadows?",
    answer: "Yes. We serve all Fletcher's Meadows streets and all surrounding northwest Brampton communities. Call (289) 216-5030 to confirm service availability and book your free quote.",
  },
]

export default function FletcherMeadowsMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Brampton', url: '/brampton-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

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
            Fletcher's Meadows faces mosquito pressure from the Humber River corridor and internal stormwater ponds. BuzzSkito's professional barrier spray delivers up to 30 days of protection per treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Humber River and Stormwater Ponds: Fletcher's Meadows' Mosquito Sources</h2>
          <p>Fletcher's Meadows sits at the intersection of two mosquito pressure sources that are common across northwest Brampton. The Humber River — one of the GTA's major river systems — creates a continuous breeding and dispersal corridor along the neighbourhood's western boundary. Its year-round flow, adjacent floodplain vegetation, and seasonal wet pockets sustain breeding from spring through fall. Internally, the neighbourhood's stormwater management ponds function as reliable annual breeding sites, warming quickly in spring and maintaining water through the summer.</p>
          <p>BuzzSkito's barrier spray creates a treated perimeter around your property, targeting all resting vegetation where mosquitoes from these sources land when they enter your lot. Once treated, the product provides up to 30 days of residual protection, eliminating arriving mosquitoes and deterring new arrivals throughout the protection window.</p>

          <h2>Part of Our Brampton Mosquito Control Network</h2>
          <p>We serve all of Fletcher's Meadows and surrounding northwest Brampton. See our <Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">Brampton mosquito control</Link> page for city-wide coverage, or our <Link href="/springdale-mosquito-control" className="text-brand-700 hover:underline">Springdale</Link> and <Link href="/heart-lake-mosquito-control" className="text-brand-700 hover:underline">Heart Lake</Link> pages for adjacent neighbourhood coverage.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Fletcher's Meadows properties from Humber River mosquitoes. No contracts." />
    </>
  )
}
