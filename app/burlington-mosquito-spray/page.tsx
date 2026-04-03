import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Spray Burlington | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito spray and control in Burlington. Serving Alton Village, Millcroft, The Orchard, Roseland, Shoreacres & all Burlington neighbourhoods. Call (289) 216-5030.',
  canonical: '/burlington-mosquito-spray',
})

const CITY = 'Burlington'
const NEIGHBOURHOODS = ['Alton Village','Millcroft','The Orchard','Roseland','Downtown Burlington','Shoreacres','Headon Forest','North Burlington','Palmer','Tyandaga','Brant Hills','Elizabeth Gardens']
const FAQS = [
  { question: 'Does Burlington\'s waterfront increase mosquito activity?', answer: 'Yes. Burlington Bay and the Lake Ontario shoreline provide breeding grounds for mosquitoes, and properties near Spencer Smith Park and Lasalle Park are particularly affected. BuzzSkito\'s barrier spray protects your property perimeter from waterfront mosquito pressure.' },
  { question: 'Is BuzzSkito\'s mosquito spray safe for Burlington\'s older mature-tree neighbourhoods?', answer: 'Absolutely. Our water-based formula is safe for application around mature trees, established gardens, and native plant landscaping. The product targets resting surfaces on leaf undersides and shrubs, not tree trunks or bark.' },
]

export default function BurlingtonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Spray ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: '/burlington-mosquito-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: '/burlington-mosquito-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Spray in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Burlington's waterfront, lush residential streets, and greenbelt corridors create ideal mosquito conditions all summer. Take back your backyard with BuzzSkito's professional barrier spray.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Take Back Your Burlington Backyard</h2>
          <p>Burlington's combination of waterfront access, mature tree canopy in established neighbourhoods like Roseland and Shoreacres, and newer developments with stormwater ponds makes it one of the GTA's more challenging cities for mosquito control. Burlington homeowners often notice the problem first near Burlington Bay, Spencer Creek, and the Niagara Escarpment greenbelt.</p>
          <p>BuzzSkito treats Burlington properties of all sizes, from compact Alton Village townhomes to larger estate lots in Shoreacres and Roseland. Our no-contract approach means you can book individual treatments or a full season package depending on your property's needs.</p>

          <h2>Burlington Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Also Providing Tick Control in Burlington</h2>
          <p>Burlington's wooded greenbelt corridors and Escarpment trails are significant tick habitat. See our <Link href="/burlington-tick-spray" className="text-brand-700 hover:underline">Burlington tick control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – {CITY} Mosquito Spray</h2>
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
      <CTASection heading={`Get a Free Mosquito Spray Quote in ${CITY}`} subtext="No contracts. Guaranteed results. Book your Burlington treatment today." />
    </>
  )
}
