import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'best-tick-repellent-yard-canada'
const DATE = '2026-04-26'
const UPDATED = '2026-07-20'
const TITLE = 'Best Tick Repellent for Yards — Canada 2026'

const FAQS = [
  {
    question: 'What is the best tick repellent for yards in Canada?',
    answer: 'Health Canada-approved professional barrier spray is the most effective tick yard repellent available — applied to leaf litter, lawn-to-woods edges, fence-line vegetation, and shaded perimeters where ticks live. Consumer DIY products (cedar-oil sprays, garlic sprays, granular pesticides from Home Depot) use lower concentrations and are usually broadcast over the lawn rather than placed in the shaded edge habitat ticks actually occupy. The difference is less about the chemistry than about where it lands and how long it persists — and neither approach eliminates ticks from a property, because wildlife keeps carrying new ones in all season.',
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
  title: 'Best Tick Repellent for Yards — Canada 2026',
  description: 'Tick repellent for yard, Canada 2026: how cedar-oil sprays, permethrin granules and professional barrier spray differ, where each works, when to re-apply.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('best-tick-repellent-yard-canada')

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
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Wondercide Cedar-Oil Yard Spray" search="wondercide tick yard spray" label="Best DIY pick" />

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best tick repellent for Ontario yards is a Health Canada-approved professional barrier spray &mdash; it places a residual acaricide directly on the leaf litter and lawn edges where ticks actually live, and stays active on those surfaces for up to 30 days. The best DIY runner-up is a cedar-oil spray like Wondercide, layered over free habitat fixes.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Professional barrier spray stays active on the treated edges for up to 30 days &mdash; about three times longer than the best consumer products, which is the real gap.</li>
              <li>Professional treatment kills adult ticks, nymphs, and larvae on contact, not just adults.</li>
              <li>Permethrin-based granular pesticides carry a synthetic residual down into the lawn and edge zones and hold 4&ndash;6 weeks &mdash; but only where you actually achieved even coverage.</li>
              <li>Cedar-oil sprays like Wondercide repel and kill ticks on contact, but the oil evaporates far faster than a synthetic residual, so they need re-applying every 2 weeks.</li>
              <li>Consumer DIY tick sprays typically last only 1&ndash;14 days.</li>
              <li>A short lawn plus a 3-foot mulch barrier at property edges are free habitat fixes that reduce tick pressure.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
          <p className="not-prose text-sm text-gray-600 mb-1">DIY yard-scale tick products Canadians buy most (nothing replaces a professional barrier spray, but these help):</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="wondercide tick yard spray">Check yard tick sprays on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="sawyer permethrin clothing spray">Sawyer Permethrin (clothing) →</BuyLink>
          </div>
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">Personal tick repellents on your skin protect <em>you</em>. Yard-scale tick repellents protect your <em>property</em> — and that&rsquo;s a different problem with different solutions. Here&rsquo;s what works in Canadian yards in 2026.</p>

          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best DIY Yard Tick Repellents in Canada"
            awards={[
              {
                badge: 'Best Overall DIY',
                name: 'Wondercide Cedar-Oil Yard Spray',
                why: 'The leading natural yard spray. Cedar oil has documented contact repellency against ticks, but it evaporates much faster than a synthetic residual, so it holds only if you re-apply every 2 weeks. The strongest DIY layer to stack on top of the free habitat fixes.',
                search: 'wondercide tick yard spray',
                score: 8.3,
                featured: true,
                pros: ['Real, research-backed cedar-oil repellency', 'Kid- and pet-safe once dry', 'Hose-end coverage of lawn edges'],
                cons: ['Re-apply every 2 weeks', 'Weaker than professional barrier spray'],
              },
              {
                badge: 'Best Granular',
                name: 'Permethrin-Based Granular Pesticide',
                why: 'Granules carry the residual down into the leaf-litter and lawn-edge zones ticks quest from, where a surface spray never lands — the strongest DIY control if you nail even coverage.',
                search: 'permethrin granules yard tick',
                score: 7.6,
                pros: ['Longest-holding residual of the DIY yard options', 'Lasts 4–6 weeks per application', 'Wide retailer availability'],
                cons: ['Hard to spread evenly without gear', 'Synthetic pesticide handling care'],
              },
              {
                badge: 'Best Natural Alternative',
                name: 'Cedarcide Cedar-Oil Yard Spray',
                why: 'The other leading evidence-backed cedar-oil option. Same natural approach as Wondercide with mild-but-real repellency at recommended concentrations — a solid pick if you prefer their formula.',
                search: 'cedarcide tick yard spray',
                score: 7.2,
                pros: ['Natural cedar-oil formula', 'Safe around kids and pets', 'Good for seating-area perimeters'],
                cons: ['Bi-weekly reapplication all season', 'Consumer concentrations run low'],
              },
              {
                badge: 'Best for Personal Wear',
                name: 'Sawyer Permethrin Clothing & Gear Spray',
                why: 'Not a yard treatment — a clothing treatment that kills ticks on contact and lasts weeks per application. The best add-on for anyone working, hiking, or gardening in a tick zone.',
                search: 'sawyer permethrin clothing spray',
                score: 8.0,
                pros: ['Kills ticks on contact with treated fabric', 'Lasts several washes per treatment', 'Ideal for yard-work and trail days'],
                cons: ['Clothing/gear only — not for skin', 'Does not treat the yard itself'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Going fully natural?</strong> The <em>Best Overall DIY</em> Wondercide cedar-oil spray is the strongest layer — plan on bi-weekly application. <strong>Want maximum DIY knockdown?</strong> The <em>Best Granular</em> permethrin option holds the longest residual of the DIY choices, provided you spread it evenly. <strong>Spending real time in the yard or on trails?</strong> Add the <em>Best for Personal Wear</em> Sawyer Permethrin to your clothing. But for placing a longer-lasting residual precisely where ticks actually live, nothing DIY matches <Link href="/tick-control">professional barrier spray</Link>.
              </>
            }
          />

          <h2>The Tier System for Yard Tick Repellent</h2>

          <h3>🟢 Tier 1: Most effective</h3>
          <ul>
            <li><strong>Professional Health Canada-approved barrier spray</strong> — A Health Canada-registered residual acaricide applied to leaf litter, lawn edges, fence lines, and shaded perimeters — the zones ticks quest from. ~seasonal pricing on quote for 5-spray program.</li>
          </ul>

          <h3>🟡 Tier 2: Effective DIY options</h3>
          <ul>
            <li><strong>Permethrin-based granular pesticides</strong> (e.g. Bayer Advanced) — Decent control if applied correctly. The granules carry a synthetic residual into the leaf-litter and edge zones and hold there 4–6 weeks. Requires proper coverage technique.</li>
            <li><strong>Cedar oil sprays</strong> (Wondercide, Cedarcide) — Mild but real repellency at recommended concentrations, though consumer formulas run weaker than the concentrations used in testing. Re-apply every 2 weeks.</li>
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
          <p>Habitat modification works by removing the conditions ticks need rather than by killing them: ticks dry out in short, sun-exposed turf, they overwinter in the leaf litter you rake away, and a dry wood-chip strip is a barrier they will not cross. It costs nothing and uses no pesticide. Its limit is that it only reshapes your own property — ticks keep arriving on deer, mice, and birds regardless.</p>

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
            <li><Link href="/blog/tick-tubes-canada">Tick Tubes in Canada — Do They Actually Work?</Link></li>
            <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026">Ontario Lyme Risk Areas 2026</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Stop the Tick Cycle in Your Yard" subtext="Health Canada-approved tick barrier spray. 5 sprays per season. From $597 standalone, $497 bundled with mosquito." variant="dark" />
    </>
  )
}
