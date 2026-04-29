import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito Control Mississauga 2026',
  description:
    'Compare Mississauga mosquito control 2026 — pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.',
  canonical: '/best-mosquito-control-companies-mississauga',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Mississauga?',
    answer: 'BuzzSkito is Mississauga-based and offers the lowest entry price ($99 single treatment) plus 129 perfect five-star reviews. Mosquito Man has the largest review volume (900+) across the GTA but operates on seasonal contracts. LawnSavers is best for homeowners already using their lawn care service. The right choice depends on whether you prioritize price, flexibility, local ownership, or bundled services.',
  },
  {
    question: 'How much does mosquito control cost in Mississauga?',
    answer: 'Single treatments in Mississauga range from $99 (BuzzSkito) to $129+ (LawnSavers) per visit. Seasonal programs run seasonal programs available on quote (custom-quoted by property size and treatment frequency). Mosquito Man seasonal pricing is quote-based; per-treatment rates are not publicly listed. Properties in Lorne Park, Mineola, and lakefront Port Credit estate areas typically price at the upper end due to lot size.',
  },
  {
    question: 'Which Mississauga neighbourhoods have the worst mosquito pressure?',
    answer: 'The highest mosquito pressure in Mississauga is in Clarkson and Lorne Park (Rattray Marsh adjacency), Meadowvale (conservation ponds), Streetsville and Erin Mills (Credit River corridor), and Port Credit/Lakeview (Lake Ontario humidity). All of these areas require the full 5-treatment season program for continuous protection.',
  },
  {
    question: 'Is Rattray Marsh dangerous for mosquitoes?',
    answer: 'Rattray Marsh Conservation Area is one of the most productive mosquito breeding sites in the western GTA. Its protected status means it cannot be treated by municipal larvicide programs, so it produces a steady stream of mosquitoes throughout the season. Properties in Clarkson within 800 metres of the marsh face the highest mosquito pressure in Mississauga and benefit most from professional barrier spray.',
  },
  {
    question: 'Do Mississauga mosquito control companies offer no-contract service?',
    answer: 'BuzzSkito is the primary no-contract option in Mississauga — book a single $99 treatment with no commitment, no cancellation fees, and decide based on results. Most other Mississauga providers require seasonal contracts. Always confirm contract terms before booking.',
  },
  {
    question: 'Can I bundle tick control with mosquito spray in Mississauga?',
    answer: 'Yes — and you should if your property is near the Credit River, Erindale Park, or Rattray Marsh. These areas are confirmed blacklegged tick (Lyme-disease vector) habitat per Peel Region Public Health. BuzzSkito offers tick standalone at seasonal pricing on quote (5 sprays) or $497 when bundled with any mosquito plan, saving $100. Lyme prevention plus mosquito comfort = full yard protection.',
  },
]

export default function BestMosquitoControlCompaniesMississaugaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies Mississauga', url: '/best-mosquito-control-companies-mississauga' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-mississauga')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Best Companies Mississauga</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Best Mosquito Control Companies in Mississauga — 2026</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Honest 2026 comparison of mosquito control providers serving Mississauga — Port Credit, Meadowvale, Streetsville, Erin Mills, Clarkson, Lorne Park. Pricing, reviews, contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Mississauga Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Mississauga-Specific Pricing</span>
          <span>✓ Updated Apr 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Mississauga Mosquito Control Companies — Compared</h2>
          <p>Mississauga homeowners have several professional mosquito control options. Here&rsquo;s an honest comparison based on publicly available pricing, Google reviews, and Mississauga-specific service offerings as of April 2026.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                  <th className="px-4 py-3 text-left">Reviews</th>
                  <th className="px-4 py-3 text-left">Contracts</th>
                  <th className="px-4 py-3 text-left">Mississauga Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { company: 'BuzzSkito', price: 'From $99', reviews: '129 (5.0★)', contracts: 'No contracts', area: 'All Mississauga (HQ)' },
                  { company: 'Mosquito Man', price: 'Quote-based', reviews: '900+ (4.8★)', contracts: 'Seasonal', area: 'All Mississauga' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'From $129', reviews: '500+ combined', contracts: 'Seasonal', area: 'Mississauga' },
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
          <p className="text-sm text-gray-500 not-prose mb-8">Pricing reflects publicly available rates as of April 2026. Lakefront estate properties in Lorne Park and Mineola often price above the base rate.</p>

          <h2>1. BuzzSkito (Mississauga coverage: full + HQ)</h2>
          <p><strong>BuzzSkito is Mississauga-based.</strong> Our headquarters is in Mississauga, and Mississauga is our home market — same-week service availability across every Mississauga neighbourhood. <Link href="/mississauga-mosquito-control" className="text-brand-700 hover:underline">Full Mississauga service page</Link>.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Seasonal programs (5, 10, 20+ treatments) custom-quoted on request.</li>
            <li><strong>Reviews:</strong> 129 Google reviews, perfect 5.0-star rating.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees.</li>
            <li><strong>Tick add-on:</strong> Critical for Mississauga properties near Credit River, Rattray Marsh, Erindale Park. $597 standalone or $497 bundled (save $100).</li>
            <li><strong>Local advantage:</strong> Mississauga-based ownership = local knowledge of every neighbourhood from Port Credit to Meadowvale.</li>
          </ul>

          <h2>2. Mosquito Man (Mississauga coverage: full)</h2>
          <p>Long-running GTA mosquito control company with the largest review volume in the market.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs around $450. Per-treatment pricing not publicly listed.</li>
            <li><strong>Reviews:</strong> 900+ Google reviews across the GTA.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Service:</strong> Established Mississauga customer base. Standard barrier spray.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Mississauga coverage: franchise)</h2>
          <p>National Canadian franchise — Mississauga service depends on franchisee availability.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based, no published rates.</li>
            <li><strong>Reviews:</strong> Varies by franchisee.</li>
            <li><strong>Contracts:</strong> Seasonal commitment standard.</li>
          </ul>

          <h2>4. LawnSavers (Mississauga coverage: yes)</h2>
          <p>Lawn care provider offering mosquito control as an add-on. LawnSavers is well-established in the Mississauga lawn care market.</p>
          <ul>
            <li><strong>Pricing:</strong> From $129/treatment. Bundle pricing for existing lawn customers.</li>
            <li><strong>Reviews:</strong> 500+ Google reviews across all services.</li>
            <li><strong>Best for:</strong> Mississauga homeowners already using LawnSavers for lawn care wanting bundled service.</li>
          </ul>

          <h2>Mississauga-Specific Considerations</h2>
          <p>When choosing a Mississauga mosquito control provider, factors that matter more here than in other GTA cities:</p>
          <ul>
            <li><strong>Credit River corridor experience.</strong> The Credit River runs the entire length of Mississauga and is the dominant mosquito source for Streetsville, Erindale, Mississauga Valley, and Port Credit. Providers experienced with river-corridor properties spray differently than generic operators.</li>
            <li><strong>Rattray Marsh adjacency knowledge.</strong> Clarkson and Lorne Park properties near Rattray Marsh face GTA-leading mosquito pressure. Providers should adjust treatment frequency for these areas.</li>
            <li><strong>Lakefront humidity factor.</strong> Port Credit, Lakeview, and Lakefront Mineola have extended evening mosquito activity due to Lake Ontario humidity — barrier spray timing matters.</li>
            <li><strong>Meadowvale Conservation pressure.</strong> Properties within 600 metres of Meadowvale Conservation Area need the full 5-treatment program.</li>
            <li><strong>Stormwater pond developments.</strong> Newer Mississauga developments (Churchill Meadows, Lisgar) have multiple stormwater ponds within walking distance — pressure depends on which side of the development you live on.</li>
          </ul>

          <h2>What to Verify Before Booking</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence (PPAL) required by law.' },
              { title: 'Health Canada PCP Number', desc: 'Every product must carry a valid Pest Control Product registration.' },
              { title: 'Mississauga Coverage Confirmation', desc: 'Confirm coverage for your specific Mississauga FSA — service can vary.' },
              { title: 'Tick Coverage Available', desc: 'Mississauga has confirmed Lyme-zone areas — bundle saves money.' },
              { title: 'Estate Property Pricing', desc: 'Confirm pricing tier for large Lorne Park or Mineola lots.' },
              { title: 'Re-Treatment Guarantee', desc: 'Free re-spray if mosquitoes return within the protection window.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Try BuzzSkito Risk-Free in Mississauga</h2>
          <p>Mississauga homeowners can book a single $99 treatment with no contract or commitment. See results, decide on a season plan. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a quote</Link>.</p>

          <h2>Related Mississauga Pages</h2>
          <ul>
            <li><Link href="/mississauga-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mississauga Mosquito Control (full service page)</Link></li>
            <li><Link href="/mississauga-tick-spray" className="text-brand-700 hover:underline">Mississauga Tick Control Service</Link></li>
            <li><Link href="/credit-valley-mosquito-control" className="text-brand-700 hover:underline">Credit Valley Mosquito Control</Link></li>
            <li><Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito Man</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">GTA-Wide Comparison</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Mississauga Mosquito Control — FAQ</h2>
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

      <CTASection heading="Mississauga-Based · From $99 · No Contract" subtext="Local Mississauga ownership. 129 five-star reviews. Try a single treatment without commitment." variant="dark" />
    </>
  )
}
