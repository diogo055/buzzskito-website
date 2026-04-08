import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Bronte Oakville | BuzzSkito',
  description:
    'Professional mosquito control spray for Bronte homes in Oakville. Bronte Creek Provincial Park and Lake Ontario waterfront drive intense seasonal mosquito pressure. 30-day protection. Call (289) 216-5030.',
  canonical: '/bronte-mosquito-control',
})

const NEIGHBOURHOOD = 'Bronte'
const CITY = 'Oakville'
const SLUG = '/bronte-mosquito-control'

const FAQS = [
  {
    question: 'Why does Bronte have such significant mosquito pressure?',
    answer: "Bronte faces mosquito pressure from two major sources simultaneously. Bronte Creek Provincial Park — one of the GTA's largest provincial parks — borders the neighbourhood to the north and east, generating substantial mosquito populations from its creek, wetlands, and naturalized vegetation. To the south, the Lake Ontario waterfront and the Bronte Harbour area create a secondary coastal zone of mosquito activity. Bronte's combination of provincial park adjacency and waterfront access makes it one of Oakville's highest-pressure mosquito environments.",
  },
  {
    question: "How does Bronte Creek Provincial Park affect mosquito activity in my yard?",
    answer: "Bronte Creek Provincial Park contains the full Bronte Creek watershed — permanent creek flow, adjacent wetlands, floodplain vegetation, and the Bronte Creek reservoir. The park's protected status means this breeding habitat is permanent and untreatable at the source. Mosquitoes from the park can disperse up to 3 km into adjacent residential areas. Properties in Bronte within 1 km of the park boundary experience the most consistent season-long pressure.",
  },
  {
    question: 'How many treatments does a Bronte home need per season?',
    answer: "Bronte properties near Bronte Creek Provincial Park or the waterfront typically benefit from 4–5 treatments spaced 21–28 days apart from May through September. The park's proximity and waterfront humidity make Bronte one of the areas in Oakville where we most commonly recommend the full 5-treatment season program. Call (289) 216-5030 for a free assessment.",
  },
  {
    question: 'When does mosquito season run in Bronte?',
    answer: "Bronte's mosquito season runs from late April through September or early October. The lake's moderating effect on local temperatures means both earlier spring warming and later fall activity compared to inland Oakville. Bronte Creek Provincial Park sustains year-round water flow that allows early-season emergence. Peak activity is from late May through July.",
  },
  {
    question: 'Does BuzzSkito serve all of Bronte Oakville?',
    answer: "Yes. We serve all Bronte streets including those adjacent to Bronte Creek Provincial Park and the Lake Ontario waterfront. We also serve all surrounding Oakville neighbourhoods. Call (289) 216-5030 to confirm service at your specific Bronte address.",
  },
]

export default function BronteMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Oakville', url: '/oakville-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/bronte-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/oakville-mosquito-control" className="hover:text-white">Oakville</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Bronte's proximity to Bronte Creek Provincial Park and the Lake Ontario waterfront creates one of Oakville's most intense mosquito environments. BuzzSkito's barrier spray gives Bronte families 30-day protection per treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Bronte's Multi-Source Mosquito Problem</h2>
          <p>Bronte is one of Oakville's most desirable waterfront communities — and also one of its most mosquito-affected. <strong>Bronte Creek Provincial Park</strong> generates significant pressure from the north and east: the park's Bronte Creek corridor, wetlands, and naturalized parkland habitat are permanent, protected breeding zones that cannot be treated at the source. Properties adjacent to the park experience season-long dispersal from this population.</p>
          <p>The <strong>Lake Ontario waterfront</strong> and <strong>Bronte Harbour</strong> add a secondary zone of activity, with shoreline vegetation and the high-humidity coastal microclimate sustaining mosquito activity through the evening hours. BuzzSkito's barrier spray creates a treated zone around your Bronte property — targeting all resting vegetation on your lot — providing up to 30 days of protection between treatments regardless of the pressure coming from either source.</p>

          <h2>Part of Our Oakville Mosquito Control Network</h2>
          <p>We serve all of Bronte and surrounding Oakville. See our <Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Oakville mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/glen-abbey-mosquito-control" className="text-brand-700 hover:underline">Glen Abbey</Link> and <Link href="/west-oak-trails-mosquito-control" className="text-brand-700 hover:underline">West Oak Trails</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Bronte properties from provincial park and waterfront mosquitoes. No contracts." />
    </>
  )
}
