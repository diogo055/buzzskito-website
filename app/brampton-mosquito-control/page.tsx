import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Brampton | BuzzSkito – Free Quotes',
  description:
    'Professional mosquito control spray in Brampton. Serving Mount Pleasant, Castlemore, Springdale, Fletcher\'s Meadow & all Brampton neighbourhoods. Call (289) 216-5030.',
  canonical: '/brampton-mosquito-control',
})

const CITY = 'Brampton'
const NEIGHBOURHOODS = ["Mount Pleasant","Gore Meadows","Castlemore","Springdale","Bramalea","Creditview","Fletcher's Meadow","Heart Lake","Sandringham"]
const FAQS = [
  { question: 'Why does Brampton have so many mosquitoes?', answer: 'Brampton\'s rapid residential development has created an abundance of drainage ponds, stormwater management areas, and new green spaces — all of which provide ideal mosquito breeding habitat. Neighbourhoods near the Etobicoke Creek and Heart Lake Conservation Area are particularly affected.' },
  { question: 'How quickly can BuzzSkito service my Brampton property?', answer: 'We typically schedule Brampton service visits within the same week for the current season. Call (289) 216-5030 for availability.' },
]

export default function BramptonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: '/brampton-mosquito-control', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: '/brampton-mosquito-control' }])) }} />
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
            Brampton's stormwater ponds and new green spaces fuel heavy mosquito activity each season. BuzzSkito provides professional barrier spray for Brampton homeowners — fast, effective, and guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Mosquito Pressure in Brampton</h2>
          <p>Brampton is one of Canada's fastest-growing cities, and that rapid development has created an abundance of mosquito breeding habitat. Stormwater management ponds, drainage ditches, and the many green spaces woven through neighbourhoods like Mount Pleasant, Castlemore, and Springdale provide constant breeding opportunities. The Etobicoke Creek and Heart Lake Conservation Area also contribute to elevated mosquito populations in their surrounding neighbourhoods.</p>
          <p>BuzzSkito's barrier spray program is designed for exactly this type of environment — targeting the vegetation, shrubs, and shaded areas near ponds and greenbelt that mosquitoes use as daytime resting sites.</p>

          <h2>Brampton Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Also Providing Tick Control in Brampton</h2>
          <p>Brampton's ravines and wooded corridors are also prime tick habitat. Ask about our <Link href="/brampton-tick-spray-1" className="text-brand-700 hover:underline">Brampton tick control service</Link> — bundle both for complete protection.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Brampton property from mosquitoes this season." />
    </>
  )
}
