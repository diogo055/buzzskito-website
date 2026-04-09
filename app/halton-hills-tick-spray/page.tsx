import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Halton Hills | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Halton Hills. Among the highest tick risk in the western GTA — Credit River, Silver Creek, and Niagara Escarpment trails all host established tick populations. Serving Georgetown, Acton & all Halton Hills. Call (289) 216-5030.',
  canonical: '/halton-hills-tick-spray',
})

const CITY = 'Halton Hills'
const NEIGHBOURHOODS = ['Georgetown','Acton','Glen Williams','Norval','Limehouse','Ballinafad','Esquesing']
const FAQS = [
  {
    question: 'How much does tick spray cost in Halton Hills?',
    answer: 'Tick spray in Halton Hills starts from $99 per application. Given the high tick activity near the Credit River, Niagara Escarpment, and Hilton Falls Conservation Area, most Halton Hills properties benefit from both spring and fall treatments. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Why does Halton Hills have such high tick risk compared to other GTA communities?',
    answer: 'Halton Hills sits at the convergence of three significant natural systems: the Credit River watershed, Silver Creek, and the Niagara Escarpment. All three host well-established blacklegged tick populations confirmed by Halton Region Public Health. Unlike communities where ticks are limited to one ravine or creek, Halton Hills has multiple overlapping tick corridors covering both Georgetown and Acton, making it one of the consistently highest-risk areas in the western GTA.',
  },
  {
    question: 'Is Acton as high-risk for ticks as Georgetown?',
    answer: 'Yes. Acton sits near natural areas in the northern part of Halton Hills, with agricultural and forested land edges that support tick populations. While Georgetown\'s risk is tied to the Credit River and Silver Creek, Acton\'s risk comes from its rural fringe, farm field edges, and proximity to natural corridors. Both communities fall within Halton Region\'s tick awareness zone, and residents of both areas should consider professional tick control for their properties.',
  },
  {
    question: 'How does professional tick spray work differently from store-bought tick repellent?',
    answer: 'Store-bought repellents like DEET or permethrin products are personal repellents — they protect you while you\'re wearing them, but they don\'t reduce tick populations in your yard. Professional barrier spray is applied to your property\'s high-risk zones — lawn edges, leaf litter, garden borders, under decks — creating a treated zone that kills ticks before they can reach your family. BuzzSkito\'s treatment provides up to 30 days of yard-level protection per application.',
  },
]

export default function HaltonHillsTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/halton-hills-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/halton-hills-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/halton-hills-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Halton Hills has among the highest tick risk in the western GTA. Credit River, Silver Creek, and the Niagara Escarpment trail system all host established blacklegged tick populations. BuzzSkito protects your family from Lyme disease.
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
          <h2>Why Tick Spray Is Crucial in Halton Hills</h2>
          <p>Halton Hills is one of the most tick-exposed municipalities in the western GTA, and Halton Region Public Health consistently flags it as a high-risk area. The reason is geography: Halton Hills is crossed by the Credit River from north to south, intersected by Silver Creek, and bordered on the west by the Niagara Escarpment — three separate natural systems that all independently host established blacklegged tick populations. The convergence of these habitats means tick exposure isn't limited to one corner of the municipality. It's region-wide.</p>
          <p>For Georgetown residents near the Credit River or Silver Creek, and for Acton residents near rural field edges, the risk is not hypothetical. Halton Region's tick surveillance program documents blacklegged tick activity across these areas every season. Ticks in Halton Hills are active from early April through late November — a full eight months of exposure if untreated. For families with children or pets who use the backyard regularly, professional barrier spray applied twice per season is the most effective annual defence against Lyme disease.</p>

          <h2>Tick Hotspots in Halton Hills</h2>
          <ul>
            <li>Credit River valley corridor (Georgetown and Glen Williams)</li>
            <li>Silver Creek Conservation Area and surrounding forest edges</li>
            <li>Niagara Escarpment trail corridor (Limehouse and Ballinafad)</li>
            <li>Acton rural fringe and agricultural land edges</li>
            <li>Esquesing rural property woodlot margins</li>
          </ul>

          <h2>Halton Hills Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Halton Hills Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Halton Hills</h2>
          <p>Many Halton Hills homeowners combine tick and mosquito control in the same visit. See our <Link href="/halton-hills-mosquito-control" className="text-brand-700 hover:underline">Halton Hills mosquito control service</Link>.</p>

          <h2>Related Tick Control Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            {TICK_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
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
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your family from Lyme disease. No contracts, guaranteed results." variant="dark" />
    </>
  )
}
