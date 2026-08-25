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

const SLUG = 'how-to-get-rid-of-carpet-beetles-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// Carpet beetles are the #1 bed-bug misidentification, so the ID block carries as
// much weight as the control protocol. Deliberately ONE page: no separate
// "best carpet beetle spray" sibling — at DR 0.5 splitting this intent is harmful.
const TITLE = 'How to Get Rid of Carpet Beetles in Canada — The Larvae Are the Pest, and the Vacuum Is the Weapon'
const META_TITLE = 'Get Rid of Carpet Beetles Canada: Larvae First'

const FAQS = [
  {
    question: 'How do I get rid of carpet beetles in Canada?',
    answer: 'Find what the larvae are eating, remove it, and vacuum relentlessly — in that order. Carpet beetle larvae feed on keratin: wool, silk, felt, fur, feathers, leather, hair, dried pet food, and the dead insects that pile up in window channels, light fixtures, attics, and wall voids. A spray applied to a carpet does nothing about a dead wasp nest in the soffit or a forgotten wool coat at the back of a closet, which is why product-first attempts stall. The working sequence is: locate the food source and get rid of it, vacuum every edge, crack, register, and under-furniture strip with a crevice tool, launder or freeze the salvageable textiles, move clean wool and silk into sealed containers, and only then consider a registered crack-and-crevice product for the gaps a vacuum genuinely cannot reach.',
  },
  {
    question: 'Are those little brown bugs in my bed carpet beetles or bed bugs?',
    answer: 'Look at the shape and the shed skins. A carpet beetle larva is elongated and carrot- or torpedo-shaped, banded brown, and visibly bristly — it looks hairy, with tufts of longer hairs at one end. A bed bug is flat, oval, hairless, and reddish-brown with no bristles at all. The other tell is where you find them: carpet beetle larvae wander widely and turn up in closets, along baseboards, under rugs, and inside drawers, whereas bed bugs cluster in the seams, tufts, and frame joints within a metre or two of where someone sleeps. Both leave cast skins behind, but a carpet beetle skin keeps the bristles and the carrot outline, and a bed bug skin is a flat empty oval. If you are still unsure, our guide on how to check for bed bugs walks through the seam-by-seam inspection that settles it.',
  },
  {
    question: 'Do carpet beetles bite people?',
    answer: 'No. Carpet beetle larvae have no interest in blood and no mouthparts for taking it — they graze on keratin fibres. What does happen, and what causes most of the confusion, is that the bristly hairs shed by the larvae can irritate skin on contact, producing itchy red bumps or a rash in sensitive people. That reaction is a contact irritation from the hairs, not a bite, and it is one reason a household with an unnoticed carpet beetle population sometimes convinces itself it has bed bugs. If the marks appear where bedding touches skin and you cannot find a single insect after a proper inspection, look for cast larval skins in the mattress seams and under the bed before you spend money on bed bug products.',
  },
  {
    question: 'What is the difference between carpet beetles and clothes moths?',
    answer: 'They eat the same things and leave different evidence. Clothes moths spin silk — you find webbing, silken tubes, or small portable cases stuck to the fabric, and the damage tends to be concentrated in one spot on one garment. Carpet beetle larvae spin nothing. They leave irregular holes and grazed, thinned patches spread more widely, plus a scattering of shed bristly skins and gritty faecal pellets roughly the size of a grain of sand. Adults also behave differently: adult carpet beetles fly toward light and collect on windowsills trying to get out, whereas clothes moths avoid light and flutter weakly in the dark corners of a closet. The control plan overlaps almost entirely, so if you cannot tell, follow the carpet beetle plan and you will handle both.',
  },
  {
    question: 'Where are carpet beetles coming from in my house?',
    answer: 'Usually from something dead or something woollen that nobody has looked at in a long time. The recurring Canadian sources are: dead insects accumulated in window channels, light fixtures, attic spaces, and behind baseboards; an old bird or wasp nest in a soffit, eave, dryer vent, or attic; a wool rug or its underpad; the felt and hair in an antique chair or piano; taxidermy, feather pillows, down jackets, and old fur; dried pet food and birdseed stored in an unsealed bag; and lint plus shed human and pet hair packed into the edge of a carpet where the vacuum never quite reaches. Adults also fly in from outside during flowering season — they feed on pollen and nectar outdoors and lay their eggs indoors. That is why sound window screens matter more here than people expect.',
  },
  {
    question: 'Does a carpet beetle spray or bug bomb work?',
    answer: 'A total-release fogger is close to useless for this pest and worth refusing outright. Fog settles on exposed surfaces, and carpet beetle larvae live inside the carpet pile, under the underpad, deep in closet corners, inside wall voids, and within the very food source you are trying to eliminate — none of which a fog reaches. Surface sprays have a narrow legitimate role as a crack-and-crevice treatment along carpet edges and baseboards after the vacuuming and laundering are done, and only where the Canadian label actually names carpet beetles and the surface you intend to treat. In Canada any such product must carry a PCP registration number, and the label directions are legally binding, not advisory. If your instinct is to reach for a can before you have found what the larvae are eating, the can will disappoint you.',
  },
  {
    question: 'Can I just vacuum carpet beetles away?',
    answer: 'For a great many Canadian households, yes — with the emphasis on technique rather than on the machine. Vacuuming physically removes larvae, eggs, cast skins, and the lint and hair layer they feed on, all at once, which is more than any spray does. What makes it work is where you point it: the carpet-to-baseboard edge on every wall, under and behind furniture that never moves, closet floors and shelf edges, inside heating registers and cold-air returns, along the tack strip, and slowly over the rug pile in both directions. Then empty the canister or bag into a sealed bag and put it in the outdoor bin immediately. Repeat every few days for several weeks — you are outlasting eggs and hidden larvae, not trying to win in one afternoon.',
  },
  {
    question: 'Will freezing or hot washing kill carpet beetle larvae?',
    answer: 'Both work for items that can take the treatment, and between them they cover most of what a household actually wants to save. A hot wash and a full hot tumble-dry cycle handles washable wool blends, blankets, and linens. For anything that cannot be washed, sustained deep freezing is the standard non-chemical alternative: seal the item in a bag, squeeze out the air, and leave it in a proper freezer for a good stretch of days rather than hours, so the cold reaches the centre of the item and stays there. Dry cleaning also kills every stage on the garment. Steam works on rugs and upholstery where the fabric tolerates it. None of these prevent reinfestation on their own — a cleaned item put back into an untreated closet is simply re-exposed, which is why sealed storage is part of the plan rather than an optional extra.',
  },
  {
    question: 'Are mothballs a good idea for carpet beetles in Canada?',
    answer: 'Rarely, and never the way most people use them. Mothballs are a pesticide in Canada, not an air freshener, and the registered products carry label directions that restrict use to sealed containers where the vapour can build up and stay contained. Scattering them loose in a closet, a drawer, an attic, or under a bed is both ineffective — the vapour disperses long before it reaches a lethal concentration — and a direct violation of the label, with a real inhalation exposure for the people living there. If you want a chemical-free storage answer instead, sealed containers with the textiles cleaned first do the same job with none of the exposure. Cedar chests and cedar blocks are widely sold on the strength of an aroma; treat any claim that a cedar block clears an active infestation with scepticism, and do not use one in place of cleaning and sealing.',
  },
  {
    question: 'Do carpet beetle pheromone traps work?',
    answer: 'They are a monitoring tool, not a treatment, and that is the right way to buy them. A lure-baited trap tells you which room has activity, whether adults are still emerging, and whether the numbers are falling week over week — genuinely useful when the source is hidden and you are trying to narrow the search to a floor or a closet. What it will not do is thin out a population, because the larvae doing the damage never go near it. One Canadian wrinkle worth knowing: a product sold to attract insects with a pheromone can itself be a regulated pest control product here, so check the packaging for a PCP registration number. If there is none, treat what you bought as a plain glue board and set your expectations accordingly.',
  },
  {
    question: 'Should I hire a pest control company for carpet beetles?',
    answer: 'Usually no, and the money is better spent elsewhere. Carpet beetles are a housekeeping-and-source problem far more than a chemistry problem, and a recurring spray program that never locates the food source is a subscription rather than a solution. There are three genuine exceptions. First, when the source turns out to be a bird, rodent, or wasp nest inside a soffit, wall, or attic — in which case the right trade is an exclusion or wildlife contractor who can remove the nest and screen the opening, not an exterminator with a sprayer. Second, valuable textiles: a serious rug, a heritage garment, or an archive belongs with a conservator or a specialist cleaner. Third, a rental or condo where the source is inside a unit you do not control. Otherwise, a vacuum with a crevice tool and a Saturday afternoon beats any quote you will be given.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Carpet beetles in Canada: the larvae do all the damage, not the adults. How to tell them from bed bugs and clothes moths, and the vacuum-first plan.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function HowToGetRidOfCarpetBeetlesCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to carpet beetles: why the larvae rather than the adults do the damage, how to tell a carpet beetle larva from a bed bug and from a clothes moth, where the keratin food source is actually hiding, the vacuum-and-laundry protocol, sealed storage, what Canadian labels legally allow, and when the right trade is an exclusion contractor rather than an exterminator.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Carpet Beetles in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Get Rid of Carpet Beetles</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The little round beetle on your windowsill is not eating anything. Its bristly, carrot-shaped larva is &mdash; and it is eating wool, felt, fur, hair and dead insects somewhere you have not looked yet. Find that, and the rest is a vacuum and a laundry cycle.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Sealed-HEPA vacuum with a crevice tool" search="sealed hepa vacuum crevice tool" label="The tool that does the work" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of carpet beetles in Canada, find the keratin the larvae are eating and remove it, then vacuum every edge and crevice repeatedly for several weeks. The adults you see on the windowsill do no damage at all &mdash; they feed on pollen outdoors and are trying to leave. The larvae are the pest, and they are living in a wool rug, a closet, a bag of dried pet food, or a pile of dead insects in an attic or light fixture. No spray substitutes for locating that.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>The larva is the pest.</strong> Bristly, carrot-shaped, brown. The round mottled adult on the glass is on its way out.</li>
              <li><strong>Find the food first:</strong> wool and silk, felt, fur, feathers, leather, hair, dried pet food, and dead insects in windows, fixtures, attics and old nests.</li>
              <li><strong>Vacuum edges, not floors.</strong> The carpet-to-baseboard strip, under immovable furniture, closet corners, registers &mdash; then empty into an outdoor bin.</li>
              <li><strong>Heat, freeze, or dry-clean</strong> anything salvageable, then store it clean in sealed containers. A clean item back in a dirty closet is just re-exposed.</li>
              <li><strong>Foggers do not work here.</strong> Fog lands on surfaces; larvae live inside pile, under underpad, and in voids.</li>
              <li><strong>Not bed bugs, and not bites.</strong> Larval hairs irritate skin on contact &mdash; carpet beetles do not feed on blood.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="carpet beetles" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pick in 60 Seconds: What You Are Actually Seeing &rarr; What to Do</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Carpet beetle money goes wrong in one predictable way: people buy a treatment for a room when the problem is an object. Find your row instead.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What you are seeing</th>
                  <th className="px-4 py-3 text-left">What it means</th>
                  <th className="px-4 py-3 text-left">Do this</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Small round mottled beetles on windowsills</td>
                  <td className="px-4 py-3 text-gray-700">Adults trying to get out to find flowers. They are a symptom, not the damage</td>
                  <td className="px-4 py-3 text-gray-700">Start hunting the larval food source in that room &mdash; closet, rug, vent, fixture</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; a flashlight</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bristly brown larvae or shed skins under the bed</td>
                  <td className="px-4 py-3 text-gray-700">An active population feeding on hair, lint and wool under there</td>
                  <td className="px-4 py-3 text-gray-700">Full crevice vacuuming of the room and the bed frame, repeated weekly</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="sealed hepa vacuum crevice tool" block>Vacuum + crevice tool &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Irregular holes in a wool sweater or rug</td>
                  <td className="px-4 py-3 text-gray-700">Larvae are eating that item. No webbing means beetle, not clothes moth</td>
                  <td className="px-4 py-3 text-gray-700">Hot wash, dry clean, or deep-freeze the item, then store it clean and sealed</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="airtight storage tote gasket lid" block>Sealed storage &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">They keep coming back to one room every year</td>
                  <td className="px-4 py-3 text-gray-700">Something dead is feeding them &mdash; usually an old nest or an insect graveyard</td>
                  <td className="px-4 py-3 text-gray-700">Check the soffit, eave, attic, dryer vent and light fixtures above that room</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="hardware cloth 1 4 inch galvanized mesh" block>Vent mesh &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You cannot find them at all, but you see damage</td>
                  <td className="px-4 py-3 text-gray-700">The source is hidden. You need to narrow the search by room</td>
                  <td className="px-4 py-3 text-gray-700">Lay monitors and read the catch map for two to three weeks</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="carpet beetle pheromone trap" block>Monitors &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You are not sure it is not bed bugs</td>
                  <td className="px-4 py-3 text-gray-700">Bristly and carrot-shaped is a beetle. Flat and oval is a bed bug</td>
                  <td className="px-4 py-3 text-gray-700">Read the ID table below before you buy a single bed bug product</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; scroll down</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="What Is Actually Worth Buying for Carpet Beetles in Canada"
            awards={[
              {
                badge: 'Does Most of the Work',
                name: 'Sealed-HEPA Vacuum with a Crevice Tool',
                why: 'Vacuuming removes larvae, eggs, cast skins and the lint-and-hair layer they eat in one pass — more than any spray does. A sealed HEPA machine matters mainly because carpet beetle work means vacuuming fine debris and shed bristly hairs out of edges, and a leaky vacuum puts that back into the room air. Buy only if yours has no crevice tool or blows dust: an ordinary vacuum used properly on the edges beats a premium one used on the middle of the floor.',
                search: 'sealed hepa vacuum crevice tool',
                featured: true,
                pros: ['Removes every life stage plus the food source at once', 'No chemistry, no label restrictions, safe around children and pets', 'Doubles for dust mites, fleas and general allergen control'],
                cons: ['Only reaches what you point it at — technique is the whole game', 'Useless if you never empty it outside'],
              },
              {
                badge: 'Best Prevention',
                name: 'Airtight Storage Totes and Zippered Garment Bags',
                why: 'This is the buy that stops the relapse. Carpet beetle larvae cannot start on wool, silk, fur or feather that is clean and sealed away from them, and cardboard boxes and open closet shelving are exactly where a slow, quiet infestation restarts each year. Clean the item first — an unwashed garment sealed with its own eggs and body oils is a sealed feeding chamber.',
                search: 'airtight storage tote gasket lid',
                pros: ['Ends the annual relapse rather than treating it', 'One-time purchase, no chemistry, no re-application', 'Also protects against clothes moths and humidity damage'],
                cons: ['Only works if the contents are cleaned before sealing', 'Bulky, and cheap lids warp and stop sealing'],
              },
              {
                badge: 'Best for Finding the Source',
                name: 'Carpet Beetle Monitors (Lure-Baited or Plain Glue Boards)',
                why: 'Instrumentation, not control. When the food source is hidden inside a wall, an attic, or a closet nobody has emptied in a decade, a line of dated monitors narrows the hunt to a room and tells you whether adults are still emerging. Check the packaging for a PCP registration number — a lure-baited insect trap can be a regulated product in Canada — and if there is no number, treat it as a plain glue board.',
                search: 'carpet beetle pheromone trap',
                pros: ['Turns a whole-house search into a one-room search', 'Shows whether numbers are actually falling', 'Cheap enough to lay a dozen across the house'],
                cons: ['Catches adults; the damaging larvae ignore it', 'Measures the problem, does not reduce it'],
              },
              {
                badge: 'Best Crack and Crevice',
                name: 'Safer’s Diatomaceous Earth + Bulb Duster',
                why: 'For the carpet edge, the tack strip, and the void behind a baseboard that a vacuum nozzle cannot physically enter. Registered insecticidal diatomaceous earth kills mechanically by abrading and absorbing the waxy layer that holds an insect’s moisture in, so nothing develops resistance to it and the powder does not expire. Buy the duster with it — a barely visible film is what works, and you cannot lay one from the bag. Read the label’s pest list and use sites before you apply it.',
                search: 'safers diatomaceous earth',
                pros: ['PMRA-registered — the PCP number is printed on the bag', 'Reaches the void spaces a vacuum cannot', 'Mechanical kill, so no resistance can develop'],
                cons: ['Goes inert once damp', 'A supporting move only — it finds nothing and removes no food source'],
              },
              {
                badge: 'Best for Rugs and Upholstery',
                name: 'Handheld or Canister Garment Steamer',
                why: 'Heat kills every life stage it actually reaches, which makes steam the right answer for a wool rug, a stair runner, or an upholstered chair that cannot go in a washing machine and should not be soaked in insecticide. Work slowly enough that the heat penetrates rather than skimming, test an inconspicuous corner first, and let the item dry fully — a damp wool rug creates a second problem.',
                search: 'handheld garment steamer upholstery',
                pros: ['Kills eggs and larvae without any chemistry', 'Works on items that cannot be laundered or frozen', 'Useful across the house for other pests too'],
                cons: ['Slow, and only kills what the heat reaches', 'Can damage delicate or heat-sensitive fabrics'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Buying only one thing?</strong> The <em>Does Most of the Work</em> vacuum &mdash; and if yours already has a crevice tool and holds its seal, buy nothing and use it properly instead. Our <Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">sealed-HEPA vacuum comparison</Link> covers what &ldquo;sealed&rdquo; actually means on a spec sheet. <strong>Damage in stored clothing?</strong> Go straight to <em>Best Prevention</em> &mdash; clean, then seal, or the next season repeats. <strong>Cannot find where they are coming from?</strong> The <em>Best for Finding the Source</em> monitors will narrow it to a room in a fortnight. <strong>Larvae emerging from the carpet edge?</strong> Add <em>Best Crack and Crevice</em> DE, with technique detail in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link>. <strong>A wool rug you cannot wash?</strong> <em>Best for Rugs and Upholstery</em> steam is the only thing on this list that reaches into pile.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Identification &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Carpet Beetle, Bed Bug, or Clothes Moth? The Thirty-Second ID</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Carpet beetle larvae are the single most common thing mistaken for bed bugs in a Canadian bedroom, and the mistake is expensive in both directions &mdash; people buy bed bug treatments they do not need, or dismiss real bed bugs as &ldquo;just carpet beetles.&rdquo; Two features settle it: <strong>bristles</strong> and <strong>body shape</strong>.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What you found</th>
                  <th className="px-4 py-3 text-left">Shape and surface</th>
                  <th className="px-4 py-3 text-left">Where it turns up</th>
                  <th className="px-4 py-3 text-left">Evidence it leaves</th>
                  <th className="px-4 py-3 text-left">What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Carpet beetle larva<br /><span className="font-normal text-xs text-gray-500">the actual pest</span></td>
                  <td className="px-4 py-3 text-gray-700">Elongated, carrot- or torpedo-shaped, banded brown, <strong>visibly bristly</strong> with hair tufts at one end</td>
                  <td className="px-4 py-3 text-gray-700">Wanders widely &mdash; closets, baseboards, under rugs, inside drawers, under beds</td>
                  <td className="px-4 py-3 text-gray-700">Bristly cast skins, sand-grain faecal pellets, grazed holes in wool</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Find the keratin</strong> it is eating</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Adult carpet beetle<br /><span className="font-normal text-xs text-gray-500">harmless indoors</span></td>
                  <td className="px-4 py-3 text-gray-700">Small, round to oval, mottled or solid dark, hard-shelled, flies</td>
                  <td className="px-4 py-3 text-gray-700">Windowsills and light fixtures &mdash; heading toward the light to get out</td>
                  <td className="px-4 py-3 text-gray-700">Nothing. It eats pollen and nectar outdoors</td>
                  <td className="px-4 py-3 text-gray-700">A <strong>signal</strong> that larvae are somewhere in that room</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bed bug<br /><span className="font-normal text-xs text-gray-500">Cimex lectularius</span></td>
                  <td className="px-4 py-3 text-gray-700">Flat, broad oval, reddish-brown, <strong>no bristles at all</strong>, wingless</td>
                  <td className="px-4 py-3 text-gray-700">Clustered within a metre or two of where someone sleeps &mdash; seams, tufts, frame joints</td>
                  <td className="px-4 py-3 text-gray-700">Flat empty oval skins, dark ink-dot staining, live bugs in seams</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">A different job entirely</strong></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Clothes moth larva<br /><span className="font-normal text-xs text-gray-500">webbing or casemaking</span></td>
                  <td className="px-4 py-3 text-gray-700">Pale, smooth, grub-like &mdash; <strong>spins silk</strong>, sometimes carries a portable case</td>
                  <td className="px-4 py-3 text-gray-700">Dark, undisturbed closets and drawers; damage concentrated on one item</td>
                  <td className="px-4 py-3 text-gray-700">Silk webbing, silken tubes, small cases stuck to the fabric</td>
                  <td className="px-4 py-3 text-gray-700">Same plan &mdash; clean, heat or freeze, seal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">The itchy-bumps trap.</strong> Carpet beetle larvae do not bite. Their shed bristly hairs can irritate skin on contact, and the resulting itchy bumps get read as bed bug bites &mdash; which is how a household ends up buying an entire bed bug kit for the wrong insect. If you have marks but cannot find a single flat oval insect after a proper inspection, look for bristly cast skins under the mattress and along the bed frame first. Our <Link href="/blog/how-to-check-for-bed-bugs-canada" className="text-emerald-700 underline font-semibold">bed bug inspection walkthrough</Link> and <Link href="/blog/tick-vs-bed-bug" className="text-emerald-700 underline font-semibold">tick vs bed bug comparison</Link> cover the look-alikes that send Canadians down the wrong path.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Carpet Beetle Control &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What actually causes damage', 'The larvae — the round adult on the windowsill eats pollen outdoors'],
                  ['What the larvae eat', 'Keratin: wool, silk, felt, fur, feathers, leather, hair, dried pet food, dead insects'],
                  ['What they will not eat', 'Clean polyester, nylon and other synthetics — unless soiled with sweat, food or oils'],
                  ['Number one hidden source', 'Dead insects: window channels, light fixtures, attics, and old bird or wasp nests'],
                  ['Highest-value action', 'Crevice vacuuming of edges, under furniture and closet corners — repeated weekly'],
                  ['Where to vacuum', 'Carpet-to-baseboard edge, tack strip, registers, cold-air returns, under immovable furniture'],
                  ['After vacuuming', 'Empty into a sealed bag and put it in the outdoor bin immediately'],
                  ['Salvaging textiles', 'Hot wash and hot dry, dry clean, sustained deep freeze in a sealed bag, or steam'],
                  ['Preventing the relapse', 'Clean first, then store wool and silk in sealed containers or garment bags'],
                  ['Foggers and bug bombs', 'Do not work — fog lands on surfaces, larvae live in pile, underpad and voids'],
                  ['If you use a product', 'Canadian label must carry a PCP registration number and name the pest and the surface'],
                  ['Mothballs', 'A pesticide in Canada — legal use is inside sealed containers only, never scattered loose'],
                  ['Do they bite', 'No. Shed larval bristles can irritate skin — that is contact irritation, not a bite'],
                  ['Adults get in by', 'Flying in during flowering season — sound window and vent screens matter'],
                  ['When a pro is right', 'A nest inside a soffit or wall (exclusion contractor), or valuable textiles (conservator)'],
                  ['Waste of money', 'Bug bombs, ultrasonic repellers, cedar blocks as a cure, scattered mothballs'],
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

          <h2>The One Fact That Reorganises Everything: The Adult Is Not the Pest</h2>
          <p>Almost every failed carpet beetle campaign starts the same way. Someone notices small round beetles collecting on a windowsill or inside a light fixture, identifies them correctly as carpet beetles, and treats the room they found them in. Nothing improves, because the beetles on the glass are not eating anything in that room. Adult carpet beetles feed on pollen and nectar &mdash; outdoors, on flowers &mdash; and the reason they are on your window is that they are trying to get out.</p>
          <p>The damage is done entirely by the larvae, and they look nothing like the adult. A carpet beetle larva is elongated and tapered like a small carrot or torpedo, banded in browns, and covered in bristles that give it a distinctly hairy outline, often with a tuft of longer hairs at one end. It moves slowly, avoids light, and lives inside the thing it is eating. That is the animal you are hunting, and the adult on the windowsill is best understood as a notification: <em>larvae completed their development in this part of the house</em>.</p>
          <p>This is also why carpet beetles are frequently a multi-year problem in a home where nobody has ever seen the pest. The whole feeding stage can run for many months, and in a cool, marginal food source it can stretch far longer &mdash; so a population can persist quietly inside a soffit or a storage box through several seasons, sending a few adults to the window each summer, while the homeowner treats a carpet that was never the issue.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the short list that genuinely matters:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="sealed hepa vacuum crevice tool">Vacuum + crevice tool &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="airtight storage tote gasket lid">Sealed storage &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="carpet beetle pheromone trap">Monitors &rarr;</BuyLink>
          </div>

          <h2>Step 1 &mdash; Find the Keratin. This Is the Whole Job.</h2>
          <p>Carpet beetle larvae eat keratin and other animal-derived material. That is a much wider menu than the name suggests, and the carpet is often the least of it. Work through this list in the rooms where you have seen adults, in roughly this order, because the top three account for most of the hidden sources in Canadian homes:</p>
          <ul>
            <li><strong>Dead insects.</strong> The single most-missed source. Cluster flies, ladybugs, wasps and boxelder bugs that died in window channels, inside light fixtures and ceiling can-lights, along attic floors, in the sill of an unused basement window, or behind a baseboard are a permanent food supply. If your problem recurs in one room every year, look up.</li>
            <li><strong>Old bird, wasp, and rodent nests.</strong> A nest in a soffit, eave, gable vent, dryer vent, bathroom fan duct, or attic is a self-replenishing feeding station of feathers, hair, and dead insects. This is the source that makes people believe carpet beetles are &ldquo;impossible to get rid of.&rdquo; It is not impossible; it is in the roof.</li>
            <li><strong>Wool, silk, felt and fur you forgot about.</strong> A wool rug and especially its underpad, a stair runner, the felt in a piano, the horsehair or wool batting in an antique chair, an old fur collar, a felted hat, taxidermy, down jackets and feather pillows, a bag of yarn.</li>
            <li><strong>Hair and lint packed into edges.</strong> The dense line of shed human and pet hair, skin flakes and lint that accumulates in the carpet-to-baseboard gap, under the tack strip, and under furniture that never moves. In a home with no wool at all, this is often the entire food source.</li>
            <li><strong>Stored animal protein.</strong> Dried pet food, birdseed, and dried goods left in an opened bag rather than a sealed container.</li>
            <li><strong>Leather and leather-bound books</strong> in a basement or a rarely opened bookcase.</li>
          </ul>
          <p>Notice what is not on the list: clean synthetic carpet. Polyester and nylon are not food. Larvae do feed on synthetics that are soiled with sweat, body oils, or food residue, which is why the damage in a modern Canadian house is so often on the one wool item, or on a synthetic rug in the spot where the dog sleeps.</p>

          <h2>Step 2 &mdash; Vacuum Like You Mean It</h2>
          <p>Vacuuming is not the boring preamble to the real treatment. For carpet beetles, it is the treatment. It physically removes larvae, eggs, cast skins and the food layer simultaneously, and it is the only method on this page that does all three at once.</p>
          <p>What matters is where the nozzle goes, not what the machine cost. Larvae live at edges and in the dark, so the productive surfaces are: the carpet-to-baseboard strip along every wall, worked slowly with a crevice tool; under and behind furniture that has not moved in years; closet floors, closet shelf edges, and the corners behind hanging clothes; heating registers and cold-air return grilles, which quietly accumulate hair and dead insects; along and under the tack strip where the carpet meets the wall; the underside and frame of upholstered furniture; and the rug pile itself, gone over slowly in both directions rather than once at walking speed.</p>
          <p>Then empty it. Put the bag or canister contents straight into a sealed plastic bag and into the outdoor bin, because eggs and small larvae survive being vacuumed and a canister left in a warm utility room is simply a container of pest food. A sealed-HEPA machine is worth having for the specific reason that this job involves pulling fine debris and shed bristly hairs out of crevices, and a vacuum that leaks fines is putting the irritant straight back into the room. Our comparison of <Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">sealed-HEPA vacuums for insect work in Canada</Link> explains what &ldquo;sealed&rdquo; means on a spec sheet, and where the marketing word stops meaning anything.</p>
          <p>Repeat every few days for several weeks. You are not trying to win in one session &mdash; you are outlasting eggs you did not reach and larvae that were deep inside something when you passed over it.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="sealed hepa vacuum crevice tool">Check sealed-HEPA vacuums on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Step 3 &mdash; Heat, Freeze, or Dry-Clean What You Are Keeping</h2>
          <p>Every item you want to save needs one treatment that kills every life stage inside it, and you have four to choose from depending on what the item tolerates.</p>
          <p><strong>Hot wash and hot dry</strong> handles washable wool blends, blankets, linens and anything the care label permits. The tumble dryer is doing at least as much of the work as the wash. <strong>Dry cleaning</strong> kills every stage on a garment that cannot be washed, and is the low-risk answer for tailoring and delicate wool. <strong>Sustained deep freezing</strong> is the free option for items that fit in a freezer: seal them in a bag, press the air out, and leave them for a solid run of days rather than overnight &mdash; the cold has to reach the middle of a folded garment and stay there, and a brief chill kills nothing reliably. <strong>Steam</strong> is the answer for a wool rug, a stair runner or an upholstered chair, worked slowly enough to penetrate rather than skim, tested on a hidden corner first, and dried fully afterward.</p>
          <p>If an item is heavily infested, badly damaged and not valuable, the honest answer is to bag it and bin it rather than spend a weekend and a dry-cleaning bill saving a rug you did not like. A carpet beetle guide that never says that is selling you something.</p>

          <h2>Step 4 &mdash; Store It Clean and Sealed, or You Will Do This Again Next Year</h2>
          <p>This is the step that decides whether carpet beetles come back. A cleaned wool coat returned to an open closet shelf is simply available again, and open cardboard storage in a basement is both shelter and, in the case of hair and lint that collects inside it, food.</p>
          <p>Move seasonal wool, silk, fur and feather into airtight containers with proper gasketed lids, or into zippered garment bags for hanging items &mdash; and clean each item first. Sealing an unwashed sweater is sealing its eggs and its body-oil residue in with it. Vacuum the empty closet floor and shelf edges before you refill it. If your storage is in a damp Canadian basement, deal with the humidity at the same time, because the same conditions that suit mould and <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish</Link> are also the conditions that make stored textiles worth protecting; our <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier sizing guide</Link> covers that side of it.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="airtight storage tote gasket lid">Check airtight storage totes on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>What You Can Legally Buy in Canada &mdash; and What the Label Has to Say</h2>
          <p>Chemistry has a narrow supporting role here, and Canadian rules narrow it further. Any product sold or used as an insecticide in Canada must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency and carry a <strong>PCP registration number</strong> on the label. That label is legally binding: the pests it lists and the surfaces and use sites it names are what you may legally treat, and a product that is registered for crawling insects in cracks and crevices is not automatically registered for spraying over a rug you walk on.</p>
          <p>Within those limits, the two things worth considering are:</p>
          <ul>
            <li><strong>Registered insecticidal diatomaceous earth</strong> &mdash; Safer&rsquo;s Diatomaceous Earth is the one most widely stocked in Canada, with Knock Down and Doktor Doom Be Green as registered alternatives. It kills mechanically, by abrading and absorbing the waxy layer that holds an insect&rsquo;s moisture in, which means no resistance can develop and the powder does not expire. Its place in a carpet beetle job is the void: the gap behind a baseboard, the space under a tack strip, a crawl space edge. Buy a bulb duster with it, because a barely visible film is what works and a visible pile gets walked around. Check the label&rsquo;s pest list and use sites before you apply it &mdash; the mechanism being right does not make the application legal. Full grade and technique detail is in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">Canadian diatomaceous earth buyer&rsquo;s guide</Link>.</li>
            <li><strong>A registered crack-and-crevice residual</strong>, applied along carpet edges and baseboards <em>after</em> the vacuuming and laundering &mdash; and only if the Canadian label names carpet beetles and the surface you intend to treat. This is a mop-up for the gaps a nozzle cannot enter, not a substitute for finding the food source.</li>
          </ul>
          <p>Two products deserve a specific warning. <strong>Total-release foggers</strong> are close to worthless for carpet beetles: the fog settles on exposed horizontal surfaces, while the larvae are inside carpet pile, under the underpad, in closet corners and inside wall voids. You get the residue and none of the result. And <strong>mothballs</strong> are a pesticide in Canada, not a deodoriser &mdash; the registered products are labelled for use inside sealed containers where the vapour is contained, and scattering them loose in a closet, drawer, attic, or under a bed is both ineffective and a straightforward label violation, with a genuine inhalation exposure for the household. Cedar blocks and cedar chests sell on aroma; do not put one in place of cleaning and sealing.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Check Safer&rsquo;s DE and duster kits on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Keeping the Next Generation Out</h2>
          <p>Adults fly in from outdoors during flowering season, which makes a handful of unglamorous building fixes worth more than any repeat treatment. Repair or replace torn window and door screens. Screen the gable vents, soffit vents, and any dryer or bathroom fan outlet where a bird can nest &mdash; a quarter-inch galvanised hardware cloth is the standard material, and it solves the nest problem and the entry problem in one pass. Clear dead insects out of window channels and light fixtures once a season rather than once a decade. And if you have flowering shrubs directly against a bedroom window, be aware that is the doorway.</p>
          <p>The same exclusion pass pays for itself against the fall home-invader crowd that supplies the dead-insect food layer in the first place &mdash; <Link href="/blog/how-to-get-rid-of-cluster-flies-canada">cluster flies</Link>, <Link href="/blog/how-to-get-rid-of-boxelder-bugs-canada">boxelder bugs</Link>, and the gaps that also let <Link href="/blog/how-to-keep-spiders-out-of-your-house">spiders</Link> in every October.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="hardware cloth 1 4 inch galvanized mesh">Check hardware cloth on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>What Not to Buy</h2>
          <ul>
            <li><strong>Bug bombs and total-release foggers.</strong> Wrong physics for this pest, as above.</li>
            <li><strong>Ultrasonic plug-in repellers.</strong> No credible evidence for any household pest &mdash; we took the category apart in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>.</li>
            <li><strong>Cedar blocks, cedar hangers and cedar oil sprays as a cure.</strong> An aroma is not a control method, and an infested item does not become clean because it now smells of cedar.</li>
            <li><strong>Mothballs scattered loose.</strong> A pesticide used off-label, with the exposure and none of the effect.</li>
            <li><strong>A whole bed bug kit,</strong> bought because the larval bristles caused itchy bumps. Identify the insect before you spend the money.</li>
            <li><strong>A replacement rug,</strong> bought before you have found the source. The new rug is going into the same room as the old one.</li>
          </ul>

          <h2>When to Stop Buying and Call Someone &mdash; and Which Trade</h2>
          <p>Carpet beetles are one of the more genuinely DIY-solvable household pests, because the fix is finding an object rather than deploying a chemical. BuzzSkito treats mosquitoes and ticks and does not sell carpet beetle service, so there is nothing to be gained here by pretending otherwise: for most Canadian households, a vacuum with a crevice tool, a laundry weekend and a set of sealed totes ends it, and a recurring spray program that never locates the source is a subscription.</p>
          <p>Three situations do warrant a call, and in two of them the right trade is not an exterminator. If the source turns out to be a bird, rodent or wasp nest inside a soffit, wall, or attic, you want an <strong>exclusion or wildlife contractor</strong> who will remove the nest and screen the opening &mdash; spraying around a nest that stays in place changes nothing. If serious textiles are involved &mdash; an antique rug, a heritage garment, an archive &mdash; you want a <strong>conservator or specialist cleaner</strong>, not a general treatment. And in a rental or condo where the source sits inside a unit or a common space you do not control, the useful call is to the property manager first. For sanity-checking any quote you do receive, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what general interior work typically runs.</p>

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
            <li><strong>Ruled out carpet beetles?</strong> <Link href="/blog/how-to-check-for-bed-bugs-canada">How to Check for Bed Bugs in Canada &mdash; The Inspection That Settles It</Link></li>
            <li><Link href="/blog/best-hepa-vacuum-for-bed-bugs-and-fleas-canada">Best Sealed-HEPA Vacuum for Insect Work in Canada</Link></li>
            <li><Link href="/blog/best-bed-bug-detector-canada">Bed Bug Detectors in Canada &mdash; What Actually Confirms an Infestation</Link></li>
            <li><Link href="/blog/tick-vs-bed-bug">Tick vs Bed Bug &mdash; Telling the Look-Alikes Apart</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada &mdash; Which Brands Are PMRA-Registered</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada &mdash; The Humidity Fix</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cluster-flies-canada">How to Get Rid of Cluster Flies in Canada</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Work? The Honest Answer</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada &mdash; What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
      </article>

      <CTASection
        heading="Mosquitoes and Ticks Are Our Actual Job"
        subtext="We don't treat carpet beetles — but if the yard is unusable in June and July, that is the problem we are licensed for. Free assessment across 19 GTA cities."
      />
    </>
  )
}
