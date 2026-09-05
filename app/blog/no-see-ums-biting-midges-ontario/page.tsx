import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'no-see-ums-biting-midges-ontario'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'What Are No-See-Ums? Biting Midge Bites, Screens & Control in Ontario'
const META_TITLE = 'What Are No-See-Ums? Bites & Control'

const FAQS = [
  {
    question: 'What are no-see-ums?',
    answer: 'No-see-ums (also spelled noseeums or no see ums) are tiny biting midges in the family Ceratopogonidae, most commonly the genus Culicoides. They measure roughly 1 to 3 mm — small enough that you often feel the bite before you can see the insect. In Ontario they breed in wet soil, mud, marsh edges, and moist organic matter, and the biting females swarm near water at dawn and dusk from late spring through summer.',
  },
  {
    question: 'Are no-see-ums the same as biting midges?',
    answer: 'Yes. "No-see-um" is the everyday name for biting midges, and both terms refer to the same tiny two-winged flies (family Ceratopogonidae). Regional nicknames include "punkies," "sand flies," and "moose flies." They are not gnats in the true sense, and they are not baby mosquitoes — biting midges are their own group of insects, roughly one-quarter the size of a typical mosquito.',
  },
  {
    question: 'What do no-see-um bites look like compared to mosquito bites?',
    answer: 'A no-see-um bite starts as a sharp, burning pinprick, then usually forms a small red dot that can swell into an itchy welt over several hours — often in clusters, because the midges feed in groups. Mosquito bites tend to be a single raised puffy bump that itches quickly. No-see-um bites are frequently found on exposed skin near the hairline, ankles, and wrists, and their itch can linger for days, sometimes longer than a mosquito bite.',
  },
  {
    question: 'Why can no-see-ums get through window and porch screens?',
    answer: 'Standard window and door screens use a mesh of roughly 1.1 to 1.5 mm openings, sized to stop houseflies and mosquitoes. No-see-ums are small enough to fly straight through those gaps. To keep them out you need "no-see-um mesh" (sometimes labelled 20x20 mesh or finer, around 0.6 mm openings). It is sold for porches, tents, and RV windows. The trade-off is reduced airflow, so many Ontario homeowners combine fine mesh with a fan on the patio, since midges are weak fliers.',
  },
  {
    question: 'When are no-see-ums worst in Ontario?',
    answer: 'Biting midges are most active in Ontario from late May through August, with the heaviest swarms at dawn and dusk on warm, humid, still evenings. They are weak fliers, so calm windless conditions near water — lakeshores, ponds, marshes, ravines, and cottage country — produce the worst bites. A steady breeze or a fan noticeably reduces them. Peak nuisance often overlaps with black fly season in early summer.',
  },
  {
    question: 'What repellent actually works against no-see-ums?',
    answer: 'Health Canada registered repellents containing DEET or picaridin (also called icaridin) are effective against biting midges when applied to exposed skin, and oil of lemon eucalyptus is a plant-based option. Because midges target ankles, wrists, and the hairline, cover those areas well. For clothing and gear, permethrin-treated fabric adds a strong barrier. A patio fan and long, light-coloured sleeves at dawn and dusk cut bites further.',
  },
  {
    question: 'How do I get rid of no-see-ums in my yard?',
    answer: 'Reduce the moist breeding habitat first: fix drainage so water does not pool, clear soggy leaf litter and thick damp mulch, and keep gutters and low spots draining. Run a fan on seating areas because midges cannot fly against moving air. For heavy or recurring pressure near water, a professional barrier treatment applied to shaded vegetation, damp edges, and resting sites knocks down the adult population where it rests during the day.',
  },
  {
    question: 'Are no-see-um bites dangerous in Ontario?',
    answer: 'For most people in Ontario, no-see-um bites are an itchy nuisance rather than a health threat — the biting midges here are not significant disease carriers of human illness the way some tropical species are. The main issues are intense itching, clustered welts, and occasional allergic reactions or secondary infection from scratching. If a bite area becomes very swollen, spreading, or infected, see a healthcare provider.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'No-see-ums are biting midges just 1–3 mm long. How their bites differ from mosquito bites, why they slip through screens, and how to stop them in Ontario.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('no-see-ums-biting-midges-ontario')

export default function NoSeeUmsBitingMidgesOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'No-see-ums and biting midges in Ontario — bites, screens, and yard control.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'No-See-Ums & Biting Midges', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">No-See-Ums &amp; Biting Midges</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The tiny biters you feel but can&rsquo;t see — why they slip through screens, how their bites differ from mosquitoes, and how to stop them in your Ontario yard.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">No-see-ums (also spelled noseeums) are tiny biting midges — genus Culicoides — measuring only 1 to 3 mm, small enough to pass straight through standard window and porch screens. In Ontario they breed in wet soil and marsh edges and swarm near water at dawn and dusk from late spring through summer.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>No-see-ums measure 1–3 mm — roughly one-quarter the size of a typical mosquito.</li>
              <li>Standard window screens have openings of about 1.1–1.5 mm; keeping midges out requires no-see-um mesh of roughly 20×20 or finer (about 0.6 mm openings).</li>
              <li>They are worst in Ontario from late May through August, at dawn and dusk on warm, humid, still evenings near water.</li>
              <li>Bites start as a sharp, burning pinprick and swell into itchy clustered welts that can linger for days.</li>
              <li>Health Canada registered repellents with DEET or picaridin (icaridin) work against biting midges, and a fan grounds them because they are weak fliers.</li>
              <li>Ontario&rsquo;s biting midges are an itchy nuisance rather than significant carriers of human disease.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">No-See-Um Bites vs Mosquito Bites: How to Tell Them Apart</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Feature</th>
                  <th className="px-3 py-2 text-left">No-see-um (biting midge)</th>
                  <th className="px-3 py-2 text-left">Mosquito</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Insect size', 'Tiny — about 1–3 mm', 'Larger — about 6–15 mm'],
                  ['First sensation', 'Sharp, burning pinprick', 'Often unnoticed until it itches'],
                  ['Bite appearance', 'Small red dot → itchy welt, often clustered', 'Single raised puffy bump'],
                  ['Number of bites', 'Frequently many in one area', 'Usually one or a few, spread out'],
                  ['Common bite spots', 'Ankles, wrists, hairline, exposed skin', 'Any exposed skin'],
                  ['Itch duration', 'Can linger days; sometimes intense', 'Typically eases in a day or two'],
                  ['Sound', 'Silent — no whine', 'Audible high-pitched whine'],
                  ['Peak activity', 'Dawn and dusk, still humid air near water', 'Dusk and after dark, plus shaded daytime'],
                ].map(([feat, midge, mosq]) => (
                  <tr key={feat} className="border-t border-gray-100">
                    <td className="px-3 py-2 font-semibold text-brand-800">{feat}</td>
                    <td className="px-3 py-2 text-gray-700">{midge}</td>
                    <td className="px-3 py-2 text-gray-700">{mosq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">General mosquito and biting-insect biology per the <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Mosquitoes</a>. Comparison is a general guide, not a diagnosis.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>What No-See-Ums Actually Are</h2>
          <p>Despite the name, no-see-ums are not mysterious. They are <strong>biting midges</strong> — tiny two-winged flies in the family <em>Ceratopogonidae</em>, most often the genus <em>Culicoides</em>. In Ontario you might also hear them called punkies, sand flies, or moose flies. At just 1 to 3 mm long, an adult is roughly a quarter the size of a mosquito, which is exactly why you feel the bite before you ever spot the culprit.</p>
          <p>As with mosquitoes, only the <strong>female</strong> bites. She needs a blood meal to develop her eggs, and she finds you using the same cues a mosquito does — the carbon dioxide in your breath, body heat, and skin odours. Males feed on nectar and don&rsquo;t bite at all. The larvae develop in consistently moist places: the muddy margins of ponds and marshes, soggy leaf litter, wet compost, damp mulch, tree holes, and saturated lawn edges. Anywhere the ground stays wet is potential no-see-um habitat.</p>

          <h2>Why Regular Screens Don&rsquo;t Stop Them</h2>
          <p>This is the single most frustrating thing about biting midges: your windows can be shut, your porch screened in, and they still get to you. Standard insect screening is woven with mesh openings of roughly <strong>1.1 to 1.5 mm</strong> — plenty fine for houseflies and mosquitoes, but a wide-open door for a 1 mm midge. They simply fly through the holes.</p>
          <p>The fix is <strong>&ldquo;no-see-um mesh,&rdquo;</strong> a finer weave (often labelled around 20x20 strands per inch, with openings near 0.6 mm) sold specifically for porches, gazebos, tents, and RV windows. The catch is airflow: tighter mesh cuts the breeze, so a screened porch can feel stuffier. A practical Ontario compromise is fine mesh on the most-used openings <em>plus</em> a fan on the patio — biting midges are weak fliers, and even a modest breeze grounds them.</p>
          <p>Mesh grade is also the spec to check before buying any outdoor enclosure, because most models ship with standard netting that midges walk straight through. If you are shopping for a deck structure, <Link href="/blog/best-gazebo-with-mosquito-net-canada">our screened gazebo buyer&rsquo;s guide</Link> explains how the holes-per-square-inch rating separates midge-proof models from mosquito-only ones.</p>
          <p>You rarely need to redo the whole house. Rescreening the porch door and the two or three windows you actually sit beside covers most of the problem.</p>

          <TopPick tag={AMZ_TAG}
            label="Our Top Pick — The Fix That Lasts"
            name="No-see-um mesh screening (20x20, ~0.6 mm openings)"
            blurb="If midges are getting into a screened porch, sunroom, or RV, this is the purchase that actually ends the problem instead of managing it nightly. Rescreening the affected openings with fine no-see-um mesh closes the 1.1–1.5 mm gaps that standard fly screen leaves wide open to a 1 mm midge. It is a one-time job that keeps working every evening after, with no reapplication and nothing on your skin."
            search="no see um mesh screen replacement"
            score={9.0}
            pros={['Permanent fix — no reapplying anything at dusk', 'Also stops mosquitoes, gnats, and thrips', 'Cheap per window; rolls cover a whole porch']}
            cons={['Noticeably reduces airflow — pair with a fan', 'Requires rescreening the frames yourself']}
          />

          <aside aria-label="Professional yard protection" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Midges rest in your yard&rsquo;s damp, shaded edges — we treat exactly those zones</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Biting midges and mosquitoes shelter in the same shaded, humid vegetation during the day. A barrier spray applied to those resting sites knocks the adults down where they wait. BuzzSkito protects GTA yards with seasonal programs and single treatments from $99, backed by 150+ five-star reviews.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>When and Where They Swarm in Ontario</h2>
          <p>Biting midges are a <strong>late-spring-through-summer</strong> problem in Ontario, generally worst from late May into August. Two conditions drive the heaviest swarms:</p>
          <ul>
            <li><strong>Time of day.</strong> Dawn and dusk are peak feeding windows. A calm, warm, humid evening on the deck is prime no-see-um time.</li>
            <li><strong>Proximity to water and stillness.</strong> Because they are feeble fliers, midges concentrate where the air is calm near their wet breeding grounds — lakeshores, ponds, marshes, ravines, drainage ditches, and cottage country. The moment a breeze picks up, they largely disappear.</li>
          </ul>
          <p>This is why the cottage dock at sunset can be miserable while a windy afternoon at the same spot is bite-free, and why the nuisance often overlaps with early-summer <Link href="/blog/black-flies-ontario-when-they-come-out">black fly season</Link>. Suburban GTA yards near creeks, storm ponds, and low wet corners get their share too, not just cottages.</p>

          <h2>Preventing No-See-Um Bites</h2>
          <p>Because midges are so small and feed in clusters, a layered defence works far better than any single trick:</p>
          <ol>
            <li><strong>Time it.</strong> Avoid still, humid dawn and dusk hours near water when you can, or move to a breezier spot.</li>
            <li><strong>Use a fan.</strong> On a patio or dock, a simple oscillating fan is one of the most effective tools there is — midges can&rsquo;t fly against moving air.</li>
            <li><strong>Cover up.</strong> Long, light-coloured sleeves and pants at dusk reduce exposed skin, especially at the ankles and wrists where midges love to feed.</li>
            <li><strong>Apply a proven repellent.</strong> Health Canada registered products with <strong>DEET</strong> or <strong>picaridin (icaridin)</strong> work against biting midges; oil of lemon eucalyptus is a plant-based option. Cover ankles, wrists, and the hairline well.</li>
            <li><strong>Treat clothing and gear.</strong> <strong>Permethrin</strong>-treated fabric adds a strong barrier for repeat exposure at the cottage or on trails.</li>
          </ol>
          <p>Not sure which skin repellent to reach for? Our guide on <Link href="/blog/picaridin-vs-deet">picaridin vs DEET in Canada</Link> breaks down which active fits which situation. To shop current options:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="picaridin insect repellent canada">Check picaridin repellent on Amazon.ca →</BuyLink>
            <BuyLink tag={AMZ_TAG} search="thermacell mosquito repeller">Check a Thermacell repeller →</BuyLink>
          </div>

          <TopPick tag={AMZ_TAG}
            label="Best Repellent for No-See-Ums"
            name="Picaridin (Icaridin) Insect Repellent"
            blurb="For biting midges, a Health Canada registered picaridin (icaridin) repellent is the most practical single pick — it protects the ankles, wrists, and hairline where no-see-ums feed, without DEET's oily feel or plastic-damaging tendencies. Apply to all exposed skin at dawn and dusk near water."
            search="picaridin insect repellent canada"
            score={8.6}
            pros={['Effective against midges and mosquitoes', 'Non-greasy, low odour, won’t harm gear', 'Safe on exposed skin when label is followed']}
            cons={['Reapply as the label directs', 'A fan or fine mesh still helps in heavy swarms']}
          />
          <p>A <strong>Thermacell</strong>-style area repeller can also help create a small protected zone on a still patio, working alongside a fan rather than replacing it.</p>

          <h2>Treating Bites You Already Have</h2>
          <p>No-see-um bites itch out of proportion to their size, and scratching only invites infection. To calm them: wash the area with soap and water, apply a cold compress to reduce swelling, and use an over-the-counter antihistamine or a hydrocortisone/anti-itch cream to control the reaction. Keep fingernails off the welts. If a bite becomes very swollen, spreads, oozes, or shows signs of infection, contact a healthcare provider — some people react strongly to midge saliva.</p>
          <p>If you are still not certain the welts you are treating came from a midge at all, our closer look at <Link href="/blog/no-see-um-bites">what no-see-um bites look like and how long they last</Link> follows a bite through its stages — the burning pinprick, the red dot hours later, the hard welt still itching days on — which is the detail that usually settles the question, since the insect itself is long gone by the time you look.</p>

          <h2>Reducing No-See-Ums Around Your Yard</h2>
          <p>You can&rsquo;t drain a whole marsh, but you <em>can</em> make your own property less hospitable and thin out the adults that rest there:</p>
          <ul>
            <li><strong>Fix drainage.</strong> Eliminate spots where water pools after rain — the saturated ground is where larvae develop.</li>
            <li><strong>Clear damp organic matter.</strong> Rake out soggy leaf litter, thin overly wet mulch beds, and keep gutters and low corners draining freely.</li>
            <li><strong>Keep it moving.</strong> Permanent fans over seating areas keep the adults off you all evening.</li>
            <li><strong>Barrier treatment for heavy pressure.</strong> Adult midges (like mosquitoes) shelter by day in shaded, humid vegetation. A professional <Link href="/mosquito-control">barrier spray</Link> applied to those resting zones — shaded shrubs, damp edges, fence lines — reduces the biting population that reaches your patio.</li>
          </ul>
          <p>For most Ontario homeowners the realistic goal isn&rsquo;t total eradication — it&rsquo;s getting your yard usable again at the exact hours you want to be outside. A combination of drainage, airflow, personal repellent, and a barrier treatment on the shaded resting sites does that better than any one measure alone.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/picaridin-vs-deet">Picaridin vs DEET in Canada — Which Repellent to Choose</Link></li>
            <li><Link href="/blog/black-flies-ontario-when-they-come-out">Black Flies in Ontario — When They Come Out</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start">Mosquito Season in the GTA — When Does It Start?</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy">Thermacell Canada — Where to Buy + Do They Work</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
          <p className="text-xs text-gray-500">Repellent guidance reflects Health Canada&rsquo;s pest-management information. Always follow the product label. See <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener" className="underline hover:text-brand-700">Health Canada — Pesticides and Pest Management</a>.</p>
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

      <StickyBuyBar
        name="No-see-um mesh screening (20x20)"
        search="no see um mesh screen replacement"
        label="The fix that lasts"
        tag={AMZ_TAG}
      />

      <CTASection heading="Too Small to See, Big Enough to Ruin the Evening" subtext="Biting midges and mosquitoes rest in the same damp, shaded yard zones. One barrier treatment targets them at the source. From $99." variant="dark" />
    </>
  )
}
