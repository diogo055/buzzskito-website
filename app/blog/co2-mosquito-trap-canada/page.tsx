import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AmazonLink from '@/components/AmazonLink'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { tagForSlug } from '@/lib/amazon-clusters'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import Photo from '@/components/Photo'

const SLUG = 'co2-mosquito-trap-canada'
const DATE = '2026-07-14'
const UPDATED = '2026-10-28'
const TITLE = 'CO2 Mosquito Traps in Canada 2026: Biogents vs Propane Traps (No Tank Required)'
// TITLE NOTE (Oct 28, 2026): kept as is (46 characters, already leads with the top query); top queries: co2 mosquito trap 293, biogents mosquito trap canada 62, biogents mosquito trap 53, mosquito co2 trap 44, c02 mosquito trap 39 (25 clicks across the top 15 queries). The Biogents brand head term belongs to biogents-bg-mosquitaire-mosquito-trap-canada; propane to propane-mosquito-trap-canada.
const META_TITLE = 'CO2 Mosquito Traps Canada: Biogents vs Propane'

const FAQS = [
  {
    question: 'What is a CO2 mosquito trap and how does it actually work?',
    answer: 'A CO2 (carbon dioxide) mosquito trap mimics the three cues a female mosquito uses to find a blood host: exhaled CO2, body heat, and skin scent. The trap releases a CO2 plume plus a chemical lure that imitates human skin compounds (lactic acid, ammonia, fatty acids). Host-seeking females fly upwind toward the source, and a quiet suction fan pulls them into a catch bag or net where they dehydrate and die. There are three ways traps generate that CO2: sugar-and-yeast fermentation (cheap, weak), propane combustion (Mosquito Magnet style), and electric traps that use a compressed CO2 cylinder or run on the lure alone. Biogents (BG) traps — the ones used in academic mosquito research — are the electric, fan-driven type and are the reason people search for a \'no tank required\' option.',
  },
  {
    question: 'Do Biogents mosquito traps actually work, and are they what researchers use?',
    answer: 'Yes. Biogents is the brand mosquito scientists genuinely deploy. The BG-Sentinel trap (the professional research model) is the standard surveillance tool used in published studies and by public-health surveillance programs worldwide to monitor Aedes and Culex populations. The consumer versions — BG-Home and BG-Mosquitaire — use the same patented airflow design, and their BG-Sweetscent lure uses the same formulation as the research BG-Lure (an artificial-skin attractant), according to Biogents. That research pedigree is why we point homeowners to Biogents over generic \'CO2 mosquito killer\' units on Amazon.ca: the capture data behind the design is real, not marketing. But catching mosquitoes is not the same as preventing bites: University of Wisconsin–Madison researchers report that traps bought by individual homeowners usually do not reduce biting in the yard. Also note that we found no Biogents product in Health Canada’s pesticide registry.',
  },
  {
    question: 'Biogents vs Mosquito Magnet — which CO2 trap is better?',
    answer: 'They solve different problems. Mosquito Magnet (and other propane traps) burn propane to generate a large CO2 plume and can pull mosquitoes across up to about 1 acre (4,000 m²) — great for rural acreage and cottage country, but you are buying and hauling a 20 lb propane tank roughly every 3 weeks plus attractant cartridges. Biogents electric traps cover a smaller zone (a patio or a section of a suburban yard) but run on a wall plug and a replaceable lure, so there is no tank, no combustion, and no fuel run to Canadian Tire mid-summer. For a typical GTA suburban backyard, the lower running cost and zero-tank convenience of a Biogents unit usually wins. For a 1+ acre rural lot, propane\'s reach is worth the hassle. Many cottage owners run both.',
  },
  {
    question: 'Do I need a CO2 tank or cylinder to run a Biogents trap?',
    answer: 'No — that is the headline advantage. The core Biogents traps (BG-Home and the standard BG-Mosquitaire) run on electricity plus the BG-Lure chemical attractant and catch mosquitoes without any added CO2. If you have heavy pressure and want to maximise catch, you can optionally add CO2 with the BG-Booster / BG-CO2 accessory, which either connects a small compressed-CO2 cylinder or uses a sugar-yeast generator to sweeten the plume. So CO2 is a boost, not a requirement. This is the opposite of a propane trap, where combustion is the whole mechanism and the tank is mandatory. In practice, most GTA homeowners start with the lure-only setup and only add the CO2 booster if they back onto a ravine, pond, or wetland.',
  },
  {
    question: 'What is the BG-GAT and why do pest professionals like it?',
    answer: 'The BG-GAT (Gravid Aedes Trap) is a clever, low-tech trap that targets the mosquito that matters most in a backyard: the pregnant (gravid) female looking for a spot to lay eggs. It uses no power and no CO2 at all. You add water and a grass-infusion or lure so it smells like an ideal breeding puddle; the female enters through a funnel to lay eggs, hits a sticky surface or insecticidal net, and never leaves. Because you are killing egg-laying females, each catch prevents a whole next generation. GATs are deployed in clusters (three or more around a property) and are ideal for cottages, off-grid sites, and dense-vegetation yards where running a plug-in trap is impractical. They specifically hammer Aedes species — the aggressive daytime-biting container mosquitoes — which is exactly the group barrier spray and personal repellent struggle to fully suppress.',
  },
  {
    question: 'How much does it cost to run a CO2 mosquito trap for a season in Canada?',
    answer: 'It depends on the CO2 source. A propane trap (Mosquito Magnet type) is the expensive one to feed: roughly 6 propane tank refills across a May–September Ontario season at $25–$40 each, plus attractant cartridges every 3 weeks — call it $350–$550/season in consumables on top of the device. An electric Biogents trap running on the lure alone costs only pennies of electricity per day plus a BG-Lure replacement every few months (a small pack), so realistically $60–$120/season in consumables. If you add the CO2 booster with compressed cylinders, budget more for cylinder refills. Net: electric-with-lure is by far the cheapest to run, propane is the most expensive, and the BG-GAT (passive) costs only refill lures and water.',
  },
  {
    question: 'Where can I buy Biogents and other CO2 mosquito traps in Canada?',
    answer: 'Amazon.ca carries the Biogents lineup (BG-Home, the BG-GAT trap kits, and BG-Booster/CO2 accessories) with the most reliable Canadian stock and shipping. Biogents also sells direct and through specialty pest-supply retailers. Big-box stores (Canadian Tire, Home Depot Canada, Costco) tend to stock propane traps and cheaper UV/CO2 combo units seasonally rather than the research-grade Biogents traps, so if you specifically want the BG design, order online. Always confirm you are getting the current model and a Canadian plug, and buy replacement BG-Lures at the same time so you are not caught without an attractant mid-season.',
  },
  {
    question: 'Are CO2 mosquito traps regulated by Health Canada or the PMRA?',
    answer: 'Yes. Schedule 1 of the federal Pest Control Products Regulations lists “Devices that are manufactured, represented or sold as a means to attract or destroy flying insects, or to attract and destroy them” among the devices that stay under the Pest Control Products Act, and the exemption for unregistered flying-insect devices applies only to devices certified to the CSA standard for high-voltage insect killers (bug zappers). Health Canada’s registry lists mosquito traps such as Mosquito Magnet Executive (Reg. No. 29944) and Mosquito Magnet Patriot Plus (Reg. No. 32375), and octenol lures such as Mosquito Magnet Octenol Mosquito Attractant (Reg. No. 28440). We found no Biogents trap or lure in it (October 28, 2026). Look for “Reg. No. … P.C.P. Act” on the box. Unlike a spray, a trap adds no residual pesticide to your yard.',
  },
  {
    question: 'CO2 trap vs professional barrier spray — which should a GTA homeowner choose?',
    answer: 'They work on different timelines and are genuinely complementary. A CO2 trap slowly draws down the biting-female population in its zone over 2–6 weeks and keeps working all season — it is a population tool. A professional barrier spray is applied to the shaded vegetation where mosquitoes rest on the day of the visit and re-applied through the season, and tick treatment can be added (no CO2 trap touches ticks). Before a BBQ or a wedding, spray is the tool to book. For chronic, all-summer pressure and a no-spray approach, a trap earns its place. The strongest setup for most Mississauga and GTA backyards is barrier spray for whole-yard treatment plus a Biogents trap or a cluster of GATs to keep pulling the population down between treatments.',
  },
  {
    question: 'Can a CO2 mosquito trap catch ticks too?',
    answer: 'No. Ticks do not fly and are not drawn to a CO2 plume the way host-seeking mosquitoes are — they quest by climbing vegetation and waiting for a host to brush past. A flying-insect suction trap simply never intercepts them. If ticks are your concern (and in the GTA, blacklegged/deer ticks carrying Lyme are a rising problem), you need a ground-level solution: a permethrin-based yard perimeter treatment, tick tubes, keeping grass short, and a professional tick program. BuzzSkito runs a dedicated tick barrier program at $597/season standalone or $497/season bundled with a mosquito plan. Do not expect any mosquito trap — CO2, propane, or UV — to reduce your tick load.',
  },
  {
    question: 'Do CO2 mosquito traps actually work?',
    answer: 'They catch mosquitoes; whether they stop bites is another matter. University of Wisconsin–Madison researchers write that studies confirm these traps catch mosquitoes, but that studies comparing yards with and without traps indicate traps bought by individual homeowners usually do not reduce human biting: Mosquito Magnets catch thousands of mosquitoes without changing biting rates in the yard. The exception they cite is an isolated Florida island with one dominant mosquito species, which was dramatically protected with Mosquito Magnets at one per acre. Treat a trap as one layer, with dumping standing water and repellent, not the whole plan.',
  },
  {
    question: 'Is the Biogents mosquito trap registered in Canada?',
    answer: 'We found no Biogents trap or lure in Health Canada’s pesticide registry when we searched it on October 28, 2026, by product and by registrant. That matters because the Pest Control Products Regulations keep devices that attract or destroy flying insects under the Pest Control Products Act. The propane Mosquito Magnet Executive (Reg. No. 29944) and Patriot Plus (Reg. No. 32375) are registered, as are several octenol lures. Whatever trap you buy, look for “Reg. No. … P.C.P. Act” on the box.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'CO2 mosquito traps in Canada: Biogents vs propane Mosquito Magnet, how each makes CO2, what research found about bites, and which traps are registered here.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('co2-mosquito-trap-canada')

export default function Co2MosquitoTrapCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A GTA pest-control operator’s guide to CO2 mosquito traps in Canada: Biogents vs propane, the no-tank electric advantage, and the BG-GAT.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'CO2 Mosquito Traps Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">CO2 Mosquito Traps Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A CO2 mosquito trap lures host-seeking female mosquitoes with carbon dioxide and a skin-scent lure, then a fan pulls them into a net. Propane traps such as Mosquito Magnet make their own CO2 and suit large lots; Biogents electric traps run on a lure with an optional CO2 cylinder, sized for a suburban yard. In Canada these traps are regulated devices, so look for a registration number before you buy, and expect a fuller net more than fewer bites.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Biogents BG-Mosquitaire (electric CO2 mosquito trap)" search="biogents mosquitaire mosquito trap" label="Best CO2 trap" />
      <TopBox tag={AMZ_TAG} name="Biogents BG-Mosquitaire (electric CO2 mosquito trap)" search="biogents mosquitaire mosquito trap" label="Best CO2 trap" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
              For most GTA backyards, an electric <strong>Biogents</strong> trap (BG-Home or <AmazonLink search="biogents mosquitaire mosquito trap" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">BG-Mosquitaire</AmazonLink>) is the best CO2 mosquito trap because it runs on a wall plug and a chemical lure with no propane tank, and it uses the same research-grade design mosquito scientists deploy. Propane traps like Mosquito Magnet cover larger acreage but require a mandatory 20 lb tank.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Electric Biogents traps (BG-Home, BG-Mosquitaire) run on a wall plug and the BG-Lure &mdash; no propane tank required.</li>
              <li>The BG-Sentinel design behind these consumer traps is the standard tool used in published mosquito-surveillance research.</li>
              <li>Propane traps (Mosquito Magnet style) pull mosquitoes across up to about 1 acre (4,000 m&#178;) but need a 20 lb tank swapped roughly every 3 weeks.</li>
              <li>Running an electric Biogents on the lure alone costs about $60&ndash;$120/season, versus $350&ndash;$550/season for a propane trap&rsquo;s fuel and cartridges.</li>
              <li>The passive BG-GAT uses zero power and kills egg-laying females &mdash; one gravid female cancels the 100&ndash;300 eggs she was about to lay.</li>
              <li>No CO2 mosquito trap catches ticks, because ticks do not fly to a CO2 plume.</li>
              <li>In Canada, devices sold to attract or destroy flying insects fall under the Pest Control Products Act: Health Canada&rsquo;s registry lists Mosquito Magnet Executive (Reg. No. 29944) and Patriot Plus (Reg. No. 32375), and we found no Biogents product in it.</li>
              <li>University of Wisconsin&ndash;Madison researchers report that traps bought by individual homeowners usually do not reduce biting, even when, like the Mosquito Magnet, they catch thousands of mosquitoes.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
            <div className="mt-4">
              <BuyLink search="biogents mosquitaire mosquito trap" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best CO2 Mosquito Traps in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Biogents BG-Mosquitaire (electric CO₂)',
                why: 'Research-grade airflow and the BG-Lure catch host-seeking females on a wall plug alone — no propane tank, with an optional CO₂ boost for heavy-pressure yards.',
                search: 'biogents mosquitaire mosquito trap',
                score: 9.0,
                featured: true,
                pros: ['No tank — runs on a plug + lure', 'Research-grade capture design', 'Low running cost'],
                cons: ['Covers a zone, not full acreage', 'Works over weeks, not same-day'],
              },
              {
                badge: 'Best for Patios',
                name: 'Biogents BG-Home',
                why: 'A very quiet plug-in unit sized for an indoor room or covered patio, using the same BG-Lure chemistry — ideal for tiger-mosquito hotspots close to where you sit.',
                search: 'biogents bg-home mosquito trap',
                score: 8.4,
                pros: ['Very quiet fan', 'Great for patios & indoors', 'No tank required'],
                cons: ['Smaller coverage zone', 'Needs lure refills'],
              },
              {
                badge: 'Best Passive',
                name: 'Biogents BG-GAT (Gravid Aedes Trap)',
                why: 'Zero power, zero CO₂ — it kills egg-laying Aedes females before they seed the next generation. Deploy in clusters of three or more for set-and-forget control.',
                search: 'biogents gat trap kit',
                score: 8.2,
                pros: ['No power or CO₂ needed', 'Kills egg-laying females', 'Perfect for cottages & off-grid'],
                cons: ['Best deployed in clusters', 'Targets Aedes specifically'],
              },
              {
                badge: 'Best for Acreage',
                name: 'Propane CO₂ Trap (Mosquito Magnet)',
                why: 'Burns propane for a strong CO₂ plume that reaches up to about 1 acre — the right call for rural lots and cottage country if you accept the tank and premium running cost.',
                search: 'mosquito magnet patriot plus',
                score: 7.6,
                pros: ['Reaches up to ~1 acre', 'Strong, steady CO₂ plume', 'Best for large rural lots'],
                cons: ['Mandatory 20 lb propane tank', 'Premium fuel + cartridge cost'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Normal suburban backyard?</strong> The <em>Best Overall</em> BG-Mosquitaire skips the tank and wins on running cost. <strong>Patio or indoor hotspot?</strong> The <em>Best for Patios</em> BG-Home is quiet and compact. <strong>Cottage or off-grid?</strong> A cluster of <em>Best Passive</em> BG-GATs needs no power. <strong>1+ acre rural lot?</strong> The <em>Best for Acreage</em> propane trap earns its reach — but for same-day, whole-yard relief that also kills ticks, nothing beats <Link href="/mosquito-control">professional barrier spray</Link>.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">CO2 Mosquito Trap Options — At a Glance</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Model / Type</th>
                  <th className="px-4 py-3 text-left">Coverage &amp; specs</th>
                  <th className="px-4 py-3 text-left">Power source</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Biogents BG-Home',
                    spec: 'Indoor room to a covered patio · very quiet fan · uses BG-Lure',
                    power: 'Plug-in (AC electric) · no tank',
                    best: 'Indoor rooms, covered patios, tiger-mosquito hotspots',
                  },
                  {
                    name: 'Biogents BG-Mosquitaire',
                    spec: 'A backyard zone / section of a suburban yard · optional CO2 boost',
                    power: 'Plug-in electric (+ optional CO2)',
                    best: 'Whole-patio and backyard barrier zones',
                  },
                  {
                    name: 'Biogents BG-GAT (Gravid Aedes Trap)',
                    spec: 'Localized · deploy in clusters of 3+ · water + infusion lure',
                    power: 'ZERO power (passive)',
                    best: 'Egg-laying Aedes females, cottages, off-grid sites',
                  },
                  {
                    name: 'BG-Booster / BG-CO2 add-on',
                    spec: 'Upgrade that adds a CO2 plume to a BG trap',
                    power: 'Compressed CO2 cylinder or sugar-yeast',
                    best: 'High-pressure yards near ravines, ponds, wetlands',
                  },
                  {
                    name: 'Propane CO2 trap (Mosquito Magnet etc.)',
                    spec: 'Up to ~1 acre (4,000 m²) · burns propane for CO2',
                    power: 'Propane tank + electric/battery',
                    best: 'Rural acreage, cottage country, large lots',
                  },
                ].map(({ name, spec, power, best }) => (
                  <tr key={name} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800">{name}</td>
                    <td className="px-4 py-3 text-gray-700">{spec}</td>
                    <td className="px-4 py-3 text-gray-700">{power}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Want maximum reach on a big rural lot instead? See our companion guide on <Link href="/blog/propane-mosquito-trap-canada" className="text-emerald-700 underline font-semibold">propane mosquito traps in Canada</Link> — propane trades convenience for coverage.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian models and prices on Amazon.ca:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="biogents bg-home mosquito trap">Check price on Amazon.ca</BuyLink>
            <BuyLink tag={AMZ_TAG} search="biogents gat trap kit">BG-GAT trap kit →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="biogents bg booster co2">CO2 booster →</BuyLink>
          </div>

          <h2>Why CO2 is the master mosquito cue</h2>
          <p>Every mosquito trap is trying to win the same race your own body enters every time you step outside: the competition to be the most obvious host. A host-seeking female locks onto a plume of carbon dioxide from up to 10 metres away, then closes the gap using body heat and the smell of your skin. We wrote a whole breakdown of that hunt in <Link href="/blog/what-attracts-mosquitoes-to-you">what attracts mosquitoes to you</Link> — but the short version is that CO2 is the long-range beacon. That is exactly why a CO2 mosquito trap can out-compete you: it pumps out a bigger, more convincing plume than a single person, and it never swats.</p>
          <Photo id="mosquito-bites-forearm" alt="Several swollen mosquito bites fusing together on a forearm" caption="Several swollen mosquito bites fusing together on a forearm (CDC photograph, 2024). Every bite comes from a host-seeking female, the mosquito a CO2 trap is built to draw in." />
          <p>The device follows a simple loop. Release CO2 and a skin-scent lure, let the plume drift downwind, and when a female flies upwind to investigate, a suction fan pulls her into a catch bag where she dehydrates within hours. The differences between traps come down to one question: <strong>how do you generate the CO2?</strong> Answer that, and you have basically chosen your trap.</p>

          <NextUp path="/blog/co2-mosquito-trap-canada" />
          <h2>The three ways a trap makes CO2 (and why it matters)</h2>
          <h3>1. Sugar &amp; yeast fermentation</h3>
          <p>The cheapest, greenest, and weakest method. Mix sugar, water, and yeast in a bottle and the fermentation exhales a trickle of CO2. It is the DIY-mosquito-trap staple all over YouTube. The problem: the output is tiny and inconsistent, it fades within days, and in the July heat it goes sour fast. It is a fun science-fair project, not a serious control tool. Biogents sells a managed sugar-yeast option as part of its CO2 booster line, which is more reliable than a pop-bottle rig but still modest.</p>
          <h3>2. Propane combustion</h3>
          <p>This is the Mosquito Magnet approach: burn propane through a catalytic converter and you get a strong, steady CO2 plume plus warmth and moisture — a very realistic fake human. The upside is reach: a good propane unit works across roughly an acre. The downside is that combustion is the entire mechanism, so the 20 lb tank is mandatory, and you will swap it about every three weeks all season, plus feed it attractant cartridges. If you want that reach, our <Link href="/blog/propane-mosquito-trap-canada">propane mosquito trap guide</Link> covers the models and the tank math in detail.</p>
          <h3>3. Electric fan + chemical lure (the Biogents way)</h3>
          <p>Here is the &lsquo;no tank required&rsquo; answer people are searching for. Biogents traps run on a wall plug and the BG-Lure — an artificial-skin attractant that reproduces the fatty acids, lactic acid, and ammonia your skin gives off. The fan and lure alone catch mosquitoes with <em>zero</em> CO2. You can optionally clip on the BG-Booster to add a compressed-CO2 cylinder or a managed sugar-yeast generator for heavy-pressure yards, but it is a boost, not a requirement. No combustion, no fuel runs, no tank storage — just a plug and a lure you replace every few months.</p>
          <p className="not-prose text-sm text-gray-600 mb-2">The lure is the part that runs out mid-season, and an expired cartridge is the most common reason a working trap stops catching. Buy the refill with the trap so you are not waiting on shipping in July.</p>
          <div className="not-prose mb-6">
            <BuyLink tag={AMZ_TAG} search="biogents bg-lure refill">Check BG-Lure refills on Amazon.ca →</BuyLink>
          </div>

          <h2>CO2 Traps Compared: Lures, Registration and What the Research Found</h2>
          <p>Two things decide a Canadian purchase that the shop pages skip: whether the trap and its lure are registered here, and what the trap can honestly do. Every cell below comes from the maker, Health Canada&rsquo;s registry or a university source, named under the table.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="min-w-[680px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Trap</th>
                  <th className="px-4 py-3 text-left">How it attracts</th>
                  <th className="px-4 py-3 text-left">In Health Canada&rsquo;s registry?</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Limits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Propane trap<br /><span className="font-normal text-xs text-gray-500">Mosquito Magnet Patriot Plus, Executive</span></td>
                  <td className="px-4 py-3 text-gray-700">Burns propane for a CO2 plume; octenol cartridge as an added lure</td>
                  <td className="px-4 py-3 text-gray-700">Yes: Patriot Plus Reg. No. 32375, Executive Reg. No. 29944; Mosquito Magnet Octenol Mosquito Attractant Reg. No. 28440</td>
                  <td className="px-4 py-3 text-gray-700">Large lots and cottage properties</td>
                  <td className="px-4 py-3 text-gray-700">Propane and cartridges to buy all season. UW&ndash;Madison: Mosquito Magnets catch thousands of mosquitoes without changing biting rates in the yard, and all 3 of theirs had stopped working by the end of the first year</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Biogents BG-Mosquitaire<br /><span className="font-normal text-xs text-gray-500">electric, outdoor</span></td>
                  <td className="px-4 py-3 text-gray-700">Fan plus BG-Sweetscent lure; optional CO2 from a cylinder through the BG-Booster</td>
                  <td className="px-4 py-3 text-gray-700">No Biogents product found (searched by product and registrant)</td>
                  <td className="px-4 py-3 text-gray-700">A suburban yard with an outlet</td>
                  <td className="px-4 py-3 text-gray-700">Biogents says BG-Sweetscent lasts up to 2 months; it uses the same formulation as the research BG-Lure</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Biogents BG-Home<br /><span className="font-normal text-xs text-gray-500">electric, indoor</span></td>
                  <td className="px-4 py-3 text-gray-700">Fan, warmth and BG-Sweetscent</td>
                  <td className="px-4 py-3 text-gray-700">No Biogents product found</td>
                  <td className="px-4 py-3 text-gray-700">Indoors; Biogents also lists covered patios, garages and screened porches</td>
                  <td className="px-4 py-3 text-gray-700">Biogents: &ldquo;designed to be placed indoors in your apartment or house&rdquo;</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Biogents BG-GAT</td>
                  <td className="px-4 py-3 text-gray-700">Water and egg-laying cues; females land on a sticky card. Biogents: it works &ldquo;without power, insecticides, or carbon dioxide&rdquo;</td>
                  <td className="px-4 py-3 text-gray-700">No Biogents product found</td>
                  <td className="px-4 py-3 text-gray-700">Egg-laying tiger mosquitoes, off-grid yards</td>
                  <td className="px-4 py-3 text-gray-700">Biogents: it &ldquo;does not attract mosquitoes looking for a blood meal&rdquo; and works best when it is the only breeding site</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">UV traps sold as CO2 traps<br /><span className="font-normal text-xs text-gray-500">titanium dioxide type</span></td>
                  <td className="px-4 py-3 text-gray-700">UV light on a coated insert, marketed as making CO2</td>
                  <td className="px-4 py-3 text-gray-700">No Dynatrap product found</td>
                  <td className="px-4 py-3 text-gray-700">&mdash;</td>
                  <td className="px-4 py-3 text-gray-700">UW&ndash;Madison measured no CO2 from the Dynatrap (unpublished results)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-xs text-gray-500 mb-4">Sources: Health Canada Pesticide Label Search, searched October 28, 2026; Pest Control Products Regulations, Schedule 1 (devices that attract or destroy flying insects stay under the Act); Biogents product pages for the BG-Home, BG-GAT and BG-Sweetscent; University of Wisconsin&ndash;Madison, <a href="https://mosquitosite.russell.wisc.edu/preventing-mosquito-bites/carbon-dioxide-baited-mosquito-traps" target="_blank" rel="noopener" className="underline">Carbon dioxide baited mosquito traps</a>, citing Kline (2006), Journal of the American Mosquito Control Association 22:490&ndash;496.</p>

          <h2>Why Biogents is the trap researchers actually use</h2>
          <p>This is the part that separates Biogents from the wall of generic &lsquo;electric CO2 mosquito killer&rsquo; boxes on Amazon.ca. The company&rsquo;s BG-Sentinel trap — the professional model behind the consumer BG-Home and BG-Mosquitaire — is a standard tool in academic mosquito surveillance. When public-health researchers need to count how many <em>Aedes</em> or <em>Culex</em> mosquitoes are in an area, the BG-Sentinel is one of the traps they set. The patented airflow and the BG-Lure were refined against real capture data, not a marketing brief.</p>
          <Photo id="culex-pipiens" alt="Northern house mosquito, Culex pipiens, photographed in Ontario" caption="A northern house mosquito, Culex pipiens, photographed in Ontario. Culex is one of the two groups researchers set BG-Sentinel traps to count." />
          <p>For a homeowner that pedigree matters in a concrete way: the consumer traps inherit the same airflow geometry and the same lure chemistry that earned the research trap its reputation. As GTA operators, we would rather point a customer to a design with peer-reviewed capture data behind it than to a no-name unit whose only evidence is a five-star review and a stock photo. No backyard trap is a silver bullet — but if you are going to buy one, buy the one with the science.</p>

          <h2>The BG-GAT: the quiet genius of the lineup</h2>
          <p>The single most interesting trap Biogents makes needs no power and no CO2 at all. The <strong>BG-GAT (Gravid Aedes Trap)</strong> hunts a very specific, very valuable target: the <em>gravid</em> female — a mosquito that has already bitten someone, is now carrying eggs, and is prowling for a place to lay them. You fill the GAT with water and a grass-infusion lure so it smells like the perfect breeding puddle. She enters through a funnel to lay, hits a sticky or insecticidal surface, and never comes back out.</p>
          <Photo id="aedes-albopictus-eggs" alt="Elongated eggs laid by an Asian tiger mosquito on paper" caption="Eggs laid by a female Asian tiger mosquito, on paper (CDC photograph). The BG-GAT is built to catch the female before she lays a batch like this." />
          <p>Why does that matter more than catching random flyers? Because you are removing the exact insects about to seed the next generation. Kill one gravid female and you cancel the 100–300 eggs she was about to lay. GATs are deployed in clusters — three or more around a property — and they are ideal for the situations where a plug-in trap is a pain: cottages, off-grid yards, dense garden beds. They are also aimed squarely at <em>Aedes</em> — the aggressive, daytime-biting container mosquitoes that shrug off dusk-focused tactics. For a cottage owner who wants set-and-forget control with no electricity, a GAT cluster is genuinely clever.</p>
          <div className="not-prose my-6">
            <BuyLink tag={AMZ_TAG} search="biogents gat trap kit">Check BG-GAT kits on Amazon.ca</BuyLink>
          </div>

          <RelatedLinks path="/blog/co2-mosquito-trap-canada" />
          <h2>Electric vs propane: the cost-per-season math</h2>
          <p>The convenience gap between electric and propane traps shows up hardest in the running cost across an Ontario season (roughly May through September — see <Link href="/blog/mosquito-magnet-canada">our Mosquito Magnet Canada breakdown</Link> for the propane side in full).</p>
          <ul>
            <li><strong>Propane trap:</strong> about 6 tank refills across the season at $25–$40 each, plus attractant cartridges every ~3 weeks. Budget roughly $350–$550/season in consumables on top of the device — and that is before the inconvenience of hauling tanks.</li>
            <li><strong>Electric Biogents (lure only):</strong> pennies of electricity per day plus a BG-Lure replacement every few months. Realistically $60–$120/season in consumables. No tanks, ever.</li>
            <li><strong>Electric Biogents + CO2 booster:</strong> add cylinder refills if you run compressed CO2; still no propane, and you only run the booster when pressure is high.</li>
            <li><strong>BG-GAT (passive):</strong> only water and refill lures — the cheapest of all to keep running.</li>
          </ul>
          <p className="not-prose text-sm text-gray-600 mb-2">If you are running a propane unit instead, the octenol attractant cartridge is the consumable people forget until the long weekend it runs out on. It is a separate purchase from the fuel.</p>
          <div className="not-prose mb-6">
            <BuyLink tag={AMZ_TAG} search="mosquito trap octenol attractant">Check octenol attractant cartridges →</BuyLink>
          </div>
          <p>For a standard 5,000–15,000 sq ft (465–1,400 m²) suburban lot in Mississauga or the wider GTA, the electric-plus-lure setup almost always makes more sense: lower running cost, no combustion, no tank storage in the garage. Propane only pulls ahead when raw coverage on a 1+ acre lot is the priority. If you are still weighing the whole category — UV, propane, electric, and everything else — our <Link href="/blog/best-mosquito-trap">best mosquito trap in Canada guide</Link> ranks them head-to-head.</p>

          <h2>Where to place a CO2 trap in an Ontario yard</h2>
          <ul>
            <li><strong>Away from where you sit</strong> — 3–10 m (10–30 ft) from the patio so the trap intercepts mosquitoes before they reach you, not in the middle of your gathering.</li>
            <li><strong>In shade, near vegetation</strong> — mosquitoes rest in cool, humid, shaded spots during the day; place the trap on the edge of that resting habitat.</li>
            <li><strong>Out of strong wind</strong> — a stiff breeze shreds the CO2 plume. Tuck the trap into a sheltered pocket of the yard.</li>
            <li><strong>Run it continuously</strong> — traps are a population tool. Switching them off for a week lets the numbers rebound. Set it and leave it from May to September.</li>
            <li><strong>Deploy GATs in clusters</strong> — one GAT is a data point; three or more around the yard perimeter is a control strategy.</li>
          </ul>

          <h2>Buyer&rsquo;s Checklist for a CO2 Mosquito Trap in Canada</h2>
          <ul>
            <li><strong>Look for &ldquo;Reg. No. ____ P.C.P. Act&rdquo;</strong> on the trap and on any lure. Traps that attract flying insects stay under the Pest Control Products Act, and octenol lures are registered products too.</li>
            <li><strong>Match the CO2 source to the property.</strong> Propane for a large lot or cottage; an electric lure trap, with or without a CO2 cylinder, for a suburban yard with an outlet.</li>
            <li><strong>Count the refills before you buy:</strong> propane and octenol cartridges for a propane trap, a scent lure about every 2 months for a Biogents trap, cylinders if you add CO2.</li>
            <li><strong>Plan the spot:</strong> 3&ndash;10 m from where you sit, in shade, out of the wind, and switched on for the whole season.</li>
            <li><strong>Empty the standing water first.</strong> Biogents says its egg-laying trap works best when it is the only breeding site in the yard.</li>
            <li><strong>Judge it by bites, not by the bag.</strong> A full catch net does not prove fewer bites; university studies of homeowner traps found biting usually did not drop.</li>
          </ul>

          <h2>Traps vs professional barrier spray: use both</h2>
          <p>A CO2 trap and a professional barrier spray are not rivals — they cover different timelines. The trap slowly draws the biting-female population down inside its zone and keeps working all season. The barrier spray treats the shaded leaf surfaces where mosquitoes rest and is re-applied through the season. Only one of them has a tick option, and it is the spray — no CO2 trap catches ticks, because ticks do not fly to a plume.</p>
          <p>The strongest real-world setup we see in GTA backyards is a professional barrier spray for whole-yard treatment plus a Biogents trap or a GAT cluster to keep pulling the population down between treatments. If ticks are also on your radar — and in Mississauga and Halton they should be — a trap does nothing for them; that is a job for a permethrin perimeter or a dedicated tick program.</p>
          <p className="not-prose text-sm text-gray-600 mb-2">One cheap thing worth having in the drawer either way: a fine-point tick remover. Ticks come off cleanest with a proper hook or pointed tweezers rather than whatever is in the junk drawer, and you want it before you need it, not after.</p>
          <div className="not-prose mb-6">
            <BuyLink tag={AMZ_TAG} search="tick remover tool">Check tick removal tools on Amazon.ca →</BuyLink>
          </div>

          <h2>Bottom line for Canadian buyers in 2026</h2>
          <p>If you want a CO2 mosquito trap and you have a normal suburban yard, buy an electric Biogents unit and skip the tank entirely — the running cost is a fraction of propane and the capture design has real research behind it. If you have a cottage or a 1+ acre rural lot, a propane trap&rsquo;s reach or a cluster of passive BG-GATs is the better fit. And whatever trap you run, pair it with a professional barrier spray for the whole yard, and a separate tick strategy if blacklegged ticks are in your area.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/propane-mosquito-trap-canada">Propane Mosquito Traps in Canada — Bigger Coverage, More Fuel</Link></li>
            <li><Link href="/blog/best-mosquito-trap">Best Mosquito Trap in Canada — Every Type Ranked</Link></li>
            <li><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/what-attracts-mosquitoes-to-you">What Attracts Mosquitoes to You</Link></li>
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

      <ReadNext path="/blog/co2-mosquito-trap-canada" standalone />
    </>
  )
}
