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

const SLUG = 'best-wasp-trap-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Best Wasp Traps in Canada: Bag, Sticky, Reusable and DIY Compared'
const META_TITLE = 'Best Wasp Traps Canada 2026: Bag vs Reusable'

const FAQS = [
  {
    question: 'What is the best wasp trap in Canada?',
    answer: 'The RESCUE! WHY Trap is the best wasp trap for most Canadian yards in 2026. It is the only mainstream consumer trap designed to catch all three problem groups — wasps, hornets, and yellowjackets — using a double-chamber design with separate attractants for each. It is reusable season after season; you only rebuy the attractant refill kits. For paper wasps specifically, which mostly ignore scent lures, the RESCUE! TrapStik (a visual-pattern sticky trap) is the better tool, and disposable bag traps are the cheapest way to knock down a late-summer yellowjacket spike around garbage bins.',
  },
  {
    question: 'Do wasp traps actually work?',
    answer: 'Yes — but for population thinning and interception, not instant relief. A well-placed trap intercepts foraging workers before they reach your patio and, in spring, can catch overwintered queens before they found nests. What no hanging trap does is eliminate an established nest: a mature colony holds hundreds to thousands of workers and rears replacements faster than any trap catches them. Use traps to reduce pressure on the areas you use, and treat or remove the nest itself to end the problem.',
  },
  {
    question: 'When should I put wasp traps out in Canada?',
    answer: 'Two windows. First, early spring (mid-April to late May in southern Ontario): overwintered queens are foraging alone before founding nests, and every queen trapped is potentially an entire nest that never gets built. Second, late summer (August to mid-September): colonies hit peak population, larvae stop supplying the sugary secretions workers feed on, and thousands of suddenly sweet-hungry workers descend on patios, fruit, and pop cans. If you are reading this in August, hang traps today — this is the annual worker spike.',
  },
  {
    question: 'Where should I hang a wasp trap?',
    answer: 'About 6 to 9 metres (20 to 30 feet) away from the space you want to protect — never on the patio itself. A trap is an attractant device: hang it beside your picnic table and you are pulling every wasp in the neighbourhood into your lunch. Place traps along the yard perimeter between likely wasp traffic (fences, garbage area, fruit trees, wild hedge lines) and your seating area, 1 to 2 metres off the ground, ideally in sun. Keep them away from doors, play structures, and hummingbird feeders.',
  },
  {
    question: 'What attracts yellowjackets vs paper wasps?',
    answer: 'They respond to completely different cues, which is why one trap rarely catches both. Yellowjackets follow food odours — heptyl butyrate (a synthetic fruit-ester lure), sweet liquids, and in early summer, protein like meat scraps. Paper wasps largely ignore those scent lures; they are visual hunters, which is why the RESCUE! TrapStik works on them — its VisiLure colour pattern draws them onto a glue surface. One honest caveat for Ontario and Quebec: heptyl butyrate is most powerful on western yellowjacket species, and some eastern species respond less strongly, which is why multi-attractant traps like the WHY Trap out-fish single-lure bottle traps here.',
  },
  {
    question: 'Do wasp traps need to be registered with Health Canada?',
    answer: 'No — and that is one of their quiet advantages. Traps and sticky boards are devices, not pesticides, so they do not require PMRA (Pest Management Regulatory Agency) registration the way any insecticide spray, foam, or dust does. Every legal wasp spray in Canada must carry a PCP registration number on the label; a trap needs none. That makes traps the zero-paperwork, zero-restriction first move for any Canadian household — including condo balconies and rental properties where spraying may not be allowed.',
  },
  {
    question: 'Do DIY pop-bottle wasp traps work?',
    answer: 'Barely. An inverted 2L bottle with sugar water catches some wasps — but in side-by-side use it underperforms commercial traps badly. Sugar water alone is weakly attractive compared with a heptyl butyrate lure, the wide opening lets a meaningful share of wasps walk back out, drowning is slow, and sweet liquid also pulls in flies, moths, and the occasional bee. A bottle trap is better than nothing during an August picnic emergency, but as a season strategy it is the weakest option on this page — and it needs re-brewing every few days.',
  },
  {
    question: 'Will a wasp trap get rid of a nest?',
    answer: 'No. A trap picks off foraging workers one at a time; a mature late-summer colony can contain several thousand and the queen keeps laying replacements. If you can see an active nest — under the eaves, in a wall void, or a ground nest in the lawn — you need nest treatment, not more traps. See our guides to the best PMRA-registered wasp nest sprays and to dealing with ground-nesting wasps, and for wall-void or high nests, get a licensed exterminator quote before anyone climbs a ladder at dusk.',
  },
  {
    question: 'Are wasp traps safe around bees?',
    answer: 'Mostly, if you choose and place them well. Heptyl butyrate yellowjacket lures have low attraction for honey bees, which is why they are the standard. Sweet liquid traps (including DIY bottle traps) are the bigger bycatch risk. With sticky traps, placement matters most: hang a TrapStik away from flowering plants and feeders, and choose the version with a protective cage if birds visit your yard — the open glue surface has a documented history of catching small birds and this is the fix RESCUE! shipped for it.',
  },
  {
    question: 'How many wasp traps do I need?',
    answer: 'For a typical Canadian suburban lot, two to four. One trap is a point defence; a small perimeter is a strategy. Place one near the garbage/recycling area (the number-one yellowjacket magnet), one between the main wasp approach direction and your patio, and add one near fruit trees or a back fence line if pressure is high. Re-lure on schedule — a WHY Trap attractant runs about two weeks — because an empty-smelling trap catches nothing and quietly convinces you traps do not work.',
  },
  {
    question: 'Why are there suddenly so many wasps in late August?',
    answer: 'It is the colony life cycle, not bad luck. All season, workers hunted protein for larvae, and larvae repaid them with sweet secretions. In late August the queen stops laying workers, larvae dwindle, and the sugar tap turns off — leaving thousands of workers at peak population with nothing to do but hunt sweets: fallen fruit, pop, juice, ice cream. The colony will die with the first hard frosts (only new queens overwinter), but the four to six weeks before that are the worst wasp pressure of the Canadian year, and the window when traps earn their keep.',
  },
  {
    question: 'Where can I buy wasp traps in Canada?',
    answer: 'Canadian Tire is the default stop and usually carries reusable traps, disposable bag traps, and sticky traps; Home Depot Canada stocks them in the garden-centre aisle; grocery and hardware stores tend to carry disposable bag traps only. Amazon.ca is the one channel that is not seasonal and the most reliable place to find attractant refill cartridges later in the summer. The catch is timing: wasp traps are seasonal stock that is strongest from May to July and thinning by late August — exactly when the worker spike sends everyone looking at once. Buy the trap and its refills together, and check the retailer listing before driving anywhere, because stock varies store to store.',
  },
  {
    question: 'What is a wasp bag trap, and is it the same as a wasp nest bag?',
    answer: 'No, and the mix-up is common. A disposable wasp bag trap is a pre-baited pouch you fill with water to the line and hang; it catches yellowjackets, is single-use, and gets thrown out full. Paper wasps and most hornets ignore its lure entirely. A "wasp nest bag" is something different — a decoy paper-lantern nest meant to discourage wasps from building nearby. A decoy is a deterrent, not a trap, and catches nothing. If you wanted something that actually collects wasps, you want the bag trap, not the decoy nest.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Reusable, sticky, disposable bag and DIY wasp traps compared for Canadian yards, plus where to hang them, when to set them out, and where to buy.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-wasp-trap-canada')

export default function BestWaspTrapCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian comparison of the RESCUE! WHY Trap, TrapStik, disposable bag traps, and DIY bottle traps, with queen-vs-worker timing, placement science, and Canadian PMRA context.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Wasp Traps Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Wasp Traps Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Reusable attractant traps, sticky visual traps, disposable bag traps, and the DIY pop bottle — compared honestly for Canadian yards, with the spring-queen and August-worker timing that decides whether any of them work.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="RESCUE! WHY Trap (wasps, hornets & yellowjackets)" search="rescue why trap wasp hornet yellowjacket" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best wasp trap in Canada is the RESCUE! WHY Trap — a reusable double-chamber trap whose multi-part attractant targets wasps, hornets, and yellowjackets at once, so you buy the trap once and only replace lure refills. Choose the RESCUE! TrapStik for paper wasps (they ignore scent lures but land on its visual pattern), and cheap disposable bag traps for a late-summer yellowjacket blitz around garbage bins.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Hang traps 6&ndash;9 metres away from your patio, never on it &mdash; a trap attracts wasps, so it must intercept them, not invite them to lunch.</li>
              <li>Two trapping windows matter in Canada: spring queens (April&ndash;May, one queen caught = one nest never built) and the August&ndash;September worker spike.</li>
              <li>Yellowjackets follow scent lures like heptyl butyrate; paper wasps hunt visually and need a sticky visual trap instead.</li>
              <li>Traps are devices &mdash; no Health Canada PMRA registration needed &mdash; while every legal wasp spray must carry a PCP registration number.</li>
              <li>A DIY pop-bottle trap barely works: weak lure, escapes, slow drowning, and pollinator bycatch.</li>
              <li>No hanging trap eliminates an active nest &mdash; a mature colony out-breeds any trap; treat or remove the nest itself.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="wasps" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Wasp Traps in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'RESCUE! WHY Trap (Wasps, Hornets & Yellowjackets)',
                why: 'The only mainstream trap engineered for all three problem groups at once — a double-chamber design with separate top and bottom attractants. Reusable for years; you only rebuy the modestly priced lure refills.',
                search: 'rescue why trap wasp hornet yellowjacket',
                score: 9.0,
                featured: true,
                pros: ['Catches wasps, hornets AND yellowjackets', 'Reusable — refills cost far less than new traps', 'Multi-lure out-fishes single-scent traps on eastern species'],
                cons: ['Needs attractant refills every ~2 weeks', 'Emptying a chamber of wasps is not for everyone'],
              },
              {
                badge: 'Best No-Chemical',
                name: 'RESCUE! TrapStik for Wasps',
                why: 'A glue trap with a VisiLure visual pattern — the only style that reliably catches paper wasps, which mostly ignore scent lures. No attractant, no liquid, no odour; just hang it and replace when full.',
                search: 'rescue trapstik for wasps',
                score: 8.2,
                pros: ['Works on visually-hunting paper wasps', 'Zero attractant or chemical — nothing to refill', 'Also snags mud daubers and carpenter bees'],
                cons: ['Glue surface can catch small birds — use the caged version', 'Single-use once the surface is full or dusty'],
              },
              {
                badge: 'Best Budget',
                name: 'RESCUE! Disposable Yellowjacket Bag Trap',
                why: 'A pre-baited water-activated bag you hang, fill to the line, and throw out full. The cheapest effective way to blunt an August yellowjacket spike around garbage bins and fruit trees.',
                search: 'rescue disposable yellowjacket trap',
                score: 7.4,
                pros: ['Lowest cost of entry — grab several', 'Zero contact with the catch: bag it and bin it', 'Great for cottage weekends and one-off events'],
                cons: ['Yellowjackets only — paper wasps ignore it', 'Single-use; a full season of bags adds up'],
              },
            ]}
            whichToBuy={
              <>
                <strong>General wasp pressure and want one long-term tool?</strong> The <em>Best Overall</em> WHY Trap covers every species group and is the cheapest per season once you own it. <strong>Paper wasps building umbrella nests under your eaves?</strong> Only the <em>Best No-Chemical</em> TrapStik catches visual hunters — scent traps will disappoint you. <strong>Sudden August yellowjacket swarm at the garbage bins?</strong> Hang two or three <em>Best Budget</em> disposable bags 6&ndash;9 m out and throw them away full. And if you can see an active nest, no trap will fix it &mdash; start with our <Link href="/blog/best-wasp-nest-spray-canada">wasp nest spray guide</Link> instead.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Trap Types Compared &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">The 4 Kinds of Wasp Trap (and What Each Actually Catches)</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            &ldquo;Wasp trap&rdquo; covers four very different tools, and the biggest mistake Canadian buyers make is using a yellowjacket scent trap against paper wasps &mdash; or vice versa. Here is the honest breakdown, with a live Amazon.ca price check per type.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Trap type</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Catches</th>
                  <th className="px-4 py-3 text-left">Reusable?</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Reusable attractant<br /><span className="font-normal text-xs text-gray-500">RESCUE! WHY Trap</span></td>
                  <td className="px-4 py-3 text-gray-700">Double chamber with separate multi-part lures; wasps enter, can&rsquo;t navigate out</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best coverage</strong> &mdash; wasps, hornets &amp; yellowjackets</td>
                  <td className="px-4 py-3 text-gray-700">Yes &mdash; refill lures ~every 2 weeks</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue why trap wasp hornet yellowjacket" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Sticky visual<br /><span className="font-normal text-xs text-gray-500">RESCUE! TrapStik</span></td>
                  <td className="px-4 py-3 text-gray-700">VisiLure colour pattern draws wasps onto a glue surface &mdash; no scent, no liquid</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Paper wasps</strong>, mud daubers, carpenter bees</td>
                  <td className="px-4 py-3 text-gray-700">No &mdash; replace when full</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue trapstik for wasps" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Disposable bag<br /><span className="font-normal text-xs text-gray-500">RESCUE! yellowjacket bags</span></td>
                  <td className="px-4 py-3 text-gray-700">Pre-baited bag; add water to activate, hang, discard when full</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Yellowjackets only</strong> &mdash; paper wasps ignore it</td>
                  <td className="px-4 py-3 text-gray-700">No &mdash; single-use</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue disposable yellowjacket trap" block>Check price →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">DIY pop bottle<br /><span className="font-normal text-xs text-gray-500">Inverted 2L + sugar water</span></td>
                  <td className="px-4 py-3 text-gray-700">Sweet liquid in an inverted bottle top; wasps enter and (sometimes) drown</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Barely works</strong> &mdash; weak lure, escapes, bee bycatch</td>
                  <td className="px-4 py-3 text-gray-700">Re-brew every few days</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; and worth it</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            All three commercial picks are widely stocked in Canada at Canadian Tire, Home Depot Canada, and Amazon.ca. Buy attractant refills at the same time &mdash; supply thins out by late August every year.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Traps thin, they don&rsquo;t eliminate.</strong> A mature colony holds hundreds to thousands of workers and replaces losses daily. If you can see an active nest, you need nest treatment, not more traps &mdash; start with our <Link href="/blog/best-wasp-nest-spray-canada" className="text-emerald-700 underline font-semibold">PMRA-registered nest spray guide</Link> or the full <Link href="/blog/how-to-get-rid-of-wasps-canada" className="text-emerald-700 underline font-semibold">get-rid-of-wasps playbook</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 border-b border-navy-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Where to Buy in Canada &middot; Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Where to Buy Wasp Traps in Canada</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Wasp traps are seasonal stock in Canada, and that single fact drives most of the frustration. Shelf space appears with the spring garden reset and is cleared out for back-to-school &mdash; which is precisely when the <strong>August worker spike</strong> hits and everyone goes looking at once. The refills are the first thing to disappear, so if you run a reusable trap, buy the attractant when you buy the trap.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Where you&rsquo;re shopping</th>
                  <th className="px-4 py-3 text-left">Typically carries</th>
                  <th className="px-4 py-3 text-left">Worth knowing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Canadian Tire', 'Reusable traps, disposable bag traps, sticky traps', 'The default Canadian stop for wasp traps. Seasonal planogram — strongest May–July, thin by late August.'],
                  ['Home Depot Canada', 'Reusable traps, bag traps, nest sprays', 'Garden-centre aisle. Often still has stock when the trap shelf elsewhere is picked over.'],
                  ['Amazon.ca', 'Full range plus attractant refills', 'The only channel that reliably carries refill cartridges after midsummer, and it is not seasonal.'],
                  ['Grocery & hardware', 'Disposable bag traps mostly', 'Convenient for a one-off August blitz; rarely stocks refills or sticky traps.'],
                  ['Garden centres', 'Varies by store', 'Staff can usually tell you what is actually moving locally — useful in a bad wasp year.'],
                ].map(([where, carries, note]) => (
                  <tr key={where} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800 whitespace-nowrap">{where}</td>
                    <td className="px-4 py-3 text-gray-800">{carries}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Stock and pricing change constantly and vary by store &mdash; check the retailer&rsquo;s own listing before you drive anywhere. Availability notes above describe the usual Canadian seasonal pattern, not a live inventory check.
          </p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-8 mb-3">&ldquo;Wasp bag traps&rdquo; &mdash; what people are actually asking for</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            A large share of Canadians searching for wasp traps are specifically after the <strong>hanging bag</strong> &mdash; the pre-baited pouch you fill with water to the line, hang, and throw out when it is full. It is worth being clear about what that product is and is not, because the name gets used loosely:
          </p>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5 mb-4">
            <li><strong>A disposable bag trap</strong> catches yellowjackets. Its lure is yellowjacket-tuned, so paper wasps and most hornets ignore it entirely. If umbrella nests under your eaves are the problem, a bag trap will hang there all summer catching nothing.</li>
            <li><strong>It is single-use.</strong> Cheap per unit, but covering May to September on bags alone costs more than one reusable trap plus refills. Bags are the right call for a party, a cottage weekend, or a sudden spike at the bins.</li>
            <li><strong>A &ldquo;wasp nest bag&rdquo; is a different thing.</strong> Decoy nests are paper-lantern deterrents meant to discourage new nest-building, not traps &mdash; they catch nothing at all. If you searched for one expecting a trap, that is the mix-up.</li>
          </ul>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-emerald-800">Buying for a GTA yard?</strong> Southern Ontario&rsquo;s worst wasp pressure lands in <strong>August and early September</strong>, and that is the same fortnight the trap shelf empties. Hang traps at the perimeter before the spike rather than during it &mdash; and remember that a trap thins foragers but never removes a nest. If wasps are streaming from a hole in the lawn or a gap in the siding, see the <Link href="/blog/how-to-get-rid-of-ground-wasps-canada" className="text-emerald-700 underline font-semibold">ground-nesting wasp guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Wasp Trap Buying — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best all-round trap', 'RESCUE! WHY Trap — wasps, hornets & yellowjackets in one'],
                  ['Best for paper wasps', 'Sticky visual trap (RESCUE! TrapStik) — they ignore scent lures'],
                  ['Cheapest effective option', 'Disposable pre-baited bag traps (yellowjackets only)'],
                  ['Weakest option', 'DIY pop-bottle trap — weak lure, escapes, bee bycatch'],
                  ['Placement distance', '6–9 m (20–30 ft) from patios and doors, 1–2 m high'],
                  ['Spring window', 'April–May queen trapping — one queen = one prevented nest'],
                  ['Late-summer window', 'August–mid-September worker spike (peak pressure of the year)'],
                  ['Yellowjacket lure', 'Heptyl butyrate + sweets (strongest on western species)'],
                  ['Paper wasp lure', 'None — visual pattern traps only'],
                  ['Attractant refresh', 'About every 2 weeks for the WHY Trap'],
                  ['Nest elimination', 'No trap does this — treat or remove the nest itself'],
                  ['Health Canada status', 'Traps are devices — no PMRA registration required (sprays need one)'],
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

          <h2>What Is the Best Wasp Trap in Canada?</h2>
          <p>The RESCUE! WHY Trap is the best wasp trap for most Canadian yards, and the reason is in the name: W&middot;H&middot;Y stands for wasps, hornets, and yellowjackets, and it is the only mainstream consumer trap engineered to catch all three. That matters more in Canada than the marketing suggests, because most people cannot identify which of the three is ruining their deck &mdash; and the wrong trap for the species catches almost nothing.</p>
          <p>The structure of this market is simple once you see it. Yellowjackets (the aggressive, ground- and void-nesting picnic raiders) follow <em>scent</em> &mdash; food odours and synthetic fruit-ester lures. Paper wasps (the long-legged umbrella-nest builders under your eaves) hunt by <em>sight</em> and largely ignore scent lures entirely. Bald-faced hornets respond to yet another attractant profile. A single-lure bottle trap picks one lane; the WHY Trap&rsquo;s double-chamber, multi-attractant design covers all of them, which is why it consistently out-fishes cheaper single-scent traps in Canadian yards &mdash; especially in Ontario and Quebec, where some eastern yellowjacket species respond only weakly to the heptyl butyrate lure that dominates western-market traps.</p>
          <p>Just as important for the long game: the WHY Trap is <strong>reusable</strong>. You buy the trap once, then rebuy only the attractant refill kits &mdash; a small fraction of the cost of a new trap &mdash; each season. Over two or three Canadian summers, refills-only arithmetic works out cheaper than replacing a disposable trap every time one fills up or fails.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the three picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="rescue why trap wasp hornet yellowjacket">RESCUE! WHY Trap →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="rescue trapstik for wasps">TrapStik for Wasps →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="rescue disposable yellowjacket trap">Disposable bag traps →</BuyLink>
          </div>

          <h2>Why the RESCUE! WHY Trap Wins</h2>
          <p>Mechanically, the WHY Trap is two traps stacked into one. The top chamber uses a hanging attractant cartridge for airborne foragers; the bottom chamber holds a liquid attractant that draws a different feeding profile. Wasps enter through cone openings that are easy to fly into and confusing to exit &mdash; the same one-way principle as a minnow trap &mdash; and exhaust themselves inside. There is no zapping, no propellant, and nothing under pressure: it is pure behavioural engineering.</p>
          <p>In practice, three things separate it from the field. First, coverage: it is the trap you buy when you have not keyed out your species, which is nearly everyone. Second, the refill economics above. Third, longevity &mdash; the housing is rigid plastic that shrugs off Canadian UV and rain for multiple seasons, where bag traps sag and bottle traps cloud over in weeks. The honest cons: the attractant needs refreshing roughly every two weeks (an exhausted lure catches nothing and quietly convinces people traps &ldquo;don&rsquo;t work&rdquo;), and emptying a chamber of dead and dying yellowjackets is a gloves-on job that not every household wants. We push it harder in our standalone <Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY Trap review</Link>, including refill scheduling and a full season of catch notes.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="rescue why trap wasp hornet yellowjacket">Check RESCUE! WHY Trap on Amazon.ca →</BuyLink>
          </div>

          <h2>The TrapStik: the Only Trap Paper Wasps Respect</h2>
          <p>If your problem is paper wasps &mdash; the slender, dangly-legged builders of open umbrella combs under eaves, railings, and BBQ lids &mdash; scent traps will disappoint you, because paper wasps are visual predators that hunt caterpillars, not fruit odours. The RESCUE! TrapStik solves this with what the company calls VisiLure: a printed colour-and-pattern scheme that paper wasps find irresistible to land on. The landing surface is glue. That is the whole trick, and it works on mud daubers and carpenter bees too.</p>
          <p>It is also the pick for anyone who wants a <strong>zero-chemical, zero-attractant</strong> option: nothing to refill, no liquid to slosh, no odour near the deck. Two cautions. The exposed glue surface has a documented history of occasionally catching small birds &mdash; RESCUE! now sells a version with a protective wire cage, and if birds visit your yard, that is the version to buy. And a TrapStik is done when its surface is full or dust-coated, so it is a replace-each-season item rather than a durable good.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="rescue trapstik for wasps">Check TrapStik for Wasps on Amazon.ca →</BuyLink>
          </div>

          <h2>Disposable Bag Traps: the August Blitz Tool</h2>
          <p>Disposable yellowjacket bag traps are the budget play, and used correctly they are genuinely good at one job: absorbing a late-summer yellowjacket spike around garbage bins, compost, and fruit trees. You add water to the fill line to activate the pre-loaded attractant, hang the bag, and when it is gruesomely full you unhook it and drop the whole thing in the garbage &mdash; zero contact with the catch, which for many households is the entire selling point.</p>
          <p>Know the limits. The lure is yellowjacket-specific &mdash; paper wasps and most hornets ignore it. The bags are single-use, so protecting a yard from May to September on bags alone costs more than one WHY Trap plus refills. And thin plastic in full sun for weeks will eventually do what thin plastic does. Buy them as the cottage-weekend and party-day tool, several at a time, and hang them early in the morning before wasps are flying. For a deeper look at the yellowjacket-specific arsenal &mdash; including in-ground nest scenarios where bag traps are the wrong tool entirely &mdash; see our <Link href="/blog/best-yellow-jacket-trap-canada">best yellowjacket trap guide</Link> and the <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground-nesting wasp playbook</Link>.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="rescue disposable yellowjacket trap">Check disposable bag traps on Amazon.ca →</BuyLink>
          </div>

          <h2>The Honest Word on DIY Pop-Bottle Traps</h2>
          <p>Every August, Canadian social feeds fill with the inverted-2L-bottle trap: cut the top off, flip it into the base, add sugar water or juice, done. Does it work? Barely &mdash; and &ldquo;barely&rdquo; is doing real work in that sentence. Sugar water is a weak lure compared with a formulated heptyl butyrate attractant; the wide funnel that lets wasps in also lets a meaningful share walk back out; drowning in syrup is slow enough that a busy trap becomes a wasp rescue platform; and sweet liquid indiscriminately pulls in flies, moths, and occasionally bees, which a formulated yellowjacket lure largely avoids.</p>
          <p>Where it earns a nod: an emergency. If yellowjackets have crashed a picnic <em>right now</em> and the nearest store is thirty minutes away, a bottle trap hung well away from the table beats nothing. Add a drop of dish soap to break surface tension (faster drowning) and a splash of vinegar to reduce bee interest. But as a season strategy it is the weakest option on this page, needs re-brewing every few days, and mostly it teaches people that &ldquo;wasp traps don&rsquo;t work&rdquo; when what does not work is sugar water in a bottle.</p>

          <h2>Timing Is Half the Battle: Spring Queens vs the August Worker Spike</h2>
          <p>A wasp trap in Canada has two seasons, and they call for different expectations.</p>
          <p><strong>Spring (mid-April to late May): queen trapping.</strong> Every colony in your yard this summer will be founded by a single overwintered queen who is, right now, flying solo &mdash; foraging, scouting nest sites, and completely unprotected by workers. A trap hung early catches queens, and each queen caught is arithmetically an entire nest that never gets built: potentially thousands of late-summer workers deleted with one catch. Spring trapping catches <em>few</em> insects and prevents <em>many</em>; do not judge it by how full the trap looks.</p>
          <p><strong>Late summer (August to mid-September): the worker spike &mdash; which is now.</strong> Colonies peak at hundreds to several thousand workers just as the colony&rsquo;s internal sugar economy collapses: larvae, which all season rewarded foraging workers with sweet secretions, stop being produced, and thousands of suddenly sugar-starved workers turn to your fruit trees, garbage bins, patio drinks, and ice cream cones. This is the annual six-week window when Canadian emergency rooms see their sting spike and when traps do their most visible work. If you are reading this in August: hang traps today, 6&ndash;9 metres out, and accept that they are managing pressure, not ending it &mdash; frost will do that within weeks, since only newly mated queens survive a Canadian winter.</p>

          <h2>Placement: 6&ndash;9 Metres Is the Rule That Makes or Breaks Everything</h2>
          <p>The single most common wasp-trap mistake is hanging the trap where the people are. A trap is, by definition, an attractant device &mdash; hang it off the patio umbrella and you have baited your own table. The rule that fixes it:</p>
          <ul>
            <li><strong>6&ndash;9 metres (20&ndash;30 feet) from the space you protect.</strong> Far enough that drawn-in wasps engage the trap instead of your guests; close enough to intercept the traffic heading your way.</li>
            <li><strong>On the traffic line, not random.</strong> Watch where wasps come from &mdash; the fence line, the garbage corral, a neighbour&rsquo;s fruit tree &mdash; and hang traps between that source and your seating area.</li>
            <li><strong>1&ndash;2 metres off the ground, in sun.</strong> Warm lures volatilize and carry better; a shaded, cold trap whispers where a sunny one shouts.</li>
            <li><strong>Away from doors, play structures, and hummingbird feeders.</strong> You are steering insect traffic; steer it away from everything with a face.</li>
            <li><strong>Two to four traps beats one.</strong> One trap is a point defence. A short perimeter &mdash; garbage area, main approach line, fruit trees &mdash; is a strategy.</li>
          </ul>

          <h2>The PMRA Angle: Why Traps Are the Zero-Paperwork First Move</h2>
          <p>Here is a piece of Canadian context that US-centric buying guides never mention: wasp <em>traps</em> and sticky boards are devices, not pesticides. They require no registration from Health Canada&rsquo;s Pest Management Regulatory Agency, no label restrictions, and no thought about where you are allowed to deploy them &mdash; balconies, rentals, cottages, school-adjacent fences, all fine. Wasp <em>sprays</em> are the opposite: every insecticide legally sold in Canada must be PMRA-registered and carry a PCP registration number on the label.</p>
          <p>That distinction matters when the internet tells you to import something. US-market aerosols like Hot Shot Wasp &amp; Hornet Killer and Ortho Home Defense Hornet &amp; Wasp Killer7 &mdash; the staples of American advice threads &mdash; are formulated under US EPA registrations and are <strong>not PMRA-registered for sale in Canada</strong>; bringing them across the border or buying them grey-market from cross-listed sellers puts you on the wrong side of the Pest Control Products Act, with no Canadian label directions to protect you. There is no need: registered Canadian foaming wasp killers exist and work, and we compare them in the <Link href="/blog/best-wasp-nest-spray-canada">best wasp nest spray guide</Link>. But the cleaner point is this &mdash; for everything short of nest destruction, a trap does the job with zero regulatory footprint at all.</p>

          <h2>When a Trap Is Not Enough</h2>
          <p>Traps intercept foragers. They do not, and cannot, eliminate an established colony &mdash; the queen out-lays your catch rate. Escalate past trapping when you see: a visible nest with steady traffic (eaves, shed, BBQ cabinet), wasps streaming from a hole in the lawn or a gap in siding (ground or wall-void nests, the two highest-sting-risk scenarios), or wasps appearing <em>inside</em> the house. The <Link href="/blog/how-to-get-rid-of-wasps-canada">full get-rid-of-wasps guide</Link> walks the whole decision tree, the <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link> covers the lawn-nest case specifically, and if the nest is high, hidden in a wall, or anyone in the household has sting allergies, hiring a licensed pro is the right call &mdash; our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> shows what wasp nest removal typically runs so you can sanity-check quotes.</p>

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
            <li><Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY Trap Review — A Full Canadian Season</Link></li>
            <li><Link href="/blog/best-yellow-jacket-trap-canada">Best Yellowjacket Trap Canada — The Species-Specific Guide</Link></li>
            <li><Link href="/blog/best-wasp-nest-spray-canada">Best Wasp Nest Spray Canada — PMRA-Registered Options Only</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-wasps-canada">How to Get Rid of Wasps in Canada — Full Playbook</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-ground-wasps-canada">How to Get Rid of Ground-Nesting Wasps</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
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
