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
import CTASection from '@/components/CTASection'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'best-centipede-killer-canada'
const DATE = '2026-07-28'
const UPDATED = '2026-07-30'
// This page is deliberately the SHOPPING half of the centipede pair. The biology,
// the diagnosis and the step-by-step plan live on how-to-get-rid-of-centipedes-canada;
// everything here is "which product, what spec, what the label must say". SERP title
// trimmed to 44 chars so it survives Google's cap once " | BuzzSkito" is appended.
const TITLE = 'Centipede Killer Canada — Which Product to Buy First, in What Order, and What the Label Must Say'
const META_TITLE = 'Centipede Killer Canada: What to Buy in 2026'

const FAQS = [
  {
    question: 'What should I actually buy for centipedes in Canada?',
    answer: 'In this order: a dehumidifier, a multi-pack of flat glue boards, a PMRA-registered insecticidal diatomaceous earth with a bulb duster, and hardware for sealing (door sweeps, weep-hole screens, silicone sealant). A registered residual spray is an optional fifth item, not a first one. The reason for that order is that only the first item removes what a house centipede physically requires — damp harbourage — while the dust and the spray act on individual insects. Most people buy the order backwards, start with a spray, and end up buying the dehumidifier anyway a season later.',
  },
  {
    question: 'What size dehumidifier do I need for a centipede basement?',
    answer: 'For a typical damp full basement in the GTA, the modern 50-pint class is the safe default; a small, only-slightly-damp finished area can do with less, and a large, wet or open-plan basement wants more capacity rather than a smaller machine running around the clock without reaching target. Two spec details decide whether you bought the right one. First, the US Department of Energy test procedure most manufacturers rate to was revised in 2019 to measure capacity under cooler conditions, so a machine rated today carries a lower pint number than an older unit of comparable real capacity — check which standard a listing quotes rather than assuming pints are pints. Second, if the space runs cool, buy a unit specifically rated for low-temperature operation with auto-defrost, or a desiccant model; a standard compressor unit can frost its coils in a cold basement or crawl space. Also look for a built-in humidistat and a continuous-drain port, because a machine whose bucket needs emptying daily gets switched off in week three.',
  },
  {
    question: 'Which diatomaceous earth should I buy for centipedes, and how much?',
    answer: 'Buy DE that is sold as an insecticide and carries a PCP registration number on the Canadian label, then read the label’s pest list to confirm centipedes or crawling insects appear on it — the number makes the product legal to sell here, the pest list makes your application legal. Registered consumer brands stocked in Canada include Safer’s Diatomaceous Earth, Knock Down and Doktor Doom Be Green. Quantity is almost never the constraint: a single consumer bag will treat the cracks and voids of an average house several times over, because the correct application is a barely visible film rather than a pile. What you are more likely to be missing is the applicator — budget for a bulb or hand duster alongside the bag, because shaking dust out of the container puts down visible drifts that insects walk around. Avoid "food-grade" DE, which is sold as a feed additive with no pesticide registration and no legal application directions, and never buy pool-grade for pest control: it is calcined and contains crystalline silica.',
  },
  {
    question: 'Do I need both a dust and a spray for centipedes?',
    answer: 'No, and buying both is the most common way to overspend on this problem. The dust and the spray occupy the same slot in the plan — a chemical layer for the places centipedes shelter — and the dust is the better fit for this animal, because it keeps working for months while it stays dry and does not depend on the insect dragging its body across a treated band. Buy the spray instead of the dust only if you specifically want fast knockdown at entry points during an autumn migration, or you cannot get a duster into the voids you need to treat. Buying both usually means the spray sits in the garage after one weekend.',
  },
  {
    question: 'Is a "centipede killer" product different from a general crawling-insect product?',
    answer: 'Almost never, and this is worth knowing before you pay a premium for the word. There is no consumer-market active ingredient developed specifically for centipedes; what is sold as a centipede killer in Canada is a general crawling-insect dust or residual whose Canadian label happens to list centipedes among its pests. That makes the pest list on the label the only thing worth comparing between two otherwise similar products — not the pest named on the front of the bottle. The same logic applies to bundles marketed as a "centipede kit": they are usually a residual spray, a bag of unregistered dust and a few glue boards at a premium over buying the two items that matter separately.',
  },
  {
    question: 'Are US centipede sprays legal to buy and use in Canada?',
    answer: 'Not necessarily, and the label is the test. Under the Pest Control Products Act, conventional insecticides sold or used in Canada must be registered with Health Canada’s Pest Management Regulatory Agency and carry a Canadian PCP registration number on the label. Many of the perimeter and "home defense" insecticides that dominate American centipede advice are US EPA-registered products with no Canadian counterpart, and marketplace listings routinely surface US-market stock to Canadian buyers without flagging it. Before buying any insecticide online, zoom the label photo and look for a PCP number. Do not let a US "minimum-risk" claim on a listing stand in for that check: minimum-risk exemption is a US EPA framework, Canada does not automatically recognize it, and the botanical and essential-oil pest products legally sold here generally carry a PCP number of their own. The PCP number is a legal status, not an efficacy claim — a registered essential-oil spray can be perfectly legal here and still do nothing about a centipede problem.',
  },
  {
    question: 'How many glue boards should I buy?',
    answer: 'One multi-pack, which usually lands somewhere around a dozen boards, is the right starting purchase for a typical house — roughly three or four through the basement (storage corner, laundry area, sump or floor drain, furnace wall), one behind each bathroom vanity, and one in any room where you have actually seen a centipede. Buying more than that at the outset is wasted money, because the first week of catch data tells you which two or three locations matter and every board after that should concentrate there. Budget for replacement rather than volume: adhesive loses grip as it collects dust and as humidity rises, which is exactly the environment you are placing them in, so treat a board with a dulled or fuzzy-looking surface as spent regardless of how new it is.',
  },
  {
    question: 'Do centipede foggers, ultrasonic plug-ins or peppermint sprays work?',
    answer: 'No, and all three are money that belonged to the dehumidifier. Total-release foggers deposit a fine insecticide layer on open, exposed surfaces — precisely where centipedes are not, since they spend daylight hours inside wall voids, under the slab edge and in the sump pit — and the pressure of the release drives survivors deeper into those voids, against genuine fire and inhalation hazards in an enclosed basement. Plug-in ultrasonic devices have failed repeatedly in controlled testing across pest categories, and there is no plausible mechanism by which a tone drives a centipede out of damp harbourage it physically needs. Peppermint, tea-tree, cedar and cayenne sprays put a scent on a surface; none of them removes moisture or prey, and reapplication becomes a chore abandoned in week two.',
  },
  {
    question: 'What should I buy if I rent, or live in a condo?',
    answer: 'Glue boards and a hygrometer, and nothing else. If the damp is coming from a unit, a crawl space or a common element you do not control, a dehumidifier you buy is treating someone else’s building at your expense, and a residual spray is treating a symptom you did not cause. The productive purchase is the pair of cheap instruments that let you document the problem — a numbered, dated trap line and a humidity reading — because a written record with dates is far more persuasive to a landlord or property manager than a description of what you saw at midnight.',
  },
  {
    question: 'Is it worth paying a pest company for centipedes?',
    answer: 'Rarely, and there is no honest scenario where a recurring spray contract for centipedes alone is the right purchase. BuzzSkito treats mosquitoes and ticks — we do not sell centipede work, and this page is our publishing team’s independent research. Three situations do justify paying someone: humidity that will not fall after weeks of a correctly sized dehumidifier at target, which usually points at a foundation leak, failed weeping tile or a plumbing leak and is a waterproofing or plumbing contractor call rather than a pest one; a glue-board catch that turns up cockroach nymphs or bed bugs, which are their own programs; and a building you do not control. Be suspicious of any quote for a centipede program that never mentions humidity, drainage or prey — that is a quote for the symptom, priced annually.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description:
    'What to buy for centipedes in Canada, in buying order: dehumidifier spec, which registered diatomaceous earth, how many glue boards, and the PCP label check.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestCentipedeKillerCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian shopping guide for centipede products: the buying order, dehumidifier sizing specs, which registered diatomaceous earth to buy and how to apply it, how many glue boards, the exclusion hardware list, the PCP registration-number label check, and the products not worth buying.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Centipede Killer Canada — What to Buy', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Centipede Killer — What to Buy</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The shopping half of the centipede problem: five product types, the buying order that stops you paying twice, the specs that decide whether the thing you bought works, and the one number on a Canadian label that tells you it is legal to use.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Safer's Diatomaceous Earth (PMRA-registered insect dust)" search="safers diatomaceous earth" label="Best actual killer" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Buy in this order: a dehumidifier sized for the room, a multi-pack of flat glue boards, a PMRA-registered insecticidal diatomaceous earth plus a bulb duster, and sealing hardware. A registered residual spray is an optional fifth item, not the first. That order exists because only the dehumidifier removes what a house centipede physically requires &mdash; damp harbourage &mdash; while everything else acts on individual insects. On any insecticide, the label is the specification: check for a Canadian PCP registration number, then check that centipedes or crawling insects appear on the pest list.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Dehumidifier spec that matters:</strong> pint class for the room, a low-temperature rating if the space runs cool, a built-in humidistat, and a continuous-drain port.</li>
              <li><strong>DE spec that matters:</strong> a PCP number, your pest on the label, and a duster bought alongside the bag &mdash; the bag alone will not apply it thin enough.</li>
              <li><strong>Glue boards:</strong> one multi-pack, not three. The first week of catch data decides where every board after that goes.</li>
              <li><strong>Spray or dust, not both</strong> &mdash; they fill the same slot, and the dust suits this animal better.</li>
              <li><strong>&ldquo;Centipede killer&rdquo; is a label, not a formulation:</strong> compare the pest list on the back, not the pest named on the front.</li>
              <li><strong>Do not buy:</strong> total-release foggers, ultrasonic plug-ins, peppermint and cayenne sprays, or any bundled &ldquo;centipede kit&rdquo;.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <div className="not-prose rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Two pages, two jobs</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>This page is the purchase decision</strong> &mdash; what to buy, in what order, at what spec, and how to read a Canadian label. It assumes you have already decided to spend money.
              <br className="hidden sm:block" />
              <strong className="block mt-2">If you want to know why they are there and what the plan is</strong> &mdash; identification, the moisture mechanism, what centipedes eat, the seasonal pattern, and the step-by-step protocol &mdash; that is a different job, and it lives on <Link href="/blog/how-to-get-rid-of-centipedes-canada" className="text-emerald-700 underline font-semibold">how to get rid of house centipedes in Canada</Link>. Read that one first if you are not sure a purchase is warranted at all.
            </p>
          </div>

          <SpecialistDisclosure pest="centipedes" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pick in 60 Seconds: Your Situation &rarr; What to Buy</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Nearly every centipede purchase falls into one of six situations, and the right cart is different in each. Find yours and stop reading.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your situation</th>
                  <th className="px-4 py-3 text-left">Buy this</th>
                  <th className="px-4 py-3 text-left">Do not buy</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">One centipede, once, house otherwise fine</td>
                  <td className="px-4 py-3 text-gray-700">Nothing. A vacuum hose is the correct tool and you own it</td>
                  <td className="px-4 py-3 text-gray-700">Anything</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Several a month, damp basement</td>
                  <td className="px-4 py-3 text-gray-700">Dehumidifier first, glue boards same day, DE once the room is dry</td>
                  <td className="px-4 py-3 text-gray-700">A spray as your opening move</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star" block>Dehumidifiers &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You already own a dehumidifier and still see them</td>
                  <td className="px-4 py-3 text-gray-700">A two-pack of hygrometers before anything else &mdash; the machine is usually not holding target, or the humid room is one you never checked</td>
                  <td className="px-4 py-3 text-gray-700">A second dehumidifier</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="digital hygrometer indoor humidity monitor 2 pack" block>Hygrometers &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Room is dry, they are still coming out of a crack</td>
                  <td className="px-4 py-3 text-gray-700">Registered insecticidal DE plus a bulb duster &mdash; the duster is the part people forget</td>
                  <td className="px-4 py-3 text-gray-700">Food-grade or pool-grade DE</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="safers diatomaceous earth" block>Registered DE &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Autumn walk-in, older house, every September</td>
                  <td className="px-4 py-3 text-gray-700">Door sweeps, weep-hole screens, silicone sealant &mdash; hardware, not pesticide</td>
                  <td className="px-4 py-3 text-gray-700">Outdoor perimeter granules</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="door sweep silicone caulk gap sealant" block>Sealing kit &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Someone in the house is genuinely phobic and wants them dead now</td>
                  <td className="px-4 py-3 text-gray-700">A domestic-class residual spray with a PCP number, at entry points only, running alongside the real work</td>
                  <td className="px-4 py-3 text-gray-700">A fogger. Ever</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide spray" block>Registered spray &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Centipede Killers That Earn Their Money"
            awards={[
              {
                badge: 'Best Overall — Ends It',
                name: 'Energy Star Basement Dehumidifier (50-Pint Class)',
                why: 'Not marketed as a centipede killer, and still the most effective one you can buy. Held at 45–50% RH it removes the condition centipedes physically require, and takes the silverfish, firebrats and damp-loving prey feeding them along with it. No resistance, no reapplication, no insecticide in the house — and no registration check, because it is an appliance rather than a pesticide.',
                search: '50 pint dehumidifier basement energy star',
                featured: true,
                pros: ['Removes the cause instead of the sighting', 'Also suppresses their prey, mould and dust mites', 'Set the humidistat, run a drain hose, forget it'],
                cons: ['The expensive item on this page by a wide margin', 'Compressor models struggle in cold crawl spaces — check the low-temp rating'],
              },
              {
                badge: 'Best Actual Killer',
                name: 'Safer’s Diatomaceous Earth (PMRA-Registered Insect Dust)',
                why: 'The one insecticide that suits this animal, and a named Canadian-registered product rather than a bag of unlabelled dust. DE abrades the waxy layer holding a centipede’s moisture in, so it kills by dehydration rather than by dose — long legs do not save it the way they do against a spray band. Pair it with a cheap bulb duster and lay a thin film in voids. Confirm the label carries a PCP number and lists centipedes or crawling insects before you apply it.',
                search: 'safers diatomaceous earth',
                pros: ['Mechanical kill — no resistance possible, ever', 'Registered in Canada, with a PCP number and real label directions', 'Reaches sill-plate gaps and voids a spray never coats'],
                cons: ['Completely inert once damp — dehumidify first, then dust', 'Visible piles get walked around; whisper-thin films only', 'Buy a bulb duster separately — the bag alone will not apply it thin enough'],
              },
              {
                badge: 'Best Diagnosis',
                name: 'Flat Insect Glue Boards (Multi-Pack)',
                why: 'Cheap, passive, and the only product here that tells you what you are actually fighting. Centipedes hunt along wall-floor junctions, so boards catch them — but the silverfish, roach nymphs, ants and larvae on the same board are the report that decides your whole plan.',
                search: 'insect glue board traps multi pack',
                pros: ['Reveals the prey population feeding the centipedes', 'Weekly trend line instead of arguing about sightings', 'No pesticide — fine in kids-and-pets homes'],
                cons: ['A monitor first, control a distant second', 'Boards die in dust and damp — replace them'],
              },
              {
                badge: 'Best Registered Spray',
                name: 'Doktor Doom Residual Insecticide Spray (Domestic, PCP-Registered)',
                why: 'If you want a chemical in the plan, this is the shape it should take in Canada: a domestic-class residual spray carrying a PCP number, used on entry points and baseboard voids rather than fogged around a room. Check that centipedes or crawling insects appear on the label’s pest list — that list, not the marketing, is what you are legally allowed to use it for. It kills on direct contact and buys you a few weeks while the real work happens.',
                search: 'doktor doom residual insecticide spray',
                pros: ['Legally sold and labelled for use in Canada', 'Kills on direct contact, useful during an autumn push', 'Widely stocked — no grey-market import needed'],
                cons: ['Weak as a barrier: long legs hold the body off the residue band', 'Touches neither the damp harbourage nor the food supply'],
              },
              {
                badge: 'Best Prevention',
                name: 'Door Sweeps + Weep-Hole Screens + Silicone Sealant',
                why: 'Centipedes walk in at ground level — under doors, through foundation cracks, up brick-veneer weep holes, around hose bibs and dryer vents. An afternoon of sealing is permanent, chemical-free, and pays you back on the heating bill in a Canadian house.',
                search: 'door sweep silicone caulk gap sealant',
                pros: ['Stops the September–October migration before it starts', 'Cuts spider, earwig and cluster-fly entry at the same time', 'Cheap materials, one afternoon, no reapplication'],
                cons: ['Does nothing about the ones already inside', 'Older foundations need an annual touch-up'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Buying one thing?</strong> The <em>Best Overall</em> dehumidifier. It is the only item on this page that makes the problem stop coming back, and it works on the prey at the same time. <strong>Want something that actually kills, today?</strong> The <em>Best Actual Killer</em> registered DE, applied with a bulb duster &mdash; dust the sill-plate gap, under appliances and behind the laundry tub, and let the dehumidifier catch up. <strong>Not sure why they are there?</strong> Start with the <em>Best Diagnosis</em> glue boards for a week; they are one of the cheapest things in the aisle and the catch decides everything else. <strong>Autumn migration in an older house?</strong> Put the money into <em>Best Prevention</em> sealing rather than product.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Spec Sheet &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Before You Buy: What You Are Actually Purchasing</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Five product types get sold for centipedes in Canada. This is the spec comparison &mdash; what each one physically is, what quantity you need, how often you re-buy it, and whether it needs a Canadian registration number before it can legally be sold to you.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product type</th>
                  <th className="px-4 py-3 text-left">Spec that decides it</th>
                  <th className="px-4 py-3 text-left">How much you need</th>
                  <th className="px-4 py-3 text-left">Re-buy cycle</th>
                  <th className="px-4 py-3 text-left">PCP number required?</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Dehumidifier<br /><span className="font-normal text-xs text-gray-500">Appliance</span></td>
                  <td className="px-4 py-3 text-gray-700">Pint class for the room; low-temp rating if the space runs cool; humidistat; continuous-drain port</td>
                  <td className="px-4 py-3 text-gray-700">One, correctly sized. Two small units is the wrong answer</td>
                  <td className="px-4 py-3 text-gray-700">Years &mdash; it is capital, not consumable</td>
                  <td className="px-4 py-3 text-gray-700">No &mdash; not a pesticide</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Insecticidal DE<br /><span className="font-normal text-xs text-gray-500">Registered dust</span></td>
                  <td className="px-4 py-3 text-gray-700">PCP number on the Canadian label, and centipedes or crawling insects on the pest list. Buy a bulb duster with it</td>
                  <td className="px-4 py-3 text-gray-700">One consumer bag covers an average house several times over</td>
                  <td className="px-4 py-3 text-gray-700">Re-dust only where it has got damp or been disturbed</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; insecticidal DE is a pesticide</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="safers diatomaceous earth" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Glue boards<br /><span className="font-normal text-xs text-gray-500">Device, not pesticide</span></td>
                  <td className="px-4 py-3 text-gray-700">Flat profile that sits tight to a baseboard, and adhesive area per board. Brand is close to irrelevant</td>
                  <td className="px-4 py-3 text-gray-700">One multi-pack &mdash; roughly 6&ndash;10 placements for a typical house</td>
                  <td className="px-4 py-3 text-gray-700">Weeks in a damp basement; a fuzzy or greyed surface is spent</td>
                  <td className="px-4 py-3 text-gray-700">No &mdash; mechanical device</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Residual spray<br /><span className="font-normal text-xs text-gray-500">Domestic class</span></td>
                  <td className="px-4 py-3 text-gray-700">PCP number, domestic (not commercial) class, and your pest on the label. Ready-to-use beats concentrate for one basement</td>
                  <td className="px-4 py-3 text-gray-700">One bottle for entry points. You are not treating a whole house</td>
                  <td className="px-4 py-3 text-gray-700">Per the label interval &mdash; residual activity fades</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong></td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide spray" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Exclusion hardware<br /><span className="font-normal text-xs text-gray-500">Sweeps, screens, sealant</span></td>
                  <td className="px-4 py-3 text-gray-700">Door-sweep width and threshold type; weep-hole covers that pass water; exterior-grade silicone or polyurethane</td>
                  <td className="px-4 py-3 text-gray-700">Measure the doors first. One tube goes further than people expect</td>
                  <td className="px-4 py-3 text-gray-700">Annual touch-up on an older foundation</td>
                  <td className="px-4 py-3 text-gray-700">No &mdash; building materials</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="door sweep silicone caulk gap sealant" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">The one line that saves the most money:</strong> the dust and the spray fill the same slot in the plan. Buy one of them, not both. If you cannot decide, buy the dust &mdash; it keeps working for months while it stays dry, and it reaches voids a spray never coats. The reasoning behind that ranking, and what centipedes are doing in the wall in the first place, is laid out in <Link href="/blog/how-to-get-rid-of-centipedes-canada" className="text-emerald-700 underline font-semibold">our house centipede guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Centipede Buying Checklist &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Buy first', 'Dehumidifier sized for the room — the only item that removes the habitat'],
                  ['Buy same day', 'One multi-pack of flat glue boards, numbered and dated'],
                  ['Buy third', 'PMRA-registered insecticidal DE (Safer’s, Knock Down, Doktor Doom Be Green) — plus a bulb duster'],
                  ['Buy before September', 'Door sweeps, weep-hole screens, exterior-grade sealant'],
                  ['Optional fifth', 'Domestic-class residual spray with a PCP number, entry points only'],
                  ['Dehumidifier spec', 'Pint class for the room, low-temperature rating if it runs cool, humidistat, continuous-drain port'],
                  ['Pint-rating trap', 'The US DOE test procedure was revised in 2019 — a modern pint number is not an old pint number'],
                  ['DE grade to buy', 'Insecticidal, PCP-numbered. Food-grade has no pest directions; never use pool-grade'],
                  ['Label check #1', 'A Canadian PCP registration number on any conventional insecticide'],
                  ['Label check #2', 'Centipedes or crawling insects on that label’s pest list — that is what makes your use legal'],
                  ['US “minimum-risk” claims', 'A US EPA framework Canada does not automatically recognize — look for the PCP number regardless'],
                  ['Outdoor products', 'Provincial cosmetic-pesticide restrictions apply to lawns and gardens — buy a rake and a caulk gun instead'],
                  ['Do not buy', 'Foggers, ultrasonic plug-ins, peppermint/cayenne sprays, bundled “centipede kits”'],
                  ['Renters and condos', 'Glue boards and a hygrometer only — document rather than equip'],
                  ['Buy nothing if', 'One sighting, once, in a house that is otherwise fine'],
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

          <h2>The Buying Order, and Why It Is Not the Order the Aisle Suggests</h2>
          <p>You typed &ldquo;centipede killer&rdquo; because something with thirty legs poured across your bathroom wall at eleven at night and you would like it dead. Fair. The awkward fact about this particular aisle is that the product with <em>killer</em> on the can belongs near the bottom of your list, and the appliance nobody markets for insects belongs at the top.</p>
          <p>The short reason &mdash; the long one is on <Link href="/blog/how-to-get-rid-of-centipedes-canada">our house centipede guide</Link>, which covers the identification, the biology and the plan &mdash; is that a house centipede has no waterproof cuticle and cannot establish anywhere that stays dry. It is also a predator, so it only stays where there is something to hunt. Dry air takes away both conditions at once. Every other product on this page acts on individual insects while leaving the conditions untouched, which is why people who buy in aisle order tend to buy twice.</p>
          <p>So: dehumidifier, glue boards, registered dust, sealing hardware, and a registered spray only if you specifically want knockdown at entry points. What follows is the spec detail for each of those purchases &mdash; the parts of a listing worth reading, and the parts that are marketing.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">Basement dehumidifier &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Safer&rsquo;s DE &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack">Glue board monitors &rarr;</BuyLink>
          </div>

          <h2>Purchase #1: How to Size and Spec the Dehumidifier</h2>
          <p>This is the item people get wrong most often, and the mistakes are all spec mistakes rather than brand mistakes.</p>
          <p><strong>Pint class, and the rating trap.</strong> Dehumidifier capacity is quoted in pints per day, and the US Department of Energy test procedure that most manufacturers rate to was revised in 2019 to measure capacity under cooler test conditions. The practical consequence is that a machine rated today carries a lower pint number than an older unit of comparable real capacity. If you are comparing an older unit in the garage against a new listing, or reading an American guide written before the change, the numbers do not line up &mdash; check which test standard a listing quotes rather than assuming pints are pints. For a typical damp full basement in the GTA, the modern 50-pint class is the safe default. A small, only-slightly-damp finished area can do with less; a large, wet or open-plan basement wants more capacity rather than a smaller machine running around the clock and never reaching target.</p>
          <p><strong>The low-temperature line in the spec sheet.</strong> Standard compressor dehumidifiers lose efficiency as temperature drops and can frost their coils in a cold basement or crawl space. If the space runs cool, look specifically for a unit rated for low-temperature operation with auto-defrost, or a desiccant model, which keeps working in cold air where a compressor unit stalls. The unheated crawl space is the classic case where someone buys the wrong machine, watches it ice up, and concludes dehumidifiers do not work.</p>
          <p><strong>Two features that decide whether it still runs in August.</strong> A built-in humidistat, so you can set 45&ndash;50% and leave it, rather than a machine that runs flat out until the bucket fills. And a continuous-drain port, so you can run a hose to a floor drain or a condensate pump &mdash; because a machine that needs its bucket emptied daily through a humid August is a machine that gets switched off in week three. Buy a separate inexpensive hygrometer at the same time and place it across the room; the dehumidifier reads the air at its own intake and flatters itself.</p>
          <p>Full sizing tables, drainage options and cold-basement model guidance are in our <Link href="/blog/best-dehumidifier-for-basement-canada">Canadian basement dehumidifier guide</Link>, and if the space is large or genuinely wet, the <Link href="/blog/best-large-capacity-dehumidifier-canada">large-capacity dehumidifier guide</Link> covers the step up.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">Check basement dehumidifiers on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Purchase #2: Which Diatomaceous Earth, and the Duster Nobody Budgets For</h2>
          <p>DE is the best product-shaped answer for this animal, because it kills mechanically &mdash; the particles abrade and adsorb the waxy layer that holds an insect&rsquo;s moisture in &mdash; rather than by dose. There is nothing to develop resistance to, and it keeps working for months while it stays dry. Two things decide whether the bag you buy does anything.</p>
          <p><strong>The label, not the bag.</strong> Buy DE that is <em>sold as an insecticide</em> and carries a PCP registration number, then read the pest list to confirm centipedes or crawling insects appear on it &mdash; the number makes the product legal to sell here, the pest list makes your application legal. Registered consumer brands stocked in Canada include <strong>Safer&rsquo;s Diatomaceous Earth</strong>, <strong>Knock Down</strong> and <strong>Doktor Doom Be Green</strong>. That is why the links on this page point at a named registered brand rather than a generic &ldquo;diatomaceous earth&rdquo; search, which mixes unregistered food-grade bags in with the registered ones. &ldquo;Food-grade&rdquo; DE is sold as an anti-caking agent or feed additive &mdash; no pesticide registration, no PCP number, no pest-use directions &mdash; and the registered version costs only a little more. Never buy pool-grade DE for pest control: it is calcined and contains crystalline silica, which is a genuine respiratory hazard rather than an internet scare.</p>
          <p><strong>The applicator, which is a separate purchase.</strong> A bag on its own will not put down what you need, which is a barely visible film. Shaking dust out of a container leaves visible drifts, and insects detect and walk around visible piles &mdash; a common reason people conclude DE does not work. Budget for a bulb or hand duster in the same order. Wear a dust mask while applying; any fine dust is an irritant to breathe.</p>
          <p><strong>Sequence, because it is a purchase-timing issue.</strong> DE only works while it is dry, and centipedes live where it is damp. Buying the dust before the dehumidifier means dusting a damp floor and making mud. Dry the space first, then dust the sill-plate gap, baseboard cracks, behind and under appliances, plumbing penetrations, under the laundry tub, the sump-pit rim and cabinet kick spaces. Grade distinctions and room-by-room technique are covered in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide for Canada</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Check Safer&rsquo;s registered DE on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Purchase #3: Glue Boards &mdash; Buy One Pack, Not Three</h2>
          <p>Glue boards are the cheapest line on this page and the one that changes the rest of your spending, because the catch tells you which of the other purchases you actually need. The shopping rules are short.</p>
          <p><strong>Buy flat, not branded.</strong> You want a low-profile board that sits tight against a baseboard, because centipedes and their prey travel wall-floor junctions rather than open floor. Adhesive area per board and the number in the pack are the only two variables worth comparing; a board with a pest name printed on it is the same adhesive wearing a costume.</p>
          <p><strong>Buy one multi-pack.</strong> Six to ten placements covers a typical house &mdash; three or four through the basement, one behind each bathroom vanity, one wherever you have actually seen one. Additional boards beyond that add cost, not information.</p>
          <p><strong>Budget for replacement, not volume.</strong> Adhesive loses grip as it collects dust and as humidity rises, which is precisely the environment you are placing it in. A board that looks fuzzy or greyed is spent no matter how new it is, so do not read an empty spent board as good news. In a damp basement, expect to be replacing boards while the dehumidifier catches up &mdash; which is one more reason the machine is the better half of this budget.</p>
          <p>What the catch is telling you &mdash; silverfish, roach nymphs, earwigs, spiders, fly larvae, or reassuringly nothing at all &mdash; and what to do about each, is covered in the diagnosis section of <Link href="/blog/how-to-get-rid-of-centipedes-canada">the house centipede guide</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack">Check glue board multi-packs on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Purchase #4: The Exclusion Shopping List</h2>
          <p>The September&ndash;October walk-in is a hardware problem, not a pesticide problem, and this is the one part of the job where a shopping list beats a strategy. Measure before you order:</p>
          <ul>
            <li><strong>Door sweeps</strong> &mdash; measure door width and check the threshold type first. Exterior doors, the garage entry, the basement walkout. If daylight shows, something walks through it.</li>
            <li><strong>Weep-hole covers</strong> &mdash; purpose-made screens or covers, not caulk. Brick-veneer weep holes must stay open for drainage, so you want a product that blocks insects and passes water.</li>
            <li><strong>Exterior-grade silicone or polyurethane sealant</strong> &mdash; for foundation cracks at and just above grade, the sill-plate line from inside, and utility penetrations. One tube goes further than people expect.</li>
            <li><strong>A sump-pit lid</strong> &mdash; gasketed if you can get one for your pit. It closes a standing evaporation source and a harbourage at the same time.</li>
            <li><strong>Window-well covers</strong> &mdash; a leaf-filled window well is a damp insect hotel pressed against your basement glass.</li>
            <li><strong>Clean stone, and a rake you probably own</strong> &mdash; pulling organic mulch back to leave a dry strip along the foundation removes the outdoor reservoir. Stone in that strip stays dry and holds no harbourage.</li>
          </ul>
          <p>Note what is <em>not</em> on that list: outdoor perimeter granules and hose-end concentrates. Those are the American answer, they treat the soil surface rather than the damp organic layer sitting on it, and Ontario and several other provinces restrict the cosmetic use of pesticides on lawns and gardens &mdash; so a granule an American guide recommends may not be permitted for that use here at all. Read the product label and check your provincial rules before buying anything for outdoor use.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="door sweep silicone caulk gap sealant">Check door sweeps, screens and sealant on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Purchase #5 (Optional): What a Registered Spray Is Legitimately For</h2>
          <p>If you want a chemical in the plan, buy a Canadian domestic-class residual with a PCP number and treat entry points. Understand what you are buying: a few weeks of reduced sightings and reliable contact kill, not a solution.</p>
          <p>The shape of the animal is why. A residual barrier works by depositing insecticide on a surface an insect must drag its body across, and the dose comes from contact time and contact area. A house centipede crosses that band on fifteen pairs of long legs with its body held well clear, touching it only at the tips. On that reasoning it should pick up a fraction of the dose a flat-bodied insect would, which is the same reasoning behind the standard advice to treat voids and harbourage rather than trust a band for long-legged spiders and harvestmen. That is a mechanism argument rather than a trial result, and it is consistent with what these labels actually claim, which is contact kill rather than a lasting fence.</p>
          <p>Buy it if a household member is genuinely phobic and needs relief while the environment changes, or to knock down a heavy autumn migration at the entry points while you get the sealing done. Do not buy it as the plan, and do not treat surfaces children and pets contact routinely just because the label allows it. If sprays are what you came for and you want the registered Canadian options compared in more depth, our <Link href="/blog/best-spider-spray-canada">best spider spray in Canada guide</Link> covers the same domestic-class shelf &mdash; the products overlap almost completely.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide spray">Check Doktor Doom registered residual spray on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>How to Read a Canadian Label Before You Add to Cart</h2>
          <p>Most centipede advice online is written for an American audience with an American shelf, and marketplace listings blur the border constantly. Two checks, in order, take about fifteen seconds each.</p>
          <p><strong>Check one: is there a PCP registration number?</strong> Under the Pest Control Products Act, conventional insecticides sold or used in Canada must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency and carry a Canadian PCP registration number on the label. Zoom the label photo on the listing. If there is no number, there are no Canadian directions standing behind how you use it. Do not accept a US &ldquo;minimum-risk&rdquo; claim as a substitute &mdash; that is a US EPA framework, Canada does not automatically recognize it, and the botanical and essential-oil pest products legitimately sold here generally carry a PCP number of their own.</p>
          <p><strong>Check two: is your pest on the pest list?</strong> This is the check almost nobody does. The PCP number tells you the product is legal to sell in Canada; the label&rsquo;s pest list tells you what you are legally allowed to use it on. A registered crawling-insect product that does not name centipedes or crawling insects generally is not a centipede product, whatever the front of the bottle says. And registration is a legal status rather than an efficacy claim &mdash; a registered essential-oil spray can be entirely legal here and still do nothing.</p>
          <p>The rest of the shopping list &mdash; dehumidifiers, hygrometers, glue boards, weep-hole screens, door sweeps, sealant, sump lids &mdash; are appliances, devices and building materials. None of them are pesticides, none of them need a registration check, and all of them are stocked at Canadian Tire, Home Depot Canada, Rona and Home Hardware as well as online.</p>

          <h2>Five Ways People Buy the Wrong Centipede Product</h2>
          <p>Every one of these is common enough to be worth naming.</p>
          <p><strong>1. Buying the spray first.</strong> It is the cheapest item with the most confident packaging, and it is the one that changes least. People buy it, get three quiet weeks, buy it again, and eventually buy the dehumidifier anyway &mdash; having paid for both.</p>
          <p><strong>2. Buying food-grade DE.</strong> It is sold beside the registered stuff, often cheaper, and it carries no pesticide registration, no PCP number and no legal application directions. The registered version costs only a little more and is the one with directions you can actually follow.</p>
          <p><strong>3. Buying the dust without a duster.</strong> The single most common reason a DE application fails is that it went down as visible drifts instead of a whisper-thin film, and insects walk around drifts. The applicator is a separate, inexpensive item and it is not optional.</p>
          <p><strong>4. Buying a bundled &ldquo;centipede kit&rdquo;.</strong> Usually a residual spray, a bag of unregistered dust and a few glue boards, at a premium over buying the two items that matter separately.</p>
          <p><strong>5. Buying a second dehumidifier instead of a hygrometer.</strong> If you own a machine and still see centipedes, the likeliest explanation is that it is not holding target or the humid room is one you never checked. A two-pack of hygrometers is the cheapest instrument in this whole category and it settles the question in a day.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="digital hygrometer indoor humidity monitor 2 pack">Check hygrometer 2-packs on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>What Not to Buy at All</h2>
          <p><strong>Total-release foggers.</strong> They deposit on open surfaces, which is precisely where centipedes are not; the release pushes survivors deeper into voids; and they carry real fire and inhalation hazards in an enclosed basement. There is no centipede scenario in which fogging is the right purchase.</p>
          <p><strong>Ultrasonic plug-in repellers.</strong> These have failed repeatedly in controlled testing across pest categories, and no mechanism exists by which a tone empties damp harbourage an animal physically needs. We went through the evidence in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>.</p>
          <p><strong>Peppermint, tea-tree, cedar and cayenne &ldquo;centipede repellent&rdquo; sprays.</strong> A scent on a surface does not remove moisture or prey, and reapplication becomes a chore you abandon in week two. Be careful with the legality argument attached to these, too: a US &ldquo;minimum-risk&rdquo; exemption is not evidence that a listing is legal to sell here.</p>
          <p><strong>Grey-market US &ldquo;home defense&rdquo; concentrates.</strong> Cross-listed marketplace stock with no Canadian PCP number leaves you with no Canadian label directions standing behind your use of it &mdash; and a residual band is the weak play against this insect regardless of what is in the bottle.</p>

          <h2>When the Right Answer Is to Buy Nothing</h2>
          <p>Three situations where more spending is the wrong move.</p>
          <p><strong>A single sighting.</strong> One centipede in a Canadian house in July is normal. Vacuum it, run the bathroom fan properly, buy nothing.</p>
          <p><strong>You rent, or the damp is not yours to fix.</strong> Glue boards and a hygrometer, then a written report to the landlord or property manager. Do not buy a dehumidifier for a moisture source inside someone else&rsquo;s wall.</p>
          <p><strong>Humidity will not come down.</strong> If several weeks of a correctly sized dehumidifier at target does not move the hygrometer, the next purchase is not a pest product &mdash; it is a contractor. A foundation leak, failed weeping tile, an in-wall plumbing leak or ground water is a waterproofing or plumbing call, and paying a pest company to spray that basement quarterly is the expensive way of ignoring it. Our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> shows what interior general-pest work typically runs if you do want to sanity-check a quote &mdash; and be suspicious of any centipede program that never mentions humidity, drainage or prey.</p>

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
            <li><strong>Start here if you have not diagnosed it yet:</strong> <Link href="/blog/how-to-get-rid-of-centipedes-canada">How to Get Rid of House Centipedes in Canada — Kill the Prey, Not the Predator</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Dehumidifier for a Basement in Canada — Sizing &amp; Drainage</Link></li>
            <li><Link href="/blog/best-large-capacity-dehumidifier-canada">Best Large-Capacity Dehumidifier Canada — For Big or Wet Basements</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Buyer&rsquo;s Guide &amp; Technique</Link></li>
            <li><Link href="/blog/best-silverfish-traps">Silverfish Traps in Canada — Which Type, How Many, Where They Go</Link></li>
            <li><Link href="/blog/best-earwig-killer-canada">Earwig Traps and Killers in Canada — What to Buy</Link></li>
            <li><Link href="/blog/best-spider-spray-canada">Best Spider Spray Canada — PMRA-Registered Options</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Actually Work?</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
      </article>

      <CTASection
        variant="light"
        heading="Mosquitoes and Ticks Are Our Actual Job"
        subtext="Centipedes we research; mosquitoes and ticks we treat. If your yard in the GTA is unusable in summer, we spray it — 150 five-star reviews and a free re-spray guarantee."
      />
    </>
  )
}
