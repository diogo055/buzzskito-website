import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import InlineYardRiskCTA from '@/components/InlineYardRiskCTA'

const SLUG = 'thermacell-canada-where-to-buy'
const DATE = '2026-05-01'
const TITLE = 'Thermacell Canada 2026 — Where to Buy + Do They Actually Work?'

const FAQS = [
  {
    question: 'How much does Thermacell cost in Canada?',
    answer: 'In Canada, expect to pay $35–$60 for a basic Thermacell Patio Shield repeller (the entry-level model), $70–$120 for the rechargeable E55 or E90, and $150–$220 for the premium Liv Smart Mosquito Repellent System (radius mode). Refills typically run $15–$22 for a 12-hour 3-pack and $30–$45 for a 36-hour 9-pack at Canadian Tire, Home Depot, Cabela\'s Canada, MEC, and Amazon.ca. Stock up at the start of mosquito season (April–May) — refills run low by July.',
  },
  {
    question: 'Where to buy Thermacell in Canada?',
    answer: 'Thermacell devices and refills are stocked at Canadian Tire, Home Depot Canada, Rona, Lowe\'s Canada, Cabela\'s Canada, Bass Pro Canada, MEC (Mountain Equipment Company), Amazon.ca, and most outdoor sporting goods stores. Canadian Tire usually has the best pricing and stocks the full lineup including Patio Shield, E55, E90, and Liv smart system. Cabela\'s and MEC stock more of the camping/portable models. Amazon.ca often has the best prices on refills if you buy in bulk.',
  },
  {
    question: 'Do Thermacell repellers actually work?',
    answer: 'Yes — when used correctly. Thermacell devices heat a mat soaked with allethrin (a synthetic version of pyrethrum, the natural chemical found in chrysanthemums) to release a vapour that repels mosquitoes within a 4.5–5 metre (15-foot) radius. Independent testing confirms 70–95% mosquito reduction in still air. However, performance drops in moderate-to-strong wind, on large open lawns, near stagnant water, or against blackflies and biting midges. Best for sheltered patios, decks, and small gathering areas — not whole-yard protection.',
  },
  {
    question: 'Is Thermacell safe for kids, pets, and pollinators?',
    answer: 'Allethrin is approved by Health Canada for residential use and is considered safe for humans and pets when devices are used as directed. The vapour is non-toxic to skin contact and breathing at the concentrations Thermacell produces. However, allethrin IS toxic to fish and bees in high concentrations — never use Thermacell directly over a pond with fish, and avoid running it during peak pollinator activity (mid-morning to late afternoon when bees are foraging). Keep kids from touching the heated mat. Cats are slightly more sensitive to pyrethroids than dogs but Thermacell\'s vapour exposure is well below toxicity thresholds.',
  },
  {
    question: 'Thermacell vs DEET vs Picaridin — which is better?',
    answer: 'They serve different purposes. Thermacell creates a 4.5m repellent zone around you (no skin application). DEET (20–30%) and Picaridin (20%) are applied to skin/clothing for personal protection during activity. Best combination for GTA outdoor activities: Thermacell on the patio while sitting still, plus DEET or Picaridin on skin if walking through dense vegetation. For tick prevention specifically, neither Thermacell nor DEET is as effective as Permethrin-treated clothing.',
  },
  {
    question: 'How long do Thermacell refills last?',
    answer: 'Thermacell mat refills last 4 hours each. The fuel cartridge (for fuel-powered models like Patio Shield) lasts 12 hours. Rechargeable models (E55, E90) hold a 5.5–9 hour charge per battery. A standard 3-pack of mat refills (12 hours total) is enough for one weekend of evening BBQs. Heavy summer users with frequent gatherings should buy the 36-hour 9-pack for cost efficiency.',
  },
  {
    question: 'Can I use Thermacell against blackflies in Ontario?',
    answer: 'Thermacell\'s allethrin vapour does work on blackflies but less effectively than against mosquitoes. Blackflies are smaller and tend to fly aggressively into the repellent zone, particularly in cottage country (Muskoka, Algonquin, Haliburton). For blackfly protection in northern Ontario settings, layer Thermacell with a head net during peak May–June blackfly season. In the GTA proper, blackflies are not typically a concern — only southern blackflies along the Niagara Escarpment edge see meaningful populations.',
  },
  {
    question: 'Does Thermacell work for large yards or just patios?',
    answer: 'Thermacell\'s standard 4.5–5 metre radius makes it ideal for patios (under 200 sq ft), decks, and small gathering spaces but inadequate for protecting an entire backyard (3,000–10,000 sq ft typical GTA lot). For whole-yard protection, professional barrier spray (applied to vegetation surfaces) creates a 30-day residual protection over the entire treated area — about 100x more square footage covered per dollar than running multiple Thermacells. Most GTA homeowners use Thermacell for the immediate seating area combined with professional yard spray for area coverage.',
  },
  {
    question: 'Are Thermacell refills the same in Canada as the USA?',
    answer: 'Yes — Thermacell uses identical refill formulations across North America. Canadian Tire, Home Depot Canada, and other Canadian retailers stock the same Earth Scent and Original mats sold at US retailers. The fuel cartridges are also interchangeable. If you bought a Thermacell device in the US, refills purchased in Canada will work with no compatibility issues. Health Canada and the EPA both register allethrin under similar standards.',
  },
  {
    question: 'Should I get the Thermacell Liv smart system or a basic Patio Shield?',
    answer: 'For occasional weekend use on a patio, the basic Patio Shield ($35–$50) is the right call. For frequent summer entertaining or a large deck where you want set-it-and-forget-it protection without manual refilling, the Liv Smart Mosquito Repellent System ($150–$220) is worth it — it covers up to 84 sq m (900 sq ft), runs on smart home schedules, and uses the longer-lasting refills. For camping and travel, the rechargeable E55 ($70–$90) hits the sweet spot.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Where to buy Thermacell in Canada (Canadian Tire, Home Depot, Cabela\'s, Amazon.ca prices), how Thermacell allethrin actually works, refill costs, vs DEET/Picaridin, and whether they\'re effective for GTA backyards. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function ThermacellCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to Thermacell mosquito repellers in Canada.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Thermacell Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Thermacell Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Pricing across Canadian retailers, how the allethrin technology actually repels mosquitoes, and where it falls short for GTA yards.</p>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated May 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Thermacell Canada: Where to Buy + Pricing</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Thermacell is widely stocked across Canada. Pricing varies $5–$15 between retailers depending on the model and time of year. Canadian Tire usually has the most consistent stock of the full lineup; Cabela&rsquo;s and MEC are best for the camping/portable models.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">Patio Shield</th>
                  <th className="px-4 py-3 text-left">E55 Rechargeable</th>
                  <th className="px-4 py-3 text-left">Liv Smart System</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Canadian Tire',     basic: '$39.99 – $44.99', e55: '$79.99 – $89.99',   liv: '$179 – $219' },
                  { name: 'Home Depot Canada', basic: '$37.97 – $44.97', e55: '$84.97 – $94.97',   liv: '$169 – $209' },
                  { name: 'Rona',              basic: '$39.99 – $49.99', e55: '$84.99 – $99.99',   liv: '$189 – $229' },
                  { name: 'Cabela\'s Canada',  basic: '$44.99 – $54.99', e55: '$84.99 – $99.99',   liv: 'Limited stock' },
                  { name: 'MEC',               basic: '$44.95 – $54.95', e55: '$84.95 – $94.95',   liv: 'Not stocked' },
                  { name: 'Amazon.ca',         basic: '$32 – $45',        e55: '$72 – $89',         liv: '$159 – $215' },
                ].map(({ name, basic, e55, liv }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{basic}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{e55}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{liv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of May 2026. Refills (mat 3-packs) run $15–$22; 12-hour fuel cartridges $12–$18; 36-hour mega-pack $30–$45. Buy refills in spring before peak-season markup.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Thermacell only protects a 4.5-metre zone around the device.</strong> For a full GTA backyard (3,000–10,000 sq ft) you&rsquo;d need 4–8 units running constantly — which costs more than a single <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> treatment that protects your entire property for 21–30 days. Most homeowners use Thermacell on the deck and barrier spray for the yard.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Do Thermacell repellers actually work in Canadian backyards?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Yes — Thermacell works in still air, providing a 4.5–5 metre repellent zone around the device using heated allethrin vapour, with 70–95% mosquito reduction in independent tests.</strong> However, performance drops sharply in wind, on open lawns, or near stagnant water. Best for patios, decks, and small gathering spots — NOT whole-yard protection. Pricing ranges from $35 (basic Patio Shield) to $220 (Liv smart system) at Canadian Tire, Home Depot, and Amazon.ca. For a typical GTA 5,000 sq ft yard you&rsquo;d need 4+ units running simultaneously — which costs more than professional barrier spray that covers the entire yard for 21–30 days.
          </p>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Thermacell Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Active ingredient', 'Allethrin (synthetic pyrethroid)'],
                  ['Coverage radius', '4.5–5 metres (15 feet)'],
                  ['Effective area', '~75 sq m (~800 sq ft) in still air'],
                  ['Mat refill duration', '4 hours each'],
                  ['Fuel cartridge duration', '12 hours (Patio Shield models)'],
                  ['Rechargeable battery', '5.5–9 hours (E55, E90)'],
                  ['Effectiveness', '70–95% mosquito reduction in still air'],
                  ['Wind sensitivity', 'High — drops 50%+ in moderate wind'],
                  ['Safe for', 'Humans, pets, pollinators (when used as directed)'],
                  ['Toxic to', 'Fish (don\'t use over ponds)'],
                  ['Health Canada approved', 'Yes — registered residential use'],
                  ['Price range Canada', '$35 (Patio Shield) – $220 (Liv smart)'],
                  ['Best use case', 'Patios, decks, small gathering spaces'],
                  ['Not recommended for', 'Whole-yard protection, windy locations'],
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
          <h2>How Thermacell Actually Works</h2>
          <p>Thermacell devices warm a small synthetic mat soaked with allethrin — a lab-made version of the natural insecticide found in chrysanthemum flowers. When the mat heats up, it releases allethrin vapour into the air around the device. Mosquitoes flying through the vapour cloud are repelled (and at higher concentrations, killed). The vapour is undetectable to humans at normal concentrations.</p>
          <p>Two things matter for performance: <strong>still air and proximity</strong>. The vapour cloud forms a roughly spherical zone about 4.5 metres in radius. In dead-calm conditions you get full mosquito knockdown within minutes. In a 10–15 km/h breeze, the vapour disperses faster than it can build up, dropping effectiveness by 50% or more.</p>

          <InlineYardRiskCTA variant="emerald" pretext="Free 60-second tool · 1-100 score by address" />

          <h2>When Thermacell Is the Right Tool</h2>
          <ul>
            <li><strong>Sheltered patios and decks</strong> — wind-protected by walls or fencing</li>
            <li><strong>Small backyard seating areas</strong> (under 200 sq ft)</li>
            <li><strong>Camping and tailgating</strong> — easy portability with rechargeable models</li>
            <li><strong>Outdoor dining tables</strong> — set one beside the table during dinner</li>
            <li><strong>Hot tub and pool deck areas</strong> — short-duration use</li>
            <li><strong>Cottage docks at sundown</strong> — works well in calm evenings</li>
          </ul>

          <h2>When Thermacell Falls Short</h2>
          <ul>
            <li><strong>Whole-yard protection</strong> — too small a coverage radius</li>
            <li><strong>Windy locations</strong> — Lake Ontario waterfront patios with consistent breezes</li>
            <li><strong>Open lawns away from a single seating point</strong></li>
            <li><strong>Yards backing onto ravines or creeks</strong> — mosquito pressure overwhelms the small repellent zone</li>
            <li><strong>Tick protection</strong> — Thermacell doesn&rsquo;t work on ticks (they don&rsquo;t fly)</li>
            <li><strong>Daytime backyard use</strong> — pollinators are foraging; better to wait until evening</li>
          </ul>

          <h2>Thermacell vs Other Mosquito Solutions in Canada</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Solution</th><th className="px-3 py-2 text-left">Coverage</th><th className="px-3 py-2 text-left">Cost</th><th className="px-3 py-2 text-left">Best for</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Thermacell Patio Shield</strong></td><td className="px-3 py-2">4.5m radius</td><td className="px-3 py-2">$40 + refills</td><td className="px-3 py-2">Patio dinners</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">DEET/Picaridin spray</td><td className="px-3 py-2">Skin only</td><td className="px-3 py-2">$10–$15</td><td className="px-3 py-2">Walking, hiking</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Citronella candles</td><td className="px-3 py-2">~1m</td><td className="px-3 py-2">$5–$15</td><td className="px-3 py-2">Ambiance only — limited efficacy</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/mosquito-dunks-canada-guide">Mosquito dunks (BTI)</Link></td><td className="px-3 py-2">Standing water only</td><td className="px-3 py-2">$15/season</td><td className="px-3 py-2">Rain barrels, ponds</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">Entire property</td><td className="px-3 py-2">$99+/treatment</td><td className="px-3 py-2">Whole-yard, 21–30 days</td></tr>
            </tbody>
          </table>

          <h2>The Smart GTA Mosquito Strategy</h2>
          <p>The most effective mosquito control for GTA backyards stacks three layers:</p>
          <ol>
            <li><strong>Eliminate breeding sites</strong> — drain standing water, treat unavoidable sources with <Link href="/blog/mosquito-dunks-canada-guide">BTI dunks</Link></li>
            <li><strong>Whole-yard barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s seasonal program</Link> applies Health Canada-approved formula to vegetation, providing 21–30 days of residual coverage across your entire property</li>
            <li><strong>Personal protection at the seating point</strong> — Thermacell on the deck gives you a final repellent zone where you actually sit, plus DEET/Picaridin if you walk into the yard at dusk</li>
          </ol>
          <p>This stacked approach is what most experienced GTA outdoor entertainers run — Thermacell alone is rarely enough for a yard that backs onto ravines, water features, or conservation lands.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada — Where to Buy + How They Work</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Mosquito Repellent Guide — Ontario 2026</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Actually Works</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Thermacell Covers the Patio · Barrier Spray Covers the Yard" subtext="Get a free quote for whole-yard barrier spray. From $99. Health Canada approved. 30-day residual." variant="dark" />
    </>
  )
}
