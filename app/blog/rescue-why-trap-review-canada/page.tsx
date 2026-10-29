import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'

const SLUG = 'rescue-why-trap-review-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-10-28'
const TITLE = 'RESCUE! WHY Trap Review Canada 2026 — Does the 2-Chamber Wasp Trap Work?'
// TITLE NOTE (Oct 28, 2026): was 'RESCUE! WHY Trap Canada 2026: Honest Review'; top queries, Jul 28-Oct 25 (all countries): rescue why trap 43 at 8.2 (1 click), why rescue trap 6 at 8.2 (1), whytrap 2 at 8.5 (1). Not targeted: wasp trap canadian tire 693 at 6.7 (5 clicks), bee trap(s) canadian tire 87 + 85 (retailer-named, ops rule 8); best wasp trap searches stay with /blog/best-wasp-trap.
const META_TITLE = 'RESCUE! WHY Trap Review Canada: Does It Work?'

const FAQS = [
  {
    question: 'Is the RESCUE! WHY Trap worth it in Canada?',
    answer: 'Yes, for most Canadian yards with a general wasp problem. The WHY Trap is the only mainstream reusable trap engineered to catch all three groups at once — paper Wasps, Hornets (including bald-faced), and Yellowjackets — thanks to its two-chamber design with separate attractants for each group. It is reusable season after season, uses scent lures with no insecticide or killing agent, and catches queens in spring before they found colonies. The honest catch: the attractant is a recurring cost on a roughly 2-week replacement cadence, and like every trap it intercepts foraging wasps without killing the colony they came from.',
  },
  {
    question: 'How does the RESCUE! WHY Trap actually work?',
    answer: 'It uses two chambers and three lures. RESCUE!’s product page says the top chamber is baited with two lures, a solid in a vial and a liquid mixed with water, and is entered through openings near the top — this targets paper wasps and hornets, which forage higher. The bottom chamber is baited with a liquid lure poured onto a cotton pad, the same lure as RESCUE!’s reusable yellowjacket trap, and is entered from underneath — this targets yellowjackets, which typically approach low. Insects follow the scent in, cannot navigate back out through the cone-style entries, and drown or die of dehydration. There is no zapper, no glue, and no insecticide anywhere in the trap.',
  },
  {
    question: 'What does WHY stand for, and what does the trap catch?',
    answer: 'WHY stands for Wasps, Hornets, and Yellowjackets — the three groups the two chambers are engineered to attract. The manufacturer, Sterling International, states the attractant lures 19 different species across those groups, including common paper wasps, bald-faced hornets, European hornets, and the aggressive German and common yellowjackets that dominate late-summer patios in Ontario. It is specifically designed NOT to attract honey bees, because the attractant is built around scent compounds wasps hunt and bees ignore.',
  },
  {
    question: 'How often do you replace the WHY Trap attractant?',
    answer: 'Roughly every 2 weeks in season. The attractant kit that ships with the trap covers the first two weeks; after that you buy refill kits, each containing the top-chamber cartridge and the bottom-chamber liquid. In hot mid-summer weather the liquid chamber can also evaporate faster, so topping up with water between changes helps. Budget for a recurring refill purchase every couple of weeks from roughly May through September if you run the trap all season — that recurring cost is the biggest thing to understand before buying, because the trap itself is a one-time purchase but the attractant is a subscription in all but name.',
  },
  {
    question: 'Does the RESCUE! WHY Trap kill the wasp colony or nest?',
    answer: 'No — and no lure trap does. The WHY Trap intercepts individual foraging wasps and spring queens; it does not touch the nest itself. A mature yellowjacket colony can hold thousands of workers, and a trap catching dozens per week is skimming the surface, not draining the pool. If you have located an active nest on your property, trapping alone will not solve it — you need a nest-directed treatment (a wasp spray whose label shows a PCP number and lists your nest type, or a professional). Where traps shine is intercepting queens in spring before nests exist, and reducing foraging pressure on your patio when the nest is somewhere you cannot find or reach.',
  },
  {
    question: 'Where should I hang the WHY Trap?',
    answer: 'Away from where people sit — this is the number-one placement mistake. The trap works by attracting wasps to itself, so hanging it on the patio umbrella pulls wasps through your seating area. Place it 6 metres (20 feet) or more from decks, play areas, and doorways, ideally between where wasps are coming from and where you gather, hung 1 to 2 metres off the ground from a tree branch, fence line, or shepherd hook in a sunny spot. For early-spring queen trapping, hang it near last year’s known nest sites, wood piles, and south-facing fence lines where queens first patrol.',
  },
  {
    question: 'Will the WHY Trap attract more wasps to my yard?',
    answer: 'It attracts wasps to the trap, not to your yard in general — the plume of attractant scent works over a short range and pulls in wasps that are already foraging nearby. The practical answer is that placement decides everything: positioned 6+ metres from your seating area, it diverts existing traffic away from you and into the trap. Positioned on the deck rail beside the burgers, it concentrates wasp traffic exactly where you do not want it. Reviewers who call lure traps a scam almost always describe hanging the trap where they sit; reviewers who love them describe hanging them at the property line.',
  },
  {
    question: 'Does the RESCUE! WHY Trap catch honey bees?',
    answer: 'It is designed not to. The attractant is formulated from scent compounds that appeal to predatory and scavenging wasps — not the floral cues honey bees follow — and Sterling International markets the WHY attractant as formulated not to attract honey bees. Real-world reports back this up: bycatch of honey bees is rare when the trap is used with the official attractant. If you swap in homemade bait like sugar water or fruit juice, that no-bees claim goes out the window, because sugar baits absolutely do attract bees. Stick to the official refills if pollinators matter to you.',
  },
  {
    question: 'When should I put the WHY Trap out in Canada?',
    answer: 'Earlier than you think — late April to mid-May in southern Ontario, as soon as daytime highs reliably clear about 10°C. Every yellowjacket and hornet colony you battle in August was founded by a single overwintered queen in spring. Catching one queen in May removes an entire potential nest of thousands of workers from your summer. Run the trap spring through to the first hard frosts of October; late-season trapping also matters because that is when yellowjacket colonies peak in numbers and switch to scavenging sugar around people.',
  },
  {
    question: 'RESCUE! WHY Trap vs TrapStik — which should I buy?',
    answer: 'They solve different problems. The WHY Trap is a refillable lure trap: broader species coverage (wasps, hornets, and yellowjackets), reusable for years, but with a recurring attractant cost every couple of weeks. The TrapStik is a visual-attraction glue trap: no refills ever, excellent against paper wasps around eaves and porches, but the sticky surface can catch non-target insects and occasionally small birds without a bird guard, and the dangling dead insects are on permanent display. For all-round yard coverage and yellowjackets, buy the WHY Trap; for a set-and-forget paper wasp problem around a porch, the TrapStik is the simpler tool.',
  },
  {
    question: 'Can I make my own attractant refill for the WHY Trap?',
    answer: 'People do — sugar water, fruit juice, jam, or a scrap of lunch meat in the bottom chamber — and it will catch some yellowjackets, especially in late summer when colonies switch to scavenging. But you lose three things: the top-chamber chemistry that pulls in paper wasps and hornets (sugar alone barely interests them), the early-season effectiveness when wasps are hunting protein and specific scent cues rather than sugar, and the official formulation’s low appeal to honey bees, since sugar baits attract them. A reasonable compromise many Canadian users land on: official refills in spring and early summer, DIY sugar bait in the bottom chamber for the August-September scavenging peak.',
  },
  {
    question: 'Where can I buy the RESCUE! WHY Trap in Canada?',
    answer: 'The WHY Trap and its attractant refill kits are widely stocked in Canada — Canadian Tire, Home Depot Canada, Lowe’s/RONA, many independent garden centres, and Amazon.ca all carry them in season. Health Canada’s pesticide registry showed no W·H·Y Trap or W·H·Y attractant on October 28, 2026, though, so check the package for a PCP number. One buying tip: refill kits sell out at big-box stores by mid-summer in bad wasp years, so when you buy the trap, buy two or three refill kits in the same order. The trap without attractant is just a plastic lantern.',
  },
  {
    question: 'Is the RESCUE! WHY Trap registered in Canada?',
    answer: 'Health Canada’s pesticide registry showed no W·H·Y Trap or W·H·Y attractant when we searched on October 28, 2026. Lures count as pest control products under the Pest Control Products Act, and Sterling International’s Canadian registrations are its heptyl butyrate yellowjacket products, registered on December 11, 2025: Disposable Yellowjacket Trap W (PCP 35529), Yellowjacket Trap Cartridge (PCP 35530) and Yellowjacket Trap Tube (PCP 35531). Check the W·H·Y package for a PCP number before you buy.',
  },
  {
    question: 'What attractant does the WHY Trap use?',
    answer: 'RESCUE! says the W·H·Y Trap uses two chambers and three lures: the top chamber is baited with a solid lure in a vial and a liquid lure mixed with water, and the bottom chamber with a liquid lure on a cotton pad. Its note for pet owners names heptyl butyrate and a butanol, which it says can be strong eye irritants and mild skin irritants, so wash with clean water after contact. The included supply lasts about two weeks under normal conditions, and refill kits are sold separately.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'RESCUE! WHY Trap review, Canada: how the two chambers and three lures work, 2-week refills, the 20 ft rule, what it won’t do, and the PCP-number check.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('rescue-why-trap-review-canada')

export default function RescueWhyTrapReviewCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian review of the RESCUE! WHY Trap: two-chamber design explained, refill economics, catch expectations, and honest limitations versus the TrapStik and disposable traps.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'RESCUE! WHY Trap Review Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">RESCUE! WHY Trap Review</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Mostly yes: the RESCUE! W&middot;H&middot;Y Trap is a reusable two-chamber lure trap that RESCUE! says catches 5 paper wasp species, bald-faced and European hornets and 12 yellowjacket species, with lures that last about two weeks. It suits a yard with every kind of wasp and no nest you can find: hang it at least 6 metres (20 feet) from the patio and start in spring. It thins foragers; it never removes a nest.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="RESCUE! WHY Trap (wasps, hornets & yellowjackets)" search="rescue why trap wasp hornet yellowjacket" label="Our verdict: buy it" />
      <TopBox tag={AMZ_TAG} name="RESCUE! WHY Trap (wasps, hornets & yellowjackets)" search="rescue why trap wasp hornet yellowjacket" label="Our verdict: buy it" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The RESCUE! WHY Trap is the best all-round reusable wasp trap sold in Canada &mdash; its two-chamber design uses separate attractants to catch paper wasps and hornets up top and yellowjackets down below, with no insecticide and rare honey-bee bycatch. Know two things going in: the attractant is a recurring refill on a roughly 2-week cadence, and no lure trap &mdash; this one included &mdash; kills the colony the wasps came from.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Two chambers, three lures (RESCUE!): a solid lure and a liquid lure up top for paper wasps and hornets, a liquid lure below for yellowjackets &mdash; 19 species covered.</li>
              <li>Attractant lasts about 2 weeks per kit; refills are a genuine recurring cost across a May&ndash;September Canadian season.</li>
              <li>The lures are scents, not insecticide (RESCUE! names heptyl butyrate and a butanol), and RESCUE! says the trap will not lure honey bees &mdash; but lures still count as pest control products in Canada, and Health Canada&rsquo;s registry shows no W&middot;H&middot;Y product, so check the package for a PCP number.</li>
              <li>Hang it 6+ metres from where people sit &mdash; the trap pulls wasps toward itself, so patio-rail placement backfires.</li>
              <li>Put it out in late April or May: one overwintered queen caught in spring is an entire summer nest that never gets built.</li>
              <li>It intercepts foragers &mdash; it does not kill the nest. A located, active nest needs a nest-directed treatment instead.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="wasps" />
        </div>
      </section>

      <section className="bg-white px-4 py-2">
        <div className="max-w-4xl mx-auto">
          <TopPick tag={AMZ_TAG}
            label="Our Verdict"
            name="RESCUE! WHY Trap (Wasp, Hornet & Yellowjacket)"
            blurb="The broadest-spectrum reusable wasp trap you can buy in Canada. The two-chamber design is genuinely clever engineering, not marketing — separate scent systems for the high-flying paper wasps and hornets versus the low-approaching yellowjackets. Reusable for years, insecticide-free, and stocked with Canadian-labelled refills at every big-box store. Score docked for the recurring attractant cost and for what every lure trap shares: it thins foragers, it cannot kill a colony."
            search="rescue why trap wasp hornet yellowjacket"
            cta="Check price on Amazon.ca"
            score={8.6}
            pros={[
              'Catches all 3 groups — paper wasps, hornets, yellowjackets (19 species)',
              'Two-chamber design targets each group with its own attractant',
              'No insecticide, no zapper — and formulated to avoid honey bees',
              'Reusable season after season; catches spring queens before nests form',
              'Canadian-labelled trap and refills at Canadian Tire, Home Depot, Amazon.ca',
            ]}
            cons={[
              'Attractant refills are a recurring cost on a ~2-week cadence',
              'Does not kill the colony — foragers only',
              'Needs thoughtful placement well away from seating areas',
              'Emptying a chamber of dead wasps is not for the squeamish',
            ]}
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Is the RESCUE! WHY Trap?</h2>
          <p>The WHY Trap is a reusable lure trap from Sterling International, the Spokane-based company behind the whole RESCUE! line, and the name is the pitch: <strong>W</strong>asps, <strong>H</strong>ornets, <strong>Y</strong>ellowjackets. Most traps on the shelf are really yellowjacket traps wearing a &ldquo;wasp trap&rdquo; label &mdash; sweet bait in a bottle, which yellowjackets love and paper wasps largely ignore. The WHY Trap is the one mainstream product engineered around the fact that those three groups forage differently, fly at different heights, and respond to different scent cues.</p>
          <p>Sterling claims coverage of 19 species across the three groups, and in a southern-Ontario yard that list maps onto exactly the insects that ruin an August dinner: German and common yellowjackets, northern paper wasps on the fence line, bald-faced hornets in the cedar hedge, and the occasional European hornet. Canadian Tire lists it and a separate refill kit, but Health Canada&rsquo;s pesticide registry shows no W&middot;H&middot;Y product (searched October 28, 2026) &mdash; more on that below.</p>
          <Photo id="eastern-yellowjacket-live" alt="An eastern yellowjacket resting on fabric" caption="An eastern yellowjacket on fabric, photographed in Leominster, Massachusetts. Yellowjackets are the late-summer patio wasps; RESCUE! says the bottom chamber uses the same lure as its yellowjacket trap." />
          <Photo id="bald-faced-hornet" alt="A bald-faced hornet, black with white markings" caption="A bald-faced hornet photographed in Herndon, Virginia. Bald-faced and European hornets are on the W·H·Y Trap's list, alongside 5 paper wasp species and 12 yellowjacket species, by RESCUE!'s count." />
          <p>We researched this trap for our wider <Link href="/blog/best-wasp-trap">best wasp trap in Canada</Link> roundup, where it took the top all-round slot. This page is the deep-dive: how the two-chamber system actually works, what the refill economics look like over a real Canadian season, what catch numbers to expect, and where the trap honestly falls short.</p>

          <NextUp path="/blog/rescue-why-trap-review-canada" />
          <QuickIdTable
            title="The W·H·Y Trap and its alternatives, on the record"
            head={['Option', 'How it works', 'Best for', 'Limits']}
            rows={[
              ['RESCUE! W·H·Y Trap', 'Two chambers, three scent lures; insects get in and cannot get out (RESCUE!)', 'Paper wasps, hornets and yellowjackets together: 19 species, RESCUE! says', 'Lures last about two weeks; hang it 20 ft (6 m) from patios and known nests; no W·H·Y product in Health Canada’s registry'],
              ['RESCUE! yellowjacket traps (heptyl butyrate)', 'A heptyl butyrate lure in a disposable bag or a refillable trap', 'Yellowjackets', 'Registered December 11, 2025 (PCP 35529, 35530, 35531) for outdoor living areas, yellowjackets only'],
              ['RESCUE! TrapStik', 'A coloured pattern draws wasps onto an adhesive (see the table further down)', 'Paper wasps at eaves and porches', 'No TrapStik record in Health Canada’s registry'],
              ['Nest treatment', 'A labelled wasp spray or dust at the nest, or a licensed exterminator', 'A nest you can find', 'Use only a product whose label shows a PCP number and lists your nest type'],
            ]}
            caption={<>Trap facts from RESCUE!&rsquo;s <a href="https://www.rescue.com/products/traps/why-trap-for-wasps-hornets-yellowjackets/" target="_blank" rel="noopener noreferrer" className="underline">W&middot;H&middot;Y Trap page</a>, checked October 28, 2026; registrations from Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">pesticide product registry</a>, searched the same day; the rules from the <a href="https://laws-lois.justice.gc.ca/eng/acts/P-9.01/page-1.html" target="_blank" rel="noopener noreferrer" className="underline">Pest Control Products Act</a> (s. 2) and the <a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/page-10.html" target="_blank" rel="noopener noreferrer" className="underline">Pest Control Products Regulations</a> (Schedule 1). No trap was tested.</>}
          />
          <h2>How the Two-Chamber Design Works</h2>
          <p>Pick the trap up and you are holding two traps stacked into one lantern-shaped body:</p>
          <ul>
            <li><strong>The top chamber</strong> is baited with two lures, a solid in a vial and a liquid mixed with water (RESCUE!&rsquo;s product page), and is entered through openings near the top of the trap. This targets <strong>paper wasps and hornets</strong>, which patrol and forage higher off the ground and key on this scent profile. Sugar-water bottle traps almost never catch these species; this chamber is the WHY Trap&rsquo;s genuine differentiator.</li>
            <li><strong>The bottom chamber</strong> is baited with a liquid lure poured onto a cotton pad, the same lure RESCUE! uses in its reusable yellowjacket trap, and is entered through cone-style openings underneath. This targets <strong>yellowjackets</strong>, which characteristically approach food low and from below &mdash; the same behaviour that has them hovering around your pop can.</li>
          </ul>
          <p>Once inside either chamber, the geometry does the killing: wasps fly upward toward light trying to escape, cannot re-locate the entry cones, and drown or die of dehydration, as RESCUE! puts it. There is no zapping, no glue, and &mdash; worth repeating for anyone with kids, dogs, or pollinator concerns &mdash; <strong>no insecticide anywhere in the product</strong>. The lures are scents, not poisons, though RESCUE! warns that the heptyl butyrate and butanol in them can be strong eye irritants and mild skin irritants, and it says the trap will not lure beneficial honeybees. A lure is still a pest control product in Canada, which the compliance section below covers.</p>
          <Photo id="honey-bee-on-flower" alt="A western honey bee on a white flower" caption="A western honey bee on a white flower, photographed in Gurnee, Illinois. RESCUE! says the W·H·Y lures will not draw honey bees; homemade sugar bait does." />

          <h2>The Refill Economics: What Owning One Actually Costs</h2>
          <p>Here is the part the box art does not emphasize. The trap body is a one-time purchase in the same modest price bracket as a decent garden hand tool, and it will last you many seasons &mdash; owners routinely report five-plus years from one trap. The attractant is a different story: <strong>each kit lasts about two weeks</strong>, and a refill kit (a fresh set of all three lures) is a small but genuinely recurring purchase.</p>
          <p>Run the math on a Canadian season and the pattern becomes clear. Wasp pressure in southern Ontario runs from roughly late April to mid-October &mdash; call it 20 to 24 weeks. At a two-week cadence, that is <strong>10 to 12 refill kits per season</strong> if you run the trap continuously. In practice most owners run it hard from May to June for queen season, ease off in mid-summer, then run it again hard from August to frost when yellowjacket colonies peak &mdash; which lands closer to six to eight refills. Either way, over a full season you will spend noticeably more on attractant than you spent on the trap. That is not a scandal &mdash; it is the same razor-and-blades pattern as water filters or Thermacell repellent mats &mdash; but you should walk in knowing the trap is effectively a subscription product.</p>
          <p>Two cost-control tips from the owner community: buy refills two or three kits at a time in spring (big-box stores sell through refill stock by mid-summer in bad wasp years), and in the late-August scavenging peak you can stretch the bottom chamber with simple sugar bait &mdash; with the caveats we cover in the FAQ, chiefly that DIY sugar bait forfeits the no-bees claim.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the trap and its refills:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="rescue why trap wasp hornet yellowjacket">RESCUE! WHY Trap &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="rescue why trap attractant refill">WHY attractant refill kits &rarr;</BuyLink>
          </div>

          <h2>Setup, Placement, and the 2-Week Rhythm</h2>
          <p>Setup is quick: going by RESCUE!&rsquo;s description, the top chamber takes the vial lure and the liquid lure mixed with water, the bottom chamber takes the liquid lure poured onto its cotton pad, and then you hang it. From there the trap runs on a simple rhythm &mdash; <strong>every two weeks, replace the lures</strong>; RESCUE! says to refresh them sooner if the trap fills up or the liquid evaporates, so in hot July weather check between changes, because a dry chamber is an inert chamber.</p>
          <p>Placement is where most one-star reviews are born, so treat these three rules as non-negotiable:</p>
          <ol>
            <li><strong>Hang it 6+ metres (20 feet) from people.</strong> The trap works by pulling wasps toward itself. On the deck rail, it is a wasp magnet at head height beside your guests. At the fence line, it is an interception station between the wasps&rsquo; approach route and your patio.</li>
            <li><strong>Height: roughly 1&ndash;2 metres off the ground, in the open.</strong> A tree branch, fence post, or shepherd hook in sun works well; the warmth helps the attractant plume disperse.</li>
            <li><strong>Start in late April or May.</strong> Every yellowjacket and bald-faced hornet colony is founded by a single overwintered queen. A queen caught in May is a nest of hundreds to thousands of workers that never exists in August. Spring trapping is the highest-leverage thing this product does &mdash; and it is the phase most buyers skip because &ldquo;wasp season&rdquo; does not feel real yet. Our <Link href="/blog/how-to-get-rid-of-wasps-canada">full wasp-control playbook</Link> covers the seasonal timeline in detail.</li>
          </ol>
          <p>Rule one is the one that quietly defeats people, because the spot that satisfies it usually has nothing to hang the trap from. Six metres from the patio in a typical suburban yard is open lawn, a garden bed, or a fence with no rail. The fix is a small hardware purchase: a <strong>shepherd hook</strong> &mdash; the tall shaped garden pole sold for hanging bird feeders and lanterns &mdash; pushes into a bed or a lawn edge and puts the trap at the right 1&ndash;2 metre height in full sun, exactly where you want it rather than where the yard happens to offer a branch. Get a heavier gauge than looks necessary; a loaded trap swinging in an August thunderstorm bends the cheap ones. <BuyLink tag={AMZ_TAG} search="garden shepherd hook plant hanger">check garden shepherd hooks on Amazon.ca &rarr;</BuyLink></p>

          <h2>Catch Expectations: What &ldquo;Working&rdquo; Looks Like</h2>
          <p>Calibrate your expectations by season. In spring, success is boring: a handful of very large wasps &mdash; queens &mdash; over several weeks. Each one is a cancelled colony, which makes those the most valuable catches of the year even though the trap looks nearly empty. In mid-summer, expect steady but moderate catches of foraging workers. In late August and September, when yellowjacket colonies hit peak population and pivot to scavenging sugar, a well-placed WHY Trap in a bad wasp year can fill visibly in days &mdash; owners in heavy-pressure yards report chambers with dozens to hundreds of yellowjackets between refills.</p>
          <p>What a trap can never do is out-recruit a nest. A mature yellowjacket colony fields thousands of workers; a ground nest by your patio (a distinct problem &mdash; see our <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link>) will not be trapped into surrender. Where the WHY Trap genuinely changes your summer is <em>pressure reduction</em>: fewer foragers finding your barbecue, fewer scouts recruiting nestmates to it, and &mdash; via spring queens &mdash; fewer nests founded on your property in the first place.</p>

          <h2 id="situation">Which Wasp Trap for Your Situation?</h2>
          <ul>
            <li><strong>Wasps of every kind and no nest in sight:</strong> the W&middot;H&middot;Y Trap, once you have checked the package for a PCP number.</li>
            <li><strong>Yellowjackets at the picnic table in late summer:</strong> a heptyl butyrate yellowjacket trap with a PCP number, 6 m from the table, and covers on food and drinks.</li>
            <li><strong>Paper wasps under the eaves:</strong> RESCUE! says the W&middot;H&middot;Y catches more paper wasps near a house; better still, find and treat the nest.</li>
            <li><strong>Hornets in the hedge:</strong> RESCUE! says it catches more hornets and yellowjackets near bushes and trees.</li>
            <li><strong>A nest you can see:</strong> a nest treatment or a licensed exterminator first, then the trap for stragglers.</li>
            <li><strong>It is April or May:</strong> hang it now; RESCUE! says early spring use increases the chance of catching emerging queens.</li>
          </ul>

          <h2>Wasp Trap Buyer&rsquo;s Checklist</h2>
          <ol>
            <li><strong>A PCP number</strong> on the trap or lure package.</li>
            <li><strong>The insects the lure is for:</strong> a yellowjacket-only lure is for yellowjackets.</li>
            <li><strong>Refills you can get:</strong> the W&middot;H&middot;Y lures last about two weeks, so buy kits with the trap.</li>
            <li><strong>A spot 6 m (20 ft) from the patio</strong> and from any known nest (RESCUE!).</li>
            <li><strong>Something to hang it from:</strong> a branch, a fence post or a shepherd hook.</li>
            <li><strong>Long-cuff gloves and a bucket</strong> for emptying it at dusk.</li>
            <li><strong>A spring start</strong> for the queens.</li>
            <li><strong>A nest plan:</strong> a trap never removes the colony.</li>
          </ol>

          <RelatedLinks path="/blog/rescue-why-trap-review-canada" />
          <h2>WHY Trap vs TrapStik vs Disposable Traps</h2>
          <p>RESCUE! itself sells three different answers to the wasp problem, plus the hardware-store shelf is full of single-use bag traps. Here is how the categories compare for a Canadian yard:</p>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm my-6 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Trap</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Catches</th>
                  <th className="px-4 py-3 text-left">Running cost</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">RESCUE! WHY Trap<br /><span className="font-normal text-xs text-gray-500">reusable, 2 chambers</span></td>
                  <td className="px-4 py-3 text-gray-700">Dual scent lures; wasps enter, cannot exit, dehydrate</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Broadest</strong> &mdash; paper wasps, hornets, yellowjackets</td>
                  <td className="px-4 py-3 text-gray-700">Recurring &mdash; refill kit about every 2 weeks</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue why trap wasp hornet yellowjacket" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">RESCUE! TrapStik<br /><span className="font-normal text-xs text-gray-500">glue, visual lure</span></td>
                  <td className="px-4 py-3 text-gray-700">Multi-colour visual pattern draws wasps onto adhesive</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Good</strong> for paper wasps at eaves; weaker on yellowjackets</td>
                  <td className="px-4 py-3 text-gray-700">None &mdash; replace the whole stick when full</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue trapstik for wasps" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Disposable bag trap<br /><span className="font-normal text-xs text-gray-500">RESCUE! Yellowjacket disposable</span></td>
                  <td className="px-4 py-3 text-gray-700">Pre-baited bag; add water, hang, toss when full</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Yellowjackets only</strong> &mdash; minimal paper wasp / hornet catch</td>
                  <td className="px-4 py-3 text-gray-700">Full replacement each time &mdash; adds up over a season</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue disposable yellowjacket trap" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">DIY bottle trap<br /><span className="font-normal text-xs text-gray-500">pop bottle + sugar water</span></td>
                  <td className="px-4 py-3 text-gray-700">Inverted bottle cone over sweet bait</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Weak</strong> &mdash; late-season yellowjackets only; attracts bees</td>
                  <td className="px-4 py-3 text-gray-700">Nearly free, but low and inconsistent catch</td>
                  <td className="px-4 py-3 text-xs text-gray-500">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>The decision logic: if your problem is specifically yellowjackets around late-summer food, a dedicated yellowjacket trap is a focused tool &mdash; our <Link href="/blog/best-yellow-jacket-trap-canada">best yellowjacket trap guide</Link> compares those head-to-head. If your problem is paper wasps building under the porch soffit, the TrapStik&rsquo;s visual lure is the specialist. If &mdash; like most Canadian homeowners &mdash; your problem is &ldquo;wasps, generally, and I am not sure which kind,&rdquo; the WHY Trap&rsquo;s three-group coverage is exactly why it is the default recommendation.</p>
          <Photo id="paper-wasp-nest-eave-corner" alt="European paper wasps on an open-comb nest under the overhang of a house" caption="European paper wasps on their open-comb nest in a corner under the overhang of a house, photographed in Saratoga, California. A nest like this needs a nest treatment; a trap only catches the foragers." />

          <h2>The Honest Cons</h2>
          <ul>
            <li><strong>It does not kill the colony.</strong> Worth its own bullet even though we have said it twice. A lure trap is population skimming. If you can see wasps streaming to and from one hole or soffit gap, you have a nest, and the tool for a nest is a nest-directed treatment &mdash; our <Link href="/blog/best-wasp-nest-spray-canada">wasp nest spray guide</Link> covers the options that carry a PCP number and when to call a professional instead.</li>
            <li><strong>The refills are forever.</strong> A two-week cadence, all season, every season. Budget for it or the trap becomes yard decor.</li>
            <li><strong>Emptying it is grim.</strong> Twice a month you will unscrew a chamber holding a mass of dead wasps. Do it in the evening when wasps are inactive, and check that everything inside is actually dead &mdash; a soapy-water dunk before opening removes all doubt.</li>
            <li><strong>Placement mistakes look like product failure.</strong> Hung over the picnic table, it genuinely makes your patio worse. The trap has no fix for being installed in the wrong place.</li>
            <li><strong>Mid-summer lull.</strong> In late June and July, colonies are feeding larvae on live prey and forager interest in any lure dips. Catches drop; this is biology, not a defective refill.</li>
          </ul>
          <p>On the emptying job specifically: the thing that turns it from grim into routine is having the right gloves by the back door rather than improvising with oven mitts twice a month. A long-cuff pair &mdash; the gauntlet style that covers the forearm, sold for rose pruning and thorny hedging &mdash; is what you want, because the exposure risk when you unscrew a chamber is a wrist, not a palm. Do it at dusk, dunk the chamber in soapy water first as above, and keep a dedicated bucket for the job. <BuyLink tag={AMZ_TAG} search="long cuff gauntlet garden gloves">check long-cuff garden gauntlets on Amazon.ca &rarr;</BuyLink></p>

          <h2>The Canadian Compliance Angle: Lures Need a PCP Number Too</h2>
          <p>Wasp control is one of the categories where Canadians get burned by US-centric advice. American sites casually recommend insecticide products &mdash; US-formulation foaming jet sprays, carbaryl (Sevin) dusts for injecting into nests, permethrin-soaked homemade baits &mdash; that either do not carry a Canadian PCP registration in those concentrations or are restricted to licensed applicators here. Products like US-label Spectracide Wasp &amp; Hornet Killer or carbaryl nest dusts bought from cross-border sellers are grey-market in Canada: no PCP registration number on the can means it was never evaluated for legal sale here, and using it puts you offside federal pesticide law. They are not our pick, in any scenario.</p>
          <p>A lure trap is not outside that system either. The Pest Control Products Act counts a product used to attract a pest as a pest control product, and the Pest Control Products Regulations list devices sold to attract or destroy flying insects in Schedule 1. Sterling International&rsquo;s Canadian registrations, all dated December 11, 2025, are its heptyl butyrate yellowjacket products: Disposable Yellowjacket Trap W (PCP 35529), Yellowjacket Trap Cartridge (PCP 35530) and Yellowjacket Trap Tube (PCP 35531), each for outdoor living areas. Health Canada&rsquo;s registry shows no W&middot;H&middot;Y Trap or W&middot;H&middot;Y attractant (searched October 28, 2026), so check the package for a PCP number before you buy. What the trap does avoid is spraying: nothing drifts onto the neighbour&rsquo;s vegetable garden. When you do need chemical control for an actual nest, buy it off a Canadian shelf with a PCP registration number on the label &mdash; the <Link href="/blog/best-wasp-nest-spray-canada">Canadian-legal nest sprays</Link> exist and work. And if the nest is inside a wall void, above a second-storey soffit, or anywhere a fall or a swarm is plausible, hiring a licensed exterminator is the sane move; our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what wasp nest removal typically runs.</p>

          <h2>RESCUE! WHY Trap &mdash; Key Facts</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Made by', 'Sterling International (RESCUE! brand), Spokane, Washington'],
                  ['Targets', 'Paper wasps, hornets (incl. bald-faced), yellowjackets — 19 species'],
                  ['Mechanism', 'Two chambers, three lures; entry cones; drowning or dehydration — no insecticide'],
                  ['Honey bee bycatch', 'Rare with official attractant (formulated to avoid bees)'],
                  ['Attractant life', 'About 2 weeks per kit; refills sold separately (recurring)'],
                  ['Season in Canada', 'Late April to first hard frost (queens in spring, peak Aug–Sep)'],
                  ['Placement', '6+ m from seating, 1–2 m high, sunny spot on a fence/branch'],
                  ['Reusable?', 'Yes — trap body lasts many seasons'],
                  ['Kills the colony?', 'No — intercepts foragers and spring queens only'],
                  ['Where to buy', 'Canadian Tire, Home Depot, Lowe’s/RONA, garden centres, Amazon.ca'],
                  ['PMRA status', 'No W·H·Y product in Health Canada’s registry (Oct 28, 2026); check the package for a PCP number'],
                  ['Best paired with', 'Sanitation (sealed garbage, covered drinks) + nest treatment when a nest is found'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Our Verdict: Who Should Buy the WHY Trap?</h2>
          <p>Buy it if you have general, source-unknown wasp pressure &mdash; the classic Canadian backyard situation where yellowjackets crash the barbecue, paper wasps patrol the fence, and you never actually find a nest. The two-chamber design is the only mainstream trap that addresses all of it, the insecticide-free mechanism means nothing gets sprayed around your yard, and spring queen-trapping gives it leverage no reactive product has. We score it <strong>8.6/10</strong>: docked for the perpetual refill cost and the mid-summer lull, but it is the trap we would hang first, and the one that took Best Overall in our <Link href="/blog/best-wasp-trap">full Canadian wasp trap roundup</Link>.</p>
          <p>Skip it &mdash; or rather, do not <em>stop</em> at it &mdash; if you have found an active nest. Trapping next to a nest is bailing a boat without plugging the hole; go to a nest-directed treatment or a professional first, then run the trap for the stragglers and next spring&rsquo;s queens.</p>
          <p>The &ldquo;best paired with&rdquo; line in the table above is doing more work than it looks. A trap pulls wasps toward one point in the yard; sanitation removes the competing attractions, and in late August the competing attraction is your table. Pop-up mesh food covers over the serving dishes, lidded cups rather than open cans (a yellowjacket inside a can is the classic sting-in-the-mouth story), and a bin with a latching lid rather than a bag by the back step are what turn a good trap placement into a quiet patio. None of it is pest-control equipment; all of it is what actually decides whether wasps stay interested in where you are sitting. <BuyLink tag={AMZ_TAG} search="pop up mesh food cover outdoor">check mesh food covers on Amazon.ca &rarr;</BuyLink></p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="rescue why trap wasp hornet yellowjacket">Check RESCUE! WHY Trap on Amazon.ca &rarr;</BuyLink>
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
            <li><Link href="/blog/best-wasp-trap">Best Wasp Trap Canada &mdash; Every Type Compared</Link></li>
            <li><Link href="/blog/best-yellow-jacket-trap-canada">Best Yellowjacket Trap Canada &mdash; Late-Summer Specialists</Link></li>
            <li><Link href="/blog/best-wasp-nest-spray-canada">Best Wasp Nest Spray Canada &mdash; PMRA-Legal Options</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps in Canada &mdash; Full Playbook</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-ground-wasps-canada">How to Get Rid of Ground Wasps &amp; Ground Nests</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost in Canada &mdash; What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="flies" />
        <ReadNext path="/blog/rescue-why-trap-review-canada" />
      </article>
    </>
  )
}
