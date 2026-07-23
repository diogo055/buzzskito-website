import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'katchy-indoor-insect-trap-review-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Katchy Indoor Insect Trap Review (Canada 2026) — What It Actually Catches'
const META_TITLE = 'Katchy Indoor Insect Trap Review Canada 2026: Honest Test'

const FAQS = [
  {
    question: 'Does the Katchy indoor insect trap actually work?',
    answer: 'Yes — against the right insects. The Katchy combines a UV light, a quiet downdraft fan, and a replaceable sticky glue board, and that mechanism is genuinely effective against fungus gnats and fruit flies, the two small, weak-flying, light-responsive insects it was designed for. Run overnight in a dark room next to infested houseplants or a fruit bowl, a Katchy routinely fills its glue board with dozens of gnats within a few nights. Where it disappoints is against house flies and mosquitoes, which are either too strong-flying or simply not attracted to UV light — so buy it for gnats and fruit flies, not as a general fly killer.',
  },
  {
    question: 'What insects does the Katchy catch — and not catch?',
    answer: 'Strong catch: fungus gnats, fruit flies, drain flies, and other small weak-flying insects drawn to UV light. Occasional catch: the odd moth, midge, or stray mosquito that wanders close to the intake. Poor catch: house flies (they respond to food and daylight cues far more than UV, and stronger fliers can fight the fan), cluster flies, wasps, and mosquitoes in any meaningful numbers — mosquitoes hunt by carbon dioxide and body heat, neither of which the Katchy produces. Honest expectation-setting is the difference between a happy Katchy owner and a one-star review.',
  },
  {
    question: 'Does the Katchy work on house flies?',
    answer: 'Not reliably, and this is the most common buyer mistake. House flies orient to daylight, food odours, and surfaces — not primarily to UV light in a dark room — and an adult house fly is a strong enough flier that the Katchy’s deliberately quiet fan often cannot pull one down onto the glue board even when it does investigate. You will catch the occasional sluggish house fly overnight, but if house flies are your main problem, a baited outdoor trap positioned away from doors, window screen repairs, and sanitation will do far more than any UV suction trap.',
  },
  {
    question: 'Does the Katchy catch mosquitoes?',
    answer: 'Rarely, and Katchy’s own positioning has become more honest about this over the years. Host-seeking female mosquitoes hunt using carbon dioxide, heat, and skin odours — cues a UV-plus-fan device does not generate. Studies of UV insect traps consistently show mosquitoes make up only a small percentage of the catch. A Katchy running in a dark bedroom will occasionally grab a resting mosquito that drifts near the intake, but it will not clear a room. If mosquitoes are the real complaint, fix window screens and deal with the source outdoors rather than expecting an indoor glue trap to solve it.',
  },
  {
    question: 'Where should I place a Katchy trap for best results?',
    answer: 'Darkness placement is the single biggest performance factor. The UV lure only competes when it is the brightest thing in the room, so run the Katchy overnight or in a room with the lights off. Put it within a metre of the infestation source: beside infested houseplant pots for fungus gnats, next to the fruit bowl, compost caddy, or kitchen sink for fruit flies, and near floor drains for drain flies. Keep it away from windows and competing light sources, and off the floor near plant-pot rim height where gnats actually fly. One trap covers roughly one room — buy a second unit rather than moving one around if you have two problem areas.',
  },
  {
    question: 'How often should I replace the Katchy glue boards?',
    answer: 'Every 2–4 weeks in normal use, or sooner if the board is visibly covered with insects or dust. A glue board loses tackiness as it collects insects, dust, and pet hair, and a saturated board quietly turns your trap into a night light. During a heavy fungus-gnat bloom you might swap boards weekly; during maintenance-mode running, monthly is fine. Genuine Katchy 4-pack refills typically run in the $20–$30 range at Canadian retailers, and many owners cut generic full-size glue boards to fit for less — the trap does not care whose glue it uses.',
  },
  {
    question: 'Can I use generic glue boards in a Katchy?',
    answer: 'Yes. The glue board sits in a simple slide-in tray at the base of the unit, and nothing about the trap requires a branded refill — there is no chip, no sensor, no proprietary shape beyond the tray dimensions. Plenty of Canadian owners buy inexpensive generic sticky boards and cut them to size with scissors, which meaningfully lowers the cost per month of ownership. The trade-off is a few minutes of cutting and occasionally a slightly worse fit that leaves a gap at the tray edge. If convenience matters more than a few dollars, the branded refills fit perfectly every time.',
  },
  {
    question: 'Which is better for fruit flies: Katchy or a TERRO vinegar trap?',
    answer: 'They attack the problem differently, and the honest answer is that a $10-range TERRO lure trap kills fruit flies at least as well as the Katchy for a fraction of the cost — the vinegar lure targets exactly what fruit flies are hunting for (fermentation odour), while the Katchy relies on UV attraction that fruit flies respond to less strongly. The Katchy wins on breadth (it also catches fungus gnats and drain flies, which ignore vinegar lures), on looks, and on not having a bowl of vinegar on the counter. If your only problem is fruit flies, start with the cheap lure trap; if you have gnats plus fruit flies, or want one tidy device, the Katchy earns its price.',
  },
  {
    question: 'Is the Katchy safe around pets and kids?',
    answer: 'Yes, and this is one of its genuine strengths. The Katchy is a purely physical device — UV light, fan, and adhesive — with zero insecticide, so there is nothing to off-gas, nothing to ingest, and no pesticide residue. Health Canada does not require PMRA registration for insect traps that work mechanically, unlike sprays and foggers. The practical cautions are minor: the glue board is very sticky and miserable to get off cat fur, so place the unit where a curious paw cannot reach into the tray, and the UV light is a low-intensity attraction lamp, not a sterilizing UV-C source, so it poses no meaningful light hazard in normal use.',
  },
  {
    question: 'Is a Katchy better than an indoor bug zapper?',
    answer: 'For living spaces, yes. Indoor zappers electrocute on a charged grid, which means a popping noise at 2 a.m. and — documented in published research — a fine mist of insect fragments ejected up to a couple of metres from the grid, which is why health units advise against zappers near food-preparation areas. The Katchy’s fan-plus-glue design is silent, contains every insect it catches on the board, and ejects nothing into the air. Zappers also share the Katchy’s core limitation (UV attraction) without its clean containment. The only argument for an indoor zapper is catching stronger fliers the Katchy’s fan cannot hold — and a fly swatter does that for less.',
  },
  {
    question: 'What is the difference between the Katchy Original and the Katchy Duo?',
    answer: 'The Duo is the newer, slightly larger unit with a dual-wavelength light (UV plus a warmer spectrum), a stronger fan, and a wider intake — aimed at improving catch rates on fruit flies, which respond less to pure UV than fungus gnats do. In practice the Duo does catch somewhat better, particularly on fruit flies, but both units share the same fundamental profile: excellent on gnats, decent on fruit flies, weak on house flies and mosquitoes. Both take glue-board refills. If the price gap is small when you buy, take the Duo; if the Original is meaningfully discounted, it remains most of the performance for less.',
  },
  {
    question: 'Why is my Katchy not catching anything?',
    answer: 'Run through the checklist in order. First, darkness: any competing light source — a window, a standby LED, a hallway light — beats the trap’s UV lure, so it must run in genuine darkness. Second, distance: the trap needs to be within about a metre of where the insects actually are, not across the room. Third, the glue board: a dusty or saturated board catches nothing even when insects land on it. Fourth, the target insect: if your pest is house flies, cluster flies, or mosquitoes, the trap is working as designed — it just was never going to catch those. Fifth, the source: gnats breed in moist potting soil and fruit flies in fermenting material; a trap can only mop up adults while the breeding site keeps producing more.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Hands-on Canadian review of the Katchy Indoor Insect Trap: what the UV + fan + glue board actually catches (fungus gnats and fruit flies — not house flies), glue refill costs, placement tips, and Katchy vs TERRO vs zapper.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('katchy-indoor-insect-trap-review-canada')

export default function KatchyIndoorInsectTrapReviewCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian review of the Katchy Indoor Insect Trap — the UV + fan + glue board mechanism, honest catch expectations, glue-refill cadence, placement science, and how it compares to TERRO lure traps and indoor zappers.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Katchy Indoor Insect Trap Review', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Katchy Indoor Insect Trap Review</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The UV + fan + glue trap everyone asks about, reviewed honestly for Canadian homes — brilliant against fungus gnats and fruit flies, weak against house flies and mosquitoes, and exactly how to place it so it earns its price.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Katchy Indoor Insect Trap" search="katchy indoor insect trap" label="Our verdict: 8.3/10" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The Katchy Indoor Insect Trap is genuinely worth buying — for fungus gnats and fruit flies. Its UV light draws small flying insects in, a quiet fan pulls them down, and a replaceable glue board holds them. Run it overnight in a dark room within a metre of infested houseplants or the fruit bowl and it fills boards. It is <em>not</em> an effective house fly or mosquito trap, and anyone selling it as one is overselling it.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Mechanism: UV attraction + downdraft fan + sticky glue board — a purely physical trap with zero insecticide.</li>
              <li>Strong against fungus gnats, fruit flies, and drain flies; weak against house flies and mosquitoes, which do not hunt by UV light.</li>
              <li>Darkness is everything: the UV lure only works when it is the brightest light in the room, so run it overnight.</li>
              <li>Glue boards need replacing every 2–4 weeks; generic sticky boards cut to size work fine and cost less.</li>
              <li>As a no-pesticide device it needs no PMRA registration — unlike the grey-market US insecticide sprays sold online without a Canadian PCP number.</li>
              <li>Our editorial score: 8.3/10 — the best-built device in the indoor fly-control aisle, bought for the right job.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito Pest Product Guides · independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="indoor flying insects" />
        </div>
      </section>

      <section className="bg-white px-4 py-2">
        <div className="max-w-4xl mx-auto">
          <TopPick tag={AMZ_TAG}
            label="Our Verdict"
            name="Katchy Indoor Insect Trap (UV + fan + glue board)"
            blurb="The best-built indoor gnat and fruit fly trap sold in Canada. Silent, insecticide-free, and genuinely effective when run overnight in a dark room near the source — as long as you accept that house flies and mosquitoes were never really on the menu."
            search="katchy indoor insect trap"
            score={8.3}
            pros={['Excellent catch rates on fungus gnats and fruit flies', 'Completely silent — no zapper crack at 2 a.m.', 'No insecticide: safe around kids, pets, and food prep', 'Glue boards are cheap and generic boards fit']}
            cons={['Weak against house flies and mosquitoes — be honest with yourself about your pest', 'Only performs in a dark room; competing light kills the catch rate', 'Recurring glue-board cost over the seasons']}
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Is the Katchy, and How Does the Mechanism Actually Work?</h2>
          <p>The Katchy is a small cylindrical countertop device — about the size of a French press — that stacks three simple technologies. A UV-A light on top attracts small flying insects, the way a porch light collects moths. A quiet fan in the body pulls anything that flies close down through the intake. And at the base sits a replaceable sticky glue board that holds whatever the fan delivers. No insecticide, no bait, no zapper grid — the whole system is physical.</p>
          <p>That design has two important consequences. First, it is one of the few pest products where the &ldquo;safe around kids and pets&rdquo; marketing claim is straightforwardly true: there is nothing toxic in the box. Because it kills mechanically rather than chemically, it also needs no registration under Canada&rsquo;s Pest Control Products Act — a real distinction we come back to below, because the same cannot be said for some of the US-market insect sprays Canadians find online.</p>
          <p>Second, the mechanism dictates exactly which insects it can and cannot catch — and this, not build quality, is where most disappointed reviews come from. The Katchy is a UV-attraction trap, so it catches insects that respond to UV light and are weak enough fliers for a deliberately quiet fan to overpower. That is a precise description of two household pests: <strong>fungus gnats</strong> and <strong>fruit flies</strong>.</p>

          <h2>What the Katchy Actually Catches (the Honest List)</h2>
          <p>We score the Katchy 8.3/10 <em>for the job it was built for</em>. Here is the honest catch profile, which matters more than any spec sheet:</p>
          <ul>
            <li><strong>Fungus gnats — excellent.</strong> The little black flies that erupt from houseplant soil are small, weak fliers strongly drawn to UV. A Katchy running overnight beside infested pots routinely blackens a glue board within a few nights. This is the Katchy&rsquo;s signature use case, and no other consumer device does it better.</li>
            <li><strong>Fruit flies — good.</strong> Fruit flies respond to UV less strongly than gnats do (fermentation odour is their real weakness), but the fan-and-glue combination still collects them steadily overnight near a fruit bowl or compost caddy. A cheap vinegar lure trap catches them too — the comparison table below covers when each wins.</li>
            <li><strong>Drain flies and midges — good.</strong> Small, fluttery, light-responsive: the same profile as gnats.</li>
            <li><strong>House flies — poor.</strong> Adult house flies orient to daylight, food odours, and surfaces rather than a UV lamp in a dark room, and they are strong enough fliers that the quiet fan frequently cannot hold one even when it investigates. You will get the occasional sluggish catch, nothing more.</li>
            <li><strong>Mosquitoes — poor.</strong> Host-seeking mosquitoes hunt carbon dioxide, heat, and skin odour. The Katchy produces none of those, and studies of UV traps consistently find mosquitoes are a small fraction of the catch. A stray resting mosquito will occasionally end up on the board; a room full of them will not.</li>
          </ul>
          <p>If your real problem is house flies in the kitchen or wasps finding their way indoors, this is the wrong product page — start with our guides to <Link href="/blog/how-to-get-rid-of-fruit-flies-canada">getting rid of fruit flies</Link> for small-fly sanitation tactics that transfer well, or the <Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY trap review</Link> for the outdoor stinging-insect side of the aisle.</p>

          <h2>Katchy vs TERRO vs Indoor Zapper: Which Should You Buy?</h2>
          <p>The Katchy is the highest-ticket device in the indoor fly-control aisle, so it has to justify itself against a lure trap that costs a fraction as much and the zappers hanging beside it. Here is the honest three-way comparison for Canadian kitchens:</p>

          <AffiliateDisclosure />
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Device</th>
                  <th className="px-4 py-3 text-left">Mechanism</th>
                  <th className="px-4 py-3 text-left">Best against</th>
                  <th className="px-4 py-3 text-left">Weak against</th>
                  <th className="px-4 py-3 text-left">Running cost</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Katchy Indoor Insect Trap</td>
                  <td className="px-4 py-3 text-gray-700">UV light + fan + glue board</td>
                  <td className="px-4 py-3 text-gray-700">Fungus gnats, fruit flies, drain flies</td>
                  <td className="px-4 py-3 text-gray-700">House flies, mosquitoes</td>
                  <td className="px-4 py-3 text-gray-700">Glue boards every 2–4 weeks</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="katchy indoor insect trap" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">TERRO Fruit Fly Trap</td>
                  <td className="px-4 py-3 text-gray-700">Food-grade vinegar lure in an apple-shaped bowl</td>
                  <td className="px-4 py-3 text-gray-700">Fruit flies specifically</td>
                  <td className="px-4 py-3 text-gray-700">Gnats, drain flies, everything else</td>
                  <td className="px-4 py-3 text-gray-700">Lure refills roughly monthly</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="terro fruit fly trap" block>Check price →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Indoor bug zapper</td>
                  <td className="px-4 py-3 text-gray-700">UV light + electrified grid</td>
                  <td className="px-4 py-3 text-gray-700">Moths, midges, stronger UV-drawn fliers</td>
                  <td className="px-4 py-3 text-gray-700">Same UV limits — plus noise and debris ejection</td>
                  <td className="px-4 py-3 text-gray-700">None (occasional bulb)</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="indoor bug zapper" block>Check price →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>The decision logic is simpler than the marketing suggests. <strong>Only fruit flies?</strong> Start with the budget-priced TERRO lure — the vinegar attractant targets exactly what fruit flies hunt, and it out-catches UV on that one species. <strong>Fungus gnats, or gnats plus fruit flies?</strong> The Katchy is the clear pick; vinegar lures do nothing for gnats. <strong>Tempted by a zapper?</strong> Skip it indoors: published research has shown electrocution grids eject fine insect fragments up to a couple of metres, which is why food-safety guidance keeps zappers away from kitchens — and it shares the Katchy&rsquo;s UV limitations anyway, with a 2 a.m. crack added. Our full <Link href="/blog/best-fruit-fly-trap-canada">best fruit fly trap roundup</Link> ranks the whole category if you want more than one option compared.</p>

          <h2>The PMRA Angle: Why a Device Beats a Grey-Market Spray</h2>
          <p>Here is the part of this category most US-written reviews never mention. In Canada, any product that kills insects <em>chemically</em> — sprays, aerosols, foggers, most &ldquo;natural&rdquo; essential-oil insect killers — must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency and carry a PCP registration number on the label. A number of popular US flying-insect sprays circulate in Canada through marketplace imports without that registration — sold in listings that quietly ship US-labelled product with no Canadian PCP number, which makes them illegal to sell here and leaves you with zero Canadian label directions if something goes wrong around kids or pets.</p>
          <p>The Katchy sidesteps that entire problem by being a trap, not a pesticide. Physical devices — glue boards, fans, UV lures — do not require PMRA registration because there is no active ingredient to regulate. That makes the Katchy one of the rare products in this aisle where the cross-border compliance question simply does not exist: the unit sold to Canadians is the same lawful device sold everywhere else. When you are comparing it against a suspiciously cheap &ldquo;flying insect killer&rdquo; aerosol from a marketplace seller, that difference should carry real weight.</p>

          <h2>Placement: the 80% of Performance Nobody Reads the Manual For</h2>
          <p>Almost every &ldquo;my Katchy doesn&rsquo;t work&rdquo; complaint traces to placement, because a UV-attraction trap lives or dies by two variables: darkness and distance.</p>
          <ul>
            <li><strong>Run it in the dark.</strong> The UV lure only wins when it is the brightest light in the room. A window with a streetlight, a TV on standby, or a hallway light left on will out-compete it. Overnight, lights off, is the Katchy&rsquo;s prime shift.</li>
            <li><strong>Within a metre of the source.</strong> Beside the infested houseplant pots for fungus gnats; next to the fruit bowl, compost caddy, or sink for fruit flies; near the floor drain for drain flies. Small flies do not commute across a room to find your trap.</li>
            <li><strong>At the insects&rsquo; flight height.</strong> On the counter for kitchen flies, on a plant stand or shelf at pot-rim height for gnats — not tucked on the floor in a corner.</li>
            <li><strong>One trap per problem room.</strong> The effective radius in real homes is one room at best. Two problem areas means two units or a rotating schedule, and rotation loses nights.</li>
            <li><strong>Leave it running for consecutive nights.</strong> Adult gnats and fruit flies keep emerging from soil and fermenting material for days after you start trapping. Judge the trap on a week, not a night.</li>
          </ul>

          <h2>Glue-Board Refills: Cadence and Cost of Ownership</h2>
          <p>The Katchy&rsquo;s recurring cost is the glue board, and it is worth planning for honestly. A board loses tackiness as it collects insects, dust, and pet hair — replace it every 2 to 4 weeks in normal use, weekly during a heavy gnat bloom, and immediately whenever the surface looks matte or crowded. A saturated board is the silent failure mode: the trap keeps glowing, the fan keeps humming, and nothing sticks.</p>
          <p>Genuine 4-pack refills typically sell in the $20–$30 range at Canadian retailers, which works out to a modest but real cost per season. The money-saving move many owners settle on: generic full-size glue boards cut to the tray shape with scissors. Nothing in the unit requires a branded board — it is a friction-fit tray, not a printer-cartridge situation — so the choice is purely convenience versus cost.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="katchy glue boards refill">Check Katchy glue board refills →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="katchy indoor insect trap duo">Check the Katchy Duo →</BuyLink>
          </div>
          <p>On models: the <strong>Katchy Original</strong> and the newer <strong>Katchy Duo</strong> share the same fan-and-glue architecture. The Duo adds a dual-wavelength light and a stronger fan aimed at improving the fruit-fly catch specifically, and in practice it does catch somewhat better — but both units keep the same fundamental profile. Buy whichever is better priced the day you shop; neither turns the platform into a house-fly or mosquito trap.</p>

          <h2>Kill the Source, or the Trap Never Wins</h2>
          <p>A trap — any trap — only mops up adults. Fungus gnats breed in the top layer of moist potting soil, and fruit flies breed in fermenting material: the over-ripe banana, the drain gunk, the forgotten potato in the pantry. While the breeding site keeps producing, the Katchy is running a treadmill.</p>
          <p>For fungus gnats, the source fix is drying out the top few centimetres of soil between waterings and treating the soil with BTI — a naturally occurring larvicide bacterium that kills fungus-gnat larvae and is PMRA-registered for consumer use. Our <Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks comparison</Link> explains which BTI format works for houseplant soil (Bits, sprinkled and watered in), and the <Link href="/blog/mosquito-dunks-canada-guide">full BTI dunks guide</Link> covers the product family in depth. The Katchy catches the adults; BTI ends the production line — together they clear a gnat problem in two to three weeks.</p>
          <p>For fruit flies, the fix is sanitation: fruit into the fridge, compost caddy emptied and rinsed, drains cleaned, recycling bin rinsed. The step-by-step lives in our <Link href="/blog/how-to-get-rid-of-fruit-flies-canada">fruit fly elimination guide</Link>. And if what you are fighting turns out to be bigger than a small-fly problem — persistent flies from an unknown dead-animal source, or a structural issue — our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link> covers what professional help runs so you can decide when DIY has hit its limit.</p>

          <h2>Katchy Review — Key Facts</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-hidden my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Mechanism', 'UV-A light + downdraft fan + replaceable glue board'],
                  ['Our editorial score', '8.3 / 10 — best-in-class for gnats and fruit flies'],
                  ['Best against', 'Fungus gnats, fruit flies, drain flies'],
                  ['Weak against', 'House flies, mosquitoes, wasps — not UV hunters'],
                  ['Insecticide content', 'None — purely physical, no PMRA registration required'],
                  ['Noise', 'Near-silent fan; no zapper crack'],
                  ['Coverage', 'One room; place within ~1 m of the source'],
                  ['Best placement', 'Dark room, overnight, beside plants / fruit bowl / drain'],
                  ['Glue-board cadence', 'Every 2–4 weeks; weekly during heavy blooms'],
                  ['Refill compatibility', 'Branded 4-packs or generic boards cut to fit'],
                  ['Models', 'Katchy Original and Katchy Duo (dual-wavelength, stronger fan)'],
                  ['Pair it with', 'BTI soil treatment for gnats; sanitation for fruit flies'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Our Verdict: 8.3/10 — Buy It for the Right Job</h2>
          <p>The Katchy earns its position as the premium device in the indoor fly aisle. It is well built, silent, genuinely pesticide-free, and the single most effective consumer tool we have tested against fungus gnats — with a solid supporting record on fruit flies and drain flies. The score stops short of the 9s for two reasons: the recurring glue-board cost, and a marketing halo that still leads too many buyers to expect house-fly and mosquito performance the mechanism cannot deliver.</p>
          <p>Buy it if you have houseplant gnats, recurring fruit flies, or drain flies and want a clean, silent, no-chemical fix. Skip it if your pest is house flies, wasps, or mosquitoes — no UV suction trap solves those, whatever the listing photos imply. And whichever way you go, fix the breeding source at the same time; that is the difference between a trap that helps and a trap that just documents the problem.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="katchy indoor insect trap">Check the Katchy Indoor Insect Trap on Amazon.ca →</BuyLink>
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
            <li><Link href="/blog/how-to-get-rid-of-fruit-flies-canada">How to Get Rid of Fruit Flies in Canada — Full Playbook</Link></li>
            <li><Link href="/blog/best-fruit-fly-trap-canada">Best Fruit Fly Trap Canada — Every Type Ranked</Link></li>
            <li><Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks — Which BTI Format for Fungus Gnats</Link></li>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada — The Complete BTI Guide</Link></li>
            <li><Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY Trap Review — Wasps, Hornets &amp; Yellow Jackets</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost in Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
