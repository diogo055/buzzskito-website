import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Etobicoke | BuzzSkito – Humber River to Lakeshore Protection',
  description:
    'Professional mosquito spray in Etobicoke. Serving Mimico, Long Branch, The Kingsway, Humber Valley, Rexdale & all Etobicoke neighbourhoods. Humber River corridor and Lake Ontario shoreline drive intense mosquito pressure. Call (289) 216-5030.',
  canonical: '/etobicoke-mosquito-control',
})

const CITY = 'Etobicoke'
const SLUG = '/etobicoke-mosquito-control'
const TICK_SLUG = '/etobicoke-tick-spray'
const NEIGHBOURHOODS = ['Mimico','Long Branch','New Toronto','The Kingsway','Humber Valley','Richview','Rexdale','Islington Village','Alderwood']
const FAQS = [
  {
    question: 'Why does the Humber Valley neighbourhood have a worse mosquito problem than other Etobicoke areas?',
    answer: "The Humber Valley neighbourhood sits directly on the Humber River valley escarpment, with properties backing onto one of Toronto's widest and most heavily forested ravine systems. The Humber River floodplain below holds standing water after every significant rainfall, and the dense tree canopy on ravine slopes creates cool, humid micro-environments where adult mosquitoes rest during the day. Properties backing onto the ravine face a near-continuous supply of newly emerged mosquitoes throughout the season — barrier spray on your property's vegetation provides a treated buffer that breaks this cycle.",
  },
  {
    question: 'Do Mimico and Long Branch waterfront properties have more mosquitoes?',
    answer: "Lake Ontario's Etobicoke waterfront — Mimico, Long Branch, and New Toronto — deals with a different but equally persistent mosquito challenge. Mimico Creek empties into the lake along this stretch, and the associated wetland margins, storm drain outlets, and lakefront park vegetation all provide breeding and resting habitat. Onshore breezes can move adult mosquitoes from Etobicoke Creek and Mimico Creek margins into nearby residential yards. Shoreline properties here benefit strongly from barrier spray applied to all yard vegetation.",
  },
  {
    question: 'Is Centennial Park an issue for nearby Etobicoke homeowners?',
    answer: "Centennial Park's large forest blocks and the adjacent Etobicoke Creek valley create a significant reservoir of mosquito habitat in northwestern Etobicoke. The stormwater ponds and creek margins within and around the park complex generate adult mosquitoes that readily move into surrounding Rexdale and Richview neighbourhoods. Homes within a 500-metre radius of the park boundary or Etobicoke Creek consistently report high seasonal mosquito activity.",
  },
]

export default function EtobicokeMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/etobicoke-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From the Humber River valley ravines to Mimico&apos;s lakefront — BuzzSkito delivers professional mosquito barrier spray to every Etobicoke neighbourhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Etobicoke</h2>
          <p>Etobicoke is defined by water. The Humber River — one of Toronto&apos;s widest and most ecologically significant river corridors — runs along its eastern boundary, with a vast floodplain forest and ravine system that stretches from Rexdale in the north through the Kingsway and Humber Valley to the lake. The Etobicoke Creek runs through the west side, and Mimico Creek drains through the south, both feeding into Lake Ontario across a low-lying, wetland-influenced shoreline. These three creek systems, combined with Centennial Park&apos;s forest blocks and the Lake Ontario shoreline parks, make Etobicoke one of Toronto&apos;s most mosquito-active districts.</p>
          <p>For Etobicoke homeowners, the challenge is that many of these natural systems are beloved green amenities — and they&apos;re not going away. The practical solution is professional barrier spray on your own property: treating all vegetation, shrubs, and fence-line plantings creates a treated zone that eliminates resting mosquitoes and provides 28 days of residual protection between visits.</p>

          <h2>Etobicoke Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Etobicoke communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Etobicoke Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Property review</strong> — We assess ravine proximity, creek frontage, and standing water contributing to mosquito pressure on your lot.</li>
            <li><strong>Full-yard barrier spray</strong> — All shrubs, hedges, garden borders, fence lines, and tree understorey treated on every visit.</li>
            <li><strong>28-day residual coverage</strong> — Health Canada–approved formula provides continuous protection; safe for kids and pets after 30 minutes.</li>
            <li><strong>Seasonal scheduling</strong> — Five visits May through September, timed to Humber River and creek-corridor emergence patterns in Etobicoke.</li>
          </ul>

          <h2>Also Providing Tick Control in Etobicoke</h2>
          <p>The Humber River valley and Centennial Park forest areas in Etobicoke harbour blacklegged tick populations that have expanded in recent years. If your property backs onto the ravine or is near parkland, tick risk is real alongside mosquito pressure. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Etobicoke tick spray service</Link> — most homeowners bundle both for complete yard protection.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Etobicoke property from mosquitoes this season. No contracts." />
    </>
  )
}
