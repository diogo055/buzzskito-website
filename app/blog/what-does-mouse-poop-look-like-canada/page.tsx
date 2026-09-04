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
import Figure from '@/components/Figure'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'what-does-mouse-poop-look-like-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-09-02'
// Identification + safe-cleanup page. Top-of-funnel into the existing rodent cluster:
// how-to-get-rid-of-mice-canada owns the removal protocol, best-mouse-trap-canada owns
// the trap comparison, rodent-exclusion-kit-canada owns the hardware spec. This page
// deliberately does NOT re-teach any of those.
//
// MONETISATION NOTE: cleanup PPE (gloves, respirator, disinfectant) is Health & Household
// at 3%. Traps and exclusion hardware are 6%. The lead is deliberately the trap, which is
// also the honest next step — and a sealed-HEPA vacuum is explicitly NOT recommended for
// dry droppings, because public-health cleanup guidance says do not vacuum or sweep them.
const TITLE = 'What Does Mouse Poop Look Like? Size, Shape, Fresh vs Old, and Safe Cleanup'
const META_TITLE = 'Mouse Poop: 3-6 mm, Pointed — Fresh or Old?'

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
    question: 'How can I tell if droppings are from mice?',
    answer: 'Three checks, in this order. Size: 3–6 mm, about 1/8 to 1/4 inch, roughly a grain of rice. Shape: tapered to a point at both ends — not blunt, not ridged, and with no chalky white cap on either end. Pattern: scattered along wall edges, inside drawers and behind appliances rather than piled in one spot, because mice defecate continuously as they travel instead of using a latrine. If all three match, it is mice. Blunt pellets two to three times larger are rats; a pile that crumbles into glittering specks is bat guano; a pellet with a white tip at one end is a lizard, not a rodent.',
  },
  {
    question: 'How big is mouse poop in inches?',
    answer: 'About 1/8 to 1/4 inch long — 3 to 6 mm — and roughly a millimetre or two across, which is why "the size of a grain of rice" is the comparison that keeps coming up. State cooperative extension publications, including Nebraska Extension G1105, give the same 1/8- to 1/4-inch range for the house mouse. Rat droppings for contrast are roughly 1/2 to 3/4 inch (12–19 mm) and blunt rather than pointed, and squirrel droppings sit in between at about 3/8 inch. If a pellet is clearly longer than a grain of rice, stop reading mouse advice and switch to rat advice.',
  },
  {
    question: 'How can I tell if I have a mouse in my house?',
    answer: 'Droppings are the first sign but rarely the only one. Look for urine staining and a faint musky ammonia smell, dark grease marks where oily fur brushes the same corner or gap edge repeatedly, fine parallel gnaw grooves on cardboard and food packaging, shredded paper, fabric or insulation packed into a hidden cavity, and scratching or scurrying in walls and ceilings after dark. Then confirm activity rather than assuming it: clean one area completely, write the date on a piece of tape nearby, and check again in 48 hours. New droppings in a cleaned area mean live mice now, which is the only version of this question worth acting on.',
  },
  {
    question: 'What should you do if you see mouse droppings?',
    answer: 'Do not sweep them and do not vacuum them. Ventilate the room for about 30 minutes and stay out while it airs, then put on disposable gloves and a fitted respirator, spray the droppings until visibly wet with an EPA-registered disinfectant or a fresh bleach solution, wait five minutes, wipe up with paper towel and double-bag the waste. That is the sequence the CDC publishes for cleaning up after rodents. Then treat the location itself as information: droppings mark a route the mice already use, so that spot is exactly where your traps and your sealing work belong.',
  },
  {
    question: 'What disinfectant should I use on mouse droppings?',
    answer: 'An EPA-registered disinfectant — that is the CDC’s own wording — or a freshly mixed household bleach solution. The CDC gives the bleach mixture two ways so you can use whichever is easier at your sink: 1 part bleach to 9 parts water, or 1.5 cups of household bleach in 1 gallon of water. Mix it fresh, spray until the droppings, urine staining and nesting material are visibly wet rather than misted, and let it soak about five minutes before wiping with paper towel. Never mix bleach with ammonia or with another cleaning product, and ventilate while you work.',
  },
  {
    question: 'Why do I see mouse poop but no mice?',
    answer: 'Because mice are nocturnal, they travel with a body surface against something solid rather than across open floor, and a house mouse can pass through a gap of about 6 mm — a quarter inch. They move through cabinet backs, wall voids and joist bays while you are asleep. Finding droppings without seeing an animal is the normal case, not the exception, and seeing one in daylight in a lit room usually signals a larger population or a disturbed nest rather than a lucky sighting. The other possibility is that the droppings are historical, which the 48-hour cleaned-area test settles for free.',
  },
  {
    question: 'What can be mistaken for mouse droppings?',
    answer: 'Rat and squirrel droppings, which are bigger and blunt-ended; bat guano, which piles under a roost and crumbles into glittering insect fragments; cockroach frass, which is either pepper-like specks or larger pellets with lengthwise ridges that rodent droppings never have; and — across the southern United States, the Gulf Coast, the Southwest and Hawaii — house gecko and anole droppings, which carry a chalky white cap at one end that no rodent pellet has. Non-animal look-alikes fool people constantly: spilled coffee grounds, chia and poppy seeds, dried potting soil, and rodent-shaped crumbs of dried mud by a back door.',
  },
  {
    question: 'What is the difference between mouse droppings and lizard droppings?',
    answer: 'The white cap settles it. Lizards pass urine and faeces together through a cloaca, so a house gecko or anole dropping is a dark pellet finished with a distinct chalky white or cream tip of uric acid at one end. Mouse pellets are uniformly dark with no white anywhere, and taper to a point at both ends rather than one. Lizard droppings also frequently contain visible insect fragments — beetle shell, ant heads — because lizards eat insects rather than seeds and grain, and they turn up on vertical and elevated surfaces such as window screens, ledges, lanai tracks and pool cages instead of along baseboards and inside drawers.',
  },
  {
    question: 'What gets rid of mice immediately?',
    answer: 'Nothing is truly instant, but a dense line of snap traps set the same day is the fastest thing that genuinely works. Put them in the runways the droppings mark, trigger end against the wall, and set far more than feels reasonable at once — house mice are inquisitive rather than trap-shy and usually deliver the biggest catch on the first night. Poison is slower, not faster, and can leave a carcass inside a wall void. Then seal the entry points, because trapping without sealing only creates a vacancy. The full sequence is in our guide to getting rid of mice.',
  },
  {
    question: 'Is mouse poop dangerous in the United States?',
    answer: 'It deserves a proper cleanup rather than panic, and the American numbers are specific. The CDC recorded 890 cases of hantavirus disease in the United States from the start of surveillance in 1993 through the end of 2023, and 94% of reported cases have occurred west of the Mississippi River, typically after disturbing dust in a closed-up cabin, shed, barn or crawl space. Everyday house-mouse contamination is a different and more likely list: salmonella tracked across food-contact surfaces, lymphocytic choriomeningitis virus, and mouse allergen as a recognised asthma trigger. One instruction covers all of it — wet it down, wipe it up, never sweep or vacuum.',
  },
  {
    question: 'I found mouse droppings in my bed — what should I do?',
    answer: 'Do not shake the bedding out, which aerosolises exactly the dust the cleanup method exists to avoid. Strip the bed slowly, bag the linen at the bedside, and launder it on the hottest cycle the fabric allows followed by a hot dryer cycle. Wipe the mattress surface, frame and slats with a disinfectant rather than vacuuming them, and check the headboard, the bed base and any under-bed storage for nesting material. Then find the route: droppings in a bed usually mean an unsealed gap in that room — around a pipe, a baseboard, a duct boot — or food being kept in the bedroom.',
  },
  {
    question: 'Does BuzzSkito handle rodent problems?',
    answer: 'No. BuzzSkito is a licensed mosquito and tick control company serving the GTA, and this guide is independent research published by our writing team rather than a service page. For rodents you want a licensed structural pest control operator, and specifically one who does exclusion work — sealing the building — rather than one who only places bait, because bait alone leaves the entry points that produced the problem. We publish this material because identification and safe cleanup are where homeowners most often get bad advice, and because the correct first move here is genuinely free.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Mouse poop: dark 3-6 mm pellets, pointed at both ends, scattered not piled. Rat droppings are 12-19 mm and blunt. Plus the free 48-hour test for fresh vs old.',
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

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Victor snap traps (what to buy once you've confirmed it)" search="victor mouse trap 4 pack" asin="B0CQ8RSTC9" label="The next step after ID" />

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
            <table className="min-w-[560px] w-full text-sm">
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
                asin: 'B0CQ8RSTC9',
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
          <Figure
            src="/diagrams/mouse-vs-rat-droppings.svg"
            alt="Actual-size comparison of house mouse, Norway rat, roof rat, squirrel, bat and cockroach droppings with a millimetre scale"
            caption="Droppings drawn to actual size. Size narrows it to a species group; the shape of the ends separates mouse from rat, and rat from squirrel."
            width={720}
            height={430}
            priority
          />
          <p>A house mouse dropping is a dark pellet about the size of a grain of rice &mdash; roughly 3 to 6 millimetres long and a millimetre or two across &mdash; that <strong>tapers to a point at both ends</strong>. Fresh, it is dark brown to black, slightly soft, and carries a faint sheen. As it dries it loses that sheen, hardens, and fades toward a dull grey, and an old dropping crumbles to powder under pressure.</p>
          <p>The detail that identifies the animal as reliably as the pellet does is <strong>the scatter</strong>. Mice do not use latrines. They defecate continuously as they move, dozens of times a day, so the evidence appears strung along the routes they travel rather than gathered in one place: a line of pellets against the back edge of a countertop, a handful inside a cutlery drawer, a scatter at the back of a pantry shelf, more under the sink and behind the stove. If you are finding small dark pellets in four different rooms, that is one mouse behaving normally rather than four separate problems.</p>
          <p>Alongside the droppings, look for the other traces that confirm it: <strong>urine staining</strong>, since mice dribble more or less constantly as they travel; <strong>grease marks</strong>, dark smudges where oily fur repeatedly brushes the same corner or gap edge; <strong>gnaw marks</strong> with fine parallel tooth grooves on cardboard, food packaging and soft plastic; and <strong>nesting material</strong>, which is shredded paper, insulation, fabric or cardboard packed into a hidden cavity. In long-running infestations, urine and body oils combine with dust into small hardened mounds sometimes called urine pillars &mdash; a sign of a population that has been established for a while rather than a recent arrival.</p>
          <p>A note on ultraviolet lights, which get recommended a lot: rodent urine does fluoresce, but so do a great many ordinary household residues, detergents, adhesives and cleaning products. A UV torch is a reasonable way to decide where to look more closely. It is not proof on its own.</p>

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

          <h2>The Health Picture in the United States</h2>
          <p>The section above is the Canadian version of this question, and a reader in the United States should not simply borrow it &mdash; the American risk map is a different map, with different animals on it and a different geography. Here is the US version, from the CDC.</p>
          <p><strong>How rare it actually is.</strong> The CDC reports <strong>890 cases of hantavirus disease in the United States</strong> from the start of national surveillance in 1993 through the end of 2023 &mdash; 859 of them hantavirus pulmonary syndrome (HPS) and 31 non-pulmonary. That is roughly thirty cases a year in a country of about 330 million people, which is genuinely rare by any measure. It is also serious when it happens: the CDC reports that <strong>35% of confirmed infections resulted in death</strong>, and states separately that <strong>38% of people who go on to develop respiratory symptoms may die</strong>. Those are two different denominators and should not be run together. Both facts point at the same conclusion, which is not to be frightened of your kitchen but to clean droppings the wet way rather than the dusty way.</p>
          <p><strong>Where the cases are.</strong> <strong>94% of reported US cases have occurred west of the Mississippi River.</strong> New Mexico, Colorado, Arizona, California and Washington report the most, and ten states &mdash; Alaska, Hawaii, Missouri, Mississippi, Alabama, Georgia, South Carolina, Kentucky, Ohio and New Jersey &mdash; have reported no case at all since 1993. The practical reading: if you are opening a cabin, barn, shed, crawl space or storage trailer in the arid West or the Four Corners region, this is the section to take seriously and the ventilate-first step is not optional. If you are wiping a scatter of droppings out from under a kitchen sink in Ohio or New Jersey, the realistic concerns are the house-mouse ones &mdash; salmonella on food-contact surfaces, lymphocytic choriomeningitis virus, and mouse allergen as an asthma trigger &mdash; and the same wet-then-wipe method covers them.</p>
          <p><strong>What the timeline looks like.</strong> Per the CDC, symptoms begin <strong>1 to 8 weeks after contact</strong> with an infected rodent or its urine, droppings or nesting material, and the early phase is fever, aching muscles &mdash; characteristically thighs, hips, back and shoulders &mdash; headache, dizziness, chills and stomach upset. Respiratory symptoms follow <strong>4 to 10 days after that initial phase</strong>: coughing, shortness of breath and a tightness in the chest that Mayo Clinic describes as the point at which the illness turns abruptly severe. The one thing worth remembering out of all of this: if you develop fever and breathlessness in the weeks after cleaning out a rodent-infested space, say so to the clinician explicitly. The exposure history is what changes the differential.</p>

          <h2>Four North American Rodents Carry Hantavirus &mdash; Not Only the Deer Mouse</h2>
          <p>Most articles name the deer mouse and stop, which leaves readers in the Southeast and the Northeast with no species that matches what is actually in their crawl space. The CDC identifies four North American rodents as carriers of hantaviruses that cause HPS, and their ranges barely overlap.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Rodent</th>
                  <th className="px-4 py-3 text-left">Range (per CDC)</th>
                  <th className="px-4 py-3 text-left">Where you encounter it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Deer mouse</td>
                  <td className="px-4 py-3 text-gray-700">Found throughout North America, including Canada</td>
                  <td className="px-4 py-3 text-gray-700">The main carrier of Sin Nombre virus and the species behind most US and Canadian cases. Cabins, sheds, barns, woodpiles, outbuildings, seasonal properties</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">White-footed mouse</td>
                  <td className="px-4 py-3 text-gray-700">Northeast and New England, mid-Atlantic, southern states, the Midwest and western states</td>
                  <td className="px-4 py-3 text-gray-700">Easily mistaken for a deer mouse and for a house mouse. Woodland-edge properties, garages, outbuildings, seasonal cottages</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Rice rat</td>
                  <td className="px-4 py-3 text-gray-700">From the southeastern United States to Central America</td>
                  <td className="px-4 py-3 text-gray-700">Marshy and low-lying ground, coastal and riverine properties, sheds and crawl spaces near wetland</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Cotton rat</td>
                  <td className="px-4 py-3 text-gray-700">From the southeastern United States to South America</td>
                  <td className="px-4 py-3 text-gray-700">Grassy and overgrown ground, field edges, outbuildings and crawl spaces in the Gulf and Southeast</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Two things follow from that table. First, a reader in Georgia, Florida or the Gulf Coast is in cotton-rat and rice-rat country, so &ldquo;it is not a deer mouse, therefore it is fine&rdquo; is the wrong inference &mdash; although those same southeastern states are also where reported case counts are lowest. Second, none of these are the <strong>house mouse</strong>, which is the animal actually living in most kitchens and wall voids on both sides of the border and which is not a recognised hantavirus reservoir. The distinction matters because it tells you which cleanups warrant the full ventilate-and-respirator routine and which simply warrant doing it properly: an enclosed, long-closed outbuilding in wild-rodent country is the high-caution case in either country.</p>

          <h2>Where the Droppings Are Telling You to Look</h2>
          <p>Droppings are the most useful diagnostic you will get, because they map the runway. Mice travel along edges rather than across open floor &mdash; a behaviour called thigmotaxis, keeping a body surface in contact with something solid &mdash; and they have a small home range, often only a few metres across in a food-rich building. Every trap you set should therefore go where you found pellets, oriented with the trigger end against the wall.</p>
          <p>The places worth checking, roughly in order of hit rate in a Canadian house: under the kitchen sink and inside the cabinet beneath it; behind and underneath the stove, fridge and dishwasher; the void behind a kitchen toe-kick; the backs of pantry shelves and inside cutlery drawers; along basement sill plates and joist ends; inside the garage against the walls and behind stored boxes; inside stored cardboard, which is nesting material and shelter in one; and in attic insulation, where droppings will be sitting on the surface rather than mixed through it if the problem is recent.</p>
          <p>The presence of droppings in an attic or a wall void changes the job. That is not a wipe-down; contaminated insulation needs removing and replacing, which is remediation work rather than pest work, and it is one of the few rodent situations where hiring someone is straightforwardly cheaper than the alternative.</p>

          <h2>How Can I Tell If Droppings Are From Mice?</h2>
          <p>Check three things in order: <strong>size, end shape, scatter pattern</strong>. Mouse pellets are 3&ndash;6 mm &mdash; about 1/8 to 1/4 inch, roughly a grain of rice &mdash; they taper to a point at <em>both</em> ends, and they are spread along wall edges and inside drawers rather than piled in one place. All three match, and it is mice.</p>
          <p>Each check rules out a different impostor, which is why the order matters. <strong>Size</strong> eliminates rats and squirrels immediately: anything clearly longer than a grain of rice is a different animal and needs a different plan. <strong>End shape</strong> eliminates the two most common confusions after that &mdash; a blunt, capsule-shaped end means Norway rat, lengthwise ridges mean a large cockroach, and a chalky white cap on one end means a lizard rather than any rodent. <strong>Pattern</strong> is the check most guides omit and the one that most often settles a genuinely ambiguous case: mice do not use latrines, so their droppings appear strung along travel routes, while bats deposit in a single pile beneath a roost and rats concentrate in a smaller number of heavier deposits along established runs.</p>
          <p>One extra tell if you are still unsure: the surface. Fresh mouse pellets have a faint sheen and give slightly under a stick; old ones are matte grey and crumble to powder. Bat guano crumbles too, but into <em>glittering</em> specks, because it is made almost entirely of insect exoskeleton and it sparkles under a torch. That single difference &mdash; dull dust versus sparkling dust &mdash; separates two materials that look nearly identical intact.</p>

          <h2>Mouse Droppings in Inches and Millimetres &mdash; Every Size on This Page, Both Ways</h2>
          <p>Sizes on this page are given in millimetres because that is how they are published in Canada. Here is the same set of numbers in inches, because that is how they are published in the United States and how most hardware is sold there. Nothing here is a different measurement; it is the same measurement written twice.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What</th>
                  <th className="px-4 py-3 text-left">Metric</th>
                  <th className="px-4 py-3 text-left">Imperial</th>
                  <th className="px-4 py-3 text-left">Everyday comparison</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">House mouse dropping</td>
                  <td className="px-4 py-3 text-gray-700">3&ndash;6 mm long</td>
                  <td className="px-4 py-3 text-gray-700"><strong>1/8 to 1/4 inch</strong></td>
                  <td className="px-4 py-3 text-gray-700">A grain of rice</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Rat dropping</td>
                  <td className="px-4 py-3 text-gray-700">12&ndash;19 mm long</td>
                  <td className="px-4 py-3 text-gray-700"><strong>1/2 to 3/4 inch</strong></td>
                  <td className="px-4 py-3 text-gray-700">An olive pit or a coffee bean</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Squirrel dropping</td>
                  <td className="px-4 py-3 text-gray-700">8&ndash;10 mm long</td>
                  <td className="px-4 py-3 text-gray-700">About 3/8 inch</td>
                  <td className="px-4 py-3 text-gray-700">A large grain of rice, but barrel-shaped</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Large cockroach dropping</td>
                  <td className="px-4 py-3 text-gray-700">Up to ~8 mm</td>
                  <td className="px-4 py-3 text-gray-700">Up to about 5/16 inch</td>
                  <td className="px-4 py-3 text-gray-700">Rice-sized but ridged lengthwise</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Gap a mouse can pass through</td>
                  <td className="px-4 py-3 text-gray-700">About 6 mm</td>
                  <td className="px-4 py-3 text-gray-700"><strong>1/4 inch</strong> &mdash; the US exclusion standard</td>
                  <td className="px-4 py-3 text-gray-700">The width of a pencil</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Mesh that stops a mouse</td>
                  <td className="px-4 py-3 text-gray-700">6 mm mesh</td>
                  <td className="px-4 py-3 text-gray-700">1/4-inch hardware cloth</td>
                  <td className="px-4 py-3 text-gray-700">Sold by the inch size in both countries</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Home range of a house mouse</td>
                  <td className="px-4 py-3 text-gray-700">A few metres</td>
                  <td className="px-4 py-3 text-gray-700">Often within about 50 feet</td>
                  <td className="px-4 py-3 text-gray-700">Why traps go where the droppings are, not where you saw it</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Alongside the sizes, the mouse-biology figures that explain why a small number of animals produces so much evidence. These come from state cooperative extension publications &mdash; a US page type with no direct Canadian equivalent, and the reason American exclusion advice is written in quarter-inches. Nebraska Extension&rsquo;s house mouse publication (G1105) gives the numbers:</p>
          <ul>
            <li><strong>50 to 75 pellets per day</strong> from a single house mouse &mdash; the concrete version of &ldquo;dozens a day&rdquo;.</li>
            <li>Droppings <strong>1/8 to 1/4 inch</strong> in length, matching the metric range above.</li>
            <li>A female produces <strong>5 to 10 litters of 5 to 6 young</strong> each year, with a gestation of 18 to 21 days.</li>
            <li>Young reach breeding maturity at <strong>6 to 10 weeks</strong>; lifespan is typically 9 to 12 months.</li>
            <li>Mice pass through openings <strong>slightly larger than 1/4 inch</strong>, and generally live <strong>within about 50 feet</strong> of their nest in a food-rich building.</li>
          </ul>
          <p>Read those together and the urgency makes sense without any exaggeration. Two mice in September is not two mice in December, and the 50-to-75-pellets figure means a single animal can convincingly imitate an infestation &mdash; which is exactly why counting droppings is a poor way to estimate how many you have, and the trap catch rate is a good one.</p>

          <h2>How Can I Tell If I Have a Mouse in My House?</h2>
          <p>Droppings plus at least one corroborating sign, then a test. The corroborating signs are urine staining and a musky ammonia smell, dark grease marks where oily fur brushes the same edge repeatedly, fine parallel gnaw grooves on packaging, shredded nesting material in a cavity, and scratching in walls after dark. Then clean one area, date it, and recheck at 48 hours.</p>
          <p>Taken one at a time, each sign is worth knowing how to read:</p>
          <ul>
            <li><strong>Urine staining and smell.</strong> Mice dribble more or less constantly as they travel, so contamination follows the same runway the droppings do. A persistent musky, ammonia-like smell in a cupboard or a closed room is a strong signal, and it is usually stronger in an enclosed space than in an open one.</li>
            <li><strong>Grease marks.</strong> Dark smudges along a baseboard, around a gap edge, at a pipe penetration or under a cabinet toe-kick, left by oil and dirt in the fur passing the same point repeatedly. Grease marks are the single best indicator of an <em>established</em> route rather than a one-off visit.</li>
            <li><strong>Gnaw marks.</strong> Fine paired grooves, roughly 1&ndash;2 mm across, on cardboard, food packaging, soap, candles and soft plastic. Larger, coarser gnawing on wood and hard plastic points at rats or squirrels instead.</li>
            <li><strong>Nesting material.</strong> Shredded paper, insulation, fabric, dryer lint or cardboard packed into a drawer back, an appliance cavity, a stored box or a wall void &mdash; frequently the first thing found during an autumn clear-out.</li>
            <li><strong>Sound.</strong> Scratching, gnawing or light scurrying in walls and ceilings, concentrated after dark. Daytime attic noise with heavier movement suggests squirrels rather than mice.</li>
            <li><strong>Urine pillars.</strong> In long-running infestations, urine and body oils bind with dust into small hardened mounds. These take time to form, so they indicate an established population rather than a recent arrival.</li>
          </ul>
          <p>The test is what turns all of that from suspicion into a decision, and it costs nothing: clean one affected area completely with the wet-then-wipe method, write the date on a piece of tape stuck beside it, and check at 48 hours and again at a week. It is the same 48-hour test described above, and it is the only step on this page that separates &ldquo;there were mice here once&rdquo; from &ldquo;there are mice here tonight&rdquo;.</p>

          <h2>Why Do I See Mouse Poop but No Mice?</h2>
          <p>Because mice are nocturnal, they hug edges rather than crossing open floor, and they fit through a gap of about 6 mm &mdash; a quarter inch. They work cabinet backs, wall voids and joist bays while you are asleep. Finding droppings and never seeing an animal is the normal case, not the exception. The other possibility is that the droppings are old.</p>
          <p>The behavioural half of that answer is worth spelling out, because it also tells you where to put traps. Mice are <strong>thigmotactic</strong> &mdash; they prefer to travel with a body surface in contact with something solid, which is why the pellets appear along a wall base, at the back edge of a counter or inside a drawer rather than in the middle of a room. Their home range is small, often within about 50 feet of the nest in a building with food in it, so all of that activity can be happening in a space you walk through daily without ever crossing your path. A mouse seen in the open, in daylight, in a lit room is not the reassuring sighting people assume: it more often means a population large enough to force competition for the good routes, or a nest that has been disturbed.</p>
          <p>The historical explanation is the one people forget to test for. A mouse that came in during one cold snap and died in a void, or a population cleared by a previous occupant, leaves droppings that sit there indefinitely &mdash; dry, grey and no longer meaningful. Clean the area, date it, and check at 48 hours and a week. New pellets mean live animals; nothing new in a place mice would obviously be using means you are cleaning up history. Either way the sealing work still pays, because the opening that let the first mouse in has not closed itself.</p>

          <h2>What Can Be Mistaken for Mouse Droppings?</h2>
          <p>Five things, in rough order of how often they cause the confusion: <strong>rat and squirrel droppings</strong> (bigger, blunt-ended), <strong>bat guano</strong> (piled under a roost, crumbles into glittering specks), <strong>cockroach frass</strong> (pepper-like specks, or larger pellets with lengthwise ridges), <strong>lizard droppings</strong> in the warmer parts of the US (a chalky white cap at one end), and ordinary debris.</p>
          <p>The identification table near the top of this page covers the rodent and insect cases in detail. Two of them deserve extra emphasis because getting them wrong changes what you are legally and practically allowed to do next.</p>
          <p><strong>Bat guano is the one where a wrong ID has consequences.</strong> It is close to mouse droppings in size and colour, and the difference is what happens when it crumbles: guano breaks into glittering fragments of insect wing and shell, because bats eat insects. It also accumulates in a discrete pile directly beneath a roost, rather than scattering along a route. If that is what you have, stop cleaning and call a licensed wildlife professional. In Ontario, several bat species are protected and the young are flightless in the roost through the summer, so sealing at the wrong time of year is both illegal and worse than the original problem. <strong>In the United States the same caution applies for the same reasons:</strong> several bat species &mdash; among them the Indiana bat, gray bat and northern long-eared bat &mdash; are federally listed under the Endangered Species Act and administered by the US Fish and Wildlife Service, and most states additionally regulate the season during which a roost may legally be excluded. Neither country lets you handle this as a hardware-store afternoon.</p>
          <p><strong>Ordinary debris is the most common answer of all</strong>, and it is worth ruling out before you buy anything. Coffee grounds under a machine, chia or poppy seeds in a pantry, mouse-sized crumbs of dried potting soil near a plant pot, dried mud tracked in by a back door and the little rubber crumb shed by some floor mats have all sent people looking for an infestation they do not have. The discriminator is uniformity: a mouse produces pellets that are consistently the same size and shape, because they come from the same animal. Debris varies.</p>

          <h2>What Is the Difference Between Mouse Droppings and Lizard Droppings?</h2>
          <p><strong>The white cap.</strong> Lizards excrete urine and faeces together through a cloaca, so a house gecko or anole dropping is a dark pellet finished with a distinct chalky white or cream tip at one end. Mouse pellets are uniformly dark, with no white anywhere, and taper to a point at <em>both</em> ends rather than one.</p>
          <p>This question barely arises in Canada, which is exactly why it belongs on this page &mdash; house geckos and anoles are common indoors across Florida, the Gulf Coast, Texas, the Southwest and Hawaii, and in those states they are a far more likely explanation for small dark pellets on a window ledge than mice are. The differences are easy to check once you know what to look at.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Check</th>
                  <th className="px-4 py-3 text-left">House mouse</th>
                  <th className="px-4 py-3 text-left">Gecko / anole</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">White tip</td>
                  <td className="px-4 py-3 text-gray-700">None &mdash; uniformly dark brown to black throughout</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Chalky white or cream cap on one end</strong> (uric acid). The single decisive tell</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ends</td>
                  <td className="px-4 py-3 text-gray-700">Tapered to a point at both ends</td>
                  <td className="px-4 py-3 text-gray-700">Cylindrical: one tapered end, one rounded white-tipped end</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Content when broken</td>
                  <td className="px-4 py-3 text-gray-700">Uniform, dull; crumbles to plain grey dust when old</td>
                  <td className="px-4 py-3 text-gray-700">Visible insect fragments &mdash; beetle shell, ant heads &mdash; because lizards eat insects, not seeds</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Where you find it</td>
                  <td className="px-4 py-3 text-gray-700">Baseboards, drawers, under sinks, behind appliances, pantry shelves</td>
                  <td className="px-4 py-3 text-gray-700">Vertical and elevated surfaces: window screens and ledges, lanai and slider tracks, pool cages, exterior walls</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">What it means for you</td>
                  <td className="px-4 py-3 text-gray-700">Clean the wet way, trap, then seal to 1/4 inch</td>
                  <td className="px-4 py-3 text-gray-700">A wipe-down and a screen repair. Geckos eat insects and are not a rodent problem</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>One practical consequence: if the pellets are on a screen, a sill or a slider track and carry a white tip, you do not need traps, exclusion fill or a respirator. Wipe the surface with a household disinfectant, wash your hands, and fix the torn screen or the door sweep that let the animal in. Reptiles do carry salmonella, so the hand-washing is not optional &mdash; but the rodent protocol is not the right tool for this.</p>

          <h2>What Should You Do If You See Mouse Droppings?</h2>
          <p><strong>Do not sweep them and do not vacuum them.</strong> Ventilate the room for about 30 minutes from outside it, put on gloves and a fitted respirator, wet the droppings thoroughly with disinfectant, wait five minutes, wipe with paper towel and double-bag the waste. Then treat the spot as intelligence: it marks a route the mice already use, and that is where the traps go.</p>
          <p>The full nine-step sequence is in the cleanup protocol above, and it is worth naming its source, because it is not house style. <strong>It is the protocol the US Centers for Disease Control and Prevention publishes for cleaning up after rodents</strong> &mdash; the same wet-it-down step, the same five-minute soak, the same paper-towel wipe instead of a broom, the same instruction to wash gloved hands before removing the gloves, and the same blanket rule that you do not vacuum or sweep rodent urine, droppings or nesting material. Canadian and provincial public-health guidance says the same thing in the same order. There is no competing school of thought here to weigh up.</p>
          <p>The part that gets skipped is what to do with the information rather than the mess. Droppings are a map. Before you clean, note every location you found them &mdash; a phone photo of each spot takes a minute and is worth more than a memory of it &mdash; because after the cleanup that evidence is gone, and those locations are precisely where snap traps should be placed, trigger end against the wall, and precisely where you should be hunting for the gap that let the animal in.</p>

          <h2>The Cleanup Numbers in US Units &mdash; What the CDC Specifies</h2>
          <p>The protocol above gives the bleach dilution as one part bleach to nine parts water, which is the ratio published on both sides of the border. The CDC also states it volumetrically, which is easier to execute at a kitchen sink without measuring anything precisely:</p>
          <ul>
            <li><strong>1.5 cups of household bleach in 1 gallon of water</strong> &mdash; the CDC&rsquo;s own figure, equivalent to the 1:9 ratio.</li>
            <li><strong>Or an EPA-registered disinfectant</strong>, used according to the label instructions. That phrase is worth knowing because it is what US product labels actually say, and it is the wording the CDC uses &mdash; a household disinfectant spray carrying an EPA registration number is acceptable in place of mixing bleach.</li>
            <li><strong>Soak, do not mist.</strong> The material must be visibly wet, and left for about five minutes before wiping.</li>
            <li><strong>Mix bleach fresh</strong>, ventilate while you work, and never combine it with ammonia or another cleaner.</li>
          </ul>
          <p>Everything else in the sequence is unchanged, because there is nothing country-specific about it: ventilate first, gloves and a respirator, wet, wait, wipe with paper towel, double-bag, disinfect the surrounding surfaces, steam-clean rather than vacuum affected carpet and upholstery, wash gloved hands before taking the gloves off, then wash bare hands again.</p>

          <h2>Mouse Droppings in the Bed &mdash; the Scenario Nobody Plans For</h2>
          <p>It is a common enough discovery to deserve its own instruction, and the instinctive reaction is the wrong one. <strong>Do not shake the bedding out.</strong> Snapping a sheet is close to the worst possible way to handle contaminated dust: it aerosolises the material directly into the air in front of your face, which is the one outcome the entire cleanup method exists to prevent.</p>
          <p>Instead, work slowly. Strip the bed by rolling the linen inward on itself rather than lifting and flapping it, bag it at the bedside, and launder on the hottest cycle the fabric allows followed by a hot dryer cycle. Wipe the mattress surface, the frame, the slats and the headboard with a disinfectant rather than vacuuming them, and check under and behind the bed &mdash; including any drawers in the base &mdash; for nesting material. Then look for the reason. Droppings in a bed almost always mean one of two things: an unsealed gap in that room, typically at a pipe or duct penetration, a baseboard join, or behind a built-in wardrobe; or food kept in the bedroom, which is a far more common cause than people expect and the easiest of all of this to fix.</p>

          <h2>What Gets Rid of Mice Immediately?</h2>
          <p>Nothing is truly instant. The fastest method that genuinely works is a <strong>dense line of snap traps set the same day</strong>, placed in the runways the droppings mark with the trigger end against the wall. Set far more than feels reasonable, all at once: house mice are inquisitive rather than trap-shy, so the biggest catch usually comes on the first night. Then seal the entry points, or the next mouse simply walks in.</p>
          <p>Two things are worth knowing before you buy anything, and they both push against the instinct to reach for poison first. <strong>Rodenticide is slower, not faster</strong> &mdash; anticoagulant baits take days to work, during which the animal is still in the house &mdash; and a mouse that dies inside a wall void becomes a smell and a carrion-beetle problem you did not previously have. <strong>And repellents are not a shortcut.</strong> Ultrasonic plug-ins do not penetrate the wall voids where mice actually live, and peppermint oil does not compete with a warm, food-rich building in October.</p>
          <p>The rules on poison also differ by country, which matters if you are reading US and Canadian advice side by side. <strong>In the United States</strong>, under the EPA&rsquo;s rodenticide risk-mitigation rules, consumer products must be sold as bait blocks in pre-loaded, tamper-resistant bait stations &mdash; loose pellets and open trays are not legal consumer products &mdash; and the second-generation anticoagulants (brodifacoum, bromadiolone, difethialone, difenacoum) are restricted to professional and agricultural users because of secondary poisoning risk to pets, owls and other wildlife. <strong>In Canada</strong>, the picture is more restrictive still, and much of what American guides recommend cannot legally be sold to a consumer at all; the detail is in <Link href="/blog/rat-poison-canada-what-is-legal">what rat poison is legal in Canada</Link>. In both countries the honest summary is the same: bait is a considered step for a specific situation, not the reflex first purchase.</p>
          <p>The complete removal sequence &mdash; trap placement, bait choice, how long to run the line, and the order the sealing work should happen in &mdash; is set out in <Link href="/blog/how-to-get-rid-of-mice-canada">how to get rid of mice</Link>, with the individual trap models compared in <Link href="/blog/best-mouse-trap-canada">the trap guide</Link>. This page deliberately stops at identification and safe cleanup, because those are the two steps that go wrong first.</p>
          <p className="not-prose text-sm text-gray-600 mb-1">The same-day shortlist, in the order the work actually happens:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="n95 respirator masks niosh">Respirator &amp; gloves &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="victor mouse trap 4 pack">Snap traps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="hardware cloth 1/4 inch galvanized">1/4-inch hardware cloth &rarr;</BuyLink>
          </div>

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
