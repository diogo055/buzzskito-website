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
  title: `Best Mosquito Control Burlington 2026`,
  description: `Compare top mosquito control companies serving Burlington 2026 — Alton Village, Tyandaga, Aldershot, Roseland. Pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.`,
  canonical: '/best-mosquito-control-companies-burlington',
})

const FAQS = [
  {
    question: `Who is the best mosquito control company in Burlington?`,
    answer: `Mosquito Man has higher review volume across Ontario. LawnSavers serves Burlington as part of their broader lawn-care offering. The right choice depends on whether you prioritize specialist depth, lowest price, or bundled services — there is no single best company for every Burlington yard, so ask any provider five questions before you book: Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays (tick: 5); a free re-treat if it rains within 1 hour of a treatment, on every plan; Licence ${BUSINESS.licenseNumber}; and the Bite-Free Guarantee on Standard & Exclusive plans. BuzzSkito is the GTA-based mosquito and tick specialist with a $99 single-treatment entry price and 150+ five-star Google reviews.`,
  },
  {
    question: `How much does mosquito control cost in Burlington?`,
    answer: `BuzzSkito single treatments in Burlington start at $99 on a standard lot under 10,000 sq ft, and season plans are $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays), plus HST. Other providers such as LawnSavers and Mosquito Man price differently (pricing varies — check their sites), so ask for a written price before you book. Properties in Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent typically price at the upper end of any company's range due to higher mosquito pressure and more vegetation to treat. BuzzSkito's transparent $99 single-treatment pricing allows Burlington homeowners to test the service before committing to a full season.`,
  },
  {
    question: `Which Burlington neighbourhoods have the worst mosquito pressure?`,
    answer: `The highest mosquito pressure in Burlington is concentrated in Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent. These zones face direct exposure to Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront and benefit most from a full season plan: Basic (5 sprays, monthly) or Standard (10 sprays, every 2 weeks). Lower-exposure neighbourhoods may be comfortable with Basic or a few single treatments.`,
  },
  {
    question: `Do Burlington mosquito control companies offer no-contract service?`,
    answer: `BuzzSkito is the primary no-contract option in Burlington — book a single treatment from $99 on a standard lot (plus HST) with no commitment, no cancellation fees, and decide based on results. Most other Burlington providers use seasonal contracts, and their pricing varies — check their sites. Contract terms vary between providers, so confirm renewal and cancellation terms before you book — some contracts include automatic renewal clauses.`,
  },
  {
    question: `Can I bundle tick control with mosquito spray in Burlington?`,
    answer: `Yes. Properties in Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent can see blacklegged tick exposure, and blacklegged ticks can carry Lyme disease; Public Health Ontario publishes a yearly map of estimated Lyme disease risk areas. Many Burlington homeowners bundle mosquito and tick treatments so both run on one schedule. BuzzSkito tick control is 5 sprays per season: $497 when added to any mosquito plan, or $597 on its own, through the May–September season.`,
  },
  {
    question: `What should I look for in a Burlington mosquito control company?`,
    answer: `Five things matter most: (1) a registered product with a PCP number on its label — non-negotiable; (2) Ontario-licensed pesticide applicator on the technician — required by law; (3) a written guarantee — ask what happens if it rains soon after a treatment, and which plans are covered; (4) transparent pricing published on the website — avoid companies that require an "in-home estimate" before quoting; (5) verified Google reviews from Burlington customers specifically — local pressure is unique. BuzzSkito meets all five.`,
  },
]

export default function BestMosquitoControlBurlingtonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: `Best Companies Burlington`, url: '/best-mosquito-control-companies-burlington' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-burlington', '2026-07-01')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({ name: 'Best Mosquito Control Companies in Burlington — 2026', description: 'Compare top mosquito control companies serving Burlington 2026 — Alton Village, Tyandaga, Aldershot, Roseland. Pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.', slug: '/best-mosquito-control-companies-burlington', items: [{ name: 'BuzzSkito' }, { name: 'Mosquito Man' }, { name: 'LawnSavers' }, { name: 'Mosquito.Buzz' }] })) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'Best Companies Burlington' },
        ]}
        title={<>Best Mosquito Control Companies in Burlington — 2026</>}
        subtitle={<>Honest 2026 comparison of mosquito control providers serving Burlington — Alton Village, Tyandaga, Aldershot, Roseland, Headon Forest, North Burlington. Pricing, reviews, contracts. Licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Burlington-Specific Pricing</span>
          <span>✓ Updated July 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <QuickAnswer question="Who has the best mosquito control in Burlington in 2026?">
        <p>
          <strong>The best mosquito control company for a Burlington yard is one that answers five questions clearly before you book, and BuzzSkito publishes its answers: from $99 on a standard lot, 150+ five-star Google reviews, and {PROMISES.licence}.</strong> Mosquito Man has higher review volume across Ontario. LawnSavers is best if you&apos;re already using their lawn-care service. Ask any provider about price, sprays per season, rain, licensing, and which plans carry a guarantee. The full comparison and checklist below cover pricing, contract terms, those questions, plus Burlington service-area specifics (Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront). Updated July 2026.
        </p>
      </QuickAnswer>

      <TypicalPrices service="mosquito" city="Burlington" />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Burlington Mosquito Control Companies — Compared</h2>
          <p>Burlington homeowners have several professional mosquito control options. Here&rsquo;s an honest comparison based on each company&rsquo;s service model. Other companies&rsquo; prices and review totals change, so check their own sites and Google listings for current figures.</p>

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
                  <td className="px-4 py-2">Custom quote — check their site</td>
                  <td className="px-4 py-2">Multi-province national franchise</td>
                  <td className="px-4 py-2 text-amber-700">Seasonal contracts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What to Ask Any Mosquito Control Company in Burlington</h2>
          <p>Beyond the comparison above, here are the questions worth asking any provider before you book, with BuzzSkito&rsquo;s answers.</p>

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

          <h2>Why Burlington is a High-Pressure Mosquito Zone</h2>
          <p>Burlington&rsquo;s mosquito pressure comes from Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront. Properties in Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent face the most intense activity — barrier spray on these properties focuses on the exact resting habitats mosquitoes use during the day.</p>

          <h2>How to Choose a Mosquito Control Company in Burlington</h2>
          <ol>
            <li><strong>Check the product.</strong> Every pest control product used in Canada must carry a PCP registration number on its label. Ask which product will be used before booking.</li>
            <li><strong>Verify the applicator&rsquo;s license.</strong> Ontario requires a Pesticide Applicator&rsquo;s License for any commercial application.</li>
            <li><strong>Confirm the guarantee.</strong> If rain hits within 1 hour of spray, the product hasn&rsquo;t cured — a reputable company will re-treat at no charge. Anyone who won&rsquo;t put this in writing is suspect.</li>
            <li><strong>Read recent Burlington-specific Google reviews.</strong> National franchises sometimes have great Toronto reviews and terrible Burlington reviews. Filter for your city.</li>
            <li><strong>Ask about Burlington expertise.</strong> A technician who can describe Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront and what mosquito species are dominant in your area knows what they&rsquo;re doing.</li>
            <li><strong>Compare single-treatment pricing</strong>, not just seasonal package totals. Single-treatment pricing reveals real per-visit value.</li>
            <li><strong>Ask about tick add-on.</strong> Burlington has confirmed blacklegged tick populations. Bundling adds 5 tick sprays per season for $497 with any mosquito plan.</li>
          </ol>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Burlington" service="mosquito" location="price_card_mid" />
      </div>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Burlington-Specific Mosquito Pressure Zones</h2>
          <p>The most mosquito-affected Burlington neighborhoods include Alton Village, Tyandaga, Aldershot, Roseland, Headon Forest, North Burlington. Among these, Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent typically experience the highest pressure due to direct adjacency to Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront.</p>

          <h2>BuzzSkito Burlington Service Pages</h2>
          <ul>
            <li><Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline font-semibold">Burlington Mosquito Control</Link> — full service page with pricing, neighborhoods, FAQ</li>
            <li><Link href="/burlington-tick-spray" className="text-brand-700 hover:underline font-semibold">Burlington Tick Control</Link> — tick barrier spray, 5 sprays per season</li>
            <li><Link href="/pest-control-burlington" className="text-brand-700 hover:underline">Pest Control Burlington</Link> — overview of mosquito + tick specialist services</li>
          </ul>

          <h2>Related Burlington Comparisons</h2>
          <ul>
            <li><Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito Man</Link></li>
            <li><Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito.Buzz</Link></li>
            <li><Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">BuzzSkito vs LawnSavers</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Best Mosquito Control Companies in the GTA — Master Comparison</Link></li>
          </ul>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Burlington" service="mosquito" />
      </div>

      <section className="py-12 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Best Mosquito Control Burlington — FAQ</h2>
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

      <CTASection heading={`Get a Free Mosquito Quote in Burlington`} subtext={`Specialist barrier spray for Burlington backyards. Same-week service.`} />
    </>
  )
}
