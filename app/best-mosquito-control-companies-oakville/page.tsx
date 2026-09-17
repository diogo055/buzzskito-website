import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema, itemListSchema } from '@/lib/seo'
import { BUSINESS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito Control Oakville 2026',
  description:
    'Compare mosquito control companies in Oakville 2026 — Glen Abbey, Bronte, Old Oakville, Joshua Creek. BuzzSkito vs Mosquito Man vs LawnSavers.',
  canonical: '/best-mosquito-control-companies-oakville',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Oakville?',
    answer: `BuzzSkito offers single treatments in Oakville from $99, no contracts, and a perfect 5.0 rating across 150+ Google reviews. Mosquito Man has more cumulative reviews and a longer GTA track record but operates on seasonal contracts. LawnSavers bundles mosquito with lawn care for existing customers. Best choice depends on your priorities. Whichever provider you consider, ask five questions before you book: Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays (tick: 5); a free re-treat if it rains within 1 hour of a treatment, on every plan; Licence ${BUSINESS.licenseNumber}; and the Bite-Free Guarantee on Standard & Exclusive plans.`,
  },
  {
    question: 'How much does mosquito control cost in Oakville in 2026?',
    answer: 'BuzzSkito single treatments in Oakville start at $99 on a standard lot under 10,000 sq ft, and season plans are $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays), plus HST. Other providers, including Mosquito Man and LawnSavers, price differently — check their sites for current pricing and ask for a written price before you book. Old Oakville lakefront estates and large Joshua Creek properties price at the top of the range due to coverage area.',
  },
  {
    question: 'Which Oakville neighbourhoods have the worst mosquito and tick problems?',
    answer: 'Properties near Bronte Creek Provincial Park, the Iroquois Shoreline corridor, and the Joshua Creek green spaces face the highest mosquito and tick pressure. Glen Abbey homes near the golf course wetlands, Old Oakville lakefront properties, and West Oak Trails (close to 16 Mile Creek) are also high-pressure zones. Tick risk is significant near every conservation-area-adjacent property in Oakville.',
  },
  {
    question: 'Do Oakville mosquito control companies handle ticks too?',
    answer: 'They should — Oakville tick risk is real, especially near Bronte Creek and 16 Mile Creek. BuzzSkito tick control is 5 sprays per season: $597 on its own or $497 bundled with any mosquito plan, saving $100. Always confirm a provider tests for tick activity in your specific Oakville neighbourhood.',
  },
  {
    question: 'Are no-contract Oakville mosquito control plans available?',
    answer: 'BuzzSkito is the primary no-contract option in Oakville. Most other providers require seasonal commitments. Test a single $99 treatment before committing to anything longer — that is the simplest way to evaluate service quality.',
  },
]

export default function BestMosquitoControlCompaniesOakvillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies Oakville', url: '/best-mosquito-control-companies-oakville' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-oakville', '2026-07-01')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({ name: 'Best Mosquito Control Companies in Oakville — 2026', description: 'Compare mosquito control companies in Oakville 2026 — Glen Abbey, Bronte, Old Oakville, Joshua Creek. BuzzSkito vs Mosquito Man vs LawnSavers.', slug: '/best-mosquito-control-companies-oakville', items: [{ name: 'BuzzSkito' }, { name: 'Mosquito Man' }, { name: 'Mosquito.Buzz' }, { name: 'LawnSavers' }] })) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'Best Companies Oakville' },
        ]}
        title={<>Best Mosquito Control Companies in Oakville — 2026</>}
        subtitle={<>Honest 2026 comparison of Oakville mosquito control providers — Glen Abbey, Bronte, Old Oakville, Joshua Creek, West Oak Trails. Pricing, reviews, and what each company actually delivers. Licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Oakville-Specific Pricing</span>
          <span>✓ Updated July 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <QuickAnswer question="Who is the best mosquito control company in Oakville?">
        <p>
          <strong>BuzzSkito is the best mosquito control company in Oakville for 2026, offering single treatments from $99, no contracts, and a perfect 5.0 rating across 150+ Google reviews.</strong> This comparison ranks 4 providers serving Oakville — BuzzSkito, Mosquito Man, Mosquito.Buzz, and LawnSavers — on pricing, reviews, contracts, and coverage. Whichever you choose, ask about price, sprays per season, rain, licensing, and which plans carry a guarantee; BuzzSkito publishes its answers below, including {PROMISES.licence}.
        </p>
      </QuickAnswer>

      <TypicalPrices service="mosquito" city="Oakville" />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Oakville Mosquito Control Companies — Compared</h2>
          <p>Oakville homeowners — particularly those near Bronte Creek, 16 Mile Creek, the Iroquois Shoreline, and Joshua Creek — have several professional mosquito control options. Here is an honest comparison based on publicly available information about contracts, service models, and Oakville service offerings as of July 2026.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                  <th className="px-4 py-3 text-left">Reviews</th>
                  <th className="px-4 py-3 text-left">Contracts</th>
                  <th className="px-4 py-3 text-left">Oakville Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { company: 'BuzzSkito', price: 'From $99', reviews: '150+ (5.0★)', contracts: 'No contracts', area: 'All Oakville' },
                  { company: 'Mosquito Man', price: 'Quote-based', reviews: 'See Google', contracts: 'Seasonal', area: 'All Oakville' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'Varies — check their site', reviews: 'See Google', contracts: 'Seasonal', area: 'Oakville' },
                ].map(({ company, price, reviews, contracts, area }) => (
                  <tr key={company} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{company}</td>
                    <td className="px-4 py-3 font-extrabold text-brand-700">{price}</td>
                    <td className="px-4 py-3 text-gray-600">{reviews}</td>
                    <td className="px-4 py-3 text-gray-600">{contracts}</td>
                    <td className="px-4 py-3 text-gray-600">{area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose mb-8">Other companies set and change their own prices, and review totals change over time, so check each company&rsquo;s website and Google listing for current figures.</p>

          <h2>What to Ask Any Mosquito Control Company in Oakville</h2>
          <p>Whichever company you consider, here are the questions worth asking before you book, with BuzzSkito&rsquo;s answers.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Ask this</th>
                  <th className="px-4 py-3 text-left">BuzzSkito&rsquo;s answer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { q: 'Is the price shown before you book?', a: 'From $99 on a standard lot' },
                  { q: 'How many sprays per season?', a: '5, 10 or 20+ (tick: 5)' },
                  { q: 'What happens if it rains after a treatment?', a: PROMISES.rainBack },
                  { q: 'Is an Ontario pesticide operator licence number shown?', a: `Yes: ${BUSINESS.licenseNumber}` },
                  { q: 'Which plans include a guarantee?', a: 'Rain-back on every plan; Bite-Free on Standard & Exclusive' },
                ].map(({ q, a }) => (
                  <tr key={q} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{q}</td>
                    <td className="px-4 py-3 text-gray-700">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose mb-8">BuzzSkito prices are for a standard lot under 10,000 sq ft, plus HST. Old Oakville lakefront estates and large Joshua Creek properties typically price above the base rate.</p>

          <h2>1. BuzzSkito (Oakville coverage: full)</h2>
          <p><Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito serves all Oakville</Link> — Glen Abbey, Bronte, Old Oakville, North Oakville, Joshua Creek, River Oaks, West Oak Trails, Falgarwood, Clearview, and Eastlake.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Season plans on a standard lot: Basic $549 (5 sprays), Standard $994 (10 sprays, most popular), Exclusive $2,049 (20+ sprays), plus HST.</li>
            <li><strong>Reviews:</strong> 150+ Google reviews, perfect 5.0-star rating.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees.</li>
            <li><strong>Guarantees:</strong> {PROMISES.rainBackShort}; {PROMISES.biteFreeScope}.</li>
            <li><strong>Tick add-on:</strong> Critical for Oakville homes near Bronte Creek and Iroquois Shoreline. $597 standalone or $497 with any mosquito plan (5 sprays per season).</li>
            <li><strong>Lakefront coverage:</strong> Old Oakville lakefront properties experience high mosquito pressure from Lake Ontario humidity — treatment timing and thorough coverage of shaded resting spots matter here.</li>
          </ul>

          <h2>2. Mosquito Man (Oakville coverage: full)</h2>
          <p>Long-running GTA company with a large Google review base built up over years.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs. Pricing varies — check their site for current rates.</li>
            <li><strong>Reviews:</strong> See Google. Review totals cover many GTA cities, so look for recent reviews from Oakville customers.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Service:</strong> Established Oakville customer base. Standard barrier spray.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Oakville coverage: franchise)</h2>
          <p>National Canadian franchise — Oakville service depends on franchisee availability.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based — check their site for current pricing.</li>
            <li><strong>Reviews:</strong> Varies by franchisee.</li>
            <li><strong>Contracts:</strong> Seasonal commitment standard.</li>
          </ul>

          <h2>4. LawnSavers (Oakville coverage: limited)</h2>
          <p>Primarily a lawn care provider offering mosquito control as an add-on.</p>
          <ul>
            <li><strong>Pricing:</strong> Pricing varies — check their site. Bundle pricing for existing lawn customers.</li>
            <li><strong>Reviews:</strong> See Google. Review totals cover all of their services, not only mosquito control.</li>
            <li><strong>Best for:</strong> Oakville homeowners already using LawnSavers wanting bundled service.</li>
          </ul>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Oakville" service="mosquito" location="price_card_mid" />
      </div>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>What to Check Before Booking in Oakville</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence required. Ask to see it.' },
              { title: 'PCP Registration Number', desc: 'Every product must carry a valid PCP registration number on its label.' },
              { title: 'Conservation-Area Experience', desc: 'Bronte Creek, Iroquois Shoreline, and 16 Mile Creek properties need providers experienced with high-pressure zones.' },
              { title: 'Tick Coverage Available', desc: 'Oakville tick risk is real — bundle saves money vs. separate provider.' },
              { title: 'Estate-Property Pricing', desc: 'Confirm pricing tier upfront for large Old Oakville or Joshua Creek lots.' },
              { title: 'Re-Treatment Guarantee', desc: 'Ask what happens if rain washes off a treatment or mosquitoes return between visits, and which plans that covers.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Test BuzzSkito with One Treatment</h2>
          <p>Oakville homeowners can book a single $99 treatment with no contract or commitment. See the results, then decide on a seasonal plan.</p>
          <p>Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or use our <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">contact form</Link>.</p>

          <h2>Related Oakville Pages</h2>
          <ul>
            <li><Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Oakville Mosquito Control</Link></li>
            <li><Link href="/oakville-tick-spray" className="text-brand-700 hover:underline">Oakville Tick Control Service</Link></li>
            <li><Link href="/glen-abbey-mosquito-control" className="text-brand-700 hover:underline">Glen Abbey Mosquito Control</Link></li>
            <li><Link href="/bronte-mosquito-control" className="text-brand-700 hover:underline">Bronte Mosquito Control</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">GTA-Wide Comparison</Link></li>
          </ul>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Oakville" service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Oakville Mosquito Control — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Oakville Mosquito Control, Starting at $99" subtext="No contracts. Same-week service across Glen Abbey, Bronte, Old Oakville & Joshua Creek." variant="dark" />
    </>
  )
}
