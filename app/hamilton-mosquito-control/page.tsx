import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Hamilton | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito control spray in Hamilton. Serving Ancaster, Dundas, Stoney Creek, Waterdown, Westdale & all Hamilton neighbourhoods. Call (289) 216-5030.',
  canonical: '/hamilton-mosquito-control',
})

const CITY = 'Hamilton'
const NEIGHBOURHOODS = ['Stoney Creek','Dundas','Ancaster','Westdale','Waterdown','Rymal','Downtown Hamilton','Mount Hope','Binbrook','Flamborough']
const FAQS = [
  { question: 'Why does Hamilton have a significant mosquito problem?', answer: 'Hamilton\'s unique geography — the Niagara Escarpment, numerous creeks flowing to Hamilton Harbour, and Cootes Paradise wetlands — creates extensive mosquito breeding habitat. Neighbourhoods near Cootes Paradise, Spencer Creek, and the Waterfront Trail experience particularly high mosquito activity.' },
  { question: 'Does BuzzSkito serve Ancaster and Dundas?', answer: 'Yes. We serve all Hamilton communities including Ancaster, Dundas, Waterdown, Stoney Creek, Westdale, and all other Hamilton neighbourhoods. Call (289) 216-5030 for service availability.' },
]

export default function HamiltonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: '/hamilton-mosquito-control', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: '/hamilton-mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Hamilton's escarpment, creeks, and Cootes Paradise create some of Southern Ontario's most intense mosquito pressure. BuzzSkito provides professional barrier spray so Hamilton families can enjoy summer without the bite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Hamilton Needs Professional Mosquito Control</h2>
          <p>Hamilton's geography is a perfect storm for mosquito activity. The Niagara Escarpment channels moisture into the lower city, while Cootes Paradise — one of the most significant wetland areas in the Great Lakes basin — provides enormous breeding habitat adjacent to Hamilton's residential west end. Spencer Creek, Red Hill Creek, and the many smaller watercourses that flow through Hamilton neighbourhoods provide additional breeding sites throughout the city.</p>
          <p>Neighbourhoods like Westdale, Ainslie Wood, and Ancaster, which back onto wooded ravines and creeks, experience the most intense mosquito pressure. Even central Hamilton properties are not immune, as mosquitoes travel several kilometres from breeding sites.</p>

          <h2>Hamilton Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Also Providing Tick Control in Hamilton</h2>
          <p>Hamilton's Escarpment trails, Dundas Valley, and conservation areas are significant tick habitat. See our <Link href="/hamilton-tick-spray-1" className="text-brand-700 hover:underline">Hamilton tick control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/west-nile-virus-mosquito-risk-ontario" className="text-brand-700 hover:underline">West Nile Virus & Mosquito Risk in Ontario</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – {CITY} Mosquito Control</h2>
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
      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Serving all Hamilton neighbourhoods. No contracts, guaranteed results." />
    </>
  )
}
