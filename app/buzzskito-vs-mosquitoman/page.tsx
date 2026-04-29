import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'BuzzSkito vs Mosquito Man · Honest 2026 GTA Comparison',
  description:
    'Honest side-by-side comparison of BuzzSkito and Mosquito Man for GTA mosquito control. Pricing, contracts, reviews, service areas, guarantees.',
  canonical: '/buzzskito-vs-mosquitoman',
})

const FAQS = [
  {
    question: 'Is BuzzSkito or Mosquito Man cheaper?',
    answer: 'BuzzSkito is cheaper at the entry level — single treatments start at $99 vs Mosquito Man\'s seasonal package pricing around $450. For a full season, BuzzSkito\'s Standard Plan ($994 for 10 sprays bi-weekly) provides more frequent coverage than Mosquito Man\'s standard offering. Per-spray cost is comparable, but BuzzSkito offers true no-contract single-treatment pricing while Mosquito Man typically requires seasonal commitment.',
  },
  {
    question: 'Does Mosquito Man have more reviews than BuzzSkito?',
    answer: 'Yes. Mosquito Man has 900+ Google reviews accumulated across multiple GTA cities and many years of operation, with an approximate 4.8-star average. BuzzSkito has 129 Google reviews — all five stars (perfect 5.0 rating). Mosquito Man wins on review volume and tenure; BuzzSkito wins on rating consistency and zero-negative-review record.',
  },
  {
    question: 'Which company has better service areas in the GTA?',
    answer: 'Both serve the major GTA cities. Mosquito Man covers more outer-Ontario cities (Kitchener, Peterborough, Belleville, Sudbury) as a multi-region operation. BuzzSkito focuses on the GTA core — 19 cities plus 30+ neighbourhoods — with same-week service availability. For Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Markham, Richmond Hill, both serve fully.',
  },
  {
    question: 'Do Mosquito Man and BuzzSkito offer the same guarantee?',
    answer: 'Both offer re-treatment guarantees if mosquitoes return within the protection window. BuzzSkito\'s rain-back guarantee (free re-treatment if rain falls within 1 hour) is publicly published. Mosquito Man\'s guarantee terms vary by package — confirm before booking.',
  },
  {
    question: 'Does Mosquito Man offer tick control?',
    answer: 'Mosquito Man offers tick control as an add-on with mosquito service. BuzzSkito offers tick control standalone ($597/season for 5 sprays) or bundled with mosquito plans ($497, save $100). For Lyme-disease-prone GTA areas, both companies provide adequate tick coverage — pricing structure is the main difference.',
  },
  {
    question: 'Which is better for first-time customers?',
    answer: 'BuzzSkito\'s no-contract model makes it the lower-risk first-time choice. You can book a single $99 treatment, see results, and decide whether to continue. Mosquito Man typically requires seasonal commitment, which is a bigger initial investment without prior experience of the service.',
  },
]

export default function BuzzSkitoVsMosquitomanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'BuzzSkito vs Mosquito Man', url: '/buzzskito-vs-mosquitoman' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/buzzskito-vs-mosquitoman')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">BuzzSkito vs Mosquito Man</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">BuzzSkito vs Mosquito Man</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">An honest 2026 side-by-side comparison for GTA homeowners deciding between the two. Pricing, contracts, reviews, service areas — facts only.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Try BuzzSkito Risk-Free</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>The Quick Comparison</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">BuzzSkito</th>
                  <th className="px-4 py-3 text-left">Mosquito Man</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single treatment', 'From $99', 'Not publicly listed'],
                  ['Standard season', '$994 (10 sprays bi-weekly)', '~$450 standard'],
                  ['Tick control', '$597 standalone / $497 bundled', 'Add-on to mosquito'],
                  ['Google reviews', '126 (perfect 5.0★)', '900+ (~4.8★)'],
                  ['Contracts required', 'No', 'Typically seasonal'],
                  ['Re-treatment guarantee', 'Yes — published rain-back', 'Yes — varies by package'],
                  ['Service area', '19 GTA cities + 30 neighbourhoods', 'GTA + outer Ontario'],
                  ['Same-week service', 'Yes', 'Varies'],
                  ['Local ownership', 'Mississauga-based, single-owner', 'Multi-region operation'],
                  ['Operating since', '2024', 'Long-established'],
                ].map(([factor, a, b], i) => (
                  <tr key={i} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{factor}</td>
                    <td className="px-4 py-3 text-brand-700 font-bold">{a}</td>
                    <td className="px-4 py-3 text-gray-600">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Where BuzzSkito Wins</h2>
          <ul>
            <li><strong>Lower entry price.</strong> $99 single treatment vs Mosquito Man&rsquo;s seasonal-only model.</li>
            <li><strong>No contracts.</strong> Test with one treatment, decide whether to continue.</li>
            <li><strong>Perfect review record.</strong> 129 reviews, every one is 5 stars. No negative reviews.</li>
            <li><strong>Bundled tick savings.</strong> $100 off when adding tick to a mosquito plan.</li>
            <li><strong>Same-week availability.</strong> Smaller operation = faster scheduling.</li>
            <li><strong>Local owner-operated.</strong> Alex Francisco still rides along on accounts. Direct accountability.</li>
          </ul>

          <h2>Where Mosquito Man Wins</h2>
          <ul>
            <li><strong>Review volume.</strong> 900+ reviews accumulated over many years vs BuzzSkito&rsquo;s 126.</li>
            <li><strong>Operating tenure.</strong> Longer track record in the GTA market.</li>
            <li><strong>Wider geographic reach.</strong> Covers cities outside the GTA core (Kitchener, Peterborough, Belleville, Sudbury, Halifax).</li>
            <li><strong>Brand recognition.</strong> Better-known name in some neighbourhoods.</li>
          </ul>

          <h2>Who Should Choose BuzzSkito</h2>
          <p>Choose BuzzSkito if you:</p>
          <ul>
            <li>Want to test a single $99 treatment before committing to a season</li>
            <li>Don&rsquo;t want to sign a contract</li>
            <li>Value bundled mosquito + tick savings</li>
            <li>Prefer a smaller, owner-operated local company over a multi-region operation</li>
            <li>Live in any of our <Link href="/service-areas" className="text-brand-700 hover:underline">19 GTA cities</Link></li>
          </ul>

          <h2>Who Should Choose Mosquito Man</h2>
          <p>Choose Mosquito Man if you:</p>
          <ul>
            <li>Live outside the GTA core (e.g. Kitchener, Peterborough, Belleville)</li>
            <li>Prefer a longer-tenured brand</li>
            <li>Are comfortable with seasonal contracts</li>
          </ul>

          <h2>Honest Note on Pricing</h2>
          <p>Mosquito Man does not publish per-treatment pricing publicly. The ~$450 figure is the typical seasonal package quote based on customer reports. BuzzSkito publishes all pricing on the <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">pricing page</Link> — single treatments, basic, standard, and exclusive seasons. Always confirm pricing directly with either provider before booking, as it can vary by property size.</p>

          <h2>Try BuzzSkito Without Committing</h2>
          <p>BuzzSkito&rsquo;s no-contract model means you can book a single $99 treatment, see the results, and decide whether to continue. No upsell pressure, no cancellation penalties. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a quick assessment</Link>.</p>

          <h2>Related Comparisons</h2>
          <ul>
            <li><Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito.Buzz</Link></li>
            <li><Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">BuzzSkito vs LawnSavers</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Full GTA Comparison (4 companies)</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ — BuzzSkito vs Mosquito Man</h2>
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

      <CTASection heading="Try BuzzSkito Without a Contract" subtext="Book a single $99 treatment. See the difference. Decide for yourself." variant="dark" />
    </>
  )
}
