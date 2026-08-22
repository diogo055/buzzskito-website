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

const SLUG = 'what-size-dehumidifier-do-i-need-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'What Size Dehumidifier Do I Need? The Canadian Sizing Table, by Space and Dampness'
const META_TITLE = 'What Size Dehumidifier Do I Need? Canada'

const FAQS = [
  {
    question: 'What size dehumidifier do I need for a basement in Canada?',
    answer: 'For most Canadian basements the answer is a 50-pint unit under the current rating scale — that is the class that covers roughly 1,000 to 2,000 sq ft of genuinely damp space. Size on dampness first and square footage second: a 1,200 sq ft basement that only feels slightly stuffy is fine on a 30–35 pint machine, while a 900 sq ft basement with a musty smell, damp block walls, or condensation on the cold-water pipes needs the 50-pint class even though it is smaller. If the basement has no floor drain or sump to run a hose into, buy the 50-pint version with a built-in condensate pump rather than planning to empty a bucket — a full bucket stops the machine, and a stopped machine controls nothing.',
  },
  {
    question: 'Is a 30-pint or a 50-pint dehumidifier better?',
    answer: 'A 30-pint unit is the right buy for a single moderately damp room, a finished basement that already feels dry, or a condo up to roughly 1,000 sq ft. A 50-pint unit is the right buy for anything larger, anything that smells musty, and any unfinished basement with bare concrete or block walls. The asymmetry matters: an oversized dehumidifier simply reaches its humidity setpoint sooner and cycles off, costing you a little more up front and very little to run, while an undersized one runs continuously, never reaches the setpoint, and leaves you above the humidity band where mould and dust mites are comfortable. When you are genuinely on the line between the two classes, take the 50.',
  },
  {
    question: 'Why do old dehumidifiers say 70 pints and new ones say 50?',
    answer: 'The rating test changed. Dehumidifier capacity is measured in pints of water removed per day under a defined lab condition, and in 2019 the US Department of Energy — whose test procedure Canadian retail labelling follows — moved that condition to a cooler, more realistic room temperature. The same physical machine therefore prints a lower number than it would have under the old test. A modern 50-pint unit is broadly the successor to what used to be sold as a 70-pint unit. The practical consequence is the one that costs people money: if you replace a 20-year-old 70-pint machine with a new 70-pint machine you have bought a size up, and if you compare an old listing to a new one you will under-buy by a class. Compare like-for-like, and treat 50 pints as today’s big-basement standard.',
  },
  {
    question: 'What size dehumidifier do I need for a 1,000 sq ft basement?',
    answer: 'A 1,000 sq ft basement sits exactly on the boundary, so the dampness class decides it. If the space is finished, carpeted, heated in winter, and merely feels a bit close in July, a 30–35 pint unit with a settable humidistat will hold it. If it is unfinished, has bare concrete or block walls, smells musty, or shows any damp patch or efflorescence on the foundation, go to 50 pints. The tie-breaker most people forget is temperature: a Canadian basement that sits at 15–17 °C is a harder job than the same square footage upstairs at 22 °C, because a compressor dehumidifier pulls less water out of cool air. Cool basement plus 1,000 sq ft plus any mustiness equals the 50-pint class.',
  },
  {
    question: 'Do I need a dehumidifier with a built-in pump?',
    answer: 'You need one whenever the water cannot run downhill from the machine to a drain. A standard dehumidifier drains by gravity through a garden-hose fitting, which is perfect if you have a floor drain, a sump pit, or a laundry tub below the level of the unit. If your only drain is a laundry sink up on a wall, or the basement has no drain at all and the water has to go out a window or up into a stack, a built-in condensate pump is what makes the machine run unattended. The alternative — emptying a bucket every day or two — is the single most common reason a correctly sized dehumidifier fails to fix a basement: every hour it sits full, it is doing nothing.',
  },
  {
    question: 'What size dehumidifier do I need for a crawl space?',
    answer: 'Do not size a crawl space by pint rating alone, because the limiting spec is operating temperature, not capacity. Ontario crawl spaces and cold cellars often sit between 5 and 15 °C, and an ordinary portable dehumidifier ices its coil in that range and stops removing water — sometimes while still humming away and looking like it is working. What you want is a purpose-built crawl-space unit rated to run at low temperature with a proper hot-gas auto-defrost cycle, a duct-capable housing, and a condensate pump, because there is rarely a gravity drain down there. These are a meaningful step up in price from a portable, and they are the correct buy for a vented rubble-foundation crawl space that has been damp for years.',
  },
  {
    question: 'Can a dehumidifier be too big?',
    answer: 'Practically, no — not in the way an air conditioner can be. An oversized air conditioner short-cycles and leaves the room clammy; an oversized dehumidifier just hits its humidity target faster and then rests, because the humidistat governs it. The costs of oversizing are modest and up front: a larger purchase price, a bigger footprint, and slightly more noise when it is running. The costs of undersizing are ongoing and never end: continuous running, a compressor that never gets a break, a hydro bill that reflects it, and a space that stays above the humidity band you were trying to leave. Given that asymmetry, when you are between two classes, buy the larger one.',
  },
  {
    question: 'Do dehumidifiers work in a cold basement or an unheated garage?',
    answer: 'Compressor dehumidifiers — which is almost everything sold at Canadian Tire, Home Depot, Rona, and on Amazon.ca — lose capacity as the air cools and begin frosting the coil below roughly 18 °C. A model with genuine auto-defrost will keep working down into the low teens by pausing to clear the ice, at the cost of some throughput. Below about 5 °C, a compressor unit is the wrong tool entirely and a desiccant dehumidifier is the right one: it uses a moisture-absorbing rotor instead of a cold coil, so cold air does not stop it. That is the honest answer for an unheated garage, a shoulder-season cottage, a cold room, or a workshop you only heat when you are in it.',
  },
  {
    question: 'What humidity should I set the dehumidifier to in Canada?',
    answer: 'Set it between 45% and 50% relative humidity and leave it there. That band is comfortably under the roughly 60% threshold where mould and dust mites become comfortable, and it is not so low that the machine runs itself ragged chasing a number that does not buy you anything extra. Verify the reading with a separate inexpensive hygrometer placed away from the unit, because built-in sensors drift and the display can be optimistic. One Canadian caveat worth knowing: in deep winter, heated indoor air is usually already dry, and most people can simply switch a basement dehumidifier off from roughly December to March. The exceptions are unheated crawl spaces and cold cellars, which stay damp year-round.',
  },
  {
    question: 'Are those small plug-in mini dehumidifiers any good?',
    answer: 'They are good at exactly one job and useless at every other. The small cube-shaped units that draw very little power and hold a few hundred millilitres are thermoelectric (Peltier) devices, not compressors, and they remove a tiny fraction of what even a 20-pint compressor unit does. In a gun safe, a small closet, a boat cabin, or a single damp cupboard, that is genuinely enough and buying more would be waste. In a basement, a laundry room, or anything with a musty smell, they cannot keep up and the money is thrown away. Read the daily water-removal figure on the box rather than the marketing copy, and if it is quoted in millilitres rather than pints or litres, it is not a basement machine.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'What size dehumidifier you need in Canada, by square footage and dampness: the 30 vs 50 vs 70 pint call, why ratings changed in 2019, cold-basement limits.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function WhatSizeDehumidifierDoINeedCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A Canadian dehumidifier sizing table: which class of unit to buy for each square-footage and dampness band, why the 2019 rating change makes old advice under-size, and when a crawl-space or whole-home unit is the correct purchase.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Size Dehumidifier Do I Need? Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">What Size Dehumidifier Do I Need?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">This is the last question before you buy, so here is a table rather than an essay: find your space and how damp it actually is, and it names the class of machine to buy. Dampness outranks square footage, Canadian basement temperature changes the answer, and the pint numbers on the box mean something different than they did ten years ago.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="50-pint dehumidifier — the Canadian basement default" search="50 pint dehumidifier energy star continuous drain" label="Most common correct size" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Most Canadian homes need a <strong>50-pint dehumidifier</strong> (current rating scale) for a damp basement of roughly 1,000&ndash;2,000 sq ft, or a <strong>30&ndash;35 pint</strong> unit for a single moderately damp room or a condo under about 1,000 sq ft. Size on <strong>dampness first, square footage second</strong>: a small musty basement needs more machine than a large dry one. If there is no floor drain to run a hose into, buy the version with a <strong>built-in condensate pump</strong>. Below about 5 &deg;C &mdash; a crawl space, a cold cellar, an unheated garage &mdash; a compressor unit is the wrong tool and a <strong>desiccant</strong> or purpose-built crawl-space unit is the right one.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Under ~500 sq ft, one damp room:</strong> 20&ndash;30 pint compact.</li>
              <li><strong>500&ndash;1,000 sq ft, moderately damp:</strong> 30&ndash;35 pint with a settable humidistat.</li>
              <li><strong>1,000&ndash;2,000 sq ft, damp or musty:</strong> 50 pint &mdash; the Canadian basement default.</li>
              <li><strong>Wet basement, or no floor drain:</strong> 50 pint <em>with a built-in pump</em>.</li>
              <li><strong>Crawl space / cold cellar at 5&ndash;15 &deg;C:</strong> low-temperature crawl-space unit, not a portable.</li>
              <li><strong>Chronic humidity across a whole house:</strong> a ducted whole-home dehumidifier, installed by an HVAC contractor.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="mould or damp" />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">The Sizing Table &middot; Updated August 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Find Your Space and Dampness &mdash; It Names the Machine</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Read down the left column to the row that matches your space, then across. Pint ratings are on the <strong>current</strong> scale (see the rating-change note below &mdash; it is the reason so much online sizing advice under-buys by a full class). Every row links to a live Amazon.ca availability check for that class.
          </p>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            <strong>What these bands assume, so you can adjust them.</strong> The square-footage figures below are deliberately more conservative than the generic AHAM-style sizing charts you will find elsewhere, and it is worth knowing why rather than just trusting us. Those charts were built around a <em>warm, conditioned room</em>; the rows here assume a <strong>cool Canadian basement at roughly 15&ndash;18 &deg;C</strong>, where a compressor unit pulls noticeably less water per hour than its rating implies, and they already step up a class for genuine dampness. If your space is warm, heated year-round, and only <em>moderately</em> damp &mdash; a finished basement that feels a little close in July, nothing more &mdash; then a 30&ndash;35 pint unit is genuinely fine well past 1,000 sq ft, and our <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier guide</Link> works through that warmer, drier case in detail. Cold and musty pushes you up a row; warm and merely stuffy pulls you down one.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Space &amp; dampness</th>
                  <th className="px-4 py-3 text-left">Buy this class</th>
                  <th className="px-4 py-3 text-left">Must-have spec</th>
                  <th className="px-4 py-3 text-left">Typical CAD band</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Under ~500 sq ft<br /><span className="font-normal text-xs text-gray-500">closet, ensuite, cold room, small damp spot</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">20&ndash;30 pint compact</strong></td>
                  <td className="px-4 py-3 text-gray-700">A humidistat you can set to a number</td>
                  <td className="px-4 py-3 text-gray-700">$150&ndash;$250</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="compact 30 pint dehumidifier energy star humidistat" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">500&ndash;1,000 sq ft<br /><span className="font-normal text-xs text-gray-500">finished basement or condo, feels close in summer</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">30&ndash;35 pint</strong></td>
                  <td className="px-4 py-3 text-gray-700">Energy Star + gravity drain port</td>
                  <td className="px-4 py-3 text-gray-700">$200&ndash;$350</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="35 pint dehumidifier energy star continuous drain" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">1,000&ndash;2,000 sq ft<br /><span className="font-normal text-xs text-gray-500">damp basement, musty smell, bare block walls</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">50 pint &mdash; the default</strong></td>
                  <td className="px-4 py-3 text-gray-700">Auto-defrost for a cool basement</td>
                  <td className="px-4 py-3 text-gray-700">$280&ndash;$450</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="50 pint dehumidifier energy star continuous drain" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Wet basement, or no floor drain<br /><span className="font-normal text-xs text-gray-500">standing damp, sump-less, drain above the unit</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">50 pint with built-in pump</strong></td>
                  <td className="px-4 py-3 text-gray-700">Internal condensate pump + long lift hose</td>
                  <td className="px-4 py-3 text-gray-700">$400&ndash;$600</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="50 pint dehumidifier with built in pump" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Crawl space / cold cellar<br /><span className="font-normal text-xs text-gray-500">unheated, 5&ndash;15 &deg;C, rubble or block foundation</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Low-temperature crawl-space unit</strong></td>
                  <td className="px-4 py-3 text-gray-700">Rated low-temp operation + hot-gas defrost + pump</td>
                  <td className="px-4 py-3 text-gray-700">$1,000&ndash;$2,000</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="crawl space dehumidifier low temperature with pump" block>Check price →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Unheated garage, workshop, cottage<br /><span className="font-normal text-xs text-gray-500">regularly below ~5 &deg;C</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Desiccant dehumidifier</strong></td>
                  <td className="px-4 py-3 text-gray-700">Rotor type &mdash; no cold coil to frost</td>
                  <td className="px-4 py-3 text-gray-700">$300&ndash;$600</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="desiccant dehumidifier cold room garage" block>Check price →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Whole house, several floors<br /><span className="font-normal text-xs text-gray-500">chronic humidity, existing ductwork</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Ducted whole-home unit</strong></td>
                  <td className="px-4 py-3 text-gray-700">Sized and installed by an HVAC contractor</td>
                  <td className="px-4 py-3 text-gray-700">$1,500&ndash;$3,000+ installed</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="whole house ducted dehumidifier" block>Check price →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Bands are broad Canadian retail ranges for orientation only &mdash; they move with stock, season, and sale cycles. Check the live listing for what anything actually costs today.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Sizing does not fix a leak.</strong> If water is physically entering &mdash; a foundation crack, failed grading, a weeping-tile problem, a leaking supply line &mdash; no dehumidifier of any size keeps up, because you are drying a space that is being refilled. Diagnose whether you have a <em>humidity</em> problem or a <em>water</em> problem first. The machine is the answer to the former and a companion to the repair for the latter.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="The Four Classes Worth Buying — and Who Each One Is For"
            awards={[
              {
                badge: 'Best for Most Basements',
                name: '50-Pint Energy Star Dehumidifier with Continuous Drain',
                why: 'The single most commonly correct answer in a Canadian house. Enough capacity to pull a musty 1,000–2,000 sq ft basement down to a 45–50% setpoint and then coast, with a hose port so it runs unattended. Check that it lists auto-defrost — a basement at 16 °C will ice the coil of a unit without it.',
                search: '50 pint dehumidifier energy star continuous drain',
                score: 9.1,
                featured: true,
                pros: ['Right size for the majority of GTA basements', 'Gravity drain means no bucket to empty', 'Energy Star keeps the running cost sane'],
                cons: ['Needs a floor drain, sump, or laundry tub below it', 'Larger footprint than people expect'],
              },
              {
                badge: 'Best When There Is No Drain',
                name: '50-Pint Dehumidifier with Built-In Condensate Pump',
                why: 'Same capacity, but it can push water upward — out a window, into a wall-mounted laundry sink, or across a basement to a distant stack. This is the version to buy in any house where the water cannot run downhill, which is a large share of older Ontario basements.',
                search: '50 pint dehumidifier with built in pump',
                score: 8.8,
                pros: ['Runs unattended anywhere, drain or no drain', 'Removes the full-bucket failure mode entirely', 'Long lift hose usually included'],
                cons: ['Costs meaningfully more than the gravity version', 'The pump is one more part that can fail'],
              },
              {
                badge: 'Best Small-Space Buy',
                name: '30-Pint Energy Star Dehumidifier',
                why: 'The honest answer when the space is a finished basement that already feels dry, a condo, or a single room. Buying 50 pints for 700 dry square feet is money spent on capacity you will never use — and the smaller unit is quieter and cheaper to run in a space that size.',
                search: '35 pint dehumidifier energy star continuous drain',
                score: 8.3,
                pros: ['Correctly sized rather than over-bought', 'Quieter in a living space', 'Lower purchase price and running cost'],
                cons: ['Not enough for an unfinished or musty basement', 'Small tank if you cannot run a hose'],
              },
              {
                badge: 'Best for Cold Spaces',
                name: 'Low-Temperature Crawl-Space / Desiccant Unit',
                why: 'The class most people do not know exists, and the reason their portable "stopped working" in the crawl space. Below roughly 15 °C a standard compressor unit frosts and stalls; a low-temperature crawl-space unit or a desiccant rotor machine keeps pulling water in the cold.',
                search: 'crawl space dehumidifier low temperature with pump',
                score: 8.5,
                pros: ['Actually works at crawl-space and cold-cellar temperatures', 'Usually pumped, which crawl spaces require', 'Duct-capable so it can serve a sealed crawl space'],
                cons: ['Several times the price of a portable', 'Overkill for any heated living space'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Damp basement, floor drain or sump available?</strong> The <em>Best for Most Basements</em> 50-pint on a hose is the correct default and where most people should stop reading. <strong>No drain, or the drain is above the machine?</strong> Pay the difference for the <em>Best When There Is No Drain</em> pumped version &mdash; a bucket you forget defeats the whole purchase. <strong>One dry-ish room or a condo?</strong> The <em>Best Small-Space Buy</em> 30-pint is genuinely enough and buying bigger is waste. <strong>Crawl space, cold cellar, or unheated garage?</strong> Only the <em>Best for Cold Spaces</em> class works down there &mdash; a portable will ice up and quit.
              </>
            }
          />
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Size Dehumidifier Do I Need?</h2>
          <p>For a damp Canadian basement of roughly 1,000 to 2,000 square feet, you need a <strong>50-pint dehumidifier</strong> on the current rating scale; for a single moderately damp room or a condo under about 1,000 square feet, a <strong>30&ndash;35 pint</strong> unit is correct. That covers the large majority of houses, and if you take nothing else from this page, take the table above and buy the row that matches your space. The rest of this guide exists because three things routinely push people into the wrong row: they size on square footage while ignoring how damp the space actually is, they compare a modern pint rating against an old one, and they forget that a Canadian basement is cold enough to change the machine&rsquo;s behaviour.</p>
          <p>Dehumidifier capacity is quoted in <em>pints of water removed per day</em> under a defined lab condition. It is a throughput figure, not a coverage figure, which is why square footage alone can never settle the question &mdash; a small, wet, unfinished basement holds far more water than a large, dry, finished one, and the machine has to remove water, not floor area.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability by size class:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier energy star continuous drain">50 pint (basement default) →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="35 pint dehumidifier energy star continuous drain">30&ndash;35 pint →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="50 pint dehumidifier with built in pump">50 pint + pump →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="crawl space dehumidifier low temperature with pump">Crawl-space unit →</BuyLink>
          </div>

          <h2>Dampness Beats Square Footage — Always</h2>
          <p>Before you measure anything, classify how damp the space is, because that judgement moves you a class up or down more often than the floor area does. Use four honest categories:</p>
          <ul>
            <li><strong>Moderately damp:</strong> the room feels a little close in July but there is no smell and nothing is wet. Nothing above a 30&ndash;35 pint unit is needed here.</li>
            <li><strong>Very damp:</strong> a faint musty smell, air that feels heavy, occasional condensation on cold-water pipes or a basement window. This is the 50-pint class.</li>
            <li><strong>Wet:</strong> a clear musty smell, damp patches on block or concrete, white efflorescence on the foundation, storage boxes softening at the bottom. Fifty pints, and buy the pumped version so it never stalls.</li>
            <li><strong>Extremely wet:</strong> visible seepage, water after every heavy rain, a floor that darkens. This is a drainage and waterproofing problem first; a dehumidifier here is a companion to a repair, not a substitute for one.</li>
          </ul>
          <p>Run the two inputs together and the answer falls out. A 700 sq ft <em>wet</em> basement outranks a 1,400 sq ft <em>moderately damp</em> one, and it needs the bigger machine despite being half the size. If you want to stop guessing, a ten-dollar hygrometer left in the space for a week is the cheapest instrument in this entire guide: anything sitting consistently above 60% relative humidity is at least &ldquo;very damp&rdquo;, whatever your nose says.</p>

          <h2>The Rating Change That Makes Old Advice Under-Size</h2>
          <p>Here is the detail that quietly costs people a size class. Dehumidifier capacity is measured under a standardised test, and in 2019 the US Department of Energy &mdash; whose test procedure Canadian retail labelling follows &mdash; changed that test to a cooler, more realistic room condition. Nothing about the machines changed; the number printed on the box did. A unit that would have been marketed as 70 pints under the old test prints roughly 50 under the new one.</p>
          <p>Two practical consequences. First, if you are replacing a fifteen-year-old 70-pint machine, the modern equivalent is a 50-pint machine &mdash; buying &ldquo;70 pint&rdquo; again means buying a size up, which is harmless but costs more than you needed to spend. Second, and more damaging: a great deal of sizing advice still online was written against the old scale, so following it with a modern box in your hands quietly under-buys. Whenever you see a sizing chart, check whether it is talking about today&rsquo;s numbers. Ours is. Our <Link href="/blog/best-large-capacity-dehumidifier-canada">large-capacity dehumidifier guide</Link> goes deeper on the top of that ladder, where the rating change causes the most confusion.</p>

          <h2>The Canadian Variable Everyone Forgets: Basement Temperature</h2>
          <p>A compressor dehumidifier works by chilling a coil below the dew point so moisture condenses on it. That mechanism is temperature-sensitive, and Canadian basements are cold. A finished GTA basement often sits at 16&ndash;18 &deg;C in summer, an unfinished one lower, and a cold cellar or crawl space lower again. As the air cools, two things happen: the unit removes less water per hour than its rating suggests, and below roughly 18 &deg;C the coil starts to frost.</p>
          <p>This is why <strong>auto-defrost</strong> is the spec to check on any unit destined for a basement. A machine with a proper defrost cycle senses the ice, pauses, clears it, and resumes; a machine without one gradually ices over and keeps running while removing almost nothing &mdash; the fans still turn, the lights are still on, and the humidity does not move. If you have ever had a dehumidifier that &ldquo;stopped working&rdquo; in a cool space without any fault code, this is almost always what happened.</p>
          <p>Below about 5 &deg;C, stop looking at compressor units altogether. A <strong>desiccant</strong> dehumidifier passes air over a moisture-absorbing rotor rather than a cold coil, so low temperature does not defeat it. That makes it the correct &mdash; and often only workable &mdash; choice for an unheated garage, a shoulder-season cottage, a cold room, or a workshop. It draws more power for the same water removed, which is exactly why it is the wrong pick for a heated basement and the right pick for a cold one.</p>

          <h2>Drainage Decides Whether the Right Size Actually Works</h2>
          <p>A correctly sized dehumidifier that is switched off half the time is an incorrectly sized dehumidifier. When the internal bucket fills, the machine stops, and in a genuinely damp basement a bucket can fill in well under a day &mdash; so every purchase decision has a drainage decision hidden inside it.</p>
          <p>Check three things before you order. Is there a <strong>floor drain or sump pit</strong> in the basement, and is it lower than where the unit will stand? If yes, buy the ordinary version and run a garden hose from the drain port &mdash; downhill the entire way, with no loop that can hold water. Is the only drain a laundry tub mounted on the wall, or does the water need to go out a window or up into a stack? Then buy the version with a <strong>built-in condensate pump</strong>; it is the difference between a machine that runs unattended for a season and one you resent. And if you are leaning toward saving money by emptying the bucket, be honest about whether you will still be doing that in week six. Most people are not, and that is the most common way a good machine fails to fix a basement.</p>

          <h2>Where the Cheap Option Is Genuinely the Right One</h2>
          <p>Not every damp corner needs a real machine, and it is worth saying so plainly. If the problem is a single closet, a gun safe, a boat cabin, a wardrobe on an exterior wall, or a small cold room, a compact 20&ndash;30 pint unit &mdash; or even one of the tiny thermoelectric cubes &mdash; is the correct buy and a 50-pint machine would be waste. The rule for the tiny units is simple: check the daily water-removal figure. If it is quoted in <em>millilitres</em>, it is a closet device, not a basement device, and no amount of marketing changes that.</p>
          <p>Equally, do not buy features you will not use. A settable humidistat is essential; auto-defrost is essential in a Canadian basement; Energy Star certification is worth having because these run for months. Wi-Fi apps, mood lighting, and voice assistants change nothing about how much water leaves the room. Put the money into <strong>capacity, defrost, and drainage</strong>, and treat everything else as optional.</p>

          <h2>Set It to 45&ndash;50%, Then Leave It Alone</h2>
          <p>Once the right size is in the room, the operating instructions are short. Set the humidistat to a target between 45% and 50% relative humidity. That is comfortably below the roughly 60% band where mould and dust mites become comfortable, and low enough that the room feels genuinely dry, without pushing the machine into pointless overtime chasing a number that buys nothing. Verify with a separate hygrometer placed away from the unit, because built-in sensors drift over time.</p>
          <p>Place it in the dampest zone with clear space around the intake and exhaust, keep the basement&rsquo;s windows and exterior doors closed while it runs, and leave interior doors open if you want it to serve more than one room. In deep winter, most heated Canadian basements are already dry and the unit can simply be switched off from roughly December to March &mdash; the exception being unheated crawl spaces and cold cellars, which stay damp year-round and are exactly why the low-temperature class exists.</p>
          <p>One last reason to get the size right, from our side of the fence: the same 45&ndash;50% band that stops mould also removes the conditions that <Link href="/blog/how-to-get-rid-of-centipedes-canada">house centipedes</Link>, silverfish, and dust mites depend on. Drying a basement properly is one of the very few pest interventions that requires no product, no registration, and no repeat visit &mdash; it just requires a machine that is actually big enough for the room.</p>

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
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Dehumidifier for a Canadian Basement &mdash; Placement &amp; Seasonal Use</Link></li>
            <li><Link href="/blog/best-large-capacity-dehumidifier-canada">Best Large-Capacity Dehumidifier Canada &mdash; The Top of the Ladder</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-mold-canada">Best Dehumidifier for Mould Canada &mdash; The 60% Humidity Threshold</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-centipedes-canada">How to Get Rid of House Centipedes &mdash; Why Drying the Basement Is the Fix</Link></li>
            <li><Link href="/blog/best-pest-control-equipment-canada">Best Pest-Control Equipment Canada &mdash; The Full Device Hub</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="dust mites and damp-loving pests" />
      </article>
    </>
  )
}
