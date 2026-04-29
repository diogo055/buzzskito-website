import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'best-tick-repellent-yard-canada'
const DATE = '2026-04-26'
const TITLE = 'Best Tick Repellent for Yards — Canada 2026'

const FAQS = [
  {
    question: 'What is the best tick repellent for yards in Canada?',
    answer: 'Health Canada-approved professional barrier spray is the most effective tick yard repellent available — applied to leaf litter, lawn-to-woods edges, fence-line vegetation, and shaded perimeters where ticks live. Consumer DIY products (cedar-oil sprays, garlic sprays, granular pesticides from Home Depot) provide partial control but at lower concentrations and without targeted application to the specific micro-habitats ticks occupy. Professional yard tick spray reduces tick populations by 80–95% compared to 20–40% for typical DIY products.',
  },
  {
    question: 'Does cedar oil really repel ticks?',
    answer: 'Cedar oil has mild tick-repellent properties — research has confirmed this in lab settings. However, the concentrations and application volumes needed for meaningful yard-level control are higher than most consumer products provide. Cedar mulch around outdoor seating areas provides some passive repellency. Cedar-oil-based sprays (Wondercide, Cedarcide) work but typically need re-application every 2–4 weeks to maintain effectiveness.',
  },
  {
    question: 'What about diatomaceous earth for ticks?',
    answer: 'Food-grade diatomaceous earth (DE) kills ticks by physical desiccation when they walk through it. It works in dry conditions but loses effectiveness when wet — meaning it won\'t survive a single rainstorm. For yards, DE is impractical: re-application after every rain isn\'t feasible, and ticks live in the moist leaf-litter zone where DE works least well. Skip it for yard-scale tick control.',
  },
  {
    question: 'Are there natural tick repellents that actually work?',
    answer: 'For yard-scale tick control, the most-effective natural options are: cedar oil (Wondercide, Cedarcide), and proper habitat modification (short grass, leaf litter removal, 3-foot wood chip barrier between lawn and woods). Natural sprays for personal use include oil of lemon eucalyptus (OLE) and 2-undecanone (BioUD). For population-level yard control, professional Health Canada-approved spray is dramatically more effective than any natural option.',
  },
  {
    question: 'How often should I treat my yard for ticks?',
    answer: 'Professional yard tick spray should be applied every 30 days through the active season (May–September in Ontario). BuzzSkito\'s 5-spray season program covers this exact window. DIY natural tick sprays (cedar oil-based) typically need re-application every 14 days. Granular pesticides last 4–6 weeks per application but require even-coverage application that\'s difficult to achieve without proper equipment.',
  },
  {
    question: 'What\'s the cheapest way to get rid of ticks in my yard?',
    answer: 'In order of cost-effectiveness: (1) FREE — habitat modification (mow short, remove leaf litter, create 3-ft mulch barrier between lawn and woods). (2) $15–$30 — cedar mulch in seating areas. (3) $50/year — DIY cedar oil or permethrin-based sprays from Home Depot. (4) seasonal pricing on quote — BuzzSkito professional 5-spray season program (most effective). For yards in active Lyme zones, the professional option is cheap insurance against a $5,000+ Lyme disease treatment.',
  },
  {
    question: 'Are tick yard sprays safe for kids and pets?',
    answer: 'Health Canada-approved professional tick spray is safe for kids and pets 30 minutes after drying. The product bonds to leaf surfaces and lawn edges where ticks rest — not to grass blades where children play. BuzzSkito uses pyrethrin-based formulations approved for residential lawn use. Cedar oil and natural alternatives are also safe but provide weaker control. Granular pesticides from Home Depot can be safe but require strict adherence to label instructions and timing.',
  },
  {
    question: 'When is the best time to start tick treatment?',
    answer: 'In Ontario, start tick treatment in early May to catch emerging nymphs (the highest Lyme-disease-risk life stage). Continue every 30 days through September. Some homeowners with pets or children who do significant yard activity start in late April. Spring nymph activity is the most important window — adult ticks in late summer/fall are easier to spot but transmit Lyme just as effectively.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Best Tick Repellent for Yards · Canada 2026 Guide',
  description: 'Best tick repellents for Canadian yards. Cedar oil, professional barrier spray, DIY options compared. What works for Ontario tick control.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function BestTickRepellentYardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Best tick repellents for Canadian yards in 2026.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Tick Repellent for Yards', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Tick Repellent for Yards</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">An evidence-based 2026 buyer&rsquo;s guide for Canadian homeowners. What actually controls ticks at the yard level — cedar oil, professional barrier spray, granular pesticides, and what to skip.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">Personal tick repellents on your skin protect <em>you</em>. Yard-scale tick repellents protect your <em>property</em> — and that&rsquo;s a different problem with different solutions. Here&rsquo;s what works in Canadian yards in 2026.</p>

          <h2>The Tier System for Yard Tick Repellent</h2>

          <h3>🟢 Tier 1: Most effective</h3>
          <ul>
            <li><strong>Professional Health Canada-approved barrier spray</strong> — Applied to leaf litter, lawn edges, fence lines, and shaded perimeters. 80–95% population reduction. ~seasonal pricing on quote for 5-spray program.</li>
          </ul>

          <h3>🟡 Tier 2: Effective DIY options</h3>
          <ul>
            <li><strong>Permethrin-based granular pesticides</strong> (e.g. Bayer Advanced) — Decent control if applied correctly. 60–75% reduction. Requires proper coverage technique.</li>
            <li><strong>Cedar oil sprays</strong> (Wondercide, Cedarcide) — Mild but real repellency. 40–60% reduction at recommended concentrations. Re-apply every 2 weeks.</li>
          </ul>

          <h3>🟠 Tier 3: Habitat modification (FREE and important)</h3>
          <ul>
            <li>Keep grass under 4 inches</li>
            <li>Clear leaf litter from lawn edges</li>
            <li>Create a 3-foot wood-chip or gravel barrier between lawn and any wooded area</li>
            <li>Trim shrubs and remove brush piles</li>
            <li>Discourage deer access (they&rsquo;re the primary tick host)</li>
          </ul>

          <h3>🔴 Tier 4: Don&rsquo;t bother</h3>
          <ul>
            <li><strong>Diatomaceous earth (DE)</strong> — Works in dry conditions only. Useless after rain.</li>
            <li><strong>Garlic spray</strong> — Marketing claims dramatically exceed evidence. Some short-term effect at impractical volumes.</li>
            <li><strong>Sulfur granules</strong> — Old folk remedy. Minimal scientific support.</li>
            <li><strong>Tick-repellent plants alone</strong> — Beebalm, lavender, etc. provide minimal area protection.</li>
            <li><strong>Ultrasonic tick repellers</strong> — Zero evidence.</li>
          </ul>

          <h2>The Cedar Oil Question</h2>
          <p>Cedar oil works — peer-reviewed research has confirmed it has tick-repellent and tick-killing properties. But the gap between &ldquo;works in lab&rdquo; and &ldquo;works in your yard&rdquo; is large:</p>
          <ul>
            <li><strong>Concentration matters.</strong> Lab studies use 5–10% cedar oil. Many consumer sprays are 1–2%.</li>
            <li><strong>Coverage matters.</strong> Ticks live in leaf litter and at lawn edges. Most homeowners spray surface-level lawn areas missing the actual habitat zones.</li>
            <li><strong>Persistence matters.</strong> Cedar oil evaporates faster than synthetic pesticides. Reapply every 2 weeks vs every 4 for professional sprays.</li>
          </ul>
          <p>If you want to go natural, Wondercide and Cedarcide are the leading evidence-backed cedar oil options for yards. Plan on bi-weekly application all season. For most Ontario yards, this works out to similar cost as professional barrier spray with weaker results.</p>

          <h2>The Habitat Modification That Costs Nothing</h2>
          <p>Before spending money on any repellent, do these for free:</p>
          <ol>
            <li><strong>Mow grass to 3–4 inches</strong> and keep it that height. Tall grass is tick highway.</li>
            <li><strong>Rake and remove leaf litter</strong> from lawn perimeters every spring and fall. This is where ticks overwinter.</li>
            <li><strong>Create a 3-foot wood chip or gravel barrier</strong> between your lawn and any wooded area, ravine edge, or tall grass. Ticks don&rsquo;t cross dry, sun-exposed barriers.</li>
            <li><strong>Trim shrubs</strong> 12 inches off the ground around outdoor seating.</li>
            <li><strong>Stack firewood off the ground and away from the house.</strong> Mice live in woodpiles. Ticks ride on mice.</li>
            <li><strong>Discourage deer.</strong> Deer fences, deer-resistant landscaping, no deer corn.</li>
          </ol>
          <p>Studies in tick-endemic areas (CT, NY, ON) show that habitat modification alone reduces yard tick populations by 30–60% with zero pesticide use.</p>

          <h2>The Professional Option (Why Most Ontario Homeowners End Up Here)</h2>
          <p>For Ontario homeowners in confirmed Lyme zones (Oak Ridges Moraine, Rouge Park, Bronte Creek, Dundas Valley, Niagara), professional barrier spray is the most effective and most cost-efficient option:</p>
          <ul>
            <li><strong>Targeted application.</strong> Sprayed where ticks actually live — leaf litter, lawn-to-woods edges, fence lines, shrub interiors. Not just on top of the grass.</li>
            <li><strong>Health Canada-registered formula.</strong> Pyrethrin-based, residential-approved, kid- and pet-safe after 30-minute dry.</li>
            <li><strong>5-treatment season covers all life stages.</strong> Spring nymphs (highest Lyme risk), summer adults, fall larvae.</li>
            <li><strong>Re-treatment guarantee.</strong> If ticks return inside the protection window, BuzzSkito retreats at no cost.</li>
            <li><strong>Bundle savings.</strong> $597 standalone or tick add-on bundle available on quote (save $100).</li>
          </ul>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/tick-prevention-yard-ontario-safe-for-kids">Tick Prevention in Your Yard — Safe for Kids</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/best-tick-control-yard-treatment">Best Tick Control Yard Treatment</Link></li>
            <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026">Ontario Lyme Risk Areas 2026</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Stop the Tick Cycle in Your Yard" subtext="Health Canada-approved tick barrier spray. 5 sprays per season. From $597 standalone, $497 bundled with mosquito." variant="dark" />
    </>
  )
}
