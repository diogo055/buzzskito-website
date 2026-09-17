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
  title: 'Best Mosquito Control Brampton 2026',
  description:
    'Compare top mosquito control companies in Brampton 2026 — pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers vs Mosquito.Buzz.',
  canonical: '/best-mosquito-control-companies-brampton',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Brampton?',
    answer: `It depends on what matters most. BuzzSkito is priced from $99/treatment in Brampton, with no contracts and 150+ five-star Google reviews. Mosquito Man has a longer track record in the GTA. Mosquito.Buzz is a national franchise, so service depends on the local operator. LawnSavers bundles mosquito control with lawn care for existing customers. Each has different strengths in pricing, flexibility, and bundled services. Whichever you consider, ask any provider five questions before you book: Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays (tick: 5); a free re-treat if it rains within 1 hour of a treatment, on every plan; Licence ${BUSINESS.licenseNumber}; and the Bite-Free Guarantee on Standard & Exclusive plans. BuzzSkito has 150+ five-star Google reviews.`,
  },
  {
    question: 'How much does mosquito control cost in Brampton in 2026?',
    answer: 'BuzzSkito single treatments in Brampton start at $99 on a standard lot under 10,000 sq ft, and season plans are $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays), plus HST. Mosquito Man, Mosquito.Buzz and LawnSavers price differently — pricing varies, so check their sites or ask for a written price before you book. Pricing varies by lot size — Brampton properties in Castlemore, Springdale, and Mount Pleasant tend to be larger and may price higher.',
  },
  {
    question: 'Do Brampton mosquito control companies offer no-contract plans?',
    answer: 'BuzzSkito is the only major provider in Brampton offering true no-contract service — book a single treatment from $99 with no commitment. Mosquito Man, Mosquito.Buzz and LawnSavers typically sell seasonal programs. Contract terms vary between providers, so confirm renewal and cancellation terms before you book.',
  },
  {
    question: 'Which Brampton neighbourhoods have the worst mosquito problems?',
    answer: 'Properties near the Etobicoke Creek corridor, Heart Lake Conservation Area, and Professor\'s Lake see consistent mosquito pressure. Castlemore, Springdale, and Sandalwood — with newer developments and proximity to natural drainage — also experience higher activity. The Credit River edge in Bram West is another high-pressure zone.',
  },
  {
    question: 'Do Brampton mosquito control companies also handle ticks?',
    answer: 'Most Brampton providers offer tick control as a separate service or add-on. BuzzSkito tick control is 5 sprays per season: $597 on its own or $497 when bundled with any mosquito plan — saving $100. Tick risk in Brampton is highest near the Etobicoke Creek and Heart Lake green spaces.',
  },
]

export default function BestMosquitoControlCompaniesBramptonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies Brampton', url: '/best-mosquito-control-companies-brampton' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-brampton', '2026-07-01')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({ name: 'Best Mosquito Control Companies in Brampton — 2026', description: 'Compare top mosquito control companies in Brampton 2026 — pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers vs Mosquito.Buzz.', slug: '/best-mosquito-control-companies-brampton', items: [{ name: 'BuzzSkito' }, { name: 'Mosquito Man' }, { name: 'Mosquito.Buzz' }, { name: 'LawnSavers' }] })) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'Best Companies Brampton' },
        ]}
        title={<>Best Mosquito Control Companies in Brampton — 2026</>}
        subtitle={<>An honest 2026 comparison of mosquito control providers serving Brampton — pricing, reviews, contract flexibility, and what each company actually delivers. Licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Brampton-Specific Pricing</span>
          <span>✓ Updated July 2026</span>
          <span>✓ Verified Google Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <QuickAnswer question="Who is the best mosquito control company in Brampton?">
        <p>
          <strong>The best mosquito control company for a Brampton yard is one that answers five questions clearly before you book, and BuzzSkito publishes its answers: from $99 on a standard lot, 150+ five-star Google reviews, and {PROMISES.licence}.</strong> This comparison ranks 4 providers serving Brampton — BuzzSkito, Mosquito Man, Mosquito.Buzz, and LawnSavers — on pricing, reviews, contracts, and coverage. Ask any provider about price, sprays per season, rain, licensing, and which plans carry a guarantee. The checklist below covers those questions for Brampton homeowners.
        </p>
      </QuickAnswer>

      <TypicalPrices service="mosquito" city="Brampton" />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Brampton Mosquito Control Companies — Compared</h2>
          <p>Brampton homeowners have several professional mosquito control options. Here is an honest comparison based on each company&rsquo;s publicly described service model. Competitor pricing and review totals change, so check each company&rsquo;s own site and Google listing for current figures.</p>

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
                  { company: 'BuzzSkito', price: 'From $99', reviews: '150+ (5.0★)', contracts: 'No contracts', area: 'All Brampton' },
                  { company: 'Mosquito Man', price: 'Quote-based', reviews: 'See Google', contracts: 'Seasonal', area: 'All Brampton' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'See Google', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'Pricing varies — check their site', reviews: 'See Google', contracts: 'Seasonal', area: 'Brampton' },
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

          <h2>What to Ask Any Mosquito Control Company in Brampton</h2>
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
          <p className="text-sm text-gray-500 not-prose mb-8">BuzzSkito prices are for a standard lot under 10,000 sq ft, plus HST. Competitor pricing and reviews change — check each company&rsquo;s own site and Google listing. Brampton pricing may vary by lot size — homes in Castlemore and Heart Lake tend to fall on the higher end.</p>

          <h2>1. BuzzSkito (Brampton coverage: full)</h2>
          <p><Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito serves all Brampton neighbourhoods</Link> including Castlemore, Heart Lake, Springdale, Mount Pleasant, Bramalea, Bram West, Sandalwood, Snelgrove, and Fletcher's Meadow.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Season plans on a standard lot: Basic $549 (5 sprays), Standard $994 (10 sprays, most popular), Exclusive $2,049 (20+ sprays), plus HST.</li>
            <li><strong>Reviews:</strong> 150+ Google reviews, perfect 5.0-star rating across the GTA.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees. Test a single treatment before committing.</li>
            <li><strong>Guarantees:</strong> {PROMISES.rainBackShort}; {PROMISES.biteFreeScope}.</li>
            <li><strong>Tick add-on:</strong> $597 on its own or $497 with any mosquito plan (5 sprays per season) — important for Brampton homes near Heart Lake and the Etobicoke Creek.</li>
            <li><strong>Local responsiveness:</strong> Mississauga-based with same-week service availability across Brampton.</li>
          </ul>

          <h2>2. Mosquito Man (Brampton coverage: full)</h2>
          <p>One of the longest-running mosquito control companies in the GTA.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs; pricing varies — check their site or ask for a written price before you commit.</li>
            <li><strong>Reviews:</strong> See their Google listing. A review total may cover many GTA service areas, so look for recent reviews from Brampton customers.</li>
            <li><strong>Contracts:</strong> Seasonal program structure typical. Ask whether a season plan renews automatically and what cancelling costs.</li>
            <li><strong>Service:</strong> Standard barrier spray. Brampton coverage well-established with multiple-year customer base.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Brampton coverage: franchise)</h2>
          <p>National Canadian franchise with locations across Ontario.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based — pricing not published online.</li>
            <li><strong>Reviews:</strong> Varies by franchise location. Check the reviews for your local franchise, not the national brand.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Service:</strong> Quality and consistency depend on which franchisee operates in your area.</li>
            <li><strong>Licensing:</strong> Ask for the local business&rsquo;s Ontario pesticide operator licence number.</li>
          </ul>

          <h2>4. LawnSavers (Brampton coverage: limited)</h2>
          <p>Primarily a lawn care company offering mosquito control as an add-on for existing lawn customers.</p>
          <ul>
            <li><strong>Pricing:</strong> Pricing varies — check their site. Bundle pricing for lawn-care customers.</li>
            <li><strong>Reviews:</strong> See their Google listing. Review totals combine lawn care and pest control, so look for mosquito-specific reviews.</li>
            <li><strong>Contracts:</strong> Seasonal programs.</li>
            <li><strong>Best for:</strong> Brampton homeowners already using LawnSavers for lawn care wanting bundled service.</li>
          </ul>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Brampton" service="mosquito" location="price_card_mid" />
      </div>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>What Brampton Homeowners Should Look For</h2>
          <p>Whichever provider you choose, verify these basics before booking:</p>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence required by law. Ask to see it.' },
              { title: 'PCP Registration Number', desc: 'Every product must carry a valid Pest Control Product registration number on its label.' },
              { title: 'Re-Treatment Guarantee', desc: 'Ask what happens if rain washes off the product or mosquitoes return early, and which plans that covers.' },
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

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Brampton" service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Brampton Mosquito Control — FAQ</h2>
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

      <CTASection heading="Ready for Mosquito Control in Your Brampton Yard?" subtext="Get a free Brampton-specific quote today. No contracts. No commitment." variant="dark" />
    </>
  )
}
