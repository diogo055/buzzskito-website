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
const TITLE = 'Best Bed Bug Spray for a Mattress in Canada 2026 — Mattress-Safe, PMRA-Registered Picks'
const META_TITLE = 'Best Bed Bug Spray for Mattress Canada 2026'

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
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'The best mattress-safe bed bug sprays in Canada for 2026: why the PMRA registration number and a mattress-approved label matter, contact-kill vs residual, how to spray a mattress properly, and our EcoRaider, Doktor Doom Sleep Tight, and budget picks.',
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

          <h2>Contact-Kill vs Residual: Where Each Belongs on a Bed</h2>
          <p>Mattress-relevant sprays split into two broad behaviours, and understanding the difference lets you build a smarter treatment than reaching for a single can.</p>
          <p>A <strong>contact-kill spray</strong> &mdash; EcoRaider is the archetype &mdash; kills the bed bugs and nymphs it directly wets, then largely evaporates and leaves little lasting film. You are essentially spraying the bugs you can see, in real time, which is exactly what you want on a sleeping surface where you would rather not leave a heavy chemical deposit. The trade-off is that once it dries, it is not doing much for you; a bug that walks across the spot tomorrow is unaffected. That is why contact killers demand disciplined repeat spraying.</p>
          <p>A <strong>residual spray</strong> leaves an active deposit that keeps killing bed bugs walking across it for days or weeks. That lasting film is ideal on the surfaces you are <em>not</em> sleeping on &mdash; the bed frame joints, box-spring wood, slats, headboard, and the baseboards along the wall &mdash; where you want a standing defence against bugs travelling back toward the bed. The practical playbook for most homes is a low-residue contact killer on the mattress surface and seams, and a longer-residual product like Konk on the frame and edges. Always confirm each product&rsquo;s label approves the surface you point it at.</p>

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

          <h2>The Egg Gap: Why a Spray Alone Always Rebounds</h2>
          <p>Here is the honest limit of every mattress spray, botanical or synthetic: it will not reliably kill bed bug eggs. Females cement their eggs into fabric with a protective coating that most sprays cannot penetrate, so a mattress you have sprayed thoroughly can still be studded with viable eggs. Those eggs hatch over the following one to two weeks, and suddenly you have a fresh wave of nymphs on a bed you thought you had cleared. This is the number-one reason people conclude &ldquo;the spray didn&rsquo;t work&rdquo; when in fact it worked exactly as designed &mdash; on the bugs, not the eggs.</p>
          <p>The fix is not a stronger spray; it is a stack of methods. <strong>Steam</strong> delivers the heat that kills eggs and hidden bugs deep in the fabric a spray cannot reach &mdash; see our <Link href="/blog/best-bed-bug-steamer-canada">best bed bug steamer</Link> guide for what temperature and dwell time actually work. A certified <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement</Link> seals any survivors inside where they cannot bite you and slowly starve. <Link href="/blog/bed-bug-interceptor-traps-canada">Interceptor traps</Link> under the bed legs let you monitor, week over week, whether the population is actually falling. And a <Link href="/blog/diatomaceous-earth-for-bed-bugs">desiccant dust</Link> or <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa</Link> in the cracks provides a long-lasting mechanical kill the spray does not. Spray to knock the numbers down fast; use the rest of the stack to finish the job.</p>

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

          <h2>A Word on Grey-Market US Sprays</h2>
          <p>It is tempting to look at a powerful American product with glowing reviews &mdash; some Harris formulas, Ortho Home Defense, or professional concentrates like Crossfire &mdash; and try to buy it into Canada. Resist it. These are formulated to US EPA standards and carry an EPA registration number, not the Canadian PCP number the PMRA requires, so importing them is not permitted. Many are also crack-and-crevice or professional products that are not label-approved for direct mattress application even in the United States, which means you would be putting an unvetted pesticide on a surface you sleep on. The reassurance of a Canadian-registered, mattress-labelled spray is precisely the thing you are giving up when you chase a grey-market can. Name them, learn what their actives are, and then buy the PMRA-registered equivalent that is legal and vetted here.</p>

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
