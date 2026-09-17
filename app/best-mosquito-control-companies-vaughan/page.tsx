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
  title: 'Best Mosquito Control Vaughan 2026',
  description:
    'Compare Vaughan mosquito control 2026 — Woodbridge, Kleinburg, Maple, Thornhill. Pricing, reviews. BuzzSkito vs Mosquito Man vs LawnSavers.',
  canonical: '/best-mosquito-control-companies-vaughan',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Vaughan?',
    answer: `BuzzSkito offers a starting price in Vaughan of $99/treatment, no contracts, and a perfect 5.0 rating across 150+ Google reviews. Mosquito Man has more cumulative reviews but operates on seasonal contracts. LawnSavers is best for existing lawn-care customers wanting a bundled add-on. The right choice depends on whether you prioritize price, flexibility, or bundled services. Whichever you consider, ask any provider five questions before you book: Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays (tick: 5); a free re-treat if it rains within 1 hour of a treatment, on every plan; Licence ${BUSINESS.licenseNumber}; and the Bite-Free Guarantee on Standard & Exclusive plans.`,
  },
  {
    question: 'How much does mosquito control cost in Vaughan in 2026?',
    answer: 'BuzzSkito single treatments in Vaughan start at $99 on a standard lot under 10,000 sq ft, and season plans are $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays), plus HST. Other providers, including LawnSavers, price differently (pricing varies — check their site), so ask for a written price before you book. Vaughan estate properties in Kleinburg, the Bridle Path-adjacent areas, and large Woodbridge lots tend to price higher due to coverage area.',
  },
  {
    question: 'Which Vaughan neighbourhoods need the most mosquito control?',
    answer: 'Kleinburg estate properties (Humber River valley exposure), Woodbridge homes near the Humber River, Maple properties along the East Don River corridor, and Thornhill near Bayview ravines see the highest mosquito pressure. Tick risk is also elevated near these green corridors and the Oak Ridges Moraine.',
  },
  {
    question: 'Do Vaughan mosquito control companies handle ticks too?',
    answer: 'Most do. Vaughan tick risk is significant — Kleinburg, Woodbridge, and Maple all sit near established blacklegged tick populations. BuzzSkito tick control is 5 sprays per season: $597 on its own or $497 with any mosquito plan. Always confirm your provider tests for tick coverage in your specific neighbourhood.',
  },
  {
    question: 'Do any Vaughan mosquito control companies offer no-contract service?',
    answer: 'BuzzSkito is the primary no-contract option in Vaughan. Most other providers require seasonal commitments with cancellation penalties, so confirm renewal and cancellation terms before you book. Test a single $99 treatment (standard lot, plus HST) with BuzzSkito before committing to anything longer.',
  },
]

export default function BestMosquitoControlCompaniesVaughanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies Vaughan', url: '/best-mosquito-control-companies-vaughan' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-vaughan', '2026-07-01')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({ name: 'Best Mosquito Control Companies in Vaughan — 2026', description: 'Compare Vaughan mosquito control 2026 — Woodbridge, Kleinburg, Maple, Thornhill. Pricing, reviews. BuzzSkito vs Mosquito Man vs LawnSavers.', slug: '/best-mosquito-control-companies-vaughan', items: [{ name: 'BuzzSkito' }, { name: 'Mosquito Man' }, { name: 'Mosquito.Buzz' }, { name: 'LawnSavers' }] })) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'Best Companies Vaughan' },
        ]}
        title={<>Best Mosquito Control Companies in Vaughan — 2026</>}
        subtitle={<>Honest 2026 comparison of Vaughan mosquito control providers — Woodbridge, Kleinburg, Maple, Thornhill, Concord. Pricing, reviews, and what each company actually offers. BuzzSkito is a licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Vaughan-Specific Pricing</span>
          <span>✓ Updated July 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <QuickAnswer question="Who is the best mosquito control company in Vaughan?">
        <p>
          <strong>BuzzSkito is the best mosquito control company in Vaughan for 2026, with a starting price of $99/treatment, no contracts, and a perfect 5.0 rating across 150+ Google reviews.</strong> This comparison ranks 4 providers serving Vaughan — BuzzSkito, Mosquito Man, Mosquito.Buzz, and LawnSavers — on pricing, reviews, contracts, and coverage. Whichever you choose, ask about price, sprays per season, rain, licensing ({PROMISES.licence} for BuzzSkito), and which plans carry a guarantee.
        </p>
      </QuickAnswer>

      <TypicalPrices service="mosquito" city="Vaughan" />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Vaughan Mosquito Control Companies — Compared</h2>
          <p>Vaughan homeowners — particularly those in Woodbridge, Kleinburg, Maple, Thornhill, and Concord — have several professional mosquito control options. Here is an honest comparison based on publicly available information and Vaughan service offerings as of July 2026.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                  <th className="px-4 py-3 text-left">Reviews</th>
                  <th className="px-4 py-3 text-left">Contracts</th>
                  <th className="px-4 py-3 text-left">Vaughan Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { company: 'BuzzSkito', price: 'From $99', reviews: '150+ (5.0★)', contracts: 'No contracts', area: 'All Vaughan' },
                  { company: 'Mosquito Man', price: 'Quote-based', reviews: 'See Google', contracts: 'Seasonal', area: 'All Vaughan' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'Varies — check their site', reviews: 'See Google', contracts: 'Seasonal', area: 'Vaughan' },
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
          <p className="text-sm text-gray-500 not-prose mb-8">Other companies&rsquo; pricing and Google reviews change over time, so check each company&rsquo;s own site and Google listing for current details.</p>

          <h2>What to Ask Any Mosquito Control Company in Vaughan</h2>
          <p>Whichever company you consider, here are the questions worth asking any provider before you book, with BuzzSkito&rsquo;s answers.</p>

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
          <p className="text-sm text-gray-500 not-prose mb-8">BuzzSkito prices are for a standard lot under 10,000 sq ft, plus HST. Vaughan estate properties (large Kleinburg lots) often price above the base rate.</p>

          <h2>1. BuzzSkito (Vaughan coverage: full)</h2>
          <p><Link href="/vaughan-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito serves all Vaughan</Link> — Woodbridge, Kleinburg, Maple, Thornhill, Concord, Patterson, Vellore Village, Sonoma Heights, and Islington Woods.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Season plans on a standard lot: Basic $549 (5 sprays), Standard $994 (10 sprays, most popular), Exclusive $2,049 (20+ sprays), plus HST.</li>
            <li><strong>Reviews:</strong> 150+ Google reviews, perfect 5.0-star rating.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees.</li>
            <li><strong>Guarantees:</strong> {PROMISES.rainBackShort}; {PROMISES.biteFreeScope}.</li>
            <li><strong>Tick add-on:</strong> Critical for Vaughan estate properties — $597 standalone or $497 bundled (save $100), 5 sprays per season. Kleinburg and Woodbridge see significant tick pressure.</li>
            <li><strong>Estate-property friendly:</strong> Pricing scales for large Kleinburg and Maple lots.</li>
          </ul>

          <h2>2. Mosquito Man (Vaughan coverage: full)</h2>
          <p>Long-running GTA mosquito control company with a large review volume.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs; pricing varies — check their site. Per-treatment rates not publicly published.</li>
            <li><strong>Reviews:</strong> Google reviews across the GTA — see Google for the current count.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Vaughan service:</strong> Established customer base. No published Vaughan-specific pricing.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Vaughan coverage: franchise)</h2>
          <p>National Canadian franchise — Vaughan service depends on franchisee availability.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based; pricing varies — check their site.</li>
            <li><strong>Reviews:</strong> Varies by franchisee.</li>
            <li><strong>Contracts:</strong> Seasonal commitment standard.</li>
            <li><strong>Licensing:</strong> Ask for the local business&rsquo;s Ontario pesticide operator licence number.</li>
            <li><strong>Best for:</strong> Customers comfortable with franchise consistency variance.</li>
          </ul>

          <h2>4. LawnSavers (Vaughan coverage: limited)</h2>
          <p>Lawn care company offering mosquito control as an add-on.</p>
          <ul>
            <li><strong>Pricing:</strong> Pricing varies — check their site. Bundle pricing for existing lawn customers.</li>
            <li><strong>Reviews:</strong> Google reviews across all services combined — see Google for the current count.</li>
            <li><strong>Best for:</strong> Vaughan homeowners already using LawnSavers wanting bundled service.</li>
          </ul>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Vaughan" service="mosquito" location="price_card_mid" />
      </div>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>What to Verify Before Booking in Vaughan</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence is mandatory. Ask to see it.' },
              { title: 'PCP Registration Number', desc: 'Every product needs a valid PCP number on its label — confirm before booking.' },
              { title: 'Vaughan Coverage Confirmation', desc: 'Confirm they actually service Kleinburg, Maple, Thornhill (or wherever you are) — some "GTA" providers limit Vaughan service.' },
              { title: 'Estate Property Pricing', desc: 'For large Kleinburg or Bridle Path-adjacent lots, confirm pricing tier upfront.' },
              { title: 'Tick Bundle Available', desc: 'Vaughan tick risk is real — bundled tick coverage saves money vs. separate provider.' },
              { title: 'Re-Treatment Guarantee', desc: 'Ask what happens if rain washes off a treatment or mosquitoes return between visits, and which plans that covers.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Try BuzzSkito with One Treatment</h2>
          <p>Vaughan homeowners can book a single $99 treatment with BuzzSkito — no contract, no commitment. See the results before deciding on a seasonal plan.</p>
          <p>Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or use our <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">contact form</Link>.</p>

          <h2>Related Vaughan Pages</h2>
          <ul>
            <li><Link href="/vaughan-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Vaughan Mosquito Control</Link></li>
            <li><Link href="/vaughan-tick-spray" className="text-brand-700 hover:underline">Vaughan Tick Control Service</Link></li>
            <li><Link href="/woodbridge-mosquito-control" className="text-brand-700 hover:underline">Woodbridge Mosquito Control</Link></li>
            <li><Link href="/kleinburg-mosquito-control" className="text-brand-700 hover:underline">Kleinburg Mosquito Control</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">GTA-Wide Comparison</Link></li>
          </ul>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Vaughan" service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Vaughan Mosquito Control — FAQ</h2>
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

      <CTASection heading="Vaughan Mosquito Control, Starting at $99" subtext="No contracts. No upsells. Same-week service across Woodbridge, Kleinburg, Maple & Thornhill." variant="dark" />
    </>
  )
}
