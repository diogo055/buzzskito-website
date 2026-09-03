import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'best-squirrel-proof-bird-feeder-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Best Squirrel-Proof Bird Feeder Canada 2026 — The Feeder Is Only Half the Job'
const META_TITLE = 'Best Squirrel-Proof Bird Feeder Canada'

const FAQS = [
  {
    question: 'What is the best squirrel-proof bird feeder in Canada?',
    answer: 'For most Canadian yards the best pick is a weight-activated metal tube feeder — the Brome Squirrel Buster Plus is the reference model, with the smaller Squirrel Buster Classic covering tighter spaces and smaller budgets. The mechanism is simple and it is the reason it works: a shroud drops under a squirrel’s weight and closes the seed ports, while a chickadee or finch is far too light to trigger it. Just as important, the ports, perches and cap are metal, so a frustrated grey squirrel cannot chew a new hole. Buy it with a pole and a baffle rather than on its own — a weight-activated feeder hung from a tree branch is still going to get raided from above, and the placement is what most Canadian buyers get wrong.',
  },
  {
    question: 'Do squirrel-proof bird feeders actually work?',
    answer: 'The good ones do, but only inside the right setup. A weight-activated feeder reliably defeats a squirrel that has to stand on it to feed, because the animal’s own weight shuts the ports. What it cannot defeat is a squirrel that never has to stand on it — one that drops onto the top from a branch, hangs by its back feet from a nearby eaves trough, or simply feeds on the seed your birds kick to the ground. That is why the honest answer is that the feeder is roughly half the job and the pole, the baffle, and the distance to the nearest launch point are the other half. Buy the feeder and the placement together, and the success rate is very high. Buy the feeder alone and hang it off a maple branch, and you have bought an expensive squirrel toy.',
  },
  {
    question: 'How high should a bird feeder be to keep squirrels off?',
    answer: 'The working rule is 5–7–9: at least 5 feet off the ground, at least 7 feet horizontally from anything a squirrel can launch from, and at least 9 feet below any overhanging branch. A grey squirrel can jump roughly 4 feet vertically and around 8 to 10 feet horizontally with a running start, and it can drop a surprising distance onto a feeder without hurting itself, so those three numbers are just those abilities plus a margin. In Canada there is a fourth number nobody prints on the box: snow. A 5-foot pole with a 3-foot drift piled at the base of it in February is a 2-foot pole, and every squirrel on the street will work that out before you do. Mount higher than the rule and shovel the base out after storms.',
  },
  {
    question: 'Is a pole and baffle better than a squirrel-proof feeder?',
    answer: 'Neither is better — they solve different halves of the same problem, and the combination is what actually wins. A baffle is a physical barrier (a wrap-around cone or a torpedo-shaped tube) that stops a squirrel climbing the pole from below. A weight-activated feeder stops the squirrel that got past the baffle by dropping in from above. If you can only buy one thing, buy the baffle first if your feeder sits on a pole in the open, because climbing the pole is the easiest attack route and blocking it is cheap. Buy the weight-activated feeder first if your only mounting option is a hanging one near trees, because there the drop-in attack is the one you cannot engineer away. Most people who solve the problem permanently end up owning both.',
  },
  {
    question: 'Do squirrels eat nyjer or safflower seed?',
    answer: 'Far less enthusiastically than they eat sunflower seed, peanuts, or corn, which is why seed choice is a real lever and not just folklore. Nyjer (thistle) is tiny, oily, and served in fine-mesh socks or ports that squirrels find fiddly, so a dedicated nyjer finch feeder is often left alone even in a yard overrun with squirrels. Safflower is bitter enough that many squirrels ignore it while cardinals, chickadees, and house finches take it happily. Neither is a guarantee — a hungry squirrel in a hard Ontario winter will eat things it would refuse in July — but switching a problem feeder from peanuts or striped sunflower to safflower or nyjer often reduces the pressure enough that the baffle and the feeder mechanism can finish the job. Do not put peanuts out and then wonder why you have squirrels.',
  },
  {
    question: 'Where should I place a bird feeder for a Canadian winter?',
    answer: 'Somewhere you can actually reach in a storm, somewhere the birds have cover, and somewhere the snow will not shorten your pole. Practically that means a pole mounted in the open with a baffle, roughly 3 to 4 metres from a shrub or evergreen so birds have an escape route from hawks and cats but nothing to launch off, on a side of the house sheltered from the prevailing northwest wind. Mount the feeder higher than the 5-foot rule so a metre of accumulated snow does not hand a squirrel a free step up, and clear the base after big dumps. Winter is when feeding matters most and also when you least want to wade out — a spot you can reach from a shovelled path is a spot you will actually keep filled.',
  },
  {
    question: 'Will a bird feeder attract mice, rats, or raccoons?',
    answer: 'Spilled seed will, and that is the part people underestimate. A feeder is not the problem; a growing carpet of discarded hulls and dropped seed under the feeder is a nightly food source for mice, rats, raccoons, and skunks, and it is one of the most common reasons a tidy suburban yard suddenly has a rodent issue. The fixes are simple: fit a seed catcher tray under the feeder, rake or vacuum the shell litter regularly, use hulled sunflower chips so there is no shell drop at all, and bring the feeder in at night if raccoons are working your street. If you already have rodents, deal with that separately — trapping and exclusion, not a different feeder.',
  },
  {
    question: 'Should I take my bird feeder down in spring in Ontario?',
    answer: 'In bear country, yes — Ontario’s bear-safety guidance asks residents to take feeders down through the spring and summer months and put them back up only once bears are denning for winter, because a feeder is one of the strongest food attractants a property can offer a black bear. Across most of the southern GTA that is not a live concern, but if you are north of the city, in cottage country, or anywhere with a bear history, treat the feeder as a late-autumn-to-early-spring appliance. Check your own municipality’s current guidance rather than relying on a rule of thumb. Elsewhere, the summer question is more about hygiene: warm weather plus damp seed grows mould and spreads disease between birds, so summer feeding demands more frequent cleaning, not less.',
  },
  {
    question: 'How often do I need to clean a bird feeder?',
    answer: 'Every couple of weeks as a baseline, and more often in warm, damp weather or whenever you have a big flock of finches using it. Feeders concentrate a lot of birds at one small surface, and that is exactly how salmonellosis and other diseases move through a local population — periodic outbreaks at feeders are common enough that provincial wildlife agencies occasionally ask people to take feeders down for a few weeks. Empty it, scrub it, rinse it thoroughly, and let it dry completely before refilling. This is a genuine argument for the metal, tool-free-disassembly feeders: a design you can pull apart and put back together in two minutes is a design you will actually clean, and a filthy feeder you never take down is worse for birds than no feeder at all.',
  },
  {
    question: 'Are motorised spinning squirrel feeders worth it in Canada?',
    answer: 'They work, they are entertaining, and they are the wrong tool for a Canadian winter. A battery-powered spinning feeder detects a squirrel’s weight and rotates the perch ring until the animal lets go, and in mild weather it is effective. The problem is the season you most need a feeder: battery capacity falls sharply in deep cold, motors and moving parts stiffen with ice, and a mechanism that needs charging every few days is a mechanism you will stop maintaining in January. A passive weight-activated feeder has no batteries, no motor, and nothing to freeze. If you want the spinner as a second, summer-yard feeder, fine — just do not make it the one keeping chickadees fed at minus twenty.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Squirrel-proof bird feeders that work in Canada: weight-activated metal feeders, the 5-7-9 rule, baffles and poles, and the winter snow mistake.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-squirrel-proof-bird-feeder-canada')

export default function BestSquirrelProofBirdFeederCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buyer’s guide to squirrel-proof bird feeders — weight-activated metal tube feeders, the 5-7-9 placement rule, baffles and poles, seed choice, and winter snow-depth mistakes.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Squirrel-Proof Bird Feeder Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Squirrel-Proof Bird Feeders</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A weight-activated metal feeder beats a grey squirrel that has to stand on it. It does nothing about the one dropping in from the maple above, or the drift of snow that turns your 5-foot pole into a 2-foot pole in February. Here is the whole system &mdash; feeder, pole, baffle, placement and seed &mdash; and where the cheap option is genuinely the right call.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Weight-activated squirrel-proof tube feeder" search="brome squirrel buster plus bird feeder" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best squirrel-proof bird feeder in Canada is a <strong>weight-activated metal tube feeder</strong> &mdash; a Brome Squirrel Buster Plus for a full yard, the smaller Classic for a balcony or tight space &mdash; mounted on a <strong>pole with a baffle</strong> and placed by the <strong>5&ndash;7&ndash;9 rule</strong>: 5 ft up, 7 ft from any launch point, 9 ft below overhanging branches. The mechanism closes the seed ports under a squirrel&rsquo;s weight while a chickadee feeds freely. The feeder is only half the solution; placement is the other half, and in Canada you must add snow depth to the maths.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Weight-activated shroud</strong> closes the ports under a squirrel and stays open for songbirds &mdash; the only mechanism that works passively, with no batteries.</li>
              <li><strong>Metal ports, perches and cap.</strong> Plastic gets chewed into a new opening within a season.</li>
              <li><strong>5&ndash;7&ndash;9 placement</strong> beats any feeder bought and hung badly &mdash; and a metre of snow silently shortens your pole.</li>
              <li><strong>A baffle is the cheapest win</strong> if your feeder is pole-mounted; the feeder mechanism handles the drop-in attack a baffle cannot.</li>
              <li><strong>Seed choice is a real lever:</strong> safflower and nyjer draw far less squirrel attention than peanuts, corn, or striped sunflower.</li>
              <li><strong>Spilled seed is what brings rodents</strong> &mdash; fit a catcher tray or use hulled chips, and rake the shell litter.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="squirrels" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Squirrel-Proof Bird Feeders for Canadian Yards"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Brome Squirrel Buster Plus',
                why: 'The reference weight-activated tube feeder: a metal shroud drops under a squirrel and closes every seed port, while chickadees, finches, nuthatches and cardinals feed untouched. Chew-proof metal ports and cap, a large seed capacity so you refill less often in deep winter, adjustable spring tension so you can also lock out grackles and starlings, and tool-free disassembly that makes routine cleaning a two-minute job instead of a chore you skip.',
                search: 'brome squirrel buster plus bird feeder',
                score: 9.4,
                featured: true,
                pros: ['Passive mechanism — no batteries to die in the cold', 'Metal ports and cap resist chewing', 'Adjustable weight setting excludes large nuisance birds', 'Comes apart tool-free for cleaning'],
                cons: ['Sits well above the price of a basic tube feeder', 'Still needs a pole and baffle to be fully effective'],
              },
              {
                badge: 'Best Compact',
                name: 'Brome Squirrel Buster Classic',
                why: 'The same weight-activated principle in a smaller, lighter body — the sensible pick for a balcony, a small city garden, a second feeder, or a household that would rather refill a little more often than pay for the flagship. Holds less seed and drops the adjustable weight setting, but the core squirrel-shutting mechanism and the metal ports are unchanged, which is what you are actually buying.',
                search: 'brome squirrel buster classic bird feeder',
                score: 8.8,
                pros: ['Meaningfully cheaper than the Plus', 'Light enough for balcony and hook mounting', 'Same weight-activated mechanism and metal ports'],
                cons: ['Smaller capacity means more winter refills', 'No adjustable weight setting for large birds'],
              },
              {
                badge: 'Best Upgrade Buy',
                name: 'Pole System with Wrap-Around Baffle',
                why: 'The single highest-value thing most people are missing. A proper pole set in the open with a wrap-around cone or torpedo baffle blocks the easiest attack route — climbing up from the ground — and lets you place the feeder by the 5-7-9 rule instead of wherever a tree branch happens to be. Cheap relative to the feeder it protects, and it upgrades a feeder you already own.',
                search: 'bird feeder pole with squirrel baffle kit',
                score: 9.0,
                pros: ['Blocks the most common attack route outright', 'Lets you control placement instead of the tree deciding', 'Protects a feeder you already own'],
                cons: ['Needs open ground away from fences and decks', 'Must be sunk deep enough not to lean in frost heave'],
              },
              {
                badge: 'Best for Heavy Pressure',
                name: 'Caged Metal Feeder (Squirrel and Large-Bird Exclusion)',
                why: 'When squirrels are relentless and grackles have found the yard too, a steel cage around a tube feeder is the blunt, mechanical answer: the mesh admits chickadees, finches and nuthatches and physically excludes anything larger. No mechanism to defeat and nothing to adjust. The trade-off is real — cardinals and jays are excluded along with the squirrels — so buy it knowing which birds you are choosing.',
                search: 'caged squirrel proof bird feeder metal',
                score: 8.2,
                pros: ['Purely mechanical — nothing to trigger or calibrate', 'Also excludes grackles, starlings and pigeons', 'Very durable in steel'],
                cons: ['Excludes cardinals and jays too', 'Cage makes cleaning slower'],
              },
            ]}
            whichToBuy={
              <>
                <strong>One good feeder for a suburban yard?</strong> The <em>Best Overall</em> Squirrel Buster Plus, mounted on a pole with a baffle &mdash; that pairing solves the problem for most people permanently. <strong>Balcony, small garden, or a second feeder?</strong> The <em>Best Compact</em> Classic keeps the mechanism and drops the price. <strong>Already own a decent feeder that keeps getting raided?</strong> Buy the <em>Best Upgrade</em> pole and baffle first &mdash; it is the cheaper fix and often the only one you need. <strong>Squirrels and grackles both winning?</strong> The <em>Best for Heavy Pressure</em> caged feeder ends the argument, at the cost of the larger songbirds.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Feeder Types Compared &middot; Updated August 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Weight-Activated vs Caged vs Baffled Pole vs Motorised — What Each Actually Defeats</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Every one of these is sold as &ldquo;squirrel-proof&rdquo;, but they block different attacks. Here is the honest breakdown, with a live Amazon.ca availability check per type.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Attack it stops</th>
                  <th className="px-4 py-3 text-left">Attack it does not stop</th>
                  <th className="px-4 py-3 text-left">Winter behaviour</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Weight-activated tube<br /><span className="font-normal text-xs text-gray-500">Squirrel Buster class</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best all-round</strong> &mdash; any squirrel that stands on the feeder</td>
                  <td className="px-4 py-3 text-gray-700">Ground foraging under the feeder</td>
                  <td className="px-4 py-3 text-gray-700">Passive; nothing to freeze or charge</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="brome squirrel buster plus bird feeder" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Pole + baffle<br /><span className="font-normal text-xs text-gray-500">cone or torpedo</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best value</strong> &mdash; climbing the pole from the ground</td>
                  <td className="px-4 py-3 text-gray-700">Drop-in from a branch, jump from a fence or deck</td>
                  <td className="px-4 py-3 text-gray-700">Snow drifts effectively shorten the pole</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bird feeder pole with squirrel baffle kit" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Caged feeder<br /><span className="font-normal text-xs text-gray-500">steel mesh surround</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Good</strong> &mdash; squirrels and large nuisance birds alike</td>
                  <td className="px-4 py-3 text-gray-700">Nothing much, but it excludes cardinals and jays too</td>
                  <td className="px-4 py-3 text-gray-700">Robust; mesh can ice up in freezing rain</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="caged squirrel proof bird feeder metal" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Motorised spinner<br /><span className="font-normal text-xs text-gray-500">battery-powered perch ring</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Fair</strong> &mdash; squirrels that perch, in mild weather</td>
                  <td className="px-4 py-3 text-gray-700">Anything, once the battery is flat</td>
                  <td className="px-4 py-3 text-gray-700">Poor &mdash; cold guts battery life, ice stiffens the mechanism</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="spinning squirrel proof bird feeder battery" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Feeders and baffles are hardware, not pesticides &mdash; none require PMRA registration and none carry a chemical claim. That makes physical exclusion the frictionless, fully legal first move against feeder raiders in any Canadian yard.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Do not solve this by trapping.</strong> Under Ontario&rsquo;s Fish and Wildlife Conservation Act a captured wild animal may generally only be released within 1 km of where it was caught, so driving a squirrel to a park across town is both ineffective and legally risky &mdash; and a squirrel released 1 km away simply walks back to your feeder. Exclusion is the whole game. Our <Link href="/blog/best-live-animal-trap-canada" className="text-emerald-700 underline font-semibold">live-trap guide</Link> covers what that law actually permits.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Is the Best Squirrel-Proof Bird Feeder in Canada?</h2>
          <p>The best squirrel-proof bird feeder for a Canadian yard is a weight-activated metal tube feeder &mdash; a Brome Squirrel Buster Plus for a full yard, the smaller Squirrel Buster Classic where space or budget is tighter &mdash; mounted on a pole with a baffle and positioned by the 5&ndash;7&ndash;9 rule. That is the whole recommendation, and the rest of this guide is about why each half of it matters, because buying the feeder without the placement is the single most common way Canadians spend $150 and still lose.</p>
          <p>The mechanism is worth understanding before you spend anything. A weight-activated feeder carries a metal shroud around the seed ports on a calibrated spring. A chickadee at roughly 11 grams, a goldfinch at 13, even a cardinal at 45, sits on the perch and nothing moves. A grey squirrel at 400 to 600 grams puts the shroud straight down over the ports, and the feeder closes while the animal is standing on it. Nothing is powered, nothing is triggered electronically, and nothing needs charging &mdash; which is exactly why this is the design that survives a Canadian January when a battery-powered spinner does not.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="brome squirrel buster plus bird feeder">Squirrel Buster Plus →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="brome squirrel buster classic bird feeder">Squirrel Buster Classic →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bird feeder pole with squirrel baffle kit">Pole + baffle kit →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="caged squirrel proof bird feeder metal">Caged feeder →</BuyLink>
          </div>

          <h2>The 5&ndash;7&ndash;9 Rule, and the Fourth Number Canadians Need</h2>
          <p>Everything about squirrel-proofing a feeder comes down to denying the animal a route. The standard placement rule &mdash; used by birders everywhere and worth following exactly &mdash; is <strong>5&ndash;7&ndash;9</strong>: at least five feet off the ground, at least seven feet horizontally from anything the squirrel can launch from, and at least nine feet below any overhanging branch. Those numbers are not arbitrary; they are a grey squirrel&rsquo;s jumping ability with a margin built in. Squirrels are strong vertical jumpers, considerably better horizontal jumpers with a run-up, and remarkably willing to drop a long way onto a target they can see.</p>
          <p>The fourth number is snow, and no American-written guide mentions it because it does not need to. A five-foot pole with three feet of drifted, wind-packed snow at its base in February is a two-foot pole. Every squirrel on the street will discover this before you do, and it explains a lot of &ldquo;my squirrel-proof feeder stopped working in winter&rdquo; complaints. Mount higher than the rule requires &mdash; six or six and a half feet is not excessive in the GTA snowbelt &mdash; and shovel or rake out the base of the pole after significant storms. The same logic applies to snow piled against a fence or a deck rail: your seven-foot horizontal clearance is measured from where the squirrel can actually stand, not from where the ground was in September.</p>
          <p>Also think about what is above the feeder in winter versus summer. A branch you judged safely out of range in July, when it was carrying a full canopy of maple leaves, sits noticeably lower and is far easier to launch from once it is bare. Walk the site in leaf-off conditions before you commit to a pole location, or plan to move the pole once.</p>

          <h2>What Actually Matters in the Specification</h2>
          <p>Strip away the marketing and there are four specifications that decide whether a feeder survives a Canadian year.</p>
          <ul>
            <li><strong>A weight-activated closing mechanism.</strong> This is the core function. Look for a shroud that drops over the ports, not a &ldquo;squirrel-resistant&rdquo; sticker on an ordinary tube.</li>
            <li><strong>Metal ports, perches, and cap.</strong> Squirrels do not give up; they chew. Plastic ports become a new, larger opening within a season or two, and a chewed feeder is a permanently open feeder. Metal at every contact point is the difference between a five-year feeder and a one-year one.</li>
            <li><strong>Adjustable spring tension.</strong> A feature only the larger models carry, and genuinely useful: it lets you set the trigger weight low enough to also exclude grackles, starlings, and pigeons while chickadees and finches still feed. If large nuisance birds are half your problem, this is what solves it.</li>
            <li><strong>Tool-free disassembly.</strong> This looks like a convenience feature and is actually a bird-health feature. Feeders need regular cleaning, and a design that requires a screwdriver and ten minutes is a design you will not clean. Two-minute takedown is what makes the maintenance habit stick.</li>
          </ul>
          <p>What you can skip: decorative copper roofs, house-shaped hoppers with wide open trays, anything with a large flat surface a squirrel can sit on comfortably, and any &ldquo;squirrel-proof&rdquo; claim attached to a feeder with plastic ports and no mechanism. Put the money into the mechanism, the metal, and the pole.</p>

          <h2>The Mistake Most Canadian Buyers Make</h2>
          <p>They buy the feeder and hang it from a tree branch. It is the natural instinct &mdash; that is where the birds are, and a hook on a branch requires no digging &mdash; and it defeats the purchase almost entirely. A weight-activated feeder blocks the squirrel that has to stand on it to feed. A squirrel that has dropped onto the cap from above can hang by its hind feet from the branch, or from the feeder&rsquo;s own hanger, and pick at the ports from an angle where its weight is never on the mechanism. Suspended feeders can be salvaged with a hanging baffle above them, but a pole in the open, with a wrap-around baffle, is dramatically more reliable.</p>
          <p>The second mistake is nearly as common: putting the pole too close to something. A deck rail, a fence top, an air conditioner cabinet, a garden shed roof, a wood pile, or the lip of a raised bed all count as launch platforms, and seven feet is measured to the nearest one of them, not to the nearest tree trunk. Stand where the squirrel would stand and look at the feeder; if you think you could throw a ball into it, the squirrel can reach it.</p>
          <p>The third is under-sinking the pole. Ontario frost heave will tilt a shallow-set pole through a winter, and a leaning pole with a slipped baffle is an open invitation. Sink it properly, and check the baffle height in spring.</p>

          <h2>Seed Choice Is a Real Lever</h2>
          <p>You can change the amount of squirrel pressure your yard generates before any hardware is involved, simply by choosing what you put out. Peanuts, cracked corn, and striped sunflower are squirrel magnets; if you are running a peanut feeder and complaining about squirrels, the feeder is not your problem. Black-oil sunflower is the best all-round songbird seed and squirrels love it too, so that is where the hardware has to do the work. Safflower is the useful middle path: bitter enough that many squirrels ignore it, while cardinals, chickadees, house finches and nuthatches take it readily. Nyjer, served in a fine-port finch feeder or a mesh sock, is small and fiddly enough that it often goes untouched by squirrels entirely.</p>
          <p>Hulled sunflower chips are worth a mention for a different reason: no shells means no shell litter under the feeder, which is the debris pile that quietly recruits mice, rats, raccoons and skunks to your yard. They cost more per kilogram and they spoil faster in wet weather, but in a small city garden where ground mess matters, they can be the smarter buy. Add a seed-catcher tray under any feeder and rake the drop zone periodically regardless of what you are using &mdash; if you already have a rodent problem, our guides to <Link href="/blog/how-to-get-rid-of-mice-canada">getting rid of mice</Link> and to <Link href="/blog/best-mouse-trap-canada">choosing a mouse trap</Link> deal with that side of it properly.</p>

          <h2>When the Cheap Option Is the Right Answer</h2>
          <p>Not every yard needs a $150 feeder, and it is worth saying so plainly. If you feed only finches from a nyjer sock, squirrels will usually leave it alone and a basic feeder is fine. If your feeder hangs off a sixth-floor balcony with no tree access, you do not have a squirrel problem &mdash; you have a pigeon problem, and a different solution. If you feed casually for a few weeks a year rather than running a serious winter station, a cheap tube plus a $25 baffle will get you most of the way for a fraction of the price.</p>
          <p>The expensive feeder earns its money in one specific situation: a yard with real, persistent squirrel pressure where you intend to feed birds properly through the winter, year after year. There, the metal construction, the mechanism, and the cleanability turn into a feeder that is still working in five years rather than a chewed plastic tube you replace every spring. And there is an honest limit worth stating: if your actual visitor is a raccoon working the feeder at 2 a.m., no bird feeder mechanism is rated for that animal&rsquo;s strength or ingenuity. Bring the feeder in at night, and treat the raccoon as its own problem &mdash; our <Link href="/blog/raccoon-deterrent">raccoon deterrent guide</Link> covers what actually works in Ontario and what the law allows.</p>

          <h2>Where to Buy in Canada</h2>
          <p>Weight-activated feeders, poles and baffles are widely stocked here. Amazon.ca carries the full Brome Squirrel Buster range plus most pole and baffle kits, generally with the deepest selection. Canadian Tire, Home Depot and Rona all carry feeders, poles and seed seasonally, with shelf space expanding sharply in autumn as the winter feeding season begins &mdash; which is also when local stock is best and when specific models sell out. Wild Birds Unlimited and independent nature shops carry the specialist gear and, more usefully, staff who know what is raiding feeders in your specific neighbourhood.</p>
          <p>Buy the pole and baffle at the same time as the feeder. It is the item people postpone, and postponing it is what turns a good feeder into a story about how squirrel-proof feeders do not work.</p>

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

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/raccoon-deterrent">Raccoon Deterrents Canada — The Honest Tier List</Link></li>
            <li><Link href="/blog/best-live-animal-trap-canada">Best Live Animal Trap Canada — And What Ontario Law Actually Permits</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada — Exclusion First</Link></li>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Trap Canada — Which Type Actually Catches</Link></li>
            <li><Link href="/blog/best-pest-control-equipment-canada">Best Pest-Control Equipment Canada — The Full Device Hub</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="squirrels" />
      </article>
    </>
  )
}
