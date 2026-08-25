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

const SLUG = 'best-patio-heater-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Best Patio Heaters in Canada for 2026'
const META_TITLE = 'Best Patio Heaters in Canada for 2026'

const FAQS = [
  {
    question: 'How many BTU do I need for a patio heater?',
    answer: 'For an open deck or patio, a full-size propane tower in the 46,000 to 50,000 BTU range is the standard and the right default. It puts usable warmth into a circle roughly 9 to 12 feet across, which covers a four- to six-person seating group. Below about 40,000 BTU a freestanding tower struggles on an exposed Ontario evening in October. Above 50,000 you are mostly buying a bigger tank appetite, not a bigger warm circle. Tabletop propane heaters run around 10,000 to 11,000 BTU and warm the people at that one table, nothing more. Electric infrared units are usually rated in watts instead: 1,500 W is roughly 5,100 BTU per hour, which sounds tiny beside a propane tower but behaves very differently because it radiates directly at people rather than heating the air.',
  },
  {
    question: 'Propane or electric patio heater — which is better in Canada?',
    answer: 'Propane wins on raw output and on freedom: no wiring, move it anywhere, and enough heat to make an open deck usable in October. Electric infrared wins on running cost, silence, no tanks to refill, and the fact that it keeps working in wind because it heats objects and people directly rather than heating air the wind then removes. The practical rule for Canada: open, exposed yard, no outdoor circuit, guests to warm — buy propane. Covered porch, pergola, three-season room or a condo balcony where propane is usually banned outright — buy electric infrared, mounted on the wall or ceiling and angled down at the seating.',
  },
  {
    question: 'How much does it cost to run a patio heater in Ontario?',
    answer: 'A 46,000 to 50,000 BTU propane tower burns through a 20 lb tank in roughly 8 to 10 hours at full output. With Ontario tank exchange typically in the $25 to $35 range, and a weight-based refill usually cheaper, that works out to somewhere around $2.50 to $4.00 an hour. A 1,500 W electric infrared heater uses 1.5 kWh per hour, and at Ontario regulated time-of-use rates in the single digits to mid-teens of cents per kilowatt-hour that is roughly 12 to 25 cents an hour. Electric is dramatically cheaper to run — but it also produces about a tenth of the heat, so the honest comparison is not cost per hour, it is cost per hour of the warmth you actually feel. Radiant electric puts more of its smaller output onto people; propane heats the whole space and loses a lot of it to the sky.',
  },
  {
    question: 'How long does a 20 lb propane tank last in a patio heater?',
    answer: 'Roughly 8 to 10 hours of continuous burn on a full-size 46,000 to 50,000 BTU tower, and considerably longer in real use because almost nobody runs one wide open all evening. Turn it down to a medium setting once the seating area has warmed up and the same tank stretches across several evenings. Buy a second tank before you need one — Ontario exchange cages are picked over on the first cold weekend in October, which is exactly when you want the heater. A magnetic or strap-on tank level gauge is a few dollars and removes the guesswork.',
  },
  {
    question: 'Can I use a propane patio heater on a condo balcony in Ontario?',
    answer: 'Usually not. Most Ontario condominium corporations prohibit propane appliances and the storage of propane cylinders on balconies in their rules or declaration, and many municipal fire services reinforce that position. Assume it is banned until your property manager confirms otherwise in writing. This is the single most common wasted purchase in the category: a tower heater bought for a balcony that has to go back. The workable balcony answer is an electric infrared heater — wall-mounted or on a stand, plugged into the balcony outlet if you have one — and even then check your building rules, because some corporations restrict fixed mounting on exterior walls.',
  },
  {
    question: 'Can a patio heater go under a covered porch or a gazebo?',
    answer: 'A propane tower heater is an outdoor appliance and needs open air above it. Its certification plate specifies minimum clearances — commonly on the order of three feet to the sides and more above the reflector — and those figures are not advisory. Under a low solid roof, a patio umbrella or the fabric top of a gazebo, a tower heater is both a fire risk and a carbon monoxide risk, because combustion products need somewhere to go. Covered spaces are where electric infrared belongs: no combustion, no exhaust, and ceiling and wall mounts designed exactly for a porch roof or pergola beam. Follow the mounting height in the manual, typically around seven to nine feet, and use a properly rated outdoor circuit.',
  },
  {
    question: 'Do patio heaters work in the wind?',
    answer: 'This is the specification nobody prints and the one that decides whether you are happy with the purchase. A propane tower heats air, and moving air carries that heat away before it reaches you — so the same heater that feels excellent on a still October evening feels like nothing at all in a 20 km/h breeze off the lake. Many towers will also cut out in gusts, because the flame-failure sensor does its job when the burner is disturbed. Electric infrared radiates energy that is absorbed by whatever it strikes, so it keeps warming you in wind that would defeat a propane unit. If your patio is exposed, either buy infrared, or plan on blocking the wind with a screen, a fence panel or a windbreak before you spend anything on BTU.',
  },
  {
    question: 'How do I store a patio heater and a propane tank over a Canadian winter?',
    answer: 'Disconnect the regulator, cap the tank, and store the cylinder outdoors, upright, in a shaded and ventilated spot. Never in a garage, a basement, a shed you also heat, or anywhere indoors — that rule is not negotiable and it applies year-round, not just in winter. The heater itself should be cleaned, dried and covered, or brought into a shed if it fits. Water pooling in the reflector and freezing at the base is what rusts these units out in two or three Ontario winters, and a proper weighted cover is the cheapest life-extension you can buy. Also check the date stamp on your cylinder: propane tanks in Canada need requalification about every ten years, and exchange programs handle that for you automatically.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Propane tower vs electric infrared patio heaters for Canadian yards: BTU and coverage, wind behaviour, running cost per evening, and CSA clearances.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestPatioHeaterCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Patio heaters compared for Canada — 46,000 to 50,000 BTU propane towers, wall and ceiling-mount electric infrared, and tabletop units — on coverage radius, wind behaviour, Ontario running cost, and the clearance rules that decide where each one can legally go.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Patio Heaters Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Patio Heaters Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Propane towers versus electric infrared, judged on the things that actually decide it in Ontario: coverage radius, how each behaves in wind, what an evening really costs, and the clearance rules that rule half of them out of a covered porch.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="48,000 BTU Propane Tower Patio Heater" search="propane patio heater 48000 btu tower" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For most Canadian backyards the best patio heater is a <strong>46,000&ndash;50,000 BTU propane tower</strong>: it needs no wiring, moves wherever the chairs are, and puts usable warmth into a circle roughly 9 to 12 feet across &mdash; enough to keep a group outside through an Ontario October. If your space is a <strong>covered porch, pergola or condo balcony</strong>, buy a <strong>wall- or ceiling-mounted electric infrared heater</strong> instead: it is far cheaper to run, it is the only option that is legal in most of those spaces, and it keeps working in wind that defeats propane.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Full-size propane towers land in the $150&ndash;$400 range; electric infrared roughly $120&ndash;$500 depending on mount and output.</li>
              <li>A 20 lb tank gives about 8&ndash;10 hours at full output &mdash; call it $2.50&ndash;$4.00 an hour in Ontario.</li>
              <li>A 1,500 W electric infrared unit costs roughly 12&ndash;25 cents an hour at Ontario time-of-use rates.</li>
              <li>Wind, not BTU, is the spec that decides satisfaction. Propane heats air; infrared heats people.</li>
              <li>Most Ontario condo corporations ban propane on balconies. Check before you buy the tower.</li>
              <li>Never put a propane tower under an umbrella, a fabric gazebo top or a low porch roof.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150 five-star Google reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Patio Heaters for Canadian Yards"
            awards={[
              {
                badge: 'Best Overall',
                name: '46,000–50,000 BTU Propane Tower Heater',
                why: 'The default for an open deck or patio. No wiring, no permanent install, and enough output to hold a four- to six-person seating group through a cool Ontario evening. Look for a CSA-certified unit with a tip-over cut-off, a flame-failure sensor, and a base that takes ballast.',
                search: 'propane patio heater 48000 btu tower',
                score: 9.0,
                featured: true,
                pros: ['Warms a 9–12 ft circle, not just one chair', 'Goes anywhere — no outlet needed', 'Cheapest way to buy a lot of heat'],
                cons: ['Poor in wind; can cut out in gusts', 'Tank swaps, and nowhere legal to store it indoors'],
              },
              {
                badge: 'Best for Covered Spaces',
                name: 'Wall-Mount Electric Infrared Heater',
                why: 'The right answer for a porch, pergola, three-season room or carport — anywhere a combustion appliance does not belong. Mounts on the wall out of the way, radiates straight down at the seating, costs pennies an hour, and is not bothered by a breeze.',
                search: 'electric infrared patio heater wall mount',
                score: 8.9,
                pros: ['No combustion, no exhaust, no tanks', 'Runs for cents per hour', 'Unbothered by wind'],
                cons: ['Needs a suitable outdoor circuit', 'Heats what it points at, and nothing else'],
              },
              {
                badge: 'Best for Pergolas',
                name: 'Ceiling-Mount Infrared Patio Heater',
                why: 'Same radiant principle, hung from a pergola beam or porch ceiling roughly seven to nine feet up and angled at the table. It disappears visually, frees the floor completely, and is the tidiest permanent solution for a defined outdoor room.',
                search: 'ceiling mount infrared patio heater 1500w',
                score: 8.5,
                pros: ['Takes up no floor space at all', 'Even coverage over a dining table', 'Weather-rated for outdoor mounting'],
                cons: ['Semi-permanent — you are committing to the spot', 'Wiring may want an electrician'],
              },
              {
                badge: 'Best for Small Tables',
                name: 'Tabletop Propane Patio Heater',
                why: 'Around 10,000–11,000 BTU on a 1 lb cylinder or an adapter hose. It will not warm a yard and does not pretend to — it warms two to four people sitting at that table, and it stores in a cupboard. For a bistro set or a small balcony rail table, it is genuinely the right buy.',
                search: 'tabletop propane patio heater',
                score: 7.9,
                pros: ['Cheap and easy to store', 'Perfect scale for two to four people', 'No install of any kind'],
                cons: ['Very short effective radius', '1 lb cylinders get expensive fast'],
              },
              {
                badge: 'Best Looking',
                name: 'Pyramid Glass-Tube Propane Heater',
                why: 'The dancing flame column that reads as a feature rather than an appliance. Output is comparable to a mushroom tower but a larger share of it goes upward, so the practical warm zone is tighter. Buy it because you want the look, and know that trade-off going in.',
                search: 'pyramid glass tube patio heater propane',
                score: 7.5,
                pros: ['Genuinely attractive lit', 'Same tank and regulator as a tower'],
                cons: ['Narrower usable warm zone for the BTU', 'Glass tube is fragile and awkward to store'],
              },
              {
                badge: 'Best Accessory Buy',
                name: 'Weighted Cover + Wheel Base Kit',
                why: 'The two items that decide whether your heater sees a fourth Canadian winter. A heavy cover keeps water out of the reflector and off the base — which is where these units rust — and a wheel base means it actually gets moved out of the weather instead of standing there all February.',
                search: 'patio heater cover waterproof heavy duty',
                score: 8.2,
                pros: ['Stops the rust that kills tower heaters', 'Cheap relative to replacing the heater'],
                cons: ['Thin covers tear in the first windstorm — buy the heavy one'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Open deck or lawn, no outdoor circuit, guests to keep warm?</strong> The <em>Best Overall</em> 46,000&ndash;50,000 BTU propane tower, plus a second tank. <strong>Covered porch, carport or three-season room?</strong> The <em>Best for Covered Spaces</em> wall-mount infrared &mdash; a propane tower is not legal or safe under a roof. <strong>Pergola over a dining table?</strong> The <em>Best for Pergolas</em> ceiling mount hides completely and covers the table evenly. <strong>Bistro table for two, or a balcony where propane is banned?</strong> The <em>Best for Small Tables</em> tabletop unit, or an electric infrared on a stand. <strong>Windy, exposed patio?</strong> Do not buy more BTU &mdash; buy infrared, or block the wind first. <strong>Already own a heater?</strong> The <em>Best Accessory Buy</em> cover and wheel base is the cheapest thing on this page and the reason some of these units last a decade. And one thing a heater cannot do: mosquitoes are still biting on those warm September and October evenings, which is what <Link href="/mosquito-control">barrier spray</Link> is for.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Patio Heater Comparison — Canada 2026</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Output</th>
                  <th className="px-4 py-3 text-left">Warm zone</th>
                  <th className="px-4 py-3 text-left">Running cost</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Buy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Propane tower (mushroom top)', out: '46,000–50,000 BTU', zone: '~9–12 ft circle', cost: '~$2.50–$4.00/hr', best: 'Open decks, groups, no wiring', search: 'propane patio heater 48000 btu tower' },
                  { type: 'Pyramid glass-tube propane', out: '~40,000–48,000 BTU', zone: 'Tighter than a tower', cost: '~$2.50–$4.00/hr', best: 'Looks first, coverage second', search: 'pyramid glass tube patio heater propane' },
                  { type: 'Wall-mount electric infrared', out: '1,500 W (~5,100 BTU)', zone: 'Directed cone, ~6–8 ft', cost: '~12–25¢/hr', best: 'Covered porches, balconies', search: 'electric infrared patio heater wall mount' },
                  { type: 'Ceiling-mount electric infrared', out: '1,500–2,400 W', zone: 'Even over a table below', cost: '~12–40¢/hr', best: 'Pergolas, outdoor dining rooms', search: 'ceiling mount infrared patio heater 1500w' },
                  { type: 'Tabletop propane', out: '~10,000–11,000 BTU', zone: 'That table only', cost: 'Varies with 1 lb cylinders', best: 'Bistro sets, two to four people', search: 'tabletop propane patio heater' },
                  { type: '20 lb propane tank (spare)', out: '~8–10 hrs at full output', zone: '—', cost: 'Exchange ~$25–$35 in Ontario', best: 'Buy the second one in September', search: '20 lb propane tank' },
                  { type: 'Hose & regulator kit', out: '—', zone: '—', cost: 'One-time', best: 'Running a tabletop off a 20 lb tank', search: 'propane hose regulator kit patio heater' },
                  { type: 'Cover, wheel base, ballast', out: '—', zone: '—', cost: 'One-time', best: 'Making any of it last past year three', search: 'patio heater wheel base kit' },
                ].map(({ type, out, zone, cost, best, search }) => (
                  <tr key={type} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{type}</td>
                    <td className="px-4 py-3 text-gray-700">{out}</td>
                    <td className="px-4 py-3 text-gray-700">{zone}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{cost}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{best}</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search={search} block>Check price on Amazon.ca &rarr;</BuyLink></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Running costs are Ontario estimates: propane at typical tank-exchange pricing, electricity at regulated time-of-use rates. Both move &mdash; check your current rate and your local exchange price before treating these as budgets.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Jump to current Canadian availability &mdash; the open-yard pick and the covered-porch pick:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="propane patio heater 48000 btu tower">Check propane towers on Amazon.ca &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="electric infrared patio heater wall mount">Check electric infrared heaters &rarr;</BuyLink>
          </div>

          <h2>The Spec That Actually Decides This: Wind, Not BTU</h2>
          <p>Every listing in this category shouts a BTU number, and BTU is the wrong thing to shop on first. Heat gets from an appliance to your body one of two ways, and they behave completely differently outdoors in Canada.</p>
          <p><strong>Propane towers heat air.</strong> A mushroom-top heater burns fuel, warms the air around the burner, and the reflector pushes that warm air down and outward. On a still evening it is excellent &mdash; the entire seating circle feels it. Introduce a breeze and the warm air simply leaves. The heater is still producing 48,000 BTU; you are just no longer standing where they end up. Above roughly 15 to 20 km/h many towers also start cutting out, because the flame-failure sensor is doing exactly what it was designed to do when the burner is disturbed.</p>
          <p><strong>Electric infrared heats objects.</strong> A radiant element emits energy that passes through air almost untouched and turns into heat when it strikes something solid &mdash; you, your chair, the table. Wind carries away the small amount of air warming that happens incidentally, but the radiant path is unaffected. This is why a 1,500 W infrared heater, which produces roughly a tenth of a propane tower&rsquo;s output, can feel better on an exposed patio than the tower does.</p>
          <p>So before you compare BTU figures, be honest about your site. A sheltered courtyard between two houses in Etobicoke and an exposed deck facing open fields in Caledon are different purchases. If the wind is the problem, the fix is either infrared or a windbreak &mdash; a fence panel, a screen, a row of planters &mdash; and no amount of extra BTU substitutes for it.</p>

          <h2>Coverage: What a Warm Circle Actually Measures</h2>
          <p>Marketing coverage figures are generous because they are measured on a still day at a temperature nobody needs a heater for. Realistic expectations for an Ontario evening in the single digits:</p>
          <ul>
            <li><strong>46,000&ndash;50,000 BTU propane tower:</strong> comfortable in a circle roughly 9 to 12 feet across, with the drop-off past the edge being abrupt rather than gradual. That is a conversation group of four to six chairs pulled reasonably close.</li>
            <li><strong>Pyramid glass-tube propane:</strong> similar fuel burn, but a larger share of the output rises up the tube and away, so the practical warm zone is noticeably tighter than a mushroom tower of the same rating.</li>
            <li><strong>1,500 W wall or ceiling infrared:</strong> a directed cone rather than a circle. Effective for roughly six to eight feet in front of the element when it is mounted seven to nine feet up and angled down. Two units aimed from different directions beat one big one, because the shadow side of a person stays cold.</li>
            <li><strong>Tabletop propane, 10,000&ndash;11,000 BTU:</strong> the people at that table. Do not buy one hoping to warm a deck.</li>
          </ul>
          <p>The recurring sizing error is trying to heat a whole yard. You cannot, and nobody has. Heat the seating area, pull the chairs in, and accept that four feet past the last chair it is October again.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="outdoor infrared heater remote control">Check remote-control infrared heaters &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="tabletop propane patio heater">Check tabletop heaters &rarr;</BuyLink>
          </div>

          <h2>Running Cost per Evening in Ontario</h2>
          <p>This is where the two technologies separate hardest, and where a lot of buyers are surprised.</p>
          <p>A full-size propane tower at 46,000 to 50,000 BTU per hour empties a 20 lb tank in roughly 8 to 10 hours of running wide open. Ontario tank exchange typically sits in the $25 to $35 range, with a weight-based refill at a propane dealer usually cheaper. Call it somewhere around $2.50 to $4.00 an hour at full blast &mdash; and rather less in practice, because most people run the heater high for twenty minutes and then turn it down.</p>
          <p>A 1,500 W electric infrared heater consumes 1.5 kWh per hour. At Ontario&rsquo;s regulated time-of-use pricing, which sits between single digits and the mid-teens of cents per kilowatt-hour depending on the period, that is roughly 12 to 25 cents an hour. An entire autumn of evenings on infrared costs less than a few tank exchanges.</p>
          <p>But do not read that as a knockout. The electric unit is producing about a tenth of the heat energy. The reason it competes at all is that radiant delivery puts a much larger share of what it makes onto people instead of into the sky. The fair summary: <strong>if infrared can reach everyone in your seating area, it is far cheaper to run and the better buy. If your space is too open or too spread out for a directed heater to cover, propane is the only practical way to buy that much warmth, and the fuel is what it costs.</strong></p>

          <h2>The Mistake Most Canadian Buyers Make</h2>
          <p>Buying a propane tower for a space it cannot legally or safely occupy. It happens constantly, in two versions.</p>
          <p><strong>The condo balcony.</strong> Most Ontario condominium corporations prohibit propane appliances and cylinder storage on balconies, and fire services support that position. The tower arrives, the property manager sends the notice, and it goes back. If you live in a condo, the balcony answer is electric infrared, and even then confirm your building&rsquo;s rules on mounting anything to an exterior wall.</p>
          <p><strong>The covered porch or gazebo.</strong> A propane heater is a combustion appliance and its certification plate specifies minimum clearances &mdash; commonly around three feet at the sides and more above the reflector. Those numbers exist because of fire risk and because combustion products need open air. Under a patio umbrella, under the fabric top of a <Link href="/blog/best-gazebo-with-mosquito-net-canada">screened gazebo</Link>, or under a low solid porch roof, a tower heater does not belong. Covered spaces are the natural home of electric infrared: no exhaust, no clearance-to-roof problem, and mounts designed for exactly that beam or ceiling.</p>
          <p>Two smaller mistakes worth naming. First, buying an uncertified grey-market gas heater imported from the United States: gas appliances sold in Canada must be certified to the applicable CSA standards, Ontario&rsquo;s TSSA regulates fuel appliances, and an uncertified unit is a genuine problem in an insurance claim. Look for the certification mark on the rating plate before you buy. Second, leaving it unballasted &mdash; a tall tower with an empty base is a tipping hazard, and the tip-over switch is a last line of defence, not a plan. Fill the base with sand or use the manufacturer&rsquo;s weight, and roll it inside before a windstorm.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="patio heater base weight sand ballast">Check base ballast &amp; weights &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="propane hose regulator kit patio heater">Check hose &amp; regulator kits &rarr;</BuyLink>
          </div>

          <h2>When the Cheaper Option Is the Right Call</h2>
          <p>A page that only ever says buy the expensive one is not worth reading. Three cases where less money is the better answer:</p>
          <ul>
            <li><strong>You sit in the same two chairs.</strong> If your outdoor evenings are two people on a covered porch, a single wall-mount 1,500 W infrared unit costs less than a tower, runs for pennies, needs no tanks, and never has to be dragged into the shed. It is not a compromise &mdash; it is the correct product.</li>
            <li><strong>You have a bistro table, not a patio.</strong> A tabletop propane heater at 10,000&ndash;11,000 BTU is the honest scale for two to four people at one small table, and it stores in a cupboard rather than owning a corner of the garage all winter.</li>
            <li><strong>You already own a heater that is rusting.</strong> Before replacing it, buy the heavy cover and the wheel base. Water sitting in the reflector and pooling at the base is what kills these units in Ontario, and a proper cover is a fraction of a new heater. Check the burner screen and the pilot assembly for spider webs while you are at it &mdash; a blocked venturi is the most common reason a stored-away tower will not light in September.</li>
          </ul>

          <h2>Why We Care: Patio Season and Bug Season Overlap</h2>
          <p>We run a mosquito and tick company, and the autumn-heater purchase intersects with our field in a way most buyers do not anticipate. A patio heater buys you evenings from roughly late September into November, and again in March and April. In the GTA, mosquitoes remain active until a sustained hard frost, so those first heated evenings in late September and early October are frequently still bite evenings &mdash; and because everyone assumes the season is over, nobody is protected for them.</p>
          <p>The same is true, more seriously, of ticks. Blacklegged ticks are active any day the temperature is above about 4&deg;C, which in southern Ontario includes a good deal of the shoulder season people think of as safe. Our guides to <Link href="/blog/when-are-mosquitoes-most-active">when mosquitoes are most active</Link>, <Link href="/blog/where-do-mosquitoes-go-in-winter-ontario">where mosquitoes go in an Ontario winter</Link>, and <Link href="/blog/tick-season-ontario-when-are-ticks-active">how long tick season actually runs</Link> all land on the same point: the end of summer is not the end of the exposure.</p>
          <p>If you are extending the season with hardware, extend the protection too. A screened enclosure is the physical version of the same idea &mdash; our <Link href="/blog/best-screen-tent-canada">screen tent guide</Link> and <Link href="/blog/mosquito-screens-patio-canada">patio screening comparison</Link> cover those &mdash; and if you were planning to rely on <Link href="/blog/citronella-candles-canada-do-they-work">citronella candles</Link> or <Link href="/blog/do-tiki-torches-repel-mosquitoes">tiki torches</Link> alongside the heater, read those two first. Neither does much, and both add open flame to a patio that now also has a propane appliance on it.</p>

          <AdjacentPestCTA variant="equipment" />

          <h2>Where to Buy a Patio Heater in Canada</h2>
          <p>Canadian Tire, Home Depot Canada and Rona all carry propane towers and a smaller selection of electric infrared, with stock peaking twice a year &mdash; a spring push in April and May, then the real one from late August through October. Costco Canada rotates larger-format heaters through warehouses in the autumn, good value when the timing lines up. Home Hardware is often the best source outside the GTA for hoses, regulators and replacement parts, which matters because that is what fails first.</p>
          <p>Tank exchange lives at gas stations, Canadian Tire and most hardware stores; refills by weight, at a propane dealer, are usually cheaper per fill and are what we would do with a second tank. Amazon.ca is the year-round channel for the whole range plus the accessory chain &mdash; covers, wheel kits, regulators, tank gauges &mdash; and it is the one place still holding stock in November, when the big-box seasonal aisles have already flipped to Christmas.</p>
          <div className="not-prose my-4 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="20 lb propane tank">Check 20 lb propane tanks &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="propane tank gauge level indicator">Check tank level gauges &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="patio heater wheel base kit">Check wheel base kits &rarr;</BuyLink>
          </div>

          <h2>The Bottom Line</h2>
          <p>Buy the 46,000&ndash;50,000 BTU propane tower if your space is open, unwired, and you want to keep a group of people outside in October &mdash; add a second tank and a heavy cover and it will serve for years. Buy wall- or ceiling-mounted electric infrared if your space is covered, if you sit in the same place every time, or if you live somewhere propane is not permitted; it is cheaper to run by an order of magnitude and it is the only one of the two that ignores wind. Size to the seating area rather than the yard, read the clearance figures on the rating plate before you site anything, store the cylinder outdoors and upright, and remember that the evenings your new heater unlocks are evenings the mosquitoes and ticks have not finished with yet.</p>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4 my-6">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100">
                <summary className="cursor-pointer px-5 py-3 font-semibold text-brand-900 list-none">{question}</summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-screen-tent-canada">Best Screen Tents &amp; Screen Houses in Canada</Link></li>
            <li><Link href="/blog/best-gazebo-with-mosquito-net-canada">Best Gazebos with Mosquito Netting in Canada</Link></li>
            <li><Link href="/blog/mosquito-screens-patio-canada">Mosquito Screens for Your Patio — Every Option Compared</Link></li>
            <li><Link href="/blog/tick-season-ontario-when-are-ticks-active">Tick Season in Ontario — When Are Ticks Active?</Link></li>
            <li><Link href="/blog/where-do-mosquitoes-go-in-winter-ontario">Where Do Mosquitoes Go in Winter in Ontario?</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="You Bought the Evenings. Keep the Bugs Off Them." subtext="Licensed mosquito and tick barrier spray from $99 across 19+ GTA cities. 150 five-star reviews, May through September." variant="dark" />
    </>
  )
}
