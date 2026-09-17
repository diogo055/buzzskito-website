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
  title: 'Best Mosquito Control Toronto 2026 — From $99, No Contract',
  description:
    'Compare Toronto\'s top mosquito control companies for 2026. BuzzSkito: from $99, 150+ five-star reviews, no contracts, tick control, same-week service.',
  canonical: '/best-mosquito-control-companies-toronto',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Toronto?',
    answer: `BuzzSkito offers single treatments in Toronto from $99 and 150+ perfect five-star reviews — all on a no-contract basis. Mosquito Man has a larger review base and longer GTA tenure but operates on seasonal contracts. LawnSavers serves Toronto primarily as a lawn-care add-on. The right pick depends on whether you want pricing flexibility, brand recognition, or bundled lawn service. Whichever provider you consider, ask five questions before you book: Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays (tick: 5); a free re-treat if it rains within 1 hour of a treatment, on every plan; Licence ${BUSINESS.licenseNumber}; and the Bite-Free Guarantee on Standard & Exclusive plans.`,
  },
  {
    question: 'How much does mosquito control cost in Toronto?',
    answer: 'BuzzSkito single treatments in Toronto start at $99 on a standard lot under 10,000 sq ft, and season plans are $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays), plus HST. Other providers, including Mosquito Man and LawnSavers, price differently — check their sites for current pricing and ask for a written price before you book. Toronto ravine-adjacent properties (Rosedale, Forest Hill, Don Mills, Sunnybrook) typically benefit from a full season plan rather than a one-time treatment.',
  },
  {
    question: 'Which Toronto neighbourhoods have the worst mosquito problems?',
    answer: 'Ravine-adjacent neighbourhoods consistently have the highest mosquito activity in Toronto: Rosedale and Forest Hill (Don Valley ravines), Leaside and East York (Don Valley + Taylor Creek), Don Mills (Don Valley + Flemingdon Park), The Beaches (Eastern Ravine + Ashbridge\'s Bay), Etobicoke and Humber Valley (Humber River), High Park area (Humber + Grenadier Pond), and Sunnybrook (Sunnybrook Park + Wilket Creek). Mosquitoes from these ravines disperse up to 3 km, so most Toronto properties have some level of exposure.',
  },
  {
    question: 'Does Toronto have a tick problem too?',
    answer: 'Yes. Toronto Public Health has confirmed established blacklegged tick populations in High Park, the Don Valley ravines, and other green corridors. Properties backing onto any Toronto ravine, conservation area, or wooded park can see blacklegged tick exposure, and blacklegged ticks can carry Lyme disease; Public Health Ontario publishes a yearly map of estimated Lyme disease risk areas. BuzzSkito tick control is 5 sprays per season: $597 on its own or $497 with any mosquito plan (save $100). Recommended for any Toronto property within 800 metres of a ravine or park.',
  },
  {
    question: 'Are no-contract Toronto mosquito control plans available?',
    answer: 'BuzzSkito is the primary no-contract option in Toronto. Most other providers require seasonal contracts. Test BuzzSkito with a single $99 treatment, see results, then decide whether to commit. No cancellation fees.',
  },
  {
    question: 'Do Toronto mosquito companies serve all neighbourhoods?',
    answer: 'BuzzSkito serves all Toronto neighbourhoods including Rosedale, Forest Hill, The Beaches, High Park, Don Mills, Leaside, East York, Etobicoke, North York, Scarborough, Willowdale, Lawrence Park, Sunnybrook, Bridle Path, Casa Loma, and more. Mosquito Man and LawnSavers also serve most Toronto neighbourhoods. Always confirm coverage for your specific address before booking.',
  },
  {
    question: 'How does mosquito spraying work in Toronto?',
    answer: 'Professional mosquito spraying in Toronto uses a barrier treatment applied by a licensed technician to the shaded, humid areas where adult mosquitoes rest — under decks, along fences, in shrubs, and beneath the mature tree canopy common in Toronto neighbourhoods. Products are applied according to label directions. One BuzzSkito treatment starts at $99 on a standard lot, and season plans repeat treatments on a schedule — every 2 weeks on the Standard plan, May through September.',
  },
  {
    question: 'Do I need a mosquito exterminator in Toronto, or is spraying enough?',
    answer: 'For a persistent backyard mosquito problem, a professional mosquito exterminator covers far more of the yard than store-bought foggers, sprays, or candles. A licensed Toronto applicator treats the resting sites mosquitoes use and returns on a schedule through the season. BuzzSkito starts at $99 per treatment with no contract, so you can test professional spraying before committing to a $549, $994, or $2,049 season plan.',
  },
  {
    question: 'How much does tick control cost in Toronto?',
    answer: 'BuzzSkito tick control in Toronto is $597 for a standalone season (5 treatments) or $497 when bundled with any mosquito plan — saving $100. Tick treatment targets ravine edges, leaf litter, and tall grass where blacklegged (Lyme-vector) ticks live. Toronto Public Health has confirmed established tick populations in High Park and the Don Valley ravines, so tick control is strongly recommended for any property within about 800 metres of a ravine, park, or conservation area.',
  },
]

export default function BestMosquitoControlCompaniesTorontoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies Toronto', url: '/best-mosquito-control-companies-toronto' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-toronto', '2026-07-12')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({ name: 'Best Mosquito Control Companies in Toronto — 2026', description: 'We ranked Toronto\'s mosquito control companies for 2026 by reviews, pricing, guarantees, and contracts.', slug: '/best-mosquito-control-companies-toronto', items: [{ name: 'BuzzSkito' }, { name: 'Mosquito Man' }, { name: 'Mosquito.Buzz' }, { name: 'LawnSavers' }] })) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'Best Companies Toronto' },
        ]}
        title={<>Best Mosquito Control Companies in Toronto — 2026</>}
        subtitle={<>Honest 2026 comparison of mosquito control providers serving Toronto — Rosedale, Forest Hill, The Beaches, High Park, Don Mills, Leaside, Etobicoke, Sunnybrook. Pricing, reviews, contracts. Licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Toronto-Specific Pricing</span>
          <span>✓ Updated July 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <QuickAnswer question="Who is the best mosquito control company in Toronto?">
        <p>
          <strong>BuzzSkito is the best mosquito control company in Toronto for 2026, offering single treatments from $99, 150+ perfect five-star Google reviews, and no contracts.</strong> This comparison ranks 4 providers serving Toronto — BuzzSkito, Mosquito Man, Mosquito.Buzz, and LawnSavers — on pricing, reviews, contracts, and neighbourhood coverage. Whichever you choose, ask about price, sprays per season, rain, licensing, and which plans carry a guarantee; BuzzSkito publishes its answers below, including {PROMISES.licence}.
        </p>
      </QuickAnswer>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Toronto Mosquito Control Companies — Compared</h2>
          <p>Toronto homeowners — particularly those near the Don Valley, Humber River, ravine systems, or Lake Ontario waterfront — have several professional mosquito control options. Here&rsquo;s an honest comparison based on publicly available information about contracts, service models, and Toronto-specific service offerings as of July 2026.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                  <th className="px-4 py-3 text-left">Reviews</th>
                  <th className="px-4 py-3 text-left">Contracts</th>
                  <th className="px-4 py-3 text-left">Toronto Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { company: 'BuzzSkito', price: 'From $99', reviews: '150+ (5.0★)', contracts: 'No contracts', area: 'All Toronto' },
                  { company: 'Mosquito Man', price: 'Quote-based', reviews: 'See Google', contracts: 'Seasonal', area: 'All Toronto' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'Varies — check their site', reviews: 'See Google', contracts: 'Seasonal', area: 'Toronto' },
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
          <p className="text-sm text-gray-500 not-prose mb-8">Other companies set and change their own prices, and review totals change over time, so check each company&rsquo;s website and Google listing for current figures.</p>

          <h2>What to Ask Any Mosquito Control Company in Toronto</h2>
          <p>Whichever company you consider, here are the questions worth asking before you book, with BuzzSkito&rsquo;s answers.</p>

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
          <p className="text-sm text-gray-500 not-prose mb-8">BuzzSkito prices are for a standard lot under 10,000 sq ft, plus HST. Estate properties (Bridle Path, Rosedale lakefront) and large multi-acre Lawrence Park lots typically price above the base rate.</p>

          <h2>1. BuzzSkito (Toronto coverage: full)</h2>
          <p><Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito serves all of Toronto</Link> — Rosedale, Forest Hill, The Beaches, High Park, Don Mills, Leaside, East York, Etobicoke, North York, Scarborough, Willowdale, Lawrence Park, Sunnybrook, Bridle Path, Casa Loma, and 20+ more neighbourhoods.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Transparent season plans: Basic $549 (5 sprays), Standard $994 (10 sprays — most popular), Exclusive $2,049 (20+ sprays). All plus HST, no hidden fees.</li>
            <li><strong>Reviews:</strong> 150+ Google reviews, perfect 5.0-star rating, and zero negative reviews.</li>
            <li><strong>Guarantee:</strong> {PROMISES.rainBackShort}; {PROMISES.biteFreeScope} (free re-treatment if mosquitoes come back between scheduled treatments). {PROMISES.licence}.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees.</li>
            <li><strong>Tick add-on:</strong> Critical for ravine-adjacent Toronto properties. $597 standalone or $497 bundled, 5 sprays per season. Toronto Public Health has confirmed Lyme-vector blacklegged ticks in High Park, Don Valley, and other ravines.</li>
            <li><strong>Same-week service:</strong> Available across all Toronto neighbourhoods.</li>
          </ul>

          <h2>2. Mosquito Man (Toronto coverage: full)</h2>
          <p>Long-running GTA mosquito control company with a large Google review base built up over years.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs. Pricing varies — check their site for current rates.</li>
            <li><strong>Reviews:</strong> See Google. Review totals cover many GTA cities, so look for recent reviews from Toronto customers.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Service:</strong> Established Toronto customer base. Standard barrier spray.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Toronto coverage: franchise)</h2>
          <p>National Canadian franchise — Toronto service depends on franchisee availability.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based — check their site for current pricing.</li>
            <li><strong>Reviews:</strong> Varies by franchisee.</li>
            <li><strong>Contracts:</strong> Seasonal commitment standard.</li>
          </ul>

          <h2>4. LawnSavers (Toronto coverage: yes)</h2>
          <p>Lawn care provider offering mosquito control as an add-on. Strong Toronto lawn-care presence.</p>
          <ul>
            <li><strong>Pricing:</strong> Pricing varies — check their site. Bundle pricing for existing lawn customers.</li>
            <li><strong>Reviews:</strong> See Google. Review totals cover all of their services, not only mosquito control.</li>
            <li><strong>Best for:</strong> Toronto homeowners already using LawnSavers wanting bundled service.</li>
          </ul>

        </div>
      </section>

      <TypicalPrices service="mosquito" city="Toronto" />

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Mosquito Spraying &amp; Tick Control in Toronto — How BuzzSkito Works</h2>
          <p>Looking for mosquito spraying in Toronto or a licensed mosquito exterminator near you? BuzzSkito&rsquo;s barrier treatment coats the shaded, humid spots where adult mosquitoes rest — under decks, along fence lines, in dense shrubs, and beneath Toronto&rsquo;s mature tree canopy. Every visit is applied by an Ontario-licensed technician, with products applied according to label directions. Stay off treated areas until the spray has dried, as the label directs.</p>
          <ul>
            <li><strong>Mosquito spraying (Toronto):</strong> The Standard plan&rsquo;s bi-weekly barrier sprays (10 per season) run from the first warm week of May through September.</li>
            <li><strong>Tick control (Toronto):</strong> A dedicated tick treatment targets ravine edges, leaf litter, and long grass where blacklegged (Lyme-vector) ticks live — 5 sprays per season, $597 standalone or $497 bundled with any mosquito plan (save $100).</li>
            <li><strong>One-time &amp; event sprays:</strong> Single pre-event treatments from $99 for Toronto weddings, backyard parties, and patios — no commitment.</li>
          </ul>
          <p>Ready to get your Toronto price? <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">Book a free Toronto yard assessment</Link> or call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a>.</p>

          <h2>Toronto-Specific Considerations</h2>
          <p>Toronto&rsquo;s ravine system — the largest urban ravine network in North America — creates exceptional mosquito (and tick) pressure that doesn&rsquo;t exist in other GTA cities at the same scale:</p>
          <ul>
            <li><strong>Don Valley exposure.</strong> Properties in Rosedale, Leaside, Don Mills, East York, Lawrence Park, and parts of North York are within 1 km of major Don River tributaries. The Don Valley produces mosquitoes May–September every year.</li>
            <li><strong>Humber River exposure.</strong> Etobicoke, High Park, Bloor West, Baby Point — all face Humber River and watershed pressure.</li>
            <li><strong>Eastern ravine + lakefront.</strong> The Beaches, Leslieville, and Riverdale face combined pressure from Ashbridge&rsquo;s Bay wetlands and the Eastern Ravine system.</li>
            <li><strong>Tick risk in ravines.</strong> Toronto Public Health has confirmed Lyme-vector blacklegged ticks in multiple ravine systems. Public Health Ontario publishes a yearly map of estimated Lyme disease risk areas, and many ravine-adjacent homeowners bundle tick treatment with their mosquito plan.</li>
            <li><strong>Mature canopy = mosquito resting habitat.</strong> Toronto&rsquo;s established neighbourhoods (Forest Hill, Rosedale, Lawrence Park, Sunnybrook) have dense mature trees that create the shaded humid micro-habitats mosquitoes prefer for daytime resting.</li>
          </ul>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Toronto" service="mosquito" location="price_card_mid" />
      </div>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>What to Verify Before Booking in Toronto</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence (PPAL) required.' },
              { title: 'PCP Registration Number', desc: 'Every product needs a valid PCP number on its label.' },
              { title: 'Ravine-Property Experience', desc: 'Don Valley, Humber, and Eastern Ravine properties need providers experienced with high-pressure zones.' },
              { title: 'Tick Coverage Available', desc: 'Toronto has Lyme-zone ravines — bundle saves money vs. separate provider.' },
              { title: 'Estate Property Pricing', desc: 'Confirm pricing tier for large Bridle Path, Lawrence Park, or Rosedale lots.' },
              { title: 'Re-Treatment Guarantee', desc: 'Ask what happens if rain washes off a treatment or mosquitoes return between visits, and which plans that covers.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Try BuzzSkito with One Toronto Treatment</h2>
          <p>Toronto homeowners can book a single $99 treatment with no contract or commitment. See results, decide on a season plan. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a quote</Link>.</p>

          <h2>Related Toronto Pages</h2>
          <ul>
            <li><Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Toronto Mosquito Control (full service page)</Link></li>
            <li><Link href="/toronto-tick-spray" className="text-brand-700 hover:underline">Toronto Tick Control Service</Link></li>
            <li><Link href="/forest-hill-mosquito-control" className="text-brand-700 hover:underline">Forest Hill Mosquito Control</Link></li>
            <li><Link href="/rosedale-mosquito-control" className="text-brand-700 hover:underline">Rosedale Mosquito Control</Link></li>
            <li><Link href="/the-beaches-mosquito-control" className="text-brand-700 hover:underline">The Beaches Mosquito Control</Link></li>
            <li><Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito Man</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">GTA-Wide Comparison</Link></li>
          </ul>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Toronto" service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Toronto Mosquito Control — FAQ</h2>
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

      <CTASection heading="Toronto Mosquito Control, Starting at $99" subtext="No contracts. Same-week service across all Toronto neighbourhoods." variant="dark" />
    </>
  )
}
