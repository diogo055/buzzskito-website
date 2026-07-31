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

const SLUG = 'mouse-repellent-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// The "does a repellent work" DECISION page — the missing destination for the
// repellent-shaped queries currently dead-ending on
// /blog/ultrasonic-pest-repellers-do-they-work. Deliberately NOT a second
// how-to-get-rid-of-mice page (that protocol lives on how-to-get-rid-of-mice-canada)
// and NOT a second exclusion page (rodent-exclusion-kit-canada owns the hardware spec).
//
// TAG ROUTING: tagForSlug() returns the RODENT cluster tag for this slug. It used to
// return the mosquito tag, because the mosquito rule in lib/amazon-clusters.ts matched
// the bare word "repellent" and was evaluated before the rodent rule — mis-billing
// every rodent click here and on best-rodent-repellent-for-cars-canada. Fixed at the
// RULES table by anchoring that token to "insect-repellent"/"bug-repellent"; the tag
// still comes from tagForSlug and is never hardcoded.
const TITLE = 'Mouse Repellent in Canada — What Actually Repels a Mouse, and What Just Sells Well'
const META_TITLE = 'Mouse Repellent Canada: What Actually Works'

const FAQS = [
  {
    question: 'Do mouse repellents actually work?',
    answer: 'Not in the way the packaging implies. There is a real difference between briefly discouraging a mouse from entering a space it has no reason to be in, and removing a mouse that has already built a nest inside your warm wall in October. Scent-based repellents can produce short-term avoidance in a confined space, but the volatiles fade within days, mice habituate to a smell that never actually hurts them, and no odour outcompetes shelter, warmth and food in a Canadian autumn. Ultrasonic units are worse: they do not move an established population, and sound does not bend around the wall voids mice live in. Exclusion and trapping are what change the number of mice in your house.',
  },
  {
    question: 'Does peppermint oil keep mice away?',
    answer: 'It has a narrow, honest use and a much larger marketing claim wrapped around it. Concentrated peppermint oil is genuinely aversive to a mouse at close range in an enclosed space, which is why cotton balls in a sealed drawer or a stored vehicle can be worth doing. Three things kill it as a household strategy: the oil evaporates and loses potency within days, so it becomes a chore rather than a solution; a mouse that is already nesting inside a wall does not have to walk past your cotton ball; and a hungry animal will tolerate an unpleasant smell to reach food. Treat peppermint as a mild deterrent for a sealed, unoccupied space, not as a substitute for closing the hole it came in through.',
  },
  {
    question: 'Do ultrasonic mouse repellers work in Canada?',
    answer: 'No, and this is one of the few pest questions with a genuinely clean answer. Ultrasonic sound is highly directional and is blocked by walls, furniture, cabinets and insulation, so it does not reach the wall voids, subfloors and attic spaces where mice actually live. Even where the sound does reach, rodents habituate to a repetitive stimulus that never harms them. The enforcement record is American rather than Canadian: in May 2001 the US Federal Trade Commission sent warning letters to more than 60 manufacturers and retailers of ultrasonic pest devices over unsupported claims, and in 2002 it charged Lentek International over unsubstantiated pest-repeller efficacy claims. Canada has no equivalent enforcement history — not because the devices behave differently here, but because a product containing no pesticide falls outside the Pest Control Products Act and no Canadian agency reviews its efficacy claims before sale. We go through that evidence in detail in our ultrasonic pest repeller review; the short version is that the money is better spent on steel wool and a dozen snap traps.',
  },
  {
    question: 'Is there any legitimate use for a rodent repellent?',
    answer: 'Yes — three of them, all narrow. First, protecting a space you cannot practically trap or inspect: a stored boat, an RV, a seasonal cottage closed for winter, or a vehicle parked for months. Second, protecting wiring specifically, where capsaicin-treated deterrent tape — sold as an automotive part rather than as a pesticide — exploits taste rather than smell and is applied directly to the thing you want left alone. Third, buying yourself a few days in a confined, sealed space while you organise the real work. What none of them does is reduce a population. If mice are living in your house, a repellent moves the problem around the house rather than out of it.',
  },
  {
    question: 'What is the fastest way to get rid of mice without poison?',
    answer: 'A dense snap-trap line deployed all at once, run alongside sealing. House mice have a small home range and are inquisitive rather than trap-shy, which is why a heavy first night usually produces the biggest catch of the whole job — and why setting two traps and waiting a week is the classic mistake. Place traps at close intervals along walls, with the trigger end against the baseboard, in the runways revealed by droppings and grease marks. Bait sparingly with something sticky. Then seal every gap of about 6 mm or wider with coarse stainless steel wool or copper mesh backed by sealant, so the ones you catch are not simply replaced.',
  },
  {
    question: 'Are mothballs a mouse repellent?',
    answer: 'No, and using them as one is both ineffective and a genuine hazard. Mothballs are a registered pesticide whose label restricts them to enclosed containers for fabric pests, precisely because the active ingredient sublimates into a vapour that is meant to build up in a sealed space. Scattering them in an attic, crawl space, wall void or basement is an off-label use, the vapour concentration needed to bother a mouse is far above what is safe for people and pets to breathe, and public health agencies have repeatedly warned against exactly this practice. The label is the law in Canada. Mothballs in a crawl space are a contamination problem you will later pay to remediate, on top of still having mice.',
  },
  {
    question: 'How do I know if a rodent repellent is legal to sell in Canada?',
    answer: 'First work out whether you are buying a pesticide or a device, because only one of them needs registering. Physical and mechanical deterrents — deterrent tape sold as an automotive part, steel mesh and hardware cloth, door seals, strobe units, traps — are devices, not pesticides, and need no Health Canada registration at all. Products sold as repellents with an active ingredient making a pest-control claim, peppermint-oil sprays and pouches among them, generally fall under the Pest Control Products Act and must be registered with Health Canada’s Pest Management Regulatory Agency unless they qualify for a specific Canadian exemption; a registered one carries a PCP registration number on its Canadian label. That distinction matters because the marketplace is full of American products whose legal status does not travel: a US “minimum risk” exemption is a US rule and says nothing about Canadian legality. So before buying any rodent product that makes a repellency or kill claim through an active ingredient, check the listing for a Canadian registration number and confirm the item is sold and shipped within Canada.',
  },
  {
    question: 'What size gap can a mouse get through?',
    answer: 'Roughly 6 mm — about the width of a pencil. The skull is the only rigid part of a mouse, so if the head fits, the rest follows. That single number is why exclusion checklists obsess over openings that look far too small to matter: worn garage door seals, the gap where a gas line or air-conditioning lineset enters the wall, brick weep vents, dryer vents with a broken flap, and the space under an exterior door. It is also why repellents are structurally the wrong tool. You are not trying to persuade an animal to ignore a warm house in October; you are trying to make the doorway stop existing.',
  },
  {
    question: 'When do mice come indoors in Canada?',
    answer: 'The push starts as night temperatures fall and accelerates through September and October, which is why searches for repellents and traps peak in the autumn rather than in winter. Mice do not truly hibernate and they do not need to come in to survive, but a heated house with accessible food is far better habitat than a frozen field, and the animals that move in during the fall are the founders of the population you will be fighting in January. The practical implication is that the highest-value work is done in late August and September, before the move, not in December after it.',
  },
  {
    question: 'Will a cat keep mice out of the house?',
    answer: 'A cat reduces mouse activity in the rooms it patrols and does nothing about the ones inside your walls, which is where a house mouse population actually lives. Plenty of homes have both a good mouser and a persistent mouse problem, because the cat cannot get into a soffit or a subfloor and the mice adjust their routes around it. There is also a real downside worth naming: if you are running any rodenticide, a cat is a secondary-poisoning risk, and a cat that catches mice can bring parasites in with them. A cat is a nice bonus on top of exclusion. It is not a plan.',
  },
  {
    question: 'Does BuzzSkito do rodent control?',
    answer: 'No. BuzzSkito is a licensed mosquito and tick control company operating across the GTA, and this guide is independent product research from our publishing side rather than a pitch for a service we sell. For a genuine rodent problem in Ontario you want a licensed structural pest control operator, and for attic or wall-void work you want one who does exclusion carpentry rather than only baiting. We publish this cluster because most of what is sold as mouse repellent does not deserve the money.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Mouse repellent in Canada: which types have real evidence, why ultrasonic and peppermint fail, and the exclusion-and-trap plan that actually works.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function MouseRepellentCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to mouse repellents: what each mechanism actually does, why ultrasonic and scent-based products fail against an established population, the narrow cases where a repellent earns its place, the PCP registration check, and the exclusion-and-trap plan that replaces them.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mouse Repellent in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mouse Repellent Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">No smell, sound or plug-in beats a warm Canadian house in October. Here is what each repellent category genuinely does, the three narrow places one earns its money, and the cheaper hardware that replaces all of it.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Stainless steel wool + copper mesh rodent fill" search="stainless steel wool rodent exclusion" label="What actually keeps mice out" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">There is no mouse repellent that clears an established mouse problem in a Canadian house. Ultrasonic plug-ins do not work at all; peppermint and other scent products produce short-lived avoidance in a small sealed space and nothing more; mothballs used this way are an illegal, hazardous misuse of a pesticide label. The two purchases that genuinely change the mouse count are <strong>exclusion</strong> &mdash; coarse stainless steel wool or copper mesh packed into every gap of about 6 mm or wider, backed by sealant &mdash; and <strong>a dense snap-trap line</strong> deployed all at once.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>6 mm is the number.</strong> If a pencil fits, a mouse fits. That is why hardware beats odour.</li>
              <li><strong>Ultrasonic: no.</strong> Sound does not reach into wall voids, and rodents habituate to a stimulus that never hurts them.</li>
              <li><strong>Peppermint: narrow.</strong> Worth doing in a sealed drawer, a stored RV, or a closed cottage. Not in a lived-in house.</li>
              <li><strong>Mothballs: never.</strong> Scattering them in an attic or crawl space is off-label use of a registered pesticide and a genuine inhalation hazard.</li>
              <li><strong>Pesticide or device?</strong> Mesh, seals, traps and deterrent tape sold as an auto part are devices &mdash; no registration needed. A spray or sachet making a repellency claim through an active ingredient should show a <strong>PCP number</strong> on its Canadian label. A US &ldquo;minimum risk&rdquo; exemption means nothing here.</li>
              <li><strong>Timing:</strong> the mice that move in during September and October are the population you fight all winter. Seal in late summer.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <div className="not-prose rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Where this page fits</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>This page answers one question:</strong> is a repellent worth buying, and if not, what replaces it.
              <br className="hidden sm:block" />
              <strong className="block mt-2">If you already know you have mice</strong> and want the step-by-step removal sequence, read <Link href="/blog/how-to-get-rid-of-mice-canada" className="text-emerald-700 underline font-semibold">how to get rid of mice in Canada</Link>. For the hardware spec and a room-by-room sealing list, read the <Link href="/blog/rodent-exclusion-kit-canada" className="text-emerald-700 underline font-semibold">rodent exclusion kit guide</Link>. For trap models compared, see <Link href="/blog/best-mouse-trap-canada" className="text-emerald-700 underline font-semibold">the best mouse traps in Canada</Link>.
            </p>
          </div>

          <SpecialistDisclosure pest="mice" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pick in 60 Seconds: Your Situation &rarr; What to Buy</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The repellent aisle sells one product for six different problems. Find your row instead &mdash; in four of the six, the answer is not a repellent at all.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
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
                  <td className="px-4 py-3 font-bold text-brand-800">Droppings in the kitchen, mice heard at night</td>
                  <td className="px-4 py-3 text-gray-700">Steel wool and sealant to close the entries, plus a dozen snap traps set the same day</td>
                  <td className="px-4 py-3 text-gray-700">Any repellent</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="stainless steel wool rodent exclusion" block>Exclusion fill &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Nothing seen yet &mdash; you want to keep them out this autumn</td>
                  <td className="px-4 py-3 text-gray-700">A garage door bottom seal and door sweeps. A worn seal leaves a gap running the full width of the opening &mdash; many times the 6 mm a mouse needs</td>
                  <td className="px-4 py-3 text-gray-700">Plug-in repellers</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rodent proof garage door seal" block>Door seals &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Chewed wiring in a car, tractor or generator</td>
                  <td className="px-4 py-3 text-gray-700">Capsaicin-treated deterrent tape applied directly to the loom. Sold as an automotive part &mdash; a device, not a pesticide &mdash; and the one deterrent format with a defensible use case</td>
                  <td className="px-4 py-3 text-gray-700">Scent pouches in the cabin</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rodent deterrent tape capsaicin wire" block>Deterrent tape &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Closing a cottage, RV or boat for the winter</td>
                  <td className="px-4 py-3 text-gray-700">Seal the openings first; then scent sachets are a reasonable belt-and-braces layer in a sealed, unoccupied space</td>
                  <td className="px-4 py-3 text-gray-700">Mothballs, ever</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="hardware cloth 1/4 inch galvanized" block>Hardware cloth &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Mice keep coming back every single autumn</td>
                  <td className="px-4 py-3 text-gray-700">A proper exterior survey with hardware cloth over vents and weep holes. You have a permanent opening, not a recurring visit</td>
                  <td className="px-4 py-3 text-gray-700">Another season of bait</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="hardware cloth 1/4 inch galvanized" block>Vent screening &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Noise in the attic, insulation disturbed</td>
                  <td className="px-4 py-3 text-gray-700">Nothing yet &mdash; identify the animal first. Squirrels, bats and mice sound similar through a ceiling and need different work</td>
                  <td className="px-4 py-3 text-gray-700">Poison, blind</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; a torch and an hour</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — What Replaces a Mouse Repellent"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Coarse Stainless Steel Wool + Copper Mesh Rodent Fill',
                why: 'The single purchase that changes the outcome. Mice chew through expanding foam, plastic and wood, and cannot chew through packed metal fibre. Stuff it tight into every gap around pipe and cable penetrations, sill plate seams and weep holes, then cap it with exterior sealant so it cannot be pulled out. Stainless and copper are the two that will not rust into an orange stain down your siding.',
                search: 'stainless steel wool rodent exclusion',
                featured: true,
                pros: ['Permanent — no reapplication, no expiry, no label rules', 'Works on the entry, which is the actual problem', 'Cheap per opening and easy to do badly-lit and one-handed'],
                cons: ['Tedious — the survey takes longer than the sealing', 'Needs sealant over it or a determined mouse works it loose'],
              },
              {
                badge: 'Best First Entry to Close',
                name: 'Garage Door Bottom Seal + Exterior Door Sweeps',
                why: 'Worth doing first because of the geometry: a mouse needs about 6 mm, and a perished or lifted garage door seal leaves a gap that runs the entire width of the opening at ground level, on the side of the building where stored birdseed and pet food usually sit. A new bottom seal plus sweeps on every exterior and service door closes it in an afternoon with no chemistry, and the same job cuts winter heat loss and blocks spiders and cluster flies on the way through.',
                search: 'rodent proof garage door seal',
                pros: ['Closes the biggest single opening on most houses', 'Pays back in heating as well as in pest pressure', 'No pesticide, no maintenance'],
                cons: ['Settled or warped doors may need shimming first', 'Does nothing about openings higher up the building'],
              },
              {
                badge: 'Best for Reducing Numbers',
                name: 'Victor Snap Traps (Multi-Pack)',
                why: 'What repellents are sold to avoid, and what actually works. House mice are inquisitive rather than trap-shy, and their home range is small, so a dense line set all at once usually produces its biggest catch on the first night. Buy far more than feels reasonable — a dozen is a starting point, not a finish — and set them with the trigger end against the baseboard in the runways the droppings reveal.',
                search: 'victor mouse trap 4 pack',
                pros: ['Immediate, visible, countable result', 'No poison in the house and no carcass in a wall void', 'Reusable across seasons for a trivial cost'],
                cons: ['You have to check and reset them', 'Placement matters more than the model does'],
              },
              {
                badge: 'Best Wire-Protection Device',
                name: 'Capsaicin Rodent Deterrent Tape for Wiring',
                why: 'The one deterrent format with a defensible logic: instead of broadcasting a smell into open air and hoping, it puts a taste deterrent directly onto the object you want left alone. Wrapped around a wiring loom in a stored vehicle, a tractor, a generator or a boat, it targets the specific behaviour — chewing insulation — rather than trying to persuade an animal to leave a warm building. Note where it sits legally: this tape is sold as an automotive part, so it is a device rather than a pesticide and carries no PCP number. That is why it is not caught by the registration rule this page applies to scent products further down.',
                search: 'rodent deterrent tape capsaicin wire',
                pros: ['Applied to the thing you are protecting, not the air', 'Sensible for stored vehicles and equipment you cannot trap', 'Does not depend on a volatile evaporating at the right rate'],
                cons: ['Protects the wire, not the vehicle — nests still happen', 'Fiddly to apply properly in a tight engine bay'],
              },
              {
                badge: 'Best for Larger Openings',
                name: '¼-Inch Galvanized Hardware Cloth',
                why: 'Steel wool handles a pipe gap; hardware cloth handles a vent, a weep-hole run, a crawl space opening or the gap where a deck meets a foundation. Quarter-inch mesh is the size that stops a mouse — larger mesh does not — and screwed or stapled over an opening it is a one-time job that survives weather and chewing. This is the item that turns a recurring autumn problem into a solved one.',
                search: 'hardware cloth 1/4 inch galvanized',
                pros: ['Permanent fix for openings too big to stuff', 'Quarter-inch mesh is genuinely mouse-proof', 'Also excludes chipmunks, rats and nesting birds'],
                cons: ['Needs tin snips, gloves and a bit of patience', 'Must not block a vent that needs airflow — screen it, do not seal it'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Already have mice?</strong> Exclusion fill and traps, bought together and used the same day &mdash; sealing without trapping locks them in, trapping without sealing invites replacements. <strong>Preventing, not reacting?</strong> Start at the garage door, then the exterior door sweeps, then the vents. <strong>Protecting a stored vehicle or a closed cottage?</strong> This is the one situation where scent products and deterrent tape genuinely earn a place, on top of sealing rather than instead of it. <strong>Chewed wiring specifically?</strong> The deterrent tape, and see our <Link href="/blog/how-to-keep-mice-out-of-your-car">guide to keeping mice out of a car</Link>. <strong>Recurring every autumn?</strong> You have an opening, not a visitor &mdash; buy hardware cloth and walk the whole perimeter.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Mechanism Check</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">The Six Things Sold as &ldquo;Mouse Repellent&rdquo; &mdash; and What Each One Does</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            &ldquo;Mouse repellent&rdquo; is a shelf label, not a mechanism. These six products work in completely different ways, and most of the disappointment comes from buying one that physically cannot reach the animal.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">How it is meant to work</th>
                  <th className="px-4 py-3 text-left">Reaches a nesting mouse?</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ultrasonic plug-in</td>
                  <td className="px-4 py-3 text-gray-700">High-frequency sound intended to be intolerable</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; blocked by walls, cabinets and insulation</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Skip.</strong> The clearest no on the page</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Peppermint / essential-oil pouches</td>
                  <td className="px-4 py-3 text-gray-700">Strong volatile odour intended to cause avoidance</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Barely</strong> &mdash; only in a small sealed space, and only while fresh</td>
                  <td className="px-4 py-3 text-gray-700">Narrow use: stored vehicles, closed cottages, sealed drawers</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Predator-scent granules</td>
                  <td className="px-4 py-3 text-gray-700">Fox or coyote urine compounds intended to trigger fear</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; outdoor product, washes out, indoor mice ignore it</td>
                  <td className="px-4 py-3 text-gray-700">Not worth buying for a house mouse problem</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Capsaicin tape / loom<br /><span className="font-normal text-xs text-gray-500">sold as an automotive part &mdash; a device, not a pesticide</span></td>
                  <td className="px-4 py-3 text-gray-700">Taste deterrent applied directly to the wire</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; for the specific behaviour of chewing that wire</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The one that makes sense</strong>, in vehicles and equipment</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Mothballs</td>
                  <td className="px-4 py-3 text-gray-700">Sublimating vapour, labelled for fabric pests in sealed containers</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; and the vapour level needed would be unsafe for you</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Illegal off-label use.</strong> Never do this</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Exclusion hardware</td>
                  <td className="px-4 py-3 text-gray-700">Removes the opening. Not a repellent at all</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Ends the entry route permanently</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Buy this instead</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Two different rules apply to the rows above. Hardware and devices &mdash; steel wool, hardware cloth, door seals, traps, and deterrent tape sold as an automotive part &mdash; are not pesticides and need no registration. Anything making a pest-control claim through an active ingredient, including scent sprays and sachets and every rodenticide, should carry a PCP registration number on its Canadian label; check for it and confirm the listing is sold and shipped within Canada.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Why Repellents Lose to a Canadian October</h2>
          <p>A repellent asks an animal to make a trade: put up with something unpleasant, or go somewhere else. That trade is winnable when the alternative is mildly worse. It is not winnable when the alternative is a frozen field.</p>
          <p>By late September, a heated house in Ontario offers a house mouse everything it needs in one package &mdash; stable warmth, unlimited nesting material in insulation and stored cardboard, food it can reach, and dense cover inside wall voids where nothing can follow. A cotton ball soaked in peppermint oil is a nuisance. It is not a competing offer. There is also a structural reason a scent product can look better on first impression than it turns out to be: it is at its most potent the day you open it and weaker every day after, so how it performs in its first week is not evidence of how it performs in its fourth.</p>
          <p>Two biological details make it worse. Mice habituate: a stimulus that is unpleasant but never actually harmful stops being avoided once the animal has crossed it a few times without consequence. And mice spend the great majority of their time inside structure &mdash; wall cavities, subfloors, soffits, the space above a dropped ceiling &mdash; where an airborne odour in the living room simply does not reach. You can perfume a kitchen thoroughly and change nothing about the nest four inches inside the wall behind the dishwasher.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">The short list that replaces a repellent, in the order you should buy it. Note what these have in common: every product linked anywhere on this page is hardware &mdash; a device rather than a pesticide &mdash; so none of them needs a PCP number, and none of them is the sort of unregistered grey-market repellent the label section warns you off.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="stainless steel wool rodent exclusion">Steel wool fill &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="victor mouse trap 4 pack">Snap traps &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="rodent proof garage door seal">Garage door seal &rarr;</BuyLink>
          </div>

          <h2>Ultrasonic Repellers: The Clearest No in Pest Control</h2>
          <p>Of everything on this page, ultrasonic devices are the easiest to dismiss. The physics alone does most of the work: ultrasound is highly directional, loses energy quickly with distance, and is absorbed or reflected by ordinary furnishings. A plug-in in a hallway does not penetrate a stud bay, an insulated attic floor, or a kitchen cabinet run &mdash; which is exactly where mice are. Then add habituation, and even the animals within earshot stop reacting.</p>
          <p>The enforcement record here is American, and it is worth stating precisely rather than gesturing at &ldquo;regulators&rdquo; generally. In May 2001 the US Federal Trade Commission sent warning letters to more than 60 manufacturers and retailers of ultrasonic pest-control devices, and in 2002 it charged Lentek International over unsubstantiated efficacy claims for its pest-repelling products. Canada has no equivalent enforcement history &mdash; but that is a gap in oversight rather than a difference in the hardware, because these devices contain no pesticide, fall outside the Pest Control Products Act, and so have their efficacy claims reviewed by nobody here before sale. We go through the specific claims, the testing history and the reason the category persists in <Link href="/blog/ultrasonic-pest-repellers-do-they-work">our ultrasonic pest repeller review</Link>. If you own one, do not throw it out expecting a refund fight to be worth it &mdash; just do not let it stand in for the sealing work.</p>

          <h2>Peppermint and the Scent Products: A Narrow Honest Use</h2>
          <p>We are not going to pretend peppermint does nothing. Concentrated aromatic oils are irritating to a small mammal at close range, and in a genuinely enclosed volume &mdash; a sealed drawer, a stored RV with the vents screened, a boat under a cover, a cottage closed for the winter &mdash; putting sachets or oil-soaked cotton in the space is a cheap layer that costs you nothing but a few dollars and does no harm.</p>
          <p>What it will not do is remove mice from a lived-in house. The volatile that provides the effect is also the reason the effect ends: it evaporates. Within days the concentration falls below anything that matters, which converts the product from a solution into a subscription, and refreshing sachets every week in an attic is a worse use of an afternoon than sealing the soffit gap once. A hungry animal will also cross an unpleasant smell to reach food &mdash; motivation beats mild aversion every time.</p>
          <p>Use scent products where you cannot trap and cannot inspect, on top of sealing. Do not use them as the plan.</p>

          <h2>Mothballs: The One to Actively Avoid</h2>
          <p>This is the part of the page that matters most for safety. Mothballs are a registered pesticide, and their label restricts them to use inside a sealed container with fabrics &mdash; because the entire mechanism is a solid that sublimates into a heavy vapour and builds concentration in an enclosed space. That is the design.</p>
          <p>Scattering them loose in an attic, a crawl space, a wall void or under a porch is an off-label use, and in Canada the label is the law: a pesticide may only be used in the manner its label directs. It is also ineffective, because in an open or ventilated space you cannot reach a concentration a mouse cares about. And it is genuinely hazardous &mdash; the vapour concentration that would bother a rodent is far above what is safe for people to breathe, the smell permeates building materials and lingers for years, and public health agencies have warned specifically against this practice. Homeowners who do it frequently end up paying to remediate the smell later, while still having mice.</p>

          <h2>Reading a Canadian Label Before You Buy</h2>
          <p><strong>Start by asking whether the thing in your cart is a pesticide or a device, because only one of them is registered.</strong> Physical and electronic deterrents &mdash; deterrent tape sold as an automotive part, strobe and ultrasonic units, steel mesh and hardware cloth, door seals, traps &mdash; are devices, not pesticides, so they need no Health Canada registration at all, and the absence of a PCP number on them means nothing. Products sold as repellents with an active ingredient making a pest-control claim &mdash; peppermint-oil sprays and pouches among them &mdash; generally fall under pesticide rules, and that is where the check below applies. It is worth being precise about this, because &ldquo;no PCP number&rdquo; is a decisive objection to a scent spray and simply irrelevant to a roll of tape.</p>
          <p>Rodent products are one of the categories where American advice travels badly. Any product sold in Canada that makes a pest-control claim through an active ingredient falls under the Pest Control Products Act and must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency unless it qualifies for a specific Canadian exemption, and a registered product carries a PCP registration number on its Canadian label. The American &ldquo;minimum risk&rdquo; exemption that lets many US essential-oil repellents skip federal registration is a United States rule; it says nothing whatsoever about whether a product is legal to sell as a pesticide here.</p>
          <p>The practical checks before you order anything with a repellency or kill claim: is there a Canadian registration number on the label, and is the listing sold and shipped from within Canada? A marketplace seller shipping a US-labelled product to a Canadian address is not evidence of anything except that shipping is possible. The same logic applies with more force to rodenticides, where Canada&rsquo;s consumer rules are meaningfully stricter than the American ones &mdash; we cover exactly which actives homeowners may legally buy here in <Link href="/blog/rat-poison-canada-what-is-legal">what rat poison is legal in Canada</Link>.</p>

          <h2>What to Do Instead, in Order</h2>
          <p>The replacement plan is three items long and none of them is a repellent.</p>
          <p><strong>1. Close the openings.</strong> A mouse needs about 6 mm &mdash; the width of a pencil &mdash; because the skull is the only rigid part of the animal. Walk the perimeter with a torch and look at the boring things: the gap under the garage door, the sill plate seam, brick weep holes, dryer and bathroom vents with broken flaps, the penetrations where gas lines, cable and air-conditioning linesets enter, the space where a deck ledger meets the wall, and the corners of soffits. Pack coarse stainless steel wool or copper mesh tight into small gaps and cap with exterior sealant; screw quarter-inch galvanized hardware cloth over anything larger, and screen vents rather than sealing them. Never rely on expanding foam alone &mdash; mice chew cured foam easily, so foam is a cosmetic cap over a metal core, not a barrier. The room-by-room hardware list is in our <Link href="/blog/rodent-exclusion-kit-canada">rodent exclusion kit guide</Link>.</p>
          <p><strong>2. Set a real trap line, all at once.</strong> House mice are inquisitive rather than trap-shy, which is why the first night is normally the biggest catch of the whole job and why setting two traps and waiting is the classic failure. Buy far more than feels reasonable and place them at close intervals along walls, trigger end against the baseboard, in the runways that droppings and grease marks reveal. Bait sparingly with something sticky rather than piling it on. Models, triggers and the electronic-versus-snap question are compared in <Link href="/blog/best-mouse-trap-canada">the best mouse trap guide</Link>, and if you would rather use enclosed bait, read the <Link href="/blog/mouse-bait-station-canada">bait station guide</Link> first &mdash; a poisoned mouse dying inside a wall is a genuinely bad outcome.</p>
          <p><strong>3. Remove the reason to stay.</strong> Decant pantry staples, pet food and birdseed into hard containers, deal with the bird feeder if it is next to the house, and cut the clutter that provides nesting cover in a garage or basement. This is the slowest lever and the one that decides whether next autumn is a repeat.</p>

          <h2>The Timing Nobody Uses</h2>
          <p>Interest in mouse products climbs steeply through the autumn and peaks well after the useful window has closed. The animals that establish inside a house do so as night temperatures drop &mdash; through September and October in southern Ontario &mdash; and the population you are fighting in January is descended from that move.</p>
          <p>That makes late August and September the highest-value weeks of the year for this work, and it is the single scheduling change that separates a household that fights mice every winter from one that does not. Seal before the push, not after it. If you are reading this in November with droppings already under the sink, the order changes: trap first so you are not sealing animals inside, then close the openings once the catch rate falls to zero, and keep sentinel traps down for a week of quiet before you call it finished. Our <Link href="/blog/how-to-keep-mice-out-of-your-house-winter">winter mouse-proofing guide</Link> covers that reversed sequence.</p>

          <h2>When a Professional Is the Cheaper Option</h2>
          <p>DIY exclusion and trapping handle the great majority of Canadian house-mouse problems for the price of a hardware run. Four situations genuinely justify paying someone, and in three of them the DIY route ends up more expensive:</p>
          <ul>
            <li><strong>Attic or wall-void populations with contaminated insulation.</strong> Once insulation is soiled it needs removing and replacing, which is a licensed remediation job, not a trap-line job.</li>
            <li><strong>Anything above a ladder you should not be on.</strong> Soffits, roof vents and second-storey gaps are where most reinfestations originate and where most homeowner injuries happen.</li>
            <li><strong>Multi-unit buildings.</strong> If you share walls, your exclusion work redirects mice rather than removing them, and the fix is a building-level programme through the property manager.</li>
            <li><strong>You are not sure it is mice.</strong> Squirrels, bats and mice sound alike through a ceiling and need entirely different, legally different work &mdash; particularly bats, several species of which are protected in Ontario and cannot simply be sealed in. Identify before you buy.</li>
          </ul>
          <p>For a sense of what general pest work costs in Canada so you can sanity-check a quote, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>

          <h2>What Not to Buy at All</h2>
          <ul>
            <li><strong>Ultrasonic and electromagnetic plug-ins.</strong> The physics does not work indoors and the animals habituate.</li>
            <li><strong>Mothballs used as a rodent repellent.</strong> Off-label, ineffective in open air, and a real inhalation hazard.</li>
            <li><strong>Dryer sheets, steel-wool-free &ldquo;natural&rdquo; sprays, and peppermint plug-ins for a lived-in house.</strong> Short-lived at best.</li>
            <li><strong>Glue boards, for most households.</strong> They catch mice, and they also produce a prolonged, distressing death and frequently catch non-target animals. A snap trap is faster, cheaper and more humane; if you want a live-release option, read the trade-offs first in <Link href="/blog/best-mouse-trap-canada">our trap guide</Link>.</li>
            <li><strong>Rodenticide bought before traps.</strong> Poison should be a considered second step in specific outdoor situations, not the reflex first purchase &mdash; and much of what American guides recommend cannot legally be sold to Canadian consumers.</li>
            <li><strong>Any spray, sachet or rodenticide that makes a pest-control claim through an active ingredient and shows no PCP number on a Canadian label.</strong> Unregistered here, whatever the seller is willing to ship. This is a test for pesticides, not for hardware &mdash; mesh, seals, traps and deterrent tape sold as an auto part are devices and never carry one.</li>
          </ul>

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
            <li><strong>Start here if you already have mice:</strong> <Link href="/blog/how-to-get-rid-of-mice-canada">How to Get Rid of Mice in Canada — The Full Sequence</Link></li>
            <li><Link href="/blog/rodent-exclusion-kit-canada">Rodent Exclusion Kit — The Hardware Spec, Room by Room</Link></li>
            <li><Link href="/blog/best-mouse-trap-canada">Best Mouse Traps in Canada — Snap, Electronic and Live-Catch Compared</Link></li>
            <li><Link href="/blog/mouse-bait-station-canada">Mouse Bait Stations in Canada — When Enclosed Bait Beats a Trap</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-house-winter">Keeping Mice Out Over Winter — The Reversed Sequence</Link></li>
            <li><Link href="/blog/how-to-keep-mice-out-of-your-car">How to Keep Mice Out of Your Car</Link></li>
            <li><Link href="/blog/best-rodent-repellent-for-cars-canada">Rodent Repellents for Vehicles — The One Place They Belong</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Work? The Honest Answer</Link></li>
            <li><Link href="/blog/rat-poison-canada-what-is-legal">What Rat Poison Is Legal in Canada</Link></li>
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
        subtext="We don't do rodent work — but the same gaps, clutter and moisture that let mice in are what drive mosquito and tick pressure in your yard. Free assessment across 19 GTA cities."
      />
    </>
  )
}
