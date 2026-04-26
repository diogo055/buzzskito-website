import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito Control Companies Vaughan 2026 — Compared',
  description:
    'Compare top mosquito control companies serving Vaughan, Woodbridge, Kleinburg, Maple, Thornhill & Concord in 2026. Pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.',
  canonical: '/best-mosquito-control-companies-vaughan',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Vaughan?',
    answer: 'BuzzSkito offers the lowest starting price in Vaughan ($99/treatment), no contracts, and a perfect 5.0 rating across 126 Google reviews. Mosquito Man has more cumulative reviews (900+) but operates on seasonal contracts. LawnSavers is best for existing lawn-care customers wanting a bundled add-on. The right choice depends on whether you prioritize price, flexibility, or bundled services.',
  },
  {
    question: 'How much does mosquito control cost in Vaughan in 2026?',
    answer: 'Single treatments in Vaughan range from $99 (BuzzSkito) to $129+ (LawnSavers) per visit. Seasonal programs run $450–$2,049. Vaughan estate properties in Kleinburg, the Bridle Path-adjacent areas, and large Woodbridge lots tend to price higher due to coverage area.',
  },
  {
    question: 'Which Vaughan neighbourhoods need the most mosquito control?',
    answer: 'Kleinburg estate properties (Humber River valley exposure), Woodbridge homes near the Humber River, Maple properties along the East Don River corridor, and Thornhill near Bayview ravines see the highest mosquito pressure. Tick risk is also elevated near these green corridors and the Oak Ridges Moraine.',
  },
  {
    question: 'Do Vaughan mosquito control companies handle ticks too?',
    answer: 'Most do. Vaughan tick risk is significant — Kleinburg, Woodbridge, and Maple all sit near established blacklegged tick populations. BuzzSkito offers tick standalone at $597/season (5 sprays) or $497 bundled with mosquito plans. Always confirm your provider tests for tick coverage in your specific neighbourhood.',
  },
  {
    question: 'Do any Vaughan mosquito control companies offer no-contract service?',
    answer: 'BuzzSkito is the primary no-contract option in Vaughan. Most other providers require seasonal commitments with cancellation penalties. Test a single $99 treatment with BuzzSkito before committing to anything longer.',
  },
]

export default function BestMosquitoControlCompaniesVaughanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies Vaughan', url: '/best-mosquito-control-companies-vaughan' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-vaughan')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Best Companies Vaughan</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Best Mosquito Control Companies in Vaughan — 2026</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Honest 2026 comparison of Vaughan mosquito control providers — Woodbridge, Kleinburg, Maple, Thornhill, Concord. Pricing, reviews, and what each company actually offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Vaughan Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Vaughan-Specific Pricing</span>
          <span>✓ Updated Apr 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Vaughan Mosquito Control Companies — Compared</h2>
          <p>Vaughan homeowners — particularly those in Woodbridge, Kleinburg, Maple, Thornhill, and Concord — have several professional mosquito control options. Here is an honest comparison based on publicly available pricing, Google reviews, and Vaughan service offerings as of April 2026.</p>

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
                  { company: 'BuzzSkito', price: 'From $99', reviews: '126 (5.0★)', contracts: 'No contracts', area: 'All Vaughan' },
                  { company: 'Mosquito Man', price: '~$450 seasonal', reviews: '900+ (4.8★)', contracts: 'Seasonal', area: 'All Vaughan' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'From $129', reviews: '500+ combined', contracts: 'Seasonal', area: 'Vaughan' },
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
          <p className="text-sm text-gray-500 not-prose mb-8">Pricing reflects publicly available rates as of April 2026. Vaughan estate properties (large Kleinburg lots) often price above the base rate.</p>

          <h2>1. BuzzSkito (Vaughan coverage: full)</h2>
          <p><Link href="/vaughan-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito serves all Vaughan</Link> — Woodbridge, Kleinburg, Maple, Thornhill, Concord, Patterson, Vellore Village, Sonoma Heights, and Islington Woods.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Basic season $549 (5 sprays), Standard $994 (10 sprays), Exclusive $2,049 (20+ sprays).</li>
            <li><strong>Reviews:</strong> 126 Google reviews, perfect 5.0-star rating.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees.</li>
            <li><strong>Tick add-on:</strong> Critical for Vaughan estate properties — $597 standalone or $497 bundled (save $100). Kleinburg and Woodbridge see significant tick pressure.</li>
            <li><strong>Estate-property friendly:</strong> Pricing scales for large Kleinburg and Maple lots.</li>
          </ul>

          <h2>2. Mosquito Man (Vaughan coverage: full)</h2>
          <p>Long-running GTA mosquito control company with the highest review volume in the market.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs around $450. Per-treatment rates not publicly published.</li>
            <li><strong>Reviews:</strong> 900+ Google reviews across the GTA.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Vaughan service:</strong> Established customer base. No published Vaughan-specific pricing.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Vaughan coverage: franchise)</h2>
          <p>National Canadian franchise — Vaughan service depends on franchisee availability.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based, no published rates.</li>
            <li><strong>Reviews:</strong> Varies by franchisee.</li>
            <li><strong>Contracts:</strong> Seasonal commitment standard.</li>
            <li><strong>Best for:</strong> Customers comfortable with franchise consistency variance.</li>
          </ul>

          <h2>4. LawnSavers (Vaughan coverage: limited)</h2>
          <p>Lawn care company offering mosquito control as an add-on.</p>
          <ul>
            <li><strong>Pricing:</strong> From $129/treatment. Bundle pricing for existing lawn customers.</li>
            <li><strong>Reviews:</strong> 500+ Google reviews across all services combined.</li>
            <li><strong>Best for:</strong> Vaughan homeowners already using LawnSavers wanting bundled service.</li>
          </ul>

          <h2>What to Verify Before Booking in Vaughan</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence is mandatory. Ask to see it.' },
              { title: 'Health Canada PCP Registration', desc: 'Every product needs a valid PCP number — confirm before booking.' },
              { title: 'Vaughan Coverage Confirmation', desc: 'Confirm they actually service Kleinburg, Maple, Thornhill (or wherever you are) — some "GTA" providers limit Vaughan service.' },
              { title: 'Estate Property Pricing', desc: 'For large Kleinburg or Bridle Path-adjacent lots, confirm pricing tier upfront.' },
              { title: 'Tick Bundle Available', desc: 'Vaughan tick risk is real — bundled tick coverage saves money vs. separate provider.' },
              { title: 'Re-Treatment Guarantee', desc: 'Free re-spray if mosquitoes return within the protection window.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Try BuzzSkito Risk-Free</h2>
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

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Vaughan Mosquito Control — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Bug-Free Vaughan Backyard, Starting at $99" subtext="No contracts. No upsells. Same-week service across Woodbridge, Kleinburg, Maple & Thornhill." variant="dark" />
    </>
  )
}
