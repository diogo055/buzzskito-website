import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'
import { PROMISES } from '@/lib/constants'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'
import { shareImage } from '@/lib/photos'

const SLUG = 'best-tick-repellent-yard-canada'
const DATE = '2026-04-26'
const UPDATED = '2026-10-28'
const TITLE = 'Best Tick Repellent for Yards — Canada 2026'

const FAQS = [
  {
    question: 'What is the best tick repellent for yards in Canada?',
    answer: 'Professional barrier spray is the most targeted yard tick treatment available — a residual acaricide applied, according to label directions, to leaf litter, lawn-to-woods edges, fence-line vegetation, and shaded perimeters where ticks live. Consumer DIY products (registered hose-end and trigger sprays and a garlic repellent; cedar-oil sprays and granules are not registered in Canada) use lower concentrations and are usually broadcast over the lawn rather than placed in the shaded edge habitat ticks actually occupy. The difference is less about the chemistry than about where it lands and how long it persists — and neither approach eliminates ticks from a property, because wildlife keeps carrying new ones in all season.',
  },
  {
    question: 'Does cedar oil really repel ticks?',
    answer: 'In the lab, yes, briefly. A USDA study found cedarwood oil repelled blacklegged tick nymphs strongly for the first hour, with the effect decreasing over time; on skin, a CDC study of 11 minimum-risk tick repellents, most of them with cedarwood oil, measured 86% repellency at half an hour and 2% at two and a half hours. We found no published field trial showing a cedar-oil spray lowering ticks in a yard. In Canada no cedar-oil pesticide is registered (Health Canada’s registry, October 2026), and Cedarcide’s own directions for its US yard spray are twice, two weeks apart, then monthly.',
  },
  {
    question: 'What about diatomaceous earth for ticks?',
    answer: 'Food-grade diatomaceous earth (DE) kills ticks by physical desiccation when they walk through it. It works in dry conditions but loses effectiveness when wet — meaning it won\'t survive a single rainstorm. For yards, DE is impractical: re-application after every rain isn\'t feasible, and ticks live in the moist leaf-litter zone where DE works least well. Skip it for yard-scale tick control.',
  },
  {
    question: 'Are there natural tick repellents that actually work?',
    answer: 'For the yard, the natural steps with evidence are habitat changes: mow often, clear leaf litter, and lay a wood chip, mulch or gravel border at least 1 metre wide between the lawn and the woods (Public Health Agency of Canada). One natural yard repellent is registered in Canada for ticks, garlic juice (Mosquito Barrier, PCP 32049); in a Connecticut field trial a garlic-juice product gave 37–59% control of nymphs for 6 to 18 days. Cedar oil (Wondercide, Cedarcide) has no Canadian registration. For skin, oil of lemon eucalyptus repellents such as Tick Attack (PCP 34641) are registered here; 2-undecanone (BioUD) is not. For population-level yard control, professional barrier spray holds a longer residual than any natural option.',
  },
  {
    question: 'How often should I treat my yard for ticks?',
    answer: 'Professional yard tick spray should be applied every 30 days through the active season (May–September in Ontario). BuzzSkito\'s 5-spray season program covers this exact window. For a do-it-yourself spray, the label of a registered product sets the interval; the Connecticut Agricultural Experiment Station notes that pyrethrin-and-soap products have little residual activity and may need at least two applications. No home-use granular tick product is registered in Canada (Health Canada’s registry, October 2026).',
  },
  {
    question: 'What\'s the cheapest way to get rid of ticks in my yard?',
    answer: 'In order of cost-effectiveness: (1) FREE — habitat modification (mow short, remove leaf litter, create 3-ft mulch barrier between lawn and woods). (2) $15–$30 — cedar mulch in seating areas. (3) $50/year — a DIY tick spray with a Canadian PCP number, such as a permethrin yard spray. (4) $597 a season, or $497 when added to a mosquito plan — BuzzSkito professional 5-spray season program. For yards in active Lyme risk areas, it is the option that treats the edge habitat most thoroughly.',
  },
  {
    question: 'Are tick yard sprays safe for kids and pets?',
    answer: 'Follow the product label: it sets the re-entry rules, and for professional tick spray that means keeping kids and pets off treated areas until the spray has dried. The product is aimed at the leaf litter and lawn edges where ticks rest, rather than broadcast over the open lawn where children play. BuzzSkito uses pyrethrin-based formulations labelled for residential lawn use and applies them according to label directions. Natural alternatives such as the registered garlic repellent carry their own label directions and provide weaker control. No home-use granular tick product is registered in Canada (Health Canada’s registry, October 2026).',
  },
  {
    question: 'When is the best time to start tick treatment?',
    answer: 'In Ontario, start tick treatment in early May to catch emerging nymphs (the highest Lyme-disease-risk life stage). Continue every 30 days through September. Some homeowners with pets or children who do significant yard activity start in late April. Spring nymph activity is the most important window — adult ticks in late summer/fall are easier to spot but transmit Lyme just as effectively.',
  },
  {
    question: 'Can you buy Cedarcide granules in Canada?',
    answer: 'Not as a registered pest control product. Cedarcide’s granules are cedar chips that the maker says only repel bugs and do not kill them, and the third-party testing it lists covers fleas, ants, mosquitoes, mites and chiggers, not ticks. No cedar product is registered in Canada, and Health Canada says online purchases of unregistered pesticides and their shipment to Canada are not permitted. Cedarcide’s own shipping policy warns Canadian customers about border duties and says refused Canadian orders are not refunded. For ticks, choose a product with a Canadian PCP number.',
  },
  {
    question: 'Are granular insecticides more effective than sprays for tick control?',
    answer: 'Usually not. The Connecticut Agricultural Experiment Station’s tick management handbook says both liquid and granular formulations work against blacklegged ticks, with somewhat better control usually obtained with liquids, and that a homeowner spreading granules with a fertilizer spreader may not be able to treat woodland margins effectively. Granules also have to be watered in. In Canada the choice is made for you: no home-use granular product with ticks on its label is registered (Health Canada’s registry, October 2026), so a do-it-yourself treatment here is a registered liquid or a permethrin tick tube.',
  },
  {
    question: 'Is there a tick spray for yards in Canada?',
    answer: 'Yes. Health Canada’s registry (October 2026) lists home-use yard products with ticks on the label, including Doktor Doom Tick Killer Plus+ For Yards and Buildings (PCP 34405), a permethrin spray for outdoor activity areas and ornamentals, and Safer’s Trounce Hose-End Lawn & Turf Insecticide (PCP 28680), pyrethrins with insecticidal soap for lawns and turf, plus a garlic-juice repellent, Mosquito Barrier (PCP 32049). Spray the shaded edge where the lawn meets woods or tall grass, follow the label on timing and re-entry, and check your province’s rules.',
  },
]

