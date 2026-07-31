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

const SLUG = 'what-does-mouse-poop-look-like-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// Identification + safe-cleanup page. Top-of-funnel into the existing rodent cluster:
// how-to-get-rid-of-mice-canada owns the removal protocol, best-mouse-trap-canada owns
// the trap comparison, rodent-exclusion-kit-canada owns the hardware spec. This page
// deliberately does NOT re-teach any of those.
//
// MONETISATION NOTE: cleanup PPE (gloves, respirator, disinfectant) is Health & Household
// at 3%. Traps and exclusion hardware are 6%. The lead is deliberately the trap, which is
// also the honest next step — and a sealed-HEPA vacuum is explicitly NOT recommended for
// dry droppings, because public-health cleanup guidance says do not vacuum or sweep them.
const TITLE = 'What Does Mouse Poop Look Like? — The Canadian ID Guide, and the Cleanup Order That Matters'
const META_TITLE = 'What Does Mouse Poop Look Like? Canada Guide'

const FAQS = [
  {
    question: 'What does mouse poop look like?',
    answer: 'Small dark pellets roughly 3–6 mm long — about the size of a grain of rice — tapered to a point at both ends, and scattered rather than piled. Fresh droppings are dark brown to black, slightly soft, and have a faint sheen; as they age they fade toward grey, dry out, and crumble when pressed with a stick. The scattering is as diagnostic as the shape: a mouse produces dozens of droppings a day and deposits them continuously as it travels, so you find them strung along a wall edge, inside a drawer, at the back of a cupboard and behind the stove rather than concentrated in one spot.',
  },
  {
    question: 'How do I tell mouse droppings from rat droppings?',
    answer: 'Size settles it immediately. Mouse droppings are 3–6 mm; rat droppings are roughly 12–19 mm, two to three times longer and noticeably thicker — closer to an olive pit or a large grain of rice than to a rice grain. Shape helps too: mouse pellets taper to a point at both ends, while Norway rat droppings are blunt and capsule-shaped. Distribution differs as well. Mice scatter droppings everywhere they walk; rats tend to deposit in a smaller number of heavier concentrations along established runs. If you are finding large blunt pellets, stop reading mouse advice — rats need bigger traps, heavier bait placement and a different exclusion standard.',
  },
  {
    question: 'How can I tell if mouse droppings are fresh or old?',
    answer: 'Colour, moisture and a simple time test. Fresh droppings are dark, slightly soft and faintly shiny; within a few days they dull, harden and pale toward grey, and old ones crumble to dust when pressed. Never test with bare fingers — use a stick or the tip of a screwdriver. The far better method costs nothing: clean an area completely, note the date, and check it again in 48 hours. New droppings in a cleaned area mean an active infestation right now; nothing new after several days in a well-travelled area suggests you are looking at a historical problem. That single test is more reliable than any judgement about colour.',
  },
  {
    question: 'Is mouse poop dangerous to humans in Canada?',
    answer: 'It deserves respect and a proper cleanup, and the Canadian risk picture is more specific than most articles suggest. Hantavirus in Canada is associated with the deer mouse, a wild species of fields, woodlots, cabins, sheds and outbuildings — not with the house mouse that lives in urban kitchens and walls. Canadian cases are rare and concentrated in the western provinces, and the recognised exposure route is disturbing contaminated dust in an enclosed, poorly ventilated space such as a cabin or barn opened after a long closure. House mice carry their own concerns — salmonella contamination of food-contact surfaces, lymphocytic choriomeningitis virus, and mouse allergens that are a recognised asthma trigger. Both scenarios point to the same conclusion: wet the material down and wipe it up rather than raising dust.',
  },
  {
    question: 'Should I vacuum up mouse droppings?',
    answer: 'No — this is the single most important line on the page. Public-health cleanup guidance is explicit that you should not sweep or vacuum dry rodent droppings, urine or nesting material, because both actions aerosolise fine contaminated dust and put it into the air you are breathing. That applies to ordinary vacuums and to HEPA machines alike; the problem is the disturbance, not the filter. The correct sequence is to ventilate the space first, wear gloves and a fitted respirator, spray the droppings with disinfectant until they are visibly wet, leave them to soak for about five minutes, and then wipe them up with paper towel and bag the waste.',
  },
  {
    question: 'What is the correct way to clean up mouse droppings?',
    answer: 'Open windows and doors and leave the space to air out for about half an hour before you start, and stay out of it while it does. Put on disposable gloves and a properly fitted respirator. Spray the droppings, urine stains and nesting material with a disinfectant or a freshly mixed bleach solution — roughly one part household bleach to nine parts water — until thoroughly wet, and let it sit about five minutes. Wipe everything up with paper towel, place it in a plastic bag, seal it, put that bag inside a second bag and dispose of it in an outdoor bin. Disinfect the surrounding surfaces and any counters or floors nearby, steam-clean or shampoo affected carpet and upholstery rather than vacuuming it, launder exposed textiles on a hot cycle, then remove the gloves and wash your hands thoroughly.',
  },
  {
    question: 'Where will I find mouse droppings in a house?',
    answer: 'Along the routes mice actually use, which are edges rather than open floor. Look at the base of walls behind and under kitchen units, inside the cabinet under the sink, at the back of pantry shelves and inside drawers, behind and underneath the stove, fridge and dishwasher, in the void under a kitchen toe-kick, along basement sill plates, inside the garage against the walls, in stored cardboard boxes, and in attic insulation. Droppings mark the runway, which makes them the most useful piece of information you have — every trap you set should go where the droppings are, because that is a route the mice have already chosen.',
  },
  {
    question: 'What else looks like mouse droppings?',
    answer: 'Four things, regularly. Bat guano is similar in size but accumulates in piles beneath a roost rather than scattering, and crumbles into glittering specks of insect exoskeleton — the sparkle is the giveaway. Cockroach droppings from smaller species look like coarsely ground pepper or coffee grounds, and larger species leave cylindrical pellets with lengthwise ridges that rodent droppings never have. Squirrel droppings are bigger, more barrel-shaped with rounded ends, and usually found in an attic alongside far more obvious damage. And plain debris fools people constantly: spilled coffee grounds, poppy or chia seeds, mouse-sized chunks of potting soil and rodent-shaped bits of dried mud have all sent people down this rabbit hole.',
  },
  {
    question: 'How many droppings does one mouse leave?',
    answer: 'Dozens a day, continuously, which is why a small number of animals produces an alarming amount of evidence. Mice defecate as they travel rather than in fixed latrines, and they also dribble urine more or less constantly, so a single mouse working a kitchen overnight can leave droppings in four or five separate places. The practical consequence is that quantity is a poor guide to population size. A heavy scatter does not necessarily mean a dozen mice, and a light scatter does not mean you caught it early. Use the 48-hour cleaned-area test to judge whether the problem is active, and use the trap catch rate to judge how big it is.',
  },
  {
    question: 'I found droppings but no mice — do I still have a problem?',
    answer: 'Run the test before deciding. Clean the area completely, date it, and check again in 48 hours and then at a week. Fresh droppings in a cleaned area mean live animals now, and you should trap and seal. Nothing new after a week in an area mice would be using suggests a past problem — a mouse that came in over one cold snap and was killed, or a population removed by a previous owner. Either way the sealing work is worth doing, because an opening that admitted one mouse will admit the next one, and autumn in Canada is when that gets tested.',
  },
  {
    question: 'When should I stop cleaning and call someone?',
    answer: 'When the contamination is in the building rather than on it. Droppings and urine through attic insulation mean the insulation is a remediation job, not a wipe-down: it needs removing and replacing by someone equipped for it, and that work is usually cheaper done properly once than attempted twice. The same applies to a crawl space you cannot stand up in, any HVAC ductwork with droppings inside it, a heavy accumulation in an enclosed space that has been closed up for a long period, and any food premises where contamination is a compliance issue. A kitchen with a scatter of droppings under the sink is a homeowner job. A soiled attic is not.',
  },
  {
    question: 'Does BuzzSkito handle rodent problems?',
    answer: 'No. BuzzSkito is a licensed mosquito and tick control company serving the GTA, and this guide is independent research published by our writing team rather than a service page. For rodents you want a licensed structural pest control operator, and specifically one who does exclusion work — sealing the building — rather than one who only places bait, because bait alone leaves the entry points that produced the problem. We publish this material because identification and safe cleanup are where homeowners most often get bad advice, and because the correct first move here is genuinely free.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'What does mouse poop look like? Dark rice-grain pellets 3-6 mm, pointed at both ends — and how to tell them from rat, bat and roach droppings.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function WhatDoesMousePoopLookLikeCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian identification guide to mouse droppings: size, shape and scatter pattern, fresh versus old, the 48-hour activity test, how they differ from rat, bat, squirrel and cockroach droppings, the Canadian health risk picture, and the wet-then-wipe cleanup protocol that replaces sweeping and vacuuming.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Does Mouse Poop Look Like?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">What Does Mouse Poop Look Like?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Dark, rice-sized, pointed at both ends, and scattered along the wall rather than piled. Here is how to tell them from rat, bat and cockroach droppings &mdash; and why the first thing you should <em>not</em> do is reach for the vacuum.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Victor snap traps (what to buy once you've confirmed it)" search="victor mouse trap 4 pack" label="The next step after ID" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Mouse droppings are dark pellets about <strong>3&ndash;6 mm long &mdash; roughly a grain of rice &mdash; tapered to a point at both ends</strong>, and <strong>scattered</strong> along walls, in drawers and behind appliances rather than piled in one place. Fresh ones are dark, slightly soft and faintly shiny; old ones are grey, dry and crumble. Rat droppings are two to three times larger with blunt ends. <strong>Do not sweep or vacuum them.</strong> Ventilate the room, wear gloves and a fitted respirator, wet the droppings thoroughly with disinfectant, leave five minutes, then wipe up with paper towel and double-bag the waste.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Mouse: 3&ndash;6 mm, pointed both ends, scattered.</strong> <strong>Rat: 12&ndash;19 mm, blunt, concentrated.</strong> That one comparison answers most searches.</li>
              <li><strong>The 48-hour test beats guessing.</strong> Clean an area completely, date it, come back. New droppings mean an active problem right now.</li>
              <li><strong>Bat guano</strong> piles under a roost and crumbles into glittering specks. <strong>Cockroach frass</strong> looks like ground pepper or has lengthwise ridges.</li>
              <li><strong>Never vacuum dry droppings</strong> &mdash; not even with a HEPA machine. The hazard is the dust you raise, not the filter you have.</li>
              <li><strong>Canadian risk note:</strong> hantavirus here is associated with the wild deer mouse in cabins, sheds and outbuildings, not with urban house mice.</li>
              <li><strong>Droppings mark the runway.</strong> Wherever you found them is exactly where your traps belong.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="mice" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Identification Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Whose Droppings Are These?</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Size first, then shape, then the pattern they are lying in. The pattern is the part most guides leave out and it is often the fastest tell.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Animal</th>
                  <th className="px-4 py-3 text-left">Size</th>
                  <th className="px-4 py-3 text-left">Shape &amp; look</th>
                  <th className="px-4 py-3 text-left">Pattern and place</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">House mouse</td>
                  <td className="px-4 py-3 text-gray-700">3&ndash;6 mm</td>
                  <td className="px-4 py-3 text-gray-700">Pointed at both ends, dark brown to black, slightly shiny when fresh</td>
                  <td className="px-4 py-3 text-gray-700">Scattered widely along wall edges, in drawers, behind appliances</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Rat</td>
                  <td className="px-4 py-3 text-gray-700">12&ndash;19 mm</td>
                  <td className="px-4 py-3 text-gray-700">Much thicker; blunt, capsule-shaped ends on the Norway rat</td>
                  <td className="px-4 py-3 text-gray-700">Fewer, heavier concentrations along established runs</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bat</td>
                  <td className="px-4 py-3 text-gray-700">Similar to a mouse</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Crumbles into glittering specks</strong> &mdash; insect wing and shell fragments</td>
                  <td className="px-4 py-3 text-gray-700">Accumulated in a pile directly under a roost, in an attic or soffit</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Squirrel</td>
                  <td className="px-4 py-3 text-gray-700">8&ndash;10 mm</td>
                  <td className="px-4 py-3 text-gray-700">Barrel-shaped with rounded ends, often paler and duller</td>
                  <td className="px-4 py-3 text-gray-700">Attics, alongside chewed wood, shredded insulation and daytime noise</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Cockroach (small species)</td>
                  <td className="px-4 py-3 text-gray-700">Speck-sized</td>
                  <td className="px-4 py-3 text-gray-700">Like coarsely ground black pepper or coffee grounds; smears</td>
                  <td className="px-4 py-3 text-gray-700">Corners of cupboards, hinge lines, behind the fridge and dishwasher</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Cockroach (large species)</td>
                  <td className="px-4 py-3 text-gray-700">Up to ~8 mm</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Lengthwise ridges</strong> and blunt ends &mdash; rodent pellets never have ridges</td>
                  <td className="px-4 py-3 text-gray-700">Basements, drains, boiler rooms, damp voids</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Not an animal at all</td>
                  <td className="px-4 py-3 text-gray-700">Varies</td>
                  <td className="px-4 py-3 text-gray-700">Spilled coffee grounds, chia or poppy seeds, dried potting soil, mud</td>
                  <td className="px-4 py-3 text-gray-700">Under a coffee machine, near a plant pot, by a back door</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Sizes are typical ranges. If you find pellets in the gap between the mouse and rat sizes, treat it as rats until proven otherwise &mdash; a rat plan works against mice, but a mouse plan does not work against rats.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50 to-white border-y border-amber-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Safety First</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">The Cleanup Protocol &mdash; Wet It, Wipe It, Bag It</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            This is the standard sequence published by public-health agencies for rodent droppings, urine and nesting material. The order matters more than the products.
          </p>
          <ol className="space-y-3 text-[15px] text-gray-800 list-decimal pl-5">
            <li><strong>Ventilate before you enter.</strong> Open windows and doors, leave the space, and give it about thirty minutes. This matters most in a shed, cabin, crawl space or attic that has been closed up.</li>
            <li><strong>Gloves and a fitted respirator.</strong> Disposable gloves and a respirator that seals against your face. A loose surgical mask is not the same thing.</li>
            <li><strong>Wet everything thoroughly.</strong> Spray droppings, urine staining and nesting material with a disinfectant or a freshly mixed solution of roughly one part household bleach to nine parts water. Soak them &mdash; do not mist.</li>
            <li><strong>Wait about five minutes.</strong> This is the step people skip, and it is the one doing the work.</li>
            <li><strong>Wipe up with paper towel.</strong> Not a brush, not a broom, not a vacuum.</li>
            <li><strong>Double-bag and remove.</strong> Seal the waste in a plastic bag, put that inside a second bag, and put it straight into an outdoor bin.</li>
            <li><strong>Disinfect the area around it</strong> &mdash; counters, floors, cupboard interiors, anything a mouse walked across.</li>
            <li><strong>Steam-clean or shampoo</strong> affected carpet and upholstery instead of vacuuming, and launder exposed textiles on a hot cycle.</li>
            <li><strong>Gloves off last, then wash your hands</strong> thoroughly with soap and water.</li>
          </ol>
          <div className="mt-5 rounded-xl bg-white border-l-4 border-red-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-red-800">⚠️ Do not sweep and do not vacuum dry droppings</strong> &mdash; and that includes a HEPA vacuum. The hazard is the fine contaminated dust that both actions throw into the air you are standing in, not the quality of the filter on the machine. A sealed-HEPA vacuum has a genuine role in a rodent-affected home, but it comes <em>after</em> the wet cleanup, for ongoing allergen control &mdash; never as the first tool you reach for.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="What to Buy Once the Identification Is Settled"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Victor Snap Traps (Multi-Pack)',
                why: 'Droppings tell you where the mice travel, which is the hardest part of trapping already solved. Set traps directly in the runway the droppings mark, trigger end against the baseboard, and buy far more than feels reasonable — house mice are inquisitive rather than trap-shy and have a small home range, so a dense line set all at once usually delivers its biggest catch on the first night.',
                search: 'victor mouse trap 4 pack',
                featured: true,
                pros: ['Immediate, countable result you can see', 'No poison in the house and no carcass in a wall void', 'Placement is already decided by the droppings'],
                cons: ['You have to check and reset them', 'Wrong tool if the pellets turn out to be rat-sized'],
              },
              {
                badge: 'Best Permanent Fix',
                name: 'Coarse Stainless Steel Wool + Copper Mesh Fill',
                why: 'Trapping without sealing just creates a vacancy. A mouse needs about 6 mm — the width of a pencil — and mice chew through foam, plastic and wood but not through packed metal fibre. Pack it tight into gaps at pipe and cable penetrations, sill plate seams and weep holes, then cap with exterior sealant so it cannot be worked loose.',
                search: 'stainless steel wool rodent exclusion',
                pros: ['Permanent, no reapplication, no label rules', 'Attacks the entry rather than the animal', 'Cheap per opening'],
                cons: ['The perimeter survey takes longer than the sealing', 'Needs sealant over it to stay put'],
              },
              {
                badge: 'Best for Larger Openings',
                name: '¼-Inch Galvanized Hardware Cloth',
                why: 'Steel wool handles a pipe gap; hardware cloth handles a vent, a crawl space opening, a weep-hole run, or the gap where a deck ledger meets the wall. Quarter-inch is the mesh size that stops a mouse. Screen vents rather than sealing them — they need the airflow — and this is the item that converts a yearly autumn problem into a solved one.',
                search: 'hardware cloth 1/4 inch galvanized',
                pros: ['Permanent fix for openings too big to stuff', 'Also excludes rats, chipmunks and nesting birds', 'Survives weather and chewing'],
                cons: ['Tin snips, gloves and patience required', 'Must not block required ventilation'],
              },
              {
                badge: 'Required, Not Optional',
                name: 'Fitted Respirator + Disposable Gloves + Disinfectant',
                why: 'The cheapest items here and the ones you should not skip. A respirator that actually seals to your face, a box of disposable gloves, and a disinfectant spray or fresh bleach solution are what make the wet-then-wipe protocol above safe to carry out. A loose surgical mask does not seal and is not a substitute. Buy these before you touch anything, not after.',
                search: 'n95 respirator masks niosh',
                pros: ['Makes the correct cleanup method possible', 'Cheap, and useful long after this job', 'Gloves and disinfectant you likely half-own already'],
                cons: ['A respirator only works if it seals — facial hair defeats it', 'Not a licence to sweep or vacuum; the method still stands'],
              },
              {
                badge: 'Only After the Wet Cleanup',
                name: 'Sealed-System HEPA Vacuum',
                why: 'Deliberately placed last, with a condition attached: never use this on dry droppings. Its role is ongoing allergen control in a home that had a rodent problem — mouse allergens are a recognised asthma trigger and persist in dust long after the animals are gone — and general cleaning once the contaminated material has been wetted, wiped and bagged. A sealed system matters because an unsealed machine leaks fine dust past the filter.',
                search: 'hepa vacuum sealed system canister',
                pros: ['Genuine allergen benefit after the cleanup is done', 'A sealed system stops fine dust bypassing the filter', 'Useful for dust mites and general indoor air quality'],
                cons: ['Absolutely not for dry droppings — wet-wipe those first', 'The most expensive item here and the least urgent'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Fresh droppings, active problem?</strong> Respirator and gloves first, then traps, then the sealing hardware &mdash; in that order, and ideally on the same day. <strong>Pellets look too big?</strong> Stop and read <Link href="/blog/how-to-get-rid-of-rats-canada">the rat guide</Link>; a mouse plan does not scale up. <strong>Piles under a spot in the attic that sparkle when crumbled?</strong> That is bat guano, several Ontario bat species are protected, and it is a licensed wildlife job rather than a hardware run. <strong>Old, grey, crumbling droppings and nothing new after a week?</strong> Clean up properly and spend the rest of the money on sealing, because the opening is still there. <strong>Wondering whether a repellent would be simpler?</strong> It would not &mdash; see <Link href="/blog/mouse-repellent-canada">what mouse repellents actually do</Link>.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Mouse Droppings Actually Look Like</h2>
          <p>A house mouse dropping is a dark pellet about the size of a grain of rice &mdash; roughly 3 to 6 millimetres long and a millimetre or two across &mdash; that <strong>tapers to a point at both ends</strong>. Fresh, it is dark brown to black, slightly soft, and carries a faint sheen. As it dries it loses that sheen, hardens, and fades toward a dull grey, and an old dropping crumbles to powder under pressure.</p>
          <p>The detail that identifies the animal as reliably as the pellet does is <strong>the scatter</strong>. Mice do not use latrines. They defecate continuously as they move, dozens of times a day, so the evidence appears strung along the routes they travel rather than gathered in one place: a line of pellets against the back edge of a countertop, a handful inside a cutlery drawer, a scatter at the back of a pantry shelf, more under the sink and behind the stove. If you are finding small dark pellets in four different rooms, that is one mouse behaving normally rather than four separate problems.</p>
          <p>Alongside the droppings, look for the other traces that confirm it: <strong>urine staining</strong>, since mice dribble more or less constantly as they travel; <strong>grease marks</strong>, dark smudges where oily fur repeatedly brushes the same corner or gap edge; <strong>gnaw marks</strong> with fine parallel tooth grooves on cardboard, food packaging and soft plastic; and <strong>nesting material</strong>, which is shredded paper, insulation, fabric or cardboard packed into a hidden cavity. In long-running infestations, urine and body oils combine with dust into small hardened mounds sometimes called urine pillars &mdash; a sign of a population that has been established for a while rather than a recent arrival.</p>
          <p>A note on ultraviolet lights, which get recommended a lot: rodent urine does fluoresce, but so do a great many ordinary household residues, detergents, adhesives and cleaning products. A UV torch is a reasonable way to decide where to look more closely. It is not proof on its own.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">If the droppings are fresh, these are the three purchases in the order they should happen:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="n95 respirator masks niosh">Respirator &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="victor mouse trap 4 pack">Snap traps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="stainless steel wool rodent exclusion">Exclusion fill &rarr;</BuyLink>
          </div>

          <h2>Fresh or Old? The 48-Hour Test That Beats Guessing</h2>
          <p>Whether the droppings are recent decides everything that follows, and the visual cues &mdash; dark and soft versus grey and crumbly &mdash; are softer evidence than they look. Humidity changes how fast a dropping dries, a pellet in a warm cupboard ages differently from one in a cold garage, and a great many people convince themselves that a two-month-old dropping is fresh because the light was poor.</p>
          <p>So run the test instead. Clean an affected area completely, using the wet-and-wipe protocol above, and write the date on a piece of tape stuck nearby. Check it at 48 hours and again at a week.</p>
          <ul>
            <li><strong>New droppings within 48 hours:</strong> an active infestation, right now. Trap and seal, and do it this week rather than next.</li>
            <li><strong>Nothing after a week</strong> in an area mice would plainly be using: most likely a historical problem &mdash; a single animal that came in during a cold snap and died or left, or a population dealt with by a previous occupant.</li>
            <li><strong>A single new dropping in a week:</strong> ambiguous, and worth extending to a fortnight with a couple of unset traps left in place as sentinels. One mouse is a real problem in an autumn.</li>
          </ul>
          <p>Never test a dropping by squeezing it between your fingers, which is advice that circulates surprisingly widely. Use a stick or the tip of a screwdriver you can throw away.</p>

          <h2>The Health Picture in Canada, Told Accurately</h2>
          <p>Most articles on this subject open with hantavirus and leave the reader considerably more frightened than the Canadian facts warrant. Here is the more useful version.</p>
          <p><strong>Hantavirus in Canada is associated with the deer mouse</strong> &mdash; a wild native species that lives in fields, woodlots, cabins, sheds, barns and outbuildings &mdash; rather than with the house mouse that lives in urban kitchens and wall voids. Canadian cases are rare and have been concentrated in the western provinces, and the recognised exposure pattern is disturbing contaminated dust in an enclosed, poorly ventilated space that has been shut up for a period: opening a cabin in spring, cleaning out a shed, sweeping a barn floor. That pattern is precisely why &ldquo;ventilate first, wet it down, never sweep&rdquo; is the standard guidance, and why the guidance is worth following even when the odds are low.</p>
          <p><strong>House mice bring their own list</strong>, which is less dramatic and more likely to matter to a suburban household: salmonella and other bacteria tracked across food-contact surfaces, lymphocytic choriomeningitis virus, and mouse allergen &mdash; a well-recognised asthma trigger that accumulates in house dust and lingers long after the mice are gone. There is also a real secondary consideration: mice can carry fleas and mites, which is one route by which a rodent problem turns into an insect problem.</p>
          <p>All of which converges on one practical instruction rather than a risk score. Do not raise dust. Wet the material, wipe it up, bag it, and wash your hands.</p>

          <h2>Where the Droppings Are Telling You to Look</h2>
          <p>Droppings are the most useful diagnostic you will get, because they map the runway. Mice travel along edges rather than across open floor &mdash; a behaviour called thigmotaxis, keeping a body surface in contact with something solid &mdash; and they have a small home range, often only a few metres across in a food-rich building. Every trap you set should therefore go where you found pellets, oriented with the trigger end against the wall.</p>
          <p>The places worth checking, roughly in order of hit rate in a Canadian house: under the kitchen sink and inside the cabinet beneath it; behind and underneath the stove, fridge and dishwasher; the void behind a kitchen toe-kick; the backs of pantry shelves and inside cutlery drawers; along basement sill plates and joist ends; inside the garage against the walls and behind stored boxes; inside stored cardboard, which is nesting material and shelter in one; and in attic insulation, where droppings will be sitting on the surface rather than mixed through it if the problem is recent.</p>
          <p>The presence of droppings in an attic or a wall void changes the job. That is not a wipe-down; contaminated insulation needs removing and replacing, which is remediation work rather than pest work, and it is one of the few rodent situations where hiring someone is straightforwardly cheaper than the alternative.</p>

          <h2>What to Do Next &mdash; and What Not to Buy</h2>
          <p>Once you have confirmed active mice, the sequence is short and none of it is exotic. Clean up properly using the protocol above. Set a dense snap-trap line in the runways the droppings revealed, all at once rather than a couple at a time. Then seal every gap of about 6 mm or wider with coarse stainless steel wool or copper mesh capped with sealant, and screen anything larger with quarter-inch hardware cloth. The full removal sequence is in <Link href="/blog/how-to-get-rid-of-mice-canada">how to get rid of mice in Canada</Link>, the trap models are compared in <Link href="/blog/best-mouse-trap-canada">the best mouse trap guide</Link>, and the hardware list room by room is in the <Link href="/blog/rodent-exclusion-kit-canada">rodent exclusion kit guide</Link>.</p>
          <p>Things to leave on the shelf:</p>
          <ul>
            <li><strong>Ultrasonic plug-in repellers.</strong> They do not reach into the wall voids where mice live, and the animals habituate. See <Link href="/blog/ultrasonic-pest-repellers-do-they-work">the evidence review</Link>.</li>
            <li><strong>Peppermint sachets as a substitute for sealing.</strong> A narrow use in a sealed, unoccupied space; useless in a lived-in house. We go through why in <Link href="/blog/mouse-repellent-canada">the mouse repellent guide</Link>.</li>
            <li><strong>Mothballs.</strong> Scattering them in an attic or crawl space is off-label use of a registered pesticide and a genuine inhalation hazard.</li>
            <li><strong>Rodenticide as a first move.</strong> Poison should be a considered step in specific situations, not the reflex purchase &mdash; a mouse dying inside a wall is a smell and a beetle problem you did not have before. Much of what American guides recommend also cannot legally be sold to Canadian consumers; see <Link href="/blog/rat-poison-canada-what-is-legal">what rat poison is legal in Canada</Link>.</li>
            <li><strong>A vacuum, for the droppings themselves.</strong> Worth repeating one final time, because it is the mistake this page exists to prevent.</li>
          </ul>

          <h2>When to Stop and Call Someone</h2>
          <p>A scatter of droppings under a kitchen sink is a homeowner job, and a competent afternoon of trapping and sealing usually ends it. Four situations are genuinely cheaper handed over: <strong>contaminated attic or wall insulation</strong>, which needs removal and replacement rather than cleaning; <strong>a crawl space</strong> you cannot work in safely or ventilate properly; <strong>droppings inside HVAC ductwork</strong>, where the contamination is being distributed by the system itself; and <strong>any food premises</strong>, where the issue is a compliance matter and not a preference. Add a fifth if your building has shared walls, because your sealing work redirects mice rather than removing them and the fix has to be building-wide.</p>
          <p>And if the material in your attic turns out to be bat guano rather than mouse droppings &mdash; small piles under a specific spot, crumbling into glittering fragments &mdash; stop entirely. Several bat species in Ontario are protected, the young are flightless in the roost through the summer, and sealing a roost at the wrong time of year is both illegal and a worse problem than the one you started with. That is a licensed wildlife professional&rsquo;s job.</p>
          <p>For a sense of what pest work costs in Canada so you can sanity-check a quote, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>. And the disclosure that shapes this page: <strong>BuzzSkito does not do rodent work</strong> &mdash; we treat mosquitoes and ticks &mdash; so nothing above is written to route you toward a service we sell.</p>

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
            <li><strong>Confirmed it is mice? Start here:</strong> <Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada — The Full Sequence</Link></li>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Traps in Canada — Snap, Electronic and Live-Catch Compared</Link></li>
            <li><Link href="/blog/rodent-exclusion-kit-canada">Rodent Exclusion Kit — The Hardware Spec, Room by Room</Link></li>
            <li><Link href="/blog/mouse-repellent-canada">Mouse Repellent in Canada — What Actually Works</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-rats-canada">How to Get Rid of Rats in Canada — If the Pellets Are Bigger</Link></li>
            <li><Link href="/blog/mouse-bait-station-canada">Mouse Bait Stations — When Enclosed Bait Beats a Trap</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-house-winter">Keeping Mice Out Over Winter</Link></li>
            <li><Link href="/blog/rat-poison-canada-what-is-legal">What Rat Poison Is Legal in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cockroaches-canada">How to Get Rid of Cockroaches — If the Specks Have Ridges</Link></li>
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
        heading="Mosquitoes and Ticks Are Our Actual Job"
        subtext="We don't do rodent work — but the clutter, moisture and gaps that invite mice are the same conditions driving mosquito and tick pressure outside. Free assessment across 19 GTA cities."
      />
    </>
  )
}
