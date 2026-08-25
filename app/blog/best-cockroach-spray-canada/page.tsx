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

const SLUG = 'best-cockroach-spray-canada'
const DATE = '2026-07-28'
const UPDATED = '2026-07-30'
// This page owns the SPRAY AND AEROSOL purchase only: the three jobs a can legitimately
// wins, how to read a Canadian label, and what not to buy. Traps and bait stations are
// best-roach-traps-canada; the elimination plan is how-to-get-rid-of-cockroaches-canada.
// SERP title trimmed to 45 chars so it survives Google's cap once " | BuzzSkito" is appended.
const TITLE = 'Cockroach Spray in Canada — The Three Jobs Worth Buying a Can For'
const META_TITLE = 'Cockroach Spray Canada: What to Buy, What Not'

const FAQS = [
  {
    question: 'What is the best cockroach spray in Canada?',
    answer: 'The honest answer is that the best-performing cockroach product in Canada is not a spray at all — it is gel bait, which roaches carry back to the harbourage and share with the colony. If you specifically need a spray, buy a PMRA-registered aerosol with a crack-and-crevice straw applicator, such as a Canadian-labelled Raid Ant & Roach product, and use it only in the three jobs a spray actually wins: sealing off cracks and voids you cannot bait, treating an exterior perimeter against American and Oriental cockroaches coming in from outside, and killing the individual roach in front of you. Broadcast-spraying baseboards and cabinets with a repellent pyrethroid does the opposite of what you want — it scatters a German cockroach population deeper into wall voids and neighbouring units.',
  },
  {
    question: 'Does spraying make cockroaches worse?',
    answer: 'For German cockroaches, often yes. Most consumer aerosols and baseboard sprays sold in Canada are pyrethroid-based, and pyrethroids are repellent — cockroaches detect the treated surface and avoid it. Rather than dying, the population disperses: they push further into wall voids, behind appliance motors, into the neighbour’s unit, and into rooms that were previously clean. Worse, spray residue on and around a bait placement contaminates the bait and makes roaches refuse to eat it, which quietly disables the one tool that was going to work. This is why professionals use non-repellent products and bait, and why a bait-first plan beats a spray-first plan almost every time indoors.',
  },
  {
    question: 'Is Advion cockroach gel bait available in Canada?',
    answer: 'Not the way US forums assume. Advion is a professional-tier product, and Canadian pesticide access runs through Health Canada’s PMRA class system — domestic class for consumers, commercial class for licensed applicators. Listings that ship Advion to Canadian addresses are frequently US-labelled stock, and a US EPA registration confers no legal status here. The screening test is simple: look for a Canadian registration number reading “Reg. No. XXXXX P.C.P. Act” on the label of the unit you actually receive. We cover the whole grey-market question, and the consumer-legal gel and bait-station lane, in our dedicated Advion in Canada guide.',
  },
  {
    question: 'When is a cockroach spray the right tool?',
    answer: 'Three situations. First, crack-and-crevice work: injecting a thin residual into a gap you cannot reach with bait — behind a loose baseboard, a pipe penetration under the sink, an expansion joint — where the spray becomes a treated doorway rather than a broadcast surface. Second, an exterior perimeter band for American and Oriental cockroaches that live outdoors or in sewers and wander in; treating the foundation, door thresholds, utility penetrations and window wells intercepts them before entry — but check your provincial rules first, because Ontario and several other provinces restrict the cosmetic use of pesticides on lawns and gardens and the outdoor concentrates American threads recommend may not be permitted for that use here at all. Third, contact kill on a roach you can see. Outside those three jobs, a spray is usually the wrong instrument for the wrong species.',
  },
  {
    question: 'What does a PCP registration number mean on a Canadian insecticide?',
    answer: 'It is the proof that Health Canada’s Pest Management Regulatory Agency reviewed that exact formulation and approved that exact label for sale and use in Canada. It appears on the pack as “Reg. No. XXXXX P.C.P. Act”, usually near the guarantee panel, and the label itself is a legal document — the approved sites, application rates, re-entry advice and first-aid directions are all part of the registration. A product that carries only a US EPA registration number is not registered for sale or use in Canada, regardless of what a marketplace listing says. If you cannot find a PCP number on the actual container, you cannot verify the product is legal for you to use.',
  },
  {
    question: 'Do roach bombs and total-release foggers work on cockroaches?',
    answer: 'No — and this is one of the clearest “do not buy” findings in household pest control. Published university research on total-release foggers used in infested apartments has not found meaningful reductions in German cockroach populations, while gel bait applied in the same buildings did reduce them. The mechanism is obvious once you see it: fogger droplets settle on open horizontal surfaces — countertops, floors, your dish rack — and almost none reaches the tight, warm, dark harbourages where roaches actually live. Meanwhile the repellent residue drives survivors deeper into voids, and you have contaminated every food-prep surface in the room. Foggers also carry a real fire and explosion risk near pilot lights.',
  },
  {
    question: 'Do ultrasonic cockroach repellers work?',
    answer: 'No. Ultrasonic pest repellers have been tested against cockroaches and other household insects in published work and have not demonstrated meaningful, durable population effects; where any short-term response occurs, insects habituate quickly. Save the money for bait, monitors, and a caulking gun. We keep a standing evidence review of the category because the claims resurface every year with a new brand name on the box.',
  },
  {
    question: 'What is the difference between German, American and Oriental cockroaches for spraying?',
    answer: 'It changes the entire strategy. German cockroaches (small, tan, two dark stripes behind the head) live and breed indoors in kitchens and bathrooms, reproduce fast, and are the species where spraying most reliably backfires — treat them with gel bait, dust in voids, sanitation and monitors. American cockroaches (large, reddish-brown, strong fliers) and Oriental cockroaches (glossy dark brown-black, sluggish, damp-loving) are largely peridomestic — they live in sewers, drains, mulch, crawlspaces and basements and wander indoors. For those two, drain and sump attention, sealing entry points, and — where provincial pesticide rules permit it — an exterior perimeter treatment genuinely help, because you are intercepting migration rather than fighting a resident breeding colony.',
  },
  {
    question: 'Does boric acid kill cockroaches?',
    answer: 'Yes — it is one of the oldest verified cockroach actives, and registered boric acid products remain a legitimate domestic-class option in Canada. Roaches walk through a thin dust film, groom it off their legs and antennae, ingest it, and die over several days. The operative word is thin: a visible pile of powder repels roaches and they simply walk around it. Puff a barely-there film into cracks, wall voids, behind kick plates, under appliances and into hinge gaps, in dry locations only — moisture cakes the dust and ends its usefulness. Keep it out of reach of children and pets, and off food-prep surfaces.',
  },
  {
    question: 'Can I use a US cockroach spray I ordered online in Canada?',
    answer: 'If it does not carry a Canadian PCP registration number, no. The federal Pest Control Products Act makes it an offence to import, sell or use a pest control product in Canada that is not registered here, and border officers can seize unregistered pesticides. This catches many of the aerosols and concentrates that dominate American advice threads. The practical problem is not just legal: without a Canadian label you have no approved directions, no verified rate, no bilingual first-aid information, and no recourse if the product turns out to be repackaged or counterfeit. Registered Canadian options exist for every job on this page.',
  },
  {
    question: 'How long does a cockroach spray keep working?',
    answer: 'Far less time than the packaging implies. Residual life depends heavily on surface and conditions: a treated porous surface such as unsealed concrete or bare wood binds the active and shortens effective life, ultraviolet light degrades residues outdoors, and any cleaning, mopping or washing removes them entirely. Kitchen surfaces get cleaned — which is exactly why an indoor broadcast spray is a poor long-term strategy in the room where roaches live. Bait placements, by contrast, keep working until the bait is eaten or dries out, which is why they carry the program.',
  },
  {
    question: 'When should I stop DIYing cockroaches and hire a professional?',
    answer: 'Three triggers, and all of them save money rather than costing it. If you live in an apartment, condo, or any shared-wall building, German cockroaches move through wall voids and utility chases between units — your suite is not the colony, and unit-by-unit DIY loses to a building that needs coordinated treatment; report it to building management, who is generally responsible for a whole-building program. If you are still seeing daily activity after several weeks of a correctly-run bait plus sanitation program, suspect bait aversion or a source you have not found. And if you see roaches in daylight in the open, the harbourage is already overcrowded. A licensed exterminator has access to commercial-class non-repellents, insect growth regulators, and a follow-up schedule that DIY cannot replicate.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Which cockroach spray to buy in Canada, and when not to: the three jobs a can genuinely wins, how to read a PCP label, and why spraying near bait ruins it.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestCockroachSprayCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buyer guide to cockroach sprays and roach killers: why repellent sprays scatter German cockroaches, the three jobs a spray legitimately does, PMRA/PCP label rules, gel bait and boric acid alternatives, and what not to buy.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Cockroach Spray Canada — What to Buy, What Not', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Cockroach Spray — What to Buy, What Not</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Most people searching for a roach killer are about to buy the one product category that scatters their infestation. Here is what a spray is genuinely good for, which registered Canadian options to buy for those jobs, and the thing you should buy before any of them.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Combat roach bait stations (buy bait before any spray)" search="combat roach killing bait stations" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best cockroach spray in Canada is the one you use least. For German cockroaches &mdash; the small, striped species commonly found breeding indoors in Canadian kitchens and bathrooms &mdash; <strong>bait, not spray, is the tool that reaches the colony</strong>, because roaches carry it back to the harbourage and it kills insects you will never see. A spray still has three legitimate jobs: crack-and-crevice injection into gaps you cannot bait, an exterior perimeter band against American and Oriental cockroaches wandering in, and killing the one roach in front of you. For those jobs, buy a Canadian-labelled aerosol with a straw applicator and check the pack for a &ldquo;Reg. No. ___ P.C.P. Act&rdquo; number.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Consumer roach sprays are mostly <strong>repellent pyrethroids</strong> &mdash; roaches detect the residue and disperse deeper into voids and neighbouring units instead of dying.</li>
              <li>Never spray near a bait placement. Spray residue contaminates gel and bait stations and makes roaches refuse to feed &mdash; disabling the tool that was going to work.</li>
              <li>Species decides strategy: German = bait indoors; American and Oriental = drains, sealing, and &mdash; provincial rules permitting &mdash; an exterior perimeter.</li>
              <li>Total-release foggers (&ldquo;roach bombs&rdquo;) have not shown meaningful reductions in German cockroach populations in published apartment research &mdash; droplets land on countertops, not in harbourages. Do not buy one.</li>
              <li>Outdoor perimeter concentrates are a provincial question, not just a federal one &mdash; Ontario and several other provinces restrict the cosmetic use of lawn-and-garden pesticides. Check your provincial rules before buying one.</li>
              <li>Every insecticide legally sold in Canada carries a PCP registration number; a US EPA number alone means the product is not registered here.</li>
              <li>In apartments and condos, the colony spans units &mdash; that is a building-management problem, and DIY spray cannot win it.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <div className="not-prose rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Four pages, four jobs</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>This page covers sprays and aerosols only</strong> &mdash; the three jobs a can legitimately wins, which registered Canadian products do them, how to read the label, and what to leave on the shelf.
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-gray-800 list-disc pl-5">
              <li><strong>Want the plan?</strong> <Link href="/blog/how-to-get-rid-of-cockroaches-canada" className="text-emerald-700 underline font-semibold">How to get rid of cockroaches in Canada</Link> &mdash; species ID, sanitation, the full bait-first sequence, and the apartment problem.</li>
              <li><strong>Buying traps or bait stations?</strong> <Link href="/blog/best-roach-traps-canada" className="text-emerald-700 underline font-semibold">Cockroach traps in Canada</Link> &mdash; glue boards versus enclosed bait stations, how many of each, and where they go.</li>
              <li><strong>Considering an imported gel?</strong> <Link href="/blog/advion-cockroach-gel-bait-canada" className="text-emerald-700 underline font-semibold">Advion cockroach gel bait in Canada</Link> covers the PMRA grey zone in detail.</li>
            </ul>
          </div>

          <SpecialistDisclosure pest="cockroaches" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Pick in 60 Seconds: Should You Buy a Can At All?</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            A cockroach spray is the right purchase in a narrow set of situations and the wrong one in most. Find your row before you order.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your situation</th>
                  <th className="px-4 py-3 text-left">Buy this</th>
                  <th className="px-4 py-3 text-left">Why</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Small tan roaches with two dark stripes, breeding indoors</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Bait, not spray.</strong> Put the can back</td>
                  <td className="px-4 py-3 text-gray-700">A repellent residue scatters a German cockroach population deeper into voids and neighbouring units</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="combat roach killing bait stations" block>Bait stations &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">A gap you cannot get a bait station into</td>
                  <td className="px-4 py-3 text-gray-700">A Canadian-labelled aerosol <strong>with a straw applicator</strong></td>
                  <td className="px-4 py-3 text-gray-700">Crack-and-crevice injection is the one indoor job a can does better than anything else</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="crack and crevice insecticide aerosol straw" block>Aerosol with straw &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Large roaches wandering in from a drain or the yard</td>
                  <td className="px-4 py-3 text-gray-700">Sealing and drain work first; an exterior perimeter product second, if your province permits it</td>
                  <td className="px-4 py-3 text-gray-700">American and Oriental cockroaches are entering, not breeding &mdash; so the fix is at the entry</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="door sweep under door draft stopper" block>Door sweep &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">One roach on the wall, right now</td>
                  <td className="px-4 py-3 text-gray-700">Any registered contact aerosol &mdash; or a shoe. This is the honest use case</td>
                  <td className="px-4 py-3 text-gray-700">Kills what it wets. Just keep it away from your bait placements</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="crack and crevice insecticide aerosol straw" block>Contact aerosol &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You want it over with tonight</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Not a fogger.</strong> Nothing on the consumer shelf does this</td>
                  <td className="px-4 py-3 text-gray-700">Total-release foggers deposit on open surfaces, not in harbourages, and poison the ground your bait needs</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Do not buy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Cockroach Control in Canada"
            awards={[
              {
                badge: 'Best Overall (and it is not a spray)',
                name: 'Combat Roach Killing Bait Stations (buy the Canadian-labelled pack)',
                why: 'One of the highest-impact roach purchases a Canadian household can make, and — unlike a generic gel-bait listing — a named brand you can actually find on a Canadian shelf. Roaches feed, return to the harbourage, and the delayed-kill active spreads through droppings and shared shelter, killing insects deep in wall voids no aerosol will ever reach. Marketplace listings mix Canadian and US-imported stock, so check the pack you receive for a "Reg. No. ___ P.C.P. Act" number before you use it.',
                search: 'combat roach killing bait stations',
                featured: true,
                pros: ['Reaches the harbourage — a spray never does', 'Delayed kill lets foragers carry the dose home', 'Sealed housing you can place under sinks and behind appliances'],
                cons: ['Slow by design — judge it over weeks, not overnight', 'Fails if you spray near it or if sanitation is poor', 'Some populations show bait aversion — rotate the bait, not the strategy'],
              },
              {
                badge: 'Best Crack-and-Crevice Spray',
                name: 'Raid Ant & Roach Killer (buy the Canadian-labelled pack)',
                why: 'The spray to own if you own one. Raid Ant & Roach Killer is sold through Canadian retail with a Canadian PCP-registered label, and the straw applicator is the entire reason to buy it — product goes into gaps, pipe penetrations and hinge voids instead of along baseboards. One marketplace caveat worth ten seconds of your time: some third-party sellers ship US-labelled SC Johnson stock, so confirm a "Reg. No. ___ P.C.P. Act" number on the can you receive, and send it back if it is missing.',
                search: 'raid ant and roach killer',
                pros: ['Straw applicator puts product in the gap, not on the counter', 'Stocked at Canadian retail, where the pack is Canadian-labelled', 'Genuinely useful for contact kill and sealing off untreatable voids'],
                cons: ['Repellent chemistry — broadcast use scatters German cockroaches', 'Residue near bait ruins the bait', 'Short residual life on cleaned kitchen surfaces'],
              },
              {
                badge: 'Best for Wall Voids',
                name: "Safer's Diatomaceous Earth (PMRA-registered insect dust) + bulb duster",
                why: 'Inexpensive, and one of the most effective things you can put into a dry void. A barely-visible dust film behind kick plates and under appliances kills by desiccation and by ingestion during grooming, and unlike a spray it stays put for months where nothing disturbs it. We name a registered brand here on purpose: a generic "diatomaceous earth" or "boric acid powder" search returns mostly food- and craft-grade material that carries no PCP number and no Canadian label directions for killing insects. Registered boric acid dusts work the same way and are equally good — just buy a pack with a registration number on it.',
                search: 'safers diatomaceous earth',
                pros: ['Long-lasting in dry, undisturbed voids', 'One container covers a lot of void area', 'Complements bait instead of fighting it'],
                cons: ['A visible pile repels roaches — thin film only', 'Useless once damp; wrong tool under a leaking sink', 'Keep away from children, pets and food surfaces'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Small tan roaches in the kitchen or bathroom (German cockroaches)?</strong> Start with the <em>Best Overall</em> bait plus glue monitors, and do not spray at all &mdash; follow the <Link href="/blog/how-to-get-rid-of-cockroaches-canada">bait-first plan</Link>. <strong>Large reddish or glossy black roaches appearing from drains and basements?</strong> Those are peridomestic species &mdash; use the <em>Best Crack-and-Crevice Spray</em> on entry points, seal the gaps, and check your provincial rules before you buy any outdoor concentrate for a perimeter band. <strong>Roaches you know are living behind a kick plate or in a wall void?</strong> Puff the <em>Best for Wall Voids</em> registered dust in and leave it alone. And if you are in an apartment building, none of these three ends it alone &mdash; see <Link href="/pest-control-cost-canada">what professional treatment actually costs</Link> before spending another weekend on aerosols.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Product Types Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Every Roach Product in the Canadian Aisle, Honestly Rated</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            &ldquo;Cockroach spray&rdquo; is one shelf in an aisle of very different tools, and the shelf people reach for first is the one that helps least. Here is the whole aisle, with a pointer to where you can check each one on Amazon.ca &mdash; and the categories we send you away from entirely, with no buy button at all.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product type</th>
                  <th className="px-4 py-3 text-left">What it actually does</th>
                  <th className="px-4 py-3 text-left">Verdict</th>
                  <th className="px-4 py-3 text-left">Where to check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Gel bait<br /><span className="font-normal text-xs text-gray-500">Syringe, pea-sized dots</span></td>
                  <td className="px-4 py-3 text-gray-700">Foragers eat and return to harbourage; delayed-kill active spreads through the colony</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Buy bait first</strong> &mdash; it reaches insects no aerosol will. Buy a named Canadian-labelled brand, not whatever a generic gel search returns</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="combat roach killing gel" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Enclosed bait stations<br /><span className="font-normal text-xs text-gray-500">Child- and pet-resistant discs</span></td>
                  <td className="px-4 py-3 text-gray-700">Same delayed-kill principle in a sealed housing you can place under sinks and behind appliances</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Excellent</strong> &mdash; deploy many more than you think, not two</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="combat roach killing bait stations" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Crack-and-crevice aerosol<br /><span className="font-normal text-xs text-gray-500">Straw applicator can</span></td>
                  <td className="px-4 py-3 text-gray-700">Injects a residual into gaps and voids; also kills on contact</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Good in its lane</strong> &mdash; terrible as a broadcast spray</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="raid ant and roach killer" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Registered insecticidal dust<br /><span className="font-normal text-xs text-gray-500">Boric acid or diatomaceous earth + bulb duster</span></td>
                  <td className="px-4 py-3 text-gray-700">Thin film in dry voids; ingested during grooming, kills over several days</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Great value</strong> &mdash; long-lasting where it stays dry. Buy a registered brand; food- and craft-grade powders carry no PCP number</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="safers diatomaceous earth" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Glue monitors<br /><span className="font-normal text-xs text-gray-500">Flat sticky boards</span></td>
                  <td className="px-4 py-3 text-gray-700">Counts activity by location and night; tells you if the plan is working</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Essential</strong> &mdash; intelligence, not control</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Any plain sticky monitor; Canadian hardware and grocery retail</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Perimeter concentrate + pump sprayer<br /><span className="font-normal text-xs text-gray-500">Exterior band only</span></td>
                  <td className="px-4 py-3 text-gray-700">Treated band along foundation, thresholds and utility penetrations to intercept outdoor species</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Provincial rules first</strong> &mdash; irrelevant to a German cockroach colony indoors, and Ontario and several other provinces restrict cosmetic lawn-and-garden pesticide use</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Check your provincial rules before buying</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Total-release fogger<br /><span className="font-normal text-xs text-gray-500">&ldquo;Roach bomb&rdquo;</span></td>
                  <td className="px-4 py-3 text-gray-700">Fills the room with droplets that settle on open horizontal surfaces</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Do not buy</strong> &mdash; no meaningful effect in published research, scatters survivors, fire risk</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip it</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Ultrasonic repeller<br /><span className="font-normal text-xs text-gray-500">Plug-in device</span></td>
                  <td className="px-4 py-3 text-gray-700">Emits high-frequency sound claimed to drive insects away</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Do not buy</strong> &mdash; no durable effect on cockroaches in testing</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Skip it</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Gel bait, bait stations, aerosols and registered insect dusts are commonly sold by Canadian retailers such as Canadian Tire, Home Depot Canada, Home Hardware and Amazon.ca. Whatever you buy, confirm a &ldquo;Reg. No. ___ P.C.P. Act&rdquo; number appears on the container you receive &mdash; that check is the whole point, and it is the reason we point at named brands on this page instead of bare category searches.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ The mistake that costs people weeks.</strong> Spraying and baiting at the same time is not &ldquo;doubling up&rdquo; &mdash; the spray residue contaminates the bait and roaches stop eating it. Pick a lane per surface: bait and dust indoors, spray only in voids you are sealing off and outdoors. Full sequence in the <Link href="/blog/how-to-get-rid-of-cockroaches-canada" className="text-emerald-700 underline font-semibold">bait-first cockroach plan</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Cockroach Spray Buying — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best-performing product overall', 'Bait — gel or enclosed stations, not a spray'],
                  ['Best spray to own', 'Canadian-labelled aerosol with a crack-and-crevice straw'],
                  ['The three legit spray jobs', 'Void injection, exterior perimeter band, contact kill'],
                  ['Outdoor concentrates', 'Provincial cosmetic-pesticide rules may restrict the use — check first'],
                  ['Worst common purchase', 'Total-release fogger ("roach bomb")'],
                  ['Why sprays backfire indoors', 'Repellent pyrethroids scatter German cockroaches into voids'],
                  ['Never do this', 'Spray on or near a bait placement — it ruins the bait'],
                  ['German cockroach strategy', 'Gel bait + stations + dust + monitors + sanitation'],
                  ['American / Oriental strategy', 'Drains, sealing entry points, exterior perimeter if permitted'],
                  ['Canadian legality check', '"Reg. No. ___ P.C.P. Act" on the actual container'],
                  ['US-only products', 'A US EPA number alone = not registered for use in Canada'],
                  ['Realistic timeline', 'First kills within days; meaningful knockdown takes weeks'],
                  ['Hire a pro when', 'Shared-wall building, daytime sightings, or weeks with no progress'],
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

          <h2>What Is the Best Cockroach Spray in Canada?</h2>
          <p>If you want the answer that will actually solve your problem rather than the answer that sells the most cans: <strong>the best cockroach spray in Canada is the one you barely use.</strong> For the German cockroach &mdash; the species commonly found breeding indoors in Canadian kitchens and bathrooms &mdash; a spray is the wrong instrument, and the right one is bait. That is not a hedge or a marketing pivot. It is the reason professional exterminators walk into a roach job carrying a bait gun and a duster instead of a pressurized tank.</p>
          <p>But &ldquo;don&rsquo;t spray&rdquo; is also incomplete advice, because a spray genuinely does three things nothing else does. It can put a residual film into a crack you cannot bait. It can put an intercepting band around the outside of a house where American and Oriental cockroaches live &mdash; subject to your provincial rules, covered below. And it can kill the roach standing on your counter right now, which matters more to most people than any entomologist admits. So the useful version of the answer is: <strong>buy bait first, then buy one Canadian-labelled aerosol with a straw applicator and use it only in those three roles.</strong></p>

          <p className="not-prose text-sm text-gray-600 mb-1">We link named brands rather than category searches, so that what you land on is something you can actually check for a PCP number:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="combat roach killing bait stations">Combat roach bait stations →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="raid ant and roach killer">Raid crack-and-crevice aerosol →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Safer&rsquo;s registered insect dust →</BuyLink>
          </div>

          <h2>Read This First: Why Spraying Scatters Roaches</h2>
          <p>Most consumer roach sprays on a Canadian shelf are built on <strong>pyrethroid</strong> chemistry &mdash; the synthetic cousins of pyrethrum. Pyrethroids are fast, cheap, and broadly effective on contact. They are also <em>repellent</em>, and that single property is what wrecks the DIY roach plan.</p>
          <p>Cockroaches detect treated surfaces and avoid them. When you lay a band of repellent residue along your kitchen baseboards and around the cabinet frames, you have not built a kill zone. You have built a fence, and the population responds the way any population responds to a fence: it moves. Roaches push deeper into wall voids, behind the fridge coil housing and the dishwasher motor, up into the soffit of a cabinet run, along plumbing chases into the bathroom, and &mdash; in an apartment &mdash; straight through the shared wall into your neighbour&rsquo;s unit. Some weeks later you see fewer roaches in the kitchen and conclude the spray worked. What actually happened is that a breeding colony relocated somewhere you cannot reach, and it kept breeding.</p>
          <p>There is a second, quieter failure that costs even more time. <strong>Spray residue contaminates bait.</strong> Roaches are extremely sensitive to the smell and taste of pyrethroid deposits, and a gel dot or bait station sitting inside a sprayed zone gets refused. Doing both at once feels like doubling up, so it is an easy mistake to make &mdash; and it unknowingly switches off the only product in the room that was going to reach the harbourage. If you take one operational rule from this page, take this one: <strong>decide per surface. Bait and dust indoors; spray only into voids you are permanently sealing, and outdoors.</strong></p>
          <p>This is precisely why the professional standard shifted decades ago from spraying to baiting, and why professional products lean on <em>non-repellent</em> actives that roaches cannot detect and walk through freely. Those products sit in Health Canada&rsquo;s commercial class and require applicator certification &mdash; we unpack the whole access question, including the grey-market import trap, in our <Link href="/blog/advion-cockroach-gel-bait-canada">Advion cockroach gel bait in Canada guide</Link>.</p>

          <h2>The Three Jobs a Cockroach Spray Actually Wins</h2>
          <p>Having said all that, throwing every aerosol out is over-correction. Here is where a spray earns its place.</p>
          <h3>1. Crack-and-crevice injection</h3>
          <p>&ldquo;Crack and crevice&rdquo; is a term you will see on the Canadian label itself, and it means something specific: applying product <em>into</em> a gap rather than <em>onto</em> a surface. The straw applicator that comes taped to the can is the entire point of buying that can. Target the places roaches travel and shelter but where you cannot practically place bait: the gap behind a loose baseboard, a pipe penetration under the sink, the void behind a kick plate, an expansion joint in a basement slab, the hollow of a hollow-core door frame, the gap where a countertop meets the backsplash.</p>
          <p>Used this way the repellency that ruins broadcast spraying becomes an asset &mdash; you are making specific hiding places unattractive while your bait sits out in the open where roaches will find it. Two rules: keep the straw in the gap so you are not misting the room, and keep treated cracks well away from any bait placement.</p>
          <h3>2. The exterior perimeter band</h3>
          <p>This job is about species, and it is the one Canadian buying guides skip. American cockroaches (large, reddish-brown, capable fliers) and Oriental cockroaches (glossy dark brown to black, sluggish, moisture-loving) are largely <em>peridomestic</em>: they live in sewers, storm drains, mulch beds, crawlspaces, sump areas and warm utility tunnels, and they wander into houses. That behaviour makes them visitors rather than a resident breeding colony in your kitchen cabinets.</p>
          <p>Against a migrating pest, an intercepting band works in principle: a registered perimeter concentrate applied to the foundation, door thresholds, garage door seals, window wells and utility penetrations catches insects on their way in.</p>
          <p><strong>Before you buy one, there is a Canadian layer the American threads never mention.</strong> Federal PMRA registration is not the only gate. Ontario and several other provinces separately restrict the <em>cosmetic</em> use of pesticides on lawns and gardens, and the outdoor perimeter concentrates and granules that dominate US roach advice may not be permitted for that use where you live at all. That is why there is no buy button on this category anywhere on this page: we cannot know your province, and a product being legal to sell federally does not make it legal for you to spray around your house. Read the product label and your provincial rules first, and if you are unsure, hire someone licensed to do it &mdash; a certified applicator is working under an exemption you do not have. (If you have already confirmed a product is permitted where you live, the equipment side is covered in our <Link href="/blog/best-pump-pressure-sprayer-canada">pump sprayer guide</Link>.)</p>
          <p>The parts of this job that are not regulated are also the parts that last. Pair any outdoor work with sealing &mdash; a hardware-store tube of caulk and a door sweep out-perform any chemistry, for a fraction of the cost &mdash; and with drain and sump attention, because moisture is what brings these two species to your building in the first place. If you only do one thing outdoors, seal.</p>
          <h3>3. Killing the one you can see</h3>
          <p>There is no shame in this. A can of aerosol that kills a roach on contact is worth owning for household morale alone. Just do not mistake it for control: every roach you see in the open is a small fraction of the population, and killing individuals changes nothing about the colony&rsquo;s trajectory. Spray it, then go check your monitors.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="raid ant and roach killer">Check crack-and-crevice aerosol on Amazon.ca →</BuyLink>
          </div>

          <h2>How to Read a Canadian Label (PCP Number, Domestic vs Commercial)</h2>
          <p>This is where a lot of Canadian buyers get quietly burned, because most roach advice online is written for the American market and the products it names are not sold here legally.</p>
          <p>Every pest control product legally sold in Canada is registered by Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) and carries a registration number on the label, formatted as <strong>&ldquo;Reg. No. XXXXX P.C.P. Act&rdquo;</strong>. That number means PMRA reviewed <em>that exact formulation</em> and approved <em>that exact label</em> &mdash; approved sites, rates, precautions, and bilingual first-aid directions. The label is not packaging copy; it is the legal document that governs use.</p>
          <p>Products are also assigned a <strong>class</strong>. Domestic class is what consumers can buy and use. Commercial and restricted classes require provincial applicator certification. This is the actual reason the exterminator&rsquo;s gel outperforms yours &mdash; access plus training plus a follow-up schedule, not a secret formula.</p>
          <p>The failure mode to watch for is a marketplace listing that ships a US-labelled product to a Canadian address. A US EPA registration number confers no legal status in Canada; under the federal Pest Control Products Act it is an offence to import, sell or use an unregistered pest control product here, and border officers can seize them. Practically, buying grey-market also strips you of the Canadian label directions, PMRA review of the formulation you received, and any recourse if the product turns out to be repackaged or counterfeit &mdash; a known risk with high-demand roach baits on marketplaces. The screening habit takes ten seconds: <strong>find the PCP number on the container in your hands.</strong> If there is not one, put it down.</p>

          <h2>German vs American vs Oriental: Species Decides Everything</h2>
          <p>You cannot pick the right product until you know which insect you have, and the three common Canadian species point to three different plans.</p>
          <p><strong>German cockroach</strong> (<em>Blattella germanica</em>) &mdash; small, about 13&ndash;16 mm, light tan with two dark parallel stripes running back from the head. Lives and breeds indoors, concentrated within a few metres of food and water: under and behind the sink, behind and under the fridge and stove, in cabinet hinges, around the dishwasher, in the motor housings of small appliances. This is the species commonly associated with apartment-building infestations, it reproduces fastest of the three, and it is the reason this page opens with &ldquo;stop spraying.&rdquo; Plan: gel bait, enclosed stations at density, boric acid dust in dry voids, glue monitors, and relentless sanitation. Zero broadcast spray.</p>
          <p><strong>American cockroach</strong> (<em>Periplaneta americana</em>) &mdash; big, 35&ndash;50 mm, reddish-brown with a pale figure-eight marking behind the head, and a strong flier when warm. In Canada, associated with sewers, steam tunnels, boiler rooms, restaurant basements and older municipal infrastructure. Plan: drains, sealing, and moisture reduction, plus a perimeter treatment if your province permits one; interior baiting in basements and mechanical rooms.</p>
          <p><strong>Oriental cockroach</strong> (<em>Blatta orientalis</em>) &mdash; glossy dark brown to nearly black, 25&ndash;30 mm, slow-moving and unable to fly, sometimes called the &ldquo;water bug.&rdquo; Loves cool damp: basements, crawlspaces, floor drains, under porches, in leaf litter and mulch against a foundation. Plan: fix the moisture, pull the mulch and leaf litter back from the foundation, cover or maintain floor drains, and treat the perimeter only if a registered product is permitted for that use in your province.</p>
          <p>The pattern is worth stating plainly: for one species the spray aisle is a trap, and for the other two it is a reasonable supporting tool used <em>outside</em>. If you are not sure which you have, put down glue monitors for a week &mdash; you will get a specimen and a location map at the same time. Our <Link href="/blog/how-to-get-rid-of-cockroaches-canada">full get-rid-of-cockroaches playbook</Link> walks the ID and the monitoring routine step by step.</p>

          <h2>Boric Acid and Registered Dusts: the Quiet Workhorse Nobody Buys</h2>
          <p>Boric acid has killed cockroaches longer than most modern actives have existed, and registered boric acid products remain a straightforward domestic-class option in Canada. The mechanism is elegant: a roach crosses a thin dust film, picks up particles on its legs and antennae, grooms itself compulsively as roaches do, ingests the dust, and dies over several days &mdash; long enough to return to the harbourage first.</p>
          <p>The single thing that separates people who get results from people who do not is <strong>film thickness</strong>. A visible line or pile of white powder is a repellent barrier; roaches see it and walk around. What works is a film so thin you have to angle a flashlight to see it, puffed with a bulb duster into places nobody looks: behind kick plates and toe kicks, into the void behind an outlet or switch plate on a shared wall, under the fridge and stove, inside cabinet hinge gaps, along the underside of a sink cabinet floor, into the gap behind a loose baseboard.</p>
          <p><strong>Buy a registered dust, not a bag of powder.</strong> This is the one place on the page where a bare keyword search will actively mislead you. Search &ldquo;boric acid powder&rdquo; or &ldquo;diatomaceous earth&rdquo; on a marketplace and most of what comes back is laundry-, craft- or food-grade material sold for cleaning, gardening or supplements. That material carries no PCP registration and no Canadian label directions for killing insects &mdash; which means the same page that tells you to check for a registration number would be sending you to products that do not have one. So we name the pack instead: Safer&rsquo;s sells a PMRA-registered diatomaceous earth insect dust in Canadian retail, and registered boric acid insect dusts are sold here too. Either is fine. A pack with no registration number on it is not, whatever the listing title says it is for.</p>
          <p>Two limits, stated honestly. A dust is useless once damp &mdash; it cakes, and the damp cabinet under a slow-leaking trap is exactly where you want product, so fix the leak first. And it only kills roaches that cross the film, which means it complements bait rather than replacing it. Keep it out of reach of children and pets and off any food-preparation surface, and follow the Canadian label directions on the pack you buy. Diatomaceous earth works by a related desiccating mechanism and has the same thin-film rule &mdash; we cover application technique in the <Link href="/blog/diatomaceous-earth-canada-buyers-guide">Canadian diatomaceous earth buyer&rsquo;s guide</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="safers diatomaceous earth">Check Safer&rsquo;s registered insect dust on Amazon.ca →</BuyLink>
          </div>

          <h2>What Not to Buy, and Why We Are Telling You</h2>
          <p>Refusing sales is the only reason to trust the recommendations above, so here are the categories we think you should skip outright.</p>
          <p><strong>Total-release foggers (&ldquo;roach bombs&rdquo;).</strong> This is the clearest do-not-buy in household pest control. Published university research on total-release foggers used in infested apartments has not found meaningful reductions in German cockroach populations, while gel bait applied in the same buildings did reduce them. The physics explain it: aerosol droplets drift and settle on open horizontal surfaces &mdash; countertops, floors, the top of the fridge, your dish rack &mdash; and almost nothing penetrates the tight, dark, warm harbourages a few centimetres inside a cabinet frame where roaches actually spend their day. You end up with insecticide on every food-prep surface, a scattered population, and a genuine fire and explosion hazard if a pilot light or a fridge compressor cycles during the release. There is no version of a roach problem where a bomb is the right answer.</p>
          <p><strong>Ultrasonic plug-in repellers.</strong> Tested in published work, and they do not deliver durable population effects against cockroaches; where any short-term response shows up, insects habituate. We maintain a standing review of the category because the marketing resurfaces every spring with a new brand name: <Link href="/blog/ultrasonic-pest-repellers-do-they-work">do ultrasonic pest repellers work?</Link></p>
          <p><strong>&ldquo;Natural&rdquo; essential-oil roach sprays.</strong> Peppermint, cedar and clove sprays do repel roaches on contact, and that is exactly the problem &mdash; you are paying to scatter an infestation without killing anything. They are a reasonable choice for a one-off wipe-down in a rental where you cannot use conventional product, and a poor choice as a control strategy.</p>
          <p><strong>Any US-market product with no Canadian PCP number.</strong> Covered above; it is not a technicality, it is the difference between having label directions and guessing.</p>
          <p><strong>A second, third and fourth can of the same aerosol.</strong> If one can did not fix it, six will not either. Escalating the volume of a repellent product is a common DIY roach mistake, and it converts a kitchen problem into a whole-house problem.</p>
          <p><strong>An outdoor perimeter concentrate bought before you have checked your provincial rules.</strong> Federal registration is only half the question in Canada. Ontario and several other provinces restrict the cosmetic use of lawn-and-garden pesticides, so the concentrate that solves a peridomestic roach problem in an American thread may not be a product you are permitted to apply. That is why there is no buy button on that category anywhere on this page.</p>

          <h2>When DIY Is the Wrong Call &mdash; and a Professional Is Cheaper</h2>
          <p>There are situations where continuing to buy product is the expensive option.</p>
          <p><strong>You live in an apartment, condo, or any shared-wall building.</strong> German cockroaches travel through wall voids, plumbing chases, and electrical conduits between units. Your suite is not the colony; the building is. Treating one unit while the adjacent units go untreated produces a temporary dip and a return, forever. In most Canadian provinces, dealing with an infestation in a rental building is the landlord&rsquo;s responsibility &mdash; report it in writing to building management and ask for a coordinated, whole-floor treatment program. Do not quietly work through a shelf of aerosols trying to solve a problem you are not legally or physically able to solve.</p>
          <p><strong>You are seeing roaches in daylight, in the open.</strong> German cockroaches are nocturnal and thigmotactic &mdash; they want to be touching surfaces on multiple sides. Daytime activity in open floor space generally means the harbourages are overcrowded, which means the population is far larger than what you are seeing.</p>
          <p><strong>You have run a correct bait-plus-sanitation program for several weeks and activity is flat.</strong> That points to bait aversion (some German cockroach populations have documented aversion to certain bait matrices), an untreated source such as a neighbouring unit or a shared garbage room, or a harbourage you have not found. All three are solved by a licensed applicator with access to commercial-class non-repellents and insect growth regulators, plus the follow-up visits that make the difference.</p>
          <p>Before you call anyone, it is worth knowing what the work should cost so you can sanity-check a quote &mdash; our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> lays out typical ranges by job type and building size.</p>

          <h2>Where the Spray Fits in a Working Plan</h2>
          <p>Products only matter in sequence. Identify the species with glue monitors first, then tighten sanitation so your bait is not competing with a grease film, then bait at density, then dust the dry voids, then seal &mdash; and only then reach for the aerosol, and only into the gaps you could not seal. The spray is step six of six, which is exactly the opposite of the order most people buy in. The step-by-step version of that sequence, with placement counts and a week-by-week monitoring schedule, lives in our <Link href="/blog/how-to-get-rid-of-cockroaches-canada">bait-first cockroach plan</Link> &mdash; that is the page to work from once you have bought the right products from this one.</p>

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

          <h2>Related Cockroach &amp; Crawling-Pest Guides</h2>
          <ul>
            <li><strong>The plan a spray fits into:</strong> <Link href="/blog/how-to-get-rid-of-cockroaches-canada">How to Get Rid of Cockroaches in Canada — The Bait-First Plan</Link></li>
            <li><strong>Buying traps or bait stations instead?</strong> <Link href="/blog/best-roach-traps-canada">Cockroach Traps in Canada — Glue Boards Find Them, Bait Stations Kill Them</Link></li>
            <li><Link href="/blog/advion-cockroach-gel-bait-canada">Advion Cockroach Gel Bait in Canada — The Honest Grey-Market Answer</Link></li>
            <li><Link href="/blog/diatomaceous-earth-canada-buyers-guide">Diatomaceous Earth in Canada — Buyer&rsquo;s Guide and Application Technique</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Actually Work?</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-ants-canada">How to Get Rid of Ants in Canada — Why Baiting Beats Every Spray</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada — The Humidity Fix</Link></li>
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
