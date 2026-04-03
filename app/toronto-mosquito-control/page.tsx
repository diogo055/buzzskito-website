import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Toronto | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito control spray in Toronto. Serving High Park, Etobicoke, North York, Scarborough, The Beaches & all Toronto neighbourhoods. Call (289) 216-5030.',
  canonical: '/toronto-mosquito-control',
})

const CITY = 'Toronto'
const NEIGHBOURHOODS = ['High Park','East York','Don Mills','The Beaches','Scarborough','North York','Etobicoke','Leslieville','Rosedale','Forest Hill']
const FAQS = [
  { question: 'Does mosquito control work in Toronto\'s ravine system?', answer: 'Yes. Toronto\'s extensive ravine system is one of the primary sources of mosquito pressure in the city. BuzzSkito treats your property\'s perimeter and any vegetation bordering ravines, creating an effective barrier against mosquitoes moving from the ravine into your yard.' },
  { question: 'Is mosquito spray safe near Toronto\'s urban gardens and pollinators?', answer: 'Our Health Canada–approved formula is applied to resting surfaces (undersides of leaves, shrubs) rather than directly to flowers or open areas. Once dried, it does not harm pollinators foraging on treated vegetation.' },
  { question: 'Do you serve all Toronto neighbourhoods?', answer: 'Yes, we serve all Toronto neighbourhoods including High Park, Etobicoke, North York, Scarborough, East York, The Beaches, Rosedale, Forest Hill, and more. Call (289) 216-5030 to confirm service at your address.' },
]

export default function TorontoMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: '/toronto-mosquito-control', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: '/toronto-mosquito-control' }])) }} />
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
            Toronto's ravines and green corridors make it one of the GTA's highest-risk cities for mosquitoes. BuzzSkito provides effective barrier spray for Toronto homeowners — safe, lasting protection for your yard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Toronto Has a Mosquito Problem</h2>
          <p>Toronto's extensive ravine system — the largest urban ravine network in North America — creates ideal conditions for mosquito breeding. The Don River Valley, Humber River, and Highland Creek corridors provide the standing water, dense vegetation, and humidity that mosquitoes need to thrive. Neighbourhoods that back onto ravines, including Rosedale, Forest Hill, Don Mills, and East York, typically experience the most intense mosquito pressure.</p>
          <p>Even Toronto properties far from ravines aren't immune. Mosquitoes travel up to 3 km from breeding sites, and urban factors like basement window wells, flat roofs, and irregular gutters create new breeding opportunities throughout the city.</p>

          <h2>Toronto Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What's Included in Our Toronto Mosquito Treatment</h2>
          <ul>
            <li>Complete barrier spray of all vegetation and shrubs up to 10 feet high</li>
            <li>Targeted treatment of ravine-adjacent property edges and fence lines</li>
            <li>Up to 30 days of residual protection per visit</li>
            <li>Health Canada–approved formula — safe for kids and pets after 30 min</li>
            <li>Free reapplication if mosquitoes return within the protection window</li>
          </ul>

          <h2>Also Providing Tick Control in Toronto</h2>
          <p>Toronto's ravine system also harbours blacklegged ticks, which carry Lyme disease. Ask about our <Link href="/toronto-tick-spray-1" className="text-brand-700 hover:underline">Toronto tick control service</Link>.</p>

          <h2>Related Mosquito Control Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0,2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {CITY}</h2>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Toronto home from mosquitoes this season." />
    </>
  )
}
