import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'mosquito-bits-canada-vs-dunks'
const DATE = '2026-05-01'
const TITLE = 'Mosquito Bits Canada 2026 — Where to Buy + Bits vs Dunks'

const FAQS = [
  {
    question: 'What are mosquito bits?',
    answer: 'Mosquito Bits are small corn-cob granules coated with BTI (Bacillus thuringiensis subspecies israelensis) — the same naturally-occurring bacterial larvicide found in mosquito dunks, but in a fast-release format. Sprinkle the bits onto standing water and BTI is released into the water within minutes, killing mosquito larvae within 24 hours. Each 8-oz container of Summit Mosquito Bits treats 500–1000 sq ft of water surface area. Bits are sold in Canada at Canadian Tire, Home Depot, Rona, and most garden centres for $15–$25 per 8-oz container.',
  },
  {
    question: 'Where to buy mosquito bits in Canada?',
    answer: 'Mosquito Bits are widely available across Canadian retailers: Canadian Tire (the most common stockist), Home Depot Canada, Rona, Lowe\'s Canada, garden centres, and Amazon.ca. The most-stocked brand is Summit Chemical (orange and green container — same brand as the popular dunks). A typical 8-oz container runs $15–$25. The 30-oz value pack at Costco or Amazon runs $35–$55 and treats 4–8 times the area, making it the better deal for properties with multiple rain barrels or standing water sources.',
  },
  {
    question: 'Mosquito Bits vs Mosquito Dunks — which should I use?',
    answer: 'Same active ingredient (BTI), different release speed. Use DUNKS for long-term water sources (rain barrels, ornamental ponds, decorative water features) — they slow-release for 30 days. Use BITS for fast emergency knockdown or for water sources you don\'t want to look at a tablet floating in (small bird baths, kiddie pools, neglected pet bowls, drainage trays). Many homeowners use both: dunks dropped in the rain barrel for set-and-forget, bits sprinkled when you find larvae somewhere unexpected. Bits work in 30 minutes vs dunks taking 4 hours; bits last 7–14 days vs dunks lasting 30 days.',
  },
  {
    question: 'How much do mosquito bits cost in Canada?',
    answer: 'In Canada (May 2026 pricing): Canadian Tire and Home Depot Canada list 8-oz Summit Mosquito Bits at $14.99–$19.99. Rona is typically $15.49–$21.49. Amazon.ca varies $13–$22 depending on Prime status. The 30-oz value container is $34.99–$54.99 — three times the size for roughly twice the price, making it 33% cheaper per ounce. Garden centres often have the same 8-oz pack for $15–$22.',
  },
  {
    question: 'Are mosquito bits safe for pets, kids, fish, and pollinators?',
    answer: 'Yes — Mosquito Bits are extremely safe. The active ingredient (BTI) is a naturally-occurring soil bacterium that specifically targets mosquito and black fly larvae. It does not affect humans, dogs, cats, fish, frogs, dragonflies, beneficial insects, pollinators, or birds. Health Canada approves BTI for use in drinking water reservoirs in some provinces. Your dog can technically eat the bits without harm (it might cause mild digestive upset like any unfamiliar food, but no toxicity). Always store the container away from kids — not because of toxicity, but because the corn-cob looks like cereal and you don\'t want kids snacking on it.',
  },
  {
    question: 'How fast do mosquito bits work?',
    answer: 'Mosquito Bits start working within 30 minutes of contact with water. The BTI is released as the corn-cob granules absorb water, and larvae begin dying within 1–4 hours. Full kill of all larvae in the treated water typically completes within 24 hours. By comparison, mosquito dunks take 4–8 hours to begin working but last 30 days vs bits lasting 7–14 days.',
  },
  {
    question: 'Can I use mosquito bits in my rain barrel?',
    answer: 'You can, but mosquito DUNKS are better for rain barrels because they last 30 days vs bits lasting 7–14 days. A single dunk in a 50-gallon rain barrel handles the entire month. With bits, you\'d need to re-apply every 1–2 weeks. Save bits for situations where you discover larvae unexpectedly — a forgotten plant saucer, the gutter that\'s clogged, a neglected pet water bowl — places where you want immediate larvae knockdown without committing to a 30-day floating tablet.',
  },
  {
    question: 'Do mosquito bits work in a swimming pool?',
    answer: 'Only in a NEGLECTED pool with standing rainwater (no chlorine). Bits and dunks are not designed for active chlorinated swimming pools — the chlorine kills mosquito larvae anyway, and pool filtration removes the BTI-coated corn-cob granules. If your pool has been sitting unused with rainwater for weeks, sprinkle bits across the surface to prevent it from becoming a mosquito breeding factory until you can drain or refill it.',
  },
  {
    question: 'How long do mosquito bits last in storage?',
    answer: 'Sealed Mosquito Bits last 2–3 years in a cool, dry storage location. Once opened, they last 1 full year if kept dry and sealed (re-seal the container after each use). Moisture activates the BTI prematurely, so don\'t leave the container open in a humid garden shed all summer. Buying the smaller 8-oz container if you only have one rain barrel makes sense; the larger 30-oz container is for properties with multiple water sources or for splitting with a neighbour.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Where to buy Mosquito Bits in Canada (Canadian Tire, Home Depot, Rona prices), Bits vs Dunks side-by-side, BTI safety, fast-release vs slow-release, and how to use them in rain barrels and ponds. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function MosquitoBitsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comprehensive 2026 guide to Mosquito Bits in Canada vs Mosquito Dunks.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Bits Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Bits Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Pricing across Canadian retailers, BTI granules vs dunks tablets, and which one belongs in your rain barrel.</p>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated May 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Bits: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Summit Chemical Mosquito Bits (orange and green container) is the most widely-stocked brand across Canadian retailers. Pricing varies by retailer and time of year — buy in spring before peak-season markup.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">8 oz container</th>
                  <th className="px-4 py-3 text-left">30 oz value pack</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Canadian Tire',     small: '$14.99 – $19.99', large: '$34.99 – $44.99', avail: 'In-store + online · most consistent stock' },
                  { name: 'Home Depot Canada', small: '$14.97 – $18.97', large: '$36.97 – $46.97', avail: 'In-store + same-day pickup' },
                  { name: 'Rona',              small: '$15.49 – $21.49', large: '$38.99 – $48.49', avail: 'In-store + online' },
                  { name: 'Lowe\'s Canada',    small: '$14.99 – $19.99', large: '$36.99 – $46.99', avail: 'In-store + online' },
                  { name: 'Amazon.ca',         small: '$13 – $22',        large: '$32 – $54',       avail: 'Often Prime · check seller' },
                  { name: 'Garden centres',    small: '$15 – $22',        large: '$38 – $52',       avail: 'Independent stocks vary' },
                ].map(({ name, small, large, avail }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{small}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{large}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{avail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of May 2026. The 30-oz value pack is roughly 33% cheaper per ounce — buy it if you have multiple rain barrels, a pond, or want to share with a neighbour. Stock up in April–May before peak-season demand.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Bits kill larvae in your treated water — not the adult mosquitoes flying onto your property.</strong> For complete yard protection in the GTA, combine bits/dunks (your standing water) with <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> on vegetation. Bits cost $15/season per water source. Barrier spray covers the whole yard for 21–30 days.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Should I buy mosquito bits or mosquito dunks?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Both contain BTI — use DUNKS for long-term water sources (rain barrels, ponds, 30-day release) and BITS for fast knockdown or small water (bird baths, kiddie pools, 7–14 day release).</strong> Most Canadian homeowners buy both: dunks for the rain barrel, bits sprinkled when you find unexpected larvae anywhere else. Available at Canadian Tire, Home Depot Canada, Rona, and Amazon.ca. Mosquito Bits 8-oz container: $15–$22. Bits work within 30 minutes vs dunks taking 4 hours. Both are completely safe for humans, pets, fish, frogs, and pollinators — Health Canada-approved for residential use.
          </p>
        </div>
      </section>

      {/* SIDE-BY-SIDE TABLE */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Bits vs Mosquito Dunks — Direct Comparison</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Mosquito Bits</th>
                  <th className="px-4 py-3 text-left">Mosquito Dunks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Active ingredient', 'BTI', 'BTI (same)'],
                  ['Format', 'Corn-cob granules', 'Donut-shaped tablet'],
                  ['Release speed', 'Fast — 30 minutes', 'Slow — 4 hours start'],
                  ['Duration', '7–14 days per application', '~30 days per dunk'],
                  ['Best for', 'Quick knockdown, small water', 'Long-term water sources'],
                  ['Visibility in water', 'Disperses, less visible', 'Floating tablet visible'],
                  ['Coverage per dose', '500–1000 sq ft (8 oz)', '100 sq ft per dunk'],
                  ['Typical Canada price', '$15–$22 (8 oz)', '$14–$20 (6-pack)'],
                  ['Application method', 'Sprinkle / spread', 'Drop in water'],
                  ['Storage life sealed', '2–3 years', '3+ years'],
                  ['Safe for fish/pets', 'Yes — completely', 'Yes — completely'],
                ].map(([k, bits, dunks]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/4">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{bits}</td>
                    <td className="px-4 py-2 text-gray-700">{dunks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2>How Mosquito Bits Work</h2>
          <p>Mosquito Bits are corn-cob granules coated with BTI (<em>Bacillus thuringiensis</em> subspecies <em>israelensis</em>) — a soil bacterium discovered in 1976 that specifically targets the digestive systems of mosquito and black fly larvae. The corn-cob granules float briefly when sprinkled onto water, then sink as they absorb moisture. As the bits dissolve, they release BTI proteins into the water column where larvae filter-feed.</p>
          <p>BTI is one of the most species-specific insecticides ever developed. It only affects mosquito larvae, black fly larvae, and a few related midge species. Humans, pets, fish, frogs, dragonflies, water beetles, beneficial insects, pollinators, and birds are completely unaffected. Health Canada has approved BTI for residential use, and some provinces approve it for drinking water reservoirs.</p>

          <h2>When to Use Bits Instead of Dunks</h2>
          <ul>
            <li><strong>You found larvae unexpectedly</strong> — wriggling in a saucer, an old bucket, a clogged gutter — sprinkle bits for 30-minute knockdown</li>
            <li><strong>Small water sources</strong> — bird baths, kiddie pools, plant saucers — where a floating dunk tablet would be visually awkward</li>
            <li><strong>Pet water bowls left outside</strong> — sprinkle a tiny pinch (BTI is safe; the bits are essentially corn-cob anyway)</li>
            <li><strong>Drainage trays under outdoor planters</strong></li>
            <li><strong>Tarp-covered boats</strong> with rainwater pooled on top</li>
            <li><strong>Septic tank ventilation pipes</strong> that can hold water</li>
            <li><strong>Storm drain catch basins</strong> on your property</li>
          </ul>

          <h2>When Dunks Are Better</h2>
          <ul>
            <li><strong>Rain barrels</strong> — drop one dunk per 50 gallons, replace monthly</li>
            <li><strong>Decorative ponds with fish</strong> — slow-release lasts the season, fish unaffected</li>
            <li><strong>Neglected swimming pools</strong> with accumulated rainwater</li>
            <li><strong>Drainage ditches</strong> that hold water for weeks</li>
            <li><strong>Tree holes and stump cavities</strong></li>
            <li><strong>Any standing water you can&rsquo;t check on weekly</strong></li>
          </ul>

          <h2>The Smart Approach: Use Both</h2>
          <p>Most Canadian homeowners with mosquito issues end up using BOTH. The dunk goes in the rain barrel for set-and-forget protection — drop it in May, forget about it until June. The bits container sits in the garden shed for emergency use whenever you discover larvae somewhere unexpected.</p>
          <p>For a typical GTA backyard with one rain barrel and a few potential standing-water spots, your annual BTI budget is roughly $30: one 6-pack of dunks ($15) covers the rain barrel for the full May–September season, and one 8-oz container of bits ($15–$22) handles every other standing-water situation that comes up.</p>

          <h2>Bits + Barrier Spray: The Complete Mosquito Strategy</h2>
          <p>BTI bits and dunks solve the LARVAL side of mosquito control — but they only work on water you actually treat. Adult mosquitoes flying in from neighbours&rsquo; yards, ravines, and creeks are unaffected. For complete protection in your GTA backyard:</p>
          <ol>
            <li><strong>BTI bits/dunks</strong> in any standing water on your property ($30/season)</li>
            <li><strong>Habitat modification</strong> — drain anything you can drain, mow short, clear leaf litter</li>
            <li><strong>Professional barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s seasonal program</Link> targets adult mosquitoes flying onto your property, with Health Canada-approved residual formula that lasts 21–30 days per treatment</li>
          </ol>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada — Complete Guide</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Actually Works</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="BTI Handles Larvae · Barrier Spray Handles the Rest" subtext="Get a free quote for whole-yard barrier spray. From $99. Health Canada approved. 30-day residual." variant="dark" />
    </>
  )
}
