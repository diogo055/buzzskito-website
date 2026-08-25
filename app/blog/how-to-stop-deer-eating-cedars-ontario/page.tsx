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

const SLUG = 'how-to-stop-deer-eating-cedars-ontario'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'How to Stop Deer Eating Your Cedars in Ontario — The Winter Plan That Actually Holds'
const META_TITLE = 'Stop Deer Eating Your Cedars in Ontario'

const FAQS = [
  {
    question: 'How do I stop deer from eating my cedar hedge in Ontario?',
    answer: 'Put a physical barrier between the deer and the foliage before the snow arrives, and treat repellents as a supporting layer rather than the plan. The standard method that holds through an Ontario winter is burlap on stakes: drive wooden stakes or steel T-posts outside the drip line every four to six feet, and wrap breathable jute burlap around the outside of the frame so it never presses against the foliage. Deer netting over the hedge is the lighter-duty alternative for young or isolated cedars. Add an egg-solids-based repellent applied in late autumn before browsing starts, and reapply per the label. The critical timing is that stakes have to go in before the ground freezes, which in the GTA generally means late October to mid-November.',
  },
  {
    question: 'Why do deer eat cedars in winter and not in summer?',
    answer: 'Because in winter there is very little else. Eastern white cedar is a well-known winter browse for white-tailed deer in Ontario — it is green, it is above the snow, and it holds nutritional value when the herbaceous plants, acorns, and garden growth deer prefer the rest of the year are buried or finished. Through spring, summer, and early autumn a deer walking past your hedge has better options twenty steps away, so a cedar hedge that looks untouched in July is not deer-proof, it is simply not the best meal available. That flips in November, gets serious after the first deep snow, and peaks in January and February when the snowpack is deepest and deer are burning through fat reserves. This is why cedar protection is bought in autumn and forgotten in summer.',
  },
  {
    question: 'Will a browsed cedar hedge grow back?',
    answer: 'Only partly, and much less than people expect — this is the single most important thing to understand before you decide what to spend. Eastern white cedar and the cultivated arborvitae used in hedges regrow very poorly from bare brown wood: once deer strip the green foliage back past the live growth, that section does not reliably push new shoots the way a deciduous shrub does. The hedge fills in sideways from neighbouring green growth over years, if at all. The practical consequence is that a browse line at deer height is closer to permanent damage than to seasonal damage, and the burlap you did not buy in November is much cheaper than the replacement cedars you buy the following spring. Protect first; do not wait to see how bad it gets.',
  },
  {
    question: 'How high do I need to protect the cedars?',
    answer: 'Higher than you think, because snow raises the deer. A white-tailed deer browsing from the ground reaches roughly six feet, but it is standing on whatever snow has accumulated, so a hedge protected to five feet in November can be exposed at the top of the protected zone by February when there is a foot or two of packed snow underfoot. Plan the wrap or netting to cover to roughly six feet above the expected snow line rather than six feet above the current ground, which in practice means buying taller burlap than the hedge appears to need and setting stakes long enough to support it. In a heavy-snow year on a rural or ravine-backing property, expect the browse line to climb through the season, and check the top edge after each big storm.',
  },
  {
    question: 'Does burlap or plastic work better for wrapping cedars?',
    answer: 'Burlap, and it is not close. Natural jute burlap breathes: it lets moisture and air move while blocking the deer, the worst of the winter wind, and road-salt spray, which is a real bonus on a hedge along a GTA driveway or sidewalk. Plastic sheeting traps moisture against the foliage, superheats on a sunny February afternoon, and can do more damage than the deer would have. The other burlap rule is not to wrap the plant like a mummy: fasten the burlap to the stake frame so there is an air gap, leave the top open so light and air get in and heavy wet snow does not collect inside the wrap and split the leaders, and keep the fabric off the foliage. Burlap touching a cedar is burlap a deer will simply eat through with the branch behind it.',
  },
  {
    question: 'Do deer repellents actually work on cedars?',
    answer: 'They help, they are worth using, and they will not carry the job alone in a hard winter. The best-supported class is the egg-solids-based repellents — the putrescent egg and garlic formulations sold under names like Bobbex — which work on smell rather than taste, so the deer is deterred before it takes a bite. Two rules decide whether they earn their price. First, apply before browsing begins, in late autumn, because deer form feeding routes and it is far easier to keep a hedge off the route than to remove it once established. Second, respect the label: most need application on a dry day above freezing and reapplication through the season, since rain, snow, and new growth all shorten protection. As winter deepens and deer get hungrier, repellent efficacy falls exactly when pressure rises. Buy repellent as a layer on a barrier, not instead of one.',
  },
  {
    question: 'How much burlap and how many stakes do I need for my hedge?',
    answer: 'Measure the hedge in linear feet, then decide how many sides are exposed. A run protected on one side needs roughly its own length plus ten to fifteen per cent for overlap at the seams and around the end plants; a hedge deer can reach from both sides needs double that. Burlap is sold in rolls by width and length — you want the width to match your protection height, so measure that first, remembering to add for snow lift. Stakes go outside the drip line every four to six feet, tighter where the run turns a corner or where wind loads it, so a hundred-foot run is roughly twenty stakes. Buy a little more of everything than the tape says: the offcuts get used, and driving back to the store in November with frozen ground closing in is the expensive mistake.',
  },
  {
    question: 'When should I install and remove the protection?',
    answer: 'Install in late October to mid-November across most of southern Ontario, and remove in April. The install deadline is set by the ground, not the deer: once the soil freezes you cannot drive a stake, and a frame you tried to build in December will not be there in February. Getting it up before the first serious browsing also matters behaviourally, since deer that never establish a feeding route on your hedge are easier to keep off it. On the other end, take the burlap down in early spring once hard frosts are finished — leaving it up into the warm months traps moisture, shades the foliage, and encourages problems the deer never would have caused. Store the burlap dry and it will usually give you several seasons.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Stop deer eating your cedars in Ontario: burlap, netting and egg-based repellents — how to size the wrap for snow lift, and the install deadline.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function HowToStopDeerEatingCedarsOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Ontario guide to protecting cedar hedges from winter deer browsing — burlap on stakes, deer netting, egg-solids repellents, snow-lift sizing, and the pre-freeze install deadline.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Stop Deer Eating Your Cedars in Ontario', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Stop Deer Eating Your Cedars</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Cedar is a winter staple for Ontario deer, and a browsed hedge does not grow back the way people assume. Here is the barrier that holds from November to March, how to size it for snow lift, and the install deadline the frozen ground sets for you.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Natural burlap roll for winter hedge protection" search="burlap roll winter plant protection natural jute" label="The barrier that works" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To stop deer eating your cedars in Ontario, <strong>build a burlap-on-stakes barrier before the ground freezes</strong> &mdash; stakes outside the drip line every four to six feet, breathable jute burlap wrapped around the frame so it never touches the foliage, and the top left open so snow cannot load inside. Protect to about <strong>six feet above the expected snow line</strong>, not six feet above today&rsquo;s ground, because packed snow lifts the deer&rsquo;s reach. Add an egg-solids repellent in late autumn as a second layer. Do the work in <strong>late October to mid-November</strong>: once the soil freezes, you cannot drive a stake.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Cedar is winter food, not year-round food</strong> &mdash; browsing starts in November and peaks in January and February when the snow is deepest.</li>
              <li><strong>Browsed cedar barely regrows.</strong> Arborvitae does not reliably shoot from bare brown wood, so a browse line is close to permanent.</li>
              <li><strong>Burlap, never plastic.</strong> Jute breathes and also blocks winter wind and road-salt spray; plastic traps moisture and cooks the foliage.</li>
              <li><strong>Keep the fabric off the plant.</strong> Burlap pressed against foliage is burlap a deer eats through, branch included.</li>
              <li><strong>Repellents are a layer, not the plan</strong> &mdash; egg-solids formulas work on smell, need dry above-freezing application, and fade as deer get hungrier.</li>
              <li><strong>Buy by the linear foot.</strong> Measure the run, double it if deer reach both sides, and add 10&ndash;15% for overlaps.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="deer" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Winter Cedar Protection for Ontario Yards"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Natural Jute Burlap Roll (Hedge Screening Width)',
                why: 'The material the whole method rests on. Jute breathes, so moisture and air move while the deer, the wind, and the road-salt spray do not get through. Buy the width that matches your protection height and the length that matches your run plus overlap — this is a linear-foot purchase, not a one-box purchase.',
                search: 'burlap roll winter plant protection natural jute',
                score: 9.2,
                featured: true,
                pros: ['Breathable — no trapped moisture or heat', 'Also blocks winter wind burn and salt spray', 'Reusable for several seasons if stored dry'],
                cons: ['Needs a stake frame — it is not a standalone product', 'Sags if you do not tension it properly'],
              },
              {
                badge: 'The Frame',
                name: 'Wooden Garden Stakes or Steel T-Posts',
                why: 'The half of the job people forget to buy. Stakes go outside the drip line every four to six feet and hold the burlap off the foliage. Buy them long enough that the fabric still covers to full height once a foot of the stake is in the ground — and buy them before the soil freezes.',
                search: 'wooden garden stakes 6 ft tree',
                score: 8.7,
                pros: ['Sets the air gap that makes burlap work', 'Reusable year after year', 'Tighter spacing solves corners and wind-loaded runs'],
                cons: ['Cannot be driven once the ground freezes', 'Wooden stakes eventually rot at the soil line'],
              },
              {
                badge: 'Best for Young or Isolated Cedars',
                name: 'Polypropylene Deer Netting for Trees and Shrubs',
                why: 'Lighter-duty and much faster than a burlap frame — the right call for a handful of young cedars, a specimen arborvitae, or a hedge with modest deer pressure. Drape it over and stake it down so it stands off the foliage; netting lying on the plant just gets browsed through.',
                search: 'deer netting for trees and shrubs',
                score: 8.0,
                pros: ['Quick to install on individual plants', 'Nearly invisible from a distance', 'Cheap per plant'],
                cons: ['Less protection from wind and salt than burlap', 'Snags and tears — often a two-season product'],
              },
              {
                badge: 'The Supporting Layer',
                name: 'Egg-Solids Deer Repellent (Bobbex-Class)',
                why: 'Smell-based repellents deter the deer before it takes a bite, which is the useful half of the category. Apply in late autumn before browsing routes form, on a dry day above freezing, and reapply per the label. Check for a PCP registration number on the Canadian label before buying.',
                search: 'bobbex deer repellent concentrate',
                score: 7.4,
                pros: ['Deters before the first bite rather than after', 'Useful on plants you cannot practically wrap', 'Cheap to add on top of a barrier'],
                cons: ['Fades exactly when deer pressure peaks', 'Weather-dependent application and reapplication'],
              },
            ]}
            whichToBuy={
              <>
                <strong>A real cedar hedge with deer traffic?</strong> The <em>Best Overall</em> burlap plus <em>The Frame</em> stakes is the combination that holds all winter &mdash; buy both together or you will end up with fabric and nothing to hang it on. <strong>A few young cedars or a single specimen?</strong> <em>Best for Young or Isolated Cedars</em> netting is faster and sufficient. <strong>Plants you cannot wrap, or a hedge you are protecting for the first time?</strong> Add <em>The Supporting Layer</em> repellent in late autumn &mdash; on top of a barrier, never instead of one.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>How Do You Stop Deer Eating Cedars in Ontario?</h2>
          <p>You put something physical between the deer and the foliage, and you do it in autumn. The method that holds through an Ontario winter is burlap on a stake frame &mdash; stakes outside the drip line, breathable jute wrapped around the outside, top left open, protecting to roughly six feet above where the snow will be rather than six feet above where the ground is today. Everything else on this page is either a lighter version of that for smaller plants, or a supporting layer that makes it work better.</p>
          <p>The reason to be blunt about barriers up front is that cedar damage is not like other garden damage. A browsed hosta comes back in June. A browsed cedar largely does not. That asymmetry is what should drive the budget, and it is what most homeowners in the GTA discover in April rather than in October.</p>

          <h2>Why Cedar, and Why Only in Winter</h2>
          <p>Eastern white cedar &mdash; and the cultivated arborvitae varieties that make up most Ontario hedges, including the ubiquitous emerald cedar &mdash; is a recognised winter browse for white-tailed deer in this province. Deer congregate in cedar stands through the coldest months for exactly this reason: the foliage is green, it stands above the snow, and it holds usable nutrition at the point in the year when almost nothing else does.</p>
          <p>That is also why a hedge can look perfect for three growing seasons and be destroyed in one February. From May to October a deer walking your property line has far better options: garden growth, field edges, acorns, the neighbour&rsquo;s hostas. Your cedars are not being spared because they are unappealing &mdash; they are being spared because they rank fourth. Come November the first three are finished or buried, and the ranking changes. The worst of it lands in January and February, when the snowpack is deepest and every green thing above snow level is on the menu.</p>
          <p>The practical read: a hedge protected in late October costs you an afternoon. The same hedge in January cannot be protected at all, because you cannot drive a stake into frozen ground.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the materials:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="burlap roll winter plant protection natural jute">Burlap rolls &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="wooden garden stakes 6 ft tree">Garden stakes &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="deer netting for trees and shrubs">Deer netting &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bobbex deer repellent concentrate">Deer repellent &rarr;</BuyLink>
          </div>

          <h2>The Fact That Should Decide Your Budget: Cedars Barely Regrow</h2>
          <p>This is the piece of the picture most articles skip, and it changes the maths entirely. Arborvitae and eastern white cedar regenerate very poorly from bare brown wood. Cut or browse a deciduous shrub back hard and it pushes new shoots from dormant buds along the old stems. Strip a cedar back past its green growth and that section stays brown &mdash; the hedge fills the gap only slowly and only sideways, from whatever live foliage is adjacent, and often it never really closes.</p>
          <p>So a deer browse line across a hedge is not a seasonal wound; it is closer to permanent disfigurement, and it always sits at the height everybody looks at. On a mature emerald cedar hedge along a driveway, the difference between the burlap you did not buy and the cedars you replace the following spring is not close &mdash; and the replacements will take years to match the height of the ones beside them. That is the entire argument for treating this as a protect-first job rather than a wait-and-see one.</p>

          <h2>Sizing for Snow: Six Feet Is the Wrong Number</h2>
          <p>Deer browse to roughly six feet from where they are standing, and the mistake is in that last clause. In November they are standing on grass. By February they are standing on packed snow, and every centimetre of snowpack raises the browse line by the same amount. A hedge dutifully protected to five feet in autumn can have its top eighteen inches exposed by mid-winter, which is exactly where the damage shows worst.</p>
          <p>Plan for <strong>about six feet above the expected snow line</strong>. In practice that means buying burlap wider than the hedge looks like it needs, and buying stakes long enough that a foot of stake in the ground still leaves you the full protection height above it. On a ravine-backing or rural property in a heavy-snow year, walk the hedge after each big storm and check the top edge &mdash; a second course of burlap added along the top in January is far easier than replacing a browsed leader in spring.</p>

          <h2>Doing the Burlap Job Properly</h2>
          <p>The method is simple and the details are where it succeeds or fails.</p>
          <ul>
            <li><strong>Stakes outside the drip line, every four to six feet.</strong> Wooden stakes or steel T-posts both work. Tighten the spacing at corners and on runs that catch wind, because a sagging panel eventually rests on the foliage &mdash; and foliage against fabric is foliage a deer will browse through.</li>
            <li><strong>Wrap the frame, not the plant.</strong> Staple or tie the burlap to the outside of the stakes so there is an air gap between fabric and foliage all the way along. The gap is the working part of the design.</li>
            <li><strong>Leave the top open.</strong> A closed wrap collects heavy wet snow inside it and splits the leaders &mdash; self-inflicted damage that looks a great deal like deer damage in April. Open tops also let light and air in.</li>
            <li><strong>Do not mummy-wrap individual plants tightly.</strong> Tension the fabric enough that it does not flap and abrade, but no tighter.</li>
            <li><strong>Only the exposed sides.</strong> If deer can reach the hedge from one side only, wrap one side and save the material; if they work both sides, you are buying double the linear footage.</li>
          </ul>
          <p>Two secondary benefits come free with a burlap frame on a GTA property, and both are real. It blocks winter wind desiccation, which browns cedars on exposed corners regardless of deer. And it intercepts road-salt spray, which is a genuine cause of brown cedar hedges along driveways, sidewalks, and municipal roads &mdash; damage regularly blamed on deer that was in fact plough spray.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="burlap roll winter plant protection natural jute">Check burlap rolls on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Buying by the Linear Foot: How Much Do You Actually Need?</h2>
          <p>Measure the hedge run in feet, decide how many sides are exposed, then add for overlap. A one-sided run of a hundred feet needs roughly 110 to 115 feet of burlap once you account for seam overlaps and turning the ends; a hedge deer can reach from both sides needs double. Burlap sells by width and length, so settle your protection height first &mdash; including the snow allowance &mdash; and let that choose the width. Stakes at four-to-six-foot spacing means about twenty stakes for that hundred-foot run, more if it turns corners.</p>
          <p>Buy slightly more of everything than the tape measure says. Offcuts get used at ends and corners, ties and staples vanish, and the alternative is a second trip in mid-November with the forecast turning. Materials are stocked seasonally at Canadian Tire, Home Depot, Rona, and garden centres such as Sheridan Nurseries, though the autumn shelf empties quickly in a cold snap &mdash; Amazon.ca is generally the more reliable source for wide burlap rolls and long netting runs, and the only practical one once the local shelves clear.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="wooden garden stakes 6 ft tree">Check garden stakes on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>When the Cheap Option Is Correct</h2>
          <p><strong>Netting instead of burlap is the right call</strong> for a handful of young cedars, a single specimen arborvitae, or a property with light, occasional deer traffic well inside suburbia. Polypropylene deer netting draped over the plant and staked so it stands off the foliage costs a fraction of a burlap frame and takes minutes per plant. It is a genuinely sufficient answer to a genuinely smaller problem, and there is no reason to over-buy.</p>
          <p><strong>Netting is the wrong call</strong> on a long hedge that backs onto a ravine, a golf course, a conservation block, or farmland, where deer are resident rather than passing through. It offers little against wind burn or salt, it snags and tears, and on a browsed run it tends to end up lying on the foliage, which converts it from a barrier into a mild inconvenience. That property needs the frame.</p>
          <p><strong>Repellent alone is the wrong call</strong> wherever it is the only measure. Not because repellents do not work &mdash; egg-solids formulations work on smell, deterring the animal before the bite, which is the useful mechanism &mdash; but because their efficacy declines through the winter exactly as deer hunger climbs. A repellent-only hedge is well protected in November and unprotected in February. Use them as a layer on top of a barrier and on plants that cannot practically be wrapped, and get the first application on in late autumn before feeding routes form. Before buying any repellent in Canada, look for the <strong>PCP registration number</strong> on the Canadian label &mdash; much of the deer-repellent advice online is written for the American market, and mothballs, which turn up in every home-remedy list, are registered here only as a fabric-pest product. Scattering them outdoors is an off-label pesticide use and not a legal option.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="deer netting for trees and shrubs">Check deer netting on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>What Does Not Work in an Ontario Winter</h2>
          <p><strong>Motion-activated sprinklers.</strong> Excellent against raccoons, cats, and deer from May to October, and irrelevant here &mdash; they run on hose pressure and must be drained before the first hard frost, which is the week the deer problem begins. For a summer garden problem rather than a winter hedge problem, our <Link href="/blog/motion-activated-sprinkler-canada">motion-activated sprinkler guide</Link> is the page you want.</p>
          <p><strong>Short fencing.</strong> A fence that reliably excludes deer runs seven to eight feet &mdash; seven is the working minimum, eight is the safe number &mdash; and below that a motivated white-tailed deer clears it, the exceptions being specific configurations such as an angled or offset double fence. For thirty metres of cedar that is out of proportion, and frequently over a municipal height limit. Fencing earns its keep on a rural property that has a garden to protect as well; our <Link href="/blog/best-deer-fence-for-gardens-canada">deer fence guide for Canadian gardens</Link> covers netting, post spacing, and sealing the bottom edge.</p>
          <p><strong>Scent folklore.</strong> Soap bars, human hair, and predator-urine granules circulate every autumn. Most predator-urine products sold on American sites are not registered for sale in Canada, and the evidence for deterring hungry winter deer is thin regardless. Anything that only signals danger rather than physically preventing access gets called as a bluff by February.</p>

          <h2>The Tick Connection Nobody Mentions</h2>
          <p>There is a second reason to care about a resident deer herd on your property, and it is the part of this that sits closest to our own work. White-tailed deer are the principal reproductive host for adult blacklegged ticks &mdash; the species that carries Lyme disease in Ontario. Deer do not infect ticks, but they are how adult ticks feed, mate, and drop engorged females into the leaf litter to lay eggs. A deer trail that runs through your yard all winter to browse the hedge is also a delivery route for the following spring&rsquo;s tick population.</p>
          <p>That does not make burlap a tick control measure, and we would not sell it as one. But if you are already managing deer traffic, read the tick side of the same picture: our guides to the <Link href="/blog/blacklegged-deer-tick-ontario">blacklegged deer tick in Ontario</Link> and <Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">keeping ticks out of an Ontario yard</Link> cover the habitat edges that matter, and the <Link href="/blog/deer-tick-vs-dog-tick-canada">deer tick versus dog tick comparison</Link> covers identification. Where BuzzSkito does treat &mdash; genuinely what we do rather than what we review &mdash; a full tick program is <strong>five sprays across the season</strong>, targeted at the wood edges, leaf litter, and long-grass margins where ticks actually live, at $597 standalone or $497 bundled with a mosquito plan.</p>
          <p>Two related notes on cedar hedges. They are frequently blamed for mosquitoes, which is a separate misunderstanding &mdash; see <Link href="/blog/do-cedar-trees-attract-mosquitoes">do cedar trees attract mosquitoes</Link>. And if you find gnawed bark at the base of young cedars at snowmelt rather than browsed foliage at head height, that is voles, not deer: our <Link href="/blog/how-to-get-rid-of-voles-canada">vole guide for Canada</Link> covers the trunk guards that stop them.</p>

          <h2>Winter Cedar Protection — Key Facts</h2>
          <div className="not-prose rounded-xl border border-navy-100 overflow-x-auto my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Damage window (Ontario)', 'November to March; worst in January and February'],
                  ['Why cedar', 'Green winter browse above the snow when other food is buried'],
                  ['Regrowth', 'Poor — arborvitae rarely reshoots from bare brown wood'],
                  ['Protection height', 'About 6 ft above the expected snow line, not above today’s ground'],
                  ['Best barrier', 'Breathable jute burlap on a stake frame, top left open'],
                  ['Stake spacing', 'Every 4–6 ft, outside the drip line; tighter at corners'],
                  ['Never use', 'Plastic sheeting — traps moisture and heat against the foliage'],
                  ['Install deadline', 'Late October to mid-November — before the ground freezes'],
                  ['Remove', 'April, once hard frosts have finished'],
                  ['Repellent class', 'Egg-solids (smell-based); check the PCP number on the Canadian label'],
                  ['Quantity rule', 'Linear feet of run, doubled if deer reach both sides, plus 10–15%'],
                  ['Also protects against', 'Winter wind burn and road-salt spray'],
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
            <li><Link href="/blog/blacklegged-deer-tick-ontario">The Blacklegged Deer Tick in Ontario &mdash; What Deer Traffic Brings With It</Link></li>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard in Ontario</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-voles-canada">How to Get Rid of Voles in Canada &mdash; The Other Winter Hedge Damage</Link></li>
            <li><Link href="/blog/do-cedar-trees-attract-mosquitoes">Do Cedar Trees Attract Mosquitoes?</Link></li>
            <li><Link href="/blog/best-deer-fence-for-gardens-canada">Best Deer Fence for Gardens in Canada &mdash; When Fencing Is the Right Answer</Link></li>
            <li><Link href="/blog/motion-activated-sprinkler-canada">Best Motion-Activated Sprinkler Canada &mdash; For the Summer Deer Problem</Link></li>
            <li><Link href="/pest-product-guides">All BuzzSkito Pest Product Guides</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="deer" />
      </article>
    </>
  )
}
