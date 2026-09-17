import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'BuzzSkito vs Multi-Region Mosquito Companies',
  description:
    'Honest side-by-side comparison of BuzzSkito and larger multi-region mosquito companies for GTA mosquito control. Pricing, contracts, reviews, service areas, guarantees.',
  canonical: '/buzzskito-vs-mosquitoman',
})

const FAQS = [
  {
    question: 'Is BuzzSkito cheaper than a larger multi-region mosquito company?',
    answer: 'Compare the published price first. BuzzSkito single treatments start at $99 on a standard lot, and season plans are $549 (5 sprays), $994 (10 sprays every 2 weeks) or $2,049 (20+ sprays weekly), plus HST. Some larger companies sell seasonal packages and do not publish per-treatment prices, so ask for the per-spray price and the number of sprays in the season before you compare totals.',
  },
  {
    question: 'Do larger mosquito companies have more reviews than BuzzSkito?',
    answer: 'Often, yes. A company that has operated across several regions for many years will usually have more Google reviews in total. BuzzSkito has 150+ Google reviews with a 5.0 average. When comparing, read reviews from your own city and look at the rating as well as the count.',
  },
  {
    question: 'Does a multi-region company cover more areas than BuzzSkito?',
    answer: 'Usually. Multi-region operators may also cover cities outside the GTA. BuzzSkito focuses on the GTA core: 19 cities plus 30+ neighbourhoods, including Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Markham, and Richmond Hill, with same-week service availability. If you live outside those areas, a larger company may be the practical choice.',
  },
  {
    question: 'What guarantee should I expect from a mosquito control company?',
    answer: 'Ask for the terms in writing, because they vary by company and by package. BuzzSkito publishes its guarantees: rain within 1 hour of your treatment? We come back and re-treat free, on every plan. The Bite-Free Guarantee applies to Standard & Exclusive plans.',
  },
  {
    question: 'Do mosquito companies offer tick control too?',
    answer: 'Many offer tick control as an add-on to mosquito service. BuzzSkito offers tick control on its own ($597 for 5 sprays per season) or added to any mosquito plan ($497, save $100). Ask any company how many tick sprays the season includes.',
  },
  {
    question: 'Which is better for first-time customers?',
    answer: 'BuzzSkito\'s no-contract model makes it the lower-risk first-time choice. You can book a single $99 treatment, see results, and decide whether to continue. Some companies require a seasonal commitment, which is a bigger initial investment without prior experience of the service.',
  },
]

export default function BuzzSkitoVsMosquitomanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'BuzzSkito vs Multi-Region Mosquito Companies', url: '/buzzskito-vs-mosquitoman' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/buzzskito-vs-mosquitoman', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'BuzzSkito vs Multi-Region Mosquito Companies' },
        ]}
        title={<>BuzzSkito vs Multi-Region Mosquito Companies</>}
        subtitle={<>An honest 2026 comparison for GTA homeowners deciding between a local owner-operated company and a larger multi-region one. Pricing, contracts, reviews, service areas.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>What to Ask Any Mosquito Control Company</h2>
          <p>Ask every company you call the same six questions and compare the answers side by side.</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Question to ask</th>
                  <th className="px-4 py-2 text-left">BuzzSkito&apos;s answer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { q: 'Is the price shown before you book?', a: 'From $99 on a standard lot' },
                  { q: 'How many sprays per season?', a: '5, 10 or 20+ (tick: 5)' },
                  { q: 'What happens if it rains after a treatment?', a: PROMISES.rainBack },
                  { q: 'Is an Ontario pesticide operator licence number shown?', a: `Yes: ${BUSINESS.licenseNumber}` },
                  { q: 'Which plans include a guarantee?', a: 'Rain-back on every plan; Bite-Free on Standard & Exclusive' },
                  { q: 'How soon can you come out?', a: 'Same-week service is typical' },
                ].map(({ q, a }) => (
                  <tr key={q} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{q}</td>
                    <td className="px-4 py-2 text-gray-700">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Where BuzzSkito Wins</h2>
          <ul>
            <li><strong>Lower entry price.</strong> $99 single treatment on a standard lot, with no season commitment required.</li>
            <li><strong>No contracts.</strong> Test with one treatment, decide whether to continue.</li>
            <li><strong>Perfect review record.</strong> 150+ reviews, every one is 5 stars. No negative reviews.</li>
            <li><strong>Bundled tick savings.</strong> $100 off when adding tick to a mosquito plan.</li>
            <li><strong>Same-week availability.</strong> Smaller operation = faster scheduling.</li>
            <li><strong>Local owner-operated.</strong> Alex Francisco still rides along on accounts. Direct accountability.</li>
          </ul>

          <h2>Where a Larger Multi-Region Company Wins</h2>
          <ul>
            <li><strong>Review volume.</strong> More reviews accumulated over many years of operation.</li>
            <li><strong>Operating tenure.</strong> Longer track record in the GTA market.</li>
            <li><strong>Wider geographic reach.</strong> Often covers cities outside the GTA core.</li>
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

          <h2>Who Should Choose a Larger Multi-Region Company</h2>
          <p>Choose a larger multi-region company if you:</p>
          <ul>
            <li>Live outside the GTA core</li>
            <li>Prefer a longer-tenured brand</li>
            <li>Are comfortable with seasonal contracts</li>
          </ul>

          <h2>Honest Note on Pricing</h2>
          <p>Not every company publishes per-treatment pricing, and seasonal package quotes vary widely. BuzzSkito publishes all pricing on the <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">pricing page</Link> — single treatments, basic, standard, and exclusive seasons. Always confirm pricing directly with any provider before booking, as it can vary by property size.</p>

          <h2>Try BuzzSkito Without Committing</h2>
          <p>BuzzSkito&rsquo;s no-contract model means you can book a single $99 treatment, see the results, and decide whether to continue. No upsell pressure, no cancellation penalties. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a quick assessment</Link>.</p>

          <h2>Related Comparisons</h2>
          <ul>
            <li><Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">Local company vs national franchise</Link></li>
            <li><Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">Specialist vs lawn-care add-on</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Full GTA Comparison</Link></li>
          </ul>
        </div>
      </section>

      <TypicalPrices service="mosquito" city="GTA" />

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ — BuzzSkito vs Multi-Region Mosquito Companies</h2>
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

      <CTASection heading="Try BuzzSkito Without a Contract" subtext="Book a single $99 treatment. See the difference. Decide for yourself." variant="dark" />
    </>
  )
}
