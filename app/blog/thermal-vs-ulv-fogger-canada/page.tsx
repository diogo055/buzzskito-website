import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import TopBox from '@/components/TopBox'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import AdjacentPestCTA from '@/components/AdjacentPestCTA'
import { tagForSlug } from '@/lib/amazon-clusters'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'

const SLUG = 'thermal-vs-ulv-fogger-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-10-28'
const TITLE = 'Thermal vs ULV Fogger Canada 2026 — Droplet Size, Use Case & Which to Buy'
// TITLE NOTE (Oct 28, 2026): was 'Thermal vs ULV Fogger Canada 2026: Which to Buy'; top queries (Jul 28-Oct 25): ulv fogger 23 (pos 35.3), ulv fogging 8, what is a ulv fogger 6 (pos 12.8, 1 click), ultra low volume fogging 1. 'ULV cold fogger' and 'cold fogger' stay with /blog/best-ulv-cold-fogger-canada; this page answers what ULV is and how it differs from thermal.
const META_TITLE = 'Thermal vs ULV Fogger Canada: What Is ULV?'

const FAQS = [
  {
    question: 'What is the difference between a thermal fogger and a ULV fogger?',
    answer: 'A thermal fogger uses heat — a propane flame or an electric coil — to flash a liquid into a dense, visible cloud; the Burgess and Fountainhead electric fogger manuals put its particles at an average of 15 microns. A ULV (ultra-low volume) fogger, sometimes called a cold fogger, uses a high-pressure air stream from a motor to break liquid into a nearly invisible mist, with adjustable droplets typically around 5 to 50 microns. The practical result: thermal makes a thick fog that penetrates dense outdoor spaces and drifts a long way, while ULV makes a controllable, low-drift mist you can dial in and, with a product whose label allows it, use indoors. The heat-versus-air distinction is the whole story — everything else follows from it.',
  },
  {
    question: 'Which produces smaller droplets, thermal or ULV?',
    answer: 'On the makers’ own figures the two overlap more than most guides admit. The Burgess and Fountainhead electric thermal fogger manuals give an average of 15 microns — small enough to hang in the air as a dense fog and drift into vegetation, cracks, and voids — and some retailers quote thermal fog far finer, a figure we could not find from a maker. A ULV cold fogger like a PetraTools unit spans roughly 5 to 50 microns, and a Canadian barn-fogging label we read (Bugwacker, Reg. No. 22563) calls for ULV equipment with 15 to 25 micron droplets; the ULV’s key advantage is that the droplet size is adjustable at the nozzle. So the real difference is control — you can set a ULV to a fine 15-micron space fog or a wetter 40-micron surface application, whereas a thermal fogger’s only adjustment is how fast you pump (too fast gives a wet fog, the Burgess manual says).',
  },
  {
    question: 'Why does droplet size matter so much when fogging?',
    answer: 'Droplet size decides where your solution ends up. Very fine droplets below about 15 microns stay airborne for a long time, drift on air currents, and are ideal for filling a space or reaching flying insects and hidden voids — but they wet surfaces poorly and drift off-target easily. Mid-range droplets around 20 to 30 microns settle in a reasonable time and coat both air and nearby surfaces, which is the sweet spot for disinfection and general insect work. Larger droplets above 40 microns fall fast and wet surfaces like a light spray, giving better residual coverage but little airborne reach. Matching droplet size to the job is the single most important fogging decision, which is exactly why the adjustable ULV appeals to so many buyers.',
  },
  {
    question: 'Can you use a thermal fogger indoors?',
    answer: 'Generally, no — and this is one of the biggest reasons buyers choose ULV instead. Thermal foggers run on an open propane flame or a very hot electric element, produce a huge volume of dense visible fog, and usually rely on oil-based carriers, all of which make them a poor and often unsafe choice for enclosed indoor spaces. The fog can set off smoke alarms, reduce visibility to near zero, leave an oily film, and the heat source is a fire consideration in a confined room. ULV cold foggers, by contrast, run cold, use water-based solutions, and put out a controllable low-volume mist, which is why they became the standard tool for indoor disinfection, mould remediation, and odour work.',
  },
  {
    question: 'Is a Longray thermal fogger or a PetraTools ULV fogger better?',
    answer: 'They are built for different jobs, so the honest answer is: it depends on where and what you are fogging. A Longray-style gas thermal fogger is the specialist tool for large outdoor areas and dense vegetation — its ultra-fine, high-volume fog penetrates shrubs, tree lines, barns, and greenhouses better than anything else, and the visible cloud confirms your coverage. A PetraTools-style electric ULV fogger is the versatile all-rounder — it handles indoor disinfection, greenhouses, and light outdoor work, runs on battery or cord with no flame, uses water-based products, and lets you adjust droplet size. For most buyers who want one machine that does the widest range of jobs, the ULV is the better default; for pure large-area outdoor knockdown, thermal wins.',
  },
  {
    question: 'What carrier liquids can each fogger use — oil or water?',
    answer: 'Traditional thermal foggers are designed primarily for oil-based (or specialised fog-fluid) carriers, because the heat needs a carrier that vaporizes cleanly into a persistent visible fog; running plain water through a hot thermal fogger produces a thin, short-lived steam rather than a proper fog. Some modern thermal units accept both oil and water-based solutions, but oil-based is where they shine. ULV cold foggers are built for water-based solutions — disinfectants, water-diluted insecticide concentrates, sanitizers, and deodorizers — because they shear the liquid mechanically rather than boiling it. Always match the carrier to the machine and, critically, to what the product label permits.',
  },
  {
    question: 'How big an area can each type of fogger cover?',
    answer: 'It depends on the size of the machine more than on the method. Among handheld units, a gas thermal fogger aerosolizes a high volume of liquid into a fog that travels on the air, so it can treat a large yard, an orchard row, a barn, or a greenhouse quickly, while a small handheld ULV covers rooms, vehicles and targeted outdoor patches. At program scale it flips: the US EPA says mosquito-control ULV sprays are applied by aircraft or by truck-mounted sprayers, the method state and local agencies use to treat whole areas. If your job is measured in acres of open or vegetated land with a handheld machine, lean thermal; if it is measured in rooms or a modest yard, a ULV is plenty.',
  },
  {
    question: 'Are foggers regulated in Canada, and does the machine need registration?',
    answer: 'The fogger itself is a device, not a pesticide, so the machine does not require PMRA (Health Canada Pest Management Regulatory Agency) registration — you can freely buy a thermal or ULV fogger in Canada. What is regulated is the product you put through it. Any insecticide, disinfectant, or sanitizer you fog must be registered for use in Canada and legal to apply by fogging: pesticides need a PCP registration number and disinfectants need a DIN, and you must follow the label, including whether fogging is an approved application method. This is where many US-bought concentrates fall down — a product legal south of the border may not be PMRA-registered here, so it is not the right choice no matter how good the fogger is.',
  },
  {
    question: 'Should I buy a battery ULV fogger or a corded one?',
    answer: 'It comes down to where you work and how long you fog at a stretch. A cordless battery ULV fogger — the format PetraTools is known for — gives you the freedom to walk a whole property, a greenhouse, or multiple rooms without hunting for outlets, at the cost of runtime limits and the need to manage charged batteries. A corded ULV fogger never stops for a battery and is well suited to a fixed indoor space, a commercial cleaning routine, or long continuous sessions where an outlet is always in reach. If your work is mobile and varied, buy cordless (and a spare battery); if it is stationary and long-running, corded is simpler and cheaper.',
  },
  {
    question: 'Do I need a mask or PPE when fogging?',
    answer: 'Yes — regardless of which fogger you choose, treat the fine aerosol as something you must not breathe. Because both thermal and ULV foggers create droplets small enough to inhale deep into the lungs, the label on whatever you are applying will specify respiratory protection, eye protection, and often gloves and coveralls. Fine aerosols hang in the air far longer than a coarse spray, so ventilation timing and re-entry intervals on the product label matter as much as the mask. Never fog a space you or others will occupy without following the product label re-entry guidance, and never assume a water-based product is harmless just because it is not oil-based.',
  },
  {
    question: 'Can one fogger do both indoor disinfection and outdoor insect control?',
    answer: 'A ULV cold fogger is the closest thing to a do-everything machine, which is a big part of why it outsells thermal for general buyers. Because it runs cold, uses water-based products, and lets you adjust droplet size, a single quality ULV unit can disinfect a room at one setting and knock down insects in a small yard or greenhouse at another. A thermal fogger cannot really cross over the other way — it is superb outdoors but impractical and often unsafe indoors. So if versatility across indoor and outdoor jobs is your priority, the ULV is the one machine to own; buy a thermal fogger only when large-area outdoor penetration is the specific problem you need solved.',
  },
  {
    question: 'What is a ULV fogger?',
    answer: 'ULV stands for ultra-low volume: a machine that puts out a small amount of liquid as very fine droplets, using an air stream from a motor rather than heat. The US EPA describes ULV sprayers as dispensing “very fine aerosol droplets that stay aloft and kill flying mosquitoes on contact”, typically at less than 3 ounces per acre, and says mosquito programs apply them by aircraft or from truck-mounted sprayers. Handheld and backpack ULV foggers are the small version, used to disinfect rooms and treat barns and greenhouses with products whose labels allow fogging.',
  },
  {
    question: 'Is thermal or ULV fogging better for mosquitoes?',
    answer: 'For a mosquito program, ULV: the US EPA describes truck and aircraft ULV sprays that kill flying mosquitoes on contact, and a mosquito fogging insecticide on Health Canada’s register is named for ULV, Pyrocide Fogging Formula 7067 for ULV Mosquito Adulticiding (Reg. No. 13378), a commercial-class product. For a homeowner in Canada we found no legal liquid for a thermal machine: every product named for thermal foggers is historical, no current domestic product is named for ULV, and RVD2023-06 says to prohibit handheld fogging equipment on domestic pyrethrin liquid labels, although one current domestic label, Green Earth Bio-Mist Insect Killer (Reg. No. 23300), still names “a non-thermal fogger or mister”. The simplest registered homeowner option is an aerosol patio fogger.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'What a ULV fogger is and how it differs from a thermal fogger: heat vs air, droplet size, indoor use, and what Canada allows you to put in either one.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('thermal-vs-ulv-fogger-canada')

export default function ThermalVsUlvFoggerCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian comparison of thermal vs ULV foggers — droplet size, coverage, indoor vs outdoor use, carrier liquid, safety, and which to buy, with a Longray thermal vs PetraTools ULV verdict.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Thermal vs ULV Fogger Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Thermal vs ULV Fogger</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl"><strong className="text-white">Short answer:</strong> a thermal fogger heats an oil-based liquid into a dense, visible fog for outdoor vegetation; a ULV (ultra-low volume) fogger uses an air stream to break liquid into fine droplets with no flame, which is why it is the machine you can use indoors and the one mosquito programs run from trucks and aircraft. Most buyers should own the ULV. In Canada the liquid decides what you may do: the registered fogging insecticides are mostly commercial class, we found no current homeowner product labelled for a thermal fogger, and the one homeowner concentrate we found that names a fogger (Green Earth Bio-Mist, Reg. No. 23300) names a non-thermal fogger or mister, not a thermal one.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="PetraTools cordless ULV cold fogger" search="petratools ulv cordless fogger" label="Best all-round pick" />
      <TopBox tag={AMZ_TAG} name="PetraTools cordless ULV cold fogger" search="petratools ulv cordless fogger" label="Best all-round pick" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">A <strong>thermal fogger</strong> uses heat to make a dense, visible fog (its makers give an average of 15 microns) that penetrates dense outdoor spaces &mdash; think a <strong>Longray</strong> gas unit. A <strong>ULV cold fogger</strong> uses an air stream to make an adjustable, low-drift mist (roughly 5&ndash;50 microns) with no flame, so it can work indoors with a product whose label allows it &mdash; think a <strong>PetraTools</strong> electric unit. For pure large-area outdoor knockdown, buy thermal. For a versatile machine that does indoor disinfection and light outdoor work, the ULV is the better default &mdash; and it is the one most buyers should own.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Thermal = heat + oil-based carrier + ultra-fine fog; ULV = cold air shear + water-based + adjustable droplets.</li>
              <li>Thermal fog drifts the most; ULV lets you dial droplet size to the job (on the makers&rsquo; figures, the sizes overlap).</li>
              <li>A handheld thermal unit covers more ground outdoors; a ULV runs with no flame indoors, where both thermal fogger manuals forbid their machines.</li>
              <li>Droplet size decides everything: under 15 microns floats and drifts, over 40 microns wets surfaces.</li>
              <li>The fogger is just a device &mdash; what you fog must be PMRA-registered (or carry a DIN) and legal to fog in Canada; the registered fogging insecticides are mostly commercial class.</li>
              <li>Want one machine for the widest range of jobs? A cordless ULV cold fogger is the all-rounder.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="the flies, mould, and general pests people buy foggers for" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Thermal & ULV Foggers for Canadian Buyers"
            awards={[
              {
                badge: 'Best All-Round',
                name: 'PetraTools Cordless ULV Cold Fogger',
                why: 'The most versatile machine to own: it runs cold on water-based products, adjusts droplet size at the nozzle, and moves between indoor disinfection, greenhouses, and light outdoor work on battery power. For buyers who want one fogger that does the widest range of jobs, this is it.',
                search: 'petratools ulv cordless fogger',
                score: 8.9,
                featured: true,
                pros: ['Cold operation: no flame or heated coil', 'Adjustable droplet size', 'Cordless — walk the whole property'],
                cons: ['Less outdoor reach than thermal', 'Battery runtime to manage'],
              },
              {
                badge: 'Best Outdoor Penetration',
                name: 'Longray Gas Thermal Fogger',
                why: 'The specialist tool for large outdoor areas and dense vegetation. Its ultra-fine, high-volume fog drives deep into shrubs, tree lines, barns, and greenhouses, and the visible cloud confirms your coverage where a ULV mist would vanish.',
                search: 'longray thermal fogger',
                score: 8.6,
                pros: ['Unmatched outdoor penetration', 'Huge area coverage per pass', 'Visible fog confirms coverage'],
                cons: ['Not for indoor use', 'Propane + oil-based carrier logistics'],
              },
              {
                badge: 'Best Corded ULV',
                name: 'Corded Electric ULV Fogger',
                why: 'For a fixed indoor space or a long commercial cleaning routine, a corded ULV never stops for a battery. Same cold, water-based, adjustable-droplet operation as the cordless pick, with unlimited runtime wherever an outlet is in reach.',
                search: 'corded electric ulv fogger disinfectant',
                score: 8.1,
                pros: ['Unlimited runtime on mains', 'Ideal for stationary indoor work', 'Simple and lower cost'],
                cons: ['Tethered to an outlet', 'Less mobile than cordless'],
              },
              {
                badge: 'Best Value Entry',
                name: 'Compact Handheld ULV Fogger',
                why: 'A wallet-friendly cold fogger for rooms, vehicles, and small jobs. Lighter output and a smaller tank than the pro units, but a genuine adjustable ULV that covers occasional disinfection and small-space insect work without the premium price.',
                search: 'handheld ulv fogger machine',
                score: 7.3,
                pros: ['Affordable entry point', 'Light and easy to handle', 'Still adjustable and cold-running'],
                cons: ['Small tank and lower output', 'Not for large areas'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Want one machine that does the most jobs?</strong> The <em>Best All-Round</em> cordless ULV is the default buy &mdash; cold-running with no flame, adjustable, and mobile. <strong>Fogging acreage, dense vegetation, or barns?</strong> The <em>Best Outdoor Penetration</em> Longray thermal is the specialist that nothing else replaces. <strong>Long stationary indoor sessions?</strong> The <em>Best Corded ULV</em> never stops for a battery. <strong>Occasional small-space use on a budget?</strong> The <em>Best Value Entry</em> handheld ULV covers it.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Thermal vs ULV · Head to Head · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Thermal Fogger vs ULV Cold Fogger — The Honest Comparison</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Both machines turn liquid into fog, but they do it in opposite ways and suit opposite jobs. Here is how they compare on the factors that actually decide the purchase, with a live Amazon.ca availability check for each type.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Thermal fogger <span className="font-normal text-brand-200">(Longray)</span></th>
                  <th className="px-4 py-3 text-left">ULV cold fogger <span className="font-normal text-brand-200">(PetraTools)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">How it works</td>
                  <td className="px-4 py-3 text-gray-700">Heat (flame or coil) flash-vaporizes liquid into fog</td>
                  <td className="px-4 py-3 text-gray-700">High-pressure air shears liquid into a cold mist</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Droplet size</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Fine</strong> &mdash; averages 15 microns (makers&rsquo; manuals); set only by how fast you pump</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Adjustable</strong> &mdash; ~5&ndash;50 microns, dial-in</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Indoor use</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">No</strong> &mdash; heat, oil film, smoke-alarm risk</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; no flame; only with a product whose label allows it</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Outdoor coverage</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best handheld</strong> &mdash; wide area, deep penetration</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Handheld: smaller patches</strong> &mdash; but truck and aircraft ULV is how mosquito programs treat whole areas (US EPA)</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Carrier liquid</td>
                  <td className="px-4 py-3 text-gray-700">Mainly oil-based fog fluids</td>
                  <td className="px-4 py-3 text-gray-700">Water-based solutions</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Power</td>
                  <td className="px-4 py-3 text-gray-700">Propane / gas or hot electric coil</td>
                  <td className="px-4 py-3 text-gray-700">Battery (cordless) or corded electric</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Relative price</td>
                  <td className="px-4 py-3 text-gray-700">Premium &mdash; specialist outdoor tool</td>
                  <td className="px-4 py-3 text-gray-700">Broad range &mdash; budget to professional</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Best for</td>
                  <td className="px-4 py-3 text-gray-700">Acreage, vegetation, barns, greenhouses</td>
                  <td className="px-4 py-3 text-gray-700">Disinfection, indoors, versatility, small yards</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Availability</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="longray thermal fogger" block>Check price on Amazon.ca →</BuyLink></td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="petratools ulv cordless fogger" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            A fogger is a device, not a pesticide &mdash; neither type requires PMRA registration to buy. What you fog through it, however, must be a product authorized in Canada (a PCP number for pesticides, a DIN for disinfectants) applied strictly to its label. For insects, the registered fogging-machine liquids we found are commercial class, apart from one homeowner concentrate (Green Earth Bio-Mist, Reg. No. 23300) whose label allows a non-thermal fogger or mister.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ The machine is the easy part.</strong> The wrong droplet size or an unregistered concentrate wastes product and can be unsafe or illegal to apply. Choose the fogger for where you work &mdash; then choose a PMRA-legal product and follow its label. For a backpack-style liquid applicator instead of a fogger, see our <Link href="/blog/backpack-sprayer-canada" className="text-emerald-700 underline font-semibold">backpack sprayer guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Thermal vs ULV Fogger: What Actually Separates Them</h2>
          <p>Strip away the marketing and the thermal-versus-ULV choice reduces to one physical difference: <strong>how the machine turns liquid into fog</strong>. A thermal fogger uses <em>heat</em> &mdash; a propane flame or a glowing electric coil &mdash; to flash the carrier liquid into vapour that instantly condenses into a dense, visible cloud of ultra-fine droplets. A ULV (ultra-low volume) fogger uses <em>cold air</em> &mdash; a powerful motor drives a high-pressure air stream that mechanically shears the liquid into a mist at the nozzle. Heat versus air. Everything else about these machines &mdash; droplet size, where you can use them, what liquids they take, how much they cost &mdash; flows directly from that one design decision.</p>
          <p>That is why there is no single &ldquo;better&rdquo; fogger, only a better fit for your job. A <Link href="/blog/best-gas-backpack-fogger-canada">gas thermal fogger</Link> like a Longray is a specialist built to blanket large outdoor areas with penetrating fog. A ULV cold fogger like a PetraTools unit is a generalist built to apply water-based products precisely, indoors or out. The rest of this guide walks through the factors that decide which one belongs in your shed, then names the pick that suits the most buyers.</p>

          <QuickIdTable
            title="Thermal vs ULV fogger: what the makers and regulators say"
            head={['Question', 'Thermal fogger', 'ULV (cold) fogger']}
            rows={[
              ['How it makes fog', 'Heat: a propane burner or electric element vaporizes the liquid in a hot coil', 'Air: a motor-driven air stream breaks the liquid into droplets at the nozzle, no heat'],
              ['Droplet size, makers’ figures', 'Averages 15 microns; mist droplets are 50–125, spray droplets over 125', 'Adjustable; a Canadian barn-fogging label calls for ULV equipment with 15–25 micron droplets'],
              ['Liquid', 'Oil-based: both thermal manuals say not to use materials designed to be mixed with water', 'Whatever the product label allows for fogging'],
              ['Indoors', 'Never: both manuals forbid indoor use (open flame or hot coil, concentrated fog)', 'Possible, with a product whose label allows fogging there'],
              ['Mosquito programs', 'Not described on the US EPA’s adult-mosquito page', 'US EPA: ULV droplets “stay aloft and kill flying mosquitoes on contact”; applied by aircraft or truck-mounted sprayers'],
              ['Insecticides on Canada’s record', 'Every product named for thermal foggers is historical; the domestic Black Flag Fog Insecticide (28121) was cancelled in 2017', 'Commercial class, e.g. Pyrocide Fogging Formula 7067 for ULV Mosquito Adulticiding (13378) and Bugwacker Fogging Solution (22563, barns)'],
              ['A homeowner insecticide for it', 'None current that we found', 'One we found: Green Earth Bio-Mist Insect Killer (23300, domestic) names “a non-thermal fogger or mister”, although RVD2023-06 says to prohibit handheld fogging equipment on domestic pyrethrin liquid labels'],
            ]}
            caption={<>From The Fountainhead Group&rsquo;s Burgess propane (No. 161856) and electric (No. 180557) insect fogger manuals; the approved label for Bugwacker Fogging Solution (Reg. No. 22563); the US EPA&rsquo;s <a href="https://www.epa.gov/mosquitocontrol/controlling-adult-mosquitoes" target="_blank" rel="noopener noreferrer" className="underline">Controlling Adult Mosquitoes</a> (updated September 29, 2026); Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">Pesticide Product Information Database</a>, searched by product name on October 28, 2026; and <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/pesticides-pest-management/decisions-updates/reevaluation-decision/2023/pyrethrins.html" target="_blank" rel="noopener noreferrer" className="underline">RVD2023-06</a>. A name search finds products by name only, so read the label of any product you consider.</>}
          />

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the two types:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="longray thermal fogger">Longray thermal fogger →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="petratools ulv cordless fogger">PetraTools ULV fogger →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="handheld ulv fogger machine">Handheld ULV fogger →</BuyLink>
          </div>

          <NextUp path="/blog/thermal-vs-ulv-fogger-canada" />
          <h2>Droplet Size: The Number That Decides Everything</h2>
          <p>If you understand nothing else about fogging, understand droplet size, because it dictates where your solution lands and therefore whether the job works. Fog droplets are measured in microns (millionths of a metre), and the size band you choose changes the physics entirely:</p>
          <ul>
            <li><strong>Under ~15 microns &mdash; airborne, drifting fog.</strong> These droplets hang in the air for a long time, follow air currents, and drift into voids, foliage, and cracks. Ideal for filling a space or reaching flying insects; poor at wetting surfaces and prone to drifting off-target. Thermal fog, which its makers put at an average of 15 microns, sits at the top of this band.</li>
            <li><strong>~20&ndash;30 microns &mdash; the balanced middle.</strong> Settles in a reasonable time, coats both the air and nearby surfaces. The sweet spot for indoor disinfection and general insect work &mdash; and a common default ULV setting.</li>
            <li><strong>Over ~40 microns &mdash; wetting, near-spray.</strong> Falls quickly and coats surfaces like a light spray, giving better residual coverage but little airborne reach. The wet end of a ULV&rsquo;s adjustable range.</li>
          </ul>
          <p>A thermal fogger stays at the fine end &mdash; the Burgess and Fountainhead electric fogger manuals give an average of 15 microns, and its only adjustment is how fast you pump &mdash; which is exactly what makes it a penetration and coverage champion outdoors, and exactly what makes it drift-prone and unsuitable indoors. A ULV cold fogger spans a wider range, roughly 5 to 50 microns, and its decisive advantage is that <strong>you adjust the droplet size at the nozzle</strong>. That single dial is why one ULV machine can disinfect a room at a fine setting in the morning and knock down insects in the greenhouse at a wetter setting in the afternoon. On the makers&rsquo; figures the fine ends overlap; ULV wins on control.</p>

          <h2>Thermal Foggers: Built for the Great Outdoors</h2>
          <p>A gas thermal fogger is the tool you reach for when the problem is <em>big and outside</em>. Because heat flash-vaporizes the carrier, a thermal unit like a Longray produces an enormous volume of ultra-fine fog that behaves almost like smoke &mdash; it rolls into dense shrubs, along tree lines, through barns and greenhouses, and into the harbourage that a coarser mist never reaches. The fog is visible, which is genuinely useful: you can see exactly where your coverage is going and where it thins out. For orchards, large yards, agricultural buildings, and any sizeable vegetated area, nothing consumer-grade matches thermal for penetration and area-per-minute.</p>
          <Photo
            id="culex-quinquefasciatus-male"
            alt="A male southern house mosquito with bushy antennae resting on a flower"
            caption="A male southern house mosquito, Culex quinquefasciatus, resting on a flower (CDC photograph). Mosquitoes rest in vegetation like this, the harbourage a drifting thermal fog is meant to reach."
          />
          <p>The trade-offs are the flip side of those strengths. Thermal foggers usually run on propane or a very hot coil and are designed around oil-based fog fluids, which means an open heat source, fuel to manage, and an oily residue you would never want indoors. The dense fog can reduce visibility to near zero and will trip smoke alarms in an enclosed space. And that ultra-fine, drifting cloud demands attention to wind and neighbouring properties. These are outdoor machines, full stop &mdash; superb at their job and impractical outside it. If your fogging is essentially a mobile outdoor liquid application, also weigh a <Link href="/blog/best-gas-backpack-fogger-canada">gas backpack fogger</Link> and, for reference on the fuel question, our <Link href="/blog/propane-vs-electric-fogger-canada">propane vs electric fogger comparison</Link>.</p>

          <h2>ULV Cold Foggers: The Versatile All-Rounder</h2>
          <p>A ULV cold fogger is the machine most buyers should look at first, precisely because it refuses to be a specialist. Running cold on water-based solutions with no flame, it can be used indoors with a product whose label allows it, which is why ULV became the default tool for the wave of disinfection, sanitizing, mould-remediation, and odour-control work that a thermal fogger simply cannot touch. Dial the nozzle to a fine mist and it fills a room with disinfectant; open it up to a wetter setting and it lays down a coating on surfaces or knocks down insects in a small greenhouse or yard. One machine, many jobs, no flame.</p>
          <Photo
            id="aedes-albopictus-goldenrod"
            alt="An Asian tiger mosquito on sweet goldenrod flowers"
            caption="An Asian tiger mosquito, Aedes albopictus, adult female on sweet goldenrod flowers; the observer says it appeared to be feeding on nectar (The Plains, Ohio). The US EPA says ULV droplets stay aloft and kill flying mosquitoes on contact."
          />
          <p>PetraTools built its reputation on cordless ULV units, and the battery format is a real advantage for anyone who moves around &mdash; you can walk an entire property, a multi-room building, or a greenhouse without dragging a cord or hunting for an outlet. The cost is the usual cordless tax: runtime limits and batteries to keep charged. A corded ULV trades that mobility for unlimited runtime, which suits a fixed indoor space or a long commercial cleaning routine better. Either way, the ULV&rsquo;s honest limitation is outdoor reach: its coarser, lower-volume mist will not blanket acreage or drive deep into a hedgerow the way a thermal fog does. For most homeowners and small operators, though, that ceiling is far above what they will ever need.</p>

          <TopPick tag={AMZ_TAG}
            label="Overall Pick for Most Buyers"
            name="PetraTools-style Cordless ULV Cold Fogger"
            blurb="For the widest range of jobs with the fewest compromises, a cordless ULV cold fogger is the one to own. It runs cold, with no flame or heated coil (so it can work indoors where a product’s label allows), uses water-based products, lets you dial droplet size from a fine disinfecting mist to a wetter surface coat, and goes cordless so you can cover a whole property. It gives up outdoor penetration to a thermal fogger — but unless large-area vegetation is your specific problem, its versatility wins. Buy a Longray-style thermal fogger as a second, specialist machine only when acreage and dense foliage demand it."
            search="petratools ulv cordless fogger"
            score={8.9}
            pros={['Cold operation on water-based products, no flame', 'Adjustable droplet size for many jobs', 'Cordless mobility across a whole property', 'Broad price range from entry to professional']}
            cons={['Less outdoor reach and penetration than thermal', 'Battery runtime to plan around']}
          />

          <RelatedLinks path="/blog/thermal-vs-ulv-fogger-canada" />
          <h2>How to Choose: Sizing and What You Are Actually Paying For</h2>
          <p>Foggers span a wide price range, and on the high-ticket end it is worth being clear about which features earn their cost for <em>your</em> job versus which are premium you can skip. Work through these in order:</p>
          <ul>
            <li><strong>Where you fog (decide this first).</strong> Indoors or mixed indoor/outdoor points to ULV; large outdoor or vegetated areas points to thermal. This single answer eliminates half the market before you compare specs.</li>
            <li><strong>Droplet adjustability (pay for it on a ULV).</strong> The nozzle dial is what makes a ULV a multi-job machine. A fixed-droplet cheap unit is far less useful than one you can tune from fine mist to wet coat.</li>
            <li><strong>Tank capacity and output (match to job size).</strong> A bigger tank and higher flow rate mean fewer refills on large jobs, but add weight. Size it to the area you actually treat &mdash; an oversized tank is dead weight on small indoor work.</li>
            <li><strong>Power source (match to how you move).</strong> Cordless ULV for mobile, varied work; corded ULV for stationary long sessions; propane/gas thermal for outdoor coverage where no outlet reaches. Buy a spare battery if you go cordless.</li>
            <li><strong>Build quality and serviceability (pay for it if you use it often).</strong> A frequently used pro unit justifies metal components and replaceable parts; occasional use does not. Do not buy commercial durability you will never exercise.</li>
            <li><strong>Carrier compatibility (confirm before you buy).</strong> Make sure the machine takes the type of product you intend to run &mdash; water-based for ULV, oil-based fog fluid for most thermal units &mdash; because mismatching the carrier ruins performance and can damage the fogger.</li>
          </ul>
          <p>Read that as a spending map: put your money into the fit-for-purpose factors &mdash; the right type, adjustability, and the tank and power that match your job &mdash; and treat commercial-grade extras as optional. The most common way to overspend is buying a big professional thermal fogger for what is really an indoor disinfection need, or a premium high-output ULV for occasional small-room use. Buy the type your job demands, size it honestly, and stop there. If you are still weighing a fogger against a pressurized liquid sprayer, our <Link href="/blog/best-pump-pressure-sprayer-canada">pump pressure sprayer guide</Link> and <Link href="/blog/field-king-backpack-sprayer-review-canada">Field King backpack sprayer review</Link> cover the alternatives.</p>

          <h2>The Part Nobody Reads: What You Are Allowed to Fog in Canada</h2>
          <p>Here is the compliance reality that matters more than any spec sheet. The fogger itself is a device, so it needs no Health Canada registration &mdash; you can buy a thermal or ULV fogger freely. But <strong>the product you put through it is regulated</strong>, and this is where DIY fogging most often goes wrong. Any pesticide you fog must carry a Canadian PCP (Pest Control Products) registration number from the PMRA, and any disinfectant must carry a DIN &mdash; and, crucially, the label must permit application by fogging. A product that is perfectly legal to spray is not automatically legal to fog.</p>
          <p>This is exactly where grey-market imports fall down. A fogging concentrate that is popular and legal in the United States may have no PMRA registration in Canada, which makes it not the right choice no matter how well it pairs with your machine. The legal path: pick the fogger for where you work, then choose a Canadian-registered product whose label approves fogging with your equipment at your site, and follow that label on dilution, droplet size, ventilation, personal protective equipment, and re-entry time. For insects, know what the record holds before you buy: the current fogging solutions in Health Canada&rsquo;s registry are commercial class (Pyrocide Fogging Formula 7067 for ULV Mosquito Adulticiding, 13378; Bugwacker Fogging Solution, 22563, for barns), every product named for thermal foggers is historical, and the pyrethrins re-evaluation <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/pesticides-pest-management/decisions-updates/reevaluation-decision/2023/pyrethrins.html" target="_blank" rel="noopener noreferrer">RVD2023-06</a> says to &ldquo;Prohibit the use of handheld and stationary fogging/misting equipment on liquid domestic-class labels&rdquo;, although one current homeowner concentrate, Green Earth Bio-Mist Insect Killer (23300), still names &ldquo;a non-thermal fogger or mister&rdquo; on its label. For a homeowner&rsquo;s mosquitoes, the simplest registered option is an aerosol patio fogger, covered in our <Link href="/blog/mosquito-fogger-canada">mosquito fogger guide</Link>. The machine is the easy purchase; the product and the label are what keep the job effective and legal.</p>

          <h3>Which fogger for your situation</h3>
          <ul>
            <li><strong>Disinfecting or deodorizing rooms, vehicles or ducts:</strong> a ULV, with a product whose label gives fogging directions (a DIN for disinfectants).</li>
            <li><strong>Barns and livestock buildings:</strong> a ULV or space sprayer; the current barn fogging solution we found (Bugwacker, 22563, agricultural commercial class) is labelled for that equipment with 15&ndash;25 micron droplets.</li>
            <li><strong>Dense outdoor vegetation for a licensed operator:</strong> thermal, with a commercial product whose label names the machine and the site.</li>
            <li><strong>Mosquitoes in a homeowner&rsquo;s yard:</strong> not a thermal machine; a ULV only with a domestic liquid whose label names a non-thermal fogger (Green Earth Bio-Mist, 23300, outdoors around buildings); otherwise a registered aerosol patio fogger for an evening, and standing water dealt with for the season.</li>
          </ul>

          <h3>Before You Buy Either Fogger: Checklist</h3>
          <ol>
            <li><strong>The liquid first:</strong> a Canadian PCP number or DIN, and a label that allows fogging with this kind of machine.</li>
            <li><strong>A printed droplet range</strong> from the maker, and on a ULV a flow or droplet control you can turn.</li>
            <li><strong>Indoors or out:</strong> both thermal fogger manuals we read forbid indoor use; a ULV is the indoor tool.</li>
            <li><strong>The carrier the machine takes:</strong> oil-based for thermal (both manuals rule out materials designed to be mixed with water); whatever the label allows for a ULV.</li>
            <li><strong>Power:</strong> propane cylinder, outdoor-rated extension cord, or battery runtime in the maker&rsquo;s own words.</li>
            <li><strong>Protective equipment</strong> the product label asks for, and its re-entry time.</li>
          </ol>

          <h2>So, Thermal or ULV? The Short Version</h2>
          <p>If you need to blanket a large outdoor area or drive fog deep into dense vegetation, buy a <strong>thermal fogger</strong> &mdash; a Longray-style gas unit is the specialist that nothing else replaces, and its visible, fine, high-volume fog is purpose-built for exactly that job. If you want <strong>one machine that handles the widest range of work</strong> &mdash; indoor disinfection, greenhouses, odour control, and light outdoor insect knockdown &mdash; buy a <strong>ULV cold fogger</strong>, and lean cordless for mobility. For most Canadian homeowners and small operators, the ULV is the smarter first (and often only) purchase; the thermal fogger is the second machine you add when large-area outdoor penetration becomes a specific, recurring problem. Match the tool to the place, match the product to the label, and either machine will earn its keep.</p>

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
            <li><Link href="/blog/best-gas-backpack-fogger-canada">Best Gas Backpack Fogger Canada — Outdoor Fogging Power</Link></li>
            <li><Link href="/blog/propane-vs-electric-fogger-canada">Propane vs Electric Fogger Canada — Which Power Source</Link></li>
            <li><Link href="/blog/backpack-sprayer-canada">Best Backpack Sprayer Canada — Liquid Application</Link></li>
            <li><Link href="/blog/best-pump-pressure-sprayer-canada">Best Pump Pressure Sprayer Canada</Link></li>
            <li><Link href="/blog/field-king-backpack-sprayer-review-canada">Field King Backpack Sprayer Review Canada</Link></li>
            <li><Link href="/blog/best-pest-control-equipment-canada">Best Pest Control Equipment Canada — The Full Device Hub</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA variant="equipment" />
        <ReadNext path="/blog/thermal-vs-ulv-fogger-canada" />
      </article>
    </>
  )
}
