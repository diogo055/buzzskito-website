import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control Hamilton · From $99 | 5★ Rated',
  description:
    'Hamilton tick spray · 126 five-star reviews. Targets blacklegged ticks near the Escarpment, Dundas Valley & conservation areas. Free re-spray. (289) 216-5030.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Hamilton' })) }} />
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
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Lyme Disease Prevention</span>
          <span>✓ 5-Star Rated · 126 Reviews</span>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Tick Spray Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional tick spray service from <strong className="text-amber-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/free-yard-assessment" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Tick Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Property Tick Assessment', desc: 'We identify tick habitat zones — Escarpment trail edges, Dundas Valley exposure, lawn-to-woods transitions, and garden borders on your Hamilton property.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to the specific 1-3 metre zones where ticks concentrate — precision treatment where it matters.' },
              { step: '3', title: '30-Day Protection', desc: 'The residual formula kills ticks on contact and creates a barrier for up to 30 days. If ticks return within the window, we re-treat at no cost.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
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

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Hamilton Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Steve R.', location: 'Westdale', text: 'Our yard backs onto Cootes Paradise and ticks were a serious concern. BuzzSkito treated the perimeter professionally and the difference was immediate. No more finding ticks after gardening.' },
              { author: 'Karen L.', location: 'Dundas', text: 'Living near the Dundas Valley means ticks are unavoidable — unless you treat for them. BuzzSkito knows exactly where to focus and the results speak for themselves. Signed up for both treatments.' },
              { author: 'Paul G.', location: 'Ancaster', text: 'Found ticks on our dog twice last spring from the trail behind our house. After BuzzSkito treated the fence line and garden edges, haven\'t seen one since. Very knowledgeable team.' },
              { author: 'Jennifer W.', location: 'Stoney Creek', text: 'We bundle tick and mosquito control and the convenience is great. One visit, both problems handled. The technician was thorough and the communication was excellent.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Hamilton</span></p>
              </div>
            ))}
          </div>
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
