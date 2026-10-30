import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'

const SLUG = 'best-mosquito-trap'
const DATE = '2026-07-12'
const UPDATED = '2026-10-29'
const TITLE = 'Best Mosquito Trap Canada 2026 — Propane vs UV vs CO₂ Compared'
// TITLE NOTE (Oct 29, 2026): was 'Best Mosquito Trap Canada 2026: Propane vs UV'; top queries, Jul 29-Oct 26 (all countries): mosquito trap 345 at 10.4 (2 clicks), best mosquito trap 28 at 7.7, best mosquito traps 7 at 16.7, mosquito trap uv 6 at 2.3 (1), most effective mosquito traps 3 at 4.3 (1). 'commercial mosquito trap' left to /blog/best-professional-mosquito-trap-canada, propane searches to /blog/propane-mosquito-trap-canada, 'co2 mosquito trap' to /blog/co2-mosquito-trap-canada, 'best indoor mosquito trap' to /blog/best-indoor-fly-mosquito-trap-canada.
const META_TITLE = 'Best Mosquito Trap Canada: What Actually Works'

const FAQS = [
  {
    question: 'What is the best mosquito trap in Canada in 2026?',
    answer: 'The best mosquito trap you can buy in Canada is a propane CO₂ trap with a Canadian registration number on the box, such as the Mosquito Magnet Patriot Plus ($399–$549; Reg. No. 32375). It burns propane to make CO₂, heat, and moisture, the cues host-seeking female mosquitoes follow, and its Canadian label says it "attracts certain mosquitoes". Be clear about what that buys: the University of Wisconsin–Madison says Mosquito Magnets "do catch 1000\'s of mosquitoes, but this does not change the biting rates in yards containing these devices." UV-plus-fan traps (DynaTrap, bug zappers) cost far less but catch mostly non-biting insects. The Biogents BG-Mosquitaire ($200–$500) uses a skin-scent lure rather than octenol, and Health Canada\'s pesticide registry has no Biogents product. For most GTA backyards, though, a professional barrier spray solves a different problem than a trap does: it treats the shaded foliage where mosquitoes rest across the whole yard, instead of pulling them into one device radius over weeks.',
  },
  {
    question: 'What is the best type of mosquito trap — propane, UV, or CO₂?',
    answer: 'It depends on what you are fighting. Propane CO₂ traps (Mosquito Magnet) and skin-scent fan traps (BG-Mosquitaire) are built for mosquitoes: the American Mosquito Control Association says trap lures target host-seeking females, with carbon dioxide as the main attractant in most traps. Propane traps cost $400–$1,300 plus $400–$600/season in propane and attractant; Biogents says its BG-Sweetscent lure mimics scents found on human skin, with CO₂ optional. UV + fan traps (DynaTrap, bug zappers) are cheap ($79–$330) and catch lots of flying insects, but in the two University of Notre Dame bug zapper studies the AMCA cites, mosquitoes were only 4.1% and 6.4% of the catch. Indoor traps (Katchy, DynaTrap indoor) are for gnats and fruit flies more than mosquitoes. And none of them is a bite cure: the University of Wisconsin–Madison says traps bought by homeowners "usually do not work to reduce human biting".',
  },
  {
    question: 'Do outdoor mosquito traps actually work?',
    answer: 'They catch mosquitoes; whether they cut bites is another matter. The University of Wisconsin–Madison says studies comparing yards with and without traps show that traps bought by individual homeowners "usually do not work to reduce human biting", and that Mosquito Magnets catch thousands of mosquitoes without changing biting rates in those yards. UV-light traps and bug zappers "work" in that they catch insects, but in the two University of Notre Dame studies the American Mosquito Control Association cites, mosquitoes were 4.1% and 6.4% of a zapper\'s catch, with no significant difference in mosquitoes between yards with and without zappers. No trap protects you tonight. For a specific evening, a personal repellent zone (Thermacell) is the quicker option, while professional barrier spray reduces the adult mosquitoes resting across the whole yard.',
  },
  {
    question: 'What is the best indoor mosquito trap?',
    answer: 'For indoor use, small UV-plus-fan-plus-glue traps like the Katchy Indoor Insect Trap or the DynaTrap indoor models ($40–$70) are the practical pick. They quietly pull in flying insects near a lamp or windowsill and stick them to a replaceable glue card. Be honest about expectations: indoor traps are best against fungus gnats, fruit flies, and the occasional stray mosquito — they will not clear a room full of mosquitoes on their own. The bigger indoor win is prevention: fix window screens, empty standing water from houseplant saucers, and treat the yard so fewer mosquitoes reach the door in the first place.',
  },
  {
    question: 'How much does a good mosquito trap cost in Canada?',
    answer: 'Pricing as of 2026: UV + fan traps (DynaTrap DT150 to DT3050) run $79–$329; bug zappers $30–$120; indoor traps (Katchy, DynaTrap indoor) $40–$70; skin-scent fan traps (BG-Mosquitaire) $200–$500; and propane CO₂ traps (Mosquito Magnet Patriot to Executive) $399–$1,299. Remember the running costs: propane traps add $400–$600/season in propane tanks and attractant cartridges, DynaTraps add $90–$150/year in bulbs and Atrakta cartridges, and the BG-Mosquitaire needs a new BG-Sweetscent sachet about every two months (Biogents says one lasts up to two months), plus a CO₂ cylinder if you add CO₂. A single professional barrier spray treatment starts at $99 and needs no consumables.',
  },
  {
    question: 'Where can I buy a mosquito trap in Canada?',
    answer: 'Mosquito traps are stocked at Canadian Tire, Home Depot Canada, Costco Canada (best seasonal pricing on DynaTrap and the occasional Mosquito Magnet during spring outdoor-living sales), Lee Valley Tools, Cabela\'s Canada, and Amazon.ca (widest year-round selection with Prime shipping). Costco carries the larger DynaTrap models each spring but rarely stocks refill cartridges, so buy attractants and bulbs separately. Buy in April–May before peak-season markup — cartridge and bulb supply runs low by July.',
  },
  {
    question: 'Are mosquito traps better than professional barrier spray?',
    answer: 'They solve different problems. Traps reduce mosquito populations slowly over weeks and are ideal for cottages, rural acreage, and chronic-problem lots near wetlands. Professional barrier spray treats the leaves where mosquitoes rest with a residual that kills them on contact and is renewed on the plan schedule (every 2 weeks on Standard, monthly on Basic); it covers the whole yard and — unlike any trap — can also target ticks where they wait. For a typical GTA suburban backyard where neighbours\' properties keep re-seeding the mosquito population, barrier spray is the option that covers the whole yard on a schedule, rather than working from one spot. Many cottage owners run both: a trap for long-term pressure and spray for the areas where mosquitoes rest.',
  },
  {
    question: 'What is the most effective mosquito trap?',
    answer: 'Judged by what it is built to catch, a CO₂ trap. The American Mosquito Control Association says most traps use carbon dioxide, from burning propane or from a cylinder, as the main lure for host-seeking females, while UV bug zappers catch few mosquitoes (4.1% and 6.4% of the catch in two Notre Dame studies). In field trials published in 2019, a Biogents BG-Mosquitaire caught more Asian tiger mosquitoes than a propane Mosquito Magnet Patriot (Degener et al.), but Health Canada’s registry has no Biogents product; the propane traps listed as current there include the Mosquito Magnet Patriot Plus (32375) and Executive (29944). No trap is a bite cure: the University of Wisconsin–Madison says homeowner traps "usually do not work to reduce human biting".',
  },
  {
    question: 'Do UV mosquito traps work?',
    answer: 'Not well on mosquitoes. In the two University of Notre Dame bug zapper studies the American Mosquito Control Association cites, mosquitoes were 4.1% and 6.4% of the daily catch over a season, and yards with and without zappers had no significant difference in the number of mosquitoes. A University of Delaware count of nearly 14,000 zapped insects found only 31 biting flies. Canada’s rules say much the same: an outdoor zapper may be sold without a registration only if it is CSA-certified and its label says "This device does not control blackflies, mosquitoes or other biting flies." That exemption is written for high-voltage insect killers, and Health Canada’s registry has no DynaTrap record.',
  },
  {
    question: 'Which mosquito traps are on Health Canada’s registry?',
    answer: 'On October 29, 2026, Health Canada’s pesticide registry listed these outdoor mosquito traps as current: the Mosquito Magnet Patriot Plus (32375) and Executive (29944), the SkeeterVac SV-15 (28452) and SV-3100C (31703), and the MK12 Guardian Mosquito Trap (28460). The Mosquito Magnet Independence, Patriot, Pro, Pro Plus, Liberty and Defender are listed as cancelled, and the registry has no record for DynaTrap, Biogents or Katchy. Under the Pest Control Products Regulations, devices sold to attract or destroy flying insects are Schedule 1 devices, and the Act bars distributing or using an unregistered pest control product (CSA-certified zappers labelled under Schedule 2 aside), so look for the Reg. No. on the box.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The best mosquito trap in Canada is a propane CO₂ trap with a Reg. No., like the Patriot Plus. What UV, scent and propane traps catch, and what cuts bites.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-mosquito-trap-canada')

export default function BestMosquitoTrapCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A 2026 roundup comparing propane, UV, CO₂, and indoor mosquito traps for Canadian backyards.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Mosquito Trap Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Mosquito Trap Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">For most Canadian yards the best mosquito trap is a propane CO&#8322; trap with a Canadian registration number on the box, such as the Mosquito Magnet Patriot Plus (Reg. No. 32375), for a large lot or cottage where it can run 24 hours a day all season. It catches thousands of mosquitoes, but the University of Wisconsin&ndash;Madison says biting rates in yards with these traps do not change, so pair it with emptying standing water and a repellent.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Mosquito Magnet Patriot Plus (propane CO₂ trap)" search="mosquito magnet patriot plus" asin="B07QJY2NL1" label="Best overall trap" />
      <TopBox tag={AMZ_TAG} name="Mosquito Magnet Patriot Plus (propane CO₂ trap)" search="mosquito magnet patriot plus" asin="B07QJY2NL1" label="Best overall trap" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For catching mosquitoes, a propane CO&#8322; trap like the <Link href="/blog/mosquito-magnet-canada" className="text-emerald-700 underline">Mosquito Magnet</Link> is the best trap you can buy in Canada &mdash; it burns propane to make real CO&#8322;, heat, and moisture, and the Patriot Plus (Reg. No. 32375) is listed as current in Health Canada&rsquo;s pesticide registry. It catches thousands of mosquitoes, but the University of Wisconsin&ndash;Madison says that biting rates in yards with these traps do not change.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>A propane CO&#8322; trap (Mosquito Magnet) catches thousands of mosquitoes; Woodstream says the Patriot Plus protects up to 1 acre, but UW&ndash;Madison says biting rates do not change in yards with one.</li>
              <li>UV traps like DynaTrap and bug zappers catch mostly non-biting insects &mdash; in two Notre Dame bug zapper studies, mosquitoes were 4.1% and 6.4% of the catch.</li>
              <li>Skin-scent fan traps (Biogents BG-Mosquitaire) sit in the middle on price, with CO&#8322; optional; Health Canada&rsquo;s registry has no Biogents product.</li>
              <li>Biting female mosquitoes hunt by the CO&#8322;, heat, and moisture that a propane trap generates.</li>
              <li>Professional barrier spray starts from $99 per treatment and covers the whole yard in one visit.</li>
              <li>Only barrier spray targets both mosquitoes where they rest and ticks where they wait.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
            <div className="mt-4">
              <BuyLink search="mosquito magnet patriot plus" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Mosquito Traps in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Mosquito Magnet Patriot Plus (propane CO₂)',
                why: 'The only trap type that makes real CO₂ — the cue biting females hunt for. Its Canadian label (Reg. No. 32375) says it attracts certain mosquitoes, and Woodstream Canada rates it for up to 1 acre; the University of Wisconsin–Madison says Mosquito Magnets catch thousands of mosquitoes without changing biting rates in yards, so pair it with a repellent.',
                search: 'mosquito magnet patriot plus',
                asin: 'B07QJY2NL1',
                score: 9.2,
                featured: true,
                pros: ['Registered in Canada (Reg. No. 32375)', 'Covers up to ~1 acre', 'Targets egg-laying females'],
                cons: ['Premium up-front cost', 'Ongoing propane + attractant cost'],
              },
              {
                badge: 'Best Mid-Price',
                name: 'Biogents BG-Mosquitaire (not registered in Canada)',
                why: 'A fan trap baited with BG-Sweetscent, which Biogents says mimics human skin scent and lasts up to two months a sachet (CO₂ from a tank is optional); it vacuums in host-seeking females — better mosquito targeting than UV. No Biogents product is in Health Canada’s registry, and a device sold to attract or destroy flying insects needs a Reg. No. (Pest Control Products Regulations, Schedule 1), so check the box for one.',
                search: 'biogents mosquitaire co2 trap',
                score: 8.4,
                pros: ['Mosquito-specific catch', 'Cheaper than propane', 'Runs on mains power, no propane (Biogents)'],
                cons: ['Not registered in Canada (no Biogents record)', 'A new BG-Sweetscent sachet about every two months', 'Covers less area than a whole-yard barrier spray'],
              },
              {
                badge: 'Best Budget',
                name: 'DynaTrap UV + Fan Trap (not registered in Canada)',
                why: 'Cheap and satisfying to empty, and fine as a supplemental flying-insect catcher — but UW–Madison detected no CO₂ from DynaTraps, so treat it as a bonus, not a solution. No DynaTrap model is in Health Canada’s registry, and a device sold to attract or destroy flying insects needs a Reg. No. (Pest Control Products Regulations, Schedule 1), so check the box for one.',
                search: 'dynatrap insect trap',
                score: 7.0,
                pros: ['Budget-friendly', 'Quiet, low-maintenance', 'Catches lots of flying insects'],
                cons: ['Not registered in Canada (no DynaTrap record)', 'Bulbs + cartridges add up'],
              },
              {
                badge: 'Best Indoor',
                name: 'Katchy Indoor Insect Trap (not registered in Canada)',
                why: 'A small UV + fan + glue-card unit for near a lamp or window. Best against fungus gnats and fruit flies and the occasional stray mosquito — not a room full of them. No Katchy record is in Health Canada’s registry; indoor light traps are registered as devices, and current ones whose registrations list mosquitoes include STEM (Reg. No. 35296) and Raid Essentials (35297), so check the box for a Reg. No.',
                search: 'katchy indoor insect trap',
                score: 7.4,
                pros: ['Great for gnats & fruit flies', 'Quiet and compact', 'Replaceable glue cards'],
                cons: ['Won’t clear a room of mosquitoes', 'Indoor only'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Rural acreage or a cottage near water?</strong> The <em>Best Overall</em> propane trap earns its keep, and it is the one pick here with a Canadian Reg. No. (32375). <strong>Suburban lot on a budget?</strong> The <em>Best Mid-Price</em> skin-scent trap gives mosquito-specific catch for less, but no Biogents product is in Health Canada&rsquo;s registry, so weigh that first. <strong>Just want something cheap on the deck?</strong> The <em>Best Budget</em> DynaTrap is a flying-insect catcher, not a mosquito fix, and no DynaTrap model is registered here either. For whole-yard treatment that can also target ticks where they wait, look at <Link href="/mosquito-control">professional barrier spray</Link>.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Trap Types Compared · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">The 4 Types of Mosquito Trap (and What Each Actually Does)</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            &ldquo;Mosquito trap&rdquo; covers four very different machines. The one that works best for you depends on your property size and whether you want mosquito-specific reduction or general flying-insect catch. Here is the honest breakdown, with a live Amazon.ca price check per type.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Trap type</th>
                  <th className="px-4 py-3 text-left">How it works</th>
                  <th className="px-4 py-3 text-left">Mosquito effectiveness</th>
                  <th className="px-4 py-3 text-left">Price (CA, 2026)</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Propane CO₂<br /><span className="font-normal text-xs text-gray-500">Mosquito Magnet</span></td>
                  <td className="px-4 py-3 text-gray-700">Burns propane → real CO₂ + heat + moisture, then vacuums females into a net</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best catch</strong> — thousands of mosquitoes, but no drop in bites found in yards (UW–Madison)</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$399 – $1,299</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="mosquito magnet patriot plus" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Skin-scent fan trap<br /><span className="font-normal text-xs text-gray-500">Biogents BG-Mosquitaire</span></td>
                  <td className="px-4 py-3 text-gray-700">BG-Sweetscent lure mimics human skin scents; CO₂ from a cylinder is optional; fan suction</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Good</strong> — targets host-seeking females</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$200 – $500</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="biogents mosquitaire co2 trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">UV + fan<br /><span className="font-normal text-xs text-gray-500">DynaTrap, bug zappers</span></td>
                  <td className="px-4 py-3 text-gray-700">UV light attracts insects; fan sucks them in (zappers electrocute)</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Weak</strong> — mosquitoes 4.1% and 6.4% of zapper catch (Notre Dame, via AMCA)</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$30 – $329</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="dynatrap insect trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Indoor trap<br /><span className="font-normal text-xs text-gray-500">Katchy, DynaTrap indoor</span></td>
                  <td className="px-4 py-3 text-gray-700">Small UV + fan + sticky glue card for flying insects near a lamp</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Limited</strong> — best for gnats &amp; fruit flies</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$40 – $70</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="katchy indoor insect trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of July 2026 across Canadian Tire, Home Depot Canada, Costco Canada, Lee Valley, and Cabela&rsquo;s. Add running costs: propane traps $400–$600/season; DynaTrap $90–$150/year in bulbs and cartridges; Biogents says a BG-Sweetscent sachet lasts up to two months, and CO₂, if you add it, comes from a cylinder.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ No trap protects you tonight.</strong> Every trap reduces populations over days or weeks. For a one-off event (BBQ, wedding, party) or a whole-yard plan, <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> treats the leaves where mosquitoes rest across the whole yard, and on a seasonal plan the residual is renewed on schedule &mdash; it can also target ticks where they wait, which no trap does.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Trap Buying — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Most effective type', 'Propane CO₂ trap (real CO₂ draws egg-laying females)'],
                  ['Best value mid-tier', 'Skin-scent fan trap (BG-Mosquitaire); no Biogents product in Health Canada’s registry'],
                  ['Cheapest but weakest', 'UV + fan traps and bug zappers (mosquitoes 4.1% and 6.4% of zapper catch, Notre Dame)'],
                  ['Best for indoors', 'UV + glue-card traps (Katchy, DynaTrap indoor)'],
                  ['Time to real results', 'DynaTrap’s FAQ says 6–8 weeks to maximum effectiveness; UW–Madison says bites do not drop in yards with propane traps'],
                  ['Tick effectiveness', 'None — ticks do not fly to any trap'],
                  ['Coverage', '300 sq ft (indoor) up to 1 acre (propane)'],
                  ['Running cost', '$90–$600/season depending on type'],
                  ['Best Canadian retailers', 'Canadian Tire, Costco, Home Depot, Amazon.ca'],
                  ['When to buy', 'April–May, before peak-season markup'],
                  ['Alternatives to a trap', 'Professional barrier spray for the whole yard, or a Thermacell zone for the deck'],
                  ['Health Canada status', 'Devices sold to attract or kill flying insects need a registration (PCP Regulations, Schedule 1), except CSA-certified zappers labelled under Schedule 2; look for the Reg. No., e.g. Patriot Plus 32375'],
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
          <QuickIdTable
            title="Mosquito traps compared: how each works, who it suits, the limits"
            head={['Type', 'How it works', 'Best for', 'Limits and the Canadian record']}
            rows={[
              ['Propane CO₂ trap (Mosquito Magnet, SkeeterVac)', 'Turns propane into CO₂, mixed with heat, moisture and an octenol lure; a fan vacuums mosquitoes into a net (Patriot Plus label)', 'Large yards and cottages where it can run 24 hours a day; the label says upwind, 9–12 m from where you sit, 1.5–1.8 m from mosquito habitat, in shade', 'Catches thousands, but UW–Madison says biting rates do not change; a propane tank lasts 21 days (label). Current Reg. Nos.: Patriot Plus 32375, Executive 29944, SkeeterVac SV-15 28452, SV-3100C 31703'],
              ['Skin-scent fan trap (Biogents BG-Mosquitaire)', 'A fan pulls mosquitoes toward BG-Sweetscent, which Biogents says mimics scents found on human skin; CO₂ from a cylinder is optional', 'Asian tiger mosquitoes, in field trials published in 2019 (Degener et al.); one sachet lasts up to two months', 'No Biogents product in Health Canada’s registry'],
              ['UV light + fan trap (DynaTrap)', 'A UV bulb gives off light and heat and a fan pulls insects in; no propane (DynaTrap FAQ)', 'A general flying-insect catch away from the patio: DynaTrap says 20–40 ft from where you sit, 3–6 ft up, on 24/7', 'No DynaTrap or Atrakta record in the registry; UW–Madison detected no CO₂ from DynaTraps (unpublished)'],
              ['Bug zapper (UV light + electric grid)', 'UV light draws insects onto a high-voltage grid', 'Night-flying insects in general; most of the catch is non-pest insects (AMCA)', 'Mosquitoes were 4.1% and 6.4% of the catch in two Notre Dame studies; an unregistered outdoor zapper must be CSA-certified and labelled “This device does not control blackflies, mosquitoes or other biting flies.”'],
              ['Indoor UV + glue trap (Katchy)', 'UV light and a fan bring flying insects onto a sticky card', 'Fungus gnats and fruit flies near a lamp or window', 'Not a fix for a room full of mosquitoes; no Katchy record in the registry'],
              ['Mosquito Dunks (not a trap)', 'A floating BTI briquet that releases a biological control the larvae eat', 'Bird baths, rain barrels and ponds you cannot empty or change weekly; one dunk per 6 m² of water surface', 'Label: kills mosquitoes “before they’re old enough to bite” for up to 30 days; Reg. No. 28888'],
            ]}
            caption={<>Patriot Plus details from its Canadian label (<a href="https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=32375" target="_blank" rel="noopener noreferrer" className="underline">Reg. No. 32375</a>, May 21, 2025); registration status from Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">pesticide registry</a>, searched October 29, 2026; biting rates and the DynaTrap CO&#8322; reading from the <a href="https://mosquitosite.russell.wisc.edu/preventing-mosquito-bites/carbon-dioxide-baited-mosquito-traps" target="_blank" rel="noopener noreferrer" className="underline">University of Wisconsin&ndash;Madison</a>; zapper figures from the <a href="https://www.mosquito.org/faqs/" target="_blank" rel="noopener noreferrer" className="underline">American Mosquito Control Association</a>; the zapper label rule from the <a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/FullText.html" target="_blank" rel="noopener noreferrer" className="underline">Pest Control Products Regulations</a>, Schedules 1 and 2; Biogents, DynaTrap and Mosquito Dunks rows from the makers&rsquo; pages and the Dunks label; the tiger mosquito trials from Degener et al., <a href="https://doi.org/10.2987/18-6790.1" target="_blank" rel="noopener noreferrer" className="underline">J Am Mosq Control Assoc 35(1):32&ndash;39 (2019)</a>. The Katchy row restates this page&rsquo;s own description. No trap was tested.</>}
          />
          <div className="not-prose bg-amber-50 border border-amber-300 rounded-xl p-4 my-6 text-[15px] leading-relaxed text-gray-800">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-2">Buying used? Check the serial number</p>
            <p>
              A 2018 CPSC recall (18-114) covered some Mosquito Magnet traps &mdash; Patriot/Patriot Plus and Executive among them &mdash; but only units built between December 2014 and December 2016, serials <strong>PT01438&ndash;PT01642</strong> and <strong>EX01444&ndash;EX01637</strong>. The hazard was cleaning the trap <em>while it was still running</em> with a Quick Clear Cartridge kit, which could damage the gas regulator. One incident, no injuries. Units built since carry a brass check valve on the gas hose and are unaffected, so a new purchase is outside the range.
            </p>
            <p className="mt-2">
              It is worth knowing if you are buying second-hand, because a serial is not visible before purchase. Woodstream still offers the free regulator repair on affected units.{' '}
              <a href="https://www.cpsc.gov/Recalls/2018/Woodstream-Recalls-Mosquito-Magnet-Traps-Due-to-Injury-Hazard" rel="nofollow noopener noreferrer" target="_blank" className="font-semibold underline decoration-amber-500 underline-offset-2">CPSC notice</a>.
            </p>
          </div>
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices across the main trap types:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="mosquito magnet patriot plus">Propane trap on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="dynatrap insect trap">UV + fan trap →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="katchy indoor insect trap">Indoor trap →</BuyLink>
          </div>

          <h2 id="top-pick">Top Pick: Propane CO₂ Traps (Mosquito Magnet)</h2>
          <p>If you want a trap aimed at the mosquitoes that bite, buy a propane CO₂ trap. These are the only consumer traps that generate <strong>real carbon dioxide</strong> — by catalytically burning propane — alongside heat and moisture. That combination is exactly what a female mosquito hunts for when she is looking for a blood meal, so the trap intercepts and kills the egg-laying females that seed the next generation.</p>
          <Photo id="aedes-albopictus-biting" alt="An Asian tiger mosquito female pushing her proboscis into a person's skin" caption="An Asian tiger mosquito female pushing her proboscis into the skin of the photographer she landed on (CDC photo). Host-seeking females like this one are what a CO₂ trap is built to intercept; only females bite." />
          <p>The market leader is the Mosquito Magnet line. In Health Canada&rsquo;s pesticide registry the Patriot Plus (32375) and Executive (29944) are current, while the Independence, Patriot, Pro and Liberty models are listed as cancelled, so check the Reg. No. on the box. Woodstream says the Patriot Plus protects up to 1 acre; its Canadian label says the trap must run 24 hours a day and a propane tank lasts 21 days. What the research does not show is fewer bites: the University of Wisconsin&ndash;Madison says Mosquito Magnets catch thousands of mosquitoes without changing biting rates in yards, and the American Mosquito Control Association cautions against &ldquo;putting too much faith in traps as your sole means of control.&rdquo; The catch: the device is $399&ndash;$1,299, and you will spend another $400&ndash;$600 per season on propane tanks and attractant cartridges (in Canada, Mosquito Magnet&rsquo;s octenol attractant is Reg. No. 28440; the registry has no Lurex record). It is a real investment that makes most sense on large properties where you will run it all season. Read our full breakdown in the <Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Canada guide</Link>, including model comparison and where to buy.</p>
          <p><strong>Best for:</strong> cottages, rural acreage, and lots bordering wetlands or standing water, where you are committed to running the trap 24/7 all season.</p>

          <NextUp path="/blog/best-mosquito-trap" />
          <h2>Runner-Up: CO₂ / Octenol Lure Traps</h2>
          <p>A step down in price from a full Mosquito Magnet, the Biogents BG-Mosquitaire is a fan trap baited with BG-Sweetscent, which Biogents says mimics scents found on human skin and lasts up to two months a sachet; CO₂ from a cylinder is optional. It is not an octenol trap. It targets host-seeking females far better than UV light does, at $200&ndash;$500 up front. In field trials in Florida, California and Louisiana published in 2019, the Mosquitaire with its lure alone caught 1.2 times more Asian tiger mosquitoes than a CO₂- and Lurex3-baited Mosquito Magnet Patriot, and 6.8 times more with CO₂ added (Degener et al., <em>Journal of the American Mosquito Control Association</em>); that study counted catches, not bites. This is the sensible mid-tier if you want mosquito-specific catch without the top-end price and propane logistics, with one Canadian catch: Health Canada&rsquo;s registry has no Biogents product.</p>

          <h2>Budget Tier: UV + Fan Traps and Bug Zappers</h2>
          <p>This is the category most people picture when they hear &ldquo;mosquito trap,&rdquo; and it is the one to be most skeptical about. UV + fan traps (the DynaTrap family) and classic electric bug zappers attract insects with ultraviolet light, then either vacuum or electrocute them. They absolutely catch insects &mdash; but in the two University of Notre Dame bug zapper studies the American Mosquito Control Association cites, <strong>mosquitoes were only 4.1% and 6.4% of the daily catch</strong> over a season, and yards with and without zappers had no significant difference in mosquitoes. A University of Delaware count of nearly 14,000 zapped insects found 31 biting flies, and its researchers noted that most species of mosquitoes don&rsquo;t respond to black lights.</p>
          <Photo id="aedes-vexans-uv-light" alt="An inland floodwater mosquito resting on pale fabric after coming to an ultraviolet light at night" caption="An inland floodwater mosquito, Aedes vexans, that came to an ultraviolet light at night, on pale fabric (Charlotte, North Carolina; research grade on iNaturalist). Some mosquitoes do come to UV light, but in zapper studies they are a small share of what a light catches." />
          <p>Adding an octenol cartridge (DynaTrap&rsquo;s Atrakta, which DynaTrap says mimics human skin scents and lists as lactic acid, octenol and ammonium bicarbonate) nudges the mosquito catch up a little, but never closes the gap with a CO₂ trap; the University of Wisconsin&ndash;Madison adds that when it tried to measure the CO&#8322; DynaTrap&rsquo;s marketing describes, it &ldquo;detected no CO2 at all&rdquo; (unpublished results), and Health Canada&rsquo;s registry has no DynaTrap or Atrakta record. At $30&ndash;$329 these are cheap and satisfying to empty, and fine as a supplemental flying-insect catcher on a cottage deck — just do not expect them to solve a mosquito problem. Our honest <Link href="/blog/dynatrap-canada-review">DynaTrap Canada review</Link> and our <Link href="/blog/bug-zappers-canada-do-they-work">bug zapper breakdown</Link> go deeper, with model-by-model pricing.</p>
          <p>The newest gadget in this tier is not a trap at all: the <Link href="/blog/laser-mosquito-killer-photon-matrix-review">Photon Matrix laser</Link> detects individual mosquitoes and shoots them down instead of luring them in. It is genuinely clever, but it guards one small zone in front of the unit rather than a yard, so judge it against a Thermacell zone, not against a propane trap.</p>

          <RelatedLinks path="/blog/best-mosquito-trap" />
          <h2>Indoor Mosquito Traps</h2>
          <p>For inside the house, look at small UV-plus-fan-plus-glue traps such as the Katchy Indoor Insect Trap or DynaTrap&rsquo;s indoor units ($40&ndash;$70). They sit quietly by a lamp or window and stick flying insects to a replaceable glue card. Be realistic: they shine against fungus gnats and fruit flies and will grab the occasional stray mosquito, but they will not clear a bedroom full of mosquitoes. The bigger indoor win is prevention — repair window screens, empty water from houseplant saucers, and reduce the outdoor population so fewer mosquitoes reach your door.</p>

          <h2 id="situation">Which Mosquito Trap for Your Situation?</h2>
          <ul>
            <li><strong>Acreage or a cottage near water, and you will run it all season:</strong> a propane CO&#8322; trap with a Reg. No. on the box (Patriot Plus 32375, Executive 29944, SkeeterVac SV-15 28452), placed upwind and near mosquito habitat as its label says.</li>
            <li><strong>Fewer bites on the deck tonight:</strong> no trap does that. A repellent zone does: the Thermacell Patio Shield label (Reg. No. 31998) covers up to 4.5 m from the unit for up to four hours a mat, after 30 minutes to take effect.</li>
            <li><strong>Bird baths, rain barrels or a pond you cannot empty weekly:</strong> Mosquito Dunks (Reg. No. 28888) in the water, not a trap.</li>
            <li><strong>Moths around the porch light:</strong> a zapper or UV trap will catch them; it will not catch many mosquitoes.</li>
            <li><strong>Gnats or fruit flies indoors:</strong> a small indoor UV and glue trap kept near the problem.</li>
            <li><strong>Ticks in the yard:</strong> no trap helps; ticks do not fly to any trap.</li>
          </ul>

          <h2>Mosquito Trap Buyer&rsquo;s Checklist</h2>
          <ol>
            <li><strong>A Reg. No. on the box.</strong> Devices sold to attract or destroy flying insects are Schedule 1 devices under the Pest Control Products Regulations; the registry lists the Patriot Plus as 32375.</li>
            <li><strong>The model, not just the brand.</strong> The Mosquito Magnet Independence, Patriot and Pro are listed as cancelled in Canada.</li>
            <li><strong>A lure with its own number.</strong> Mosquito Magnet&rsquo;s octenol attractant is 28440; the registry has no Lurex or Atrakta record.</li>
            <li><strong>Where it will stand.</strong> The Patriot Plus label wants it upwind, 9&ndash;12 m from where you sit and 1.5&ndash;1.8 m from mosquito habitat, in the shade, not against a building or fence.</li>
            <li><strong>Power and propane.</strong> The label says the trap must run 24 hours a day, a propane tank lasts 21 days, and the trap can stand up to 15 m (50 ft) from the power source.</li>
            <li><strong>When to start.</strong> The label&rsquo;s troubleshooting notes that mosquitoes may not be out until temperatures are consistently above 10&deg;C (50&deg;F); Woodstream says to set the trap up before then.</li>
            <li><strong>A zapper&rsquo;s label.</strong> An unregistered outdoor zapper must be CSA-certified and say it &ldquo;does not control blackflies, mosquitoes or other biting flies.&rdquo;</li>
            <li><strong>A bite plan.</strong> UW&ndash;Madison says traps do not lower biting in yards, so budget for repellent and for emptying standing water every week.</li>
          </ol>

          <h2>Traps vs Professional Barrier Spray for GTA Yards</h2>
          <p>Traps and barrier spray are not really competitors — they solve different problems. A trap slowly thins the mosquito population over weeks and is ideal for large, chronic-problem properties. Barrier spray coats the leaves where mosquitoes rest with a residual that kills on contact and is renewed on your plan&rsquo;s schedule (every 2 weeks on Standard, monthly on Basic); it covers the entire yard and can also target ticks where they wait. Here is how the options stack up for a typical GTA property:</p>
          <div className="not-prose overflow-x-auto">
          <table className="min-w-[560px] not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Solution</th><th className="px-3 py-2 text-left">First-year cost</th><th className="px-3 py-2 text-left">Mosquito reduction</th><th className="px-3 py-2 text-left">Tick coverage</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/mosquito-magnet-canada">Propane CO₂ (Mosquito Magnet)</Link></td><td className="px-3 py-2">$850–$1,100</td><td className="px-3 py-2">Catches thousands; no change in bites found (UW–Madison)</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Skin-scent fan trap (BG-Mosquitaire)</td><td className="px-3 py-2">$250–$550</td><td className="px-3 py-2">Good catch in field trials published in 2019; bites not measured</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/dynatrap-canada-review">UV + fan (DynaTrap)</Link></td><td className="px-3 py-2">$290–$380</td><td className="px-3 py-2">Low (mosquitoes 4.1–6.4% of zapper catch)</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/thermacell-canada-where-to-buy">Thermacell zone</Link></td><td className="px-3 py-2">$80–$150</td><td className="px-3 py-2">Repels up to 4.5 m from the unit, up to 4 hours a mat (Patio Shield label)</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">$549–$994</td><td className="px-3 py-2">Whole yard, renewed each visit</td><td className="px-3 py-2">Yes — targets where ticks wait</td></tr>
            </tbody>
          </table>
          </div>

          <h2>The Smart Stack for a GTA Backyard</h2>
          <p>For a typical Mississauga, Brampton, or Oakville backyard (5,000&ndash;15,000 sq ft), the honest strategy is a layered one, not a single trap:</p>
          <ol>
            <li><strong>Treat standing water</strong> you cannot empty or change each week with Mosquito Dunks (Reg. No. 28888), whose label says they kill mosquitoes &ldquo;before they&rsquo;re old enough to bite&rdquo; for up to 30 days (see our <Link href="/blog/mosquito-dunks-canada-guide">mosquito dunks guide</Link>); the registry has no record for Mosquito Bits</li>
            <li><strong>Professional barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s seasonal program</Link> for whole-yard treatment renewed on your plan&rsquo;s schedule, with tick treatment available as an add-on</li>
            <li><strong>A Thermacell on the deck</strong> for a repellent zone while you sit outside: the Patio Shield label (Reg. No. 31998) covers up to 4.5 m from the unit for up to four hours a mat and says to allow 30 minutes for it to take effect</li>
          </ol>
          <p>Add a propane CO₂ trap on top only if you have rural acreage or a cottage where the multi-week investment genuinely pays off. On a standard suburban lot, your neighbours&rsquo; yards keep re-seeding the mosquito population faster than any trap can thin it — which is why it is worth comparing a <Link href="/mosquito-control">whole-yard barrier spray</Link>: a trap works from one spot over weeks, while the spray is applied to the vegetation across the yard and renewed on a schedule.</p>
          <p>And if what you actually need is a knock-down before one specific evening, that is a job for a fog, not a trap, and in Canada a homeowner&rsquo;s fog is an aerosol can whose label lists mosquitoes, such as Muskol Patio &amp; Deck Fogger (Reg. No. 22808.03): Health Canada stopped the use of handheld or stationary foggers in residential areas for pyrethrin products. Our <Link href="/blog/mosquito-fogger-canada">mosquito fogger guide</Link> covers the rules. A fog clears the adults flying right now, but leaves almost no residual, so they are back by the next night.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/dynatrap-canada-review">DynaTrap Canada — Honest Review + Where to Buy</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada Guide</Link></li>
            <li><Link href="/blog/bug-zappers-canada-do-they-work">Bug Zappers Canada — Do They Work?</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
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

        </div>
      </article>

      <ReadNext path="/blog/best-mosquito-trap" standalone />
    </>
  )
}
