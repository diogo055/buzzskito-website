import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Burlington | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Burlington. Serving Alton Village, Millcroft, The Orchard, Roseland & all Burlington neighbourhoods. Up to 30-day tick protection. Call (289) 216-5030.',
  canonical: '/burlington-tick-spray',
})

const CITY = 'Burlington'
const NEIGHBOURHOODS = ['Alton Village','Millcroft','The Orchard','Roseland','Downtown Burlington','Shoreacres','Headon Forest','North Burlington','Palmer','Tyandaga','Brant Hills']
const FAQS = [
  { question: 'How much does tick spray cost in Burlington?', answer: 'Tick spray in Burlington starts from $99 per application. Properties near Bronte Creek Provincial Park, the Royal Botanical Gardens, or any conservation land boundary benefit most from both spring and fall treatments. No contracts. Call (289) 216-5030.' },
  { question: 'Does the Niagara Escarpment increase tick risk in Burlington?', answer: 'Yes. The Niagara Escarpment and the greenbelt corridors that run through Burlington — including Spencer Creek Valley, Bronte Creek, and the Royal Botanical Gardens — are all established tick habitat. Properties near these areas, particularly in Headon Forest, Tyandaga, and Waterdown, have elevated tick risk.' },
  { question: 'Is tick control worth it in Burlington for families without pets?', answer: 'Absolutely. While pets are a common vector for bringing ticks onto your property, people are equally at risk. Children playing in the backyard, adults gardening, and anyone who spends time in a yard adjacent to naturalized areas is at risk for tick bites and Lyme disease exposure.' },
]

export default function BurlingtonTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray in ${CITY}, Ontario. Up to 30-day protection.`, slug: '/burlington-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/burlington-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/burlington-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Burlington's Escarpment greenbelt, Bronte Creek, and Royal Botanical Gardens create significant tick habitat throughout the city. BuzzSkito protects Burlington homeowners from Lyme disease with professional 30-day tick barrier spray.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Tick Spray Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional tick spray from <strong className="text-amber-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Tick Control Is No Longer Optional in Burlington</h2>
          <p>Burlington sits at the base of the Niagara Escarpment — one of Ontario's most significant tick habitat corridors. The Royal Botanical Gardens, Cootes Paradise, Spencer Creek valley, and Bronte Creek all serve as reservoirs for blacklegged ticks that spill into adjacent residential properties throughout the season.</p>
          <p>BuzzSkito's tick treatment is specifically designed for the Burlington environment, targeting the lawn edges, shaded garden areas, and wood-edge transition zones where ticks concentrate on residential properties.</p>

          <h2>Burlington Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Also Providing Mosquito Spray in Burlington</h2>
          <p>Bundle tick and mosquito protection. See our <Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline">Burlington mosquito spray service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Spray in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protecting Burlington families from Lyme disease. No contracts required." variant="dark" />
    </>
  )
}
