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
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-get-rid-of-cockroaches-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'How to Get Rid of Cockroaches in Canada — The Bait-First Plan That Actually Works'
const META_TITLE = 'Get Rid of Cockroaches Canada: Bait, Not Spray'

const FAQS = [
  {
    question: 'How do I get rid of cockroaches permanently in Canada?',
    answer: 'Bait, not spray. The plan that works: identify the species (German cockroaches are the indoor breeder that matters most in Canada), cut off food and water for 24 hours a day (dishes done, counters wiped, garbage lidded, sink dried at night), place enclosed bait stations along the wall edges and corners where roaches travel, and lay glue-board monitors so you can measure progress instead of guessing. Roaches carry slow-acting bait back to the harbourage and poison nestmates that never left the wall void — that domino effect is the only consumer mechanism that reaches the 70-plus percent of the population you never see. Expect meaningful knockdown in 1–3 weeks and keep stations refreshed for at least 2–3 months to catch hatching egg cases.',
  },
  {
    question: 'What kind of cockroach do I have — German, American, or Oriental?',
    answer: 'Size and location tell you. German cockroaches are small (12–16 mm), tan-brown with two dark stripes behind the head, and live indoors near warmth and moisture — kitchens and bathrooms. They are the species behind virtually every Canadian apartment infestation. American cockroaches are huge by comparison (up to 50 mm, reddish-brown) and in Canada are mostly a basement, drain, boiler-room, and commercial-building insect that wanders up from sewers. Oriental cockroaches are dark, almost black, glossy, and favour cold damp places — floor drains, crawl spaces, under concrete steps. The ID matters because German roaches demand aggressive in-kitchen baiting, while a lone American roach that came up a drain may need nothing more than a drain screen and a flushed trap line to confirm it was alone.',
  },
  {
    question: 'Why do cockroach sprays make the problem worse?',
    answer: 'Three reasons. First, repellency: most consumer aerosols leave residues that roaches detect and avoid, so survivors relocate — deeper into wall voids, into the next cupboard, or into the neighbouring apartment — turning one harbourage into several. Second, spray only kills the roaches you can see, which is a minority of the population; the egg cases and nymphs in the cracks are untouched. Third, and most costly: spray residues contaminate bait placements. A roach will not feed at a bait station sitting on a surface that smells of pyrethroid, so spraying first can sabotage the one method that actually works. If you have already sprayed, wash the treated surfaces with soap and water before placing bait.',
  },
  {
    question: 'Do cockroach bait stations actually work?',
    answer: 'Yes — enclosed bait stations are the most effective consumer-legal tool for German cockroaches in Canada, and the mechanism is what makes them work. The station holds an attractive food bait laced with a slow-acting insecticide. Foragers feed, walk home, and die in the harbourage hours later, where their contaminated droppings and carcasses are eaten by nymphs and other adults that never leave the void — the secondary-kill domino effect. Placement decides everything: stations go tight against walls, in corners, under the sink, beside the fridge motor, and inside cupboard corners, because roaches travel edges, not open surfaces. Check the label for a Pest Control Products (PCP) registration number to confirm the product is Health Canada registered for domestic use.',
  },
  {
    question: 'Is Advion cockroach gel legal in Canada?',
    answer: 'Advion (indoxacarb) cockroach gel is the famous answer on American forums, but the versions sold on marketplace listings to Canadian buyers are typically US-market product — formulated and labelled under US EPA registration, not under a Canadian PCP number. Any pesticide legally sold in Canada must carry a PCP registration number on its label under the Pest Control Products Act, so before buying any gel bait online, check the listing photos and the physical label for that number. The compliant consumer path in Canada is domestic-class enclosed bait stations, which are PMRA-registered, child-resistant, and widely stocked. We break down the whole Advion situation — what it is, why Americans swear by it, and what the Canadian rules actually say — in our dedicated Advion cockroach gel Canada guide.',
  },
  {
    question: 'How long does cockroach bait take to work?',
    answer: 'Individual roaches die within hours to a couple of days of feeding, but population collapse takes longer because of egg cases. A German cockroach ootheca holds 30–48 eggs and hatches on its own schedule — the female carries it protected until just before hatch, so no bait or spray touches the eggs inside. Expect visibly fewer roaches within 1–3 weeks, then a smaller rebound as the last egg cases hatch into nymphs, which then feed on bait and die. Keep fresh bait down for a minimum of 2–3 months and let your glue-board monitors — not your gut — tell you when catches have hit zero for several consecutive weeks.',
  },
  {
    question: 'I live in an apartment — can I get rid of cockroaches myself?',
    answer: 'You can suppress them in your unit, but you usually cannot eliminate them alone, and it is important to understand why: in a multi-unit building, your kitchen is one node in a building-wide network. German cockroaches move between units through plumbing chases, shared walls, and hallway door gaps, so a colony centred two floors down will keep reseeding your unit no matter how well you bait. Report the problem to your landlord or property manager in writing — in most provinces, including Ontario, pest control in multi-unit buildings is legally the landlord’s responsibility as part of maintaining the unit fit for habitation — and push for coordinated treatment of adjacent units, not just yours. Meanwhile, bait stations plus door sweeps plus sealed plumbing penetrations keep your unit inhospitable.',
  },
  {
    question: 'Does killing a cockroach attract more cockroaches?',
    answer: 'Not in the way the myth suggests — a squashed roach does not send out a revenge signal. There is a kernel of truth: cockroaches are attracted to aggregation pheromones in roach droppings and, being opportunistic scavengers, will eat dead roaches. That second behaviour is actually the engine that makes bait work, since bait-killed carcasses poison the roaches that eat them. The practical takeaways: clean up droppings (the pheromone trail) with soap and water in areas you can reach, do not bother chasing individuals with a shoe as a strategy, and let the bait-and-carcass chain do the killing where you cannot see it.',
  },
  {
    question: 'Do home remedies like bay leaves, citrus, or vinegar repel cockroaches?',
    answer: 'No — none of the scent-based folk remedies survive testing. Bay leaves, citrus peel, cucumber slices, essential oil sprays, and vinegar wipe-downs neither kill roaches nor meaningfully repel a motivated, food-seeking German cockroach population. The two DIY materials with genuine evidence are boric acid and diatomaceous earth used as fine dust in dry, hidden locations — behind the stove, under the fridge, inside the void under a kitchen cabinet kickplate. Both kill roaches that walk through them, though they are slow, useless in damp spots, and messy compared with enclosed bait stations. If you use them, look for products labelled for the purpose with a PCP registration number, and apply a barely visible film — piles get walked around.',
  },
  {
    question: 'Do cockroaches mean my home is dirty?',
    answer: 'No. German cockroaches arrive by hitchhiking — in cardboard boxes, grocery bags, used appliances and furniture, or through the walls of a multi-unit building — and a spotless kitchen can absolutely be infested if roaches came in with a food delivery box or from a neighbouring unit. What sanitation controls is not arrival but carrying capacity: how large a population your kitchen can feed. Crumbs, grease films, pet food left out overnight, and a dripping sink trap let a founding population explode; a dry, crumb-free kitchen forces roaches to range farther for food, which drives them into your bait stations faster. Clean homes get roaches; clean homes just beat them quicker.',
  },
  {
    question: 'Are bug bombs or foggers a good idea for cockroaches?',
    answer: 'They are close to the worst option available. Total-release foggers blast a pyrethroid mist onto open surfaces — exactly where German cockroaches are not — while barely penetrating the cracks, voids, and cupboard hinges where they actually live. The repellent residue then scatters survivors into new harbourages and contaminates every surface where a bait station could have worked. Add the real fire and inhalation hazards of propellant-driven foggers in enclosed kitchens and the verdict is simple: no professional uses foggers for cockroaches, and neither should you. Bait stations plus monitors cost about the same and attack the colony instead of decorating it.',
  },
  {
    question: 'When should I call a professional exterminator for cockroaches?',
    answer: 'Call a licensed professional when any of these are true: you see roaches in daylight (daytime activity signals heavy population pressure and saturated harbourages), you find roaches in rooms far from the kitchen or on upper floors, your glue-board monitors are still catching after 8–12 weeks of disciplined baiting, anyone in the household has asthma (cockroach allergens are a clinically established asthma trigger, especially in children), or you are in a multi-unit building where the source is beyond your walls. Professionals bring commercial-class gel baits, insect growth regulators, and vacuum removal that consumers cannot legally buy in Canada, and in apartments they can coordinate the multi-unit treatment that actually ends the problem. Our pest control cost guide covers what Canadian roach treatments typically run.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How to get rid of cockroaches in Canada: German vs American vs Oriental ID, why sprays scatter colonies, the bait-station + glue-board-monitor plan, apartment/landlord rules, and the honest Canadian answer on Advion gel. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('how-to-get-rid-of-cockroaches-canada')

export default function HowToGetRidOfCockroachesCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian cockroach control guide: species identification, why sprays backfire, bait-station and monitoring strategy, apartment-building IPM, and PMRA context for gel baits.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Cockroaches in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Get Rid of Cockroaches</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">German vs American vs Oriental identification, why spraying scatters the colony instead of killing it, and the bait-station + monitor plan that reaches the 70% of roaches you never see &mdash; with the honest Canadian answer on Advion gel.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Enclosed roach bait stations (domestic-class)" search="roach killing bait stations" label="Best first move" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of cockroaches in Canada, skip the spray can entirely: cut off food and water, place enclosed bait stations along wall edges in the kitchen and bathroom, and lay glue-board monitors to measure progress. Foraging roaches carry slow-acting bait back to the harbourage and poison the nestmates you never see &mdash; the only consumer mechanism that collapses a colony instead of scattering it. In apartments, your unit is usually one node in a building-wide problem: bait your unit, but report it to the landlord in writing and push for coordinated treatment.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Small (12&ndash;16 mm), tan, two dark stripes = German cockroach &mdash; the indoor breeder behind almost every Canadian kitchen infestation.</li>
              <li>Sprays repel: survivors relocate deeper into voids or next door, and spray residue makes roaches refuse nearby bait.</li>
              <li>You see maybe 30% of the population &mdash; bait&rsquo;s carry-home secondary kill is how you reach the rest.</li>
              <li>Sanitation decides how fast bait wins: a crumb-free, dry-sink kitchen forces roaches into stations sooner.</li>
              <li>Advion gel is the famous US answer but is typically US-market product here &mdash; check any pesticide label for a Canadian PCP registration number before buying.</li>
              <li>Egg cases hatch on their own schedule: keep fresh bait down 2&ndash;3 months and let glue-board catches, not sightings, declare victory.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <div className="not-prose rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Ready to buy the kit?</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              This page is the plan &mdash; species ID, sanitation, the bait-first sequence and the apartment problem. Three companion pages cover the purchases:
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-gray-800 list-disc pl-5">
              <li><Link href="/blog/best-roach-traps-canada" className="text-emerald-700 underline font-semibold">Cockroach traps in Canada</Link> &mdash; glue boards versus enclosed bait stations, how many of each, and exactly where they go.</li>
              <li><Link href="/blog/best-cockroach-spray-canada" className="text-emerald-700 underline font-semibold">Cockroach spray in Canada</Link> &mdash; the three jobs a can legitimately wins, and why spraying near your bait ruins it.</li>
              <li><Link href="/blog/advion-cockroach-gel-bait-canada" className="text-emerald-700 underline font-semibold">Advion cockroach gel bait in Canada</Link> &mdash; the honest answer on the imported gel and the PCP-number check.</li>
            </ul>
          </div>

          <SpecialistDisclosure pest="cockroaches" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Cockroach Control Kit for Canadian Homes"
            awards={[
              {
                badge: 'Best First Move',
                name: 'Enclosed Roach Bait Stations (Combat-style, domestic-class)',
                why: 'Child-resistant plastic stations with slow-acting food bait — foragers feed, walk home, and poison the harbourage through contaminated carcasses and droppings. The compliant, widely stocked Canadian answer; check the label for a PCP registration number.',
                search: 'roach killing bait stations',
                score: 8.8,
                featured: true,
                pros: ['Secondary kill reaches roaches that never leave the wall void', 'Enclosed and child-resistant — kitchen-cupboard safe', 'Modest cost to blanket a whole kitchen'],
                cons: ['Slower than the spray-can illusion — weeks, not minutes', 'Stations must sit tight to edges and corners or catches drop'],
              },
              {
                badge: 'Best Monitoring',
                name: 'Glue-Board Roach Monitors (multi-pack)',
                why: 'Flat sticky traps that tell you what species you have, where the traffic runs, and — weeks later — whether your baiting is actually working. Monitoring is the step every failed DIY job skipped.',
                search: 'cockroach glue trap monitor',
                score: 8.1,
                pros: ['Turns guessing into data: species, hot spots, trend line', 'No pesticide at all — a device, so no registration needed', 'Cheap enough to lay a dozen on night one'],
                cons: ['Monitors measure the problem; they do not solve it', 'Need replacing once dusty or full'],
              },
              {
                badge: 'Gel Format (Label-Check First)',
                name: 'Cockroach Gel Bait Syringe',
                why: 'Gel in a syringe reaches crack-and-crevice placements stations cannot — hinge voids, cabinet seams. But many gels marketed to Canadian buyers online are US-market product: verify a Canadian PCP registration number on the label before you buy.',
                search: 'cockroach gel bait',
                score: 7.2,
                pros: ['Precision placement in cracks where roaches actually live', 'Small dabs go a long way across a kitchen', 'The format professionals use — when properly registered'],
                cons: ['Many online listings are US-registered product, not Canadian', 'Exposed gel is not child-resistant like an enclosed station'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Standard kitchen or bathroom infestation?</strong> Start with the <em>Best First Move</em> enclosed stations plus the <em>Best Monitoring</em> glue boards on the same night &mdash; the stations do the killing, the boards prove it. <strong>Roaches in cabinet hinges and seams stations can&rsquo;t reach?</strong> A gel syringe adds precision, but read the <em>Label-Check First</em> caveat and our full <Link href="/blog/advion-cockroach-gel-bait-canada">Advion gel Canada guide</Link> before ordering any gel online. <strong>Seeing roaches in daylight or living in an apartment?</strong> Bait anyway &mdash; but escalate to your landlord or a licensed pro, because the colony is bigger than your unit.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Methods Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Every Cockroach Control Method, Ranked Honestly</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The cockroach aisle sells five very different things, and two of them actively sabotage the other three. Here is the honest hierarchy for Canadian homes, with a live Amazon.ca availability check where a purchase makes sense.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Enclosed bait stations<br /><span className="font-normal text-xs text-gray-500">Combat-style, domestic-class</span></td>
                  <td className="px-4 py-3 text-gray-700">Slow-acting food bait carried back to the harbourage; secondary kill via carcasses and droppings</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best consumer method</strong> &mdash; reaches roaches you never see</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="roach killing bait stations" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Glue-board monitors<br /><span className="font-normal text-xs text-gray-500">Sticky traps</span></td>
                  <td className="px-4 py-3 text-gray-700">Passive capture along travel edges; reveals species, hot spots, and week-over-week trend</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Essential companion</strong> &mdash; measurement, not control</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cockroach glue trap monitor" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Gel bait syringe<br /><span className="font-normal text-xs text-gray-500">Crack-and-crevice format</span></td>
                  <td className="px-4 py-3 text-gray-700">Dabs of bait placed directly into cracks, hinges, and seams roaches harbour in</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Powerful, with a catch</strong> &mdash; verify a Canadian PCP number on the label first</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cockroach gel bait" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Boric acid / DE dust<br /><span className="font-normal text-xs text-gray-500">Inorganic dusts</span></td>
                  <td className="px-4 py-3 text-gray-700">Thin film in dry hidden voids; abrades and poisons roaches that walk through</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Legitimate supplement</strong> &mdash; slow, dry areas only, apply thin</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="boric acid roach powder" block>Check price →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Aerosol sprays &amp; foggers<br /><span className="font-normal text-xs text-gray-500">The satisfying mistake</span></td>
                  <td className="px-4 py-3 text-gray-700">Contact kill of visible roaches; repellent residue on every treated surface</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Avoid</strong> &mdash; scatters the colony and makes roaches refuse nearby bait</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip these</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ The spray trap.</strong> Killing six roaches with an aerosol feels like progress, but the residue drives the other two hundred deeper into the walls and poisons the ground your bait stations need. If you have already sprayed, wash those surfaces with soap and water before placing bait &mdash; and put the can away for good.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Cockroach Control in Canada — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Species that matters most', 'German cockroach — 12–16 mm, tan, two dark stripes, indoor breeder'],
                  ['Big roach in the basement', 'American cockroach — up to 50 mm, usually a drain/sewer wanderer'],
                  ['Dark roach in damp cold spots', 'Oriental cockroach — glossy near-black, drains and crawl spaces'],
                  ['Best consumer method', 'Enclosed bait stations along wall edges (check for a PCP number)'],
                  ['Why not spray', 'Repellent residue scatters colonies and causes bait refusal'],
                  ['Visible share of population', 'Roughly a third or less — the rest live in cracks and voids'],
                  ['Egg case (ootheca)', '30–48 eggs, carried by the female, immune to bait and spray'],
                  ['Time to visible knockdown', '1–3 weeks; keep bait fresh 2–3 months for egg-case hatches'],
                  ['Progress metric', 'Glue-board monitor catches trending to zero — not sightings'],
                  ['Apartment rule', 'Landlord is responsible for pest control in most provinces — report in writing'],
                  ['Advion gel status', 'US-market product in most listings — see our dedicated guide'],
                  ['Call a pro when', 'Daytime sightings, 8–12 weeks of failed baiting, asthma in the home'],
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

          <h2>How Do You Actually Get Rid of Cockroaches?</h2>
          <p>With bait, patience, and a clean kitchen &mdash; and by never touching a spray can. That answer disappoints people, because the spray can is the satisfying option: you see a roach, you spray it, it dies, progress. But cockroach control is not about the roaches you see. A German cockroach population lives overwhelmingly out of sight &mdash; in the void behind the fridge, inside the cabinet kickplate, in the gap where the plumbing enters the wall &mdash; and the individuals foraging on your counter at 2 a.m. are a minority of the colony, commonly estimated at a third or less. Any method that only kills visible roaches is, by design, losing.</p>
          <p>Bait inverts the problem. An enclosed bait station holds a food attractant laced with a slow-acting insecticide. A forager feeds, walks back into the wall, and dies hours later in the harbourage &mdash; where its contaminated droppings and carcass are eaten by nymphs and adults that never left. One feeding can cascade through the void. This secondary-kill chain is the only mechanism available to Canadian consumers that reaches the roaches you will never see, and it is why every professional cockroach program on earth is built on bait, monitors, and sanitation rather than spray.</p>
          <p>The plan in one paragraph: identify your species, starve the kitchen (food sealed, dishes done, sink dried at night, garbage lidded), place enclosed bait stations tight along the wall edges and corners where roaches travel, lay glue-board monitors so you can measure instead of guess, and hold the line for two to three months while egg cases hatch into bait range. The rest of this guide unpacks each step &mdash; and covers the two situations where the plan changes: apartments, and the moment you should stop DIYing. If the cupboard turns up webbing and clumped grain instead of roach droppings, the culprit is a stored-product pest, and <Link href="/blog/pantry-moth-traps-canada" className="text-brand-700 underline">the pantry moth trap-and-purge routine</Link> covers that case.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the core kit:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="roach killing bait stations">Enclosed bait stations →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="cockroach glue trap monitor">Glue-board monitors →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="boric acid roach powder">Boric acid dust →</BuyLink>
          </div>

          <h2>First, Know Your Enemy: German vs American vs Oriental</h2>
          <p>Three cockroach species account for essentially all Canadian household encounters, and they demand different responses.</p>
          <p><strong>German cockroach &mdash; the one that matters.</strong> Small (12&ndash;16 mm), tan to light brown, with two dark parallel stripes on the shield behind the head. This is the indoor-breeding species behind virtually every kitchen and apartment infestation in Canada; it cannot survive a Canadian winter outdoors and lives its entire life within a few metres of warmth, moisture, and food. It also breeds faster than any other pest roach &mdash; a female produces an egg case (ootheca) of 30&ndash;48 eggs every few weeks and carries it protected until just before hatching, which is why populations explode and why no product touches the eggs. If you see small striped roaches in the kitchen or bathroom, everything in this guide applies at full intensity.</p>
          <p><strong>American cockroach &mdash; the basement giant.</strong> Reddish-brown and startlingly large &mdash; up to 50 mm, and it can glide short distances. In Canada this is mostly an insect of sewers, floor drains, boiler rooms, and commercial buildings; the one that appears in your basement in summer usually wandered up a drain rather than hatching on site. Response: screen or flush the floor drains, run water into seldom-used traps monthly so the water seal does not evaporate, lay a couple of glue boards near drains, and only escalate to baiting if the boards keep catching.</p>
          <p><strong>Oriental cockroach &mdash; the damp-loving one.</strong> Dark chestnut to nearly black, glossy, around 25&ndash;30 mm, and slower-moving than the other two. It favours cool damp harbourages: crawl spaces, under concrete steps, floor drains, and the base of exterior walls. Moisture control &mdash; fixing the leak, drying the crawl space, clearing the window well &mdash; does more against Oriental roaches than any product.</p>
          <p>Not sure which you have? That is precisely what the glue boards in the next sections are for &mdash; the corpse on the board is your species ID, and it decides whether you are running a full German-roach campaign or just screening a drain.</p>

          <h2>Why Spraying Makes Cockroaches Worse</h2>
          <p>The spray aisle is where Canadian cockroach money goes to die, and the failure has a specific mechanism worth understanding, because it also explains why bait works.</p>
          <p><strong>Repellency scatters the colony.</strong> Most consumer roach aerosols are pyrethroid-based, and pyrethroid residues are detectable and aversive to cockroaches. Spray the cupboard under the sink and the survivors do not stay to die &mdash; they relocate: deeper into the wall void, into the cupboard you did not spray, behind the bathroom vanity, or through the plumbing chase into the next apartment. Pest professionals have a phrase for what a fogger does to a German roach population: it splits one harbourage into five.</p>
          <p><strong>Spray cannot reach the population.</strong> Contact spray kills roaches it wets. The colony &mdash; the nymphs packed into a hinge void, the females carrying egg cases, the two-thirds that never forage on open surfaces on any given night &mdash; is never wetted. And the ootheca is a sealed capsule: no consumer spray or fogger kills the 30&ndash;48 eggs inside one.</p>
          <p><strong>Spray residue sabotages bait.</strong> This is the expensive part. Roaches will not feed at a bait placement sitting on or near a pyrethroid residue &mdash; the aversion that scatters them also causes bait refusal. Households that spray for two weeks and then switch to bait routinely conclude that &ldquo;bait doesn&rsquo;t work either,&rdquo; when the bait never had a chance on contaminated ground. If you have already sprayed, wash treated surfaces with soap and water, let them dry, and then place stations. The same trap catches homeowners fighting a kitchen ant trail, where spraying triggers colony budding instead of scattering &mdash; we cover that failure in detail in <Link href="/blog/how-to-get-rid-of-ants-canada">why ant bait beats the spray can</Link>.</p>
          <p>None of that makes aerosols useless &mdash; it makes them a scalpel rather than a broom. There are three narrow jobs a can still wins, and we set out what they are, which PMRA-registered products to reach for, and how to keep the residue away from your bait in <Link href="/blog/best-cockroach-spray-canada">the honest guide to cockroach sprays in Canada</Link>.</p>

          <h2>The Bait-Station Plan, Step by Step</h2>
          <p>Enclosed bait stations &mdash; the Combat-style discs and their relatives &mdash; are the compliant backbone of Canadian consumer roach control. They are child-resistant, they keep the bait fresh and off your surfaces, and domestic-class versions are PMRA-registered for exactly this use; as with any pesticide in Canada, confirm the Pest Control Products (PCP) registration number on the label before buying, especially from online marketplaces that mix Canadian and US stock.</p>
          <p>Placement is 80% of the result:</p>
          <ul>
            <li><strong>Edges and corners, never open floor.</strong> Roaches travel with their bodies touching a surface &mdash; wall-floor junctions, cabinet seams, the back edge of the counter. A station in the middle of the floor is furniture.</li>
            <li><strong>Blanket the kitchen triangle.</strong> Under the sink (both back corners), beside the fridge motor housing (warmth is a roach magnet), behind and beside the stove, and inside the corners of the two or three cupboards nearest the sink.</li>
            <li><strong>Do the bathroom too.</strong> Under the vanity, behind the toilet, near any plumbing penetration. German roaches need water more urgently than food, and bathrooms are the second front.</li>
            <li><strong>More stations, closer together.</strong> A typical kitchen wants 8&ndash;12 placements, not 2. German roaches may only travel a metre or two from harbourage to food; a sparse grid leaves whole harbourages out of range.</li>
            <li><strong>Refresh on schedule.</strong> Mark the date; replace stations per the label (typically every 2&ndash;3 months) or sooner if the kitchen is hot and the bait is being hammered. Stale bait is invisible bait.</li>
            <li><strong>Do not spray anything anywhere near them.</strong> Including &ldquo;natural&rdquo; essential-oil sprays, which are also aversive. Bait wins by being the most attractive food in a clean kitchen &mdash; protect that.</li>
          </ul>
          <p>For cracks and seams a station physically cannot service &mdash; cabinet hinges, the seam where the backsplash meets the counter, the gap under a kickplate &mdash; a gel bait syringe adds precision. That is the format professionals use, and it comes with the one big Canadian caveat that gets its own section below.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="roach killing bait stations">Check enclosed bait stations on Amazon.ca →</BuyLink>
          </div>

          <h2>Sanitation: the Unpaid Half of the Program</h2>
          <p>Here is the honest version of the sanitation lecture. Roaches arriving has nothing to do with cleanliness &mdash; German cockroaches hitchhike in cardboard, grocery bags, used appliances, and through the walls of multi-unit buildings, and they colonize spotless kitchens without hesitation. What sanitation controls is <em>carrying capacity</em>: how many roaches your kitchen can feed, and how attractive your bait is relative to everything else on offer.</p>
          <p>A German cockroach can live weeks without food but only days without water, which sets the priorities. Dry the sink and wipe the basin at night; fix the dripping trap under the vanity; empty the pet water bowl overnight during the campaign; run the dishwasher instead of soaking pans. Then remove the buffet: crumbs swept nightly, counters degreased (a film of cooking grease is a meal), food in sealed containers, garbage in a lidded bin emptied often, and the toaster tray &mdash; the most forgotten roach feeder in every kitchen &mdash; shaken out.</p>
          <p>None of this eliminates roaches on its own, and anyone who tells you cleaning alone fixes a German roach infestation is selling something. What it does is force hungry, thirsty roaches to range farther and take risks &mdash; straight into your stations. A baited clean kitchen collapses in weeks; a baited dirty kitchen limps along for months. While you are deep-cleaning anyway, two adjacent problems are worth a look: our guides to <Link href="/blog/how-to-get-rid-of-fruit-flies-canada">fruit flies</Link> and <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish</Link> cover the other kitchen-and-bathroom regulars that thrive on the same moisture and crumbs.</p>

          <h2>Glue Boards: Stop Guessing, Start Counting</h2>
          <p>The single cheapest upgrade to any cockroach campaign is a dozen glue-board monitors, laid the same night as the bait. They are not a control method &mdash; a board will never out-catch a breeding population &mdash; they are instrumentation, and they answer the three questions that decide everything else:</p>
          <ul>
            <li><strong>What species?</strong> The corpse on the board settles German-vs-American-vs-Oriental in seconds, which decides whether you are running a full campaign or screening a drain.</li>
            <li><strong>Where is the traffic?</strong> Boards along different walls catch unevenly; the hot boards are pointing at the harbourage, and that is where your next bait placements go.</li>
            <li><strong>Is it working?</strong> Count catches weekly. Baiting that is working shows a rising-then-collapsing curve: an early spike (roaches flushed and foraging), then a steady fall, then a small rebound as the last egg cases hatch, then zero. Several consecutive weeks of empty boards is the finish line &mdash; sightings, which depend on luck and lighting, are not.</li>
          </ul>
          <p>Placement mirrors bait logic: flat against the wall-floor junction, under the sink, beside the stove, behind the toilet. Glue boards are devices, not pesticides, so they need no PMRA registration &mdash; there is no regulatory reason not to deploy them generously. Date each board with a marker; a dusty board stops catching and starts lying.</p>
          <p>Which board and which station is worth buying is a narrower question than this page can settle, so we ran it separately: <Link href="/blog/best-roach-traps-canada">glue boards versus enclosed bait stations for Canadian kitchens</Link> covers the formats, the placement grid, and how to read a catch to locate harbourage.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="cockroach glue trap monitor">Check glue-board monitors on Amazon.ca →</BuyLink>
          </div>

          <h2>The Apartment Problem: Your Unit Is Not the Colony</h2>
          <p>If you rent in a multi-unit building, everything above still applies &mdash; and it is still not enough, because the premise changes. In a house, your kitchen contains the colony. In an apartment block, your kitchen is one node in a building-wide network: German cockroaches move floor to floor through plumbing chases, shared walls, garbage rooms, and under hallway doors, and an untreated colony two units away will reseed your kitchen indefinitely. You can bait perfectly and still be reinvaded monthly. This is not a hygiene failure on your part; it is topology.</p>
          <p>The play has three parts. <strong>First, contain your unit:</strong> bait stations and monitors as above, plus physical exclusion &mdash; seal the gap around plumbing penetrations under the sinks with sealant or steel wool, add a door sweep to the hallway door, and caulk the baseboard gaps in the kitchen. You are making your unit the hardest node on the network to live in.</p>
          <p><strong>Second, report it in writing.</strong> In most provinces, pest control in rental housing is the landlord&rsquo;s legal responsibility &mdash; in Ontario, the Residential Tenancies Act obliges landlords to keep units in a good state of repair and fit for habitation, and tribunals have consistently treated cockroach infestations as the landlord&rsquo;s problem to remediate. A dated email with photos starts the clock; a verbal mention to the superintendent starts nothing. If the response stalls, your municipal property-standards or bylaw office is the next call.</p>
          <p><strong>Third, push for coordinated IPM, not a hallway spray.</strong> The treatment that works in multi-unit buildings is integrated pest management: inspection and gel-baiting of your unit <em>and</em> the adjacent units (both sides, above, below), monitoring boards everywhere, and follow-up visits &mdash; because treating one unit in a network merely rotates which kitchen hosts the colony this month. If your building brings in a contractor who proposes to fog your unit and call it done, you now know enough to object. Apartment dwellers fighting one building-borne pest often meet another; our <Link href="/blog/bed-bug-heater-canada">bed bug heat treatment guide</Link> covers the other one, and the same report-in-writing playbook applies.</p>

          <h2>The Advion Question: America&rsquo;s Favourite Gel, Canada&rsquo;s Grey Market</h2>
          <p>Spend ten minutes researching cockroaches online and you will meet Advion &mdash; the indoxacarb gel bait with a cult following on American forums, where &ldquo;just get Advion&rdquo; is the reflexive answer to every roach thread. The enthusiasm is not unfounded: professional-grade gel baits are genuinely excellent, and the crack-and-crevice syringe format reaches harbourages an enclosed station cannot.</p>
          <p>The Canadian catch is regulatory. Every pesticide legally sold in Canada must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency and carry a PCP registration number on its label &mdash; that number is your one-glance test for any product, and its absence means the product is not authorized for sale here, whatever the marketplace listing implies. The Advion gel that circulates to Canadian buyers through cross-border listings is typically US-market product, formulated and labelled under US EPA registration, with no Canadian label directions behind it. Before buying <em>any</em> gel bait online &mdash; Advion or otherwise &mdash; zoom the listing photos and check the physical label for a PCP number, and treat its absence as your answer.</p>
          <p>We wrote a full standalone guide to the situation &mdash; what Advion is, why Americans swear by it, what the Pest Control Products Act actually says, and what the compliant Canadian alternatives are &mdash; in <Link href="/blog/advion-cockroach-gel-bait-canada">Advion Cockroach Gel in Canada: the honest answer</Link>. The short version for this page: domestic-class enclosed bait stations are the registered, child-resistant, no-questions path for Canadian consumers, they run on the same carry-home-and-cascade mechanism, and a well-placed dozen of them ends most household infestations without importing anything.</p>

          <h2>When to Stop DIYing and Call a Professional</h2>
          <p>Bait-and-monitor solves most owner-occupied house infestations. Escalate to a licensed professional when the evidence says the problem is bigger than the tools: <strong>daytime sightings</strong> (roaches are nocturnal; daylight foraging means harbourages are saturated and the population is pushing individuals out), <strong>spread beyond kitchen and bathroom</strong> into bedrooms or upper floors, <strong>monitors still catching after 8&ndash;12 weeks</strong> of disciplined baiting and sanitation, <strong>asthma in the household</strong> &mdash; cockroach allergens in droppings and shed skins are a clinically established asthma trigger, particularly for children, which converts a nuisance into a health file &mdash; or <strong>any multi-unit building</strong> where the source sits beyond your walls.</p>
          <p>Professionals bring what consumers cannot buy in Canada: commercial-class gel baits, insect growth regulators that break the breeding cycle, HEPA vacuum removal of live harbourages, and &mdash; in apartments &mdash; the authority to treat the adjacent units that are actually driving your problem. Expect a real program (inspection, baiting, follow-up visits over 4&ndash;8 weeks), not a one-visit spray; a contractor who proposes to fog your kitchen is telling you to keep shopping. For what roach work typically costs across Canada and how to sanity-check a quote, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>

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

          <h2>Related Pest Guides</h2>
          <ul>
            <li><Link href="/blog/advion-cockroach-gel-bait-canada">Advion Cockroach Gel in Canada — What the Rules Actually Say</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-fruit-flies-canada">How to Get Rid of Fruit Flies in Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cluster-flies-canada">How to Get Rid of Cluster Flies in Canada</Link></li>
            <li><Link href="/blog/bed-bug-heater-canada">Bed Bug Heaters in Canada — The Heat Treatment Guide</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="cockroaches" />
      </article>
    </>
  )
}