export const metadata: Metadata = buildMetadata({
  // TITLE NOTE (Oct 28, 2026): was 'Best Tick Repellent for Yards — Canada 2026'; top queries (Jul 28-Oct 25): are granule insecticides actually more effective than sprays for outdoor tick control? 47 (pos 8.3), cedarcide granules canada 42 (7.9, 2 clicks), cedarcide canada where to buy 5 (1 click), is there a tick spray for yards 5 (1 click). 'tick control for yards' stays with /blog/best-tick-control-yard-treatment.
  title: 'Yard Tick Repellent Canada: Cedarcide & Sprays',
  description: 'Yard tick repellent in Canada: Cedarcide granules and cedar sprays are not registered here. The registered sprays, granules vs spray, and the habitat fixes.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
  image: shareImage('blacklegged-tick-adult-nymph-fingertip'),
})

const AMZ_TAG = tagForSlug('best-tick-repellent-yard-canada')

export default function BestTickRepellentYardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Best tick repellents for Canadian yards in 2026.', slug: SLUG, datePublished: DATE, dateModified: UPDATED, image: shareImage('blacklegged-tick-adult-nymph-fingertip') })) }} />
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
          <p className="text-xl text-brand-100 max-w-3xl"><strong className="text-white">Short answer:</strong> in Canada the yard products registered against ticks are mostly sprays with a PCP number, such as Doktor Doom Tick Killer Plus+ (PCP 34405) and Safer&rsquo;s Trounce hose-end (PCP 28680). Cedarcide granules and cedar-oil sprays, including the Wondercide pick below, have no Health Canada registration, so read the section on them before you order. Pair any spray with the free habitat work at the lawn edge; a professional barrier spray treats that edge most thoroughly.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Wondercide Cedar-Oil Yard Spray" search="wondercide tick yard spray" label="Best DIY pick" />
      <TopBox tag={AMZ_TAG} name="Wondercide Cedar-Oil Yard Spray" search="wondercide tick yard spray" label="Best DIY pick" />

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best tick repellent for Ontario yards is a professional barrier spray &mdash; it places a residual acaricide, applied according to label directions, directly on the leaf litter and lawn edges where ticks actually live, and is re-applied through the season as the residual wears off. The best DIY runner-up is a cedar-oil spray like Wondercide, layered over free habitat fixes.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Professional barrier spray holds a longer residual on the treated edges than consumer tick sprays, which are typically labelled for re-application after days &mdash; that is the real gap.</li>
              <li>Professional treatment kills adult ticks, nymphs, and larvae on contact, not just adults.</li>
              <li>No permethrin granules, and no home-use granular product with ticks on its label, are registered in Canada (Health Canada&rsquo;s registry, October 2026); the registered home options are sprays and permethrin tick tubes.</li>
              <li>Cedar-oil sprays like Wondercide have no Canadian registration; in lab tests cedarwood oil repels tick nymphs, but the effect fades within hours.</li>
              <li>Pyrethrin-and-soap sprays have little residual activity and may need at least two applications (Connecticut Agricultural Experiment Station).</li>
              <li>A short lawn plus a 3-foot mulch barrier at property edges are free habitat fixes that reduce tick pressure.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
          <p className="not-prose text-sm text-gray-600 mb-1">What Canadians buy most for yard-scale tick pressure, plus the personal-wear layer (nothing replaces a professional barrier spray, but these help):</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="wondercide tick yard spray">Check yard tick sprays on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="insect shield permethrin treated clothing">Insect Shield permethrin-treated clothing →</BuyLink>
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
                pros: ['Real, research-backed cedar-oil repellency', 'Follow the label on when kids and pets can return', 'Hose-end coverage of lawn edges'],
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
                name: 'Insect Shield Permethrin-Treated Clothing',
                why: 'Not a yard treatment — factory-treated garments that kill ticks on contact with the fabric. In Canada this is the route to take: Health Canada does not approve permethrin liquids and sprays for consumers to treat their own clothing, so buy the treatment already in the garment rather than applying it yourself. The best add-on for anyone working, hiking, or gardening in a tick zone.',
                search: 'insect shield permethrin treated clothing',
                score: 8.0,
                pros: ['Kills ticks on contact with the treated fabric', 'Factory treatment lasts up to 70 wash cycles', 'Nothing to mix, spray, or re-apply yourself'],
                cons: ['Clothing only — not a skin repellent', 'Does not treat the yard itself'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Going fully natural?</strong> The <em>Best Overall DIY</em> Wondercide cedar-oil spray is the strongest layer — plan on bi-weekly application. <strong>Want maximum DIY knockdown?</strong> The <em>Best Granular</em> permethrin option holds the longest residual of the DIY choices, provided you spread it evenly. <strong>Spending real time in the yard or on trails?</strong> Add the <em>Best for Personal Wear</em> factory permethrin-treated Insect Shield clothing &mdash; Health Canada doesn&rsquo;t approve permethrin sprays for consumers to treat their own clothing, so in Canada buy the treatment already in the garment. But for placing a longer-lasting residual precisely where ticks actually live, nothing DIY matches <Link href="/tick-control">professional barrier spray</Link>.
              </>
            }
          />

          <h2>Cedarcide Granules and Cedar Sprays in Canada</h2>
          <p>Cedarcide&rsquo;s granules are cedar wood. The maker lists the active ingredient as &ldquo;Cedar Chips (100%)&rdquo;, says &ldquo;the granules only repel bugs, they do not kill them&rdquo;, lists third-party testing for fleas, ants, mosquitoes, mites and chiggers (ticks are not on that list) and says to reapply every 4&ndash;6 weeks. In the United States, Cedarcide sells its products as EPA &ldquo;minimum risk&rdquo; pesticides, a class the EPA exempts from registration and generally does not review.</p>
          <p>In Canada, no pesticide with cedar oil or cedar as its active ingredient is registered, and neither Cedarcide nor Wondercide appears in Health Canada&rsquo;s registry (October 2026). Health Canada says &ldquo;Online purchases of unregistered pesticides and their shipment to Canada are not permitted&rdquo;, and Cedarcide&rsquo;s own shipping policy warns Canadian customers about border duties and says refused Canadian orders are not refunded. The products that are registered here for ticks in a yard are in the table below.</p>
          <Photo id="blacklegged-tick-adult-nymph-fingertip" alt="Blacklegged tick adult female and a much smaller nymph on a person's index finger" caption="A blacklegged tick, adult female (left) and nymph (right), on a person’s index finger (CDC photograph). Nymphs are the stage this page says matters most in spring, when they emerge." />

          <QuickIdTable
            title="Yard tick products in Canada, on the record"
            head={['Product', 'What it is', 'Canadian status', 'Limits']}
            rows={[
              ['Permethrin yard spray', 'A synthetic insecticide and acaricide, applied by trigger or hose', 'Registered for home use: Doktor Doom Tick Killer Plus+ For Yards and Buildings (PCP 34405) and II (PCP 34673), ticks on the label', 'Sites are outdoor activity areas and ornamentals; the label sets where and how often'],
              ['Pyrethrins and soap, hose-end', 'A short-lived botanical insecticide with insecticidal soap', 'Registered: Safer’s Trounce Hose-End Lawn & Turf Insecticide (PCP 28680), lawns and turf, ticks on the label', 'Connecticut’s tick handbook: little residual activity; at least two applications may be needed'],
              ['Garlic juice repellent', 'A repellent for yards, grassy areas and under decks and porches', 'Registered: Mosquito Barrier Hose End Sprayer (PCP 32049), mosquitoes and ticks', 'In a Connecticut field trial a garlic-juice product controlled 37–59% of nymphs for 6 to 18 days'],
              ['Cedar-oil spray (Wondercide, Cedarcide)', 'US minimum-risk products made with cedarwood oil', 'Not registered: no cedar-oil pesticide is registered in Canada', 'Lab repellency fades within hours; no published yard field trial found'],
              ['Cedarcide cedar granules', 'Cedar chips (100%), sold to repel', 'Not registered in Canada', 'The maker says they repel but do not kill, and lists no tick testing'],
              ['Permethrin or other tick granules', 'Granules spread on the lawn and watered in', 'None for home use: no permethrin granules, and no home-use granular product with ticks on its label', 'Connecticut’s handbook: liquids usually give somewhat better control than granules'],
              ['Treated clothing', 'Permethrin built into the fabric by the manufacturer', 'Registered: No Fly Zone (PCP 32757); consumer permethrin sprays for clothing are not approved', 'Public Health Agency of Canada: for people over 16, and it does not give complete protection'],
              ['Professional barrier spray', 'Commercial products applied by a licensed exterminator', 'Ontario’s cosmetic ban allows the control of ticks on a lawn by a licensed structural exterminator', 'CDC: pesticides can reduce ticks in treated areas, but do not rely on spraying to reduce your risk of infection'],
            ]}
            caption={<>Sources: Health Canada&rsquo;s pesticide product registry (export with registrations to October 1, 2026); Cedarcide&rsquo;s <a href="https://cedarcide.com/products/cedar-granules" target="_blank" rel="noopener noreferrer" className="underline">cedar granules</a> and <a href="https://cedarcide.com/pages/shipping-policy" target="_blank" rel="noopener noreferrer" className="underline">shipping policy</a> pages; the EPA&rsquo;s <a href="https://www.epa.gov/minimum-risk-pesticides" target="_blank" rel="noopener noreferrer" className="underline">minimum risk pesticides</a> page; Health Canada, <a href="https://www.canada.ca/en/health-canada/services/publications/product-safety/importing-pesticides-personal-use.html" target="_blank" rel="noopener noreferrer" className="underline">importing pesticides for personal use</a>; Connecticut Agricultural Experiment Station, <a href="https://portal.ct.gov/-/media/caes/documents/publications/bulletins/b1010pdf" target="_blank" rel="noopener noreferrer" className="underline">Tick Management Handbook</a> (2007); Public Health Agency of Canada, <a href="https://www.canada.ca/en/public-health/services/publications/diseases-conditions/permethrin-treated-clothing.html" target="_blank" rel="noopener noreferrer" className="underline">permethrin-treated clothing</a>; Ontario&rsquo;s <a href="https://www.ontario.ca/page/guide-pesticide-classes" target="_blank" rel="noopener noreferrer" className="underline">guide to pesticide classes</a>; CDC, <a href="https://www.cdc.gov/ticks/prevention/index.html" target="_blank" rel="noopener noreferrer" className="underline">preventing tick bites</a>. Read October 28, 2026.</>}
          />

          <h2>Which Yard Tick Option for Your Situation</h2>
          <ul>
            <li><strong>You came looking for Cedarcide granules:</strong> they are cedar chips sold to repel, with no Canadian registration; the registered choices are in the table above.</li>
            <li><strong>Children play where the lawn meets the woods:</strong> that edge is where the ticks are. The Connecticut handbook found 82% of the ticks in a lawn within 3 yards of its edge, so clear and treat that strip first.</li>
            <li><strong>You want a natural option:</strong> habitat work plus the registered garlic repellent (PCP 32049), accepting shorter-lived results.</li>
            <li><strong>You want a do-it-yourself pesticide:</strong> a registered permethrin yard spray or a pyrethrin-and-soap hose-end product, used exactly as the label says.</li>
            <li><strong>You hike, garden or work in tick country:</strong> factory-treated clothing with a PCP number, such as No Fly Zone (PCP 32757), plus a registered skin repellent.</li>
            <li><strong>Your yard backs onto a confirmed Lyme risk area:</strong> a professional barrier spray at the edge, plus the free habitat steps below.</li>
          </ul>

          <h2>The Tier System for Yard Tick Repellent</h2>

          <h3>🟢 Tier 1: Most effective</h3>
          <ul>
            <li><strong>Professional barrier spray</strong> — A residual acaricide applied according to label directions to leaf litter, lawn edges, fence lines, and shaded perimeters — the zones ticks quest from. $597 for the 5-spray season, or $497 added to a mosquito plan.</li>
          </ul>

          <h3>🟡 Tier 2: Effective DIY options</h3>
          <ul>
            <li><strong>Permethrin-based yard sprays</strong> — registered for home use in Canada, for example Doktor Doom Tick Killer Plus+ For Yards and Buildings (PCP 34405). No permethrin granules, and no home-use granular tick product, are registered here. Requires proper coverage of the edge zones.</li>
            <li><strong>Cedar oil sprays</strong> (Wondercide, Cedarcide) — repellency in lab tests that fades within hours, no published yard field trial found, and no Canadian registration. Cedarcide&rsquo;s own directions: twice, two weeks apart, then monthly.</li>
          </ul>

          <h3>🟠 Tier 3: Habitat modification (FREE and important)</h3>
          <ul>
            <li>Mow often and keep the grass short</li>
            <li>Clear leaf litter from lawn edges</li>
            <li>Create a 3-foot wood-chip or gravel barrier between lawn and any wooded area</li>
            <li>Trim shrubs and remove brush piles</li>
            <li>Discourage deer access (they&rsquo;re the primary tick host)</li>
          </ul>

          <h3>🔴 Tier 4: Don&rsquo;t bother</h3>
          <ul>
            <li><strong>Diatomaceous earth (DE)</strong> — Works in dry conditions only. Useless after rain.</li>
            <li><strong>Garlic spray</strong> — a garlic-juice repellent with ticks on its label is registered in Canada (Mosquito Barrier, PCP 32049), but in a Connecticut field trial a garlic-juice product controlled only 37&ndash;59% of nymphs, for 6 to 18 days.</li>
            <li><strong>Sulfur granules</strong> — Old folk remedy. Minimal scientific support.</li>
            <li><strong>Tick-repellent plants alone</strong> — Beebalm, lavender, etc. provide minimal area protection.</li>
            <li><strong>Ultrasonic tick repellers</strong> — Zero evidence.</li>
          </ul>

          <NextUp path="/blog/best-tick-repellent-yard-canada" />
          <h2>The Cedar Oil Question</h2>
          <p>Cedar oil repels ticks in the lab: a USDA study found cedarwood oil repelled blacklegged tick nymphs, an effect that decreased with time, and cedrol, a compound found in the oil, killed nymphs in another lab test. But the gap between &ldquo;works in lab&rdquo; and &ldquo;works in your yard&rdquo; is large:</p>
          <ul>
            <li><strong>Concentration is not the whole story.</strong> Lab studies dose cedarwood oil per square centimetre, not by percent, and a CDC study of 11 minimum-risk tick repellents found no sign that the products with more active ingredient worked better.</li>
            <li><strong>Coverage matters.</strong> Ticks live in leaf litter and at lawn edges. Most homeowners spray surface-level lawn areas missing the actual habitat zones.</li>
            <li><strong>Persistence matters.</strong> On skin, those 11 repellents fell from 86% repellency at half an hour to 2% at two and a half hours. Cedarcide&rsquo;s own yard directions are twice, two weeks apart, then monthly.</li>
          </ul>
          <p>For a Canadian yard there is a further problem: neither Wondercide nor Cedarcide is registered here, and Health Canada says online purchases of unregistered pesticides and their shipment to Canada are not permitted. The natural route in Canada is habitat work plus the registered garlic repellent, accepting shorter-lived results.</p>

          <h2>The Habitat Modification That Costs Nothing</h2>
          <p>Before spending money on any repellent, do these for free:</p>
          <ol>
            <li><strong>Mow often</strong> and keep the grass short. Tall grass is tick highway.</li>
            <li><strong>Rake and remove leaf litter</strong> from lawn perimeters every spring and fall. This is where ticks overwinter.</li>
            <li><strong>Create a wood chip, mulch or gravel border at least 1 metre (about 3 ft) wide</strong> between your lawn and any wooded area, ravine edge, or tall grass. A dry strip cuts the number of ticks that reach the lawn; it does not stop them all.</li>
            <li><strong>Trim shrubs</strong> 12 inches off the ground around outdoor seating.</li>
            <li><strong>Stack firewood off the ground and away from the house.</strong> Mice live in woodpiles. Ticks ride on mice.</li>
            <li><strong>Discourage deer.</strong> Deer fences, deer-resistant landscaping, no deer corn.</li>
          </ol>
          <p>Habitat modification works by removing the conditions ticks need rather than by killing them: ticks dry out in short, sun-exposed turf, they overwinter in the leaf litter you rake away, and a dry wood-chip strip cuts how many of them reach the lawn. It costs nothing and uses no pesticide. Its limit is that it only reshapes your own property — ticks keep arriving on deer, mice, and birds regardless.</p>
          <Photo id="white-footed-mouse-leaf-litter" alt="White-footed mouse with large dark eyes sitting among dry fallen leaves" caption="A white-footed mouse, Peromyscus leucopus, in leaf litter (Nineveh, Indiana). Leaf litter at the lawn edge is where ticks shelter, and mice are one of the animals that keep carrying them in." />

          <p>Mowing height and shrub trimming both work for the same physical reason: a tick cannot fly or jump, so it can only wait wherever it managed to climb, and that is usually no more than 30&ndash;50 cm off the ground. <Link href="/blog/do-ticks-fly-or-jump" className="text-brand-700 underline">Do ticks fly or jump? How high they actually climb</Link> sets out the heights involved.</p>

          <h2>Yard Tick Product Buyer&rsquo;s Checklist</h2>
          <ol>
            <li><strong>A Canadian PCP number on the label.</strong> Health Canada: &ldquo;It&rsquo;s a violation of the Pest Control Products Act to buy and use unregistered pesticides.&rdquo;</li>
            <li><strong>Ticks in the pest list,</strong> not just mosquitoes or ants.</li>
            <li><strong>Sites of use that match your yard:</strong> lawns and turf (Safer&rsquo;s Trounce) or outdoor activity areas and ornamentals (Doktor Doom Tick Killer Plus+).</li>
            <li><strong>A Canadian seller.</strong> Health Canada says online purchases of unregistered pesticides and their shipment to Canada are not permitted.</li>
            <li><strong>A plan for the edge,</strong> where the lawn meets woods, brush or a stone wall, because that is where the ticks are.</li>
            <li><strong>The label&rsquo;s re-application interval,</strong> not a blog&rsquo;s.</li>
            <li><strong>Re-entry:</strong> keep kids and pets off treated areas until the spray has dried, and follow the label.</li>
            <li><strong>Your province&rsquo;s rules.</strong> Ontario lets homeowners use pesticides to protect health or safety from pests such as ticks that bite pets; other provinces differ.</li>
          </ol>

          <h2>The Professional Option (Why Most Ontario Homeowners End Up Here)</h2>
          <p>For Ontario homeowners in confirmed Lyme zones (Oak Ridges Moraine, Rouge Park, Bronte Creek, Dundas Valley, Niagara), professional barrier spray is usually the most practical option:</p>
          <p>The Oak Ridges Moraine end of that list is the one that surprises people, because it runs through ordinary subdivisions rather than parkland &mdash; see <Link href="/blog/tick-control-richmond-hill-markham" className="text-brand-700 underline">tick control in Richmond Hill and Markham</Link> for how the moraine and the Rouge corridor shape what a York Region yard needs.</p>
          <ul>
            <li><strong>Targeted application.</strong> Sprayed where ticks actually live — leaf litter, lawn-to-woods edges, fence lines, shrub interiors. Not just on top of the grass.</li>
            <li><strong>Label-directed application.</strong> Pyrethrin-based, labelled for residential use, and applied according to label directions &mdash; stay off treated areas until the spray has dried.</li>
            <li><strong>5-treatment season covers all life stages.</strong> Spring nymphs (highest Lyme risk), summer adults, fall larvae.</li>
            <li><strong>Rain-back guarantee.</strong> {PROMISES.rainBack}</li>
            <li><strong>Bundle savings.</strong> $597 on its own, or $497 when added to any mosquito plan (save $100).</li>
          </ul>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/tick-prevention-yard-ontario-safe-for-kids">Tick Prevention in Your Yard — A Guide for Families</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/best-tick-control-yard-treatment">Best Tick Control Yard Treatment</Link></li>
            <li><Link href="/blog/tick-tubes-canada">Tick Tubes in Canada — Do They Actually Work?</Link></li>
            <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026">Ontario Lyme Risk Areas 2026</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
              <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                {question}
                <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>

        </div>
      </article>

      <ReadNext path="/blog/best-tick-repellent-yard-canada" standalone />
    </>
  )
}
