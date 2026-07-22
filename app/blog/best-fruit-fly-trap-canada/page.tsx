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

const SLUG = 'best-fruit-fly-trap-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Best Fruit Fly Trap Canada 2026 — TERRO vs Katchy vs Sticky Ribbons'
const META_TITLE = 'Best Fruit Fly Trap Canada 2026: TERRO vs Katchy vs Ribbons'

const FAQS = [
  {
    question: 'What is the best fruit fly trap in Canada?',
    answer: 'The TERRO Fruit Fly Trap (the little red apple, model T2502 in the two-pack) is the best fruit fly trap for most Canadian kitchens. It uses a vinegar-based liquid lure that mimics the fermentation odour fruit flies hunt for, drowns them inside the apple where you never see them, and each trap stays effective for about 30 days or until full. It out-catches sticky ribbons and UV traps on fruit flies specifically because fruit flies find food by smell, not light. Pair it with removing the breeding source — overripe fruit, drain gunk, a forgotten potato — or no trap on earth will end the infestation.',
  },
  {
    question: 'Do TERRO fruit fly traps really work?',
    answer: 'Yes — with two conditions. First, the lure needs 24–48 hours to reach full attractiveness after you open it, so do not judge it on day one. Second, a trap only catches adults; the eggs and larvae already in your fruit bowl or drain keep hatching for another one to two weeks regardless. Used alongside source removal, a TERRO trap visibly thins the cloud within days and mops up stragglers over two to three weeks. Used alone next to an open compost bin, it becomes a fruit fly census, not a solution.',
  },
  {
    question: 'How long does it take to get rid of fruit flies with traps?',
    answer: 'Plan for two to three weeks. A fruit fly goes from egg to breeding adult in as little as 8–10 days at room temperature, and each female lays up to 500 eggs, so the flies you see today are only the current generation. Traps intercept adults before they lay the next round of eggs, but eggs already deposited in a drain or under a bag of onions will keep hatching for one to two more weeks. If you remove every breeding site and keep traps running, catches typically fall off a cliff around day 10–14 and reach zero by week three.',
  },
  {
    question: 'Can I just make a DIY fruit fly trap with apple cider vinegar?',
    answer: 'Yes, and it genuinely works: a small bowl of apple cider vinegar with a drop of dish soap (to break surface tension so flies sink) is the classic. A store-bought trap like the TERRO earns its price in three ways: the lure is formulated to stay attractive for about 30 days while an open ACV bowl weakens and evaporates in days, the enclosed apple design cannot be knocked over by a cat or an elbow, and you never look at a bowl of floating flies on the counter. For a one-weekend problem, DIY is fine. For the standard two-to-three-week eradication cycle, the sealed trap is less fuss.',
  },
  {
    question: 'What is the difference between fruit flies and fungus gnats?',
    answer: 'Fruit flies are tan-brown with red eyes, fly in slow loops near fruit, garbage, and drains, and breed in fermenting organic matter. Fungus gnats are darker, skinnier, mosquito-like, hover around houseplants and windows, and breed in damp potting soil. The distinction decides your weapon: vinegar-lure traps like the TERRO barely interest fungus gnats, while a UV trap like the Katchy plus a BTI soil drench (the same larvicide sold as Mosquito Bits) is the proven gnat combination. If your flies rise from plant pots when you water, you have gnats, not fruit flies.',
  },
  {
    question: 'Where should I place a fruit fly trap?',
    answer: 'Within a metre of where you see the most flies, at counter height or below — fruit flies patrol low, near food sources, unlike house flies that cruise at head height. The four highest-value spots in a Canadian kitchen are beside the fruit bowl, next to the sink drain, near the compost or green bin, and by the recycling (beer cans and wine bottles are fermentation beacons). Keep traps away from competing odours: a trap next to an open compost pail loses the smell contest every time. One trap per problem zone beats two traps in one corner.',
  },
  {
    question: 'How many fruit fly traps do I need?',
    answer: 'One trap per fly hotspot, which for most homes means two to four. A typical deployment is one beside the fruit bowl, one at the sink, and one near the compost or recycling. The TERRO conveniently sells in two-packs for this reason. A large kitchen with an island, or a house where flies have spread to a bar area or bathroom drain, justifies a fourth. More than four rarely helps — past that point the limiting factor is always an undiscovered breeding source, not trap coverage.',
  },
  {
    question: 'How often do you need to replace TERRO fruit fly trap lure?',
    answer: 'Each TERRO trap lasts about 30 days after opening, or sooner if the liquid fills with flies or evaporates. The apple housings are technically reusable, and TERRO sells the lure separately as a refill bottle, so the economical pattern for households with recurring summer flies is: buy the two-pack once, then buy refill lure each season instead of new apples. Mark the date you open each trap on the base with a marker — an exhausted lure that stops catching is the most common reason people wrongly conclude the trap has failed.',
  },
  {
    question: 'Is the TERRO fruit fly trap safe to use around food and pets?',
    answer: 'Yes. The lure is a vinegar-based food-grade attractant, not an insecticide — the trap kills by drowning, which is why it needs no Health Canada PMRA pesticide registration and can legally sit on a food-prep counter. There is nothing toxic for a curious cat or toddler to reach, and the liquid is sealed inside the apple with small entry holes. Standard sense still applies: place it where it will not be tipped into food, and wash your hands after handling the liquid when emptying, since it will be full of drowned flies.',
  },
  {
    question: 'Does the Katchy trap work on fruit flies?',
    answer: 'Partially — and it is important to be honest here. The Katchy attracts with UV light and traps with a fan and glue board, and fruit flies primarily hunt by fermentation smell, not light. Run at night in a dark kitchen (its strongest use case), a Katchy will absolutely accumulate fruit flies on the glue card, but head-to-head against a vinegar-lure trap it catches fewer of them. Where the Katchy is the outright better buy is fungus gnats — which are strongly light-attracted — and mixed infestations where you are not sure what is flying around. Our full Katchy review covers the glue-card refill economics.',
  },
  {
    question: 'Why do fruit flies keep coming back after I trap them?',
    answer: 'Because traps kill adults, and your infestation lives in the breeding material. A single overlooked source — the slime layer inside a kitchen drain, a splash of juice under the fridge, a rotting onion in a cupboard, the recycling bin — releases new adults daily, each ready to breed within about a week. If catches have not collapsed after two weeks of trapping, stop buying traps and hunt the source: check drains (cover one overnight with plastic wrap and see if flies collect beneath it), all produce storage, garbage and green bin seals, and rarely-moved appliances. Our step-by-step guide to getting rid of fruit flies walks the full search.',
  },
  {
    question: 'Are fruit fly sprays legal in Canada?',
    answer: 'Only if they carry a Health Canada PMRA registration number, and most of the sprays recommended on US websites do not. Aerosol "fruit fly killer" sprays sold in the US are pesticides, and versions without a Canadian PCP registration number cannot legally be sold or imported here — grey-market listings appear online and disappear regularly. Traps sidestep the whole issue: a drowning trap or a glue board is a device, not a pesticide, so it needs no registration and carries no residue concerns in a kitchen. That regulatory line, plus the fact that spraying does nothing about eggs in a drain, is why every pick in this guide is a trap.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'TERRO vs Katchy vs Zevo vs sticky ribbons — the best fruit fly traps you can actually buy in Canada, compared on lure science, refill economics, and the 2–3 week kill cycle. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function BestFruitFlyTrapCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian comparison of liquid-lure, UV, plug-in, and sticky-ribbon fruit fly traps, with refill economics, placement science, and PMRA context on why traps beat sprays.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Fruit Fly Trap Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Fruit Fly Trap Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Liquid-lure, UV, plug-in, and sticky-ribbon fruit fly traps compared for Canadian kitchens &mdash; which one actually out-smells your fruit bowl, what refills really cost you per season, and why every infestation takes two to three weeks to end.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar name="TERRO Fruit Fly Trap (2-pack, liquid lure)" search="terro fruit fly trap" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best fruit fly trap in Canada is the TERRO Fruit Fly Trap &mdash; the little red apple with a vinegar-based liquid lure. Fruit flies hunt by fermentation smell, not light, so a scent lure out-catches UV traps and sticky ribbons in a kitchen. Each apple works for about 30 days, refill lure keeps seasonal costs low, and pairing traps with breeding-source removal ends most infestations in two to three weeks.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Fruit flies go from egg to breeding adult in 8&ndash;10 days, and a female lays up to 500 eggs &mdash; traps alone never outrun that math.</li>
              <li>The TERRO&rsquo;s vinegar lure needs 24&ndash;48 hours to reach full strength; each trap then catches for about 30 days.</li>
              <li>Reuse the apple housings and buy refill lure &mdash; the cheapest way to run traps every summer.</li>
              <li>UV traps like the Katchy are the better pick for fungus gnats (light-attracted) and mixed infestations.</li>
              <li>Place traps low, within a metre of fruit, drains, compost, or recycling &mdash; and away from competing smells.</li>
              <li>US aerosol &ldquo;fruit fly killer&rdquo; sprays without a PMRA registration number are not legal in Canada &mdash; traps are devices and sidestep the issue entirely.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="fruit flies" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow
            heading="Our Picks — Best Fruit Fly Traps in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'TERRO Fruit Fly Trap (2-pack)',
                why: 'The vinegar-lure benchmark. Fruit flies hunt by fermentation smell, and this is the strongest, longest-lived scent lure in a sealed, counter-safe apple you can put right beside the fruit bowl.',
                search: 'terro fruit fly trap',
                score: 9.0,
                featured: true,
                pros: ['Scent lure out-catches UV on fruit flies', 'About 30 days of catching per trap', 'Refill lure keeps seasonal cost low'],
                cons: ['Needs 24–48 h to reach full strength', 'Does nothing for fungus gnats'],
              },
              {
                badge: 'Best Gnats + Flies Crossover',
                name: 'Katchy Indoor Insect Trap',
                why: 'UV light + fan + glue card. The premium pick when you are fighting fungus gnats as well as fruit flies, or are not sure which one is circling the kitchen at night.',
                search: 'katchy indoor insect trap',
                score: 8.4,
                pros: ['Excellent on light-attracted fungus gnats', 'Quiet, covers a whole room overnight', 'No liquid to spill or empty'],
                cons: ['Premium price for a fruit-fly-only problem', 'Glue cards are a recurring cost'],
              },
              {
                badge: 'Best Plug-In',
                name: 'Zevo Flying Insect Trap',
                why: 'A wall-outlet unit using UV-and-blue light with a hidden glue cartridge — the tidiest option for hallways, bathrooms, and bar areas where a counter trap is in the way.',
                search: 'zevo flying insect trap',
                score: 7.6,
                pros: ['Zero counter space, nothing to knock over', 'Flies hidden behind the cartridge', 'Good for bathroom drain-fly zones'],
                cons: ['Light lure is weaker than scent for fruit flies', 'Cartridge refills add up; Canadian stock fluctuates'],
              },
              {
                badge: 'Best Budget',
                name: 'Sticky Fruit Fly Ribbons / Stakes',
                why: 'Old-fashioned adhesive ribbons and decorative sticky stakes. Cheap insurance around a compost bin or plant shelf, but purely passive — no lure means they only catch what blunders in.',
                search: 'fruit fly sticky trap',
                score: 6.8,
                pros: ['Cheapest option per trap', 'No liquid, no power, no refills', 'Doubles for fungus gnats in plant pots'],
                cons: ['No attractant — lowest catch rate', 'Unsightly, and they grab hair and fingers'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Classic kitchen fruit fly cloud?</strong> The <em>Best Overall</em> TERRO two-pack beside the fruit bowl and sink ends it — scent beats light for this species. <strong>Flies around houseplants too, or not sure what you have?</strong> The <em>Best Crossover</em> Katchy covers both, and pairs with BTI for gnat larvae. <strong>No counter space, or flies in the bathroom?</strong> The <em>Best Plug-In</em> Zevo disappears into an outlet. <strong>Just want cheap backup?</strong> Ribbons near the compost bin — but always alongside a lure trap, never instead of one.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Trap Types Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">The 4 Types of Fruit Fly Trap (and How Each Actually Catches)</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Fruit fly traps differ on one axis that matters more than any other: <strong>what does the luring</strong>. Fruit flies navigate to food by fermentation odour, so scent-lure traps have a structural advantage in a kitchen, while light-based traps win on the species that light actually attracts. Here is the honest breakdown, with a live Amazon.ca price check per type.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Trap type</th>
                  <th className="px-4 py-3 text-left">How it lures &amp; kills</th>
                  <th className="px-4 py-3 text-left">Fruit fly effectiveness</th>
                  <th className="px-4 py-3 text-left">Recurring cost</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Liquid lure<br /><span className="font-normal text-xs text-gray-500">TERRO apple</span></td>
                  <td className="px-4 py-3 text-gray-700">Vinegar-based fermentation scent draws flies inside; they drown in the liquid</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best</strong> &mdash; scent is how fruit flies hunt</td>
                  <td className="px-4 py-3 text-gray-700">Refill lure roughly monthly in season</td>
                  <td className="px-4 py-3"><BuyLink search="terro fruit fly trap" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">UV + fan + glue<br /><span className="font-normal text-xs text-gray-500">Katchy</span></td>
                  <td className="px-4 py-3 text-gray-700">UV light attracts at night; fan pulls insects down onto a glue card</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Good</strong> &mdash; best-in-class for fungus gnats</td>
                  <td className="px-4 py-3 text-gray-700">Glue cards every few weeks</td>
                  <td className="px-4 py-3"><BuyLink search="katchy indoor insect trap" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Plug-in light + glue<br /><span className="font-normal text-xs text-gray-500">Zevo</span></td>
                  <td className="px-4 py-3 text-gray-700">Outlet unit; UV-and-blue light lures flies onto a hidden glue cartridge</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Moderate</strong> &mdash; light lure, tidy form factor</td>
                  <td className="px-4 py-3 text-gray-700">Glue cartridges every 1&ndash;2 months</td>
                  <td className="px-4 py-3"><BuyLink search="zevo flying insect trap" block>Check price →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Sticky ribbon / stake<br /><span className="font-normal text-xs text-gray-500">assorted brands</span></td>
                  <td className="px-4 py-3 text-gray-700">Passive adhesive surface &mdash; no lure; catches flies that land by chance</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Weak</strong> &mdash; supplemental only</td>
                  <td className="px-4 py-3 text-gray-700">Single-use, replace when covered</td>
                  <td className="px-4 py-3"><BuyLink search="fruit fly sticky trap" block>Check price →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            All four are non-pesticidal devices &mdash; no Health Canada PMRA registration required, safe to run on a food-prep counter. The real cost difference is refills, covered in the economics section below.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Fruit Fly Trapping — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['The pest', 'Drosophila melanogaster — tan body, red eyes, slow looping flight'],
                  ['Lifecycle speed', 'Egg to breeding adult in 8–10 days at room temperature'],
                  ['Eggs per female', 'Up to 500, laid on fermenting fruit and drain film'],
                  ['Best lure type', 'Fermentation scent (vinegar-based liquid) — not light'],
                  ['TERRO lure lifespan', 'About 30 days per trap after opening'],
                  ['Time to full lure strength', '24–48 hours after opening'],
                  ['Traps needed', '2–4: fruit bowl, sink, compost/recycling zones'],
                  ['Placement height', 'Counter height or lower — fruit flies patrol low'],
                  ['Realistic timeline', '2–3 weeks with traps + breeding-source removal'],
                  ['Peak season in Canada', 'Late summer to Thanksgiving — harvest and warm kitchens'],
                  ['Regulatory status', 'Traps are devices — no PMRA pesticide registration needed'],
                  ['When you are done', '7+ consecutive days of empty traps and no new sightings'],
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
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Is the Best Fruit Fly Trap in Canada?</h2>
          <p>The TERRO Fruit Fly Trap — the small red apple with a bottle of amber liquid inside — is the best fruit fly trap for most Canadian kitchens, and the reason is biology rather than branding. A fruit fly locates food almost entirely by smell: the yeasty, acetic odour of fermentation. The TERRO&rsquo;s lure is a vinegar-based formulation of exactly that odour profile, concentrated and sealed so it broadcasts for about a month instead of the few days an open bowl of apple cider vinegar manages. Flies follow the scent through the holes in the apple, land on the liquid, and drown. You never see them; you eventually just notice you have not seen <em>any</em> in a while.</p>
          <p>That scent-first logic is also the honest frame for the whole category. Light-based traps — the Katchy, plug-in units like the Zevo — are real products with real strengths, but for <em>Drosophila</em> specifically they are fighting with the wrong lure. Where they earn their place is the adjacent problems: fungus gnats, which genuinely are light-attracted, and the &ldquo;small flying things, unsure which&rdquo; situation half of readers are actually in. This guide is the commercial companion to our step-by-step <Link href="/blog/how-to-get-rid-of-fruit-flies-canada">how to get rid of fruit flies in Canada</Link> playbook — that page covers finding the breeding source; this one covers which hardware to buy.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the four picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="terro fruit fly trap">TERRO apple traps →</BuyLink>
            <BuyLink search="katchy indoor insect trap">Katchy UV trap →</BuyLink>
            <BuyLink search="zevo flying insect trap">Zevo plug-in →</BuyLink>
            <BuyLink search="fruit fly sticky trap">Sticky ribbons →</BuyLink>
          </div>

          <h2>Why the TERRO Apple Wins</h2>
          <p>Three things separate the TERRO from both DIY vinegar bowls and its store-shelf competitors. First, <strong>lure longevity</strong>: the formulation keeps releasing attractant at a useful rate for roughly 30 days, while a homemade ACV bowl peaks in the first day or two and then weakens as it evaporates and skins over. Second, <strong>the sealed apple housing</strong>: it cannot be tipped by a cat, an elbow, or a toddler, it hides the drowned flies (a real quality-of-life feature by week two), and it lets you put the trap directly on a food-prep counter without anyone at dinner asking what the bowl of floating insects is. Third, <strong>the two-pack format</strong> matches how fruit fly problems actually present — one zone at the fruit bowl, one at the sink — instead of pretending a single trap covers a kitchen.</p>
          <p>Two operating notes that prevent most bad reviews. The lure needs 24 to 48 hours after opening to build up scent and start catching seriously — people who declare it useless on day one simply have not waited. And the trap only catches adults: eggs already laid in your drain or produce keep hatching for another week or two no matter how good the trap is, which is why the realistic eradication window is two to three weeks, not two to three days.</p>
          <div className="not-prose my-4">
            <BuyLink search="terro fruit fly trap">Check TERRO Fruit Fly Trap on Amazon.ca →</BuyLink>
          </div>

          <h2>Refill Economics: The Real Cost of Each Trap</h2>
          <p>Fruit fly control is a consumables business, and the sticker price of the trap is the smallest part of what you will spend if flies are a recurring summer event in your house. Think in cost-per-season, not cost-per-unit:</p>
          <ul>
            <li><strong>TERRO:</strong> each apple runs about 30 days, and the apples themselves are reusable — TERRO sells the lure separately in a refill bottle that recharges a housing many times over. A household that buys the two-pack once and switches to refill lure pays the least per season of any powered or lured option. Write the opening date on the base of each trap; an expired lure quietly catching nothing is the most common &ldquo;the trap stopped working&rdquo; complaint.</li>
            <li><strong>Katchy:</strong> the unit is a one-time buy, but glue cards are the recurring cost — every few weeks during an active infestation, slower in maintenance mode. Genuine Katchy refill cards cost more than generic compatible ones; our <Link href="/blog/katchy-indoor-insect-trap-review-canada">full Katchy review</Link> runs the per-season math and the generic-card question in detail.</li>
            <li><strong>Zevo:</strong> the plug-in body is cheap to run (an LED), but replacement glue cartridges every one to two months make it the most refill-dependent pick here relative to what it catches. Canadian stock of both the units and cartridges fluctuates — check the listing ships from Amazon.ca before committing to the ecosystem, because a trap you cannot refill next spring is a night light.</li>
            <li><strong>Sticky ribbons:</strong> single-use and cheap, no ecosystem to be locked into. The economics only sour if you use them as your primary trap — their passive, lure-free catch rate means you replace many ribbons to do the job one lure trap does.</li>
          </ul>

          <h2>Katchy: The Crossover Pick for Gnats and Mixed Infestations</h2>
          <p>The Katchy Indoor Insect Trap is the premium option in this roundup, and for a pure fruit fly problem it is honestly more machine than you need. Its UV-and-fan design shines when the enemy is <strong>fungus gnats</strong> — the skinny, mosquito-looking flies that rise from houseplant soil — because gnats are strongly light-attracted in a way fruit flies are not. Run overnight in a dark room, it clears gnat clouds impressively, and it will collect a respectable side-catch of fruit flies too.</p>
          <p>The winning combination for gnats is the Katchy for adults plus a BTI larvicide drench for the soil they breed in — the same <em>Bacillus thuringiensis israelensis</em> sold for mosquito larvae. Our guides to <Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks</Link> and the <Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada guide</Link> cover exactly how to use BTI granules in houseplant watering — it is the single most effective fungus gnat move in Canada, and it is fully PMRA-registered. If your flies come from plant pots, start there; if they come from the fruit bowl, start with the TERRO; if you genuinely cannot tell, the Katchy hedges both bets.</p>
          <div className="not-prose my-4">
            <BuyLink search="katchy indoor insect trap">Check Katchy on Amazon.ca →</BuyLink>
          </div>

          <h2>Zevo: Best Plug-In (With a Canadian Caveat)</h2>
          <p>The Zevo Flying Insect Trap answers a placement problem the counter traps cannot: bathrooms, hallways, bar carts, and rental kitchens with no spare counter space. It plugs directly into a wall outlet, lures with a UV-and-blue light spectrum, and traps flies on a glue cartridge hidden behind the light — nothing to empty, nothing visible, swap the cartridge when the indicator area fills. For drain flies drifting around a bathroom, or the wine-glass zone at the end of a party wall, it is the tidiest solution going.</p>
          <p>Two caveats keep it off the top spot. As a light-lure device it inherits the same structural disadvantage against scent-hunting fruit flies as every UV trap, so in a kitchen it plays support to a TERRO rather than replacing it. And its Canadian retail presence is genuinely inconsistent — the brand is a US Procter &amp; Gamble line, and amazon.ca stock of units and refill cartridges comes and goes. It remains a legitimate pick because the trap itself is a non-pesticidal device (no PMRA registration needed, unlike Zevo&rsquo;s aerosol spray siblings — more on that below); just verify current availability before planning around it.</p>
          <div className="not-prose my-4">
            <BuyLink search="zevo flying insect trap">Check Zevo plug-in on Amazon.ca →</BuyLink>
          </div>

          <h2>Sticky Ribbons: Cheap, Ugly, Occasionally Useful</h2>
          <p>The old-fashioned option still hanging in Canadian hardware stores works exactly as well as its design suggests: it catches whatever happens to land on it, and lures nothing. That makes ribbons and their prettier cousins — the yellow sticky stakes sold for plant pots — a supplemental tool. Sensible uses: hung above a compost bin or green bin where flies congregate anyway, stuck into houseplant soil to monitor and skim fungus gnats, or draped in a garage or cold room where appearance is irrelevant. Poor uses: as your only trap, or anywhere at head height in a kitchen, where they mostly catch hair. Buy the cheap generic packs; there is no meaningful brand differentiation in adhesive on a strip.</p>
          <div className="not-prose my-4">
            <BuyLink search="fruit fly sticky trap">Check sticky ribbons on Amazon.ca →</BuyLink>
          </div>

          <h2>Placement: Where Traps Actually Catch</h2>
          <p>Placement moves the needle more than brand choice. Fruit flies operate low and local — they patrol within a short radius of a food source at counter height and below, which is why a trap&rsquo;s job is to be the strongest fermentation smell <em>in its immediate zone</em>. The rules:</p>
          <ul>
            <li><strong>Within a metre of the action.</strong> Beside the fruit bowl, next to the sink drain, by the compost pail, near the recycling. One trap per zone.</li>
            <li><strong>Low, not high.</strong> Counter height or below. Fruit flies are not house flies; they do not cruise the ceiling.</li>
            <li><strong>Remove the competition.</strong> A trap next to an open compost bin loses the smell contest to the compost. Seal or empty the competing attraction and the trap&rsquo;s catch rate jumps overnight — this one change fixes most &ldquo;my trap isn&rsquo;t catching&rdquo; complaints.</li>
            <li><strong>Give it 48 hours before judging.</strong> Scent lures build. Day-one verdicts are meaningless.</li>
            <li><strong>Date every trap.</strong> Lure exhaustion is invisible; a marker note on the base tells you when 30 days are up.</li>
          </ul>

          <h2>The 2–3 Week Reality (Set Expectations Now)</h2>
          <p>Here is the lifecycle math that governs every fruit fly infestation in every Canadian kitchen. At room temperature, a fruit fly goes from egg to egg-laying adult in as little as eight to ten days. Each female lays up to 500 eggs directly onto fermenting material — the soft spot on a peach, the film inside a drain, the residue in a beer can headed for recycling. So the cloud you see today is one generation of a production line, and traps only intercept the finished product.</p>
          <p>That yields a predictable three-act timeline. <strong>Week one:</strong> traps thin the visible adults dramatically while eggs already laid keep hatching — you are catching a lot and still seeing flies, which is normal, not failure. <strong>Week two:</strong> with the breeding source found and removed, hatch-out tails off and daily catches collapse. <strong>Week three:</strong> traps sit empty; leave one dated TERRO out as a sentinel for another couple of weeks. If catches have <em>not</em> collapsed by day 14, the trap is not the problem — an undiscovered breeding site is, and the drain-check, produce-audit, and appliance-sweep sequence in our <Link href="/blog/how-to-get-rid-of-fruit-flies-canada">fruit fly removal guide</Link> is the next move. No trap purchase substitutes for that search, which is exactly why this page and that one are a pair.</p>

          <h2>Why Traps and Not Sprays in Canada (the PMRA Line)</h2>
          <p>If you research fruit fly control on US websites, you will meet a wall of aerosol recommendations — pyrethrin kitchen foggers, &ldquo;flying insect killer&rdquo; sprays, and Zevo&rsquo;s own spray line. In Canada, the calculus is different, and it is worth understanding rather than just obeying. Any insecticide sold here must carry a Health Canada <strong>PMRA registration number</strong> (a PCP number on the label). Many US-market fly sprays have no Canadian registration, which makes them illegal to sell or import — the grey-market listings that surface online are exactly the products this guide exists to steer you around. Even the legally registered aerosols are a poor tool for this job: spraying a kitchen kills the adults in the air at that moment while leaving every egg in the drain untouched, and it puts residue on the one room&rsquo;s surfaces where you least want it.</p>
          <p>Traps sidestep the entire question. A drowning lure, a glue card, and a UV light are <strong>devices</strong>, not pesticides — no registration required, nothing to legally verify, no residue beside the cutting board. The TERRO&rsquo;s lure is a food-grade vinegar formulation; the kill mechanism is water. That regulatory cleanliness, plus the biological fact that source removal — not chemistry — is what actually ends an infestation, is why every recommendation on this page is a trap. For a sense of what professional help costs when an &ldquo;infestation&rdquo; turns out to be something bigger breeding in a wall or a commercial-grade drain problem, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>

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

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-fruit-flies-canada">How to Get Rid of Fruit Flies in Canada — Full Playbook</Link></li>
            <li><Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy Indoor Insect Trap Review — Canada</Link></li>
            <li><Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks — the BTI Fix for Fungus Gnats</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada Guide</Link></li>
            <li><Link href="/blog/best-wasp-trap-canada">Best Wasp Trap Canada</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost in Canada — What Pros Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
