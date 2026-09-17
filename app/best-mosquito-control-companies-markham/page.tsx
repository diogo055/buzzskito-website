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
  title: `Best Mosquito Control Markham 2026`,
  description: `Compare top mosquito control companies serving Markham 2026 — Unionville, Cornell, Milliken Mills, Berczy Village. Pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.`,
  canonical: '/best-mosquito-control-companies-markham',
})

const FAQS = [
  {
    question: `Who is the best mosquito control company in Markham?`,
    answer: `BuzzSkito is the GTA-based mosquito and tick specialist with a $99 single-treatment entry price and 150+ perfect five-star Google reviews (zero negatives). Mosquito Man has higher review volume across all of Ontario but operates as a general pest control company. LawnSavers serves Markham as part of their broader lawn-care offering. The right choice depends on whether you prioritize specialist depth, lowest price, or bundled services. Whichever you consider, ask any provider five questions before you book: Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays (tick: 5); a free re-treat if it rains within 1 hour of a treatment, on every plan; Licence ${BUSINESS.licenseNumber}; and the Bite-Free Guarantee on Standard & Exclusive plans.`,
  },
  {
    question: `How much does mosquito control cost in Markham?`,
    answer: `BuzzSkito single treatments in Markham start at $99 on a standard lot under 10,000 sq ft, and season plans are $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays), plus HST. Other providers, including LawnSavers, price differently (pricing varies — check their site), so ask for a written price before you book. Properties in Cornell and Cathedraltown (Rouge Park boundary), Wismer (Milner Creek), Angus Glen (creek-adjacent) typically price at the upper end of any company's range due to higher mosquito pressure and more vegetation to treat. BuzzSkito's transparent $99 single-treatment pricing allows Markham homeowners to test the service before committing to a full season.`,
  },
  {
    question: `Which Markham neighbourhoods have the worst mosquito pressure?`,
    answer: `The highest mosquito pressure in Markham is concentrated in Cornell and Cathedraltown (Rouge Park boundary), Wismer (Milner Creek), Angus Glen (creek-adjacent). These zones face direct exposure to Rouge National Urban Park, Milner Creek, Don River headwaters, Oak Ridges Moraine boundary and benefit most from a full season plan: Basic (5 sprays, monthly) or Standard (10 sprays, every 2 weeks). Lower-exposure neighbourhoods may be comfortable with Basic or a few single treatments.`,
  },
  {
    question: `Do Markham mosquito control companies offer no-contract service?`,
    answer: `BuzzSkito is the primary no-contract option in Markham — book a single $99 treatment with no commitment, no cancellation fees, and decide based on results. Most other Markham providers require seasonal contracts. Always confirm contract terms before booking — some contracts include automatic renewal clauses.`,
  },
  {
    question: `Can I bundle tick control with mosquito spray in Markham?`,
    answer: `Yes. Properties in Cornell and Cathedraltown (Rouge Park boundary), Wismer (Milner Creek), Angus Glen (creek-adjacent) can see blacklegged tick exposure, and blacklegged ticks can carry Lyme disease; Public Health Ontario publishes a yearly map of estimated Lyme disease risk areas. Many Markham homeowners bundle mosquito and tick treatments so both run on one schedule. BuzzSkito tick control is 5 sprays per season: $497 when added to any mosquito plan, or $597 on its own, through the May–September season.`,
  },
  {
    question: `What should I look for in a Markham mosquito control company?`,
    answer: `Five things matter most: (1) a registered product with a PCP number on its label — non-negotiable; (2) Ontario-licensed pesticide applicator on the technician — required by law; (3) a written guarantee — ask what happens if it rains soon after a treatment, and which plans are covered; (4) transparent pricing published on the website — avoid companies that require an "in-home estimate" before quoting; (5) verified Google reviews from Markham customers specifically — local pressure is unique. BuzzSkito meets all five.`,
  },
]

export default function BestMosquitoControlMarkhamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: `Best Companies Markham`, url: '/best-mosquito-control-companies-markham' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-markham', '2026-07-01')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({ name: 'Best Mosquito Control Companies in Markham — 2026', description: 'Compare top mosquito control companies serving Markham 2026 — Unionville, Cornell, Milliken Mills, Berczy Village. Pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.', slug: '/best-mosquito-control-companies-markham', items: [{ name: 'BuzzSkito' }, { name: 'Mosquito Man' }, { name: 'LawnSavers' }, { name: 'Mosquito.Buzz' }] })) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'Best Companies Markham' },
        ]}
        title={<>Best Mosquito Control Companies in Markham — 2026</>}
        subtitle={<>Honest 2026 comparison of mosquito control providers serving Markham — Unionville, Cornell, Milliken Mills, Berczy Village, Cathedraltown, Angus Glen. Pricing, reviews, contracts. BuzzSkito is a licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Markham-Specific Pricing</span>
          <span>✓ Updated July 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <QuickAnswer question="Who has the best mosquito control in Markham in 2026?">
        <p>
          <strong>For Markham homeowners, BuzzSkito wins on price ($99 single treatment), reviews (150+/5.0, zero negative), and specialty (mosquitoes + ticks only — not a generalist).</strong> Mosquito Man wins on review volume across all of Ontario but is a general pest control company. LawnSavers is best if you&rsquo;re already using their lawn-care service. The full comparison below covers pricing, contract terms, Markham service-area specifics (Rouge National Urban Park, Milner Creek, Don River headwaters, Oak Ridges Moraine boundary), and the deciding factors for each Markham neighborhood. Whichever you choose, ask about price, sprays per season, rain, licensing ({PROMISES.licence} for BuzzSkito), and which plans carry a guarantee. Updated July 2026.
        </p>
      </QuickAnswer>

      <TypicalPrices service="mosquito" city="Markham" />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Markham Mosquito Control Companies — Compared</h2>
          <p>Markham homeowners have several professional mosquito control options. Here&rsquo;s an honest comparison based on publicly available information and Markham-specific service offerings as of July 2026.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Company</th>
                  <th className="px-4 py-2 text-left">Single Treatment</th>
                  <th className="px-4 py-2 text-left">Reviews (Google)</th>
                  <th className="px-4 py-2 text-left">Contract Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-amber-50">
                  <td className="px-4 py-2 font-bold text-brand-900">BuzzSkito ⭐ <span className="text-xs font-normal">(Editor&rsquo;s Choice)</span></td>
                  <td className="px-4 py-2 font-extrabold text-brand-700">From $99</td>
                  <td className="px-4 py-2">150+ / 5.0 ⭐ (zero negative)</td>
                  <td className="px-4 py-2 text-emerald-700 font-semibold">No — pay per visit</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">Mosquito Man</td>
                  <td className="px-4 py-2">Varies — check their site</td>
                  <td className="px-4 py-2">See Google</td>
                  <td className="px-4 py-2 text-amber-700">Often seasonal</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">LawnSavers</td>
                  <td className="px-4 py-2">Varies — check their site</td>
                  <td className="px-4 py-2">See Google (lawn care primary)</td>
                  <td className="px-4 py-2 text-amber-700">Bundled with lawn plans</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">Mosquito.Buzz</td>
                  <td className="px-4 py-2">Custom quote required</td>
                  <td className="px-4 py-2">Multi-province national franchise</td>
                  <td className="px-4 py-2 text-amber-700">Seasonal contracts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose mb-8">Other companies&rsquo; pricing and Google reviews change over time, so check each company&rsquo;s own site and Google listing for current details.</p>

          <h2>What to Ask Any Mosquito Control Company in Markham</h2>
          <p>Whichever company you consider, here are the questions worth asking any provider before you book, with BuzzSkito&rsquo;s answers.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Ask this</th>
                  <th className="px-4 py-2 text-left">BuzzSkito&rsquo;s answer</th>
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
                    <td className="px-4 py-2 font-semibold text-brand-900">{q}</td>
                    <td className="px-4 py-2 text-gray-700">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Why Markham is a High-Pressure Mosquito Zone</h2>
          <p>Markham&rsquo;s mosquito pressure comes from Rouge National Urban Park, Milner Creek, Don River headwaters, Oak Ridges Moraine boundary. Properties in Cornell and Cathedraltown (Rouge Park boundary), Wismer (Milner Creek), Angus Glen (creek-adjacent) face the most intense activity — barrier spray on these properties focuses on the exact resting habitats mosquitoes use during the day.</p>

          <h2>How to Choose a Mosquito Control Company in Markham</h2>
          <ol>
            <li><strong>Check the product.</strong> Every pest control product used in Canada must carry a PCP registration number on its label. Ask which product will be used before booking.</li>
            <li><strong>Verify the applicator&rsquo;s license.</strong> Ontario requires a Pesticide Applicator&rsquo;s License for any commercial application.</li>
            <li><strong>Confirm the guarantee.</strong> If rain hits within 1 hour of spray, the product hasn&rsquo;t cured — a reputable company will re-treat at no charge. Anyone who won&rsquo;t put this in writing is suspect.</li>
            <li><strong>Read recent Markham-specific Google reviews.</strong> National franchises sometimes have great Toronto reviews and terrible Markham reviews. Filter for your city.</li>
            <li><strong>Ask about Markham expertise.</strong> A technician who can describe Rouge National Urban Park, Milner Creek, Don River headwaters, Oak Ridges Moraine boundary and what mosquito species are dominant in your area knows what they&rsquo;re doing.</li>
            <li><strong>Compare single-treatment pricing</strong>, not just seasonal package totals. Single-treatment pricing reveals real per-visit value.</li>
            <li><strong>Ask about tick add-on.</strong> Markham has confirmed blacklegged tick populations. Bundling adds 5 tick sprays per season for $497 with any mosquito plan.</li>
          </ol>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Markham" service="mosquito" location="price_card_mid" />
      </div>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Markham-Specific Mosquito Pressure Zones</h2>
          <p>The most mosquito-affected Markham neighborhoods include Unionville, Cornell, Milliken Mills, Berczy Village, Cathedraltown, Angus Glen. Among these, Cornell and Cathedraltown (Rouge Park boundary), Wismer (Milner Creek), Angus Glen (creek-adjacent) typically experience the highest pressure due to direct adjacency to Rouge National Urban Park, Milner Creek, Don River headwaters, Oak Ridges Moraine boundary.</p>

          <h2>BuzzSkito Markham Service Pages</h2>
          <ul>
            <li><Link href="/markham-mosquito-control" className="text-brand-700 hover:underline font-semibold">Markham Mosquito Control</Link> — full service page with pricing, neighborhoods, FAQ</li>
            <li><Link href="/markham-tick-spray" className="text-brand-700 hover:underline font-semibold">Markham Tick Control</Link> — tick barrier spray, 5 sprays per season</li>
            <li><Link href="/pest-control-markham" className="text-brand-700 hover:underline">Pest Control Markham</Link> — overview of mosquito + tick specialist services</li>
          </ul>

          <h2>Related Markham Comparisons</h2>
          <ul>
            <li><Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito Man</Link></li>
            <li><Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito.Buzz</Link></li>
            <li><Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">BuzzSkito vs LawnSavers</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Best Mosquito Control Companies in the GTA — Master Comparison</Link></li>
          </ul>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Markham" service="mosquito" />
      </div>

      <section className="py-12 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Best Mosquito Control Markham — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Quote in Markham`} subtext={`Specialist barrier spray for Markham backyards. Same-week service.`} />
    </>
  )
}
