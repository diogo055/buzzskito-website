import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import Photo from '@/components/Photo'
import { shareImage } from '@/lib/photos'

const SLUG = 'best-cockroach-killer-canada'
const DATE = '2026-08-31'
const UPDATED = '2026-10-28'
const TITLE = 'Best Cockroach Killer in Canada 2026 — Bait Beats Spray, Every Time'
// TITLE NOTE (Oct 28, 2026): was 'Best Cockroach Killer Canada'; top queries: best cockroach killer canada 28, best cockroach killer in canada 7, best roach killer canada 4, cockroach best killer 4, best cockroach gel bait canada 3 (2 clicks). Kept off 'spray', 'trap' and 'gel' head terms: the spray, traps and Advion pages own those.
const META_TITLE = 'Best Cockroach Killer in Canada: Baits That Work'

const FAQS = [
  {
    question: 'What is the best cockroach killer in Canada?',
    answer: 'Enclosed bait stations, not spray. The best cockroach killer available to Canadian homeowners is a registered domestic-class bait station — Raid Ant Roach & Earwig Gel Baits (Reg. No. 25735, boric acid 2.0%) is one; Combat and Raid Max roach baits are no longer registered in Canada — backed by a registered gel or paste in the cracks the stations miss and flat glue monitors to measure progress. Bait works because a cockroach carries the dose back to the harbourage, where it spreads through the colony via droppings and shared shelter — one feeding can kill roaches that never visited the station. Spray kills only the individual it lands on and its repellent residue actively sabotages any bait placed nearby, which is why the spray aisle is where most failed DIY roach campaigns started.',
  },
  {
    question: 'Why is gel bait considered better than spray for cockroaches?',
    answer: 'Because of colony transfer, sometimes called the secondary kill or domino effect. Gel bait is a food-based poison with a deliberately slow active ingredient. A foraging roach eats it, walks back to the harbourage, and dies there hours later — and German cockroaches feed on the droppings, secretions, and carcasses of their own kind, so the dose cascades to nymphs and adults that never left the wall void. Spray inverts every part of that: it kills instantly (so nothing gets carried home), it only reaches the individuals on open surfaces (a small minority of the colony at any moment), and its pyrethroid residue repels survivors deeper into the structure. One works at the colony level, the other at the individual level, and a German roach colony out-breeds any individual-level weapon.',
  },
  {
    question: 'Can I buy Advion cockroach gel in Canada?',
    answer: 'No. Health Canada’s pesticide registry lists no Advion product and no product containing its active ingredient, indoxacarb, so it is not registered for sale or use in Canada, which is why you will not find it at Canadian Tire or Home Depot. Cans and syringes bought from US marketplace sellers are grey-market products with no Canadian label and no legal use here. The good news is that the approach that makes Advion work — slow-acting bait that roaches eat and take back toward the harbourage — is the same approach inside the registered domestic-class bait stations Canadians can buy. You are locked out of one tier of tools, not out of the strategy. Our Advion Canada guide covers the full legality picture and the closest legal equivalents.',
  },
  {
    question: 'Do cockroach bait stations work as well as gel?',
    answer: 'For light-to-moderate infestations, yes — the mechanism is identical, and the station format trades some placement precision for convenience. Gel in professional hands wins on flexibility: a licensed applicator lays dozens of rice-grain placements directly inside cabinet hinges, cracks, and voids, which beats a dozen plastic stations along the wall. But the bait inside a registered station such as Raid Ant Roach & Earwig Gel Baits is the same slow-acting concept, the bait sits inside a child-resistant station (its label still says to place it only where children and pets cannot reach), and against a typical kitchen-level German roach problem a properly deployed dozen-plus stations performs far closer to a gel program than any spray ever will. The station rule that matters most: more placements, closer to the harbourage, beats fewer big ones.',
  },
  {
    question: 'What kills cockroaches instantly?',
    answer: 'Contact sprays kill on contact, and that is precisely their weakness. An instant kill means the roach dies in the open before it can carry anything back to the colony, so you have removed one forager from a population that a single female German cockroach can rebuild in weeks — she produces an egg case of 30 to 40 nymphs roughly monthly. Instant-kill products have exactly one legitimate role in a roach program: dispatching an individual you can see, ideally with soapy water or a vacuum instead of insecticide so you leave no repellent residue near future bait placements. If your instinct is to reach for something instant, redirect it — the products that end infestations are the slow ones.',
  },
  {
    question: 'How long does it take to get rid of cockroaches with bait?',
    answer: 'Plan on three weeks to a visibly dramatic reduction and up to two or three months to a confirmed zero for a German roach infestation. Week one: heavy feeding on stations, dead roaches appearing in the open, sightings may briefly rise as the colony is disturbed — that is the program working, not failing. Week two: sightings fall noticeably; refresh any station that has been emptied. Week three: sightings should be rare; glue monitors tell you the truth your eyes cannot. After that, leave stations down and keep monitoring — the last egg cases hatch on their own schedule, and nymphs emerging weeks later need bait waiting for them. If glue boards still catch multiple roaches nightly at the three-week mark, escalate to a professional rather than buying more of the same.',
  },
  {
    question: 'What is the difference between German and American cockroaches in Canada?',
    answer: 'German cockroaches are the small tan ones with two dark stripes behind the head, and they are the infestation species — they live exclusively indoors in Canada, breed explosively, and concentrate in kitchens and bathrooms near warmth, water, and food. American cockroaches (and the similar Oriental cockroach) are the big dark ones, usually arriving from drains, floor drains, and sewer connections into basements and utility rooms. The strategy differs completely: German roaches call for an all-in bait program at the harbourage; a big roach in the basement usually calls for drain and moisture work, exclusion around pipe penetrations, and dust in the voids it travels through — often it is a wanderer, not a resident colony. Identify before you buy.',
  },
  {
    question: 'Why should I not spray near cockroach bait?',
    answer: 'Because repellent spray residue kills the bait program. Nearly all domestic-class roach and ant sprays in Canada are pyrethroids, and pyrethroids are repellent to cockroaches — they can detect and avoid treated surfaces for weeks. Spray a baseboard, then place a bait station on it, and roaches will not cross the residue to reach the station; you have built a fence around your own trap. Worse, spraying at the harbourage scatters survivors into adjoining rooms and wall voids, splitting one colony into several. The professional rule is absolute: bait and repellent spray do not share a surface. If you have already sprayed, wash the area with detergent, wait, and place bait somewhere untreated along the same runway.',
  },
  {
    question: 'Is boric acid safe and does it still work on roaches?',
    answer: 'Boric acid remains one of the best value roach killers in Canada, with no known behavioural resistance after decades of use. For home use it now comes as a gel or an enclosed bait: Health Canada stopped the sale of boric acid dust for home use in 2018. Roaches eat the bait and carry it back to the harbourage, which makes it slow, and slow is a feature: they die where the colony lives. On safety, domestic-class boric acid baits are low-hazard to mammals compared with most insecticides, but they are not candy: place them only where children and pets cannot reach, and never on food-contact surfaces. Read and follow the Canadian label — the PCP registration number on the package is what separates a legal product from grey-market powder.',
  },
  {
    question: 'Do cockroach foggers or bug bombs work?',
    answer: 'No — and for German cockroaches they make things worse. Foggers deposit droplets on open, exposed surfaces, while roaches spend their lives in cracks, voids, and cabinet seams the fog never penetrates. The repellent mist drives survivors deeper into walls and into adjoining units, and it contaminates every surface where you would otherwise place bait. Public-health entomology has been near-unanimous on this for years. In an apartment, a fogger can turn your problem into your neighbour’s problem and back into yours a month later. Skip the fogger aisle entirely and put the money into more bait placements and glue monitors.',
  },
  {
    question: 'Is my landlord responsible for cockroaches in Ontario?',
    answer: 'In a rental, yes — Ontario landlords are responsible for keeping the unit fit for habitation and free of pests under the Residential Tenancies Act, and municipal property standards bylaws in Toronto, Mississauga, and most GTA cities say the same. Report the problem in writing, cooperate with preparation instructions, and push for a licensed pest control operator — in a multi-unit building, roaches move through shared walls, so treating one unit alone almost never ends it, and this is the single clearest case where DIY is the wrong tool no matter how good your bait technique is. Your own stations are a reasonable stopgap while the building-level response gets organized, not a substitute for it.',
  },
  {
    question: 'When should I call a professional for cockroaches?',
    answer: 'Five situations take DIY off the table: you live in a multi-unit building, where the colony spans units and only coordinated treatment works; sightings persist at the same level after three weeks of a properly run bait program, which suggests bait aversion or a resistant population that needs commercial-class rotation; you are seeing roaches in daylight in multiple rooms, which signals a severe, saturated infestation; the species is coming up from drains and sewer connections, which is a building-systems problem; or anyone in the home has asthma that roach allergens are aggravating, where speed matters more than budget. A licensed operator brings the commercial gel tier, insect growth regulators, and rotation strategy that Canadian retail law keeps off the shelf.',
  },
  {
    question: 'What is the best cockroach bait in Canada?',
    answer: 'For a kitchen and bathrooms, an enclosed station is the easiest to get right. Raid Ant Roach & Earwig Gel Baits (Reg. No. 25735, boric acid 2.0%) comes as 12 child-resistant baits, and its label says to place at least 10 in the kitchen and 2 in each bathroom, then replace all of them every 4 weeks while the problem persists. For the cracks behind and under appliances, a registered gel or paste, such as Ecopest Ant & Roach Bait Gel (Reg. No. 34893) or Homeowners DIY Roach Bait (Reg. No. 30293), reaches where a station cannot. Check the registration number on any box you buy.',
  },
  {
    question: 'What is the best cockroach poison for home use in Canada?',
    answer: 'For home use it has to be a domestic-class product in Health Canada’s registry. The registered domestic roach baits we found use three actives: boric acid (Raid Ant Roach & Earwig Gel Baits, Reg. No. 25735; Homeowners DIY Roach Bait paste, Reg. No. 30293), disodium octaborate tetrahydrate (Ecopest 34893, Ortho 32560 and Green Way 30628 gels) and propoxur (PIC Roach Control System trays, Reg. No. 20471, whose label warns that it contains a cholinesterase inhibitor). The Raid, PIC, Nisus and Ecopest labels each say to place the bait only where children and pets cannot reach it.',
  },
  {
    question: 'Are Combat and Raid Max roach baits registered in Canada?',
    answer: 'Not any more. Health Canada’s registry lists Combat Roach Killing System (Reg. No. 26519) as historical, with its last retail sale on May 31, 2006, and Raid Max Roach Bait (Reg. No. 26645) and Raid Double Control Roach Baits (Reg. No. 27731) as historical, with their last retail sale on September 25, 2025. A US EPA number on an imported box does not register it in Canada. Look for “Reg. No. … P.C.P. Act” on the package; Raid Ant Roach & Earwig Gel Baits (Reg. No. 25735) is a registered domestic station today.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The best cockroach killer in Canada is a registered bait, not a spray: Raid boric acid stations (Reg. No. 25735), borate gels and paste, ranked by label.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
  image: shareImage('german-cockroach-adult'),
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestCockroachKillerCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to cockroach killers — why slow bait beats instant spray through colony transfer, every product class ranked for Canadian shelves, German vs American roach strategy, the repellency trap that sabotages bait programs, and the realistic three-week timeline.', slug: SLUG, datePublished: DATE, dateModified: UPDATED, image: shareImage('german-cockroach-adult') })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Cockroach Killer Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Cockroach Killer Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The best cockroach killer you can buy in Canada is a registered bait, not a spray: enclosed boric acid bait stations such as Raid Ant Roach &amp; Earwig Gel Baits (Reg. No. 25735 P.C.P. Act) in the kitchen and bathrooms, plus a registered gel or paste in the cracks. That is the kit for small striped German cockroaches breeding indoors. Before you buy any roach bait online, find the Reg. No. on the box: several US baits are not registered here.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Raid Ant Roach & Earwig Gel Baits (look for Reg. No. 25735)" search="boric acid roach bait" label="Best cockroach killer" />
      <TopBox tag={AMZ_TAG} name="Raid Ant Roach & Earwig Gel Baits (look for Reg. No. 25735)" search="boric acid roach bait" label="Best cockroach killer" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best cockroach killer in Canada is an <strong>enclosed bait station program</strong> &mdash; Raid Ant Roach &amp; Earwig Gel Baits (Reg. No. 25735, boric acid 2.0%) is a registered domestic station; Combat and Raid Max roach baits are no longer registered here &mdash; backed by <strong>a registered gel or paste</strong> in cracks and under appliances, with <strong>flat glue monitors</strong> to measure progress. Bait wins because roaches eat it and die back in their hiding places, where most of the colony spends its time. Sprays kill one roach at a time, repel the rest, and contaminate every surface where bait would have worked. Expect a dramatic reduction in about three weeks; the famous US gel, Advion, is not registered in Canada at all.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Buy bait first.</strong> A dozen-plus stations, concentrated within a metre of the kitchen and bathroom harbourages &mdash; not spread thinly through the house.</li>
              <li><strong>Never spray near bait.</strong> Pyrethroid residue repels roaches from your own stations for weeks &mdash; the single most common DIY failure.</li>
              <li><strong>Skip foggers entirely.</strong> They scatter the colony into walls and neighbouring rooms and poison your baiting surfaces.</li>
              <li><strong>Identify the species.</strong> Small striped German roaches need a kitchen bait program; big basement roaches usually need drain and exclusion work instead.</li>
              <li><strong>Three weeks is the honest timeline</strong> &mdash; and a brief rise in sightings in week one means the bait is working.</li>
              <li><strong>Renters in Ontario:</strong> pest control in a rental is the landlord&rsquo;s responsibility &mdash; report it in writing and push for a licensed operator.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="cockroaches" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Canadian Cockroach Kill Kit"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Raid Ant Roach & Earwig Gel Baits (Reg. No. 25735)',
                why: 'A registered domestic-class bait station (Reg. No. 25735, boric acid 2.0%): slow-acting bait in child-resistant stations that foragers carry back to the colony. The label says to place at least 10 in the kitchen and 2 in each bathroom, and to replace all of them every 4 weeks while the problem persists. The search below also shows other boric acid baits, so look for Reg. No. 25735 on the box. Buy more packs than feels reasonable — placement density is what separates a bait program from a bait gesture.',
                search: 'boric acid roach bait',
                score: 9.2,
                featured: true,
                pros: ['Colony-transfer mechanism, not one-roach-at-a-time', 'Child-resistant stations, still placed out of reach of children and pets (label)', 'No residue, no odour, no scattered survivors'],
                cons: ['Slower than the spray your instincts want', 'A single pack is rarely enough placements for a real kitchen'],
              },
              {
                badge: 'Best for Bait Rotation',
                name: 'Boric Acid Roach Paste (e.g. Homeowners DIY Roach Bait, Reg. No. 30293)',
                why: 'For rotation, use a registered bait in a different formulation: Raid Max roach baits, once the usual rotation pick, are no longer registered in Canada (Health Canada lists Raid Max Roach Bait and Raid Double Control Roach Baits as historical, last retail sale September 25, 2025). A boric acid paste such as Homeowners DIY Roach Bait (Reg. No. 30293) goes into the cracks a station cannot reach; its label allows crack-and-crevice use only. For a different active, PIC Roach Control System trays (Reg. No. 20471) use propoxur. Bait aversion is a real, documented German-roach behaviour; rotating the bait beats buying more of the same.',
                search: 'boric acid roach bait',
                score: 8.7,
                pros: ['A different bait formulation for aversion insurance', 'Registered for cockroaches (Reg. No. 30293)', 'Reaches the cracks a station cannot'],
                cons: ['Buy it as the rotation, not instead of the stations', 'Label: crack-and-crevice use only'],
              },
              {
                badge: 'Best Budget Add-On',
                name: 'Boric Acid Roach Bait (gel or stations)',
                why: 'Decades old and still no behavioural resistance. For home use in Canada it now comes as gel or enclosed bait (boric acid dust has not been sold for home use since 2018): a few dabs of gel or a station behind the stove and under the fridge catch the roaches that commute through spaces the main stations miss.',
                search: 'boric acid roach bait',
                score: 8.5,
                pros: ['Cheapest effective active on the shelf', 'No known resistance after decades of use', 'Works the same colony-level way: foragers carry it home'],
                cons: ['A support act, not the lead: pair it with the main stations', 'Place it only where children and pets cannot reach, away from food surfaces'],
              },
              {
                badge: 'Best Diagnostic',
                name: 'Cockroach Glue Trap Monitors',
                why: 'Not a killer — a measuring instrument, and the difference between guessing and knowing. A line of flat glue boards along baseboards and under sinks tells you which rooms are infested, whether the count is falling week over week, and when zero is actually zero.',
                search: 'cockroach glue traps monitor',
                score: 8.3,
                pros: ['Turns the three-week timeline into data', 'Confirms the species you are fighting', 'Chemical-free — place them anywhere'],
                cons: ['Will not dent the population on its own', 'Needs replacing once dusty or full'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Small striped roaches in the kitchen or bathroom?</strong> That is a German cockroach infestation: buy the <em>Best Overall</em> Raid boric acid stations (Reg. No. 25735) at full density plus the <em>Best Diagnostic</em> glue monitors the same day, and add the <em>Best Budget Add-On</em> boric acid bait for the gaps the stations miss. <strong>Feeding stalls after a strong start?</strong> Rotate to the <em>Best for Bait Rotation</em> paste, or to PIC Roach Control System trays (Reg. No. 20471), which use a different active, rather than doubling down on the same bait. <strong>Big dark roaches in the basement?</strong> Read the German-vs-American section first &mdash; you likely need drain work and exclusion, not more bait. <strong>In an apartment, or still catching roaches nightly at week three?</strong> That is professional territory, and in an Ontario rental it is your landlord&rsquo;s bill, not yours.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Is the Best Cockroach Killer in Canada?</h2>
          <p>Bait &mdash; specifically, a dense program of enclosed bait stations backed by boric acid bait in the cracks the stations miss, with glue monitors keeping score. That is the whole answer, and it is worth saying plainly because the roach aisle is engineered to sell you the opposite. The products with the action photography and the instant promises are contact sprays, and contact spray is the tool most strongly associated with DIY campaigns that fail. The products that end infestations are small, slow, and boring, and the reason is a piece of cockroach biology that rewards patience: roaches take poison home.</p>
          <Photo id="german-cockroach-adult" alt="Adult German cockroach, small and tan with two dark stripes behind the head" caption="An adult German cockroach. The two dark stripes behind the head mark the small indoor species this bait plan is built for." />
          <p>This guide ranks every product class a Canadian can actually buy, because the Canadian shelf is not the American shelf. The gel bait that dominates US forums &mdash; Advion &mdash; is not registered in Canada at all (Health Canada&rsquo;s registry lists no product containing its active ingredient, indoxacarb), and our <Link href="/blog/advion-cockroach-gel-bait">Advion Canada deep dive</Link> covers that legality picture in full. What follows is the strategy that works with the domestic-class tier, which against light-to-moderate infestations is a real tier, not a consolation prize.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the kit:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="boric acid roach bait">Raid boric acid stations (Reg. No. 25735) &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="boric acid roach bait">Boric acid paste (Reg. No. 30293) &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="boric acid roach bait">Boric acid bait &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="cockroach glue traps monitor">Glue monitors &rarr;</BuyLink>
          </div>

          <NextUp path="/blog/best-cockroach-killer-canada" />
          <h2>Colony Transfer: Why Slow Bait Beats Instant Spray</h2>
          <p>A German cockroach infestation is not a collection of individual roaches; it is a colony with a shared harbourage &mdash; a warm, tight, humid crack near food and water where the breeding females, the egg cases, and the nymphs spend almost all of their time. At any given moment, only a minority of the colony is out foraging. Whatever you can see and hit is the minority.</p>
          <p><strong>Bait is designed for that arithmetic.</strong> A foraging roach eats a slow-acting dose, walks it back to the harbourage, and dies there hours later &mdash; among nest-mates that feed on the droppings, secretions, and carcasses of their own kind. The poison cascades: nymphs that never left the wall void, females that never crossed your kitchen floor, all reached through the colony&rsquo;s own habits. Pest-control research has documented this secondary-kill effect for every major bait class, and it is the entire reason a syringe of professional gel can collapse an infestation that survived a dozen cans of spray.</p>
          <p><strong>Spray inverts every part of the mechanism.</strong> It kills instantly, so nothing is carried home. It reaches only the exposed minority, so the breeding core is untouched. And nearly every domestic-class roach spray in Canada is a pyrethroid, which roaches detect and avoid &mdash; so the residue herds survivors deeper into the structure and, in an apartment, toward your neighbours. You feel productive; the colony barely notices.</p>
          <p>The pattern across the failed campaigns we hear about is remarkably consistent: weeks of spraying, a brief lull, then more roaches than before. The fix is not a better spray. It is changing weapons class entirely.</p>

          <h2>Every Roach Weapon Ranked for Canada</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6">
            <table className="w-full min-w-[680px] text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Rank</th>
                  <th className="px-4 py-3 text-left">Product class</th>
                  <th className="px-4 py-3 text-left">Colony-level?</th>
                  <th className="px-4 py-3 text-left">Canadian access</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Professional gel bait', 'Yes — the benchmark', 'Commercial class — licensed applicators only (e.g. VANECTO, Reg. No. 35686); Advion is not registered in Canada', 'The best tool in the field; in Canada it arrives with the professional you hire'],
                  ['2', 'Enclosed bait stations', 'Yes — same mechanism', 'Domestic class — e.g. Raid Ant Roach & Earwig Gel Baits (Reg. No. 25735); Combat and Raid Max roach baits are no longer registered', 'The best killer you can buy; density of placement is everything'],
                  ['3', 'Boric acid gel or bait', 'Yes — foragers carry it home', 'Domestic class as gel or bait — the dust is no longer sold for home use', 'Superb value in cracks and under appliances'],
                  ['4', 'Diatomaceous earth', 'No — contact desiccant', 'Domestic class — widely stocked', 'Chemical-free option for dry voids; slower and moisture-sensitive'],
                  ['5', 'Insect growth regulators (IGR)', 'Yes — sterilizes the colony', 'Effectively a professional tool in Canada', 'The pro one-two punch with gel; ask your operator what they run'],
                  ['6', 'Contact sprays', 'No — individuals only', 'Domestic class — everywhere', 'One legitimate job: a visible roach, away from any bait surface'],
                  ['7', 'Foggers / bug bombs', 'Negative — scatters the colony', 'Domestic class, regrettably', 'Actively counterproductive for roaches; skip entirely'],
                ].map(([rank, cls, colony, access, verdict]) => (
                  <tr key={cls} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{rank}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">{cls}</td>
                    <td className="px-4 py-3 text-gray-700">{colony}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{access}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Two rows deserve a word. <strong>Insect growth regulators</strong> &mdash; juvenile-hormone mimics that stop nymphs maturing into breeding adults &mdash; are half of the professional standard treatment, paired with gel so the colony is being poisoned and sterilized at once. In Canada they are effectively a professional-tier tool, which is one more quiet argument for making the call when the situation warrants it. <strong>Diatomaceous earth</strong> earns its place for chemical-averse households; our <Link href="/blog/diatomaceous-earth-canada-buyers-guide">Canadian diatomaceous earth buyer&rsquo;s guide</Link> covers the food-grade-versus-pest-label distinction and the dry-void technique that makes it work.</p>

          <h2>Cockroach Baits Registered in Canada: What Each Label Says</h2>
          <p>We looked up the domestic (consumer) roach baits in Health Canada&rsquo;s pesticide registry and read their labels. Quoted phrases are the labels&rsquo; own words. Use the number on the box, not the brand on a listing, to tell a registered product from an import.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[680px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Bait (registration)</th>
                  <th className="px-4 py-3 text-left">Form and active (label)</th>
                  <th className="px-4 py-3 text-left">How the label says to use it</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Watch for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Raid Ant Roach &amp; Earwig Gel Baits<br /><span className="font-normal text-xs text-gray-500">Reg. No. 25735 P.C.P. Act, domestic</span></td>
                  <td className="px-4 py-3 text-gray-700">Enclosed stations: &ldquo;BORIC ACID 2.0%&rdquo;; &ldquo;CONTAINS 12 CHILD RESISTANT BAITS&rdquo;</td>
                  <td className="px-4 py-3 text-gray-700">&ldquo;Place at least 10 baits in the kitchen and 2 in each bathroom&rdquo;; 12&ndash;15 and 2&ndash;4 for heavy infestations; &ldquo;Replace ALL baits every 4 weeks&rdquo; while the problem persists</td>
                  <td className="px-4 py-3 text-gray-700">German cockroaches in the kitchen and bathrooms: the main station</td>
                  <td className="px-4 py-3 text-gray-700">&ldquo;Apply/use only in areas inaccessible to children and pets.&rdquo;</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">PIC Roach Control System<br /><span className="font-normal text-xs text-gray-500">Reg. No. 20471 P.C.P. Act, domestic</span></td>
                  <td className="px-4 py-3 text-gray-700">Bait trays: &ldquo;Propoxur 2%&rdquo;</td>
                  <td className="px-4 py-3 text-gray-700">&ldquo;Use 12 trays to treat approximately 20 sq. metres (215 sq. feet)&rdquo;; replace &ldquo;every 2-3 months&rdquo;</td>
                  <td className="px-4 py-3 text-gray-700">A second bait with a different active if feeding on boric acid stalls</td>
                  <td className="px-4 py-3 text-gray-700">Label warns it contains a cholinesterase inhibitor and the allergens peanut butter and fish meal</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Homeowners DIY Roach Bait (Nisus)<br /><span className="font-normal text-xs text-gray-500">Reg. No. 30293 P.C.P. Act, domestic</span></td>
                  <td className="px-4 py-3 text-gray-700">Paste: &ldquo;BORIC ACID &hellip; 33.3%&rdquo;, for &ldquo;COCKROACHES ONLY&rdquo;</td>
                  <td className="px-4 py-3 text-gray-700">&ldquo;APPLICATIONS OF THIS PRODUCT OTHER THAN AS A CRACK AND CREVICE TREATMENT ARE NOT PERMITTED.&rdquo; Reapply &ldquo;at least once a year&rdquo;</td>
                  <td className="px-4 py-3 text-gray-700">Seams behind and under the fridge, stove, sinks and dishwasher that a station cannot reach</td>
                  <td className="px-4 py-3 text-gray-700">&ldquo;Contains the allergens, milk and wheat.&rdquo; Paste left visible must be scraped into the crack or removed</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ecopest Ant &amp; Roach Bait Gel<br /><span className="font-normal text-xs text-gray-500">Reg. No. 34893 P.C.P. Act, domestic</span></td>
                  <td className="px-4 py-3 text-gray-700">Gel syringe: &ldquo;Disodium Octaborate Tetrahydrate 6.0%&rdquo;</td>
                  <td className="px-4 py-3 text-gray-700">&ldquo;inject gel into cracks and crevices&rdquo;; keep bait available &ldquo;for at least 14 days of continuous feeding&rdquo;</td>
                  <td className="px-4 py-3 text-gray-700">Cracks and crevices, in a home that also has ants</td>
                  <td className="px-4 py-3 text-gray-700">&ldquo;Cockroaches will feed directly on the bait and die, but will not share the bait.&rdquo; No sprays, foggers or cleaners near it</td>
                </tr>
                <tr className="align-top bg-amber-50/60">
                  <td className="px-4 py-3 font-bold text-brand-800">No longer registered<br /><span className="font-normal text-xs text-gray-500">Health Canada registry status</span></td>
                  <td className="px-4 py-3 text-gray-700">Combat Roach Killing System (Reg. No. 26519); Raid Max Roach Bait (26645); Raid Double Control Roach Baits (27731)</td>
                  <td className="px-4 py-3 text-gray-700">All three &ldquo;historical&rdquo;: Combat&rsquo;s last retail sale was May 31, 2006; the two Raid baits&rsquo; was September 25, 2025</td>
                  <td className="px-4 py-3 text-gray-700">&mdash;</td>
                  <td className="px-4 py-3 text-gray-700">Advion: no product and no indoxacarb product in the registry</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-xs text-gray-500 mb-4">Registry records read on Health Canada&rsquo;s Pesticide Label Search and Pesticide Registry on October 28, 2026; labels: Raid 25735 (2017-1008), PIC 20471 (2026-0064), Nisus 30293 (2016-5463), Ecopest 34893 (2023-2203). Also registered as domestic borate gels: Ortho Ant B Gon Max Ant &amp; Roach Killer Gel (Reg. No. 32560) and Green Way Ant &amp; Roach Bait Gel-D (Reg. No. 30628), both disodium octaborate tetrahydrate 6%. Labels change, so read the one on the package you buy.</p>

          <h2>Buyer&rsquo;s Checklist: Before You Pay for Any Roach Killer</h2>
          <ul>
            <li><strong>Find &ldquo;Reg. No. ____ P.C.P. Act&rdquo; on the package.</strong> No Canadian number means it is not registered here, however good the US reviews are.</li>
            <li><strong>Check that cockroaches are on the label.</strong> Some baits are labelled for ants only; the Nisus paste is for &ldquo;COCKROACHES ONLY&rdquo;.</li>
            <li><strong>Buy enough for the label rate.</strong> Raid&rsquo;s label asks for at least 10 baits in the kitchen and 2 per bathroom; PIC&rsquo;s, 12 trays per roughly 20 square metres. One pack rarely covers a real kitchen.</li>
            <li><strong>Match the format to the spot.</strong> Stations along open runways; gel or paste in cracks and seams.</li>
            <li><strong>Read the allergen line</strong> if anyone in the home has a food allergy: PIC lists peanut butter and fish meal, Nisus lists milk and wheat.</li>
            <li><strong>Keep sprays and cleaners away from bait.</strong> The Ecopest label says they can contaminate the bait and make the insects stop feeding.</li>
            <li><strong>Plan the replacements:</strong> every 4 weeks for the Raid stations, every 2&ndash;3 months for PIC trays.</li>
            <li><strong>Add flat glue monitors</strong> so you can count roaches week by week instead of guessing.</li>
          </ul>

          <h2>German vs American Roaches: Two Different Wars</h2>
          <p>Before spending a dollar, identify the enemy, because the two common Canadian scenarios call for opposite strategies.</p>
          <p><strong>Small tan roaches with two dark stripes, in the kitchen or bathroom &mdash; German cockroaches.</strong> This is the infestation species: exclusively indoors, explosive breeding (one female produces an egg case of 30&ndash;40 nymphs roughly monthly), harbouraged within a few metres of warmth, moisture, and food. Everything in this guide about bait density, the repellency trap, and the three-week timeline is aimed at this insect. The campaign is won or lost within about a metre of the fridge motor, the dishwasher, the sink plumbing, and the stove.</p>
          <p><strong>Large dark roaches in the basement, laundry room, or near floor drains &mdash; American or Oriental cockroaches.</strong> These usually arrive from drains, sewer connections, and moist sub-grade voids, and a sighting is often a wanderer rather than a resident colony. The strategy is plumbing and building work first: run water into unused floor drains monthly so the trap seal stays intact, screen or seal gaps around pipe penetrations, fix the moisture that makes a basement hospitable, and dust the travel voids with diatomaceous earth (boric acid dust is no longer sold for home use in Canada). Stations still help as insurance, but bait density in the kitchen does nothing about an insect commuting up a drain stack. Our full <Link href="/blog/how-to-get-rid-of-cockroaches-canada">how to get rid of cockroaches guide</Link> walks the whole identification-first sequence.</p>
          <Photo id="oriental-cockroaches-manhole" alt="Oriental cockroaches in the grass at night around a sewer manhole cover" caption="Oriental cockroaches out at night in the grass around a sewer manhole cover they were coming out of (Washington, DC). Large dark roaches like these usually arrive from drains and sewer connections, so drain work comes before bait." />

          <RelatedLinks path="/blog/best-cockroach-killer-canada" />
          <h2>The Repellency Trap: How DIYers Kill Their Own Bait Program</h2>
          <p>If this page changes one behaviour, let it be this one. The most common way Canadians sabotage a roach campaign is running spray and bait at the same time, in the same places &mdash; usually because the bait felt too passive and the spray felt like doing something.</p>
          <p>Pyrethroid spray residue is repellent to cockroaches, and they can detect it for weeks. Spray a baseboard on Monday and place a station there on Tuesday and you have fenced your own trap: foragers detour around the treated zone and never find the bait. Spray toward the harbourage and you do something worse &mdash; scatter the colony into wall voids and adjoining rooms, turning one concentrated, baitable population into several diffuse ones. The professional rule is absolute: <strong>bait and repellent spray never share a surface.</strong> The trap is easiest to fall into with the barrier sprays people buy by brand name rather than by active ingredient: the US-market Ortho Home Defense Max is built on bifenthrin, a synthetic pyrethroid, so it belongs nowhere near a bait placement &mdash; and our <Link href="/blog/ortho-home-defense-canada-review">Ortho Home Defense Canada review</Link> sets out which formulations are actually sold on Canadian shelves, because the US barrier product and the one you can buy here are not the same thing.</p>
          <p>So during a bait program: kill visible roaches with soapy water in a spray bottle, a vacuum, or a shoe &mdash; not insecticide. If you have already sprayed, wash the area with detergent and water, let it dry, and place your stations along the same runway but on untreated ground. And if you feel the urge to fog, re-read the ranking table &mdash; the fogger is the only product on it that reliably makes a German roach problem worse. Our <Link href="/blog/best-cockroach-spray-canada">Canadian cockroach spray guide</Link> covers the one narrow crack-and-crevice role spray legitimately keeps.</p>

          <h2>The Realistic Three-Week Timeline</h2>
          <p><strong>Day one.</strong> Place stations at density: a dozen or more for a typical kitchen-and-bathroom infestation, concentrated where the evidence is &mdash; droppings like ground pepper, the oily harbourage smell, sightings when the light flicks on. Under the sink, both back corners of the counter, beside the fridge motor, behind the stove, inside the cabinet housing the plumbing, in the bathroom vanity. Lay glue monitors along the baseboards the same day, and put a registered gel or paste into the cracks you cannot station. Then clean like it matters, because it does: every crumb you remove makes your bait the best meal available.</p>
          <p><strong>Week one.</strong> Heavy feeding, dead roaches in the open, and possibly <em>more</em> sightings than before &mdash; dying roaches wander into daylight, and the colony&rsquo;s rhythm is disturbed. This is the point where people panic and reach for spray. Do not. The bodies are the program working.</p>
          <p><strong>Week two.</strong> Sightings drop noticeably. Check every station and replace any that have been emptied &mdash; heavy early feeding is a good sign with a logistical consequence. Keep the kitchen dry overnight; water is the resource a baited colony misses first.</p>
          <p><strong>Week three.</strong> Sightings should be rare to zero, and the glue monitors now matter more than your eyes: a board that caught fifteen in week one and two nymphs in week three is a campaign being won. Leave everything in place for another month &mdash; egg cases hatch on their own schedule, and the bait must be waiting for the stragglers. Catching nothing for two straight weeks on monitors is what a finished infestation looks like.</p>
          <Photo id="german-cockroach-egg-case-hatchlings" alt="Adult German cockroach on a sticky trap beside an egg case, with newly hatched pale nymphs stuck around it" caption="An adult German cockroach on a sticky trap beside an egg case, with newly hatched pale nymphs stuck around it; the observer in Ontario saw them hatch. Egg cases hatch on their own schedule, which is why the bait stays down after the sightings stop." />
          <p><strong>Still catching multiple roaches nightly at week three?</strong> Stop buying more of the same. You are likely looking at bait aversion, a population beyond DIY scale, or a building-level source &mdash; all professional territory.</p>

          <h2>When the Landlord or the Pro Is Mandatory</h2>
          <div className="not-prose my-6 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">&#9888;&#65039; Renters: this is not your bill.</strong> In Ontario, keeping a rental unit free of pests is the landlord&rsquo;s responsibility under the Residential Tenancies Act, and municipal property standards bylaws across the GTA reinforce it. Report the infestation in writing, keep a copy, cooperate fully with preparation instructions, and push for a licensed operator &mdash; in any multi-unit building the colony spans units through shared walls and plumbing chases, and treating one unit is rearranging the problem, not solving it. Your own bait stations are a legitimate stopgap while the building response gets organized; they are not a substitute for it.
            </p>
          </div>
          <p>Owners should escalate to a licensed professional when the three-week timeline fails, when roaches are visible in daylight across multiple rooms, when the species is coming up from drains, or when asthma is in the household &mdash; roach allergens are a documented asthma trigger, and speed starts to matter more than budget. What you are buying is the tier Canadian retail law keeps off the shelf: commercial gel, insect growth regulators, rotation strategy against aversion, and crack-and-crevice technique. Typical Canadian pricing for cockroach work is covered in our <Link href="/pest-control-cost-canada">pest control cost guide</Link> so you can read a quote properly.</p>

          <h2>Cockroach Control &mdash; Key Facts for Canada</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best killer class', 'Registered enclosed bait stations (e.g. Raid Ant Roach & Earwig Gel Baits, Reg. No. 25735)'],
                  ['Best backup', 'Boric acid gel or bait in cracks and under appliances'],
                  ['Measure progress with', 'Flat glue monitors along baseboards — data beats sightings'],
                  ['Advion gel in Canada', 'Not registered (no indoxacarb product in Health Canada’s registry); grey-market imports have no legal use here'],
                  ['The one rule', 'Repellent spray and bait never share a surface'],
                  ['Foggers', 'Counterproductive — scatter the colony, contaminate bait surfaces'],
                  ['German roach strategy', 'Bait density within a metre of kitchen/bathroom harbourages'],
                  ['American/Oriental strategy', 'Drain maintenance, moisture control, exclusion, void dusting'],
                  ['Honest timeline', '~3 weeks to dramatic reduction; 2–3 months to confirmed zero'],
                  ['Kill visible roaches with', 'Soapy water or a vacuum — never spray near bait placements'],
                  ['Ontario renters', 'Pest control is the landlord’s responsibility — report in writing'],
                  ['Call a pro when', 'Multi-unit building, week-three failure, daylight sightings, drains, asthma'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/blog/advion-cockroach-gel-bait">Advion Cockroach Gel Bait in Canada &mdash; The Legality Deep Dive</Link></li>
            <li><Link href="/blog/best-roach-traps-canada">Best Roach Traps Canada &mdash; Glue Boards vs Bait Stations</Link></li>
            <li><Link href="/blog/best-cockroach-spray-canada">Cockroach Spray Canada &mdash; The One Narrow Job Spray Still Has</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cockroaches-canada">How to Get Rid of Cockroaches in Canada &mdash; The Full Playbook</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada &mdash; Buyer&rsquo;s Guide</Link></li>
            <li><Link href="/pest-product-guides">All BuzzSkito Pest Product Guides</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="cockroaches" />
        <ReadNext path="/blog/best-cockroach-killer-canada" />
      </article>
    </>
  )
}
