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
  title: 'Best Mosquito Control Mississauga 2026',
  description:
    'Compare Mississauga mosquito control 2026 — pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.',
  canonical: '/best-mosquito-control-companies-mississauga',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Mississauga?',
    answer: `Mosquito Man has a larger review volume across the GTA and operates on seasonal contracts. LawnSavers is best for homeowners already using their lawn care service. The right choice depends on whether you prioritize price, flexibility, local ownership, or bundled services — there is no single best company for every Mississauga yard, so ask any provider five questions before you book: Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays (tick: 5); a free re-treat if it rains within 1 hour of a treatment, on every plan; Licence ${BUSINESS.licenseNumber}; and the Bite-Free Guarantee on Standard & Exclusive plans. BuzzSkito is Mississauga-based and offers a $99 single-treatment entry price, with 150+ five-star Google reviews.`,
  },
  {
    question: 'How much does mosquito control cost in Mississauga?',
    answer: 'BuzzSkito single treatments in Mississauga start at $99 on a standard lot under 10,000 sq ft, and season plans are $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays), plus HST. Other providers such as Mosquito Man and LawnSavers price differently (pricing varies — check their sites), so ask for a written price before you book. Properties in Lorne Park, Mineola, and lakefront Port Credit estate areas typically price at the upper end due to lot size.',
  },
  {
    question: 'Which Mississauga neighbourhoods have the worst mosquito pressure?',
    answer: 'The highest mosquito pressure in Mississauga is in Clarkson and Lorne Park (Rattray Marsh adjacency), Meadowvale (conservation ponds), Streetsville and Erin Mills (Credit River corridor), and Port Credit/Lakeview (Lake Ontario humidity). Properties in these areas are good candidates for a full season plan (Basic, 5 sprays, or Standard, 10 sprays) rather than a one-time treatment.',
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
    answer: 'Yes — and you should if your property is near the Credit River, Erindale Park, or Rattray Marsh. These areas are confirmed blacklegged tick (Lyme-disease vector) habitat per Peel Region Public Health. BuzzSkito tick control is 5 sprays per season: $597 on its own or $497 when bundled with any mosquito plan, saving $100.',
  },
]

export default function BestMosquitoControlCompaniesMississaugaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies Mississauga', url: '/best-mosquito-control-companies-mississauga' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-mississauga', '2026-07-01')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({ name: 'Best Mosquito Control Companies in Mississauga — 2026', description: 'Compare Mississauga mosquito control 2026 — pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.', slug: '/best-mosquito-control-companies-mississauga', items: [{ name: 'BuzzSkito' }, { name: 'Mosquito Man' }, { name: 'Mosquito.Buzz' }, { name: 'LawnSavers' }] })) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'Best Companies Mississauga' },
        ]}
        title={<>Best Mosquito Control Companies in Mississauga — 2026</>}
        subtitle={<>Honest 2026 comparison of mosquito control providers serving Mississauga — Port Credit, Meadowvale, Streetsville, Erin Mills, Clarkson, Lorne Park. Pricing, reviews, contracts. Licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Mississauga-Specific Pricing</span>
          <span>✓ Updated July 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <QuickAnswer question="Who is the best mosquito control company in Mississauga?">
        <p>
          <strong>The best mosquito control company for a Mississauga yard is one that answers five questions clearly before you book, and BuzzSkito publishes its answers: Mississauga-based, single treatments from $99 on a standard lot, 150+ five-star Google reviews, and {PROMISES.licence}.</strong> This comparison ranks 4 providers serving Mississauga — BuzzSkito, Mosquito Man, Mosquito.Buzz, and LawnSavers — on pricing, reviews, contracts, and coverage. Ask any provider about price, sprays per season, rain, licensing, and which plans carry a guarantee. The checklist below covers those questions for Mississauga homeowners.
        </p>
      </QuickAnswer>

      <TypicalPrices service="mosquito" city="Mississauga" />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Mississauga Mosquito Control Companies — Compared</h2>
          <p>Mississauga homeowners have several professional mosquito control options. Here&rsquo;s an honest comparison based on each company&rsquo;s service model and Mississauga coverage. Other companies&rsquo; prices and review totals change, so check their own sites and Google listings for current figures.</p>

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
                  { company: 'BuzzSkito', price: 'From $99', reviews: '150+ (5.0★)', contracts: 'No contracts', area: 'All Mississauga (HQ)' },
                  { company: 'Mosquito Man', price: 'Varies — check their site', reviews: 'See Google', contracts: 'Seasonal', area: 'All Mississauga' },
                  { company: 'Mosquito.Buzz', price: 'Varies — check their site', reviews: 'Varies by franchisee', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'Varies — check their site', reviews: 'See Google', contracts: 'Seasonal', area: 'Mississauga' },
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

          <h2>What to Ask Any Mosquito Control Company in Mississauga</h2>
          <p>Beyond the comparison above, here are the questions worth asking any provider before you book, with BuzzSkito&rsquo;s answers.</p>

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
          <p className="text-sm text-gray-500 not-prose mb-8">BuzzSkito prices are for a standard lot under 10,000 sq ft, plus HST. Lakefront estate properties in Lorne Park and Mineola often price above the base rate.</p>

          <h2>1. BuzzSkito (Mississauga coverage: full + HQ)</h2>
          <p><strong>BuzzSkito is Mississauga-based.</strong> Our headquarters is in Mississauga, and Mississauga is our home market — same-week service availability across every Mississauga neighbourhood. <Link href="/mississauga-mosquito-control" className="text-brand-700 hover:underline">Full Mississauga service page</Link>.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Season plans on a standard lot: Basic $549 (5 sprays), Standard $994 (10 sprays, most popular), Exclusive $2,049 (20+ sprays), plus HST.</li>
            <li><strong>Reviews:</strong> 150+ Google reviews, perfect 5.0-star rating.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees.</li>
            <li><strong>Guarantees:</strong> {PROMISES.rainBackShort}; {PROMISES.biteFreeScope}.</li>
            <li><strong>Tick add-on:</strong> Critical for Mississauga properties near Credit River, Rattray Marsh, Erindale Park. $597 standalone or $497 bundled (save $100), 5 sprays per season.</li>
            <li><strong>Local advantage:</strong> Mississauga-based ownership = local knowledge of every neighbourhood from Port Credit to Meadowvale.</li>
          </ul>

          <h2>2. Mosquito Man (Mississauga coverage: full)</h2>
          <p>Long-running GTA mosquito control company with a large review volume built up over years across the GTA.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs; pricing varies — check their site. Ask for a written price before you commit.</li>
            <li><strong>Reviews:</strong> Google reviews across the GTA — see Google for the current total, and look for recent reviews from Mississauga customers.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Service:</strong> Established Mississauga customer base. Standard barrier spray.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Mississauga coverage: franchise)</h2>
          <p>National franchise — Mississauga service depends on franchisee availability and who runs your territory.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based and can vary by location — check their site.</li>
            <li><strong>Reviews:</strong> Varies by franchisee. Check the reviews for your local franchise, not the national brand.</li>
            <li><strong>Contracts:</strong> Seasonal commitment standard.</li>
            <li><strong>Licensing:</strong> Ask the local franchise for its Ontario pesticide operator licence number.</li>
          </ul>

          <h2>4. LawnSavers (Mississauga coverage: yes)</h2>
          <p>Lawn care provider offering mosquito control as an add-on. LawnSavers is well-established in the Mississauga lawn care market.</p>
          <ul>
            <li><strong>Pricing:</strong> Pricing varies — check their site. Bundle pricing for existing lawn customers.</li>
            <li><strong>Reviews:</strong> Google reviews cover all their services, not only mosquito control — see Google, and look for mosquito-specific reviews.</li>
            <li><strong>Best for:</strong> Mississauga homeowners already using LawnSavers for lawn care wanting bundled service.</li>
          </ul>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Mississauga" service="mosquito" location="price_card_mid" />
      </div>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Mississauga-Specific Considerations</h2>
          <p>When choosing a Mississauga mosquito control provider, factors that matter more here than in other GTA cities:</p>
          <ul>
            <li><strong>Credit River corridor experience.</strong> The Credit River runs the entire length of Mississauga and is the dominant mosquito source for Streetsville, Erindale, Mississauga Valley, and Port Credit. Providers experienced with river-corridor properties spray differently than generic operators.</li>
            <li><strong>Rattray Marsh adjacency knowledge.</strong> Clarkson and Lorne Park properties near Rattray Marsh face GTA-leading mosquito pressure. Providers should adjust treatment frequency for these areas.</li>
            <li><strong>Lakefront humidity factor.</strong> Port Credit, Lakeview, and Lakefront Mineola have extended evening mosquito activity due to Lake Ontario humidity — barrier spray timing matters.</li>
            <li><strong>Meadowvale Conservation pressure.</strong> Properties within 600 metres of Meadowvale Conservation Area typically benefit from the Standard plan (10 sprays, every 2 weeks).</li>
            <li><strong>Stormwater pond developments.</strong> Newer Mississauga developments (Churchill Meadows, Lisgar) have multiple stormwater ponds within walking distance — pressure depends on which side of the development you live on.</li>
          </ul>

          <h2>What to Verify Before Booking</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence (PPAL) required by law.' },
              { title: 'PCP Registration Number', desc: 'Every product must carry a valid Pest Control Product registration number on its label.' },
              { title: 'Mississauga Coverage Confirmation', desc: 'Confirm coverage for your specific Mississauga FSA — service can vary.' },
              { title: 'Tick Coverage Available', desc: 'Mississauga has confirmed Lyme-zone areas — bundle saves money.' },
              { title: 'Estate Property Pricing', desc: 'Confirm pricing tier for large Lorne Park or Mineola lots.' },
              { title: 'Re-Treatment Guarantee', desc: 'Ask what happens if rain washes off a treatment or mosquitoes return between visits, and which plans that covers.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Try BuzzSkito with One Mississauga Treatment</h2>
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

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Mississauga" service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Mississauga Mosquito Control — FAQ</h2>
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

      <CTASection heading="Mississauga-Based · From $99 · No Contract" subtext="Local Mississauga ownership. 150+ five-star reviews. Try a single treatment without commitment." variant="dark" />
    </>
  )
}
