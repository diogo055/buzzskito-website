import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'best-fruit-fly-trap-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Best Fruit Fly Trap Canada 2026 — TERRO vs Katchy vs Sticky Ribbons'
const META_TITLE = 'Best Fruit Fly Trap Canada 2026: TERRO vs Katchy'

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
  {
    question: 'What is the best fly trap for fruit flies?',
    answer: 'A sealed liquid-lure trap — the TERRO apple in Canada, or the same trap sold in the United States as the T2502B two-pack, alongside RESCUE!, Aunt Fannie’s FlyPunch, BEAPCO and Hot Shot lure traps on US shelves. The rule behind the pick is species behaviour, not brand: fruit flies navigate by fermentation odour, so a scent trap beats a light trap, a fan trap, and any sticky surface on Drosophila specifically. Light-based traps (Katchy, Zevo) are the better buy only when fungus gnats are in the mix.',
  },
  {
    question: 'What is the most effective way to trap fruit flies?',
    answer: 'Put two to four scent traps at counter height or lower, within a metre of each fermentation source — fruit bowl, sink drain, compost pail, recycling — and remove the competing smell those traps are bidding against. Placement and source removal move catch rates more than brand choice does. Give a fresh lure 24 to 48 hours before judging it, date the trap so you know when 30 days are up, and expect the full cycle to take two to three weeks because eggs already laid keep hatching.',
  },
  {
    question: 'What is the most effective fruit fly trap killer?',
    answer: 'There is no consumer "fruit fly killer" that outperforms trapping plus source removal, and the aerosols marketed that way are the weakest option in the category: they kill the adults airborne at that moment and touch none of the eggs and larvae in a drain or under a bag of onions. In Canada any such spray needs a Health Canada PMRA registration number to be sold legally. In the United States the equivalent products are EPA-registered pesticides, while traps are FIFRA devices. Drowning liquid is the effective kill mechanism here — not chemistry.',
  },
  {
    question: 'What is the best homemade trap for fruit flies?',
    answer: 'Half a cup of apple cider vinegar plus three or four drops of dish soap in a small jar, either left open or covered with plastic wrap punched with six to eight pinholes. The vinegar supplies the fermentation cue and the soap breaks surface tension so flies sink instead of standing on the liquid. A jar baited with a chunk of overripe fruit under a rolled paper funnel — the trap University of Kentucky Entomology fact sheet EF-621 describes — catches at least as well, but must be emptied every few days or it becomes a nursery.',
  },
  {
    question: 'Does white vinegar and dish soap get rid of fruit flies?',
    answer: 'Partly. The dish soap is the load-bearing half: it breaks surface tension so any fly that lands drowns rather than walking off. Plain white vinegar is the weakest lure in the vinegar family because it is distilled acetic acid without the fruit esters and residual ethanol that make apple cider vinegar, red wine and beer attractive. If white vinegar is all you have, add a splash of fruit juice, a piece of ripe banana, or a spoon of sugar. And no bowl solves the breeding source.',
  },
  {
    question: 'What liquid attracts fruit flies the most?',
    answer: 'Liquids that smell like active fermentation — acetic acid plus ethanol plus fruit esters. Ranked in practice: a formulated commercial lure first (it is engineered to hold strength for about 30 days), then overripe fruit steeping in its own juice, then red wine, then apple cider vinegar, then beer or kombucha, with balsamic and plain white vinegar well behind and sugar water alone at the bottom. Anything unfermented needs a yeast or fruit component added before it competes.',
  },
  {
    question: 'How do you 100% get rid of fruit flies?',
    answer: 'Traps alone never get to zero. The complete sequence is: find and destroy every breeding source (produce, drains, the film under a fridge, garbage and recycling, stored potatoes and onions), physically scrub drains rather than pouring boiling water down them, run two to four scent traps for the survivors, deny any new fermentation for three weeks, then confirm with seven consecutive days of empty traps. In the Gulf and Deep South states, where flies re-enter from outdoors year round, "zero" means keeping screens and door seals tight rather than winning once.',
  },
  {
    question: 'What is the best fruit fly trap in the United States?',
    answer: 'The same liquid-lure design that wins in Canada — TERRO sells the US two-pack as model T2502B through Home Depot, Lowe’s, Ace Hardware, Walmart, Target and Amazon.com. RESCUE!, Aunt Fannie’s FlyPunch, BEAPCO, Hot Shot and Sterling POP! are lure traps with the same mechanism and wide US shelf presence, and Safer Home, Stem and Zevo cover the plug-in light-and-glue format. The price-check buttons on this page point at Amazon.ca because BuzzSkito is a Canadian company; US readers should search these product names at the retailers above.',
  },
  {
    question: 'What is spotted wing drosophila, and will a kitchen trap catch it?',
    answer: 'Spotted wing drosophila (Drosophila suzukii) is an invasive vinegar fly, about 3 mm, that US extension services including UC IPM, Michigan State and Penn State track as a berry and stone-fruit pest. Males carry a dark spot near the tip of each wing; females have a saw-like ovipositor with two rows of dark teeth. Unlike common fruit flies it lays eggs in ripening and ripe intact fruit, not just rotting fruit. Kitchen vinegar traps monitor it but do not control it — harvest timing, prompt cold storage and removing dropped fruit do.',
  },
  {
    question: 'When is fruit fly season in the United States?',
    answer: 'Fruit flies are a year-round indoor pest that spikes in late summer and fall, per University of Kentucky Entomology fact sheet EF-621. Development effectively stalls below roughly 53°F (12°C), which is why the season tracks kitchen temperature more than the weather. The Gulf Coast, Florida and South Texas see low-level activity almost all year; the Upper Midwest, New England and the Mountain West get a shorter, sharper September-to-October peak that ends with the first sustained cold snap.',
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

const AMZ_TAG = tagForSlug('best-fruit-fly-trap-canada')

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

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="TERRO Fruit Fly Trap (2-pack, liquid lure)" search="terro fruit fly trap" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best fruit fly trap in Canada is the <AmazonLink search="terro fruit fly trap" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">TERRO Fruit Fly Trap</AmazonLink> &mdash; the little red apple with a vinegar-based liquid lure. Fruit flies hunt by fermentation smell, not light, so a scent lure out-catches UV traps and sticky ribbons in a kitchen. Each apple works for about 30 days, refill lure keeps seasonal costs low, and pairing traps with breeding-source removal ends most infestations in two to three weeks.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Fruit flies go from egg to breeding adult in 8&ndash;10 days, and a female lays up to 500 eggs &mdash; traps alone never outrun that math.</li>
              <li>The TERRO&rsquo;s vinegar lure needs 24&ndash;48 hours to reach full strength; each trap then catches for about 30 days.</li>
              <li>Reuse the apple housings and buy refill lure &mdash; the cheapest way to run traps every summer.</li>
              <li>UV traps like the Katchy are the better pick for fungus gnats (light-attracted) and mixed infestations.</li>
              <li>Place traps low, within a metre of fruit, drains, compost, or recycling &mdash; and away from competing smells.</li>
              <li>US aerosol &ldquo;fruit fly killer&rdquo; sprays without a PMRA registration number are not legal in Canada &mdash; traps are devices and sidestep the issue entirely.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
            <div className="mt-4">
              <BuyLink search="terro fruit fly trap" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>
          <SpecialistDisclosure pest="fruit flies" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
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
          <h2 id="trap-types" className="text-2xl font-extrabold text-brand-900 mb-4">The 4 Types of Fruit Fly Trap (and How Each Actually Catches)</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Fruit fly traps differ on one axis that matters more than any other: <strong>what does the luring</strong>. Fruit flies navigate to food by fermentation odour, so scent-lure traps have a structural advantage in a kitchen, while light-based traps win on the species that light actually attracts. Here is the honest breakdown, with a live Amazon.ca price check per type.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
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
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="terro fruit fly trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">UV + fan + glue<br /><span className="font-normal text-xs text-gray-500">Katchy</span></td>
                  <td className="px-4 py-3 text-gray-700">UV light attracts at night; fan pulls insects down onto a glue card</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Good</strong> &mdash; best-in-class for fungus gnats</td>
                  <td className="px-4 py-3 text-gray-700">Glue cards every few weeks</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="katchy indoor insect trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Plug-in light + glue<br /><span className="font-normal text-xs text-gray-500">Zevo</span></td>
                  <td className="px-4 py-3 text-gray-700">Outlet unit; UV-and-blue light lures flies onto a hidden glue cartridge</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Moderate</strong> &mdash; light lure, tidy form factor</td>
                  <td className="px-4 py-3 text-gray-700">Glue cartridges every 1&ndash;2 months</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="zevo flying insect trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Sticky ribbon / stake<br /><span className="font-normal text-xs text-gray-500">assorted brands</span></td>
                  <td className="px-4 py-3 text-gray-700">Passive adhesive surface &mdash; no lure; catches flies that land by chance</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Weak</strong> &mdash; supplemental only</td>
                  <td className="px-4 py-3 text-gray-700">Single-use, replace when covered</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="fruit fly sticky trap" block>Check price on Amazon.ca →</BuyLink></td>
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
          <h2 id="key-facts" className="text-xl font-extrabold text-brand-900 mb-4">Fruit Fly Trapping — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
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

          <nav aria-label="On this page" className="not-prose mb-8 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">On this page</p>
            <ul className="grid gap-x-6 gap-y-1.5 text-sm text-brand-800 sm:grid-cols-2">
              {[
                ['#best-in-canada', 'Best fruit fly trap in Canada'],
                ['#best-us', 'Best fruit fly trap in the United States'],
                ['#trap-types', 'The 4 trap types compared'],
                ['#why-terro', 'Why the TERRO apple wins'],
                ['#best-fly-trap', 'What is the best fly trap for fruit flies?'],
                ['#most-effective-way', 'Most effective way to trap fruit flies'],
                ['#trap-killer', 'Most effective fruit fly trap killer'],
                ['#homemade', 'Best homemade trap (recipes with measurements)'],
                ['#white-vinegar-dish-soap', 'Does white vinegar and dish soap work?'],
                ['#best-liquid', 'What liquid attracts fruit flies the most?'],
                ['#100-percent', 'How to 100% get rid of fruit flies'],
                ['#diy-vs-store', 'Homemade vs store-bought, head to head'],
                ['#where-to-buy', 'Where to buy: Canada vs United States'],
                ['#spotted-wing', 'Spotted wing drosophila (US berry patches)'],
                ['#season-region', 'Fruit fly season by region'],
                ['#fifra-vs-pmra', 'Regulation: US EPA vs Health Canada'],
                ['#refill-economics', 'Refill economics per season'],
                ['#faq', 'Frequently asked questions'],
              ].map(([href, label]) => (
                <li key={href}><a href={href} className="underline decoration-emerald-400 underline-offset-2 hover:text-emerald-800">{label}</a></li>
              ))}
            </ul>
          </nav>


          <h2 id="best-in-canada">What Is the Best Fruit Fly Trap in Canada?</h2>
          <p>The TERRO Fruit Fly Trap — the small red apple with a bottle of amber liquid inside — is the best fruit fly trap for most Canadian kitchens, and the reason is biology rather than branding. A fruit fly locates food almost entirely by smell: the yeasty, acetic odour of fermentation. The TERRO&rsquo;s lure is a vinegar-based formulation of exactly that odour profile, concentrated and sealed so it broadcasts for about a month instead of the few days an open bowl of apple cider vinegar manages. Flies follow the scent through the holes in the apple, land on the liquid, and drown. You never see them; you eventually just notice you have not seen <em>any</em> in a while. One thing it will not catch is a pantry moth: those answer a species-specific pheromone lure rather than vinegar, so see <Link href="/blog/pantry-moth-traps-canada" className="text-brand-700 underline">which pantry moth trap to buy and how many you need</Link> if the flier came out of a flour bag.</p>
          <p>That scent-first logic is also the honest frame for the whole category. Light-based traps — the Katchy, plug-in units like the Zevo — are real products with real strengths, but for <em>Drosophila</em> specifically they are fighting with the wrong lure. Where they earn their place is the adjacent problems: fungus gnats, which genuinely are light-attracted, and the &ldquo;small flying things, unsure which&rdquo; situation half of readers are actually in. This guide is the commercial companion to our step-by-step <Link href="/blog/how-to-get-rid-of-fruit-flies">how to get rid of fruit flies in Canada</Link> playbook — that page covers finding the breeding source; this one covers which hardware to buy.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the four picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="terro fruit fly trap">TERRO apple traps →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="katchy indoor insect trap">Katchy UV trap →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="zevo flying insect trap">Zevo plug-in →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="fruit fly sticky trap">Sticky ribbons →</BuyLink>
          </div>

          <h2 id="why-terro">Why the TERRO Apple Wins</h2>
          <p>Three things separate the TERRO from both DIY vinegar bowls and its store-shelf competitors. First, <strong>lure longevity</strong>: the formulation keeps releasing attractant at a useful rate for roughly 30 days, while a homemade ACV bowl peaks in the first day or two and then weakens as it evaporates and skins over. Second, <strong>the sealed apple housing</strong>: it cannot be tipped by a cat, an elbow, or a toddler, it hides the drowned flies (a real quality-of-life feature by week two), and it lets you put the trap directly on a food-prep counter without anyone at dinner asking what the bowl of floating insects is. Third, <strong>the two-pack format</strong> matches how fruit fly problems actually present — one zone at the fruit bowl, one at the sink — instead of pretending a single trap covers a kitchen.</p>
          <p>Two operating notes that prevent most bad reviews. The lure needs 24 to 48 hours after opening to build up scent and start catching seriously — people who declare it useless on day one simply have not waited. And the trap only catches adults: eggs already laid in your drain or produce keep hatching for another week or two no matter how good the trap is, which is why the realistic eradication window is two to three weeks, not two to three days.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="terro fruit fly trap">Check TERRO Fruit Fly Trap on Amazon.ca →</BuyLink>
          </div>

          <h2 id="refill-economics">Refill Economics: The Real Cost of Each Trap</h2>
          <p>Fruit fly control is a consumables business, and the sticker price of the trap is the smallest part of what you will spend if flies are a recurring summer event in your house. Think in cost-per-season, not cost-per-unit:</p>
          <ul>
            <li><strong>TERRO:</strong> each apple runs about 30 days, and the apples themselves are reusable — TERRO sells the lure separately in a refill bottle that recharges a housing many times over. A household that buys the two-pack once and switches to refill lure pays the least per season of any powered or lured option. Write the opening date on the base of each trap; an expired lure quietly catching nothing is the most common &ldquo;the trap stopped working&rdquo; complaint.</li>
            <li><strong>Katchy:</strong> the unit is a one-time buy, but glue cards are the recurring cost — every few weeks during an active infestation, slower in maintenance mode. Genuine Katchy refill cards cost more than generic compatible ones; our <Link href="/blog/katchy-indoor-insect-trap-review-canada">full Katchy review</Link> runs the per-season math and the generic-card question in detail.</li>
            <li><strong>Zevo:</strong> the plug-in body is cheap to run (an LED), but replacement glue cartridges every one to two months make it the most refill-dependent pick here relative to what it catches. Canadian stock of both the units and cartridges fluctuates — check the listing ships from Amazon.ca before committing to the ecosystem, because a trap you cannot refill next spring is a night light.</li>
            <li><strong>Sticky ribbons:</strong> single-use and cheap, no ecosystem to be locked into. The economics only sour if you use them as your primary trap — their passive, lure-free catch rate means you replace many ribbons to do the job one lure trap does.</li>
          </ul>

          <h2 id="katchy">Katchy: The Crossover Pick for Gnats and Mixed Infestations</h2>
          <p>The Katchy Indoor Insect Trap is the premium option in this roundup, and for a pure fruit fly problem it is honestly more machine than you need. Its UV-and-fan design shines when the enemy is <strong>fungus gnats</strong> — the skinny, mosquito-looking flies that rise from houseplant soil — because gnats are strongly light-attracted in a way fruit flies are not. Run overnight in a dark room, it clears gnat clouds impressively, and it will collect a respectable side-catch of fruit flies too.</p>
          <p>The winning combination for gnats is the Katchy for adults plus a BTI larvicide drench for the soil they breed in — the same <em>Bacillus thuringiensis israelensis</em> sold for mosquito larvae. Our guides to <Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks</Link> and the <Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada guide</Link> cover exactly how to use BTI granules in houseplant watering — it is the single most effective fungus gnat move in Canada, and it is fully PMRA-registered. If your flies come from plant pots, start there; if they come from the fruit bowl, start with the TERRO; if you genuinely cannot tell, the Katchy hedges both bets.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="katchy indoor insect trap">Check Katchy on Amazon.ca →</BuyLink>
          </div>

          <h2 id="zevo">Zevo: Best Plug-In (With a Canadian Caveat)</h2>
          <p>The Zevo Flying Insect Trap answers a placement problem the counter traps cannot: bathrooms, hallways, bar carts, and rental kitchens with no spare counter space. It plugs directly into a wall outlet, lures with a UV-and-blue light spectrum, and traps flies on a glue cartridge hidden behind the light — nothing to empty, nothing visible, swap the cartridge when the indicator area fills. For drain flies drifting around a bathroom, or the wine-glass zone at the end of a party wall, it is the tidiest solution going. One caveat on placement: a bathroom trap that keeps filling may be catching drain flies rather than fruit flies, and those need <Link href="/blog/how-to-get-rid-of-drain-flies-canada" className="text-brand-700 underline">the biofilm scrubbed out of the pipe wall</Link> rather than another lure.</p>
          <p>Two caveats keep it off the top spot. As a light-lure device it inherits the same structural disadvantage against scent-hunting fruit flies as every UV trap, so in a kitchen it plays support to a TERRO rather than replacing it. And its Canadian retail presence is genuinely inconsistent — the brand is a US Procter &amp; Gamble line, and amazon.ca stock of units and refill cartridges comes and goes. It remains a legitimate pick because the trap itself is a non-pesticidal device (no PMRA registration needed, unlike Zevo&rsquo;s aerosol spray siblings — more on that below); just verify current availability before planning around it.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="zevo flying insect trap">Check Zevo plug-in on Amazon.ca →</BuyLink>
          </div>

          <h2 id="sticky-ribbons">Sticky Ribbons: Cheap, Ugly, Occasionally Useful</h2>
          <p>The old-fashioned option still hanging in Canadian hardware stores works exactly as well as its design suggests: it catches whatever happens to land on it, and lures nothing. That makes ribbons and their prettier cousins — the yellow sticky stakes sold for plant pots — a supplemental tool. Sensible uses: hung above a compost bin or green bin where flies congregate anyway, stuck into houseplant soil to monitor and skim fungus gnats, or draped in a garage or cold room where appearance is irrelevant. Poor uses: as your only trap, or anywhere at head height in a kitchen, where they mostly catch hair. Buy the cheap generic packs; there is no meaningful brand differentiation in adhesive on a strip.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="fruit fly sticky trap">Check sticky ribbons on Amazon.ca →</BuyLink>
          </div>

          <h2 id="placement">Placement: Where Traps Actually Catch</h2>
          <p>Placement moves the needle more than brand choice. Fruit flies operate low and local — they patrol within a short radius of a food source at counter height and below, which is why a trap&rsquo;s job is to be the strongest fermentation smell <em>in its immediate zone</em>. The rules:</p>
          <ul>
            <li><strong>Within a metre of the action.</strong> Beside the fruit bowl, next to the sink drain, by the compost pail, near the recycling. One trap per zone.</li>
            <li><strong>Low, not high.</strong> Counter height or below. Fruit flies are not house flies; they do not cruise the ceiling.</li>
            <li><strong>Remove the competition.</strong> A trap next to an open compost bin loses the smell contest to the compost. Seal or empty the competing attraction and the trap&rsquo;s catch rate jumps overnight — this one change fixes most &ldquo;my trap isn&rsquo;t catching&rdquo; complaints.</li>
            <li><strong>Give it 48 hours before judging.</strong> Scent lures build. Day-one verdicts are meaningless.</li>
            <li><strong>Date every trap.</strong> Lure exhaustion is invisible; a marker note on the base tells you when 30 days are up.</li>
          </ul>

          <h2 id="timeline">The 2–3 Week Reality (Set Expectations Now)</h2>
          <p>Here is the lifecycle math that governs every fruit fly infestation in every Canadian kitchen. At room temperature, a fruit fly goes from egg to egg-laying adult in as little as eight to ten days. Each female lays up to 500 eggs directly onto fermenting material — the soft spot on a peach, the film inside a drain, the residue in a beer can headed for recycling. So the cloud you see today is one generation of a production line, and traps only intercept the finished product.</p>
          <p>That yields a predictable three-act timeline. <strong>Week one:</strong> traps thin the visible adults dramatically while eggs already laid keep hatching — you are catching a lot and still seeing flies, which is normal, not failure. <strong>Week two:</strong> with the breeding source found and removed, hatch-out tails off and daily catches collapse. <strong>Week three:</strong> traps sit empty; leave one dated TERRO out as a sentinel for another couple of weeks. If catches have <em>not</em> collapsed by day 14, the trap is not the problem — an undiscovered breeding site is, and the drain-check, produce-audit, and appliance-sweep sequence in our <Link href="/blog/how-to-get-rid-of-fruit-flies">fruit fly removal guide</Link> is the next move. No trap purchase substitutes for that search, which is exactly why this page and that one are a pair.</p>

          <h2 id="pmra">Why Traps and Not Sprays in Canada (the PMRA Line)</h2>
          <p>If you research fruit fly control on US websites, you will meet a wall of aerosol recommendations — pyrethrin kitchen foggers, &ldquo;flying insect killer&rdquo; sprays, and Zevo&rsquo;s own spray line. In Canada, the calculus is different, and it is worth understanding rather than just obeying. Any insecticide sold here must carry a Health Canada <strong>PMRA registration number</strong> (a PCP number on the label). Many US-market fly sprays have no Canadian registration, which makes them illegal to sell or import — the grey-market listings that surface online are exactly the products this guide exists to steer you around. Even the legally registered aerosols are a poor tool for this job: spraying a kitchen kills the adults in the air at that moment while leaving every egg in the drain untouched, and it puts residue on the one room&rsquo;s surfaces where you least want it.</p>
          <p>Traps sidestep the entire question. A drowning lure, a glue card, and a UV light are <strong>devices</strong>, not pesticides — no registration required, nothing to legally verify, no residue beside the cutting board. The TERRO&rsquo;s lure is a food-grade vinegar formulation; the kill mechanism is water. That regulatory cleanliness, plus the biological fact that source removal — not chemistry — is what actually ends an infestation, is why every recommendation on this page is a trap. For a sense of what professional help costs when an &ldquo;infestation&rdquo; turns out to be something bigger breeding in a wall or a commercial-grade drain problem, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>

          <h2 id="best-fly-trap">What Is the Best Fly Trap for Fruit Flies?</h2>
          <p>The best fly trap for fruit flies is a sealed liquid-lure trap &mdash; the TERRO apple in Canada, the same design sold in the United States as the T2502B two-pack, or an equivalent lure trap from RESCUE!, Aunt Fannie&rsquo;s, BEAPCO or Hot Shot. The deciding variable is not brand but lure type: fruit flies navigate by fermentation odour, so a scent trap out-catches light, fans and adhesive on this species.</p>
          <p>That single rule sorts the whole category, and it is why a general-purpose &ldquo;fly trap&rdquo; often disappoints on fruit flies. A house fly trap baited with protein, or a bug zapper tuned to ultraviolet, is built around a different insect&rsquo;s sensory world. <em>Drosophila</em> antennae are tuned to the volatiles of active fermentation &mdash; acetic acid, ethanol, and the ester cocktail released as yeast works on sugar. Anything that broadcasts that smell strongly, continuously, and from the right height wins; anything that does not is relying on the fly blundering in.</p>
          <p>The practical hierarchy for fruit flies specifically: sealed liquid lure first, jar-and-funnel with real fermenting bait second, open vinegar bowl third, UV-and-glue traps fourth (they are first for fungus gnats), passive sticky ribbons last. The <a href="#trap-types">four-type comparison table above</a> lays out how each one lures and kills.</p>

          <h2 id="most-effective-way">What Is the Most Effective Way to Trap Fruit Flies?</h2>
          <p>Run two to four scent traps at counter height or lower, each within a metre of a fermentation source &mdash; fruit bowl, sink drain, compost pail, recycling &mdash; and remove the competing smell each trap is bidding against. Placement and source removal move catch rates far more than which brand you bought, and the full cycle takes two to three weeks regardless.</p>
          <p>The sequence that actually clears a kitchen, in order of how much each step is worth:</p>
          <ol>
            <li><strong>Kill the competition first.</strong> A trap beside an open compost pail is competing with a bucket of real fermenting fruit, and it will lose. Seal or empty the competing attraction and catch rates jump the same night. This one change fixes most &ldquo;my trap is not catching anything&rdquo; complaints.</li>
            <li><strong>Zone the traps, do not cluster them.</strong> One trap per hotspot beats three traps in one corner. Fruit flies patrol a short radius around a food source; a trap two metres away is outside the argument.</li>
            <li><strong>Go low.</strong> Counter height or below. Fruit flies are not house flies and do not cruise at ceiling level.</li>
            <li><strong>Wait 48 hours before judging.</strong> A fresh commercial lure needs a day or two to build headspace odour. Day-one verdicts are the most common reason people abandon a trap that was about to start working.</li>
            <li><strong>Date the trap.</strong> Write the opening date on the base. Lure exhaustion is invisible &mdash; the trap looks identical on day 45 and catches nothing.</li>
            <li><strong>Trap and hunt at the same time.</strong> Trapping is interception; the breeding source is production. Our <Link href="/blog/how-to-get-rid-of-fruit-flies">step-by-step fruit fly removal guide</Link> walks the drain, produce, and appliance sweep that ends the supply.</li>
          </ol>

          <h2 id="trap-killer">What Is the Most Effective Fruit Fly Trap Killer?</h2>
          <p>Drowning. Every top-performing fruit fly trap on both sides of the border kills the same way &mdash; the fly lands on a liquid whose surface tension has been broken, and sinks. Glue is a distant second, because it needs the insect to make physical contact with a small surface. Aerosol &ldquo;fruit fly killer&rdquo; sprays come last: they kill the adults airborne at that moment and reach none of the eggs.</p>
          <p>It is worth being blunt about why the spray category underperforms, because it is heavily marketed in the United States and heavily searched. A fruit fly infestation is a production line, not a swarm. Eggs and larvae live inside the breeding medium &mdash; the slime layer in a drain, the soft half of a peach, the residue in a recycling bin &mdash; where an aerosol cloud does not penetrate, and would not be welcome next to a cutting board if it did. Spray a kitchen and you get a visibly clear room for one evening and a fresh cohort of adults within days.</p>
          <p>The two mechanisms that do work are unglamorous: intercept the adults with liquid, and remove the medium the next generation is growing in. University extension entomologists make the same point in their household fact sheets &mdash; University of Kentucky Entomology fact sheet EF-621 frames sanitation as the control and traps as the supplement, noting that a single forgotten rotting potato or onion, or juice spillage under a refrigerator, can breed thousands of flies. Fruit flies are a food-hygiene nuisance rather than a biting pest; the reason to care is that they move between decaying material and food surfaces, not that they bite you.</p>

          <h2 id="homemade">What Is the Best Homemade Trap for Fruit Flies? (Recipes With Measurements)</h2>
          <p>Half a cup of apple cider vinegar with three or four drops of dish soap, in a small jar left open or covered with plastic wrap punched with six to eight pinholes. The vinegar supplies the fermentation cue; the soap breaks surface tension so flies sink instead of standing on the liquid. A jar baited with overripe fruit under a rolled paper funnel catches at least as well.</p>
          <p>Every top-ranking page on this topic assumes you will try a homemade trap first, and that is a reasonable thing to do &mdash; you almost certainly own the ingredients already. Here are the standard recipes with actual quantities, and the mechanism behind each, so you can tell which one suits what is in your cupboard.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[720px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Homemade trap</th>
                  <th className="px-4 py-3 text-left">Exact mix</th>
                  <th className="px-4 py-3 text-left">Vessel &amp; holes</th>
                  <th className="px-4 py-3 text-left">Why it works</th>
                  <th className="px-4 py-3 text-left">Weak point</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Apple cider vinegar + dish soap<br /><span className="font-normal text-xs text-gray-500">the default</span></td>
                  <td className="px-4 py-3 text-gray-700">1/2 cup ACV + 3&ndash;4 drops liquid dish soap</td>
                  <td className="px-4 py-3 text-gray-700">Small jar or mug; leave open, or cover with plastic wrap and punch 6&ndash;8 pinholes</td>
                  <td className="px-4 py-3 text-gray-700">ACV carries acetic acid <em>and</em> residual apple esters &mdash; close to the real fermentation signal. Soap drops surface tension so flies sink on contact.</td>
                  <td className="px-4 py-3 text-gray-700">Peaks in 1&ndash;2 days, then weakens and evaporates; an open bowl on a counter is easy to knock over</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Red wine dregs<br /><span className="font-normal text-xs text-gray-500">strongest cupboard option</span></td>
                  <td className="px-4 py-3 text-gray-700">1/3 cup red wine (the last inch of an open bottle is ideal) + 2&ndash;3 drops dish soap</td>
                  <td className="px-4 py-3 text-gray-700">The bottle itself &mdash; its neck is a natural funnel &mdash; or a jar with wrap and 4&ndash;6 holes</td>
                  <td className="px-4 py-3 text-gray-700">Already fermented: ethanol plus acetic acid plus grape esters. The odour blend is broader than vinegar alone.</td>
                  <td className="px-4 py-3 text-gray-700">Costs you wine; dries out; a bottle trap is hard to empty and inspect</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Sugar water + vinegar<br /><span className="font-normal text-xs text-gray-500">when the vinegar is nearly gone</span></td>
                  <td className="px-4 py-3 text-gray-700">1/4 cup warm water + 2 tbsp sugar + 1 tbsp vinegar + 3&ndash;4 drops dish soap</td>
                  <td className="px-4 py-3 text-gray-700">Open bowl or jar; no cover needed</td>
                  <td className="px-4 py-3 text-gray-700">Sugar feeds ambient yeast, which produces the volatiles over the following day &mdash; this mix gets better before it gets worse</td>
                  <td className="px-4 py-3 text-gray-700">Weakest starting lure of the group; sticky residue; needs the vinegar to work at all</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Overripe fruit + paper funnel<br /><span className="font-normal text-xs text-gray-500">the classic jar trap</span></td>
                  <td className="px-4 py-3 text-gray-700">A chunk of overripe banana, peach, or a few soft berries + 1 tbsp vinegar or juice to keep it moist</td>
                  <td className="px-4 py-3 text-gray-700">Jar with a sheet of paper rolled into a cone, taped, point down, tip opening about 5 mm</td>
                  <td className="px-4 py-3 text-gray-700">Real fruit is the strongest natural lure there is, and the cone is a one-way door. This is the jar-and-funnel trap University of Kentucky Entomology fact sheet EF-621 describes.</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Becomes a nursery</strong> if left more than 3&ndash;4 days &mdash; the bait is also perfect egg-laying medium. Empty and rebait on a schedule.</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Beer, hard cider, or kombucha<br /><span className="font-normal text-xs text-gray-500">the recycling-bin trap</span></td>
                  <td className="px-4 py-3 text-gray-700">1/2 cup flat beer, cider, or kombucha + 2&ndash;3 drops dish soap</td>
                  <td className="px-4 py-3 text-gray-700">Open jar, or the can or bottle left standing where flies already gather</td>
                  <td className="px-4 py-3 text-gray-700">Live or recent yeast activity plus ethanol &mdash; the reason a recycling bin is a fly magnet in the first place</td>
                  <td className="px-4 py-3 text-gray-700">Very flat, old beer loses most of its pull; foam can hold flies on the surface if you skip the soap</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Milk, sugar, and pepper folk mix<br /><span className="font-normal text-xs text-gray-500">the one to skip</span></td>
                  <td className="px-4 py-3 text-gray-700">Various internet ratios &mdash; do not bother</td>
                  <td className="px-4 py-3 text-gray-700">n/a</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No mechanism.</strong> Milk is not a fermentation cue for <em>Drosophila</em>, and pepper is not an insecticide at that dose.</td>
                  <td className="px-4 py-3 text-gray-700">Wastes the days you should have spent hunting the breeding source</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Two operating notes apply to all of them. First, <strong>the soap is not optional</strong> &mdash; without it, fruit flies stand on the surface film, feed, and fly off. Second, <strong>homemade traps are on a clock</strong>: they are strongest in the first 48 hours and fading by day four or five, so a DIY approach means refreshing every jar twice a week for the two to three weeks the lifecycle takes. That maintenance burden, not catch rate, is the honest argument for a sealed commercial lure &mdash; and the fair counter-argument is that if your problem is one weekend of flies over a bowl of plums, a jar of vinegar is genuinely all you need.</p>

          <h2 id="white-vinegar-dish-soap">Does White Vinegar and Dish Soap Get Rid of Fruit Flies?</h2>
          <p>Partly. The dish soap does the important half of the job &mdash; it breaks surface tension so any fly that lands drowns rather than walking away. Plain white vinegar is the weakest lure in the vinegar family, because distilled acetic acid lacks the fruit esters and residual ethanol that make apple cider vinegar, wine, and beer smell like real fermentation to a fruit fly.</p>
          <p>So the answer splits in two. As a <em>killing</em> medium, white vinegar plus soap works exactly as well as any other liquid: what lands, sinks. As an <em>attractant</em>, it under-recruits, which is why people report a white-vinegar bowl sitting untouched next to a cloud of flies. Three upgrades, in order of effectiveness: add a splash of fruit juice or a piece of ripe banana to the vinegar; swap to apple cider vinegar outright; or use the last inch of an open bottle of red wine.</p>
          <p>And the caveat that applies to every liquid in this guide: a bowl catches adults. If flies keep appearing, the eggs are somewhere you have not looked yet &mdash; most often a drain biofilm, which needs mechanical scrubbing rather than a better lure. If the flies are hovering near a bathroom or basement floor drain rather than the kitchen, check whether they are actually <Link href="/blog/how-to-get-rid-of-drain-flies-canada">drain flies, which need the pipe wall scrubbed</Link> instead.</p>

          <h2 id="best-liquid">What Liquid Attracts Fruit Flies the Most?</h2>
          <p>Liquids that smell like active fermentation: acetic acid, ethanol, and fruit esters together. A formulated commercial lure leads because it is engineered to hold that blend at strength for about 30 days. Among things already in your kitchen, overripe fruit steeping in its own juice leads, then red wine, then apple cider vinegar, then beer or kombucha.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Liquid</th>
                  <th className="px-4 py-3 text-left">Pulling power</th>
                  <th className="px-4 py-3 text-left">What is doing the work</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Commercial vinegar-based lure</td><td className="px-4 py-3"><strong className="text-emerald-700">Strongest, and stays strong</strong></td><td className="px-4 py-3 text-gray-700">Blended fermentation volatiles at a controlled release rate for roughly 30 days &mdash; the one thing no cupboard liquid does</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Overripe fruit in its own juice</td><td className="px-4 py-3"><strong className="text-emerald-700">Strongest on day one</strong></td><td className="px-4 py-3 text-gray-700">The actual signal the insect evolved to find: live yeast on sugar, full ester profile</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Red wine</td><td className="px-4 py-3"><strong className="text-emerald-700">Very strong</strong></td><td className="px-4 py-3 text-gray-700">Ethanol, acetic acid, and grape esters; the aroma spectrum is broad rather than sharp</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Apple cider vinegar</td><td className="px-4 py-3"><strong className="text-emerald-700">Strong</strong></td><td className="px-4 py-3 text-gray-700">Acetic acid plus apple esters &mdash; the best pull-per-dollar in a kitchen</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Beer, hard cider, kombucha</td><td className="px-4 py-3"><strong className="text-amber-700">Good</strong></td><td className="px-4 py-3 text-gray-700">Yeast activity and ethanol; fades fast once flat</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Balsamic vinegar</td><td className="px-4 py-3"><strong className="text-amber-700">Moderate</strong></td><td className="px-4 py-3 text-gray-700">Sweeter and more complex than white, but thick and expensive for the job</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">White vinegar</td><td className="px-4 py-3"><strong className="text-red-700">Weak as a lure</strong></td><td className="px-4 py-3 text-gray-700">Distilled acetic acid with no ester or ethanol component &mdash; fine as the drowning medium, poor as the invitation</td></tr>
                <tr><td className="px-4 py-3 font-bold text-brand-800">Sugar water alone</td><td className="px-4 py-3"><strong className="text-red-700">Weakest</strong></td><td className="px-4 py-3 text-gray-700">Nothing is fermenting yet; it improves only once wild yeast colonises it, which takes a day or more</td></tr>
              </tbody>
            </table>
          </div>
          <p>This ranking is about <em>attraction</em>, not killing &mdash; add dish soap to any of them and the kill mechanism becomes identical. Note also what is missing: plain water, essential oils, and fresh citrus. Citrus in particular is a common internet suggestion that gets the biology backwards; fresh citrus oil leans repellent for many flies, and it is fermenting, not fresh, fruit that draws <em>Drosophila</em>.</p>

          <h2 id="100-percent">How Do You 100% Get Rid of Fruit Flies?</h2>
          <p>Traps alone never reach zero. The complete sequence is: destroy every breeding source, scrub drains mechanically, run two to four scent traps for the surviving adults, deny any new fermentation for three weeks, then confirm with seven consecutive days of empty traps. Getting to zero is a sanitation project that traps accelerate &mdash; not a purchase.</p>
          <ol>
            <li><strong>Audit every source of fermenting organic matter.</strong> Fruit bowl and produce drawers; the bag of potatoes or onions at the back of a cupboard; the recycling (a rinsed can does not ferment, an unrinsed one does); the green bin or compost pail and its lid seal; the mop bucket and the wet cloth in the sink; spills under and behind the fridge, dishwasher, and stove.</li>
            <li><strong>Scrub the drains, do not just pour something down them.</strong> The breeding medium is a biofilm on the pipe wall above the water line. Boiling water and bleach run straight past it. A stiff bottle brush or drain brush plus an enzyme or bio-drain gel is what removes it.</li>
            <li><strong>Find out which drain, first.</strong> Tape a piece of plastic wrap sticky-side-down over each suspect drain overnight. Flies collect underneath the one that is breeding them &mdash; a five-minute test that saves days of guessing.</li>
            <li><strong>Trap the adults already flying.</strong> Two to four lure traps at the zones identified in step one. This is where the commercial picks on this page earn their place: they hold lure strength across the whole three-week window without daily maintenance.</li>
            <li><strong>Starve the next generation for three weeks.</strong> Fruit in the fridge, bins emptied nightly, recyclables rinsed, counters wiped of juice. Three weeks covers roughly two full generations at room temperature.</li>
            <li><strong>Confirm.</strong> Seven consecutive days with empty traps and no sightings means you are done. Leave one dated trap out as a sentinel for a fortnight after that.</li>
          </ol>
          <p><strong>One regional caveat on the word &ldquo;100%&rdquo;.</strong> In Canada and the northern US states, outdoor populations collapse with the first hard frost, so an indoor clean-up genuinely ends the problem until next season. In the Gulf states, Florida, South Texas, and the warmer parts of the Southwest, there is an outdoor reservoir essentially year-round, and flies re-enter through door gaps and window screens continuously. There, &ldquo;zero&rdquo; means maintaining exclusion &mdash; tight screens, closed doors, sealed bins &mdash; rather than winning once and stopping.</p>

          <h2 id="diy-vs-store">Homemade vs Store-Bought: An Honest Head-to-Head</h2>
          <p>We have not run a controlled catch-count trial of these traps, and we will not pretend otherwise. What exists publicly are single-household comparisons: The Kitchn published a first-person test of four DIY traps and named a winner, and the home blog The Art of Doing Stuff headlines a claim that its preferred trap catches roughly 25 times more than a bowl of vinegar. Treat both as one-kitchen observations rather than replicated trials.</p>
          <p>What can be compared rigorously is <em>mechanism</em> &mdash; how each design behaves over the two to three weeks an infestation actually lasts. That is where the difference between a jar and a bought trap really lives, and it is not the day-one catch rate.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[720px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What matters</th>
                  <th className="px-4 py-3 text-left">Open vinegar bowl</th>
                  <th className="px-4 py-3 text-left">Jar + paper funnel</th>
                  <th className="px-4 py-3 text-left">Sealed liquid-lure trap</th>
                  <th className="px-4 py-3 text-left">UV or plug-in glue trap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Lure strength, day 1</td><td className="px-4 py-3 text-gray-700">Strong</td><td className="px-4 py-3 text-gray-700">Strongest (real fruit)</td><td className="px-4 py-3 text-gray-700">Building &mdash; needs 24&ndash;48 h</td><td className="px-4 py-3 text-gray-700">Weak for fruit flies (wrong cue)</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Lure strength, day 7</td><td className="px-4 py-3 text-gray-700">Fading, evaporating</td><td className="px-4 py-3 text-gray-700">Bait spoiled or dried; needs rebaiting</td><td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Full strength</strong></td><td className="px-4 py-3 text-gray-700">Unchanged (light does not fade)</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Lure strength, day 30</td><td className="px-4 py-3 text-gray-700">Gone unless refreshed ~6&times;</td><td className="px-4 py-3 text-gray-700">Gone unless rebaited ~8&times;</td><td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">End of useful life &mdash; replace or refill</strong></td><td className="px-4 py-3 text-gray-700">Unchanged; glue card loading up</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Maintenance over 3 weeks</td><td className="px-4 py-3 text-gray-700">Refresh twice weekly</td><td className="px-4 py-3 text-gray-700">Empty and rebait every 3&ndash;4 days</td><td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">None</strong></td><td className="px-4 py-3 text-gray-700">Swap glue card once or twice</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Can it breed flies itself?</td><td className="px-4 py-3 text-gray-700">Rarely (soap prevents it)</td><td className="px-4 py-3 text-red-700"><strong>Yes &mdash; fruit bait is egg-laying medium</strong></td><td className="px-4 py-3 text-gray-700">No &mdash; sealed, drowning liquid</td><td className="px-4 py-3 text-gray-700">No</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Spill or tip risk on a counter</td><td className="px-4 py-3 text-gray-700">High</td><td className="px-4 py-3 text-gray-700">Moderate</td><td className="px-4 py-3 text-gray-700">Low &mdash; enclosed housing</td><td className="px-4 py-3 text-gray-700">None</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Do you have to look at dead flies?</td><td className="px-4 py-3 text-gray-700">Yes</td><td className="px-4 py-3 text-gray-700">Yes</td><td className="px-4 py-3 text-gray-700">No &mdash; hidden inside</td><td className="px-4 py-3 text-gray-700">On the card, until swapped</td></tr>
                <tr><td className="px-4 py-3 font-bold text-brand-800">Best use</td><td className="px-4 py-3 text-gray-700">A weekend flare-up you caught early</td><td className="px-4 py-3 text-gray-700">Fast, free, high-pull first response</td><td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The full 2&ndash;3 week eradication cycle</strong></td><td className="px-4 py-3 text-gray-700">Fungus gnats, mixed infestations, no counter space</td></tr>
              </tbody>
            </table>
          </div>
          <p>Read down the day-7 and day-30 rows and the real argument becomes visible. A homemade trap does not lose on attraction; it loses on <em>persistence and attention</em>. Over a three-week cycle a vinegar bowl needs refreshing roughly six times and a fruit-baited jar needs emptying about eight times, and the day someone forgets is the day the trap is a nursery instead of a trap. If you will do that maintenance, DIY genuinely competes. If you will not &mdash; and most households will not, past the first week &mdash; the sealed lure is buying you the other 20 days.</p>

          <h2 id="best-us">What Is the Best Fruit Fly Trap in the United States?</h2>
          <p>The same liquid-lure design that wins in Canada. TERRO sells the US two-pack as model <strong>T2502B</strong> through Home Depot, Lowe&rsquo;s, Ace Hardware, Walmart, Target, and Amazon.com. RESCUE!, Aunt Fannie&rsquo;s FlyPunch, BEAPCO, Hot Shot, and Sterling POP! are lure traps built on the same mechanism, and Safer Home, Stem, and Zevo cover the plug-in light-and-glue format.</p>
          <p>BuzzSkito is a Canadian company, so every price-check button on this page points at Amazon.ca &mdash; that is the store we are an affiliate of, and we are not going to disguise it. If you are reading this from the United States, use the product names below at your own retailers; the mechanism analysis on this page is the part that crosses the border, not the storefront. The one genuinely different thing about the US market is the shelf: fruit fly lure traps are a supermarket and hardware-aisle category there in a way they are not in Canada, so you can usually buy one this afternoon rather than waiting for delivery.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[680px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Brand / product</th>
                  <th className="px-4 py-3 text-left">Format</th>
                  <th className="px-4 py-3 text-left">What it is</th>
                  <th className="px-4 py-3 text-left">Price check (Amazon.ca)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">TERRO Fruit Fly Trap<br /><span className="font-normal text-xs text-gray-500">US two-pack: T2502B</span></td>
                  <td className="px-4 py-3 text-gray-700">Sealed liquid lure</td>
                  <td className="px-4 py-3 text-gray-700">The apple-shaped benchmark. Identical product to the Canadian listing; the US SKU carries the B suffix on the two-pack.</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="terro fruit fly trap" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">RESCUE! Fruit Fly Trap</td>
                  <td className="px-4 py-3 text-gray-700">Sealed liquid lure</td>
                  <td className="px-4 py-3 text-gray-700">Sterling International&rsquo;s lure trap &mdash; the same drowning mechanism in a jar-style housing, with strong US hardware and garden-centre distribution.</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue fruit fly trap" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Aunt Fannie&rsquo;s FlyPunch</td>
                  <td className="px-4 py-3 text-gray-700">Open liquid lure</td>
                  <td className="px-4 py-3 text-gray-700">A ready-to-use liquid bait you peel and set down &mdash; effectively a pre-mixed vinegar bowl with a lid, common in US grocery and natural-foods aisles.</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="aunt fannies flypunch fruit fly trap" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">BEAPCO drop-in traps</td>
                  <td className="px-4 py-3 text-gray-700">Liquid lure, multi-pack</td>
                  <td className="px-4 py-3 text-gray-700">Small pre-filled traps sold in packs &mdash; the format to choose when you need one in each of four zones rather than a single showpiece trap.</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="beapco fruit fly trap" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Hot Shot Fruit Fly Trap</td>
                  <td className="px-4 py-3 text-gray-700">Liquid lure</td>
                  <td className="px-4 py-3 text-gray-700">Spectrum Brands&rsquo; entry in the category; wide US big-box presence, same scent-lure principle.</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="hot shot fruit fly trap" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Safer Home indoor fly trap</td>
                  <td className="px-4 py-3 text-gray-700">Plug-in light + glue</td>
                  <td className="px-4 py-3 text-gray-700">A wall-outlet light-and-glue unit in the same class as the Zevo &mdash; tidy, but light is the weaker cue for fruit flies specifically.</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="safer home indoor fly trap" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Stem (SC Johnson)</td>
                  <td className="px-4 py-3 text-gray-700">Plug-in light + glue</td>
                  <td className="px-4 py-3 text-gray-700">SC Johnson&rsquo;s plant-forward household line, sold widely in US grocery. Buy the trap, not the aerosol, if the target is fruit flies.</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="stem indoor fly trap" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">JT Eaton ZendoZones / Sterling POP!</td>
                  <td className="px-4 py-3 text-gray-700">Decorative sticky &amp; compact lure</td>
                  <td className="px-4 py-3 text-gray-700">Design-led traps meant to sit visibly on a counter or plant shelf. Useful for fungus gnats and as supplements; not a substitute for a scent trap on a fruit fly cloud.</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="fruit fly sticky trap" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">A note on two brands that show up on the US results page for this search. An Amazon listing for a Raid fruit fly trap ranks on page one in the United States; it is a lure trap like the others here, and the general point stands &mdash; a trap is a device, an aerosol is a pesticide, and this guide recommends only the former. And Zevo, which carries a Canadian availability caveat further up this page, is the opposite story for a US reader: it is a Procter &amp; Gamble line with broad American grocery, Target, Walmart, and home-improvement distribution. Our hardest-to-find pick is your easiest buy.</p>

          <h2 id="where-to-buy">Where to Buy Fruit Fly Traps: Canada vs the United States</h2>
          <p>The traps are the same on both sides of the border; the shelves are not. In Canada the category is thin outside Amazon.ca and the seasonal pest aisle at Canadian Tire, Home Depot, Home Hardware, Rona, and Walmart. In the United States it is a staple category, stocked year-round at Home Depot, Lowe&rsquo;s, Ace Hardware, Walmart, Target, and most grocery chains.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[640px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">In Canada</th>
                  <th className="px-4 py-3 text-left">In the United States</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">TERRO Fruit Fly Trap</td>
                  <td className="px-4 py-3 text-gray-700">Amazon.ca year-round; Canadian Tire, Home Depot Canada, Home Hardware, Rona, and Walmart Canada in the seasonal pest aisle, which thins out over winter. Sold as the T2502 two-pack.</td>
                  <td className="px-4 py-3 text-gray-700">Home Depot, Lowe&rsquo;s, Ace Hardware, Walmart, Target, Amazon.com. The US retail two-pack is <strong>T2502B</strong> &mdash; same trap, B suffix on the pack.</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Katchy UV trap</td>
                  <td className="px-4 py-3 text-gray-700">Effectively an Amazon.ca product; almost no Canadian shelf presence.</td>
                  <td className="px-4 py-3 text-gray-700">Primarily online (Amazon.com), with intermittent listings at large US general retailers. Check current stock before planning around it.</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Zevo plug-in trap</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Inconsistent.</strong> Units and refill cartridges come and go on Amazon.ca &mdash; verify refill availability before buying into the ecosystem.</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Easy.</strong> Procter &amp; Gamble distribution: Target, Walmart, Home Depot, Lowe&rsquo;s, grocery chains, Amazon.com. Refills are a stocked item.</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">RESCUE!, Aunt Fannie&rsquo;s, BEAPCO, Hot Shot, Stem</td>
                  <td className="px-4 py-3 text-gray-700">Patchy &mdash; some appear on Amazon.ca, few reach Canadian shelves.</td>
                  <td className="px-4 py-3 text-gray-700">Standard US hardware, garden-centre, and grocery stock. This is the brand vocabulary a US shopper will actually see on a shelf.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Sticky ribbons and stakes</td>
                  <td className="px-4 py-3 text-gray-700">Everywhere, cheap, no brand differences worth paying for.</td>
                  <td className="px-4 py-3 text-gray-700">Everywhere, cheap, same conclusion.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Two buying notes worth carrying to either checkout. <strong>Check for the refill, not just the trap.</strong> Any lure or glue product is an ecosystem; a trap whose refills you cannot buy next spring is a decoration. <strong>And check the SKU on multi-packs</strong> &mdash; the difference between a single trap and a two-pack is often one letter at the end of a model number, which is precisely how people end up with one trap for a kitchen that needed three.</p>

          <h2 id="spotted-wing">Spotted Wing Drosophila: The One US Fruit Fly a Kitchen Trap Will Not Fix</h2>
          <p>Everything above is about the common vinegar fly, <em>Drosophila melanogaster</em>. There is a second species that matters enormously to American readers with a berry patch or a backyard cherry tree, and not at all to readers with a fruit bowl problem: <strong>spotted wing drosophila</strong>, <em>Drosophila suzukii</em>. It looks almost identical and behaves completely differently.</p>
          <p>The USDA National Invasive Species Information Center traces its US spread: present in Hawaii since the 1980s, first detected on the mainland in California in 2008, through the West Coast in 2009, reaching Florida, Utah, the Carolinas, Wisconsin, and Michigan in 2010, and recorded in every state except Nevada and Arizona by 2016. It is established in Canadian berry regions too. The detailed identification and management write-ups live with the university extension services: UC IPM Pest Note 74158, University of Minnesota Extension, Penn State Extension, Michigan State University Extension, Cornell IPM, Ohio State&rsquo;s Ohioline fact sheet ENT-0086, and WSU Tree Fruit.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[620px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left"></th>
                  <th className="px-4 py-3 text-left">Common fruit fly<br /><span className="font-normal text-xs text-brand-100"><em>D. melanogaster</em></span></th>
                  <th className="px-4 py-3 text-left">Spotted wing drosophila<br /><span className="font-normal text-xs text-brand-100"><em>D. suzukii</em></span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Size</td><td className="px-4 py-3 text-gray-700">About 3 mm</td><td className="px-4 py-3 text-gray-700">About 3 mm &mdash; the two are easily confused</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Male wings</td><td className="px-4 py-3 text-gray-700">Clear</td><td className="px-4 py-3 text-gray-700">A dark spot on the leading edge of each wing, near the tip &mdash; the field mark the name comes from</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Female ID</td><td className="px-4 py-3 text-gray-700">Ordinary ovipositor</td><td className="px-4 py-3 text-gray-700">A saw-like ovipositor with two rows of dark teeth &mdash; visible only under magnification, and the only reliable female character</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Where it lays eggs</td><td className="px-4 py-3 text-gray-700">Overripe, split, or rotting fruit and fermenting film</td><td className="px-4 py-3 text-red-700"><strong>Ripening and ripe intact fruit, still on the plant</strong> &mdash; the saw cuts through undamaged skin</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Where you meet it</td><td className="px-4 py-3 text-gray-700">Kitchen, drains, bins, recycling</td><td className="px-4 py-3 text-gray-700">Raspberries, blackberries, blueberries, strawberries, cherries, grapes &mdash; garden and orchard, not counter</td></tr>
                <tr><td className="px-4 py-3 font-bold text-brand-800">Does a kitchen vinegar trap solve it?</td><td className="px-4 py-3 text-emerald-700"><strong>Yes</strong>, alongside sanitation</td><td className="px-4 py-3 text-red-700"><strong>No</strong> &mdash; vinegar or yeast-sugar traps are used for monitoring; control is cultural</td></tr>
              </tbody>
            </table>
          </div>
          <p>The practical consequence is a fork in the road. If your flies are in the kitchen, everything else on this page applies and you can stop reading here. If your flies are in a berry patch and the fruit is going soft with tiny larvae inside days before you expected it, you are dealing with SWD and the tools are different: harvest completely and frequently (every one to two days at peak), refrigerate picked fruit immediately, remove and destroy dropped and overripe culls rather than composting them in place, and use a baited monitoring trap hung in the fruit zone to time the problem rather than to solve it. The extension services listed above publish region-specific spray and netting guidance for growers; a homeowner&rsquo;s leverage is almost entirely in harvest timing and sanitation.</p>

          <h2 id="season-region">Fruit Fly Season by Region: United States and Canada</h2>
          <p>Fruit flies are a year-round indoor pest that spikes in late summer and fall &mdash; University of Kentucky Entomology fact sheet EF-621 makes exactly that point, and adds the detail that matters most in a kitchen: with roughly 500 eggs per female and about a week from egg to adult, a single overlooked source can produce thousands of flies. Development effectively stalls below about 53&deg;F (12&deg;C), which is the mechanism behind every regional pattern below. The season tracks how warm your kitchen is more than what the weather is doing outside.</p>
          <p><strong>One clarification for US readers about the key-facts table above.</strong> That table&rsquo;s &ldquo;late summer to Thanksgiving&rdquo; line is written for a Canadian audience, where Thanksgiving falls on the second Monday of <em>October</em> &mdash; read it as mid-October, roughly six weeks before American Thanksgiving.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[620px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Region</th>
                  <th className="px-4 py-3 text-left">Typical season</th>
                  <th className="px-4 py-3 text-left">What drives it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Gulf Coast, Florida, South Texas</td><td className="px-4 py-3 text-gray-700">Low-level nearly year-round; heaviest June&ndash;November</td><td className="px-4 py-3 text-gray-700">The outdoor reservoir never collapses, so flies re-enter continuously. Door seals and screens matter as much as traps.</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Southeast and Mid-South</td><td className="px-4 py-3 text-gray-700">April&ndash;November, peaking August&ndash;October</td><td className="px-4 py-3 text-gray-700">A long warm shoulder season on both ends plus heavy local produce at harvest.</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Mid-Atlantic and Ohio Valley</td><td className="px-4 py-3 text-gray-700">May&ndash;October, peaking late August&ndash;October</td><td className="px-4 py-3 text-gray-700">Classic harvest-season pattern; ends with the first sustained cold nights.</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Upper Midwest, New England, Mountain West</td><td className="px-4 py-3 text-gray-700">June&ndash;October, with a sharp September&ndash;October peak</td><td className="px-4 py-3 text-gray-700">Shorter and more intense: everything ripens at once, then a hard frost ends the outdoor population outright.</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Pacific Northwest</td><td className="px-4 py-3 text-gray-700">June&ndash;October, long and damp</td><td className="px-4 py-3 text-gray-700">Cool and wet favours drain breeding; a good share of &ldquo;fruit flies&rdquo; here turn out to be drain flies.</td></tr>
                <tr className="border-b border-navy-50"><td className="px-4 py-3 font-bold text-brand-800">Desert Southwest and coastal California</td><td className="px-4 py-3 text-gray-700">Effectively year-round indoors; heaviest April&ndash;November</td><td className="px-4 py-3 text-gray-700">Air-conditioned kitchens sit in the ideal developmental range twelve months a year.</td></tr>
                <tr><td className="px-4 py-3 font-bold text-brand-800">Canada &mdash; southern Ontario, BC Lower Mainland, Prairies, Atlantic</td><td className="px-4 py-3 text-gray-700">July&ndash;October, peaking late August to Canadian Thanksgiving (mid-October)</td><td className="px-4 py-3 text-gray-700">Short, concentrated, and reliably over: the first hard frost ends the outdoor population and an indoor clean-up genuinely finishes the job until next year.</td></tr>
              </tbody>
            </table>
          </div>
          <p>Two consequences follow from the 53&deg;F threshold. In cold-winter regions &mdash; most of Canada and the northern half of the United States &mdash; a mid-winter fruit fly outbreak is proof of an indoor breeding source, because nothing is coming in from outside; go straight to the drain and produce audit. In warm regions, a persistent low-level population is normal and the goal shifts from eradication to exclusion and maintenance trapping.</p>

          <h2 id="fifra-vs-pmra">How Fruit Fly Traps Are Regulated: US EPA (FIFRA) vs Health Canada (PMRA)</h2>
          <p>The Canadian side of this is covered in the <a href="#pmra">PMRA section above</a> and it does not change. The American mirror image exists, is strong, and lands in exactly the same place &mdash; which is a useful thing to know when a US listing claims a trap is &ldquo;EPA approved&rdquo;.</p>
          <p><strong>In the United States,</strong> the Federal Insecticide, Fungicide, and Rodenticide Act draws a line between a <em>pesticide</em> and a <em>device</em>. A device is defined as any instrument or contrivance &mdash; other than a firearm &mdash; intended for trapping, destroying, repelling, or mitigating any pest. Per the EPA&rsquo;s Pesticide Registration Manual, Chapter 13, devices are not subject to the FIFRA section 3 registration requirements that apply to pesticide products, though they remain subject to labelling and misbranding provisions. Separately, FIFRA section 25(b) exempts minimum-risk pesticides from federal registration. A drowning liquid-lure trap, a glue board, and a UV-and-fan unit are devices; the aerosol next to them on the shelf is a registered pesticide.</p>
          <p><strong>In Canada,</strong> the same trap is outside the Pest Control Products Act for the same underlying reason &mdash; it kills mechanically rather than chemically &mdash; so no Health Canada PMRA registration number is required, while any insecticide sold here must carry one.</p>
          <p>Two practical takeaways for a shopper in either country. First, <strong>&ldquo;EPA approved&rdquo; on a trap listing is marketing, not a status</strong>: the EPA does not review a device&rsquo;s efficacy before sale, and no regulator on either side of the border has ever asked a fruit fly trap manufacturer to prove a catch rate. Judge the trap by its lure type and mechanism, which is what the tables on this page are for. Second, the regulatory line is why this guide recommends traps exclusively: a device carries no registration question, no residue question next to a cutting board, and no cross-border legality question &mdash; and the biology says source removal, not chemistry, is what ends the infestation anyway.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
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

          <h2 id="related">Related Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-fruit-flies">How to Get Rid of Fruit Flies in Canada — Full Playbook</Link></li>
            <li><Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy Indoor Insect Trap Review — Canada</Link></li>
            <li><Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks — the BTI Fix for Fungus Gnats</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada Guide</Link></li>
            <li><Link href="/blog/best-wasp-trap">Best Wasp Trap Canada</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost in Canada — What Pros Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="household pests" />
      </article>
    </>
  )
}
