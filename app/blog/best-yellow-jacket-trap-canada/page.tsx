import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
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
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'
import { shareImage } from '@/lib/photos'

const SLUG = 'best-yellow-jacket-trap-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-10-28'
const TITLE = 'Best Yellow Jacket Traps in Canada — And the Lure Mistake That Leaves Ontario Traps Empty'
// TITLE NOTE (Oct 28, 2026): was 'Best Yellow Jacket Traps & Bait in Canada'; top queries, Jul 28-Oct 25 (all countries): yellow jacket trap 1,494 at 10.6, yellow jacket traps 434 at 9.7, yellowjacket trap 317 at 9.9, best yellow jacket trap 195 at 6.8, yellow jacket traps that work 77 at 7.3, yellow jacket bait 43 at 6.6 (17 clicks).
const META_TITLE = 'Yellow Jacket Traps & Bait That Work in Canada'

const FAQS = [
  {
    question: 'What is the best yellow jacket trap in Canada?',
    answer: 'For species-matched chemistry in Ontario, the RESCUE! Disposable Yellowjacket Trap in its EAST formula (YJTD-E) is the trap whose lure is actually blended for the eastern, German, and common yellowjackets that dominate here. The RESCUE! Reusable Yellowjacket Trap is the better long-term buy on durability and cost per season, but be clear about what you are getting: RESCUE! sells the reusable nationwide with a single attractant and states that it is similar to the lure used in the Western Formula disposable. The critical detail either way: on the DISPOSABLE traps, avoid the YJTD-W "West of the Rockies" version, whose heptyl butyrate lure targets western species and catches very little in Ontario. For mixed wasp pressure — yellow jackets plus paper wasps and hornets — the RESCUE! WHY Trap is the better all-in-one.',
  },
  {
    question: 'What is the difference between the RESCUE! YJTD-W and the regular yellow jacket trap?',
    answer: 'The attractant chemistry. The YJTD-W ("W" for West of the Rockies) uses heptyl butyrate, a lure that western yellowjacket species respond to strongly — but the eastern yellowjacket, German yellowjacket, and common yellowjacket that dominate Ontario, Quebec, and the Maritimes respond to it poorly. RESCUE! sells a separate East formulation (YJTD-E) of the disposable for everywhere else. Amazon listings frequently mix the two SKUs, and a -W trap hung in a Mississauga backyard can sit nearly empty while yellow jackets swarm the patio table beside it. Check the label before you buy: if it says "West of the Rockies," it is the wrong trap for eastern Canada.',
  },
  {
    question: 'Do yellow jacket traps actually work?',
    answer: 'Yes, with honest expectations. A well-placed attractant trap genuinely intercepts foraging workers — hundreds per week at peak — and noticeably reduces the number of yellow jackets reaching your patio, deck, or garbage area. What a trap will not do is eliminate the colony. A mature late-summer nest holds 1,000 to 4,000+ workers and replaces trapped foragers quickly. Traps are pressure management around the spaces you use; nest elimination is a separate job that requires treating the nest itself.',
  },
  {
    question: 'Should I bait a yellow jacket trap with protein or sugar?',
    answer: 'It depends on the month. Early to mid summer (May through July), yellow jacket workers are hunting protein — insects and meat — to feed the colony\'s larvae, so protein baits like a small piece of ham, fish, or cat food out-pull sweet baits in refillable traps. From roughly early August onward, larval production winds down, the workers lose their protein demand, and the colony switches hard to carbohydrates — which is why yellow jackets mob pop cans and fruit in late August and September. Switch refillable traps to sugar baits (juice, sugar water, jam) for the late-season aggression peak. Commercial attractant cartridges like RESCUE!\'s are formulated to work across the season, which is a big part of why we recommend them over pure DIY baiting.',
  },
  {
    question: 'Where should I place yellow jacket traps?',
    answer: 'Away from where you sit — this is the mistake that makes people swear traps "attract more wasps." A trap is a lure; hang it 6 metres (20 feet) or more from your patio, deck, or play area, along the property perimeter, ideally between the direction the yellow jackets arrive from and the space you want to protect. Sunny spots at roughly 1 to 2 metres off the ground catch best. Placing a trap on the patio table technically catches wasps while functionally inviting every forager in the neighbourhood to your dinner.',
  },
  {
    question: 'When should I put out yellow jacket traps in Canada?',
    answer: 'Two windows. First: early spring (late April through May in southern Ontario), when overwintered queens emerge and forage alone before founding nests — every queen trapped in spring is potentially an entire colony that never gets built. Second: mid-July onward, before the August–September aggression peak, so traps are established and intercepting foragers before colonies hit maximum size. Putting your first trap out in late August still helps, but you are skimming a colony at full strength rather than getting ahead of it.',
  },
  {
    question: 'Will a trap get rid of a yellow jacket nest?',
    answer: 'No. This is the most important expectation to set. Traps remove foragers — a fraction of the workforce — while the queen keeps laying hundreds of eggs a week inside the nest. If you have found an active nest (a steady stream of wasps entering and exiting one hole in the ground, a wall vent, or an eave), trapping around it manages the symptom, not the source. Ground nests in particular are dangerous to disturb; see our guide to getting rid of ground wasps for how nest treatment actually works and when to bring in a licensed exterminator.',
  },
  {
    question: 'Why are yellow jackets so aggressive in late August and September?',
    answer: 'Three things collide. The colony is at peak population — thousands of workers instead of the few dozen it had in June. The larvae that once rewarded workers with sugary secretions are mostly gone, so workers are food-stressed and scavenging aggressively for carbohydrates. And the colony has entered its reproductive phase, making workers more defensive of the nest. The result is the familiar late-summer pattern: yellow jackets bullying patio tables, garbage bins, and fruit trees, and stinging with less provocation. It ends with the first hard frosts, when the colony dies and only newly mated queens survive to overwinter.',
  },
  {
    question: 'Do yellow jacket traps harm honey bees?',
    answer: 'Purpose-made yellow jacket attractants — including the RESCUE! cartridges — are formulated to be unattractive to honey bees and bumblebees, and field experience backs that up. The bee risk comes from DIY sugar baits: plain sugar water or juice in a bottle trap will pull in bees along with wasps. If you run DIY sweet bait in late season, add a splash of vinegar — it deters bees while yellow jackets keep coming — and never place sweet-baited traps near flowering plants or a known hive.',
  },
  {
    question: 'What is the difference between yellow jackets and other wasps?',
    answer: 'Yellow jackets are a specific group of ground- and cavity-nesting social wasps — stockier than paper wasps, brighter yellow-and-black, with a fast, darting flight. Most Ontario colonies nest underground in old rodent burrows or in structural voids, which is why you often cannot see the nest at all. Paper wasps build the open umbrella-shaped combs under eaves and are far less aggressive; bald-faced hornets build the big grey aerial footballs. The distinction matters for trapping: yellow jacket attractants target yellow jackets specifically, while a multi-species trap like the RESCUE! WHY covers wasps, hornets, and yellow jackets together.',
  },
  {
    question: 'Can I use US-bought yellow jacket sprays or poison baits in Canada?',
    answer: 'Legally, no — and practically, you should not want to. Pesticides sold in Canada must be registered with Health Canada\'s PMRA and carry a PCP number on the label; US-labelled products like Spectracide Wasp & Hornet Killer or the toxicant-laced yellow jacket bait stations sold on US websites are grey-market here, with no Canadian label directions and, for poison baits, real risk to birds, pets, and pollinators that share the bait. Traps do not sidestep the rule: a lure counts as a pest control product too, and Health Canada’s registry lists RESCUE!’s heptyl butyrate trap, cartridge and tube (PCP 35529, 35530 and 35531, first registered in December 2025), so look for a PCP number on any baited trap or refill.',
  },
  {
    question: 'How many yellow jacket traps do I need?',
    answer: 'For a typical suburban lot, two to four traps along the perimeter beats one trap anywhere. Place them on the sides the yellow jackets arrive from — often the side facing a ravine, field, or a neighbour\'s fruit tree — and keep them 6+ metres from seating areas. For rural properties or heavy pressure near orchards and garbage areas, scale up to a trap every 15 metres or so of exposed perimeter. And empty or replace them before they fill: a trap packed with dead wasps loses airflow and catch rate drops.',
  },
  {
    question: 'Are yellow jacket traps reusable?',
    answer: 'The good ones are. The RESCUE! Reusable Yellowjacket Trap body lasts for years — you replace only the attractant cartridge every few weeks during the season. Disposable bag traps are single-use by design: hang, fill, bin. Bottle-style and glass traps are indefinitely reusable but depend on you supplying and refreshing the bait weekly. Over a full Canadian season, a reusable trap plus cartridges usually works out cheaper than repeatedly buying disposables, and it is the better choice for anyone trapping every year.',
  },
  {
    question: 'What attractant is in a yellow jacket trap?',
    answer: 'Most commercial yellowjacket traps use a chemical lure rather than food. Health Canada’s registry lists three heptyl butyrate products from RESCUE!’s maker, first registered in December 2025: the Disposable Yellowjacket Trap W, the Yellowjacket Trap Cartridge and the Yellowjacket Trap Tube. Heptyl butyrate is the lure western species respond to, and RESCUE! says its nationwide reusable trap uses a lure similar to its Western formula, while its Eastern formula disposable is designed for the species more common east of the Rockies. A bottle trap uses whatever bait you add: protein until July, sugar from August.',
  },
  {
    question: 'How long does a RESCUE! yellow jacket trap last?',
    answer: 'The reusable trap body lasts for years; the lure is what runs out. RESCUE! says the lure in its reusable trap lasts about 2 to 4 weeks depending on conditions, and it sells a 4-week liquid refill and a 10-week cartridge refill. The disposable bag works until its liquid dries out or it fills with insects, which RESCUE! puts at 2 to 4 weeks for most traps; heat and sun shorten that. Replace a full or dried-out bag while yellowjackets are still flying.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Yellow jacket traps that work in Canada: the RESCUE! reusable or the right-formula bag, hung 6+ m from the patio, with protein bait early and sugar late.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
  image: shareImage('eastern-yellowjacket-live'),
})

