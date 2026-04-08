import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control The Beaches Toronto | BuzzSkito',
  description:
    'Professional mosquito control spray for The Beaches homes. Eastern Ravine, Ashbridge\'s Bay, and Lake Ontario waterfront create intense mosquito pressure. 30-day protection. Call (289) 216-5030.',
  canonical: '/the-beaches-mosquito-control',
})

const NEIGHBOURHOOD = 'The Beaches'
const CITY = 'Toronto'
const SLUG = '/the-beaches-mosquito-control'

const FAQS = [
  {
    question: 'Why does The Beaches have a significant mosquito problem?',
    answer: "The Beaches faces mosquito pressure from multiple directions simultaneously. Ashbridge's Bay — the marshland and wetland complex at the neighbourhood's eastern end — is one of the most productive mosquito breeding sites in Toronto. The Eastern Ravine (Glen Stewart Ravine and Williamson Park Ravine) creates a green corridor through the heart of the neighbourhood. Lake Ontario's shoreline vegetation and the high humidity microclimate near the water extend evening mosquito activity and support larger populations than inland areas at the same latitude.",
  },
  {
    question: 'When is mosquito season in The Beaches?',
    answer: "The Beaches has one of the longer effective mosquito seasons in Toronto. The lake's humidity and the sheltered ravines can produce mosquito activity from late April through early October in warm years. Peak pressure runs from late May through August. Ashbridge's Bay provides sustained late-season breeding habitat that keeps populations active in September when inland areas have already seen decline.",
  },
  {
    question: 'Which streets in The Beaches have the most mosquito activity?',
    answer: "Properties adjacent to the Eastern Ravine (Glen Stewart Ravine area, Williamson Park) experience the most consistent pressure from the ravine itself. Properties east of Woodbine Avenue closer to Ashbridge's Bay report elevated activity from the wetland complex. Lakefront properties along Queen Street East and south of Kingston Road benefit from lake breezes during the day but experience heightened evening activity from the combination of waterfront and ravine sources.",
  },
  {
    question: 'How many treatments does a Beaches home need per season?',
    answer: "The Beaches' multi-directional pressure from both ravines and Ashbridge's Bay typically warrants 4–5 treatments from May through September. Properties directly adjacent to the Eastern Ravine or within 500 metres of Ashbridge's Bay may benefit from 5 treatments given the sustained source pressure. Call (289) 216-5030 for a free assessment tailored to your specific address.",
  },
  {
    question: "Is BuzzSkito's spray safe for Beaches gardens near the lake?",
    answer: "Yes. Our Health Canada–approved, water-based formula is safe for all established garden plantings. We do not apply directly to water, waterfront vegetation in the riparian zone, or open blooms. For properties very close to Ashbridge's Bay or the lakefront, we can discuss your specific application plan to ensure it meets your comfort level. After a 30-minute drying period, the treated area is safe for children, pets, and pollinators.",
  },
]

export default function TheBeachesMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Toronto', url: '/toronto-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/the-beaches-mosquito-control')) }} />

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
            The Beaches faces mosquito pressure from Ashbridge's Bay, the Eastern Ravine, and Lake Ontario's waterfront — one of Toronto's most complex multi-source mosquito environments. BuzzSkito's barrier spray gives Beaches families their backyards back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>The Beaches Mosquito Environment</h2>
          <p>The Beaches is one of the few Toronto neighbourhoods where mosquito pressure arrives from multiple independent directions. <strong>Ashbridge's Bay</strong> — the wetland and marshland complex at the neighbourhood's east end — is among Toronto's most active mosquito breeding sites, with shallow standing water, emergent marsh vegetation, and protected microhabitats that sustain large populations throughout the season. The <strong>Eastern Ravine system</strong> (Glen Stewart Ravine, Williamson Park Ravine) creates a secondary corridor directly through the neighbourhood, carrying additional populations from higher-elevation breeding sites into residential areas.</p>
          <p>Lake Ontario's proximity adds a third factor: the elevated humidity near the waterfront extends evening mosquito activity and the shoreline vegetation along Ashbridge's Bay provides additional breeding and resting habitat. The result is an environment where even diligent source reduction on your property has limited effect — which makes professional barrier spray particularly valuable.</p>

          <h2>Part of Our Toronto Mosquito Control Network</h2>
          <p>We serve all of The Beaches and surrounding eastern Toronto. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/east-york-mosquito-control" className="text-brand-700 hover:underline">East York</Link> for adjacent neighbourhood coverage.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Beaches properties from waterfront and ravine mosquitoes. No contracts." />
    </>
  )
}
