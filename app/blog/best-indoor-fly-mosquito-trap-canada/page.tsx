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

const SLUG = 'best-indoor-fly-mosquito-trap-canada'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Best Indoor Fly & Mosquito Trap Canada 2026 (Plug-In Buyer’s Guide)'

const FAQS = [
  {
    question: 'What is the best indoor fly and mosquito trap in Canada?',
    answer: 'For most Canadian homes, a plug-in UV + fan + glue-board trap (Katchy-style) is the best all-round indoor pick — it catches fruit flies, fungus gnats, houseflies, and the occasional indoor mosquito quietly overnight, with cheap glue-board refills. For larger rooms, a DynaTrap fan-suction UV unit covers up to ~600 sq ft with no refills. For a set-and-forget plug-in, a UV + sticky-cartridge trap (Zevo/Black+Decker style) is the simplest. No indoor trap is strong against mosquitoes specifically, because mosquitoes hunt by CO2 and body heat, not light — so pair any trap with source control.',
  },
  {
    question: 'Do indoor UV light traps actually catch mosquitoes?',
    answer: 'Partially. Indoor UV traps catch some mosquitoes — especially Culex (house mosquitoes) that drift toward light at night — but they are far less effective against mosquitoes than against flies and gnats. Mosquitoes locate people using carbon dioxide, body heat, and skin odour rather than UV light, so a light-only trap competes poorly with a sleeping human in the room. Fan-suction and glue-board models catch more mosquitoes than bare bug-zapper grids because they pull insects in and hold them. Treat indoor traps as backup, not primary mosquito control.',
  },
  {
    question: 'How do plug-in indoor insect traps work?',
    answer: 'Most indoor traps combine a UV-A (blacklight) LED that draws flying insects, plus one of three capture methods: a glue board that insects stick to, a fan that sucks them into a retention chamber, or a bug-zapper grid that electrocutes them. The best consumer units stack UV + a quiet fan + a replaceable glue board, so insects are pulled in and trapped silently instead of splattered. Run them in a dark room (they compete with other light) near where insects gather — kitchens, garbage areas, potted plants, and windows.',
  },
  {
    question: 'What is the difference between glue-board, fan, and bug-zapper traps?',
    answer: 'Glue-board traps use UV light plus a sticky sheet — silent, no mess, but you buy refill boards. Fan-suction traps pull insects into a basket to dehydrate — no refills, but you empty and rinse them. Bug-zapper grids electrocute insects — effective on flies but loud, messy, and poor on mosquitoes (studies show grids kill mostly harmless moths and beetles). For indoor use, glue-board and fan traps are quieter and cleaner than open zapper grids.',
  },
  {
    question: 'Where can I buy indoor fly and mosquito traps in Canada?',
    answer: 'Indoor plug-in traps are widely stocked in Canada on Amazon.ca (largest selection: Katchy, DynaTrap, Zevo, Black+Decker), plus Canadian Tire, Home Depot Canada, Walmart Canada, Home Hardware, and most garden centres in season. Glue-board and cartridge refills are sold on the same platforms — check refill availability and price before buying, since a cheap trap with costly or discontinued refills is a false economy.',
  },
  {
    question: 'Why do I suddenly have mosquitoes inside my house?',
    answer: 'Indoor mosquitoes usually enter through torn window screens, gaps around doors, or by breeding in standing water inside — a forgotten plant saucer, a drain, a sump pit, or a basement floor drain. Culex pipiens (the common house mosquito) will overwinter in warm basements and garages. Fix screens, empty or treat any standing water, and add BTI (Bti larvicide) to drains or catch basins that stay wet. A trap manages the adults you already have; source control stops new ones.',
  },
  {
    question: 'Are indoor insect traps safe around kids and pets?',
    answer: 'Plug-in UV traps that use a fan or glue board contain no pesticide and are generally safe to run around children and pets, though the glue boards are sticky and should be placed out of reach. Bug-zapper grids get hot and are loud, so keep them away from curious hands. None of these traps release chemicals into the air. If you want a pesticide-free way to reduce mosquitoes and flies indoors, a fan or glue-board trap is the safest category.',
  },
  {
    question: 'Do indoor traps replace professional mosquito control?',
    answer: 'No. Indoor traps only catch insects already inside your home — they do nothing about the mosquito and tick population breeding in your yard. Most flying insects indoors originate outdoors and slip in through doors and screens. The lasting fix is reducing the outdoor population with a professional barrier spray (from $99 in the GTA) so far fewer insects reach the house in the first place. Use indoor traps as cleanup, not as your main line of defence.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'The best indoor fly and mosquito traps in Canada for 2026 — plug-in UV, fan-suction, and glue-board picks compared by room size and refill cost, how they work indoors, and whether they actually catch mosquitoes.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function BestIndoorFlyMosquitoTrapCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Buyer’s guide to the best indoor fly and mosquito traps in Canada for 2026.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Indoor Fly & Mosquito Trap Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Indoor Fly &amp; Mosquito Trap</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Plug-in UV, fan-suction, and glue-board traps compared by room size and refill cost — plus the honest truth about how well any of them catch mosquitoes indoors.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar name="Katchy Indoor Insect Trap (UV + fan + glue board)" search="katchy indoor insect trap uv fan" label="Best overall indoor" />

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For most Canadian homes, a plug-in UV + fan + glue-board trap (Katchy-style) is the best all-round indoor pick &mdash; it quietly catches fruit flies, fungus gnats, houseflies, and the occasional indoor mosquito using cheap refill glue boards. No indoor trap is strong against mosquitoes specifically, because mosquitoes hunt by carbon dioxide and body heat, not light.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>The UV + fan + glue-board trap (Katchy-style) is the best overall pick for small-to-medium rooms like bedrooms and kitchens.</li>
              <li>Replacement glue boards run about $13&ndash;$18 for a 4-pack.</li>
              <li>A DynaTrap fan-suction UV unit covers up to roughly 600 sq ft with no refills to buy.</li>
              <li>Mosquitoes (Culex and Aedes) are drawn by CO&#8322; and body heat, so UV-light traps catch them poorly.</li>
              <li>A UV + sticky-cartridge plug-in is the simplest set-and-forget option for a single room.</li>
              <li>Pair any indoor trap with source control and an outdoor barrier so far fewer insects get inside.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Our Picks — award row */}
      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow
            heading="Our Picks — Best Indoor Fly & Mosquito Traps in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'UV + Fan + Glue-Board Trap (Katchy-style)',
                why: 'Quietly catches fruit flies, fungus gnats, houseflies, and the occasional indoor mosquito using cheap replaceable glue boards — the best all-round pick for a bedroom or kitchen.',
                search: 'katchy indoor insect trap uv fan',
                score: 8.6,
                featured: true,
                pros: ['Silent and mess-free', 'Cheap glue-board refills', 'Great on gnats & fruit flies'],
                cons: ['Recurring refill cost', 'Only fair on mosquitoes'],
              },
              {
                badge: 'Best for Large Rooms',
                name: 'DynaTrap Fan-Suction UV Unit',
                why: 'Fan-suction UV that covers up to roughly 600 sq ft with no refills — you just rinse the basket. The pick for an open kitchen or family room.',
                search: 'dynatrap indoor insect trap dt160',
                score: 8.0,
                pros: ['Covers up to ~600 sq ft', 'No refills to buy', 'Fair–good mosquito catch'],
                cons: ['Quiet fan hum', 'You empty and rinse the basket'],
              },
              {
                badge: 'Best Set-and-Forget',
                name: 'UV + Sticky-Cartridge Plug-In (Zevo-style)',
                why: 'The simplest single-room plug-in: a small light plus a replaceable adhesive cartridge, silent and clean for a nightstand outlet.',
                search: 'zevo flying insect trap plug in',
                score: 7.4,
                pros: ['Truly set-and-forget', 'Silent and clean', 'Compact plug-in'],
                cons: ['Cartridges add up', 'Small coverage only'],
              },
              {
                badge: 'Best Budget / Garage',
                name: 'UV Glue-Board Wall Unit',
                why: 'A cheap wall-mount UV unit with replaceable glue cards for a garage or entryway where noise and looks matter less.',
                search: 'indoor fly trap uv light glue board plug in',
                score: 6.9,
                pros: ['Lowest cost', 'Good for garages & entryways', 'Cheap glue-card refills'],
                cons: ['Low mosquito catch', 'Utilitarian look'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Bedroom or kitchen?</strong> The <em>Best Overall</em> UV + fan + glue-board trap is the quiet, all-round winner. <strong>Open-plan or large room?</strong> The <em>Best for Large Rooms</em> DynaTrap covers more with no refills. <strong>Want zero fuss on a nightstand?</strong> Grab the <em>Best Set-and-Forget</em> plug-in — but remember no indoor trap fixes the source. Cutting the outdoor population with <Link href="/mosquito-control">professional barrier spray</Link> means far fewer insects reach the door in the first place.
              </>
            }
          />
        </div>
      </section>

      {/* Product picks table */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Buyer&rsquo;s Guide · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Best Indoor Traps in Canada, Compared</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Four indoor trap styles cover nearly every situation. Match the trap to the room size and to whether you would rather buy refills or rinse a chamber. Prices are typical Canadian retail (Amazon.ca / Canadian Tire) as of July 2026.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Pick</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Room size</th>
                  <th className="px-4 py-3 text-left">Refill cost</th>
                  <th className="px-4 py-3 text-left">Check price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Best overall</td>
                  <td className="px-4 py-3 text-gray-800">UV + fan + glue board</td>
                  <td className="px-4 py-3 text-gray-700">Small–medium (bedroom, kitchen)</td>
                  <td className="px-4 py-3 text-gray-700">Glue boards ~$13–18 / 4-pack</td>
                  <td className="px-4 py-3"><BuyLink search="katchy indoor insect trap uv fan" block>Check price &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Best for large rooms</td>
                  <td className="px-4 py-3 text-gray-800">UV + fan suction (no refill)</td>
                  <td className="px-4 py-3 text-gray-700">Up to ~600 sq ft</td>
                  <td className="px-4 py-3 text-gray-700">None — rinse the basket</td>
                  <td className="px-4 py-3"><BuyLink search="dynatrap indoor insect trap dt160" block>Check price &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Best plug-in (set &amp; forget)</td>
                  <td className="px-4 py-3 text-gray-800">UV + sticky cartridge</td>
                  <td className="px-4 py-3 text-gray-700">Small (nightstand outlet)</td>
                  <td className="px-4 py-3 text-gray-700">Cartridges ~$10–14 each</td>
                  <td className="px-4 py-3"><BuyLink search="zevo flying insect trap plug in" block>Check price &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 last:border-0">
                  <td className="px-4 py-3 font-bold text-brand-800">Best budget / garage</td>
                  <td className="px-4 py-3 text-gray-800">UV glue-board wall unit</td>
                  <td className="px-4 py-3 text-gray-700">Medium (garage, entryway)</td>
                  <td className="px-4 py-3 text-gray-700">Glue cards ~$12 / 6-pack</td>
                  <td className="px-4 py-3"><BuyLink search="indoor fly trap uv light glue board plug in" block>Check price &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices approximate, Canadian retail, July 2026. Always confirm refill availability before buying — a trap with discontinued glue boards becomes landfill fast.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">Reality check:</strong> indoor traps only manage insects <em>already</em> inside. The flies and mosquitoes bothering you almost all came from outside. The lasting fix is dropping the outdoor population so fewer get in — see our <Link href="/blog/best-mosquito-trap-canada" className="text-emerald-700 underline font-semibold">outdoor mosquito trap guide</Link> and <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Type comparison table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Indoor Trap Types: What Each One Is Good At</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Trap type</th>
                  <th className="px-3 py-2 text-left">Best against</th>
                  <th className="px-3 py-2 text-left">Mosquito catch</th>
                  <th className="px-3 py-2 text-left">Noise / mess</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['UV + fan + glue board', 'Fruit flies, gnats, small flies', 'Fair', 'Silent, clean'],
                  ['UV + fan suction (basket)', 'Houseflies, gnats, moths', 'Fair–good', 'Quiet fan hum, rinse basket'],
                  ['UV + sticky cartridge (plug-in)', 'Fruit flies, small flies', 'Low–fair', 'Silent, clean'],
                  ['Glue board only (no light)', 'Houseflies near windows', 'Low', 'Silent, sticky sheet'],
                  ['Bug-zapper grid (electric)', 'Houseflies, moths', 'Low', 'Loud, splatter mess'],
                ].map(([type, best, mozzie, noise]) => (
                  <tr key={type} className="border-t border-navy-50">
                    <td className="px-3 py-2 font-semibold text-brand-800">{type}</td>
                    <td className="px-3 py-2 text-gray-700">{best}</td>
                    <td className="px-3 py-2 text-gray-700">{mozzie}</td>
                    <td className="px-3 py-2 text-gray-700">{noise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Mosquito ratings reflect that mosquitoes locate hosts by carbon dioxide and body heat rather than light — see the <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Mosquitoes</a>.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <AffiliateDisclosure />

          <h2>How Indoor Insect Traps Actually Work</h2>
          <p>Nearly every consumer indoor trap starts with the same lure: a <strong>UV-A (blacklight) LED</strong> that many flying insects drift toward, especially in a darkened room. What happens next is what separates the categories. A <strong>glue-board</strong> trap holds a sticky sheet the insect lands on and cannot leave. A <strong>fan-suction</strong> trap uses a quiet fan to pull the insect down into a chamber where it dehydrates. A <strong>sticky-cartridge plug-in</strong> combines a small light with a replaceable adhesive card. And an <strong>electric bug-zapper grid</strong> electrocutes the insect on contact.</p>
          <p>For a bedroom or kitchen, the glue-board and fan styles win because they are silent and mess-free — no snap or splatter in the middle of the night. Zapper grids are effective on houseflies but loud and messy, and independent research has long shown open UV grids kill mostly harmless moths and beetles rather than biting insects. That is a fine trade-off in a garage, a poor one on a nightstand.</p>

          <h2>The Honest Truth About Catching Mosquitoes Indoors</h2>
          <p>Here is the part most product listings gloss over: <strong>indoor light traps are much better at catching flies and gnats than mosquitoes.</strong> Mosquitoes — mostly <em>Culex pipiens</em> (the common house mosquito that overwinters in warm basements) and sometimes <em>Aedes</em> species — do not home in on light the way a moth does. They track <strong>carbon dioxide, body heat, and skin odour</strong>. In a bedroom, a sleeping person is a far stronger beacon than any plug-in glow, so a light-only trap competes poorly.</p>
          <p>Fan-suction and glue-board traps still catch a meaningful share of indoor mosquitoes — especially Culex drifting near a window at night — which is why they beat a bare zapper grid for mosquito duty. But if mosquitoes indoors are your main problem, the trap is a secondary tool. The primary fixes are stopping them getting in and killing the population outside. For yard-scale trapping, our <Link href="/blog/best-mosquito-trap-canada">best outdoor mosquito trap guide</Link> covers CO&#8322; and propane units built for that job, and our breakdown of whether <Link href="/blog/bug-zappers-canada-do-they-work">bug zappers actually work in Canada</Link> explains why the classic grid disappoints on mosquitoes.</p>

          <h2>How to Choose the Right Indoor Trap</h2>
          <ul>
            <li><strong>Match the room size.</strong> A small plug-in covers a nightstand zone; a fan-suction DynaTrap-style unit handles up to ~600 sq ft. One trap does not cover a whole open-plan floor.</li>
            <li><strong>Decide: refills or rinsing.</strong> Glue-board and cartridge traps mean recurring refill cost but zero cleanup. Fan-suction traps have no refills but you empty and rinse the basket.</li>
            <li><strong>Confirm refills are still sold.</strong> A $50 trap with discontinued glue boards is disposable. Check the refill listing before you buy.</li>
            <li><strong>Pick silent for bedrooms.</strong> UV + glue board is the quietest category. Save loud zapper grids for the garage.</li>
            <li><strong>Run it in the dark, near the source.</strong> Traps compete with other light — place them near garbage, drains, fruit bowls, or potted plants and switch off competing lights.</li>
          </ul>

          <div className="not-prose my-6 flex flex-wrap gap-3">
            <BuyLink search="katchy indoor insect trap uv fan glue">Best-overall indoor trap on Amazon.ca &rarr;</BuyLink>
            <BuyLink search="indoor insect trap glue board refills">Glue-board refills &rarr;</BuyLink>
          </div>

          <h2>Stop the Flies and Mosquitoes at the Source</h2>
          <p>A trap is the last line of defence, not the first. Before you rely on one, close the doors flies and mosquitoes walk through:</p>
          <ol>
            <li><strong>Fix window and door screens.</strong> Even a small tear or a warped screen door is an open invitation. This single step ends most indoor mosquito problems.</li>
            <li><strong>Kill indoor breeding sites.</strong> Empty plant saucers, clean the recycling, and treat wet floor drains, sump pits, or catch basins with <strong>BTI</strong> (Bti larvicide) so larvae cannot mature.</li>
            <li><strong>Clear fruit-fly food.</strong> Overripe produce, damp mop heads, and drain gunk breed fruit flies and fungus gnats faster than any trap can catch them.</li>
            <li><strong>Cut the outdoor population.</strong> The flies and mosquitoes indoors came from outside. A residual <Link href="/mosquito-control">yard barrier spray</Link> knocks the outdoor numbers down so fewer ever reach the door.</li>
          </ol>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Fewer bugs get inside when the yard is treated</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Indoor traps clean up the stragglers — BuzzSkito removes the source. Our licensed barrier spray covers your whole yard from $99, cutting the mosquito population that drifts toward your doors and windows. 150+ five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Indoor Traps vs the Alternatives</h2>
          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Solution</th><th className="px-3 py-2 text-left">Typical cost</th><th className="px-3 py-2 text-left">What it fixes</th><th className="px-3 py-2 text-left">Mosquitoes?</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Indoor UV/glue trap</strong></td><td className="px-3 py-2">$25–$90 + refills</td><td className="px-3 py-2">Flies &amp; gnats already inside</td><td className="px-3 py-2">Fair (backup only)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Fixing screens</td><td className="px-3 py-2">$0–$40</td><td className="px-3 py-2">Entry points</td><td className="px-3 py-2">Prevents entry</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">BTI in drains/water</td><td className="px-3 py-2">$15–$30/season</td><td className="px-3 py-2">Indoor breeding sites</td><td className="px-3 py-2">Stops larvae</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">From $99 / treatment</td><td className="px-3 py-2">The outdoor population</td><td className="px-3 py-2">Yes — at the source</td></tr>
            </tbody>
          </table>
          <p>The most effective indoor-bug strategy is a layered one: fix the screens, kill any indoor breeding water with BTI, run a quiet UV/glue trap for the stragglers, and treat the yard so the population outside is a fraction of what it would be. An indoor trap alone treats the symptom; source control treats the cause.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-mosquito-trap-canada">Best Mosquito Trap Canada — Outdoor Buyer&rsquo;s Guide</Link></li>
            <li><Link href="/blog/bug-zappers-canada-do-they-work">Do Bug Zappers Actually Work in Canada?</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Traps Catch the Stragglers — We Remove the Source" subtext="Get a free quote for licensed barrier spray. From $99. Fewer mosquitoes outside means fewer inside." variant="dark" />
    </>
  )
}
