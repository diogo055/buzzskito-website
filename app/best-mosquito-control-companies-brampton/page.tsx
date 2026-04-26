import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito Control Brampton 2026 · Compared',
  description:
    'Compare top mosquito control companies in Brampton 2026 — pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers vs Mosquito.Buzz.',
  canonical: '/best-mosquito-control-companies-brampton',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Brampton?',
    answer: 'It depends on what matters most. BuzzSkito is the lowest-priced option in Brampton (from $99/treatment), with no contracts and 126 five-star Google reviews. Mosquito Man has the largest review volume (900+) and a longer track record. LawnSavers bundles mosquito control with lawn care for existing customers. Each has different strengths in pricing, flexibility, and bundled services.',
  },
  {
    question: 'How much does mosquito control cost in Brampton in 2026?',
    answer: 'Single treatments in Brampton range from $99 (BuzzSkito) to $129+ (LawnSavers) per visit. Seasonal programs range from approximately $450 (Mosquito Man basic) to $549–$2,049 (BuzzSkito tiered plans). Pricing varies by lot size — Brampton properties in Castlemore, Springdale, and Mount Pleasant tend to be larger and may price higher.',
  },
  {
    question: 'Do Brampton mosquito control companies offer no-contract plans?',
    answer: 'BuzzSkito is the only major provider in Brampton offering true no-contract service — book a single treatment from $99 with no commitment. Most competitors require seasonal contracts with cancellation penalties. Always confirm contract terms before booking.',
  },
  {
    question: 'Which Brampton neighbourhoods have the worst mosquito problems?',
    answer: 'Properties near the Etobicoke Creek corridor, Heart Lake Conservation Area, and Professor\'s Lake see consistent mosquito pressure. Castlemore, Springdale, and Sandalwood — with newer developments and proximity to natural drainage — also experience higher activity. The Credit River edge in Bram West is another high-pressure zone.',
  },
  {
    question: 'Do Brampton mosquito control companies also handle ticks?',
    answer: 'Most Brampton providers offer tick control as a separate service or add-on. BuzzSkito offers tick control standalone for $597/season (5 sprays) or $497 when bundled with any mosquito plan — saving $100. Tick risk in Brampton is highest near the Etobicoke Creek and Heart Lake green spaces.',
  },
]

export default function BestMosquitoControlCompaniesBramptonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies Brampton', url: '/best-mosquito-control-companies-brampton' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-brampton')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Best Companies Brampton</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Best Mosquito Control Companies in Brampton — 2026</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            An honest 2026 comparison of mosquito control providers serving Brampton — pricing, reviews, contract flexibility, and what each company actually delivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Brampton Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Brampton-Specific Pricing</span>
          <span>✓ Reviewed Apr 2026</span>
          <span>✓ Verified Google Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Brampton Mosquito Control Companies — Compared</h2>
          <p>Brampton homeowners have several professional mosquito control options. Here is an honest comparison based on publicly available pricing, Google reviews, and service offerings as of April 2026.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                  <th className="px-4 py-3 text-left">Reviews</th>
                  <th className="px-4 py-3 text-left">Contracts</th>
                  <th className="px-4 py-3 text-left">Brampton Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { company: 'BuzzSkito', price: 'From $99', reviews: '126 (5.0★)', contracts: 'No contracts', area: 'All Brampton' },
                  { company: 'Mosquito Man', price: '~$450 seasonal', reviews: '900+ (4.8★)', contracts: 'Seasonal', area: 'All Brampton' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'From $129', reviews: '500+ combined', contracts: 'Seasonal', area: 'Brampton' },
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
          <p className="text-sm text-gray-500 not-prose mb-8">Pricing reflects publicly available rates as of early 2026. Brampton-specific pricing may vary by lot size — homes in Castlemore and Heart Lake tend to fall on the higher end.</p>

          <h2>1. BuzzSkito (Brampton coverage: full)</h2>
          <p><Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito serves all Brampton neighbourhoods</Link> including Castlemore, Heart Lake, Springdale, Mount Pleasant, Bramalea, Bram West, Sandalwood, Snelgrove, and Fletcher's Meadow.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Basic season $549 (5 sprays), Standard $994 (10 sprays), Exclusive $2,049 (20+ sprays).</li>
            <li><strong>Reviews:</strong> 126 Google reviews, perfect 5.0-star rating across the GTA.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees. Test a single treatment before committing.</li>
            <li><strong>Tick add-on:</strong> Standalone tick plan $597 (5 sprays) or $497 bundled with mosquito plan — important for Brampton homes near Heart Lake and the Etobicoke Creek.</li>
            <li><strong>Local responsiveness:</strong> Mississauga-based with same-week service availability across Brampton.</li>
          </ul>

          <h2>2. Mosquito Man (Brampton coverage: full)</h2>
          <p>One of the longest-running mosquito control companies in the GTA with the largest review volume in the market.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs around $450. Per-treatment pricing not publicly published.</li>
            <li><strong>Reviews:</strong> 900+ Google reviews across all GTA service areas.</li>
            <li><strong>Contracts:</strong> Seasonal program structure typical.</li>
            <li><strong>Service:</strong> Standard barrier spray. Brampton coverage well-established with multiple-year customer base.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Brampton coverage: franchise)</h2>
          <p>National Canadian franchise with locations across Ontario.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based — pricing not published online.</li>
            <li><strong>Reviews:</strong> Varies by franchise location.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Service:</strong> Quality and consistency depend on which franchisee operates in your area.</li>
          </ul>

          <h2>4. LawnSavers (Brampton coverage: limited)</h2>
          <p>Primarily a lawn care company offering mosquito control as an add-on for existing lawn customers.</p>
          <ul>
            <li><strong>Pricing:</strong> From $129 per treatment. Bundle pricing for lawn-care customers.</li>
            <li><strong>Reviews:</strong> 500+ Google reviews across all services combined.</li>
            <li><strong>Contracts:</strong> Seasonal programs.</li>
            <li><strong>Best for:</strong> Brampton homeowners already using LawnSavers for lawn care wanting bundled service.</li>
          </ul>

          <h2>What Brampton Homeowners Should Look For</h2>
          <p>Whichever provider you choose, verify these basics before booking:</p>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence required by law. Ask to see it.' },
              { title: 'Health Canada PCP Number', desc: 'Every product must carry a valid Pest Control Product registration number.' },
              { title: 'Re-Treatment Guarantee', desc: 'Free re-spray if mosquitoes return early or rain washes off the product.' },
              { title: 'Phone Quotes', desc: 'A company that won\'t quote over the phone often uses the home visit as a sales pitch.' },
              { title: 'Brampton Service Coverage', desc: 'Confirm they actually cover your Brampton neighbourhood before booking.' },
              { title: 'Real Google Reviews', desc: 'Look for specific, detailed Brampton reviews — not generic five-star listings.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Ready to Compare in Person?</h2>
          <p>The best evaluation method is a single trial treatment. BuzzSkito&rsquo;s no-contract model means you can book one Brampton treatment from $99, see results, and decide if you want to continue.</p>
          <p>Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or use our <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">contact form</Link> for a Brampton-specific quote.</p>

          <h2>Related Brampton Pages</h2>
          <ul>
            <li><Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Brampton Mosquito Control</Link></li>
            <li><Link href="/brampton-tick-spray" className="text-brand-700 hover:underline">Brampton Tick Control Service</Link></li>
            <li><Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">2026 Mosquito Control Pricing</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">GTA-Wide Comparison</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Brampton Mosquito Control — FAQ</h2>
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

      <CTASection heading="Ready for a Bug-Free Brampton Yard?" subtext="Get a free Brampton-specific quote today. No contracts. No commitment." variant="dark" />
    </>
  )
}
