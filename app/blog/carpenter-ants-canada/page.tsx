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

const SLUG = 'carpenter-ants-canada'
const DATE = '2026-07-27'
const UPDATED = '2026-07-27'
const TITLE = 'Carpenter Ants in Canada — Find the Nest, or You Are Just Killing Ants'
const META_TITLE = 'Carpenter Ants in Canada: Treatment That Works'

const FAQS = [
  {
    question: 'How do I tell carpenter ants from termites?',
    answer: 'Three checks settle it. Waist: carpenter ants have a sharply pinched, wasp-like waist; termites are straight-sided from head to tail. Antennae: carpenter ants have elbowed antennae with a distinct bend; termites have straight, beaded antennae. Wings (on the swarmers you find on a windowsill in spring): a carpenter ant’s front wings are noticeably longer than the back pair, while all four termite wings are the same length and shed off in neat piles. The debris tells you too — carpenter ants push clean, coarse sawdust-like frass out of the wood, while subterranean termites pack their galleries with soil and build mud tubes up the foundation. If you find soft, creamy-white insects in damp wood rather than dark ants, stop DIY work and get a licensed inspection.',
  },
  {
    question: 'Do carpenter ants actually damage a house?',
    answer: 'Yes, but slowly, and never in the way termites do. Carpenter ants do not eat wood — they excavate it to make nesting galleries, chewing out smooth, sanded-looking chambers and pushing the shavings outside as frass. A mature colony working in a rim joist or a wet sill plate for several years can genuinely weaken a structural member, and satellite nests in studs, subfloor and roof sheathing add up. The honest framing for most Ontario homeowners: the ants are usually less expensive than the reason they are there. They target wood that is already wet or rotting, so the roof leak, the failed flashing or the ice-dammed soffit that softened the wood is normally the bigger repair bill.',
  },
  {
    question: 'What does carpenter ant frass look like?',
    answer: 'Like coarse sawdust or pencil shavings, usually with recognisable insect body parts mixed in — legs, wings, and bits of dead ant — plus fragments of whatever else was in the void, such as fibreglass insulation or rigid foam. It is dry, fluffy and clean-looking, because it is excavated material rather than digested wood. You find it in small cone-shaped piles under window and door frames, at the base of a wall, along a basement sill plate, on top of attic insulation, or on a deck below the ledger board. Two things people mistake for it: fine sand piles between patio stones (that is pavement ants, a nuisance not a structural problem) and drywall dust from renovation. If the pile reappears within a few days after you sweep it up, you have an active nest above it.',
  },
  {
    question: 'Why am I seeing carpenter ants in my house in winter?',
    answer: 'Because the colony is inside the building envelope. In Ontario, outdoor carpenter ant colonies go into overwintering dormancy once temperatures drop and they do not forage — so live workers wandering your kitchen in January or February are not coming in from the yard. They are inside a heated wall void, an attic soffit, a subfloor, or the framing around a chimney or bathroom, and the warmth has kept them active. That overwintering biology is what makes a February indoor sighting diagnostic, and it is the point at which the job stops being about ants and starts being about locating a nest inside your home. Winged swarmers appearing indoors in late winter or early spring point the same way — those emerge from a mature nest inside the structure.',
  },
  {
    question: 'What is the difference between a parent colony and a satellite colony?',
    answer: 'The parent colony holds the queen, the eggs and the youngest larvae, and it needs consistently damp wood to keep those eggs viable — typically a stump, a dead tree limb, a buried scrap of lumber, a rotting fence post or a woodpile, usually outdoors and often surprisingly far from the house. Satellite colonies hold older larvae, pupae, workers and winged reproductives, none of which require that humidity, so they can occupy dry framing: wall voids, hollow doors, subfloor, attic sheathing, foam insulation. Workers commute between them along established trails. That structure is exactly why people fight carpenter ants for years — killing the satellite in your wall removes the visible problem while the parent colony outside keeps rebuilding it.',
  },
  {
    question: 'Does spraying carpenter ants work?',
    answer: 'Not on its own, and it often makes the job harder. The ready-to-use ant aerosols on Canadian shelves are typically repellent pyrethroids — deltamethrin, cypermethrin, permethrin and relatives. They kill the ants you hit, which is a tiny slice of a colony numbering in the thousands, and the residue is detectable to the survivors, so trails reroute, satellite nests relocate deeper into the structure, and you lose the trail you needed in order to find the nest. Worse, spraying kills the foraging workers who would otherwise have carried bait home to the queen, so a week of spraying can sabotage the one method that reaches the colony. Spray has one legitimate role for a homeowner: a direct treatment into a nest opening you have actually located, following the label.',
  },
  {
    question: 'What bait actually works on carpenter ants in Canada?',
    answer: 'Sugar-based liquid baits are the right format, because carpenter ants are liquid feeders that live on aphid honeydew outdoors and share food mouth-to-mouth throughout the colony. Borax and boric acid liquid ant baits — the Terro-style liquid stations stocked at Canadian Tire, Home Depot Canada and Rona — are the widely available domestic-class option; check that the label carries a PCP registration number and lists carpenter ants. Two rules decide whether it works. Do not spray anywhere near the bait, because you need those foragers alive and walking home. And do not concentrate the mixture to make it stronger — a fast kill leaves a dead ant on the counter instead of a poisoned queen. Expect ant traffic to increase for the first few days as workers recruit to the bait; that is the mechanism working, not failing.',
  },
  {
    question: 'Where do carpenter ants nest inside a house?',
    answer: 'Follow the water. The usual list in Ontario homes: the rim joist and sill plate above the foundation, the framing under a leaking window or door, the header over a bay window, the wall behind a shower or tub, the subfloor under a dishwasher or fridge line, the roof sheathing and soffit where ice damming has soaked the deck, the framing around a chimney with failed flashing, the deck ledger board where it meets the siding, and — a genuinely Canadian one — rigid foam insulation board, which they tunnel through readily even though it is not wood. Hollow-core doors, curtain rods and boxed-in soffits are common satellite sites. What they have in common is a void adjacent to wood that has been wet at some point.',
  },
  {
    question: 'Do carpenter ants bite?',
    answer: 'They can, and a large worker can deliver a pinch you will feel, sometimes followed by a brief sting because carpenter ants can spray formic acid into the wound. They have no stinger and no venom in the medical sense, they are not aggressive unless you handle them or disturb a nest, and the bite has no lasting consequence beyond a few minutes of irritation. Wash it and move on. The reason to take carpenter ants seriously is structural, not medical — which is the opposite of how people usually rank pests.',
  },
  {
    question: 'Are there termites in Ontario?',
    answer: 'Yes — the eastern subterranean termite is established in documented pockets of southern Ontario, including parts of Toronto and several southwestern Ontario municipalities. "We don’t have termites in Canada" is one of the more expensive myths going around. Some municipalities operate termite programs and maintain designated infested areas, and there can be rules about moving untreated wood and soil out of them, so if you find mud tubes running up a foundation wall, hollow-sounding wood with soil packed into the grain, or piles of equal-length shed wings, call your municipality and a licensed structural inspector rather than opening a bag of ant bait.',
  },
  {
    question: 'How much does carpenter ant treatment cost in Ontario?',
    answer: 'Carpenter ants sit at the higher end of ant work in Ontario because the job includes inspection, nest location and void treatment rather than a perimeter spray — our Canadian pest control cost guide puts general ant work in the $150–$400 range and carpenter ants closer to $300–$800, with severity, property size and access moving every number. Two honest caveats. First, a quote given over the phone without an inspection is a red flag; nobody can price a carpenter ant job without finding out where the nest is. Second, the pest cheque is often the smaller one — if the ants are in a rotted sill plate or an ice-dammed soffit, a carpenter or roofer is the actual fix, and treating without repairing the moisture just buys you a rerun next spring.',
  },
  {
    question: 'When should I stop DIYing and call a professional?',
    answer: 'Call a licensed operator when any of these are true: you see live workers indoors in winter, winged swarmers emerge inside the house, frass appears in more than one location or comes from a ceiling, you hear a faint rustling like crinkling cellophane inside a wall when you tap it, the wood sounds hollow or feels spongy, you have baited properly for several weeks with no decline, or you suspect termites rather than ants. Professionals bring what consumers cannot buy in Canada — non-repellent commercial-class actives and void treatments — plus moisture meters, drilling and injection, and the experience to read a trail back to a nest. In carpenter ant work specifically, a professional is often cheaper than the third round of products plus another year of rot.',
  },
  {
    question: 'Do ultrasonic repellers or home remedies get rid of carpenter ants?',
    answer: 'No. Ultrasonic plug-ins have no credible evidence behind them for any structural pest, and carpenter ants nesting inside a wall void are physically insulated from whatever the device emits. Cinnamon, vinegar, coffee grounds, chalk lines, essential oils and dish soap sprays all do the same thing: they temporarily disrupt a pheromone trail, so ants take a different route through your wall for a day or two while the queen keeps laying. Diatomaceous earth is the exception among the "natural" options — it genuinely kills ants that walk through it, provided it stays dry and is applied as a thin, barely visible film in a void rather than a visible pile they will simply walk around.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Carpenter ants in Canada: telling them from termites, why a winter sighting means a nest inside, why spraying the trail fails, and when to call a pro.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function CarpenterAntsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian carpenter ant guide: carpenter ant vs termite vs pavement ant ID, frass, winter indoor sightings, parent vs satellite colonies, moisture as root cause, why repellent sprays fail, liquid baiting, void dusts, and an honest call-a-pro threshold.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Carpenter Ants in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Carpenter Ants</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The ant problem in Ontario with structural consequences, because carpenter ants excavate wood instead of eating your crumbs. Here is how to tell them from termites, why a winter sighting means the nest is inside your walls, and why the spray can is the wrong tool.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Pinless wood moisture meter" search="pinless wood moisture meter" label="Find the nest first" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of carpenter ants in Canada you have to find the nest, not kill the ants on the counter. Confirm the ID (pinched waist, elbowed antennae, smooth arched back), look for frass &mdash; clean sawdust-like shavings with insect parts in it &mdash; and trace the trail after dark to the wall, sill plate, soffit or stump it leads to. Then treat the colony with sugar-based liquid bait carried home by living foragers, or dust into the void once the nest is located, and fix the moisture source that made the wood habitable. Do not blanket-spray the trail: repellent aerosols kill a handful of workers, scatter the rest deeper into the structure, and destroy the only navigation aid you had.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Live ants indoors in a Canadian winter means the nest is <em>inside the heated envelope</em> &mdash; outdoor colonies are dormant.</li>
              <li>Frass is the diagnostic: dry, coarse shavings with legs and wing fragments in it, in a cone under a slit-like opening.</li>
              <li>Carpenter ants do not eat wood &mdash; they excavate wood that is already damp, so a leak or rot is the real problem.</li>
              <li>Parent colony (queen, wet wood, often outdoors) plus satellite colonies (dry wood, inside your walls) is why the problem keeps returning.</li>
              <li>Liquid borax baits work; granular baits and repellent sprays mostly do not. Never spray near a bait placement.</li>
              <li>Winged ants indoors, frass from a ceiling, a rustle inside a wall, or any suspicion of termites &mdash; that is the call-a-pro line.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="carpenter ants" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Carpenter Ant Kit That Matches How the Job Actually Works"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Pinless Wood Moisture Meter',
                why: 'An unusual top pick for a pest page, and the honest one. Carpenter ants nest in wood that has been wet. A pinless meter run along a sill plate, a window header, a deck ledger or the framing behind a shower finds the damp zone and points you at the wood the ants actually chose — which is the whole job. Everything else on this page is guessing until you have done this.',
                search: 'pinless wood moisture meter',
                featured: true,
                pros: ['Turns "somewhere in the walls" into a specific stud bay', 'No damage — no pins, no drilling, no probe holes', 'Keeps working long after the ants: leaks, ice-dam damage, subfloor checks'],
                cons: ['Diagnoses, does not kill — you still need bait or dust', 'Readings need interpreting against a known-dry area on the same material'],
              },
              {
                badge: 'Best Colony Killer',
                name: 'Liquid Borax Ant Bait Stations',
                why: 'Carpenter ants are liquid feeders that share food mouth-to-mouth, which is exactly the weakness sugar-based borax baits exploit — a forager drinks, walks home, and feeds the colony including brood. The widely stocked domestic-class option in Canada; confirm a PCP registration number on the label and that carpenter ants are listed.',
                search: 'liquid ant bait stations borax',
                pros: ['Reaches the queen and brood you can never see', 'Slow-acting by design — the forager survives the walk home', 'Cheap enough to run six or eight placements along one trail'],
                cons: ['Acceptance is seasonal and fussy — some weeks they ignore sugar entirely', 'Ruined by any spray residue nearby', 'Takes weeks, and traffic spikes first before it falls'],
              },
              {
                badge: 'Best Void Treatment',
                name: 'Insecticidal Diatomaceous Earth + Bulb Duster',
                why: 'Once you know which void the nest is in, a thin film of dust in that void kills ants that walk through it, indefinitely, with no resistance mechanism available. A bulb duster puffs it into the sill-plate gap, behind a baseboard, or into a soffit where a spray would only wet the surface.',
                search: 'diatomaceous earth insect duster',
                pros: ['Mechanical kill — nothing for the colony to adapt to', 'Reaches voids sprays and baits physically cannot', 'A little goes a long way — a duster uses very little per placement'],
                cons: ['Inert the moment it gets damp — a real limitation in the wet wood ants prefer', 'Useless until you have actually located the nest', 'Visible piles get walked around; thin films only'],
              },
              {
                badge: 'Best Night Inspection',
                name: 'Headlamp with Red-Light Mode',
                why: 'Carpenter ants forage at night, so the productive hour on this problem is a late evening with a headlamp, walking the foundation, the deck framing and the tree limbs that touch your roof. Red mode disturbs the trail less and preserves your night vision while you follow it.',
                search: 'headlamp red light mode rechargeable',
                pros: ['Hands free while you lift siding trim and probe wood', 'Red mode keeps the trail behaving normally', 'Cheapest item here, and the one that makes an after-dark inspection possible at all'],
                cons: ['A tool, not a treatment', 'You still need to be patient enough to follow a trail for twenty minutes'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Found frass but no idea where it is coming from?</strong> The <em>Best Overall</em> moisture meter and the <em>Best Night Inspection</em> headlamp are the two purchases that actually move the job forward, because they answer the only question that matters &mdash; where is the nest. <strong>Trail located, nest still hidden?</strong> Run the <em>Best Colony Killer</em> liquid baits on that trail and let the ants carry the treatment to the nest for you. <strong>Nest located in a void you can reach?</strong> Add the <em>Best Void Treatment</em> duster &mdash; application technique is in our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide</Link>. <strong>Winter sightings, swarmers indoors, or frass from a ceiling?</strong> Buy nothing. That is a licensed-operator job, and the reasons are in the last section of this page.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Know Your Insect &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Carpenter Ant vs Termite vs Pavement Ant — Thirty Seconds of ID</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            These three are routinely mistaken for one another in Ontario, and the correct response to each is completely different &mdash; one is a structural investigation, one is a licensed-inspector emergency, and one is a nuisance you can mostly ignore.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Insect</th>
                  <th className="px-4 py-3 text-left">Body tells</th>
                  <th className="px-4 py-3 text-left">Debris it leaves</th>
                  <th className="px-4 py-3 text-left">Stakes</th>
                  <th className="px-4 py-3 text-left">What to do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Carpenter ant<br /><span className="font-normal text-xs text-gray-500">Camponotus spp.</span></td>
                  <td className="px-4 py-3 text-gray-700">Sharply pinched waist, elbowed antennae, one smooth arched back; workers in one colony vary from ~6 mm to over a centimetre</td>
                  <td className="px-4 py-3 text-gray-700">Clean, dry frass like coarse sawdust with legs and wing bits mixed in</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Structural, slow</strong> &mdash; excavates damp wood over years</td>
                  <td className="px-4 py-3 text-gray-700">Find the nest, bait or dust it, fix the moisture</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Subterranean termite<br /><span className="font-normal text-xs text-gray-500">Reticulitermes flavipes</span></td>
                  <td className="px-4 py-3 text-gray-700">No waist &mdash; straight-sided; straight beaded antennae; workers soft and creamy-white; swarmer wings all equal length</td>
                  <td className="px-4 py-3 text-gray-700">Mud tubes up foundations; galleries packed with soil; neat piles of shed equal wings</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Structural, fast</strong> &mdash; and present in Ontario pockets</td>
                  <td className="px-4 py-3 text-gray-700">Stop. Licensed inspection, and check municipal rules</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Pavement ant<br /><span className="font-normal text-xs text-gray-500">Tetramorium immigrans</span></td>
                  <td className="px-4 py-3 text-gray-700">Tiny (~3 mm), uniform size, dark, fine grooves on the head and thorax</td>
                  <td className="px-4 py-3 text-gray-700">Fine sand and soil piles between patio stones, driveway cracks and sidewalk joints</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Nuisance only</strong> &mdash; no wood damage</td>
                  <td className="px-4 py-3 text-gray-700">Bait if they come indoors; otherwise leave them</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">The sawdust test.</strong> Sand between your patio stones is pavement ants and does not matter. Dry, fluffy shavings with insect parts in them, piling up under a window frame or a basement sill plate, is carpenter ant frass and does matter. Soil packed <em>into</em> the wood grain, or mud tubes climbing a foundation wall, is neither &mdash; that is a termite call, and it is the one item on this page where you stop working and phone someone licensed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Carpenter Ants in Canada — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What they actually do', 'Excavate wood for nesting galleries — they do not eat it'],
                  ['Why your wood', 'It has been wet: leak, ice dam, rot, condensation, wood-soil contact'],
                  ['The diagnostic sign', 'Frass — dry coarse shavings with insect body parts in it'],
                  ['Winter indoor sighting', 'Outdoor colonies are dormant, so the nest is inside the heated envelope'],
                  ['Swarmers indoors', 'A mature nest inside the structure — not ants wandering in'],
                  ['Parent colony', 'Queen, eggs and young larvae; needs damp wood; often a stump or log outdoors'],
                  ['Satellite colonies', 'Workers, older brood and reproductives; happy in dry framing inside your walls'],
                  ['Foraging pattern', 'Nocturnal — peak activity from dusk through the first hours of dark'],
                  ['Why sprays fail', 'Repellent pyrethroids scatter satellites and kill the foragers bait needs'],
                  ['What works instead', 'Sugar-based liquid bait carried home, or dust into a located void'],
                  ['Canadian legal check', 'Any pesticide sold here carries a PCP registration number on the label'],
                  ['Ontario cost range', 'Roughly $300–$800 for carpenter ants vs $150–$400 for general ant work'],
                  ['Call a pro when', 'Winter activity, swarmers indoors, frass from a ceiling, rustling in a wall'],
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

          <h2>How Do You Actually Get Rid of Carpenter Ants?</h2>
          <p>By finding the nest. That is not a throat-clearing preamble to the real advice &mdash; it <em>is</em> the advice, and it is what separates a problem solved in one season from a problem still being sprayed at three summers on. Every other pest on this site can be beaten by changing a condition: dry the basement and silverfish leave, bait the kitchen and roaches collapse. Carpenter ants do not work that way, because the thing you need to kill is a queen sitting inside a piece of wood you cannot see, protected by a few thousand workers whose job is to bring her food from anywhere within a radius that can easily exceed the width of your lot.</p>
          <p>Kill the ants on the counter and you have removed a tiny fraction of a colony, in the worst possible way: the survivors reroute, the satellite nest relocates a stud bay deeper into the wall, and the trail you could have followed disappears. Find the nest and the treatment part is almost anticlimactic &mdash; a dust into that void, or a bait line on that trail, and it is done.</p>
          <p>So the plan for this page runs in that order. Confirm what you actually have. Read the frass. Work out whether the nest is inside the building or outside it &mdash; the season and the calendar will tell you more than the ants will. Understand the parent-and-satellite structure, because that is why this problem keeps coming back. Find the water, because the ants went where the wood was wet. Then, and only then, treat &mdash; and know the line where DIY stops being the cheaper option, because with carpenter ants that line arrives earlier than people expect.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the diagnostic kit:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="pinless wood moisture meter">Moisture meter &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="liquid ant bait stations borax">Liquid borax baits &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth insect duster">DE + duster &rarr;</BuyLink>
          </div>

          <h2>Confirm It Is a Carpenter Ant — and Not a Termite</h2>
          <p>Carpenter ants (<em>Camponotus</em> species) are among the largest ants found in Ontario, and the two usually identified here are an all-black species and one with a rusty red-brown midsection. Get one under decent light and check three things. The <strong>waist</strong> is sharply pinched, wasp-like, with a single node. The <strong>antennae</strong> are elbowed &mdash; a short first segment, then a distinct bend. And viewed from the side, the <strong>back is a single smooth arch</strong>, not a bumpy or notched profile like most other ants.</p>
          <p>One more tell that surprises people: <strong>size varies within a single colony</strong>. Carpenter ant workers are polymorphic, so a trail can contain small ants around 6 mm walking beside majors well over a centimetre. If you have ants of noticeably different sizes on one trail, that is a carpenter ant signature, not two species meeting.</p>
          <p>The comparison that actually matters is with termites, because the response is different and the cost of getting it wrong runs one direction. A termite has <strong>no waist</strong> &mdash; it is straight-sided from head to abdomen. Its antennae are <strong>straight and beaded</strong>, not elbowed. Termite workers are soft and creamy-white, which is why the old name was &ldquo;white ants.&rdquo; And in swarming season, the wings settle it instantly: a carpenter ant&rsquo;s front pair of wings is clearly longer than the back pair, while all four termite wings are the same length and shed off in tidy piles on a windowsill.</p>
          <p>The damage signatures diverge just as cleanly. Carpenter ants keep their galleries <em>immaculate</em> &mdash; smooth, sanded-looking chambers with all the debris pushed outside. Subterranean termites do the opposite: they pack galleries with soil, and they build mud shelter tubes up foundation walls and joists because they must stay in contact with moist ground. And no, termites are not somebody else&rsquo;s problem in Canada: the eastern subterranean termite is established in documented pockets of southern Ontario, including parts of Toronto and several southwestern Ontario municipalities, some of which run their own termite programs and maintain rules about moving untreated wood or soil out of designated areas. Mud tubes, soil-packed grain, or piles of equal-length wings mean you stop, put the bait away, and get a licensed structural inspection.</p>

          <h2>Frass: The Sign Worth Learning to Read</h2>
          <p>If you find frass, you are ahead of most people fighting this. Frass is the excavated material carpenter ants push out of their galleries through small slit-like openings, and it looks like coarse sawdust or fine pencil shavings &mdash; dry, fluffy, pale, and, critically, <strong>mixed with insect body parts</strong>. Legs, wing fragments, dead ant sections, and whatever else was in the void: shreds of fibreglass insulation, crumbs of rigid foam, bits of old newspaper from a 1960s wall. That inclusion is what distinguishes it from renovation dust or wood-boring beetle powder, which is fine and flour-like.</p>
          <p>Common places it turns up: under a basement window frame, along the top of a foundation wall where the sill plate sits, at the base of a door casing, on the treads below an attic hatch, on top of attic insulation near the soffits, on a deck board directly below the ledger where the deck meets the house, and inside a garage against the wall shared with the living space. Occasionally it drifts down from a ceiling light fixture, which is a fast escalation &mdash; that means a nest in the joist bay above.</p>
          <p>Two things to do with it. First, <strong>sweep it up and mark the date.</strong> If a fresh pile appears within a few days, the nest above it is active right now, which is the green light for treatment and the evidence a professional will want. Second, <strong>do not seal the opening.</strong> The instinct is to caulk the slit shut. Resist it: that opening is your monitor, your access point for dust, and the thing that tells you whether treatment worked. Seal it after the colony is dead, not before.</p>

          <h2>The Winter Rule: Ants Indoors in February Means a Nest Indoors</h2>
          <p>Overwintering biology makes an indoor February sighting genuinely diagnostic, and the check costs nothing. Carpenter ants that live outdoors in Ontario go into overwintering dormancy once the cold sets in. They cluster in the nest, they do not forage, and they do not send workers across a snow-covered yard to your kitchen. So a live carpenter ant walking your countertop in January or February did not come in from outside. <strong>It is already inside</strong> &mdash; in a wall void, a subfloor, an attic soffit, the framing behind a shower, or the boxed-in space around a chimney &mdash; kept active all winter by the warmth of the house it is living inside.</p>
          <p>The same logic applies to winged ants. Swarmers are produced by mature colonies and released to found new ones, and outdoor colonies swarm outdoors in spring. Winged carpenter ants emerging <em>inside</em> your house &mdash; typically accumulating at windows, because they fly to light &mdash; means a nest inside the structure that has been there long enough to reach reproductive maturity. In Ontario that usually shows up in late winter or spring, when the interior warmth runs ahead of the season outside.</p>
          <p>Contrast that with the ordinary summer picture: a handful of workers appearing in the kitchen in July, mostly at night, often near a sink or a pet bowl. That could be a foraging trail from a stump at the back of the yard, and the investigation runs outward rather than inward. Same insect, entirely different job.</p>

          <h2>Parent Colonies, Satellite Colonies, and Why It Keeps Coming Back</h2>
          <p>Here is the structure behind a lot of failed carpenter ant campaigns. A carpenter ant colony is not one nest &mdash; it is a network.</p>
          <p>The <strong>parent colony</strong> holds the queen, her eggs and the youngest larvae. Those eggs need consistent humidity to stay viable, so the parent colony has to be in genuinely damp wood: a stump, a dead limb, a fallen log, a rotting fence post, a buried offcut of lumber, a woodpile that has been sitting on soil for two seasons, or &mdash; when things have gone badly &mdash; a rotted sill plate or roof deck inside the house.</p>
          <p>The <strong>satellite colonies</strong> hold older larvae, pupae, workers and the winged reproductives. None of those life stages need high humidity, which means satellites can live in perfectly dry wood: your wall studs, your subfloor, a hollow-core door, the void inside a boxed soffit, roof sheathing, even rigid foam insulation board, which carpenter ants tunnel through with enthusiasm despite it not being wood at all. Workers commute between parent and satellites along established trails, moving brood and food back and forth.</p>
          <p>Now the failure mode is obvious. You find ants in the kitchen wall, you treat the kitchen wall, the ants stop for a while, and then they are back &mdash; because you killed a satellite while a queen in a stump forty metres away kept producing replacements. Or the reverse: you find and destroy a nest in the backyard log, and satellites already established inside the house carry on regardless, since one of them can raise a new queen&rsquo;s worth of trouble on its own. <strong>The only durable outcome comes from a treatment the workers carry through the whole network</strong> &mdash; which is precisely why bait, and non-repellent professional products, succeed where contact killers do not.</p>

          <h2>The Root Cause Is Water, Not Ants</h2>
          <p>Carpenter ants are not randomly distributed. They excavate wood that is soft, and wood goes soft when it gets wet and stays wet. If you find a nest, there is a water story behind it, and if you fix the ants without fixing the water you have booked a rerun.</p>
          <p>The Ontario list, and the water story sitting behind each one:</p>
          <ul>
            <li><strong>Ice damming.</strong> The winter classic. Meltwater backs up under shingles, soaks the roof sheathing and the soffit framing, and by the following summer that wood is exactly what a satellite colony wants. Attic frass near the eaves usually traces back to this.</li>
            <li><strong>Failed flashing.</strong> Chimneys, skylight curbs, the little roof over a bay window, and the junction where a second-storey wall meets a lower roof. Slow, invisible, and it wets structural framing directly.</li>
            <li><strong>Deck ledger boards.</strong> Where the deck bolts to the house is a classic exterior nest site, because water tracks behind the ledger and sits there with nothing to dry it. Check the underside of the deck at the house wall.</li>
            <li><strong>Downspouts dumping at the foundation.</strong> Saturated soil against a sill plate and wet rim joists behind the siding. Extensions are an inexpensive fix.</li>
            <li><strong>Wood-to-soil contact.</strong> Fence posts, deck posts, landscape timbers, planter boxes against siding, and mulch piled up over the sill. Wood touching soil is wet wood.</li>
            <li><strong>Interior plumbing.</strong> Behind a shower surround, under a dishwasher, at a fridge water line, around a bathtub drain. These produce nests in the middle of a house with no exterior clue at all.</li>
            <li><strong>Firewood and yard debris.</strong> A woodpile stacked against the house on bare ground is a parent colony waiting to happen, and every log you carry inside is a delivery.</li>
          </ul>
          <p>The corollary is a genuinely useful piece of triage: <strong>carpenter ants in a stump at the back of your lot, with no trail to the house and no indoor activity, are not a problem you need to solve.</strong> They are native insects doing the job of breaking down deadwood. Remove or grind the stump if you want to reduce pressure, but blanket-treating a yard because there are ants in it is money spent on nothing. The trigger for action is a trail heading toward the house, or evidence inside it.</p>

          <h2>Find the Nest: The Inspection That Decides Everything</h2>
          <p>Carpenter ants forage at night, which makes daytime inspection mostly unproductive and a headlamp the tool the whole inspection depends on. Pick a warm evening, start about an hour after sunset, and give it a proper hour.</p>
          <p><strong>Walk the trail, do not interrupt it.</strong> Ants move along edges: the top of the foundation, the underside of siding trim, deck rails and joists, fence tops, hydro and cable lines, and any tree branch or shrub touching the roof or wall &mdash; those are bridges, and carpenter ants use them constantly. Find a moving ant and follow it in both directions. Where is it coming from, and where is it going? Do not spray it, do not wipe the trail with vinegar, and try not to break the line: you are following a map, and every disruption redraws it.</p>
          <p><strong>Then bring the moisture meter.</strong> This is where the job usually breaks open. Run a pinless meter along the sill plate, the rim joist, window and door headers, the wall behind a shower, the deck ledger, and any framing you can reach in the basement or attic. Take a reading on wood you know is dry as your baseline, then hunt for the anomaly. Damp framing in a house with no obvious leak is telling you two things at once: where the ants are, and where the repair is.</p>
          <p><strong>Listen.</strong> A large, active colony inside a wall void can be audible &mdash; a faint dry rustling, most often described as crinkling cellophane, and usually heard at night when the house is quiet. Tap along a suspect wall and listen. It is not subtle once you have heard it, and it is strong enough evidence to justify a professional call on its own.</p>
          <p><strong>Watch for the frass to point down.</strong> Frass falls. A pile at floor level means the opening is somewhere above it, sometimes several feet up. Follow the vertical.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="pinless wood moisture meter">Check pinless moisture meters on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Why DIY Spraying Fails on Carpenter Ants</h2>
          <p>Walk into a Canadian Tire, a Home Depot Canada or a Rona and the ant section is mostly aerosols and ready-to-use trigger sprays &mdash; the Raid, Wilson, Doktor Doom and Ortho end of the shelf. The actives are typically repellent pyrethroids. On a carpenter ant problem, they fail in three specific ways, and it is worth understanding each because the same logic explains what does work.</p>
          <p><strong>They kill a rounding error.</strong> A mature colony numbers in the thousands across a parent nest and its satellites. The ants visible on your counter at any moment are a vanishingly small fraction of that, and the queen &mdash; the only individual whose death actually ends the colony &mdash; is never among them.</p>
          <p><strong>They are repellent, so the colony scatters.</strong> Pyrethroid residue is detectable to ants. Spray a trail and the survivors do not queue up to die on it; they reroute. Satellites relocate deeper into the structure, sometimes splitting into more nests than you started with, and the tidy trail that would have led you to the source is gone. In carpenter ant work, losing the trail is a real setback, because the trail was the diagnostic.</p>
          <p><strong>They sabotage bait.</strong> This is the expensive one. Bait only works if living foragers carry it home. Spraying kills exactly those foragers and leaves residue that makes ants refuse nearby bait placements. It is easy to spray for a fortnight, switch to bait, and conclude that bait does not work either &mdash; when the bait never had a functioning workforce to exploit.</p>
          <p>Spray has one honest role: a <em>direct</em> treatment into a nest opening you have actually located, applied per the label. That is a completely different act from misting a baseboard because you saw an ant near it. And a note on Canadian rules while we are here &mdash; every pesticide legally sold in Canada carries a PCP registration number on the label from Health Canada&rsquo;s Pest Management Regulatory Agency, and the non-repellent actives professionals rely on for ant work are commercial-class here, which is why a licensed operator has options you simply cannot buy. Ontario&rsquo;s cosmetic pesticide restrictions, incidentally, do not block carpenter ant treatment: structural pest control is not cosmetic lawn-and-garden use.</p>

          <h2>Baiting: The Consumer Method That Reaches the Queen</h2>
          <p>Bait is the retail option that can reach a colony you cannot see, and it works because of how carpenter ants eat. They are liquid feeders &mdash; outdoors they live substantially on honeydew from aphids &mdash; and they share food by regurgitation, passing it worker to worker and ultimately to larvae and the queen. A slow-acting toxicant in a liquid sugar bait rides that distribution network straight to the target.</p>
          <p>What to buy, honestly: <strong>sugar-based liquid borax or boric acid ant baits</strong> &mdash; the Terro-style liquid stations that Canadian Tire, Home Depot Canada and Rona all stock in ant season. Check the label for a PCP registration number and check that carpenter ants are named. Granular baits, the ones designed to be scattered on soil, are generally a poor match: carpenter ants are not big granule foragers, and most of it just sits there.</p>
          <p>Now the rules that decide whether it works:</p>
          <ul>
            <li><strong>Place on the trail, not where you saw one ant once.</strong> Bait works by interception. Put stations directly on the established travel line &mdash; along the foundation edge, on the deck rail they run, under the sink beside the pipe they follow.</li>
            <li><strong>Never spray anything near the bait.</strong> Not aerosols, not vinegar, not essential-oil &ldquo;natural&rdquo; sprays. All of them are aversive and all of them break the chain.</li>
            <li><strong>Do not make it stronger.</strong> A common DIY mistake with homemade borax mixes is over-dosing, which kills the forager on the spot. A dead ant on your counter is a failed delivery. Commercial liquid baits are formulated slow on purpose.</li>
            <li><strong>Expect traffic to increase first.</strong> For the first few days, more ants show up, because workers recruit nestmates to a good food source. That surge is the mechanism working. Panicking and spraying it is a common way this goes wrong.</li>
            <li><strong>If they ignore the sugar bait, try protein.</strong> Carpenter ant food preference shifts through the season &mdash; more protein demand when brood is being raised, more carbohydrate later. Setting out a small greasy or protein bait alongside the sugar one and seeing which gets worked is a legitimate field test.</li>
            <li><strong>Give it weeks.</strong> Meaningful decline takes several weeks, not days. Keep bait fresh; dried-out bait is invisible bait.</li>
          </ul>
          <p>Product selection matters less here than nest-finding does, but if you want the shelf sorted before you spend anything, we compared the Canadian options &mdash; liquid borax stations, protein baits, gels and perimeter products &mdash; in our guide to <Link href="/blog/best-ant-killer">the ant killers that reach the queen in Canada</Link>. For the enclosed-station formats specifically, including which are safe to leave down around pets and kids, see <Link href="/blog/best-ant-traps-canada">bait stations versus glue traps for Canadian homes</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="liquid ant bait stations borax">Check liquid borax ant baits on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Dusting a Void — Once You Actually Know Where the Nest Is</h2>
          <p>Dust is the professional&rsquo;s answer for a located nest, because a dust travels through a void, coats the surfaces ants walk on, and keeps killing indefinitely as long as it stays dry. For a homeowner in Canada, that means insecticidal diatomaceous earth applied with a bulb duster &mdash; and, as always, a label carrying a PCP registration number, because DE sold as a feed additive is a different product with no pest-use directions behind it.</p>
          <p>Technique matters more than product. Puff a <em>thin, barely visible film</em>; ants detect and detour around a visible pile, so a heavy application actively performs worse. Good targets you can reach without opening a wall: the gap along a sill plate, the void behind a loose baseboard, the soffit or attic edge near where frass is falling, and the slit-like opening the ants are already using &mdash; which is the target worth prioritising, since it leads directly into the gallery. Do not puff dust into electrical boxes or around wiring; a wall void is a legitimate target, an outlet is not, and no gallery is worth that risk.</p>
          <p>What not to do: <strong>do not drill exploratory holes into walls</strong> hoping to find a gallery. Blind drilling into a stud bay is how people hit wiring and plumbing, and it rarely finds the nest anyway; that work belongs to someone with a meter, a borescope and insurance. And remember DE&rsquo;s hard limitation on this particular pest &mdash; carpenter ants nest in wood that is damp, and DE is inert the moment it gets wet. In a genuinely wet void it will do very little, which is one of the honest reasons carpenter ants often tip toward professional treatment. Our full application and product-selection guidance is in the <Link href="/blog/diatomaceous-earth-canada-buyers-guide">diatomaceous earth buyer&rsquo;s guide for Canada</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="diatomaceous earth insect duster">Check DE + duster kits on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Exclusion and Yard Work: Stop Rebuilding the Highway</h2>
          <p>None of this kills an ant today, and all of it decides whether you are doing this again in two years.</p>
          <p><strong>Cut the bridges.</strong> Prune tree limbs and shrubs back so nothing touches the roof or the siding &mdash; a couple of metres of clearance. Overhanging branches are a common carpenter ant entry route into upper storeys, and they bypass every bit of ground-level sealing you did.</p>
          <p><strong>Break wood-to-soil contact.</strong> Firewood off the ground, off the wall, and ideally not against the house at all; bring in only what you burn that day. Pull mulch back from the siding so the sill plate is not buried. Replace or lift landscape timbers sitting directly in soil. Dig out buried construction offcuts if you find them &mdash; they are classic parent-colony real estate.</p>
          <p><strong>Deal with the deadwood.</strong> Stumps, dead limbs and hollowing trees anywhere in the yard &mdash; and on the lots next door &mdash; are the realistic parent-colony sites. You do not need a sterile lot, but the dead stump twenty feet off the deck is worth grinding.</p>
          <p><strong>Then seal.</strong> Caulk foundation cracks, gaps around utility penetrations, and the joints where trim meets siding. Fit door sweeps. Screen weep holes and vents. In a Canadian house every one of those seals also cuts a draft, and the identical exclusion pass is what we recommend against the autumn invasion crowd &mdash; the technique overlaps almost exactly with <Link href="/blog/how-to-get-rid-of-cluster-flies-canada">cluster flies</Link> and <Link href="/blog/how-to-keep-spiders-out-of-your-house">keeping spiders out</Link>, which exploit the same gaps every October.</p>
          <p>Two more small things that pay: fix the downspout that dumps at the foundation, and clean the gutters, since the overflow is often the water story behind an attic nest. If you are also seeing large flying insects around outdoor lights in early summer and wondering what they are, our <Link href="/blog/june-bugs-ontario">June bugs in Ontario</Link> guide covers the other big Ontario insect people mistake for something serious.</p>

          <h2>What Does Not Work — Said Plainly</h2>
          <p><strong>Ultrasonic plug-in repellers.</strong> No. There is no credible evidence they control any structural pest, and a colony inside a wall void is acoustically insulated from the device anyway. We wrote up the whole category in <Link href="/blog/ultrasonic-pest-repellers-do-they-work">do ultrasonic pest repellers work</Link>; the summary is that the money is better spent on a moisture meter.</p>
          <p><strong>Cinnamon, vinegar, coffee grounds, chalk, peppermint oil.</strong> These disrupt a pheromone trail temporarily. The ants take a different route for a day or two. The queen notices nothing. If a &ldquo;remedy&rdquo; makes the ants disappear from your counter overnight, what it did was move the trail, and you have lost your best diagnostic.</p>
          <p><strong>Boiling water on a nest.</strong> Fine on an outdoor anthill in soil; irrelevant to a colony inside wood, and a bad idea anywhere near a structure.</p>
          <p><strong>Sticky traps.</strong> Useful as monitors for some pests, near-useless as control here. They will not out-catch a colony and they will not tell you where the nest is the way a trail and a moisture reading will.</p>
          <p><strong>Total-release foggers.</strong> Actively counterproductive here. A fogger coats open surfaces, which is where carpenter ants are not, scatters satellites deeper into the structure, contaminates every location where bait would have worked, and carries real fire and inhalation risks in an enclosed space. A fogger is not a recognised carpenter ant treatment.</p>

          <h2>The Honest Call-a-Pro Threshold</h2>
          <p>We publish product research, and on most pests we will tell you that the DIY route is genuinely good enough. Carpenter ants are the page where that changes, because the value is in diagnosis and access rather than in the product &mdash; and because the consequence of getting it wrong compounds inside a wall for years.</p>
          <p>Call a licensed operator when any of these are true:</p>
          <ul>
            <li><strong>Live ants indoors in winter</strong>, or winged swarmers emerging inside the house. Both mean a mature nest inside the structure.</li>
            <li><strong>Frass in more than one location</strong>, or frass coming from a ceiling. Multiple satellites, or a nest in a joist bay above living space.</li>
            <li><strong>Audible rustling in a wall</strong>, or wood that sounds hollow or feels spongy when probed.</li>
            <li><strong>Several weeks of correct baiting with no decline.</strong> At that point you are missing the nest, not under-dosing.</li>
            <li><strong>You cannot find the nest</strong> after two proper after-dark inspections with a light and a meter.</li>
            <li><strong>Any suspicion of termites.</strong> Different insect, different regulations, different urgency &mdash; stop and get an inspection.</li>
          </ul>
          <p>What a good operator brings that you cannot buy: non-repellent commercial-class actives that ants carry through the colony without detecting, commercial-class void treatments, injection equipment for wall cavities, moisture meters and borescopes, and the pattern recognition to read a trail back to a stump you would have walked past twenty times. On cost, our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> puts carpenter ant work meaningfully above general ant work &mdash; roughly $300&ndash;$800 in Ontario versus $150&ndash;$400 &mdash; and that premium is buying inspection and nest treatment, not a bigger sprayer.</p>
          <p>Two things to insist on when you hire. <strong>An inspection before a price.</strong> Anybody quoting a carpenter ant job over the phone is selling a perimeter spray, and a perimeter spray does not find nests. <strong>And a moisture conversation.</strong> If nobody asks about leaks, ice damming, the deck ledger or the shower wall, you are getting a treatment rather than a solution. Frequently the real repair belongs to a roofer or a carpenter, and the exterminator is the cheaper half of the job.</p>
          <p>One last note on who is telling you this, because it should shape how you weigh it. BuzzSkito is a mosquito and tick control company &mdash; that is the work we are licensed and equipped for, and we do not treat ants. This guide is independent research rather than an account of our own service calls, which is exactly why it keeps pointing you toward a licensed structural operator instead of toward us. If you take one thing away from the page, make it the deck ledger: a trail running along the board where a deck meets the house is worth acting on, because somebody should be looking behind that board before the wood behind it goes any further.</p>

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

          <h2>Related Household Pest Guides</h2>
          <ul>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Buyer&rsquo;s Guide and Application Technique</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cockroaches-canada">How to Get Rid of Cockroaches in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cluster-flies-canada">How to Get Rid of Cluster Flies in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps in Canada</Link></li>
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
        heading="Ants Aren't Our Fight — Mosquitoes and Ticks Are"
        subtext="BuzzSkito treats mosquitoes and ticks across 19 GTA cities. If your backyard has those too, the assessment is free."
      />
    </>
  )
}
