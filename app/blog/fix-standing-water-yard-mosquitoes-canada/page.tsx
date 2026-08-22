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

const SLUG = 'fix-standing-water-yard-mosquitoes-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Fix Standing Water in Your Yard: The Canadian Drainage Guide'
const META_TITLE = 'Fix Standing Water in Your Yard (Canada)'

const FAQS = [
  {
    question: 'Does standing water in my yard actually cause mosquitoes?',
    answer: 'Yes, and it is the single biggest driver of how many mosquitoes you have. Mosquitoes do not breed in grass, shrubs or mulch — they breed in water. Every female lays her eggs on or beside a still water surface, and the entire larval and pupal stage happens underwater. A yard with a chronic soggy low spot, a clogged catch basin, a downspout that discharges into a depression, or a tarp holding rainwater is manufacturing its own mosquito population on site. Removing the water removes the nursery, which is why drainage hardware outperforms any amount of spraying at the source end of the problem.',
  },
  {
    question: 'How long does water have to sit before it breeds mosquitoes?',
    answer: 'Roughly a week. In southern Ontario summer temperatures, eggs hatch within a day or two, larvae feed and moult for about four to ten days, and the pupal stage adds another one to three. Call it seven to ten days from egg to flying adult, faster in a hot July and slower in a cool May. The practical rule: water that clears within 48 hours is not a breeding site and does not need a drainage project. Water that is still there on day four is on the clock, and water that sits for a week or more every time it rains is producing adults. Time your puddles before you spend money on pipe.',
  },
  {
    question: 'What size drain pipe do I need for a backyard?',
    answer: 'Four inch (100 mm) is the residential standard and handles roof water and yard drainage on a typical GTA lot. Three inch is only appropriate for a single short downspout run. Six inch is for long collector runs, multiple downspouts tied together, or a property that collects runoff from uphill neighbours. Size matters far less than slope: an undersized pipe laid at a proper fall outperforms an oversized pipe laid flat. Aim for at least a one percent grade — one centimetre of drop per metre, or about one eighth of an inch per foot — and confirm it with a string and a line level rather than by eye.',
  },
  {
    question: 'Perforated or solid drain pipe — which one should I use?',
    answer: 'Perforated pipe collects water out of saturated soil; solid pipe carries water somewhere else. Use perforated pipe, wrapped in a non-woven filter sock and bedded in clear stone, for a French drain under a soggy lawn or along a wet foundation. Use solid pipe for anything that starts at a downspout or a catch basin, because that water already has somewhere to be and you do not want it leaking back into the ground three metres from the house. The most common and most expensive mistake Canadian homeowners make is running perforated corrugated pipe from a downspout: it discharges most of the roof water into the soil right beside the foundation, which is the exact problem they were trying to solve.',
  },
  {
    question: 'How much does a French drain cost in Ontario?',
    answer: 'Contractor quotes for a professionally installed French drain or full yard drainage system in the GTA commonly land somewhere in the low four figures and can run to the mid four figures on a larger lot with excavation, disposal, restoration and a connection to daylight. A DIY run using the same materials — perforated pipe, non-woven geotextile, clear stone, fittings and a proper outlet — is typically a $150 to $500 hardware purchase for a residential-length run, plus a weekend and a sore back. The gap is labour and machine time, not materials. That is why it is worth pricing the parts before you accept a quote: for a short run in a lawn with no hardscape in the way, the parts are the whole job.',
  },
  {
    question: 'Do dry wells work in GTA clay soil?',
    answer: 'Often not, and this is where a lot of drainage money gets buried. Much of Peel, Halton and York sits on heavy clay till with very slow percolation, and a dry well in clay is simply a gravel-filled hole that fills up and stays full. Test before you buy the kit: dig a hole roughly 30 cm deep, fill it with water, let it drain, fill it again, and check it 24 hours later. If there is still water in it, infiltration is not your answer and you should be conveying water to daylight, to a swale, or to wherever your municipality permits a discharge. If it drains in a few hours, a dry well is a legitimate and tidy solution.',
  },
  {
    question: 'Will a yard drain freeze in an Ontario winter?',
    answer: 'A properly sloped drain that fully empties will not cause you problems, because there is no standing water in it to freeze. Trouble comes from flat spots and sags, which hold water, freeze solid, and either block the line or split the pipe. Pop-up emitters do freeze shut, so plan on the outlet being out of service from roughly December to March and make sure the line can hold or bypass that meltwater without backing up to the foundation. Practical Ontario habits: lay the pipe with continuous fall, avoid low bellies, keep the outlet daylighting downhill and clear of snow-pile locations, and pull the grate on a catch basin in late fall to clear leaves before freeze-up.',
  },
  {
    question: 'Can I drain my yard onto my neighbour’s property?',
    answer: 'No. Collecting water and discharging it across a property line is how drainage projects turn into disputes, and municipalities across the GTA regulate lot grading precisely to stop it. Direct the outlet to your own low point, to a rear or side swale that was graded for it, or to the street or storm system where your municipality allows that connection. Downspouts should also not be tied into the sanitary sewer — Toronto in particular runs a downspout disconnection program for exactly this reason. Check your municipality’s lot-grading and downspout rules before you cut into anything, and if your only viable outlet is a shared swale, talk to the neighbour first.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Standing water is the mosquito source, not the symptom. Drain a soggy Ontario yard with $150-$500 of pipe instead of a four-figure contractor quote.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function FixStandingWaterYardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'How to find and fix the standing water breeding mosquitoes in a Canadian yard — drain pipe, catch basins, dry wells, downspout extensions and grading, plus BTI for the water you cannot remove.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Fix Standing Water in Your Yard', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Fix Standing Water in Your Yard</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The mosquitoes in your yard were almost certainly born in your yard. Here is how to find the water, price the hardware that removes it, and know when the $12 fix is the right one.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="4&quot; Perforated Drain Pipe with Filter Sock" search="4 inch perforated drain pipe filter sock" label="Core drainage part" />

      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Standing water is the source of a backyard mosquito problem, and the fix is drainage hardware, not spray. Time your puddles first: water that clears within 48 hours breeds nothing, while water still sitting on day seven is producing adult mosquitoes. Most Canadian yards are solved with 4&quot; pipe, a filter sock, a catch basin or a downspout extension &mdash; a <strong>$150&ndash;$500</strong> parts purchase against the low-to-mid four figures a GTA contractor quotes for the same French drain installed.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Solid pipe</strong> carries roof and catch-basin water away. <strong>Perforated pipe in a non-woven sock</strong> pulls water out of saturated soil. Mixing them up is the classic and costly error.</li>
              <li>Slope beats diameter. One percent fall &mdash; 1 cm per metre, roughly &frac18;&quot; per foot &mdash; is the number that decides whether a drain works.</li>
              <li>Use <strong>non-woven geotextile</strong>, never woven weed barrier. Woven fabric blinds off with silt and kills the drain in a couple of seasons.</li>
              <li>Dry wells fail in GTA clay. Do a 24-hour percolation test before you buy one.</li>
              <li>For water you genuinely cannot drain &mdash; a pond, a ditch, a rain barrel &mdash; BTI larvicide is the answer, not pipe. One dunk treats about 100 sq ft of surface for roughly 30 days.</li>
              <li>Sometimes the cheap fix is the right fix: a $12 downspout extension and ten minutes with a rake resolves a surprising share of these yards.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150 five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="What to Buy, By What Your Yard Is Doing"
            awards={[
              {
                badge: 'Best Overall',
                name: '4" Perforated Drain Pipe with Non-Woven Filter Sock',
                why: 'The core of every real yard-drainage fix. Perforated pipe pre-wrapped in a non-woven filter sock, bedded in clear stone, pulls water out of a saturated lawn and moves it to daylight. Corrugated is cheaper and bends around obstacles; smooth-wall carries more water and can be snaked if it ever silts up. Buy the sock version even though it costs more — an unsocked pipe in silty clay is a two-season drain.',
                search: '4 inch perforated drain pipe filter sock',
                score: 9.1,
                featured: true,
                pros: ['Solves the chronic soggy low spot at the source', 'Sock version resists silting in clay soils', 'Parts cost a fraction of an installed quote'],
                cons: ['Trench digging is the real work', 'Useless without a downhill outlet to daylight'],
              },
              {
                badge: 'Best for Roof Water',
                name: 'Downspout Extension + Pop-Up Drainage Emitter',
                why: 'The highest return per dollar in this entire guide. Roof water is the largest single volume hitting most GTA lots, and a downspout that dumps at the foundation creates the soggy corner you are trying to drain. Solid pipe from the elbow to a pop-up emitter well away from the house moves it in an afternoon.',
                search: 'downspout extension pop up emitter kit',
                score: 8.8,
                pros: ['Cheapest fix that actually removes water', 'No trench needed if you can bury it shallow', 'Emitter stays hidden until it flows'],
                cons: ['Emitters freeze shut over an Ontario winter', 'Must use solid pipe, never perforated'],
              },
              {
                badge: 'Best for a Patio Puddle',
                name: 'Yard Drain Catch Basin Kit with Grate',
                why: 'When water pools on a hard surface — a patio low spot, the bottom of a driveway, a walkway that settled — you need a surface inlet, not a French drain. A basin with a removable grate and a sediment sump ties into solid pipe and can be cleaned out with a shop vac each fall.',
                search: 'yard drain catch basin kit 9 inch grate',
                score: 8.4,
                pros: ['Handles fast surface runoff a French drain cannot', 'Sump traps sediment before it enters the pipe', 'Grate lifts out for leaf cleanout'],
                cons: ['Only works if you can slope the surface toward it', 'Needs annual clearing before freeze-up'],
              },
              {
                badge: 'Best Gravel-Free',
                name: 'Aggregate-Free French Drain Bundle',
                why: 'Pipe pre-surrounded by lightweight aggregate substitute inside a mesh sleeve. It exists because hauling and placing clear stone is the part of a French drain that breaks people. For a homeowner with no wheelbarrow access to the back yard, this is the difference between the project happening and not happening.',
                search: 'gravel free french drain pipe',
                score: 8.0,
                pros: ['No stone to haul, shovel or wash', 'Much faster to install solo', 'Same perforated pipe at the core'],
                cons: ['Costs more per metre than pipe plus stone', 'Bulky bundles to transport home'],
              },
              {
                badge: 'Best for Water You Cannot Drain',
                name: 'BTI Mosquito Dunks and Bits',
                why: 'A pond, a roadside ditch, a rain barrel you actually want to keep, a window well that will always take water. BTI is a bacterium that kills mosquito and black-fly larvae and leaves fish, pets, pollinators and people alone. It is the correct tool for water that stays by design.',
                search: 'mosquito dunks bti',
                score: 8.6,
                pros: ['Works where no drainage project can', 'Safe around fish, dogs and pollinators', 'One dunk covers ~100 sq ft for ~30 days'],
                cons: ['Only treats the water it is in', 'Needs replacing monthly through the season'],
              },
              {
                badge: 'Best Fast Fix',
                name: 'Submersible Utility / Transfer Pump',
                why: 'For water that is standing right now — a flooded window well, a pool cover holding 200 litres, a low spot after a storm cell. A ¼ HP submersible with a garden-hose adapter empties it today while you decide on the permanent fix. Also the tool that lets you dewater a trench mid-project.',
                search: 'submersible utility pump 1/4 hp',
                score: 7.9,
                pros: ['Removes water the same day', 'Dewaters a trench so you can lay pipe', 'Reusable every storm season'],
                cons: ['Treats the symptom, not the grade', 'Needs an outlet the water can go to'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Water pooling at the house after every rain?</strong> Start with the <em>Best for Roof Water</em> downspout extension and pop-up emitter &mdash; it is the cheapest part of this list and it fixes the largest volume. <strong>A lawn low spot that stays squishy for days?</strong> That is the <em>Best Overall</em> perforated pipe in a filter sock, bedded in stone, run to a downhill outlet. <strong>No wheelbarrow access to the back yard?</strong> The <em>Best Gravel-Free</em> bundle exists for exactly that. <strong>Puddle on a patio, driveway or walkway?</strong> Surface inlet &mdash; the <em>Best for a Patio Puddle</em> catch basin, tied to solid pipe. <strong>Water that is supposed to be there?</strong> Do not drain it; treat it with <em>BTI</em>. <strong>Flooded today?</strong> The <em>Best Fast Fix</em> transfer pump. And once the yard is dry, the adults still flying in from the ravine, the creek and the neighbour&rsquo;s untouched low spot are a separate problem &mdash; that is what <Link href="/mosquito-control">barrier spray</Link> is for.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Symptom &rarr; Fix &rarr; Parts &rarr; Typical Spend</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What your yard is doing</th>
                  <th className="px-4 py-3 text-left">The fix</th>
                  <th className="px-4 py-3 text-left">Parts</th>
                  <th className="px-4 py-3 text-left">Typical spend (CAD)</th>
                  <th className="px-4 py-3 text-left">Shop</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { symptom: 'Downspout discharging at the foundation', fix: 'Extend and daylight the roof water', parts: 'Solid pipe, elbows, pop-up emitter', spend: '$30–$80', search: 'downspout extension pop up emitter kit' },
                  { symptom: 'Lawn low spot squishy for 3+ days', fix: 'French drain to a downhill outlet', parts: 'Perforated pipe + filter sock, clear stone, non-woven geotextile', spend: '$150–$400', search: '4 inch perforated drain pipe filter sock' },
                  { symptom: 'Puddle on patio, driveway or walkway', fix: 'Surface inlet tied to solid pipe', parts: 'Catch basin with grate, solid 4" pipe, fittings', spend: '$120–$300', search: 'yard drain catch basin kit 9 inch grate' },
                  { symptom: 'Whole side yard drains toward the house', fix: 'Regrade to a positive slope away from the wall', parts: 'Triple-mix / topsoil, drain spade, string line + line level', spend: '$100–$300', search: 'drain spade trenching shovel' },
                  { symptom: 'Water with nowhere downhill to go', fix: 'Dry well — only if the soil percolates', parts: 'Dry well kit, non-woven fabric, inlet pipe', spend: '$150–$350', search: 'dry well drainage kit yard' },
                  { symptom: 'No stone access to the back yard', fix: 'Aggregate-free French drain bundle', parts: 'Gravel-free drain sections, couplers, outlet', spend: '$200–$500', search: 'gravel free french drain pipe' },
                  { symptom: 'Water that stays on purpose (pond, ditch, barrel)', fix: 'Larvicide, not drainage', parts: 'BTI dunks or bits', spend: '$15–$40', search: 'mosquito dunks bti' },
                  { symptom: 'Standing water right now, after a storm', fix: 'Pump it out today', parts: '¼ HP submersible utility pump + hose', spend: '$80–$200', search: 'submersible utility pump 1/4 hp' },
                ].map(({ symptom, fix, parts, spend, search }) => (
                  <tr key={symptom} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{symptom}</td>
                    <td className="px-4 py-3 text-gray-700">{fix}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{parts}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{spend}</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search={search} block>Check parts &rarr;</BuyLink></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Spend bands are materials only, for a typical residential run, and they move with lot size, run length and how much hardscape is in the way. Stone, pipe and fittings are cheapest by volume at Home Depot, Rona and Canadian Tire; fittings, socks, emitters and pumps are usually easier to get in the right size on Amazon.ca.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <AffiliateDisclosure />

          <h2>Step One Is Free: Time Your Puddles</h2>
          <p>Before you buy a metre of pipe, find out whether you actually have a breeding problem or just a wet yard. Those are not the same thing, and confusing them is how people spend $400 solving a puddle that was never producing a mosquito.</p>
          <p>In southern Ontario summer temperatures, a mosquito needs roughly seven to ten days of continuous standing water to get from egg to flying adult &mdash; a day or two to hatch, four to ten days as a larva, one to three as a pupa. Water that drains within 48 hours produces nothing. Water still sitting on day four is on the clock. Water that is reliably there a week after every rainfall is a nursery, and that is the spot worth hardware.</p>
          <p>So the first job is a walk with your phone after the next real rain. Photograph every place holding water, then re-shoot the same spots on day two, day four and day seven. Usually two or three of the six puddles you were worried about are gone by Tuesday, and one unglamorous corner behind the shed is still wet on Saturday. That corner is your project. Our guide to <Link href="/blog/hidden-mosquito-breeding-spots-backyard">hidden mosquito breeding spots in a backyard</Link> covers the containers people miss, and <Link href="/blog/mosquito-larvae-identification">mosquito larvae identification</Link> shows what wrigglers look like versus the harmless things sharing the puddle.</p>

          <h2>Why Drainage Beats Spraying at the Source End</h2>
          <p>We spray yards for a living, so take this as it is meant: barrier spray and drainage solve different halves of the problem. Spray handles the <em>adults</em> &mdash; the ones resting in shaded shrub interiors during the day, including the ones that flew in from the ravine two streets over. Drainage handles <em>production</em>. It takes your own property out of the mosquito-manufacturing business, which means fewer adults to knock down all season and a lower baseline every year.</p>
          <p>The reason the drainage half gets skipped is price anxiety. Homeowners ask about a wet yard, hear &ldquo;French drain&rdquo;, get a contractor quote in the low-to-mid four figures, and quietly decide to live with it. That quote is not wrong &mdash; it is mostly labour, machine time, disposal and restoration &mdash; but the <em>materials</em> for a residential-length run are a $150 to $500 hardware purchase. If your wet spot is in open lawn with somewhere downhill to send the water, the parts really are most of the job.</p>

          <h2>Perforated vs Solid Pipe: The Mistake That Costs the Most</h2>
          <p>This is the single decision that separates a drain that works from a drain that quietly makes things worse.</p>
          <ul>
            <li><strong>Perforated pipe</strong> has slots or holes along its length. Its job is to <em>collect</em> water out of saturated soil. It belongs in a stone-bedded trench, wrapped in fabric, under a wet lawn or alongside a wet foundation.</li>
            <li><strong>Solid pipe</strong> has no holes. Its job is to <em>convey</em> water that has already been collected &mdash; from a downspout, from a catch basin, from a sump discharge &mdash; to somewhere else entirely.</li>
          </ul>
          <p>The expensive error, and we see it constantly on GTA properties, is running perforated corrugated pipe from a downspout because it was the roll on the shelf. Roof water is the biggest single volume hitting a house, and perforated pipe leaks most of it back into the soil within a few metres of the foundation &mdash; recreating, three metres over, the exact soggy zone the homeowner was trying to eliminate. If the water starts at a downspout or a grate, it goes in solid pipe. Every time.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="4 inch perforated drain pipe filter sock">Perforated pipe + sock &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="4 inch solid drain pipe fittings">Solid pipe &amp; fittings &rarr;</BuyLink>
          </div>

          <h2>The Three Specifications That Actually Decide Whether It Works</h2>
          <h3>1. Slope, not diameter</h3>
          <p>Homeowners obsess over pipe size and ignore fall. Four inch (100 mm) is the residential standard and is plenty for a typical lot; six inch is for long collector runs or a property taking runoff from uphill. What decides success is grade. Target at least one percent &mdash; one centimetre of drop per metre, about an eighth of an inch per foot &mdash; and check it with a string line and a line level, not with your eyes. Eyes are reliably wrong across a lawn. A trench that dips in the middle creates a belly that holds water, silts up, and in January freezes solid.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="drain spade trenching shovel">Drain spade &amp; trenching tools &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="string line level grading">String line &amp; line level &rarr;</BuyLink>
          </div>

          <h3>2. Non-woven geotextile, never woven weed barrier</h3>
          <p>The roll of black woven landscape fabric at the front of the garden aisle is a weed barrier. It is designed to block, which is the opposite of what a drain needs. Drainage calls for <strong>non-woven</strong> needle-punched geotextile: it passes water freely while holding back silt. Wrap the stone, or buy pipe that comes pre-socked. Use the woven stuff and your drain will run beautifully for a season, blind off with clay fines, and be a buried disappointment by year three &mdash; at which point the trench has grass on it and nobody is digging it up.</p>
          <div className="not-prose my-4"><BuyLink tag={AMZ_TAG} search="non woven geotextile drainage fabric">Non-woven drainage fabric &rarr;</BuyLink></div>

          <h3>3. An outlet that is genuinely downhill and genuinely legal</h3>
          <p>A drain is only as good as where it ends. It needs to daylight somewhere lower than the inlet, on your own property or somewhere your municipality permits. You cannot collect water and push it across a property line &mdash; GTA municipalities regulate lot grading specifically to prevent that, and it is the fastest way to turn a weekend project into a neighbour dispute. Downspouts should not be tied into the sanitary sewer either; Toronto runs a downspout disconnection program for precisely this reason. Check your municipality&rsquo;s lot-grading and downspout rules before cutting into anything, and if the only realistic outlet is a shared rear swale, have the conversation with the neighbour first.</p>

          <h2>Dry Wells and GTA Clay: Test Before You Buy</h2>
          <p>A dry well &mdash; a buried infiltration chamber that takes water and lets it soak away &mdash; is a tidy answer when there is nowhere downhill to send water. It is also where drainage money gets literally buried, because much of Peel, Halton and York sits on heavy clay till that barely percolates. A dry well in clay is a gravel-filled hole that fills up and stays full.</p>
          <p>The test is free. Dig a hole about 30 cm deep where the dry well would go, fill it with water and let it drain to pre-soak the soil, then fill it again and check 24 hours later. Still full? Infiltration is not your answer &mdash; convey the water to daylight instead. Drained in a few hours? A dry well is legitimate, and you can size the kit to the roof area or low spot feeding it.</p>
          <div className="not-prose my-4"><BuyLink tag={AMZ_TAG} search="dry well drainage kit yard">Dry well kits &rarr;</BuyLink></div>

          <h2>When the Cheap Option Is the Right Option</h2>
          <p>A guide that only ever tells you to buy the expensive thing is selling, not advising. Plenty of Canadian yards do not need a drainage project at all:</p>
          <ul>
            <li><strong>The puddle clears in 48 hours.</strong> Then it is not breeding anything, and pipe is money spent on aesthetics rather than mosquitoes. Fix it if it bothers you, but do not tell yourself it is a mosquito job.</li>
            <li><strong>It is one downspout.</strong> A $12 extension and a pop-up emitter resolves a genuinely large share of the wet corners we see on GTA properties. Try the cheapest thing first and re-time the puddle after the next rain.</li>
            <li><strong>It is a container, not a grade problem.</strong> Tarps, wheelbarrows, kids&rsquo; toys, saucers under pots, a bin lid, a folded pool cover, clogged eavestroughs. Ten minutes with a rake beats any hardware, and it is by far the most common finding on a yard walk. Our <Link href="/blog/does-standing-water-attract-mosquitoes">standing water and mosquitoes</Link> primer runs through the full container list.</li>
            <li><strong>The water is supposed to be there.</strong> A pond, a rain barrel, a bog garden, a roadside ditch. Do not drain it &mdash; treat it. That is what BTI is for, and it is a $15&ndash;$40 season rather than a $400 project.</li>
            <li><strong>The wet spot is off your property.</strong> A neighbour&rsquo;s low corner, a municipal ditch, a creek or a ravine edge. You cannot engineer that, and adults will keep arriving regardless. That is a barrier-spray problem, not a drainage one.</li>
          </ul>

          <h2>The Water You Cannot Drain: BTI</h2>
          <p>Every property has some water that stays. The correct tool there is <em>Bacillus thuringiensis israelensis</em> &mdash; BTI &mdash; a naturally occurring soil bacterium that kills mosquito and black-fly larvae and does nothing to fish, frogs, dogs, pollinators or people. Dunks are slow-release tablets, roughly 100 sq ft of water surface for about 30 days each; bits are quick-release granules for knocking down an active outbreak or for small containers you do not want a floating tablet in. Our <Link href="/blog/mosquito-dunks-canada-guide">mosquito dunks guide for Canada</Link> covers the Canadian retailers, pricing and the three mistakes people make with them.</p>
          <p>Two habits make BTI work rather than be a thing you bought once: put a calendar reminder on the first of every month from May through September, and re-dose after any downpour heavy enough to flush a rain barrel or overtop a pond. A dunk that washed out in July is not protecting anything in August.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="mosquito dunks bti">Mosquito dunks (BTI) &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="mosquito bits granules bti">Mosquito bits granules &rarr;</BuyLink>
          </div>

          <h2>Ontario Timing: Do the Digging in the Right Month</h2>
          <p>Drainage work has a season here. Spring is tempting because that is when the yard is obviously wet, but saturated clay is miserable to trench and you will wreck the lawn around the cut. Late summer and early fall is the sweet spot &mdash; the ground is workable, seed or sod still establishes before freeze-up, and the drain is in place for the fall rains and the spring melt.</p>
          <p>Two Ontario habits matter afterwards. Pull the grate on any catch basin in late fall and clear the leaves, because a basin packed with wet maple leaves is a solid plug by December. And accept that pop-up emitters freeze shut for the winter &mdash; give the line enough fall to sit empty, since water trapped in a corrugated belly will freeze, expand and split the pipe you just buried. For the month-by-month picture, our <Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard">backyard mosquito prevention guide</Link> lays out the full sequence.</p>

          <h2>Ponds, Water Features and the Case for Circulation</h2>
          <p>If the standing water you are worried about is an ornamental pond, drainage is the wrong frame entirely &mdash; you want the water, you just do not want it still. Mosquito larvae need a calm surface film to hang from and breathe, so moving water is genuinely hostile to them in a way that has nothing to do with chemistry. We covered the sizing, the winterizing and the reason a fountain nozzle is not the same as aeration in <Link href="/blog/pond-aerator-mosquito-larvae-canada">pond aerators vs mosquito larvae</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Drain the yard. We&rsquo;ll handle what flies in.</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Fixing your own standing water lowers the baseline. Adults arriving from the ravine, the creek and the neighbour&rsquo;s untouched low spot are a different job &mdash; BuzzSkito&rsquo;s licensed barrier spray starts at $99 for a single treatment, with season plans at $549, $994 and $2,049. Tick protection is $597 for the season standalone, or $497 bundled with any mosquito plan. Mississauga-based, serving 19+ GTA cities, May through September.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Where to Buy Drainage Parts in Canada</h2>
          <p>Bulk items &mdash; clear stone, rolls of pipe, bags of triple mix &mdash; are cheapest at Home Depot, Rona and Lowe&rsquo;s Canada, or at a local landscape supply yard if you can get a load delivered. Canadian Tire carries downspout extensions, hand tools, utility pumps and smaller fittings reliably through spring and summer, and is usually the closest option for the part you discovered you needed halfway through Saturday.</p>
          <p>Amazon.ca is the better channel for the pieces the big-box aisle runs out of or never stocked in your size: pre-socked perforated pipe, non-woven geotextile by the roll, pop-up emitters, catch-basin adapters, gravel-free bundles, dry well kits and submersible transfer pumps &mdash; and it is the one that still has all of it in August, which is exactly when a summer of standing water finally forces the decision.</p>

          <h2>The Bottom Line</h2>
          <p>Mosquitoes in a Canadian backyard are usually a plumbing problem wearing an insect costume. Time your puddles, ignore anything that clears in two days, and put your money into the one or two spots still wet a week after rain. Roof water first &mdash; a downspout extension and a pop-up emitter is the cheapest meaningful fix available. Then perforated pipe in a non-woven sock, laid at one percent fall, to an outlet that is genuinely downhill and genuinely yours. Test before you trust a dry well in GTA clay, and treat the water that stays with BTI on a monthly reminder. That is a $150&ndash;$500 hardware weekend against a four-figure installed quote &mdash; and it permanently lowers what your own property manufactures, which is the half no spray schedule can do for you.</p>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4 my-6">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100">
                <summary className="cursor-pointer px-5 py-3 font-semibold text-brand-900 list-none">{question}</summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>

          <AdjacentPestCTA variant="equipment" />

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/does-standing-water-attract-mosquitoes">Does Standing Water Attract Mosquitoes?</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/blog/mosquito-larvae-identification">Mosquito Larvae Identification &mdash; What&rsquo;s in Your Water</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks in Canada &mdash; Where to Buy &amp; 3 Mistakes</Link></li>
            <li><Link href="/blog/pond-aerator-mosquito-larvae-canada">Pond Aerators vs Mosquito Larvae in Canada</Link></li>
            <li><Link href="/blog/gutter-guards-mosquito-breeding-canada">Gutter Guards and Mosquito Breeding in Canada</Link></li>
            <li><Link href="/blog/rain-barrel-mosquito-proof-canada">How to Mosquito-Proof a Rain Barrel in Canada</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard">How to Prevent Mosquitoes in Your Backyard</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="You Fixed the Water. We&rsquo;ll Handle the Flyers." subtext="Licensed barrier spray from $99. Mississauga-based, serving 19+ GTA cities May through September. 150 five-star Google reviews." variant="dark" />
    </>
  )
}
