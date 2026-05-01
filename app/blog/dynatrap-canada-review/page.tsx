import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'dynatrap-canada-review'
const DATE = '2026-05-01'
const TITLE = 'DynaTrap Canada 2026 — Honest Review + Where to Buy (Do They Work?)'

const FAQS = [
  {
    question: 'Where to buy DynaTrap in Canada?',
    answer: 'DynaTrap devices are stocked at Costco Canada (best pricing on the larger half-acre and full-acre models when in season), Canadian Tire, Home Depot Canada, Amazon.ca, Lee Valley Tools, and Cabela\'s Canada. Costco often runs spring sales bringing the DT2030 (1-acre) down to $179–$229. The Atrakta booster cartridges (~$15–$25 each) are stocked at the same retailers plus most garden centres. Buy in April–May before peak-season markup; cartridge supply runs low by July.',
  },
  {
    question: 'How much does DynaTrap cost in Canada?',
    answer: 'Pricing as of May 2026 across Canadian retailers: DynaTrap DT150 (small, 300 sq ft) $79–$129; DT1050 (1/2 acre) $149–$199; DT2030 (1 acre) $199–$279; DT3050 (1 acre with mosquito attractant fan) $249–$329; the larger commercial Mosquito Trap models $349–$499. Atrakta booster cartridges add $15–$25 each (lasts 60 days). UV bulbs need replacement every 4 months at $15–$25 each. First-year cost for a typical DT2030 + 3 cartridges + 2 bulbs is approximately $290–$380.',
  },
  {
    question: 'Do DynaTraps actually work for mosquitoes?',
    answer: 'This is contested. DynaTrap markets the devices as mosquito traps using UV light + CO₂-mimicking fan suction. Independent research from the University of Florida (Day 2002) and Notre Dame (2017) found that UV-based traps catch overwhelmingly non-biting insects — moths, beetles, midges, and other flying insects make up 80–95% of trap catches. Mosquito catches are typically under 5% of total. Adding the Atrakta cartridge (which contains octenol) modestly improves mosquito attractiveness but DynaTraps remain significantly less effective for mosquitoes than CO₂-burning propane traps (Mosquito Magnet, BG-Mosquitaire). For a Canadian backyard, expect modest mosquito reduction at best.',
  },
  {
    question: 'DynaTrap vs Mosquito Magnet — which is better?',
    answer: 'Mosquito Magnet ($400–$1,300, propane-powered, generates real CO₂) is significantly more effective at catching mosquitoes — independent testing shows 70–90% population reduction over 6–8 weeks. DynaTrap ($80–$330, UV light + small fan, optional octenol cartridge) catches mostly non-biting insects with limited mosquito impact. If your goal is mosquito reduction specifically, Mosquito Magnet is the proven option despite higher cost. If you want a lower-cost device that catches some flying insects (and you don\'t mind that most aren\'t mosquitoes), DynaTrap is acceptable but should not be your primary mosquito-control strategy.',
  },
  {
    question: 'Is DynaTrap safe for kids, pets, and pollinators?',
    answer: 'DynaTrap doesn\'t use chemicals or insecticides — just UV light and a fan. The device itself is safe for kids and pets. However, the UV light DOES attract beneficial insects including pollinators (moths are key nighttime pollinators, beetles eat aphids). Running a DynaTrap continuously can contribute to local insect biodiversity loss — it kills indiscriminately. The Xerces Society recommends UV traps not be used in habitats where pollinator populations are at risk. For a typical GTA backyard, the impact is minor; for properties bordering conservation areas, consider whether you actually need the device or whether targeted yard barrier spray would be a more selective approach.',
  },
  {
    question: 'How long do DynaTrap UV bulbs last?',
    answer: 'DynaTrap UV bulbs are rated for ~3,000 hours of continuous operation, which works out to approximately 4 months of 24/7 use during the May–September Canadian outdoor season. The bulbs lose UV intensity gradually — by month 4 they\'re putting out about 50% of original UV output, which significantly reduces insect attraction. Replace bulbs at the start of each new season. Replacement bulbs cost $15–$25 each at Canadian Tire, Amazon.ca, or direct from DynaTrap.',
  },
  {
    question: 'Where should I place a DynaTrap in my yard?',
    answer: 'DynaTrap recommends placement 10–12 metres (30–40 feet) from your seating area, in a shaded location during the day, near vegetation where mosquitoes rest, and at least 1 metre off the ground. The device should be on continuously (24/7) for best results — mosquitoes are most active at dawn and dusk, so turning it off when you\'re inside reduces effectiveness. Avoid placing directly under trees that drop leaves or sap (clogs the fan), in direct rain (most models are weather-resistant but extreme exposure shortens lifespan), or in areas with strong nighttime artificial light (competes with the UV).',
  },
  {
    question: 'How often do I need to clean a DynaTrap?',
    answer: 'Empty the catch basket every 1–2 weeks during peak summer (it fills up surprisingly fast with moths and beetles). Wipe down the fan and UV bulb monthly with a dry cloth (no water near the electrical components). At the end of season (October), give it a deep clean: empty fully, vacuum out debris, store the device dry indoors over winter. UV bulbs are fragile — handle gently. The Atrakta cartridge is a sealed unit; just pop it in and replace every 60 days.',
  },
  {
    question: 'Are there better alternatives to DynaTrap in Canada?',
    answer: 'For mosquito-specific reduction: Mosquito Magnet ($400–$1,300) is significantly more effective. For personal patio protection: Thermacell ($35–$220) creates a 4.5m repellent zone around you. For whole-yard mosquito and tick control: professional barrier spray (~$99/treatment, 21–30 day residual) covers the entire property and works on ticks (DynaTrap doesn\'t affect ticks). For larvae control: BTI mosquito dunks ($15/season) handle any standing water. Most Canadian homeowners get better results from a combination of barrier spray + Thermacell + dunks than from DynaTrap. DynaTrap can be useful as a supplemental piece for cottage decks where you also want to catch moths and miscellaneous flying insects.',
  },
  {
    question: 'What is the difference between DynaTrap models?',
    answer: 'DT150 ($79–$129) covers small patios up to 300 sq ft — good for a balcony or small porch. DT1050 ($149–$199) covers half-acre — typical Canadian backyard size. DT2030 ($199–$279) covers full acre — most popular model for cottages and rural properties. DT3050 ($249–$329) adds a stronger mosquito-attractant fan plus larger coverage — best DynaTrap option for mosquito-specific use. Commercial Mosquito Traps ($349–$499) are designed for restaurant patios and commercial outdoor spaces. For a typical GTA suburban backyard, the DT1050 is the right size; cottage owners should size up to DT2030 or DT3050.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Honest review of DynaTrap UV insect traps in Canada — where to buy (Costco, Canadian Tire, Amazon.ca pricing), do they actually work for mosquitoes, vs Mosquito Magnet, and the better Canadian alternatives. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function DynaTrapCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 honest review of DynaTrap UV insect traps in Canada.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'DynaTrap Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">DynaTrap Canada Review</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">An honest look at DynaTrap UV insect traps for Canadian backyards — pricing, what they actually catch (vs what they market), and better alternatives.</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated May 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">DynaTrap: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Costco Canada usually has the best pricing during spring promotions. Canadian Tire and Home Depot stock the smaller models year-round; cottage retailers stock the larger 1-acre models.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">DT1050 (½ acre)</th>
                  <th className="px-4 py-3 text-left">DT2030 (1 acre)</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Costco Canada',     half: '$149 – $179',  full: '$179 – $229', note: 'Best spring sale pricing' },
                  { name: 'Canadian Tire',     half: '$169 – $199',  full: '$219 – $279', note: 'In-store + online' },
                  { name: 'Home Depot Canada', half: '$159 – $199',  full: '$209 – $269', note: 'Spring stock' },
                  { name: 'Amazon.ca',         half: '$149 – $199',  full: '$199 – $269', note: 'Often Prime' },
                  { name: 'Lee Valley Tools',  half: '$179 – $209',  full: '$229 – $279', note: 'Premium retailer' },
                  { name: 'Cabela\'s Canada',  half: '$169 – $199',  full: '$219 – $279', note: 'Outdoor specialty' },
                ].map(({ name, half, full, note }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{half}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{full}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of May 2026. Atrakta booster cartridges (60-day mosquito attractant) add $15–$25 each. UV replacement bulbs $15–$25 each (replace yearly). Annual operating cost: $90–$150.
          </p>
          <div className="mt-5 rounded-xl bg-rose-50 border-l-4 border-rose-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-rose-900">⚠️ Independent research finds DynaTraps catch mostly non-biting insects.</strong> University studies show 80–95% of catches are moths, beetles, and other flying insects — not mosquitoes. If mosquito-specific reduction is your goal, <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> ($99/treatment) or <Link href="/blog/mosquito-magnet-canada">Mosquito Magnet</Link> are far more effective. DynaTrap can supplement other strategies but shouldn&rsquo;t be your primary mosquito control.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Are DynaTraps worth it for Canadian backyards?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Marginally — but only as a supplemental tool, not as primary mosquito control.</strong> DynaTraps use UV light and fan suction to catch flying insects, but independent research consistently shows that 80–95% of catches are non-biting moths, beetles, and midges. Mosquito catches are typically under 5%. Adding the Atrakta cartridge improves mosquito attraction modestly. For Canadian buyers wanting genuine mosquito reduction, <Link href="/mosquito-control" className="text-emerald-700 underline">professional barrier spray</Link>, <Link href="/blog/mosquito-magnet-canada">Mosquito Magnet</Link> propane CO₂ traps, or <Link href="/blog/thermacell-canada-where-to-buy">Thermacell devices</Link> are all more effective per dollar. DynaTrap is fine if you also want to catch general flying-insect nuisance, but don&rsquo;t expect it to solve a mosquito problem.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">DynaTrap Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Mechanism', 'UV light attracts insects → fan vacuums into catch basket'],
                  ['Adds CO₂?', 'No (cartridge adds octenol scent only)'],
                  ['Mosquito catch percentage', '~5% of total catch (UF & Notre Dame studies)'],
                  ['Non-target catch', 'Moths, beetles, midges (~80–95% of catches)'],
                  ['Coverage', '300 sq ft – 1 acre depending on model'],
                  ['Power', 'Plug-in 110V (most models) · LED runtime ~3,000 hours'],
                  ['Tick effectiveness', 'None — ticks don\'t fly to UV'],
                  ['Annual operating cost', '$90–$150 (cartridges + bulbs)'],
                  ['Models in Canada', 'DT150, DT1050, DT2030, DT3050'],
                  ['Price range', '$79 (DT150) – $499 (commercial)'],
                  ['Pollinator impact', 'Negative — kills moths, beetles indiscriminately'],
                  ['Best application', 'Cottage decks, supplemental flying-insect catch'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2>How DynaTrap Works (and Why That Matters)</h2>
          <p>DynaTrap uses two ingredients: a UV light to attract insects, and a small fan to suck them into a catch basket where they dehydrate. The premium models add an Atrakta cartridge that releases octenol — a synthetic version of human breath/sweat compounds.</p>
          <p>The problem is fundamental: UV light attracts MANY species of flying insects, but most mosquitoes are <strong>not</strong> primarily UV-attracted. Female mosquitoes (the ones that bite) hunt for blood meals using CO₂, body heat, lactic acid, and skin scent — not light. UV light primarily attracts moths (which use it for navigation), beetles, midges, mayflies, and other phototactic species.</p>
          <p>This is why University of Florida and Notre Dame studies consistently find DynaTrap-style devices catching 5% mosquitoes and 95% &ldquo;everything else.&rdquo; The Atrakta octenol cartridge modestly improves mosquito catch, but it&rsquo;s still well below CO₂-generating propane traps.</p>

          <h2>What DynaTrap IS Good For</h2>
          <ul>
            <li><strong>Cottage country deck use</strong> — catches moths, beetles, and the occasional mosquito while you sit outside</li>
            <li><strong>Supplemental flying-insect reduction</strong> — combined with other tools, contributes to overall pressure reduction</li>
            <li><strong>Lights-on-the-water effect</strong> — the UV glow is mild and aesthetic on a dock</li>
            <li><strong>Nostalgia and ritual</strong> — emptying the catch basket is satisfying for some users</li>
          </ul>

          <h2>What DynaTrap Is NOT Good For</h2>
          <ul>
            <li><strong>Primary mosquito control</strong> — the catch ratio is too poor</li>
            <li><strong>Tick protection</strong> — ticks don&rsquo;t fly to traps</li>
            <li><strong>Same-day yard rescue</strong> — even with continuous operation, mosquito reduction is modest</li>
            <li><strong>Properties bordering conservation areas</strong> — kills beneficial insects including pollinators</li>
            <li><strong>Replacing professional yard treatment</strong> — coverage area is too limited per dollar</li>
          </ul>

          <h2>DynaTrap vs Real Mosquito Solutions</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Solution</th><th className="px-3 py-2 text-left">First-year cost</th><th className="px-3 py-2 text-left">Mosquito reduction</th><th className="px-3 py-2 text-left">Tick coverage</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>DynaTrap DT2030</strong></td><td className="px-3 py-2">$290–$380</td><td className="px-3 py-2">Modest</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Patriot</Link></td><td className="px-3 py-2">$850–$1,100</td><td className="px-3 py-2">70–90% (over 6–8 weeks)</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link></td><td className="px-3 py-2">$80–$150</td><td className="px-3 py-2">70–95% in 4.5m zone</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">$549–$994</td><td className="px-3 py-2">Whole yard 21–30 days</td><td className="px-3 py-2">Yes — full coverage</td></tr>
            </tbody>
          </table>

          <h2>The Honest Verdict for GTA Buyers</h2>
          <p>If you&rsquo;re shopping for mosquito control specifically, skip DynaTrap and go directly to <Link href="/mosquito-control">professional barrier spray</Link> for whole-yard coverage. If you have a cottage and want a low-effort supplemental device that catches moths and the occasional mosquito while looking ambient on the deck, DynaTrap is fine.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada Guide</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada Guide</Link></li>
            <li><Link href="/blog/bug-zappers-canada-do-they-work">Bug Zappers Canada — Do They Work?</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Stop Catching Moths · Start Killing Mosquitoes" subtext="Get a free quote for licensed barrier spray. From $99. Health Canada approved. 30-day residual." variant="dark" />
    </>
  )
}