const AMZ_TAG = tagForSlug('best-yellow-jacket-trap-canada')

export default function BestYellowJacketTrapCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian comparison of yellow jacket traps — reusable attractant, multi-species, disposable, and refillable bottle traps — with the East vs West attractant SKU warning, seasonal bait science, and placement rules.', slug: SLUG, datePublished: DATE, dateModified: UPDATED, image: shareImage('eastern-yellowjacket-live') })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Yellow Jacket Trap Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Yellow Jacket Trap Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The yellow jacket traps that work are lure traps such as the RESCUE! reusable, hung 6 metres or more from where you sit, along the edge of the yard. If you bait a bottle trap yourself, use protein until July and sugar from August. A trap thins the foragers around your patio; it never removes the nest.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="RESCUE! Reusable Yellowjacket Trap" search="rescue reusable yellowjacket trap" label="Best overall" />
      <TopBox tag={AMZ_TAG} name="RESCUE! Reusable Yellowjacket Trap" search="rescue reusable yellowjacket trap" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best yellow jacket trap in Canada is the <AmazonLink search="rescue reusable yellowjacket trap" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">RESCUE! Reusable Yellowjacket Trap</AmazonLink> for durability and cost per season &mdash; though RESCUE! sells it nationwide with one lure it describes as similar to the Western formula. If matching the lure to Ontario species matters more to you, buy the EAST-formula disposable (YJTD-E) and avoid the YJTD-W &ldquo;West of the Rockies&rdquo; SKU, whose heptyl butyrate lure barely works on the eastern, German, and common yellowjackets that dominate here. Hang traps 6+ metres from your patio, and expect them to thin foragers, not eliminate a nest.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>RESCUE! sells East and West attractant formulas on its DISPOSABLE traps &mdash; eastern Canada needs the East (YJTD-E) version. The reusable trap has no regional variants.</li>
              <li>Yellow jackets want protein (meat, insects) in May&ndash;July and switch to sugar in August&ndash;September &mdash; match refillable trap bait to the month.</li>
              <li>Most Ontario yellow jacket colonies nest underground or in wall voids, and reach 1,000&ndash;4,000+ workers by the late-August aggression peak.</li>
              <li>Placement rule: 6 metres (20 ft) or more from seating areas, along the perimeter, sunny, 1&ndash;2 m off the ground.</li>
              <li>Traps intercept foragers and cut patio pressure; no trap kills the colony &mdash; an active nest is a separate treatment job.</li>
              <li>Baited traps are pest control products in Canada: Health Canada&rsquo;s registry lists RESCUE!&rsquo;s heptyl butyrate trap, cartridge and tube (PCP 35529&ndash;35531, first registered in December 2025), so look for a PCP number on any trap or refill, as you would on a spray.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
            <div className="mt-4">
              <BuyLink search="rescue reusable yellowjacket trap" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>
          <SpecialistDisclosure pest="yellow jackets" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Yellow Jacket Traps in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'RESCUE! Reusable Yellowjacket Trap',
                why: 'The durable pick: weeks of catch per cartridge, a body that lasts years, and it does not lure honey bees. Note the chemistry honestly though — RESCUE! sells the reusable nationwide with a single lure, and by the company\'s own account it is similar to the Western Formula used in the disposable. If species-matched chemistry matters more to you than reusability, the East-formula disposable below is the better Ontario buy.',
                search: 'rescue reusable yellowjacket trap',
                score: 9.0,
                featured: true,
                pros: ['Reusable body — replace only cartridges', 'Does not attract honey bees', 'Catches for weeks per cartridge'],
                cons: ['One nationwide lure, similar to the Western disposable formula', 'Targets yellow jackets only, not paper wasps'],
              },
              {
                badge: 'Best Multi-Species',
                name: 'RESCUE! WHY Trap (Wasps, Hornets & Yellowjackets)',
                why: 'One trap, three targets: a dual-chamber design with attractants that pull yellow jackets, paper wasps, and bald-faced hornets together. The right pick when you cannot tell what is bullying the patio.',
                search: 'rescue why trap wasp hornet yellow jacket',
                score: 8.5,
                pros: ['Covers all three stinging-wasp groups', 'Season-long with attractant refills', 'Well-proven design in Canada'],
                cons: ['Costs more up front than a single-species trap', 'More attractant components to maintain'],
              },
              {
                badge: 'Best Disposable',
                name: 'RESCUE! Disposable Yellowjacket Trap — East formula (YJTD-E)',
                why: 'A pre-baited bag you hang, fill with water, and throw out full. Zero maintenance and modest cost — ideal for a single event weekend or for ringing a rural property without tending cartridges.',
                search: 'rescue disposable yellowjacket trap',
                score: 8.0,
                pros: ['No maintenance, no touching the catch', 'Cheap enough to deploy several at once', 'Great for cottages and events'],
                cons: ['Single-use — pricier over a full season', 'Must check the label says East, not West of the Rockies'],
              },
              {
                badge: 'Best Refillable / DIY Bait',
                name: 'Hanging Bottle-Style Wasp Trap (bait-it-yourself)',
                why: 'A reusable bottle or glass trap you bait yourself — the only style that lets you run the protein-early, sugar-late seasonal switch precisely. Works only as hard as you do at refreshing bait.',
                search: 'hanging wasp trap reusable bottle',
                score: 7.0,
                pros: ['Full control of protein vs sugar bait', 'Indefinitely reusable, budget-friendly', 'No proprietary refills to buy'],
                cons: ['Bait needs refreshing every few days', 'Sweet DIY bait can attract bees if misused'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Classic late-summer yellow jacket pressure in the GTA?</strong> The <em>Best Overall</em> RESCUE! reusable is the default buy on durability &mdash; or take the <em>Best Disposable</em> East-formula bag if you want the lure blended for eastern species. <strong>Mixed wasp trouble &mdash; paper wasps on the eaves plus yellow jackets at the table?</strong> Go <em>Best Multi-Species</em> with the WHY Trap (our <Link href="/blog/rescue-why-trap-review-canada">full WHY Trap review</Link> covers it in depth). <strong>One long weekend or a cottage you visit monthly?</strong> Hang a few <em>Best Disposable</em> bags and bin them full. <strong>Enjoy tinkering?</strong> A <em>Refillable bottle trap</em> plus the seasonal bait switch below out-catches lazy cartridge use &mdash; but only if you keep the bait fresh.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <QuickIdTable
            title="Yellow jacket traps compared: how each works, who it suits, its limits"
            head={['Type', 'How it works', 'Best for', 'Limits']}
            rows={[
              ['RESCUE! reusable trap', 'A lure inside draws yellowjackets in; RESCUE! says the lure lasts about 2 to 4 weeks, with 4-week liquid and 10-week cartridge refills', 'Trapping every year, from spring queens to autumn workers', 'Yellowjackets only: RESCUE! says it will not catch hornets or paper wasps, and its one nationwide lure is similar to the Western formula'],
              ['RESCUE! disposable bag', 'Add water to activate the powdered lure; it works until the liquid dries out or the bag is full, usually 2 to 4 weeks (RESCUE!)', 'A cottage, an event weekend or a rural fence line, with nothing to empty', 'Single use; sold in East and West formulas, and Health Canada’s December 2025 registration names the West (W) bag'],
              ['RESCUE! W·H·Y Trap', 'A dual-chamber trap with attractants for yellow jackets, paper wasps and bald-faced hornets', 'Mixed wasp trouble when you cannot tell which wasp it is', 'More attractant parts to keep up; see the full W·H·Y Trap review'],
              ['Bottle trap you bait yourself', 'Your own bait: protein from May to July, sugar from August', 'Hands-on owners who will refresh the bait every 2 to 3 days', 'Sweet bait draws honey bees unless you add vinegar, and the catch is only as good as the bait'],
            ]}
            caption={<>Checked October 28, 2026: RESCUE!&rsquo;s <a href="https://www.rescue.com/products/traps/reusable-yellowjacket-trap/" target="_blank" rel="noopener noreferrer" className="underline">reusable</a> and <a href="https://www.rescue.com/products/traps/disposable-yellowjacket-trap/" target="_blank" rel="noopener noreferrer" className="underline">disposable</a> trap pages and its <a href="https://www.rescue.com/latest-buzz/outdoor-pests/disposable-yellowjacket-trap-east-or-west/" target="_blank" rel="noopener noreferrer" className="underline">East or West</a> article; Health Canada&rsquo;s registration decision <a href="https://publications.gc.ca/site/eng/9.958298/publication.html" target="_blank" rel="noopener noreferrer" className="underline">RD2025-10</a> (12 December 2025). The W·H·Y and bottle-trap rows restate this page&rsquo;s own sections.</>}
          />

          <h2>The SKU Mistake That Leaves Ontario Traps Empty</h2>
          <p>Start with the single most useful thing in this guide, because almost nobody selling yellow jacket traps in Canada mentions it: <strong>RESCUE! makes two different attractant formulas for its DISPOSABLE traps, and the wrong one barely works east of the Rockies.</strong> (The reusable trap has no regional versions &mdash; RESCUE! sells it nationwide with a single lure that the company itself describes as similar to the Western formula.)</p>
          <p>The trap sold as <strong>YJTD-W</strong> &mdash; the &ldquo;W&rdquo; stands for <em>West of the Rockies</em> &mdash; is built around heptyl butyrate, a lure that western yellowjacket species respond to powerfully. The problem: the species doing the damage in Ontario, Quebec, and the Maritimes are the <em>eastern yellowjacket</em>, the <em>German yellowjacket</em>, and the <em>common yellowjacket</em> &mdash; and they respond poorly to heptyl butyrate. RESCUE! knows this, which is why the company sells a separate East formulation of the DISPOSABLE trap, with a different attractant blend, for everywhere else in North America. Note that this regional split applies to the disposable only — the reusable trap has no East version.</p>
          <p>Amazon.ca listings, marketplace sellers, and even some hardware-store shelves mix the two SKUs freely. The result is a review pattern you can see on every retailer: half the reviewers say the trap filled up in days, the other half say it caught nothing all summer. Much of that gap is not the trap &mdash; it is geography. A -W trap hanging in a Mississauga or Ottawa backyard is advertising to a species that mostly is not there.</p>
          <NextUp path="/blog/best-yellow-jacket-trap-canada" />
          <p><strong>Before you buy a RESCUE! DISPOSABLE trap:</strong> check the label and the listing photos. If it says &ldquo;West of the Rockies,&rdquo; &ldquo;WYJ,&rdquo; or &ldquo;YJTD-W,&rdquo; it is the wrong trap for eastern Canada &mdash; you want the East version (YJTD-E). The reusable trap is a different decision: there is only one version of it, so the choice there is durability versus species-matched chemistry, not East versus West.</p>

          <h2>Know Your Enemy: Why Yellow Jackets Are a Different Problem</h2>
          <p>Yellow jackets are not the wasps building the little umbrella combs under your eaves &mdash; those are paper wasps, comparatively docile and covered in our <Link href="/blog/best-wasp-trap">general wasp trap guide</Link>. Yellow jackets are stockier, faster, brighter, and far more aggressive, and in southern Ontario most of their colonies are <strong>nests you cannot see</strong>: underground in abandoned rodent burrows, or inside wall voids, sheds, and retaining walls. You find them the hard way &mdash; running a lawnmower over the entrance hole, or watching a steady stream of traffic in and out of a gap in the patio stones.</p>
          <Photo id="eastern-yellowjacket-live" alt="Eastern yellowjacket, a black and yellow wasp, resting on fabric" caption="An eastern yellowjacket, Vespula maculifrons, on fabric (Leominster, Massachusetts). It is one of the three yellowjackets this page says dominate Ontario, Quebec and the Maritimes." />
          <p>The colony math explains the calendar. A single overwintered queen starts a nest alone in May. Through June and July the colony grows quietly &mdash; a few dozen, then a few hundred workers &mdash; and mostly ignores you, because it is busy hunting insects. By late August a mature colony holds <strong>1,000 to 4,000+ workers</strong>, larval production is winding down, and the workforce is food-stressed, defensive, and scavenging hard for sugar. That is the August&ndash;September aggression peak: the same yard that was fine in July suddenly has yellow jackets mobbing every pop can, and stings spike accordingly. Every colony dies with the hard frosts; only the season&rsquo;s newly mated queens overwinter to start next year&rsquo;s cycle.</p>
          <Photo id="yellowjacket-paper-nest" alt="Yellowjacket paper nest built inside the lid of a storage box, beside a tape measure" caption="A yellowjacket paper nest built inside the lid of a storage box, with a tape measure for scale (Lake Forest Park, Washington). Nests hidden in sheds and voids are the ones you find the hard way." />
          <p>Trapping strategy falls straight out of that biology, in three rules: match the bait to the colony&rsquo;s current appetite, place traps to intercept foragers away from you, and be honest that a trap thins the workforce without touching the nest.</p>

          <h2>How the Four Trap Styles Compare</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm my-6 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Trap</th>
                  <th className="px-4 py-3 text-left">Attractant / bait</th>
                  <th className="px-4 py-3 text-left">Reusable?</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">RESCUE! Reusable Yellowjacket<br /><span className="font-normal text-xs text-gray-500">one nationwide attractant</span></td>
                  <td className="px-4 py-3 text-gray-700">One nationwide lure, which RESCUE! says is similar to its Western formula; about 2&ndash;4 weeks per lure</td>
                  <td className="px-4 py-3 text-gray-700">Yes &mdash; body lasts years</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Best overall on durability and cost per season</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue reusable yellowjacket trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">RESCUE! WHY Trap<br /><span className="font-normal text-xs text-gray-500">wasps + hornets + yellowjackets</span></td>
                  <td className="px-4 py-3 text-gray-700">Multi-attractant, dual chamber</td>
                  <td className="px-4 py-3 text-gray-700">Yes &mdash; with refill kits</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Mixed pressure when you can&rsquo;t ID the wasp</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue why trap wasp hornet yellow jacket" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">RESCUE! Disposable bag<br /><span className="font-normal text-xs text-gray-500">pre-baited, add water</span></td>
                  <td className="px-4 py-3 text-gray-700">Pre-loaded attractant, water-activated</td>
                  <td className="px-4 py-3 text-gray-700">No &mdash; hang, fill, bin</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Events, cottages, zero-maintenance perimeters</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue disposable yellowjacket trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bottle-style refillable<br /><span className="font-normal text-xs text-gray-500">bait it yourself</span></td>
                  <td className="px-4 py-3 text-gray-700">Your bait: protein early season, sugar late</td>
                  <td className="px-4 py-3 text-gray-700">Yes &mdash; indefinitely</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Hands-on users running the seasonal bait switch</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="hanging wasp trap reusable bottle" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">In Canada a trap sold to attract flying insects, and the lure inside it, fall under the Pest Control Products Act: Health Canada&rsquo;s registry lists RESCUE!&rsquo;s heptyl butyrate disposable (W), cartridge and tube (PCP 35529&ndash;35531, first registered in December 2025), so check any trap or refill for a PCP number. Disposable bags are the cheapest way to start and the reusable bodies a one-time spend, with lure refills the only recurring cost.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="rescue reusable yellowjacket trap">RESCUE! reusable trap →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="rescue why trap wasp hornet yellow jacket">RESCUE! WHY Trap →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="rescue disposable yellowjacket trap">Disposable bag traps →</BuyLink>
          </div>

          <h2 id="situation">Which Yellow Jacket Trap for Your Situation?</h2>
          <ul>
            <li><strong>Yellow jackets at the patio table in August and September:</strong> two to four traps along the edge of the yard, 6 metres (20 ft) or more from seating, on the side they arrive from. RESCUE! says to hang its traps at least 20 feet from patios, decks and play areas, on trees, fence lines or the edge of the yard.</li>
            <li><strong>You want fewer nests next year:</strong> hang one trap in spring. RESCUE! says to start when days reach about 13&deg;C (55&deg;F), because early traps catch queens before they build nests.</li>
            <li><strong>A cottage, a rural property or one event weekend:</strong> disposable bags you hang, fill and throw out full.</li>
            <li><strong>You cannot tell which wasp is the problem:</strong> the W·H·Y Trap, which also covers paper wasps and hornets; RESCUE! says its yellowjacket traps do not.</li>
            <li><strong>Honey bees or a hive nearby:</strong> a commercial yellowjacket lure rather than sweet bait, and a splash of vinegar in any sugar bait you mix yourself.</li>
            <li><strong>A steady stream of yellow jackets into one hole:</strong> that is a nest, and no trap will remove it; the <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link> covers what does.</li>
          </ul>

          <h2>Yellow Jacket Trap Buyer&rsquo;s Checklist</h2>
          <ol>
            <li><strong>The formula.</strong> On a RESCUE! disposable, read the box for East or West of the Rockies. The reusable comes in one nationwide version.</li>
            <li><strong>A PCP number.</strong> Look for it on any baited trap or refill. Health Canada&rsquo;s December 2025 registration covers RESCUE!&rsquo;s heptyl butyrate disposable (W), cartridge and tube (PCP 35529&ndash;35531); check an East-formula bag for its own number.</li>
            <li><strong>Refills for the whole season.</strong> At 2 to 4 weeks per lure, May to September takes several; RESCUE! also sells a 10-week cartridge.</li>
            <li><strong>Enough traps.</strong> Two to four for a suburban lot, or one every 15 metres or so of exposed edge on a rural property.</li>
            <li><strong>Somewhere to hang them.</strong> A tree, fence or shepherd&rsquo;s hook at least 6 metres from where people sit, sunny, 1 to 2 metres up.</li>
            <li><strong>A plan for emptying.</strong> RESCUE! says to make sure every trapped yellowjacket is dead before you handle the trap: bag it and freeze it overnight.</li>
          </ol>

          <h2>Yellow Jacket Trapping — Key Facts</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best overall trap', 'RESCUE! Reusable Yellowjacket (one nationwide attractant)'],
                  ['The SKU to avoid in Ontario', 'YJTD-W "West of the Rockies" disposable — wrong attractant for eastern species'],
                  ['Peak aggression window', 'Mid-August to first hard frost (colonies at 1,000–4,000+ workers)'],
                  ['Early-season bait (May–Jul)', 'Protein — ham, fish, cat food (colony is feeding larvae)'],
                  ['Late-season bait (Aug–Sep)', 'Sugar — juice, sugar water, jam (workers are carb-starved)'],
                  ['Placement', '6+ m from seating, perimeter, sunny, 1–2 m high'],
                  ['Traps per suburban lot', '2–4 along the arrival-side perimeter'],
                  ['Spring queen trapping', 'Late April–May; each queen caught is a colony prevented'],
                  ['What traps cannot do', 'Kill the nest — trapping thins foragers only'],
                  ['Typical nest sites in Ontario', 'Underground burrows, wall voids, sheds, retaining walls'],
                  ['Honey bees', 'RESCUE! says its reusable trap is designed to prevent accidental capture of honey bees; DIY sweet bait draws them in (add vinegar)'],
                  ['PMRA status', 'Lures are pest control products: RESCUE!’s heptyl butyrate trap, cartridge and tube are registered (PCP 35529–35531); look for the number'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The Seasonal Bait Switch: Protein Early, Sugar Late</h2>
          <p>If you take one piece of trapping technique from this page, take this one, because it explains most &ldquo;my trap stopped working&rdquo; complaints. A yellow jacket colony&rsquo;s appetite flips mid-season:</p>
          <ul>
            <li><strong>May through July &mdash; protein phase.</strong> The colony is producing larvae at full speed, and larvae need protein. Workers spend these months hunting insects and scavenging meat, which is why early-summer yellow jackets hover over the burger, not the lemonade. In a refillable trap, a small chunk of ham, fish, or wet cat food out-pulls sweet bait decisively. Refresh protein bait every 2&ndash;3 days &mdash; once it dries or rots past a certain point, catch drops.</li>
            <li><strong>August through September &mdash; sugar phase.</strong> Larval production winds down, the sugary secretions larvae feed workers disappear, and thousands of adult workers go carbohydrate-hunting all at once. This is the pop-can-and-fruit-tree phase. Switch refillable traps to sugar water, fruit juice, or a spoon of jam in water &mdash; and add a splash of vinegar to keep honey bees out of the trap.</li>
          </ul>
          <p>Commercial attractant cartridges like RESCUE!&rsquo;s are blended to keep working across both phases, which is exactly what you are paying for versus DIY bait: consistency without the every-few-days maintenance. The DIY bottle trap wins only if you actually run the switch &mdash; a bottle of April sugar water hanging untouched in July is a wasp ornament.</p>

          <RelatedLinks path="/blog/best-yellow-jacket-trap-canada" />
          <h2>Placement: The 6-Metre Rule</h2>
          <p>Every attractant trap is, by definition, a wasp magnet &mdash; so the placement question is not &ldquo;where do I want to kill wasps?&rdquo; but &ldquo;where do I want to <em>send</em> them?&rdquo; The rules:</p>
          <ul>
            <li><strong>6 metres (20 feet) minimum from patios, decks, pools, and play areas.</strong> A trap on the patio table catches wasps while inviting every forager within range to your dinner. Push traps to the property edges.</li>
            <li><strong>Intercept the flight path.</strong> Watch where the yellow jackets arrive from &mdash; often the side facing a ravine, field, compost, or a neighbour&rsquo;s fruit tree &mdash; and hang traps between that direction and the space you are protecting.</li>
            <li><strong>Sunny and 1&ndash;2 metres up.</strong> Attractant volatilizes better in warm sun, and waist-to-head height sits in the natural foraging band.</li>
            <li><strong>Two to four traps beat one.</strong> Cover each active approach side of a suburban lot; ring larger rural properties roughly every 15 metres of exposed perimeter.</li>
            <li><strong>Service them.</strong> A trap packed solid with dead wasps loses airflow and scent throughput. Empty reusables (freeze the trap first if any are alive) and replace disposables before they are full.</li>
          </ul>
          <p>One more timing note that punches far above its weight: hang one trap in <strong>late April or May</strong>. Overwintered queens forage alone before founding nests, and every spring queen you catch is an entire 3,000-wasp August colony that never happens.</p>

          <h2>Honest Expectations: What a Trap-Out Actually Achieves</h2>
          <p>Here is the part the packaging glosses over. A well-placed, well-baited trap line will intercept hundreds of foragers a week at peak season, and the difference at your patio table is real &mdash; less bullying, fewer close encounters, a usable deck in September. What it will not do is eliminate a colony. The queen sits underground laying hundreds of eggs a week, the colony re-staffs faster than a trap skims it, and researchers who study mass-trapping programs consistently describe trapping as <em>suppression</em>, not control.</p>
          <p>So use traps for what they are: pressure management around the spaces you use. If you have located an <strong>active nest</strong> &mdash; a steady in-and-out stream at one hole in the lawn, a gap in the patio stones, or a vent &mdash; that is a different job with different tools and real sting risk, especially for ground nests, which can hold thousands of defenders you cannot see. Our guide to <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">getting rid of ground wasps</Link> walks through nest treatment step by step, our <Link href="/blog/best-wasp-nest-spray-canada">wasp nest spray guide</Link> covers the PMRA-registered products that are actually sold here, and if the nest is in a wall void or anywhere near an entrance, <Link href="/pest-control-cost-canada">professional wasp nest removal</Link> is genuinely the right call &mdash; it is one of the cheaper pro jobs in pest control.</p>
          <Photo id="yellowjacket-ground-nest" alt="Western yellowjackets at the entrance hole of a ground nest" caption="Western yellowjackets, Vespula pensylvanica, at the entrance of a ground nest. A steady stream in and out of one hole like this is a nest: a trap will not remove it." />

          <h2>The Grey-Market Trap (the Other Kind of Trap)</h2>
          <p>Late-summer desperation sends a lot of Canadians to US websites, and it is worth being blunt about what comes back. US-labelled sprays like Spectracide Wasp &amp; Hornet Killer, and especially the <strong>toxicant-laced yellow jacket bait stations</strong> marketed on American sites, are not PMRA-registered &mdash; they carry no Pest Control Products number, no Canadian label directions, and importing them for use here is illegal under the Pest Control Products Act. Poison baits are the worst of the bunch: a toxicant that yellow jackets carry off is also available to birds, pets, and beneficial insects, with no Canadian label safeguards.</p>
          <p>The tidy irony of this category is that you do not need any of it. A trap with a registered lure does the patio job without spraying anything &mdash; RESCUE!&rsquo;s heptyl butyrate trap, cartridge and tube carry PCP numbers 35529, 35530 and 35531 &mdash; and for the nest-treatment jobs where you genuinely need a pesticide, Canada has proper PMRA-registered foams and dusts, covered in our <Link href="/blog/best-wasp-nest-spray-canada">nest spray guide</Link>. Buy the Canadian-labelled version, always.</p>

          <h2>The Season Playbook for a GTA Backyard</h2>
          <ol>
            <li><strong>Late April&ndash;May:</strong> hang one reusable trap with fresh attractant to intercept overwintered queens.</li>
            <li><strong>June&ndash;July:</strong> low pressure; if running DIY bottle traps, bait with protein. Watch for developing traffic lines to one spot &mdash; that is a nest founding.</li>
            <li><strong>Mid-July:</strong> deploy the full perimeter line &mdash; 2&ndash;4 traps, 6+ m from seating &mdash; <em>before</em> the peak, so traps are established and drawing flight paths away from you.</li>
            <li><strong>August&ndash;September:</strong> switch DIY bait to sugar (plus vinegar), service traps weekly, keep garbage lidded and fallen fruit picked up &mdash; sanitation removes the competing buffet that out-competes your traps.</li>
            <li><strong>Found a nest?</strong> Stop trapping over it and treat it properly &mdash; see the <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link> &mdash; or price out a pro.</li>
            <li><strong>After first frost:</strong> colonies are dead. Clean reusable traps, store them dry, and note where this year&rsquo;s nests were &mdash; next spring&rsquo;s queens like the same habitat.</li>
          </ol>

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

          <h2>Related Wasp &amp; Hornet Guides</h2>
          <ul>
            <li><Link href="/blog/best-wasp-trap">Best Wasp Trap Canada &mdash; All Species Compared</Link></li>
            <li><Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY Trap Review &mdash; Canada</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-ground-wasps-canada">How to Get Rid of Ground Wasps (Ground-Nesting Yellow Jackets)</Link></li>
            <li><Link href="/blog/best-wasp-nest-spray-canada">Best Wasp Nest Spray Canada &mdash; What&rsquo;s PMRA-Legal</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps in Canada &mdash; Full Playbook</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada &mdash; What Professional Wasp Removal Runs</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="wasps and hornets" />
        <ReadNext path="/blog/best-yellow-jacket-trap-canada" />
      </article>
    </>
  )
}
