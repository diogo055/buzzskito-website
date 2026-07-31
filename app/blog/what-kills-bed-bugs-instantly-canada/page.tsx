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

const SLUG = 'what-kills-bed-bugs-instantly-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// The SPEED axis, deliberately. Not a spray-efficacy page (that is
// do-bed-bug-sprays-actually-work), not a product shelf (bed-bug-spray-canada),
// not a protocol (how-to-get-rid-of-bed-bugs-canada). This page answers exactly
// one question — what kills a bed bug in seconds — and then explains honestly why
// speed is the wrong thing to optimise for.
const TITLE = 'What Kills Bed Bugs Instantly in Canada — The Short List That Works on Contact, and Why Instant Is the Wrong Goal'
const META_TITLE = 'What Kills Bed Bugs Instantly? Canada Guide'

const FAQS = [
  {
    question: 'What kills bed bugs instantly?',
    answer: 'Three things, and only on the bug they physically touch. Steam from a dry-vapour steamer kills on contact, because the vapour at the nozzle is far above the temperature bed bugs and their eggs survive. A direct, thorough hit from a PMRA-registered contact insecticide kills within seconds to minutes while the surface is still wet. And physical force — crushing, or being drawn into a vacuum — removes an individual immediately. That is the honest list. Everything else marketed as instant is either slow (desiccant dusts take days), unreliable (alcohol and home remedies), or unable to reach the insect at all (foggers). Nothing on that list kills an infestation instantly, because most of an infestation is somewhere your instant method cannot reach.',
  },
  {
    question: 'Does rubbing alcohol kill bed bugs instantly?',
    answer: 'It kills some of the bugs it directly soaks, it leaves nothing behind once it evaporates, and it is a genuine fire hazard — which is why every serious source in Canada tells you not to use it. Isopropyl alcohol is highly flammable, and spraying it in volume around a bedroom puts a flammable liquid and its vapour across bedding, mattresses and upholstery near pilot lights, space heaters, cigarettes and electrical outlets. House fires have been started this way. Beyond the fire risk it fails on its own terms: it has no residual action whatsoever, so bugs that were in a crack when you sprayed simply walk out afterwards onto a dry, harmless surface. A registered contact spray costs about the same and does the same job without the hazard.',
  },
  {
    question: 'What is the fastest thing that actually reaches hidden bed bugs?',
    answer: 'Heat, applied to a whole item or a whole room rather than a surface. A heated chamber holds a suitcase, a backpack, bedding or a small piece of furniture in the 120–130°F (roughly 49–54°C) band that University of Kentucky extension guidance describes professional heat treatments using, and holds it there until the core of the contents reaches that temperature — hours rather than minutes for anything packed or bulky — so the heat soaks through folds, seams and stuffing until nothing inside survives, eggs included. That is not instant, but it is the only method that gives certainty on an object without you having to find every bug on it. Steam is faster per surface and blind to what it does not touch; dusts are slower and reach voids; a chamber is the one tool that treats everything inside a boundary. For anything that fits in a dryer, 30 minutes on high heat does the same job for free.',
  },
  {
    question: 'Do bed bug sprays kill on contact?',
    answer: 'Registered contact products kill the bugs they thoroughly wet, usually within seconds to minutes. Two limits decide how much that is worth. First, coverage: bed bugs spend the overwhelming majority of their lives inside seams, screw holes, frame joints and wall voids, so a spray only ever reaches the small fraction that happens to be exposed and directly hit. Second, resistance: insecticide resistance in bed bug populations is well documented — University of Kentucky extension guidance describes bed bugs as increasingly resistant to pesticides — and it means a bug can be sprayed, survive, and walk away. That is why the honest framing is that a contact spray is a tool for the bug in front of you rather than a treatment for the room around you. Our full assessment is in our guide to whether bed bug sprays actually work.',
  },
  {
    question: 'Does steam kill bed bugs and their eggs instantly?',
    answer: 'Yes, where the vapour actually lands — and technique decides how much of the surface that is. The US EPA sets a floor of 130°F (about 54°C) for steam used against bed bugs, and vapour at a steamer nozzle is well above that, so contact is lethal to every life stage, eggs included. Two rules make the difference between a treatment and a mess. Move slowly, roughly a few centimetres per second, because heat needs dwell time to penetrate fabric and reach an egg glued inside a seam. And use a low-airflow tip with a cloth cover: a high-pressure jet blows bugs and eggs off the surface and across the room instead of killing them. Steam is the best instant tool available to a homeowner, and it is blind — it does nothing to the bugs in the wall void behind the headboard.',
  },
  {
    question: 'Does freezing kill bed bugs quickly?',
    answer: 'No — cold works, but it is the slowest method on the list, and treating it as a quick fix is how people waste a week. The EPA’s guidance is to seal the item in a bag and leave it in a freezer set to 0°F — about −18°C — for at least three days, and the item has to actually reach that core temperature throughout, so give anything bulky longer than the minimum. A standalone chest freezer holds that reliably; a self-defrosting fridge-freezer cycles warmer and is not dependable. Freezing is genuinely useful for heat-sensitive items you can spare for the better part of a week — books, some electronics-adjacent goods, delicate fabrics — and it is the wrong tool for anything urgent. Putting something outside on a cold Canadian night does not work: temperatures swing, and brief cold is not lethal.',
  },
  {
    question: 'Will a bug bomb or fogger kill bed bugs fast?',
    answer: 'No, and it is the worst purchase in this category. A total-release fogger disperses an aerosol through open air that settles on exposed surfaces — while bed bugs are inside mattress seams, box spring frames, screw holes, headboard voids and baseboard gaps that an aerosol cloud does not enter. You get residue on every surface in the room and very little contact with the target. Worse, the repellent character of some formulations can drive bugs deeper into voids and outward into adjacent rooms or, in an apartment, adjacent units, which turns one bedroom into a bigger problem. If someone in a hardware aisle recommends a fogger for bed bugs, that is a reliable signal to get advice somewhere else.',
  },
  {
    question: 'What about diatomaceous earth and silica gel — are those instant?',
    answer: 'They are the opposite of instant, and that is exactly why they are worth buying. Desiccant dusts kill mechanically by abrading and absorbing the waxy layer that holds an insect’s moisture in, so a bed bug that crosses a thin film dies of dehydration over roughly a few days rather than on the spot. The slowness is the feature: the dust sits in the cracks, voids and frame joints where the bugs live and keeps working long after you have left the room, which is precisely the coverage a contact spray cannot buy. Apply it as a barely visible film with a duster — a visible pile gets walked around — and buy a product whose Canadian label carries a PCP registration number and lists bed bugs.',
  },
  {
    question: 'Why can I not just kill them all quickly?',
    answer: 'Because of where they are and what the eggs do. At any moment the great majority of a bed bug population is not on a mattress surface waiting to be hit — it is packed into seams, screw holes, frame joints, behind baseboards, inside a headboard and in wall voids, and much of it is eggs, which are glued in place, shielded by a shell that most contact insecticides do not penetrate, and continue hatching for a couple of weeks after you treat. An instant method that reaches only the handful of exposed bugs and none of the eggs leaves you close to where you started, only poorer and with a population that has been scattered. That is why every credible protocol combines something instant with something residual, and repeats.',
  },
  {
    question: 'Which of these can I legally buy in Canada?',
    answer: 'Steamers, heated chambers, vacuums and desiccant dusts are straightforward — the only check on the dust is a PCP registration number on the Canadian label. Insecticides are where Canadian and American advice diverge sharply: several products American guides recommend by name, including the professional combination products people ask about most, are not registered for sale or use in Canada, and a marketplace listing shipping one north is an unregistered pesticide here, not a bargain. The rule is simple and it is the whole rule: the label must carry a PCP registration number, list bed bugs as a target pest, and list the surface you intend to treat as a use site. Our Canadian bed bug spray guide lists what is genuinely sold here.',
  },
  {
    question: 'What is the fastest realistic path from finding bed bugs to being rid of them?',
    answer: 'Confirm, then heat what you can, then dust what you cannot, then monitor and repeat — and start it the day you find evidence rather than after a month of single-product experiments. Practically: interceptors under the bed legs so you can measure progress; encasements on the mattress and box spring so the biggest harbourage is sealed; a slow, thorough steam pass over seams, frame joints and the headboard; a registered desiccant dust laid as a thin film into the voids you cannot steam; everything washable through a hot dryer; and a second and third pass on the schedule your monitors dictate. In a multi-unit building, or after one failed attempt, calling a professional early is usually the genuinely fastest route and often the cheapest.',
  },
  {
    question: 'When is a professional faster and cheaper than doing it myself?',
    answer: 'When the infestation is established beyond a single bed, when you live in an apartment or condo, when the affected person is elderly, immunocompromised or a young child, or when you have already tried once and failed. Professional heat raises a whole room above the lethal threshold and holds it there, which does in a day what a DIY campaign attempts over weeks — and the arithmetic usually favours it once you count three rounds of products, weeks of poor sleep, and the cost of a failed attempt that has scattered the population deeper into the structure. BuzzSkito treats mosquitoes and ticks and does not sell bed bug service, so we have no referral in this: hire early if the situation matches those descriptions.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'What kills bed bugs instantly in Canada: steam, direct heat and a registered contact spray — plus why alcohol is a fire risk and foggers never reach them.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function WhatKillsBedBugsInstantlyCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to what kills bed bugs instantly: the three contact-lethal methods (steam, direct heat, a registered contact spray), a speed-versus-reach comparison of every method, why isopropyl alcohol is a fire hazard, why foggers cannot reach harbourage, the role of slow desiccant dusts, and the realistic fastest path to elimination.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Kills Bed Bugs Instantly', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">What Kills Bed Bugs Instantly</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Three things kill a bed bug in seconds, and all three are blind &mdash; they only kill what they physically touch. The bugs you cannot see are the entire problem, which is why the fastest route to an empty bedroom is not the fastest-acting product.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Dry-vapour steamer — the genuinely instant tool" search="bed bug steamer dry vapour" label="Kills on contact" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Three things kill a bed bug instantly: <strong>steam</strong> from a dry-vapour steamer, which is lethal to every life stage including eggs where the vapour lands; <strong>direct sustained heat</strong>, such as a hot dryer cycle or a heated chamber; and <strong>a thorough direct hit from a PMRA-registered contact spray</strong>, while the surface is still wet. Physical crushing and vacuuming remove individuals immediately too. What none of them do is kill an infestation instantly, because most bed bugs are inside seams, screw holes, frame joints and wall voids, and the eggs keep hatching for weeks. <strong>Do not use rubbing alcohol</strong> &mdash; it is a documented fire hazard with no residual effect &mdash; and do not use a fogger, which cannot reach where they live.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Steam is the best instant tool</strong>, and it is blind &mdash; slow passes only, low airflow, or you blow bugs across the room.</li>
              <li><strong>Heat is the only method that treats a whole item</strong>: the 120&ndash;130&deg;F (49&ndash;54&deg;C) band, held until the core of the contents gets there, or 30+ minutes in a hot dryer.</li>
              <li><strong>Desiccant dusts are deliberately slow</strong> &mdash; days, not seconds &mdash; and that is why they reach what steam cannot.</li>
              <li><strong>Insecticide resistance in bed bugs is well documented</strong>, so a sprayed bug can survive and walk away.</li>
              <li><strong>Freezing works but needs a sealed bag at 0&deg;F (&minus;18&deg;C) for days</strong> &mdash; not a fast option, and a cold night outdoors does not count.</li>
              <li><strong>Never buy:</strong> foggers, ultrasonic devices, essential-oil sprays, or grey-market US insecticides with no PCP number.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <div className="not-prose rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Where this page sits</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>This page is about speed</strong> &mdash; what is lethal on contact, what is lethal slowly, and what is never lethal at all, ranked on how fast each one works and what it can physically reach.
              <br className="hidden sm:block" />
              <strong className="block mt-2">If you want the other axes:</strong> <Link href="/blog/do-bed-bug-sprays-actually-work" className="text-emerald-700 underline font-semibold">do bed bug sprays actually work</Link> covers spray efficacy and resistance in depth; <Link href="/blog/bed-bug-spray-canada" className="text-emerald-700 underline font-semibold">bed bug sprays sold in Canada</Link> is the product shelf and the PMRA legality list; and <Link href="/blog/how-to-get-rid-of-bed-bugs-canada" className="text-emerald-700 underline font-semibold">how to get rid of bed bugs in Canada</Link> is the full step-by-step protocol from confirmation to zero.
            </p>
          </div>

          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Speed vs Reach</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Every Method, Ranked by How Fast It Kills and What It Can Actually Touch</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The two columns that matter are next to each other on purpose. Almost every disappointing bed bug outcome comes from buying something excellent in the first column and assuming it delivers the second.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">Speed on a bug it touches</th>
                  <th className="px-4 py-3 text-left">Reaches hidden bugs?</th>
                  <th className="px-4 py-3 text-left">Kills eggs?</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Dry-vapour steam</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Instant</strong> &mdash; on contact</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Only where vapour penetrates</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong>, where it lands</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The best instant tool.</strong> Slow passes, low airflow</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Hot dryer<br /><span className="font-normal text-xs text-gray-500">30+ min on high</span></td>
                  <td className="px-4 py-3 text-gray-700">Minutes</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Everything inside the drum</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best value anywhere.</strong> Free, and total for what fits</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Heated chamber / whole-room heat<br /><span className="font-normal text-xs text-gray-500">120&ndash;130&deg;F, held</span></td>
                  <td className="px-4 py-3 text-gray-700">Hours of dwell, not minutes</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Everything inside the boundary</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong></td>
                  <td className="px-4 py-3 text-gray-700">Not instant &mdash; the only method that gives certainty</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Registered contact spray</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Seconds to minutes</strong>, while wet</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; only direct hits</td>
                  <td className="px-4 py-3 text-gray-700">Mostly no</td>
                  <td className="px-4 py-3 text-gray-700">For the bug in front of you. Resistance is real</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Desiccant dust<br /><span className="font-normal text-xs text-gray-500">silica gel or DE</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Days</strong> &mdash; dehydration</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; sits in the voids</td>
                  <td className="px-4 py-3 text-gray-700">No &mdash; but kills hatchlings</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Slow on purpose.</strong> The reach steam cannot buy</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Vacuuming</td>
                  <td className="px-4 py-3 text-gray-700">Instant removal, not a kill</td>
                  <td className="px-4 py-3 text-gray-700">Crevice tool reaches some</td>
                  <td className="px-4 py-3 text-gray-700">Eggs are glued &mdash; mostly no</td>
                  <td className="px-4 py-3 text-gray-700">Useful first pass. Bag and bin outdoors immediately</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Freezing<br /><span className="font-normal text-xs text-gray-500">0&deg;F / &minus;18&deg;C, sealed</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Days</strong></td>
                  <td className="px-4 py-3 text-gray-700">Only what fits in the freezer</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong>, if held long enough</td>
                  <td className="px-4 py-3 text-gray-700">Backup for heat-sensitive items only</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Isopropyl alcohol</td>
                  <td className="px-4 py-3 text-gray-700">Kills some it soaks</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; zero residual</td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Do not.</strong> A documented fire hazard</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Fogger / bug bomb</td>
                  <td className="px-4 py-3 text-gray-700">Irrelevant</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; and can scatter them</td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">The worst buy in the category</strong></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ultrasonic, essential oils, vinegar, baking soda</td>
                  <td className="px-4 py-3 text-gray-700">No established effect</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong></td>
                  <td className="px-4 py-3 text-gray-700">No</td>
                  <td className="px-4 py-3 text-gray-700">Money that should have bought a steamer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Before buying any pesticide in Canada, confirm the listing is sold and shipped within Canada and that the label carries a PCP (Pest Control Products) registration number, lists bed bugs, and lists the surface you intend to treat.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Fast Tools, and the Slow One That Finishes the Job"
            awards={[
              {
                badge: 'Genuinely Instant',
                name: 'Dry-Vapour Steamer',
                why: 'The one tool that kills on contact and takes eggs with it. Vapour at the nozzle is far above the temperature bed bugs and their eggs survive, so a slow pass along mattress piping, box spring frames, headboard joints and baseboard seams is lethal to everything it penetrates — with no residue in a room where somebody sleeps. Buy a low-airflow tip and use it slowly; that detail matters more than the machine.',
                search: 'bed bug steamer dry vapour',
                featured: true,
                pros: ['Kills every life stage, eggs included, on contact', 'No chemical residue in a bedroom', 'Nothing can develop resistance to heat'],
                cons: ['Completely blind — only kills what the vapour reaches', 'A fast or high-pressure pass scatters bugs instead of killing them'],
              },
              {
                badge: 'Best Reach (Slow on Purpose)',
                name: 'Safer’s Diatomaceous Earth + Bulb Duster',
                why: 'The opposite of instant, and the reason a treatment holds. A barely visible film of desiccant dust laid into frame joints, screw holes, the void behind a headboard and along baseboard gaps keeps killing for weeks after you leave the room — which is exactly the coverage a contact spray cannot buy at any price. Safer’s is the PMRA-registered insecticidal diatomaceous earth most widely stocked in Canada, and the PCP registration number is printed on the bag — confirm bed bugs are on the pest list of the bag you pick, because label pest lists differ from product to product. Budget for a bulb duster in the same order; the thin film is what kills.',
                search: 'safers diatomaceous earth',
                pros: ['Reaches the voids where the population actually lives', 'Mechanical kill — resistance cannot develop', 'Keeps working long after application'],
                cons: ['Takes days, not seconds — never a panic purchase', 'A visible pile gets walked around; you need a duster for a thin film'],
              },
              {
                badge: 'Best for Whole Items',
                name: 'Heated Chamber / Portable Luggage Heater',
                why: 'The only method that delivers certainty on an object rather than a surface. An insulated chamber holds a suitcase, backpack, bedding, shoes or a small piece of furniture in the 120–130°F (roughly 49–54°C) band professional heat treatments use, and holds it there until the core of the contents gets there — soaking heat into folds and stuffing until nothing inside survives. For everything that fits in a dryer, 30 minutes on high does the same job for nothing — buy the chamber for what does not.',
                search: 'bed bug heater bag luggage heat treatment',
                pros: ['Treats everything inside the boundary, eggs included', 'No chemicals near clothing or bedding', 'Reusable every time you travel'],
                cons: ['Not instant — hours of dwell time, not minutes', 'Only as good as what physically fits inside it'],
              },
              {
                badge: 'Best Contact Spray',
                name: 'Doktor Doom Sleep Tight',
                why: 'Worth owning for what it genuinely does: killing the bug you can see, right now, before it disappears into a seam. Sleep Tight is a PMRA domestic-class registered pyrethrin spray and one of the few sold in Canada labelled for direct application to a mattress and box spring — read the current label before you use it, because Canadian formulations get revised. Treat it as a spot tool rather than a room treatment: the professional combination products American guides name are largely not registered here, and importing one is not a shortcut.',
                search: 'doktor doom sleep tight bed bug spray',
                pros: ['Immediate kill on a thorough direct hit', 'PMRA-registered and sold in Canada — the PCP number is on the can', 'Labelled for the bed itself, not only the perimeter'],
                cons: ['Reaches only exposed bugs — a small share of a population', 'Resistance to pyrethrin and pyrethroid chemistry is well documented'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Want something lethal in your hand tonight?</strong> The <em>Genuinely Instant</em> steamer &mdash; full machine comparison in our <Link href="/blog/best-bed-bug-steamer-canada">Canadian bed bug steamer guide</Link>. <strong>Want the treatment to still be working next week?</strong> The <em>Best Reach</em> dust is the one that finishes the job, and our <Link href="/blog/best-bed-bug-powder-canada">bed bug powder comparison</Link> covers silica gel versus diatomaceous earth. <strong>Luggage, shoes or a chair you cannot steam through?</strong> The <em>Best for Whole Items</em> chamber, or a hot dryer if it fits. <strong>Need to kill the one you are staring at?</strong> The <em>Best Contact Spray</em>, used as a spot tool &mdash; and read <Link href="/blog/do-bed-bug-sprays-actually-work">why sprays alone do not finish it</Link> before you rely on it.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Safety Notice &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">The One &ldquo;Instant&rdquo; Answer That Can Burn Your House Down</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Search this question anywhere and rubbing alcohol comes back near the top of the answers. It deserves its own section, because it is the only item on this page with a serious safety problem attached.
          </p>
          <div className="rounded-xl bg-red-50 border-l-4 border-red-500 p-5">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-red-900">Do not spray isopropyl alcohol around a bedroom for bed bugs.</strong> It is highly flammable, and the way people use it for this &mdash; a spray bottle emptied across a mattress, box spring, bed frame and upholstery &mdash; puts a flammable liquid and its vapour throughout a room that also contains electrical outlets, lamps, space heaters, candles, cigarettes and, in many homes, a pilot light nearby. House fires have been started exactly this way. And it fails on its own terms even when nothing catches: it kills only the bugs it directly soaks, evaporates within minutes, and leaves nothing behind &mdash; so the bugs that were tucked in a seam when you sprayed simply walk out afterwards onto a dry, harmless surface.
            </p>
            <p className="mt-3 text-sm text-gray-800 leading-relaxed">
              If what you want is something lethal on contact with no residue left in a room where you sleep, that already exists and it is safer: <strong>steam</strong>. It kills every life stage including eggs, it leaves nothing behind but a little moisture, and there is no fire risk in a bedroom full of fabric.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Instant Bed Bug Kill &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Kills on contact, instantly', 'Steam, a thorough direct hit from a registered contact spray, crushing'],
                  ['Kills fast and completely, within an item', 'Heat — a hot dryer, a heated chamber, or professional whole-room heat'],
                  ['Lethal temperature', '120–130°F (roughly 49–54°C) held until the core gets there kills every life stage, eggs included — the band professional heat uses'],
                  ['Hot dryer', '30+ minutes on high — the cheapest total kill available for anything that fits'],
                  ['Steam technique', 'Slow pass, a few centimetres per second, low-airflow tip — a jet blows bugs away instead'],
                  ['Kills slowly, on purpose', 'Desiccant dusts — days by dehydration, but they sit in the voids and keep working'],
                  ['Kills but very slowly', 'Freezing — sealed in a bag at 0°F (−18°C) for at least three days, right through to the core, longer if bulky'],
                  ['Removes instantly, does not kill', 'Vacuuming — bag it and bin it outdoors immediately'],
                  ['Never use', 'Isopropyl alcohol — a documented fire hazard with no residual effect'],
                  ['Never buy', 'Foggers and bug bombs, ultrasonic devices, essential-oil sprays, unregistered US imports'],
                  ['Why instant is not enough', 'Most of the population is in seams, joints and voids, and eggs keep hatching for weeks'],
                  ['Resistance', 'Insecticide resistance in bed bugs is well documented — a sprayed bug can survive'],
                  ['Canadian legality check', 'A PCP registration number, bed bugs on the pest list, your surface on the use-site list'],
                  ['The realistic fastest path', 'Confirm → encase and intercept → steam → dust the voids → hot dryer → repeat on the monitors'],
                  ['Call a professional immediately', 'Multi-unit housing, vulnerable occupant, spread beyond one bed, or one failed attempt'],
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

          <h2>The Honest Answer to the Question You Asked</h2>
          <p>You typed &ldquo;what kills bed bugs instantly&rdquo; because there is one in front of you, or because you have just confirmed them and you want this over. Both are reasonable, and the direct answer is short: <strong>steam, direct heat, and a thorough hit from a registered contact insecticide.</strong> Each of those kills a bed bug in seconds. Crushing works too, at the cost of a stain.</p>
          <p>The complication is not that those methods are weak. It is that all three are <em>blind</em>. They kill exactly what they physically touch and nothing else &mdash; and at any given moment, the great majority of a bed bug population is not on a surface where you can touch it. It is compressed into mattress piping, the folded seam of a box spring, the screw holes and joints of a bed frame, the hollow back of a headboard, the gap behind a baseboard, and, in an established infestation, the wall void behind all of it. On top of that sits the egg problem: eggs are glued in place, protected by a shell that most contact insecticides do not penetrate, and they go on hatching for a couple of weeks after you treat.</p>
          <p>So an instant method applied once produces a very specific and very common outcome: a satisfying evening, a quiet week, and bites again in the third week. Not because the product failed at what it does, but because it was asked to do a job it cannot physically perform. <strong>Speed and reach are different properties, and you need both.</strong></p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the tools that do the work:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="bed bug steamer dry vapour">Dry-vapour steamer &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Safer&rsquo;s registered DE &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bed bug heater bag luggage heat treatment">Heated chamber &rarr;</BuyLink>
          </div>

          <h2>Steam: The Best Instant Tool, and How to Not Waste It</h2>
          <p>If you want one thing that is lethal on contact to every life stage &mdash; adults, nymphs, and eggs &mdash; and that leaves no chemical residue in a room where somebody sleeps, it is a dry-vapour steamer. The US EPA&rsquo;s <a href="https://www.epa.gov/bedbugs/do-it-yourself-bed-bug-control" className="text-emerald-700 underline">do-it-yourself bed bug control</a> guidance sets a floor of 130&deg;F &mdash; about 54&deg;C &mdash; for steam used against bed bugs, and vapour at a steamer nozzle is well above that, so contact is decisive at every life stage. Nothing can evolve resistance to being cooked, which is why heat remains reliable while chemistry has not.</p>
          <p>Two technique points decide whether you have treated a bed or redecorated it:</p>
          <ul>
            <li><strong>Move slowly.</strong> Roughly a few centimetres per second. Heat needs dwell time to move through fabric and reach an egg glued inside a seam. A quick pass warms the surface and leaves the target untouched, which is the single most common way this tool disappoints people.</li>
            <li><strong>Use low airflow, with a cloth over the tip.</strong> A high-pressure jet does not kill a bed bug &mdash; it launches it. You want hot vapour delivered gently onto the surface, not a blast that scatters bugs and eggs into the rest of the room.</li>
          </ul>
          <p>Where to steam, in order: mattress piping and seams around the entire perimeter; the box spring, including the frame and the gauze underneath; the headboard, especially the back face and any bracket; every joint, bolt hole and slat rail on the frame; then the carpet edge and baseboard along the wall behind the bed. Let everything dry properly afterwards &mdash; you are adding moisture to a bedroom, and a damp mattress has its own problems. Our <Link href="/blog/best-bed-bug-steamer-canada">Canadian bed bug steamer guide</Link> covers what separates a machine that does this well from one that merely gets hot, and <Link href="/blog/steamer-vs-heater-for-bed-bugs-canada">steamer vs heater</Link> explains when a chamber is the better buy.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="bed bug steamer dry vapour">Check dry-vapour steamers on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Heat, Applied to a Whole Thing Instead of a Surface</h2>
          <p>Steam is fast and blind. Heat applied to an enclosed volume is slower and total, and that difference is worth understanding because it is where certainty comes from.</p>
          <p>The cheapest version is already in your house. A dryer run on high heat kills bed bugs at every life stage on anything that goes in it, and you can skip the wash entirely if the items are clean &mdash; it is the sustained heat doing the work, not the water. The University of Kentucky&rsquo;s <a href="https://entomology.ca.uky.edu/ef636" className="text-emerald-700 underline">entomology fact sheet on bed bugs</a> puts the requirement at 10 to 20 minutes at medium-to-high heat; a full 30-minute cycle on high is the margin worth taking, because a packed drum heats unevenly. Clothing, bedding, curtains, soft toys, shoes that tolerate it, the fabric bag you are worried about. This is genuinely the best-value action in the entire subject, and it costs a load of laundry.</p>
          <p>For what will not fit or will not survive a tumble, a heated chamber does the same thing in an insulated box: hold the contents in the 120&ndash;130&deg;F (roughly 49&ndash;54&deg;C) band that the same fact sheet describes professional heat treatments using, and hold it there long enough for the <em>core</em> of the contents to get there &mdash; hours rather than minutes for anything packed, padded or bulky &mdash; so the heat soaks through folds, seams and stuffing until every egg inside is cooked. Suitcases, backpacks, books, small upholstered items, boxes of belongings. And at the top end, a professional whole-room heat treatment applies the same principle to an entire bedroom &mdash; which is why it clears in a day what a DIY campaign attempts over weeks, and why it is often the cheaper option once the infestation is beyond one bed. Our guides to <Link href="/blog/bed-bug-heater-canada">bed bug heaters</Link>, <Link href="/blog/best-bed-bug-heat-chamber-canada">heat chambers</Link> and <Link href="/blog/bed-bug-heat-treatment-diy-canada">DIY heat treatment</Link> go through the equipment; the temperature logic is identical at every scale. Why an egg is the hardest thing in the room to kill, and what that means for timing your second and third pass, belongs to <Link href="/blog/how-to-kill-bed-bug-eggs-canada">how to kill bed bug eggs</Link> &mdash; this page is only concerned with how fast each method gets there.</p>

          <p>The mirror image of a chamber is a freezer, and it belongs here only so you know how slow it is. The EPA&rsquo;s guidance is to seal the item in a bag and leave it in a freezer set to 0&deg;F &mdash; about &minus;18&deg;C &mdash; for at least three days, and the item itself has to reach that temperature all the way through, so give anything bulky longer than the minimum. A standalone chest freezer holds that setting; a self-defrosting fridge-freezer cycles warmer and is not dependable. Cold is genuinely useful for heat-sensitive things you can spare for most of a week, and it is the wrong tool for anything urgent. Putting something outside on a cold Canadian night does not work &mdash; temperatures swing, and brief cold is not lethal.</p>

          <h2>Contact Sprays: Fast, Legal, and Narrower Than You Think</h2>
          <p>A PMRA-registered contact spray kills the bugs it thoroughly wets, usually in seconds to minutes. That is real and it is worth owning for exactly that purpose &mdash; the bug on the sheet at two in the morning, before it disappears into a seam you will never find.</p>
          <p>Two limits keep it from being the answer to your question. The first is coverage, which we have already been through: exposed bugs are a small fraction of a population. The second is resistance. Insecticide resistance in bed bug populations is well documented &mdash; the University of Kentucky&rsquo;s <a href="https://entomology.ca.uky.edu/ef636" className="text-emerald-700 underline">bed bug fact sheet</a> describes bed bugs as increasingly resistant to pesticides, in the way some bacteria have become resistant to antibiotics &mdash; and in practice it means a bug can be sprayed thoroughly, survive, and continue about its business. That is a genuinely dispiriting experience if you were counting on the can, and it is the reason no serious protocol rests on a spray alone.</p>
          <p>On legality, Canadian and American advice split hard here, and it matters because the products American guides name most confidently are frequently not available to you. The rule is short: the Canadian label must carry a <strong>PCP registration number</strong>, must list bed bugs as a target pest, and must list the surface you intend to treat as a use site. A marketplace listing shipping a US-labelled professional product into Canada is an unregistered pesticide here rather than an upgrade.</p>
          <p>The registered domestic-class cans you can actually buy here are a short list &mdash; <strong>Doktor Doom Sleep Tight</strong> is the one most commonly stocked and one of the few labelled for direct application to a mattress and box spring, with <strong>Knock Down Bed Bug Killer</strong> and <strong>Konk</strong> as registered stock-out substitutes rather than upgrades. Read whichever label you end up with, because Canadian formulations get revised. Our <Link href="/blog/bed-bug-spray-canada">guide to bed bug sprays sold in Canada</Link> goes through the full shelf, and <Link href="/blog/do-bed-bug-sprays-actually-work">do bed bug sprays actually work</Link> is the fuller argument about what they can and cannot deliver.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="doktor doom sleep tight bed bug spray">Check Doktor Doom Sleep Tight on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>The Slow Thing That Actually Finishes It</h2>
          <p>Here is the part that answers the question you did not ask. If instant methods only reach exposed bugs, something has to deal with the ones in the voids &mdash; and the tool for that works slowly by design.</p>
          <p>Desiccant dusts &mdash; silica gel and diatomaceous earth &mdash; kill mechanically, by abrading and absorbing the waxy layer that holds an insect&rsquo;s moisture in. A bed bug that crosses a thin film dehydrates and dies over roughly a few days. That sounds like a downgrade from a spray until you notice what it buys: the dust sits inside the frame joint, the screw hole, the void behind the headboard and the gap under the baseboard, and it keeps killing every bug that crosses it for weeks after you have left the room. Nothing can develop resistance to dehydration, and the dust does not expire while it stays dry.</p>
          <p>Application decides everything. Use a duster to lay a <em>barely visible film</em> &mdash; insects detect and walk around a visible pile, so a heavy application is worse than a light one &mdash; into joints, screw holes, the headboard void, the gap behind baseboards, and under a bed frame. Keep it out of the airway while applying, and keep it off surfaces people touch and sleep on.</p>
          <p><strong>Buy a dust sold as an insecticide, not as a food additive.</strong> That is a legal distinction in Canada rather than a mineralogical one: an insecticidal dust carries a PCP registration number and label directions that legally govern where you may put it, while &ldquo;food-grade&rdquo; diatomaceous earth sold as an anti-caking agent or feed additive carries no registration and no pest-use directions at all. <strong>Safer&rsquo;s Diatomaceous Earth</strong> is the registered insecticidal DE most widely stocked here and the PCP number is printed on the bag &mdash; check that bed bugs appear on the pest list of whichever bag you pick, since label pest lists differ from product to product. Our <Link href="/blog/best-bed-bug-powder-canada">bed bug powder guide</Link> compares silica gel against diatomaceous earth for this specific job, and <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth for bed bugs</Link> covers what DE can and cannot do here.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Check Safer&rsquo;s registered DE on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>What Never Kills Bed Bugs, No Matter What the Listing Says</h2>
          <ul>
            <li><strong>Foggers and bug bombs.</strong> The aerosol settles on exposed surfaces and does not enter the seams, joints and voids where bed bugs live. The repellent character of some formulations can also drive them deeper into a structure or outward into neighbouring rooms &mdash; in an apartment, into neighbouring units. This is the worst money in the category.</li>
            <li><strong>Ultrasonic plug-in repellers.</strong> No credible evidence for any household pest. Our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">full review of the category</Link> goes through why the claim keeps failing.</li>
            <li><strong>Essential-oil sprays, vinegar and baking soda.</strong> A wet surface for an hour, no residual, no reach, no effect on eggs, and no basis for the &ldquo;dries them out&rdquo; story attached to baking soda.</li>
            <li><strong>Isopropyl alcohol.</strong> Covered in full above &mdash; a fire hazard with no residual, and steam does the same job better and safely.</li>
            <li><strong>Throwing out the mattress as a first move.</strong> Expensive, usually unnecessary once an encasement is on it, and it can spread the problem through a building&rsquo;s hallways on the way to the curb.</li>
            <li><strong>Grey-market US insecticides.</strong> No Canadian label, no PCP number, no legal use here, and no reason to believe what is in the bottle.</li>
          </ul>

          <h2>The Realistically Fastest Path to an Empty Bedroom</h2>
          <p>If the actual goal behind &ldquo;instantly&rdquo; is &ldquo;as soon as possible&rdquo;, here is the sequence that gets there quickest, and the reason each step exists:</p>
          <ol>
            <li><strong>Confirm it properly.</strong> Interceptor traps under the bed legs give you a measurement rather than a feeling, and they keep giving it to you every week afterwards. If you are still working out whether what you found is evidence, <Link href="/blog/bed-bug-stains-poop-droppings-canada">bed bug stains and droppings</Link> covers the marks and the swab test.</li>
            <li><strong>Encase the mattress and box spring.</strong> This takes the largest and most rewarding harbourage in the room out of play permanently, and it takes about ten minutes.</li>
            <li><strong>Steam everything you can reach</strong>, slowly, in the order given above.</li>
            <li><strong>Dust the voids you cannot steam</strong> with a registered desiccant, as a barely visible film.</li>
            <li><strong>Hot dryer for everything washable</strong>, 30 minutes minimum on high.</li>
            <li><strong>Repeat on the schedule your monitors dictate</strong>, not on a hunch. Eggs hatching over the following weeks are the reason a single perfect treatment is not enough, and the interceptor catch is what tells you when you are done.</li>
          </ol>
          <p>The full version of that plan, with timings and the room-by-room order, is our <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">complete Canadian bed bug protocol</Link>, and the tool-by-tool breakdown lives in the <Link href="/blog/bed-bug-control-canada-hub">bed bug control hub</Link>.</p>

          <h2>When Paying Someone Is Genuinely the Fast Option</h2>
          <p>BuzzSkito is a mosquito and tick company &mdash; we do not treat bed bugs and we are not sending you anywhere, which is why we can be blunt. There are situations where DIY is the slower and more expensive route, and recognising yours early saves months: an infestation that has spread beyond one bed; any apartment or condo, where an untreated neighbouring unit keeps reintroducing the problem regardless of what you do; a household with an elderly, immunocompromised or very young occupant; and any case where you have already treated once and are still finding evidence.</p>
          <p>A professional whole-room heat treatment raises the entire space above the lethal threshold and holds it there, which does in a day what a DIY campaign attempts over weeks. Once you total up three rounds of products, a failed attempt that scattered the population, and the weeks of poor sleep in between, it is frequently the cheaper answer as well as the faster one. Our <Link href="/blog/heat-vs-chemical-bed-bug-treatment-canada">heat vs chemical comparison</Link> explains what you are choosing between, and <Link href="/pest-control-cost-canada">what pest control costs in Canada</Link> gives you the range to sanity-check a quote before you accept it.</p>

          <div className="not-prose my-8 rounded-xl border border-navy-100 bg-gray-50 px-5 py-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Sources for the figures on this page</p>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
              <li>US Environmental Protection Agency &mdash; <a href="https://www.epa.gov/bedbugs/do-it-yourself-bed-bug-control" className="text-emerald-700 underline">Do-It-Yourself Bed Bug Control</a> (steam minimum temperature; freezer setting and duration; why space heaters and thermostats are not a heat treatment).</li>
              <li>University of Kentucky Entomology &mdash; <a href="https://entomology.ca.uky.edu/ef636" className="text-emerald-700 underline">ENTFACT-636: Bed Bugs</a> (dryer time and temperature; the temperature band professional heat treatments work in; insecticide resistance in bed bug populations).</li>
              <li>Product legality claims refer to the Canadian label: a PCP registration number under the <em>Pest Control Products Act</em>, administered by Health Canada&rsquo;s Pest Management Regulatory Agency. Confirm it on the label of the item you actually receive.</li>
            </ul>
          </div>

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

          <h2>Related Bed Bug Guides</h2>
          <ul>
            <li><strong>The full plan:</strong> <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">How to Get Rid of Bed Bugs in Canada — The Complete Step-by-Step Plan</Link></li>
            <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed Bug Sprays Actually Work? An Honest Canadian Answer</Link></li>
            <li><Link href="/blog/bed-bug-spray-canada">Best Bed Bug Spray and Killer in Canada — What Is PMRA-Legal Here</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed Bug Steamer in Canada — What Separates a Real One</Link></li>
            <li><Link href="/blog/how-to-kill-bed-bug-eggs-canada">How to Kill Bed Bug Eggs — Why Heat Wins and Sprays Miss</Link></li>
            <li><Link href="/blog/best-bed-bug-powder-canada">Best Bed Bug Powder — Silica Gel vs Diatomaceous Earth</Link></li>
            <li><Link href="/blog/heat-vs-chemical-bed-bug-treatment-canada">Heat vs Chemical Bed Bug Treatment in Canada</Link></li>
            <li><Link href="/blog/bed-bug-stains-poop-droppings-canada">Bed Bug Stains and Droppings — Confirming What You Found</Link></li>
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
        subtext="We don't treat bed bugs — but if the bites are happening outdoors rather than in bed, that's exactly what we do, across 19 GTA cities."
      />
    </>
  )
}
