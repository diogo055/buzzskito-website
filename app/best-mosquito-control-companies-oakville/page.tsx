import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito Control Oakville 2026',
  description:
    'Compare mosquito control companies in Oakville 2026 — Glen Abbey, Bronte, Old Oakville, Joshua Creek. BuzzSkito vs Mosquito Man vs LawnSavers.',
  canonical: '/best-mosquito-control-companies-oakville',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Oakville?',
    answer: 'BuzzSkito offers the lowest single-treatment price in Oakville (from $99), no contracts, and a perfect 5.0 rating across 129 Google reviews. Mosquito Man has more cumulative reviews (900+) and a longer GTA track record but operates on seasonal contracts. LawnSavers bundles mosquito with lawn care for existing customers. Best choice depends on your priorities.',
  },
  {
    question: 'How much does mosquito control cost in Oakville in 2026?',
    answer: 'Single treatments in Oakville range from $99 (BuzzSkito) to $129+ (LawnSavers) per visit. Seasonal programs are custom-quoted by all major providers based on property size and treatment frequency. Old Oakville lakefront estates and large Joshua Creek properties price at the top of the range due to coverage area.',
  },
  {
    question: 'Which Oakville neighbourhoods have the worst mosquito and tick problems?',
    answer: 'Properties near Bronte Creek Provincial Park, the Iroquois Shoreline corridor, and the Joshua Creek green spaces face the highest mosquito and tick pressure. Glen Abbey homes near the golf course wetlands, Old Oakville lakefront properties, and West Oak Trails (close to 16 Mile Creek) are also high-pressure zones. Tick risk is significant near every conservation-area-adjacent property in Oakville.',
  },
  {
    question: 'Do Oakville mosquito control companies handle ticks too?',
    answer: 'They should — Oakville tick risk is real, especially near Bronte Creek and 16 Mile Creek. BuzzSkito offers tick standalone at seasonal pricing on quote (5 sprays) or $497 bundled with any mosquito plan, saving $100. Always confirm a provider tests for tick activity in your specific Oakville neighbourhood.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-oakville')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Best Companies Oakville</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Best Mosquito Control Companies in Oakville — 2026</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Honest 2026 comparison of Oakville mosquito control providers — Glen Abbey, Bronte, Old Oakville, Joshua Creek, West Oak Trails. Pricing, reviews, and what each company actually delivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Oakville Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Oakville-Specific Pricing</span>
          <span>✓ Updated Apr 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Oakville Mosquito Control Companies — Compared</h2>
          <p>Oakville homeowners — particularly those near Bronte Creek, 16 Mile Creek, the Iroquois Shoreline, and Joshua Creek — have several professional mosquito control options. Here is an honest comparison based on publicly available pricing, Google reviews, and Oakville service offerings as of April 2026.</p>

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
                  { company: 'BuzzSkito', price: 'From $99', reviews: '129 (5.0★)', contracts: 'No contracts', area: 'All Oakville' },
                  { company: 'Mosquito Man', price: 'Quote-based', reviews: '900+ (4.8★)', contracts: 'Seasonal', area: 'All Oakville' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'From $129', reviews: '500+ combined', contracts: 'Seasonal', area: 'Oakville' },
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
          <p className="text-sm text-gray-500 not-prose mb-8">Pricing reflects publicly available rates as of April 2026. Old Oakville lakefront estates and large Joshua Creek properties typically price above the base rate.</p>

          <h2>1. BuzzSkito (Oakville coverage: full)</h2>
          <p><Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito serves all Oakville</Link> — Glen Abbey, Bronte, Old Oakville, North Oakville, Joshua Creek, River Oaks, West Oak Trails, Falgarwood, Clearview, and Eastlake.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Seasonal programs (5, 10, 20+ treatments) custom-quoted on request.</li>
            <li><strong>Reviews:</strong> 129 Google reviews, perfect 5.0-star rating.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees.</li>
            <li><strong>Tick add-on:</strong> Critical for Oakville homes near Bronte Creek and Iroquois Shoreline. $597 standalone or tick add-on bundle available on quote.</li>
            <li><strong>Lakefront coverage:</strong> Old Oakville lakefront properties experience high mosquito pressure from Lake Ontario humidity — properly equipped barrier spray handles it.</li>
          </ul>

          <h2>2. Mosquito Man (Oakville coverage: full)</h2>
          <p>Long-running GTA company with the largest review volume in the market.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs around $450. Per-treatment pricing not publicly listed.</li>
            <li><strong>Reviews:</strong> 900+ Google reviews across the GTA.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Service:</strong> Established Oakville customer base. Standard barrier spray.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Oakville coverage: franchise)</h2>
          <p>National Canadian franchise — Oakville service depends on franchisee availability.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based, no published rates.</li>
            <li><strong>Reviews:</strong> Varies by franchisee.</li>
            <li><strong>Contracts:</strong> Seasonal commitment standard.</li>
          </ul>

          <h2>4. LawnSavers (Oakville coverage: limited)</h2>
          <p>Primarily a lawn care provider offering mosquito control as an add-on.</p>
          <ul>
            <li><strong>Pricing:</strong> From $129/treatment. Bundle pricing for existing lawn customers.</li>
            <li><strong>Reviews:</strong> 500+ Google reviews across all services.</li>
            <li><strong>Best for:</strong> Oakville homeowners already using LawnSavers wanting bundled service.</li>
          </ul>

          <h2>What to Check Before Booking in Oakville</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence required. Ask to see it.' },
              { title: 'Health Canada PCP Number', desc: 'Every product must carry a valid PCP registration number.' },
              { title: 'Conservation-Area Experience', desc: 'Bronte Creek, Iroquois Shoreline, and 16 Mile Creek properties need providers experienced with high-pressure zones.' },
              { title: 'Tick Coverage Available', desc: 'Oakville tick risk is real — bundle saves money vs. separate provider.' },
              { title: 'Estate-Property Pricing', desc: 'Confirm pricing tier upfront for large Old Oakville or Joshua Creek lots.' },
              { title: 'Re-Treatment Guarantee', desc: 'Free re-spray if mosquitoes return within the protection window.' },
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

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Oakville Mosquito Control — FAQ</h2>
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

      <CTASection heading="Bug-Free Oakville Yard, Starting at $99" subtext="No contracts. Same-week service across Glen Abbey, Bronte, Old Oakville & Joshua Creek." variant="dark" />
    </>
  )
}
