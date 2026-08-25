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

const SLUG = 'crawl-space-dehumidifier-vs-vapour-barrier-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Crawl Space Dehumidifier vs Vapour Barrier in Canada — Which One First, and Why the Honest Answer Is Both'
const META_TITLE = 'Crawl Space Dehumidifier vs Vapour Barrier'

const FAQS = [
  {
    question: 'Do I need a crawl space dehumidifier or a vapour barrier first?',
    answer: 'The vapour barrier goes first, almost without exception. In a Canadian crawl space with an exposed earth floor, the single largest moisture source is evaporation out of the soil, and that source runs continuously, day and night, all year. A dehumidifier placed over bare soil is trying to out-pump the ground — it will hold the humidity down while it runs, at a real electricity cost, and the moment it stops the crawl space refills. A sheet of polyethylene laid over the soil, lapped and taped and run up the walls, cuts that evaporation off at the source for a materials cost measured in the low hundreds of dollars. Do that first, watch the humidity for a few weeks with a wireless sensor, and only then decide whether a dehumidifier is still needed. Very often the answer changes once the ground is covered.',
  },
  {
    question: 'Is a vapour barrier alone enough for a crawl space?',
    answer: 'Sometimes, and it is worth finding out before you spend four figures on an appliance. A ground barrier alone is often enough where the soil is naturally dry, the site drains away from the house, gutters and downspouts discharge well clear of the foundation, there is no history of standing water under the house, and the crawl space is small. In those conditions covering the earth removes the dominant moisture source and the space settles into a reasonable humidity range on its own. It is usually not enough where the crawl space is vented to humid summer air, where plumbing has leaked, where groundwater rises seasonally, or where you have sealed the space up as part of an encapsulation. The way to know is to measure: put a wireless hygrometer down there after the barrier goes in and read it for a month before buying anything else.',
  },
  {
    question: 'How thick should a crawl space vapour barrier be?',
    answer: 'Six-mil polyethylene is the common minimum and it is what most codes and inspectors will accept as a ground cover, but it is thin, it tears where it passes over gravel or debris, and it will not survive being crawled on. If anyone is ever going to enter that space — to service ductwork, chase a plumbing leak, or store anything — step up to a reinforced liner in the 10 to 20 mil range. The reinforcement is a woven scrim between the film layers, and it is the difference between a barrier that lasts twenty years and one that is shredded within two. The extra cost on a typical crawl space is modest against the labour of doing the job twice. Rake the ground clear of rock and construction debris before you lay anything, whatever thickness you choose.',
  },
  {
    question: 'Should crawl space vents be open or sealed in Canada?',
    answer: 'This is the most contested question in the whole subject and the honest answer is that it depends on your building and that you should confirm locally before you seal anything. The traditional approach vents a crawl space to the outside year-round. The problem is a physics one: on a humid Ontario summer day, warm outdoor air at high absolute humidity enters a crawl space whose surfaces are still cool, drops below its dewpoint, and condenses — so the vents that were meant to dry the space are actively wetting it. That is why sealed and encapsulated crawl spaces have become common. But sealing changes how the space behaves and it is not a decision to take casually: if there is any atmospherically vented combustion appliance down there, if radon is a consideration in your area, or if your building inspector requires venting, get a qualified professional and your local building official involved before you close a single vent.',
  },
  {
    question: 'What size dehumidifier does a crawl space need?',
    answer: 'Size it for the moisture load, not the floor area, because a crawl space breaks the usual charts in both directions. A sealed, barriered crawl space has a very low load and a modest unit will hold it easily. An open, vented crawl space over bare soil has an effectively unlimited load and no size of dehumidifier wins, which is precisely why the barrier comes first. For an encapsulated Canadian crawl space, the specification that matters far more than raw pint rating is the minimum operating temperature: crawl spaces run cool, and a standard room dehumidifier whose coil frosts below about 5°C is the wrong machine. Purpose-built crawl space units are designed for low-temperature operation, for being left unattended, and for draining continuously rather than into a bucket nobody will ever empty.',
  },
  {
    question: 'Where does a crawl space dehumidifier drain to?',
    answer: 'Never into a bucket — that is the one guaranteed failure. A crawl space is the least-visited part of a house, so the unit has to be hands-free or it will sit stalled on a full tank for months. If there is a sump pit or a floor drain below the unit, gravity drainage through a hose is the simplest and most reliable answer, provided the hose falls continuously with no low spot that can hold water. Most crawl spaces have nowhere lower to send it, which is why a condensate pump is standard practice here: it collects the water and pushes it up and out to a sump, a laundry standpipe, or outside the foundation. Plan the drainage route before you choose the machine, because it often decides which machine you can use.',
  },
  {
    question: 'Will a dry crawl space keep pests out?',
    answer: 'It removes the main reason many of them are there, which is not the same as an exclusion job but is a bigger factor than most homeowners expect. A damp crawl space is close to ideal habitat for the moisture-loving crowd — camel crickets, silverfish, centipedes, springtails, sowbugs — and it also draws rodents looking for a sheltered, undisturbed place to nest. Covering the ground and holding relative humidity in the 45 to 55 per cent range makes the space markedly less attractive, and a sealed liner also cuts down the soil-gas and musty-air path from the crawl space into the rooms above. It does not, however, close gaps in the foundation, seal utility penetrations, or fix a rim joist a mouse can walk through. Humidity control and physical exclusion are two different jobs and a serious crawl space needs both.',
  },
  {
    question: 'What does a crawl space vapour barrier and dehumidifier cost in Canada?',
    answer: 'Treat these as two very different price tiers, which is part of why the order of operations matters so much. A do-it-yourself ground barrier for a typical crawl space is a materials purchase: reinforced sheeting, seam tape, fasteners and a termination strip generally land in the low-hundreds range for a small to mid-sized space, and the work is unpleasant rather than skilled. A purpose-built low-temperature crawl space dehumidifier is a different order of magnitude — a serious unit runs into four figures once you add a condensate pump and the drainage run, plus the electricity to keep it going. Spending a few hundred on the barrier first, then measuring for a month, is the cheapest way to find out whether the four-figure purchase is necessary at all.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Vapour barrier or dehumidifier for a damp Canadian crawl space? The barrier stops the source, the dehumidifier handles what is left. Order of operations.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function CrawlSpaceDehumidifierVsVapourBarrierCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to the crawl space damp decision: why a ground vapour barrier is the source control and a dehumidifier is the finisher, the five-step order of operations, what liner thickness and seam detailing actually matter, low-temperature dehumidifier specs, and when the barrier alone is enough.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Crawl Space Dehumidifier vs Vapour Barrier', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Crawl Space Dehumidifier vs Vapour Barrier</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Before you spend anything on a damp crawl space, get the order right. A vapour barrier stops moisture at the source for a few hundred dollars; a dehumidifier removes what is left, for several times that. Do them in the wrong order and you pay to dry the earth itself, forever.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Reinforced crawl space vapour barrier" search="reinforced crawl space vapor barrier 12 mil" label="Do this first" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Lay the <strong>vapour barrier first</strong>, then decide about the dehumidifier. In a Canadian crawl space with a bare earth floor, evaporation out of the soil is the dominant moisture source and it never stops &mdash; so a dehumidifier over open ground is pumping against the earth and only works while it runs. A ground barrier cuts that source off for a few hundred dollars in materials. In a <strong>sealed or encapsulated</strong> crawl space you generally need <strong>both</strong>: the barrier removes the soil, the dehumidifier handles what the sealed air still carries. Measure for a month between the two purchases.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Bulk water comes before everything</strong> &mdash; grading, gutters, downspouts, a leaking pipe. No barrier fixes a flow.</li>
              <li>6-mil poly is the common minimum; <strong>reinforced 10&ndash;20 mil</strong> is what survives being crawled on.</li>
              <li>Venting a crawl space in a humid Ontario July can <em>add</em> water &mdash; warm air condenses on cool surfaces.</li>
              <li>A crawl space dehumidifier is judged on its <strong>minimum operating temperature</strong>, not its pint rating.</li>
              <li>Drain to a sump or use a <strong>condensate pump</strong> &mdash; never a bucket in a space nobody visits.</li>
              <li>Before sealing vents: check combustion appliances, radon, and your local building official.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="camel crickets, silverfish &amp; the other pests that live in a damp crawl space" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — The Barrier Kit, and the Dehumidifier That Finishes the Job"
            awards={[
              {
                badge: 'Do This First',
                name: 'Reinforced Crawl Space Vapour Barrier (10–20 mil)',
                why: 'The source control, and the cheapest meaningful thing you can do to a damp crawl space. A reinforced liner has a woven scrim between the film layers, so it survives being dragged over gravel and crawled on — which plain 6-mil poly does not. Rake the ground clear first, lap the seams generously, and run it up the walls rather than stopping at the perimeter.',
                search: 'reinforced crawl space vapor barrier 12 mil',
                score: 9.3,
                featured: true,
                pros: ['Cuts off the dominant moisture source', 'Materials cost, not appliance cost', 'Reinforcement survives foot and knee traffic'],
                cons: ['The installation is genuinely unpleasant work', 'Does nothing about bulk water or a leaking pipe'],
              },
              {
                badge: 'Best Seam Detailing',
                name: 'Vapour Barrier Seam Tape',
                why: 'A barrier is only as good as its seams, and this is where most DIY jobs quietly fail. Purpose-made seam tape is formulated to hold on polyethylene and to keep holding in a cool, damp, low-airflow space where general-purpose tape lets go within a season. Overlap the sheets well and tape the full length of every lap.',
                search: 'crawl space vapor barrier seam tape',
                score: 8.8,
                pros: ['Designed to bond to poly, not to drywall', 'Turns separate sheets into one surface', 'Cheap relative to what it protects'],
                cons: ['Needs a clean, dry film to stick properly', 'Easy to skimp on and regret'],
              },
              {
                badge: 'Best Wall Termination',
                name: 'Barrier Fasteners & Termination Strip',
                why: 'The liner has to be mechanically held where it runs up the foundation wall, or gravity and time will pull it down and reopen the path you just closed. Fasteners plus a termination strip give the barrier a permanent top edge and a tidy line you can inspect later without guessing whether it has slipped.',
                search: 'crawl space vapor barrier fasteners termination strip',
                score: 8.4,
                pros: ['Stops the liner sagging off the wall', 'Makes the job inspectable later', 'Small cost, large durability gain'],
                cons: ['Requires drilling into masonry', 'Adds an hour or two to the job'],
              },
              {
                badge: 'Best Dehumidifier for the Job',
                name: 'Low-Temperature Crawl Space Dehumidifier',
                why: 'Once the ground is covered and the space is sealed, this is what holds the remaining humidity down. The spec that matters is the minimum operating temperature — crawl spaces run cool and a standard room unit frosts its coil and stops. Purpose-built units are made to run unattended, drain continuously, and be left alone for a season.',
                search: 'crawl space dehumidifier low temperature',
                score: 8.9,
                pros: ['Keeps working at crawl space temperatures', 'Built for unattended, continuous duty', 'Holds a setpoint the barrier alone cannot'],
                cons: ['Four-figure purchase — earn it with the barrier first', 'Needs a real drainage plan before you buy'],
              },
              {
                badge: 'Buy This Before Either',
                name: 'Wireless Hygrometer / Remote Humidity Sensor',
                why: 'The instrument that decides whether you need the expensive half of this article at all. A remote sensor lets you read crawl space humidity from indoors, so you can lay the barrier, watch the numbers for a month, and make the dehumidifier decision on evidence rather than on guesswork.',
                search: 'wireless hygrometer remote humidity sensor',
                score: 8.1,
                pros: ['Read the space without entering it', 'Proves whether the barrier alone was enough', 'Cheapest useful purchase in the whole project'],
                cons: ['Signal can struggle through a foundation wall', 'Cheap sensors drift over time'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Bare earth floor, no liner?</strong> Start with <em>Do This First</em> plus the <em>Best Seam Detailing</em> tape and the <em>Best Wall Termination</em> hardware &mdash; that is the whole barrier job. <strong>Not sure how bad it is?</strong> Put in <em>Buy This Before Either</em> and read the space for a month first. <strong>Barrier already down and the space still sits above 60%?</strong> That is the case the <em>Best Dehumidifier for the Job</em> is genuinely for. <strong>Sealed or encapsulated crawl space?</strong> Plan on both from the start &mdash; a sealed space needs something removing moisture, and this is it.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Order of Operations &middot; Updated August 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Barrier or Dehumidifier? Match Your Crawl Space to the Row</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            These two products solve different halves of the same problem, and buying them out of order is what makes crawl space projects expensive. Find the row that describes your space.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your crawl space</th>
                  <th className="px-4 py-3 text-left">Buy</th>
                  <th className="px-4 py-3 text-left">Why</th>
                  <th className="px-4 py-3 text-left">Watch out for</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bare earth floor<br /><span className="font-normal text-xs text-gray-500">no liner at all</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Barrier only, to start</strong></td>
                  <td className="px-4 py-3 text-gray-700">Soil evaporation is the dominant, endless source</td>
                  <td className="px-4 py-3 text-gray-700">Rake out rock and debris or you will tear it</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="reinforced crawl space vapor barrier 12 mil" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Sealed / encapsulated<br /><span className="font-normal text-xs text-gray-500">vents closed</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Both</strong></td>
                  <td className="px-4 py-3 text-gray-700">A sealed space needs something actively removing moisture</td>
                  <td className="px-4 py-3 text-gray-700">Combustion appliances and radon &mdash; check before sealing</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="crawl space dehumidifier low temperature" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Liner down, still damp<br /><span className="font-normal text-xs text-gray-500">above 60% for weeks</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Dehumidifier</strong></td>
                  <td className="px-4 py-3 text-gray-700">Source is controlled; this is the residual load</td>
                  <td className="px-4 py-3 text-gray-700">Minimum operating temperature, and the drain route</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="crawl space dehumidifier low temperature" block>Check price on Amazon.ca &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Standing water<br /><span className="font-normal text-xs text-gray-500">or a seasonal pool</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Neither yet &mdash; fix the water</strong></td>
                  <td className="px-4 py-3 text-gray-700">Grading, downspouts, sump, plumbing come first</td>
                  <td className="px-4 py-3 text-gray-700">A barrier over standing water hides it, not fixes it</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="wireless hygrometer remote humidity sensor" block>Measure first &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Sheeting, tape and dehumidifiers are building products and appliances, not pesticides &mdash; none require PMRA registration and none carry chemical claims. Drying a crawl space out is the legal, no-permit half of pest prevention; the physical exclusion work is the other half.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">&#9888;&#65039; Do not seal a crawl space blind.</strong> Closing the vents changes how the space breathes. If there is an atmospherically vented furnace or water heater down there, if radon is a consideration where you live, or if your municipality requires crawl space ventilation, talk to a qualified contractor and your local building official before you close a single vent. Everything else in this guide is DIY-friendly; that part is not.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Crawl Space Dehumidifier vs Vapour Barrier: Which One First?</h2>
          <p>Lay the <strong>vapour barrier first</strong>. In a Canadian crawl space with an exposed earth floor, moisture evaporating out of the soil is the largest single source of humidity in the space, and unlike weather it never pauses. A dehumidifier set over bare ground is therefore competing with the earth itself: it will hold the reading down while it runs, and the space will refill as soon as it stops. Covering the soil removes that source outright, for a materials cost in the low hundreds rather than the four figures a proper crawl space dehumidifier commands.</p>
          <p>The reason this article exists is that the honest answer to &ldquo;which one&rdquo; is often <em>both</em> &mdash; but in a specific order, with a measurement in between. Barrier, then measure for a month, then decide about the machine. Do it the other way around and you buy the expensive half to solve a problem the cheap half would have removed.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the parts:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="reinforced crawl space vapor barrier 12 mil">Reinforced barrier &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="crawl space vapor barrier seam tape">Seam tape &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="crawl space dehumidifier low temperature">Crawl space dehumidifier &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="condensate pump dehumidifier">Condensate pump &rarr;</BuyLink>
          </div>

          <h2>Where Crawl Space Moisture Actually Comes From</h2>
          <p>There are only three sources worth thinking about, and they need different responses.</p>
          <ul>
            <li><strong>The soil.</strong> Ground under a house is rarely dry, and water evaporates continuously from its surface into the air above it. On a bare-earth crawl space this dwarfs everything else, which is why the ground cover is the highest-leverage thing you can install.</li>
            <li><strong>Outdoor air through the vents.</strong> Counterintuitively, this is a source rather than a cure for much of a Canadian summer. Warm humid July air entering a crawl space whose surfaces are still cool drops below its dewpoint and gives up water onto joists, ducts and foundation walls.</li>
            <li><strong>Bulk water.</strong> Poor grading directing runoff at the foundation, downspouts discharging beside the wall, a seasonally high water table, a weeping-tile failure, or a leaking supply or drain line. This is liquid water, not vapour, and it outranks both of the others.</li>
          </ul>
          <p>That ranking is the whole strategy. Fix bulk water, then cover the soil, then deal with the air. Skipping to the air is what makes people say a dehumidifier &ldquo;did not work&rdquo; in a crawl space &mdash; it worked exactly as designed against a problem it was never going to win.</p>

          <h2>The Order of Operations</h2>
          <p>Work through these in sequence, and stop when the humidity reading is where you want it. Each step is cheaper than the one after it.</p>
          <ol>
            <li><strong>Fix the bulk water.</strong> Extend downspouts, correct grading so the ground falls away from the house, repair any plumbing leak, and add a sump if groundwater genuinely rises into the space. Nothing downstream matters until this is done.</li>
            <li><strong>Cover the ground.</strong> Rake out rock and construction debris, then lay a reinforced liner across the entire earth floor, lapping the sheets generously, taping every seam, and running the material up the foundation walls to a mechanically fastened termination.</li>
            <li><strong>Decide about the vents.</strong> This is the step that needs local advice rather than an internet opinion &mdash; see the warning above. Sealing is common practice in encapsulation work, but it changes how the space and any combustion appliances behave.</li>
            <li><strong>Insulate, if you are going that far.</strong> In a sealed crawl space the insulation typically moves to the perimeter walls rather than the floor above. This is where a project stops being a weekend job.</li>
            <li><strong>Dehumidify what is left.</strong> Only now does an appliance make sense, and only if a month of readings says the space still sits above about 60% relative humidity.</li>
          </ol>

          <h2>Getting the Vapour Barrier Right</h2>
          <p>The barrier is simple in concept and easy to do badly. Thickness first: 6-mil polyethylene is the common minimum and is generally accepted as a ground cover, but it tears where it passes over gravel and will not survive anyone crawling on it. If the space will ever be entered &mdash; and someone will eventually need to chase a pipe or a duct &mdash; a reinforced liner in the 10 to 20 mil range is the better buy. The woven scrim between the film layers is the difference between a barrier that lasts decades and one that is in shreds by the second year.</p>
          <p>Then the detailing, which is where DIY jobs fail. Clear the ground of rock and debris before anything goes down. Overlap adjacent sheets generously and tape the full length of every lap with a tape actually formulated for polyethylene &mdash; general-purpose tape lets go in a cool, damp, low-airflow space within a season. Run the liner up the foundation walls rather than stopping at the perimeter, and hold it there with fasteners and a termination strip so it cannot sag back down and reopen the path you just closed. Cut and seal neatly around piers and posts. None of this is skilled work; all of it is the difference between a barrier and a tarp.</p>

          <h2>Getting the Dehumidifier Right</h2>
          <p>If the readings say you need one, the specification that matters most is not the pint rating &mdash; it is the <strong>minimum operating temperature</strong>. Crawl spaces run cool, and a standard room dehumidifier condenses moisture on a refrigerated coil that frosts over and stops extracting once the space drops to around 5&deg;C. That is the same physics that decides the purchase in an unheated garage, which we cover in detail in our guide to the <Link href="/blog/best-dehumidifier-for-cold-garage-canada">best dehumidifier for a cold garage</Link>. Purpose-built crawl space units are designed for low-temperature duty and for being left alone for a season, which is what this application demands.</p>
          <p>Plan the drainage before you choose the machine, because it often decides which machine you can use. A bucket is not an option in a space nobody visits; it will sit full and idle for months. If a sump pit or floor drain sits below the unit, a gravity hose with a genuine continuous fall is the most reliable arrangement. In most crawl spaces there is nowhere lower to send water, so a condensate pump that lifts it out to a sump, a standpipe, or outside the foundation is standard practice. Add a remote humidity sensor so you can read the space from indoors and actually notice when something has stopped working. For the broader sizing and drainage logic that carries over from basements, our <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier guide</Link> and the <Link href="/blog/best-large-capacity-dehumidifier-canada">large-capacity guide</Link> go deeper.</p>

          <h2>When the Barrier Alone Is Genuinely Enough</h2>
          <p>Plenty of Canadian crawl spaces never need the appliance, and it is worth knowing what those look like before you commit to a four-figure purchase. If the soil is naturally dry, the site drains away from the house, gutters and downspouts discharge well clear of the foundation, there is no history of standing water underneath, and the space is small, then covering the earth removes the dominant source and the humidity settles into a workable range on its own. The barrier plus a decent hygrometer is the entire project.</p>
          <p>The cases that do need both are equally recognisable: a crawl space you have sealed up as part of an encapsulation and which therefore has no other moisture removal; a space with a seasonally high water table; a house where humid summer air was previously being vented in and the surfaces are still cool; or a crawl space that has already grown mould and needs holding well below the threshold while the remediation is done. On that last point, be clear about what a dehumidifier can and cannot do &mdash; it prevents and controls, it does not clean established growth, which is the argument we lay out in full in our <Link href="/blog/best-dehumidifier-for-mold-canada">dehumidifier for mould</Link> guide.</p>

          <h2>The Pest Angle, and Its Limits</h2>
          <p>A damp crawl space is close to perfect habitat for the moisture-loving pests &mdash; camel crickets, silverfish, centipedes, springtails, sowbugs &mdash; and a sheltered undisturbed one is an obvious nesting site for rodents. Covering the ground and holding relative humidity in the 45 to 55 per cent band removes the main reason the moisture crowd is there at all, and the liner also cuts down the musty soil-air path from the crawl space into the rooms above, which is often what a homeowner is actually smelling upstairs.</p>
          <p>Be honest about the limit, though. Drying a crawl space does not close a gap in the foundation, seal a utility penetration, or fix a rim joist a mouse can walk straight through. Humidity control and physical exclusion are two separate jobs, and a crawl space with a rodent problem needs both &mdash; our guides to <Link href="/blog/how-to-get-rid-of-silverfish-canada">getting rid of silverfish</Link> and to <Link href="/blog/rodent-exclusion-kit-canada">rodent exclusion</Link> cover the half this page does not. Do the water work first regardless; a dry crawl space makes every other pest measure work better, and it is the one improvement that also protects the structure above it.</p>

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
            <li><Link href="/blog/best-dehumidifier-for-cold-garage-canada">Best Dehumidifier for a Cold Garage Canada &mdash; The Temperature Line</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Dehumidifier for a Canadian Basement &mdash; Sizing, Drainage &amp; the Pest Angle</Link></li>
            <li><Link href="/blog/best-large-capacity-dehumidifier-canada">Best Large-Capacity Dehumidifier Canada &mdash; For the Wettest Spaces</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-mold-canada">Best Dehumidifier for Mold Canada &mdash; The 60% Humidity Threshold</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada &mdash; A Humidity Problem in Disguise</Link></li>
            <li><Link href="/blog/rodent-exclusion-kit-canada">Rodent Exclusion Kit Canada &mdash; Sealing the Gaps Drying Cannot Close</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="camel crickets, silverfish and the other pests that live in a damp crawl space" />
      </article>
    </>
  )
}
