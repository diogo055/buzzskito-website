import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Toronto | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Toronto. Kills ticks at all life stages. Serving High Park, Etobicoke, Scarborough, Don Mills & all Toronto neighbourhoods. Call (289) 216-5030.',
  canonical: '/toronto-tick-spray-1',
})

const CITY = 'Toronto'
const NEIGHBOURHOODS = ['High Park','East York','Don Mills','The Beaches','Scarborough','North York','Etobicoke','Leslieville','Rosedale','Forest Hill']
const FAQS = [
  { question: 'Are there really ticks in Toronto?', answer: 'Yes. Blacklegged ticks are established in Toronto\'s ravine system, High Park, and many other green spaces. Toronto Public Health conducts annual tick surveillance, and positive blacklegged tick populations have been confirmed in High Park, the Don Valley, and Scarborough Bluffs parks.' },
  { question: 'What Toronto neighbourhoods have the highest tick risk?', answer: 'Properties adjacent to Toronto\'s ravine system carry the highest tick exposure risk. This includes areas near the Don Valley, Humber Valley, Highland Creek, Scarborough Bluffs, High Park, and any neighbourhood backing onto wooded or naturalized green space.' },
]

export default function TorontoTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/toronto-tick-spray-1', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/toronto-tick-spray-1' }])) }} />
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
            Ticks in Toronto aren't just a nuisance — they're a real health risk. Blacklegged ticks carrying Lyme disease are established in Toronto's ravine system and parks. BuzzSkito provides effective tick spray for Toronto homeowners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Ticks in Toronto: The Real Risk</h2>
          <p>Toronto Public Health conducts annual tick surveillance and has confirmed established blacklegged tick populations in High Park, the Don Valley, and other ravine-adjacent areas. Lyme disease is reportable in Ontario, and case numbers have increased steadily as tick populations expand northward.</p>
          <p>The key insight for Toronto homeowners: ticks don't need a forest. They're found at the edge of any lawn that backs onto naturalized green space, including the thin strip of vegetation between a backyard fence and a ravine trail.</p>

          <h2>Where in Toronto Are Ticks Found?</h2>
          <ul>
            <li>High Park and surrounding Roncesvalles / Parkdale neighbourhoods</li>
            <li>Don Valley corridor (Leaside, East York, Don Mills)</li>
            <li>Humber Valley (Etobicoke, Islington)</li>
            <li>Highland Creek and Scarborough Bluffs area</li>
            <li>Any Toronto property backing onto a ravine or naturalized green space</li>
          </ul>

          <h2>Toronto Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Also Providing Mosquito Control in Toronto</h2>
          <p>Bundle tick and mosquito control for complete yard protection. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control service</Link>.</p>

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
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your family from Lyme disease in Toronto. No contracts." variant="dark" />
    </>
  )
}
