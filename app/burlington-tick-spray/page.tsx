import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Burlington Tick Control 2026 · From $99 · 129 Five-Star Reviews',
  description:
    'Professional tick spray in Burlington. Protect your yard near the Escarpment & Royal Botanical Gardens. From $99. Call (289) 216-5030.',
  canonical: '/burlington-tick-spray',
})

const CITY = 'Burlington'
const NEIGHBOURHOODS = ['Alton Village','Millcroft','The Orchard','Roseland','Downtown Burlington','Shoreacres','Headon Forest','North Burlington','Palmer','Tyandaga','Brant Hills']
const FAQS = [
  { question: 'How much does tick spray cost in Burlington?', answer: 'Tick spray in Burlington starts from $99 per application. Properties near Bronte Creek Provincial Park, the Royal Botanical Gardens, or any conservation land boundary benefit most from both spring and fall treatments. No contracts. Call (289) 216-5030.' },
  { question: 'Does the Niagara Escarpment increase tick risk in Burlington?', answer: 'Yes. The Niagara Escarpment and the greenbelt corridors that run through Burlington — including Spencer Creek Valley, Bronte Creek, and the Royal Botanical Gardens — are all established tick habitat. Properties near these areas, particularly in Headon Forest, Tyandaga, and Waterdown, have elevated tick risk.' },
  { question: 'Is tick control worth it in Burlington for families without pets?', answer: 'Absolutely. While pets are a common vector for bringing ticks onto your property, people are equally at risk. Children playing in the backyard, adults gardening, and anyone who spends time in a yard adjacent to naturalized areas is at risk for tick bites and Lyme disease exposure.' },
  { question: 'What tick species are found in Burlington?', answer: 'The blacklegged tick (deer tick) is the primary concern — it transmits Lyme disease and is established along the Escarpment, Bronte Creek, and Royal Botanical Gardens. American dog ticks are also common but rarely carry Lyme. Blacklegged tick nymphs are poppy-seed-sized and responsible for most Lyme transmissions.' },
  { question: 'How does professional tick spray work?', answer: 'We apply a residual barrier to specific micro-habitats where ticks concentrate: the 1-3 metre transition zone between lawn and natural vegetation, garden bed edges, leaf litter, woodpiles, fence lines, and under decks. The formula kills ticks on contact and provides up to 30 days of protection.' },
  { question: 'Is tick spray safe for my family and pets?', answer: 'Yes. Our Health Canada-approved formula is safe for children and pets once dry — approximately 30 minutes. We apply to vegetation where ticks rest, not to grass or play areas. After the drying window, your yard is fully safe.' },
  { question: 'When should Burlington homeowners schedule tick treatment?', answer: 'We recommend spring treatment (late May/early June) targeting nymphs — the most dangerous stage — and fall treatment (August/September) for adult ticks. Properties near the Escarpment or RBG may benefit from a third mid-summer treatment.' },
  { question: 'Does BuzzSkito also do mosquito control in Burlington?', answer: 'Yes. Most Burlington homeowners bundle tick and mosquito control — same visit, same vegetation surfaces. See our Burlington mosquito spray service for details.' },
]

