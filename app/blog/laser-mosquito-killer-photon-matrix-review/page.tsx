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
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'laser-mosquito-killer-photon-matrix-review'
const DATE = '2026-07-12'
const UPDATED = '2026-09-04'
const TITLE = 'Laser Mosquito Killer 2026 — Is the Photon Matrix Real? (Honest Review)'
const META_TITLE = 'Laser Mosquito Killer: Is Photon Matrix Real?'

const FAQS = [
  {
    question: 'Is the laser mosquito killer real, or just hype?',
    answer: 'The underlying technology is real in a lab sense — the "photonic fence" concept (a camera or lidar sensor spots a flying insect and a low-power laser zaps it) was demonstrated by Intellectual Ventures / Global Good over a decade ago, and prototypes really can identify and hit mosquitoes. What is NOT proven is a safe, affordable, shipping consumer product for your backyard. The most-hyped device, the Photon Matrix, has raised money on crowdfunding (Kickstarter/Indiegogo-style campaigns) on the strength of demo videos, but as of 2026 it is best treated as an unproven pre-order, not a product you can rely on this summer.',
  },
  {
    question: 'What is the Photon Matrix mosquito killer and how is it supposed to work?',
    answer: 'The Photon Matrix is a crowdfunded device that pairs a lidar (laser-ranging) sensor with a targeting laser. The lidar is meant to scan the air, detect a flying insect the size of a mosquito, calculate its position in roughly a fraction of a second, and fire a laser to kill it — while (in theory) recognizing larger objects like pets, hands, or faces and holding fire. Marketing claims coverage of a few metres and the ability to drop dozens or hundreds of mosquitoes per minute. Those are manufacturer/campaign claims shown in demo footage, not figures confirmed by independent lab testing.',
  },
  {
    question: 'How much does a laser mosquito killer cost in 2026?',
    answer: 'Crowdfunding pledge tiers for the Photon Matrix and similar laser devices have ranged from roughly USD $300 to $500+ for early-bird units, with "retail" figures quoted higher. In Canadian dollars that is well north of $450–$700 before shipping, duty, and the usual crowdfunding risk that the price rises or the product never ships. For context, that is more than a full season of professional barrier spray. There is no established, in-stock Canadian retail price at Canadian Tire, Home Depot Canada, Costco, or Amazon.ca because these are not yet normal retail products.',
  },
  {
    question: 'Is a mosquito-killing laser safe for eyes, kids, and pets?',
    answer: 'This is the biggest open question. A laser powerful enough to kill an insect in flight is not automatically safe for a human eye or a curious pet at close range, and safety depends entirely on the wavelength, power class, and how reliably the software refuses to fire at anything larger than a bug. Lab "photonic fence" research took eye safety seriously and used careful safeguards. A mass-market crowdfunded gadget has no independent Health Canada, CSA, or comparable safety certification that we can point to. Until a device carries recognized safety testing, treat backyard mosquito lasers as experimental and keep any prototype away from children, pets, and anyone\'s eyes.',
  },
  {
    question: 'Can I actually buy a laser mosquito killer in Canada right now?',
    answer: 'Not as a normal, reliable retail purchase. You can back a crowdfunding campaign or find grey-market listings, but that is a pre-order/gamble, not a stocked product with Canadian warranty and support. Shipping to Canada, customs, voltage, and after-sales service are all uncertain. If you want something that protects your yard THIS season, the proven options are a propane CO₂ trap, a Thermacell zone on the patio, larvae control in standing water, or professional barrier spray — all covered below with where to buy in Canada.',
  },
  {
    question: 'Does the laser mosquito killer work on ticks?',
    answer: 'No. A laser or photonic-fence device targets insects in flight, and ticks do not fly — they wait in tall grass and leaf litter and latch onto hosts that brush past (this is called questing). Nothing about an airborne targeting laser addresses ticks. If tick protection matters to you (and in the GTA it should), you need ground-level yard treatment, permethrin-treated clothing, and habitat cleanup. Professional tick barrier treatment sprays the shady, leafy edges where ticks actually live.',
  },
  {
    question: 'What actually kills mosquitoes in a Canadian backyard today?',
    answer: 'Proven, available-now options in order of whole-yard impact: (1) professional barrier spray — a licensed technician treats the vegetation where mosquitoes rest, giving same-day relief and 21–30 days of residual coverage, and it also handles ticks; (2) propane CO₂ traps like the Mosquito Magnet, which cut populations 70–90% over 6–8 weeks; (3) Thermacell, which creates a roughly 20 sq metre repellent bubble around your seating area within minutes; and (4) BTI dunks/bits in any standing water to stop larvae. A speculative backyard laser does none of these things reliably in 2026.',
  },
  {
    question: 'Update for September 2026 — can you actually buy a Photon Matrix now, and what does it cost in USD?',
    answer: 'Availability has moved since this page was first published in July 2026. US coverage from Tom\'s Hardware and Fox Business now reports the Photon Matrix on sale online at roughly USD $988 for the indoor infrared model and USD $1,088 for the outdoor blue-laser model, sold with a 12-month manufacturer warranty. Sources still disagree: NPR reported on June 7, 2026 that the price was closer to $638 and that units were not yet shipping or even in production. Earlier Indiegogo pledge tiers were $468 (Basic) and $629 (Pro), with $697 and $897 quoted as eventual retail. So the honest 2026 answer is: it is purchasable, it is not stocked at any US or Canadian big-box retailer, and you should confirm shipping status with the seller before paying. Our recommendation has not changed — what moved is availability, not evidence.',
  },
  {
    question: 'What are the Photon Matrix Basic and Pro models, and what are the published specifications?',
    answer: 'The published spec table (reported by New Atlas) splits the device into Basic and Pro: 3 metres of detection range on the Basic and 6 metres on the Pro, a 90-degree field of view on both, roughly 3 milliseconds to detect a target, a claimed rate of up to 30 mosquitoes per second, a maximum target speed of about 1 metre per second, a minimum target size of about 2 mm, 8 hours of battery on the Basic and 16 on the Pro, and an IP68 rating (1.5 m for 30 minutes). The engineering write-up at embedded.com describes 3D LiDAR feeding galvanometer-steered mirrors, a kinematic prediction algorithm, a millimetre-wave radar interlock, automatic shutdown for any object larger than about 2 cm², and 40-watt pulses lasting 10 milliseconds. Every one of those figures is a manufacturer or campaign claim relayed by third parties. None of them has been confirmed by an independent test lab.',
  },
  {
    question: 'What is the difference between the indoor 976 nm model and the outdoor 450 nm model?',
    answer: 'The manufacturer\'s own FAQ splits the line by wavelength. The outdoor unit uses a 450 nm blue laser, which is visible light. The indoor unit uses a 976 nm laser, which is near-infrared and completely invisible to the human eye. That difference matters more than any other spec on the page: 976 nm sits inside the 400–1400 nm retinal hazard region described in the ANSI Z136.1 laser-safety standard, meaning the eye\'s lens still focuses it onto the retina — but because you cannot see it, there is no blink reflex and no aversion response to protect you. The invisible model is the one marketed for bedrooms and hotel rooms. Note also that embedded.com describes a "450 nm pulsed IR laser", which is internally contradictory — 450 nm is blue, not infrared. The manufacturer\'s own 450 nm outdoor / 976 nm indoor split is the version to trust.',
  },
  {
    question: 'Is the Photon Matrix FDA-approved or EPA-registered in the United States?',
    answer: 'Neither term applies the way shoppers expect. Under FDA/CDRH rules (21 CFR 1040.10 and 1040.11), every laser product manufactured, assembled or imported into the US since August 1, 1976 must comply with the federal laser product performance standard, and the manufacturer must file a product report with CDRH covering design, hazard class and test data; FDA then issues an accession number that is needed to clear customs. That is a compliance filing, not an approval — and no accession number is published for this device, so a US buyer can and should ask the seller for it. On the EPA side, a laser mosquito killer is a pest control DEVICE, not a pesticide, so it is not registered under FIFRA section 3 — "not EPA registered" is normal here and is not by itself a red flag. But per the EPA Pesticide Registration Manual (Chapter 13, Devices), a regulated device must still be produced in an EPA-registered establishment, bear an EPA establishment number, and hold scientific data substantiating its efficacy claims, with misleading statements and diagrams prohibited. The mmWave radar is separately an intentional radio-frequency radiator and needs FCC equipment authorization to be marketed in the US.',
  },
  {
    question: 'What laser class is the Photon Matrix?',
    answer: 'The manufacturer does not publish one anywhere we can find, and that absence is the single most important fact on this page. Work with the numbers that are published: embedded.com describes 40-watt pulses lasting 10 milliseconds, which is about 0.4 joules per pulse, and 40 watts is eighty times the 500-milliwatt ceiling that separates Class 3B from Class 4 in the IEC/ANSI classification scheme. The device also does not publish beam divergence, so nobody outside the company can calculate exposure at a given distance. That does not prove the device is dangerous. It means no one can currently prove it is safe, which is a different problem with the same practical answer: do not point it at people, pets, or reflective surfaces, and do not treat a marketing sentence as a substitute for a published class.',
  },
  {
    question: 'Would a laser mosquito killer work on the US mosquitoes that spread West Nile virus?',
    answer: 'This is where the physics meets the biology badly. The primary West Nile vectors in the United States are Culex species — Culex pipiens in the north, Culex quinquefasciatus in the south, Culex tarsalis in the west and Culex nigripalpus in Florida — and per the CDC they bite mainly from dusk through the night, across the whole property, not in a 3-to-6-metre cone aimed at the patio. Aedes aegypti and Aedes albopictus, the aggressive daytime biters expanding across the South, Southwest and Mid-Atlantic and the vectors of dengue, chikungunya and Zika, fly low and shelter under furniture and vegetation. A device with a 90-degree field of view, a 6-metre maximum range and a 1 metre-per-second target-speed ceiling is not covering the places or the hours where those species actually bite. The CDC\'s own advice remains EPA-registered repellents, screens, and eliminating standing water.',
  },
  {
    question: 'How long is mosquito season in the US, and does that change whether a $988 device makes sense?',
    answer: 'Enormously, and it is the most useful piece of arithmetic on this page. Season length varies from about four active months in the Trans-Pecos and the northern tier to roughly nine on the Gulf Coast and effectively year-round in south Florida. A $988 indoor unit spread over a nine-month Gulf Coast season is about $110 per active month in year one; the same device in Minnesota, with roughly four active months, is about $247 per active month. Neither figure buys you whole-yard coverage — both buy you a 3-to-6-metre bubble. In Canada, where we work, the season runs roughly May to September and the same device lands near $198 per active month before exchange, duty and brokerage.',
  },
  {
    question: 'How does the Photon Matrix compare with Bzigo?',
    answer: 'They are answering different questions. Bzigo, the Israeli device the Times of Israel nicknamed an "Iron Dome" for mosquitoes, uses a camera to detect a mosquito and then marks where it landed with a low-power pointer so a person can deal with it. It deliberately does not fire a killing laser at a flying insect, which is why its safety story is much simpler. The Photon Matrix does fire, which is what makes it exciting and also what makes the missing laser class and missing CDRH accession number matter. If your goal is "find the mosquito in my bedroom", detection-and-marking is the lower-risk category; if your goal is "clear my yard", neither device is the tool — a barrier treatment or a CO₂ trap is.',
  },
  {
    question: 'Are the cheap handheld "laser mosquito killers" on marketplaces safe?',
    answer: 'No, and this is the one place on this page where we will be blunt rather than balanced. The shopping results for "laser mosquito killer" are full of grey-market handhelds listed as things like LY-1, LY-40W and LY-80W "handheld laser mosquito killing tools", and rechargeable "915 nm 120 W invisible light laser modules". An invisible 915 nm beam at anything approaching those advertised wattages sits inside the retinal hazard region with no blink reflex to protect you, no sensor deciding what is a bug and what is a face, and no published class or CDRH filing. There is no version of this that we would point at anything. Ignore the entire category.',
  },
  {
    question: 'What is the best mosquito killer for a US backyard right now?',
    answer: 'There is no single product — there is a stack, and in the US the first step is free. Roughly 400 to 500 organised mosquito abatement and vector control districts operate across the country, plus 1,000 to 2,000 smaller health-department and municipal programmes, and many will larvicide standing water and inspect a property at no charge; find yours through the American Mosquito Control Association (mosquito.org) or your county health department. After that: BTI in every bit of standing water, a propane CO₂ trap or a licensed barrier treatment for adults, and a repellent zone on the patio. Your state land-grant extension entomology service is the right place to check any device claim before you buy. A laser is none of these things.',
  },
  {
    question: 'Is the Photon Matrix a scam, or is it legit?',
    answer: 'The manufacturer is real and the product is now in production, so "scam" is the wrong word for the company — but the scam risk around it is genuine and it sits in the storefronts. Photon Matrix Lab Limited (Changzhou and Gusu District, Suzhou, Jiangsu, China) raised roughly USD $2.7 million from more than 4,000 backers in 50 countries on Indiegogo against a $20,000 goal, CGTN reported mass production beginning on August 16, 2026, and shipments started that month. The company itself published an anti-counterfeit notice on August 9, 2026 stating that no genuine units had shipped as of that date and warning that fraudulent sites were selling the device using AI-generated copy and stolen product images; it names store.photonmatrixlab.com as its only official sales channel. So three separate answers: the company is not fake, many of the storefronts are, and the performance claims are still unproven by any independent lab. We do not think buyers are being defrauded by the manufacturer, and we still would not buy one.',
  },
  {
    question: 'Has the Photon Matrix actually started shipping yet?',
    answer: 'Yes, as of August 2026. CGTN reported on August 16, 2026 that mass production had begun, and first shipments to campaign backers started that month. This is the fact that most reporting on the device is stale about: NPR reported on June 7, 2026 that units were not yet shipping and not yet in production, and the company\'s own anti-counterfeit notice of August 9, 2026 confirmed no genuine units had shipped as of that date. Everything changed in the second half of August. Pre-orders placed now at the manufacturer\'s store carry a quoted 120-day shipping estimate, and delivery on the original campaign had already slipped from early summer to August, so treat any promised date as an estimate and get it in writing.',
  },
  {
    question: 'What are the Photon Matrix complaints, and what do backers actually report?',
    answer: 'The substantive complaints on record are about fulfilment and support rather than fraud. The Register reported on August 17, 2026 that refund requests were going unanswered, that refunds are available only up until an order ships, that delivery had slipped from early summer to August, and that backers asking whether the lasers could interfere with aircraft had not received an answer. What does not yet exist is a body of independent long-term owner reviews: shipments only began in August 2026, so almost nobody has run a unit through a full season, and most pages presenting themselves as reviews of this device are rewrites of the manufacturer\'s press material. A campaign that overshot its goal roughly 135-fold was always going to have a support backlog, which explains the pattern without excusing an unanswered safety question from a paying customer.',
  },
  {
    question: 'Can you get a refund on a Photon Matrix order?',
    answer: 'Only before it ships. Per The Register (August 17, 2026), the refund window closes at dispatch, and backers reported requests going unanswered inside that window. A 120-day shipping estimate is not 120 days of refund eligibility — the clock is controlled by the seller\'s dispatch schedule, not by the buyer. Three practical steps follow: send any refund request in writing early and keep the timestamp; pay with a card that gives you a chargeback path, because a card dispute is a separate remedy that survives an unanswered email while a bank transfer or crypto payment is not; and price the return, not just the purchase, because warranty service and returns run to China and a 12-month warranty is worth what the return shipping costs.',
  },
  {
    question: 'Where do you buy a Photon Matrix, and how do you spot a fake store?',
    answer: 'The manufacturer sells direct at store.photonmatrixlab.com and names it as its only official channel; the device is not stocked at any US or Canadian retailer and is not on Amazon.ca. The company maintains a scam-warning page because lookalike storefronts are the main way people lose money on this product. Checks that take about ninety seconds: compare the domain character by character against the official one, because counterfeits work through hyphens, extra words and swapped top-level domains; treat a price well under the roughly $988 indoor / $1,088 outdoor USD figures as a warning rather than a deal, since there is no legitimate discount channel; distrust any "in stock, ships in 2 to 3 days" claim, which contradicts the manufacturer\'s own 120-day estimate; confirm the seller publishes a company name and registered address; reverse-image-search the product photos, since stolen manufacturer imagery is the specific failure mode the company warned about; and pay with a method that has a chargeback path.',
  },
  {
    question: 'What laser class is the Photon Matrix — has one finally been published?',
    answer: 'A figure has now been reported, though not on a label we can find. Intelligent Living reports the device as Class 4, citing EN 60825-1, the European harmonised version of the IEC 60825-1 laser-safety standard and the counterpart to the ANSI Z136.1 scheme. If correct, that confirms rather than overturns the inference this page drew from the published wattage: 40-watt pulses sit eighty times above the 500 mW boundary separating Class 3B from Class 4. Class 4 is the highest and most hazardous class — the tier where the direct beam and even a diffuse reflection off a wall or patio table can be an eye hazard, and where a workplace is expected to control access and provide eye protection. Two cautions: a class reported in an article is not a class printed on the label or filed with the FDA\'s CDRH, and Class 4 is not by itself a scandal, since many legitimate industrial and medical lasers are Class 4 and are operated safely by trained people in controlled rooms. The narrower objection stands: a Class 4 device left running unattended on a patio or in a bedroom, near children, pets and reflective surfaces, on the strength of an untested software interlock, is an unusual deployment. EN 60825-1 is also a European standard — it is not Health Canada authorisation, CSA certification, or ISED authorisation for the millimetre-wave radar.',
  },
  {
    question: 'How does the Photon Matrix compare with the Bzigo IRIS on price?',
    answer: 'The shipping Bzigo product is the Bzigo IRIS at roughly USD $299, a little under a third of the Photon Matrix indoor unit at about $988. The gap buys a different promise, not a worse version of the same one: IRIS watches a room, locates the mosquito, and marks where it landed with a low-power pointer, leaving the kill to you. It never fires a killing laser, which is why its safety story is far simpler and why no laser class question hangs over it. It also does not work outdoors and will not clear a yard. If the bedroom rather than the deck is the real problem, an indoor mosquito trap or a UV-and-fan unit costs a fraction of either device and is stocked in Canada today.',
  },
  {
    question: 'Does the Photon Matrix only target mosquitoes, or would it hit pollinators too?',
    answer: 'The published target window is roughly 2 mm to 20 mm, and the upper end of that is the part most coverage omits. Twenty millimetres is not a mosquito — it is a honeybee, a hoverfly, a small moth, or a bumblebee at the top of the range. The device filters targets by size and speed (a stated minimum of about 2 mm, moving under about 1 metre per second), not by species. By contrast, the 2007 Intellectual Ventures lab system identified insects by wing-beat frequency precisely enough to distinguish species and even sex, so it could engage only biting females. A size-and-speed gate is a much blunter instrument, and that is worth knowing before leaving a unit running unattended beside a pollinator border or a flowering hedge.',
  },
  {
    question: 'Who invented the mosquito laser, and why did the original never ship?',
    answer: 'The "photonic fence" was commissioned by the Gates Foundation in 2007 and built at Intellectual Ventures by a team that included Lowell Wood — a Strategic Defense Initiative physicist who worked with Edward Teller — along with Jordin Kare, Eric Johanson and several Lawrence Livermore alumni. The prototype used an infrared LED fence and CCD cameras, identified mosquitoes by wing-beat frequency (down to species and sex, so it could target only the biting females), and reportedly engaged 50 to 100 mosquitoes a second at around 30 metres — five times the range of any consumer device today. The programme ran roughly a decade, to about 2017. Per New Atlas, the prototype still was not eye-safe when it wound down. A far better-funded team, with a much longer runway, did not solve the safety problem. That history is the reason for our caution, not marketing skepticism.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Laser mosquito killer & Photon Matrix, honest 2026 reality-check: is the tech real, is it shipping, price, eye-safety concerns — plus what actually works in a Canadian yard today.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('laser-mosquito-killer-photon-matrix-review')

export default function LaserMosquitoKillerPhotonMatrixPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Honest 2026 reality-check on laser mosquito killers and the crowdfunded Photon Matrix, plus what actually works in a Canadian backyard.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Laser Mosquito Killer Review', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Laser Mosquito Killer Review</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A skeptical, plain-English look at &ldquo;laser mosquito killers&rdquo; and the crowdfunded Photon Matrix &mdash; is the tech real, is it actually shipping, what does it cost, is it safe, and what should you buy instead this summer?</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Is the laser mosquito killer (Photon Matrix) real?</h2>
          <p className="text-base text-gray-800 leading-relaxed speakable">
            <strong>The science is real, but a safe, affordable, shipping backyard product is not &mdash; the Photon Matrix is best treated as a crowdfunded pre-order, not something you can count on this summer.</strong> The &ldquo;photonic fence&rdquo; idea (a sensor spots a mosquito and a laser zaps it) was demonstrated in labs over a decade ago, and prototype demo videos are genuinely impressive. What is missing in 2026 is independent testing, recognized eye-safety certification, and a normal in-stock Canadian price &mdash; so for real relief this season, stick with proven tools like a <Link href="/blog/best-mosquito-trap" className="text-emerald-700 underline">propane CO₂ trap</Link>, Thermacell, or <Link href="/mosquito-control" className="text-emerald-700 underline">professional barrier spray</Link>.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>The Photon Matrix is a crowdfunded pre-order at roughly $450–$700 CAD before shipping and duty — more than a full season of professional service.</li>
            <li>No laser mosquito device carries recognized Health Canada or CSA eye-safety certification as of 2026.</li>
            <li>Lasers do nothing for ticks — ticks do not fly, so an airborne targeting device cannot reach them.</li>
            <li>Proven alternative: a propane CO₂ trap (Mosquito Magnet) cuts mosquito populations 70–90% over 6 to 8 weeks.</li>
            <li>Proven alternative: a Thermacell creates a roughly 20 sq metre repellent zone within minutes.</li>
            <li>Professional barrier spray covers the whole yard from $99 with 21–30 days of residual and also kills ticks.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Mosquito Magnet Propane CO₂ Trap" asin="B07QFNSC8Z" search="mosquito magnet trap" label="Proven pick instead" />

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Reality Check · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Laser Mosquito Killer: Hype vs. What You Can Actually Buy</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            The laser mosquito killer is a real research concept wrapped in a lot of crowdfunding marketing. Here is the honest status of each part of the pitch &mdash; and, in the last column, what actually works today with a live Canadian price check.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-[560px] w-full text-sm">
                <thead className="bg-brand-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Option</th>
                    <th className="px-4 py-3 text-left">Status in 2026</th>
                    <th className="px-4 py-3 text-left">Approx. cost (CA)</th>
                    <th className="px-4 py-3 text-left">Where / price check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">Photon Matrix laser</td>
                    <td className="px-4 py-3 text-gray-700">Crowdfunded pre-order &mdash; unproven</td>
                    <td className="px-4 py-3 font-mono text-gray-800">~$450 – $700+</td>
                    <td className="px-4 py-3 text-xs text-gray-600">Campaign only · not in Canadian retail</td>
                  </tr>
                  <tr className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">Propane CO₂ trap (Mosquito Magnet)</td>
                    <td className="px-4 py-3 text-gray-700">Proven · in stock</td>
                    <td className="px-4 py-3 font-mono text-gray-800">$400 – $1,300</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="mosquito magnet trap" block>Check price on Amazon.ca →</BuyLink></td>
                  </tr>
                  <tr className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">Thermacell patio repellent</td>
                    <td className="px-4 py-3 text-gray-700">Proven · in stock</td>
                    <td className="px-4 py-3 font-mono text-gray-800">$35 – $220</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="thermacell patio shield" block>Check price on Amazon.ca →</BuyLink></td>
                  </tr>
                  <tr className="border-b border-navy-50">
                    <td className="px-4 py-3 font-bold text-brand-800">BTI dunks (larvae control)</td>
                    <td className="px-4 py-3 text-gray-700">Proven · in stock</td>
                    <td className="px-4 py-3 font-mono text-gray-800">$15 – $30 / season</td>
                    <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="mosquito dunks bti" block>Check price on Amazon.ca →</BuyLink></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-brand-800">Professional barrier spray</td>
                    <td className="px-4 py-3 text-gray-700">Proven · whole-yard · also kills ticks</td>
                    <td className="px-4 py-3 font-mono text-gray-800">From $99 / treatment</td>
                    <td className="px-4 py-3"><Link href="/free-yard-assessment" className="text-emerald-700 underline font-semibold">Free quote →</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 rounded-xl border-2 border-sky-300 bg-sky-50 p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800 mb-1">Row 1 has since been superseded &mdash; current status, September 2026</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              The Photon Matrix row above was written in July 2026, when the device was a pre-order, and it is kept exactly as published. <strong>Current status:</strong> it is on sale direct from the manufacturer at <strong>store.photonmatrixlab.com</strong> &mdash; the only channel the company recognises as its own &mdash; at roughly <strong>USD $988 indoor / $1,088 outdoor</strong> (Tom&rsquo;s Hardware, Fox Business), and CGTN reported on <strong>August 16, 2026</strong> that mass production had begun. What has <em>not</em> changed: no Canadian retail listing, no Canadian price, no Canadian warranty depot, and a quoted <strong>120-day</strong> shipping estimate on pre-orders. The dated timeline, the refund terms, and the counterfeit-storefront problem are in the section immediately below.
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Laser-device figures are crowdfunding pledge estimates converted to CAD before shipping, duty, and campaign risk &mdash; not confirmed Canadian retail prices. Retail device prices accurate as of July 2026 and vary by model and season.
          </p>
          <div className="mt-5 rounded-xl bg-rose-50 border-l-4 border-rose-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-rose-900">⚠️ Crowdfunding is not shopping.</strong> Backing a laser mosquito campaign means paying now for a product that may ship late, ship different, or never ship &mdash; and with no recognized eye-safety certification yet, it is not something we can recommend pointing at your backyard. For guaranteed relief this season, a <Link href="/blog/best-mosquito-trap" className="text-emerald-700 underline font-semibold">proven trap</Link> or <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">professional barrier spray</Link> is the safe money.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 border-y-4 border-sky-300 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-sky-800 uppercase tracking-wider mb-2">Update · September 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">It Is Now On Sale &mdash; and the Verdict Above Still Stands</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            The section above was written in July 2026, when the Photon Matrix was a crowdfunding pre-order. That has changed, and we are leaving the July text in place rather than quietly rewriting it. As of September 2026, US outlets report the device on sale online. Sources still disagree about the price and about whether units are actually shipping, so here is every published figure side by side rather than a single number we cannot stand behind.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[620px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Source</th>
                  <th className="px-4 py-3 text-left">What it reports</th>
                  <th className="px-4 py-3 text-left">Price quoted (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Tom&rsquo;s Hardware</td>
                  <td className="px-4 py-3 text-gray-700">Now available to buy online; 12-month warranty; outdoor unit specced at a 20-foot, 90&deg; field, 360&deg; on a rotating base, insects down to 2&nbsp;mm travelling up to 3.3&nbsp;ft/sec, roughly 4&ndash;5 hours on a power bank</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$988 indoor<br />$1,088 outdoor</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Fox Business</td>
                  <td className="px-4 py-3 text-gray-700">Reports the device reaching the market, sold online rather than through retail</td>
                  <td className="px-4 py-3 font-mono text-gray-800">Same range</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">NPR (June 7, 2026)</td>
                  <td className="px-4 py-3 text-gray-700">Reported that units were <strong>not yet shipping and not yet in production</strong> &mdash; directly contradicting the &ldquo;on sale now&rdquo; framing</td>
                  <td className="px-4 py-3 font-mono text-gray-800">~$638</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-bold text-brand-800">Indiegogo campaign (via New Atlas)</td>
                  <td className="px-4 py-3 text-gray-700">Pledge tiers, with higher figures quoted as eventual retail</td>
                  <td className="px-4 py-3 font-mono text-gray-800">$468 Basic / $629 Pro<br />($697 / $897 retail)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-brand-800">Manufacturer FAQ</td>
                  <td className="px-4 py-3 text-gray-700">Two lines: a <strong>450&nbsp;nm visible blue laser</strong> for outdoors and a <strong>976&nbsp;nm invisible infrared laser</strong> for indoors; 12-month warranty; a stated auto-disable interlock</td>
                  <td className="px-4 py-3 font-mono text-gray-800">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            All figures are manufacturer claims or third-party reporting of them, listed with the source that published each one. No independent lab result has been published for any consumer laser mosquito device as of September 2026. No Canadian retail price exists; the CAD figures in the July table above were pledge-tier conversions.
          </p>
          <div className="mt-5 rounded-xl bg-white border-l-4 border-brand-500 p-4">
            <p className="text-sm font-extrabold text-brand-900 mb-2">What changed &mdash; and the five things that did not</p>
            <p className="text-sm text-gray-800 leading-relaxed mb-2"><strong>Changed:</strong> you can now buy one. &ldquo;It is not purchasable&rdquo; is no longer the right objection, and we have retired it.</p>
            <ul className="text-sm text-gray-800 space-y-1.5 list-disc pl-5">
              <li><strong>Still no published laser class</strong> &mdash; no IEC or ANSI classification appears anywhere in the manufacturer&rsquo;s materials.</li>
              <li><strong>Still no FDA/CDRH accession number</strong> published, the filing every laser product imported into the US is meant to have (21 CFR 1040.10).</li>
              <li><strong>Still no independent efficacy test</strong> &mdash; every performance number traces back to the seller.</li>
              <li><strong>Still 3 to 6 metres.</strong> That is a patio corner. Mosquitoes breed and rest across the whole property.</li>
              <li><strong>Still nothing for ticks.</strong> Ticks do not fly, so no airborne targeting device can reach them.</li>
            </ul>
            <p className="text-sm text-gray-800 leading-relaxed mt-3">Availability moved. The evidence did not. At roughly $988&ndash;$1,088 USD, you are buying a 3-to-6-metre bubble with an unpublished safety class &mdash; while <Link href="/mosquito-control" className="text-emerald-700 underline font-semibold">whole-yard barrier treatment</Link> starts from $99 and also handles ticks.</p>
          </div>
        </div>
      </section>

      <section className="bg-white border-b-4 border-rose-300 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-rose-700 uppercase tracking-wider mb-2">Update · Production, Refunds &amp; Counterfeit Storefronts</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">It Is Now In Production &mdash; and That Created Three New Problems</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Between June and September 2026 this stopped being a &ldquo;does it exist&rdquo; question and turned into a &ldquo;did my money buy anything&rdquo; question. Three things happened in close succession: production actually started, backers who had been waiting since the campaign began asking publicly about refunds, and a crop of fake storefronts appeared selling a device that had not shipped to anyone yet. The order of those events matters more than any single headline, so here is the dated sequence with the source attached to each line.
          </p>
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm">
            <table className="min-w-[680px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">What happened</th>
                  <th className="px-4 py-3 text-left">Reported by</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-mono text-gray-800 whitespace-nowrap">2025&ndash;2026</td>
                  <td className="px-4 py-3 text-gray-700">Indiegogo campaign raises roughly <strong>USD $2.7 million from 4,000+ backers across 50 countries</strong> against a stated goal of $20,000 &mdash; about <strong>135&times; oversubscribed</strong>. Delivery is indicated for early summer 2026.</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Campaign figures via press coverage</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-mono text-gray-800 whitespace-nowrap">Jun 7, 2026</td>
                  <td className="px-4 py-3 text-gray-700">Units reported as <strong>not yet shipping and not yet in production</strong>; price quoted near USD $638.</td>
                  <td className="px-4 py-3 text-xs text-gray-600">NPR</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-mono text-gray-800 whitespace-nowrap">Aug 9, 2026</td>
                  <td className="px-4 py-3 text-gray-700">The company publishes an <strong>anti-counterfeit notice</strong> stating that <strong>no genuine units had shipped as of that date</strong>, and warns that fraudulent sites are selling the product using AI-generated copy and stolen product images.</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Photon Matrix Lab notice</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-mono text-gray-800 whitespace-nowrap">Aug 16, 2026</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Mass production begins.</strong> This is the single fact most shoppers are checking in 2026, and it is the one our July section could not have.</td>
                  <td className="px-4 py-3 text-xs text-gray-600">CGTN</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-mono text-gray-800 whitespace-nowrap">Aug 17, 2026</td>
                  <td className="px-4 py-3 text-gray-700">Backer complaints reported: <strong>unanswered refund requests</strong>, refunds available <strong>only until an order ships</strong>, delivery slipped from early summer to August, and unanswered backer questions about whether the lasers could interfere with aircraft.</td>
                  <td className="px-4 py-3 text-xs text-gray-600">The Register</td>
                </tr>
                <tr className="border-b border-navy-50">
                  <td className="px-4 py-3 font-mono text-gray-800 whitespace-nowrap">Aug 2026</td>
                  <td className="px-4 py-3 text-gray-700"><strong>First shipments begin</strong> to campaign backers.</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Manufacturer / press coverage</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-gray-800 whitespace-nowrap">Sep 2026</td>
                  <td className="px-4 py-3 text-gray-700">On general sale at <strong>store.photonmatrixlab.com</strong> at roughly <strong>$988 indoor / $1,088 outdoor USD</strong>, 12-month warranty, free worldwide shipping with <strong>duties and VAT payable by the buyer</strong>, and a <strong>120-day</strong> shipping estimate quoted on pre-orders.</td>
                  <td className="px-4 py-3 text-xs text-gray-600">Tom&rsquo;s Hardware · Fox Business · official store</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Dates and figures as reported by the named outlet or published by the manufacturer. We have not handled a unit, tested one, or bought one &mdash; BuzzSkito is a licensed spray company, not a test lab, and nothing on this page is a product test.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-navy-100 bg-white p-5">
              <p className="text-sm font-extrabold text-brand-900 mb-2">Who is actually behind it</p>
              <p className="text-sm text-gray-800 leading-relaxed">The seller is <strong>Photon Matrix Lab Limited</strong>, with addresses given in <strong>Changzhou</strong> and in the <strong>Gusu District of Suzhou, Jiangsu province, China</strong>. That is a normal thing for a hardware company to be and it is not an accusation &mdash; but it is information that appears nowhere in most of the coverage, and it answers a question a lot of buyers are quietly asking. Two practical consequences follow from it: warranty service and returns run to China, and the company had no manufacturing track record before this product.</p>
            </div>
            <div className="rounded-xl border border-navy-100 bg-white p-5">
              <p className="text-sm font-extrabold text-brand-900 mb-2">What 135&times; oversubscribed actually means</p>
              <p className="text-sm text-gray-800 leading-relaxed">A campaign that asks for $20,000 and receives $2.7 million has not been validated by that result &mdash; it has been handed a manufacturing problem roughly a hundred times larger than the one it planned for. Delivery slipping from early summer to August, and refund requests going unanswered while the team scaled production, are the predictable shape of that gap rather than evidence of bad faith. It is also exactly why the shipping date and the refund window are the two things to pin down in writing before paying.</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-rose-50 border-l-4 border-rose-500 p-5">
            <p className="text-sm font-extrabold text-rose-900 mb-2">The counterfeit-storefront problem &mdash; read this before you type a card number</p>
            <p className="text-sm text-gray-800 leading-relaxed mb-3">
              The manufacturer itself maintains a scam-warning page and published an anti-counterfeit notice on <strong>August 9, 2026</strong> stating that <strong>no genuine units had shipped at that point</strong> &mdash; which means every &ldquo;in stock, ships today&rdquo; Photon Matrix listing that existed before mid-August was selling something the factory had not yet made. The notice describes fraudulent sites built with <strong>AI-generated product copy and stolen product images</strong>, and the company names <strong>store.photonmatrixlab.com</strong> as its only official sales channel.
            </p>
            <p className="text-sm text-gray-800 leading-relaxed mb-2"><strong>How to check a storefront in about ninety seconds:</strong></p>
            <ul className="text-sm text-gray-800 space-y-1.5 list-disc pl-5">
              <li><strong>Compare the domain character by character</strong> against the official one. Counterfeits in this category work by hyphens, extra words, and swapped top-level domains, not by looking obviously wrong.</li>
              <li><strong>A price far under $988&ndash;$1,088 is the tell,</strong> not the bargain. There is no legitimate discount channel; the manufacturer sells direct.</li>
              <li><strong>&ldquo;In stock, ships in 2&ndash;3 days&rdquo; contradicts the manufacturer&rsquo;s own 120-day estimate.</strong> Any store promising faster is either not selling this product or not selling anything.</li>
              <li><strong>Look for a company name, a registered address and a warranty term.</strong> The real seller publishes Photon Matrix Lab Limited and a Jiangsu address; a fake storefront usually publishes a contact form and nothing else.</li>
              <li><strong>Pay with a method that has a chargeback path.</strong> Bank transfer, crypto, or a &ldquo;friends and family&rdquo; payment removes the only recourse you have.</li>
              <li><strong>Reverse-image-search the product photos.</strong> Stolen manufacturer imagery is the specific failure mode the company is warning about.</li>
            </ul>
            <p className="text-sm text-gray-800 leading-relaxed mt-3">We link to none of these stores, official or otherwise, and we earn nothing either way &mdash; the buttons on this page go to Amazon.ca for the proven alternatives, and the Photon Matrix is not one of them. If the fake-storefront problem is what brought you here, it is worth knowing that the whole gadget-repellent aisle attracts the same pattern: our <Link href="/blog/ultrasonic-pest-repellers-do-they-work" className="text-emerald-700 underline font-semibold">ultrasonic pest repeller breakdown</Link> covers a category where the marketing has outrun the evidence for forty years, and the <Link href="/blog/best-mosquito-repellent-device-canada" className="text-emerald-700 underline font-semibold">mosquito repellent device guide</Link> sorts the ones with published data from the ones without.</p>
          </div>

          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-500 p-5">
            <p className="text-sm font-extrabold text-amber-900 mb-2">The refund clause worth reading twice</p>
            <p className="text-sm text-gray-800 leading-relaxed">Per The Register&rsquo;s August 17, 2026 reporting, refunds on this product are available <strong>only up until the point an order ships</strong>, and backers described refund requests going unanswered. Put those two facts together and you get the practical rule: <strong>the window closes on the seller&rsquo;s schedule, not yours.</strong> If you are on a pre-order and having second thoughts, the decision is time-limited in a way an ordinary retail purchase is not &mdash; and a 120-day shipping estimate is not 120 days of refund eligibility. The same reporting notes that backers asking whether the lasers could interfere with aircraft did not get an answer; we cannot assess that question, and we have not seen anyone who can, but an unanswered safety question from a paying customer is itself a data point about support responsiveness.</p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Laser Mosquito Killer — Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Core idea', 'Sensor (camera/lidar) detects a flying insect, laser zaps it — the "photonic fence"'],
                  ['Origin of the tech', 'Lab demos (Intellectual Ventures / Global Good) over a decade ago'],
                  ['Most-hyped consumer device', 'Photon Matrix (lidar + targeting laser)'],
                  ['Availability in 2026', 'Crowdfunding pre-orders — no normal Canadian retail stock'],
                  ['Claimed coverage', 'A few metres (manufacturer/campaign claim, not independently verified)'],
                  ['Independent lab proof', 'None published for the consumer devices'],
                  ['Eye/pet safety certification', 'No recognized Health Canada / CSA certification cited'],
                  ['Tick effectiveness', 'None — ticks do not fly'],
                  ['Approx. pledge price', '~$450 – $700+ CAD before shipping/duty'],
                  ['Risk', 'Crowdfunding: late, changed, or undelivered product'],
                  ['Proven alternative today', 'Propane CO₂ trap, Thermacell, BTI dunks, barrier spray'],
                  ['US retail price (Sept 2026 update)', 'Reported at ~$988 USD indoor / ~$1,088 USD outdoor, sold online with a 12-month warranty (Tom\'s Hardware, Fox Business)'],
                  ['Conflicting report', 'NPR (June 7, 2026) put the price near $638 USD and said units were not yet shipping or in production'],
                  ['Published model lines', 'Basic and Pro; outdoor = 450 nm visible blue laser, indoor = 976 nm invisible infrared (manufacturer FAQ)'],
                  ['Claimed range (published)', '3 m (Basic) / 6 m (Pro), 90° field of view, IP68 to 1.5 m for 30 min — New Atlas spec table'],
                  ['Claimed kill rate', 'Up to 30 mosquitoes per second, ~3 ms detection, 2 mm minimum target, 1 m/s maximum target speed (manufacturer claim)'],
                  ['Claimed mechanism', '3D LiDAR + galvanometer-steered mirrors + kinematic prediction, with mmWave radar as the human/pet interlock (embedded.com)'],
                  ['Claimed pulse', '40 watts for 10 milliseconds ≈ 0.4 joules per pulse (embedded.com)'],
                  ['Published laser class', 'None stated — no IEC or ANSI classification given anywhere'],
                  ['US FDA / CDRH status', 'No accession number published; 21 CFR 1040.10 & 1040.11 apply to every laser product imported into the US'],
                  ['US EPA status', 'A pest control DEVICE, so not registered under FIFRA §3 — but devices still need an EPA establishment number and efficacy data'],
                  ['Origin of the consumer device', 'Jim Wong, Changzhou, China — first and only Indiegogo project on record (New Atlas)'],
                  ['Origin of the underlying tech', 'Gates Foundation → Intellectual Ventures, 2007; Lowell Wood, Jordin Kare, Eric Johanson; ~50–100 mosquitoes/sec at ~30 m'],
                  ['Why the original stopped', 'Per New Atlas, the 2007–2017 Intellectual Ventures prototype still was not eye-safe when the programme wound down'],
                  ['Manufacturer', 'Photon Matrix Lab Limited — Changzhou and Gusu District, Suzhou, Jiangsu, China'],
                  ['Campaign result', '~USD $2.7M from 4,000+ backers in 50 countries against a $20,000 goal — roughly 135× oversubscribed'],
                  ['Production status', 'Mass production began August 16, 2026 (CGTN); first shipments began August 2026'],
                  ['Company anti-counterfeit notice', 'Published August 9, 2026 — states no genuine units had shipped as of that date and warns of fake sites using AI-generated copy and stolen product images'],
                  ['Official sales channel', 'store.photonmatrixlab.com — the only channel the manufacturer recognises; free worldwide shipping, duties and VAT payable by the buyer'],
                  ['Pre-order shipping estimate', '120 days, quoted by the manufacturer'],
                  ['Refund window', 'Refunds available only until an order ships; unanswered refund requests reported (The Register, August 17, 2026)'],
                  ['Reported laser class', 'Class 4 reported by Intelligent Living, citing EN 60825-1 — a third-party figure, not a class we can find on a label or in a CDRH filing'],
                  ['Published target size window', '~2 mm to ~20 mm — the upper bound covers most flying insects, including pollinators'],
                  ['Closest named alternative device', 'Bzigo IRIS, ~USD $299 — detects and marks a mosquito with a low-power pointer; deliberately does not fire a killing laser'],
                  ['Bottom line', 'Real science, unproven product — watch, don\'t rely'],
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
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AwardRow tag={AMZ_TAG}
            heading="Skip the Gamble — The Real Alternatives You Can Buy Today"
            awards={[
              {
                badge: 'Best Real Alternative',
                name: 'Mosquito Magnet Propane CO₂ Trap',
                why: 'The device with real independent testing behind it — it burns propane to make genuine CO₂, heat, and moisture, the exact cues an egg-laying female hunts, then vacuums her in. Best suited to larger and cottage properties, in stock now, no pre-order lottery.',
                search: 'mosquito magnet trap',
                asin: 'B07QFNSC8Z',
                score: 8.9,
                featured: true,
                pros: ['Real independent testing, not demo-video hype', 'Available and shipping in Canada today', 'Targets the egg-laying females that seed the next generation'],
                cons: ['Premium up-front and seasonal running cost', 'Does nothing for ticks — no airborne device does'],
              },
              {
                badge: 'Best for Sitting Areas',
                name: 'Thermacell Patio Shield',
                why: 'Heats a repellent mat to create a roughly 20 sq metre bubble around a deck, dock, or campsite within minutes — the closest thing on this page to the instant relief the laser demos promise, except it ships today.',
                search: 'thermacell patio shield',
                score: 8.5,
                pros: ['Working within minutes — same-evening relief', 'Widely stocked at Canadian Tire, Home Depot, Costco'],
                cons: ['Covers one seating zone, not the whole yard', 'Ongoing refill mats to budget for'],
              },
              {
                badge: 'Best Budget Buy',
                name: 'Mosquito Dunks (BTI Larvae Control)',
                why: 'A few dollars a season to kill larvae in rain barrels, low spots, and clogged gutters before they ever fly — a naturally occurring bacterium harmless to pets, birds, and fish, and quietly one of the highest-value moves you can make.',
                search: 'mosquito dunks bti',
                score: 8.3,
                pros: ['$15–$30 covers a whole season', 'Stops the next generation at the source'],
                cons: ['Prevention only — no effect on biting adults', 'You have to find every standing-water spot'],
              },
            ]}
            whichToBuy={<>
              Want the biggest whole-property dent from a device you can order right now? The <strong>Mosquito Magnet</strong> is the proven pick. If your problem is really the patio at dusk, the <strong>Thermacell</strong> gets you there tonight for a fraction of a laser pledge. Only spending a few dollars? Start with <strong>BTI dunks</strong> in any standing water. And if you want the whole yard handled — ticks included, which no airborne device touches — <Link href="/mosquito-control">professional barrier spray</Link> starts from $99 per treatment.
            </>}
          />

          <h2 id="what-it-is">What Is a &ldquo;Laser Mosquito Killer&rdquo;?</h2>
          <p>The phrase covers a class of devices built on one idea engineers call a <strong>&ldquo;photonic fence.&rdquo;</strong> A sensor &mdash; a camera, or in newer designs a <strong>lidar</strong> (laser-ranging) unit &mdash; watches a slice of air. When something the size and wingbeat of a mosquito flies through, software identifies it, works out its position in a fraction of a second, and fires a small laser to kill or disable it. The most talked-about consumer version is the <strong>Photon Matrix</strong>, which pairs a lidar sensor with a targeting laser and, in its marketing, promises to knock mosquitoes out of the air within a few metres while sparing pets, hands, and faces.</p>
          <p>It is a genuinely cool concept, and it is not science fiction. The photonic fence was publicly demonstrated years ago by researchers who were exploring it as a tool against malaria-carrying mosquitoes in the developing world. So when someone asks &ldquo;is this real?&rdquo; the honest answer has two halves: the <em>underlying technology</em> is real and has been shown to work in controlled settings; a <em>safe, affordable, reliable product you can put in your Mississauga backyard</em> is not something that exists on store shelves in 2026.</p>

          <div className="not-prose my-6 rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-5">
            <p className="text-sm font-extrabold text-emerald-900 mb-1">Does the laser mosquito killer actually work? The honest answer.</p>
            <p className="text-sm text-gray-800 leading-relaxed">In a lab, the photonic-fence concept works &mdash; prototypes really can spot and hit a mosquito in flight. In your backyard, in 2026, there is no independently tested, safety-certified, in-stock consumer device that we can point to and say &ldquo;buy this, it works.&rdquo; The demo videos are real footage of prototypes; they are not proof of a shipping product that will clear your yard. For real relief right now, pair a proven trap with <Link href="/mosquito-control">professional barrier spray</Link> &mdash; whole-yard, 21&ndash;30 day residual, and it also handles ticks, which no laser addresses.</p>
          </div>

          <h2>The Photon Matrix: What&rsquo;s Real and What&rsquo;s Marketing</h2>
          <p>The Photon Matrix is the device most people mean when they search &ldquo;photon matrix mosquito killer.&rdquo; It has been promoted through crowdfunding-style campaigns and viral demo clips showing a lidar sensor tracking insects and a laser picking them off. Here is how to read those claims like a skeptic:</p>
          <ul>
            <li><strong>The demo footage is probably real &mdash; of a prototype.</strong> A working prototype that hits mosquitoes on a test bench is a real achievement. It is also a long way from a mass-produced unit that performs the same on a windy, buggy July evening in your yard.</li>
            <li><strong>&ldquo;Kills X mosquitoes per minute&rdquo; is a manufacturer claim.</strong> These numbers come from the people selling the device, not from independent labs. Treat them the way you would any unverified spec.</li>
            <li><strong>&ldquo;Safe for humans and pets&rdquo; needs certification, not a promise.</strong> The safety of any laser device depends on its power class and on software that reliably refuses to fire at anything bigger than a bug. A campaign page saying &ldquo;it&rsquo;s safe&rdquo; is not the same as recognized safety testing.</li>
            <li><strong>Coverage is small.</strong> Even the optimistic claims describe a few metres &mdash; a patio corner, not a whole yard. Mosquitoes breed and rest across your entire property and drift in from neighbours.</li>
          </ul>

          <h2>Laser Bug Zapper vs. Traditional Bug Zapper: Not the Same Thing</h2>
          <p>A lot of shoppers land on this page searching for a <strong>laser bug zapper</strong>, so it&rsquo;s worth untangling two very different devices that share a name. A <em>traditional</em> bug zapper is a passive UV lamp with an electrified grid &mdash; insects fly into it and get zapped. It&rsquo;s cheap, it&rsquo;s in every Canadian hardware store, and as our <Link href="/blog/bug-zappers-canada-do-they-work">full bug zapper breakdown</Link> shows, it kills almost entirely moths and beetles &mdash; mosquitoes are typically under 4% of the catch, because female mosquitoes hunt CO₂ and body heat, not UV light.</p>
          <p>A <em>laser</em> bug zapper like the Photon Matrix is the opposite philosophy: instead of waiting for insects to come to a light, it actively detects them in flight and shoots them down. In theory that means it could target mosquitoes specifically &mdash; the thing UV zappers fundamentally cannot do. In practice, the laser version exists only as crowdfunded prototypes, while the UV version is a proven product that simply solves a different problem (nuisance moths and gnats, not bites).</p>
          <p>So the honest buying advice splits cleanly: if you want a zapper you can plug in <em>tonight</em>, the <Link href="/blog/flowtron-bug-zapper-canada">Flowtron</Link> is the UV-grid unit Canadians actually buy &mdash; just buy it for the moths, not the mosquitoes. A laser bug zapper that ships, works as demoed, and carries recognized eye-safety certification does not exist at Canadian retail in 2026. Until it does, &ldquo;laser&rdquo; in a product listing is a marketing word, not a shipping technology.</p>

          <h2>Is It Actually Shipping? (The Crowdfunding Reality)</h2>
          <p>This is where enthusiasm meets economics. Backing a crowdfunding campaign is <strong>not the same as buying a product.</strong> You are pre-paying for something that may arrive late, arrive different from the demo, or never arrive at all &mdash; a well-documented pattern in hardware crowdfunding, especially for ambitious gadgets. Even for campaigns that do deliver, backers in Canada face shipping delays, customs and duty, voltage/plug differences, and little or no local warranty or repair support.</p>
          <p>So if your goal is a mosquito-free backyard <em>this</em> summer, a pre-order with an uncertain ship date does not solve your problem. If your goal is to be an early-adopter hobbyist who enjoys tinkering with novel tech and can absorb the risk, that is a different (and legitimate) motivation &mdash; just go in with clear eyes about what you are buying.</p>

          <h2>The Safety Question Nobody Should Skip</h2>
          <p>A laser strong enough to kill an insect mid-flight is not automatically harmless to a human eye or a curious dog at close range. The serious research versions of the photonic fence treated eye safety as a first-order design problem. A mass-market gadget lives or dies on the same question: <strong>how confident are you that the software will never misfire at a child&rsquo;s face, a pet, or a neighbour?</strong></p>
          <p>Until a backyard laser device carries recognized safety certification &mdash; the kind of testing you would expect from Health Canada, CSA, or an equivalent body &mdash; the cautious call is to treat it as experimental hardware, not a family-yard appliance. That is not fear-mongering; it is the same standard you would apply to anything that points an energy beam across a space where people and pets move.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Skip the sci-fi &mdash; let us handle it</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 &mdash; same-day relief, 21&ndash;30 day residual, backed by 150+ five-star reviews across 19 GTA cities. No pre-order, no lasers, no gamble.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>What Actually Works Today (and Where to Buy It in Canada)</h2>
          <p>While the laser idea matures, here is the honest, boring, effective toolkit that clears mosquitoes from a real Canadian backyard right now. Most homeowners get the best results by combining two or three of these rather than chasing a single silver-bullet gadget.</p>

          <h3>1. Propane CO₂ traps (the proven trap)</h3>
          <p>A <Link href="/blog/best-mosquito-trap">propane CO₂ trap</Link> like the Mosquito Magnet burns propane to make real CO₂, heat, and moisture &mdash; the exact cues a female mosquito hunts &mdash; then vacuums her in. Independent testing shows 70&ndash;90% population reduction over 6&ndash;8 weeks of continuous running. It is a real device you can order today, best suited to larger and cottage properties. Stocked at Costco Canada, Cabela&rsquo;s, Lee Valley, and Amazon.ca. <BuyLink tag={AMZ_TAG} search="mosquito magnet trap">Check Mosquito Magnet price →</BuyLink></p>

          <h3>2. Thermacell (instant patio bubble)</h3>
          <p>For same-evening relief in a seating area, a Thermacell heats a repellent mat to create a roughly 20 sq metre &ldquo;bubble&rdquo; around you within minutes &mdash; no laser, no wiring. It is the closest thing to instant gratification on this list, ideal for a deck, dock, or campsite. Widely stocked at Canadian Tire, Home Depot Canada, and Costco. <BuyLink tag={AMZ_TAG} search="thermacell patio shield">Check Thermacell price →</BuyLink></p>

          <h3>3. BTI dunks (stop the next generation)</h3>
          <p>Mosquitoes need standing water to breed. Drop a <strong>BTI dunk or bits</strong> (a naturally occurring bacterium harmless to pets, birds, and fish) into rain barrels, low spots, and clogged gutters and you kill larvae before they ever fly. It is a few dollars a season and quietly one of the highest-value moves you can make. <BuyLink tag={AMZ_TAG} search="mosquito dunks bti">Check BTI dunks price →</BuyLink></p>

          <h3>4. Professional barrier spray (whole-yard, plus ticks)</h3>
          <p>The most complete option is a licensed technician treating the shady, leafy vegetation where mosquitoes rest during the day. You get <strong>same-day relief and 21&ndash;30 days of residual coverage across the whole yard</strong> &mdash; and unlike any trap or laser, barrier treatment also knocks down <Link href="/mosquito-control">ticks</Link>, which no airborne device touches. For a typical GTA lot, this is the single most effective line item, starting from $99 per treatment.</p>

          <h2>Laser Mosquito Killer vs. Proven Solutions</h2>
          <div className="not-prose overflow-x-auto rounded-lg border border-navy-100 my-4">
          <table className="min-w-[560px] w-full text-sm border-collapse">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Solution</th><th className="px-3 py-2 text-left">Available now?</th><th className="px-3 py-2 text-left">Mosquito reduction</th><th className="px-3 py-2 text-left">Tick coverage</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Photon Matrix laser</strong></td><td className="px-3 py-2">No — crowdfunded</td><td className="px-3 py-2">Unproven</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet</Link></td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">70–90% (over 6–8 weeks)</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><Link href="/blog/thermacell-canada-where-to-buy">Thermacell</Link></td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">70–95% in a ~20m² zone</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier spray</strong></td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Whole yard 21–30 days</td><td className="px-3 py-2">Yes — full coverage</td></tr>
            </tbody>
          </table>
          </div>

          <h2 id="photon-matrix-specs">Photon Matrix Specifications: Basic vs. Pro, Indoor vs. Outdoor</h2>
          <p>When this page was first written there were no published numbers to hold the device to &mdash; only campaign adjectives. There are now. Two things have to be said before you read the tables. First, <strong>every figure below is a manufacturer or campaign claim relayed by a third party</strong>; no independent test lab has published a result for any consumer laser mosquito device, so read these as &ldquo;what the seller says&rdquo; and not as measurements. Second, there is more than one Photon Matrix, and the differences change the safety conversation completely &mdash; which is exactly why the marketing tends to blur them.</p>

          <h3>Basic vs. Pro &mdash; the published spec table</h3>
          <div className="not-prose overflow-x-auto rounded-lg border border-navy-100 my-4">
          <table className="min-w-[620px] w-full text-sm border-collapse">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Specification</th><th className="px-3 py-2 text-left">Basic</th><th className="px-3 py-2 text-left">Pro</th><th className="px-3 py-2 text-left">Where the number comes from</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Detection range</strong></td><td className="px-3 py-2">3 m (~10 ft)</td><td className="px-3 py-2">6 m (~20 ft)</td><td className="px-3 py-2 text-xs text-gray-600">New Atlas spec table</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Field of view</td><td className="px-3 py-2">90°</td><td className="px-3 py-2">90°</td><td className="px-3 py-2 text-xs text-gray-600">New Atlas</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Detection time</td><td className="px-3 py-2">~3 ms</td><td className="px-3 py-2">~3 ms</td><td className="px-3 py-2 text-xs text-gray-600">New Atlas</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Claimed engagement rate</td><td className="px-3 py-2">Up to 30 mosquitoes/sec</td><td className="px-3 py-2">Up to 30 mosquitoes/sec</td><td className="px-3 py-2 text-xs text-gray-600">Manufacturer claim</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Maximum target speed</td><td className="px-3 py-2">~1 m/s</td><td className="px-3 py-2">~1 m/s</td><td className="px-3 py-2 text-xs text-gray-600">New Atlas</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Minimum target size</td><td className="px-3 py-2">~2 mm</td><td className="px-3 py-2">~2 mm</td><td className="px-3 py-2 text-xs text-gray-600">New Atlas · Tom&rsquo;s Hardware</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Battery life</td><td className="px-3 py-2">8 hours</td><td className="px-3 py-2">16 hours</td><td className="px-3 py-2 text-xs text-gray-600">New Atlas</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Weather sealing</td><td className="px-3 py-2">IP68 (1.5 m / 30 min)</td><td className="px-3 py-2">IP68 (1.5 m / 30 min)</td><td className="px-3 py-2 text-xs text-gray-600">New Atlas</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Crowdfunding pledge (USD)</td><td className="px-3 py-2">$468</td><td className="px-3 py-2">$629</td><td className="px-3 py-2 text-xs text-gray-600">Indiegogo, via New Atlas</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Quoted retail (USD)</td><td className="px-3 py-2">$697</td><td className="px-3 py-2">$897</td><td className="px-3 py-2 text-xs text-gray-600">Indiegogo, via New Atlas</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Published laser class</strong></td><td className="px-3 py-2">None stated</td><td className="px-3 py-2">None stated</td><td className="px-3 py-2 text-xs text-gray-600">Absent from all materials</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Independent efficacy test</strong></td><td className="px-3 py-2">None published</td><td className="px-3 py-2">None published</td><td className="px-3 py-2 text-xs text-gray-600">&mdash;</td></tr>
            </tbody>
          </table>
          </div>
          <p>Read the range row twice. <strong>Six metres is the maximum, on the more expensive unit, in a 90-degree cone.</strong> A typical suburban lot &mdash; in Texas or in Toronto &mdash; is many times that in every direction, and mosquitoes rest in the shaded vegetation around the edges of it during the day, then drift in from a neighbour&rsquo;s untreated yard at dusk. The device is a patio-corner appliance being sold with yard-scale expectations.</p>
          <p>The 1 metre-per-second target-speed ceiling deserves a second look too. Mosquitoes are slow flyers, so that ceiling is plausible for the intended target &mdash; but it also tells you what else falls inside the envelope. Commenters on New Atlas&rsquo;s coverage raised exactly this: a system that engages small, slow-flying objects is describing most pollinators as well. The 2007 Intellectual Ventures lab device solved that by identifying mosquitoes on wing-beat frequency, down to species and sex. The published consumer spec is a size-and-speed filter, not a species filter.</p>
          <p>There is a second number in that filter that we published only half of, and the missing half sharpens the point. The spec table above lists a <strong>minimum</strong> target size of about 2 mm. The manufacturer&rsquo;s published target window is <strong>roughly 2 mm to 20 mm</strong> &mdash; and 20 mm is not a mosquito. Twenty millimetres is a honeybee, a hoverfly, a small moth, a bumblebee at the top of the range. A device advertised as a mosquito killer is describing an engagement envelope that comfortably contains most of the beneficial flying insects in a Canadian garden, and it identifies them by size and speed rather than by wingbeat. The 2007 lab system solved that with species-level wing-beat identification precise enough to spare males and target only biting females; a 2 mm-to-20 mm size gate is not that, and the difference is worth knowing before a unit runs unattended next to a pollinator border.</p>

          <h3>Indoor 976 nm vs. outdoor 450 nm &mdash; the split that matters most</h3>
          <p>The manufacturer&rsquo;s own FAQ divides the line by wavelength, and this is the single most useful thing on their site. It is also the piece almost every review skips.</p>
          <div className="not-prose overflow-x-auto rounded-lg border border-navy-100 my-4">
          <table className="min-w-[620px] w-full text-sm border-collapse">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">&nbsp;</th><th className="px-3 py-2 text-left">Outdoor model</th><th className="px-3 py-2 text-left">Indoor model</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Laser wavelength</strong></td><td className="px-3 py-2">450 nm &mdash; blue, <strong>visible</strong></td><td className="px-3 py-2">976 nm &mdash; near-infrared, <strong>invisible</strong></td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Marketed for</td><td className="px-3 py-2">Patios, decks, yards; 360° rotating base</td><td className="px-3 py-2">Bedrooms, hotel rooms, indoor living space</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Can you see the beam?</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">No &mdash; nothing to see, ever</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Blink-reflex protection</strong></td><td className="px-3 py-2">Partial &mdash; visible light triggers the roughly quarter-second aversion response</td><td className="px-3 py-2">None &mdash; invisible light triggers no reflex at all</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Inside the 400&ndash;1400 nm retinal hazard region?</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Yes</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Reported 2026 US price</td><td className="px-3 py-2">~$1,088 USD</td><td className="px-3 py-2">~$988 USD</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Published coverage / runtime</td><td className="px-3 py-2">20-ft, 90° field; ~4&ndash;5 h on a power bank (Tom&rsquo;s Hardware)</td><td className="px-3 py-2">Not published</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Published laser class</strong></td><td className="px-3 py-2">None</td><td className="px-3 py-2">None</td></tr>
            </tbody>
          </table>
          </div>
          <p>Here is why that table is the most important one on this page. The <strong>400&ndash;1400 nm band is what laser-safety standards call the retinal hazard region</strong> (ANSI Z136.1, and the FDA/CDRH laser rules at 21 CFR 1040): inside it, the lens of the eye focuses incoming light down onto the retina rather than stopping it at the cornea. Near-infrared at 976 nm is inside that band, but it is completely invisible &mdash; so there is no blink, no squint, no instinct to look away. With a visible blue beam you at least flinch. With an invisible one, the injury can be the first thing you notice. The invisible model is the one being marketed for bedrooms.</p>
          <p>One editorial note, because it tells you how carefully the specs have been handled: the engineering write-up at embedded.com describes a &ldquo;450 nm pulsed IR laser.&rdquo; That is internally contradictory &mdash; 450 nm is blue visible light, not infrared. The manufacturer&rsquo;s own 450 nm outdoor / 976 nm indoor split is the version to trust, and the muddle is a reminder that the numbers circulating about this device have not been through anyone&rsquo;s lab.</p>

          <h3>How it is supposed to work, step by step</h3>
          <div className="not-prose my-5 grid gap-2 sm:grid-cols-2">
            {[
              ['1 · Scan', '3D LiDAR sweeps the protected volume, building a depth picture of everything moving through it.'],
              ['2 · Classify', 'Software decides whether the moving thing is roughly mosquito-sized — a stated minimum of about 2 mm, moving under about 1 m/s.'],
              ['3 · Predict', 'A kinematic prediction algorithm works out where the target will be a few milliseconds from now, because the target does not fly in a straight line.'],
              ['4 · Aim', 'Galvanometer-driven mirrors steer the beam — the same mirror technology used in laser light shows, chosen because it can move far faster than any motorised gimbal.'],
              ['5 · Fire', 'A pulse of about 40 watts lasting 10 milliseconds — roughly 0.4 joules of energy per shot.'],
              ['6 · Interlock', 'Millimetre-wave radar is meant to detect people and pets, with an automatic shutdown for any object larger than about 2 cm².'],
            ].map(([step, detail]) => (
              <div key={step} className="rounded-xl border border-navy-100 bg-white p-4">
                <p className="text-xs font-extrabold uppercase tracking-wide text-emerald-700 mb-1">{step}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">Mechanism as described by embedded.com and the manufacturer. The same write-up carries a claim of at least 90% of insects cleared in under 10 minutes &mdash; again, a seller&rsquo;s figure with no independent test behind it.</p>

          <h2 id="is-the-photon-matrix-mosquito-zapper-real">Is the photon matrix mosquito zapper real?</h2>
          <p><strong>Yes &mdash; the device exists and, as of September 2026, US outlets including Tom&rsquo;s Hardware and Fox Business report it on sale online at roughly $988 to $1,088 USD with a 12-month warranty. What is not real is the proof: no published laser class, no FDA/CDRH accession number, no independent efficacy test, and a maximum range of six metres.</strong></p>
          <p>The word &ldquo;zapper&rdquo; is what causes the confusion, because it drags along everything people know about a UV bug zapper: a $60 purple lamp you hang from a tree. This is not that. It is a LiDAR-guided laser that identifies a flying target and shoots it, priced like a used appliance and sold direct rather than through any retailer you recognise. Both halves of that sentence are true at once, which is why the honest answer is neither &ldquo;it&rsquo;s a scam&rdquo; nor &ldquo;it works.&rdquo;</p>

          <h2 id="is-the-photon-matrix-mosquito-killer-real">Is the photon matrix mosquito killer real?</h2>
          <p><strong>It is a real product from a real company. New Atlas identifies the founder as Jim Wong of Changzhou, China, and notes it was his first &mdash; and only &mdash; Indiegogo project on record. Real is not the same as proven: reports on price and shipping still contradict each other, and no independent lab has confirmed a single performance claim.</strong></p>
          <p>That founder detail is worth sitting with rather than skipping. Hardware crowdfunding rewards a first-time creator with a spectacular demo video exactly as readily as it rewards a company with a manufacturing history, and the buyer carries the difference. The contradictions in the reporting are the tell: NPR said in June 2026 that units were not yet in production, while later coverage described the same device as available to buy. Both cannot be describing the same week. Ask the seller for a ship date in writing before you pay.</p>

          <h2 id="does-the-photon-matrix-really-work">Does the photon matrix really work?</h2>
          <p><strong>In demo footage it detects and hits mosquitoes &mdash; that part looks genuine. Whether it clears a yard is unanswered. The claim is up to 30 mosquitoes a second within three to six metres, and nobody independent has tested it. A six-metre bubble is a patio corner, not a property, and it does nothing whatsoever for ticks.</strong></p>
          <p>There is a useful distinction here that applies to every mosquito device ever sold: <em>killing mosquitoes</em> and <em>reducing bites</em> are different achievements. A UV bug zapper kills thousands of insects a night and, as our <Link href="/blog/bug-zappers-canada-do-they-work">bug zapper breakdown</Link> shows, barely dents mosquito numbers because it kills the wrong insects. A laser could kill the right insects and still not reduce bites, if the ones it kills are replaced within hours by more drifting in from the untreated three-quarters of your property. Nobody has published the only measurement that would settle it: bite counts, or trap counts, with the device on versus off.</p>
          <p>Compare that to what <em>is</em> measured. Propane CO₂ traps have independent testing behind a 70&ndash;90% population reduction over six to eight weeks. Barrier treatment has a measurable residual window of 21 to 30 days across an entire property. Those are the numbers a $988 device is competing against, and it has not brought any of its own.</p>

          <h2 id="how-much-does-the-photon-matrix-laser-cost">How much does the Photon Matrix laser cost?</h2>
          <p><strong>US reporting in 2026 puts it at about $988 USD for the indoor infrared unit and about $1,088 USD for the outdoor blue-laser unit, sold online with a 12-month manufacturer warranty (Tom&rsquo;s Hardware, Fox Business). Earlier Indiegogo pledge tiers were $468 and $629, with $697 and $897 quoted as eventual retail.</strong></p>
          <p>That is a price that roughly doubled between the campaign and the shelf, which is normal for crowdfunded hardware and worth knowing before you read any &ldquo;early bird&rdquo; figure as a real price. Note also which model costs more: the outdoor 450 nm blue unit is the pricier one, at around $1,088, and the indoor 976 nm infrared unit is around $988.</p>

          <h2 id="how-much-does-the-photon-matrix-cost">How much does the photon matrix cost?</h2>
          <p><strong>Budget well past the sticker. On top of roughly $988 to $1,088 USD, a US buyer adds sales tax and shipping. A Canadian buyer adds the exchange rate, duty and customs brokerage, which pushes an $1,088 device past $1,500 CAD before a single mosquito dies. Outdoor use also wants a power bank.</strong></p>
          <p>The landed cost is the number that matters, and it is the one no review quotes. Four line items get missed: the currency spread on the card, duty and brokerage at the border, a power bank for outdoor running (Tom&rsquo;s Hardware reports roughly four to five hours per charge on the outdoor unit), and the practical value of a warranty that has to be serviced overseas. A 12-month warranty is only worth what the return shipping costs.</p>
          <p>In the United States, none of the border items apply, but two others do: you are buying direct rather than from a retailer with a returns counter, and there is no US service depot named anywhere in the product materials.</p>

          <h2 id="how-much-does-a-mosquito-laser-cost">How much does a mosquito laser cost?</h2>
          <p><strong>Across the whole category the honest range runs from marketplace handhelds sold for tens of dollars &mdash; which we would not point at anything, for reasons below &mdash; up to the Photon Matrix at roughly $988 to $1,088 USD. Detection-only devices such as Bzigo are a separate class that never fires a killing laser at all.</strong></p>
          <p>The gap between those two ends of the market is not a value spectrum. It is the difference between a device with a sensor, an interlock and a warranty, and an unregulated laser module with a plastic handle. The cheap end of a shopping page for &ldquo;laser mosquito killer&rdquo; is not a budget version of the expensive end; it is a different and considerably worse product wearing the same search term.</p>

          <h2 id="how-much-is-the-photon-matrix-mosquito-control">How much is the photon matrix mosquito control?</h2>
          <p><strong>Treat it as a capital purchase, not a service. At about $988 USD covering three to six metres, a Gulf Coast owner with a nine-month season pays roughly $110 per active month in year one; a Minnesota owner with four active months pays about $247. Neither buys whole-yard coverage.</strong></p>
          <p>That per-month figure is the fair way to compare a device against a service, and it is a comparison the device does not survive well. <strong>In the United States</strong>, seasonal mosquito service in most metros is quoted per treatment or per season and covers the entire property, and &mdash; the part most homeowners never check &mdash; a great many US counties run a mosquito abatement district that will larvicide standing water for free. <strong>In Canada</strong>, where we operate, whole-yard barrier treatment starts from $99 and a full <Link href="/mosquito-control">seasonal plan</Link> covers May through September; a tick add-on is five treatments across the season, and no laser, at any price, does anything for ticks.</p>
          <p>Year two is where the comparison gets more interesting rather than less. The device is paid for by then, which is a genuine argument in its favour &mdash; but it is still a six-metre bubble that has never been independently tested, still has no published safety class, and now has a warranty that has expired.</p>

          <h2 id="can-you-buy-a-photon-matrix">Can you buy a photon matrix?</h2>
          <p><strong>As of September 2026, yes. Tom&rsquo;s Hardware and Fox Business report it on sale online, direct from the manufacturer, with a 12-month warranty. It is not stocked at any US or Canadian big-box retailer, and NPR reported in June 2026 that units were not yet in production &mdash; so confirm shipping status before you pay.</strong></p>
          <p>What you will not find is the thing most shoppers assume exists: a shelf. <strong>In the United States</strong>, Amazon.com search results for &ldquo;laser mosquito killer&rdquo; are dominated by grey-market handheld modules rather than this device, so a listing that looks like the Photon Matrix on a marketplace deserves a very close look at the seller. <strong>In Canada</strong>, there is no Canadian Tire, Home Depot Canada, Costco or Amazon.ca stock, no Canadian warranty depot, and any purchase crosses the border with the duty and brokerage that implies.</p>
          <p>Three questions to put to the seller in writing before paying, all of which have specific correct answers: what is your CDRH accession number, what laser class is the product labelled with, and what is the actual ship date for the model I am ordering.</p>

          <h2 id="is-the-photon-matrix-a-scam">Is the Photon Matrix a scam? Is it legit?</h2>
          <p><strong>The company is real, the product is real, and it is now in production &mdash; so &ldquo;scam&rdquo; is the wrong word for the manufacturer. The scam problem is downstream of it: Photon Matrix Lab published its own anti-counterfeit notice on August 9, 2026 saying no genuine units had shipped yet, and warning that fraudulent sites were selling the device using AI-generated copy and stolen product images. The risk to your money is far more likely to be a fake storefront than the manufacturer.</strong></p>
          <p>That distinction is the one almost nobody makes, and it changes what you should actually do. There are three separate questions hiding inside &ldquo;is it a scam,&rdquo; and they have three different answers:</p>
          <ul>
            <li><strong>Is the company fake?</strong> No. Photon Matrix Lab Limited is a real seller with addresses in Changzhou and the Gusu District of Suzhou, Jiangsu, China. It raised roughly USD $2.7 million from more than 4,000 backers in 50 countries on Indiegogo, mass production began on August 16, 2026 per CGTN, and shipments to backers started that month.</li>
            <li><strong>Are the store pages you are looking at fake?</strong> Quite possibly. This is the live risk. The manufacturer names <strong>store.photonmatrixlab.com</strong> as its only official channel and maintains a page listing fraudulent sites. Anything at a materially lower price, or promising stock and fast dispatch against the manufacturer&rsquo;s own 120-day estimate, deserves the ninety-second check earlier on this page before a card number goes anywhere near it.</li>
            <li><strong>Are the performance claims proven?</strong> No, and this is where our verdict has never moved. No independent lab has published a result. Every figure &mdash; 30 mosquitoes a second, three-millisecond detection, 90% cleared in ten minutes &mdash; traces back to the seller. &ldquo;Not a scam&rdquo; and &ldquo;proven to work&rdquo; are very far apart, and a lot of coverage collapses them.</li>
          </ul>
          <p>Our position, stated plainly so nobody has to infer it: <strong>we do not think you are being defrauded by the manufacturer, and we still would not buy one.</strong> Those are compatible. A legitimate company can sell an unproven product at a high price with an unpublished safety class, and the honest advice is still to wait.</p>

          <h2 id="photon-matrix-reviews-and-complaints">Photon Matrix reviews and complaints &mdash; what backers actually report</h2>
          <p><strong>The substantive complaints on record are about fulfilment and support, not about fraud. The Register reported on August 17, 2026 that refund requests were going unanswered, that refunds are available only until an order ships, that delivery had slipped from early summer to August, and that backers asking whether the lasers could interfere with aircraft had not received a reply.</strong></p>
          <p>What you will not find, anywhere, is the thing a shopper most wants: a body of independent owner reviews from people who have run one through a full season. Shipments only began in August 2026, which means as of this update almost nobody has owned a unit long enough to say whether it survives rain, whether the interlock behaves around a dog, or whether bite counts actually fall. Anything presented as a &ldquo;review&rdquo; before that is a rewrite of the press release &mdash; and a large share of the pages competing for this search term are exactly that.</p>
          <p>Reading the complaints fairly cuts both ways. A campaign that overshot its goal by roughly 135&times; was always going to have a support backlog and a slipped date; that pattern is the norm in hardware crowdfunding rather than a sign of bad faith. But an unanswered question about aircraft, from a paying customer, is a support failure regardless of the answer &mdash; and the refund clause below is the part that turns slow support into a real cost.</p>

          <h2 id="photon-matrix-refund-policy">Can you get a refund on a Photon Matrix order?</h2>
          <p><strong>Only before it ships. Per The Register&rsquo;s August 17, 2026 reporting, the refund window closes at dispatch, and backers described requests going unanswered inside that window. A 120-day shipping estimate is not 120 days of refund eligibility &mdash; the clock is controlled by the seller&rsquo;s dispatch schedule, not by you.</strong></p>
          <p>Three practical consequences follow, and they are the same three whether you are in Houston or Mississauga:</p>
          <ul>
            <li><strong>Ask for the refund in writing, early, and keep the timestamp.</strong> If support is slow and the window closes at dispatch, a request sent late is a request that may be overtaken by a shipping label.</li>
            <li><strong>Pay with a card that has a chargeback path.</strong> A card dispute is a separate remedy from the seller&rsquo;s own policy and survives an unanswered email; a bank transfer or crypto payment does not.</li>
            <li><strong>Price the return, not just the purchase.</strong> Warranty service and returns run to China. A 12-month warranty is worth exactly what the return shipping costs, and for a Canadian buyer that sits on top of the duty and brokerage already paid to get it here.</li>
          </ul>

          <h2 id="where-to-buy-photon-matrix-safely">Where do you actually buy one &mdash; and how do you avoid the fake stores?</h2>
          <p><strong>The manufacturer sells direct at store.photonmatrixlab.com and names it as its only official channel. It is not stocked at any US or Canadian retailer, it is not on Amazon.ca, and the company&rsquo;s own scam-warning page exists because fraudulent lookalike storefronts are the main way people are losing money on this product.</strong></p>
          <p>We are not linking to any storefront for this device, official or otherwise, and we earn nothing from it either way &mdash; the price-check buttons elsewhere on this page go to Amazon.ca for the proven alternatives, and the Photon Matrix is not one of them. If you have decided to buy regardless, the checks are the ones listed in the counterfeit section above: match the domain character by character, treat a low price as a warning rather than a deal, distrust any &ldquo;ships in 2&ndash;3 days&rdquo; claim against the manufacturer&rsquo;s own 120-day estimate, confirm the seller publishes the company name and a registered address, and pay with something you can dispute.</p>
          <p>One Canada-specific note that no US-written page will give you: <strong>free worldwide shipping does not mean free landing.</strong> The manufacturer&rsquo;s terms put duties and VAT on the buyer, so a $1,088 outdoor unit arrives in Ontario carrying the exchange spread, duty, and a courier brokerage fee on top &mdash; comfortably past $1,500 CAD before anything is switched on. For a like-for-like sense of what a device costs to <em>own</em> rather than to buy, our <Link href="/blog/mosquito-trap-running-cost-canada">mosquito trap running-cost breakdown</Link> does the same arithmetic for the traps that are actually stocked here.</p>

          <h2 id="is-the-laser-mosquito-killer-real">Is the laser mosquito killer real?</h2>
          <p><strong>The technology is real and older than most people realise. The Gates Foundation commissioned Intellectual Ventures to build a &ldquo;photonic fence&rdquo; in 2007; the team included Lowell Wood and Jordin Kare, and it demonstrably shot mosquitoes out of the air. What is new, small and unverified is the consumer version.</strong></p>
          <p>Keeping those two things apart is the whole skill of reading this category. A decade of serious, well-funded engineering proved the concept works. It did not produce a product. The consumer devices that followed inherited the idea and the demo-video appeal without inheriting the range, the species identification, or the eye-safety work &mdash; and, as the section on provenance below explains, the original never finished the eye-safety work either.</p>

          <h2 id="is-there-a-laser-machine-that-kills-mosquitoes">Is there a laser machine that kills mosquitoes?</h2>
          <p><strong>Yes, several exist. Lab photonic fences were doing it more than a decade ago at around 30 metres, and the Photon Matrix is a consumer version now on sale. Whether any of them meaningfully reduces bites in a real yard has never been shown by an independent test, and no consumer unit publishes a laser safety class.</strong></p>
          <p>It helps to sort the category into three honest tiers. <strong>Research systems</strong>: photonic fences built for malaria control, tens of metres of range, wing-beat species identification, never commercialised. <strong>Consumer systems</strong>: the Photon Matrix and its imitators, three to six metres, on sale, unverified. <strong>Handheld modules</strong>: unregulated laser diodes sold as insect tools, no sensor, no interlock, genuinely hazardous. Only the middle tier is a purchase decision, and only the top tier has ever been rigorously studied.</p>

          <h2 id="physics-of-a-mosquito-laser">The Physics: What &ldquo;40 Watts for 10 Milliseconds&rdquo; Actually Means</h2>
          <p>The safety section earlier on this page makes the argument in words. Here is the arithmetic, because the numbers are now published and the reasoning is not hard.</p>
          <p>embedded.com describes pulses of roughly <strong>40 watts lasting 10 milliseconds</strong>. Multiply them: 40 W &times; 0.010 s = <strong>0.4 joules of energy per pulse</strong>. For scale on the power figure, the IEC and ANSI laser classification scheme puts the boundary between Class 3B and Class 4 &mdash; the highest and most hazardous class, the one that requires controlled access and eye protection in a workplace &mdash; at 500 milliwatts. <strong>Forty watts is eighty times that boundary.</strong> Pulsed operation and beam geometry change how that instantaneous power translates into an exposure at a given distance, which is precisely the point: the manufacturer publishes neither a class nor a beam divergence, so nobody outside the company can run that calculation.</p>
          <p>Now put that beside the interlock. Millimetre-wave radar plus an automatic shutdown for anything larger than about 2 cm² is a real engineering effort, and it deserves credit as one. It is also a software judgement made in milliseconds, and it has two failure modes it cannot cover by design. The first is anything smaller than the threshold &mdash; 2 cm² is roughly a postage stamp, and a fingertip or an eyelid at the wrong moment is a decision the software has to make correctly every single time. The second is reflection: a 450 nm blue beam bouncing off a window, a stainless barbecue lid, a glass patio table or a pool surface is not an object in the beam path, so there is nothing for the interlock to detect.</p>
          <p>None of this says the device will hurt you. It says something narrower and more useful: <strong>the manufacturer has not published the figures that would let anyone say it will not.</strong> A laser class on the label and an accession number on file are exactly the artefacts that would resolve it, and both are absent.</p>

          <h3 id="laser-class-update">Update &mdash; a Class 4 figure has now been reported, and it confirms the arithmetic</h3>
          <p>The argument above was written when no class appeared anywhere in the manufacturer&rsquo;s own materials, and it stays exactly as written, because the reasoning is what makes the rest of this page checkable by a reader who has never met us. What has changed is that a figure has surfaced in third-party coverage. <strong>Intelligent Living reports the Photon Matrix as Class 4</strong>, citing <strong>EN 60825-1</strong> &mdash; the European harmonised version of the IEC 60825-1 laser-safety standard, and the standard a CE mark on a laser product in the EU is declared against. It is the European counterpart to the <strong>ANSI Z136.1</strong> scheme referenced earlier on this page.</p>
          <p>If that reporting is correct, it does not overturn the inference we drew from the published wattage &mdash; it confirms it. <strong>Class 4 is the highest and most hazardous class in the scheme.</strong> Under IEC/EN 60825-1 it is the tier where the direct beam is an eye and skin hazard, where even a <em>diffuse</em> reflection off a wall, a patio table or a fence board can be an eye hazard, and where a workplace running the equipment is expected to control access and provide eye protection. That is precisely where 40 watts lands: eighty times the 500 mW boundary that separates Class 3B from Class 4.</p>
          <p>Two cautions before anyone quotes that number as settled. First, it is a class <strong>reported in an article, not one we can find printed on the product label or filed with CDRH</strong>, and those are different artefacts &mdash; a class in a blog post does not clear US customs and does not appear on a compliance certificate. Second, being Class 4 is not by itself a scandal. Plenty of legitimate industrial, research and medical lasers are Class 4 and are sold and operated safely every day, by trained people, in controlled rooms, behind interlocks, with eyewear on.</p>
          <p>So the honest form of the objection is narrower than &ldquo;Class 4 is dangerous.&rdquo; It is this: <strong>a Class 4 laser is normally an equipment-controlled-area device, and this one is sold to be left running unattended on a patio or in a bedroom, where children, pets and reflective surfaces are, with a software interlock nobody outside the company has tested.</strong> That is a question about deployment context, not about physics &mdash; and it is the question a published class was always going to raise rather than close.</p>
          <p>For a Canadian buyer there is a second half to it. EN 60825-1 is a European standard; it is not a Health Canada authorisation, a CSA certification, or an ISED radio authorisation for the millimetre-wave interlock, and none of those appear in the product materials either. A CE-referenced class tells you what the manufacturer says the beam is. It does not tell you that any Canadian body has looked at the product.</p>

          <h2 id="us-regulation-fda-epa-fcc">In the United States: FDA, EPA and FCC &mdash; the Paperwork a Laser Mosquito Device Should Have</h2>
          <p>Everything above about safety certification on this page is framed the way a Canadian buyer would frame it: Health Canada, CSA. That framing is correct in Canada and useless to an American, because the US regulates this device through three separate agencies and none of them does what people mean by &ldquo;approved.&rdquo; Here is the version that lets a US reader actually interrogate a seller.</p>
          <p><strong>FDA / CDRH.</strong> Under 21 CFR 1040.10 and 1040.11, every laser product manufactured, assembled or imported into the United States since <strong>August 1, 1976</strong> must comply with the federal laser product performance standard. The manufacturer files a product report with the Center for Devices and Radiological Health covering design, hazard class and test data, and FDA issues an <strong>accession number</strong> &mdash; a number that is needed to clear customs. This is compliance, not approval, and there is no such thing as an &ldquo;FDA-approved&rdquo; backyard laser. But it is a document that either exists or does not, and you are entitled to ask for it.</p>
          <p><strong>EPA / FIFRA.</strong> This one trips up almost every US shopper. A laser mosquito killer is a pest control <em>device</em>, not a pesticide, so it is <strong>not</strong> subject to EPA registration under FIFRA section 3. &ldquo;Not EPA registered&rdquo; is completely normal for this product category and is not by itself a warning sign &mdash; which matters, because a US reader who does not know that will either dismiss a legitimate device or accept a bad one for the wrong reason. What a regulated device <em>does</em> require, per the EPA Pesticide Registration Manual (Chapter 13, Devices), is production in an EPA-registered establishment, an <strong>EPA establishment number</strong>, and scientific data substantiating its efficacy claims &mdash; with misleading statements and misleading diagrams prohibited.</p>
          <p><strong>FCC.</strong> The millimetre-wave radar that serves as the human-and-pet interlock is an intentional radio-frequency radiator. Intentional radiators need FCC equipment authorization before they can be marketed in the United States.</p>
          <div className="not-prose overflow-x-auto rounded-lg border border-navy-100 my-5">
          <table className="min-w-[680px] w-full text-sm border-collapse">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Ask the seller</th><th className="px-3 py-2 text-left">In the United States</th><th className="px-3 py-2 text-left">In Canada</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>&ldquo;What laser class is it?&rdquo;</strong></td><td className="px-3 py-2">A class under the IEC/ANSI scheme must appear on the label under 21 CFR 1040.10</td><td className="px-3 py-2">Same classes recognised; no consumer mosquito laser cites Health Canada or CSA certification</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>&ldquo;What is your CDRH accession number?&rdquo;</strong></td><td className="px-3 py-2">A product report on file with FDA; needed to clear customs</td><td className="px-3 py-2">Not applicable &mdash; ask instead for CSA or cUL marks</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;Is it EPA registered?&rdquo;</td><td className="px-3 py-2"><strong>Devices are not registered under FIFRA §3 &mdash; this answer is normal</strong></td><td className="px-3 py-2">Not applicable</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>&ldquo;What is your EPA establishment number?&rdquo;</strong></td><td className="px-3 py-2">Required &mdash; devices must be produced in an EPA-registered establishment</td><td className="px-3 py-2">Not applicable</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>&ldquo;Where is your efficacy data?&rdquo;</strong></td><td className="px-3 py-2">Device claims must be substantiated; misleading statements and diagrams are prohibited (EPA Reg. Manual, Ch. 13)</td><td className="px-3 py-2">Health Canada governs pest control product claims</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;Is the radar authorized?&rdquo;</td><td className="px-3 py-2">FCC equipment authorization is required for an intentional radiator</td><td className="px-3 py-2">ISED equipment certification is the Canadian equivalent</td></tr>
            </tbody>
          </table>
          </div>
          <p>Run that column down for the Photon Matrix and you get the same answer six times: not published. That is not proof of a bad product. It is the reason a careful buyer waits.</p>

          <h2 id="who-invented-the-mosquito-laser">Who Invented the Mosquito Laser? (Real Names, Real Dates)</h2>
          <p>Earlier this page credits &ldquo;researchers who were exploring it.&rdquo; They have names, and the story is more useful than the summary.</p>
          <p>In <strong>2007</strong> the Gates Foundation commissioned <strong>Intellectual Ventures</strong> to build a device that could shoot malaria-carrying mosquitoes out of the air. The team included <strong>Lowell Wood</strong> &mdash; an astrophysicist who worked on the Strategic Defense Initiative with Edward Teller &mdash; along with <strong>Jordin Kare</strong> and <strong>Eric Johanson</strong>, and several alumni of Lawrence Livermore National Laboratory. The design used an infrared LED &ldquo;fence&rdquo; with CCD cameras watching for interruptions, and it identified insects by <strong>wing-beat frequency</strong>, precisely enough to distinguish species and even sex &mdash; so it could engage only the biting females and leave everything else alone. Reported performance was <strong>50 to 100 mosquitoes per second at around 30 metres</strong>.</p>
          <p>Thirty metres. Five times the range of the best consumer unit on sale in 2026, with species-level targeting no consumer unit claims.</p>
          <p>And then it stopped. The programme ran roughly a decade, to about 2017, and per New Atlas the prototype <strong>still was not eye-safe</strong> when it wound down. That is the sentence to carry away from this whole page. A far better-funded team, staffed with weapons-lab physicists, working on a humanitarian problem with a decade of runway and no pressure to ship by summer, did not solve the eye-safety problem. Our caution about a first-time Indiegogo creator solving it in a $988 consumer box is not skepticism about crowdfunding. It is arithmetic about difficulty.</p>

          <h2 id="photon-matrix-vs-bzigo">Photon Matrix vs. Bzigo vs. Handheld &ldquo;Laser&rdquo; Wands</h2>
          <p>Search &ldquo;laser mosquito killer&rdquo; in the United States and you get three genuinely different things blended into one results page. They are not competitors on a price ladder; they are different answers to different questions, with wildly different risk profiles.</p>
          <div className="not-prose overflow-x-auto rounded-lg border border-navy-100 my-4">
          <table className="min-w-[680px] w-full text-sm border-collapse">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Device</th><th className="px-3 py-2 text-left">What it actually does</th><th className="px-3 py-2 text-left">Fires a killing laser?</th><th className="px-3 py-2 text-left">Published laser class</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Photon Matrix (Basic / Pro)</strong></td><td className="px-3 py-2">LiDAR detection, galvanometer-steered laser, mmWave radar interlock; 3&ndash;6 m</td><td className="px-3 py-2">Yes (claimed)</td><td className="px-3 py-2"><strong>None published</strong></td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Bzigo</strong></td><td className="px-3 py-2">Camera finds the mosquito and marks where it landed with a low-power pointer, so a person can deal with it. The Times of Israel nicknamed it an &ldquo;Iron Dome&rdquo; for mosquitoes</td><td className="px-3 py-2">No &mdash; detection and marking only</td><td className="px-3 py-2">Deliberately not a killing laser</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Marketplace handhelds</strong> (LY-1, LY-40W, LY-80W, &ldquo;915 nm 120 W invisible laser module&rdquo;)</td><td className="px-3 py-2">An unregulated high-power laser diode with a handle, sold as an insect tool. No sensor, no interlock, no targeting</td><td className="px-3 py-2">Yes &mdash; whatever you point it at</td><td className="px-3 py-2"><strong>None &mdash; do not buy</strong></td></tr>
            </tbody>
          </table>
          </div>
          <p>Bzigo is worth understanding because it makes the trade-off visible. By choosing <em>not</em> to fire at a flying insect, it removes the entire eye-safety problem and accepts a smaller promise: it finds the mosquito in your bedroom and tells you where it is. That is an honest product boundary. The Photon Matrix takes the opposite bet, which is what makes it exciting &mdash; and exactly why the missing laser class and missing accession number matter so much more for it than they would for a camera.</p>
          <p>Since the section above was written it is worth naming the actual product rather than the company, because &ldquo;Bzigo&rdquo; on its own is not something you can buy. The shipping device is the <strong>Bzigo IRIS</strong>, and it sells for roughly <strong>USD $299</strong> &mdash; a little under a third of the Photon Matrix indoor unit. What that third of the price buys is a genuinely different promise: IRIS watches a room, finds the mosquito, and puts a low-power marker on the wall where it landed, then leaves the killing to you. It does not clear a yard, it does not work outdoors, and it will not help anyone whose problem is the deck at dusk. But it is the honest indoor comparison, and if the bedroom is the actual problem, the two categories worth pricing against it are a <Link href="/blog/best-indoor-fly-mosquito-trap-canada">proper indoor mosquito trap</Link> and a <Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy-style UV-and-fan unit</Link>, both of which are stocked in Canada and cost a fraction of either laser device.</p>
          <div className="not-prose my-6 rounded-xl bg-rose-50 border-l-4 border-rose-500 p-5">
            <p className="text-sm font-extrabold text-rose-900 mb-1">On the cheap handhelds, we will not be balanced.</p>
            <p className="text-sm text-gray-800 leading-relaxed">A shopping page for &ldquo;laser mosquito killer&rdquo; in the US fills up with rechargeable handheld modules advertised at 40 W, 80 W, even 120 W, several of them at 915 nm &mdash; invisible near-infrared, inside the 400&ndash;1400 nm retinal hazard region, with no blink reflex to protect anyone, no sensor deciding what is a bug and what is a face, no interlock, no published class and no CDRH filing. There is no version of this we would point at anything, in any yard, in any country. Ignore the entire category.</p>
          </div>

          <h2 id="us-mosquito-season-by-region">In the United States: Mosquito Season by Region (and What It Does to the Math)</h2>
          <p>The rest of this page assumes a May-to-September season, because that is the season we actually work in the Greater Toronto Area. <strong>In the United States</strong>, season length is the single biggest variable in whether a $988 device is defensible &mdash; a Gulf Coast buyer and a Minnesota buyer are making completely different purchases at the same price.</p>
          <div className="not-prose overflow-x-auto rounded-lg border border-navy-100 my-4">
          <table className="min-w-[680px] w-full text-sm border-collapse">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Region</th><th className="px-3 py-2 text-left">Typical active season</th><th className="px-3 py-2 text-left">Peak</th><th className="px-3 py-2 text-left">$988 device, year one, per active month</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Gulf Coast, Florida, Hawaii</strong></td><td className="px-3 py-2">Feb&ndash;Nov; effectively year-round in south Florida</td><td className="px-3 py-2">Jun&ndash;Sep</td><td className="px-3 py-2 font-mono">~$110 (9 months)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Texas Gulf Coast (Harris, Galveston, Brazoria, Nueces)</td><td className="px-3 py-2">Mar&ndash;Nov</td><td className="px-3 py-2">Jun&ndash;Sep</td><td className="px-3 py-2 font-mono">~$110 (9 months)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">South and Southwest</td><td className="px-3 py-2">Mar&ndash;Sep</td><td className="px-3 py-2">Jun&ndash;Aug</td><td className="px-3 py-2 font-mono">~$141 (7 months)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">North Texas / DFW</td><td className="px-3 py-2">May&ndash;Oct</td><td className="px-3 py-2">Jun&ndash;Sep</td><td className="px-3 py-2 font-mono">~$165 (6 months)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Mid-Atlantic, Midwest, West</td><td className="px-3 py-2">Apr&ndash;Sep</td><td className="px-3 py-2">Jun&ndash;Aug</td><td className="px-3 py-2 font-mono">~$165 (6 months)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Northern tier (and the GTA, where we work)</td><td className="px-3 py-2">May&ndash;Sep</td><td className="px-3 py-2">Jun&ndash;Jul</td><td className="px-3 py-2 font-mono">~$198 (5 months)</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">Trans-Pecos / El Paso</td><td className="px-3 py-2">Jun&ndash;Sep, and much drier</td><td className="px-3 py-2">Jul&ndash;Aug</td><td className="px-3 py-2 font-mono">~$247 (4 months)</td></tr>
            </tbody>
          </table>
          </div>
          <p>Texas is the clearest illustration that &ldquo;US mosquito season&rdquo; is not one thing: the state runs three seasons simultaneously, from a nine-month Gulf Coast run in Harris and Galveston counties down to a short, dry Trans-Pecos summer around El Paso. A device bought in Houston works more than twice as many months per dollar as the same device bought in El Paso, and roughly twice as many as one bought in Ontario.</p>
          <p>The amortisation argument is the strongest case anyone can make for this device, so it is worth stating fairly: <strong>if you live somewhere with a nine-month season, a one-time purchase genuinely does compete on cost with recurring service in year two and beyond.</strong> It just does not compete on coverage &mdash; six metres against a whole property &mdash; and the safety paperwork is still missing regardless of what your season looks like.</p>

          <h2 id="us-mosquito-species">Which US Mosquitoes Would a Laser Actually Have to Beat?</h2>
          <p>A device that engages targets within six metres, up to 1 m/s, inside a 90-degree cone is making an implicit bet about <em>where and when</em> mosquitoes bite. Set that bet against the species that actually matter in the United States, per the CDC.</p>
          <div className="not-prose overflow-x-auto rounded-lg border border-navy-100 my-4">
          <table className="min-w-[720px] w-full text-sm border-collapse">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Species</th><th className="px-3 py-2 text-left">Where</th><th className="px-3 py-2 text-left">When it bites</th><th className="px-3 py-2 text-left">Why it matters (CDC)</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Culex pipiens</strong><br /><span className="text-xs text-gray-600">northern house mosquito</span></td><td className="px-3 py-2">Northern and central US; also southern Canada</td><td className="px-3 py-2">Dusk through the night</td><td className="px-3 py-2">Primary West Nile virus vector in the north</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Culex quinquefasciatus</strong><br /><span className="text-xs text-gray-600">southern house mosquito</span></td><td className="px-3 py-2">Southern US</td><td className="px-3 py-2">Dusk through the night</td><td className="px-3 py-2">Primary West Nile vector in the south</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Culex tarsalis</strong><br /><span className="text-xs text-gray-600">western encephalitis mosquito</span></td><td className="px-3 py-2">West and Great Plains</td><td className="px-3 py-2">Dusk and night</td><td className="px-3 py-2">Major western West Nile vector</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Culex nigripalpus</strong></td><td className="px-3 py-2">Florida</td><td className="px-3 py-2">Night</td><td className="px-3 py-2">Florida West Nile vector</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Aedes aegypti</strong><br /><span className="text-xs text-gray-600">yellow fever mosquito</span></td><td className="px-3 py-2">South, Southwest, Gulf</td><td className="px-3 py-2"><strong>Daytime</strong>, aggressive</td><td className="px-3 py-2">Dengue, chikungunya and Zika vector; also found positive for West Nile in CDC surveillance</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Aedes albopictus</strong><br /><span className="text-xs text-gray-600">Asian tiger mosquito</span></td><td className="px-3 py-2">South, Southwest and Mid-Atlantic; expanding north</td><td className="px-3 py-2"><strong>Daytime</strong>, low to the ground</td><td className="px-3 py-2">Same disease group; also West Nile positive in CDC surveillance</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Anopheles</strong> spp.</td><td className="px-3 py-2">Widespread</td><td className="px-3 py-2">Night</td><td className="px-3 py-2">Malaria vectors &mdash; the reason the photonic fence was funded in the first place</td></tr>
            </tbody>
          </table>
          </div>
          <p>Read the &ldquo;when&rdquo; column against the device. The <em>Culex</em> group &mdash; the West Nile carriers, and the reason most Americans search for mosquito control at all &mdash; feeds from dusk through the night, across the whole property, while the six-metre cone points at an empty patio. The <em>Aedes</em> group bites in daylight, flies low, and shelters under furniture, in vegetation, and inside garages, which is not where a fixed sensor is looking either.</p>
          <p><strong>In Canada</strong>, <em>Culex pipiens</em> is the same species driving West Nile surveillance in Ontario each summer, which is why <Link href="/blog/west-nile-virus-ontario-2026">our Ontario West Nile tracking</Link> and the <Link href="/blog/when-are-mosquitoes-most-active">dusk-and-dawn activity pattern</Link> read almost identically to the northern US picture. The species overlap; the season length and the public infrastructure do not.</p>

          <h2 id="us-mosquito-borne-disease">In the United States: What the CDC Says About Mosquito-Borne Disease</h2>
          <p>This page was written for a Canadian reader whose motivation is nuisance biting. A large share of US readers arrive with a different motivation, and it raises the evidence bar rather than lowering it: if you are buying a device because of disease risk, an untested six-metre bubble is a worse answer, not a better one.</p>
          <ul>
            <li><strong>West Nile virus is the leading domestically acquired arboviral disease in the United States</strong> (CDC). CDC&rsquo;s ArboNET surveillance recorded <strong>771 human cases across 39 states as of September 9, 2025, of which 490 were neuroinvasive</strong> &mdash; the severe form affecting the brain and spinal cord.</li>
            <li><strong>Eastern equine encephalitis</strong> is rare but carries a high fatality rate, concentrated in Northeast and Gulf states (CDC).</li>
            <li><strong>Locally acquired dengue</strong> has been reported in Florida, Texas and California (CDC) &mdash; transmitted by the same daytime <em>Aedes</em> species in the table above.</li>
            <li><strong>In Canada</strong>, Health Canada and provincial public health units run the equivalent surveillance; Public Health Ontario reports West Nile positive-pool and human-case counts through the season, which we track on our <Link href="/blog/west-nile-virus-ontario-2026">Ontario West Nile page</Link>. Symptoms are the same wherever you are &mdash; see <Link href="/blog/west-nile-virus-symptoms">West Nile symptoms and when to seek care</Link>.</li>
          </ul>
          <p>Worth noting what the CDC actually recommends against that risk, because it is unglamorous and it is not a gadget: <strong>EPA-registered repellents, screens on windows and doors, long sleeves at peak biting hours, and eliminating standing water</strong>. Every one of those is cheaper than $988 and every one of them has evidence behind it.</p>

          <h2 id="us-mosquito-abatement-districts">Free Mosquito Control Most Americans Already Have</h2>
          <p>This is the single most useful thing a US reader can take from this page, and it has no Canadian equivalent, which is why it does not appear anywhere else in our writing.</p>
          <p>The United States runs a public mosquito-control system. Industry estimates (AMCA and Kline) put it at roughly <strong>400 to 500 organised mosquito abatement and vector control districts</strong> of meaningful size, plus another <strong>1,000 to 2,000 smaller health-department and municipal programmes</strong>. Depending on where you live, that district may already be larviciding storm drains and ditches on your street, running surveillance traps, spraying for adults during a West Nile event, and &mdash; in many districts &mdash; sending someone to inspect your property and treat standing water at no charge, because you have already paid for it in taxes.</p>
          <p>Before spending $988 on a device, spend twenty minutes here instead:</p>
          <ul>
            <li><strong>American Mosquito Control Association</strong> (mosquito.org) &mdash; the standard route to find whether an abatement district covers your address.</li>
            <li><strong>Your county health department</strong> &mdash; the fallback where there is no district, and usually the number to call about a chronic breeding site on a neighbouring property.</li>
            <li><strong>Your state land-grant university extension entomology service</strong> &mdash; the trusted US path for &ldquo;does this device actually work?&rdquo; Extension entomologists have been publishing device evaluations for decades and have nothing to sell you.</li>
            <li><strong>CDC</strong> &mdash; repellent selection and disease guidance.</li>
            <li><strong>EPA</strong> &mdash; device claims, establishment numbers and what a pest control device is allowed to say.</li>
            <li><strong>NPIC</strong>, the National Pesticide Information Center &mdash; a good, neutral place to ask about non-chemical devices specifically.</li>
          </ul>
          <p><strong>In Canada, none of this exists for a homeowner.</strong> GTA municipalities larvicide catch basins and public land for West Nile, but nobody treats a private backyard, there is no district to call, and there is no free inspection. That gap is precisely why Canadian readers go straight to a private licensed service &mdash; and why the cost comparison on this page reads differently on either side of the border.</p>

          <h2 id="where-to-buy-us-canada">Where to Buy the Proven Alternatives &mdash; US and Canada</h2>
          <p>A fair warning about the buttons on this page: <strong>they are Amazon.ca links</strong>, because BuzzSkito is a Canadian company and Amazon.ca is where our readers buy. If you are reading from the United States, the products themselves are mainstream and widely stocked &mdash; here is where to look on each side of the border.</p>
          <div className="not-prose overflow-x-auto rounded-lg border border-navy-100 my-4">
          <table className="min-w-[680px] w-full text-sm border-collapse">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Product</th><th className="px-3 py-2 text-left">Commonly stocked in the US</th><th className="px-3 py-2 text-left">Commonly stocked in Canada</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Propane CO₂ trap</strong> (Mosquito Magnet)</td><td className="px-3 py-2">Amazon.com, Home Depot, Lowe&rsquo;s, Tractor Supply, Bass Pro / Cabela&rsquo;s, Ace Hardware</td><td className="px-3 py-2">Costco Canada, Cabela&rsquo;s, Lee Valley, Amazon.ca</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Thermacell</strong> patio repellent</td><td className="px-3 py-2">Amazon.com, Walmart, Home Depot, Lowe&rsquo;s, Academy Sports, REI, Ace Hardware</td><td className="px-3 py-2">Canadian Tire, Home Depot Canada, Costco, Amazon.ca</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>BTI dunks / bits</strong> (larvae control)</td><td className="px-3 py-2">Amazon.com, Home Depot, Lowe&rsquo;s, Walmart, Tractor Supply, garden centres</td><td className="px-3 py-2">Canadian Tire, Home Depot Canada, garden centres, Amazon.ca</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Professional barrier treatment</strong></td><td className="px-3 py-2">A licensed applicator in your state &mdash; and check your county abatement district first, it may be free</td><td className="px-3 py-2"><Link href="/free-yard-assessment" className="text-emerald-700 underline font-semibold">BuzzSkito, from $99</Link> across 19 GTA cities</td></tr>
            </tbody>
          </table>
          </div>
          <p>For Canadian readers, the price-check buttons throughout this page go straight to Amazon.ca: <BuyLink tag={AMZ_TAG} search="mosquito magnet trap">Check Mosquito Magnet price →</BuyLink> or <BuyLink tag={AMZ_TAG} search="thermacell patio shield">check Thermacell price →</BuyLink>.</p>
          <p>And one piece of honesty about our own service: <strong>BuzzSkito treats yards in the Greater Toronto Area only.</strong> We cannot spray a yard in Houston or Minneapolis, and we are not going to pretend otherwise to keep you on the page. If you are in the US, check your abatement district first, then your state extension service for a device recommendation, then a licensed local applicator &mdash; and if you are anywhere from Mississauga to Hamilton, the <Link href="/free-yard-assessment">free yard assessment</Link> is ours and it takes two minutes.</p>

          <h2>The Honest Verdict</h2>
          <p>The laser mosquito killer is one of the more exciting ideas in pest control, and the photonic-fence research behind it is genuinely real. But excitement is not the same as availability. As of 2026, the Photon Matrix and its cousins are crowdfunded pre-orders without independent testing or recognized eye-safety certification, priced above a full season of professional service, covering only a few metres, and doing nothing for ticks. Watch the category with interest &mdash; do not rely on it to keep the bites off you this July.</p>
          <p>If you want a mosquito-free backyard <em>this</em> summer, put your money where the evidence is: a <Link href="/blog/best-mosquito-trap">proven trap</Link>, a Thermacell on the patio, BTI dunks in the standing water, and <Link href="/mosquito-control">professional barrier spray</Link> for whole-yard, tick-inclusive coverage. When a certified, independently tested laser device finally ships to Canada, we will update this page.</p>

          <h3>Verdict update &mdash; September 2026</h3>
          <p>One sentence in the verdict above has aged and the rest has not, so here is the correction rather than a quiet rewrite. <strong>Availability changed.</strong> US outlets now report the Photon Matrix on sale online at roughly $988 to $1,088 USD with a 12-month warranty, so &ldquo;you cannot buy it&rdquo; is no longer the right objection and we have retired it.</p>
          <p><strong>Nothing else changed.</strong> There is still no published laser class, still no FDA/CDRH accession number, still no independent efficacy test from any lab, still a maximum of three to six metres of coverage, and still nothing at all for ticks. The team that invented this technology worked on it for a decade with weapons-lab physicists and did not get it eye-safe. You can buy one now &mdash; and we still would not, in Houston or in Mississauga. When a device in this category publishes a laser class, files an accession number, and posts an independent test, this page will say so on the same day.</p>

          <h3>Verdict update &mdash; production, refunds and counterfeits</h3>
          <p>Two more sentences in the verdict above have now aged, and the correction runs in both directions, so here it is rather than a quiet rewrite. <strong>It is in production.</strong> CGTN reported mass production beginning on August 16, 2026 and first shipments started that month, so &ldquo;it may never ship&rdquo; has also been retired. <strong>And a laser class has now been reported</strong> &mdash; Class 4, per Intelligent Living, citing EN 60825-1. We inferred Class 4 from 40-watt pulses before anyone published a figure, and that inference now looks correct rather than cautious. A reported class in an article is still not a class on a label or a CDRH filing, but it is more than we had.</p>
          <p>What replaced those objections is not nothing. There is still <strong>no independent efficacy test</strong>, still <strong>three to six metres</strong> of coverage, still <strong>nothing for ticks</strong>, and now three concrete consumer problems that did not exist in July: a refund window that <strong>closes when the seller ships</strong>, refund requests reported as going unanswered, and a counterfeit-storefront problem serious enough that the manufacturer published its own anti-counterfeit notice. The device got more real and the purchase got more complicated at the same time. Our advice is unchanged and now rests on different reasons: <strong>if you want fewer bites this season, this is not the purchase</strong> &mdash; and if you want to buy one anyway, buy it from the manufacturer&rsquo;s own store, pay with a card you can dispute, and get the ship date in writing.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-mosquito-trap">Best Mosquito Trap in Canada — Every Type Compared</Link></li>
            <li><Link href="/blog/mosquito-magnet-canada">Mosquito Magnet Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/blog/dynatrap-canada-review">DynaTrap Canada — Honest Review</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada Guide</Link></li>
            <li><Link href="/blog/bug-zappers-canada-do-they-work">Bug Zappers Canada — Do They Work?</Link></li>
            <li><Link href="/blog/flowtron-bug-zapper-canada">Flowtron Bug Zapper Canada Review</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Ultrasonic Pest Repellers — Do They Work?</Link> — the other gadget category where the marketing has outrun the published evidence for decades, and the closest cousin to the laser question.</li>
            <li><Link href="/blog/best-mosquito-repellent-device-canada">Best Mosquito Repellent Devices in Canada</Link> — the devices that do publish data, sorted from the ones that do not.</li>
            <li><Link href="/blog/mosquito-trap-running-cost-canada">What a Mosquito Trap Actually Costs to Run</Link> — the per-season arithmetic to hold against a $988 one-time purchase.</li>
            <li><Link href="/blog/best-indoor-fly-mosquito-trap-canada">Best Indoor Mosquito Trap in Canada</Link> — the realistic alternative if the bedroom, not the yard, is what the indoor 976 nm model was tempting you to solve.</li>
            <li><Link href="/blog/mosquito-magnet-vs-professional-spray">Mosquito Magnet vs. Professional Spray</Link> — device-versus-service, worked through on the one device in this category with independent testing behind it.</li>
            <li><Link href="/blog/citronella-candles-canada-do-they-work">Do Citronella Candles Work?</Link> — the same evidence test applied to the cheapest end of the market, for contrast with the most expensive.</li>
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

      <CTASection heading="Real Bites Need Real Solutions · Not a Pre-Order" subtext="Get a free quote for licensed barrier spray. From $99. Same-day yard protection. 30-day residual." variant="dark" />
    </>
  )
}
