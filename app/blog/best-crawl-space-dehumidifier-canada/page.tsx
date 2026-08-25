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

const SLUG = 'best-crawl-space-dehumidifier-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Best Crawl Space Dehumidifier Canada 2026 — Low-Clearance Units, Pump Drainage & the Vapour Barrier That Comes First'
const META_TITLE = 'Best Crawl Space Dehumidifier Canada'

const FAQS = [
  {
    question: 'What is the best crawl space dehumidifier in Canada?',
    answer: 'For most Canadian crawl spaces the right machine is a purpose-built, low-profile commercial unit in the AlorAir Sentinel HD55 class: it fits under floor joists where a tall portable will not, it has no bucket at all (drainage is by hose or built-in condensate pump only), it keeps working at low temperatures instead of icing up, and it restarts itself after a power cut. Those four traits are what separate a crawl space dehumidifier from the portable you would buy for a basement, and all four matter because nobody is going to crawl under the house twice a week to check on it. Expect a purpose-built unit to sit in roughly the $1,100 to $1,600 CAD range, against roughly $250 to $450 for a portable. That price gap is the whole decision, and it is only worth paying once the crawl space has a vapour barrier over the dirt — without one you are dehumidifying the soil, and the soil always wins.',
  },
  {
    question: 'What size crawl space dehumidifier do I need?',
    answer: 'Size by floor area and by how wet the space actually is, and then read the rating carefully, because crawl space units are frequently advertised at a different test condition than portables. The same machine can be quoted at one pint figure under the AHAM test condition and roughly double that under a saturation condition, so a number on a box means nothing unless you know which test produced it. As a working guide for Canadian homes: a dry-ish, fully encapsulated crawl space up to about 1,300 sq ft is usually served by a unit rated around 50 to 70 pints per day at AHAM conditions; a larger, damper, or partly vented space wants 90 pints per day or more; and a long or L-shaped crawl space is usually better served by one larger ducted unit than two small ones. Size up rather than down. An oversized unit reaches your humidity target and idles; an undersized one runs continuously, never gets there, and costs you electricity for nothing.',
  },
  {
    question: 'Do I need a vapour barrier before buying a crawl space dehumidifier?',
    answer: 'In almost every case, yes, and it is the single most common and most expensive mistake Canadian buyers make. A bare-earth crawl space evaporates moisture out of the soil continuously, and that supply does not run out. A dehumidifier placed over open dirt will run more or less permanently, pull water it can never get ahead of, and cost far more to run than it should. Laying a continuous polyethylene vapour barrier across the ground, lapping the seams, running it up the foundation walls and sealing it there, cuts the moisture load dramatically for a few hundred dollars of plastic and tape. Do that first, live with it for a few weeks, and then measure the humidity again. Plenty of crawl spaces need nothing more. If the space still sits above 60% relative humidity after the barrier is in, that is the point at which a dehumidifier is genuinely justified.',
  },
  {
    question: 'Can I just use a regular portable dehumidifier in a crawl space?',
    answer: 'Sometimes, and it is worth checking before you spend four times the money. A portable works in a crawl space if three things are true: it physically fits and can breathe under the joists with the clearance the manual requires, you can drain it continuously by gravity to a sump or floor drain so the bucket never fills, and the space stays warm enough that the unit does not spend its life frosting up. A small, encapsulated, semi-conditioned crawl space in a heated Ontario home can meet all three. What a portable does not give you is automatic restart after a power outage, a coil built for a filthy environment, a remote readout so you can see the humidity from upstairs, or the ability to lift condensate up and out without a separate pump. In a cold, dirty, hard-to-reach crawl space those omissions are exactly what turns a working machine into a dead one you discover in the spring.',
  },
  {
    question: 'What humidity level should a crawl space be kept at?',
    answer: 'Aim to hold the crawl space below 60% relative humidity, and set the control to around 55%. That is deliberately higher than the 45 to 50% target you would use in a finished basement, and the reason is practical rather than fussy: a crawl space does not need to be comfortable, it needs to be dry enough that mould cannot colonise the joists and subfloor above it, and chasing a lower number just makes the machine work harder for no additional protection. The more meaningful measurement for the structure is the moisture content of the wood itself. Keeping framing below roughly 20% moisture content is the standard guideline for avoiding decay, and holding air humidity near 55% is what gets you there. Verify the number with an inexpensive wireless hygrometer whose sensor lives in the crawl space and whose display sits upstairs, because a built-in sensor you cannot see is a sensor you will never check.',
  },
  {
    question: 'Where does the water drain in a crawl space with no floor drain?',
    answer: 'This is the question that decides which unit you buy, so answer it before you shop. If there is a sump pit or a floor drain lower than the dehumidifier, gravity is the cheapest and most reliable option: run the hose downhill with no dips, and it will drain forever with nothing to fail. If the only outlet is higher than the unit, which is the common case in a crawl space, you need a condensate pump, either built into the machine or added externally, and you need to check its rated lift against the actual vertical run plus horizontal distance. Do not solve this by running the line outdoors through a vent. In an Ontario winter that line freezes, the water backs up, and the unit either shuts off on a full-condensate fault or spills into the crawl space. Terminate inside: a sump pit, a laundry standpipe, or a floor drain.',
  },
  {
    question: 'Will a crawl space dehumidifier work in an Ontario winter?',
    answer: 'A purpose-built one will; most portables will not. Any refrigerant dehumidifier pulls moisture by condensing it on a cold coil, and when the surrounding air gets cold enough the coil frosts over and the machine stops removing water. Crawl space units are built for this with hot gas bypass defrost or an equivalent, which is why manufacturers publish a low-temperature operating range for them, and it is the specification to check before buying. That said, an Ontario winter usually reduces the need rather than increasing it. Cold outdoor air holds very little moisture, so a sealed crawl space typically dries out on its own from late autumn through winter. The seasons that actually punish a crawl space here are late spring through early autumn, when warm humid air meets cool foundation walls and condenses. If your space is sealed and you shut the unit down for January, that is a perfectly reasonable way to run it.',
  },
  {
    question: 'Should I seal my crawl space vents in Canada?',
    answer: 'Building science has moved firmly toward sealed, insulated crawl spaces over vented ones, because in a humid Canadian summer those vents are letting in exactly the moisture that then condenses on the cool surfaces inside. But this is not a decision to make from a blog post. Two things have to be checked first. If any fuel-burning appliance sits in the crawl space or draws combustion air from it, sealing the space changes its air supply, and that is a carbon monoxide question, not a comfort question. And requirements vary by municipality and by the age and construction of the house, so a building inspector or a competent contractor should sign off before vents are closed permanently. Radon is worth raising at the same visit, since a dehumidifier does nothing whatsoever for radon and the fix for that is a barrier plus sub-slab depressurization.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Crawl space dehumidifiers for Canadian homes: low-clearance sizing, pump drainage, low-temperature operation, and why the vapour barrier comes first.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-crawl-space-dehumidifier-canada')

export default function BestCrawlSpaceDehumidifierCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buying guide to crawl space dehumidifiers: why a low-profile purpose-built unit differs from a portable, how to size it, pump drainage, low-temperature operation, and why the vapour barrier comes first.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Crawl Space Dehumidifier Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Crawl Space Dehumidifier Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A crawl space dehumidifier is a different appliance from the one you would put in a basement &mdash; it has to fit under the joists, drain upward, survive the cold, and run for years somewhere you will almost never look. Here is how to size and drain one for a Canadian house, and the cheaper step that should always come first.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Low-profile crawl space dehumidifier (HD55-class)" asin="B097JH2HDH" search="alorair crawl space dehumidifier with pump" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best crawl space dehumidifier for a Canadian home is a <strong>low-profile, purpose-built commercial unit with a built-in condensate pump and a low-temperature operating rating</strong> &mdash; an AlorAir Sentinel HD55-class machine is the reference point. It fits under the joists, has no bucket to fill, lifts water up and out where there is no floor drain, keeps running when the space is cold, and restarts itself after a power cut. Set it to hold <strong>55% relative humidity</strong>. But before you spend the money: if the crawl space still has a bare dirt floor, <strong>lay a vapour barrier first</strong> &mdash; that is a few hundred dollars of plastic against a permanent, unwinnable moisture load, and plenty of crawl spaces need nothing else.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Vapour barrier first.</strong> A dehumidifier over open soil is drying the ground, and the ground never runs out.</li>
              <li><strong>Measure your clearance</strong> before anything else &mdash; a portable that will not fit under the joists is not an option at any price.</li>
              <li><strong>Plan the drain before you shop.</strong> Gravity to a sump if you have the fall; a condensate pump if you do not. Never terminate outdoors in Ontario &mdash; it freezes.</li>
              <li><strong>Check the low-temperature rating</strong> and defrost method. A coil that frosts up in a cold crawl space removes nothing.</li>
              <li><strong>Target 55% RH</strong>, not 45% &mdash; the goal is protecting the joists above, not comfort, and framing should stay under roughly 20% moisture content.</li>
              <li><strong>Auto-restart and a remote readout</strong> matter more here than anywhere else, because nobody checks a crawl space.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="the pests drawn to damp crawl spaces" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Crawl Space Dehumidifiers &amp; the Kit Around Them (Canada)"
            awards={[
              {
                badge: 'Best Overall',
                name: 'AlorAir Sentinel HD55-Class Crawl Space Dehumidifier',
                why: 'The reference machine for this job: a low-profile chassis that slides under floor joists, no bucket at all so it can never stall on a full tank, a low-temperature operating range with proper defrost, and auto-restart after a power cut. Add the optional condensate pump and remote control and it becomes a genuinely install-and-forget appliance.',
                asin: 'B097JH2HDH',
                search: 'alorair crawl space dehumidifier with pump',
                score: 9.3,
                featured: true,
                pros: ['Low-profile chassis fits under joists', 'Runs at low crawl space temperatures', 'Auto-restart after power failure'],
                cons: ['Several times the price of a portable', 'Usually an online-only purchase in Canada'],
              },
              {
                badge: 'Best for Large or Ducted Spaces',
                name: 'High-Capacity Ducted Crawl Space Dehumidifier (90 PPD Class)',
                why: 'A long, L-shaped, or subdivided crawl space needs air moved to the far corners, not just dried at one end. A larger unit with intake and discharge duct collars lets one machine serve the whole footprint through a short run of flex duct, which almost always beats scattering two undersized units.',
                search: 'ducted crawl space dehumidifier 90 pint commercial',
                score: 8.8,
                pros: ['Ducts to the far end of a long space', 'One unit instead of two', 'Enough capacity for a partly vented space'],
                cons: ['Needs duct collars and a short flex run', 'Heavier to manoeuvre into position'],
              },
              {
                badge: 'Best Budget Route',
                name: 'Low-Profile Portable Dehumidifier + External Condensate Pump',
                why: 'Honest answer for a small, already-encapsulated, semi-heated crawl space with clearance to spare: a good portable with a continuous-drain port plus a separate condensate pump does the same physical job for a fraction of the outlay. You give up auto-restart, the dirt-tolerant build, and the remote readout — know that going in.',
                search: 'condensate pump for dehumidifier continuous drain',
                score: 7.8,
                pros: ['A fraction of the purpose-built price', 'Pump is replaceable on its own', 'Fine in a warm, clean, encapsulated space'],
                cons: ['No auto-restart after an outage', 'Frosts up in a genuinely cold space'],
              },
              {
                badge: 'Buy This First',
                name: 'Crawl Space Vapour Barrier Poly & Seam Tape',
                why: 'The step that makes everything else work. A continuous poly barrier over the soil, seams lapped and taped, run up the foundation walls and sealed, removes the moisture source instead of endlessly removing the moisture. It costs a few hundred dollars and it is the reason some crawl spaces never need a dehumidifier at all.',
                search: 'crawl space vapor barrier 10 mil poly seam tape',
                score: 9.0,
                pros: ['Removes the moisture source, not the symptom', 'Cheapest fix available by a wide margin', 'Cuts the dehumidifier running cost afterward'],
                cons: ['Genuinely unpleasant work in a tight space', 'Needs care at seams and wall terminations'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Bare dirt floor down there?</strong> Stop and buy the <em>Buy This First</em> vapour barrier &mdash; nothing else is worth spending until the soil is covered. <strong>Barrier in, still above 60% RH?</strong> The <em>Best Overall</em> AlorAir-class unit is the default: it fits, it pumps, it survives the cold, and it restarts itself. <strong>Long or L-shaped crawl space?</strong> Step up to the <em>Best for Large or Ducted Spaces</em> unit and run flex duct to the far end. <strong>Small, warm, encapsulated space with clearance and a drain?</strong> The <em>Best Budget Route</em> portable plus a condensate pump is a legitimate answer, not a compromise.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Crawl Space Options Compared &middot; Updated August 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Purpose-Built vs Portable vs Ducted vs Doing Nothing But the Barrier</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Four genuinely different answers, and the cheapest one is right more often than the industry admits. Here is what each is actually for, with a live Amazon.ca availability check per route.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Route</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Drainage</th>
                  <th className="px-4 py-3 text-left">Watch out for</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Vapour barrier only<br /><span className="font-normal text-xs text-gray-500">poly + tape</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Always first</strong> &mdash; any bare-earth crawl space</td>
                  <td className="px-4 py-3 text-gray-700">None needed &mdash; nothing to drain</td>
                  <td className="px-4 py-3 text-gray-700">Seams and wall terminations must be sealed properly</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="crawl space vapor barrier 10 mil poly seam tape" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Purpose-built low-profile<br /><span className="font-normal text-xs text-gray-500">AlorAir HD55 class</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best all-round</strong> &mdash; still damp after the barrier</td>
                  <td className="px-4 py-3 text-gray-700">Built-in pump lifts up and out; no bucket</td>
                  <td className="px-4 py-3 text-gray-700">Measure joist clearance before ordering</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="alorair crawl space dehumidifier with pump" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">High-capacity ducted<br /><span className="font-normal text-xs text-gray-500">90 PPD class</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best</strong> &mdash; long, L-shaped, or partly vented</td>
                  <td className="px-4 py-3 text-gray-700">Pump, plus duct collars for air distribution</td>
                  <td className="px-4 py-3 text-gray-700">Needs a flex-duct run planned in advance</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ducted crawl space dehumidifier 90 pint commercial" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Portable + external pump<br /><span className="font-normal text-xs text-gray-500">budget route</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Fair</strong> &mdash; small, warm, encapsulated space</td>
                  <td className="px-4 py-3 text-gray-700">Gravity hose, or a separate condensate pump</td>
                  <td className="px-4 py-3 text-gray-700">No auto-restart; frosts up when it gets cold</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="condensate pump for dehumidifier continuous drain" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Dehumidifiers and vapour barriers are building materials and appliances, not pesticides &mdash; none require PMRA registration and none carry chemical claims. Moisture control is the frictionless, fully legal first line under any Canadian house.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">&#9888;&#65039; A dehumidifier is not a fix for water getting in.</strong> If the crawl space floods, seeps after rain, or has standing water, that is a grading, drainage, or sump problem and no appliance can outrun it. Fix the water first, then control the humidity. And if there is a fuel-burning appliance down there, get a professional opinion before sealing anything &mdash; that is a combustion-air question, not a comfort one.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Is the Best Crawl Space Dehumidifier in Canada?</h2>
          <p>The best crawl space dehumidifier for a Canadian home is a low-profile, purpose-built commercial unit with a built-in condensate pump and a published low-temperature operating range &mdash; the AlorAir Sentinel HD55 class is the machine most people mean when they use the term. It differs from the portable you would buy for a basement in four specific ways, and every one of them exists because a crawl space is a place nobody visits: it is short enough to sit under the floor joists, it has no bucket at all so it cannot stall when a tank fills, it pushes its condensate uphill because there is rarely a drain below it, and it comes back on by itself after the power blinks.</p>
          <p>That machine costs roughly three to five times what a good portable costs. Before you spend it, the honest first question is whether your crawl space still has a bare dirt floor &mdash; because if it does, no dehumidifier of any size is the right purchase yet.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="alorair crawl space dehumidifier with pump">Low-profile crawl space unit &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="ducted crawl space dehumidifier 90 pint commercial">High-capacity ducted &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="crawl space vapor barrier 10 mil poly seam tape">Vapour barrier poly &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="condensate pump for dehumidifier continuous drain">Condensate pump &rarr;</BuyLink>
          </div>

          <h2>The Vapour Barrier Comes First, and It Is Not Close</h2>
          <p>A crawl space with an exposed earth floor is not a room with a humidity problem. It is a room sitting on top of an unlimited moisture reservoir. Soil holds water and gives it up to the air above it continuously, and that process does not stop, slow down, or get ahead of itself. Put a dehumidifier over open dirt and it will run essentially forever, pulling water out of the ground one litre at a time, and your hydro bill will pay for the privilege.</p>
          <p>Covering the ground changes the arithmetic completely. A continuous sheet of polyethylene laid across the soil, with the seams overlapped and taped and the edges carried up the foundation wall and sealed there, cuts the evaporation load enormously. It is unpleasant work in a tight space and it is a few hundred dollars of material, but it addresses the source rather than the symptom. Do it, wait a few weeks, and measure again. A meaningful number of Canadian crawl spaces settle below 60% relative humidity on the barrier alone and never need a dehumidifier at all.</p>
          <p>If it is still damp after that, then a dehumidifier is genuinely justified &mdash; and it will now be sized for a manageable load instead of an infinite one, which means a smaller unit, a shorter duty cycle, and a lower running cost for the rest of its life. Buying the appliance first is the expensive way round.</p>

          <h2>Measure the Clearance Before You Look at Anything Else</h2>
          <p>This sounds too obvious to say, and it is still the most common reason a crawl space dehumidifier gets returned. Take a tape measure down and record the height from the top of the barrier (or the soil) to the underside of the joists, at the lowest point along the route the machine has to travel and at the spot where it will finally sit. Then check the unit&rsquo;s height <em>and</em> the clearance its manual demands around the intake and discharge, because a dehumidifier jammed against a joist is a dehumidifier choked of airflow, and choked airflow is lost capacity.</p>
          <p>Purpose-built crawl space units are deliberately squat for this reason, and many are designed to be hung from the joists on straps or brackets rather than set on the floor at all. Hanging has a second advantage worth taking: a unit suspended above the barrier is not sitting in the puddle if something upstream ever leaks. If yours goes on the ground, put it on blocks or a plinth rather than directly on the plastic.</p>

          <h2>Plan the Drain Before You Choose the Machine</h2>
          <p>In a basement you can usually walk a hose to a floor drain. In a crawl space you often cannot, and this single constraint should drive the purchase. Work out where the water is going before you decide what to buy.</p>
          <ul>
            <li><strong>There is a sump pit or drain lower than the unit:</strong> gravity is the answer. Run the hose continuously downhill with no sags that can hold water, and there is nothing mechanical to fail. This is the cheapest and most reliable outcome, and it means you do not need to pay for a pump.</li>
            <li><strong>The only outlet is above the unit:</strong> you need a condensate pump, either integrated into the machine or added as a separate box. Check its rated lift against the real vertical rise plus the horizontal run &mdash; pumps are specified in metres or feet of head and it is easy to under-buy.</li>
            <li><strong>You were planning to run the line out through a vent:</strong> do not. An exterior condensate line in Ontario freezes solid for months. The water backs up, the unit faults out on a full-condensate signal or overflows into the space, and you find out in the spring. Terminate indoors &mdash; sump pit, laundry standpipe, or floor drain.</li>
          </ul>

          <h2>Sizing: Read the Test Condition, Not the Number on the Box</h2>
          <p>Crawl space dehumidifiers are frequently marketed at a different test condition than the portables sold beside them, and this is where buyers get quietly misled. The same physical machine can be advertised with one pint-per-day figure under the AHAM test condition and a figure roughly twice as large under a saturation condition, because saturation testing runs the unit in hot, extremely humid air where any dehumidifier performs at its best. Neither number is dishonest on its own; comparing one against the other is meaningless. Whenever you see a capacity claim, find the condition printed next to it before you compare it with anything.</p>
          <p>With that caveat, here is a working guide for Canadian crawl spaces, using AHAM-condition ratings:</p>
          <ul>
            <li><strong>Around 50&ndash;70 pints per day:</strong> a fully encapsulated, reasonably dry crawl space up to roughly 1,300 sq ft. This is where the HD55-class units live and where most Canadian houses land.</li>
            <li><strong>90 pints per day and up:</strong> a larger footprint, a space that is still partly vented, a persistent musty smell coming up through the floor, or a crawl space that shares air with a damp basement.</li>
            <li><strong>One larger ducted unit rather than two small ones:</strong> for a long, narrow, or L-shaped crawl space. Two undersized machines in separate zones tend to both underperform; one properly sized unit with a short flex-duct run to the far end moves air across the whole footprint.</li>
          </ul>
          <p>And the rule that overrides the chart: size up, not down. An oversized dehumidifier reaches your setpoint and then idles, which costs very little. An undersized one runs continuously, never reaches the setpoint, and bills you for the failure.</p>

          <h2>Cold, Dirt and Power Cuts — the Three Specifications That Actually Matter Here</h2>
          <p>Every refrigerant dehumidifier works by condensing moisture on a cold coil, which means all of them lose ground as the surrounding air gets colder and the coil starts to frost. Portables typically stop being useful somewhere in the low teens Celsius. Purpose-built crawl space units carry hot gas bypass defrost or an equivalent and publish a low-temperature operating range for exactly this reason. That published range is the specification to check, because an Ontario crawl space in May or October is not a warm room.</p>
          <p>The second is the environment itself. Crawl spaces are dusty, and a clogged intake filter starves airflow and collapses capacity long before anything actually breaks. Commercial units use a serviceable filter that you can pull and wash; the discipline is to actually do it once or twice a season. The third is auto-restart. Power goes out, power comes back, and a machine without auto-restart sits dead until somebody notices &mdash; which in a crawl space might be next spring, after a whole summer of unmanaged humidity. It is a trivial-sounding feature and it is the difference between a working installation and an expensive ornament.</p>
          <p>One more piece of kit is worth more than its price suggests: an inexpensive wireless hygrometer with the sensor in the crawl space and the display upstairs on a shelf. Purpose-built units offer wired remote controls that do the same job more elegantly, but the cheap wireless sensor works with any machine and it is what turns &ldquo;I assume it is fine&rdquo; into a number you glance at. You cannot manage humidity you never see.</p>

          <h2>Where to Buy These in Canada, and What It Costs</h2>
          <p>Portable dehumidifiers, poly vapour barrier, seam tape, and condensate pumps are all mainstream Canadian retail: Home Depot, Rona, Home Hardware and Canadian Tire between them cover the lot, and Amazon.ca stocks the same categories. Purpose-built low-profile crawl space units are a narrower market &mdash; in practice that means Amazon.ca or a specialist restoration-equipment supplier rather than a shelf you can walk up to, so plan on ordering rather than collecting.</p>
          <p>On price bands, expect a purpose-built crawl space dehumidifier to sit in roughly the <strong>$1,100 to $1,600 CAD</strong> range, a capable portable in the <strong>$250 to $450</strong> range, an external condensate pump in the <strong>$60 to $150</strong> range, and enough poly and tape for a typical crawl space in the low hundreds. Those bands move with stock and season, which is the honest reason we link to a live search rather than quoting a figure. Two practical notes before you plug anything in: these units draw real current, so give the machine a proper receptacle rather than a long thin extension cord, and a crawl space receptacle should be GFCI protected. If yours is not, that is an electrician&rsquo;s half-hour, not a DIY improvisation.</p>

          <h2>The Honest Limits — What a Crawl Space Dehumidifier Will Not Do</h2>
          <p>It will not stop water getting in. If your crawl space seeps after heavy rain, holds standing water, or floods, that is a grading, drainage, or sump problem, and running a dehumidifier against active water intrusion is treating the symptom while the cause keeps feeding it. Fix the water, then manage the humidity.</p>
          <p>It will not remove mould that is already growing on the joists. Humidity control stops new growth and keeps it from returning, but established colonies have to be physically remediated &mdash; and anything beyond a small patch, particularly overhead in a confined space, is a job for a remediation contractor with the right protective equipment. Our companion guide to the <Link href="/blog/best-dehumidifier-for-mold-canada">best dehumidifier for mould</Link> covers the humidity thresholds in more depth.</p>
          <p>It will do nothing at all for radon, which is a genuinely separate problem with a genuinely separate fix. And it will not, on its own, clear out the silverfish, centipedes and other damp-seeking insects that a wet crawl space attracts. What it does is remove the conditions those species depend on, which is the durable half of the job &mdash; our guides on <Link href="/blog/how-to-get-rid-of-silverfish-canada">getting rid of silverfish</Link> and <Link href="/blog/how-to-get-rid-of-centipedes-canada">getting rid of centipedes</Link> cover the cleanup half. If the damp problem is really in a full basement rather than a crawl space, start instead with our <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier guide</Link>, or the <Link href="/blog/best-large-capacity-dehumidifier-canada">large-capacity guide</Link> for the wettest spaces.</p>

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
            <li><Link href="/blog/best-whole-house-dehumidifier-canada">Best Whole House Dehumidifier Canada &mdash; When Ducted Beats a Portable</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Dehumidifier for a Canadian Basement &mdash; Sizing, Drainage &amp; Placement</Link></li>
            <li><Link href="/blog/best-large-capacity-dehumidifier-canada">Best Large-Capacity Dehumidifier Canada &mdash; For the Wettest Spaces</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-mold-canada">Best Dehumidifier for Mold Canada &mdash; The 60% Humidity Threshold</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada &mdash; The Damp-Seeking Insect</Link></li>
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
