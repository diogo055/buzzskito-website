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

const SLUG = 'how-to-get-rid-of-stink-bugs-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// The stink bug page for the fall overwintering-invader cluster. Asian lady beetles
// are handled here as an H2 rather than at their own URL — the site already has four
// pages in this cluster (boxelder, cluster flies, spiders, centipedes) and minting a
// fifth near-identical "seal the house" URL is the sibling-cannibalisation pattern.
// The generic late-August SEALING WINDOW argument belongs to
// how-to-get-rid-of-boxelder-bugs-canada; this page links there rather than re-teaching it.
const TITLE = 'How to Get Rid of Stink Bugs in Canada — Get Them Out Without the Smell, Then Seal Them Out for Good'
const META_TITLE = 'Get Rid of Stink Bugs in Canada: Seal Them Out'

const FAQS = [
  {
    question: 'How do I get rid of stink bugs in my house?',
    answer: 'Remove the ones inside without crushing them, then close the openings they used. For removal, a vacuum with a hose is the fastest tool — but use a shop vac or a machine you are willing to dedicate to the job, because the defensive compounds linger in the canister and filter. The free alternative works surprisingly well: a shallow pan of water with a squirt of dish soap, placed on the floor of a dark room under a desk lamp overnight. Stink bugs move toward the light, hit the water, and the soap breaks the surface tension so they cannot climb out. Then do the real work — caulk, screens, sweeps and vent covers — because everything else is temporary.',
  },
  {
    question: 'Why should I never squash a stink bug?',
    answer: 'Because that is precisely the behaviour the insect is built for. Stink bugs defend themselves with aldehyde compounds released from glands on the underside of the thorax, and crushing one on a carpet, a curtain, a painted wall or grout releases the full dose onto a porous surface where it will stay for a long time. There is a second reason that matters more than the smell: the odour is also an aggregation cue for the species, so a crushed bug on a windowsill is not a neutral event. Vacuum them, drop them into soapy water, or sweep them into a jar — anything except pressure.',
  },
  {
    question: 'Are stink bugs dangerous, and do they bite?',
    answer: 'No. Stink bugs do not bite people or pets, do not sting, do not carry disease, do not reproduce indoors, and do not eat anything in your house — not the fabric, not the food, not the structure. They are plant feeders that came inside purely to sit out the winter in a sheltered space, and they spend most of that time motionless in a wall void or an attic. The real damage they do is agricultural: the brown marmorated stink bug feeds on tree fruit, vegetables and soybeans, which is why it is treated seriously by growers even though it is only a nuisance in a house.',
  },
  {
    question: 'What is a brown marmorated stink bug and how do I identify it?',
    answer: 'It is the invasive species behind most Canadian stink bug complaints, originally from East Asia, which arrived in Ontario in the early 2010s and is now established through the southern part of the province. Look for a shield-shaped brown bug roughly the size of a thumbnail with a mottled, marbled back — “marmorated” means marbled. Two features separate it from our native brown stink bugs: alternating light and dark bands on the last two antennal segments, and a smooth rounded shoulder edge rather than the toothed, jagged shoulder margin of the native species. There is also a light and dark banded pattern along the edge of the abdomen where it extends past the wings.',
  },
  {
    question: 'Why are stink bugs all over the sunny side of my house?',
    answer: 'Because that wall is warm, and warmth in September is the entire trigger. As days shorten and nights cool, overwintering insects seek out sun-heated vertical surfaces — which in the northern hemisphere means south and west-facing walls — and mass there through the afternoon before probing for a way in. That is why one side of a house can be covered while the other has almost none, and why the same house gets hit year after year: the building itself is the attractant, and stink bugs also produce an aggregation pheromone, so early arrivals make the site more attractive to later ones. It also tells you exactly where to focus your sealing.',
  },
  {
    question: 'Should I spray insecticide inside for stink bugs?',
    answer: 'No, and it usually makes things worse. Indoor sprays and foggers cannot reach insects sitting inside wall voids, attic insulation and soffit cavities, which is where the overwintering population actually is, so you treat the rooms and leave the source untouched. Worse, the ones you do kill accumulate as dead insects inside the structure, and dead insects are food for dermestid beetles — carpet beetles and larder beetles — whose larvae then feed on wool, silk and stored textiles. Fogging for a nuisance insect that does not breed or feed indoors is how people trade a temporary annoyance for a permanent fabric pest.',
  },
  {
    question: 'Do stink bug traps work?',
    answer: 'The homemade light-and-soapy-water trap works well for insects already inside, and pheromone-baited outdoor traps have a real but awkward role. Outdoor lure traps genuinely attract the brown marmorated stink bug — that is the problem. Placing one beside a house draws bugs toward the building rather than away from it, which is why growers place them at field margins rather than at the barn door. If you want to use a lure trap, put it well away from the structure. Indoors, skip the plug-in UV-and-fan traps entirely: those are built around a small fan drawing weak-flying insects onto a glue card, which is a mechanism suited to fruit flies and fungus gnats, not to an armoured shield bug that walks more than it flies. The pan of soapy water under a lamp costs nothing and is the indoor trap that actually matches the insect.',
  },
  {
    question: 'When is the sealing window for stink bugs in Ontario?',
    answer: 'Late July through August, before the movement starts. Once bugs are already massing on the wall in late September you are sealing a building that has occupants inside it, and any gap you close after they enter simply traps them in the void where they will emerge indoors on the first warm day. The order matters more than the technique: survey and seal in the last weeks of summer, then treat the autumn arrivals as removal rather than prevention. We go through the full argument for that window, and the sealing sequence itself, in our boxelder bug guide, which covers the same fall wall crowd.',
  },
  {
    question: 'Why do stink bugs suddenly appear indoors in January or March?',
    answer: 'Because a warm spell woke them up in the wrong direction. Insects overwintering in a wall void or attic are in diapause, not hibernation in the mammalian sense, and a run of mild days — or a heating system warming the void from the inside — brings them out of it. Disoriented, they move toward light and warmth, which from inside a wall means the living room rather than the outdoors. That is why people who thought the problem ended in November find a dozen bugs on a south-facing window in February. There is nothing to treat at that point; vacuum them and note where they emerged, because that spot is a sealing target for the summer.',
  },
  {
    question: 'What about the orange ladybugs that show up at the same time?',
    answer: 'Those are almost certainly multicoloured Asian lady beetles, and they are the same problem wearing a friendlier costume. They aggregate on the same warm south and west walls, enter through the same gaps, overwinter in the same voids, and are removed the same way. Two differences are worth knowing: they can deliver a small nip, and when disturbed they release a yellow-orange fluid from their leg joints that stains light-coloured walls, curtains and carpet — so vacuum rather than brush them, and do it before they are crushed against a surface you care about.',
  },
  {
    question: 'Is it worth paying a pest company for stink bugs?',
    answer: 'For most Canadian households, no. The insects are harmless, they do not breed indoors, and the permanent fix is sealing rather than spraying — a caulk gun, screening and a set of door sweeps outperform any recurring treatment programme. There is one genuine exception: a house getting hit hard every autumn, where a licensed applicator can apply a registered residual product to the exterior walls, eaves and window surrounds in early fall, before the insects enter. That is structural work with a proper label, not the cosmetic lawn and garden use Ontario restricts, and it is worth pricing if you have already done the sealing and are still overwhelmed. Be suspicious of any quote that starts indoors.',
  },
  {
    question: 'Does BuzzSkito treat stink bugs?',
    answer: 'No. BuzzSkito is a licensed mosquito and tick control company covering the GTA, and this is independent product research from our publishing team rather than a service page. For a structural overwintering-insect problem you want a licensed structural pest control operator — ideally one who does exclusion and sealing rather than only spraying, since sealing is what actually ends it. This guide exists because most of what gets recommended for stink bugs online is either useless or actively counterproductive, and the correct answer is mostly hardware rather than a product with a pest list on it.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Stink bugs in Canada: how to get them out without the smell, the late-summer sealing window that keeps them out, and why indoor sprays make it worse.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function HowToGetRidOfStinkBugsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to stink bugs: identifying the brown marmorated stink bug against native species, removing indoor bugs without releasing the odour, the free soapy-water light trap, the late-summer sealing window, why indoor sprays and foggers backfire, and how Asian lady beetles and conifer seed bugs fit the same fix.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Stink Bugs in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Get Rid of Stink Bugs</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Stink bugs do not bite, breed indoors, or eat anything you own &mdash; which is exactly why spraying is the wrong answer. Remove them without crushing, then close the gaps in the weeks before they arrive.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Exterior silicone caulk + sealant gun (the seal-out kit)" search="exterior silicone caulk sealant gun kit" label="The only permanent fix" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of stink bugs in a Canadian home: <strong>vacuum the ones inside</strong> with a shop vac you are willing to dedicate to the job, or drown them in a pan of soapy water under a lamp overnight &mdash; never crush them. Then <strong>seal the building in late July and August</strong>, before the autumn movement starts: exterior caulk around window and door frames, utility penetrations and siding gaps; intact insect screening; door sweeps; and covers on attic, soffit and bathroom vents. Indoor sprays and foggers do not reach the wall voids where the insects actually sit, and the dead ones they leave behind feed carpet beetles.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>They are harmless.</strong> No bites, no disease, no breeding indoors, no damage to the house. This is a nuisance problem, not an infestation.</li>
              <li><strong>Never squash one.</strong> The defensive compounds soak into porous surfaces, and the odour also acts as an aggregation cue.</li>
              <li><strong>The free trap is the one that works.</strong> Soapy water in a shallow pan under a desk lamp, in a dark room, overnight.</li>
              <li><strong>Do not put a lure trap next to the house.</strong> Pheromone traps genuinely attract them &mdash; toward whatever they are near.</li>
              <li><strong>South and west walls</strong> take the hit, because sun-warmed walls are the trigger. That is where your sealing effort belongs.</li>
              <li><strong>Do not buy:</strong> indoor foggers, ultrasonic repellers, essential-oil sprays, plug-in UV insect traps &mdash; a fan and a glue card are built for fruit flies, not shield bugs &mdash; or any recurring indoor treatment programme.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="stink bugs" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pick in 60 Seconds: Your Situation &rarr; What to Do</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The month you are reading this in matters more than the product you buy. Removal and prevention are two different jobs with two different seasons.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your situation</th>
                  <th className="px-4 py-3 text-left">Do this</th>
                  <th className="px-4 py-3 text-left">Do not</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">A few in the house right now</td>
                  <td className="px-4 py-3 text-gray-700">Vacuum them, or scoop them into soapy water. Note which window they appeared at &mdash; that is a sealing target</td>
                  <td className="px-4 py-3 text-gray-700">Crush them</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; a jar and dish soap</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Dozens indoors, appearing daily</td>
                  <td className="px-4 py-3 text-gray-700">A dedicated shop vac with a hose, plus the soapy-water light trap running overnight</td>
                  <td className="px-4 py-3 text-gray-700">Fog the house</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="wet dry shop vacuum with hose" block>Shop vac &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Massing on the sunny wall in September</td>
                  <td className="px-4 py-3 text-gray-700">Accept this year, plan next: photograph the wall, mark the gaps, and seal in July</td>
                  <td className="px-4 py-3 text-gray-700">Spray the siding yourself</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="exterior silicone caulk sealant gun kit" block>Caulk kit &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">They come in around the windows</td>
                  <td className="px-4 py-3 text-gray-700">Re-screen and caulk the frame perimeter. Torn screening and a gap at the frame are the two commonest routes</td>
                  <td className="px-4 py-3 text-gray-700">Tape over the screen</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="fine insect screen mesh roll aluminum" block>Screen mesh &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Coming from the attic, soffit or a ceiling light</td>
                  <td className="px-4 py-3 text-gray-700">Screen the attic, gable and bathroom vents with steel mesh, and pack the soffit gaps. Never caulk a vent shut &mdash; it needs the airflow</td>
                  <td className="px-4 py-3 text-gray-700">Seal the vents</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="stainless steel mesh roll pest exclusion vent screen" block>Steel mesh &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Appearing at the basement or garage door</td>
                  <td className="px-4 py-3 text-gray-700">Door sweeps and weatherstripping. The same afternoon also blocks spiders, cluster flies and heat loss</td>
                  <td className="px-4 py-3 text-gray-700">A perimeter aerosol</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="foam outlet gasket door sweep weatherstrip kit" block>Sweeps and seals &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">A handful waking up on a warm February day</td>
                  <td className="px-4 py-3 text-gray-700">Vacuum and move on. They emerged from a void &mdash; there is nothing to treat, only something to seal in summer</td>
                  <td className="px-4 py-3 text-gray-700">Buy anything</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Stink Bug Kit Is Entirely Hardware"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Exterior Silicone Caulk + Sealant Gun',
                why: 'Nothing else on this list changes next autumn. Stink bugs enter through gaps around window and door frames, at siding transitions, behind loose trim, and where utility lines pass through the wall — and a tube of exterior-grade silicone closes all of it permanently. Do the south and west walls first, because that is where the insects gather, and work from the roofline down rather than starting at eye level.',
                search: 'exterior silicone caulk sealant gun kit',
                featured: true,
                pros: ['Permanent — no reapplication, no label rules, no chemistry', 'Also blocks cluster flies, boxelder bugs, lady beetles and spiders', 'Cuts winter heat loss on the same walls'],
                cons: ['Only works if done before the insects move in', 'Ladder work for the parts that matter most'],
              },
              {
                badge: 'Best for Windows',
                name: 'Fine Aluminum Insect Screen Mesh (Roll)',
                why: 'A torn or lifted screen is the single most common way a stink bug ends up on a kitchen ceiling. Re-screening a couple of windows is a genuinely easy job with a roll of mesh and a spline tool, and aluminum mesh survives the seasonal temperature swing better than the cheap fibreglass it usually replaces. Check the frame perimeter at the same time — a perfect screen in a frame with a 5 mm gap around it is decoration.',
                search: 'fine insect screen mesh roll aluminum',
                pros: ['Fixes the most common entry point directly', 'Cheap per window and reusable across the house', 'Aluminum holds tension through Canadian temperature swings'],
                cons: ['Needs a spline roller and a little patience', 'Does nothing about gaps in the frame itself'],
              },
              {
                badge: 'Best Door Fix',
                name: 'Door Sweep + Weatherstrip Kit',
                why: 'The gap under an exterior or garage door is a wide open route for anything that walks, and stink bugs walk a lot more than they fly once they are on a wall. Sweeps and weatherstripping on every exterior door take an afternoon, cost very little, and pay back on heating as well as on insects. Add foam gaskets behind exterior-wall outlet and switch plates while you are at it — that is a route into the room from a wall void.',
                search: 'foam outlet gasket door sweep weatherstrip kit',
                pros: ['One afternoon, permanent, zero chemicals', 'Blocks the whole fall wall crowd, not just stink bugs', 'Immediate comfort improvement in a draughty room'],
                cons: ['Settled doors may need shimming or adjustment first', 'Does nothing about upper-storey entry points'],
              },
              {
                badge: 'Best for Removal Today',
                name: 'Wet/Dry Shop Vacuum with Hose',
                why: 'The fastest way to clear a wall or a window without touching a single bug. Two rules make it work: use a machine you are content to dedicate to this, because the defensive compounds linger in the canister and filter, and empty it outside immediately rather than leaving live insects in a warm drum indoors. A knee-high nylon stocking stretched over the wand end and secured makes an improvised catch bag that keeps the bugs out of the machine entirely.',
                search: 'wet dry shop vacuum with hose',
                pros: ['Clears dozens in minutes with no crushing', 'Reaches ceilings, curtain tops and window heads', 'Also the right tool for lady beetles and cluster flies'],
                cons: ['Odour can persist in the canister — dedicate the machine', 'Removal only; it changes nothing about next year'],
              },
              {
                badge: 'Best for Vents and Ragged Gaps',
                name: 'Stainless Steel Mesh + Vent Screen Roll',
                why: 'Caulk is the wrong material for anything that has to keep breathing. Attic, gable, soffit, bathroom and dryer vents move air by design, and sealing them trades an insect nuisance for a moisture problem that costs far more to fix — so they get screened instead. Steel mesh also handles the gaps silicone cannot bridge on its own: behind lifted trim, at a soffit-to-fascia join, and around a lineset or cable passing through the wall, where it is packed into the void and then caulked over. This is the least glamorous item here and it covers the entry category the sealing list ranks highest.',
                search: 'stainless steel mesh roll pest exclusion vent screen',
                pros: ['Closes the highest-yield entries without blocking required airflow', 'Backs up caulk in gaps too wide or too ragged to bridge alone', 'The same material structural exclusion work uses against rodents'],
                cons: ['Ladder work — the vents that matter are at roof level', 'Needs tin snips and gloves; cut edges are sharp'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Reading this in September with bugs on the wall?</strong> Buy the vacuum, not the caulk &mdash; this year is a removal year, and the sealing job belongs to next July. <strong>Reading this in July or August?</strong> Caulk, screen mesh and door sweeps, in that order, and you may not need anything else again. <strong>They come in around one specific window?</strong> Re-screen and caulk that frame before you buy anything else on this list. <strong>Vents, soffits, or a gap too ragged for a bead of silicone?</strong> That is the steel mesh &mdash; it is the only item here that closes an opening without closing off the airflow the opening exists for. <strong>Orange ladybugs too?</strong> Same kit, same walls, same season &mdash; and vacuum rather than brush, because they stain. <strong>Wondering about a spray?</strong> Read the next section first; an indoor application is the one purchase here that reliably makes things worse. <strong>Wondering about a plug-in trap?</strong> Do not &mdash; there is no item on this list for catching stink bugs indoors, because a pan of soapy water under a lamp already does it for nothing.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What You Actually Have: The Brown Marmorated Stink Bug</h2>
          <p>Most Canadian stink bug complaints trace to one insect. The brown marmorated stink bug, <em>Halyomorpha halys</em>, is native to East Asia, arrived in Ontario in the early 2010s, and is now established through the southern part of the province &mdash; the Niagara, Hamilton and Greater Toronto corridor most of all, where urban heat and a long growing season suit it.</p>
          <p><strong>Identifying it</strong> takes about ten seconds once you know the two features. It is shield-shaped, roughly thumbnail-sized, and mottled brown &mdash; &ldquo;marmorated&rdquo; means marbled, and that patterned back is the first clue. Then look at the antennae: the brown marmorated stink bug has alternating light and dark bands on the last two segments, which our native brown stink bugs do not. Second, run your eye along the shoulder edge behind the head. On the invasive species it is smooth and rounded; on the native brown stink bug it is toothed and jagged. There is also a light-and-dark banded strip along the edge of the abdomen where it extends past the folded wings.</p>
          <p><strong>Not every shield bug is a pest.</strong> The green stink bug and several native brown species turn up in Ontario gardens and are of minor consequence. More importantly, the spined soldier bug &mdash; which looks like a brown stink bug with sharply pointed shoulder spines &mdash; is a predator that hunts caterpillars and beetle larvae, and killing it is a small own goal. If a shield bug is out in the garden rather than on your wall in September, the correct response is usually to leave it alone.</p>
          <p><strong>What it does not do</strong> is worth stating plainly, because it changes the whole plan: stink bugs do not bite, do not sting, carry no disease, do not reproduce indoors, do not eat fabric, food or timber, and do not damage the building. They are plant feeders that came in to sit out the winter. The house is shelter, not habitat.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">The whole shopping list for this problem, and it is all hardware:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="exterior silicone caulk sealant gun kit">Exterior caulk &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="fine insect screen mesh roll aluminum">Screen mesh &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="foam outlet gasket door sweep weatherstrip kit">Sweeps and gaskets &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="stainless steel mesh roll pest exclusion vent screen">Steel mesh for vents &rarr;</BuyLink>
          </div>

          <h2>Getting Them Out Today, Without the Smell</h2>
          <p>The name is earned. Stink bugs have glands on the underside of the thorax that release defensive aldehyde compounds, and crushing one delivers the full dose onto whatever surface it is pressed against. On glass that is trivial; on carpet, curtains, grout, unfinished wood or a painted wall it is a long-lived problem. The odour also functions as an aggregation cue for the species, so a crushed bug on a windowsill is not a neutral act.</p>
          <p><strong>The vacuum method.</strong> A hose and a wand clears a ceiling, a curtain top and a window head faster than anything else, with no contact at all. Use a shop vac or a machine you are prepared to dedicate to the job, because the compounds settle into the canister and the filter and will announce themselves next time you run it. Empty it outside straight away rather than leaving live insects in a warm drum in the house. If you want to protect the machine entirely, stretch a knee-high nylon stocking over the end of the wand, push it a few centimetres inside, and fold the open end back over the outside &mdash; the bugs collect in the stocking, which you tie off and dispose of.</p>
          <p><strong>The free method that works better than most products.</strong> Fill a shallow roasting pan or baking tray with water, add a good squirt of dish soap, and set it on the floor of a dark room with a desk lamp or clip light positioned low over it. Leave it overnight. Overwintering stink bugs move toward light, land on or fall into the water, and the soap breaks the surface tension so they cannot escape. This is the standard advice from extension entomologists for indoor overwintering bugs, it costs nothing, and it runs while you sleep. The same trap catches Asian lady beetles and cluster flies.</p>
          <p><strong>Why there is no plug-in trap on our list.</strong> The UV-lamp, small-fan and glue-card units sold as indoor insect traps are engineered around one mechanism: draw a weak flier toward the lamp, pull it off course with the fan, land it on an adhesive card. That describes a fruit fly or a fungus gnat. It does not describe a thumbnail-sized armoured shield bug that walks far more than it flies, is heavy enough to ignore a small fan, and does not settle on a card. We publish a guide to those traps for the <Link href="/blog/best-indoor-fly-mosquito-trap-canada">flying insects they are actually built for</Link>, and stink bugs are not on that list &mdash; which is why the removal advice on this page ends at a vacuum and a pan of soapy water rather than at something to buy.</p>
          <p><strong>What not to do:</strong> do not sweep them into a pile, do not step on them, and do not flush them down a toilet in numbers. Vacuum, soapy water, or a jar with a lid.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="wet dry shop vacuum with hose">Check shop vacuums on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Why Indoor Sprays and Foggers Make It Worse</h2>
          <p>This is the section that saves people the most money, so it is worth being specific about the mechanism.</p>
          <p>Overwintering stink bugs are not sitting in your living room. They are packed into wall voids, attic insulation, soffit cavities, behind fascia and under siding &mdash; sheltered dead spaces that a residual spray on a baseboard, or an aerosol released into a room, physically cannot reach. You treat the surfaces you can see, the population you cannot see is untouched, and bugs keep appearing because they are emerging from inside the structure rather than entering from outside.</p>
          <p>Then there is the second-order problem, which is the one nobody warns about. Insects killed inside a wall void do not disappear. They accumulate as a dry protein source, and dry protein in a wall void is exactly what dermestid beetle larvae eat &mdash; carpet beetles and larder beetles. A homeowner who fogs repeatedly for a harmless seasonal nuisance can end up feeding a beetle population that then moves into wool rugs, stored clothing and upholstery, which is a genuine fabric-damage problem rather than an inconvenience. We cover what those larvae look like, and how they get mistaken for something worse, in <Link href="/blog/bugs-that-look-like-bed-bugs-canada">bugs that look like bed bugs</Link>.</p>
          <p>Total-release foggers deserve a specific no. They deposit residue across every surface in a room, do not penetrate voids, and are being deployed against an insect that eats nothing indoors and will be gone by spring anyway.</p>

          <h2>The Sealing Job: Where They Actually Get In</h2>
          <p>Sealing is the entire fix, and the timing is the part people get wrong. The work belongs to <strong>late July and August</strong>, before the autumn movement begins. Seal a house in October and you are closing gaps on a building that already has occupants in the walls, who will emerge indoors on the first warm day rather than being locked outside. The full case for that window, and the sealing sequence step by step, is in our <Link href="/blog/how-to-get-rid-of-boxelder-bugs-canada">boxelder bug guide</Link> &mdash; same wall, same weeks, same job.</p>
          <p>What is specific to stink bugs is <em>where</em> to spend your effort. They gather on sun-warmed vertical surfaces, so the south and west elevations of the house take almost all of the pressure, and working the shaded north wall first is wasted time. Then, in rough order of how often each one is the culprit:</p>
          <ul>
            <li><strong>Window and door frames.</strong> The perimeter join between the frame and the wall, not the glass. Caulk it.</li>
            <li><strong>Screens.</strong> Tears, lifted corners, and screens that do not sit tight in the frame. Re-screen rather than patch.</li>
            <li><strong>Utility penetrations.</strong> Where the air-conditioning lineset, gas line, cable, hose bib and dryer vent pass through the wall. These are almost never sealed properly by the trade that installed them.</li>
            <li><strong>Soffit and fascia joins, and the gap behind loose trim.</strong> The highest-yield and least accessible category, which is why so many houses never get fixed. Where the gap is too wide or too ragged for a bead of silicone to bridge, pack it with stainless steel mesh first and caulk over the face of it.</li>
            <li><strong>Attic, gable, bathroom and roof vents.</strong> Screen them; do not seal them, because they need the airflow, and a vent you caulk shut becomes a moisture problem that costs far more than the insects did. Steel mesh cut oversize and fixed over the outside of the opening is the standard answer.</li>
            <li><strong>Exterior doors and the garage.</strong> Sweeps and weatherstripping.</li>
            <li><strong>Outlet and switch plates on exterior walls.</strong> Foam gaskets behind the plate close a route from the wall void into the room &mdash; a five-minute job that explains a lot of &ldquo;where did that come from&rdquo; sightings.</li>
          </ul>
          <p>Two smaller levers worth knowing: reduce bright white exterior lighting on the affected walls during the autumn movement, or switch to warmer-toned bulbs, and keep vegetation and firewood off the sun-facing wall so there is less staging cover directly against the siding.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="exterior silicone caulk sealant gun kit">Check exterior caulk on Amazon.ca &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="stainless steel mesh roll pest exclusion vent screen">Check steel mesh and vent screen &rarr;</BuyLink>
          </div>

          <h2>Asian Lady Beetles: The Same Problem in a Friendlier Costume</h2>
          <p>If your stink bugs arrived alongside a cloud of orange ladybugs, you have multicoloured Asian lady beetles &mdash; <em>Harmonia axyridis</em> &mdash; and it is genuinely the same problem, on the same walls, in the same weeks, with the same fix. That is why they are covered here rather than at their own page: sealing a house against one seals it against both.</p>
          <p><strong>Telling them from native ladybugs</strong> matters mainly for peace of mind. The Asian species varies enormously in colour, from pale yellow through orange to deep red, and in spot count from none to many &mdash; so colour is useless. Look instead at the white shield behind the head, which usually carries a black marking shaped like an M or a W depending on which way you are looking at it. Native lady beetles do not aggregate on houses in the hundreds.</p>
          <p><strong>Two differences from stink bugs</strong> are worth handling. They can deliver a small nip &mdash; startling rather than dangerous. And when disturbed they release a yellow-orange fluid from their leg joints, a defensive reflex bleed that stains light-coloured walls, curtains, blinds and carpet. That is a strong argument for vacuuming rather than brushing or swatting them, and for dealing with a cluster before someone leans on it.</p>
          <p>Everything else is identical: they do not breed indoors, eat nothing in the house, and are beneficial aphid predators for most of the year. The soapy-water light trap catches them, the shop vac clears them, and the caulk gun ends it.</p>

          <h2>The Rest of the Fall Wall Crowd</h2>
          <p>Four insects turn up on the same warm autumn wall in southern Ontario, and once you have done the sealing for one you have done it for all of them. It is worth knowing which is which mainly so you do not go looking for four different products.</p>
          <ul>
            <li><strong>Western conifer seed bug.</strong> Frequently reported as a giant stink bug &mdash; longer and narrower, brown, with flattened leaf-like flares on the hind legs. Overwinters in structures identically and takes the identical treatment, so a misidentification here costs you nothing.</li>
            <li><strong>Boxelder bugs.</strong> Black with red or orange lines, often in dense clusters on a sunny wall near a Manitoba maple. Same job, own page: <Link href="/blog/how-to-get-rid-of-boxelder-bugs-canada">boxelder bugs in Canada</Link>.</li>
            <li><strong>Cluster flies.</strong> Sluggish, slightly larger than a house fly, appearing at windows on mild winter days from an attic or wall void. Same sealing window, different insect entirely &mdash; see <Link href="/blog/how-to-get-rid-of-cluster-flies-canada">cluster flies</Link>.</li>
            <li><strong>Spiders.</strong> They follow the food. A wall covered in overwintering insects attracts them, and they leave when the buffet does &mdash; <Link href="/blog/how-to-keep-spiders-out-of-your-house">keeping spiders out</Link>.</li>
          </ul>

          <h2>Stink Bugs in the Garden</h2>
          <p>The reason growers take this insect seriously has nothing to do with houses. The brown marmorated stink bug feeds by inserting a needle-like mouthpart into fruit and pods, and the damage shows up as corky, discoloured patches and distorted growth &mdash; on apples, pears, peaches, tomatoes, peppers, beans, corn and soybeans. Its broad host range is exactly what makes it a difficult agricultural pest and why it is monitored across Ontario fruit and vegetable production.</p>
          <p>For a home garden the practical measures are unglamorous and mostly non-chemical: floating row covers over vulnerable crops before the bugs arrive, hand-picking into soapy water in the early morning while they are sluggish, and clearing weedy field margins and fence lines that act as staging habitat. If you use a pheromone lure trap in the garden, place it well away from both the house and the crop you are protecting, because the lure pulls insects toward it &mdash; a trap next to the tomatoes is an invitation, not a defence.</p>

          <h2>When to Stop Buying and Call Someone</h2>
          <p>For most Canadian households, stink bugs never justify a paid treatment programme, and we would rather say that than pretend otherwise &mdash; BuzzSkito treats mosquitoes and ticks and has no stink bug service to sell you. A caulk gun, a roll of screen mesh, a set of door sweeps and an afternoon outperform any recurring spray, because the insects are entering from outside and nothing indoors changes that.</p>
          <p>There is one situation where a professional is genuinely the cheaper option: a house that gets hit hard every single autumn, where a licensed applicator can treat the exterior walls, eaves, window and door surrounds in early fall with a product registered for structural use, before the insects move in. That is a labelled structural application rather than the cosmetic lawn and garden use Ontario restricts, it is timed to the movement rather than sprayed at random, and it is worth pricing if you have already done the sealing and the volume is still unmanageable. Two cautions: it is a suppression measure with a limited window, not a permanent fix, and any company whose plan starts with an indoor treatment has told you what they are actually selling. For a sense of what general pest work costs here, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>

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
            <li><strong>The sealing window, in full:</strong> <Link href="/blog/how-to-get-rid-of-boxelder-bugs-canada">How to Get Rid of Boxelder Bugs in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cluster-flies-canada">Cluster Flies in Canada — The Attic Problem Behind the Window Flies</Link></li>
            <li><Link href="/blog/how-to-keep-spiders-out-of-your-house">How to Keep Spiders Out of Your House</Link></li>
            <li><Link href="/blog/bugs-that-look-like-bed-bugs-canada">Bugs That Look Like Bed Bugs — Including the Beetles Fogging Creates</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-centipedes-canada">House Centipedes — Kill the Prey, Not the Predator</Link></li>
            <li><Link href="/blog/red-ticks-and-clover-mites">Red &ldquo;Ticks&rdquo; and Clover Mites on Sunny Window Frames</Link></li>
            <li><Link href="/blog/june-bugs-ontario">June Bugs in Ontario — The Other Seasonal Beetle</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Work? The Honest Answer</Link></li>
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
        subtext="We don't treat stink bugs — but the sealing and yard work that keeps them out is the same work that cuts mosquito and tick pressure. Free assessment across 19 GTA cities."
      />
    </>
  )
}
