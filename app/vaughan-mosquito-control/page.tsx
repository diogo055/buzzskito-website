import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Vaughan | BuzzSkito – Barrier Spray for Vaughan Yards',
  description:
    'Professional mosquito barrier spray in Vaughan. Serving Woodbridge, Kleinburg, Maple, Concord, Vellore Village & all Vaughan neighbourhoods. Boyd Conservation Area and Humber River drive intense local mosquito pressure. Call (289) 216-5030.',
  canonical: '/vaughan-mosquito-control',
})

const CITY = 'Vaughan'
const SLUG = '/vaughan-mosquito-control'
const TICK_SLUG = '/vaughan-tick-spray'
const NEIGHBOURHOODS = ['Woodbridge','Kleinburg','Maple','Concord','Thornhill','Patterson','Vellore Village','Islington Woods','Sonoma Heights']
const FAQS = [
  {
    question: 'Why is mosquito pressure so intense near Boyd Conservation Area?',
    answer: "Boyd Conservation Area's Humber River floodplain, seasonal ponds, and dense forest understorey create ideal standing-water breeding habitat. Properties bordering Boyd or backing onto Humber River tributaries in Woodbridge and Islington Woods are typically among the first to see mosquitoes in spring and face the highest seasonal pressure. Professional barrier spray treats the vegetation buffer between your property and these natural areas.",
  },
  {
    question: 'Do the new Vellore Village and Patterson subdivisions have a mosquito problem?',
    answer: "Yes. New construction in Vellore Village and Patterson often includes engineered retention ponds, swales, and landscaped buffers that hold standing water — prime breeding habitat. Early-season treatment (May) is especially valuable for newer Vaughan homes where vegetation is maturing and pest pressure is still being established.",
  },
  {
    question: 'How many mosquito treatments does a Vaughan property need per season?',
    answer: "Most Vaughan homeowners benefit from five treatments spaced approximately 28 days apart, running from May through September. Properties directly adjacent to the Humber River, Black Creek headwaters, or Kortright Centre woods may benefit from a sixth application in peak July–August weeks.",
  },
]

export default function VaughanMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/vaughan-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From Kleinburg&apos;s Humber River frontage to Vellore Village&apos;s retention ponds — BuzzSkito delivers professional mosquito barrier spray to every Vaughan neighbourhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Vaughan</h2>
          <p>Vaughan is threaded by some of York Region&apos;s most significant natural corridors. Boyd Conservation Area — Vaughan&apos;s largest green space — spans the Humber River floodplain through Woodbridge and Kleinburg, providing miles of shaded, moist riverbank and seasonal flooding that creates standing water for weeks after each rainfall. The Kortright Centre for Conservation adds another dense woodland block, and the Black Creek headwaters originate in Maple, running south through residential neighbourhoods before entering the Humber system.</p>
          <p>For Vaughan homeowners, this natural wealth translates to a long, intense mosquito season. Properties near Boyd, along the Humber, or backing onto the Woodbridge ponds network typically see mosquito activity from early May through late September — a full five-month season. Professional barrier spray applied to your yard&apos;s vegetation and shrub borders is the most reliable way to stay outside and enjoy your property all season.</p>

          <h2>Vaughan Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Vaughan communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Vaughan Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Site assessment</strong> — We identify breeding zones, standing water issues, and high-canopy areas specific to your Vaughan property.</li>
            <li><strong>Full-yard barrier spray</strong> — Treatment of all vegetation, hedges, garden beds, fence lines, and tree understorey within your property.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula works continuously between visits, safe for kids and pets after 30-minute dry time.</li>
            <li><strong>Seasonal scheduling</strong> — We track local conditions and recommend application windows timed to Vaughan&apos;s mosquito emergence cycle.</li>
          </ul>

          <h2>Also Serving Kleinburg</h2>
          <p>Kleinburg village — with its Humber River frontage and Oak Ridges Moraine edge — is one of York Region&apos;s highest-pressure mosquito and tick zones. See our dedicated <Link href="/kleinburg-mosquito-control" className="text-brand-700 hover:underline">Kleinburg mosquito control service</Link> for neighbourhood-specific information.</p>

          <h2>Also Providing Tick Control in Vaughan</h2>
          <p>Boyd Conservation Area, the Kortright Centre, and the Humber River valley are confirmed blacklegged tick habitat zones in York Region. If your property is near these areas, tick risk is real. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Vaughan tick spray service</Link> — most homeowners bundle both treatments for complete yard protection.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Vaughan yard from mosquitoes this season. No contracts." />
    </>
  )
}