export default function BurlingtonTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray in ${CITY}, Ontario. Up to 30-day protection.`, slug: '/burlington-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/burlington-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick', city: 'Burlington' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/burlington-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Burlington Tick Control<br/>
            <span className="text-amber-400">From $99 · Lyme Disease Defence</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Burlington's Escarpment greenbelt, Bronte Creek, and Royal Botanical Gardens create significant tick habitat throughout the city. BuzzSkito protects Burlington homeowners from Lyme disease with professional 30-day tick barrier spray.
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
          <span>✓ 5-Star Rated · 129 Reviews</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">What is the best tick control company in Burlington?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>BuzzSkito provides specialist tick barrier spray across all Burlington neighbourhoods — Alton Village, Millcroft, The Orchard, Roseland, Downtown Burlington, Shoreacres, Headon Forest, North Burlington, Palmer, Tyandaga, Aldershot.</strong> Treatments use Health Canada-approved formulations applied to the specific 1–3 metre zones where blacklegged ticks concentrate — lawn-to-woods transitions, leaf litter, garden bed edges, and fence-line vegetation. Single treatments start at <strong>$99</strong>; tick add-on bundled with mosquito plan from $497. With <strong>129 five-star Google reviews</strong>, no contracts, a 30-minute re-entry window, and the <strong>BuzzSkito Bite-Free Guarantee</strong>, Burlington families get reliable Lyme disease prevention for ravine, conservation-area, and wooded-edge properties. Call (289) 216-5030.
          </p>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Burlington Tick Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', 'All Burlington neighbourhoods (Alton Village, Millcroft, The Orchard, Roseland, Downtown Burlington, Shoreacres, Headon Forest, North Burlington, Palmer, Tyandaga, Aldershot)'],
                  ['Specialization', 'Blacklegged tick (Ixodes scapularis) and American dog tick barrier spray'],
                  ['Pricing', 'From $99 per treatment · seasonal tick program $597 standalone or tick add-on bundle available on quote'],
                  ['Treatment season', 'May through October (peak: late April–June nymph activity, then again Sep–Oct adult activity)'],
                  ['Protection per visit', 'Up to 30 days residual on tick habitat zones'],
                  ['Re-entry time', '30 minutes after spray dries (kid and pet safe)'],
                  ['Recommended schedule', '5 treatments per season for ravine- or conservation-area-adjacent properties'],
                  ['Highest tick zones', 'Bronte Creek · Tyandaga ravines · Niagara Escarpment edge · Burlington greenbelt'],
                  ['Lyme disease vector', 'Yes — blacklegged tick populations confirmed by Public Health Ontario'],
                  ['Application zones', 'Lawn-to-woods edge · leaf litter · garden bed perimeters · fence-line vegetation · woodpiles'],
                  ['Booking lead time', 'Same-week service typical'],
                  ['Contract required', 'No — single treatments and seasonal programs both available'],
                  ['Guarantee', 'BuzzSkito Bite-Free Guarantee (free re-treatment in protection window)'],
                  ['Google reviews', '129 reviews · 5.0 average · 0 negative'],
                  ['Phone', '(289) 216-5030'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2.5 font-semibold text-brand-900 bg-gray-50 w-1/3">{k}</td>
                    <td className="px-4 py-2.5 text-gray-800">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              { step: '1', title: 'Property Tick Assessment', desc: 'We identify tick habitat zones — Escarpment edges, lawn-to-woods transitions, leaf litter, garden borders, and fence lines on your Burlington property.' },
              { step: '2', title: 'Targeted Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to the specific 1-3 metre zones where ticks concentrate — precision treatment, not broadcast spraying.' },
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
          <h2>Tick Control Is No Longer Optional in Burlington</h2>
          <p>Burlington sits at the base of the Niagara Escarpment — one of Ontario's most significant tick habitat corridors. The Royal Botanical Gardens, Cootes Paradise, Spencer Creek valley, and Bronte Creek all serve as reservoirs for blacklegged ticks that spill into adjacent residential properties throughout the season.</p>
          <p>BuzzSkito's tick treatment is specifically designed for the Burlington environment, targeting the lawn edges, shaded garden areas, and wood-edge transition zones where ticks concentrate on residential properties.</p>

          <h2>Burlington Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>High-Risk Tick Zones in Burlington</h2>
          <ul>
            <li><strong>Headon Forest &amp; Tyandaga</strong> — directly adjacent to Escarpment trails with high deer movement</li>
            <li><strong>North Burlington / Waterdown</strong> — near Royal Botanical Gardens and Cootes Paradise</li>
            <li><strong>Bronte Creek area</strong> — Bronte Creek Provincial Park is established tick habitat</li>
            <li><strong>Palmer &amp; Brant Hills</strong> — near Spencer Creek valley and wooded ravines</li>
            <li><strong>Any property backing onto greenbelt, trails, or conservation land</strong></li>
          </ul>

          <h2>Tick Treatment Schedule for Burlington</h2>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="px-4 py-2 text-left">Treatment</th>
                  <th className="px-4 py-2 text-left">Timing</th>
                  <th className="px-4 py-2 text-left">Target</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: 'Spring treatment', timing: 'Late May / Early June', target: 'Target nymphs — peak Lyme risk (tiny, hard to detect)' },
                  { t: 'Summer treatment (optional)', timing: 'Mid-July', target: 'Recommended for Escarpment and RBG-adjacent properties' },
                  { t: 'Fall treatment', timing: 'Late August / September', target: 'Target adult ticks before fall activity surge' },
                ].map(({ t, timing, target }) => (
                  <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-gray-800">{t}</td>
                    <td className="px-4 py-2 text-amber-700 font-semibold">{timing}</td>
                    <td className="px-4 py-2 text-gray-600">{target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Tick Spray Pricing in Burlington</h2>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="px-4 py-2 text-left">Property Type</th>
                  <th className="px-4 py-2 text-left">Starting Price</th>
                  <th className="px-4 py-2 text-left">Typical Properties</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Standard lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Burlington townhome or detached' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Escarpment-adjacent, Roseland, Shoreacres' },
                  { type: 'Large / rural property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Waterdown, RBG-adjacent, large lots' },
                ].map(({ type, price, coverage }) => (
                  <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{type}</td>
                    <td className="px-4 py-2 font-extrabold text-amber-700">{price}</td>
                    <td className="px-4 py-2 text-gray-600">{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What to Expect on Tick Treatment Day</h2>
          <ol>
            <li><strong>SMS notification before arrival</strong> — you don&apos;t need to be home.</li>
            <li><strong>Property tick assessment</strong> — Escarpment exposure, transition zones, and high-risk perimeters.</li>
            <li><strong>Targeted barrier application</strong> — precision spray to tick habitat zones. 20–30 minutes.</li>
            <li><strong>30-minute dry time</strong> — then fully safe for kids and pets.</li>
            <li><strong>Email confirmation</strong> — treatment log with areas treated and next visit date.</li>
          </ol>

          <h2>Also Providing Mosquito Spray in Burlington</h2>
          <p>Bundle tick and mosquito protection. See our <Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline">Burlington mosquito spray service</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What Burlington Homeowners Say About Our Tick Control</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 129 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Sandra H.', location: 'Roseland', text: 'Our property backs onto Escarpment trails and ticks were a constant worry with our dog. BuzzSkito treated the fence line and garden edges — exactly where the ticks were coming from. Problem solved.' },
              { author: 'Greg W.', location: 'Headon Forest', text: 'Found a tick on my daughter after she was playing near the back fence. Called BuzzSkito the next day and they were out within the week. Professional, knowledgeable, and the treatment worked immediately.' },
              { author: 'Lisa M.', location: 'Alton Village', text: 'We bundle mosquito and tick control and the convenience is fantastic. One visit covers both. The technician explained exactly why certain areas of our yard were higher risk than others.' },
              { author: 'Mike T.', location: 'North Burlington', text: 'Living near the Royal Botanical Gardens means tick prevention is a must. BuzzSkito handles it professionally and we haven\'t found a single tick since they started treating our yard.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Burlington</span></p>
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
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protecting Burlington families from Lyme disease. No contracts required." variant="dark" />
    </>
  )
}
