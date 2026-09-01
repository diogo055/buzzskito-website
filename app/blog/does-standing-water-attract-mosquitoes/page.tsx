import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'does-standing-water-attract-mosquitoes'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Does Standing Water Attract Mosquitoes? How Fast It Breeds Them'
const META_TITLE = 'Standing Water Breeds Mosquitoes in 7–10 Days'

const FAQS = [
  {
    question: 'How long does standing water take to breed mosquitoes?',
    answer: 'In warm GTA summer weather (25–30°C), mosquitoes go from egg to biting adult in about 7–10 days. Eggs hatch into larvae within 24–48 hours of touching water, spend 4–7 days as larvae, then 1–3 days as pupae before emerging as adults. Cooler water slows this to 10–14 days. The practical takeaway: any water sitting for more than about a week can produce a fresh batch of mosquitoes, which is why the standard advice from the CDC and the Public Health Agency of Canada is to dump or refresh standing water every 7 days.',
  },
  {
    question: 'Does standing water attract mosquitoes?',
    answer: 'Yes. Standing water is the single biggest thing that draws mosquitoes to a yard, because female mosquitoes need it to lay their eggs. Females detect stagnant water using scent cues (organic matter, algae, and carbon dioxide) and are drawn from surrounding areas to lay 100–300 eggs on or near the surface. Removing standing water removes the nursery, which is why eliminating it is the first step every public health agency recommends. Adult mosquitoes still fly in from neighbouring properties, ravines, and creeks, so removing your own water reduces but does not eliminate the problem.',
  },
  {
    question: 'How much water do mosquitoes need to breed?',
    answer: 'Astonishingly little. Mosquitoes can breed in as little as one bottle cap of water — roughly a teaspoon, about 5 millilitres. Species like Aedes (which includes the aggressive daytime biters) specialise in tiny containers: a plant saucer, a bottle cap, a crumpled tarp fold, or the rim of a garbage bin lid. You do not need a pond. A forgotten toy, a clogged gutter, or a saucer under a flowerpot holds more than enough water to raise dozens of mosquitoes.',
  },
  {
    question: 'What counts as standing water in a backyard?',
    answer: 'Standing water is any water that sits still for more than a few days without draining or flowing. In a typical GTA yard that includes: clogged gutters, rain barrels, plant saucers, bird baths, kiddie pools, tarps and pool covers, buckets, wheelbarrows, old tires, tree holes, corrugated drainage pipe, pet bowls, recycling bins, and low spots in the lawn that puddle after rain. Even bottle caps and folds in a loose tarp count. If it holds water you can see for a week, it can breed mosquitoes.',
  },
  {
    question: 'How do you stop mosquitoes from breeding in standing water?',
    answer: 'Follow the "dump it every week" rule: empty, scrub, and refill or overturn any container that holds water at least every 7 days, which breaks the 7–10 day breeding cycle before adults emerge. Cover rain barrels with fine mesh, clean gutters twice a season, drill drainage holes in anything that pools, and store buckets and toys upside down. For water you cannot dump — rain barrels, ornamental ponds, ditches, neglected pools — drop in a BTI mosquito dunk, which kills larvae for about 30 days and is safe for pets, fish, and pollinators.',
  },
  {
    question: 'Do mosquitoes lay eggs in moving water?',
    answer: 'No. Mosquitoes almost never breed in moving or flowing water. The larvae and pupae live at the water surface and are easily disturbed, so they need calm, stagnant water to survive. This is why a fountain pump, an aerator, or a solar water agitator in a pond or bird bath prevents breeding — the constant surface disturbance makes it impossible for larvae to develop. Streams and well-circulated pools are not mosquito sources; the still, forgotten containers around them are.',
  },
  {
    question: 'How many mosquitoes can breed in a small amount of water?',
    answer: 'A single female mosquito lays 100–300 eggs at a time and can lay several batches in her life, so one saucer or bird bath left undisturbed for a week can produce dozens to hundreds of new mosquitoes. Because the cycle repeats every 7–10 days in warm weather, an untreated rain barrel or clogged gutter can pump out thousands of mosquitoes over a single Ontario summer. This compounding is why removing even small water sources has an outsized effect.',
  },
  {
    question: 'Does standing water attract mosquitoes even if it is clean?',
    answer: 'Yes, though dirty, organic-rich water attracts them more. Mosquitoes will lay eggs in clean rainwater — a fresh bird bath or a newly filled kiddie pool — but stagnant water with algae, leaves, or organic debris is more attractive because it provides more food for the larvae. Either way, the key factor is that the water is standing still. Changing bird bath and pet bowl water every 2–3 days keeps it too fresh for larvae to complete their cycle.',
  },
  {
    question: 'How often should I empty standing water to prevent mosquitoes?',
    answer: 'At least once every 7 days. Because mosquitoes take 7–10 days to go from egg to flying adult in warm weather, dumping, scrubbing, and refilling containers weekly interrupts the cycle before any new mosquitoes can emerge. For high-traffic items like bird baths and pet bowls, refreshing every 2–3 days is even better. Scrubbing matters — mosquito eggs stick to container walls and can survive drying out, so a quick scrub removes them along with the water.',
  },
  {
    question: 'Do mosquito dunks work in standing water you cannot drain?',
    answer: 'Yes. Mosquito dunks contain BTI (Bacillus thuringiensis israelensis), a naturally occurring bacterium that kills mosquito larvae within 24–48 hours but is harmless to humans, pets, fish, frogs, birds, and pollinators. One dunk treats up to 100 square feet of water surface for about 30 days, making them the standard solution for rain barrels, ponds, ditches, and neglected pools. Health Canada has approved BTI for residential use, and it is used by mosquito control districts across North America. Dunks kill larvae only — pair them with adult mosquito control for complete coverage.',
  },
  {
    question: 'Will removing standing water get rid of all my mosquitoes?',
    answer: 'It will dramatically reduce the mosquitoes your own yard produces, but not the ones flying in from elsewhere. Adult mosquitoes can travel from neighbouring yards, storm drains, ravines, ponds, and creeks — sometimes several hundred metres. So even a spotless yard can still have mosquitoes drifting in. The most complete strategy combines source reduction (dump standing water), larvicide (BTI dunks in water you cannot drain), and a professional barrier spray that treats the vegetation adult mosquitoes rest on.',
  },
  {
    question: 'Why is standing water a public health concern in Ontario?',
    answer: 'Standing water breeds Culex mosquitoes, the primary carrier of West Nile virus in Ontario. Public Health Ontario and the Public Health Agency of Canada both list eliminating standing water as the first line of defence against West Nile virus, which is detected in Ontario mosquito pools most summers. Culex mosquitoes favour stagnant, organic-rich water like clogged catch basins, neglected pools, and unused containers. This guidance is general public health information, not medical advice — for health concerns, consult your local public health unit or a physician.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Yes — standing water breeds mosquitoes in just 7–10 days, in as little as a bottle cap of water. The weekly dump rule, BTI dunks for water you can\'t drain, and what counts. GTA guide.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('does-standing-water-attract-mosquitoes')

export default function StandingWaterMosquitoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'How fast standing water breeds mosquitoes, how little water they need, what counts as standing water, and how to stop it — a Canadian GTA guide.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Does Standing Water Attract Mosquitoes?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Standing Water &amp; Mosquitoes</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Standing water is the number-one thing that turns a GTA backyard into a mosquito factory. Here is exactly how fast it breeds them, how little water they need, and how to shut it down.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* ANSWER CAPSULE — first content element, engineered for AI citation */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
              BuzzSkito&rsquo;s GTA technicians: yes, standing water strongly attracts mosquitoes because females need it to lay eggs — and it can breed a new generation in about a week.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Mosquitoes go from egg to biting adult in just <strong>7–10 days</strong> in warm summer water.</li>
              <li>Mosquitoes can breed in as little as <strong>one bottle cap</strong> of water — about a teaspoon (5 mL).</li>
              <li>A single female lays <strong>100–300 eggs</strong> at a time, and they hatch within <strong>24–48 hours</strong> of touching water.</li>
              <li>The most effective step is the <strong>&ldquo;dump it every week&rdquo; rule</strong>: empty and scrub any standing water every 7 days to break the cycle.</li>
              <li>For water you cannot dump — rain barrels, ponds, ditches — <strong>one BTI mosquito dunk</strong> kills larvae for about 30 days and is safe for pets and fish.</li>
              <li>Public Health Ontario and the CDC both list <strong>removing standing water</strong> as the first line of defence against West Nile virus.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Standing Water &amp; Mosquitoes: Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Egg to biting adult', '7–10 days in warm weather (10–14 days when cool)'],
                  ['Minimum water needed', 'As little as a bottle cap — about 1 tsp (5 mL)'],
                  ['Eggs per batch', '100–300 eggs per female, multiple batches per life'],
                  ['Time for eggs to hatch', '24–48 hours after touching water'],
                  ['The weekly rule', 'Dump and scrub standing water every 7 days'],
                  ['Water you cannot drain', 'BTI mosquito dunk — ~30 days per dunk'],
                  ['Moving water', 'Mosquitoes do NOT breed in flowing or agitated water'],
                  ['Ontario health risk', 'Culex mosquitoes in standing water carry West Nile virus'],
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

      <article className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Does standing water attract mosquitoes?</h2>
          <p>Yes — standing water is the single biggest reason mosquitoes show up in a yard. Female mosquitoes need still water to lay their eggs, and they actively seek it out using scent cues from organic matter, algae, and carbon dioxide. Remove the water and you remove the nursery.</p>
          <p>Here is the mechanism. A female mosquito takes a blood meal (that is the bite), then goes looking for stagnant water to deposit 100–300 eggs. Some species lay their eggs directly on the water surface in tiny rafts; others, like the aggressive <em>Aedes</em> daytime biters, lay eggs just above the waterline in containers, where they wait — sometimes for months — until rain raises the water level and triggers them to hatch. Either way, standing water is the trigger. A yard with no standing water gives females nowhere to breed, which is why every public health agency starts its mosquito advice with the same instruction: get rid of standing water.</p>
          <p>One honest caveat: removing your own standing water reduces the mosquitoes your property <em>produces</em>, but adult mosquitoes still fly in from neighbouring yards, storm drains, ravines, and creeks. Source reduction is the foundation of control, not the whole building — more on the complete strategy below.</p>

          <h2>How long does standing water take to breed mosquitoes?</h2>
          <p>In warm GTA summer weather — roughly 25–30°C — standing water breeds a full generation of biting mosquitoes in about <strong>7 to 10 days</strong>. In cooler water the same process stretches to 10–14 days. That week-and-a-bit window is the entire reason behind the &ldquo;dump it weekly&rdquo; rule.</p>
          <p>The life cycle has four stages, and it moves fast:</p>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Stage</th><th className="px-3 py-2 text-left">What happens</th><th className="px-3 py-2 text-left">Time (warm water)</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Egg</strong></td><td className="px-3 py-2">Laid on or near still water; waits for the surface to rise</td><td className="px-3 py-2">Hatches in 24–48 hrs</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Larva</strong></td><td className="px-3 py-2">The &ldquo;wriggler&rdquo; — filter-feeds at the surface, moults four times</td><td className="px-3 py-2">4–7 days</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Pupa</strong></td><td className="px-3 py-2">The &ldquo;tumbler&rdquo; — does not feed, transforms into an adult</td><td className="px-3 py-2">1–3 days</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Adult</strong></td><td className="px-3 py-2">Emerges, mates; females bite and start the cycle again</td><td className="px-3 py-2">Bites within 1–2 days</td></tr>
            </tbody>
          </table>
          <p>Because the larva and pupa stages both live in the water, they are the vulnerable window — this is exactly when a larvicide like BTI, or simply dumping the container, ends the cycle before any adults escape. If you can spot the wrigglers, you can stop the generation. Not sure what you are looking at in a bucket or rain barrel? Our <Link href="/blog/mosquito-larvae-identification">mosquito larvae identification guide</Link> walks through what larvae, pupae, and their look-alikes actually look like.</p>

          <h2>How much water do mosquitoes need to breed?</h2>
          <p>Almost none. Mosquitoes can breed in as little as <strong>one bottle cap of water — roughly a teaspoon, about 5 millilitres</strong>. You do not need a pond, a ditch, or even a bucket. Container-breeding species are specialists at exploiting the smallest, most overlooked pockets of water in a yard.</p>
          <p>That is what makes standing water so easy to miss. The classic culprits are not the obvious ones — they are the small, forgotten ones:</p>
          <ul>
            <li>A plant saucer under a potted flower</li>
            <li>The fold of a loose tarp or a sagging pool cover</li>
            <li>A crumpled chip bag, bottle cap, or drink can in the garden</li>
            <li>The rim or handle of a garbage or recycling bin lid</li>
            <li>A child&rsquo;s toy, a frisbee, or an upturned flowerpot base</li>
            <li>Corrugated drainage pipe with low spots that never fully drain</li>
          </ul>
          <p>Because the water requirement is so tiny, walking the yard and turning over or emptying every little container is often more effective than people expect. For a room-by-room-style checklist of the spots homeowners almost always overlook, see our guide to <Link href="/blog/hidden-mosquito-breeding-spots-backyard">hidden mosquito breeding spots in your backyard</Link>.</p>

          <h2>What counts as standing water?</h2>
          <p>Standing water is any water that sits still for more than a few days without draining or flowing. If it holds visible water for about a week, it can breed mosquitoes — and it does not matter whether the water is clean rainwater or murky and full of leaves. What matters is that it is <em>still</em>.</p>
          <p>In a typical GTA backyard, the usual standing-water sources are:</p>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Standing water source</th><th className="px-3 py-2 text-left">Best fix</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Clogged gutters &amp; downspouts</td><td className="px-3 py-2">Clean twice a season; keep water flowing</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Rain barrels</td><td className="px-3 py-2">Fine mesh over the top + a BTI dunk inside</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Bird baths &amp; pet bowls</td><td className="px-3 py-2">Refresh water every 2–3 days</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Kiddie pools, buckets, wheelbarrows</td><td className="px-3 py-2">Empty and store upside down when not in use</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Tarps &amp; pool covers</td><td className="px-3 py-2">Pull taut so water cannot pool in folds</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Old tires, toys, saucers</td><td className="px-3 py-2">Remove, drill drainage holes, or empty weekly</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Ornamental ponds &amp; neglected pools</td><td className="px-3 py-2">Add a pump/aerator or a BTI dunk</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Low spots &amp; ruts in the lawn</td><td className="px-3 py-2">Fill and level; improve drainage</td></tr>
            </tbody>
          </table>
          <p>One useful rule of thumb: mosquitoes do <strong>not</strong> breed in moving or agitated water. A fountain, a pond pump, or a small solar aerator keeps the surface disturbed enough that larvae cannot survive — which is why a running water feature is fine but the still bucket beside it is not.</p>
          <p>Plants belong on that source list too, more often than gardeners expect. Bromeliad cups, taro leaves, cut bamboo stems, and the drainage saucer under a patio pot all hold water the same way a forgotten bucket does — we cover the garden-specific version in <Link href="/blog/what-flowers-attract-mosquitoes">which flowers and plants attract mosquitoes</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Dumped every container and still getting bitten?</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">That is the adults flying in from off your property. BuzzSkito&rsquo;s barrier spray treats the shaded vegetation they rest on, from $99 — backed by 150 five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>How to stop mosquitoes breeding in standing water</h2>
          <p>The two-part answer: <strong>dump the water you can, and treat the water you cannot</strong>. Everything else is detail. Because the breeding cycle is only 7–10 days, breaking it once a week keeps a yard from ever producing a generation of adults.</p>
          <p>Start with the weekly routine — this covers most of a yard for free:</p>
          <ol>
            <li><strong>Dump and scrub every 7 days.</strong> Empty containers, then scrub the sides — mosquito eggs stick to container walls and can survive drying, so a quick scrub removes them along with the water.</li>
            <li><strong>Cover or screen what you keep.</strong> Fit fine mesh over rain barrels and cisterns so females cannot reach the water.</li>
            <li><strong>Fix the flow.</strong> Clean gutters, clear downspout outlets, and level low spots so water drains instead of pooling.</li>
            <li><strong>Store containers upside down.</strong> Buckets, wheelbarrows, kiddie pools, and toys collect rain the moment your back is turned.</li>
            <li><strong>Refresh bird baths and pet bowls every 2–3 days.</strong> High-use water needs to stay too fresh for larvae to mature.</li>
          </ol>

          <h3>For water you cannot dump: BTI mosquito dunks</h3>
          <p>Some standing water cannot be emptied — rain barrels you rely on, ornamental ponds with fish, drainage ditches, low areas that stay wet, or a neglected pool waiting to be drained. For these, the standard solution is a <strong>BTI dunk</strong>. BTI (<em>Bacillus thuringiensis israelensis</em>) is a naturally occurring soil bacterium that mosquito larvae eat and die from within 24–48 hours, yet it is harmless to humans, pets, fish, frogs, birds, and pollinators. One dunk treats up to 100 square feet of water surface for about 30 days, and Health Canada has approved BTI for residential use.</p>

          <AffiliateDisclosure />
          <TopPick tag={AMZ_TAG}
            label="Our Top Pick"
            name="Summit Mosquito Dunks (BTI)"
            blurb="The go-to fix for standing water you can't drain — rain barrels, ponds, ditches. One dunk kills larvae for ~30 days across 100 sq ft of water surface, and it's safe for fish, pets, and pollinators."
            search="summit mosquito dunks"
            score={9.1}
            pros={['Kills larvae for about 30 days per dunk', 'Safe around fish, pets, and pollinators', 'Health Canada approved for residential use']}
            cons={['Targets larvae only — not adult mosquitoes', 'Needs monthly replacement through the season']}
          />
          <p className="not-prose text-sm text-gray-600 mb-2">Drop one in each rain barrel, pond, or low spot that stays wet, and refresh monthly through the season:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks price on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="summit mosquito bits">Faster-acting Mosquito Bits →</BuyLink>
          </div>
          <p>Dunks are slow-release tablets for long-term water sources; the granular <em>bits</em> version knocks down a larvae outbreak within minutes and suits small or unexpected water. Want the full breakdown of pricing, placement, and the three mistakes people make? See our <Link href="/blog/mosquito-dunks-canada-guide">mosquito dunks Canada guide</Link>.</p>

          <h2>Why standing water matters for health in Ontario</h2>
          <p>Beyond the nuisance of bites, standing water is a public health issue in Ontario. The stagnant, organic-rich water in clogged catch basins, neglected pools, and forgotten containers is the preferred nursery of <em>Culex</em> mosquitoes — the primary carriers of West Nile virus in the province. Public Health Ontario and the Public Health Agency of Canada both list eliminating standing water as the first line of defence against West Nile virus, which is detected in Ontario mosquito surveillance pools most summers.</p>
          <p>This is general public health information, not medical advice. If you have specific health concerns about mosquito-borne illness, contact your local public health unit or a physician.</p>

          <h2>The complete strategy: dump, treat, then defend</h2>
          <p>Removing standing water is the foundation, but adult mosquitoes still drift in from neighbours&rsquo; yards, storm drains, and nearby ravines — sometimes several hundred metres. For a yard you can actually enjoy, layer three tactics:</p>
          <ol>
            <li><strong>Source reduction</strong> — dump and scrub standing water weekly (removes the mosquitoes your own yard breeds).</li>
            <li><strong>Larvicide</strong> — BTI dunks or bits in any water you cannot drain (kills larvae in place).</li>
            <li><strong>Barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s professional service</Link> treats the shaded vegetation where adult mosquitoes rest, with a residual barrier that keeps drifting adults out for 21–30 days per treatment.</li>
          </ol>
          <p>Source reduction plus a larvicide handles the mosquitoes you make; barrier spray handles the ones that visit. Together they are what turns a bite-heavy GTA backyard into one you can actually use in July.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada Guide — Where to Buy + 3 Mistakes</Link></li>
            <li><Link href="/blog/mosquito-larvae-identification">Mosquito Larvae Identification — What&rsquo;s in Your Water</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
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

      <StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Dunks (BTI)" search="summit mosquito dunks" label="For water you can’t dump" />

      <CTASection heading="Dump the Water · We&rsquo;ll Handle the Rest" subtext="Get a free quote for professional yard barrier spray. From $99. Same-day protection. 150 five-star reviews." variant="dark" />
    </>
  )
}
