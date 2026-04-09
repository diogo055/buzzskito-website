import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Hamilton | From $99, No Contracts | BuzzSkito',
  description:
    'Professional tick spray in Hamilton. Protect your yard near the Escarpment & Dundas Valley. From $99. Call (289) 216-5030.',
  canonical: '/hamilton-tick-spray',
})

const CITY = 'Hamilton'
const SLUG = '/hamilton-tick-spray'
const NEIGHBOURHOODS = ['Stoney Creek','Dundas','Ancaster','Westdale','Waterdown','Rymal','Mount Hope','Binbrook','Flamborough','Ainslie Wood','Winona']

const FAQS = [
  {
    question: 'How much does tick spray cost in Hamilton?',
    answer: 'Tick spray in Hamilton starts from $99 per application. Properties near the Niagara Escarpment, Dundas Valley Conservation Area, or Cootes Paradise benefit most from both spring and fall treatments. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Is the Dundas Valley a tick risk area?',
    answer: "Yes. The Dundas Valley Conservation Area is one of the most significant tick habitats in the Hamilton region. The combination of extensive wooded trails, large deer populations, and humid ravine conditions creates ideal blacklegged tick habitat. Properties in Dundas, Ancaster, and Westdale that back onto natural areas — especially those adjacent to Spencer Creek — face meaningful annual tick risk.",
  },
  {
    question: 'How many tick treatments per year does a Hamilton property need?',
    answer: "Two treatments per season provide full coverage: one in May or June targeting spring nymphs (the most dangerous Lyme disease transmission stage — tiny, May–July peak), and one in August or September for fall adult tick emergence. Each treatment provides up to 30 days of residual protection. Properties near the Niagara Escarpment trail system, Dundas Valley, or Cootes Paradise may benefit from a third treatment given Hamilton's elevated tick density.",
  },
  {
    question: 'Why does Hamilton have particularly high tick risk?',
    answer: "Hamilton sits at the intersection of several major tick habitat drivers. The Niagara Escarpment runs directly through the city, creating extensive forested ravine terrain adjacent to residential areas in Ancaster, Dundas, and Westdale. Dundas Valley Conservation Area covers 1,200+ hectares of managed conservation land with high deer density — the primary host for adult blacklegged ticks. Cootes Paradise marsh and Hamilton Harbour also sustain wildlife movement that distributes ticks across the region.",
  },
  {
    question: 'Which Hamilton neighbourhoods have the highest tick exposure?',
    answer: "Dundas and Ancaster face the highest tick risk due to direct adjacency to Dundas Valley Conservation Area. Westdale and Ainslie Wood properties near Cootes Paradise also have significant exposure. Stoney Creek and Winona properties near Fifty Point Conservation Area face elevated risk. Any Hamilton property backing onto Escarpment trails, wooded ravines, or conservation land should treat annually.",
  },
  {
    question: 'Is the Niagara Escarpment trail a tick risk for Hamilton hikers and homeowners?',
    answer: "Yes. The Niagara Escarpment is one of the highest-risk tick habitats in Southern Ontario. The Bruce Trail and associated side trails running through Hamilton are documented blacklegged tick areas. Properties within 100–200 metres of the trail corridor face genuine tick exposure risk — deer, mice, and other wildlife moving between the Escarpment and adjacent neighbourhoods carry ticks into residential areas.",
  },
  {
    question: 'Does BuzzSkito also provide mosquito control in Hamilton?',
    answer: "Yes. Hamilton's escarpment ravines, Cootes Paradise marsh, Hamilton Harbour, and Red Hill Creek valley create significant mosquito pressure across the city. Many Hamilton homeowners bundle both mosquito and tick treatments for complete protection. See our Hamilton mosquito control service or call to ask about seasonal bundle options.",
  },
  {
    question: 'How does tick spray work on my Hamilton property?',
    answer: "We apply a residual barrier treatment to the specific micro-habitats where ticks concentrate: the transition zone between your maintained lawn and any natural vegetation, leaf litter in garden beds, woodpile areas, fence lines, and under decks. Ticks don't broadcast randomly across a property — they aggregate in these specific zones, which is why targeted application is far more effective than broadcast treatment of the entire lawn.",
  },
]

export default function HamiltonTickSprayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray in ${CITY}, Ontario. Up to 30-day protection.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/hamilton-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Hamilton's Dundas Valley, Niagara Escarpment trails, and conservation lands make it one of Southern Ontario's highest tick-risk regions. BuzzSkito protects Hamilton families with professional 30-day tick barrier spray.
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
          <h2>Why Hamilton Backyards Are Prime Tick Zones</h2>
          <p>Hamilton has some of Southern Ontario's most significant tick habitat. The <strong>Dundas Valley Conservation Area</strong> — 1,200+ hectares of managed conservation land directly adjacent to Dundas and Ancaster — supports thriving blacklegged tick populations supported by large deer herds. The <strong>Niagara Escarpment</strong> trail corridor running through Ancaster, Westdale, and Stoney Creek creates continuous tick dispersal pathways into adjacent residential neighbourhoods. <strong>Cootes Paradise</strong> and Hamilton Harbour's naturalized shoreline add additional habitat pressure across the city's west end.</p>
          <p>Hamilton Conservation Authority conducts tick surveillance across managed lands and has documented established blacklegged tick populations in Dundas Valley, Spencer Gorge, and Fifty Point Conservation Area. With increasing Lyme disease case numbers in Ontario, professional tick treatment is an important annual precaution for Hamilton homeowners near these areas.</p>

          <h2>Hamilton Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => (
              <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>

          <h2>Also Providing Mosquito Control in Hamilton</h2>
          <p>Bundle tick and mosquito treatment for complete protection. See our <Link href="/hamilton-mosquito-control" className="text-brand-700 hover:underline">Hamilton mosquito control service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">Tick Bite Symptoms &amp; What to Do in Ontario</Link></li>
            <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Hamilton &amp; Burlington Mosquito &amp; Tick Control Guide</Link></li>
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
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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
