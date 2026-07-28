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
const UPDATED = '2026-07-28'
// H1 keeps the long descriptive form. SERP title is trimmed to 45 chars so it
// survives Google's ~60-char cap once the " | BuzzSkito" template (12 chars) is
// appended. Head term: "centipede killer".
const TITLE = 'Best Centipede Killer in Canada 2026 — What Actually Kills Them, and What Just Sells'
const META_TITLE = 'Best Centipede Killer Canada 2026: What Works'

const FAQS = [
  {
    question: 'What is the best centipede killer in Canada?',
    answer: 'The honest answer is dry air, not a chemical. House centipedes have no waterproof outer layer, so they can only live where humidity stays high — a properly sized dehumidifier holding a basement at 45–50% relative humidity kills the habitat, and takes much of their prey with it. If you want an actual insecticide, the option best suited to this animal is a PMRA-registered insecticidal diatomaceous earth — Safer’s Diatomaceous Earth is a registered brand widely stocked in Canada — dusted as a whisper-thin film into cracks, voids and the sill-plate gap: it kills by abrading the cuticle, so long legs and hard shells do not save the insect the way they do against a residual spray band. Before you apply it, check that the Canadian label carries a PCP registration number and lists centipedes or crawling insects among the pests it may be used against; the label directions are what make the use legal. Registered Canadian residual sprays (Doktor Doom, Konk OnGuard, Knock Down and similar domestic-class products) will kill centipedes on direct contact, but they are the weakest long-term option on this page.',
  },
  {
    question: 'Does bug spray kill centipedes?',
    answer: 'A direct hit from almost any registered contact insecticide kills the centipede you sprayed. The problem is everything after that. Residual perimeter sprays work by leaving a treated band that an insect drags its body through — and a house centipede crosses that band on fifteen pairs of long legs with its body held well clear, picking up a fraction of the dose a flat-bodied silverfish would. The same reasoning is why a barrier band is a weak choice against long-legged spiders and harvestmen. Add the fact that the breeding harbourage sits inside wall voids, under the slab edge, in the sump pit and under the mulch outside, and that spraying does nothing to the prey population drawing them in, and you have a product that dents the sighting count for a few weeks and changes nothing structural.',
  },
  {
    question: 'Is diatomaceous earth a good centipede killer?',
    answer: 'It is the best product-shaped answer on this page, with one condition. DE kills mechanically — the microscopic particles abrade the waxy layer that holds an insect’s moisture in, and the animal dries out. There is no dose to under-apply on long legs, no resistance to develop, and it keeps working for months. The condition is that DE only works while it is dry, and centipedes live where it is damp, so the sequence matters: run the dehumidifier first, then dust. In Canada, buy DE that is sold as an insecticide, carries a PCP registration number, and lists centipedes or crawling insects on its Canadian label — Safer’s Diatomaceous Earth is widely stocked in Canada, with Knock Down and Doktor Doom Be Green as other registered options. "Food-grade" DE is a feed additive with no pesticide registration and no legal application directions, and pool-grade DE is calcined, contains crystalline silica, and should never be used for pest control.',
  },
  {
    question: 'Why does killing centipedes not work?',
    answer: 'Because you are killing the predator and leaving the reason it came. House centipedes are nocturnal hunters whose diet is essentially the guest list of a damp Canadian basement: silverfish, firebrats, cockroach nymphs, spiders, ants, drain flies, and moth and carpet-beetle larvae. A steady centipede presence is direct evidence of a steady insect population you have not noticed, plus the moisture supporting both. Remove the centipedes and the prey keeps breeding, the damp void keeps producing new centipedes, and you conclude nothing works. Remove the damp and the prey, and the centipedes leave on their own — permanently, and without a repeat purchase.',
  },
  {
    question: 'What kills centipedes instantly?',
    answer: 'A shoe, a vacuum hose, or a jar and a piece of card. For a single centipede on a bathroom wall at midnight, that is the entire technology required, and there is no product worth buying for it. A registered contact aerosol also kills on direct contact, but it takes seconds rather than being instant, it puts insecticide on a surface in your house for one insect, and it does nothing about the next one. If the squeamish factor is the real issue, a vacuum with a hose attachment is the least unpleasant tool in the house and you already own it.',
  },
  {
    question: 'Are US centipede sprays legal to use in Canada?',
    answer: 'Not necessarily, and the label is the test. Under the Pest Control Products Act, conventional insecticides sold or used in Canada must be registered with Health Canada’s Pest Management Regulatory Agency and carry a Canadian PCP registration number on the label. Many of the perimeter and "home defense" insecticides that dominate American centipede advice are US EPA-registered products with no Canadian counterpart, and marketplace listings routinely surface US-market stock to Canadian buyers without flagging it. Before buying any insecticide online, zoom the label photo and look for a PCP number. Do not let a US "minimum-risk" claim on a listing stand in for that check: minimum-risk exemption is a US EPA framework, Canada does not automatically recognize it, and the botanical and essential-oil pest products legally sold here generally carry a PCP number of their own. The PCP number is the test, whatever the front of the bottle says — and it is a legal status, not an efficacy claim, so a registered essential-oil spray can be perfectly legal here and still do nothing about a centipede problem.',
  },
  {
    question: 'Do centipede foggers or bug bombs work?',
    answer: 'No, and they are worse than doing nothing. Total-release foggers deposit a fine insecticide layer on open, exposed surfaces — precisely where centipedes are not, since they spend daylight hours inside wall voids, under the slab edge and in the sump pit. The pressure of the release drives survivors deeper into those voids rather than out of them. Against that you are weighing genuine fire and inhalation hazards in an enclosed basement and a house you cannot enter for hours. There is no centipede scenario in which fogging is the right call.',
  },
  {
    question: 'Do ultrasonic centipede repellers work?',
    answer: 'No. Plug-in ultrasonic devices have failed repeatedly in controlled testing across pest categories, and there is no plausible mechanism by which a tone drives a centipede out of a damp wall void it physically needs to survive in. The same applies to the wider shortcut aisle sold for centipedes — peppermint and tea-tree sprays, cayenne, cedar oil, coffee grounds. None of them empties a harbourage or removes a food supply. The money is better spent on the dehumidifier, and the sealing work costs an afternoon rather than a product.',
  },
  {
    question: 'What humidity kills centipedes?',
    answer: 'There is no single lethal number, but the practical control target for a Canadian home is 45–50% relative humidity, verified with an inexpensive hygrometer placed away from the dehumidifier itself. Centipedes need consistently damp harbourage, and both they and much of what they hunt run out of habitat as a room dries into that range. That target also sits at the upper end of the summer indoor range Health Canada publishes in its residential indoor air quality guidance on mould, so the same machine is doing several jobs at once. Expect several weeks at target before the sighting count and glue-board catch clearly bend downward.',
  },
  {
    question: 'Should I spray outside for centipedes?',
    answer: 'Rake before you spray. The outdoor reservoir is the mulch bed, leaf litter, woodpile, landscape timbers and flagstone pressed against your foundation — pull organic material back to leave a dry strip along the wall and you have removed the habitat rather than treating the surface it sits on. There is also a Canadian regulatory wrinkle US guides never mention: Ontario and several other provinces restrict the cosmetic use of pesticides on lawns and gardens, so the perimeter granules and hose-end concentrates American threads recommend may not be permitted for that use here at all. Check the product label and your provincial rules before buying anything for outdoor use, and note that a rake, a bag of clean stone and a caulk gun are unregulated and more durable.',
  },
  {
    question: 'How do I get rid of centipedes permanently?',
    answer: 'Three moves, in order. Dry the space: a correctly sized dehumidifier held at 45–50% RH removes the condition centipedes physically require. Remove the prey: lay flat glue boards for a week and read the whole catch, because the silverfish, roach nymphs, ants or fly larvae on those boards are the actual problem feeding the centipedes. Seal the walk-in: foundation cracks, door sweeps, brick weep-hole screens, basement window frames, utility penetrations, a lid on the sump pit, water down seldom-used floor drains, and mulch pulled back from the wall. Do all three and the problem does not come back next August, which no killer product can promise.',
  },
  {
    question: 'Are house centipedes dangerous enough to justify insecticide?',
    answer: 'Honestly, no. House centipedes do not transmit disease, do not damage the building, do not eat stored food, and bites are genuinely rare and minor because their instinct is to flee and their forcipules often cannot break adult human skin. They are startling, and being startled in your own bathroom is a legitimate reason to want them gone — but it is a reason to change the environment, not to put a residual insecticide on baseboards your family touches. If a household member is genuinely phobic, the honest priority list is still dehumidifier, glue boards, sealing, and dust in voids, with a registered spray as an optional stopgap rather than the plan.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description:
    'Centipede killer options ranked for Canada: why a PCP-registered dust and a dehumidifier held at 45-50% RH beat every spray, and what to skip in 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestCentipedeKillerCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buyer’s guide to centipede killers: why dehumidification outperforms every insecticide, how PCP-registered diatomaceous earth kills where sprays fail, what a registered residual spray can and cannot do, the outdoor perimeter without a sprayer, and the products not worth buying.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Centipede Killer Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Centipede Killer</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Most &ldquo;centipede killers&rdquo; kill the centipede in front of you and nothing else. Here is what actually empties a Canadian basement &mdash; ranked, with the products worth skipping named out loud.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Safer's Diatomaceous Earth (PMRA-registered insect dust)" search="safers diatomaceous earth" label="Best actual killer" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best centipede killer in Canada is a dehumidifier, and the second-best is a dust. House centipedes are predators with no waterproof cuticle, so they only live where the air is damp and the hunting is good &mdash; hold a basement at 45&ndash;50% RH and the habitat disappears along with much of their prey. If you want an insecticide, a PMRA-registered insecticidal diatomaceous earth &mdash; Safer&rsquo;s is a registered brand widely stocked in Canada &mdash; dusted into cracks and voids kills on contact and keeps working for months. Registered Canadian residual sprays kill the centipede you hit, but underperform as a barrier because fifteen pairs of long legs hold the body clear of the treated band.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Killing centipedes treats the symptom</strong> &mdash; they are the visible evidence of a damp space and an insect population underneath it.</li>
              <li><strong>Dehumidifier at 45&ndash;50% RH</strong> is the one purchase that ends it, and it starves silverfish, mites and mould at the same time.</li>
              <li><strong>Insecticidal DE</strong> is the best actual killer product: mechanical, no resistance, months of residual &mdash; but inert the moment it gets damp, so dust after you dry.</li>
              <li><strong>Residual sprays are the weak option here</strong> &mdash; long legs, sheltered harbourage, and an untouched food supply.</li>
              <li><strong>Skip entirely:</strong> total-release foggers, ultrasonic plug-ins, peppermint and cayenne &ldquo;centipede repellents&rdquo;.</li>
              <li><strong>Check the label for a PCP registration number and your pest</strong> &mdash; many US &ldquo;home defense&rdquo; products have no Canadian registration, and a US &ldquo;minimum-risk&rdquo; claim is not Canadian registration either.</li>
              <li><strong>Outdoors, rake before you spray:</strong> mulch and leaf litter against the foundation are the reservoir, and provincial rules restrict cosmetic pesticide use on lawns and gardens.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="centipedes" />
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
                <strong>Buying one thing?</strong> The <em>Best Overall</em> dehumidifier. It is the only item on this page that makes the problem stop coming back, and it works on the prey at the same time. <strong>Want something that actually kills, today?</strong> The <em>Best Actual Killer</em> registered DE, applied with a bulb duster &mdash; dust the sill-plate gap, under appliances and behind the laundry tub, and let the dehumidifier catch up. <strong>Not sure why they are there?</strong> Start with the <em>Best Diagnosis</em> glue boards for a week; they are one of the cheapest things in the aisle and the catch decides everything else. <strong>Autumn migration in an older house?</strong> Put the money into <em>Best Prevention</em> sealing rather than product. And if you want the full mechanism &mdash; why the predator is the symptom and not the problem &mdash; read <Link href="/blog/how-to-get-rid-of-centipedes-canada">how to get rid of house centipedes in Canada</Link>.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Every Option Ranked &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">What Actually Kills Centipedes &mdash; and What Only Sells</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Search &ldquo;centipede killer&rdquo; and the aisle offers you a shelf full of categories. Only a few of them are doing anything a month later. Here is the honest hierarchy for Canadian homes, with a live Amazon.ca price check where a product is worth checking &mdash; and no link at all where our answer is &ldquo;do not buy this&rdquo;.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Option</th>
                  <th className="px-4 py-3 text-left">How it kills</th>
                  <th className="px-4 py-3 text-left">Still working in a month?</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Dehumidifier<br /><span className="font-normal text-xs text-gray-500">45&ndash;50% RH target</span></td>
                  <td className="px-4 py-3 text-gray-700">Removes the damp harbourage centipedes and their prey both require</td>
                  <td className="px-4 py-3 text-gray-700">Yes &mdash; permanently, while it runs</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The real killer</strong> &mdash; buy this first</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Insecticidal DE<br /><span className="font-normal text-xs text-gray-500">Safer&rsquo;s, Knock Down, Doktor Doom Be Green</span></td>
                  <td className="px-4 py-3 text-gray-700">Abrades the cuticle; the insect dehydrates &mdash; mechanical, not toxicological</td>
                  <td className="px-4 py-3 text-gray-700">Yes &mdash; indefinitely, as long as it stays dry</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best product</strong> &mdash; PCP number, and your pest on the label</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="safers diatomaceous earth" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Glue boards<br /><span className="font-normal text-xs text-gray-500">Flat monitors along walls</span></td>
                  <td className="px-4 py-3 text-gray-700">Traps what walks the wall-floor junction &mdash; centipedes and their prey alike</td>
                  <td className="px-4 py-3 text-gray-700">Yes, until dust or damp kills the surface</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Start here</strong> &mdash; measurement first, control second</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Registered residual spray<br /><span className="font-normal text-xs text-gray-500">Domestic-class, PCP-numbered</span></td>
                  <td className="px-4 py-3 text-gray-700">Kills on direct contact; leaves a treated band the insect is supposed to cross</td>
                  <td className="px-4 py-3 text-gray-700">Barely &mdash; and never touched the harbourage</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Stopgap only</strong> &mdash; long legs beat the band</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide spray" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Shoe, vacuum hose, jar<br /><span className="font-normal text-xs text-gray-500">The one on your wall right now</span></td>
                  <td className="px-4 py-3 text-gray-700">Mechanically, instantly, for free</td>
                  <td className="px-4 py-3 text-gray-700">No &mdash; and it never claimed to be</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Correct tool</strong> for a single sighting</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; you own it</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Outdoor perimeter granules<br /><span className="font-normal text-xs text-gray-500">The US-thread favourite</span></td>
                  <td className="px-4 py-3 text-gray-700">Treats the soil surface the reservoir sits on, not the reservoir</td>
                  <td className="px-4 py-3 text-gray-700">Washes and degrades; the mulch bed is untouched</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Check provincial rules</strong> &mdash; cosmetic-use restrictions apply on lawns and gardens; rake first</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Not our recommendation</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Total-release foggers<br /><span className="font-normal text-xs text-gray-500">&ldquo;Bug bombs&rdquo;</span></td>
                  <td className="px-4 py-3 text-gray-700">Coats open surfaces where centipedes are not; pushes survivors into voids</td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Avoid</strong> &mdash; real fire and inhalation hazards for no benefit</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip these</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ultrasonic plug-ins, peppermint, cayenne<br /><span className="font-normal text-xs text-gray-500">The shortcut aisle</span></td>
                  <td className="px-4 py-3 text-gray-700">Nothing measurable. No mechanism that empties a damp wall void</td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Don&rsquo;t bother</strong> &mdash; money that belonged to the dehumidifier</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip these</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">The sentence that saves you the most money:</strong> a house centipede is a predator, and predators do not stay where there is nothing to hunt. Every dollar aimed at the centipede is a dollar not aimed at the damp and the prey that produced it. Close the buffet, and the guest leaves without being killed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Centipede Killers &mdash; Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best overall', 'Dehumidifier held at 45–50% RH — removes the habitat, not the animal'],
                  ['Best insecticide', 'PMRA-registered insecticidal diatomaceous earth (Safer’s, Knock Down, Doktor Doom Be Green), dusted thin into cracks and voids'],
                  ['Best diagnostic', 'Flat glue boards along wall-floor junctions — read the prey, not just the count'],
                  ['Best chemical stopgap', 'Domestic-class residual spray with a PCP number, on entry points only'],
                  ['Fastest single kill', 'A shoe or a vacuum hose — no product required'],
                  ['Why sprays underperform', '15 pairs of long legs hold the body clear of the residue band'],
                  ['Why DE works instead', 'Mechanical abrasion of the cuticle — no dose threshold, no resistance'],
                  ['DE limitation', 'Inert once damp — sequence it after the dehumidifier, apply in sheltered voids'],
                  ['DE grades', 'Buy insecticidal (PCP-numbered). Food-grade has no pest directions; never use pool-grade'],
                  ['Canadian legal check', 'Insecticides sold here carry a PCP registration number — and the label’s pest list is what you may legally use it on'],
                  ['US “minimum-risk” claims', 'A US EPA framework Canada does not automatically recognize — look for the PCP number regardless'],
                  ['Outdoor reservoir', 'Mulch, leaf litter, woodpiles, landscape timbers and flagstone against the foundation'],
                  ['Outdoor rule', 'Provincial cosmetic-pesticide restrictions apply to lawns and gardens — rake and seal instead'],
                  ['Not worth buying', 'Foggers, ultrasonic repellers, peppermint/cayenne sprays, most “centipede repellent” kits'],
                  ['When a pro is the right call', 'Humidity will not fall after weeks at target, or the glue boards found roaches or bed bugs'],
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

          <h2>What Is the Best Centipede Killer in Canada?</h2>
          <p>A dehumidifier. That is the genuinely useful answer, and we understand it is not the one you came for &mdash; you typed &ldquo;centipede killer&rdquo; because something with thirty legs poured across your bathroom wall at eleven at night and you would like it dead. Fair. But the reason this page exists is that the centipede aisle is one of the few in pest control where the product that says <em>killer</em> on the can is close to the worst thing you can buy, and the appliance nobody markets for insects is the best.</p>
          <p>Here is the compressed version, so you can leave now if you want to. The house centipede &mdash; <em>Scutigera coleoptrata</em>, the one with fifteen pairs of impossibly long legs &mdash; never evolved the waxy, water-retaining cuticle that lets a beetle or an ant walk across a dry floor without consequence. It leaks water constantly and can only survive in damp harbourage. It is also a nocturnal <strong>predator</strong>: it does not eat your food, your books, your wiring or your insulation. It is in your basement because your basement is damp and full of insects. Take away either condition and it cannot stay. A dehumidifier holding 45&ndash;50% relative humidity takes away both at once, because most of what centipedes eat is also humidity-dependent.</p>
          <p>If you want a product that kills on contact, buy a named, Canadian-registered insecticidal diatomaceous earth &mdash; Safer&rsquo;s is widely stocked in Canada, with Knock Down and Doktor Doom Be Green as other registered options &mdash; plus a bulb duster, and put a whisper-thin film in the cracks and voids where they actually live. If you want a spray, buy a Canadian domestic-class residual with a PCP number and treat entry points &mdash; but understand you are buying a few weeks of reduced sightings, not a solution. In both cases, read the label&rsquo;s pest list before you apply anything: the PCP number tells you the product is legal to sell here, and the pest list tells you what you are legally allowed to use it on. Everything below explains why the ranking falls that way, and which products we would tell a friend not to buy.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">Basement dehumidifier →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Safer&rsquo;s DE →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack">Glue board monitors →</BuyLink>
          </div>

          <h2>The Reframe: You Are Buying a Killer for the Wrong Animal</h2>
          <p>House centipedes hunt silverfish, firebrats, cockroach nymphs, spiders, ants, moth and carpet-beetle larvae, drain and fungus flies &mdash; and in unlucky homes, bed bugs. They work nights, along wall-floor junctions and in the voids behind and beneath things, which is exactly where their prey works too.</p>
          <p>That single fact reorganises the whole shopping decision, for two reasons.</p>
          <p><strong>It tells you what to fix.</strong> Predators do not colonise empty rooms. If you are seeing centipedes regularly &mdash; not one in April, but several a month &mdash; you are looking at direct evidence of an insect population you have not noticed, because the things centipedes eat are small, nocturnal and good at hiding. The useful question is never &ldquo;what do I spray?&rdquo; It is &ldquo;what has been feeding these, and where is the water coming from?&rdquo;</p>
          <p><strong>It tells you why a killer alone backfires.</strong> Every centipede you remove is a small amount of free pest suppression removed with it, while the prey keeps breeding in a void you have not changed. In a house with a low-level silverfish or roach-nymph problem, a successful centipede-killing campaign can leave you objectively worse off: no predator, same food supply, same damp, and a new crop of centipedes from the same harbourage six weeks later. That is the loop the product aisle is designed around.</p>
          <p>We are not going to tell you to love them. Nobody has to share a bathroom with an arthropod they find horrifying, and &ldquo;I want it gone&rdquo; is a completely legitimate goal. The distinction that matters is <em>act on the environment, not the animal</em> &mdash; because that is the version that also gets rid of whatever the centipedes were eating. The full mechanism, identification, and the seasonal pattern are in our companion guide on <Link href="/blog/how-to-get-rid-of-centipedes-canada">how to get rid of house centipedes in Canada</Link>; this page is the shopping decision.</p>

          <h2>Why Centipede Sprays Underperform (the Physics, Not the Chemistry)</h2>
          <p>Residual insecticides are good products used correctly. They fail against centipedes for a reason specific to the animal&rsquo;s shape.</p>
          <p>A residual barrier works by depositing insecticide on a surface an insect must drag its body across; the dose comes from contact time and contact area. A cockroach or a silverfish moving along a baseboard is effectively belly-down on the treated band. A house centipede crosses the same band on fifteen pairs of long legs, body held well clear of the surface, touching it only at the tips of those legs. On that reasoning it should pick up a fraction of the dose, and that is the same reasoning behind the standard advice to treat voids and harbourage rather than trust a band for long-legged spiders and harvestmen. We are describing a mechanism here, not citing a trial, and you should weigh it as such &mdash; but it fits what the label directions for these products actually claim, which is contact kill, not a lasting fence.</p>
          <p>Then stack the situational problems. The breeding harbourage is inside wall voids, under the slab edge, in the sump pit, beneath the deck and under the mulch outside &mdash; none of which a consumer spray reaches. The prey population that draws centipedes in is completely untouched by a perimeter treatment. And the damp that makes the space habitable is unaffected, so the moment residual activity fades, conditions are exactly as they were.</p>
          <p>What a registered spray is legitimately good for: knocking down a heavy autumn migration at the entry points while you get the sealing done, and killing on direct contact when you meet one and do not want to use a shoe. Used that way, as a stopgap running alongside the real work, it is a defensible purchase. Used as the plan, it is a subscription. If sprays are what you came for and you want the registered Canadian options compared properly, our <Link href="/blog/best-spider-spray-canada">best spider spray in Canada guide</Link> covers the same domestic-class products in more depth &mdash; the shelf overlaps almost completely.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="doktor doom residual insecticide spray">Check Doktor Doom registered residual spray on Amazon.ca →</BuyLink>
          </div>

          <h2>Killer #1: Dry Air (the Purchase That Ends It)</h2>
          <p>If you buy one thing from this page, buy this, and understand why it belongs in a &ldquo;killer&rdquo; ranking at all: it is the only item that removes the condition the animal requires to exist. There is no adaptation available to a house centipede that lets it live in dry air, no resistance to develop, and no hidden void that ambient humidity never reaches. Hold a basement at 45&ndash;50% RH through the summer and the centipedes leave, along with a good share of what they were hunting.</p>
          <p><strong>Sizing, with the detail that trips Canadians up.</strong> Dehumidifier capacity is quoted in pints per day, and the US Department of Energy test procedure that most manufacturers rate to was revised in 2019 to measure capacity under cooler test conditions. The practical consequence is that a machine rated today carries a lower pint number than an older unit of comparable real capacity. If you are comparing an older unit in the garage against a new listing, or reading an American guide written before the change, the numbers do not line up &mdash; check which test standard a listing quotes rather than assuming pints are pints. For a typical damp full basement in the GTA, the modern 50-pint class is the safe default. A small, only-slightly-damp finished area can do with less; a large, wet or open-plan basement wants more capacity rather than a smaller machine running around the clock and never reaching target.</p>
          <p><strong>Cold rooms need a different machine.</strong> Standard compressor dehumidifiers lose efficiency as temperature drops and can frost their coils in a cold basement or crawl space. If the space runs cool, look specifically for a unit rated for low-temperature operation with auto-defrost, or a desiccant model, which keeps working in cold air where a compressor unit stalls. The unheated crawl space is a common case where people buy the wrong machine, watch it ice up, and conclude dehumidifiers do not work.</p>
          <p><strong>Setup decides whether it actually runs all season.</strong> Set the humidistat to 45&ndash;50%; going lower buys nothing extra against centipedes and costs more to run. Place the unit centrally with clearance around the intake rather than jammed against a wall. Run a continuous-drain hose to a floor drain or use a condensate pump, because a machine that needs its bucket emptied daily through a humid August is a machine that gets switched off in week three. Verify with a separate inexpensive hygrometer placed across the room &mdash; the dehumidifier reads the air at its own intake and flatters itself. Give it several weeks at target before you judge the result, and use glue-board counts rather than sightings as the scoreboard. Full sizing, drainage and cold-basement model guidance lives in our <Link href="/blog/best-dehumidifier-for-basement-canada">Canadian basement dehumidifier guide</Link>.</p>
          <p>Two free moves in the same spirit, worth doing the same day: run the bathroom exhaust fan during every shower and for twenty minutes after (centipedes in an upstairs bathroom often point at that room&rsquo;s own ventilation rather than at the basement), and fix the slow drips &mdash; a weeping trap under a vanity or a sweating cold line creates a permanently humid pocket no room-level dehumidifier fully dries.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier basement energy star">Check basement dehumidifiers on Amazon.ca →</BuyLink>
          </div>

          <h2>Killer #2: Registered Insecticidal Diatomaceous Earth (the Best Actual Product)</h2>
          <p>DE is the rare pest product whose mechanism is physical rather than chemical. The dust is made of fossilised diatom shells; under magnification the particles are sharp and highly absorbent. An insect that walks through a film picks it up on the cuticle, where it abrades and adsorbs the thin waxy layer that keeps the animal&rsquo;s water in. The insect dries out and dies. There is no nervous-system target, so there is nothing to become resistant to. And unlike a residual band, a dust does not depend on heavy belly contact: the reasoning is that legs and antennae pick the particles up and carry them back into the harbourage the animal is heading for, which is the part of the house you cannot reach with a spray. That is a mechanism argument rather than a measured result, but it is the reason dusts are the standard tool for void treatment.</p>
          <p>For a moisture-dependent animal, that is close to a bespoke weapon. It is also why the sequencing rule exists: <strong>DE only works while it is dry</strong>, and centipedes live where it is damp. Dust a wet basement floor and you have made mud. Run the dehumidifier first, then treat.</p>
          <p><strong>Technique, which decides everything.</strong> Use a hand duster, not a scoop, and lay a barely visible film &mdash; insects detect and walk around a visible pile, which is a common reason people conclude DE does not work. Target where centipedes and their prey actually travel: the sill-plate gap where framing meets foundation, baseboard cracks, behind and under appliances, the void where plumbing penetrates a wall, under the laundry tub, around the sump pit rim, inside cabinet kick spaces, and along the top plate in an unfinished basement ceiling. Wear a dust mask while applying &mdash; any fine dust is an irritant to breathe.</p>
          <p><strong>The Canadian buying rule, which a lot of DE advice skips.</strong> Buy DE that is <em>sold as an insecticide</em> and carries a PCP registration number on the label, and then read the label&rsquo;s pest list to confirm centipedes or crawling insects are on it &mdash; the number makes the product legal to sell here, the pest list makes your application legal. Registered consumer brands stocked in Canada include <strong>Safer&rsquo;s Diatomaceous Earth</strong>, <strong>Knock Down</strong> and <strong>Doktor Doom Be Green</strong>; that is why the links on this page point at a named registered brand rather than at a search for &ldquo;diatomaceous earth&rdquo;, which mixes unregistered food-grade bags in with the registered ones. &ldquo;Food-grade&rdquo; DE is sold as an anti-caking agent or feed additive &mdash; no pesticide registration, no PCP number, no pest-use directions &mdash; and the registered version costs only a little more. Never use pool-grade DE for pest control: it is calcined and contains crystalline silica, which is a genuine respiratory hazard rather than an internet scare. Grade distinctions, product selection and room-by-room technique are covered in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide for Canada</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Check Safer&rsquo;s registered DE on Amazon.ca →</BuyLink>
          </div>

          <h2>Killer #3: Glue Boards, Used as Instruments</h2>
          <p>Flat glue boards are one of the cheapest things in this aisle, and they buy more useful information than anything else you can put in a cart. They do kill &mdash; centipedes and their prey both travel the wall-floor junction at night, and a board tight against the baseboard sits directly in traffic &mdash; but their real job is diagnosis.</p>
          <p>Lay a numbered, dated line: along exterior basement walls, behind the furnace and hot water tank, under the laundry tub, beside the sump pit, at the base of the stairs, and behind each bathroom vanity. Check weekly and pay more attention to what <em>else</em> is stuck to the board than to the centipedes:</p>
          <ul>
            <li><strong>Silverfish and firebrats</strong> &mdash; a staple centipede food, and damp-dependent themselves. Same humidity fix, plus getting cardboard storage into sealed totes. See the <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish guide</Link>.</li>
            <li><strong>Small striped cockroach nymphs</strong> &mdash; treat this as urgent and switch to the <Link href="/blog/how-to-get-rid-of-cockroaches-canada">cockroach bait plan</Link>. The centipedes are the least of it.</li>
            <li><strong>Earwigs</strong> &mdash; usually a mulch-line and moisture story at the foundation, covered in our <Link href="/blog/how-to-get-rid-of-earwigs-canada">earwig guide</Link>.</li>
            <li><strong>Spiders</strong> &mdash; themselves a sign of a flying-insect food supply and the same ground-level entry gaps; the sealing work in our <Link href="/blog/how-to-keep-spiders-out-of-your-house">spider exclusion guide</Link> is the same afternoon.</li>
            <li><strong>Small flies and larvae</strong> &mdash; drain flies point at a dirty or dried-out floor drain; fungus gnats at overwatered plants or genuinely wet soil under the slab.</li>
            <li><strong>Almost nothing at all</strong> &mdash; genuinely good news. A couple of stray centipedes and a humidity issue, not an ecosystem.</li>
          </ul>
          <p>The count also gives you a trend line. Once the dehumidifier has held target for several weeks, boards should be trending down. If they are not, there is a humid pocket you have not found &mdash; check the crawl space, the cold room, the wall cavity near the sump, and the bathroom you assumed was fine.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="insect glue board traps multi pack">Check glue board multi-packs on Amazon.ca →</BuyLink>
          </div>

          <h2>The Outdoor Half: Rake Before You Spray</h2>
          <p>Centipedes come indoors on foot, at ground level, and the heaviest push is when outdoor temperatures start dropping &mdash; in southern Ontario, usually September and October. The reservoir feeding that migration is the strip of ground touching your house: mulch beds, leaf litter, stacked firewood, landscape timbers, flagstone on soil, and a leaf-filled window well.</p>
          <p>The American answer is a bag of perimeter granules and a hose-end concentrate. There are two problems with importing that advice. The first is that it does not work well: treating the soil surface does not empty the damp organic layer sitting on it, and rain moves the product off before it moves the population. The second is regulatory &mdash; Ontario and several other provinces restrict the <em>cosmetic</em> use of pesticides on lawns and gardens, so a granule an American guide recommends may not be permitted for that use here at all. Read the product label and check your provincial rules before you buy anything for outdoor use; the label is the law, not a suggestion.</p>
          <p>The version that works and needs no registration check at all takes an afternoon:</p>
          <ul>
            <li><strong>Pull organic mulch back</strong> to leave a dry strip along the foundation. Clean stone in that strip stays dry and holds no harbourage.</li>
            <li><strong>Clear leaf litter and window wells</strong>, and get stacked firewood off the wall and up on a rack.</li>
            <li><strong>Seal foundation cracks and the sill-plate line</strong> with silicone or polyurethane sealant, inside and out.</li>
            <li><strong>Screen brick-veneer weep holes</strong> rather than caulking them &mdash; those holes must stay open for drainage, so use purpose-made weep-hole covers that block insects and pass water.</li>
            <li><strong>Fit door sweeps</strong> on exterior doors, the garage entry and the basement walkout. If daylight shows, a centipede walks through it.</li>
            <li><strong>Seal utility penetrations</strong> &mdash; hose bibs, dryer vents (check the flap closes), gas and electrical entries, AC line sets, cable drops.</li>
            <li><strong>Lid the sump pit</strong> and pour a couple of litres of water down seldom-used floor drains monthly so the trap seal does not evaporate into an open pipe.</li>
            <li><strong>Fix grading and downspouts</strong> so water leaves the foundation. Chronic basement damp can be a gutter problem wearing a pest costume.</li>
          </ul>
          <p>That same pass is the one our guides to earwigs, spiders and fall invaders all call for, so one afternoon of work pays several times over.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="door sweep silicone caulk gap sealant">Check door sweeps, screens and sealant on Amazon.ca →</BuyLink>
          </div>

          <h2>Products We Would Tell You Not to Buy</h2>
          <p>A page about killers should be as clear about the money you should not spend.</p>
          <p><strong>Total-release foggers.</strong> They deposit on open surfaces, which is precisely where centipedes are not; the release pushes survivors deeper into voids; and they carry real fire and inhalation hazards in an enclosed basement. Fogging has no place in a centipede plan.</p>
          <p><strong>Ultrasonic plug-in repellers.</strong> These have failed repeatedly in controlled testing across pest categories, and no mechanism exists by which a tone empties a damp wall void an animal physically needs. We went through the evidence in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>.</p>
          <p><strong>Peppermint, tea-tree, cedar and cayenne &ldquo;centipede repellent&rdquo; sprays.</strong> Be careful with the legality argument you will see attached to these. A US &ldquo;minimum-risk&rdquo; exemption is a US EPA framework and Canada does not automatically recognize it, so it is not evidence that a listing is legal to sell here &mdash; the botanical pest products legitimately on the Canadian market generally carry a PCP number like anything else. And registration, where it exists, is a legal status rather than an efficacy claim. Even taken at their best, a scent on a surface does not remove moisture or prey, and reapplication becomes a chore you abandon in week two.</p>
          <p><strong>Grey-market US &ldquo;home defense&rdquo; concentrates.</strong> Cross-listed marketplace stock that has no Canadian PCP number leaves you with no Canadian label directions standing behind your use of it &mdash; and, as covered above, a residual band is the weak play against this insect regardless of what is in the bottle.</p>
          <p><strong>Anything sold specifically as a &ldquo;centipede killer kit&rdquo;.</strong> It is usually a residual spray, a bag of unregistered dust and a couple of glue boards at a premium over buying the two things that matter separately. Buy the DE and the boards; skip the bundle.</p>

          <h2>What to Buy for Your Actual Situation</h2>
          <p><strong>One centipede, once, in a house that is otherwise fine.</strong> Buy nothing. Vacuum it up, run the bathroom fan properly, and get on with your life. A single sighting in a Canadian house in July is normal.</p>
          <p><strong>Several a month, damp basement, older house.</strong> This is the case this page is written for, and the order is: glue boards for a week to see what is down there, then the dehumidifier, then DE in the voids once the room is dry, then an afternoon of sealing before September. That sequence resolves the problem for good rather than for a season.</p>
          <p><strong>Rental or condo, and the damp is not yours to fix.</strong> Glue boards, a hygrometer and a written report to the landlord or property manager. Do not spend on a dehumidifier for a moisture source in someone else&rsquo;s wall &mdash; document it instead.</p>
          <p><strong>Genuine phobia in the household and you want them dead now.</strong> Legitimate. Do the boards and the dehumidifier anyway, and add a registered domestic-class residual spray at entry points as a stopgap so you get relief while the environment changes. Check that its Canadian label carries a PCP number and lists centipedes or crawling insects, then follow that label; do not treat surfaces children and pets contact routinely just because the can allows it.</p>
          <p><strong>Sudden explosion after a flood, sump failure or a wet spring.</strong> The centipedes are downstream of a water event. Fix the water first &mdash; that is a contractor call, not a pest call &mdash; then dry, then dust.</p>

          <h2>When DIY Is the Wrong Call &mdash; and When a Pro Is Cheaper</h2>
          <p>Centipedes are a genuinely DIY-solvable problem, and there is no honest scenario where a recurring spray contract for centipedes alone is the right purchase. We would say that even if we sold one &mdash; which, to be clear, we do not: BuzzSkito treats mosquitoes and ticks, and this page is our publishing team&rsquo;s independent research.</p>
          <p>Bring in help in three situations. <strong>Humidity will not come down.</strong> If several weeks of a correctly sized dehumidifier at target does not move the hygrometer, you are likely dealing with a foundation leak, failed weeping tile, a plumbing leak inside a wall or ground water &mdash; and the right call is a waterproofing or plumbing contractor, not an exterminator. Paying a pest company to spray that basement quarterly is the expensive version of ignoring it. <strong>The glue boards found something else.</strong> Cockroach nymphs, bed bugs or a heavy carpet-beetle catch are their own problems with their own programs, and a licensed professional is genuinely worth the money there; our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> shows what interior general-pest work typically runs so you can sanity-check a quote. <strong>You do not control the building.</strong> Renters and condo owners should document rather than equip.</p>
          <p>And be suspicious of any quote for a centipede program that never mentions humidity, drainage or prey. That is a quote for the symptom, priced annually.</p>

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
            <li><Link href="/blog/how-to-get-rid-of-centipedes-canada">How to Get Rid of House Centipedes in Canada — Kill the Prey, Not the Predator</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Dehumidifier for a Basement in Canada — Sizing &amp; Drainage</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Buyer&rsquo;s Guide &amp; Technique</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada — The Humidity Fix</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-earwigs-canada">How to Get Rid of Earwigs in Canada</Link></li>
            <li><Link href="/blog/best-spider-spray-canada">Best Spider Spray Canada — PMRA-Registered Options</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Actually Work?</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
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
