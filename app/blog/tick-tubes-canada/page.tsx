import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'

const SLUG = 'tick-tubes-canada'
const DATE = '2026-07-14'
const TITLE = 'Tick Tubes in Canada 2026: Do They Actually Work?'

const FAQS = [
  {
    question: 'What is a tick tube and how does it work?',
    answer: 'A tick tube is a small biodegradable cardboard tube packed with permethrin-treated cotton. Mice — the primary hosts for blacklegged (deer) tick larvae — collect the cotton to line their nests. The permethrin coats the mouse\'s fur and kills the immature ticks feeding on it, breaking the tick life cycle at the larval and nymphal stage. You place the tubes around the edges of your property in spring and again in late summer to match the two windows when larvae and nymphs are feeding on mice.',
  },
  {
    question: 'Do tick tubes actually work in Canada?',
    answer: 'Tick tubes can reduce the number of infected nymphs on a property, and U.S. field studies of the permethrin-cotton method have shown meaningful drops in tick abundance on some sites. But results are inconsistent and depend heavily on placement, timing, mouse activity, and whether neighbouring land keeps re-seeding ticks. In Ontario\'s GTA, where lots are small and backyards connect to ravines, greenbelts, and neighbours\' yards, tubes alone rarely clear a property. They work best as one layer in a broader plan that also includes a perimeter barrier treatment, not as a stand-alone fix.',
  },
  {
    question: 'When should I put out tick tubes in Ontario?',
    answer: 'Two deployments per year work best in Ontario. The first goes out in spring — roughly April to early June — to target overwintered nymphs feeding on mice. The second goes out in mid-to-late summer — July to August — to hit the new larvae hatching from that year\'s eggs. This double timing matches the blacklegged tick\'s life cycle, where larvae and nymphs both take blood meals from small mammals. In the GTA\'s May–September season, a spring-plus-late-summer schedule gives you the widest coverage.',
  },
  {
    question: 'How many tick tubes do I need per acre?',
    answer: 'A common guideline for the Thermacell Tick Control Tubes is roughly one 12-pack per quarter-acre (about 1,000 sq m) per application. Scaled up, that is around 24 tubes for a half-acre and roughly 48 for a full acre, placed in shaded, brushy edges where mice travel. Most GTA suburban lots are well under a quarter-acre of usable yard, so a single 12-pack often covers a typical property — but you place them along fence lines, wood piles, stone walls, and ravine edges, not in the open lawn where mice rarely go.',
  },
  {
    question: 'Are Thermacell Tick Control Tubes available in Canada?',
    answer: 'Yes. Thermacell Tick Control Tubes are sold on Amazon.ca and are carried seasonally at Canadian retailers including Canadian Tire, RONA, and Home Hardware, usually appearing on shelves in spring. Availability tightens during peak tick season (May to July), so if you want tubes for a spring application it is worth buying early. The well-known U.S. brand Damminix Tick Tubes is generally not stocked through mainstream Canadian retail, so Thermacell and generic multi-packs are the practical options north of the border.',
  },
  {
    question: 'Can I make my own DIY tick tubes?',
    answer: 'People do make homemade tubes using cardboard tubes and permethrin-treated cotton, but there are real cautions. In Canada, permethrin products are regulated by Health Canada\'s Pest Management Regulatory Agency (PMRA), and you must only use a product according to its approved label directions — repurposing a permethrin clothing or pet spray into a homemade tick tube is an off-label use. Commercial tubes like Thermacell are formulated and dosed for exactly this purpose. DIY tubes also tend to be inconsistent in dose and weather resistance. If you go the homemade route, keep permethrin away from cats, which are highly sensitive to it, and follow every label instruction on the product you use.',
  },
  {
    question: 'Are tick tubes safe for pets, kids, and pollinators?',
    answer: 'Tick tubes are designed to keep the permethrin contained inside the tube and on mouse fur, so exposure in the open yard is low compared with broadcast spraying. That said, permethrin is highly toxic to cats and to aquatic life, and it is toxic to bees when they contact wet residue. Place tubes in brushy edges away from where children play, keep cats from chewing on tubes, and never put tubes near ponds, streams, or storm drains. Because the cotton stays inside the cardboard, dogs and kids are unlikely to contact a meaningful dose during normal yard use, but supervise pets that like to dig or chew.',
  },
  {
    question: 'Tick tubes vs perimeter spray — which is better?',
    answer: 'They solve different parts of the same problem, so the honest answer is that they are complementary, not competing. Tick tubes attack ticks on their mouse hosts over a full season and reduce next year\'s infected nymphs. A professional perimeter barrier spray kills the ticks that are questing in your yard right now, along the shaded edges where they wait for a host. Tubes are slow and preventive; a barrier treatment is fast and knocks down the current population. Properties with heavy pressure — backing onto ravines, long grass, or wooded greenbelt — get the best control by running both together.',
  },
  {
    question: 'Do tick tubes work against dog ticks and lone star ticks?',
    answer: 'Tick tubes are built around the biology of the blacklegged (deer) tick, whose larvae and nymphs rely heavily on white-footed mice and other small rodents. American dog ticks and lone star ticks feed on a wider range of hosts and are less mouse-dependent, so tubes are less effective against them. Since the blacklegged tick is the species that spreads Lyme disease in Ontario, tubes are still worth using here — but do not expect them to control every tick species on your property.',
  },
  {
    question: 'How much do tick tubes reduce Lyme disease risk?',
    answer: 'By lowering the share of nymphs carrying Borrelia burgdorferi — the Lyme bacterium — on a property, tick tubes can lower your exposure risk over time, but no yard product removes risk entirely. Public Health Ontario continues to expand its list of Lyme disease risk areas across the province, including parts of the GTA and surrounding regions, so personal protection still matters: do daily tick checks, wear repellent, keep to trail centres, and treat clothing with permethrin. Tubes are a yard-level layer, not a substitute for checking yourself and your pets after time outdoors.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'Do tick tubes work in Canada? How permethrin-cotton tubes break the deer-tick life cycle through mice, when and how to place them in Ontario, Thermacell vs generic vs DIY, where to buy in Canada, and why tubes plus perimeter spray beats either alone. Updated July 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function TickTubesCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Complete 2026 Canadian guide to tick tubes — how the permethrin-cotton mouse method works, placement and timing for Ontario, product comparison, and tubes vs perimeter spray.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Tick Tubes in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick Tubes in Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">How permethrin-cotton tubes break the deer-tick life cycle through mice, when and how to place them in Ontario, Thermacell vs generic vs DIY, and why tick control pros pair tubes with a perimeter barrier spray instead of choosing one.</p>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto speakable">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Do tick tubes actually work?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Tick tubes work partially and slowly.</strong> Permethrin-treated cotton inside the tubes gets carried into mouse nests, killing the immature blacklegged ticks feeding on those mice and cutting next season&rsquo;s infected nymphs. Results depend on placement, timing, and mouse activity, and tubes do nothing for ticks already questing in your yard. In the GTA, use them alongside a perimeter barrier spray &mdash; not instead of one.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Tick Tubes: Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What they are', 'Cardboard tubes packed with permethrin-treated cotton'],
                  ['How they work', 'Mice line nests with the cotton; permethrin kills tick larvae & nymphs on the mice'],
                  ['Target tick', 'Blacklegged (deer) tick — the Lyme-disease species in Ontario'],
                  ['Timing (Ontario)', 'Spring (Apr–early Jun) + late summer (Jul–Aug)'],
                  ['Coverage', '~1 twelve-pack per quarter-acre (≈1,000 sq m) per round'],
                  ['Where to place', 'Shaded brushy edges, wood piles, stone walls, fence lines'],
                  ['Speed', 'Slow & preventive — reduces next year\'s ticks, not tonight\'s'],
                  ['Ticks in the open yard now', 'Not affected — tubes only reach mouse-borne ticks'],
                  ['Health Canada / PMRA', 'Permethrin is PMRA-regulated; use only per the product label'],
                  ['Cat safety', 'Permethrin is highly toxic to cats — keep tubes away from them'],
                  ['Best used with', 'Perimeter barrier spray + daily tick checks'],
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

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Where to buy tick tubes in Canada</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            The most widely available option in Canada is the <strong>Thermacell Tick Control Tubes</strong> line, sold on Amazon.ca and carried seasonally at Canadian Tire, RONA, and Home Hardware. Generic multi-packs (20-count) are also available online. The U.S. brand Damminix Tick Tubes is generally not stocked through mainstream Canadian retail, so plan around Thermacell or generic tubes here. Stock tightens in peak season, so buy early if you want tubes ready for a spring application.
          </p>
          <div className="mt-2 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">Remember:</strong> tick tubes are a season-long, preventive layer. For ticks that are already questing along your yard&rsquo;s shaded edges this week, a <Link href="/tick-control" className="text-emerald-700 underline font-semibold">professional perimeter barrier spray</Link> knocks them down fast — tubes and spray do different jobs.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian options and pack sizes:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="thermacell tick control tubes 12 pack">Check price on Amazon.ca →</BuyLink>
            <BuyLink search="tick tubes 20 pack">Generic 20-pack tick tubes →</BuyLink>
          </div>

          <h2>What is a tick tube, exactly?</h2>
          <p>A tick tube is deceptively simple: a short, biodegradable cardboard tube stuffed with cotton that has been treated with <strong>permethrin</strong>, a synthetic insecticide. There is no spray, no battery, and no electronics. The whole device is a delivery system that uses an animal you already have in your yard — the mouse — to carry a tick-killing dose exactly where the immature ticks are.</p>
          <p>The idea sounds strange until you understand the biology. In Ontario, the tick that matters most for human health is the <Link href="/blog/blacklegged-deer-tick-ontario">blacklegged tick (also called the deer tick)</Link>, the species that spreads Lyme disease. This tick has a two-year life cycle with three feeding stages: larva, nymph, and adult. And here is the key fact tick tubes exploit — the larvae and many of the nymphs take their blood meals from <strong>small mammals, especially white-footed mice and deer mice</strong>. Mice are also the main reservoir where young ticks pick up the Lyme bacterium in the first place.</p>
          <p>So if you can treat the mice, you treat the ticks riding on them, before those ticks ever grow up and come looking for you or your dog.</p>

          <h2>How tick tubes break the life cycle</h2>
          <p>Mice are relentless nest-builders. When they find soft cotton, they gather it and carry it back to line their burrows and nests. When a mouse grooms itself and moves through cotton laced with permethrin, a small amount transfers onto its fur and skin. That residue does not meaningfully harm the mouse — but it is lethal to the tiny larval and nymphal ticks attached to it. The ticks die on the host before they can drop off, moult, and continue the cycle.</p>
          <p>Because you are killing ticks at the larval and nymphal stage — before they become the questing nymphs and adults that bite people — the payoff is <strong>preventive and delayed</strong>. A tube you place this summer is reducing the population of infected nymphs you would otherwise face next year. This is the single most important thing to understand about tick tubes: they are not a knock-down tool. They will not clear ticks off your lawn tonight, this weekend, or before your backyard party.</p>
          <p>It is worth being honest about the evidence, too. Field research on the permethrin-cotton method has shown real reductions in tick numbers on some study sites, but results across studies have been mixed and sometimes modest, especially where surrounding land keeps supplying new ticks and new mice. Tick tubes are a legitimate tool with a real mechanism — they are simply not a guaranteed one, and they are not a whole strategy on their own.</p>

          <h2>Placement and timing for Ontario yards</h2>
          <p>Tick tubes only work if the mice actually find them, so placement is everything. Mice do not cross wide open lawns if they can help it — they hug cover. Put tubes where mice live and travel:</p>
          <ul>
            <li><strong>Shaded, brushy property edges</strong> — the transition zone between lawn and woods, ravine, or greenbelt</li>
            <li><strong>Along fence lines and stone walls</strong></li>
            <li><strong>Under wood piles, brush piles, and dense ground cover</strong></li>
            <li><strong>Near sheds, decks, and any structure mice nest under</strong></li>
          </ul>
          <p>Do not scatter them across the open middle of your yard — that is exactly where mice avoid, and where ticks are least concentrated anyway. Space tubes roughly 10 metres (about 30 feet) apart along those edges.</p>
          <p>For coverage, a useful rule of thumb is about <strong>one 12-pack per quarter-acre (roughly 1,000 square metres) per application</strong>. That scales to around 24 tubes for a half-acre and about 48 for a full acre. Most GTA suburban lots have well under a quarter-acre of actual yard once you subtract the house and driveway, so a single 12-pack often covers a typical Mississauga or Toronto property — as long as you concentrate it along the edges rather than spreading it thin.</p>
          <p>Timing is the other half of the equation. Because both larvae and nymphs feed on mice — but at different points in the year — the most effective schedule is <strong>two applications</strong>:</p>
          <ul>
            <li><strong>Spring (April to early June):</strong> targets overwintered nymphs feeding on mice as the season warms — this is also when human tick encounters start climbing in Ontario.</li>
            <li><strong>Late summer (July to August):</strong> targets the new crop of larvae hatching from that year&rsquo;s eggs.</li>
          </ul>
          <p>In the GTA&rsquo;s May-through-September window, a spring-plus-late-summer rhythm gives you the broadest reach across the tick&rsquo;s feeding stages. For more on the seasonal pattern, see our guide to <Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme disease and tick prevention in Ontario</Link>.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Want the current ticks gone now?</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito runs a dedicated tick program — <strong>$597/season standalone, or $497 when bundled with any mosquito plan</strong>. We treat the shaded, brushy edges where ticks quest, and pair perfectly with tick tubes for full-season control across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Thermacell vs generic vs DIY tick tubes</h2>
          <p>Not all tubes are equal. Here is how the realistic Canadian options compare.</p>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Option</th>
                <th className="px-3 py-2 text-left">Coverage / specs</th>
                <th className="px-3 py-2 text-left">Active ingredient</th>
                <th className="px-3 py-2 text-left">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50">
                <td className="px-3 py-2"><strong>Thermacell Tick Control Tubes (12-pack)</strong></td>
                <td className="px-3 py-2">≈ 1/4-acre per pack; pre-dosed cotton</td>
                <td className="px-3 py-2">Permethrin (factory-formulated)</td>
                <td className="px-3 py-2">Most Canadians — reliable, widely stocked</td>
              </tr>
              <tr className="border-t border-navy-50">
                <td className="px-3 py-2"><strong>Generic tick tubes (20-pack)</strong></td>
                <td className="px-3 py-2">Larger lots; more tubes per box</td>
                <td className="px-3 py-2">Permethrin-treated cotton</td>
                <td className="px-3 py-2">Bigger rural properties on a budget</td>
              </tr>
              <tr className="border-t border-navy-50">
                <td className="px-3 py-2"><strong>Damminix (U.S. brand)</strong></td>
                <td className="px-3 py-2">The original method; not sold via mainstream Canadian retail</td>
                <td className="px-3 py-2">Permethrin</td>
                <td className="px-3 py-2">Context only — hard to source in Canada</td>
              </tr>
              <tr className="border-t border-navy-50">
                <td className="px-3 py-2"><strong>DIY homemade tubes</strong></td>
                <td className="px-3 py-2">You control quantity; inconsistent dose</td>
                <td className="px-3 py-2">Whatever permethrin product you supply</td>
                <td className="px-3 py-2">Experienced DIYers — see cautions below</td>
              </tr>
            </tbody>
          </table>

          <h2>Are DIY tick tubes worth it? (Read the PMRA angle first)</h2>
          <p>Plenty of blogs show you how to jam permethrin-soaked cotton balls into toilet-paper rolls. It is cheap, and the mechanism is identical to the commercial version. But there are real reasons the pros lean toward manufactured tubes.</p>
          <p>First, the legal and safety angle. In Canada, permethrin products are regulated by Health Canada&rsquo;s <strong>Pest Management Regulatory Agency (PMRA)</strong>, and the law is that you must use a registered pesticide <strong>only according to its approved label</strong>. Many permethrin products Canadians can buy — clothing treatments, pet spot-ons — are labelled for those specific uses, not for building tick tubes. Repurposing them into homemade tubes is an off-label use. Commercial tubes like Thermacell are formulated, dosed, and labelled specifically for this application, which is exactly why they exist.</p>
          <p>Second, consistency. Factory tubes deliver a controlled dose and are built to survive weather long enough for mice to find them. DIY dosing is guesswork, and a cardboard roll that turns to mush in the first rain does nothing.</p>
          <p>Third — and this is non-negotiable — <strong>permethrin is extremely toxic to cats</strong>. A curious cat chewing a soggy homemade tube is a genuine emergency-vet risk. Permethrin is also toxic to bees on contact and to fish and aquatic life, so tubes of any kind must stay away from ponds, streams, and storm drains. If you still choose DIY, follow the label of whatever product you use to the letter, and keep tubes far from cats and water.</p>

          <h2>Tick tubes vs perimeter spray: the honest comparison</h2>
          <p>This is the question we get most from GTA homeowners, and the answer frustrates people who want a single silver bullet: <strong>tick tubes and perimeter barrier spray are complementary, not competing.</strong> They attack different parts of the same problem.</p>
          <ul>
            <li><strong>Tick tubes</strong> work upstream, on the mouse host, over a full season. They chip away at next year&rsquo;s population of infected nymphs. They are slow, preventive, and invisible in their day-to-day effect.</li>
            <li><strong>A professional perimeter barrier spray</strong> works downstream, on the ticks that are questing <em>right now</em> in the shaded, leaf-littered, brushy edges of your yard. It knocks down the current population fast and keeps working for weeks.</li>
          </ul>
          <p>Think of tubes as reducing the tap&rsquo;s flow and barrier spray as bailing out the sink you already have. Properties under heavy pressure — backing onto a ravine, a wooded greenbelt, tall grass, or a neighbour who never cuts their lot — get the best control by doing both: tubes to bend the multi-year curve, and a barrier treatment to make the yard usable this season. For the full playbook, see our <Link href="/blog/ultimate-tick-control-guide-ontario">ultimate tick control guide for Ontario</Link> and our breakdown of the <Link href="/blog/best-tick-control-yard-treatment">best tick control yard treatments</Link>.</p>

          <h2>Where tick tubes fall short</h2>
          <p>To out-answer the hype, you have to name the limits clearly:</p>
          <ul>
            <li><strong>They do nothing for ticks already in your yard.</strong> Tubes reach only the ticks feeding on mice, not the questing nymphs and adults waiting on leaf tips.</li>
            <li><strong>They are mouse-dependent.</strong> If mice ignore the tubes — or if your property has few of them but ticks arrive on deer, birds, or neighbouring yards — the effect shrinks.</li>
            <li><strong>They are species-specific.</strong> Tubes target the mouse-reliant blacklegged tick. <Link href="/blog/blacklegged-deer-tick-ontario">American dog ticks and lone star ticks</Link> use broader hosts and are far less affected.</li>
            <li><strong>Small connected lots leak.</strong> In dense GTA neighbourhoods, ticks and mice cross property lines constantly, so a treated yard gets re-seeded from next door.</li>
            <li><strong>Results take a year to show.</strong> If you need protection this weekend, tubes are the wrong tool.</li>
          </ul>
          <p>None of this makes tubes useless. It makes them a layer — a good one — inside a plan, rather than the plan itself.</p>

          <h2>The smart tick-control stack for GTA properties</h2>
          <p>For a typical Ontario yard, the pros stack these in order of impact:</p>
          <ol>
            <li><strong>Habitat control:</strong> keep grass short, clear leaf litter, create a dry gravel or mulch buffer between lawn and woods, and stack wood piles away from play areas.</li>
            <li><strong>Perimeter barrier spray:</strong> a professional treatment of the shaded, brushy edges where ticks quest — the fastest way to cut the population you have now.</li>
            <li><strong>Tick tubes:</strong> two rounds a year (spring and late summer) to grind down the mouse-borne ticks feeding next year&rsquo;s generation.</li>
            <li><strong>Personal protection:</strong> daily tick checks, permethrin-treated clothing, and a proper removal tool on hand — see our <Link href="/blog/tick-removal-tool-guide">tick removal tool guide</Link>.</li>
          </ol>
          <p>Layered this way, tick tubes finally do their job well — because they are not being asked to do the whole job alone.</p>

          <h2>Frequently asked questions</h2>
          <div className="not-prose space-y-3 my-6">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-tick-control-yard-treatment">Best Tick Control &amp; Yard Treatment</Link></li>
            <li><Link href="/blog/ultimate-tick-control-guide-ontario">The Ultimate Tick Control Guide for Ontario</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme Disease &amp; Tick Prevention in Ontario</Link></li>
            <li><Link href="/blog/tick-removal-tool-guide">Tick Removal Tool Guide</Link></li>
            <li><Link href="/blog/blacklegged-deer-tick-ontario">The Blacklegged (Deer) Tick in Ontario</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Tick Tubes for Next Year · Barrier Spray for This One" subtext="Get a free quote for BuzzSkito's tick program — $597/season standalone or $497 bundled with any mosquito plan. Serving 19 GTA cities." variant="dark" />
    </>
  )
}
