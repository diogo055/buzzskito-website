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
import QuickIdTable from '@/components/QuickIdTable'
import Photo from '@/components/Photo'

const SLUG = 'best-mosquito-repellent-device-canada'
const DATE = '2026-07-12'
const UPDATED = '2026-11-06'
const TITLE = 'Best Mosquito Repellent Machines and Devices in Canada — What Actually Works'
// TITLE NOTE (Oct 28, 2026): was 'Mosquito Repellent Machines: What Works'; top queries, Jul 28-Oct 25 (all countries): mosquito repellent machine 2,576 at 8.9, mosquito killer machine 577 at 9.7, bug repellent machine 414 at 9.2, best mosquito repellent device 356 at 6.6, mosquito machine 135 at 10.4, best mosquito killer machine for home 126 at 7.6 (29 clicks). Trap searches stay with best-mosquito-trap and best-professional-mosquito-trap-canada, wearables with mosquito-repellent-bracelets-canada.
const META_TITLE = 'Mosquito Repellent Machines That Work in Canada'

const FAQS = [
  {
    question: 'What is the best mosquito repellent device in Canada?',
    answer: 'For most Canadian backyards, the best device for actual bite protection where you sit is a Thermacell zone repeller ($35–$220) — it creates a 15-foot (about 4.5-metre) repellent zone around a patio or deck within about 30 minutes, or 20 feet (6 metres) in about 15 minutes on the larger metofluthrin Zone models, with no smoke, spray, or open flame. For reducing the mosquito population across a whole acre over the season, a propane CO₂ trap (Mosquito Magnet, $400–$1,300) is the strongest device, but it only pays off on rural and cottage lots. Bug zappers are the worst choice for mosquitoes specifically — independent research shows they kill mostly harmless beetles and moths. No plug-in device beats whole-yard barrier spray for combined mosquito and tick control, but Thermacell is the best single gadget for personal patio protection.',
  },
  {
    question: 'Do mosquito repellent machines actually work?',
    answer: 'It depends entirely on the type. Thermacell zone repellers genuinely work — university and manufacturer testing shows substantially fewer bites inside the treated zone because they diffuse a repellent vapour (allethrin, prallethrin or metofluthrin, depending on the model) that mosquitoes avoid. Propane CO₂ traps (Mosquito Magnet) catch biting females, but slowly, and independent trials disagree on whether they thin a yard’s population. UV traps (DynaTrap) catch mosquitoes along with many other insects, but in a 2013 field trial traps placed near people did not reduce bites. Bug zappers are the least effective; studies from the University of Delaware found mosquitoes made up well under 1% of what they electrocute. So "machines" range from very effective (Thermacell) to nearly useless for mosquitoes (bug zappers).',
  },
  {
    question: 'What is a mosquito killer machine and does it kill mosquitoes?',
    answer: 'A "mosquito killer machine" usually refers to a trap that lures and captures or electrocutes insects — either a propane CO₂ trap, a UV light-plus-fan trap, or an electric bug zapper. Propane CO₂ traps (Mosquito Magnet) genuinely kill biting female mosquitoes by mimicking human breath and vacuuming them into a net; they are the most effective killing device but cost $400–$1,300 plus $400–$600 a season in propane and attractant. UV traps and bug zappers are marketed as mosquito killers but catch overwhelmingly moths, beetles, and midges. If your goal is actually killing mosquitoes rather than repelling them, a propane CO₂ trap is the device aimed at the right cue, but independent trials are mixed (a two-summer University of Winnipeg study could not show that one reduced mosquito activity), and even where it works it takes weeks.',
  },
  {
    question: 'What is the best mosquito repellent machine?',
    answer: 'The best mosquito repellent machine is a Thermacell zone repeller ($35–$229). A "repellent machine" pushes mosquitoes away rather than trying to kill them, and Thermacell does that best — it heats a repellent mat or cartridge (allethrin, prallethrin or metofluthrin, depending on the model) to fill a 4.5-metre (15-foot) zone, or 6 metres (20 feet) on the larger metofluthrin Zone models, with a vapour mosquitoes avoid, cutting bites inside that zone within roughly 15 to 30 minutes, by model. That makes it the top repellent machine for patios, decks, camping, and fishing. Note the difference from a "killer machine": propane CO₂ traps (Mosquito Magnet) and UV traps (DynaTrap) try to trap and kill mosquitoes, while the Thermacell simply repels them from where you sit. For repelling bites tonight, the repellent machine wins; for thinning a whole rural property over weeks, a killer machine is the tool.',
  },
  {
    question: 'Do mosquito killer machines work?',
    answer: 'Some do, most do not. "Mosquito killer machine" covers three very different devices. Propane CO₂ killer machines (Mosquito Magnet) catch real biting females by mimicking human breath, but independent trials disagree on whether they thin a yard’s population, and they cost $400–$1,300 plus $400–$600 a season. UV light-and-fan killer machines (DynaTrap) work poorly for mosquitoes specifically — in a 2013 field trial, traps placed near people, a DynaTrap among them, either raised biting or made no difference. Bug-zapper killer machines barely work at all; University of Delaware research found mosquitoes were well under 1% of what they electrocute. So a propane CO₂ killer machine is the only category aimed at the right cue, and even it takes weeks and does not always deliver. If you want to feel a difference sooner, reach for a Thermacell repellent machine or a professional barrier spray instead — a repellent zone forms in about 15 minutes and a barrier treatment is applied to the foliage where adults rest, while any killer machine has to thin the population over weeks before you feel a difference.',
  },
  {
    question: 'Thermacell vs bug zapper vs propane trap — which is best?',
    answer: 'They solve different problems. A Thermacell ($35–$220) is best for personal protection — it repels mosquitoes from the 3- to 6-metre zone where you sit (10 to 20 feet, by model) within about 15 to 30 minutes, making it ideal for patios, decks, camping, and fishing. A propane CO₂ trap ($400–$1,300) is best for whole-property population reduction on large rural or cottage lots, working over 6–8 weeks. A bug zapper ($30–$120) is the weakest for mosquitoes — it electrocutes mostly harmless night-flying insects and can even attract more bugs to your yard. For a typical GTA backyard, a Thermacell for the seating area plus a professional barrier spray for the whole yard covers two jobs a trap does not: immediate protection where you actually sit, and treatment of the shaded foliage where adult mosquitoes rest during the day. Skip the bug zapper for mosquito control entirely.',
  },
  {
    question: 'How much does a mosquito repellent device cost in Canada?',
    answer: 'Prices as of 2026 across Canadian retailers: Thermacell zone repellers run $35–$60 (E-Series / Patio Shield), $110–$160 (rechargeable EL55/E90), and $199–$229 (Liv smart-home system); refill mats and fuel add $12–$30. UV traps (DynaTrap) run $79–$330 plus $90–$150 a season in cartridges and bulbs. Propane CO₂ traps (Mosquito Magnet) run $400–$1,300 plus $400–$600 a season in propane and attractant. Foggers run $40–$150 plus $15–$40 per fogging insecticide can. Bug zappers run $30–$120 with occasional bulb replacement. The cheapest genuinely effective option for bite protection is a basic Thermacell at $35–$45.',
  },
  {
    question: 'Where can I buy a mosquito repellent device in Canada?',
    answer: 'Thermacell, DynaTrap, foggers, and bug zappers are all widely stocked at Canadian Tire, Home Depot Canada, Amazon.ca, and Walmart Canada, with Costco Canada carrying Thermacell and the larger DynaTrap models during its spring outdoor-living sale (usually the cheapest window). Propane CO₂ traps like Mosquito Magnet are more specialized — Costco Canada, Amazon.ca, Cabela\'s Canada, and Lee Valley Tools stock them most reliably. Buy in April–May before peak-season markup and stock-outs; popular Thermacell refills and trap cartridges run low by July. Amazon.ca usually has the widest year-round selection across every category.',
  },
  {
    question: 'Are mosquito repellent devices safe for kids and pets?',
    answer: 'It depends on the device, and the label is the rule. Thermacell repellers use allethrin, prallethrin or metofluthrin (synthetic pyrethroids) diffused at very low outdoor concentrations; they carry a Canadian PCP registration number, and the label sets out the precautions for use around people and pets. The units also run hot and should be kept out of small children\'s reach. UV traps and bug zappers use no insecticide, but zappers can spray fine insect debris and are best sited away from dining areas. Propane CO₂ traps involve a propane tank, so follow standard propane safety and keep them away from play areas. Foggers use insecticide and require keeping kids and pets off the treated area until it dries. As always, read the label — and for a hands-off option, professional barrier spray is applied by a licensed technician according to label directions, and everyone stays off treated areas until the spray has dried.',
  },
  {
    question: 'Do ultrasonic or electronic mosquito repellent machines work?',
    answer: 'Not against bites. Health Canada lists electronic or ultrasonic devices among the products that do not protect well against biting insects, alongside bug zappers and odour-baited traps. In a 2017 New Mexico State University wind-tunnel test of wearable repellents, the sonic repeller did not reduce how many yellow fever mosquitoes flew toward the volunteer; only the device that releases metofluthrin did. In Canada, devices sold to repel pests by sound are also prescribed devices under Schedule 1 of the Pest Control Products Regulations, and no ultrasonic unit appears among the mosquito devices on Health Canada’s register.',
  },
  {
    question: 'What mosquito repellent machine works for a large outdoor area?',
    answer: 'No single repeller covers a big yard. Thermacell’s Canadian labels give a 4.5-metre (15-foot) zone for the butane Patio Shield models and 6 metres (20 feet) for the metofluthrin Zone models (3 metres for the smaller Radius Zone), so a long deck or a pool area needs more than one unit, placed so the zones cover where people sit. For acreage, a registered propane CO₂ trap (Mosquito Magnet Patriot Plus, Reg. No. 32375, or Executive, Reg. No. 29944) works on the population over weeks, but Health Canada lists odour-baited mosquito traps among products that do not protect well against insect bites. A whole-yard barrier treatment is the other route.',
  },
  {
    question: 'What is a personal mosquito repellent device?',
    answer: 'It is a small repeller you wear or keep right beside you. The type with evidence behind it is the clip-on that releases metofluthrin: Health Canada says clip-on devices containing metofluthrin repel mosquitoes and have no age restriction, though children should not replace the refill disks, and OFF! Clip On carries Reg. No. 30211. In the 2017 New Mexico State University test it was the only wearable that reduced mosquito attraction. Repellent wristbands are a different product: Health Canada lists wristbands, neckbands and ankle bands that contain repellents among products that do not protect well against bites.',
  },
  {
    question: 'Is there a plug-in mosquito repellent machine for indoor use in Canada?',
    answer: 'Not a registered one that we could find. The plug-in “mosquito repellent machines” sold in India and many other countries are liquid vaporizers: a heater warms a refill of insecticide liquid through the night. In Health Canada’s registry, every heated mosquito repeller we found, Thermacell’s and the OFF! lamps, is registered for outdoor sites only, and the labels we read say not to use them indoors, in a tent or in an enclosed area. The registry also lists no product containing transfluthrin, an active ingredient in some heated repellers sold elsewhere (searched November 6, 2026). Health Canada says it is a violation of the Pest Control Products Act to buy and use unregistered pesticides, and that applies to products bought online. Indoors, the practical defence is intact window and door screens.',
  },
  {
    question: 'How long does a mosquito repellent machine run before it needs a refill?',
    answer: 'By the Canadian labels: a Thermacell Patio Shield mat lasts up to 4 hours (it turns from pale blue to white when it is spent), an OFF! Clip On refill disk up to 11 hours, and an OFF! Mosquito Lamp candle and refill 6 hours. Thermacell rates its butane cartridges at 12 hours, sells refills for its rechargeable repellers by running time (12 to 40 hours), and says they stop protecting reliably after their rated hours. A Mosquito Magnet Patriot Plus burns about 1 lb of propane a day, so Woodstream Canada says to change its 20 lb tank every 18 to 21 days.',
  },
  {
    question: 'Does a mosquito repellent machine work in the wind?',
    answer: 'Not well. The Thermacell Patio Shield label says it works well where there is minimal air movement and that wind, heat or humidity may affect it; the American Mosquito Control Association says Thermacell devices and mosquito coils are most effective where there is little wind; and the OFF! Clip On label says wind may affect its area of protection. On the Zone refills, keep the unit within 3 metres of where you sit, as that label says, and add units rather than expecting one to cover a breezy deck.',
  },
  {
    question: 'Do mosquito repellent machines work on black flies or ticks?',
    answer: 'Not as registered. The Canadian registrations for Thermacell’s area repellers and Zone refills, the OFF! Clip On and the OFF! lamps list mosquitoes as the pest. Health Canada notes that some clip-on products also repel blackflies, so check the pests named on the label you buy. No machine on this page is registered for ticks or controls them; ticks are handled with a registered repellent on skin and clothing and with treatment of the yard’s shaded edges.',
  },
  {
    question: 'Is a mosquito repellent machine better than bug spray?',
    answer: 'For protecting a person, no. Health Canada says area repellents such as lanterns and coils repel mosquitoes from a limited area but do not protect people from bites as well as personal insect repellents, the registered sprays and lotions that go on skin. A heated repeller earns its place where people sit together and nobody wants spray on, such as dinner on the deck; for gardening, hiking or anything that takes you out of the zone, a registered skin repellent such as DEET or icaridin is the better tool.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Which mosquito repellent machine works: a heated area repeller (Thermacell) protects a patio; traps, UV units and zappers compared, with Canadian registration.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-mosquito-repellent-device-canada')

export default function BestMosquitoRepellentDeviceCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Ranked 2026 buyer\'s guide to mosquito repellent devices and machines in Canada.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Mosquito Repellent Device Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Mosquito Repellent Device Canada</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The mosquito repellent machine that works for most Canadian yards is a heated area repeller such as a Thermacell: it warms a repellent mat or refill to protect a 4.5&nbsp;m (15&nbsp;ft) zone around a patio within about 30 minutes (6&nbsp;m, 20&nbsp;ft, in about 15 minutes on the larger metofluthrin Zone models), and the Patio Shield carries Canadian Reg. No. 31998. It suits a deck, a patio or a campsite. Killer machines are a different tool: a propane CO&#8322; trap pays off only on rural acreage, and Health Canada lists bug zappers, odour-baited traps and ultrasonic gadgets among products that do not protect well against bites.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Thermacell Zone Repeller (E-Series / Patio Shield)" search="thermacell patio shield" label="Best overall" />
      <TopBox tag={AMZ_TAG} name="Thermacell Zone Repeller (E-Series / Patio Shield)" search="thermacell patio shield" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">For most Canadian backyards, the best mosquito repellent device is a <AmazonLink search="thermacell patio shield" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Thermacell zone repeller</AmazonLink> &mdash; the Patio Shield&rsquo;s Canadian label (Reg. No. 31998) gives a repellent zone up to 4.5 metres (15 feet) from the unit and says to allow 30 minutes for it to take effect, with no smoke or spray. For thinning a whole large lot, a propane CO&#8322; trap is the strongest killing device but takes 6&ndash;8 weeks.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>A Thermacell zone repeller ($35&ndash;$229) protects a 4.5-metre (15-foot) zone on the butane Patio Shield models and 6 metres (20 feet) on the larger metofluthrin Zone models, and starts working in roughly 15 to 30 minutes, by model.</li>
              <li>A propane CO&#8322; trap (Mosquito Magnet) covers up to about 1 acre and costs $400&ndash;$1,300; it works over weeks, and independent trials are mixed on whether it thins a yard&rsquo;s population.</li>
              <li>UV + fan traps like DynaTrap ($79&ndash;$330) are weak on mosquitoes and best treated as supplemental insect catch.</li>
              <li>Bug zappers are the worst pick &mdash; independent studies show under 1% of what they kill is mosquitoes.</li>
              <li>Health Canada lists bug zappers, odour-baited mosquito traps and electronic or ultrasonic devices among products that do not protect well against insect bites.</li>
              <li>Professional barrier spray starts from $99 per treatment on a standard lot under 10,000 sq ft, treats the whole yard rather than one zone, and tick treatment can be added.</li>
              <li>No plug-in device covers your whole yard and ticks at once, so the ideal setup is a Thermacell where you sit plus barrier spray for the yard.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star reviews</p>
            <div className="mt-4">
              <BuyLink search="thermacell patio shield" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>
            </div>
          </div>

          <div className="mb-6 rounded-xl border border-navy-100 bg-white p-5">
            <h2 className="text-xl font-extrabold text-brand-900 mb-2">Our Verdict on Mosquito Repellent Machines</h2>
            <p className="text-[15px] text-gray-700 leading-relaxed">If the goal is fewer bites where you sit this evening, buy a heated area repeller with a Canadian registration number, not a trap or a zapper. In a 2013 field trial in Israel that set repellers and traps side by side, a Thermacell patio lantern cut biting pressure by up to 96.1% within about 1 to 3&nbsp;metres (3 to 10&nbsp;feet) of a volunteer, while three traps, a DynaTrap among them, either raised biting or made no difference at that range (Revay and colleagues, <em>Acta Tropica</em>). Two limits keep the verdict honest: the Patio Shield label says it works well where there is minimal air movement, and Health Canada says area repellents, lanterns and coils included, do not protect people from bites as well as a personal insect repellent on the skin. A killer machine is a different purchase: a propane CO&#8322; trap only makes sense on acreage, and even there the independent results are mixed.</p>
            <p className="mt-3 text-sm font-bold text-brand-900">The best mosquito repellent machines in Canada, by job:</p>
            <ol className="mt-2 space-y-1.5 text-sm text-gray-700 list-decimal pl-5">
              <li><strong>Deck or patio:</strong> Thermacell Patio Shield (Reg. No. 31998). Its label gives up to 4.5&nbsp;m from the unit, 30 minutes to take effect and up to 4 hours per mat.</li>
              <li><strong>A bigger seating area:</strong> a Thermacell rechargeable repeller on Zone refills (Reg. Nos. 34261 and 34262). The refill labels give a 6&nbsp;m zone (28&nbsp;m&sup2;) within 15 minutes, and the unit runs on a rechargeable battery instead of butane.</li>
              <li><strong>Something to wear:</strong> OFF! Clip On (Reg. No. 30211), up to 11 hours per refill disk for the person wearing it, by its label. Repellent wristbands are a different product; our <Link href="/blog/mosquito-repellent-bracelets-canada">mosquito repellent bracelet guide</Link> explains why they fall short.</li>
              <li><strong>A candle-style lamp:</strong> OFF! Mosquito Lamp (Reg. No. 32308), one lamp per 9.3&nbsp;m&sup2; and 6 hours per candle and pad, by its label.</li>
              <li><strong>A killer machine, acreage only:</strong> Mosquito Magnet Patriot Plus (Reg. No. 32375). Woodstream Canada rates it at up to 1 acre and says the big drops take about four weeks.</li>
            </ol>
            <p className="mt-3 text-xs text-gray-500">Skip for bites: UV fan traps, bug zappers and ultrasonic gadgets. The pros and cons of each, the label specs and the studies behind this verdict are further down the page.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Device Categories Ranked · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Repellent Devices: Ranked &amp; Where to Buy</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Five device categories dominate the Canadian market. They are not interchangeable — a zone repeller protects where you sit, a propane trap slowly thins the whole yard, and a bug zapper mostly kills the wrong insects. Here is each type ranked, with coverage, price, and a live Amazon.ca price check.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Device type</th>
                  <th className="px-4 py-3 text-left">Machine type</th>
                  <th className="px-4 py-3 text-left">Coverage</th>
                  <th className="px-4 py-3 text-left">Best for</th>
                  <th className="px-4 py-3 text-left">Price (CA, 2026)</th>
                  <th className="px-4 py-3 text-left">Price check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Thermacell zone repeller <span className="font-normal text-xs text-emerald-600">★ best overall</span></td>
                  <td className="px-4 py-3 text-gray-700">Repellent machine</td>
                  <td className="px-4 py-3 text-gray-700">3–6 m (10–20 ft) zone, by model</td>
                  <td className="px-4 py-3 text-gray-700">Patio, deck, camping</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$35 – $229</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="thermacell patio shield" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Propane CO₂ trap</td>
                  <td className="px-4 py-3 text-gray-700">Killer machine ★ best</td>
                  <td className="px-4 py-3 text-gray-700">Up to 1 acre</td>
                  <td className="px-4 py-3 text-gray-700">Cottages, rural acreage</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$400 – $1,300</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="mosquito magnet patriot plus" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">UV + fan trap (DynaTrap) <span className="font-normal text-xs text-gray-500">not registered in Canada</span></td>
                  <td className="px-4 py-3 text-gray-700">Killer machine (weak)</td>
                  <td className="px-4 py-3 text-gray-700">300 sq ft – 1 acre</td>
                  <td className="px-4 py-3 text-gray-700">Supplemental insect catch</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$79 – $330</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="dynatrap insect trap" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Propane / electric fogger</td>
                  <td className="px-4 py-3 text-gray-700">Killer machine (brief)</td>
                  <td className="px-4 py-3 text-gray-700">Temporary knockdown</td>
                  <td className="px-4 py-3 text-gray-700">Pre-event, few hours</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$40 – $150</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="propane mosquito fogger" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Bug zapper <span className="font-normal text-xs text-rose-500">✗ worst</span></td>
                  <td className="px-4 py-3 text-gray-700">Killer machine (useless)</td>
                  <td className="px-4 py-3 text-gray-700">Small radius</td>
                  <td className="px-4 py-3 text-gray-700">Not mosquitoes (moths/beetles)</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$30 – $120</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="electric bug zapper outdoor" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices accurate as of July 2026. Add consumables: Thermacell refills $12–$30, trap cartridges/bulbs $90–$150/season, propane + attractant $400–$600/season, fogger insecticide $15–$40/can.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ No plug-in device covers your whole yard AND ticks.</strong> Every device here protects a zone or thins a population slowly. For whole-property mosquito <em>and</em> tick control, <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> (from $99 per treatment, with tick treatment as an add-on at $497/season with a mosquito plan) is the only option here that covers both. Most GTA homeowners run a Thermacell on the deck plus barrier spray for the yard.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Mosquito Repellent Devices in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Thermacell Zone Repeller (E-Series / Patio Shield)',
                why: 'The Patio Shield’s Canadian label (Reg. No. 31998) says it repels and kills mosquitoes and reduces bites up to 4.5 metres (15 feet) from the unit, for up to four hours per mat, and to allow 30 minutes for it to take effect — no smoke, no spray, no flame. It is the cheapest device that genuinely works.',
                search: 'thermacell patio shield',
                featured: true,
                pros: ['Label zone up to 4.5 m (15 ft)', 'No smoke, spray, or flame', 'Cheapest device that actually works'],
                cons: ['Protects a zone, not the whole yard', 'Needs refill mats and fuel'],
              },
              {
                badge: 'Best for Large Lots',
                name: 'Mosquito Magnet (propane CO₂ trap)',
                why: 'Aimed at the cue biting mosquitoes actually follow, by mimicking a breathing human with real CO₂; field results are mixed, so treat it as one part of a plan. Woodstream Canada rates the Patriot Plus (Reg. No. 32375) at up to 1 acre and says results come in 7 to 10 days, with the big drops in about four weeks.',
                search: 'mosquito magnet patriot plus',
                pros: ['Genuinely thins the population', 'Covers up to ~1 acre', 'Targets biting females'],
                cons: ['Premium up-front cost plus propane', 'Works over weeks — nothing tonight'],
              },
              {
                badge: 'Best Supplemental',
                name: 'DynaTrap UV + Fan Trap (not registered in Canada)',
                why: 'Quiet, chemical-free, and satisfying to empty — but in studies of UV insect traps mosquitoes were only about 4–6% of the catch, so treat it as a bonus flying-insect catcher rather than your primary plan. No DynaTrap model is in Health Canada’s register, and a device sold to attract or destroy flying insects needs a Reg. No. (Pest Control Products Regulations, Schedule 1), so check the box for one.',
                search: 'dynatrap insect trap',
                pros: ['Quiet and chemical-free', 'Catches lots of flying insects', 'Low maintenance'],
                cons: ['UV-trap studies: ~4–6% of the catch is mosquitoes', 'Bulbs and cartridges add up'],
              },
              {
                badge: 'Best Pre-Event',
                name: 'Propane / Electric Fogger',
                why: 'Knocks down adult mosquitoes in an area within minutes — useful for clearing a yard an hour before a party, but the effect is short-lived with no lasting residual. In Canada the liquid is the catch: the propane-fogger insecticides in Health Canada’s registry (Black Flag Fog 28121, Wilson Mosquito Fogging 17201) are cancelled, so check any fogging liquid for a current Reg. No. before you buy the machine.',
                search: 'propane mosquito fogger',
                pros: ['Fast knockdown in minutes', 'Good pre-party reset'],
                cons: ['No lasting residual', 'Needs calm weather and dry-time'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Just want to stop bites on the patio tonight?</strong> The <em>Best Overall</em> Thermacell is the pick. <strong>Rural acreage or a cottage near water?</strong> The <em>Best for Large Lots</em> propane trap earns its keep over the season. <strong>Hosting an event this weekend?</strong> A <em>Best Pre-Event</em> fogger buys a few hours, if you can find a fogging liquid with a current Canadian Reg. No. for it — but for same-day, whole-yard relief that also kills ticks, nothing beats <Link href="/mosquito-control">professional barrier spray</Link>.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Device Categories at a Glance</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Best for bite protection', 'Thermacell zone repeller (repels where you sit)'],
                  ['Best for killing mosquitoes', 'Propane CO₂ trap (Mosquito Magnet)'],
                  ['Best for whole yard + ticks', 'Professional barrier spray (not a device)'],
                  ['Worst for mosquitoes', 'Bug zapper (kills mostly moths & beetles)'],
                  ['Fastest to work', 'Thermacell (~15 min) / fogger (minutes, brief)'],
                  ['Slowest to work', 'Propane CO₂ trap (4–8 weeks)'],
                  ['No-insecticide options', 'UV trap, bug zapper, propane CO₂ trap'],
                  ['Tick effectiveness', 'None — no device here controls ticks'],
                  ['Cheapest that works', 'Thermacell E-Series / Patio Shield ($35–$45)'],
                  ['Coverage ceiling', 'Propane CO₂ trap / larger UV trap (~1 acre)'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <QuickIdTable
            title="Mosquito Machines in Canada: What Each One Is, on the Record"
            head={['Machine', 'How it works', 'Canadian status (Oct 28, 2026)', 'What the label or Health Canada says']}
            rows={[
              ['Heated area repeller, butane (Thermacell Patio Shield)', 'Heats a repellent mat (allethrin)', 'Registered: Patio Shield Reg. No. 31998; allethrin refill mats 35066', 'Patio Shield labels give a 4.5 m (15 ft) zone'],
              ['Rechargeable Zone repeller (Thermacell, metofluthrin)', 'Warms a metofluthrin refill', 'Registered: Radius Zone 33274; Zone VI-B 34261 and VI-C 34262', 'Zone VI-B and VI-C labels: 28 sq m, a 6 m (20 ft) zone; Radius Zone label: 10 sq m, a 3 m zone'],
              ['Clip-on repeller (OFF! Clip On)', 'A wearable unit that releases metofluthrin', 'Registered: Reg. No. 30211', 'Health Canada: metofluthrin clip-ons repel mosquitoes; no age limit, but children should not replace the refills'],
              ['Propane CO₂ trap (Mosquito Magnet)', 'Burns propane for CO₂, heat and moisture; a fan pulls mosquitoes into a net', 'Registered devices: Patriot Plus 32375, Executive 29944; Octenol lure 28440', 'Health Canada lists odour-baited mosquito traps among products that do not protect well against bites'],
              ['UV + fan trap (DynaTrap)', 'UV light draws insects; a fan pulls them into a basket', 'No DynaTrap product in Health Canada’s register', 'Devices sold to attract or destroy flying insects are prescribed devices (Pest Control Products Regulations, Schedule 1)'],
              ['Bug zapper', 'UV light and a high-voltage grid', 'Exempt from registration only if CSA-certified as a high-voltage insect killer', 'An outdoor zapper’s label must say: “This device does not control blackflies, mosquitoes or other biting flies.”'],
              ['Propane or electric fogger', 'Sprays an insecticide mist', 'The insecticide needs its own Reg. No.; the propane-fogger insecticides in Health Canada’s label search (Black Flag Fog 28121, Wilson Mosquito Fogging 17201) are cancelled', 'Knockdown lasts hours, with no lasting residual'],
              ['Ultrasonic or electronic repeller', 'Gives off sound or electronic signals', 'Devices that repel pests by sound are prescribed devices (Schedule 1); none is among the registered mosquito devices', 'Health Canada lists electronic or ultrasonic devices among products that do not protect well against bites'],
            ]}
            caption={<>From Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">pesticide registry and label search</a> (searched October 28, 2026), the <a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/page-10.html" target="_blank" rel="noopener noreferrer" className="underline">Pest Control Products Regulations</a> (Schedules 1 and 2) and Health Canada&rsquo;s <a href="https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html" target="_blank" rel="noopener noreferrer" className="underline">Personal insect repellents</a> page. Zone sizes are the label figures. Look for &ldquo;Reg. No. &hellip; P.C.P. Act&rdquo; on any box you buy.</>}
          />

          <h2 className="text-xl font-extrabold text-brand-900 mt-8 mb-4">Which Mosquito Machine for Your Situation?</h2>
          <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li><strong>Bites on the patio or deck tonight:</strong> a heated area repeller by the seating. Check the zone on the label: 4.5&nbsp;m on the Patio Shield, 6&nbsp;m on the larger Zone models, 3&nbsp;m on the Radius Zone.</li>
            <li><strong>Camping, fishing or a dock:</strong> a backpacker-style repeller (Thermacell&rsquo;s Backpacker models carry Reg. No. 32695 and 33747) or a metofluthrin clip-on (OFF! Clip On, Reg. No. 30211).</li>
            <li><strong>Rural acreage or a cottage near water:</strong> a registered propane CO&#8322; trap (Mosquito Magnet Patriot Plus or Executive), started in May. It works over weeks, not tonight.</li>
            <li><strong>Moths around the porch light:</strong> a CSA-certified bug zapper does that job, and its own label has to say it does not control mosquitoes.</li>
            <li><strong>An ultrasonic or electronic gadget:</strong> skip it for bites. Health Canada says these devices do not protect well.</li>
            <li><strong>The whole yard, and ticks too:</strong> no machine on this page covers both; that takes a whole-yard barrier treatment.</li>
          </ul>

          <h2 className="text-xl font-extrabold text-brand-900 mt-8 mb-4">Pros and Cons of Each Mosquito Machine</h2>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100">
            <table className="min-w-[640px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-4 py-2 text-left">Machine</th>
                  <th className="px-4 py-2 text-left">Pros</th>
                  <th className="px-4 py-2 text-left">Cons</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Heated area repeller (Thermacell; Reg. Nos. 31998, 34261, 34262, 33274)', 'Registered in Canada; works the same evening (label: allow 30 minutes for the Patio Shield, 15 for the Zone refills); nothing sprayed on skin; field trials found far fewer bites close to the unit', 'Outdoor use only; the Patio Shield label says wind, heat, humidity or rain may affect it; protects one zone, not the yard; refills are the running cost; Health Canada says area repellents protect people less well than a skin repellent'],
                  ['Clip-on repeller (OFF! Clip On, Reg. No. 30211)', 'Registered; up to 11 hours per refill disk (label); goes where you go; Health Canada says metofluthrin clip-ons repel mosquitoes and have no age restriction', 'Outdoor use only; the label says to clip it below the waist, keep the fan from blowing toward the face and let only adults replace the disk; wind can affect the protected area'],
                  ['Propane CO₂ trap (Mosquito Magnet Patriot Plus 32375, Executive 29944)', 'Registered devices; built around carbon dioxide, a cue host-seeking females follow; Woodstream Canada rates the Patriot Plus at up to 1 acre', 'Works over weeks, not tonight; independent results are mixed (a two-summer University of Winnipeg study could not show less mosquito activity); a 20 lb propane tank every 18 to 21 days, by the maker’s figures; Health Canada lists odour-baited mosquito traps among products that do not protect well'],
                  ['UV + fan trap (DynaTrap)', 'Quiet; no insecticide in the trap; catches mosquitoes along with other night fliers', 'No DynaTrap model in Health Canada’s registry; in the 2013 Israeli field trial, traps near people raised biting or made no difference; DynaTrap says to hang it 20 to 40 feet from where people sit'],
                  ['Bug zapper', 'Kills moths, beetles and midges at a light; no insecticide', 'Health Canada lists bug zappers among products that do not protect well; an outdoor zapper sold here without registration must say on its label that it does not control mosquitoes'],
                  ['Ultrasonic or electronic repeller', 'None for bites', 'A Cochrane review of 10 field studies found no difference in mosquitoes landing on people; a McGill University field test in Quebec found one ineffective; none is registered for mosquitoes in Canada'],
                ].map(([machine, pros, cons]) => (
                  <tr key={machine} className="border-t border-navy-50 align-top">
                    <td className="px-4 py-2 font-semibold text-brand-800">{machine}</td>
                    <td className="px-4 py-2 text-gray-700">{pros}</td>
                    <td className="px-4 py-2 text-gray-700">{cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">From each product&rsquo;s Canadian label and registry record (Health Canada&rsquo;s pesticide registry, searched November 6, 2026), Woodstream Canada&rsquo;s Patriot Plus page, DynaTrap&rsquo;s FAQ, Health Canada&rsquo;s Personal insect repellents page and the field studies listed further down. BuzzSkito has not tested these machines.</p>

          <h2 className="text-xl font-extrabold text-brand-900 mt-8 mb-4">Mosquito Repellent Machine Specs, From the Labels</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">Coverage, start-up time and running time decide which machine fits your deck. These are the figures on each product&rsquo;s Canadian label, with the maker&rsquo;s own running-time figures where the label gives none.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100">
            <table className="min-w-[720px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-4 py-2 text-left">Machine (Reg. No.)</th>
                  <th className="px-4 py-2 text-left">Power</th>
                  <th className="px-4 py-2 text-left">Area</th>
                  <th className="px-4 py-2 text-left">Starts working</th>
                  <th className="px-4 py-2 text-left">What runs out</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Thermacell Patio Shield (31998)', 'A butane cartridge heats a repellent mat; Thermacell rates its cartridges at 12 hours', 'Up to 4.5 m from the unit; one unit per 21 m² (4.5 × 4.5 m), more units for larger areas', 'Allow 30 minutes', 'A mat lasts up to 4 hours and turns from pale blue to white when spent'],
                  ['Thermacell rechargeable repellers on Zone refills (refills 34261, 34262)', 'A rechargeable battery heats a liquid refill; Thermacell lists up to 5.5 hours a charge for the E55 and 9 for the E90', '6 m zone (28 m²); keep the unit within 3 m of where you sit and space several units 6 m apart', 'Allow 15 minutes', 'Refills are sold by running time (Thermacell lists 12- to 40-hour sizes) and stop protecting reliably after their rated hours'],
                  ['Thermacell Radius Zone (33274)', 'A rechargeable battery heats a refill', '3 m area', 'Within 15 minutes', 'Refills; Thermacell says all its rechargeable repellers take one refill type'],
                  ['OFF! Clip On (30211)', 'A battery fan releases metofluthrin from a refill disk', 'The person wearing it; wind can affect the area', 'A few minutes', 'Up to 11 hours per refill disk; switch it off and the rest keeps for later'],
                  ['OFF! Mosquito Lamp (32308)', 'A candle heats a metofluthrin refill', 'One lamp per 9.3 m² (3.05 × 3.05 m)', 'Not stated on the label', 'The candle and refill last 6 hours; replace both together'],
                  ['Mosquito Magnet Patriot Plus (32375)', 'Burns propane to make carbon dioxide; plugs in with a 50-foot cord', 'Up to 1 acre (maker)', 'Results in 7 to 10 days, big drops in about four weeks (maker)', 'About 1 lb of propane a day; change the 20 lb tank every 18 to 21 days'],
                ].map(([machine, power, area, start, runs]) => (
                  <tr key={machine} className="border-t border-navy-50 align-top">
                    <td className="px-4 py-2 font-semibold text-brand-800">{machine}</td>
                    <td className="px-4 py-2 text-gray-700">{power}</td>
                    <td className="px-4 py-2 text-gray-700">{area}</td>
                    <td className="px-4 py-2 text-gray-700">{start}</td>
                    <td className="px-4 py-2 text-gray-700">{runs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Label figures from Health Canada&rsquo;s <a href="https://pest-control.canada.ca/pesticide-registry/en/product-search.html" target="_blank" rel="noopener noreferrer" className="underline">pesticide registry</a> (labels read November 6, 2026). Every repeller in the table is labelled for outdoor use only. Battery, cartridge and refill hours from Thermacell&rsquo;s <a href="https://www.thermacell.com/faqs/product-questions/rechargeable/battery-charge-duration" target="_blank" rel="noopener noreferrer" className="underline">battery</a> and <a href="https://www.thermacell.com/questions-by-topic/device-refills" target="_blank" rel="noopener noreferrer" className="underline">refill</a> pages; Patriot Plus figures from <a href="https://www.woodstreambrands.ca/patriot-plus-mm-trap-canada-mm4202b" target="_blank" rel="noopener noreferrer" className="underline">Woodstream Canada</a>.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <p className="not-prose text-sm text-gray-600 mb-1">Jump straight to a live Canadian price check by device type:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="thermacell patio shield">Thermacell on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="mosquito magnet patriot plus">Propane CO₂ trap →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="dynatrap insect trap">UV trap (not registered in Canada) →</BuyLink>
          </div>

          <h2 id="ranked">The 5 Mosquito Repellent Devices, Ranked</h2>
          <p>Every &ldquo;mosquito repellent machine&rdquo; or &ldquo;mosquito killer machine&rdquo; on a Canadian shelf falls into one of five categories. They work on completely different principles, so the right pick depends on whether you want to <strong>repel</strong> mosquitoes away from where you sit or <strong>kill</strong> them across a property. Here they are from most to least useful for a typical Canadian backyard. One device you will see advertised online but not on a Canadian shelf is the <Link href="/blog/laser-mosquito-killer-photon-matrix-review">laser mosquito killer</Link> — the targeting technology is real in a lab, but the consumer versions are crowdfunded pre-orders with no recognized safety certification, so it does not make this list.</p>

          <h3>1. Thermacell zone repellers — best overall device</h3>
          <p>Thermacell units heat a repellent mat or cartridge (allethrin, prallethrin or metofluthrin, depending on the model) to release an invisible vapour that mosquitoes actively avoid. Within 15 to 30 minutes, by model, you get a protection zone of about 4.5 metres (15 feet) on the butane Patio Shield models, or 6 metres (20 feet) on the metofluthrin Zone models (3 metres on the smaller Radius Zone), according to their Canadian labels, with no smoke, no spray on your skin, and no open flame on the newer rechargeable models. Independent and manufacturer testing consistently shows far fewer bites inside the zone, which is why it is the device we recommend most for patios, decks, camping, and fishing.</p>
          <Photo id="aedes-albopictus-biting" alt="Asian tiger mosquito pushing its proboscis into a person's skin" caption="An Asian tiger mosquito, Aedes albopictus, pushing her proboscis into the photographer’s skin (CDC photograph). A repellent machine’s job is to keep mosquitoes from landing like this inside the zone where you sit." />
          <p>The lineup ranges from the $35–$45 E-Series / Patio Shield up to the $110–$160 rechargeable EL55 and E90, and the $199–$229 Liv smart-home system that networks multiple repellers around a yard. Budget $12–$30 for refill mats and fuel. It does not kill mosquitoes or cover a whole yard — it protects a bubble — but for personal comfort per dollar, nothing else comes close.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="thermacell patio shield">Check Thermacell price on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="thermacell refill mats">Refill mats &amp; fuel →</BuyLink>
          </div>
          <p>One thing the patio units are not built for is walking around with. If the use case is a campsite, a canoe, a dock, or standing in one spot on a river bank, the portable and rechargeable models in the same family are the ones that survive being thrown in a pack — a lanyard loop, a water-resistant housing, and no butane cartridge to keep track of.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="portable mosquito repeller camping">Check portable camping repellers on Amazon.ca →</BuyLink>
          </div>
          <p>Full breakdown: <Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada — where to buy and do they work</Link>.</p>

          <h3>2. Propane CO₂ traps — best for killing over a large property</h3>
          <p>Propane traps such as the Mosquito Magnet burn propane to generate CO₂, heat, and moisture that mimic a breathing human. Female mosquitoes are lured in and vacuumed into a net. It is the only device category here built around a cue a biting female actually follows, but the independent evidence that it <em>reduces</em> the mosquitoes in a yard is mixed: a University of Winnipeg study ran a Mosquito Magnet Pro through two summers and could not show that it reduced mosquito activity, while in an Israeli field trial four propane traps (Blue Rhino SV3100) at the corners of a site cut biting by 40.1%.</p>
          <Photo id="culex-pipiens" alt="Northern house mosquito, Culex pipiens, photographed in Ontario" caption="A northern house mosquito, Culex pipiens, photographed in Ontario, Canada. A propane trap draws host-seeking females with CO₂, heat and moisture and vacuums them into a net." />
          <p>The catch is cost and patience: $400–$1,300 for the device plus $400–$600 a season in propane and attractant cartridges, and it does nothing for tonight&rsquo;s barbecue because it works over weeks, not hours. It earns its keep on cottage and rural acreage, not on a fenced suburban lot where the neighbours&rsquo; yards keep restocking the population.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="mosquito magnet patriot plus">Check propane trap price on Amazon.ca →</BuyLink>
          </div>
          <p>Full breakdown: <Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Canada — where to buy and do they work</Link>.</p>

          <h3>3. UV + fan traps (DynaTrap) — supplemental only</h3>
          <p>UV traps use an ultraviolet light to attract flying insects and a fan to suck them into a basket. They are quiet, use no insecticide, and are satisfying to empty — but the University of Florida and Notre Dame counts often quoted for them were bug zapper studies (mosquitoes were 4.1% and 6.4% of the daily catch in the two Notre Dame yard trials, per the American Mosquito Control Association), and in the one field trial we found that measured bites next to a DynaTrap, traps placed near people either raised biting or made no difference. An octenol booster cartridge nudges the mosquito share up a little, not enough to rival a propane trap.</p>
          <p>Priced $79–$330 plus $90–$150 a season in bulbs and cartridges, a UV trap is a fine <em>supplemental</em> gadget on a cottage deck, but it should never be your primary mosquito plan.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="dynatrap insect trap">Check UV trap price on Amazon.ca (no DynaTrap is registered in Canada) →</BuyLink>
          </div>
          <p>If you already own one, the one upgrade worth buying is the octenol lure. Octenol is a component of human and animal breath, and adding a cartridge to a UV trap shifts the catch a little further toward biting flies and mosquitoes instead of moths — it will not turn the unit into a propane trap, but it is a few dollars against a trap you have already paid for. Cartridges are consumable and typically need replacing through the season.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="octenol lure cartridge mosquito trap">Check octenol lure cartridges on Amazon.ca →</BuyLink>
          </div>
          <p>Full breakdown: <Link href="/blog/dynatrap-canada-review">DynaTrap Canada — honest review</Link>.</p>

          <h3>4. Foggers — fast, brief knockdown before an event</h3>
          <p>Propane and electric foggers disperse an insecticide mist that knocks down adult mosquitoes in an area within minutes. Priced $40–$150 with $15–$40 refill cans, they are useful for clearing a yard an hour or two before a party — but the effect is short-lived because there is no lasting residual. Fog drifts, needs calm weather, and requires keeping kids and pets off the treated area until it dries. Think of a fogger as a one-time reset, not a season-long solution. Picking between a propane thermal unit and an electric ULV model — and matching the right fogging liquid to the machine — is covered in our <Link href="/blog/mosquito-fogger-canada">mosquito fogger</Link> guide.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="propane mosquito fogger">Check fogger price on Amazon.ca →</BuyLink>
          </div>
          <p>The machine is only half the purchase, and the half people forget at the till. A fogger runs on a separate fogging insecticide sold by the can, the machine and the liquid have to be matched (a thermal propane unit and an electric ULV unit do not take the same thing), and the label on the can is what tells you where it may be used and how long people and pets stay off the area. Buy the liquid at the same time as the machine, or the machine sits in the garage on the night you wanted it.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="mosquito fogging insecticide">Check fogging insecticide on Amazon.ca (look for a current Canadian Reg. No.) →</BuyLink>
          </div>
          <Photo id="fogging-for-mosquitoes-navy" alt="A Navy officer spraying for mosquitoes with a handheld fogger that puts out a white fog" caption="A U.S. Navy preventive medicine officer spraying for mosquitoes with a handheld fogger at Camp Buehring, Kuwait, in April 2010 (U.S. Navy photo). A fogger turns its insecticide into that fog, which is why the fogging liquid, not the machine, is what needs a current Canadian registration number." />

          <h3>5. Bug zappers — worst for mosquitoes</h3>
          <p>Electric bug zappers lure insects with UV light and electrocute them on a charged grid. They are cheap ($30–$120) and oddly satisfying, but they are the wrong tool for mosquitoes: a landmark University of Delaware study found mosquitoes and other biting insects made up well under 1% of what zappers kill, while the bulk were harmless — and sometimes beneficial — beetles and moths. Worse, the light can draw more insects toward your yard. Buy one if you hate moths near a porch light; do not buy one expecting fewer mosquito bites.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="electric bug zapper outdoor">Check bug zapper price on Amazon.ca →</BuyLink>
          </div>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
            <p className="text-sm font-extrabold text-emerald-900 mb-1">The honest verdict, in one line.</p>
            <p className="text-sm text-gray-800 leading-relaxed">Buy a <Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link> for the seating area, add a <Link href="/blog/mosquito-magnet-canada">propane trap</Link> only if you have rural acreage, and skip the bug zapper. For the whole yard — and for ticks, which no device here touches — pair any device with <Link href="/mosquito-control">professional barrier spray</Link>.</p>
          </div>

          <NextUp path="/blog/best-mosquito-repellent-device-canada" />
          <h2 id="machine-vs-killer">Mosquito Repellent Machines vs Killer Machines</h2>
          <p>Shoppers use two phrases almost interchangeably, but they describe opposite jobs. A <strong>mosquito repellent machine</strong> pushes mosquitoes away from a space without killing them, while a <strong>mosquito killer machine</strong> tries to trap or electrocute them. Knowing which word matches your goal is the fastest way to stop wasting money on the wrong gadget.</p>
          <ul>
            <li><strong>Repellent machine → Thermacell.</strong> The Thermacell zone repeller is the only true <em>repellent machine</em> here — it diffuses an allethrin, prallethrin or metofluthrin vapour (depending on the model) that keeps mosquitoes out of a 3- to 6-metre zone within about 15 to 30 minutes. It kills nothing; it simply makes the air where you sit unpleasant to mosquitoes. This is what you want if the problem is getting bitten on the patio <em>tonight</em>.</li>
            <li><strong>Killer machine → Mosquito Magnet &amp; DynaTrap.</strong> Propane CO₂ traps (Mosquito Magnet) and UV+fan traps (DynaTrap) are <em>killer machines</em> — they lure and capture insects. The propane CO₂ killer machine is the one aimed at the cue biting females follow, though independent trials disagree on whether it thins a yard&rsquo;s population (a University of Winnipeg study could not show that it did); the UV killer machine catches mostly moths and beetles, so it is a weak killer for mosquitoes specifically.</li>
            <li><strong>Also killer machines, but skip them.</strong> Foggers and bug zappers technically kill too, but a fogger only knocks mosquitoes down for a few hours and a bug-zapper killer machine electrocutes under 1% mosquitoes — mostly harmless night insects.</li>
          </ul>
          <p>Rule of thumb: buy a <strong>repellent machine</strong> (Thermacell) for same-day patio comfort, and only add a <strong>killer machine</strong> (a propane CO₂ trap) if you have rural acreage worth thinning over the whole season. For a whole yard plus ticks — which no machine of either type controls — pair either with <Link href="/mosquito-control">professional barrier spray</Link>.</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="thermacell patio shield">Repellent machine (Thermacell) →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="mosquito magnet patriot plus">Killer machine (propane CO₂ trap) →</BuyLink>
          </div>

          <h2>Repel vs Kill: Which Do You Actually Need?</h2>
          <p>The single most common mistake is buying a &ldquo;killer machine&rdquo; when you actually want a repeller. If your problem is <strong>getting bitten on the patio tonight</strong>, you need a repeller (Thermacell) or a whole-yard treatment — a trap does nothing on that timescale. If your problem is a <strong>chronically buggy acre near a wetland</strong>, you need a killing device (propane CO₂ trap) running all season, plus patience. Zappers and UV traps sit in an awkward middle: they kill insects, just mostly the wrong ones.</p>
          <Photo id="mosquito-bites-forearm" alt="Several swollen mosquito bites fusing together on a forearm" caption="Several swollen mosquito bites fusing together on a forearm (CDC photograph, 2024). Preventing bites tonight is a repeller’s job; a trap works on the population over weeks." />

          <h2 id="field-studies">What the Field Studies Say About Mosquito Machines</h2>
          <p>Every claim on a mosquito machine box can be checked against field trials, and the trials agree with each other more than the marketing does. These are the studies behind the verdict at the top of this page. BuzzSkito has not tested these machines; the figures are the researchers&rsquo; own.</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="min-w-[640px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Study</th>
                  <th className="px-3 py-2 text-left">What was tested</th>
                  <th className="px-3 py-2 text-left">What it found</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Revay and colleagues, Acta Tropica, 2013 (Israel)', 'Three repellers (a Thermacell patio lantern, an OFF! PowerPad lamp and a Terminix tabletop repeller) and three traps (a DynaTrap, a Vortex electronic trap and a Blue Rhino SV3100 propane trap), with volunteers as bait', 'In minimal air movement, all three repellers cut biting at 3 to 10 feet, the Thermacell by up to 96.1%. Near people, the traps raised biting or made no difference. Over a larger area, only four Blue Rhino traps at the corners cut biting, by 40.1%'],
                  ['Alten and colleagues, Journal of Medical Entomology, 2003 (Turkey)', 'One Thermacell unit, with volunteers at 2.3, 4.6 and 7.6 m from it', 'Mosquito biting fell by 90.2 to 97.4% (93% on average) and stayed above 90% through the 6-hour assessment'],
                  ['Dame and colleagues, Journal of the American Mosquito Control Association, 2014 (Arkansas)', 'OFF! Clip-On (metofluthrin), Thermacell (allethrin), a linalool device and a dichlorvos strip', 'The metofluthrin, allethrin and linalool devices cut the mosquitoes reaching stand-in human traps, by up to 84% depending on the product and the species'],
                  ['Collier and colleagues, Journal of the American Mosquito Control Association, 2006 (Louisiana, 14 months)', 'Thermacell and an OFF! Mosquito Lantern, against a Mosquito Magnet and a Dragonfly trap', 'Sites with the two repellers had significantly fewer mosquitoes in light traps than the sites with the two traps'],
                  ['Henderson and colleagues, Journal of the American Mosquito Control Association, 2006 (University of Winnipeg, Manitoba)', 'A Mosquito Magnet Pro run continuously at an urban and a rural Winnipeg site in 2001 and 2002', 'It caught an estimated 2 million mosquitoes in 94 trap nights, mostly Aedes vexans, but the researchers could not show that it reduced mosquito activity; landing counts did not drop'],
                  ['Kline, Journal of the American Mosquito Control Association, 2006 (USDA review, Florida)', 'Mosquito Magnet Pro traps', 'Traps along a nature trail on an isolated Gulf of Mexico island cut the annoyance from salt-marsh mosquitoes; a perimeter of the same traps in a Gainesville residential area did not do as well'],
                  ['Enayati and colleagues, Cochrane review, 2007', 'Electronic (ultrasonic) mosquito repellers', 'All 10 field studies found no difference in the mosquitoes caught landing on people with or without the device'],
                  ['Lewis and colleagues, The Canadian Entomologist, 1982 (McGill University, Quebec)', 'An electronic mosquito repeller', 'Ineffective against wild mosquitoes, mostly Aedes, at Sainte-Anne-de-Bellevue'],
                ].map(([study, tested, found]) => (
                  <tr key={study} className="border-t border-navy-50 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{study}</td>
                    <td className="px-3 py-2 text-gray-700">{tested}</td>
                    <td className="px-3 py-2 text-gray-700">{found}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Read together: a heated repeller protects the spot next to it, best in still air; a trap catches mosquitoes but rarely changes the bites where people sit; an electronic repeller does nothing. Health Canada adds the last limit in its own advice: area repellents such as lanterns and coils are approved to repel mosquitoes from a limited area, but they do not protect people from bites as well as a personal insect repellent. A 2026 field trial in Mali that compared six consumer devices found the same order: heated repellers first, <Link href="/blog/mosquito-coils-canada">mosquito coils</Link> moderate but inconsistent, and a citronella candle and an ultrasonic unit with little or no measurable effect (its heated cartridges used transfluthrin, which has no Canadian registration, and one of its authors worked for Woodstream, whose Canadian arm sells DynaTrap). If a trap is still the plan for an acreage, our <Link href="/blog/best-mosquito-trap">mosquito trap comparison</Link> puts propane, UV and CO&#8322; models side by side.</p>

          <RelatedLinks path="/blog/best-mosquito-repellent-device-canada" />
          <h2>Devices vs Professional Barrier Spray for GTA Yards</h2>
          <div className="not-prose overflow-x-auto">
          <table className="min-w-[560px] not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-4">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Option</th><th className="px-3 py-2 text-left">First-year cost</th><th className="px-3 py-2 text-left">What it does</th><th className="px-3 py-2 text-left">Tick coverage</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link></td><td className="px-3 py-2">$50–$260</td><td className="px-3 py-2">3–6 m repel zone (by model), same day</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/mosquito-magnet-canada">Propane CO₂ trap</Link></td><td className="px-3 py-2">$850–$1,900</td><td className="px-3 py-2">Thins the local population over 6–8 weeks</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/dynatrap-canada-review">UV trap</Link></td><td className="px-3 py-2">$290–$480</td><td className="px-3 py-2">Modest — mostly other insects</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Bug zapper</td><td className="px-3 py-2">$30–$120</td><td className="px-3 py-2">Nearly none (wrong insects)</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">$549–$994/season</td><td className="px-3 py-2">Whole yard, re-treated through the season</td><td className="px-3 py-2">Yes — tick plan $497 added to a mosquito plan</td></tr>
            </tbody>
          </table>
          </div>

          <h2>Mosquito Machine Buyer&rsquo;s Checklist</h2>
          <ol>
            <li><strong>A Canadian registration number on the box:</strong> &ldquo;Reg. No. &hellip; P.C.P. Act&rdquo;. Health Canada says to buy only pesticides registered for use in Canada, including online.</li>
            <li><strong>The zone on the label:</strong> 4.5&nbsp;m (15&nbsp;ft) on the butane Patio Shield, 6&nbsp;m (20&nbsp;ft) on the metofluthrin Zone refills, 3&nbsp;m on the Radius Zone refills. Measure your seating area first.</li>
            <li><strong>Refills in the same order:</strong> mats and butane, or Zone refills. The refills carry their own numbers (allethrin mats 35066, prallethrin mats 33291).</li>
            <li><strong>For a trap:</strong> a registered model (Patriot Plus 32375 or Executive 29944), propane, and an octenol lure with its own number (28440).</li>
            <li><strong>For a zapper:</strong> the CSA mark and the label line saying it does not control mosquitoes, which tells you what it is really for.</li>
            <li><strong>No ultrasonic or electronic repellers</strong> for bites: Health Canada lists them among products that do not protect well.</li>
            <li><strong>Heat and small children:</strong> a heated repeller runs hot, so keep it out of reach and follow the label precautions.</li>
            <li><strong>Ticks:</strong> nothing on this page controls ticks, so plan for them separately.</li>
          </ol>

          <h2>The Smart Stack for a Canadian Backyard</h2>
          <p>You do not have to choose just one. The most effective, lowest-hassle setup for a typical GTA property (5,000–15,000 sq ft) is:</p>
          <ol>
            <li><strong>A Thermacell</strong> on the patio or deck for a repellent zone while you sit outside.</li>
            <li><strong>Professional barrier spray</strong> — <Link href="/mosquito-control">BuzzSkito&rsquo;s seasonal program</Link> for whole-yard coverage, with tick treatment available as an add-on, something no device on this page offers.</li>
            <li><strong>A propane CO₂ trap</strong> only if you have rural acreage or a cottage where a multi-week population reduction pays off.</li>
          </ol>
          <p>Leave the bug zapper on the shelf, and treat foggers as an occasional pre-party reset rather than a plan.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/dynatrap-canada-review">DynaTrap Canada — Honest Review</Link></li>
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

      <ReadNext path="/blog/best-mosquito-repellent-device-canada" standalone />
    </>
  )
}
