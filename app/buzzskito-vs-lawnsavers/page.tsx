import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'BuzzSkito vs Lawn Care Mosquito Add-Ons',
  description:
    'Compare BuzzSkito and lawn care companies for GTA mosquito and tick control. Specialist vs lawn-care add-on — pricing, focus, contracts, what each does best.',
  canonical: '/buzzskito-vs-lawnsavers',
})

const FAQS = [
  {
    question: 'Is a specialist or a lawn care company better for mosquito control?',
    answer: 'BuzzSkito is mosquito and tick control as its primary business — it\'s what we do all day. A lawn care company is built around lawns and may offer mosquito control as an add-on service for existing lawn customers. For specialized mosquito knowledge, technique, and pricing flexibility, a specialist has the edge. For homeowners who already use a lawn care company and want one-stop convenience, its add-on can make sense.',
  },
  {
    question: 'Is BuzzSkito cheaper than a lawn care mosquito add-on?',
    answer: 'Compare the per-treatment price and the number of sprays. BuzzSkito single treatments start at $99 on a standard lot, and the Standard Plan is $994 for 10 sprays every 2 weeks, plus HST. Lawn care add-ons are often priced per treatment or bundled into a lawn program, so ask for the per-spray price and the number of sprays in the season. If you already pay a lawn company, its bundled price may be competitive; compare the standalone numbers side by side.',
  },
  {
    question: 'Do lawn care companies do tick control too?',
    answer: 'Some offer tick treatment as an add-on to lawn care or mosquito programs. BuzzSkito offers a dedicated 5-spray-per-season tick program ($597 standalone, $497 bundled with a mosquito plan) targeting tick-specific habitats: leaf litter, lawn-to-woods edges, and fence-line vegetation. Ask any company how many tick sprays the season includes.',
  },
  {
    question: 'Should I bundle lawn care and mosquito control with one company?',
    answer: 'Bundling is convenient but not always cheaper or higher-quality. A lawn care company is built around fertilization, weed control, and lawn health. BuzzSkito is built around mosquito and tick control. Many homeowners get the best results by using a lawn-care specialist for lawns and a mosquito specialist for bugs — each company focuses on what it does best.',
  },
  {
    question: 'Do lawn care companies have more reviews than BuzzSkito?',
    answer: 'Often, yes, because their reviews cover all their services (lawn care, irrigation, and pest add-ons). BuzzSkito has 150+ Google reviews with a 5.0 average, for mosquito and tick control specifically. Look at both the count and whether the reviews mention mosquito work.',
  },
  {
    question: 'Do lawn care companies and BuzzSkito use the same products?',
    answer: 'Any company applying pesticides commercially in Ontario needs a licence, and products must be applied according to their label directions. BuzzSkito holds Ontario Pesticide Operator Licence L-240-2436835197. The product chemistry can be similar between companies; the differentiation is technique, application frequency, and target habitats. BuzzSkito applies to mosquito-specific resting zones (leaf undersides, dense shrubs, fence-line vegetation). A general lawn care add-on may not target them with the same depth.',
  },
]

export default function BuzzSkitoVsLawnSaversPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'BuzzSkito vs Lawn Care Mosquito Add-Ons', url: '/buzzskito-vs-lawnsavers' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/buzzskito-vs-lawnsavers', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'BuzzSkito vs Lawn Care Mosquito Add-Ons' },
        ]}
        title={<>BuzzSkito vs Lawn Care Mosquito Add-Ons</>}
        subtitle={<>Specialist vs lawn-care add-on. Honest 2026 comparison for GTA homeowners deciding where to get their mosquito and tick control.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>What to Ask Any Mosquito Control Company</h2>
          <p>Ask every company you call the same five questions and compare the answers side by side.</p>
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
                ].map(({ q, a }) => (
                  <tr key={q} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{q}</td>
                    <td className="px-4 py-2 text-gray-700">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The Specialist vs Generalist Question</h2>
          <p>This is the central trade-off. Some of the GTA&rsquo;s strongest lawn care brands also offer mosquito control. They earn their reputations because lawn care is their specialty. Their mosquito control offering exists, but it&rsquo;s an add-on category for them, not the primary business.</p>
          <p>BuzzSkito is the inverse. Mosquito and tick control is what we do, all day, every day, May through September. That focus shows up in technique (we apply to leaf undersides and shrub interiors where mosquitoes rest, not just to lawn surfaces), frequency (bi-weekly Standard Plan), and tick-specific knowledge (5-spray season targeting nymphs, adults, and habitat zones).</p>

          <h2>Where BuzzSkito Wins</h2>
          <ul>
            <li><strong>Specialist focus.</strong> Mosquito + tick is our primary business — not a side service.</li>
            <li><strong>Published entry price.</strong> $99 single treatment on a standard lot.</li>
            <li><strong>Tick coverage.</strong> Dedicated 5-spray season program ($597 / $497 bundled), targeted at tick-habitat GTA properties.</li>
            <li><strong>No contracts.</strong> Test with one treatment.</li>
            <li><strong>Bundled mosquito + tick savings.</strong> $100 off when adding tick to a mosquito plan.</li>
          </ul>

          <h2>Where a Lawn Care Company Wins</h2>
          <ul>
            <li><strong>Lawn care.</strong> If you also need fertilization, weed control, aeration — a good lawn care company is built for this.</li>
            <li><strong>One-vendor convenience.</strong> If you already use a lawn care company and want a single quarterly bill, adding mosquito is convenient.</li>
            <li><strong>Established reputation.</strong> Long history in GTA lawn care.</li>
            <li><strong>Broader service catalogue.</strong> Lawn rolling, sprinkler systems, lawn disease treatment, etc.</li>
          </ul>

          <h2>The Best Setup for Most GTA Homeowners</h2>
          <p>If you&rsquo;re trying to optimize for both lawn quality and bug-free yards, the strongest setup we&rsquo;ve seen is:</p>
          <ul>
            <li><strong>Lawn care</strong> — a lawn specialist for fertilization, weed control, and lawn health</li>
            <li><strong>Mosquito + tick control</strong> — BuzzSkito for specialized bug control with deep targeting</li>
          </ul>
          <p>Each company does what they do best. The all-in-one bundle approach often delivers a compromise on both fronts.</p>

          <h2>Who Should Choose BuzzSkito Specifically</h2>
          <p>Choose BuzzSkito if you:</p>
          <ul>
            <li>Want specialist-grade mosquito and tick control</li>
            <li>Need dedicated tick coverage (tick-habitat properties, ravine-adjacent yards, yards where kids and pets play)</li>
            <li>Don&rsquo;t need lawn care services (or have a separate lawn provider)</li>
            <li>Want transparent published pricing and no-contract flexibility</li>
            <li>Want to test with a single $99 treatment before committing</li>
          </ul>

          <h2>Who Should Choose a Lawn Care Company</h2>
          <p>Choose a lawn care company if you:</p>
          <ul>
            <li>Already use a lawn care company and want a single-vendor bundle</li>
            <li>Have low mosquito and tick pressure (suburban interior lots without ravine/creek proximity)</li>
            <li>Prioritize lawn quality over specialist bug control</li>
            <li>Want one quarterly bill instead of two specialist providers</li>
          </ul>

          <h2>Try BuzzSkito for Your Bug Control</h2>
          <p>You don&rsquo;t have to choose between lawn quality and bug-free outdoor time. Use a specialist for each. BuzzSkito&rsquo;s no-contract single $99 treatment lets you try us without disrupting your existing lawn arrangement. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a quote</Link>.</p>

          <h2>Related Comparisons</h2>
          <ul>
            <li><Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">Local company vs multi-region company</Link></li>
            <li><Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">Local company vs national franchise</Link></li>
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
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ — BuzzSkito vs Lawn Care Mosquito Add-Ons</h2>
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

      <CTASection heading="Specialist Bug Control · From $99" subtext="Mosquito and tick control is what we do. Try a single treatment without a contract." variant="dark" />
    </>
  )
}
