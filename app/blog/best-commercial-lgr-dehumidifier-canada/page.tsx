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

const SLUG = 'best-commercial-lgr-dehumidifier-canada'
const DATE = '2026-08-22'
const UPDATED = '2026-08-22'
const TITLE = 'Best Commercial LGR Dehumidifier Canada 2026 — Job-Site Drying, Rating Games & Air-Mover Pairing'
const META_TITLE = 'Best Commercial LGR Dehumidifier Canada'

const FAQS = [
  {
    question: 'What is the best commercial LGR dehumidifier in Canada?',
    answer: 'For most Canadian contractors, the right buy is a mid-size AlorAir Storm-class LGR with an onboard condensate pump — roughly a 90 to 120 pint AHAM machine in a rotomolded, stackable housing, drawing under 9 amps on a standard 115V circuit. That combination covers the overwhelming majority of residential water losses: a flooded basement, a burst supply line, a failed sump. Dri-Eaz-class units cost more and are built for daily fleet abuse, which is worth it once the machine is earning every week rather than sitting in a garage. What separates a good buy from a bad one is not the brand — it is buying on the AHAM rating rather than the saturation rating, confirming the amp draw fits the circuits you actually work on, and getting a pump so the machine can run unattended overnight on a site with no floor drain.',
  },
  {
    question: 'AHAM rating vs saturation rating — which number should I buy on?',
    answer: 'Buy on AHAM. Every dehumidifier in this class carries two capacity numbers and manufacturers put the bigger one on the box. The saturation rating is measured in hot, soaking conditions — roughly 32°C at 90% relative humidity — which is a lab scenario, not a Canadian basement. The AHAM rating is measured at a standardised, far more realistic condition and is the number you can compare across brands honestly. A unit sold as a "220 pint" machine is frequently an 110 to 130 pint AHAM unit, and the AHAM figure is what it will do on your job. If a listing quotes only the big number and buries or omits AHAM, treat that as a signal about the seller. Size the job from AHAM pints and you will not be short; size it from saturation pints and you will be, in the worst week of the year.',
  },
  {
    question: 'How do I size an LGR dehumidifier for a job site?',
    answer: 'Size by air volume, not floor area. Multiply length by width by ceiling height to get the affected space in cubic feet, then check that figure against the cubic-foot coverage the manufacturer publishes for the model — and derate it if the loss is severe, if there is a lot of saturated material such as carpet, underlay, drywall and framing, or if the space is poorly contained. Two smaller units usually beat one large one for the same total capacity, because you can place them at opposite ends of a long basement, you keep drying if one fails, and you spread the electrical load across circuits. Containment matters more than raw pints: sheeting off a stairwell and closing the space so you are drying the wet room rather than the whole house will do more for your drying time than buying the next size up.',
  },
  {
    question: 'How many air movers do I need per dehumidifier?',
    answer: 'The dehumidifier and the air movers are two halves of one system, and buying the machine without the movers is the most common first-timer mistake. Wet material gives off moisture only as fast as air carries it away from the surface; without moving air a saturated boundary layer sits on the floor and the drywall and evaporation slows to a crawl, so your very expensive dehumidifier has nothing to remove. A working rule of thumb on site is one air mover for every 40 to 60 square feet of wet floor, plus one extra per room and one at each inside corner or offset, aimed at a low angle along the surface rather than straight at it. Check the total amp draw before you plug them in — that is where circuits get overloaded.',
  },
  {
    question: 'Will an LGR dehumidifier trip a household breaker?',
    answer: 'It can, and it usually does when you add air movers. A job-site LGR typically draws somewhere between 6 and 9 amps on 115V. A standard residential 15-amp circuit gives you about 12 amps of continuous load once you respect the 80% derating rule, so the dehumidifier alone eats most of it. Add two or three air movers at roughly 1.5 to 3 amps apiece and you are over the limit — and in an older Toronto or Hamilton home with a shared basement circuit, you will find that out at 2am when the whole drying setup is off and the structure has been re-wetting itself for six hours. Map the panel before you set up, split the load across at least two circuits, avoid daisy-chained extension cords, and use heavy-gauge cord on any run over about 15 metres.',
  },
  {
    question: 'Do I need the built-in condensate pump, or is a gravity drain enough?',
    answer: 'On a job site, get the pump. Gravity drainage assumes a floor drain lower than the machine and a clear run to it, which is precisely what you do not have in a finished basement, a second-floor bathroom loss, or a slab-on-grade unit. A built-in pump lets you run a long small-bore hose up a stairwell to a laundry tub, out a window, or into a bathtub, so the machine keeps drying overnight and through a weekend without anyone on site. That unattended capability is most of what you are paying for. Keep a spare length of heavy-duty drain hose in the van, secure it so nobody trips on it, and check the discharge point on every visit — a pump discharging into a sink that someone has since filled with tools is a flood of your own making.',
  },
  {
    question: 'When does an LGR stop working, and what do I use instead?',
    answer: 'Every refrigerant machine, LGR included, is a heat pump, and its performance falls with the air temperature. LGRs hold up far better than conventional units and are generally usable down to around freezing, but their efficient working range is warm — which is why restoration crews heat the containment rather than fight the cold. Below roughly 5°C, and in any unheated Ontario space in December through March, the honest answer is a desiccant dehumidifier: it uses an adsorbent wheel rather than a cold coil, so its output barely moves with temperature. Contractors rent desiccants for cold-weather structural drying rather than buying them. For the homeowner version of the same decision — a cold garage, a cellar, a closed-up cottage — the desiccant-versus-compressor comparison is the guide you want.',
  },
  {
    question: 'Should a homeowner buy an LGR dehumidifier?',
    answer: 'Almost certainly not, and it is worth saying plainly. If your basement is damp, musty, or sitting above 60% relative humidity, a residential Energy Star unit with a settable humidistat and a continuous drain is the correct tool and roughly a tenth of the price. An LGR is built for an active water loss — standing water, saturated drywall, a race against mould that is measured in days — not for holding a comfortable humidity month after month. Running an LGR as a permanent basement appliance is loud, power-hungry, and hard on a machine designed for intermittent duty. Buy the LGR if you are drying structures for money, if you manage enough rental doors that you would otherwise rent one repeatedly, or if you are genuinely remote and cannot get a restoration crew out quickly.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'LGR dehumidifiers for Canadian job sites: what low-grain means, AHAM vs saturation ratings, correct sizing, air-mover pairing, and when to rent instead.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function BestCommercialLgrDehumidifierCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'An independent Canadian buyer’s guide to commercial LGR restoration dehumidifiers — what low-grain refrigerant means, why the AHAM rating is the only honest one, job-site sizing, air-mover pairing, circuit load, and when to rent instead of buy.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Commercial LGR Dehumidifier Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Commercial LGR Dehumidifier</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A contractor&rsquo;s guide, not a homeowner&rsquo;s one. LGR machines exist to keep pulling water out of air that is already dry &mdash; the point where a conventional dehumidifier quietly stops. Here is what &ldquo;low grain&rdquo; really means, why the number on the box is the wrong one to buy on, and how to pair the machine with air movers without tripping every breaker in the house.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="Commercial LGR dehumidifier with pump" search="alorair storm lgr commercial dehumidifier pump" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best commercial LGR dehumidifier for most Canadian contractors is a <strong>mid-size AlorAir Storm-class unit with a built-in condensate pump</strong> &mdash; roughly <strong>90&ndash;120 pints AHAM</strong>, rotomolded and stackable, drawing under 9 amps on a 115V circuit. <strong>LGR means Low Grain Refrigerant:</strong> a pre-cooling heat exchanger lets the coil drive air down into the 30s grains-per-pound instead of stalling in the mid-50s, which is where structural drying actually happens. Buy on the <strong>AHAM rating, never the saturation rating</strong> printed on the box, and budget for air movers &mdash; without them the dehumidifier has nothing to remove.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Low grain</strong> = keeps working at the dry end, where a conventional refrigerant unit gives up.</li>
              <li><strong>AHAM pints</strong> is the honest number. Saturation pints is a lab condition and is roughly double.</li>
              <li>Size by <strong>cubic feet</strong>, not floor area &mdash; and two smaller units usually beat one big one.</li>
              <li>Budget <strong>one air mover per 40&ndash;60 sq ft</strong> of wet floor; they are half the system.</li>
              <li>A 15A residential circuit will not carry the machine plus three movers. <strong>Split the load.</strong></li>
              <li>Get the <strong>pump</strong> &mdash; unattended overnight drying is most of what you are buying.</li>
              <li>Below roughly 5&deg;C, an LGR is the wrong tool and a <strong>desiccant</strong> is the right one.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="mould or water damage" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Commercial LGR Dehumidifiers & Job-Site Gear in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'AlorAir Storm-Class LGR Dehumidifier (with Pump)',
                why: 'The practical default for residential water losses in Canada: a mid-size AHAM rating that genuinely covers a flooded basement, a rotomolded stackable housing that survives van life, an onboard pump so it drains upward to a laundry tub, and an amp draw that fits a real household circuit.',
                search: 'alorair storm lgr commercial dehumidifier pump',
                score: 9.1,
                featured: true,
                pros: ['Pump drains upward — no floor drain needed', 'Stackable, rotomolded, van-friendly', 'Amp draw fits a 115V residential circuit'],
                cons: ['Heavier than a residential unit', 'Overkill for simple basement humidity'],
              },
              {
                badge: 'Best Heavy-Duty',
                name: 'Dri-Eaz-Class Restoration LGR',
                why: 'Built for a machine that works every week rather than twice a year — heavier frame, serviceable components, and the kind of build restoration fleets abuse for years. Worth the premium once the unit is earning; hard to justify if it lives in a garage between floods.',
                search: 'dri eaz lgr restoration dehumidifier',
                score: 8.8,
                pros: ['Fleet-grade durability', 'Serviceable, well-supported platform', 'Holds performance at the dry end'],
                cons: ['Highest upfront cost in the class', 'More machine than a one-flood-a-decade owner needs'],
              },
              {
                badge: 'Best Companion',
                name: 'Centrifugal Air Mover / Carpet Dryer (Stackable)',
                why: 'Half the drying system, and the half people forget to buy. Air movers strip the saturated boundary layer off wet floors and drywall so evaporation keeps feeding the dehumidifier. Stackable housings with daisy-chain outlets make setup and van storage far easier.',
                search: 'commercial air mover carpet dryer stackable',
                score: 8.6,
                pros: ['Directly shortens drying time', 'Stack and store efficiently', 'Low amp draw per unit'],
                cons: ['You need several, not one', 'Loud — plan around occupied homes'],
              },
              {
                badge: 'Best Accessory',
                name: 'Heavy-Duty Condensate Drain Hose',
                why: 'The unglamorous part that decides whether the machine runs all weekend or stops at 1am. A long, kink-resistant discharge hose lets the pump reach a laundry tub, a window, or a tub upstairs — and a spare in the van saves a whole return trip.',
                search: 'heavy duty dehumidifier drain hose 40 ft',
                score: 8.2,
                pros: ['Enables true unattended drying', 'Cheap insurance against a stalled machine', 'Easy to carry a spare'],
                cons: ['Trip hazard if not routed properly', 'Needs checking on every site visit'],
              },
              {
                badge: 'Best Verification Tool',
                name: 'Pinless Moisture Meter',
                why: 'You do not know a structure is dry because it looks dry — you know because you measured it. A pinless meter reads moisture behind a surface without leaving holes, so you can decide when to pull the equipment instead of guessing and leaving mould behind the drywall.',
                search: 'pinless moisture meter drywall wood',
                score: 8.4,
                pros: ['Non-destructive readings', 'Tells you when drying is actually finished', 'Cheap next to the machine it protects'],
                cons: ['Needs a dry reference reading to interpret', 'Not a substitute for a full moisture map'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Drying residential water losses for money?</strong> The <em>Best Overall</em> AlorAir Storm-class with a pump is the right first machine &mdash; and buy two mid-size units before you buy one large one. <strong>Running a fleet that works weekly?</strong> The <em>Best Heavy-Duty</em> Dri-Eaz-class build earns its premium in service life. <strong>Buying your first setup?</strong> Budget for the <em>Best Companion</em> air movers in the same order &mdash; the dehumidifier alone will disappoint you. <strong>Leaving equipment overnight?</strong> The <em>Best Accessory</em> drain hose is what makes that possible. <strong>Deciding when to demobilise?</strong> The <em>Best Verification Tool</em> meter is the difference between dry and looks-dry.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Dehumidifier Classes Compared · Updated August 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">LGR vs Conventional vs Desiccant vs Residential — What Each Class Is Actually For</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Four different machines get called &ldquo;dehumidifiers&rdquo; and they are not substitutes for one another. The dividing lines are how dry the air can get before the machine stalls, and how cold the room can get before it stops mattering.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Class</th>
                  <th className="px-4 py-3 text-left">Built for</th>
                  <th className="px-4 py-3 text-left">Dry-end limit</th>
                  <th className="px-4 py-3 text-left">Cold-room behaviour</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">LGR<br /><span className="font-normal text-xs text-gray-500">low grain refrigerant</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best</strong> &mdash; active water losses, structural drying</td>
                  <td className="px-4 py-3 text-gray-700">Keeps working into the 30s gpp</td>
                  <td className="px-4 py-3 text-gray-700">Usable near freezing, but efficiency drops</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="alorair storm lgr commercial dehumidifier pump" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Conventional refrigerant<br /><span className="font-normal text-xs text-gray-500">standard commercial</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Fair</strong> &mdash; damp crawl spaces, wet but not soaked</td>
                  <td className="px-4 py-3 text-gray-700">Stalls around the mid-50s gpp</td>
                  <td className="px-4 py-3 text-gray-700">Frosts and defrosts as the room cools</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="commercial dehumidifier crawl space 120 pint" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Desiccant<br /><span className="font-normal text-xs text-gray-500">adsorbent wheel</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best</strong> &mdash; cold and unheated spaces</td>
                  <td className="px-4 py-3 text-gray-700">Goes lower than any refrigerant class</td>
                  <td className="px-4 py-3 text-gray-700">Barely affected by temperature</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="desiccant dehumidifier cold room continuous drain" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Residential Energy Star<br /><span className="font-normal text-xs text-gray-500">basement appliance</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best</strong> &mdash; holding a comfortable humidity long-term</td>
                  <td className="px-4 py-3 text-gray-700">Not designed to chase the dry end</td>
                  <td className="px-4 py-3 text-gray-700">Needs auto-defrost below ~18&deg;C</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="energy star dehumidifier humidistat continuous drain" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Dehumidifiers are appliances, not pesticides &mdash; none require PMRA registration and none carry a chemical claim. Drying a structure fast is the single most effective mould-prevention step available to a Canadian contractor, and it needs no licence at all.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ If you are not drying an active water loss, you are on the wrong page.</strong> A damp, musty basement is a humidity problem, and a residential unit with a humidistat solves it for roughly a tenth of the price &mdash; see our <Link href="/blog/best-dehumidifier-for-basement-canada" className="text-emerald-700 underline font-semibold">basement dehumidifier guide</Link> or the <Link href="/blog/best-dehumidifier-for-mold-canada" className="text-emerald-700 underline font-semibold">mould-control guide</Link> instead.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What Is the Best Commercial LGR Dehumidifier in Canada?</h2>
          <p>For most Canadian contractors the answer is a mid-size AlorAir Storm-class LGR with an onboard condensate pump &mdash; roughly 90 to 120 pints AHAM, rotomolded, stackable, and drawing under 9 amps on a standard 115V circuit. That machine covers the overwhelming majority of what actually happens in this country: a burst supply line in a finished basement, a failed sump during a spring thaw, a washing machine hose that let go while nobody was home. Dri-Eaz-class units are built heavier and are the better buy once the machine works every week rather than twice a year.</p>
          <p>The brand matters less than three decisions that most first-time buyers get wrong: buying on the wrong capacity number, under-buying air movers, and ignoring the electrical load. Get those three right and a mid-priced machine outperforms an expensive one badly deployed. Job-site LGRs are a serious purchase in Canada &mdash; mid-size units sit broadly in the $900 to $1,600 range, with heavier fleet-grade machines well above that &mdash; so the cost of getting the decision wrong is real.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="alorair storm lgr commercial dehumidifier pump">AlorAir Storm-class (best overall) →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="dri eaz lgr restoration dehumidifier">Dri-Eaz-class (heavy duty) →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="commercial air mover carpet dryer stackable">Air movers →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="pinless moisture meter drywall wood">Moisture meter →</BuyLink>
          </div>

          <h2>What &ldquo;Low Grain Refrigerant&rdquo; Actually Means</h2>
          <p>A grain is a unit of water weight &mdash; one seven-thousandth of a pound &mdash; and restoration work measures the moisture in air as grains per pound of dry air, written gpp. It is a more useful measure than relative humidity on a drying job, because relative humidity moves when the temperature moves even though the actual water content has not changed. Grains tell you how much water is really in the air.</p>
          <p>A conventional refrigerant dehumidifier drags air across a cold coil, condenses water out of it, and reheats the air on the way out. That works beautifully while the air is wet. As the space dries, the dew point falls, the coil struggles to get the air below it, and somewhere in the mid-50s gpp the machine effectively stalls &mdash; it is still running, still making noise, still costing you power, and barely removing water.</p>
          <p>An LGR adds an air-to-air heat exchanger that pre-cools the incoming air using the cold air already leaving the coil. The air arrives at the evaporator much colder, so the coil can push it far lower &mdash; into the 30s gpp and below. That is the entire class. The headline is not that an LGR removes more water on day one; a conventional unit does fine on day one. It is that the LGR is still removing meaningful water on day three, which is exactly when framing, subfloor and the back side of drywall are giving up their moisture slowly and a stalled machine lets mould get started.</p>

          <h2>The Rating Game: AHAM vs Saturation</h2>
          <p>This is the single most expensive misunderstanding in the category, and it is worth being blunt about. Every machine in this class carries two capacity figures, and the marketing uses the bigger one.</p>
          <ul>
            <li><strong>Saturation rating</strong> &mdash; measured in hot, soaking test conditions (around 32&deg;C and 90% relative humidity). It is a real measurement of an unreal scenario. It is roughly double the other number.</li>
            <li><strong>AHAM rating</strong> &mdash; measured at a standardised, far more realistic condition, and the figure you can compare honestly across brands.</li>
          </ul>
          <p>So a unit sold as a &ldquo;220 pint&rdquo; machine is frequently an 110 to 130 pint AHAM unit. Neither number is a lie; buying on the wrong one is how a contractor ends up with half the drying capacity they thought they had, on the worst job of the year. Size every job from AHAM and treat a listing that hides the AHAM figure as telling you something about the seller. If you only remember one thing from this guide, make it this one.</p>

          <h2>How to Size an LGR for a Job Site</h2>
          <p>Size by air volume, not floor area. Multiply length by width by ceiling height for the affected space, compare that cubic-foot figure to the coverage the manufacturer publishes, and then derate honestly &mdash; more capacity for a severe loss, for a lot of saturated material like carpet, underlay and framing, and for a space you cannot contain properly.</p>
          <p>Two practical rules from real jobs. First, <strong>two smaller units usually beat one large one</strong> at the same total AHAM: you can place them at opposite ends of a long basement, you keep drying if one fails at 3am, and you can split the electrical load across separate circuits. Second, <strong>containment beats capacity</strong>. Sheeting off a stairwell and closing doors so you are drying the wet room rather than the whole house will do more for your drying time than buying the next size up. A machine fighting the entire volume of an open-plan basement plus the stairwell plus the main floor is a machine you are paying to lose.</p>

          <h2>The Air Mover Is Half the Machine</h2>
          <p>Wet material only releases moisture as fast as air carries it off the surface. Leave a saturated floor alone and a still, humid boundary layer sits on top of it; evaporation slows to a crawl and your expensive dehumidifier has nothing to pull out of the air. Air movers break that layer up and keep feeding the dehumidifier, which is why the two are bought together and why a contractor with one LGR and no movers is usually the one complaining that LGRs are overrated.</p>
          <p>The working rule of thumb on site is roughly <strong>one air mover per 40 to 60 square feet of wet floor</strong>, plus one extra per room and one at each inside corner or offset, aimed at a low angle along the surface rather than straight into it. Add movers for stairs and for any cavity you have opened up. And then, before you plug anything in, add the amps.</p>

          <h2>Power, Circuits, and the Breaker You Are About to Trip</h2>
          <p>A job-site LGR typically draws somewhere between 6 and 9 amps at 115V. A standard 15-amp residential circuit gives you about 12 amps of continuous load once you respect the usual 80% derating convention, so the dehumidifier alone consumes most of it. Add three air movers at roughly 1.5 to 3 amps apiece and you are over the limit &mdash; and in an older Toronto, Hamilton or Mississauga home where the whole finished basement runs off one shared circuit, you will discover that overnight, with the equipment dead and the structure quietly re-wetting itself for six hours.</p>
          <p>Map the panel before you set up. Split the load across at least two circuits, ideally on different legs. Avoid daisy-chained extension cords, use heavy-gauge cord on any run past about 15 metres, and label what you have plugged where so the homeowner does not unplug the dehumidifier to charge a phone. On a large loss, this is the difference between a three-day dry and a five-day one.</p>

          <h2>Drainage: Get the Pump</h2>
          <p>Gravity drainage assumes a floor drain lower than the machine with a clear run to it &mdash; exactly what a finished basement, a second-floor bathroom loss, or a slab-on-grade condo does not have. A built-in condensate pump lets you run small-bore hose up a stairwell to a laundry tub, out a window, or into a bathtub, so the machine keeps working overnight and through a weekend with nobody on site. That unattended capability is most of what separates a commercial machine from a residential one, and it is worth paying for every time.</p>
          <p>Carry a spare length of heavy-duty drain hose. Route it so nobody trips over it and so it cannot get pinched behind a door. Check the discharge point on every visit &mdash; a pump quietly discharging into a laundry sink that someone has since filled with tools is a flood you caused yourself, on a job you were hired to fix.</p>

          <h2>Where the LGR Stops: Cold Ontario Spaces</h2>
          <p>Every refrigerant machine is a heat pump, and performance falls as air temperature falls. LGRs hold up much better than conventional units and remain usable down near freezing, but their efficient range is warm, which is why crews heat the containment rather than fight the cold. Below roughly 5&deg;C &mdash; an unheated garage, an open construction site, a crawl space in an Ontario February &mdash; the honest answer is a desiccant machine, which uses an adsorbent wheel instead of a cold coil and barely notices the temperature. Restoration outfits rent desiccants for cold-weather drying rather than owning them.</p>
          <p>The homeowner version of exactly the same physics is worth understanding before you buy anything: see <Link href="/blog/desiccant-vs-compressor-dehumidifier-canada">desiccant vs compressor dehumidifiers in Canada</Link> for where each class belongs in a cold garage, a cellar or a closed-up cottage.</p>

          <h2>Buying in Canada: The Four Checks</h2>
          <p>First, <strong>buy the Canadian listing</strong>. You want a 115V/60Hz machine with a certification mark recognised here &mdash; CSA or cETL &mdash; and a warranty you can claim without shipping a 40-kilogram unit across a border. Second, <strong>confirm the amp draw</strong> against the circuits you actually work on, not against an idealised 20-amp shop supply. Third, <strong>check filter availability in Canada</strong>: a job-site machine eats intake filters, and a model whose filters are hard to source here becomes shelf furniture in a year. Fourth, set expectations about where to shop &mdash; Canadian Tire, Home Depot and Rona carry residential dehumidifiers, and LGR-class machines come from Amazon.ca and restoration equipment suppliers. Buy before the emergency; the week you need one is the week nothing ships quickly.</p>

          <h2>Honestly: Most People Reading This Should Not Buy One</h2>
          <p>If the problem is that your basement smells musty, feels clammy, or sits above 60% relative humidity, an LGR is the wrong machine and a residential Energy Star unit with a settable humidistat and a continuous drain is the right one at roughly a tenth of the cost. An LGR is designed for intermittent, punishing duty against an active water loss &mdash; standing water, saturated drywall, a race against mould measured in days. Run one as a permanent basement appliance and you get noise, a large hydro bill, and premature wear on a machine that was never meant to hold a setpoint for six months.</p>
          <p>Buy the LGR if you dry structures for money, if you manage enough rental doors that you would otherwise rent one several times a year, or if you are genuinely remote and cannot get a restoration crew out quickly. Otherwise, compare your local daily rental rate against the purchase price and be honest about your annual usage &mdash; the crossover generally sits somewhere past a few weeks of cumulative use per year. One hidden factor usually decides it for the people who do buy: during a regional storm event, every rental LGR within driving distance is already deployed. Owning is partly buying capacity for the one week nobody has any to rent you.</p>
          <p>And whichever machine you end up with, the drying job is only finished when a meter says so. Pull equipment because the readings came down to a dry standard, not because the floor looks fine &mdash; wet cavities that were called dry early are where mould problems are born, and no amount of humidity control afterwards undoes a structure that was closed up wet. Our <Link href="/blog/best-large-capacity-dehumidifier-canada">large-capacity dehumidifier guide</Link> covers the step below this one for permanently wet basements.</p>

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
            <li><Link href="/blog/desiccant-vs-compressor-dehumidifier-canada">Desiccant vs Compressor Dehumidifier Canada — The Cold-Room Fork in the Road</Link></li>
            <li><Link href="/blog/best-large-capacity-dehumidifier-canada">Best Large-Capacity Dehumidifier Canada — For the Wettest Basements</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Dehumidifier for a Canadian Basement — Sizing &amp; Drainage</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-mold-canada">Best Dehumidifier for Mold Canada — The 60% Humidity Threshold</Link></li>
            <li><Link href="/blog/best-pest-control-equipment-canada">Best Pest-Control Equipment Canada — The Full Device Hub</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA variant="equipment" />
      </article>
    </>
  )
}
