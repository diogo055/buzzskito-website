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
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mosquito-trap-running-cost-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'What Mosquito Traps Cost to Run in Canada'
const META_TITLE = 'What Mosquito Traps Cost to Run in Canada'

const FAQS = [
  {
    question: 'How much does it cost to run a mosquito trap for a season in Canada?',
    answer: 'Somewhere between about $30 and $550 in consumables across a May-to-September Ontario season, depending entirely on what the machine burns. A propane CO2 trap is the expensive end: roughly 6 to 7 twenty-pound tank refills plus an attractant cartridge every three weeks lands most owners around $350 to $550. An electric lure trap of the BG-Mosquitaire type sits in the middle, because its scent lures are rated in months rather than weeks — call it $80 to $200 plus a few dollars of electricity. A UV-plus-CO2 hybrid like a DynaTrap is the cheapest to feed at roughly $30 to $90 for an optional lure and an annual bulb. Add the machine itself and the honest first-season number is $700 to $1,700 for propane, $440 to $915 for a lure trap, and $120 to $455 for a hybrid.',
  },
  {
    question: 'How much propane does a mosquito trap use over an Ontario season?',
    answer: 'Plan on one 20 lb (9 kg) cylinder every three weeks of continuous running. An Ontario mosquito season runs roughly 22 weeks from early May to the end of September, so that is about 6 to 7 refills. At Canadian refill prices of roughly $25 to $40 a tank you are looking at $150 to $280 in fuel alone, before attractant cartridges and replacement nets. There is no way to trim it without hurting results, because the trap only works while the CO2 plume is running.',
  },
  {
    question: 'Is it cheaper to refill or exchange a propane tank in Ontario?',
    answer: 'Refilling is cheaper per pound, and it is the option that matters when you are burning seven tanks a summer. Exchange cages at Canadian Tire, Home Depot and most gas stations are fast and available on a Sunday evening, but they typically hand you a cylinder filled to about 15 lb rather than a full 20 — you pay a flat price for roughly three quarters of the propane. A refill counter fills to capacity and charges by volume. Over a season the gap is real money. The practical compromise most trap owners land on: keep two cylinders, refill both at a propane depot when you are passing one, and keep the exchange cage as the emergency backup so the trap never sits dark for a week in July.',
  },
  {
    question: 'How much electricity does an electric mosquito trap use?',
    answer: 'Far less than people expect. Most plug-in mosquito traps draw somewhere between 10 and 45 watts. Run a 20-watt unit continuously from May 1 to September 30 and that is about 3,672 hours, or roughly 73 kWh. Ontario residential electricity, all-in with delivery, generally works out somewhere in the 10 to 20 cents per kWh range depending on your plan and when you use it, so the season costs about $7 to $15. A 40-watt bug zapper doubles that to roughly $15 to $30. Electricity is never the reason an electric trap is expensive — the lures and the machine are.',
  },
  {
    question: 'Do I have to buy the manufacturer lure refills?',
    answer: 'For a propane trap you effectively do, because the cartridge has to seat in a specific holder and the ecosystem is what makes the machine serviceable in Canada. For lure-based electric traps there is more room: the scent lure and the CO2 source can sometimes be separated, and some owners feed a CO2 trap from a beverage-grade CO2 cylinder with a regulator instead of a proprietary consumable. That is a real cost saving on a big property, and it is also a project — a regulator, tubing, a fitting, and a cylinder swap every few weeks. If you want a machine you switch on and forget, buy the manufacturer refills and budget for them honestly rather than fighting the design.',
  },
  {
    question: 'Can I turn the trap off during the day to save money?',
    answer: 'You can, and it is usually a false economy. A CO2 trap does not clear tonight — it works by removing egg-laying females so there are fewer mosquitoes four to eight weeks from now. Switching it off resets that progress every time the local population rebounds, so you spend the same money for a fraction of the effect. If the running cost only works on a part-time schedule, that is a signal the trap is the wrong tool for your property, not a scheduling problem. On a small fenced lot, a single barrier treatment from $99 does more for the money than a trap run half the time.',
  },
  {
    question: 'What is the cheapest mosquito trap to run in Canada?',
    answer: 'A UV-plus-CO2 hybrid like the DynaTrap line, because there is no fuel and the optional scent lure is measured in months. Realistic annual feeding cost is one or two lure cartridges and a replacement UV bulb once a year — roughly $30 to $90. The catch is what it catches: UV attracts a broad mix of night-flying insects, so the selectivity for host-seeking female mosquitoes is weaker than a dedicated CO2 machine. Cheapest to run is not the same as best per dollar of relief, which is why the running-cost table on this page shows the machine price and the feed cost side by side rather than ranking on either alone.',
  },
  {
    question: 'Is a mosquito trap cheaper than professional spraying over one season?',
    answer: 'Over a single season, usually not. A propane trap plus its consumables lands somewhere around $700 to $1,700 in year one, which is more than a full BuzzSkito Standard Season program at $994 for 10 bi-weekly treatments and far more than the $549 Basic Season. Over three or four seasons a trap can pull ahead on paper, because the machine is already bought and only the consumables recur. The catch is that the trap works slowly, covers only the zone around itself, and does nothing whatsoever for ticks — a tick program is $597 a season standalone or $497 bundled, and no trap of any price replaces it. Rural acreage is where a trap genuinely earns its fuel bill; a fenced GTA backyard usually is not.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Propane tanks, lure cartridges, nets and hydro: what a mosquito trap actually costs to run for a Canadian season, and when spraying is cheaper.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function MosquitoTrapRunningCostCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A GTA pest-control operator breaks down the true first-season cost of owning a mosquito trap in Canada: propane tank swaps, attractant cartridges, lure refills, replacement nets, electricity, and how the total compares to a barrier spray program.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Trap Running Cost Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Trap Running Cost</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The sticker price is the small number. Here is the honest first-season total — propane tank swaps, attractant cartridges, lure refills, replacement nets and hydro — for every kind of mosquito trap sold in Canada, from an operator who buys these consumables.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Biogents BG-Mosquitaire CO2 lure trap" search="biogents bg mosquitaire co2 mosquito trap" label="Best running-cost value" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Running a mosquito trap in Canada costs roughly <strong>$30 to $550 a season in consumables</strong> on top of the machine, and the fuel decides which end you land on. A propane CO2 trap burns about 6–7 tank refills plus an attractant cartridge every three weeks; an electric lure trap eats a scent lure every couple of months and a few dollars of hydro; a UV hybrid is the cheapest to feed and the least selective about what it catches. Buyers stall on the sticker price, but the consumables are what decide whether the machine is still running in August.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Propane CO2 trap:</strong> $150–$280 fuel + $105–$175 cartridges + $30–$75 nets = about <strong>$350–$550 per season</strong>.</li>
              <li><strong>Electric CO2 / lure trap:</strong> about <strong>$80–$200 per season</strong> in lures and catch bags, plus roughly $7–$15 of electricity.</li>
              <li><strong>UV + CO2 hybrid:</strong> about <strong>$30–$90 per season</strong> — an optional lure and a yearly bulb.</li>
              <li>A 20-watt trap running non-stop May–September uses roughly 73 kWh. Electricity is never the expensive part.</li>
              <li>Refilling a propane cylinder beats exchanging it: exchange cages typically fill to about 15 lb, not 20.</li>
              <li>First-season all-in: about $700–$1,700 propane, $440–$915 lure trap, $120–$455 hybrid.</li>
              <li>For comparison, a licensed barrier spray is from $99 for a single treatment, $549 or $994 for a full season program — and it is the only option here that also touches ticks.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150 five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="What We Would Buy, Judged on the Whole Season"
            awards={[
              {
                badge: 'Best Running-Cost Value',
                name: 'Biogents BG-Mosquitaire CO2 lure trap',
                why: 'The lure-based CO2 traps are the format that makes sense once you price the whole summer instead of the box. The scent lures are rated in months rather than the three weeks a propane cartridge lasts, there is no cylinder to haul, and the only recurring items are the lure and a catch bag. It is not the cheapest machine on this page and we are not going to pretend it is — it is the one whose feed cost stays sane in August.',
                search: 'biogents bg mosquitaire co2 mosquito trap',
                score: 9.0,
                featured: true,
                pros: ['Lures measured in months, not weeks', 'No propane cylinder logistics', 'Genuinely CO2-driven, not UV bycatch'],
                cons: ['Higher machine price than a hybrid', 'Needs a CO2 source to hit its full catch'],
              },
              {
                badge: 'Cheapest Entry to Propane',
                name: 'Mosquito Magnet Patriot Plus',
                why: 'The lowest-cost way into the only propane ecosystem with reliable Canadian refills, nets and parts. The running cost is identical to the flagship — same tank every three weeks, same cartridge cadence — so buying the entry unit saves on the machine without saving a cent on the feed.',
                search: 'mosquito magnet patriot plus propane mosquito trap',
                score: 8.3,
                pros: ['Real Canadian refill and parts supply', 'Same CO2 mechanism as the flagship', 'Lower entry price'],
                cons: ['Feed cost is the same as the expensive model', 'Tank logistics every three weeks'],
              },
              {
                badge: 'Best for Acreage',
                name: 'Mosquito Magnet Executive',
                why: 'On a rural or cottage lot where the mosquito pressure never lets up, the flagship earns its fuel bill through reach and cartridge capacity. On a fenced suburban lot it does not, and the running cost is the same either way — which is the whole argument for matching the machine to the acreage.',
                search: 'mosquito magnet executive mosquito trap',
                score: 8.0,
                pros: ['Longest reach in the propane family', 'Built for continuous season-long duty'],
                cons: ['Highest first-season total on this page', 'Wasted on a small city lot'],
              },
              {
                badge: 'Cheapest to Feed',
                name: 'DynaTrap with Atrakta lure',
                why: 'No fuel, an optional scent lure measured in months, and a UV bulb once a year — the lowest recurring cost of any trap sold in Canada. The honest trade-off is selectivity: UV pulls in a broad mix of night-flying insects, so a smaller share of the catch is the biting female you actually care about.',
                search: 'dynatrap atrakta mosquito trap',
                score: 7.4,
                pros: ['Lowest season feeding cost', 'No cylinder, no refill trips', 'Plugs into a standard outdoor outlet'],
                cons: ['Broad bycatch, weaker mosquito selectivity', 'Needs an outdoor receptacle within reach'],
              },
              {
                badge: 'Best Consumables Buy',
                name: 'Attractant cartridges in a season multipack',
                why: 'Cartridges are the line item people underestimate: one every three weeks means seven across an Ontario season. Buying them one at a time in July, when Canadian stock thins out, is how owners end up running a trap with no lure in it. Buy the season in one go in May.',
                search: 'mosquito magnet octenol attractant refill multipack',
                score: 8.6,
                pros: ['Lowest cost per week of running', 'Removes the mid-season stockout risk'],
                cons: ['Money out the door in May', 'Cartridges have a shelf life — do not stockpile two seasons'],
              },
              {
                badge: 'Best Cheap Insurance',
                name: 'A second 20 lb propane cylinder',
                why: 'The most useful $60-ish a propane trap owner can spend. One cylinder on the machine, one full in the shed, and the trap never sits dark for four days waiting on a trip to the refill counter — which is exactly the gap that lets the local population rebound and wastes the fuel you already burned.',
                search: '20 lb propane tank',
                score: 8.4,
                pros: ['No dark days mid-season', 'Lets you use cheaper refills instead of emergency exchanges'],
                cons: ['Another cylinder to store and re-certify eventually'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Pricing the whole summer rather than the box?</strong> The <em>Best Running-Cost Value</em> BG-Mosquitaire is the format whose feed cost stays reasonable, because months-long lures beat three-week cartridges over a 22-week season. <strong>Set on propane?</strong> Buy the <em>Cheapest Entry</em> Patriot Plus rather than the flagship unless you genuinely have acreage — the running cost is identical, so the extra machine money only buys reach. <strong>Rural or cottage lot backing onto marsh?</strong> That is the one case where the <em>Best for Acreage</em> Executive is the right call. <strong>Want the lowest possible recurring cost?</strong> The <em>Cheapest to Feed</em> DynaTrap, understanding that you trade selectivity for it. And whichever machine you pick, buy the <em>Best Consumables Buy</em> multipack in May and a <em>Best Cheap Insurance</em> second cylinder, because a trap that is off is a trap that costs money and delivers nothing. If the running cost is what is making you hesitate at all, compare it honestly against <Link href="/mosquito-control">a barrier spray program</Link> before you buy the machine.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">First-Season Cost of Ownership — Canada 2026</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Trap type</th>
                  <th className="px-4 py-3 text-left">Machine (typical CAD band)</th>
                  <th className="px-4 py-3 text-left">Consumables / season</th>
                  <th className="px-4 py-3 text-left">Hydro</th>
                  <th className="px-4 py-3 text-left">Year-one total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Propane CO2 trap', machine: '$400 – $1,150', feed: '$350 – $550 (tanks, cartridges, nets)', hydro: 'None', total: '$750 – $1,700' },
                  { type: 'Electric CO2 / lure trap', machine: '$350 – $700', feed: '$80 – $200 (lures, catch bags)', hydro: '$7 – $15', total: '$440 – $915' },
                  { type: 'UV + CO2 hybrid', machine: '$80 – $350', feed: '$30 – $90 (optional lure, yearly bulb)', hydro: '$7 – $15', total: '$120 – $455' },
                  { type: 'Bug zapper', machine: '$40 – $200', feed: '$15 – $40 (bulbs)', hydro: '$15 – $30', total: '$70 – $270' },
                  { type: 'Licensed barrier spray', machine: 'No equipment to buy', feed: 'From $99 single · $549 or $994 season', hydro: 'None', total: '$99 – $994' },
                ].map(({ type, machine, feed, hydro, total }) => (
                  <tr key={type} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{type}</td>
                    <td className="px-4 py-3 text-gray-700">{machine}</td>
                    <td className="px-4 py-3 text-gray-700">{feed}</td>
                    <td className="px-4 py-3 text-gray-700">{hydro}</td>
                    <td className="px-4 py-3 font-semibold text-brand-900">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Machine bands are general Canadian retail ranges across Canadian Tire, Home Depot, Rona and amazon.ca — not quoted listings, and they move with the season. Use the price-check links for what is actually available today. Season length assumed at roughly 22 weeks, early May through the end of September.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Jump straight to current Canadian availability — the machine whose feed cost stays sane, and the season consumables that go with it:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="biogents bg mosquitaire co2 mosquito trap">Check the BG-Mosquitaire on Amazon.ca &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="mosquito magnet octenol attractant refill multipack">Season attractant multipack &rarr;</BuyLink>
          </div>

          <h2>The sticker price is the small number</h2>
          <p>Almost every conversation we have about mosquito traps stalls in the same place. It is never “can I afford the machine.” It is “what does this thing cost me every month once it is sitting in the yard.” That instinct is right. A mosquito trap is not an appliance you buy once; it is a machine that eats something continuously for 22 weeks, and the thing it eats is what determines whether it is still running when the August generation hatches.</p>
          <p>We run a mosquito and tick company in the GTA, which means we have watched a lot of these machines get bought in May and quietly switched off in July. It is almost never because the trap did not work. It is because the owner did the running-cost arithmetic after the purchase instead of before it, and then rationed the fuel. A CO2 trap run part-time does not deliver part of the result — it delivers close to none of it, because the population rebounds in the gaps. So here is the arithmetic up front.</p>

          <h2>Propane: the fuel bill nobody budgets for</h2>
          <p>A propane trap burns propane through a catalytic converter to produce a CO2 plume that imitates a breathing human. It is the most convincing fake host you can buy, and it is the most expensive to feed. Plan on <strong>one 20 lb (9 kg) cylinder every three weeks</strong> of continuous running. Across an Ontario season that is roughly <strong>6 to 7 refills</strong>, or about $150 to $280 in fuel at typical Canadian refill prices.</p>
          <p>Then there is the attractant. Octenol and Lurex cartridges last about three weeks each, which means another seven across the season and roughly $105 to $175. Nets and catch bags are the line nobody mentions at all: on a productive property you will replace two or three over a summer, so add $30 to $75. Stack it up and <strong>$350 to $550 per season</strong> is the realistic consumables figure for a propane trap, entirely separate from the machine.</p>
          <p>One Canadian detail that quietly matters: <strong>refilling beats exchanging</strong>. The exchange cages outside Canadian Tire, Home Depot and most gas stations are convenient and open when the propane depot is not, but they typically hand you a cylinder filled to about 15 lb rather than a full 20. You pay a flat price for roughly three quarters of the propane. Once a summer that is trivial. Seven times a summer it is a real number. Keep two cylinders and refill them by volume; use the exchange cage only as the emergency backup.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="mosquito magnet patriot plus propane mosquito trap">Check the Patriot Plus &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="20 lb propane tank">Second 20 lb cylinder &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="propane tank level gauge">Tank level gauge &rarr;</BuyLink>
          </div>
          <p>For everything else about how these machines actually perform — the “up to 1 acre” claim, the models with real Canadian parts supply, the ramp-up period — our full <Link href="/blog/propane-mosquito-trap-canada">propane mosquito trap guide for Canada</Link> covers it in depth. This page is deliberately about the money.</p>

          <h2>Electric lure traps: cheaper to feed, tethered to a cord</h2>
          <p>The lure-based CO2 traps — the BG-Mosquitaire family and its relatives — take a different approach to the same problem. Instead of manufacturing CO2 by combustion, they combine a scent lure with an airflow design and, on the models that support it, an external CO2 source. That changes the cost curve completely, because <strong>the scent lures are rated in months rather than weeks</strong>. Most owners buy two or three across a Canadian season, not seven, which is why the consumables land around <strong>$80 to $200</strong> instead of $500.</p>
          <p>The trade is the cord. These machines need an outdoor receptacle within reach of where the trap actually belongs, which is rarely beside the house. That means a proper outdoor-rated extension cord and, if the run crosses a walkway or sits exposed, a weatherproof cover for the connection. Do not solve this with an indoor cord and a plastic bag — a wet connection on a lawn is an electrical hazard, and outdoor receptacles are required to be GFCI-protected for exactly this reason.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="biogents bg sweetscent lure refill">BG lure refills &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="outdoor extension cord weatherproof cord cover">Outdoor cord + cover &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="outdoor weatherproof timer plug">Weatherproof outdoor timer &rarr;</BuyLink>
          </div>

          <h2>Electricity is not the expensive part</h2>
          <p>People assume a machine that runs 24 hours a day for five months must be punishing the hydro bill. It is not. Most plug-in mosquito traps draw between 10 and 45 watts — less than a lot of patio string lights. Run a 20-watt trap continuously from May 1 to September 30 and that is 3,672 hours, or about <strong>73 kWh</strong>. Ontario residential electricity, all-in with delivery, generally lands somewhere in the 10 to 20 cents per kWh range depending on your rate plan and when you use power, so the entire season costs roughly <strong>$7 to $15</strong>.</p>
          <p>Do the same maths on a 40-watt bug zapper and you get about 147 kWh, or $15 to $30 for the summer. Cheap. The problem with zappers was never the hydro — it is what ends up in the tray, which our <Link href="/blog/bug-zappers-canada-do-they-work">honest look at whether bug zappers work in Canada</Link> goes through properly. A trap that costs $20 a season to run and catches mostly moths is not a bargain.</p>

          <h2>The consumables you will actually buy</h2>
          <p>This is the shopping list nobody hands you at the register. Buy the season in May: Canadian stock on lures, nets and bulbs thins out badly by August, which is exactly when you need them.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="w-full min-w-[680px] text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Item</th>
                  <th className="px-4 py-3 text-left">How often</th>
                  <th className="px-4 py-3 text-left">Season quantity</th>
                  <th className="px-4 py-3 text-left">Buy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '20 lb propane cylinder (refill)', cadence: 'Every ~3 weeks running', qty: '6–7 refills', search: '20 lb propane tank' },
                  { item: 'Octenol attractant cartridge', cadence: 'Every ~3 weeks', qty: '7 cartridges', search: 'mosquito magnet octenol attractant refill multipack' },
                  { item: 'Lurex attractant cartridge', cadence: 'Every ~3 weeks', qty: 'Alternative to octenol', search: 'lurex mosquito trap attractant refill' },
                  { item: 'Replacement net / catch bag (propane)', cadence: 'When full or torn', qty: '2–3 per season', search: 'mosquito magnet replacement net' },
                  { item: 'BG-style scent lure refill', cadence: 'Every ~2 months', qty: '2–3 per season', search: 'biogents bg sweetscent lure refill' },
                  { item: 'UV replacement bulb (hybrid traps)', cadence: 'Roughly annually', qty: '1 per year', search: 'dynatrap replacement uv bulb' },
                  { item: 'Outdoor-rated extension cord', cadence: 'One-time', qty: '1', search: 'outdoor extension cord 12 gauge' },
                  { item: 'Weatherproof cord / outlet cover', cadence: 'One-time', qty: '1', search: 'outdoor extension cord weatherproof cord cover' },
                  { item: 'Outdoor timer or weatherproof smart plug', cadence: 'One-time', qty: '1 (optional)', search: 'outdoor weatherproof timer plug' },
                ].map(({ item, cadence, qty, search }) => (
                  <tr key={item} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{item}</td>
                    <td className="px-4 py-3 text-gray-700">{cadence}</td>
                    <td className="px-4 py-3 text-gray-700">{qty}</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search={search} block>Check price &rarr;</BuyLink></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>A note on the timer, since it looks like the obvious way to cut the fuel bill: it is not, on a CO2 trap. It is genuinely useful on a UV hybrid, where the catch is concentrated at dusk and overnight and the machine is not trying to suppress a population. On a propane or lure trap, a timer just buys you gaps for the mosquitoes to refill.</p>

          <h2>The mistake most Canadian buyers make</h2>
          <p>Three of them, honestly, and they all cost money rather than performance.</p>
          <ul>
            <li><strong>Buying a machine with no Canadian supply chain.</strong> Several traps that review well in the United States are not reliably stocked here, and neither are their lures, nets or bulbs. A trap you cannot feed in August is a $600 lawn ornament. Check that the <em>consumables</em> ship to Canada before you check the machine price.</li>
            <li><strong>Rationing the fuel.</strong> Switching the trap off on weekdays, or for a two-week vacation in July, is the single most common way people waste the money they already spent. The population you knocked down comes back, and the next tank starts from zero.</li>
            <li><strong>Sizing for the property instead of the pressure.</strong> Coverage claims assume open, low-wind ground. A fenced suburban lot with a neighbour’s untreated yard on either side keeps restocking faster than one machine draws down — so you pay flagship running costs for entry-level results.</li>
          </ul>

          <h2>When the cheaper option is the right call</h2>
          <p>We are an operator, not a manufacturer, so we will say the unpopular thing plainly: <strong>on a small fenced GTA lot, a trap of any price is usually the wrong purchase</strong>, and the running cost is the reason. You are committing $350 to $550 a year in consumables to slowly thin a population that is being topped up over the fence every night. That budget buys a full season of professional treatments outright.</p>
          <p>The cheaper option is genuinely correct in several situations. If you want relief for a single evening — a party, a wedding, a long weekend — nothing in the trap category helps, because traps work over four to eight weeks. If your problem is one seating area rather than a whole yard, airflow and mesh cost a fraction of a trap and work instantly. And if your property is a standard suburban lot, a licensed barrier treatment covers the entire yard within hours for less than a season of propane.</p>
          <p>Where a trap genuinely earns its fuel bill is rural and cottage acreage: an open property backing onto marsh, pond or bush, where there is no fence line to spray and the mosquito pressure is structural rather than seasonal. That is the buyer we would hand a propane machine to without hesitation. If you are still comparing the whole category rather than the cost of feeding it, our <Link href="/blog/best-mosquito-trap-canada">best mosquito trap in Canada guide</Link> ranks the machines themselves, and the <Link href="/blog/co2-mosquito-trap-canada">CO2 mosquito trap explainer</Link> covers how the attraction actually works.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">One season of propane costs more than a season of spraying.</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">A propane trap eats $350–$550 a year in tanks and cartridges and works over weeks. BuzzSkito’s licensed barrier spray covers the whole yard within hours and holds 21–30 days — from $99 for a single treatment, $549 for the Basic Season, $994 for 10 bi-weekly treatments. Tick protection is $597/season standalone or $497 bundled, which is five tick sprays no trap of any price can replace. Serving 19+ GTA cities, May–September.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Break-even: when does a trap pay for itself?</h2>
          <p>Run the numbers over more than one summer and the picture shifts, which is the fair thing to say. Year one on a propane trap is $750 to $1,700 all-in. Year two is only the consumables, so $350 to $550. A lure trap goes from $440–$915 down to $80–$200. Against a $994 Standard Season program, a lure trap crosses over sometime in year two or three, and a propane trap on a big rural property gets there eventually too.</p>
          <p>Two things keep that from being the whole story. The first is that a trap and a barrier treatment are not doing the same job — one thins a population over weeks in the zone around itself, the other clears a defined yard within hours and holds for a month. The second is ticks. No mosquito trap ever built intercepts a tick, because ticks do not fly to a CO2 plume; they climb vegetation and wait. If your property has a wood line, a long-grass edge or a ravine behind it, the trap budget does nothing about the actual health risk, and that gap does not close in year five.</p>

          <h2>Winter: the cost you can avoid entirely</h2>
          <p>Everything on this page assumes the machine survives to next May, and in Ontario that is a choice rather than a given. Disconnect the propane cylinder and store it outdoors and upright — never in a basement, garage or shed. Empty and dry the catch net so it does not mildew into the bin. Bring the machine and any lure cartridges indoors, because cartridge shelf life is real and a winter in an unheated garage is not kind to it. Pull the outdoor cord and cover in before freeze-up so the connectors are not iced into the lawn in April.</p>
          <p>Skip that hour and the recurring cost stops being consumables and starts being a new machine, which is a far worse line item than seven tanks of propane.</p>

          <h2>The bottom line</h2>
          <p>Mosquito traps cost between roughly $30 and $550 a season to run in Canada, and the fuel decides which. Propane is the most convincing fake host and the most expensive to feed at $350 to $550 a year once you count tanks, cartridges and nets. Lure-based electric traps cut that to $80 to $200 because months-long lures beat three-week cartridges over a 22-week season. UV hybrids are cheapest at $30 to $90 and least selective about what they catch. Electricity is a rounding error at $7 to $15 either way. Buy the season consumables in May rather than in the August shortage, refill cylinders instead of exchanging them, keep a second tank so the machine never sits dark, and be honest about the property: on open acreage a trap earns its fuel bill, and on a fenced suburban lot the same money buys a full season of whole-yard treatment that also handles the ticks a trap never will.</p>

          <AdjacentPestCTA variant="equipment" />

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4 my-6">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100">
                <summary className="cursor-pointer px-5 py-3 font-semibold text-brand-900 list-none">{question}</summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/propane-mosquito-trap-canada">Propane Mosquito Traps in Canada — Are $1,000+ CO2 Traps Worth It?</Link></li>
            <li><Link href="/blog/co2-mosquito-trap-canada">CO2 Mosquito Traps Explained for Canadian Yards</Link></li>
            <li><Link href="/blog/best-mosquito-trap-canada">The Best Mosquito Traps in Canada, Ranked</Link></li>
            <li><Link href="/blog/bug-zappers-canada-do-they-work">Do Bug Zappers Actually Work in Canada?</Link></li>
            <li><Link href="/blog/mosquito-control-cost-ontario">What Mosquito Control Costs in Ontario</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Skip the Tank Swaps. Book the Yard." subtext="Licensed barrier spray from $99, no consumables to buy. Whole-yard protection across 19+ GTA cities. 150 five-star reviews." variant="dark" />
    </>
  )
}
