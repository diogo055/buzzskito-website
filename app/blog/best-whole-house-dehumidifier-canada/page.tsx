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

const SLUG = 'best-whole-house-dehumidifier-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Best Whole House Dehumidifier Canada 2026 — Ducted Units, Sizing & When a Portable Is Still the Right Answer'
const META_TITLE = 'Best Whole House Dehumidifier Canada'

const FAQS = [
  {
    question: 'What is the best whole house dehumidifier in Canada?',
    answer: 'For most Canadian homes the right ducted unit is an Aprilaire E-series machine in the 70 to 95 pint-per-day class, installed on the HVAC return so it serves every room the ductwork already reaches. It runs on its own control rather than waiting for the air conditioner to happen to be cooling, which is the entire point: an AC dehumidifies only as a side effect of cooling, so it stops working the moment the thermostat is satisfied. Expect the appliance itself to sit in roughly the $2,000 to $3,000 CAD range before installation, and expect installation to be an HVAC contractor visit rather than a weekend project. The honest qualifier is that a smaller number of Canadian houses need one than the marketing implies. If your damp is confined to the basement, a portable down there solves it for a fraction of the money.',
  },
  {
    question: 'Do I actually need a whole-house dehumidifier in Canada?',
    answer: 'Probably not, and it is worth being blunt about that before you spend thousands. Canada has a short humid season and a very dry winter, and in most homes the moisture problem is local rather than house-wide: a damp basement, a bathroom with a weak exhaust fan, a laundry room. Those are portable-dehumidifier and exhaust-fan problems. A ducted unit earns its place in five specific situations. First, a tightly built or high-performance house where the air conditioning barely runs and therefore never dehumidifies. Second, a house with an oversized or short-cycling AC that leaves the place cold and clammy. Third, a large home where you would otherwise be running portables on three floors. Fourth, a house with a large internal moisture load such as an indoor pool. Fifth, shoulder-season damp in May and September when the AC is off entirely but the air outside is still wet. If none of those describe you, buy the portable.',
  },
  {
    question: 'What size whole house dehumidifier do I need?',
    answer: 'Size by conditioned floor area and by how much moisture the house actually generates, and check the test condition attached to any capacity figure before comparing two units. As a working guide, a 70 pint-per-day class unit suits most homes in the 2,000 to 3,000 sq ft range with normal occupancy; step up to 90 to 95 pints per day for a larger home, a house with a high internal moisture load, or a finished basement plus two floors above it. Being slightly oversized is not a fault here: the unit reaches its humidity setpoint sooner and then rests, which uses less energy than a small unit grinding continuously and never getting there. The genuinely important part of sizing is not the pint number at all but the ducting configuration, because a correctly sized unit plumbed into the wrong place will dry one zone and ignore the rest.',
  },
  {
    question: 'How is a whole-house dehumidifier installed?',
    answer: 'There are three standard configurations and the right one depends on your ductwork. The most common is a return-side installation: the dehumidifier draws from the HVAC return and discharges into the supply plenum, so dried air distributes through the existing duct system to every room. The second is a dedicated-duct installation, where the unit pulls specifically from the problem area, often the basement, and discharges into the supply plenum, which targets the wet zone while still benefiting the house. The third is free-standing in a basement or mechanical room with ducting only on the discharge side. In all three, the questions to settle with your contractor are whether the unit can run independently of the furnace blower, how its control ties into the thermostat, and where the condensate goes. This is licensed-trade work: ductwork, a dedicated electrical circuit, and in many Ontario municipalities a permit.',
  },
  {
    question: 'Whole-house dehumidifier or a portable — which should I buy?',
    answer: 'Answer one question first: is the damp in one place or everywhere? Walk the house with an inexpensive hygrometer over a few humid days and write down the relative humidity on each floor. If the basement reads 65% and the upstairs bedrooms read 48%, you have a basement problem, and a portable with a continuous drain hose solves it for a small fraction of a ducted install. If every floor reads above 55% while the air conditioning is running, that is a house-wide moisture load and a ducted unit is the appropriate answer. The mistake people make is buying the ducted unit on the strength of one clammy July week without ever measuring, and the mistake in the other direction is stacking three portables around a large home when one properly ducted machine would have been simpler, quieter, and eventually cheaper to run.',
  },
  {
    question: 'Does an HRV or ERV dehumidify the house in summer?',
    answer: 'No, and this is one of the most commonly misunderstood points in Canadian houses. A heat recovery ventilator moves stale air out and fresh air in while recovering heat, which is exactly what a tightly built home needs for air quality. What it does not do is remove moisture. On a humid July day, running an HRV brings warm, wet outdoor air into your house, so it can raise indoor humidity rather than lowering it. An ERV transfers some moisture as well as heat, which softens the effect, but it is still a ventilation appliance rather than a dehumidifier. The two are complements, not substitutes: the HRV or ERV handles fresh air, the dehumidifier handles moisture. Some ducted dehumidifiers include a ventilation mode that brings in outdoor air and dries it before it enters the house, which is the configuration worth discussing with your contractor if you have a tight new build.',
  },
  {
    question: 'Where does a whole-house dehumidifier drain?',
    answer: 'The same three options as any other dehumidifier, with the same Canadian caveat. Gravity is best when you have it: run the condensate line continuously downhill to a floor drain, a sump pit, or a laundry standpipe, with no sags that can hold water and grow biofilm. If the only outlet is above the unit, use a condensate pump and check its rated lift against the real vertical rise plus the horizontal run before you buy. Do not terminate a condensate line outdoors anywhere in Ontario. It will freeze solid over winter, back water up, and either fault the unit out or spill into the mechanical room. Many ducted installations share the existing air-conditioning condensate route, which is usually already solved. Confirm that with your installer rather than assuming it.',
  },
  {
    question: 'Do I run a whole-house dehumidifier in winter?',
    answer: 'Almost never in Canada, and this is one of the reasons the payback case here is weaker than it is in the American southeast. Cold outdoor air holds very little water, so once the heating season starts, indoor humidity usually falls on its own — often far enough that many Canadian homes run a humidifier rather than a dehumidifier from December through March. The ducted unit is a May-through-September appliance for most of the country, with the shoulder months at each end doing a fair share of the work because that is when the air conditioning is off but the outdoor air is still damp. If you are seeing condensation on the inside of your windows in January, that is the opposite problem and a dehumidifier is not the fix: look at ventilation rates and at whatever humidifier setting is running on the furnace.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Ducted whole-house dehumidifiers in Canada: how to size one, the three install configurations, drainage, and when a portable is still the right answer.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-whole-house-dehumidifier-canada')

export default function BestWholeHouseDehumidifierCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buying guide to ducted whole-house dehumidifiers: sizing, the three install configurations, drainage, how they differ from an HRV, and the honest test for whether you need one at all.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Whole House Dehumidifier Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Whole House Dehumidifier Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">One ducted appliance instead of a portable in every room &mdash; but only if the damp is genuinely house-wide. Here is how to size a whole-home dehumidifier, the three ways it gets installed, and the measurement that tells you whether you need one at all.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Ducted whole-home dehumidifier" search="aprilaire whole house dehumidifier ducted" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best whole house dehumidifier for a Canadian home is a <strong>ducted Aprilaire E-series unit in the 70&ndash;95 pint-per-day class</strong>, installed on the HVAC return so dried air distributes through the ductwork you already have, running on its own control rather than waiting for the air conditioner. Budget roughly the <strong>$2,000&ndash;$3,000 CAD</strong> range for the appliance plus an HVAC contractor for the install. Before you commit: <strong>measure the humidity floor by floor</strong>. If only the basement reads high, you have a basement problem, and a portable with a drain hose fixes it for a fraction of the money. A ducted unit is the right answer only when the whole house is damp.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Measure first.</strong> One hygrometer, a few humid days, one reading per floor &mdash; that is the whole diagnostic.</li>
              <li><strong>An AC is not a dehumidifier.</strong> It only dries air while it is cooling, so an oversized or short-cycling AC leaves a house cold and clammy.</li>
              <li><strong>Size 70 PPD</strong> for most 2,000&ndash;3,000 sq ft homes; <strong>90&ndash;95 PPD</strong> for larger, wetter, or three-level houses.</li>
              <li><strong>Three install configurations</strong> &mdash; return-side, dedicated duct from the problem zone, or free-standing with ducted discharge.</li>
              <li><strong>An HRV does not dehumidify.</strong> In July it brings humid outdoor air <em>in</em>. Ventilation and dehumidification are different jobs.</li>
              <li><strong>Never drain the condensate outdoors in Ontario</strong> &mdash; it freezes. Gravity to a floor drain or sump, or a condensate pump.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="the pests drawn to damp homes" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Whole-Home Dehumidifiers &amp; the Alternatives (Canada)"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Aprilaire E-Series Ducted Whole-Home Dehumidifier',
                why: 'The default ducted unit for a Canadian house: enough capacity for a typical two-storey home with a finished basement, a control that operates independently of the furnace call for cooling, and a form factor every HVAC contractor here recognises. It ties into the return, discharges into the supply plenum, and dries every room the ductwork already serves.',
                search: 'aprilaire whole house dehumidifier ducted',
                score: 9.1,
                featured: true,
                pros: ['Runs on its own control, not the AC cycle', 'Serves every room on the duct system', 'Familiar to Canadian HVAC contractors'],
                cons: ['Contractor installation, not a DIY job', 'Highest upfront cost of any dehumidifier route'],
              },
              {
                badge: 'Best for Large Homes',
                name: '90–95 PPD Whole-Home Dehumidifier',
                why: 'For a larger footprint, a three-level house, or a home with a heavy internal moisture load, the step up in capacity means the unit hits its setpoint and idles instead of running flat out all July. Being slightly oversized costs almost nothing in operation and is far better than being one size short.',
                search: 'whole home ducted dehumidifier 95 pint',
                score: 8.7,
                pros: ['Headroom for three floors or a wet basement', 'Shorter duty cycle at the same setpoint', 'Handles pool rooms and high occupancy'],
                cons: ['Larger cabinet needs mechanical-room space', 'Overkill in an average bungalow'],
              },
              {
                badge: 'Best Value Alternative',
                name: 'Energy Star Portable Dehumidifier with Continuous Drain',
                why: 'The honest answer for the majority of Canadian homes, where the damp is genuinely confined to the basement. A right-sized portable with a settable humidistat and a gravity hose to a floor drain solves a basement moisture problem completely, and it costs roughly a tenth of a ducted installation.',
                search: 'energy star 50 pint dehumidifier continuous drain',
                score: 8.4,
                pros: ['A fraction of a ducted install', 'No contractor, no ductwork, no permit', 'Moves with you if you sell'],
                cons: ['Dries one zone only', 'Audible in a finished basement'],
              },
              {
                badge: 'Buy This First',
                name: 'Wireless Hygrometer with Remote Sensors',
                why: 'The measurement that decides the whole purchase. Put a sensor on each floor for a week of humid weather and read the numbers before spending anything. If only the basement is high, you have just saved yourself thousands; if the whole house is high, you now have the evidence to size a ducted unit properly.',
                search: 'wireless hygrometer indoor humidity remote sensor',
                score: 9.0,
                pros: ['Turns a guess into a decision', 'Costs almost nothing next to the appliance', 'Keeps verifying after the install'],
                cons: ['Cheap sensors drift over time', 'Needs a week of humid weather to be meaningful'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Not measured yet?</strong> Start with the <em>Buy This First</em> hygrometer &mdash; one week of readings decides whether you need a $300 appliance or a $2,500 one. <strong>Only the basement is damp?</strong> The <em>Best Value Alternative</em> portable with a drain hose is the correct answer, not a compromise. <strong>Every floor reading above 55% with the AC running?</strong> That is a house-wide load, and the <em>Best Overall</em> Aprilaire-class ducted unit is what it calls for. <strong>Three levels, a big footprint, or a pool room?</strong> Go to the <em>Best for Large Homes</em> capacity class and let it idle rather than grind.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Whole-Home Options Compared &middot; Updated August 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Ducted vs Portable vs HRV vs Fixing the AC</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Four things Canadian homeowners reach for when the house feels clammy. Only two of them are dehumidifiers, and only one of them is usually necessary. Here is what each actually does.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Route</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Removes moisture?</th>
                  <th className="px-4 py-3 text-left">Watch out for</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ducted whole-home<br /><span className="font-normal text-xs text-gray-500">Aprilaire E-series class</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best</strong> &mdash; genuinely house-wide damp</td>
                  <td className="px-4 py-3 text-gray-700">Yes, on its own control, whole house</td>
                  <td className="px-4 py-3 text-gray-700">Contractor install, dedicated circuit, possible permit</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="aprilaire whole house dehumidifier ducted" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Portable<br /><span className="font-normal text-xs text-gray-500">Energy Star, continuous drain</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best value</strong> &mdash; damp confined to the basement</td>
                  <td className="px-4 py-3 text-gray-700">Yes, but one zone only</td>
                  <td className="px-4 py-3 text-gray-700">Needs a drain route or you empty a bucket</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="energy star 50 pint dehumidifier continuous drain" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">HRV / ERV<br /><span className="font-normal text-xs text-gray-500">ventilation</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Different job</strong> &mdash; fresh air in a tight house</td>
                  <td className="px-4 py-3 text-gray-700">No &mdash; in July it can bring moisture <em>in</em></td>
                  <td className="px-4 py-3 text-gray-700">Often mistaken for a dehumidifier; it is not one</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">HVAC contractor &mdash; not an Amazon purchase</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Fix the AC cycle<br /><span className="font-normal text-xs text-gray-500">oversized / short-cycling</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Check this</strong> &mdash; cold but clammy house</td>
                  <td className="px-4 py-3 text-gray-700">Only while it is actively cooling</td>
                  <td className="px-4 py-3 text-gray-700">A dehumidifier is far cheaper than replacing an AC</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">HVAC contractor &mdash; diagnostic first</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Dehumidifiers are appliances, not pesticides &mdash; none require PMRA registration and none carry chemical claims. Humidity control is the frictionless, fully legal first line against mould and damp-loving insects in any Canadian home.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">&#9888;&#65039; Measure before you spend.</strong> A ducted dehumidifier is the most expensive answer to a damp house and the second-most-common wrong one. Put a hygrometer on each floor for a week of humid weather. If only the basement reads high, a <Link href="/blog/best-dehumidifier-for-basement-canada" className="text-emerald-700 underline font-semibold">basement portable</Link> is the correct purchase and you have just saved thousands.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Is the Best Whole House Dehumidifier in Canada?</h2>
          <p>The best whole house dehumidifier for a Canadian home is a ducted Aprilaire E-series unit in the 70 to 95 pint-per-day class, installed on the HVAC return so that dried air distributes through the ductwork the house already has, and running on its own humidity control rather than waiting for the air conditioner to be cooling. Budget roughly the $2,000 to $3,000 CAD range for the appliance and an HVAC contractor visit for the installation.</p>
          <p>That is the answer to the question as asked. The more useful answer is that most Canadian homes do not need one, and the way to find out which category you are in costs about the price of dinner: put a hygrometer on each floor for a week of humid weather and read the numbers.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="aprilaire whole house dehumidifier ducted">Ducted whole-home &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="whole home ducted dehumidifier 95 pint">Large-home capacity &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="energy star 50 pint dehumidifier continuous drain">Portable alternative &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="wireless hygrometer indoor humidity remote sensor">Hygrometer &rarr;</BuyLink>
          </div>

          <h2>The Test That Decides This: Is the Damp Local or House-Wide?</h2>
          <p>Almost everybody arriving at this question has already run a portable dehumidifier somewhere and found it insufficient, which is a reasonable reason to look at a bigger machine. But &ldquo;the portable did not fix it&rdquo; has two very different explanations, and they lead to opposite purchases. Either the portable was in the wrong place or undersized for the zone it was in, or the moisture load really is house-wide and one zone was never going to be enough.</p>
          <p>Separate them by measuring. Buy an inexpensive hygrometer, ideally one with a couple of remote sensors, and place one on each floor. Leave it for a week of genuinely humid weather in July or August, and write down the relative humidity on each level, both while the air conditioning is running and while it is off. Two patterns emerge:</p>
          <ul>
            <li><strong>Basement 62&ndash;68%, main floor 50%, upstairs 48%.</strong> This is a basement problem, and it is by far the more common Canadian result. A right-sized portable with a hose to a floor drain fixes it completely for roughly a tenth of what a ducted install costs.</li>
            <li><strong>Every floor above 55%, including while the AC runs.</strong> This is a house-wide moisture load, and no single portable is going to catch up with it. This is what a ducted unit is for.</li>
          </ul>
          <p>Doing this properly is not a delay tactic. It is the difference between a $300 purchase and a $2,500 one, and the measurement takes a week of doing nothing.</p>

          <h2>Why Your Air Conditioner Is Not a Dehumidifier</h2>
          <p>An air conditioner removes moisture, but only as a by-product of cooling. Warm indoor air passes over a cold evaporator coil, water condenses out of it, and the water drains away. That works beautifully while the AC is running. The moment the thermostat is satisfied, the compressor stops, the coil warms up, and the drying stops with it.</p>
          <p>This is where the single most useful diagnostic in this whole guide comes in. If your house feels <em>cold and clammy at the same time</em>, the air conditioner is very likely oversized for the house or short-cycling. An oversized AC drops the temperature quickly, satisfies the thermostat in a short burst, and shuts off long before it has run enough hours to wring meaningful water out of the air. You get the temperature you asked for and none of the drying you assumed came with it, which is exactly the sensation people describe as a clammy house.</p>
          <p>There are two fixes, and the cheaper one is worth knowing. You can address the air conditioning itself &mdash; a variable-speed or correctly sized system that runs longer at lower output dehumidifies far better &mdash; but replacing an air conditioner is a large expense with a long horizon. Or you can add a dehumidifier that runs on its own control, independent of whether the house needs cooling, which is precisely what a ducted whole-home unit does and precisely why it exists. In most cases the dehumidifier is substantially cheaper than the AC replacement and solves the felt problem directly.</p>

          <h2>The Three Ways It Gets Installed</h2>
          <p>Sizing gets all the attention and configuration decides whether the thing actually works. There are three standard arrangements:</p>
          <ul>
            <li><strong>Return-side (the standard).</strong> The dehumidifier draws air from the HVAC return and discharges into the supply plenum, so dried air goes wherever the ducts already go. This is the default for a house with a conventional forced-air system and it treats the whole home evenly.</li>
            <li><strong>Dedicated duct from the problem zone.</strong> The unit pulls specifically from the wettest area &mdash; almost always the basement &mdash; and discharges into the supply plenum. You get targeted treatment of the source while still drying the rest of the house, which suits a home whose moisture is concentrated but not confined.</li>
            <li><strong>Free-standing with ducted discharge.</strong> The unit sits in the mechanical room or basement and only its discharge is ducted. Simplest to install, least even in distribution, and reasonable when the basement is both the problem and the place you spend time.</li>
          </ul>
          <p>Three questions to settle with your contractor regardless of configuration. Can the unit run without the furnace blower running, or does it need the air handler to operate? A dehumidifier that forces the blower on every cycle adds that blower&rsquo;s electricity to every hour of operation. How does the control tie in &mdash; a dedicated humidistat, an integration with the thermostat, or a ventilation control? And where does the condensate go? Settle drainage before install day, not after.</p>

          <h2>Sizing, and the Number That Means Nothing on Its Own</h2>
          <p>Dehumidifier capacity is quoted in pints of water removed per day, but that figure is only meaningful alongside the test condition that produced it. Manufacturers do not all publish at the same condition, and a unit measured in hot saturated air will always post a larger number than the same unit measured under a cooler standard test. Before you compare two machines, find the condition printed beside each capacity claim. If one is missing it, treat the comparison as unreliable.</p>
          <p>With that caveat, a working guide for Canadian homes:</p>
          <ul>
            <li><strong>70 pints per day class:</strong> most homes in the 2,000 to 3,000 sq ft range with normal occupancy and a typical basement. This is the volume seller and it is the right answer for the majority.</li>
            <li><strong>90 to 95 pints per day:</strong> a larger footprint, three occupied levels, high occupancy, an indoor pool or hot tub room, or a house that also has a persistently damp basement contributing to the load.</li>
            <li><strong>Slightly oversized is fine.</strong> A larger unit reaches the setpoint and rests. A unit one size short runs continuously through July, never gets there, and you pay for the shortfall in both comfort and electricity.</li>
          </ul>
          <p>Set the control to hold somewhere around 45 to 50% relative humidity through the cooling season. That is comfortably below the roughly 60% threshold where mould becomes viable and below the level at which dust mite populations sustain themselves, and it is low enough to feel obviously better without over-drying the house.</p>

          <h2>The HRV Confusion, and the Canadian Seasonal Reality</h2>
          <p>A heat recovery ventilator is not a dehumidifier, and in a Canadian summer it can work against you. An HRV exhausts stale indoor air and brings in fresh outdoor air while recovering heat between the two streams, which is genuinely necessary in a tightly built modern house. But on a humid July day the outdoor air it is bringing in is wetter than the indoor air it is removing, so running it can raise indoor humidity. An ERV transfers some moisture as well as heat and softens that effect, but it remains a ventilation appliance. Ventilation and dehumidification are separate jobs requiring separate equipment, and some ducted dehumidifiers include a ventilation mode that dries incoming outdoor air before it enters the house &mdash; the configuration worth asking about if you have a tight new build.</p>
          <p>The seasonal picture also deserves honesty, because it is the main reason the payback case is weaker here than in the American southeast. Canada has a short humid season and a very dry winter. Once heating starts, cold outdoor air holds so little water that indoor humidity usually drops on its own &mdash; far enough that many Canadian houses run a furnace humidifier from December through March. A whole-home dehumidifier here is a May-through-September appliance, and the shoulder months at each end matter more than people expect, because that is exactly when the air conditioning is off but the outdoor air is still damp. If your problem is condensation on the inside of your windows in January, that is the opposite condition entirely: look at ventilation and at whatever humidifier setting the furnace is running.</p>

          <h2>Where to Buy, What It Costs, and When Not to Bother</h2>
          <p>Ducted whole-home dehumidifiers are not a Canadian Tire item. In practice you are buying through an HVAC contractor, an HVAC supply house, or Amazon.ca, and the installation is licensed-trade work involving ductwork, a dedicated electrical circuit, and in many Ontario municipalities a permit. Portables, hygrometers, condensate pumps and drain hose are all mainstream retail &mdash; Home Depot, Rona, Home Hardware, Canadian Tire and Amazon.ca all carry them.</p>
          <p>On price bands, expect roughly <strong>$2,000 to $3,000 CAD</strong> for a ducted appliance before installation, plus the contractor&rsquo;s time and materials. A capable portable sits in roughly the <strong>$250 to $450</strong> range, a plenum or duct-collar kit in the <strong>$150 to $400</strong> range, and a condensate pump in the <strong>$60 to $150</strong> range. Those bands move with stock and season, which is why we link to a live search rather than quote a figure.</p>
          <p>And the cases where you should not buy one at all, stated plainly. If the damp is confined to the basement, buy a portable. If the problem is a steamy bathroom or a laundry room, the fix is an exhaust fan that actually vents outdoors at an adequate rate, not a dehumidifier for the whole house. If you have a crawl space rather than a basement, that is a different appliance entirely and our <Link href="/blog/best-crawl-space-dehumidifier-canada">crawl space dehumidifier guide</Link> covers it. If there is visible mould already growing, humidity control stops it spreading but the existing growth still has to be remediated &mdash; see our <Link href="/blog/best-dehumidifier-for-mold-canada">mould-control guide</Link> for the thresholds. And if the real issue is water entering the building, no dehumidifier of any size will outrun a leak.</p>
          <p>The upside worth naming: holding a house below 50% relative humidity does more than make July bearable. Dust mites cannot sustain their populations in that range, mould loses the conditions it needs, and the damp-seeking insects that drift toward a clammy basement find it much less hospitable &mdash; the same logic behind our <Link href="/blog/best-large-capacity-dehumidifier-canada">large-capacity dehumidifier</Link> and <Link href="/blog/best-air-purifier-for-dust-mites-canada">dust mite air purifier</Link> guides.</p>

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

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-crawl-space-dehumidifier-canada">Best Crawl Space Dehumidifier Canada &mdash; Low-Clearance Units &amp; Pump Drainage</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Dehumidifier for a Canadian Basement &mdash; Sizing, Drainage &amp; Placement</Link></li>
            <li><Link href="/blog/best-large-capacity-dehumidifier-canada">Best Large-Capacity Dehumidifier Canada &mdash; For the Wettest Spaces</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-mold-canada">Best Dehumidifier for Mold Canada &mdash; The 60% Humidity Threshold</Link></li>
            <li><Link href="/blog/best-air-purifier-for-dust-mites-canada">Best Air Purifier for Dust Mites Canada &mdash; The Same Damp Enemy</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="dust mites and damp-loving pests" />
      </article>
    </>
  )
}
