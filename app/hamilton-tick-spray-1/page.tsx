import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Hamilton | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Hamilton. Serving Ancaster, Dundas, Waterdown, Stoney Creek, Westdale & all Hamilton neighbourhoods. 30-day tick protection. Call (289) 216-5030.',
  canonical: '/hamilton-tick-spray-1',
})

const CITY = 'Hamilton'
const NEIGHBOURHOODS = ['Stoney Creek','Dundas','Ancaster','Westdale','Waterdown','Rymal','Mount Hope','Binbrook','Flamborough','Ainslie Wood']
const FAQS = [
  { question: 'Is the Dundas Valley a tick risk area?', answer: 'Yes. The Dundas Valley Conservation Area is one of the most significant tick habitats in the Hamilton region. The combination of wooded trails, deer populations, and humid ravine conditions creates ideal conditions for blacklegged ticks. Properties in Dundas, Ancaster, and Westdale that back onto natural areas face meaningful tick risk.' },
  { question: 'How many tick treatments per year does Hamilton need?', answer: 'BuzzSkito recommends two Hamilton tick treatments per season: one in May or June targeting spring nymphs (the most dangerous Lyme disease transmission stage), and one in August or September for fall adult tick emergence. Each treatment provides up to 30 days of protection.' },
]

export default function HamiltonTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray in ${CITY}, Ontario. Up to 30-day protection.`, slug: '/hamilton-tick-spray-1', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/hamilton-tick-spray-1' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Hamilton's Dundas Valley, Escarpment trails, and conservation lands make it one of Southern Ontario's highest tick-risk regions. BuzzSkito protects Hamilton families with professional 30-day tick barrier spray.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Hamilton Backyards Are Prime Tick Zones</h2>
          <p>Hamilton has some of Southern Ontario's most significant tick habitat. The Dundas Valley Conservation Area, Niagara Escarpment trail system, Cootes Paradise, and the multiple creek valleys that cut through Hamilton all support thriving blacklegged tick populations. With increasing Lyme disease cases reported across Ontario — and Hamilton's large swaths of conservation land adjacent to residential neighbourhoods — professional tick control is increasingly essential for Hamilton homeowners.</p>
          <p>Our service targets the transition zones on your property where ticks congregate: lawn edges backing onto natural areas, leaf litter in garden beds, woodpiles, under decks and porches, and the base of shrubs and hedges.</p>

          <h2>Hamilton Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Also Providing Mosquito Control in Hamilton</h2>
          <p>Bundle tick and mosquito treatment for complete protection. See our <Link href="/hamilton-mosquito-control" className="text-brand-700 hover:underline">Hamilton mosquito control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
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
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Serving all Hamilton areas. Protecting families from Lyme disease." variant="dark" />
    </>
  )
}
