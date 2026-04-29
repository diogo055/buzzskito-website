import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito Control Toronto 2026 · Compared',
  description:
    'Compare top mosquito control companies in Toronto 2026 — Rosedale, Forest Hill, The Beaches, High Park, Don Mills. Pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.',
  canonical: '/best-mosquito-control-companies-toronto',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Toronto?',
    answer: 'BuzzSkito offers the lowest single-treatment price in Toronto ($99) and 126 perfect five-star reviews — all on a no-contract basis. Mosquito Man has 900+ reviews and longer GTA tenure but operates on seasonal contracts. LawnSavers serves Toronto primarily as a lawn-care add-on. The right pick depends on whether you want pricing flexibility, brand recognition, or bundled lawn service.',
  },
  {
    question: 'How much does mosquito control cost in Toronto?',
    answer: 'Single treatments in Toronto range from $99 (BuzzSkito) to $129+ (LawnSavers) per visit. Seasonal programs run from $549 to $2,049 depending on plan tier. Toronto ravine-adjacent properties (Rosedale, Forest Hill, Don Mills, Sunnybrook) typically need the full 5-treatment program for continuous protection.',
  },
  {
    question: 'Which Toronto neighbourhoods have the worst mosquito problems?',
    answer: 'Ravine-adjacent neighbourhoods consistently have the highest mosquito activity in Toronto: Rosedale and Forest Hill (Don Valley ravines), Leaside and East York (Don Valley + Taylor Creek), Don Mills (Don Valley + Flemingdon Park), The Beaches (Eastern Ravine + Ashbridge\'s Bay), Etobicoke and Humber Valley (Humber River), High Park area (Humber + Grenadier Pond), and Sunnybrook (Sunnybrook Park + Wilket Creek). Mosquitoes from these ravines disperse up to 3 km, so most Toronto properties have some level of exposure.',
  },
  {
    question: 'Does Toronto have a tick problem too?',
    answer: 'Yes. Toronto Public Health has confirmed established blacklegged tick populations in High Park, the Don Valley ravines, and other green corridors. Properties backing onto any Toronto ravine, conservation area, or wooded park face real Lyme disease risk for kids and pets. BuzzSkito offers tick standalone at $597/season or $497 bundled with mosquito plans (save $100). Recommended for any Toronto property within 800 metres of a ravine or park.',
  },
  {
    question: 'Are no-contract Toronto mosquito control plans available?',
    answer: 'BuzzSkito is the primary no-contract option in Toronto. Most other providers require seasonal contracts. Test BuzzSkito with a single $99 treatment, see results, then decide whether to commit. No cancellation fees.',
  },
  {
    question: 'Do Toronto mosquito companies serve all neighbourhoods?',
    answer: 'BuzzSkito serves all Toronto neighbourhoods including Rosedale, Forest Hill, The Beaches, High Park, Don Mills, Leaside, East York, Etobicoke, North York, Scarborough, Willowdale, Lawrence Park, Sunnybrook, Bridle Path, Casa Loma, and more. Mosquito Man and LawnSavers also serve most Toronto neighbourhoods. Always confirm coverage for your specific address before booking.',
  },
]

export default function BestMosquitoControlCompaniesTorontoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies Toronto', url: '/best-mosquito-control-companies-toronto' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-toronto')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Best Companies Toronto</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Best Mosquito Control Companies in Toronto — 2026</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Honest 2026 comparison of mosquito control providers serving Toronto — Rosedale, Forest Hill, The Beaches, High Park, Don Mills, Leaside, Etobicoke, Sunnybrook. Pricing, reviews, contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Toronto Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Toronto-Specific Pricing</span>
          <span>✓ Updated Apr 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Toronto Mosquito Control Companies — Compared</h2>
          <p>Toronto homeowners — particularly those near the Don Valley, Humber River, ravine systems, or Lake Ontario waterfront — have several professional mosquito control options. Here&rsquo;s an honest comparison based on publicly available pricing, Google reviews, and Toronto-specific service offerings as of April 2026.</p>

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
                  { company: 'BuzzSkito', price: 'From $99', reviews: '126 (5.0★)', contracts: 'No contracts', area: 'All Toronto' },
                  { company: 'Mosquito Man', price: '~$450 seasonal', reviews: '900+ (4.8★)', contracts: 'Seasonal', area: 'All Toronto' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'From $129', reviews: '500+ combined', contracts: 'Seasonal', area: 'Toronto' },
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
          <p className="text-sm text-gray-500 not-prose mb-8">Pricing reflects publicly available rates as of April 2026. Estate properties (Bridle Path, Rosedale lakefront) and large multi-acre Lawrence Park lots typically price above the base rate.</p>

          <h2>1. BuzzSkito (Toronto coverage: full)</h2>
          <p><Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">BuzzSkito serves all of Toronto</Link> — Rosedale, Forest Hill, The Beaches, High Park, Don Mills, Leaside, East York, Etobicoke, North York, Scarborough, Willowdale, Lawrence Park, Sunnybrook, Bridle Path, Casa Loma, and 20+ more neighbourhoods.</p>
          <ul>
            <li><strong>Pricing:</strong> From $99 per single treatment. Basic season $549 (5 sprays), Standard $994 (10 sprays), Exclusive $2,049 (20+ sprays).</li>
            <li><strong>Reviews:</strong> 129 Google reviews, perfect 5.0-star rating.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees.</li>
            <li><strong>Tick add-on:</strong> Critical for ravine-adjacent Toronto properties. $597 standalone or $497 bundled. Toronto Public Health has confirmed Lyme-vector blacklegged ticks in High Park, Don Valley, and other ravines.</li>
            <li><strong>Same-week service:</strong> Available across all Toronto neighbourhoods.</li>
          </ul>

          <h2>2. Mosquito Man (Toronto coverage: full)</h2>
          <p>Long-running GTA mosquito control company with the largest review volume in the market.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs around $450. Per-treatment pricing not publicly listed.</li>
            <li><strong>Reviews:</strong> 900+ Google reviews across the GTA.</li>
            <li><strong>Contracts:</strong> Seasonal program model.</li>
            <li><strong>Service:</strong> Established Toronto customer base. Standard barrier spray.</li>
          </ul>

          <h2>3. Mosquito.Buzz (Toronto coverage: franchise)</h2>
          <p>National Canadian franchise — Toronto service depends on franchisee availability.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based, no published rates.</li>
            <li><strong>Reviews:</strong> Varies by franchisee.</li>
            <li><strong>Contracts:</strong> Seasonal commitment standard.</li>
          </ul>

          <h2>4. LawnSavers (Toronto coverage: yes)</h2>
          <p>Lawn care provider offering mosquito control as an add-on. Strong Toronto lawn-care presence.</p>
          <ul>
            <li><strong>Pricing:</strong> From $129/treatment. Bundle pricing for existing lawn customers.</li>
            <li><strong>Reviews:</strong> 500+ Google reviews across all services.</li>
            <li><strong>Best for:</strong> Toronto homeowners already using LawnSavers wanting bundled service.</li>
          </ul>

          <h2>Toronto-Specific Considerations</h2>
          <p>Toronto&rsquo;s ravine system — the largest urban ravine network in North America — creates exceptional mosquito (and tick) pressure that doesn&rsquo;t exist in other GTA cities at the same scale:</p>
          <ul>
            <li><strong>Don Valley exposure.</strong> Properties in Rosedale, Leaside, Don Mills, East York, Lawrence Park, and parts of North York are within 1 km of major Don River tributaries. The Don Valley produces mosquitoes May–September every year.</li>
            <li><strong>Humber River exposure.</strong> Etobicoke, High Park, Bloor West, Baby Point — all face Humber River and watershed pressure.</li>
            <li><strong>Eastern ravine + lakefront.</strong> The Beaches, Leslieville, and Riverdale face combined pressure from Ashbridge&rsquo;s Bay wetlands and the Eastern Ravine system.</li>
            <li><strong>Tick risk in ravines.</strong> Toronto Public Health has confirmed Lyme-vector blacklegged ticks in multiple ravine systems. Tick coverage is not optional for ravine-adjacent properties with kids or dogs.</li>
            <li><strong>Mature canopy = mosquito resting habitat.</strong> Toronto&rsquo;s established neighbourhoods (Forest Hill, Rosedale, Lawrence Park, Sunnybrook) have dense mature trees that create the shaded humid micro-habitats mosquitoes prefer for daytime resting.</li>
          </ul>

          <h2>What to Verify Before Booking in Toronto</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'Ontario Pesticide Applicator\'s Licence (PPAL) required.' },
              { title: 'Health Canada PCP Registration', desc: 'Every product needs a valid PCP number.' },
              { title: 'Ravine-Property Experience', desc: 'Don Valley, Humber, and Eastern Ravine properties need providers experienced with high-pressure zones.' },
              { title: 'Tick Coverage Available', desc: 'Toronto has Lyme-zone ravines — bundle saves money vs. separate provider.' },
              { title: 'Estate Property Pricing', desc: 'Confirm pricing tier for large Bridle Path, Lawrence Park, or Rosedale lots.' },
              { title: 'Re-Treatment Guarantee', desc: 'Free re-spray if mosquitoes return within the protection window.' },
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

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Toronto Mosquito Control — FAQ</h2>
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

      <CTASection heading="Bug-Free Toronto Backyard, Starting at $99" subtext="No contracts. Same-week service across all Toronto neighbourhoods." variant="dark" />
    </>
  )
}
