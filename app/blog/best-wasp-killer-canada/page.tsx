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

const SLUG = 'best-wasp-killer-canada'
const DATE = '2026-08-31'
const UPDATED = '2026-08-31'
const TITLE = 'Best Wasp Killer in Canada 2026 — Match the Weapon to the Nest'
const META_TITLE = 'Best Wasp Killer Canada'

const FAQS = [
  {
    question: 'What is the best wasp killer in Canada?',
    answer: 'There is no single best wasp killer — there is a best killer per nest type, and matching them is the entire game. For an exposed aerial paper nest, a PMRA-registered foam or long-range liquid jet applied at night: Raid and Wilson foams and the Ortho long-reach jet are the mainstream Canadian cans. For a ground nest with one entrance hole, a jet foam soaked into the entrance at dusk — foam expands down the tunnel where liquid only wets the rim. For a nest inside a wall void, none of the above: that is professional insecticidal-dust territory, and sealing or spraying the gap yourself usually drives the colony indoors. And if you cannot find a nest at all, traps reduce foraging pressure but eliminate nothing. Identify the architecture first; the product picks itself.',
  },
  {
    question: 'What kills wasps instantly?',
    answer: 'Every PMRA-registered wasp and hornet can on a Canadian shelf — foam or liquid — knocks down the wasps it directly contacts within seconds; the pyrethroid actives are fast. The catch is that instant knockdown of the wasps you can see is not the same as killing the nest. A daytime blast hits the handful of defenders on the envelope while a third of the colony is away foraging and the queen sits deep inside; the colony recovers and the returning foragers meet you in the yard. The nest dies when the whole colony is dosed at once — which is why the boring parts of the protocol, night application and full saturation of the entrance, matter more than which brand of instant you buy.',
  },
  {
    question: 'Foam or liquid spray for a wasp nest — which is better?',
    answer: 'Foam for most jobs, liquid jet for reach. Foam expands on contact, clings to the nest envelope instead of running off, blankets the entrance hole so returning wasps must crawl through treated material, and — critically for ground nests — physically expands down the entrance tunnel toward the galleries. Its trade-off is a shorter jet, typically in the 2 to 2.5 metre range. Long-range liquid cans throw a narrow stream 3 to 6 metres, which is what you want for a nest at the second-storey eave you can hit from the ground, but the liquid wets surfaces and drips rather than filling cavities. The working rule: foam whenever you can safely stand within its rated distance, liquid jet when the extra metres are the difference between standing on the ground and standing on a ladder — because the ladder is the wrong answer every time.',
  },
  {
    question: 'What is the best way to kill a ground wasp nest?',
    answer: 'Confirm the single entrance in daylight — a steady stream of yellow jackets in and out of one hole in the lawn or a soil bank — then return at dusk when the whole colony is home and sluggish, stand 2 to 3 metres back, and soak the entrance with a PMRA-registered jet foam until it is fully flooded. Leave the hole open — returning foragers crawling through the foam is part of the kill — walk away immediately, and check from a distance after 24 and 48 hours. Near-zero traffic within two days is the normal result. If the nest has multiple entrance holes, sits against a foundation, or feeds into a retaining wall or shed base, stop: that architecture defeats foam-through-one-hole, and it is the textbook case for a professional with insecticidal dust.',
  },
  {
    question: 'Do wasp traps actually work?',
    answer: 'They work at the job traps do, which is not the job most buyers want done. A baited trap intercepts foraging workers, which measurably thins the wasp pressure over a patio or around bins — worthwhile in spring, when catching emerging queens has outsized value, and during late-summer nuisance season. What a trap cannot do is eliminate a colony: a peak-season yellow jacket nest fields thousands of workers and rears replacements continuously, so a trap catching dozens a day is skimming interest, never touching principal. Use traps as pressure reduction around the space you are defending, placed away from where people sit rather than beside the table, and use a nest treatment — foam, jet, or a professional — as the actual elimination tool when a nest is findable.',
  },
  {
    question: 'Do fake wasp nest deterrents work?',
    answer: 'Mostly no, and the honest version is worth spelling out. The theory is that paper wasps avoid building near a rival colony, so a hanging decoy nest deters spring queens. In practice the effect is weak and inconsistent: some paper wasp species show mild territorial avoidance, but ground-nesting yellow jackets — the wasps behind most Canadian backyard misery — do not scout the airspace for rival paper globes at all, and established colonies are not displaced by decor. Reports of success are heavily confounded by the fact that most eaves never get a nest anyway. A decoy is a few dollars and harmless, so hang one if it makes August feel better — but do not let it substitute for sealing entry gaps, managing attractants, and treating the nests that appear.',
  },
  {
    question: 'When is the best time of day to spray a wasp nest?',
    answer: 'After dusk, or in the grey hour before sunrise — full stop, for every nest type and every product. During the day a large share of the colony is away foraging, so a daytime treatment kills the defenders at home and leaves the field force alive and agitated; at night the entire colony is present, the air is cooler, and wasps are sluggish and poor fliers in low light. Scout the nest and plan your approach and exit in daylight, then treat in the last usable light. Do not aim a white flashlight at the entrance — defenders launch at light sources; if you need light, use a red filter or position a light off to the side. Wear long sleeves and closed cuffs, apply from the full rated distance, and leave immediately rather than standing to admire the work.',
  },
  {
    question: 'Why are wasps so aggressive in September in Ontario?',
    answer: 'Because the colony economy collapses. All summer, workers forage for protein to feed larvae, and the larvae secrete sugars that feed the workers — a tidy internal exchange. By late August the queen stops laying, the larvae pupate, and the sugar tap shuts off just as colony populations hit their annual peak of thousands. The result is a horde of unemployed, sugar-starved workers with no brood duties and nothing to do but raid patios, fruit, pop cans, and garbage — right through until the first hard frosts kill the colony. It is not your imagination: the same yard that felt fine in July genuinely is more dangerous in September, and it is the season when treating nests near doors, decks, and play areas stops being optional.',
  },
  {
    question: 'What should I never use on a wasp nest?',
    answer: 'Four things, all field-tested failures. Gasoline or other fuel poured into a ground nest: an environmental offence, a fire and vapour hazard beside your house, a permanent dead patch in the lawn, and not even reliable at killing the colony. Boiling water: partly effective at best, and the pot-carrier is standing over an erupting nest with no protection. A shop vac at the entrance: a viral stunt that harvests foragers for days while the queen keeps laying. And sealing the entrance of an active nest in a wall or under siding: trapped colonies chew inward, and the failure mode is wasps in the living room. Every one of these has a cheaper, safer, legal alternative in a PMRA-registered can applied at dusk — or in a professional call for the architectures a can cannot solve.',
  },
  {
    question: 'When should I call a professional for a wasp nest?',
    answer: 'Five triggers take it out of DIY range regardless of how good the can is: the nest is inside a wall void, soffit, deck structure, or retaining wall, where the right tool is commercial-class insecticidal dust and the wrong move seals wasps into the house; the nest has multiple entrances; the nest is at height — anything requiring a ladder combines a defensive swarm with a fall risk, and no wasp job is worth that trade; anyone in the household has a known or suspected sting allergy; or it is late season and the colony is huge — September nests can hold several thousand workers, and the margin for error shrinks with the colony. A single-nest professional visit is one of the cheapest calls in Canadian pest control, and for void nests it is the only version of the job that ends well.',
  },
  {
    question: 'Do wasp nests die off on their own in winter in Canada?',
    answer: 'Yes — every yellow jacket, paper wasp, and bald-faced hornet colony in Canada dies with the sustained hard frosts of late fall. Only the newly mated queens survive, overwintering alone under bark, in leaf litter, or in structural crevices, and each starts a brand-new nest from scratch in spring; old nests are never reused. That calendar has practical consequences. A nest discovered in October in a spot bothering nobody can often simply be left to die on schedule. But do not let a wall-void nest die and then leave the entry gap open — the cavity that fit a colony this year advertises the same vacancy to next spring’s queens. Late fall and winter, once traffic is confirmed zero, is exactly the right time to seal gaps, re-bed lifted flashing, and screen vents.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The best wasp killer in Canada depends on the nest: foam vs jet spray vs dust vs traps matched to aerial, ground, and wall-void nests, plus the night protocol.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestWaspKillerCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to wasp killers — foam vs liquid jet vs insecticidal dust vs traps, matched to aerial, ground, wall-void, and unknown-source scenarios, with the distance ratings that matter, the night application protocol, and the honest verdict on fake-nest deterrents.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Wasp Killer Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Wasp Killer Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Foam, liquid jet, dust, or trap &mdash; the right wasp killer is decided by where the nest is, not by what the can promises. Here is every weapon on the Canadian shelf matched to its nest type, the distance ratings that actually matter, and the night protocol that makes any of them work.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Wilson WaspOut Wasp & Hornet Foam" search="wilson waspout wasp hornet foam" label="Best wasp killer" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best wasp killer in Canada is <strong>a PMRA-registered foam matched to the nest</strong>: a <strong>foam or long-range jet</strong> for exposed aerial nests, applied after dusk from the can&rsquo;s full rated distance; a <strong>jet foam flooded into the entrance</strong> for single-hole ground nests; a <strong>licensed professional with insecticidal dust</strong> for anything inside a wall, soffit, deck, or retaining wall &mdash; and <strong>traps only as pressure reduction</strong> when there is no findable nest, because no trap eliminates a colony. Night application is non-negotiable: it is the difference between dosing the whole colony and enraging a third of it.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Foam beats liquid</strong> wherever you can stand within 2&ndash;2.5 m: it clings to the envelope, blankets the entrance, and expands down ground tunnels.</li>
              <li><strong>Liquid jet earns its place at range</strong> &mdash; 3&ndash;6 m streams for high eaves you can reach from the ground. Never from a ladder.</li>
              <li><strong>Wall-void nests are not a DIY job</strong> &mdash; and sealing or spraying the gap usually drives the colony through the drywall.</li>
              <li><strong>Traps are prevention, not elimination:</strong> spring queen-trapping and patio pressure relief, nothing more.</li>
              <li><strong>Fake-nest deterrents:</strong> weak evidence, harmless, and no substitute for sealing gaps and treating real nests.</li>
              <li><strong>September is peak danger</strong> &mdash; colonies at maximum size, sugar-starved, and jobless until frost. Treat nests near doors and decks now, at night.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="wasps" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Wasp Killers by Nest Type"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Wilson WaspOut Wasp & Hornet Foam',
                why: 'The Canadian-label foam that covers the two most common jobs: blanketing an exposed aerial nest and flooding a single-entrance ground nest. The expanding foam clings to the envelope instead of running off and physically fills entrance tunnels — the geometry that decides ground nests — with a PCP number on the can and a label written for Canadian law.',
                search: 'wilson waspout wasp hornet foam',
                score: 9.1,
                featured: true,
                pros: ['Foam clings and blankets the entrance hole', 'The right physics for ground-nest tunnels', 'Canadian domestic-class, PMRA-registered'],
                cons: ['2–2.5 m jet — high nests need the long-range liquid instead', 'One nest can empty most of a can — buy two'],
              },
              {
                badge: 'Best Foam Alternative',
                name: 'Raid Wasp & Hornet Bug Killer (Canadian label)',
                why: 'The most widely stocked can in the country, and the one to grab when the hardware store is out of the Wilson. Same class of pyrethroid knockdown in a foaming formula; check the shelf for the Canadian-labelled can with a PCP registration number rather than a US import.',
                search: 'raid wasp hornet killer',
                score: 8.7,
                pros: ['On the shelf at every Canadian Tire, Home Depot, and grocery chain', 'Fast knockdown of contacted wasps', 'Foaming action covers the entrance'],
                cons: ['Jet distance is mid-pack — respect the label figure', 'US-label versions circulate online; buy the Canadian can'],
              },
              {
                badge: 'Best Long Reach',
                name: 'Ortho Home Defense Hornet & Wasp Jet',
                why: 'The distance pick: a narrow liquid stream with the longest practical reach of the mainstream Canadian cans, for the nest under a second-storey eave that foam cannot touch from the ground. The extra metres exist to keep both of your feet on the lawn — that is the whole reason to choose liquid over foam.',
                search: 'ortho home defense hornet wasp killer',
                score: 8.5,
                pros: ['Longest rated jet of the mainstream cans', 'Reaches high eaves with both feet on the ground', 'Precise stream for a defined entrance hole'],
                cons: ['Liquid runs off rather than clinging like foam', 'Wind shreds a long stream — pick a still night'],
              },
              {
                badge: 'Best Prevention',
                name: 'RESCUE! WHY Trap (Wasps, Hornets & Yellowjackets)',
                why: 'The honest role for a trap: intercepting foragers before they reach the patio, and catching spring queens before they found colonies at all. The WHY’s multi-species attractant makes it the most versatile of the reusable traps in Canada. It will thin the traffic over your table; it will never kill a nest, and it does not claim to.',
                search: 'rescue why trap wasp hornet yellowjacket',
                score: 8.2,
                pros: ['Real reduction in patio wasp pressure', 'Spring deployment catches colony-founding queens', 'Reusable across seasons with refill attractant'],
                cons: ['Eliminates nothing — pair with nest treatment', 'Place it away from people, not beside the table it protects'],
              },
              {
                badge: 'Honest Verdict',
                name: 'Fake Wasp Nest Decoy',
                why: 'Included because you will see it recommended everywhere, and the evidence deserves daylight: some paper wasps show mild avoidance of rival nests, ground-nesting yellow jackets ignore decoys entirely, and established colonies are not displaced by decor. Cheap, harmless, occasionally maybe helpful for one genus — a garnish, never the meal.',
                search: 'fake wasp nest deterrent decoy',
                score: 5.9,
                pros: ['Costs a few dollars and cannot hurt anything', 'Plausible mild deterrence for some paper wasps in spring'],
                cons: ['No effect on yellow jackets or existing nests', 'Sold with claims the evidence does not support'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Grey paper nest hanging in the open, reachable from the ground?</strong> The <em>Best Overall</em> Wilson foam &mdash; or the <em>Best Foam Alternative</em> Raid can &mdash; after dusk, full saturation. <strong>Nest up at a second-storey eave?</strong> The <em>Best Long Reach</em> Ortho jet, from the ground; if it cannot reach, neither can you &mdash; make the call instead of climbing. <strong>Hole in the lawn with commuter traffic?</strong> Foam again, flooded into the entrance at dusk &mdash; the full protocol is in our <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link>. <strong>Wasps disappearing into siding, soffit, or deck?</strong> None of the above: that is professional dust territory. <strong>No findable nest, just patio pressure?</strong> The <em>Best Prevention</em> WHY trap, placed away from the seating &mdash; and skip the decoy unless you enjoy the aesthetic.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Wasp Killer Match-Up &mdash; Canada 2026</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Nest situation</th>
                  <th className="px-4 py-3 text-left">Right weapon</th>
                  <th className="px-4 py-3 text-left">Why</th>
                  <th className="px-4 py-3 text-left">Buy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: 'Exposed aerial nest, within ~2.5 m', w: 'Foam', why: 'Clings to the envelope, blankets the entrance', search: 'wilson waspout wasp hornet foam' },
                  { s: 'Aerial nest at height, reachable from ground', w: 'Long-range liquid jet', why: '3–6 m stream keeps you off the ladder', search: 'ortho home defense hornet wasp killer' },
                  { s: 'Ground nest, one entrance hole', w: 'Jet foam at dusk', why: 'Foam expands down the tunnel toward the galleries', search: 'wilson one shot foam wasp hornet killer' },
                  { s: 'Wall void, soffit, deck, retaining wall', w: 'Professional insecticidal dust', why: 'Commercial-class tool; DIY sealing drives wasps indoors', search: '' },
                  { s: 'No findable nest — patio pressure', w: 'Baited trap, placed away from people', why: 'Thins foragers; eliminates nothing', search: 'rescue why trap wasp hornet yellowjacket' },
                  { s: 'Spring, before colonies establish', w: 'Queen trapping + gap sealing', why: 'One April queen caught is one August nest prevented', search: 'rescue why trap wasp hornet yellowjacket' },
                ].map(({ s, w, why, search }) => (
                  <tr key={s} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{s}</td>
                    <td className="px-4 py-3 text-gray-700">{w}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{why}</td>
                    <td className="px-4 py-3">{search ? <BuyLink tag={AMZ_TAG} search={search} block>Check on Amazon.ca &rarr;</BuyLink> : <span className="text-xs text-gray-500">Hire licensed &mdash; see below</span>}</td>
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

          <h2>What Is the Best Wasp Killer in Canada?</h2>
          <p>A foam can matched to the nest in front of you &mdash; and the honest expansion of that answer is that <strong>the nest picks the product</strong>. The wasp aisle sells four different weapons that look interchangeable on the shelf and are not: foams, long-range liquid jets, insecticidal dusts, and traps. Each one is excellent at exactly one nest architecture and mediocre-to-useless at the others, and nearly every wasp-control failure we hear about traces back to a mismatch &mdash; liquid sprayed at a ground hole, a trap hung beside a wall-void nest, dust puffed at an aerial globe.</p>
          <p>So before buying anything, answer one question: <strong>where is the nest?</strong> Hanging in the open; in the ground; inside the structure; or nowhere you can find. Those four answers map to four different purchases, and the sections below take them in order &mdash; with the September caveat up front that late-season colonies are at maximum size and maximum irritability, which makes the protocol discipline matter more now than in June.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="wilson waspout wasp hornet foam">Wilson WaspOut foam &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="raid wasp hornet killer">Raid Wasp &amp; Hornet &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="ortho home defense hornet wasp killer">Ortho long-reach jet &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="rescue why trap wasp hornet yellowjacket">RESCUE! WHY trap &rarr;</BuyLink>
          </div>

          <h2>Foam vs Liquid Jet: The Distance Rating Is the Product</h2>
          <p>The two can formats on Canadian shelves split one job between them, and the split is measured in metres.</p>
          <p><strong>Foam is the better killer.</strong> It expands on contact, clings to a nest envelope instead of sheeting off, blankets the entrance hole so every returning forager crawls through treated material, and &mdash; the property nothing else in the aisle has &mdash; expands down enclosed passages. On a ground nest, that expansion carries product toward galleries a liquid stream can never reach; on an aerial nest, it turns the envelope into a treated surface rather than a wet one. The cost is reach: mainstream Canadian foams are rated in the <strong>2 to 2.5 metre</strong> band, and the honest planning figure is the low end of whatever the label says, because arcs droop and nerves shorten throws.</p>
          <p><strong>Liquid jet is the better arm.</strong> The narrow-stream cans rate <strong>3 to 6 metres</strong>, and that number exists for one purpose: hitting a nest under a second-storey eave with both of your feet on the lawn. A ladder plus a defensive swarm is the worst risk-stack in home maintenance &mdash; the sting is survivable, the fall is the injury &mdash; so the extra metres are a safety feature, not a convenience. The trade is that liquid wets and drips rather than filling and clinging, which is why it loses to foam everywhere the foam can physically reach.</p>
          <p>Rule of thumb: <strong>buy foam by default, buy the long jet when the nest is high, and if the long jet cannot reach it from the ground, neither can you</strong> &mdash; that nest belongs to a professional. Our <Link href="/blog/best-wasp-nest-spray-canada">full Canadian wasp spray round-up</Link> compares every registered can label by label.</p>

          <h2>Dust: The Best Weapon You Mostly Cannot Buy</h2>
          <p>For nests inside things &mdash; wall voids, soffits, deck framing, retaining walls, multi-entrance ground colonies &mdash; the professional answer is insecticidal <strong>dust</strong>, puffed into the entrance so that every wasp walking through tracks it into the galleries and onto the queen. It is the single most effective wasp-killing technique ever developed for enclosed nests, and in Canada its benchmark product, Delta Dust, is <strong>commercial-class: licensed applicators only</strong>. The American puff-it-yourself advice that dominates search results does not survive the border crossing, and grey-market cans carry no legal homeowner use here.</p>
          <p>We wrote a full guide to <Link href="/blog/wasp-dust-canada">wasp dust in Canada</Link> &mdash; the mechanism, the legality line, and the legal near-equivalents &mdash; but the operational summary belongs on this page too: <strong>if wasps are entering the structure, stop shopping and start dialling.</strong> The two DIY instincts at a wall entrance, spraying the gap and sealing it, are respectively useless (the colony is metres away inside the void) and catastrophic (a sealed colony chews inward, and the failure mode is wasps in the living room). A single-nest professional visit is one of the cheaper calls in Canadian pest control &mdash; our <Link href="/pest-control-cost-canada">cost guide</Link> has typical ranges &mdash; and void nests are exactly what the fee is for.</p>

          <h2>Traps: Prevention, Honestly Priced</h2>
          <p>Traps occupy a strange position in the wasp aisle: genuinely useful, and almost universally bought for the wrong job. A baited trap &mdash; the reusable RESCUE! WHY being the Canadian standard, with disposable bag traps as the high-volume budget option &mdash; intercepts <em>foraging workers</em>. Hung correctly, it thins the traffic over a patio in a way you can see in the trap by the end of a weekend.</p>
          <p>What it cannot do is subtract a colony. A peak-season yellow jacket nest fields <strong>thousands of workers</strong> and rears replacements continuously; a trap catching fifty a day is skimming interest off a population that compounds faster than the trap collects. The arithmetic only flips in <strong>spring</strong>, when every wasp on the wing is a mated queen shopping for a nest site &mdash; one April catch genuinely is one August colony prevented, which makes early-season trapping the highest-value hang of the year.</p>
          <p>Placement is the other half: a trap is a wasp <em>attractant</em>, so it goes at the yard&rsquo;s edge, upwind of and away from the table it is defending &mdash; never beside the seating. Our <Link href="/blog/best-wasp-trap">wasp trap guide</Link> and <Link href="/blog/best-yellow-jacket-trap-canada">yellow jacket trap guide</Link> cover models, baiting through the season, and the placement geometry in detail.</p>

          <h2>The Night Protocol That Makes Any of It Work</h2>
          <p>Whatever can you buy, the application discipline is identical, and it is where the outcome is decided:</p>
          <ul>
            <li><strong>Scout in daylight.</strong> Find the entrance (or entrances &mdash; more than one means stop and call), plan your approach, and plan the exit you will use without looking.</li>
            <li><strong>Treat after dusk</strong>, when the whole colony is home and flight-sluggish. A daytime blast misses the third of the colony that is out foraging and turns it into your problem for the rest of the afternoon.</li>
            <li><strong>No white light at the entrance.</strong> Defenders launch at light. Work in the last natural light, or keep a red-filtered light off to one side.</li>
            <li><strong>Dress for it:</strong> long sleeves, closed cuffs, closed shoes; anyone doing this more than once a year should own real protection.</li>
            <li><strong>Apply from the full rated distance</strong> and do not ration the can &mdash; saturate the envelope and entrance (aerial) or flood the hole until foam stands proud (ground). Half a can is how re-treatments happen.</li>
            <li><strong>Leave the entrance open, leave immediately,</strong> and verify from a distance at 24 and 48 hours. Persistent traffic after two days earns one re-treatment; persistent traffic after that earns a professional.</li>
          </ul>
          <p>And the standing rule above all of it: <strong>no ladders, no allergies, no exceptions.</strong> Any nest above comfortable ground reach, and any household with a known or suspected sting allergy, moves the whole job to a pro before the first can is bought.</p>

          <h2>September: The Month That Sells the Most Wasp Killer</h2>
          <p>If you found this page in late summer, the timing is not a coincidence. Canadian wasp colonies peak in size in late August and September &mdash; several thousand workers in a mature yellow jacket nest &mdash; at exactly the moment the colony&rsquo;s internal economy shuts down. The queen stops laying, the last larvae pupate, and the sugar the larvae supplied to the workers stops flowing. The result is the September yard everyone recognizes: clouds of unemployed, sugar-starved workers working the patio table, the fruit tree, the pop can, and the bins, with none of the brood-tending focus that kept them businesslike in July.</p>
          <p>The practical read on the season: <strong>nests near doors, decks, play structures, and bin storage are worth treating now</strong>, at night, by the protocol above &mdash; the colonies only get bigger and touchier until frost. Nests discovered in out-of-the-way corners in late September can often simply be left: every Canadian colony dies with the first sustained hard frosts, old nests are never reused, and the durable off-season work is sealing the gaps, flashing lifts, and vents that will otherwise host next spring&rsquo;s queens. The full seasonal playbook &mdash; identification, prevention, and month-by-month strategy &mdash; is in our <Link href="/blog/how-to-get-rid-of-wasps-canada">complete Canadian wasp control guide</Link>.</p>

          <h2>Wasp Killers &mdash; Key Facts for Canada</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Exposed aerial nest', 'Foam within ~2.5 m; long-range liquid jet for height — always at night'],
                  ['Ground nest, single hole', 'Jet foam flooded into the entrance at dusk; leave the hole open'],
                  ['Wall void / soffit / deck', 'Professional insecticidal dust — never DIY-seal or spray the gap'],
                  ['No findable nest', 'Baited traps as pressure relief, placed away from people'],
                  ['Foam rated reach', '~2–2.5 m on mainstream Canadian cans'],
                  ['Liquid jet rated reach', '~3–6 m — the keep-off-the-ladder allowance'],
                  ['Trap honest role', 'Forager interception and spring queen-trapping; never elimination'],
                  ['Fake nest decoys', 'Weak, species-limited evidence; harmless; not a control plan'],
                  ['Best treatment window', 'After dusk or pre-dawn — whole colony home, flight-sluggish'],
                  ['September factor', 'Peak colony size + no brood duties + sugar hunger = worst aggression of the year'],
                  ['Colony lifespan', 'Every Canadian nest dies at sustained hard frost; nests are never reused'],
                  ['Hire a pro when', 'Voids, multiple entrances, height, allergies, or thousand-wasp late-season colonies'],
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
            <li><Link href="/blog/how-to-get-rid-of-ground-wasps-canada">How to Get Rid of Ground Wasps in Canada &mdash; The Dusk Foam Protocol</Link></li>
            <li><Link href="/blog/wasp-dust-canada">Wasp Dust in Canada &mdash; Why Pros Use It, and What Is Legal</Link></li>
            <li><Link href="/blog/best-wasp-nest-spray-canada">Best Wasp Nest Spray Canada &mdash; Every PMRA-Registered Can Compared</Link></li>
            <li><Link href="/blog/best-wasp-trap">Best Wasp Traps Canada &mdash; What Traps Can and Cannot Do</Link></li>
            <li><Link href="/blog/best-yellow-jacket-trap-canada">Best Yellow Jacket Trap Canada &mdash; Baiting Through the Season</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps in Canada &mdash; The Complete Guide</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="wasps" />
      </article>
    </>
  )
}
