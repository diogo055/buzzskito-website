import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'picaridin-vs-deet-canada'
const DATE = '2026-05-01'
const TITLE = 'Picaridin vs DEET Canada 2026 — Which Mosquito Repellent Is Better?'

const FAQS = [
  {
    question: 'Picaridin vs DEET — which works better?',
    answer: 'Both are highly effective. At equivalent concentrations, picaridin (20%) and DEET (20–30%) provide similar 5–8 hour protection from mosquitoes and ticks. Multiple peer-reviewed studies and CDC guidance rank them as equally effective. Practical differences: picaridin is non-greasy, odourless, doesn\'t damage plastics or synthetic fabrics, and is more pleasant to apply. DEET has decades of safety data and slightly better black fly performance. For most Canadian outdoor activities — hiking, camping, evening BBQs, dog-walking — picaridin 20% is the modern go-to. DEET 30% remains the choice for blackfly-heavy cottage country.',
  },
  {
    question: 'Where to buy picaridin in Canada?',
    answer: 'Picaridin-based repellents are widely available in Canada at Canadian Tire, Shoppers Drug Mart, Rexall, MEC, Cabela\'s Canada, Atmosphere, and Amazon.ca. The two most-stocked brands are OFF! Defense Insect Repellent II (20% picaridin lotion or spray, ~$8–$14) and Sawyer Picaridin Insect Repellent (20% lotion, ~$12–$18). Specialty outdoor retailers like MEC and Atmosphere also stock the Natrapel 20% picaridin line. Picaridin is approved by Health Canada under multiple PCP registrations and is sold without restriction.',
  },
  {
    question: 'How much do picaridin and DEET cost in Canada?',
    answer: 'Pricing as of May 2026 across Canadian retailers: 20% picaridin spray (4–6 oz bottle) runs $8–$18; 20% picaridin lotion is similar; 30% DEET spray (any format) is $7–$14. Larger family-size bottles (8–10 oz) of either run $14–$25. Kid-formula picaridin (still 20% — same concentration, just gentler additives) is similar pricing. The price difference is essentially negligible — buy the format you prefer.',
  },
  {
    question: 'Is picaridin safe for kids?',
    answer: 'Yes. Health Canada and the Canadian Paediatric Society approve picaridin 20% for children 6 months and older. For children under 6 months, use physical barriers (mosquito netting on strollers, long sleeves) instead of any chemical repellent. Picaridin is preferred by many parents over DEET because it doesn\'t cause skin reactions in some children, doesn\'t have the strong DEET smell, and won\'t damage plastic toys, sunglasses, or watches that kids touch. Apply once daily — re-apply if heavily sweating or swimming.',
  },
  {
    question: 'Is picaridin safe for pets and dogs?',
    answer: 'Picaridin is safe for occasional incidental contact with dogs (e.g., a dog brushing against a person who has picaridin on their skin). However, do NOT apply picaridin or DEET directly to your dog\'s coat for tick/flea prevention — these are formulated for human use. Dogs need pet-specific tick prevention (oral medications like NexGard or Bravecto, or vet-prescribed topicals). Cats are particularly sensitive — keep cats away from any freshly-applied repellent on humans until it dries (typically 30 minutes). Picaridin is significantly less toxic to cats than permethrin (which is fatal to cats).',
  },
  {
    question: 'Does picaridin work against ticks?',
    answer: 'Yes. Picaridin 20% has been shown in field testing to repel blacklegged ticks (the species that transmits Lyme disease in Ontario) for 8 hours per application — comparable to DEET 30%. For maximum tick protection during Ontario hiking, layer picaridin or DEET on exposed skin PLUS permethrin on clothing. Permethrin actually kills ticks that contact treated fabric, while picaridin/DEET only repel those targeting bare skin. The combination prevents tick bites at multiple stages.',
  },
  {
    question: 'How long does picaridin last vs DEET?',
    answer: 'At 20% concentration, picaridin protects for 5–8 hours from mosquitoes and 8 hours from ticks. DEET 30% protects for 5–7 hours from mosquitoes and 6–8 hours from ticks. DEET 100% protects for 10–12 hours but causes more skin reactions. For most Canadian outdoor activities, 20% picaridin or 30% DEET applied every 6 hours is the sweet spot. Re-apply after swimming, heavy sweating, or rain. Don\'t bother with concentrations above 35% — efficacy plateaus and side effects increase.',
  },
  {
    question: 'Does picaridin damage clothing or sunglasses?',
    answer: 'No — this is one of picaridin\'s major advantages over DEET. Picaridin is safe on synthetic fabrics, plastics, painted surfaces, sunglasses, watches, and electronics. DEET (especially at 30%+) actively dissolves plastics — it can damage sunglass coatings, melt plastic watch straps, ruin synthetic clothing fibres, and damage rubber and silicone (think hiking gear, water bottles, phone cases). Anyone who hikes with high-end gear, takes photos outdoors, or uses prescription glasses should choose picaridin over DEET for that reason alone.',
  },
  {
    question: 'Can I use picaridin and DEET together?',
    answer: 'No reason to. They both work the same way (repelling biting insects via skin scent disruption) and using both doesn\'t increase protection. Pick ONE for skin application. The genuinely effective stacking strategy is: skin repellent (picaridin OR DEET) + clothing treatment (permethrin) + environmental control (BTI dunks for water + professional barrier spray for vegetation + Thermacell for stationary use). Each layer addresses a different vector — using two skin repellents at once just doubles the cost without improving results.',
  },
  {
    question: 'Why are picaridin and DEET still effective if mosquitoes have evolved resistance to insecticides?',
    answer: 'Picaridin and DEET don\'t kill mosquitoes — they REPEL them by interfering with the mosquito\'s ability to detect human scent (specifically, the lactic acid and CO₂ cues mosquitoes use to find blood meals). Resistance to insecticides happens when populations evolve enzymes that break down the chemical — but you can\'t evolve resistance to "I can\'t smell you anymore." Both compounds have been in use since the 1950s (DEET) and 1990s (picaridin) with no documented resistance. They\'re among the most reliable insect repellents in modern use.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Picaridin vs DEET in Canada — which mosquito repellent works better, where to buy in Canada, kid-safe formulas, tick effectiveness, and how to layer with permethrin and barrier spray. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function PicaridinVsDeetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: '2026 head-to-head comparison: picaridin vs DEET in Canada.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Picaridin vs DEET Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Picaridin vs DEET</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Side-by-side comparison of the two most-used mosquito repellents in Canada — efficacy, safety for kids and pets, tick protection, and where to buy each.</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated May 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Picaridin and DEET: Where to Buy in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Both are widely stocked across pharmacies, big-box retailers, and outdoor stores. Pricing is essentially identical — choose based on application preference (greasy vs non-greasy, scent, plastic compatibility).
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Retailer</th>
                  <th className="px-4 py-3 text-left">Picaridin 20%</th>
                  <th className="px-4 py-3 text-left">DEET 30%</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Canadian Tire',     pic: '$9.99 – $16.99',  deet: '$8.99 – $14.99', note: 'Full lineup spring/summer' },
                  { name: 'Shoppers Drug Mart', pic: '$9.99 – $14.99', deet: '$7.99 – $12.99', note: 'Year-round stock' },
                  { name: 'Rexall',           pic: '$10 – $15',       deet: '$8 – $13',       note: 'Year-round' },
                  { name: 'MEC',              pic: '$12 – $18',       deet: '$10 – $14',      note: 'Outdoor focus · Sawyer + Natrapel' },
                  { name: 'Cabela\'s Canada', pic: '$11 – $18',       deet: '$9 – $14',       note: 'Outdoor specialty' },
                  { name: 'Amazon.ca',        pic: '$8 – $19',        deet: '$7 – $14',       note: 'Best pricing on multi-packs' },
                ].map(({ name, pic, deet, note }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{pic}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{deet}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of May 2026. Common Canadian brands: OFF! Defense (DEET + picaridin lines), Sawyer (picaridin), Natrapel (picaridin), Watkins (DEET), Muskol (DEET).
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Skin repellents protect YOU — not your yard.</strong> Picaridin and DEET work for 5–8 hours of active outdoor use. For whole-yard mosquito and tick protection that doesn&rsquo;t require re-applying every few hours, <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> treats vegetation surfaces with 21–30 day residual coverage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Picaridin or DEET — which should I buy?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>For most Canadian outdoor use, choose picaridin 20% — same effectiveness as DEET 30%, non-greasy, odourless, won&rsquo;t damage plastics or synthetic clothing.</strong> Choose DEET 30% specifically for blackfly-heavy cottage country (Muskoka, Algonquin, Haliburton) where DEET has slightly better blackfly performance, or if you already have a stockpile. Both are equally safe for adults and children 6 months and older. Both protect against mosquitoes (5–8 hours) and ticks (8 hours). Picaridin&rsquo;s plastic compatibility makes it the better choice for hikers with quality gear, parents with toy-touching kids, and anyone wearing prescription glasses.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Picaridin vs DEET — Side-by-Side Comparison</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Picaridin 20%</th>
                  <th className="px-4 py-3 text-left">DEET 30%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mosquito protection', '5–8 hours', '5–7 hours'],
                  ['Tick protection', '8 hours', '6–8 hours'],
                  ['Blackfly protection', 'Good', 'Slightly better'],
                  ['Skin feel', 'Non-greasy, dries fast', 'Slightly greasy'],
                  ['Odour', 'Nearly odourless', 'Distinct chemical smell'],
                  ['Plastic / synthetic safety', '✓ Safe', '✗ Damages plastics'],
                  ['Sunglasses safe', '✓ Safe', '✗ Can damage coatings'],
                  ['Synthetic clothing safe', '✓ Safe', '✗ Damages nylon, spandex'],
                  ['Kid-safe (6+ months)', '✓ Approved', '✓ Approved (Health Canada)'],
                  ['Years in market', '~30 (1990s)', '~70 (1950s)'],
                  ['Resistance', 'None documented', 'None documented'],
                  ['Price (4-6 oz bottle)', '$8–$18', '$7–$14'],
                  ['Best for', 'Daily outdoor use, hiking', 'Cottage country blackflies'],
                ].map(([k, pic, deet]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{pic}</td>
                    <td className="px-4 py-2 text-gray-700">{deet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2>What Each Compound Actually Does</h2>
          <p><strong>DEET</strong> (N,N-Diethyl-meta-toluamide) was developed by the US military in 1946 and registered for civilian use in 1957. It works by interfering with mosquitoes&rsquo; olfactory receptors — they essentially can&rsquo;t smell you when DEET is on your skin. Eight decades of human use have produced extensive safety data; rare side effects include skin irritation in sensitive individuals.</p>
          <p><strong>Picaridin</strong> (also called icaridin) was developed in the 1980s and approved by Health Canada in 2010. It works similarly to DEET — disrupting the mosquito&rsquo;s ability to detect human scent compounds (lactic acid, CO₂, octenol). Modern formulations are odourless, non-sticky, and safe on plastics and synthetic fabrics. The World Health Organization recommends picaridin for travel to disease-endemic regions.</p>

          <h2>The Plastic-Damage Problem with DEET</h2>
          <p>If you&rsquo;ve ever applied DEET spray and accidentally got it on your sunglasses, watch, or hiking gear, you may have noticed coatings clouding or plastics turning sticky. DEET is a known plasticizer — it actively breaks down many synthetic materials. Specifically affected:</p>
          <ul>
            <li>Polycarbonate sunglasses (anti-reflective coatings dissolve)</li>
            <li>Nylon hiking pants and shirts</li>
            <li>Spandex/Lycra athletic wear</li>
            <li>Plastic watch straps and silicone bands</li>
            <li>Phone cases (especially TPU)</li>
            <li>Vinyl and PVC (camping gear, raincoats)</li>
            <li>Some painted surfaces (kayaks, gear)</li>
          </ul>
          <p>Picaridin doesn&rsquo;t damage any of these materials. For Ontario hikers with $200 sunglasses or a $400 rain jacket, that alone is reason enough to choose picaridin.</p>

          <h2>The Smart Layered Strategy for Canadian Outdoor Activity</h2>
          <p>Skin repellent alone is rarely the complete answer. The best protection layers multiple tools that each address a different vector:</p>
          <ol>
            <li><strong>Skin: Picaridin 20% or DEET 30%</strong> — apply to exposed skin before going outdoors</li>
            <li><strong>Clothing: <Link href="/blog/permethrin-canada-yard-clothing-spray">Sawyer Permethrin</Link></strong> — pre-treat hiking pants, socks, hat (kills ticks on contact)</li>
            <li><strong>Patio: <Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link></strong> — 4.5m repellent zone around your seating area</li>
            <li><strong>Yard vegetation: <Link href="/mosquito-control">Professional barrier spray</Link></strong> — kills mosquitoes and ticks resting on leaves, 21–30 day residual</li>
            <li><strong>Standing water: <Link href="/blog/mosquito-dunks-canada-guide">BTI dunks</Link></strong> — kills larvae before they become biting adults</li>
          </ol>

          <h2>For Children and Pets — Safety Reminders</h2>
          <p><strong>Children 6 months+:</strong> Both picaridin 20% and DEET 30% are approved by Health Canada and the Canadian Paediatric Society. Apply to your hands first, then rub onto the child&rsquo;s exposed skin (not face — apply to your hands, rub on the back of their neck and ears). Avoid hands and around eyes/mouth.</p>
          <p><strong>Children under 6 months:</strong> No chemical repellents. Use mosquito netting on strollers and physical barriers (long sleeves, lightweight pants).</p>
          <p><strong>Dogs:</strong> Don&rsquo;t apply human repellents directly. Use vet-prescribed oral or topical tick/flea prevention. Picaridin is safer than DEET if accidentally licked, but neither is ideal.</p>
          <p><strong>Cats:</strong> Keep away from freshly-applied repellent on humans until it dries (30 minutes). NEVER apply permethrin near cats — it&rsquo;s fatal to them.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/permethrin-canada-yard-clothing-spray">Permethrin Canada — Clothing Spray Guide</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada Guide</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Complete Ontario Mosquito Repellent Guide 2026</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Actually Works</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Skin Repellent Protects You · Barrier Spray Protects Your Yard" subtext="Get a free quote for licensed barrier spray. From $99. Health Canada approved. 30-day residual." variant="dark" />
    </>
  )
}
