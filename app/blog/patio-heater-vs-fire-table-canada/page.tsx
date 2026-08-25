import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'patio-heater-vs-fire-table-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Patio Heater vs Fire Table in Canada — Which One Actually Keeps You Warm?'
const META_TITLE = 'Patio Heater vs Fire Table in Canada'

const FAQS = [
  {
    question: 'Patio heater or fire table — which is better for a Canadian backyard?',
    answer: 'A propane tower heater is better if the goal is warmth; a fire table is better if the goal is a place to gather. They are not really competing products, and the BTU numbers on the boxes hide that. A tower heater has a reflector above the burner that pushes radiant heat outward and downward across a rough 2 to 3 metre radius, so four or five people standing around it all feel it. A fire table burns in an open pan, so most of its output rises straight up and only the people within roughly an arm\'s length of the ring feel meaningful heat on their hands and shins. If you want the deck usable through a cool Ontario October, buy the heater. If you want the evening to have a centre of gravity and you are dressed for the weather anyway, buy the table. Plenty of Canadian yards end up with both, for about the price of one good fire table.',
  },
  {
    question: 'How many BTU do I need for a patio heater in Canada?',
    answer: 'For an open Ontario patio, a full-size propane tower in the 40,000 to 50,000 BTU class is the standard answer, and going higher rarely buys you much because the limiting factor outdoors is not output, it is how much of that output reaches a person before the wind takes it. What matters more than the number is the shape of the appliance. A 46,000 BTU tower with a wide reflector delivers far more usable warmth than a 50,000 BTU fire table, because the reflector aims the heat at people instead of at the sky. On a small balcony or a sheltered corner, a 10,000 to 12,000 BTU tabletop heater or a 1,500 W electric infrared unit is genuinely enough, and both are easier to live with than a full tower.',
  },
  {
    question: 'How long does a 20 lb propane tank last on a fire table?',
    answer: 'A full 20 lb barbecue tank holds roughly 430,000 BTU of usable energy, so a 50,000 BTU/hr appliance running wide open drains it in about eight and a half hours. Almost nobody runs a fire table wide open, though. Turned down to a normal flame height, which is usually somewhere near half output, the same tank commonly stretches across fifteen to twenty hours of evening use, or several weekends. A tower patio heater running at 46,000 BTU/hr works out to roughly nine hours on high. The practical advice for Canada is simple: own two tanks. Refilling in November is a chore, and the one evening you run out will be the coldest one.',
  },
  {
    question: 'Can I use a propane fire table or patio heater under a covered porch?',
    answer: 'Only if the manual explicitly allows it, and most do not. Propane fire tables and tower heaters are certified for outdoor use in the open air, and their manuals state minimum overhead and side clearances that a low porch ceiling, a pergola with a solid roof, or a patio umbrella will usually violate. There is a second and more serious problem: propane combustion produces carbon monoxide, which needs open air to disperse and will accumulate in an enclosed or three-sided space. If your seating area is under a solid roof, the correct product is an electric infrared heater. It produces no combustion gases at all, needs far less clearance, and many models are designed to be mounted to a ceiling or wall. That is one of the few cases in this comparison where the cheaper, less impressive-looking product is unambiguously the right buy.',
  },
  {
    question: 'What clearance does a propane fire table need?',
    answer: 'Follow the number in your own manual, because it varies by model, but the working rule for Canadian yards is to treat a fire table as needing about a metre of clear space on every side and a wide open sky above it. Nothing overhead: no umbrella, no awning, no low branches, no pergola slats. Keep it off combustible surfaces unless the manual permits them, keep the propane tank upright and outdoors at all times, never store a tank in the garage or the house, and check the hose and regulator connection with soapy water at the start of every season. On a wood or composite deck, put the appliance where the radiant heat is not aimed at a railing, and be aware that composite decking scorches at a lower temperature than most people expect.',
  },
  {
    question: 'Is a fire table worth it, or should I just buy a cheap fire pit?',
    answer: 'A fire table earns its price on three things: no smoke, no wood to buy and store, and an instant on-off that lets you use it on a Tuesday evening for forty minutes. If those matter to you, it is worth it. If they do not, a plain wood-burning pit costs a fraction as much and delivers more heat and more atmosphere per dollar. There is also a middle option people forget: a propane fire bowl gives you the same clean flame in a smaller, cheaper package without the table surface. Buy the table only if you will genuinely use the ledge, because the ledge is most of what you are paying for. A 28-inch model with almost no usable rim is the worst value in this category.',
  },
  {
    question: 'Do fire tables and patio heaters keep mosquitoes away?',
    answer: 'Barely. A clean propane flame produces almost no smoke, and smoke is the only part of a fire that has any real effect on mosquitoes. Heat is not a repellent either. In fact mosquitoes track body heat as one of their cues, and a warm patio in September simply keeps you outdoors for longer during the hours when Culex mosquitoes are most active. If bites are the reason you stop using the yard, the appliance to add is not another heater. Steady moving air from an outdoor fan, a screened structure, or a treated yard are the three things that actually change the outcome.',
  },
  {
    question: 'Can I leave a fire table outside all winter in Ontario?',
    answer: 'You can leave the body outside under a proper fitted cover, but do three things first. Disconnect the propane tank and store it upright outdoors, never in a garage or basement. Empty the burner pan of lava rock or fire glass, or at minimum make sure the cover keeps it dry, because rock that soaks up water and then freezes will crack, and wet rock heated fast in the spring can spall and throw fragments. And seal or plug the burner opening against mice, which will happily nest in a warm-smelling enclosure over the winter. Freeze-thaw cycles are what kill fire tables in Ontario, not cold itself. The cover is the cheapest insurance you will ever buy for one.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Propane fire table or patio heater for a Canadian yard? Heat delivered to people, burn time, covered-porch rules, sizing and clearance, compared honestly.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function PatioHeaterVsFireTableCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A head-to-head comparison of propane fire tables and patio heaters for Canadian yards — how much heat actually reaches people, propane burn time from a 20 lb tank, covered-porch and clearance rules, sizing from 28 to 52 inches, and when the cheaper option is the right call.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Patio Heater vs Fire Table Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Patio Heater vs Fire Table</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Both sit around 50,000 BTU. Only one of them puts that heat where people are standing. A working comparison for Ontario autumns &mdash; heat delivery, propane burn time, covered-porch rules, sizing and clearance.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Propane Tower Patio Heater (~46,000 BTU)" search="propane patio heater 46000 btu tower" label="Most heat per dollar" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Buy the <strong>patio heater</strong> if you want warmth, and the <strong>fire table</strong> if you want a place to gather. A tower heater&rsquo;s reflector aims its output outward across a 2&ndash;3 m radius, so everyone standing near it feels it. A fire table burns in an open pan, so most of its heat goes straight up and only people within about an arm&rsquo;s length feel much. The BTU ratings are nearly identical &mdash; roughly 50,000 for a fire table and 40,000&ndash;50,000 for a tower &mdash; which is exactly why BTU is the wrong number to shop on.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Fire tables run roughly the <strong>$200&ndash;$500 CAD</strong> range in Canada for 28&ndash;52 in models; full-size propane towers land in a similar band, and electric infrared units sit below both.</li>
              <li>A full 20 lb propane tank holds about <strong>430,000 BTU</strong> &mdash; roughly 8&frac12; hours at 50,000 BTU/hr wide open, and far longer at a normal flame height.</li>
              <li><strong>Under a covered porch, buy neither.</strong> Propane appliances need open air for clearance and for carbon monoxide to disperse. An electric infrared heater is the correct product there.</li>
              <li>Size the table by the ledge, not the diameter: 28 in is an accent piece, 34&ndash;44 in seats four to six properly, 48&ndash;52 in rectangular works at dining height.</li>
              <li>Fire glass beats lava rock in wet Ontario weather &mdash; rock that soaks up water and freezes will crack, and can spall when heated fast.</li>
              <li>Neither appliance repels mosquitoes. A clean propane flame makes essentially no smoke, and smoke is the only part of a fire that ever affected them.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150 five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Patio Heat for Canadian Yards"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Propane Tower Patio Heater (~46,000 BTU)',
                why: 'The reflector is the whole product. A wide dome above the burner turns heat that would rise into radiant heat aimed outward and down, which is why a tower warms a standing group and a fire table warms four pairs of hands. If the reason you are shopping is that the deck goes unused after Labour Day, this is the appliance that changes that.',
                search: 'propane patio heater 46000 btu tower',
                score: 9.1,
                featured: true,
                pros: ['Heat reaches people 2–3 m out', 'Runs about 9 hours on a 20 lb tank', 'Wheels on most models — roll it where the group is'],
                cons: ['Top-heavy in wind; needs the base weighted or filled', 'No table surface, no ambience'],
              },
              {
                badge: 'Best Gathering Point',
                name: '44-in Round Propane Fire Table (50,000 BTU)',
                why: 'The size where a fire table stops being decoration and starts being furniture — a real ledge for drinks around a real flame, seating four to six without anyone reaching over the fire. Clean propane means no smoke, no wood pile, and an evening that starts with a knob instead of twenty minutes of kindling.',
                search: 'propane fire pit table 50000 btu 44 inch',
                score: 8.8,
                pros: ['Usable ledge all the way around', 'Instant on and off', 'No smoke, no ash, no wood storage'],
                cons: ['Most heat rises — poor at warming a standing group', 'Needs a tank hideaway or a visible tank beside it'],
              },
              {
                badge: 'Best Under a Roof',
                name: 'Electric Infrared Patio Heater',
                why: 'The honest answer for a covered porch, a three-sided sunroom, or a balcony with a ceiling — where a propane appliance is both a clearance problem and a carbon monoxide problem. No combustion, minimal clearance, wall or ceiling mounting on many models, and it heats objects and people directly rather than heating air the wind will steal.',
                search: 'infrared patio heater electric outdoor',
                score: 8.6,
                pros: ['Safe under a solid roof', 'No tanks, no refills, no CO', 'Cheapest of the three to buy'],
                cons: ['Needs an outdoor-rated circuit within reach', 'Short throw — warms what it points at, not a whole yard'],
              },
              {
                badge: 'Best Small Deck',
                name: 'Propane Fire Bowl',
                why: 'The flame without the furniture. A fire bowl gives a small deck, balcony or cottage dock the same clean propane fire in a footprint that does not swallow the space, at a meaningfully lower price than any table. If you were about to buy a 28-inch fire table because it was cheap, buy this instead — the 28-inch ledge is too narrow to put a drink on anyway.',
                search: 'propane fire bowl outdoor patio',
                score: 8.2,
                pros: ['Fits small decks and docks', 'Much cheaper than a table', 'Easy to move and store'],
                cons: ['No surface at all', 'Small burner — modest flame in wind'],
              },
              {
                badge: 'Best for Dining',
                name: '48–52 in Rectangular Propane Fire Table',
                why: 'A rectangular table at closer to dining height suits a long patio and a six-to-eight person group far better than a round coffee-height model. This is the format to buy if the fire table is replacing a patio table rather than sitting beside one.',
                search: 'rectangular propane fire pit table 48 inch',
                score: 8.0,
                pros: ['Seats six to eight along the long sides', 'Wide ledge either side of the burner', 'Suits narrow rectangular patios'],
                cons: ['Heavy — a two-person move', 'Wants a wind guard at this length'],
              },
              {
                badge: 'Best Upgrade',
                name: 'Fire Glass + Wind Guard',
                why: 'Two accessories that do more for a fire table than any spec on the box. Tempered fire glass will not absorb water and crack the way lava rock can through an Ontario freeze-thaw winter, and a glass wind guard is what stops an October breeze from flattening the flame into the ledge. Buy them with the table, not next spring.',
                search: 'fire pit wind guard glass',
                score: 7.9,
                pros: ['Wind guard keeps the flame upright and steady', 'Fire glass survives freeze-thaw better than lava rock', 'Cheap relative to the appliance'],
                cons: ['Guards are model-specific — measure the burner opening', 'Glass shows soot and needs occasional cleaning'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Deck goes unused after Labour Day and you want it back?</strong> The <em>Best Overall</em> propane tower &mdash; it is the only one here that meaningfully warms people standing more than an arm&rsquo;s length away. <strong>Want the evening to have a centre?</strong> The <em>Best Gathering Point</em> 44-in fire table, and buy the ledge, not the BTU. <strong>Seating area under a solid roof?</strong> The <em>Best Under a Roof</em> electric infrared unit, and no propane appliance at all &mdash; that is a clearance and carbon monoxide question, not a preference. <strong>Small deck, balcony, or dock?</strong> The <em>Best Small Deck</em> fire bowl beats a cheap 28-inch table on every count. <strong>Replacing the patio table?</strong> The <em>Best for Dining</em> rectangular model. And if it is bites rather than cold that end your evenings early, no heater fixes that &mdash; that is what <Link href="/mosquito-control">a treated yard</Link> is for.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Patio Heater vs Fire Table — Side by Side</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Appliance</th>
                  <th className="px-4 py-3 text-left">Typical output</th>
                  <th className="px-4 py-3 text-left">Where the heat goes</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Buy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: 'Propane tower patio heater', out: '40,000–50,000 BTU/hr · ~9 hrs per 20 lb tank', heat: 'Reflector aims it outward, roughly 2–3 m radius', best: 'Warming a standing group on an open patio', search: 'propane patio heater 46000 btu tower' },
                  { model: 'Round propane fire table (34–44 in)', out: '~50,000 BTU/hr · ~8½ hrs wide open', heat: 'Open pan — most output rises; warms hands and shins', best: 'A gathering point with a usable ledge', search: 'propane fire pit table 50000 btu 44 inch' },
                  { model: 'Rectangular fire table (48–52 in)', out: '~50,000–65,000 BTU/hr depending on burner length', heat: 'Same open pan, spread along a longer burner', best: 'Six to eight people, dining-height patios', search: 'rectangular propane fire pit table 48 inch' },
                  { model: 'Electric infrared heater', out: '1,500 W typical (~5,100 BTU/hr equivalent)', heat: 'Directional radiant — heats objects it points at', best: 'Covered porches, balconies, three-sided spaces', search: 'infrared patio heater electric outdoor' },
                  { model: 'Propane fire bowl', out: '~40,000–50,000 BTU/hr', heat: 'Open pan, smaller burner — ambience first', best: 'Small decks, balconies, cottage docks', search: 'propane fire bowl outdoor patio' },
                  { model: 'Tabletop propane heater', out: '~10,000–12,000 BTU/hr', heat: 'Short radius — the table and the people at it', best: 'Bistro tables, sheltered corners, condo balconies', search: 'tabletop propane patio heater' },
                ].map(({ model, out, heat, best, search }) => (
                  <tr key={model} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{model}</td>
                    <td className="px-4 py-3 text-gray-700">{out}</td>
                    <td className="px-4 py-3 text-gray-700">{heat}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{best}</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search={search} block>Check price on Amazon.ca &rarr;</BuyLink></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Output figures are the ratings manufacturers publish for these appliance classes. Burn-time estimates assume a full 20 lb barbecue tank, which holds roughly 430,000 BTU of usable energy. Canadian pricing on both categories swings hard with the season &mdash; use the links for what is actually listed today.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Jump straight to current Canadian availability &mdash; the warmth pick and the ambience pick:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="propane patio heater 46000 btu tower">Check tower heaters on Amazon.ca &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="propane fire pit table 50000 btu 44 inch">Check 44-in fire tables &rarr;</BuyLink>
          </div>

          <h2>The Short Version: They Are Not the Same Product</h2>
          <p>Walk into a Canadian Tire in September and the fire tables and the patio heaters are on the same aisle, priced within a hundred dollars of each other, both stamped with a number around 50,000 BTU. That similarity is misleading, and it is the reason a lot of people spend $400 on the wrong one.</p>
          <p>A fire table is a burner in an open pan surrounded by a ledge. A patio heater is a burner with a reflector above it. That one structural difference decides everything downstream. Heat rises, so an open pan sends the great majority of its output vertically, where it does nobody any good. A reflector intercepts that rising heat and redirects it outward and downward as radiant warmth &mdash; the same principle as the shade over a heat lamp. Two appliances, near-identical burner ratings, completely different amounts of heat reaching an actual human being.</p>
          <p>So the honest framing is not <em>which is better</em>. It is: are you buying warmth, or are you buying a place for people to stand around? Both are legitimate purchases. They are just different ones.</p>

          <h2>Heat Delivered to People vs Heat Delivered to the Sky</h2>
          <p>Stand beside a running tower heater on an open patio and you will feel it two to three metres out. Five people can arrange themselves around it and all get something. Move to three metres and the effect fades, but it does not vanish, because radiant heat travels in a straight line to whatever it strikes and does not depend on the air staying put.</p>
          <p>Stand beside a fire table and the picture is different. Your hands and shins get warm; your back does not. Lean over the ring and it is genuinely hot; sit back in a deep patio chair with a footrest and much of it is gone. The people at a fire table are close to it, which is precisely why it works socially and precisely why it underperforms thermally.</p>
          <p>The wind makes this gap wider, not narrower. Convected heat &mdash; warm air rising off an open flame &mdash; is exactly what an Ontario October breeze carries away. A reflector-driven appliance loses less to wind because a larger share of its output is radiant. A glass wind guard on a fire table helps a great deal here, mostly by keeping the flame upright and stable rather than by adding heat, and it is the single accessory we would tell any fire table buyer not to skip.</p>

          <h2>Why BTU Is the Wrong Number to Shop On</h2>
          <p>BTU per hour measures fuel burned, not warmth delivered. It says nothing about the direction that energy travels, which outdoors is the entire question. A 46,000 BTU tower with a well-shaped reflector will make a group of people demonstrably more comfortable than a 50,000 BTU fire table, and both will lose to a modest 1,500 W electric infrared unit pointed straight at someone from a metre away.</p>
          <p>What to look at instead, in rough order of how much it matters:</p>
          <ul>
            <li><strong>Reflector geometry, on a heater.</strong> A wide, deep dome throws heat outward. A narrow flat disc mostly does not. This is the difference between two towers that look identical on a spec sheet.</li>
            <li><strong>Burner length, on a table.</strong> A long linear burner in a 48-inch rectangular table spreads flame along the seating line. A small round burner in a big table leaves the far ends cold.</li>
            <li><strong>Base weight and stability.</strong> Tower heaters are top-heavy by design, and the good ones have a base you fill with sand or water. An unweighted tower on a windy October evening is a real hazard, not a theoretical one.</li>
            <li><strong>CSA or equivalent certification.</strong> Non-negotiable on any gas appliance sold in Canada. Check the plate, not the listing copy.</li>
            <li><strong>Ledge width, on a table.</strong> Discussed below, and the thing buyers regret most.</li>
          </ul>

          <h2>Propane: What a 20 lb Tank Actually Buys You</h2>
          <p>A full 20 lb barbecue tank holds roughly 430,000 BTU of usable energy. Divide by the appliance rating and you get the honest ceiling:</p>
          <ul>
            <li><strong>50,000 BTU/hr fire table, wide open:</strong> about 8&frac12; hours.</li>
            <li><strong>46,000 BTU/hr tower heater, on high:</strong> about 9&frac12; hours.</li>
            <li><strong>Either one at a normal setting:</strong> considerably longer. Most people run a fire table around half output because a flame at full height in a 44-inch pan is more furnace than atmosphere. Fifteen to twenty evening hours from a tank is a realistic expectation.</li>
          </ul>
          <p>Two practical Canadian notes. First, own two tanks. The evening you run dry will be the coldest one of the season, and exchange cages get picked over in the fall. Second, cold weather does not stop propane working &mdash; it boils at roughly &minus;42&nbsp;&deg;C, far below anything Southern Ontario produces &mdash; but a nearly empty tank in genuine cold has less vapour pressure available and can struggle to feed a high-draw burner. A tank that seems weak on a &minus;10&nbsp;&deg;C night is usually a low tank, not a broken appliance.</p>
          <p>A clip-on tank gauge costs almost nothing and removes the guesswork entirely, and a hideaway kit &mdash; a longer hose plus a side-table enclosure &mdash; is what stops a 20 lb cylinder from sitting in plain view next to a nice fire table.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="propane tank gauge level indicator">Tank gauge &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="propane tank cover hideaway table">Tank hideaway table &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="propane hose extension regulator kit 12 ft">Hose &amp; regulator kit &rarr;</BuyLink>
          </div>

          <h2>Covered Porch vs Open Sky — and the Clearance Rules</h2>
          <p>This is the section where the cheaper product wins outright, and it is worth being blunt about it.</p>
          <p><strong>Under a solid roof, buy neither propane appliance.</strong> Fire tables and tower heaters are certified for outdoor use in open air. Their manuals specify minimum overhead and side clearances that a low porch ceiling, a solid-roof pergola, or a patio umbrella will typically violate. More importantly, burning propane produces carbon monoxide, and carbon monoxide needs open air above it to disperse. A three-sided porch with a roof is exactly the geometry where it does not. This is not a manufacturer being cautious; it is the reason those appliances carry outdoor-only labelling in the first place.</p>
          <p>The right product for a covered space is an <strong>electric infrared heater</strong>. No combustion, so no exhaust gases at all. Far smaller clearance requirements, and many models are designed specifically to be mounted to a ceiling joist or wall where a freestanding unit would be in the way. It costs less than either propane option, and on a covered porch it will make you more comfortable than either, because a roof holds warmth in and radiant heat has nowhere to escape upward. The only real requirement is an outdoor-rated circuit within reach.</p>
          <p>For open-sky patios, the working clearance rules are straightforward:</p>
          <ul>
            <li>Roughly a metre of clear space on every side, and nothing overhead &mdash; no umbrella, no awning, no branches, no pergola slats.</li>
            <li>Propane cylinders stay upright and outdoors permanently. Never in a garage, never in a basement, never in a shed you also heat.</li>
            <li>Soap-test the hose and regulator connection every spring. Bubbles mean stop.</li>
            <li>On composite decking, mind where the radiant heat lands. Composite scorches at a lower temperature than most owners expect, and the mark is permanent.</li>
            <li>Never move a lit appliance, and let a fire table cool fully before covering it.</li>
          </ul>

          <h2>Sizing a Fire Table: 28 in Through 52 in</h2>
          <p>Diameter is the number on the box; ledge width is the number that decides whether you like the thing. Sizing by what the table actually has to do:</p>
          <ul>
            <li><strong>28&ndash;30 in round.</strong> An accent piece. The burner opening eats most of the top, leaving a rim too narrow to trust a wine glass to. Two people can warm their hands. If this is the size your budget reaches, buy a propane fire bowl instead and spend the difference on a cover &mdash; you will get the same flame without pretending it is furniture.</li>
            <li><strong>34&ndash;44 in round.</strong> The sweet spot, and where most Canadian buyers should land. Four to six seats around it, a genuine ledge on all sides, and a burner large enough to look like a fire rather than a pilot light. The 44-inch end of this range is the one we would buy.</li>
            <li><strong>48&ndash;52 in rectangular.</strong> Six to eight people along the long sides, wide ledges either end of a linear burner, and a shape that suits a narrow patio far better than a circle. Heavier &mdash; plan on two people to position it &mdash; and long enough that a wind guard stops being optional.</li>
          </ul>
          <p>One more sizing check people forget: measure the gap between the table and the seating. A fire table you have to lean across to feel is a fire table nobody uses, and deep-seated patio furniture with footrests pushes everyone farther back than a set of dining chairs would.</p>

          <h2>Lava Rock vs Fire Glass</h2>
          <p>Both exist to diffuse the flame across the burner pan and to hide the burner itself. Lava rock is cheaper and gives a more natural, campfire-ish look. Fire glass is tempered, comes in colours, reflects the flame, and stays clean-looking for years.</p>
          <p>In Canada there is a practical reason to lean toward glass: <strong>porous lava rock absorbs water</strong>. Rock that soaks up an October rain and then goes through a hard freeze can crack, and rock still holding water that gets heated quickly can spall and throw fragments. Tempered fire glass does not absorb water. Neither material is maintenance-free &mdash; both want to stay dry under a fitted cover through the off-season &mdash; but glass is the more forgiving one in a freeze-thaw climate. If you like the look of lava rock, keep it and just be disciplined about the cover.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="fire glass for propane fire pit">Fire glass &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="lava rock for fire pit">Lava rock &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="fire pit table cover waterproof">Fire table cover &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="patio heater cover heavy duty">Patio heater cover &rarr;</BuyLink>
          </div>

          <h2>The Mistakes Canadian Buyers Actually Make</h2>
          <ul>
            <li><strong>Shopping on BTU.</strong> Covered above, and it is the big one. Two appliances at 50,000 BTU can deliver wildly different amounts of warmth to a person.</li>
            <li><strong>Buying a fire table to heat the patio.</strong> It will not, and no amount of turning the knob up changes the physics of an open pan.</li>
            <li><strong>Putting a propane appliance under a roof.</strong> Covered above. Buy the electric infrared unit instead.</li>
            <li><strong>Skipping the cover.</strong> A $60 fitted cover is the difference between a fire table that lasts eight seasons in Ontario and one that has a rusted burner and a seized ignitor by year three. Freeze-thaw and standing water kill these things, not cold.</li>
            <li><strong>Not weighting the base of a tower.</strong> They are designed to have sand or water added. An empty base plus a gust equals a tipped, lit appliance.</li>
            <li><strong>Assuming it fixes the bug problem.</strong> A warm patio in September is a patio you sit on later into mosquito hours, which is the opposite of a fix. More on that below.</li>
          </ul>

          <h2>When the Cheaper Option Is Simply the Right Call</h2>
          <p>Three cases where we would talk someone out of the expensive purchase:</p>
          <p><strong>You have a covered porch.</strong> The electric infrared heater is not a compromise here. It is better, cheaper, and safer, and it is the correct answer even if you can afford the fire table.</p>
          <p><strong>You have a small deck or a balcony.</strong> A propane fire bowl gives you the flame without the footprint, at well under the price of a table, and a tabletop heater in the 10,000&ndash;12,000 BTU class does more for a bistro-table setup than a full tower would in the same corner. Condo and townhouse balconies also frequently have rules about open flame &mdash; check yours before you buy anything, because the electric option may be the only permitted one.</p>
          <p><strong>You want the fire more than the table.</strong> A plain wood-burning pit costs a fraction of any of this and produces more heat and more atmosphere per dollar. What you give up is smoke, ash, wood storage and a twenty-minute start-up, and what you gain &mdash; genuinely &mdash; is the only version of a backyard fire that has any effect on mosquitoes at all. That trade-off is the whole subject of our guide to <Link href="/blog/do-fire-pits-repel-mosquitoes-canada">whether fire pits keep mosquitoes away</Link>.</p>

          <h2>Ontario Winter: Covers, Storage and Cold-Weather Propane</h2>
          <p>Neither appliance needs to come indoors, but both need to be shut down properly. Disconnect the cylinder and leave it outdoors, upright, out of the sun. Cover the appliance with a fitted, breathable cover rather than a tarp, which traps condensation against steel. Make sure the burner pan is dry before the first hard freeze, and if you use lava rock, either bring it in or trust the cover completely.</p>
          <p>Plug or screen the burner opening if the unit will sit all winter. A dark enclosure that smells faintly of gas is exactly the kind of place a mouse decides to spend January, and a nest in a burner tube is a spring problem you will not enjoy diagnosing. Come April, soap-test the connections before the first light.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">A warm patio in September is a patio you sit on later.</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Which is lovely, right up until the mosquitoes find you. BuzzSkito&rsquo;s licensed barrier spray treats the vegetation where they rest, from $99 for a single treatment. Tick protection runs $597/season standalone, or $497 bundled with any mosquito plan &mdash; five applications across the season. Serving 19+ GTA cities, May through September.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Where to Buy in Canada</h2>
          <p>Both categories are seasonal in Canadian retail, and the season is short and strange: fire tables and patio heaters land in stores in late spring, sell through summer, and then get discounted hard in September and October &mdash; which is, awkwardly, exactly when you actually want one. Canadian Tire carries the widest range of both, including its own house brands. Home Depot Canada and Rona stock fire tables and tower heaters through the patio season and clear them in the fall. Costco Canada rotates larger fire tables through in late spring, often at strong value, and then they are gone.</p>
          <p>Amazon.ca is the channel that carries the whole range year-round, which matters most in October when in-store selection has already been picked over &mdash; and matters again for the accessories, since covers, wind guards, hideaway tables and hose kits are frequently the parts that no local store has in the size your particular model needs.</p>

          <h2>The Bottom Line</h2>
          <p>Buy the tower heater if the problem is that your yard goes cold and unused after Labour Day; its reflector is the only thing in this comparison that reliably warms people standing more than an arm&rsquo;s length away. Buy a 34&ndash;44 inch fire table if the problem is that the yard has no centre, and buy it for the ledge rather than the BTU. If your seating is under a roof, buy the electric infrared heater and no propane appliance at all &mdash; that is a safety call, not a preference. On a small deck or balcony, a fire bowl or a tabletop heater beats both. Add the cover and the wind guard at the time of purchase, own two propane tanks, and keep the whole thing out from under anything overhead.</p>
          <p>And if it turns out the reason nobody uses the yard was never the temperature, the appliance was never going to fix it.</p>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4 my-6">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100">
                <summary className="cursor-pointer px-5 py-3 font-semibold text-brand-900 list-none">{question}</summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>

          <AdjacentPestCTA variant="equipment" />

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/do-fire-pits-repel-mosquitoes-canada">Do Fire Pits Keep Mosquitoes Away? The Honest Answer</Link></li>
            <li><Link href="/blog/do-tiki-torches-repel-mosquitoes">Do Tiki Torches Repel Mosquitoes?</Link></li>
            <li><Link href="/blog/best-gazebo-with-mosquito-net-canada">Best Gazebos with Mosquito Netting in Canada</Link></li>
            <li><Link href="/blog/mosquito-screens-patio-canada">Mosquito Screens for Your Patio &mdash; Every Option Compared</Link></li>
            <li><Link href="/blog/patio-misting-system-canada">Patio Misting Systems in Canada</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Heat the Patio. We&rsquo;ll Handle What Bites On It." subtext="Licensed mosquito and tick barrier spray from $99. 19+ GTA cities, May through September. 150 five-star reviews." variant="dark" />
    </>
  )
}
