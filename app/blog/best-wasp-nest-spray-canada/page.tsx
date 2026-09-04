import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'best-wasp-nest-spray-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Best Wasp Nest Spray Canada 2026 — PMRA-Legal Foams & Jets Compared'
const META_TITLE = 'Best Wasp Nest Spray Canada 2026: Foam vs Jet'

const FAQS = [
  {
    question: 'What is the best wasp nest spray in Canada?',
    answer: 'For most Canadian homeowners, a foaming aerosol like Raid Wasp & Hornet Bug Killer is the best wasp nest spray: the foam expands over the nest entrance, traps returning workers, and keeps killing wasps that crawl through it. Wilson WaspOut is the strongest pure-foam alternative — its expanding blanket is especially good on visible paper nests under eaves and deck rails. If the nest is high up and reach matters more than coverage, a straight-stream aerosol trades foam blanketing for distance — but be careful which Ortho can you are looking at. The Ortho wasp aerosol registered in Canada is Wasp B Gon MAX Wasp Killer Spray, Health Canada PCP 33723 (Scotts Canada Ltd.); the 20-foot "Ortho Home Defense Hornet & Wasp Killer 7" that fills US search results has no Canadian registration. Among cans registered here, SC Johnson publishes the longest throw: up to 5.7 m for Raid Wasp & Hornet Bug Killer 7. Whichever can you pick up, confirm it shows a Canadian PCP registration number on the label — that is the marker of a Health Canada (PMRA) registered product.',
  },
  {
    question: 'Is Spectracide wasp spray legal in Canada?',
    answer: 'The Spectracide Wasp & Hornet Killer famous for its "up to 27 foot" jet claim is a US product registered with the US EPA, not with Health Canada\'s PMRA. Under Canada\'s Pest Control Products Act, it is illegal to import, sell, or use a pesticide in Canada unless it is registered here, so a US-labelled can bought across the border or from a cross-listing marketplace seller is grey-market — using it in your backyard is technically an offence, and you lose all the protections of a Canadian label reviewed for Canadian use. Buy a can with a PCP number instead; Canadian-registered foams and jets handle the same nests.',
  },
  {
    question: 'What does the PCP registration number on a wasp spray mean?',
    answer: 'Every legal domestic-class pesticide in Canada must be registered with Health Canada\'s Pest Management Regulatory Agency (PMRA) and carry a Pest Control Products (PCP) registration number printed on the label — usually a 5-digit number after the words "Registration No." or "PCP No." It means the exact formulation, concentration, and label directions were reviewed for safety and efficacy under Canadian conditions, and that the directions on the can are the legally binding way to use it. No PCP number on the can means the product is not legal to sell or use in Canada, no matter how familiar the brand looks.',
  },
  {
    question: 'Foam or jet wasp spray — which is better?',
    answer: 'Foam is better for most nests; jet is better for pure reach. A foaming spray expands over the nest and its entrance hole, physically trapping wasps inside while the insecticide works, and it clings to the paper envelope so returning foragers walk through treated foam for hours. That makes foam the pick for eave nests, deck-rail nests, shed corners, and wall-void entrances. A jet formula throws a narrower, straighter stream farther, which helps on second-storey soffits — but it runs off vertical surfaces faster and leaves less residual at the entrance. If you only buy one can, buy foam.',
  },
  {
    question: 'When is the best time of day to spray a wasp nest?',
    answer: 'At dusk, or in the half-hour before sunrise. Nearly the entire colony — including the queen — is inside the nest at night, and wasps are sluggish in the cooler, darker conditions, so you kill the maximum number with one application and face the fewest defenders. Avoid spraying in the middle of a warm day when hundreds of foragers are out; they will return to a disturbed, defensive nest. If you must use light at dusk, use a flashlight covered with red cellophane or set to the side, not aimed at the entrance — wasps orient to white light.',
  },
  {
    question: 'How far away should I stand when spraying a wasp nest?',
    answer: 'As far as your can\'s jet genuinely reaches — check the distance printed on the Canadian label and use most of it. Canadian-registered wasp aerosols throw a stream roughly 2 to 5.7 metres depending on the formula — Scotts Canada rates the Ortho Wasp B Gon MAX foam at 2 to 2.5 m, and SC Johnson rates Raid Wasp & Hornet Bug Killer 7 at up to 5.7 m, so plan to stand several metres back, never directly underneath the nest, with a clear escape path behind you. The seductive 8-metre-plus (27-foot) claims belong to US grey-market cans; you do not need them. Standoff distance is really about angle and exit: stand upwind, slightly to the side of the flight path, soak the entrance first, and walk — do not run — away immediately after.',
  },
  {
    question: 'How long does wasp spray take to kill the nest?',
    answer: 'Wasps hit directly by a registered foam or jet are knocked down in seconds to minutes, but the colony is not the wasps you can see — it is the workers out foraging and the brood inside the comb. Expect stragglers returning for 24 to 48 hours; treated foam at the entrance kills most of them as they land. Watch the nest from a distance the next evening: if you still see steady traffic, apply a second treatment at dusk. Only remove a nest once you have seen zero activity for a full warm day.',
  },
  {
    question: 'Can I spray a wasp nest inside a wall or behind siding?',
    answer: 'You can treat the entrance hole with foam at dusk, but wall-void nests are the one scenario where DIY spray most often goes wrong. The critical rule: never seal the hole right after spraying. If survivors are trapped inside the void, yellowjackets will chew through drywall and emerge inside the house — a genuinely bad day. Treat the entrance, leave it open, confirm zero traffic over several days, and only then seal. If the entrance is high, the void is large, or you have already seen wasps indoors, this is the nest to hand to a licensed structural exterminator rather than a spray can.',
  },
  {
    question: 'What about yellowjacket nests in the ground?',
    answer: 'Ground-nesting yellowjackets need a different playbook than a hanging paper nest. You can apply a registered foam directly into the burrow entrance at dusk — foam is much better than a jet here because it expands down the tunnel — but ground colonies are often larger than they look, frequently have a second exit, and are responsible for most multi-sting incidents in Canadian yards. We cover the full approach, including when trapping and when professional treatment makes more sense, in our dedicated guide to getting rid of ground wasps in Canada.',
  },
  {
    question: 'Are wasp nest sprays safe around kids and pets?',
    answer: 'Canadian-registered wasp aerosols use pyrethroid insecticides that are low-toxicity to humans and pets at label rates, but the label directions are the law and the safety margin. Keep children and pets indoors during application and until any drips or foam have dried, do not spray onto vegetable gardens, toys, play structures, or pet bowls, and never apply near an open window or air intake. Overspray is the main hazard path in practice: spray at dusk with a steady jet aimed at the nest entrance, not fogged across the yard. Wear long sleeves, pants, closed shoes, and eye protection — that is as much about stings as chemistry.',
  },
  {
    question: 'What if the nest is too high to reach, or I am allergic to stings?',
    answer: 'Do not improvise. Standing on a ladder at dusk while angry wasps pour out of a nest above your head is how emergency-room visits happen, and if you have any history of systemic reaction to stings — swelling beyond the sting site, hives, breathing trouble — DIY nest treatment is off the table entirely. A licensed exterminator with a telescoping duster or injection equipment handles a high or awkward nest in minutes; typical Canadian pricing for a single wasp nest treatment is covered in our pest control cost guide. Removal is cheap compared to anaphylaxis.',
  },
  {
    question: 'Do home remedies like dish soap or WD-40 kill wasp nests?',
    answer: 'Soapy water does kill individual wasps by wetting through their cuticle, and internet lore is full of WD-40, gasoline, and boiling-water "solutions." All of them fail the two tests that matter: they have no residual to kill the returning foragers, and they force you dangerously close to the nest to deliver enough volume. Gasoline is an environmental contaminant and fire hazard; boiling water on a ground nest scalds the first few centimetres and enrages the rest. Also worth knowing: spraying anything not registered as a pesticide to kill pests is itself contrary to the Pest Control Products Act. A registered foam can is inexpensive, reaches from metres away, and keeps killing at the entrance for hours — use the tool designed for the job.',
  },
  {
    question: 'Is Spectracide wasp spray legal in the United States?',
    answer: 'Yes. In the United States, Spectracide Wasp & Hornet Killer, Hot Shot, and the US Raid line are all fully legal, EPA-registered products sold at Home Depot, Lowe\'s, Walmart, Ace Hardware and grocery chains. Under FIFRA every one of them carries an EPA Registration Number on the label, which ties the can to the exact label language the EPA reviewed and approved. The legality question is directional, not moral: an EPA-registered can is not legal to use in Canada, and a PMRA-registered Canadian can is equally not legal to use in the United States. Buy the can registered for the country you are standing in, and read the label as binding either way.',
  },
  {
    question: 'What do professional exterminators use for wasps?',
    answer: 'Three tool classes the consumer aisle does not carry. Freeze aerosols such as PT Wasp-Freeze II knock down an exposed aerial nest instantly from about 15 feet and are formulated with high dielectric strength, which is why technicians reach for them near meter boxes and service masts. Insecticidal dusts — Delta Dust (deltamethrin, waterproof) and Tempo Dust (cyfluthrin 1%, up to about a year of residual) — are puffed into wall voids and ground burrows, where dry particles cling and travel better than wet foam. Residual liquid concentrates such as Suspend (deltamethrin), Demand CS (lambda-cyhalothrin) and Tempo (cyfluthrin) are diluted and sprayed on eaves and soffits to stop queens rebuilding; of those, Demand CS (PCP 27428) and Tempo 20 WP (PCP 25673) are the ones registered in Canada, as commercial-class products. In the United States most of these are sold to the public through pest-control supply retailers. Canada is stricter than "commercial class": searches of the Health Canada pesticide label database return no registration at all for Wasp-Freeze, Delta Dust or Tempo Dust, so those specific products are not legal to sell or use here. Canadian technicians work instead from the commercial-class products that are registered here.',
  },
  {
    question: 'How do you permanently get rid of wasps?',
    answer: 'No spray is permanent, because next spring brings new queens regardless of what you did last August. Permanence is four things done in order: intercept founding queens in April and May while nests are still golf-ball sized and hold one insect; seal soffit, siding and fascia gaps after the colony dies over winter and never while it is alive; remove the food that draws scavenging yellowjackets, meaning lidded bins, fallen fruit, covered drinks and no pet food left outside; and apply a residual to the eaves, soffits and rail undersides queens prefer. Abandoned nests are not reused the following year, so pulling down an old nest is cosmetic — sealing the cavity it sat in is the part that lasts.',
  },
  {
    question: 'Why does WD-40 kill wasps?',
    answer: 'Because it is a petroleum distillate, not because it is an insecticide. The oil film coats and clogs the spiracles — the paired breathing openings along an insect\'s abdomen — and strips the waxy cuticle layer that holds water in, so the wasp dies of suffocation and desiccation over minutes rather than the seconds-fast neurotoxic knockdown a registered pyrethroid delivers. The mechanism is real, and it is still the wrong tool: there is no residual to kill the foragers that come home overnight, the short throw forces you within arm\'s reach of a defending colony, the aerosol is flammable and people aim it at nests beside light fixtures, and applying an unregistered substance as a pesticide violates FIFRA in the United States exactly as it violates the Pest Control Products Act in Canada.',
  },
  {
    question: 'What is the difference between a wasp and a hornet?',
    answer: 'All hornets are wasps; not all wasps are hornets. In North America the split that actually changes how you spray is nest architecture. Polistes paper wasps build an open umbrella comb with no paper envelope and no entrance hole — a few dozen insects on visible cells under an eave or deck rail. Yellowjackets (Vespula) build an enclosed envelope nest in a void or underground with a single defended entrance, run hundreds to thousands strong, and are the scavengers at your picnic. The bald-faced hornet (Dolichovespula maculata), the grey football most Americans photograph and call a hornet, is genetically a yellowjacket. The one true hornet long established in North America is the European hornet, Vespa crabro.',
  },
  {
    question: 'What month are wasps most aggressive?',
    answer: 'August and September, across essentially all of North America. Colonies peak in size at exactly the moment their natural insect prey declines, so workers switch to scavenging human food and defend a maximum-size nest on a minimum food supply. In Canada and the northern United States the season closes with the first hard frosts in October. Across the southern United States wasps stay active from March into November, some south Florida Polistes nests never fully die off, and in mild winters southern yellowjacket colonies can overwinter into perennial multi-year nests far larger than a single season produces — the ones that make regional news.',
  },
  {
    question: 'Does wasp spray really reach 27 feet?',
    answer: 'Not in your backyard. Printed reach figures are measured under ideal conditions with a full, warm can fired horizontally in still air, so usable reach in a backyard lands well short of the number on the label &mdash; plan on roughly 30 to 40 percent short as a working margin. A can rated for 27 feet is realistically a 16 to 19 foot tool, and a cold can on an autumn evening does worse still because aerosol pressure falls with temperature. Buy for measured reach rather than the marketing number, treat the printed figure as a ceiling you will not hit, and remember the rule that outranks all of it: if you cannot hit the nest from the ground with distance to spare, it is a professional\'s nest, not a taller-ladder problem.',
  },
  {
    question: 'Can you spray a wasp nest near an electrical meter or outdoor light?',
    answer: 'Only with a can formulated for it, and even then carefully. Some wasp aerosols are formulated to be electrically non-conducting and state a dielectric rating on the label — SC Johnson rates the Canadian Raid Wasp & Hornet can electrically non-conducting up to 41,000 volts, while the US Raid Wasp & Hornet Killer 33 label states 32,500 volts; the professional PT Wasp-Freeze II is sold partly on high dielectric strength, which BASF states as no breakdown up to 49,300 volts, which is precisely why technicians carry it for nests on meter boxes, service masts and outdoor fixtures. A can carrying no dielectric statement should never be aimed at energised equipment. Kill the circuit at the breaker where you can, never spray into an open panel or meter enclosure, and hand anything involving the service drop or the meter itself to an electrician and a licensed applicator rather than solving it with a can.',
  },
  {
    question: 'Are murder hornets still in the United States?',
    answer: 'No. The northern giant hornet (Vespa mandarinia), widely nicknamed the murder hornet, was declared eradicated from Washington State and from the United States by the Washington State Department of Agriculture and the USDA on 18 December 2024, after three years with no confirmed detections. It had been discovered in Whatcom County in 2019, and four nests were located and destroyed in 2020 and 2021. If you are looking at a very large hornet in a North American yard, it is far more likely a European hornet, a bald-faced hornet, or a cicada killer — the last of which is enormous, alarming to meet, and very nearly harmless.',
  },
  {
    question: 'How do you treat an open paper wasp comb with no entrance hole?',
    answer: 'Differently from an enclosed nest, because the standard advice to plug the entrance with foam has nothing to plug. A Polistes umbrella comb is open cells on a short stalk with every adult sitting on the exposed face, so you coat the comb and the adults on it directly, working from the underside upward at dusk until the paper is visibly saturated, then wet the stalk and the surface it is anchored to. These colonies are small — often under fifty insects — so one thorough treatment usually ends it, and the aerosol format matters far less here than on an enclosed nest. Scrape the comb off the next day once activity is zero, because a bare stalk left in place is a preferred rebuilding site.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The best PMRA-registered wasp nest sprays in Canada for 2026: Raid Wasp & Hornet Bug Killer, Wilson WaspOut foam, and long-reach jets compared — foam vs jet, dusk application, safe standoff distance, and why US 27-foot sprays are grey-market here.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-wasp-nest-spray-canada')

export default function BestWaspNestSprayCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'An independent Canadian comparison of PMRA-registered wasp nest sprays — foam vs jet formats, safe application technique, and the grey-market US products to avoid.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Wasp Nest Spray Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Wasp Nest Spray Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Foam vs jet wasp killers compared for Canadian homes &mdash; which PMRA-registered cans actually work, exactly how and when to spray a nest safely, and why the famous US &ldquo;27-foot&rdquo; sprays are grey-market here.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Raid Wasp & Hornet Bug Killer (foaming aerosol)" search="raid wasp hornet killer" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5 my-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-red-700 mb-2">Health Canada recall &mdash; check your can before you buy or use one</p>
            <p className="text-gray-800 text-[15px] leading-relaxed">
              Health Canada has recalled <strong>Raid Max&reg; Wasp &amp; Hornet Foam Bug Killer 2</strong> (PCP registration <strong>30746</strong>) because cans manufactured at one facility can leak. Around 456,800 units were sold in Canada between December 2023 and January 2025. This affects that specific SKU, not every Raid wasp product &mdash; but the names are close enough that it is worth checking the PCP number printed on any can you already own or are about to buy.
            </p>
            <p className="text-gray-800 text-[15px] leading-relaxed mt-2">
              Handle a leaking can carefully and wear gloves. Check whether yours is affected at{' '}
              <a href="https://www.raidrecallcanada.com" rel="nofollow noopener noreferrer" target="_blank" className="font-semibold underline decoration-red-400 underline-offset-2">raidrecallcanada.com</a>{' '}
              or read the{' '}
              <a href="https://recalls-rappels.canada.ca/en/alert-recall/raidr-outdoor-ant-nest-destroyer-2-and-raid-maxr-wasp-hornet-foam-bug-killer-2" rel="nofollow noopener noreferrer" target="_blank" className="font-semibold underline decoration-red-400 underline-offset-2">Health Canada recall notice</a>.
              The same recall also covers Raid&reg; Outdoor Ant Nest Destroyer 2 (PCP 30744). As of Health Canada&rsquo;s update, no injuries had been reported in Canada.
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best wasp nest spray for most Canadian homes is a PMRA-registered foaming aerosol like <AmazonLink search="raid wasp hornet killer" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Raid Wasp &amp; Hornet Bug Killer</AmazonLink> &mdash; the foam blankets the nest entrance, traps returning workers, and keeps killing for hours. Wilson WaspOut is the strongest pure-foam alternative, and the Ortho can registered for Canada is Wasp B Gon MAX Wasp Killer Spray (Health Canada PCP 33723) &mdash; the 20-foot Ortho Home Defense Hornet &amp; Wasp Killer 7 sold in the US has no Canadian registration. Spray at dusk, from the far end of the jet&rsquo;s reach, and always check the can for a Canadian PCP registration number.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Legal wasp sprays in Canada carry a PCP registration number from Health Canada&rsquo;s PMRA &mdash; no number on the can, not legal to sell or use here.</li>
              <li>US products like Spectracide&rsquo;s &ldquo;27-foot&rdquo; jet are EPA-registered, not PMRA-registered &mdash; importing or using them in Canada is grey-market and an offence under the Pest Control Products Act.</li>
              <li>Foam beats jet for most nests: it expands over the entrance and kills returning foragers for hours; jets win only on second-storey reach.</li>
              <li>Spray at dusk or pre-dawn when the whole colony (queen included) is inside and sluggish.</li>
              <li>Stand at the far end of your can&rsquo;s rated reach &mdash; Canadian manufacturers publish roughly 2&ndash;5.7 metres &mdash; never directly under the nest, with an escape path planned.</li>
              <li>Never seal a wall-void nest entrance right after spraying: trapped survivors can chew through drywall into the house.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
            <div className="mt-4">
              <BuyLink search="raid wasp hornet killer" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>
          <SpecialistDisclosure pest="wasps" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Wasp Nest Sprays in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Raid Wasp & Hornet Bug Killer (foam)',
                why: 'The Canadian benchmark: a foaming aerosol that blankets the nest and entrance, knocks wasps down on contact, and keeps killing returning foragers as they crawl through the residue. Widely stocked and inexpensive enough to keep a backup can.',
                search: 'raid wasp hornet killer',
                score: 9.0,
                featured: true,
                pros: ['Foam traps wasps at the entrance', 'Residual kills returning foragers', 'Sold at nearly every Canadian retailer'],
                cons: ['Moderate jet reach — not for high soffits', 'Foam can drip on vertical surfaces'],
              },
              {
                badge: 'Best Foam Blanket',
                name: 'Wilson WaspOut Wasp & Hornet Foam',
                why: 'A Canadian-brand expanding foam that smothers the whole nest envelope — the best choice for visible paper nests on eaves, deck rails, and shed corners, and for pushing foam into ground-nest and void entrances.',
                search: 'wilson waspout wasp hornet foam',
                score: 8.6,
                pros: ['Expanding foam coats the full nest', 'Excellent for burrow and void entrances', 'Canadian brand, PMRA-registered line'],
                cons: ['Shorter throw than jet formulas', 'Budget-priced but uses product fast'],
              },
              {
                badge: 'Best Straight Stream',
                name: 'Ortho Wasp B Gon MAX Wasp Killer Spray',
                why: 'Ortho sells wasp aerosols under different names on each side of the border, and only one of them is registered here. The Canadian SKU is Wasp B Gon MAX — Health Canada PCP 33723 (spray) and PCP 33724 (foam), registered to Scotts Canada Ltd. The 20-foot Ortho Home Defense Hornet & Wasp Killer 7 that dominates US results is EPA-registered and carries no Canadian registration. The spray format gives a pointed stream rather than a spreading foam blanket.',
                search: 'ortho home defense hornet wasp killer',
                score: 8.1,
                pros: ['PCP 33723 — registered with Health Canada', 'Straight stream, not a spreading foam', 'Same tetramethrin + d-phenothrin actives as the Raid can'],
                cons: ['Stream runs off — thinner residual than foam', 'Not a long-range can: Scotts Canada rates the foam version at 2–2.5 m'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Typical eave, deck, or shed nest?</strong> The <em>Best Overall</em> Raid foam does everything well and is the one can to own. <strong>Big exposed paper nest or a burrow entrance?</strong> The <em>Best Foam Blanket</em> WaspOut&rsquo;s expanding foam smothers it most completely. <strong>Nest two storeys up?</strong> Reach for the longest published throw among Canadian-registered cans &mdash; SC Johnson rates Raid Wasp &amp; Hornet Bug Killer 7 at up to 5.7 m &mdash; and if you cannot reach it safely from the ground at all, that is a job for a licensed pro, not a taller ladder. Whichever you buy, check for the PCP number on the label before checkout.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Formats Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Foam vs Jet vs Grey-Market: What Each Can Actually Does</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Every wasp spray on a Canadian shelf is one of two formats &mdash; foam or jet &mdash; and every can in a cross-border trunk is a third category you should not touch. Here is the honest breakdown, with a live Amazon.ca price check for the legal picks.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Format</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Canada status</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Foaming aerosol<br /><span className="font-normal text-xs text-gray-500">Raid Wasp &amp; Hornet</span></td>
                  <td className="px-4 py-3 text-gray-700">Expanding foam blankets nest + entrance; residual kills returning foragers for hours</td>
                  <td className="px-4 py-3 text-gray-700">Eaves, deck rails, sheds, most nests</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Legal</strong> &mdash; PCP 29776</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="raid wasp hornet killer" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Expanding foam<br /><span className="font-normal text-xs text-gray-500">Wilson WaspOut</span></td>
                  <td className="px-4 py-3 text-gray-700">Heavier foam smothers the full nest envelope; ideal pushed into burrow and void entrances</td>
                  <td className="px-4 py-3 text-gray-700">Exposed paper nests, ground &amp; void entrances</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Legal</strong> &mdash; PCP 31899</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="wilson waspout wasp hornet foam" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Straight stream<br /><span className="font-normal text-xs text-gray-500">Ortho Wasp B Gon MAX</span></td>
                  <td className="px-4 py-3 text-gray-700">Narrow pointed stream rather than a foam blanket; fast knockdown, thinner residual</td>
                  <td className="px-4 py-3 text-gray-700">Pointed application where spreading foam is unwanted</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Legal</strong> &mdash; PCP 33723</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ortho home defense hornet wasp killer" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">US grey-market<br /><span className="font-normal text-xs text-gray-500">Spectracide &ldquo;27 ft&rdquo;, Hot Shot, Ortho Home Defense Hornet &amp; Wasp Killer 7</span></td>
                  <td className="px-4 py-3 text-gray-700">EPA-registered for the US only; no PCP number, no Canadian label review</td>
                  <td className="px-4 py-3 text-gray-700">Nothing in Canada</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Not legal</strong> to import, sell, or use</td>
                  <td className="px-4 py-3 text-xs text-gray-500">Not linked &mdash; do not buy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Canadian-registered wasp aerosols are stocked by Canadian Tire, Home Depot Canada, Rona and Home Hardware, and they are inexpensive enough that there is no economic case for hunting down a grey-market US can. Retail prices move constantly, so check the shelf rather than a figure printed on a web page.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ The 27-foot spray is a trap.</strong> The distance claim that makes US cans tempting is exactly the part you do not need: Canadian jets already reach the nests you can safely treat yourself. A nest beyond a Canadian can&rsquo;s reach is a nest beyond safe DIY &mdash; that is ladder-plus-angry-colony territory, and a licensed exterminator clears it in minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Wasp Nest Spray Buying — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best format for most nests', 'Foaming aerosol — blankets the entrance, hours of residual'],
                  ['Best format for high nests', 'Long-jet stream (keeps you off the ladder)'],
                  ['Legality marker', 'PCP registration number printed on the can (Health Canada / PMRA)'],
                  ['Grey-market examples to avoid', 'US-labelled Spectracide, Hot Shot, Raid Wasp & Hornet Killer 33'],
                  ['Best time to spray', 'Dusk or pre-dawn — whole colony home, wasps sluggish'],
                  ['Standoff distance', 'Far end of the can’s rated reach — Canadian manufacturers publish roughly 2–5.7 m'],
                  ['Time to full colony kill', '24–48 hours including returning foragers; re-treat if traffic persists'],
                  ['Wall-void rule', 'Treat the entrance, never seal it until activity is zero for days'],
                  ['Ground nests', 'Foam into the burrow at dusk — see the ground wasp guide'],
                  ['Peak season in Canada', 'July–September, when colonies hit maximum size and aggression'],
                  ['Where to buy in Canada', 'Canadian Tire, Home Depot Canada, Rona, Home Hardware — check the can for a PCP number'],
                  ['When to call a pro instead', 'High nests, wall voids with indoor sightings, or any sting allergy'],
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

          <h2>What Makes a Wasp Spray Legal in Canada? (Start Here)</h2>
          <p>Before comparing foam patterns and jet distances, the question almost nobody asks: is the can in your hand legal to use in Canada at all? Every pesticide sold for home use here must be registered with Health Canada&rsquo;s <strong>Pest Management Regulatory Agency (PMRA)</strong> and must display a <strong>PCP registration number</strong> on the label &mdash; usually a five-digit number after &ldquo;Registration No.&rdquo; That number means the exact formulation and its label directions were reviewed for Canadian use, and it makes the label legally binding: the directions on a Canadian can are not suggestions, they are the law of how the product may be applied.</p>
          <p>This matters for wasp sprays specifically because the most famous wasp sprays on the internet are American. Spectracide Wasp &amp; Hornet Killer &mdash; the one with the &ldquo;up to 27 foot&rdquo; jet claim that dominates US reviews &mdash; is registered with the US EPA, not the PMRA. So are US-labelled Hot Shot aerosols and the US formulation sold as Raid Wasp &amp; Hornet Killer 33, which is not the same registered product as the Canadian Raid can. Under the federal <em>Pest Control Products Act</em>, importing, selling, or using an unregistered pesticide in Canada is an offence. A can that crossed the border in a trunk, or shipped from a third-party marketplace seller who does not filter by country, is grey-market &mdash; and every product recommendation below is a Canadian-registered alternative that makes the grey-market can pointless anyway.</p>
          <p>One practical habit solves all of this: <strong>flip the can over and find the PCP number before you buy.</strong> Brand names migrate across the border; registration numbers do not.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the three picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="raid wasp hornet killer">Raid Wasp &amp; Hornet foam →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="wilson waspout wasp hornet foam">Wilson WaspOut foam →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="ortho home defense hornet wasp killer">Ortho wasp aerosol →</BuyLink>
          </div>

          <h2>Why Foam Wins for Most Canadian Wasp Nests</h2>
          <p>A wasp colony is not the dozen wasps you can see on the nest &mdash; it is several hundred to several thousand insects, a laying queen, comb full of brood, and a rotating shift of foragers who are out hunting when you attack. A spray only ends the problem if it handles all four, and this is exactly where format matters. A carpenter bee is the opposite problem &mdash; a solitary female in a single tunnel &mdash; and a jet aerosol aimed at the hole is the wrong tool; <Link href="/blog/how-to-get-rid-of-carpenter-bees-canada" className="text-brand-700 underline">treating a carpenter bee gallery</Link> calls for a dust that stays in the shaft.</p>
          <p><strong>Foaming aerosols</strong> like the Canadian Raid Wasp &amp; Hornet Bug Killer expand on contact into a wet blanket that does three jobs at once: it knocks down the wasps it touches, it physically plugs and coats the nest entrance so wasps inside struggle to boil out at you, and it leaves a treated barrier that returning foragers must crawl through for hours afterward. That third job is the quiet killer &mdash; the foragers who were out at spray time come home overnight, land on the entrance, and pick up a lethal dose. The active ingredients in Canadian-registered cans are typically fast-knockdown pyrethroids (the tetramethrin/d-phenothrin family), which are exactly what you want here: seconds-fast on contact, low toxicity to mammals at label rates, and short-lived in the environment.</p>
          <p><strong>Wilson&rsquo;s WaspOut foam</strong> takes the same idea further with a heavier expanding foam that can smother an entire exposed paper nest &mdash; the classic grey football under a deck rail or soffit &mdash; and that pushes usefully into holes: a ground-nest burrow, a gap behind siding, a fencepost cavity. If your nest is a visible envelope or an entrance hole rather than open comb, WaspOut&rsquo;s foam coverage is the most complete of the picks.</p>
          <p><strong>Straight-stream formulas</strong> trade the blanket for a narrow jet that throws farther, and here it matters a great deal which can you are actually holding. Ortho sells <em>Wasp B Gon MAX Wasp Killer Spray</em> in Canada &mdash; Health Canada PCP 33723, registered to Scotts Canada Ltd. &mdash; while the 20-foot <em>Ortho Home Defense Hornet &amp; Wasp Killer 7</em> that fills American search results is EPA-registered and appears nowhere in the Health Canada pesticide label database. Among cans you can legally buy here the longest published throw belongs to Raid Wasp &amp; Hornet Bug Killer 7, which SC Johnson rates at up to 5.7 m; Scotts Canada rates the Wasp B Gon MAX foam at 2 to 2.5 m (6 to 8 feet). The trade-off with any stream is real: it runs off vertical surfaces, so a jet-treated nest more often needs a second application the next evening.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="raid wasp hornet killer">Check Raid Wasp &amp; Hornet foam on Amazon.ca →</BuyLink>
          </div>

          <h2>How to Spray a Wasp Nest Safely (The Full Technique)</h2>
          <p>Wasp spray injuries are almost never about the chemical &mdash; they are about stings, falls, and panic. The technique below is how licensed technicians think about a nest, scaled to a consumer can:</p>
          <ul>
            <li><strong>Go at dusk, or just before sunrise.</strong> The entire colony &mdash; queen included &mdash; is home, temperatures are lower, and wasps are sluggish and reluctant to fly in the dark. A mid-day attack kills the wasps present and leaves hundreds of foragers to return to a furious nest.</li>
            <li><strong>Dress for it.</strong> Long sleeves, long pants, closed shoes, snug cuffs, eye protection. Skip the cologne and skip loose clothing wasps can get inside.</li>
            <li><strong>Plan the exit before the first press.</strong> Know exactly which direction you will walk &mdash; not run &mdash; and make sure the path is clear of hoses, toys, and patio furniture you will not see in low light.</li>
            <li><strong>Stand at distance, upwind, never underneath.</strong> Use the far end of your can&rsquo;s rated reach &mdash; Canadian manufacturers publish roughly 2 to 5.7 metres depending on the formula &mdash; positioned slightly to the side of the entrance&rsquo;s flight line. Directly below a treated nest is where dying, dropping, still-stinging wasps land.</li>
            <li><strong>Soak the entrance first, then the envelope.</strong> The entrance hole is where defenders emerge; plug it with foam in the first second of spraying, then coat the rest of the nest until it is visibly saturated.</li>
            <li><strong>Leave. Do not linger to admire the work.</strong> Walk your planned exit immediately and give the nest 24 hours.</li>
            <li><strong>Re-check the next evening.</strong> Steady traffic at the entrance means a second dusk treatment. Zero activity across a full warm day means you can knock the nest down and bag it &mdash; wearing gloves, because residue and the odd surviving wasp are both possible.</li>
          </ul>
          <p>Two hard rules sit on top of all technique. First, <strong>never treat a nest from a ladder at dusk</strong> &mdash; if you cannot hit it with both feet on the ground, it is a professional&rsquo;s nest. Second, <strong>never seal a wall-void entrance right after spraying.</strong> Yellowjackets trapped in a void will look for another way out, and the other way out is frequently through your drywall into a bedroom. Treat, wait days for zero activity, then seal.</p>

          <h2>Ground Nests, Wall Voids, and Other Special Cases</h2>
          <p>The hanging paper nest is the easy case. The two nests that generate most Canadian sting incidents need their own handling:</p>
          <p><strong>Ground-nesting yellowjackets</strong> &mdash; the colony living down a hole in the lawn or under a shed slab &mdash; are meaner, bigger than they look, and often have a second exit. Expanding foam into the burrow at dusk is the right DIY tool, but placement, timing, and knowing when to stop matter enough that we wrote a dedicated playbook: see our guide to <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">getting rid of ground wasps in Canada</Link>.</p>
          <p><strong>Wall and roof voids</strong> deserve real caution. If wasps are entering a gap in siding or soffit and you have seen even one wasp <em>inside</em> the house, the colony may already be near the interior finish &mdash; spraying the entrance can push survivors inward. That specific scenario, plus any nest you cannot reach from the ground and any household member with a sting allergy, is where a licensed structural exterminator earns the fee. Typical single-nest treatment pricing across Canada is broken down in our <Link href="/pest-control-cost-canada">pest control cost guide</Link>.</p>
          <p>And remember that killing this nest is not wasp-proofing the yard. Nests you destroy in July were founded by queens in May; next spring brings new queens. Reducing attractants and intercepting foragers is a separate job &mdash; our guides to the <Link href="/blog/best-wasp-trap">best wasp traps in Canada</Link> and the <Link href="/blog/best-yellow-jacket-trap-canada">best yellowjacket traps</Link> cover the trapping half, and the full-season strategy lives in <Link href="/blog/how-to-get-rid-of-wasps-canada">how to get rid of wasps in Canada</Link>.</p>
          <p>There is a third job no aerosol can does: protecting the space you actually sit in. A can ends a nest and a trap pulls foragers toward the fence line, but neither puts anything between a scavenging yellowjacket and the plate in front of you &mdash; mesh does, and because wasps are far larger than the midges screening is normally specified for, ordinary netting is enough. The low-commitment version is a pop-up screen house pitched over the table, compared by size and frame in our <Link href="/blog/best-screen-tent-canada">screen tent and screen house guide</Link>. If eating outside is a permanent fixture rather than a few August weekends, it is the zip-around mesh curtains and not the roof that keep insects out, which is exactly the distinction our <Link href="/blog/hardtop-vs-soft-top-mosquito-gazebo-canada">hardtop vs soft-top gazebo comparison</Link> makes before you spend the money on the wrong half of the structure.</p>

          <h2>Timing: Why July and August Nests Are a Different Animal</h2>
          <p>A wasp nest in late May is a golf ball with one queen and a handful of workers &mdash; a single foam treatment ends it in one evening with almost no risk. The same nest in mid-August is a football or bigger holding hundreds to thousands of workers with brood to defend, and late-season colonies get progressively more aggressive as natural food declines. The practical takeaways: treat nests as early in the season as you find them; expect a large August nest to need the full technique above and possibly a second application; and weigh the pro option more heavily as the season wears on. By late September in most of Canada, frost is weeks from solving the problem for free &mdash; a distant, high, out-of-the-way October nest can often simply be left to die, since abandoned nests are not reused next year.</p>

          <h2>What Not to Use</h2>
          <p>For completeness, the popular non-answers. <strong>Gasoline</strong> poured into ground nests contaminates soil, creates a fire risk, and is illegal pesticide use. <strong>Boiling water</strong> scalds the top of a burrow and enrages the surviving 90% of the colony. <strong>Dish-soap sprays</strong> kill the individual wasps they drench but leave no residual for returning foragers and force you within arm&rsquo;s reach of the nest. <strong>WD-40</strong> is a solvent myth with the same fatal flaws. Beyond being ineffective, applying any substance as a pesticide that is not registered for that use is itself contrary to the <em>Pest Control Products Act</em> &mdash; the same law that keeps the grey-market cans out. A registered foam can costs less than a pizza and does the job from metres away; there is no scenario where the improvised option is the smart one.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="wilson waspout wasp hornet foam">Check Wilson WaspOut foam on Amazon.ca →</BuyLink>
          </div>

          <h2>What Is the Best Spray to Kill Wasps?</h2>
          <p><strong>It depends on what you are actually killing.</strong> For a nest, a foaming aerosol that plugs the entrance and leaves residual behind is the right answer. For loose wasps working a patio, deck or pool, a fast-knockdown aerosol kills the ones it hits &mdash; but they keep arriving until you find and treat the nest they came from.</p>
          <p>That distinction is the one most buying guides skip, and it is why people feel a can &ldquo;did not work.&rdquo; A wasp aerosol has two completely different jobs. <strong>Colony work</strong> is a single application at dusk against a structure you can see, and it ends the problem. <strong>Forager work</strong> is spraying individual scavengers that fly in from a nest that might be four houses away &mdash; and no aerosol solves that, because you are killing a replenishing stream rather than a population. If you are emptying a can a week around a picnic table, you do not have a spray problem, you have an unlocated nest or a food-source problem.</p>
          <p>For forager pressure specifically, the levers that work are interception and exclusion rather than contact spray: bait traps hung at the property line to pull scavengers away from the seating area (our <Link href="/blog/best-wasp-trap">wasp trap comparison</Link> and <Link href="/blog/best-yellow-jacket-trap-canada">yellowjacket trap guide</Link> cover placement, which matters more than brand), lidded bins, covered drinks and cans, and mesh over the space you actually sit in. A contact aerosol is the wrong instrument for a yard-wide problem and the right one for a nest.</p>
          <p>One scenario deserves naming because it comes up constantly and is genuinely urgent: <strong>heavy wasp activity around a pool or play area with an allergic child in the household.</strong> That is not a shopping decision. The American Academy of Allergy, Asthma &amp; Immunology advises that anyone who has had a systemic reaction to an insect sting &mdash; hives away from the sting site, swelling of the face or throat, or any breathing difficulty &mdash; carry epinephrine and be evaluated by an allergist about venom immunotherapy. In that household, the nest gets located and removed by a licensed applicator, and nobody stands under it with an aerosol can.</p>

          <h2>What Do Professional Exterminators Use for Wasps?</h2>
          <p><strong>Not the consumer can.</strong> The professional kit is three classes the retail aisle does not stock: freeze aerosols for instant knockdown on exposed aerial nests, insecticidal dusts for wall voids and ground burrows, and residual liquid concentrates mixed and sprayed to stop queens rebuilding. Reach, residual and placement &mdash; not raw toxicity &mdash; are what separate them from a hardware-store can.</p>
          <p><strong>Freeze aerosols</strong> are the ones you see in technician videos. PT Wasp-Freeze II throws roughly 15 feet and drops the nest surface temperature hard enough that defenders fall rather than fly, which is the whole point: a foam can knocks wasps down over seconds, and seconds are long enough for a large colony to launch. Freeze products are also formulated with high dielectric strength, which is why they live on the truck &mdash; a great many nests sit on meter boxes, service masts and outdoor light fixtures, and a technician cannot pick which of those a job will involve.</p>
          <p><strong>Dusts</strong> are the class that most changes outcomes, and almost no consumer roundup covers them. Delta Dust (deltamethrin) is waterproof and rated for use in food-handling areas; Tempo Dust (cyfluthrin 1%) delivers contact kill plus up to about a year of residual. Both are puffed into a void, a burrow or a wall cavity with a bulb duster or a telescoping extension pole. The reason dust beats foam underground and inside a wall is mechanical: foam wets out, collapses and stops a few centimetres in, while dry particles drift through the cavity, coat the surfaces wasps must walk over, and stay lethal after the moisture is gone. One Canadian caveat: neither Delta Dust nor Tempo Dust appears in the Health Canada pesticide label database, so both are US-market products rather than commercial-class Canadian ones. If your nest is <em>inside</em> something, dust is what the professional reaches for &mdash; the format and its safe use are covered in our <Link href="/blog/wasp-dust-canada">wasp dust guide</Link>.</p>
          <p><strong>Residual concentrates</strong> &mdash; Suspend (deltamethrin), Demand CS (lambda-cyhalothrin, microencapsulated), Tempo (cyfluthrin), Stryker &mdash; are diluted into a pump or backpack sprayer and applied to eaves, soffits, fascia and rail undersides. This is the only product class that addresses <em>next</em> month rather than tonight, because a treated soffit is a surface a founding queen will not successfully build on.</p>
          <p className="not-prose text-sm font-semibold text-brand-800 mt-6 mb-2">The professional wasp kit, class by class</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm mb-6">
            <table className="min-w-[720px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Class</th>
                  <th className="px-4 py-3 text-left">Example products</th>
                  <th className="px-4 py-3 text-left">Named active</th>
                  <th className="px-4 py-3 text-left">What pros use it for</th>
                  <th className="px-4 py-3 text-left">Who can buy it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Freeze aerosol</td>
                  <td className="px-4 py-3 text-gray-700">PT Wasp-Freeze II, Wasp-X</td>
                  <td className="px-4 py-3 text-gray-700">Fast pyrethroids (prallethrin family) in a rapid-chill carrier</td>
                  <td className="px-4 py-3 text-gray-700">Exposed aerial nests; nests on meter boxes and fixtures (high dielectric strength)</td>
                  <td className="px-4 py-3 text-gray-700"><strong>US:</strong> public, via pro-supply retailers<br /><strong>Canada:</strong> not registered &mdash; no record in the Health Canada pesticide label database</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Insecticidal dust</td>
                  <td className="px-4 py-3 text-gray-700">Delta Dust, Tempo Dust</td>
                  <td className="px-4 py-3 text-gray-700">Deltamethrin; cyfluthrin 1%</td>
                  <td className="px-4 py-3 text-gray-700">Wall and roof voids, ground burrows, cracks &mdash; anywhere foam collapses too soon</td>
                  <td className="px-4 py-3 text-gray-700"><strong>US:</strong> public, via pro-supply retailers<br /><strong>Canada:</strong> neither brand registered &mdash; no record in the Health Canada pesticide label database</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Residual concentrate</td>
                  <td className="px-4 py-3 text-gray-700">Suspend, Demand CS, Tempo, Stryker</td>
                  <td className="px-4 py-3 text-gray-700">Deltamethrin; lambda-cyhalothrin; cyfluthrin</td>
                  <td className="px-4 py-3 text-gray-700">Eaves, soffits and rail undersides &mdash; stopping queens rebuilding next season</td>
                  <td className="px-4 py-3 text-gray-700"><strong>US:</strong> public, via pro-supply retailers<br /><strong>Canada:</strong> commercial class &mdash; e.g. Demand CS, PCP 27428</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Consumer aerosol<br /><span className="font-normal text-xs text-gray-500">for comparison</span></td>
                  <td className="px-4 py-3 text-gray-700">Foam and long-jet cans (the picks above)</td>
                  <td className="px-4 py-3 text-gray-700">Tetramethrin, d-phenothrin (sumithrin), prallethrin, cypermethrin</td>
                  <td className="px-4 py-3 text-gray-700">Reachable aerial nests and treatable entrance holes &mdash; the great majority of household nests</td>
                  <td className="px-4 py-3 text-gray-700"><strong>US &amp; Canada:</strong> anyone, off the shelf</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>The honest conclusion for a homeowner: for a reachable nest with a visible entrance, the consumer foam does the same job the professional freeze can does, just a few seconds slower. The professional advantage is not chemistry, it is the dust, the extension pole, and the willingness to work at height &mdash; which is exactly the boundary where you should stop and call one.</p>

          <h2>How to Permanently Get Rid of Wasps</h2>
          <p><strong>There is no permanent wasp spray.</strong> The nest you kill in August was founded by a queen in May, and next May brings new ones. Permanence comes from four things done in order: intercept founding queens in spring, seal entry points after winter die-off, remove the food that draws scavengers, and put a residual on the surfaces queens prefer to build on.</p>
          <p><strong>1. Intercept the queens, in April and May.</strong> A founding nest is the size of a golf ball and holds exactly one insect &mdash; the overwintered queen, who is doing all the building and foraging herself. Killing that nest costs a two-second squirt and no risk, and it prevents the thousand-worker colony it becomes. Walk your eaves, soffits, deck rail undersides, shed corners, playset joints, grill covers and patio-umbrella folds every week or two in spring. This single habit removes more late-summer wasp problems than any product decision.</p>
          <p><strong>2. Seal after die-off, never during.</strong> Every gap in soffit, siding, fascia, brick weep or vent screen is a future void nest. Sealing them is the durable fix &mdash; but the timing is not optional. Seal in <em>late winter or very early spring</em>, once the colony is dead and before new queens are prospecting. Sealing a live nest in is the classic disaster: trapped yellowjackets chew laterally and emerge through the drywall on the inside of the house. Also worth knowing so you do not waste effort: abandoned nests are not reused the following year, so removing an old grey football is purely cosmetic. The cavity is what gets reused, not the paper.</p>
          <p><strong>3. Take away the late-season food.</strong> From August onward yellowjackets stop hunting insects and start scavenging protein and sugar, which is why they suddenly want your food. Lidded bins rinsed occasionally, fallen fruit picked up, pet food indoors, recycling rinsed, cans and glasses covered outdoors, and compost turned under rather than left exposed. This is unglamorous and it works better than anything you can buy.</p>
          <p><strong>4. Residual on the build surfaces.</strong> The only genuine multi-week lever is a residual applied to eaves, soffits and rail undersides in spring, so a prospecting queen cannot establish. In the United States homeowners can buy the concentrates above from pest-control supply retailers; in Canada that class is largely restricted to certified applicators, so the practical homeowner version is a domestic-class residual or an annual spring service visit.</p>
          <p>One regional exception matters: in mild-winter parts of the southern United States, yellowjacket colonies can survive the winter instead of dying off, producing perennial multi-year nests. Where that happens, &ldquo;wait for winter, then seal&rdquo; fails, and the sequence above has to start with professional removal rather than a calendar.</p>

          <h2>Why Does WD-40 Kill Wasps?</h2>
          <p><strong>Because it is a petroleum distillate, not because it is an insecticide.</strong> The oil film coats and clogs the spiracles &mdash; the paired breathing openings along an insect&rsquo;s abdomen &mdash; and strips the waxy cuticle layer that holds water in. The wasp dies of suffocation and desiccation over minutes, rather than the seconds-fast neurotoxic knockdown a registered pyrethroid produces.</p>
          <p>So the folk claim is mechanically true, which is why it will not die on the internet. It is still the wrong tool, for four specific reasons rather than a general sneer:</p>
          <ul>
            <li><strong>No residual.</strong> The foragers out hunting when you spray come home overnight and land on an untreated entrance. An oil film is not an insecticidal deposit; it kills only what it wets.</li>
            <li><strong>It forces you close.</strong> A lubricant aerosol has a short, low-volume throw. Delivering enough of it to matter means standing within a couple of metres of a defending colony, which is the single most dangerous variable in this whole subject.</li>
            <li><strong>It is flammable.</strong> People aim it at nests tucked beside light fixtures, junction boxes and grills. That is a fire and an electrical hazard at the same time, and it carries no dielectric rating.</li>
            <li><strong>It is not legal pesticide use.</strong> Applying any substance as a pesticide when it is not registered for that use violates FIFRA in the United States, exactly as it violates the <em>Pest Control Products Act</em> in Canada. This is the same rule in both countries, and it is the same rule that keeps unregistered cans off Canadian shelves.</li>
          </ul>
          <p>The dish-soap recipe that circulates as short video works by the same physics and fails the same way: surfactant lets water wet through the cuticle, drowning the individual wasps it soaks, while doing nothing about the brood, the queen or the foragers. A tablespoon of dish soap in a spray bottle is a fine tool for one wasp on a windowsill. It is not a treatment for a colony, and a registered can costs less than the ingredients.</p>

          <h2>Wasp Spray Rules in the United States: What the EPA Number Means</h2>
          <p>Everything above about PCP numbers has an exact American counterpart, and readers on either side of the border should know both &mdash; because the products, the shelves and the law all change at the line.</p>
          <p><strong>In the United States</strong>, pesticides are regulated by the Environmental Protection Agency under the Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA). Every legal can carries an <strong>EPA Registration Number</strong> on the label &mdash; a two- or three-part number such as 1021-1613 or 1021-1852, where the first block identifies the registrant and the second the specific product. <a href="https://www.ecfr.gov/current/title-40/chapter-I/subchapter-E/part-156" rel="nofollow noopener noreferrer" target="_blank">40 CFR Part 156</a> even governs how it must appear: in type of similar size and style to the surrounding print, running parallel to it, so it cannot be buried. That number means the EPA reviewed and approved the exact formulation and the exact label directions, and the directions are legally binding &mdash; the label is the law, precisely as it is in Canada.</p>
          <p><strong>States add a second layer.</strong> Individual states may impose restrictions beyond the federal label &mdash; limiting use at sensitive sites, or barring a below-label application rate that FIFRA section 2(ee) would otherwise permit &mdash; but a state may not authorise anything the federal label prohibits. &ldquo;Check your state&rdquo; is real advice in the US in a way it is not in Canada, where the PMRA registration is national.</p>
          <p><strong>So Spectracide, Hot Shot and the US Raid line are entirely legal products &mdash; in the United States.</strong> They are EPA-registered, sold at Home Depot, Lowe&rsquo;s, Walmart, Ace Hardware and grocery chains, and an American reader should buy them without hesitation. The restriction described earlier on this page is directional, not a judgement about quality: an EPA can is not registered for Canada, and a PMRA can is equally not registered for the United States. Both statements are true at once, and they are the same rule seen from two driveways.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[640px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">&nbsp;</th>
                  <th className="px-4 py-3 text-left">United States</th>
                  <th className="px-4 py-3 text-left">Canada</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">Regulator</td>
                  <td className="px-4 py-2 text-gray-700">Environmental Protection Agency (EPA)</td>
                  <td className="px-4 py-2 text-gray-700">Health Canada &mdash; Pest Management Regulatory Agency (PMRA)</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">Statute</td>
                  <td className="px-4 py-2 text-gray-700">FIFRA</td>
                  <td className="px-4 py-2 text-gray-700">Pest Control Products Act</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">Number on the can</td>
                  <td className="px-4 py-2 text-gray-700">&ldquo;EPA Reg. No.&rdquo; &mdash; two or three parts (e.g. 1021-1613)</td>
                  <td className="px-4 py-2 text-gray-700">&ldquo;PCP No.&rdquo; / &ldquo;Registration No.&rdquo; &mdash; usually 5 digits</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">Sub-national layer</td>
                  <td className="px-4 py-2 text-gray-700">States may restrict further, never contradict the federal label</td>
                  <td className="px-4 py-2 text-gray-700">Provinces classify and licence; registration itself is national</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">Is the label binding?</td>
                  <td className="px-4 py-2 text-gray-700">Yes &mdash; the label is the law</td>
                  <td className="px-4 py-2 text-gray-700">Yes &mdash; the label is the law</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">Is the other country&rsquo;s can legal?</td>
                  <td className="px-4 py-2 text-gray-700">No &mdash; a PMRA-only can is unregistered in the US</td>
                  <td className="px-4 py-2 text-gray-700">No &mdash; an EPA-only can is unregistered in Canada</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Wasp, Hornet or Yellowjacket? Identify It Before You Buy a Can</h2>
          <p>Format advice is worthless if the nest is not the kind you think it is, and one very common North American nest breaks the central rule of this guide. Here is what you are actually looking at.</p>
          <p><strong>Polistes paper wasps</strong> build an <em>open umbrella comb</em> &mdash; bare hexagonal cells on a short stalk, no paper envelope, no entrance hole. That last point matters enormously: the &ldquo;plug the entrance with foam&rdquo; technique that defines this page has nothing to plug on a Polistes comb. Instead you saturate the comb face and the adults sitting on it directly, from the underside upward, at dusk. The good news is that these colonies are small &mdash; often under fifty insects &mdash; and comparatively slow to defend, so a single thorough treatment ends it and format matters far less than on an enclosed nest.</p>
          <p><strong>Yellowjackets (Vespula)</strong> are the enclosed-nest, single-entrance, hundreds-to-thousands species this guide is otherwise built around, and the scavengers that show up at food. In the eastern United States and eastern Canada the common species are the German yellowjacket (<em>V. germanica</em>) and the eastern yellowjacket (<em>V. maculifrons</em>); in the west, the western yellowjacket (<em>V. pensylvanica</em>). Practically they behave the same: defended entrance, aggressive from August, ground or void nesting.</p>
          <p><strong>Bald-faced hornets</strong> (<em>Dolichovespula maculata</em>) build the grey aerial football people photograph and post &mdash; black and white, high in a tree or under a soffit, exposed. Despite the name they are genetically yellowjackets, not true hornets. They are also the most defensive nest in the average yard and the one most likely to be out of safe ground reach, which makes them the classic call-a-professional nest.</p>
          <p><strong>Cicada killers</strong> are the enormous solitary wasps that alarm American homeowners every July. Females dig burrows in bare sandy soil or lawn edges, and while they look like something out of a monster film, males cannot sting at all and females almost never do unless handled. <strong>Do not spray them.</strong> They are solitary, they do not defend a colony, and they disappear on their own in weeks.</p>
          <p><strong>Mud daubers</strong> build the small tubular mud pipes on walls and under eaves. They are solitary, essentially non-aggressive, and they hunt spiders &mdash; a beneficial insect doing free pest control. Scrape the tubes off if you dislike them; do not empty a can at them.</p>
          <p><strong>The northern giant hornet</strong> (<em>Vespa mandarinia</em>), the &ldquo;murder hornet&rdquo; of 2020 headlines, was declared <strong>eradicated from Washington State and the United States</strong> by the Washington State Department of Agriculture and the USDA on <strong>18 December 2024</strong>, after three years with no confirmed detections. It was found in Whatcom County in 2019 and four nests were destroyed in 2020&ndash;21. If you are staring at a very large hornet in a US or Canadian yard, it is a European hornet, a bald-faced hornet, or a cicada killer.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[720px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What you are looking at</th>
                  <th className="px-4 py-3 text-left">The nest</th>
                  <th className="px-4 py-3 text-left">Where</th>
                  <th className="px-4 py-3 text-left">Defensiveness</th>
                  <th className="px-4 py-3 text-left">How to treat it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Paper wasp (Polistes)</td>
                  <td className="px-4 py-3 text-gray-700">Open umbrella comb, no envelope, <strong>no entrance hole</strong></td>
                  <td className="px-4 py-3 text-gray-700">Eaves, rails, playsets, grill covers</td>
                  <td className="px-4 py-3 text-gray-700">Low to moderate</td>
                  <td className="px-4 py-3 text-gray-700">Saturate the comb face and stalk directly at dusk &mdash; nothing to plug</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Yellowjacket (Vespula)</td>
                  <td className="px-4 py-3 text-gray-700">Enclosed envelope, single defended entrance</td>
                  <td className="px-4 py-3 text-gray-700">Ground burrows, wall and roof voids</td>
                  <td className="px-4 py-3 text-gray-700">High, peaking Aug&ndash;Sep</td>
                  <td className="px-4 py-3 text-gray-700">Foam the entrance at dusk; dust for deep voids; never seal early</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bald-faced hornet</td>
                  <td className="px-4 py-3 text-gray-700">Grey aerial football, exposed</td>
                  <td className="px-4 py-3 text-gray-700">Trees, high soffits</td>
                  <td className="px-4 py-3 text-gray-700">Very high</td>
                  <td className="px-4 py-3 text-gray-700">Long jet from the ground if genuinely reachable &mdash; otherwise a professional</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Cicada killer</td>
                  <td className="px-4 py-3 text-gray-700">Solitary burrow, soil tailings at the hole</td>
                  <td className="px-4 py-3 text-gray-700">Bare sandy soil, lawn edges, US summers</td>
                  <td className="px-4 py-3 text-gray-700">Effectively none</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Do not spray.</strong> Solitary and short-lived; thicken the turf instead</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Mud dauber</td>
                  <td className="px-4 py-3 text-gray-700">Small mud tubes stuck to a wall</td>
                  <td className="px-4 py-3 text-gray-700">Sheltered walls, eaves, garages</td>
                  <td className="px-4 py-3 text-gray-700">Effectively none</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Do not spray.</strong> Beneficial spider hunter &mdash; scrape the tubes if unwanted</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>When Wasps Peak: Regional Timing Across North America</h2>
          <p>The seasonal advice earlier on this page is written for Canada, where frost reliably ends the problem. Below the northern tier that assumption breaks, so here is the same calendar for the rest of the continent.</p>
          <p>The trigger everywhere is soil temperature, not the date: overwintered queens emerge when soil warms to roughly <strong>50&deg;F (10&deg;C)</strong>. That is late March to April in the Mid-Atlantic, with the first workers on the wing by May, colonies expanding through June, and peak size from July into September. Aggression peaks in <strong>August and September</strong> continent-wide, because that is when colony size is at maximum and the insect prey feeding the larvae is collapsing &mdash; which is also when foragers switch to scavenging your food.</p>
          <p><strong>In Canada and the northern United States</strong>, the first hard frosts in October end it. Everything but the new queens dies, nests are abandoned, and they are not reoccupied the following season.</p>
          <p><strong>Across the southern United States</strong>, wasps are active from March into November. Yellowjackets commonly stay on the wing from September well into early December. In south Florida some Polistes nests persist year-round with no true die-off, and in mild winters southern yellowjacket colonies can survive to become <strong>perennial multi-year nests</strong> &mdash; the enormous ones that make regional news, and the reason &ldquo;just wait for winter&rdquo; is bad advice on the Gulf Coast.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[640px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Region</th>
                  <th className="px-4 py-3 text-left">Queens emerge</th>
                  <th className="px-4 py-3 text-left">Peak / most aggressive</th>
                  <th className="px-4 py-3 text-left">Season ends</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Canada &amp; northern US</td>
                  <td className="px-4 py-3 text-gray-700">Late April &ndash; May</td>
                  <td className="px-4 py-3 text-gray-700">July &ndash; September</td>
                  <td className="px-4 py-3 text-gray-700">First hard frosts, October</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Mid-Atlantic &amp; Midwest</td>
                  <td className="px-4 py-3 text-gray-700">Late March &ndash; April (soil ~50&deg;F)</td>
                  <td className="px-4 py-3 text-gray-700">July &ndash; September</td>
                  <td className="px-4 py-3 text-gray-700">Late October &ndash; November</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Southern US</td>
                  <td className="px-4 py-3 text-gray-700">March</td>
                  <td className="px-4 py-3 text-gray-700">August &ndash; September</td>
                  <td className="px-4 py-3 text-gray-700">November; yellowjackets into early December</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">South Florida &amp; Gulf Coast</td>
                  <td className="px-4 py-3 text-gray-700">No true dormancy in some years</td>
                  <td className="px-4 py-3 text-gray-700">Summer, but activity is year-round</td>
                  <td className="px-4 py-3 text-gray-700">Often never &mdash; perennial multi-year nests possible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Every Wasp Spray Format, With the Actives Named</h2>
          <p>The foam-versus-jet split earlier covers the two formats on a Canadian consumer shelf. Across North America there are six, and knowing which one you need is more useful than knowing which brand. Actives are the pyrethroid family in almost every case &mdash; fast on contact, low mammalian toxicity at label rates, short-lived outdoors.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[720px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Format</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Typical named actives</th>
                  <th className="px-4 py-3 text-left">Printed reach</th>
                  <th className="px-4 py-3 text-left">Use it for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Foaming aerosol</td>
                  <td className="px-4 py-3 text-gray-700">Expands over nest and entrance; residual on the entry path</td>
                  <td className="px-4 py-3 text-gray-700">Tetramethrin, d-phenothrin (sumithrin), prallethrin, cypermethrin</td>
                  <td className="px-4 py-3 text-gray-700">~15&ndash;22 ft</td>
                  <td className="px-4 py-3 text-gray-700">Most enclosed nests; entrance holes</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Long-jet aerosol</td>
                  <td className="px-4 py-3 text-gray-700">Narrow coherent stream for distance; thinner residual</td>
                  <td className="px-4 py-3 text-gray-700">Tetramethrin + sumithrin; lambda-cyhalothrin</td>
                  <td className="px-4 py-3 text-gray-700">~20&ndash;27 ft</td>
                  <td className="px-4 py-3 text-gray-700">High soffits, exposed aerial nests</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Freeze aerosol</td>
                  <td className="px-4 py-3 text-gray-700">Rapid chill drops defenders instantly; high dielectric strength</td>
                  <td className="px-4 py-3 text-gray-700">Prallethrin family in a chill carrier</td>
                  <td className="px-4 py-3 text-gray-700">~15 ft</td>
                  <td className="px-4 py-3 text-gray-700">Exposed nests, nests on electrical equipment</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Insecticidal dust</td>
                  <td className="px-4 py-3 text-gray-700">Dry particles travel through cavities and persist after moisture</td>
                  <td className="px-4 py-3 text-gray-700">Deltamethrin; cyfluthrin 1%</td>
                  <td className="px-4 py-3 text-gray-700">Contact application &mdash; no throw</td>
                  <td className="px-4 py-3 text-gray-700">Wall voids, ground burrows, cracks</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Liquid concentrate</td>
                  <td className="px-4 py-3 text-gray-700">Diluted and sprayed; weeks of residual on treated surfaces</td>
                  <td className="px-4 py-3 text-gray-700">Lambda-cyhalothrin, deltamethrin, cyfluthrin</td>
                  <td className="px-4 py-3 text-gray-700">Sprayer-dependent</td>
                  <td className="px-4 py-3 text-gray-700">Preventive eave and soffit treatment</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Botanical</td>
                  <td className="px-4 py-3 text-gray-700">Plant-oil contact kill; minimal residual, low odour concerns</td>
                  <td className="px-4 py-3 text-gray-700">2-phenethyl propionate, peppermint oil</td>
                  <td className="px-4 py-3 text-gray-700">~18 ft</td>
                  <td className="px-4 py-3 text-gray-700">Buyers avoiding synthetics; small accessible nests</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>The pattern worth internalising: <strong>the format is chosen by where the nest is, not by how big the wasps are.</strong> Exposed and reachable, use foam. Exposed and high, use a jet or freeze. Inside a wall or underground, use dust. Trying to prevent next year, use a concentrate. A jet aimed into a void wets the first few centimetres and accomplishes very little, which is the most common way a competent homeowner still fails.</p>

          <h2>How Far Wasp Spray Actually Reaches</h2>
          <p>The distance printed on the can is the number that sells it, and it is measured in conditions you will never reproduce: a full, warm, freshly-shaken can, fired horizontally in still air. Against a real nest, on a real evening, plan on <strong>usable reach landing well short of the printed claim &mdash; treat roughly 30 to 40 percent short as a working margin</strong> rather than a tested figure.</p>
          <p>Three things eat the difference. Aerosol pressure falls with temperature, so a can that sat in an unheated garage before a cool September dusk sprays visibly shorter. Any breeze breaks up the far end of a jet, which is exactly the part you were relying on. And a stream only stays coherent for part of its flight &mdash; past that point it becomes drift that will not deliver a lethal dose to a nest surface. Plan on the realistic column below, not the label.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Printed reach claim</th>
                  <th className="px-4 py-3 text-left">Realistic reach (30&ndash;40% less)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Spectracide Wasp &amp; Hornet Killer <span className="font-normal text-xs text-gray-500">(US)</span></td>
                  <td className="px-4 py-3 text-gray-700">27 ft</td>
                  <td className="px-4 py-3 text-gray-700">~16&ndash;19 ft</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Hot Shot Wasp &amp; Hornet Killer <span className="font-normal text-xs text-gray-500">(US)</span></td>
                  <td className="px-4 py-3 text-gray-700">27 ft</td>
                  <td className="px-4 py-3 text-gray-700">~16&ndash;19 ft</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Raid Wasp &amp; Hornet Killer 33 <span className="font-normal text-xs text-gray-500">(US)</span></td>
                  <td className="px-4 py-3 text-gray-700">22 ft</td>
                  <td className="px-4 py-3 text-gray-700">~13&ndash;15 ft</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Raid Wasp &amp; Hornet Bug Killer 7 <span className="font-normal text-xs text-gray-500">(Canada, PCP 29776)</span></td>
                  <td className="px-4 py-3 text-gray-700">5.7 m (~19 ft)</td>
                  <td className="px-4 py-3 text-gray-700">~11&ndash;13 ft</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ortho Home Defense Hornet &amp; Wasp Killer 7 <span className="font-normal text-xs text-gray-500">(US &mdash; not registered in Canada)</span></td>
                  <td className="px-4 py-3 text-gray-700">20 ft</td>
                  <td className="px-4 py-3 text-gray-700">~12&ndash;14 ft</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ortho Wasp B Gon MAX foam <span className="font-normal text-xs text-gray-500">(Canada, PCP 33724)</span></td>
                  <td className="px-4 py-3 text-gray-700">2&ndash;2.5 m (6&ndash;8 ft)</td>
                  <td className="px-4 py-3 text-gray-700">~4&ndash;5 ft</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">EcoSmart <span className="font-normal text-xs text-gray-500">(botanical)</span></td>
                  <td className="px-4 py-3 text-gray-700">18 ft</td>
                  <td className="px-4 py-3 text-gray-700">~11&ndash;13 ft</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">PT Wasp-Freeze II <span className="font-normal text-xs text-gray-500">(professional)</span></td>
                  <td className="px-4 py-3 text-gray-700">~15 ft</td>
                  <td className="px-4 py-3 text-gray-700">~9&ndash;11 ft</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>This reframes the 27-foot argument on ground that works in both countries. Forget jurisdiction for a moment: a 27-foot can is a 16-to-19-foot tool, and a typical two-storey soffit is 18 to 22 feet up from where you would be standing. The number that sold you the can does not actually put you outside the nest&rsquo;s response radius. Buy for <em>measured</em> reach, and keep the rule that outranks every product decision &mdash; if you cannot hit it from the ground with distance to spare, it is a professional&rsquo;s nest.</p>
          <p><strong>The dielectric footnote nobody publishes.</strong> A surprising share of nests sit on or beside electrical equipment &mdash; meter boxes, service masts, floodlights, junction boxes. Some wasp aerosols are formulated to be electrically non-conducting and state a rating on the label: SC Johnson rates the Canadian Raid Wasp &amp; Hornet can electrically non-conducting up to 41,000 volts (the US Raid Wasp &amp; Hornet Killer 33 label states 32,500 volts), and BASF states PT Wasp-Freeze II shows no breakdown up to 49,300 volts, which is why it is a truck staple. A can with no dielectric statement should never be aimed at energised equipment. Kill the circuit at the breaker where you can, never spray into an open panel or meter enclosure, and hand anything touching the service drop to an electrician.</p>

          <h2>Where to Buy Wasp Spray in the United States and Canada</h2>
          <p><strong>In the United States</strong>, consumer wasp aerosols are stocked by Home Depot, Lowe&rsquo;s, Walmart, Ace Hardware, Tractor Supply and most grocery chains, typically in the range of about $5 to $12 a can with twin-packs cheaper per unit &mdash; genuinely trivial money against the cost of a service call. The more useful American advantage is the <strong>professional channel</strong>, which sells to the public: DoMyOwn, e-commerce pest-control supply houses and regional walk-in supply counters carry the freeze aerosols, dusts and concentrates described above. Expect a freeze aerosol in the mid-teens to mid-twenties, a bottle of dust in the twenties to forties that will outlast several seasons, and a concentrate in the forties to nineties that makes many gallons of finished spray. For a homeowner with a recurring void or ground-nest problem, one bottle of dust and a bulb duster is the single highest-value purchase in this entire category.</p>
          <p><strong>In Canada</strong>, the shelves are Canadian Tire, Home Depot Canada, Rona, Home Hardware and independent hardware stores, at roughly $8 to $18 a can. The professional tier is the real difference, and it is a harder line than most guides admit: PT Wasp-Freeze, Delta Dust and Tempo Dust return no records at all in the Health Canada pesticide label database, so those specific US products are not legal to sell or use in Canada, while the Canadian equivalents that do exist &mdash; Demand CS (PCP 27428), Tempo 20 WP (PCP 25673) &mdash; are commercial-class and sold only to certified applicators. That is why the Canadian homeowner playbook leans harder on foam and on hiring out the void and height work. If you are comparing the broader category rather than nest sprays specifically, our <Link href="/blog/best-wasp-killer-canada">wasp killer comparison</Link> and <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link> cover the adjacent formats.</p>
          <p>One buying note that applies in both countries and saves a genuinely bad evening: <strong>buy two cans, not one.</strong> Running out mid-application on a large nest is the situation that produces stings, because the reflex is to move closer rather than to walk away. A spare can costs less than a takeaway coffee and removes that decision entirely.</p>

          <div className="not-prose my-8 rounded-xl border border-navy-100 bg-brand-50 p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">How we research these picks</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              We do not run a laboratory and we do not claim bench testing we have not done. What sits behind this guide is label work &mdash; PMRA and EPA registration records, published product labels, and manufacturer technical sheets &mdash; read against the application technique a licensed operator uses on any exterior structure: dusk timing, standoff distance, entrance-first placement, and knowing when a job stops being a can and starts being a ladder.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              We are also explicit about the limit of our own expertise. BuzzSkito treats mosquitoes and ticks; we do not sell wasp nest removal. That is why this page tells you to call a licensed applicator for high nests, wall voids and sting allergies instead of routing you to a service we do not offer &mdash; and why the professional-tier section names the products technicians actually carry rather than steering you back to a shelf can.
            </p>
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

          <h2>Related Wasp Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps in Canada &mdash; Full Playbook</Link></li>
            <li><Link href="/blog/best-wasp-trap">Best Wasp Trap Canada &mdash; Intercept the Foragers</Link></li>
            <li><Link href="/blog/best-yellow-jacket-trap-canada">Best Yellowjacket Trap Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-ground-wasps-canada">How to Get Rid of Ground Wasps in Canada</Link></li>
            <li><Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY Trap Review &mdash; Canada</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost in Canada &mdash; What a Wasp Nest Treatment Runs</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="wasps and hornets" />
      </article>
    </>
  )
}
