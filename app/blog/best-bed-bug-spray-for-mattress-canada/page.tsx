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

const SLUG = 'best-bed-bug-spray-for-mattress-canada'
const DATE = '2026-07-21'
const UPDATED = '2026-07-21'
const TITLE = 'Best Bed Bug Spray for a Mattress in Canada — Mattress-Safe Picks and the Label Rule'
const META_TITLE = 'Best Mattress-Safe Bed Bug Spray in Canada'

const FAQS = [
  {
    question: 'What is the best bed bug spray for a mattress in Canada?',
    answer: 'For most Canadian homes, the best mattress-safe bed bug spray is a plant-based contact killer like EcoRaider, or a PMRA-registered Canadian product such as Doktor Doom Sleep Tight — both are formulated to be sprayed directly onto the seams and surface of a mattress you will sleep on. The key is that the label explicitly permits mattress use and carries a Canadian PCP registration number. A spray kills the bed bugs it directly wets, but it will not reach eggs buried deep in the fabric or bugs hiding inside the box spring, so it is one tool in a plan alongside a steamer, an encasement, and interceptor traps.',
  },
  {
    question: 'Can you spray bed bug spray directly on a mattress you sleep on?',
    answer: 'Only if the product label specifically says you can. This is the single most important rule. Many strong bed bug concentrates and foggers are labelled for cracks, crevices, and baseboards but are NOT approved for the sleeping surface of a mattress — spraying them where your skin contacts all night is unsafe and off-label. A mattress-labelled spray (EcoRaider, Doktor Doom Sleep Tight, and similar) is tested and registered for exactly that use, usually with a direction to let the mattress dry fully before you re-make the bed. Read the label, look for the word "mattress," and let it dry before sleeping.',
  },
  {
    question: 'Why does the PMRA registration number matter on a bed bug spray?',
    answer: 'In Canada, any product that claims to kill bed bugs is a pest control product and must be registered with Health Canada\'s Pest Management Regulatory Agency (PMRA). A registered product carries a PCP registration number on the label, which means Health Canada has reviewed its ingredients, its safety, and — critically — the specific uses it is approved for, including whether it may be applied to a mattress. Many powerful US-market sprays you see online (some Harris, Ortho, and professional-concentrate products) carry an EPA number, not a PCP number, and are not legal for sale or import into Canada. Buying a PMRA-registered spray means you are getting a product whose mattress use has actually been vetted here.',
  },
  {
    question: 'Do bed bug sprays actually kill bed bugs on a mattress?',
    answer: 'They kill the bed bugs and nymphs the spray directly wets — contact-kill sprays like EcoRaider drop bugs quickly on direct contact, and some residual sprays keep killing for days on treated surfaces. What no spray does reliably is kill the eggs. Bed bug eggs are cemented into fabric with a protective coating, and most sprays do not penetrate or kill them, which is why you get a new wave of nymphs a week or two later even after a thorough spray. That egg gap is the reason mattress spraying is always paired with heat (steam), physical exclusion (an encasement), and monitoring (interceptors).',
  },
  {
    question: 'What is the difference between a contact-kill and a residual bed bug spray?',
    answer: 'A contact-kill spray (EcoRaider is the best-known plant-based example) kills bugs it directly hits and then largely evaporates, leaving little lasting film — you are spraying the bugs you can see, in real time. A residual spray leaves an active deposit on the surface that keeps killing bed bugs that walk across it for days or weeks afterward. For a mattress you sleep on, many people prefer a lower-residue contact killer on the sleeping surface and save the longer-residual products for the frame, box spring, and baseboards. Some Canadian products blend both effects — always confirm the label approves the surface you are treating.',
  },
  {
    question: 'How do I spray a mattress for bed bugs properly?',
    answer: 'Strip the bed completely and wash all bedding on hot, then dry on high heat. Stand the mattress up so you can reach both sides. Spray the seams, piping, tufts, tags, and any folds thoroughly — that is where bed bugs harbour — and treat the surface per the label. Do the same to the box spring, paying attention to the fabric edge and the wooden frame beneath. Then treat the bed frame joints, slats, headboard cracks, and the baseboards nearest the bed. Let everything dry fully before you re-make the bed. Repeat the treatment on the label\'s recommended interval, because you are trying to catch newly hatched nymphs before they mature.',
  },
  {
    question: 'Is EcoRaider or Doktor Doom Sleep Tight better for a mattress?',
    answer: 'They suit slightly different priorities. EcoRaider is a plant-oil-based contact killer that many people choose specifically because it is low-odour and they are comfortable spraying it near where they sleep; it drops bugs fast on contact but leaves modest residual. Doktor Doom Sleep Tight is a Canadian brand with clear PMRA registration and a mattress-and-furniture label, often chosen for the reassurance of a domestic product designed for exactly this use. If your priority is a plant-based, low-tox contact kill, lean EcoRaider; if your priority is a straightforward Canadian-registered mattress spray, lean Doktor Doom Sleep Tight. Both belong in the same shortlist.',
  },
  {
    question: 'Will a mattress spray get rid of bed bugs on its own?',
    answer: 'No, and it is important to be honest about that. A mattress spray is a removal-and-knockdown tool, not a whole solution. It kills the bugs it wets but misses eggs cemented in fabric, bugs deep inside the box spring, and the population spreading to the frame, baseboards, nightstand, and outlet plates. Real eradication comes from stacking methods: spray for the bugs you can reach, steam for the eggs, an encasement to trap and starve anything left inside the mattress, and interceptor traps to monitor. Rely on a spray alone and the infestation almost always rebounds.',
  },
  {
    question: 'How often should I re-spray the mattress?',
    answer: 'Follow the interval on your product\'s label, but for most contact sprays that means re-treating every 7 to 14 days for at least three to four weeks. The reason is the egg gap: because sprays do not kill eggs reliably, new nymphs keep hatching for up to two weeks after you first treated, and you need the spray present when they emerge. Keep re-treating and monitoring until interceptor traps and visual checks show no new activity for a couple of weeks, then keep the encasement on for at least a year as insurance.',
  },
  {
    question: 'Are "natural" bed bug sprays effective on a mattress?',
    answer: 'The better plant-based sprays — those built around essential-oil actives like geraniol, or the specific formulation in EcoRaider — do genuinely kill bed bugs on contact and are popular for mattress use because people accept them near the sleeping surface. Where "natural" disappoints is residual and eggs: many botanical sprays evaporate quickly and offer little lasting protection, so they demand disciplined repeat spraying. Be wary of vague "natural bed bug spray" products with no PMRA registration and no independent evidence — a pleasant scent is not proof it works. Our companion guide to natural bed bug sprays in Canada digs into which botanical formulas hold up.',
  },
  {
    question: 'Can I just buy a strong American bed bug spray online instead?',
    answer: 'It is risky and often not legal. Powerful US-market sprays and concentrates (some Harris, Ortho Home Defense, and pro products like Crossfire) are formulated to EPA standards and carry an EPA registration number, not the Canadian PCP number that Health Canada\'s PMRA requires. Importing an unregistered pesticide is not permitted, and many of these products are not label-approved for direct mattress application even in the US. You also lose the assurance that the product\'s mattress use has been vetted for a surface you sleep on. Stick to sprays that carry a Canadian PCP registration number and a mattress-approved label.',
  },
  {
    question: 'Should I encase the mattress after spraying it?',
    answer: 'Yes — spraying and encasing work together. After you treat the mattress and box spring and let them dry, seal each inside a certified bed-bug-proof encasement. The encasement traps any bugs or eggs your spray missed so they cannot bite you or escape, and it starves them over the months it stays on. It also makes future monitoring trivial: bed bugs can no longer hide in the mattress seams, so any new activity shows up on the smooth encasement surface where you can spot and kill it. Spray to knock the population down, then encase to lock in the gains.',
  },
  {
    question: 'Can we spray bed bug spray on mattress?',
    answer: 'Only if the label names mattresses. In the United States, mattress-approved labels typically restrict application to the edges, tufts, folds, sides and seams, and warn against treating bed linens or any surface in prolonged contact with occupants. In Canada, the product also needs a PCP number. Either way, let it dry fully before remaking the bed. That narrow permission is deliberate: a mattress is a surface you breathe against for eight hours, so the registered use pattern is the harbourage strip along the seam, not a general misting of the sleeping surface. If your can does not name mattresses at all, it belongs on the frame, the box-spring wood, and the baseboards instead.',
  },
  {
    question: 'What to do if you slept in a bed with bed bugs?',
    answer: 'Do not panic and do not throw the mattress out. Strip the bedding straight into a sealed bag, wash and dry it on the hottest safe setting, inspect the seams and slats for live bugs and dark spotting, and set interceptor traps under the bed legs. Then treat, or call a professional. Do not move to the couch — that usually just spreads the infestation to a second room. The US Centers for Disease Control and Prevention and the Environmental Protection Agency, in their joint statement on bed bugs, describe them as a pest of significant public health importance while noting bed bugs are not known to transmit disease to people; the documented effects are allergic reactions and secondary skin infections such as impetigo, ecthyma and lymphangitis. Mayo Clinic advises seeing a doctor if bites blister, show signs of infection, or trigger an allergic skin reaction. This is general information, not medical advice.',
  },
  {
    question: 'What kills bedbugs 100%?',
    answer: 'Nothing in a single can. Heat is the closest thing: sustained temperatures that penetrate fabric kill every life stage, eggs included, which no spray reliably does. Realistically, 100% comes from stacking heat or steam, a mattress encasement, a desiccant dust in cracks, repeat spraying, and interceptor monitoring over several weeks. Foggers and bug bombs are the wrong tool here — the US EPA advises they should not be used as the only method of control, and Texas A&M AgriLife Extension describes them as largely ineffective against bed bugs because the aerosol never reaches into the seams and voids where the bugs actually sit.',
  },
  {
    question: 'What kills bedbugs permanently?',
    answer: 'Permanence comes from the plan, not the product. A population is gone for good only when every life stage is killed and re-introduction is blocked: repeat treatment across the full hatch cycle, heat for the eggs, an encasement left on for a year, and interceptor traps that stay under the legs afterward as an early-warning system. Desiccants such as silica aerogel deserve a mention here because they kill physically — by stripping the waxy cuticle so the insect dries out — which is why the US EPA notes bed bugs cannot develop resistance to them the way they do to conventional pesticides. Registered desiccants are cracks-and-crevices products, though, not mattress sprays.',
  },
  {
    question: 'What gets rid of bed bugs immediately?',
    answer: 'Nothing gets rid of an infestation immediately, but a contact-kill spray such as EcoRaider drops the bugs it directly wets within minutes, and steam kills on contact. That buys you a usable bed tonight. The eggs hatching over the next two weeks are what turns immediate relief into a month-long job. If you need one night of relief right now: strip and hot-wash the bedding, vacuum the seams and empty the canister outside, spray or steam the seams and piping, and put interceptor traps under the legs so you can tell tomorrow whether anything is still moving.',
  },
  {
    question: 'What is the most effective spray for bed bugs?',
    answer: 'The most effective spray is the one whose chemical class your local population is not resistant to, applied where bed bugs actually harbour. In the United States that usually means a combination product or a non-pyrethroid class — a pyrrole like chlorfenapyr or a neonicotinoid — rather than another pyrethroid aerosol off the shelf. University of Kentucky researchers found 88% of 110 US bed bug populations carried one or two kdr mutations linked to pyrethroid resistance, and Texas A&M AgriLife Extension states plainly that most bed bugs are resistant to over-the-counter sprays to some degree. For the mattress itself the answer is narrower still: the most effective spray is whichever mattress-labelled product you will actually re-apply on schedule.',
  },
  {
    question: 'What is the best bug spray for bed bugs?',
    answer: 'A personal insect repellent is not a bed bug spray. DEET, picaridin and citronella products are built to keep biting insects off skin outdoors, and repellents are not registered to control a bed bug infestation. The best bug spray for bed bugs is a surface insecticide whose label names the site you intend to treat. Read the use-site list on the back of the can before the brand name on the front: a product cleared for cracks and crevices is not cleared for the surface you sleep on, no matter how well it kills.',
  },
  {
    question: 'Do American bed bug sprays need an EPA registration number?',
    answer: 'Yes, with one large exception. In the United States a product that claims to kill bed bugs normally carries an EPA registration number on the label — Harris Egg Kill Bed Bug Killer, for example, is EPA Reg. No. 1021-1767-3 — and the EPA says it has registered more than 300 products for use against bed bugs. You can verify any of them in the free EPA Bed Bug Product Search Tool at cfpub.epa.gov/oppref/bedbug, searchable by product, company, registration number, use site or pesticide type. The exception is FIFRA Section 25(b): certain minimum-risk botanical products are exempt from registration entirely, which means no EPA efficacy review at all, and they can be restricted state by state.',
  },
  {
    question: 'Are pyrethroid bed bug sprays still effective in the United States?',
    answer: 'Often much less than the label suggests. University of Kentucky sampling found 88% of 110 US bed bug populations carried kdr mutations tied to pyrethroid resistance, seven of eight field populations from US pest-management firms were more than 100-fold resistant to deltamethrin, and Virginia Tech recorded a Richmond, Virginia strain with resistance ratios in the thousands. Most mass-market US aerosols are pyrethroid-based. The EPA answer is to use a combination product or switch chemical class — a pyrrole, a neonicotinoid, an insect growth regulator, or a physical-mode desiccant in cracks and crevices — rather than buying a second can of the same thing.',
  },
  {
    question: 'Is bed bug season different in the United States and Canada?',
    answer: 'Bed bugs live indoors year round in both countries, so there is no weather-driven season the way there is for mosquitoes and ticks. What varies is how often they are moved around. US bed bug activity peaks roughly June through October and is sharpest in August and September, driven by summer travel and the college move-in season rather than by temperature. Orkin\'s 2026 US bed bug cities ranking put Chicago first again, followed by Los Angeles, Detroit, Cleveland and Indianapolis, with Ohio the most-represented state in the top 50. Canadian activity follows the same travel-driven pattern without the campus spike.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Only some bed bug sprays are label-approved for the mattress you sleep on. Our Canadian mattress-safe picks, why the PMRA number matters, and how to spray.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('best-bed-bug-spray-for-mattress-canada')

export default function BestBedBugSprayForMattressCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buyer’s guide to mattress-safe bed bug sprays — why PMRA registration and a mattress-approved label matter, contact-kill vs residual, spraying technique, and our EcoRaider, Doktor Doom Sleep Tight, and budget picks.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Bed Bug Spray for Mattress Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Bed Bug Spray for Mattress</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Not every bed bug spray is safe to put on a mattress you sleep on. Here is how to read the label, why the PMRA registration number matters, and our mattress-approved picks &mdash; contact-kill, residual, and natural &mdash; for Canadian homes.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar tag={AMZ_TAG} name="EcoRaider Bed Bug Killer Spray (plant-based, mattress-safe)" search="ecoraider bed bug killer spray" label="Best overall" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed bug spray for a mattress in Canada is a <strong>mattress-labelled, PMRA-registered contact killer</strong> &mdash; a plant-based option like <strong>EcoRaider</strong> or a Canadian-registered product like <strong>Doktor Doom Sleep Tight</strong>. The rule that matters most: only spray a mattress you sleep on with a product whose label explicitly approves mattress use and that carries a Canadian PCP registration number. A spray kills the bugs it wets but not the glued-down eggs &mdash; pair it with a steamer, an encasement, and interceptor traps.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Only spray a sleeping surface with a product whose label says &ldquo;mattress&rdquo; &mdash; most strong concentrates and foggers are crack-and-crevice only.</li>
              <li>Look for a Canadian <strong>PCP registration number</strong> (PMRA), not just a US EPA number.</li>
              <li>Contact-kill sprays (EcoRaider) drop bugs on contact; residual sprays keep killing on the frame and baseboards for days.</li>
              <li>No spray reliably kills eggs &mdash; expect a second wave of nymphs and re-treat on schedule.</li>
              <li>Spray the seams, piping, tufts, and tags &mdash; that is where bed bugs harbour, not the open surface.</li>
              <li>Spray to knock the population down, then <em>encase</em> the mattress to trap and starve whatever is left.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>
          <SpecialistDisclosure pest="bed bugs" />
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="Our Picks — Best Mattress-Safe Bed Bug Sprays in Canada"
            awards={[
              {
                badge: 'Best Overall',
                name: 'EcoRaider Bed Bug Killer Spray',
                why: 'A plant-oil-based contact killer that people are comfortable spraying near where they sleep: low odour, drops bed bugs and nymphs fast on direct contact, and widely used on mattress seams and piping. Confirm current Canadian availability and the mattress direction on the label.',
                search: 'ecoraider bed bug killer spray',
                score: 9.1,
                featured: true,
                pros: ['Plant-based, low-odour formula', 'Fast contact kill on bugs and nymphs', 'Popular for direct mattress-seam use'],
                cons: ['Modest residual — re-treat on schedule', 'Does not kill glued-down eggs'],
              },
              {
                badge: 'Best Canadian / PMRA-Registered',
                name: 'Doktor Doom Sleep Tight Bed Bug Spray',
                why: 'A Canadian brand with a clear PMRA registration and a label written for mattresses and furniture — the reassurance of a domestic product designed for exactly this surface. The straightforward, no-guesswork pick for spraying a bed.',
                search: 'doktor doom sleep tight bed bug spray',
                score: 8.7,
                pros: ['Canadian PMRA / PCP registration', 'Label approves mattress and furniture use', 'Easy to source in Canada'],
                cons: ['Follow dry-time before re-making the bed', 'Eggs still need heat to kill'],
              },
              {
                badge: 'Best Residual (Frame & Edges)',
                name: 'Konk Bed Bug Killer',
                why: 'A Canadian-registered spray better suited to the bed frame, box-spring wood, slats, and baseboards, where a longer-lasting deposit keeps killing bugs that travel back toward the bed. Check the label before using on the sleeping surface itself.',
                search: 'konk bed bug killer spray',
                score: 8.0,
                pros: ['Lasting residual on hard surfaces', 'Canadian registration', 'Good partner to a mattress-surface spray'],
                cons: ['Best on frame/edges, not the sleep surface', 'Heavier residue than a contact killer'],
              },
              {
                badge: 'Best Natural Option',
                name: 'Essential-Oil (Geraniol) Bed Bug Spray',
                why: 'A botanical, essential-oil-based spray for households that want the lowest-tox option near the bed. Genuine contact kill from the better formulas, but short residual — this pick demands disciplined repeat spraying.',
                search: 'natural bed bug spray geraniol',
                score: 7.4,
                pros: ['Lowest-tox choice near the bed', 'Contact kill from quality formulas', 'Low odour'],
                cons: ['Short residual — frequent re-treats', 'Skip vague products with no registration'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Want one spray for the whole bed?</strong> The <em>Best Overall</em> EcoRaider is the plant-based contact killer most people reach for on mattress seams. <strong>Prefer the reassurance of a Canadian-registered mattress label?</strong> The <em>Best Canadian</em> Doktor Doom Sleep Tight is the no-guesswork pick. <strong>Treating the frame, box spring, and baseboards?</strong> Add the <em>Best Residual</em> Konk for lasting protection where you are not sleeping. <strong>Want the lowest-tox option near the bed?</strong> The <em>Best Natural</em> geraniol spray works if you commit to frequent re-treats. Whichever you choose, confirm the label approves the exact surface you are spraying.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Mattress Sprays Compared · Updated July 2026</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Contact-Kill vs Residual vs Natural — Which Belongs on a Mattress</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            All four types kill bed bugs, but only some are label-approved for the surface you sleep on. Here is the honest breakdown, with a live Amazon.ca availability check per type.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Spray type</th>
                  <th className="px-4 py-3 text-left">Mattress-surface use</th>
                  <th className="px-4 py-3 text-left">Best at</th>
                  <th className="px-4 py-3 text-left">Watch out for</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Plant-based contact<br /><span className="font-normal text-xs text-gray-500">EcoRaider</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; low-odour, popular on seams</td>
                  <td className="px-4 py-3 text-gray-700">Fast knockdown of visible bugs and nymphs</td>
                  <td className="px-4 py-3 text-gray-700">Modest residual; re-treat on schedule</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer spray" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Canadian mattress-labelled<br /><span className="font-normal text-xs text-gray-500">Doktor Doom Sleep Tight</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; PMRA-registered for mattresses</td>
                  <td className="px-4 py-3 text-gray-700">No-guesswork mattress + furniture treatment</td>
                  <td className="px-4 py-3 text-gray-700">Respect the dry-time before re-making</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom sleep tight bed bug spray" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Residual (hard surfaces)<br /><span className="font-normal text-xs text-gray-500">Konk</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Frame/edges</strong> &mdash; check label for surface</td>
                  <td className="px-4 py-3 text-gray-700">Lasting kill on frame, box spring, baseboards</td>
                  <td className="px-4 py-3 text-gray-700">Heavier residue; not for the sleep surface</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="konk bed bug killer spray" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Natural / essential-oil<br /><span className="font-normal text-xs text-gray-500">geraniol formulas</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; lowest-tox near the bed</td>
                  <td className="px-4 py-3 text-gray-700">Low-tox contact kill for sensitive homes</td>
                  <td className="px-4 py-3 text-gray-700">Short residual; skip unregistered products</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="natural bed bug spray geraniol" block>Check price on Amazon.ca →</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Any product that claims to kill bed bugs is a pest control product in Canada and must carry a PMRA / PCP registration number. Powerful US-only sprays with an EPA number but no Canadian registration are not legal to import &mdash; and often are not mattress-approved even in the US.
          </p>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ A spray removes the bugs it wets — not the eggs.</strong> Bed bug eggs are cemented into fabric and most sprays do not kill them. Pair your mattress spray with a <Link href="/blog/best-bed-bug-steamer-canada" className="text-emerald-700 underline font-semibold">steamer</Link> for the eggs, a <Link href="/blog/bed-bug-mattress-encasement-canada" className="text-emerald-700 underline font-semibold">certified encasement</Link> to trap what is left, and <Link href="/blog/bed-bug-interceptor-traps-canada" className="text-emerald-700 underline font-semibold">interceptor traps</Link> to monitor.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>The One Rule That Matters Most: Read the Label for &ldquo;Mattress&rdquo;</h2>
          <p>There is a dangerous assumption baked into the phrase &ldquo;bed bug spray&rdquo; &mdash; that because a product kills bed bugs, it is safe to spray anywhere bed bugs live, including the mattress you sleep on. It is not. A large share of the strongest bed bug sprays, foggers, and concentrates on the market are labelled strictly for cracks, crevices, and baseboards, and their directions explicitly exclude the sleeping surface. Spraying one of those onto a mattress and then lying on it all night is off-label and unsafe.</p>
          <p>A <strong>mattress-labelled</strong> spray is a different animal. It has been formulated, tested, and registered specifically so that it can be applied to a surface your skin will contact, usually with a direction to let the mattress dry fully before you re-make the bed. The word you are hunting for on the can is literally <em>&ldquo;mattress.&rdquo;</em> If it is not there, that product goes on the frame and baseboards, not the bed. This single label check is more important than any brand ranking below.</p>

          <p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability of the mattress-safe picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer spray">EcoRaider →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="doktor doom sleep tight bed bug spray">Doktor Doom Sleep Tight →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="konk bed bug killer spray">Konk (frame &amp; edges) →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="natural bed bug spray geraniol">Natural geraniol spray →</BuyLink>
          </div>

          <h2>Why the PMRA Registration Number Is Non-Negotiable in Canada</h2>
          <p>In Canada, anything that claims to kill a pest &mdash; including a bed bug spray &mdash; is legally a pest control product and must be registered with Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA). A registered product carries a <strong>PCP registration number</strong> printed on the label. That number is not bureaucratic decoration: it means Health Canada has reviewed the product&rsquo;s active ingredients, its human-safety data, and the exact uses it is approved for &mdash; including whether it may lawfully be applied to a mattress.</p>
          <p>This matters enormously for a mattress spray specifically, because the surface is one you breathe against for eight hours a night. A product that has cleared Canadian registration for mattress use has had that scenario evaluated. A grey-market spray bought from a foreign seller has not &mdash; it may carry a US EPA number instead of a Canadian PCP number, which means it was never assessed for the Canadian market and, in many cases, is not even label-approved for direct mattress application in its home country. When you shop, find the PCP registration number the same way you look for the word &ldquo;mattress.&rdquo; Both should be present before the can touches your bed.</p>

          <h2>In the United States: EPA Registration, Reg. Numbers, and the 25(b) Exemption</h2>
          <p>About one in six readers of this guide is American, so here is the US half of the same question. <strong>In Canada</strong>, the number to hunt for is the PCP registration number described above. <strong>In the United States</strong>, the equivalent proof is an <strong>EPA registration number</strong> printed on the label &mdash; Harris Egg Kill Bed Bug Killer, for example, carries EPA Reg. No. 1021-1767-3. The US Environmental Protection Agency says it has registered more than 300 products for use against bed bugs, and it runs a free <strong>Bed Bug Product Search Tool</strong> at <em>cfpub.epa.gov/oppref/bedbug</em>, searchable by product name, company, EPA registration number, use site, or pesticide type. Looking a can up there before you buy is the American equivalent of checking a Canadian PCP number &mdash; and the &ldquo;use site&rdquo; filter is precisely how you confirm a product is cleared for mattresses rather than guessing from the front of the bottle.</p>
          <p>One American wrinkle has no Canadian equivalent at all, and it lands squarely on the &ldquo;natural&rdquo; category. Under <strong>FIFRA Section 25(b)</strong>, the EPA exempts certain minimum-risk pesticides built from a listed set of botanical ingredients from registration entirely. Several of the botanical bed bug sprays an American shopper meets first &mdash; EcoSmart&rsquo;s bed bug aerosol and Grandpa Gus&rsquo;s natural bed bug killer among them &mdash; are sold under that exemption. The practical meaning is blunt: an exempt product has had <em>no</em> EPA efficacy review. Exempt is not the same as vetted; exempt means unreviewed. Exempt products can also be restricted state by state &mdash; EcoSmart&rsquo;s mattress-and-carpet aerosol is sold in only about ten states &mdash; so an American buying botanical should check both the ingredient panel and whether the product even ships to their state. Canadians face the mirror image: a botanical spray sold here still needs a PCP number, so in Canada &ldquo;natural&rdquo; buys no exemption from review.</p>
          <p>Both regulators agree on foggers. The EPA advises that foggers and bug bombs should not be used as the only method of control for bed bugs, and Texas A&amp;M AgriLife Extension goes further, describing them as largely ineffective against this pest because the aerosol never penetrates the seams and voids where bed bugs actually sit. And if you hit a pesticide question a label cannot answer: in the United States the <strong>National Pesticide Information Center</strong> (npic.orst.edu), an EPA-funded service run at Oregon State University, answers them by phone and email; in Canada, the PMRA&rsquo;s Pest Management Information Service plays the same role.</p>

          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[640px] w-full text-sm">
              <caption className="sr-only">How bed bug spray regulation differs between Canada and the United States</caption>
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">What a buyer needs to know</th>
                  <th className="px-4 py-3 text-left">In Canada</th>
                  <th className="px-4 py-3 text-left">In the United States</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Number on the label</td>
                  <td className="px-4 py-3 text-gray-700">PCP registration number, issued by Health Canada&rsquo;s PMRA</td>
                  <td className="px-4 py-3 text-gray-700">EPA registration number (Harris Egg Kill = EPA Reg. No. 1021-1767-3)</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Where to verify it</td>
                  <td className="px-4 py-3 text-gray-700">Health Canada&rsquo;s pesticide product label search</td>
                  <td className="px-4 py-3 text-gray-700">EPA Bed Bug Product Search Tool &mdash; cfpub.epa.gov/oppref/bedbug</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Are botanical sprays reviewed?</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; a botanical bed bug spray still needs PMRA registration</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Often not</strong> &mdash; FIFRA 25(b) minimum-risk products are exempt from registration and efficacy review</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Can it be barred where I live?</td>
                  <td className="px-4 py-3 text-gray-700">Yes &mdash; importing an unregistered pesticide is not permitted</td>
                  <td className="px-4 py-3 text-gray-700">Yes &mdash; 25(b) exempt products can be restricted state by state; check your state</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">How narrow is mattress permission?</td>
                  <td className="px-4 py-3 text-gray-700">The label must name &ldquo;mattress&rdquo;; follow the stated dry-time before remaking the bed</td>
                  <td className="px-4 py-3 text-gray-700">Typically edges, tufts, folds, sides and seams only &mdash; not linens or surfaces in prolonged contact with occupants</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Who answers pesticide questions?</td>
                  <td className="px-4 py-3 text-gray-700">PMRA Pest Management Information Service</td>
                  <td className="px-4 py-3 text-gray-700">National Pesticide Information Center (NPIC), npic.orst.edu</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Contact-Kill vs Residual: Where Each Belongs on a Bed</h2>
          <p>Mattress-relevant sprays split into two broad behaviours, and understanding the difference lets you build a smarter treatment than reaching for a single can.</p>
          <p>A <strong>contact-kill spray</strong> &mdash; EcoRaider is the archetype &mdash; kills the bed bugs and nymphs it directly wets, then largely evaporates and leaves little lasting film. You are essentially spraying the bugs you can see, in real time, which is exactly what you want on a sleeping surface where you would rather not leave a heavy chemical deposit. The trade-off is that once it dries, it is not doing much for you; a bug that walks across the spot tomorrow is unaffected. That is why contact killers demand disciplined repeat spraying.</p>
          <p>A <strong>residual spray</strong> leaves an active deposit that keeps killing bed bugs walking across it for days or weeks. That lasting film is ideal on the surfaces you are <em>not</em> sleeping on &mdash; the bed frame joints, box-spring wood, slats, headboard, and the baseboards along the wall &mdash; where you want a standing defence against bugs travelling back toward the bed. The practical playbook for most homes is a low-residue contact killer on the mattress surface and seams, and a longer-residual product like Konk on the frame and edges. Always confirm each product&rsquo;s label approves the surface you point it at.</p>

          <h2>Pyrethroid Resistance: Why a Residual Spray Can Fail in the United States</h2>
          <p>There is a fact that reframes the whole residual-spray decision, and it is the thing both of the strongest US authorities on this subject lead with. <strong>In the United States</strong>, bed bugs are widely resistant to pyrethroids &mdash; the chemical class that most mass-market aerosols and most residual sprays on a hardware-store shelf rely on. University of Kentucky researchers found that <strong>88% of 110 US bed bug populations</strong> sampled carried one or two kdr mutations linked to pyrethroid resistance. Seven of eight field populations collected from US pest-management firms were <strong>more than 100-fold resistant to deltamethrin</strong>. Virginia Tech recorded a Richmond, Virginia strain with a deltamethrin resistance ratio in the thousands, and six of seven Virginia strains carried the L925I genotype. Texas A&amp;M AgriLife Extension puts the consumer version plainly: most bed bugs are resistant to these sprays to some degree, and the common over-the-counter pesticides are at best moderately effective.</p>
          <p>This is not a reason to skip a residual spray &mdash; it is a reason to stop buying the same class twice. The EPA&rsquo;s own guidance is to use a combination product that pairs actives with different modes of action, or to switch chemical class outright when a treatment underperforms. <strong>In Canada</strong>, the shelf is narrower and several of these classes are professional-use only, so the practical Canadian version of the same advice is to pair your PMRA-registered spray with a non-chemical mode &mdash; steam for the eggs, a desiccant dust in the cracks, an encasement for anything left inside the mattress &mdash; rather than escalating to a stronger spray of the same type. Either country, the principle is identical: if a spray is not working, change the mode of action, not the brand.</p>
          <p>Here are the chemical classes the EPA registers for bed bug control, and where each one honestly belongs relative to the bed you sleep in.</p>

          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[680px] w-full text-sm">
              <caption className="sr-only">EPA-registered chemical classes for bed bug control and where each belongs</caption>
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Chemical class</th>
                  <th className="px-4 py-3 text-left">How it kills</th>
                  <th className="px-4 py-3 text-left">Where it belongs</th>
                  <th className="px-4 py-3 text-left">Resistance status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Pyrethrins<br /><span className="font-normal text-xs text-gray-500">botanical, from chrysanthemum</span></td>
                  <td className="px-4 py-3 text-gray-700">Attacks the nervous system; fast knockdown, little residual</td>
                  <td className="px-4 py-3 text-gray-700">Contact kill on bugs you can see; mattress only if the label names it</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Affected</strong> &mdash; same target site as pyrethroids</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Pyrethroids<br /><span className="font-normal text-xs text-gray-500">deltamethrin and relatives</span></td>
                  <td className="px-4 py-3 text-gray-700">Same nerve target, synthetic and longer-lasting</td>
                  <td className="px-4 py-3 text-gray-700">Residual film on frames, slats and baseboards</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Widely resistant</strong> in US populations &mdash; the class the kdr studies measured</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Desiccants<br /><span className="font-normal text-xs text-gray-500">silica aerogel, diatomaceous earth</span></td>
                  <td className="px-4 py-3 text-gray-700">Physical: strips the waxy cuticle so the insect dries out</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Cracks and crevices only</strong> on registered labels &mdash; not a mattress product</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">None</strong> &mdash; EPA notes bed bugs cannot become resistant to a physical mode of action</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Biochemicals<br /><span className="font-normal text-xs text-gray-500">cold-pressed neem oil</span></td>
                  <td className="px-4 py-3 text-gray-700">Plant-derived active; the only biochemical EPA registers for bed bugs</td>
                  <td className="px-4 py-3 text-gray-700">Labelled sites only &mdash; check whether mattress use is listed</td>
                  <td className="px-4 py-3 text-gray-700">Different mode from pyrethroids</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Pyrroles<br /><span className="font-normal text-xs text-gray-500">chlorfenapyr</span></td>
                  <td className="px-4 py-3 text-gray-700">A pro-insecticide: activated inside the insect, then disrupts its energy production</td>
                  <td className="px-4 py-3 text-gray-700">Mostly professional and crack-and-crevice applications</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Works on pyrethroid-resistant bugs</strong></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Neonicotinoids</td>
                  <td className="px-4 py-3 text-gray-700">Acts on nicotinic receptors in the nervous system</td>
                  <td className="px-4 py-3 text-gray-700">Often sold inside combination products for harbourage surfaces</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Still kills</strong> populations that survive pyrethroids</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Insect growth regulators</td>
                  <td className="px-4 py-3 text-gray-700">Mimic juvenile hormone or disrupt chitin so nymphs never mature</td>
                  <td className="px-4 py-3 text-gray-700">Support role alongside a killing agent &mdash; no quick knockdown</td>
                  <td className="px-4 py-3 text-gray-700">Different mode; slow-acting by design</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 not-prose mb-6">Classes as categorised by the US EPA&rsquo;s bed bug pesticide guidance. Availability differs by country: several of these are professional-use products in Canada, and any product you buy here still needs a PMRA / PCP registration number and a label that names the surface you intend to treat.</p>

          <h2>How to Actually Spray a Mattress for Bed Bugs</h2>
          <p>Technique determines whether a good spray succeeds or wastes itself on the open surface where bed bugs rarely sit. Work methodically:</p>
          <ul>
            <li><strong>Strip and launder first.</strong> Remove all bedding and wash it hot, then dry on high heat &mdash; heat is one of the few things that reliably kills eggs, and it clears the mattress for treatment.</li>
            <li><strong>Stand the mattress up.</strong> You need access to both faces and every edge. Bed bugs concentrate in the piping, seams, tufts, and the fabric tag &mdash; treat those thoroughly, not just the flat centre.</li>
            <li><strong>Spray the harbourage, per the label.</strong> Wet the seams and folds until the product reaches into the crease, and treat the surface as the mattress label directs.</li>
            <li><strong>Do the box spring next.</strong> Flip it, treat the fabric edge, and spray the wooden frame beneath &mdash; the box spring is a bigger harbourage than the mattress in many infestations.</li>
            <li><strong>Treat the frame and baseboards.</strong> Hit the bed-frame joints, slats, bolt holes, headboard cracks, and the baseboards nearest the bed &mdash; ideally with a residual spray here.</li>
            <li><strong>Let it dry fully.</strong> Do not re-make the bed until the mattress is dry, exactly as the label instructs.</li>
            <li><strong>Re-treat on schedule.</strong> Repeat every 7&ndash;14 days for three to four weeks to catch newly hatched nymphs before they mature.</li>
          </ul>
          <p>For the full room-level protocol &mdash; not just the bed &mdash; our guide to <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">getting rid of bed bugs in Canada</Link> walks through every surface, and the <Link href="/blog/how-to-kill-bed-bug-eggs-canada">how to kill bed bug eggs</Link> guide covers the part a spray cannot handle.</p>

          <h2>Can We Spray Bed Bug Spray on Mattress?</h2>
          <p>Only if the label names mattresses. In the United States, mattress-approved labels typically restrict application to the edges, tufts, folds, sides and seams, and warn against treating bed linens or any surface in prolonged contact with occupants. In Canada, the product also needs a PCP number. Either way, let it dry fully before remaking the bed.</p>
          <p>That narrow permission is deliberate rather than fussy. A mattress is a surface you breathe against for eight hours, so the registered use pattern is a targeted treatment of the harbourage strip &mdash; the piping, the seam, the tuft, the fold, the tag &mdash; not a general misting of the sleeping surface. Harris, whose Egg Kill product is one of the few US labels to spell out its surface list, names carpet, mattresses, box springs, walls, bedding, floors, rugs, garments, luggage, closets and drapes, and then instructs you to let sprayed articles and surfaces dry thoroughly before using or replacing bedding. That dry-thoroughly line is not boilerplate; it is the condition under which the mattress permission was granted. Labels are not uniform on this point, so do not read one product&rsquo;s surface list as a general permission: other mattress-approved US labels explicitly exclude bed linens and any surface in prolonged contact with an occupant of the bed. The list printed on the can in front of you is the one that governs. Bedding itself is in any case better handled in a hot wash and a hot dryer cycle than with a pesticide.</p>
          <p>So the safe answer to the question, in either country, is a three-part check. <strong>One:</strong> does the label contain the word &ldquo;mattress&rdquo; in its use sites? If not, the can goes on the frame and baseboards. <strong>Two:</strong> does it carry a registration number for your country &mdash; a PCP number in Canada, an EPA registration number in the United States (or, for a 25(b) botanical, the knowledge that it was never reviewed)? <strong>Three:</strong> is the bed fully dry before you remake it? If all three are yes, spraying a mattress is a normal, label-compliant thing to do. If any one is no, you are improvising with a pesticide on the surface you sleep on, which is the one place improvising is not worth it.</p>

          <h2>What To Do If You Slept in a Bed With Bed Bugs</h2>
          <p>Do not panic and do not throw the mattress out. Strip the bedding straight into a sealed bag, wash and dry it on the hottest safe setting, inspect the seams and slats for live bugs and dark spotting, and set interceptor traps under the bed legs. Then treat, or call a professional.</p>
          <p>Two mistakes make the next morning worse. The first is moving to the couch or a spare room: bed bugs follow the carbon dioxide you exhale, so relocating usually converts a one-room problem into a two-room one. Sleep in the same bed, with the bedding laundered and interceptors deployed, while you treat it. The second is discarding the mattress before treatment &mdash; a bare bed frame still has a population in its joints, and dragging an infested mattress through the house seeds every room on the route. If you were sleeping somewhere else (a hotel, a relative&rsquo;s spare room), the priority shifts to your luggage: bag the clothes, run them through a hot dryer cycle, and inspect the case seams before it goes back in a closet. Our <Link href="/blog/best-bed-bug-spray-for-travel-canada">bed bug spray for travel</Link> guide covers that scenario in detail.</p>
          <p>On the health side, the United States Centers for Disease Control and Prevention and the Environmental Protection Agency issued a joint statement describing bed bugs as a pest of significant public health importance, while noting that bed bugs are not known to transmit disease to people. The effects those agencies do document are allergic reactions and secondary skin infections &mdash; impetigo, ecthyma and lymphangitis &mdash; usually arising from scratching rather than from the bite itself. Mayo Clinic advises seeing a doctor if bites blister, show signs of infection, or trigger an allergic skin reaction. Health Canada and provincial public health units give the same core guidance north of the border: bed bugs are a nuisance and a mental-health burden, not a disease vector.</p>
          <div className="not-prose my-6 rounded-xl border-l-4 border-brand-400 bg-brand-50 p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-brand-900">Not medical advice.</strong> This section summarises published guidance from the CDC, the EPA, Mayo Clinic and Health Canada for general information only. It is not a diagnosis and does not replace advice from a doctor or nurse practitioner. If a bite reaction worries you &mdash; spreading redness, blistering, discharge, fever, or difficulty breathing &mdash; contact a healthcare provider, and in an emergency call your local emergency number.
            </p>
          </div>

          <h2>The Egg Gap: Why a Spray Alone Always Rebounds</h2>
          <p>Here is the honest limit of every mattress spray, botanical or synthetic: it will not reliably kill bed bug eggs. Females cement their eggs into fabric with a protective coating that most sprays cannot penetrate, so a mattress you have sprayed thoroughly can still be studded with viable eggs. Those eggs hatch over the following one to two weeks, and suddenly you have a fresh wave of nymphs on a bed you thought you had cleared. This is the number-one reason people conclude &ldquo;the spray didn&rsquo;t work&rdquo; when in fact it worked exactly as designed &mdash; on the bugs, not the eggs.</p>
          <p>The fix is not a stronger spray; it is a stack of methods. <strong>Steam</strong> delivers the heat that kills eggs and hidden bugs deep in the fabric a spray cannot reach &mdash; see our <Link href="/blog/best-bed-bug-steamer-canada">best bed bug steamer</Link> guide for what temperature and dwell time actually work. A certified <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement</Link> seals any survivors inside where they cannot bite you and slowly starve. <Link href="/blog/bed-bug-interceptor-traps-canada">Interceptor traps</Link> under the bed legs let you monitor, week over week, whether the population is actually falling. And a <Link href="/blog/diatomaceous-earth-for-bed-bugs">desiccant dust</Link> or <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa</Link> in the cracks provides a long-lasting mechanical kill the spray does not. Spray to knock the numbers down fast; use the rest of the stack to finish the job.</p>

          <h2>What Kills Bedbugs 100%?</h2>
          <p>Nothing in a single can. Heat is the closest thing: sustained temperatures that penetrate fabric kill every life stage, eggs included, which no spray reliably does. Realistically, 100% comes from stacking heat or steam, a mattress encasement, a desiccant dust in cracks, repeat spraying, and interceptor monitoring over several weeks.</p>
          <p>The tempting shortcut &mdash; a fogger or bug bomb that promises to fill the room &mdash; is the one method both major authorities rule out. The US EPA advises that foggers and bug bombs should not be used as the only method of control for bed bugs, and Texas A&amp;M AgriLife Extension describes them as largely ineffective against this pest, because an aerosol that settles on open surfaces never reaches the seams, joints and wall voids where the population actually lives. Worse, a fogger can push bugs deeper into a structure and out into adjoining rooms. If a product&rsquo;s appeal is that you do not have to aim it, that is the tell.</p>

          <h2>What Kills Bedbugs Permanently?</h2>
          <p>Permanence comes from the plan, not the product. A population is gone for good only when every life stage is killed and re-introduction is blocked: repeat treatment across the full hatch cycle, heat for the eggs, an encasement left on for a year, and interceptor traps that stay under the legs afterward as an early-warning system.</p>
          <p>One class deserves a specific mention under &ldquo;permanent&rdquo;, because it is the only one that cannot be outrun by evolution. <strong>Desiccants</strong> &mdash; silica aerogel and diatomaceous earth &mdash; kill physically, by abrading and absorbing the waxy layer that keeps an insect from drying out. The EPA notes that bed bugs cannot become resistant to a desiccant the way they can to a conventional pesticide, because there is no metabolic target to mutate. The catch is placement: registered desiccants are cracks-and-crevices products, so they belong in the frame joints, bolt holes, and behind the headboard &mdash; <em>not</em> broadcast across a mattress you sleep on. Our <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa guide</Link> and the <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth guide</Link> cover application, which is done with a brush or duster in a barely visible film, not a heap.</p>

          <h2>What Gets Rid of Bed Bugs Immediately?</h2>
          <p>Nothing gets rid of an infestation immediately, but a contact-kill spray such as EcoRaider drops the bugs it directly wets within minutes, and steam kills on contact. That buys you a usable bed tonight. The eggs hatching over the next two weeks are what turns immediate relief into a month-long job.</p>
          <p>If tonight is the problem, the honest emergency sequence is: strip the bed and run the bedding through a hot wash and a hot dryer cycle; vacuum the seams, piping and frame joints and empty the canister into a sealed bag outside; spray or steam the seams and folds with a mattress-labelled product and let the bed dry completely; then put interceptor traps under all four legs so that tomorrow morning you have data rather than a guess. That gets you one decent night and the beginning of a measurement. It does not get you eradication, and any product promising eradication in one application is selling the part of the problem it cannot solve.</p>

          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[640px] w-full text-sm">
              <caption className="sr-only">How fast each bed bug control method works and whether it kills eggs</caption>
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">How fast</th>
                  <th className="px-4 py-3 text-left">Kills eggs?</th>
                  <th className="px-4 py-3 text-left">Contribution to a permanent fix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Contact-kill spray</td>
                  <td className="px-4 py-3 text-gray-700">Minutes, on the bugs it wets</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong></td>
                  <td className="px-4 py-3 text-gray-700">Knockdown only &mdash; must be repeated every 7&ndash;14 days</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Residual spray</td>
                  <td className="px-4 py-3 text-gray-700">Days to weeks on treated surfaces</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong></td>
                  <td className="px-4 py-3 text-gray-700">Standing defence on frame and baseboards; weakened by pyrethroid resistance in the US</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Steam</td>
                  <td className="px-4 py-3 text-gray-700">On contact</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; where the heat actually reaches</td>
                  <td className="px-4 py-3 text-gray-700">Closes the egg gap on seams and folds; slow, no residual</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Whole-room heat</td>
                  <td className="px-4 py-3 text-gray-700">One session, done by a professional</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; all life stages</td>
                  <td className="px-4 py-3 text-gray-700">The closest thing to &ldquo;100%&rdquo;, but no residual against re-introduction</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Desiccant dust</td>
                  <td className="px-4 py-3 text-gray-700">Days, as bugs cross it</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong></td>
                  <td className="px-4 py-3 text-gray-700">Long-lasting, physical mode &mdash; no resistance possible; cracks and crevices only</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Mattress encasement</td>
                  <td className="px-4 py-3 text-gray-700">Immediate as a barrier</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Traps them</strong> rather than killing them</td>
                  <td className="px-4 py-3 text-gray-700">Starves anything sealed inside; leave on about a year</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Interceptor traps</td>
                  <td className="px-4 py-3 text-gray-700">Overnight, as a reading</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">No</strong> &mdash; they monitor</td>
                  <td className="px-4 py-3 text-gray-700">The only way to know the population is actually falling, and the early warning afterward</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How to Choose: What You Are Actually Paying For</h2>
          <p>Mattress sprays are not expensive individually, but the wrong one is worse than useless &mdash; it can be unsafe or simply ineffective on a bed. Prioritise your decision in this order:</p>
          <ul>
            <li><strong>A mattress-approved label (non-negotiable).</strong> If the can does not say it can go on a mattress, it is disqualified for the sleeping surface no matter how well it kills. This is the first filter, not a nice-to-have.</li>
            <li><strong>A Canadian PCP registration number (non-negotiable).</strong> It is the proof the product&rsquo;s ingredients and uses were vetted here. No number, no sale &mdash; and no legal import of a foreign substitute.</li>
            <li><strong>The kill behaviour that matches the surface.</strong> A low-residue contact killer for the sleeping surface; a residual for the frame and edges. Buy for where you are spraying.</li>
            <li><strong>Odour and tox tolerance.</strong> If you are sensitive or have a low-tox preference, a plant-based contact killer near the bed makes the treatment something you will actually keep doing.</li>
            <li><strong>Coverage volume.</strong> A full bed treatment repeated over several weeks uses more product than people expect &mdash; buy enough that you are not tempted to skimp on the repeat sprays that catch the hatching nymphs.</li>
          </ul>
          <p>Read that as a spending map: the money question is small, but the label question is large. A registered, mattress-approved contact killer that you will re-apply on schedule beats a stronger, cheaper, off-label spray every time &mdash; because the strong off-label spray either does not belong on the bed or does not stop the eggs any better.</p>

          <h2>What Is the Most Effective Spray for Bed Bugs?</h2>
          <p>The most effective spray is the one whose chemical class your local population is not resistant to, applied where bed bugs actually harbour. In the United States that usually means a combination product or a non-pyrethroid class &mdash; a pyrrole like chlorfenapyr or a neonicotinoid &mdash; rather than another pyrethroid aerosol off the shelf.</p>
          <p>That framing is deliberately unglamorous, because &ldquo;most effective&rdquo; is not a fixed property of a bottle. Texas A&amp;M AgriLife Extension, which runs the strongest consumer factsheet on this subject, names actives and products in the same breath &mdash; silica aerogel products such as CimeXa and Tri-Die, diatomaceous earth, SteriFab, Bedlam, EcoRaider and Bed Bug Patrol &mdash; and then says the quiet part out loud: the common over-the-counter pesticides are at best moderately effective, and most bed bug populations carry some degree of resistance to them. That is why the answer for a bed is a stack rather than a single winner.</p>
          <p>For the mattress specifically, narrow it further. The most effective mattress spray is whichever mattress-labelled product you will genuinely re-apply on the label&rsquo;s schedule for three to four weeks, because a moderately effective spray applied six times beats an excellent one applied once. That is the real reason the plant-based contact killers do so well on this surface: people are willing to keep using them near the bed, and willingness is a bigger determinant of outcome than the active ingredient.</p>

          <h2>What Is the Best Bug Spray for Bed Bugs?</h2>
          <p>A personal insect repellent is not a bed bug spray. DEET, picaridin and citronella products are built to keep biting insects off skin outdoors, and repellents are not registered to control a bed bug infestation. The best bug spray for bed bugs is a surface insecticide whose label names the site you intend to treat.</p>
          <p>This distinction catches people out constantly, because the phrase &ldquo;bug spray&rdquo; means a skin repellent in one aisle and a surface insecticide in another. Spraying yourself before bed does not protect you from bed bugs in any dependable way, and it does nothing at all to the population living in the seam six inches away. Read the use-site list on the back of the can before the brand name on the front: a product cleared for cracks and crevices is not cleared for a sleeping surface, no matter how well it kills, and a product cleared for skin is not cleared for a mattress. Our companion guide on <Link href="/blog/do-bed-bug-sprays-actually-work">whether bed bug sprays actually work</Link> unpacks how much of the disappointment with this category comes down to using the right chemistry in the wrong place.</p>

          <h2>A Word on Grey-Market US Sprays</h2>
          <p>It is tempting to look at a powerful American product with glowing reviews &mdash; some Harris formulas, Ortho Home Defense, or professional concentrates like Crossfire &mdash; and try to buy it into Canada. Resist it. These are formulated to US EPA standards and carry an EPA registration number, not the Canadian PCP number the PMRA requires, so importing them is not permitted. Many are also crack-and-crevice or professional products that are not label-approved for direct mattress application even in the United States, which means you would be putting an unvetted pesticide on a surface you sleep on. The reassurance of a Canadian-registered, mattress-labelled spray is precisely the thing you are giving up when you chase a grey-market can. Name them, learn what their actives are, and then buy the PMRA-registered equivalent that is legal and vetted here.</p>

          <h2>If You Are Reading This From the United States</h2>
          <p>Everything in the section above is about <em>importing</em> a US product into Canada, and it applies to Canadian readers only. If you live in the United States, Harris, Ortho Home Defense, Hot Shot, Raid, Bedlam and CrossFire are not grey-market anything &mdash; they are the ordinary, legal, EPA-registered products of your own market, stocked at Home Depot, Walmart, Lowe&rsquo;s, Ace Hardware and Tractor Supply. Nothing on this page should be read as telling an American not to buy them.</p>
          <p>What does carry across the border is the reasoning, and there are exactly three things a US reader should take from the Canadian sections. First, the label check is identical: hunt for the word &ldquo;mattress&rdquo; in the use sites, and remember that US mattress labels are typically narrower still, restricting you to edges, tufts, folds, sides and seams rather than the open sleeping surface. Second, the registration check is the same idea with a different acronym &mdash; an EPA registration number instead of a PCP number, verifiable in the EPA&rsquo;s Bed Bug Product Search Tool, with the 25(b) botanical exemption as the one category that carries no efficacy review at all. Third, the resistance problem is worse in the US than the shelf implies, so the class-rotation advice above matters more, not less, when you are standing in front of a wall of pyrethroid aerosols.</p>
          <p>Here is the same label-first reading applied to the products a US shopper actually meets. This is a reading of published labels and EPA guidance rather than a hands-on comparison, and labels change &mdash; always confirm the current one on the can in front of you.</p>

          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[760px] w-full text-sm">
              <caption className="sr-only">US-market bed bug sprays, their regulatory status, and where each belongs</caption>
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">US-market product</th>
                  <th className="px-4 py-3 text-left">Regulatory status</th>
                  <th className="px-4 py-3 text-left">Where it belongs</th>
                  <th className="px-4 py-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">EcoRaider Bed Bug Killer<br /><span className="font-normal text-xs text-gray-500">also sold as EcoVenger</span></td>
                  <td className="px-4 py-3 text-gray-700">The one pick on our shortlist sold on both sides of the border</td>
                  <td className="px-4 py-3 text-gray-700">Plant-based contact kill on mattress seams and piping, per label</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer spray" block>Check availability &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Harris Egg Kill Bed Bug Killer</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">EPA-registered</strong> &mdash; Reg. No. 1021-1767-3; its label names mattresses and box springs among the use sites</td>
                  <td className="px-4 py-3 text-gray-700">Mattress seams and box spring; let sprayed articles dry thoroughly before bedding returns</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="harris egg kill bed bug killer" block>Check availability &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Harris 5-Minute Bed Bug Killer<br /><span className="font-normal text-xs text-gray-500">foaming spray</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">EPA-registered</strong> aerosol</td>
                  <td className="px-4 py-3 text-gray-700">Foam expands into voids &mdash; frame joints, bolt holes, headboard cracks; check the label before any mattress use</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="harris 5 minute bed bug killer foaming spray" block>Check availability &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Ortho Home Defense Bedbug Killer</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">EPA-registered</strong>, pyrethroid-based</td>
                  <td className="px-4 py-3 text-gray-700">Labelled harbourage surfaces &mdash; but this is the class carrying documented US resistance, so judge it by results and rotate if it underperforms</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ortho home defense bed bug killer" block>Check availability &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Bedlam Plus</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">EPA-registered</strong> aerosol combining a killing agent with an insect growth regulator</td>
                  <td className="px-4 py-3 text-gray-700">Named by Texas A&amp;M among the products worth knowing; confirm the current label&rsquo;s mattress directions</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bedlam plus bed bug spray" block>Check availability &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">CrossFire concentrate</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">EPA-registered</strong> professional combination product &mdash; multiple modes of action in one mix</td>
                  <td className="px-4 py-3 text-gray-700">Mixed and applied strictly per label; a professional-style product, not a grab-and-spray can</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="crossfire bed bug concentrate" block>Check availability &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">EcoSmart Bed Bug Killer<br /><span className="font-normal text-xs text-gray-500">Mattresses &amp; Carpets aerosol</span></td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">FIFRA 25(b) exempt</strong> &mdash; minimum-risk botanical, so not EPA-registered and never efficacy-reviewed; sold in only about ten states</td>
                  <td className="px-4 py-3 text-gray-700">Low-tox contact treatment where its label allows &mdash; check it ships to your state</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecosmart bed bug killer mattresses carpets" block>Check availability &rarr;</BuyLink></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Grandpa Gus&rsquo;s Natural Bed Bug Killer</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">FIFRA 25(b) exempt</strong> botanical &mdash; same no-efficacy-review caveat</td>
                  <td className="px-4 py-3 text-gray-700">The lowest-tox tier, on the surfaces its label names; expect short residual</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="grandpa gus natural bed bug killer spray" block>Check availability &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="not-prose text-xs text-gray-500 mb-6">Our affiliate links point to Amazon, where our tag is registered &mdash; but every product above is also sold in-store. In the United States, check Home Depot, Walmart, Lowe&rsquo;s, Ace Hardware and Tractor Supply; in Canada, Home Depot Canada, Canadian Tire and Home Hardware carry the PMRA-registered equivalents. Buy wherever is convenient; the label check matters far more than the store.</p>

          <h2>US Bed Bug Species, Season, and the Cities That Report the Most</h2>
          <p><strong>Species.</strong> In both Canada and the United States, the bed bug you will almost certainly meet is <em>Cimex lectularius</em>, the common bed bug, which is established nationwide in both countries. The United States has a second one that Canada does not: <em>Cimex hemipterus</em>, the tropical bed bug, which had been absent from the country since the late 1930s and was re-documented in Florida from about 2015, with records in counties including Alachua, Pinellas, Polk and Sarasota. It is limited to roughly thirty degrees of latitude either side of the equator, which makes it effectively a Florida and Gulf-state concern rather than a national one, and not a Canadian concern at all. For treatment purposes the two behave similarly enough that the label rules on this page apply to both.</p>
          <p><strong>Season.</strong> Bed bugs live indoors year round, so unlike mosquitoes and ticks they have no weather-driven season in either country. What changes through the year is how often they get moved. <strong>In the United States</strong>, reported activity climbs from roughly June through October and peaks sharpest in August and September, driven by summer travel and the college move-in season rather than by temperature &mdash; which is why a late-August spike in searches for mattress sprays is a logistics pattern, not a biological one. <strong>In Canada</strong>, the same travel-driven pattern holds without the campus spike, and infestations are found in every month of the year.</p>
          <p><strong>Geography.</strong> Orkin&rsquo;s 2026 US bed bug cities ranking, covering the twelve months to 12 May 2026, put Chicago first for another year, followed by Los Angeles, Detroit, Cleveland and Indianapolis. Ohio was the most-represented state in the top fifty with six metros on the list, and vacation destinations including Tampa and Myrtle Beach have been climbing. If you live in one of those metros, the case for keeping an encasement on the mattress permanently and interceptors under the legs year-round is stronger than the case for buying a bigger can of spray &mdash; re-introduction, not treatment failure, is what drives repeat infestations in high-incidence cities.</p>

          <h2>Where the Mattress Spray Fits in the Bigger Plan</h2>
          <p>A mattress spray is a fast, satisfying, honest tool &mdash; it drops the bugs you can see and buys you a better night quickly. What it is not is a whole solution. Eradication comes from stacking the spray with the tools that cover its blind spots: heat for the eggs, an encasement for the survivors, interceptors for monitoring, and residual treatment on the frame and baseboards where the population spreads. If you want the full sequence in one place, start with our <Link href="/blog/bed-bug-control-canada-hub">bed bug control hub</Link> and the <Link href="/blog/bed-bug-heat-treatment-diy-canada">DIY heat treatment</Link> guide, then layer the spray in as the knockdown step. If you are still deciding between chemical and heat approaches overall, the <Link href="/blog/heat-vs-chemical-bed-bug-treatment-canada">heat vs chemical comparison</Link> lays out the trade-offs.</p>

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
            <li><Link href="/blog/best-pest-control-equipment-canada">Best Pest Control Equipment in Canada — The Full Device Hub</Link></li>
            <li><Link href="/blog/ecoraider-bed-bug-spray-review-canada">EcoRaider Bed Bug Spray Review — Canada</Link></li>
            <li><Link href="/blog/doktor-doom-sleep-tight-review-canada">Doktor Doom Sleep Tight Review — Canada</Link></li>
            <li><Link href="/blog/best-natural-bed-bug-spray-canada">Best Natural Bed Bug Spray in Canada</Link></li>
            <li><Link href="/blog/best-bed-bug-spray-for-travel-canada">Best Bed Bug Spray for Travel in Canada</Link></li>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed Bug Mattress Encasement — Canada</Link></li>
            <li><Link href="/blog/best-bed-bug-steamer-canada">Best Bed Bug Steamer — Heat That Kills the Eggs</Link></li>
            <li><Link href="/blog/do-bed-bug-sprays-actually-work">Do Bed Bug Sprays Actually Work?</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research →</Link>
            </p>
          </div>
        </div>
        <AdjacentPestCTA pest="bed bugs" />
      </article>
    </>
  )
}
