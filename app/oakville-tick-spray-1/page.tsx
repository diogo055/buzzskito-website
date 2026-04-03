import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Oakville | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Oakville. Serving Glen Abbey, Joshua Creek, Bronte, West Oak Trails & all Oakville neighbourhoods. Up to 90-day protection. Call (289) 216-5030.',
  canonical: '/oakville-tick-spray-1',
})

const CITY = 'Oakville'
const NEIGHBOURHOODS = ['Bronte','Glen Abbey','Joshua Creek','West Oak Trails','Clearview','Palermo','River Oaks','Kerr Village','Uptown Core']
const FAQS = [
  { question: 'Is Bronte Creek Provincial Park a tick risk for Oakville homeowners?', answer: 'Yes. Bronte Creek Provincial Park and the associated creek valley are established blacklegged tick habitat. Properties in Bronte, West Oak Trails, and other areas adjacent to the creek system face higher tick exposure risk. BuzzSkito\'s treatment creates a protective barrier at your property edge.' },
  { question: 'What tick species are found in Oakville?', answer: 'The blacklegged tick (deer tick) is the primary species of concern in Oakville and carries Lyme disease. American dog ticks are also present throughout the area. Both species benefit from the wooded, humid environments common along Oakville\'s creeks and natural areas.' },
]

export default function OakvilleTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray in ${CITY}, Ontario. Up to 90-day protection.`, slug: '/oakville-tick-spray-1', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/oakville-tick-spray-1' }])) }} />
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
            Bronte Creek, Glen Abbey's wooded ravines, and Oakville's natural trail systems are prime tick habitat. BuzzSkito provides professional tick spray to protect Oakville families from Lyme disease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Tick Risk in Oakville</h2>
          <p>Oakville's picturesque wooded landscape — Bronte Creek Provincial Park, the 16 Mile Creek corridor, and the many ravines woven through neighbourhoods like Glen Abbey and Joshua Creek — creates significant blacklegged tick habitat. Oakville's proximity to the Niagara Escarpment also means that tick populations from the escarpment can establish in adjacent residential neighbourhoods.</p>

          <h2>Oakville Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Also Providing Mosquito Control in Oakville</h2>
          <p>Bundle tick and mosquito protection. See our <Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Oakville mosquito control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/best-tick-control-yard-treatment" className="text-brand-700 hover:underline">Best Tick Control for Your Yard</Link></li>
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
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protecting Oakville families from Lyme disease since we started. No contracts." variant="dark" />
    </>
  )
}
