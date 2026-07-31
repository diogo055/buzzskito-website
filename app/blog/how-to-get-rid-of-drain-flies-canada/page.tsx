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
import CTASection from '@/components/CTASection'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-get-rid-of-drain-flies-canada'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// Slots into the existing small-fly cluster: fruit flies (produce + kitchen drains),
// fungus gnats (potting soil), cluster flies (overwintering). This page owns the
// BIOFILM intent — a plumbing-surface problem, not a food problem — and the
// drain-fly vs fruit-fly vs fungus-gnat vs phorid identification fork.
const TITLE = 'How to Get Rid of Drain Flies in Canada — The Biofilm Is the Problem, Not the Drain'
const META_TITLE = 'Get Rid of Drain Flies: Clean the Biofilm'

const FAQS = [
  {
    question: 'What are drain flies and where do they come from?',
    answer: 'Drain flies — also called moth flies, filter flies or sewer gnats (family Psychodidae) — are small, fuzzy, moth-like flies that sit flat on walls near a drain and flutter weakly rather than flying properly. University extension sources describe them as up to about 3 to 5 mm long, light grey, and densely covered in fine hairs on both body and wings. They come from the gelatinous film of organic sludge coating the inside of your pipes, drains, floor drains, sumps and traps. Eggs are laid on that film and the larvae feed on the bacteria, fungi and decaying matter in it, which is why the fly is a symptom of a surface inside your plumbing rather than of anything sitting in your kitchen.',
  },
  {
    question: 'Why do drain flies keep coming back after I kill them?',
    answer: 'Because killing adults does nothing to the nursery. Drain flies complete their life cycle in roughly 8 to 24 days depending on temperature (Texas A&M and Virginia Cooperative Extension), so a fresh crop emerges from the same film of sludge every week or two no matter how many adults you swat, spray or trap. The film is the population; the flies you see are the output. Until the film is physically scraped or brushed off the pipe wall — or digested away by a bacterial or enzyme product applied repeatedly — the supply is uninterrupted. This is also why people conclude that a spray "did not work" when in fact it worked perfectly on the only thing it could reach.',
  },
  {
    question: 'How do I find which drain the flies are breeding in?',
    answer: 'Run the tape test overnight. Cover the suspect drain with clear packing tape, sticky side down, leaving a small gap at one side so air can still move — a fully sealed drain can push flies elsewhere or trap sewer gas. Leave it overnight and check in the morning: emerging adults stick to the tape underside. Repeat over several nights across every drain in the building, including floor drains in the basement, laundry standpipes, the guest bathroom nobody uses, and the shower you assume is fine. Do this before buying anything, because treating the wrong drain thoroughly is the most common way people spend a fortnight getting nowhere.',
  },
  {
    question: 'Does bleach kill drain flies?',
    answer: 'Not usefully, and it is the single most common wasted step. Bleach is a thin liquid: poured down a drain it runs straight through the middle of the pipe and out, barely contacting the film clinging to the pipe walls above the water line — which is precisely where the eggs and larvae are. It also does nothing about the film itself, so anything that survives has an intact food supply the same evening. Boiling water has the same geometry problem and can be hard on some plastic joints and seals. What actually removes a biofilm is mechanical: a long flexible brush worked against the pipe wall, followed by a bacterial or enzyme product that clings and digests what the brush could not reach.',
  },
  {
    question: 'What is the difference between drain flies, fruit flies and fungus gnats?',
    answer: 'They are three different problems with three different fixes, and getting the identification wrong wastes weeks. Drain flies are fuzzy and moth-like with broad wings held roof-like over the body, sit motionless on walls near drains, and fly in short weak hops — they come from pipe film. Fruit flies are smooth, tan-brown with red eyes, hover around produce, recycling and the green bin, and come from fermenting food. Fungus gnats are dark, skinny and mosquito-like, fly weakly around houseplants, and come from wet potting soil. If it is fuzzy and on the bathroom wall, it is a drain fly. If it is around the fruit bowl, read our fruit fly guide instead; if it is orbiting a houseplant, read the fungus gnat guide.',
  },
  {
    question: 'Do drain flies bite or carry disease?',
    answer: 'They do not bite. Drain flies have no biting mouthparts and are not blood feeders, so bites people blame on them are almost always something else — mosquitoes, or in a bedroom setting, potentially bed bugs. The practical concern with a heavy indoor population is mechanical: adults emerging from sewage-contaminated film can move across surfaces, which matters far more in a commercial kitchen or a healthcare setting than in a home bathroom. In a house the honest framing is that they are a nuisance and, more usefully, a symptom — a persistent population points at organic sludge or standing moisture somewhere you would rather know about.',
  },
  {
    question: 'Do I need an insecticide for drain flies?',
    answer: 'Usually not, and it is worth understanding the Canadian rule before you shop. Any product sold in Canada that claims to kill insects is a pest control product and must carry a PCP registration number under the Pest Control Products Act — while a bacterial or enzyme drain product sold as a cleaner is not a pesticide at all, because it works by digesting the organic film rather than by poisoning anything. That is a feature: the cleaner attacks the actual cause, needs no registration, and carries no re-entry concerns around a kitchen sink. Foaming US drain insecticides advertised for this job are frequently not registered for sale in Canada, and buying one solves a problem you can solve with a brush.',
  },
  {
    question: 'How long does it take to get rid of drain flies?',
    answer: 'Expect one to three weeks of consistent work, not an afternoon. The reason is the life cycle: even after you strip the film, larvae and pupae already in place can continue emerging for days, so adults keep appearing while the treatment is working. The realistic schedule is to brush the drain mechanically, apply a bacterial or enzyme product at night — when nothing is running water through the pipe — for at least a week, keep the tape test running to confirm emergence is falling, and treat every drain in the room rather than only the obvious one. If adults are still emerging after three weeks of genuine effort, the breeding site is somewhere you have not treated.',
  },
  {
    question: 'What if the flies are coming from a basement floor drain?',
    answer: 'That is the most common location people miss, and it usually has two causes. First, a rarely used floor drain dries out: the trap loses its water seal, which lets both sewer odour and flies come up freely. Pour a few litres of water down every rarely used drain monthly, and add a small amount of cooking or mineral oil to float on top and slow evaporation. Second, if the flies persist with a properly filled trap, the breeding site may be beyond the trap — in the sump pit, in accumulated sludge under a floor slab, or at a cracked sewer line. Persistent basement flies plus a sewer smell is a plumbing call, not a pest control call, and that distinction can save you a year of monthly spray visits.',
  },
  {
    question: 'Will drain flies go away on their own in winter?',
    answer: 'No. Unlike outdoor flies, drain flies breed inside heated plumbing where the temperature barely changes, so the population runs year-round. What does change is the speed: the life cycle is temperature-dependent, so warm summer pipes cycle faster and a summer outbreak feels more explosive. A winter infestation is the same problem at a slower tempo, and it often points more clearly at the source — a floor drain or a sump rather than an outdoor route in. Waiting it out simply gives the film more time to thicken.',
  },
  {
    question: 'When should I call a professional for drain flies?',
    answer: 'When the evidence points at plumbing rather than sanitation, and when the setting makes flies a compliance problem. Call a plumber — not a pest control company — for persistent basement flies with sewer odour, damp spots on a slab, a sump pit that never dries, or a suspected broken drain line, because no spray program fixes a cracked pipe and a monthly service visit becomes a subscription to a leak. Call a pest control company when the setting is a restaurant, food premises or healthcare facility where insect presence is an inspection issue, or where the source is a grease trap or floor drain system that needs a documented sanitation programme. For an ordinary home bathroom or kitchen, a brush, an enzyme product and three weeks of consistency almost always wins.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Drain flies breed in the biofilm coating your pipe walls, not in the water. Why bleach fails, the overnight tape test that finds the right drain, and the fix.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug(SLUG)

export default function DrainFliesCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian guide to drain flies (moth flies, Psychodidae): how to identify them against fruit flies, fungus gnats and phorid flies, the overnight tape test that locates the breeding drain, why bleach and boiling water fail against pipe biofilm, the brush-then-bacterial-product sequence that works, dry trap seals, and when the answer is a plumber rather than a pest control company.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Get Rid of Drain Flies in Canada', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Get Rid of Drain Flies</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The fuzzy little moth on your bathroom wall did not fly in from outside. It grew up in the gelatinous film coating the inside of a pipe a few feet away &mdash; which is why bleach does nothing, why they come back every week or two, and why the fix is a brush before it is ever a product.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <StickyBuyBar tag={AMZ_TAG} name="Flexible drain brush set — the tool that removes the biofilm" search="flexible drain cleaning brush set long" label="The thing that actually works" />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of drain flies in Canada: find the breeding drain with an overnight tape test, then <strong>physically brush the film off the pipe wall</strong> with a long flexible drain brush, then apply a bacterial or enzyme drain product nightly for at least a week to digest what the brush could not reach. Refill any rarely used floor drain so its trap holds water. Killing adults is optional and changes nothing &mdash; the film is the population, and a new crop emerges every 8 to 24 days depending on temperature.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Bleach fails</strong> because it runs down the middle of the pipe and never contacts the film on the walls where the larvae live.</li>
              <li><strong>The tape test finds the right drain</strong> &mdash; clear tape over the drain overnight, gap left for airflow, check the underside in the morning.</li>
              <li><strong>Fuzzy and on the wall = drain fly.</strong> Around fruit = fruit fly. Around a houseplant = fungus gnat. Humpbacked and running = phorid, and that one means a plumbing fault.</li>
              <li><strong>Dry floor drains</strong> in basements, laundry rooms and guest bathrooms are the most-missed source in Canadian homes.</li>
              <li><strong>You almost certainly do not need an insecticide.</strong> An enzyme drain product is a cleaner, not a pesticide &mdash; it attacks the cause.</li>
              <li><strong>Sewer smell plus persistent basement flies is a plumber&rsquo;s job</strong>, not a pest control contract.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito Pest Product Guides &middot; independent Canadian research</p>
          </div>

          <SpecialistDisclosure pest="drain flies" />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Decision Table</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Where They Are Coming From &rarr; What to Do About It</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Find your row before you buy anything. Two of these rows do not need a product at all, and one of them needs a plumber rather than anything on this page.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Your situation</th>
                  <th className="px-4 py-3 text-left">What is happening</th>
                  <th className="px-4 py-3 text-left">Do this</th>
                  <th className="px-4 py-3 text-left">Get it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">A few on the bathroom wall each morning</td>
                  <td className="px-4 py-3 text-gray-700">Film in the sink, shower or overflow within a metre of where they sit</td>
                  <td className="px-4 py-3 text-gray-700">Brush the drain and overflow, then enzyme product nightly for a week</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="flexible drain cleaning brush set long" block>Drain brush set &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">You cannot tell which drain</td>
                  <td className="px-4 py-3 text-gray-700">Normal &mdash; adults drift, so proximity is a poor guide</td>
                  <td className="px-4 py-3 text-gray-700">Tape test every drain in the building for several nights before spending anything</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; clear packing tape</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Kitchen sink, disposal, or dishwasher line</td>
                  <td className="px-4 py-3 text-gray-700">Grease-rich film, the thickest kind and the slowest to remove</td>
                  <td className="px-4 py-3 text-gray-700">Brush, clean the splash guard by hand, then a bacterial product repeated nightly</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bio-clean drain bacteria enzyme treatment" block>Bacterial drain product &rarr;</BuyLink></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Basement or laundry room, no smell</td>
                  <td className="px-4 py-3 text-gray-700">A floor drain trap has dried out and lost its water seal</td>
                  <td className="px-4 py-3 text-gray-700">Refill it, then keep it filled monthly &mdash; a float of oil slows evaporation</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Free &mdash; a jug of water</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Basement flies plus a sewer smell</td>
                  <td className="px-4 py-3 text-gray-700">Possible cracked line, slab sludge or a permanently wet sump</td>
                  <td className="px-4 py-3 text-gray-700">Call a plumber. No spray programme fixes a broken pipe</td>
                  <td className="px-4 py-3 text-xs text-gray-400">Not a product problem</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Adults everywhere while you work the source</td>
                  <td className="px-4 py-3 text-gray-700">Normal for one to three weeks &mdash; larvae already in place keep emerging</td>
                  <td className="px-4 py-3 text-gray-700">Catch the stragglers with a sticky or light trap; do not switch strategies</td>
                  <td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="katchy indoor insect trap" block>Indoor catch trap &rarr;</BuyLink></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG}
            heading="The Drain Fly Kit — What Each Item Is Actually For"
            awards={[
              {
                badge: 'Best Overall',
                name: 'Long Flexible Drain Brush Set',
                why: 'The only item on this list that removes the breeding surface rather than working around it. Extension guidance on drain flies is consistent on this point: scrape or brush the film off the inside of the pipe, because that film is where the eggs and larvae are. A set with a long flexible shaft reaches past the trap where a bottle brush stops.',
                search: 'flexible drain cleaning brush set long',
                featured: true,
                pros: ['Physically removes the biofilm — the actual breeding site', 'No chemistry, safe on any pipe material', 'Reusable for years, and it also fixes slow drains'],
                cons: ['Genuinely unpleasant work', 'Cannot reach a breeding site beyond the trap'],
              },
              {
                badge: 'Best Follow-Up',
                name: 'Bacterial / Enzyme Drain Treatment',
                why: 'What the brush cannot reach, a bacterial or enzyme product digests. It clings to the pipe wall and works on the organic film over hours, which is why it goes in at night when nothing will flush it away. Sold as a cleaner rather than an insecticide, so it needs no pesticide registration and raises no re-entry concerns beside a kitchen sink.',
                search: 'bio-clean drain bacteria enzyme treatment',
                pros: ['Reaches film the brush cannot', 'A cleaner, not a pesticide — no PCP registration questions', 'Keeps the drain clear afterwards as maintenance'],
                cons: ['Slow — repeat nightly for a week or more', 'Useless if the drain is flushed straight after applying'],
              },
              {
                badge: 'Best for Deep Clogs',
                name: 'Flexible Drain Snake / Hair Clog Tool',
                why: 'A packed hair-and-sludge clog is a purpose-built drain fly nursery, and no brush or enzyme reaches through it. Pulling the mass out first is what makes everything after it work. Cheap, disposable-cheap, and the reason a drain that "was treated twice" suddenly resolves.',
                search: 'drain weasel hair clog tool',
                pros: ['Removes the mass that blocks every other treatment', 'Works on tub, shower and sink drains alike', 'Instantly obvious whether it worked'],
                cons: ['Only reaches as far as the tool is long', 'Not a substitute for scrubbing the pipe wall'],
              },
              {
                badge: 'Best Adult Catcher',
                name: 'Indoor Light and Glue Trap',
                why: 'Instrumentation and morale rather than control. Adults keep emerging for one to three weeks after you fix the source, and a quiet indoor trap mops them up while the real work takes effect. It is also a decent monitor: catch counts that keep falling mean the source treatment is working.',
                search: 'katchy indoor insect trap',
                pros: ['Handles the stragglers while the source dies out', 'Falling catch counts show progress', 'No spraying anywhere near a kitchen'],
                cons: ['Zero effect on the breeding film', 'Useless as a strategy on its own'],
              },
              {
                badge: 'Best Prevention',
                name: 'Stainless Drain Strainers',
                why: 'Most of what feeds a drain film goes in as hair, food scraps and coffee grounds. A strainer on every sink, tub and shower is the cheapest reason the problem does not return in eight months, and it makes the next brushing far easier than this one was.',
                search: 'stainless steel sink drain strainer',
                pros: ['Stops the film rebuilding from the top', 'Fits almost any standard drain', 'Cheapest genuinely preventive item here'],
                cons: ['Must actually be emptied to work', 'Does nothing about film already in the pipe'],
              },
            ]}
            whichToBuy={
              <>
                <strong>One bathroom, a few flies?</strong> The <em>Best Overall</em> brush plus a week of the <em>Best Follow-Up</em> product is the whole job. <strong>Slow drain as well as flies?</strong> Start with the <em>Best for Deep Clogs</em> tool &mdash; the clog is the nursery. <strong>Flies while you work?</strong> The catch trap is a morale purchase, and our <Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy indoor trap review</Link> covers what that category can and cannot do. <strong>Basement floor drain?</strong> Buy nothing yet &mdash; fill the trap with water first and re-test. <strong>Sewer odour with it?</strong> Buy nothing at all and call a plumber.
              </>
            }
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-emerald-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Identification</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Drain Fly, Fruit Fly, Fungus Gnat or Phorid? Four Pests, Four Different Fixes</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Getting this wrong is the most expensive mistake in the small-fly category, because each one breeds somewhere completely different. Identify first, buy second.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Fly</th>
                  <th className="px-4 py-3 text-left">Look and behaviour</th>
                  <th className="px-4 py-3 text-left">Breeds in</th>
                  <th className="px-4 py-3 text-left">The fix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Drain fly<br /><span className="font-normal text-xs text-gray-500">moth fly, filter fly</span></td>
                  <td className="px-4 py-3 text-gray-700">Fuzzy, grey, moth-like, broad wings held roof-like; sits still on walls, flies in weak hops</td>
                  <td className="px-4 py-3 text-gray-700">Organic film inside drains, traps, sumps and floor drains</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Brush the pipe wall</strong>, then bacterial product nightly</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Fruit fly</td>
                  <td className="px-4 py-3 text-gray-700">Smooth, tan-brown, often red-eyed; hovers around food and drink</td>
                  <td className="px-4 py-3 text-gray-700">Fermenting produce, recycling, green bins &mdash; and drain gunk too</td>
                  <td className="px-4 py-3 text-gray-700">Remove the source, then a lure trap &mdash; see our <Link href="/blog/how-to-get-rid-of-fruit-flies-canada" className="text-emerald-700 underline">fruit fly guide</Link></td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Fungus gnat</td>
                  <td className="px-4 py-3 text-gray-700">Dark, skinny, mosquito-like, long legs; drifts around houseplants</td>
                  <td className="px-4 py-3 text-gray-700">Wet potting soil</td>
                  <td className="px-4 py-3 text-gray-700">Dry the soil and use BTI &mdash; see our <Link href="/blog/how-to-get-rid-of-fungus-gnats-houseplants" className="text-emerald-700 underline">fungus gnat guide</Link></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Phorid fly<br /><span className="font-normal text-xs text-gray-500">humpbacked fly</span></td>
                  <td className="px-4 py-3 text-gray-700">Distinctly humpbacked; <strong>runs erratically across surfaces</strong> rather than flying off</td>
                  <td className="px-4 py-3 text-gray-700">Sludge under slabs, broken drain lines, decaying organic matter</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Investigate the plumbing</strong> &mdash; this one is a structural signal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Descriptions follow published extension identification guidance, including <a href="https://www.pubs.ext.vt.edu/ENTO/ENTO-414/ENTO-414.html" className="text-emerald-700 underline">Virginia Cooperative Extension ENTO-414</a> and <a href="https://www.aces.edu/blog/topics/home/drain-flies-in-the-home-identification-management/" className="text-emerald-700 underline">Alabama Cooperative Extension</a>.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Drain Flies &mdash; Quick Reference</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['What they are', 'Moth flies (Psychodidae) — fuzzy, grey, up to roughly 3–5 mm, weak fluttering flight'],
                  ['Where they breed', 'The gelatinous organic film coating pipe walls, traps, floor drains and sumps'],
                  ['Life cycle', 'Roughly 8–24 days depending on temperature (Texas A&M, Virginia Cooperative Extension)'],
                  ['Why they return', 'You killed adults; the film kept producing more'],
                  ['Find the source', 'Overnight tape test on every drain — clear tape, sticky side down, gap for airflow'],
                  ['Step 1', 'Brush the pipe wall mechanically — this is the step that matters most'],
                  ['Step 2', 'Bacterial or enzyme drain product at night, repeated for a week or more'],
                  ['Step 3', 'Refill dry floor drain traps; a float of oil slows evaporation'],
                  ['Does bleach work', 'No — it runs down the middle of the pipe and never touches the film'],
                  ['Boiling water', 'Same geometry problem, and hard on some plastic joints'],
                  ['Do you need a pesticide', 'Almost never. An enzyme drain product is a cleaner, not a pest control product'],
                  ['Canadian label rule', 'Anything sold to kill insects needs a PCP registration number under the PCPA'],
                  ['Most-missed source', 'A rarely used basement, laundry or guest-bathroom floor drain'],
                  ['Call a plumber when', 'Sewer odour, damp slab, permanently wet sump, or humpbacked phorid flies'],
                  ['Realistic timeline', 'One to three weeks — emergence continues while the treatment works'],
                  ['Do they bite', 'No. They have no biting mouthparts'],
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
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>The One Fact That Changes How You Spend Money on This</h2>
          <p>Drain flies are not really a fly problem. They are a <strong>surface</strong> problem: a slick, gelatinous layer of bacteria, grease and decaying organic matter that builds on the inside of a pipe above the water line. Extension guidance describes the process the same way everywhere &mdash; eggs are laid on that moist organic film, and the larvae feed on the bacteria, fungi and decaying material in it.</p>
          <p>Once you accept that, the whole shopping decision reorganises itself. The adults you can see are the output of the film, not the problem. Killing them is optional. And because the life cycle runs roughly 8 to 24 days depending on temperature &mdash; the figure published by <a href="https://extensionentomology.tamu.edu/wp-content/uploads/2017/09/Drain-Flies-Publ.-E-184.pdf" className="text-emerald-700 underline">Texas A&amp;M AgriLife Extension</a> and echoed by <a href="https://www.pubs.ext.vt.edu/ENTO/ENTO-414/ENTO-414.html" className="text-emerald-700 underline">Virginia Cooperative Extension</a> &mdash; a fresh crop appears every week or two for as long as the film survives. That is the entire explanation for &ldquo;I killed them all and they came back.&rdquo;</p>
          <p>So the money question is simple: does what I am about to buy physically remove or digest the film? A brush does. A bacterial product does. An aerosol, a plug-in repeller and a jug of bleach do not, which is why this page keeps steering you toward the least glamorous item in the aisle.</p>

          <AffiliateDisclosure />
          <p className="not-prose text-sm text-gray-600 mb-1">The two purchases that do the actual work, in order:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="flexible drain cleaning brush set long">Flexible drain brush &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bio-clean drain bacteria enzyme treatment">Bacterial drain product &rarr;</BuyLink>
          </div>

          <h2>Step Zero: The Tape Test, Because You Are Probably Treating the Wrong Drain</h2>
          <p>Adults drift, rest on the nearest vertical surface, and are terrible at telling you where they came from. People treat the bathroom sink for a fortnight while the population pours out of the tub overflow or a floor drain two rooms away.</p>
          <p>Do this instead. Cut a strip of clear packing tape and lay it sticky side down across each suspect drain, leaving a small gap at one edge so air can still move &mdash; a completely sealed drain can push emerging flies elsewhere. Leave it overnight, and check the underside in the morning. Flies emerging from that drain are stuck to it. Run the test on <em>every</em> drain in the building for two or three nights: kitchen sink, dishwasher connection, each bathroom sink, tub and shower, the tub overflow, laundry standpipe, basement floor drains, the guest bathroom nobody has used since spring, and the sump if there is one.</p>
          <p>Two nights of free tape saves two weeks of treating the wrong pipe. It is also the only way to <em>prove</em> your treatment worked, because a falling stick count is data and &ldquo;it feels better&rdquo; is not.</p>

          <h2>The Fix, in Order</h2>
          <ol>
            <li><strong>Clear the physical clog first.</strong> If the drain is slow, pull the hair-and-sludge mass out with a flexible hair-clog tool. That mass is a purpose-built nursery, and nothing you pour in will get past it.</li>
            <li><strong>Brush the pipe wall.</strong> This is the step that matters. Remove the drain cover and, in a sink, the stopper linkage. Work a long flexible brush down past the trap and scrub the walls with a twisting motion, not just a plunge. Flush with hot water. In a kitchen, hand-clean the disposal splash guard separately &mdash; both faces &mdash; because it is one of the filthiest surfaces in the room and almost never gets cleaned.</li>
            <li><strong>Apply a bacterial or enzyme drain product at night.</strong> These work by digesting organic film over hours, so applying it before bed &mdash; when nothing is running water through the pipe &mdash; is the difference between a treatment and a rinse. Repeat nightly for at least a week; a heavy grease-fed kitchen film can take longer.</li>
            <li><strong>Refill every dry trap.</strong> Pour a few litres of water down each rarely used floor drain, and float a small amount of cooking or mineral oil on top to slow evaporation. Put it on a monthly calendar reminder for basements, laundry rooms, garages and guest bathrooms.</li>
            <li><strong>Mop up the adults while you wait.</strong> Emergence continues for days after the film is gone. A sticky trap or a quiet indoor light-and-glue trap handles the stragglers without putting a spray anywhere near a kitchen.</li>
            <li><strong>Re-test with tape at two weeks.</strong> Falling counts mean it is working. Steady counts mean the breeding site is somewhere you have not treated &mdash; go back to step zero.</li>
          </ol>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="drain weasel hair clog tool">Check drain clog tools on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Why Bleach, Boiling Water and Foggers All Fail</h2>
          <p><strong>Bleach</strong> is the most common wasted step in this whole category. It is thin, it is heavier than the film, and poured into a drain it runs straight down the centre of the pipe and away. The eggs and larvae are on the wall, frequently above the water line, and they are inside a film that bleach neither removes nor penetrates well. A drain treated with bleach on Monday is producing flies again on Friday because the food supply was never touched.</p>
          <p><strong>Boiling water</strong> has the same geometry problem &mdash; it contacts the walls briefly on the way past &mdash; and it can be hard on some plastic joints and seals. It is not useless as an adjunct after brushing, but on its own it does not remove a film.</p>
          <p><strong>Aerosols and total-release foggers</strong> kill adults in open air and put residue across kitchen and bathroom surfaces where the insects are not. The larvae are inside a pipe. This is treating the symptom in the least pleasant way available.</p>
          <p><strong>Ultrasonic plug-in repellers</strong> have no credible evidence for any household pest, which we covered in detail in our <Link href="/blog/ultrasonic-pest-repellers-do-they-work">ultrasonic pest repeller review</Link>. <strong>Bug zappers</strong> are equally beside the point here &mdash; a weak-flying fly that lives on a bathroom wall is not going to cross a room to a UV grid, and the zapper kills mostly harmless insects in the meantime.</p>

          <h2>Do You Need an Insecticide? The Canadian Rule Worth Knowing</h2>
          <p>Almost certainly not &mdash; and there is a useful distinction hiding in Canadian law here. Anything sold in Canada that claims to kill insects is a <strong>pest control product</strong> under the <em>Pest Control Products Act</em> and must carry a <strong>PCP registration number</strong> on its Canadian label. A bacterial or enzyme drain product sold as a <em>cleaner</em> is not a pesticide at all: it does not poison the larvae, it digests the organic film they eat. No registration is required because no pesticidal claim is being made, and there are no re-entry or residue concerns beside a kitchen sink.</p>
          <p>That is genuinely the better product for this job, not a compromise. It attacks the cause rather than the symptom, and it doubles as ongoing drain maintenance afterwards. Meanwhile, several of the foaming drain insecticides recommended in American articles are not registered for sale in Canada, and importing an unregistered pesticide is not legal here &mdash; a bad trade for a problem a brush solves. Before buying any product that <em>does</em> make a kill claim, check for the PCP number and confirm the listing ships from within Canada.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="bio-clean drain bacteria enzyme treatment">Check bacterial drain treatments on Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>When It Is Not a Drain at All</h2>
          <p>If you have brushed and treated every drain in the room and adults keep emerging, the breeding site is somewhere else that is wet and organic. In rough order of how often it turns out to be the answer:</p>
          <ul>
            <li><strong>A sump pit</strong> that never fully dries, with sludge on its walls.</li>
            <li><strong>An air conditioner or dehumidifier condensate pan or line</strong> &mdash; a standing tray of water with a film on it, frequently in a utility room nobody visits.</li>
            <li><strong>A rarely used floor drain</strong> whose trap has evaporated dry &mdash; still the single most common miss in Canadian basements.</li>
            <li><strong>A cracked or offset drain line under a slab</strong>, leaking sewage into soil where flies breed and then work their way up. Sewer odour is the tell.</li>
            <li><strong>A wet crawl space, a leaking foundation wall, or a chronically damp basement.</strong> The same conditions drive <Link href="/blog/how-to-get-rid-of-silverfish-canada">silverfish</Link> and <Link href="/blog/how-to-get-rid-of-centipedes-canada">house centipede</Link> problems, which is why they so often show up together. A dehumidifier is frequently the real fix &mdash; see our <Link href="/blog/best-dehumidifier-for-basement-canada">basement dehumidifier guide</Link>.</li>
            <li><strong>Mop buckets, floor-scrubber tanks, pet water areas, aquarium filters, and plant saucers</strong> &mdash; small standing water with organic material in it.</li>
          </ul>

          <h2>When to Stop Buying and Call Someone &mdash; and Who</h2>
          <p>Getting the <em>profession</em> right matters more than getting the product right, and this is where most money is wasted on drain flies.</p>
          <p><strong>Call a plumber</strong> when there is a sewer smell with the flies, when a slab or wall is damp with no obvious source, when a sump never dries, or when the flies are humpbacked and run across surfaces rather than flying &mdash; that last one points at phorid flies and, frequently, at a broken drain line. No pest control programme repairs a cracked pipe, and a monthly service visit for a plumbing defect is a subscription rather than a solution.</p>
          <p><strong>Call a pest control company</strong> when the setting makes flies a compliance problem rather than a nuisance &mdash; a restaurant, food premises, or healthcare facility where a health inspector is involved, or where a grease trap and floor drain system needs a documented sanitation programme rather than a homeowner with a brush. Commercial kitchens are a genuinely different job: the drains are bigger, greasier, and connected to equipment that has to keep running.</p>
          <p><strong>For an ordinary home</strong> &mdash; a bathroom sink, a shower, a kitchen drain &mdash; a recurring spray contract is the wrong purchase. Nothing sprayed in the room reaches the film in the pipe. For what general pest work costs in Canada, so you can sanity-check any quote you have been given, see our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.</p>

          <h2>Keeping Them From Coming Back</h2>
          <ul>
            <li><strong>Strainers on every sink, tub and shower</strong>, emptied regularly. Most of what feeds a film goes in from the top.</li>
            <li><strong>A monthly bacterial dose</strong> in the kitchen drain and disposal once the outbreak is over &mdash; maintenance, not treatment.</li>
            <li><strong>Water down every rarely used drain, monthly.</strong> Put it on the same reminder as the furnace filter.</li>
            <li><strong>Clean the disposal splash guard</strong> by hand, both faces, every few weeks.</li>
            <li><strong>Fix slow drains promptly.</strong> A slow drain is a thickening film with a countdown attached.</li>
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

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-fruit-flies-canada">How to Get Rid of Fruit Flies in Canada — Find the Source, Break the 8-Day Cycle</Link></li>
            <li><Link href="/blog/best-fruit-fly-trap-canada">Best Fruit Fly Trap in Canada — TERRO vs Katchy vs Sticky Ribbons</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-fungus-gnats-houseplants">How to Get Rid of Fungus Gnats in Houseplants</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-cluster-flies-canada">How to Get Rid of Cluster Flies in Canada</Link></li>
            <li><Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy Indoor Insect Trap Review — What It Catches and What It Misses</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-silverfish-canada">How to Get Rid of Silverfish in Canada — The Humidity Fix</Link></li>
            <li><Link href="/blog/best-dehumidifier-for-basement-canada">Best Basement Dehumidifier in Canada — Sizing Guide</Link></li>
            <li><Link href="/blog/ultrasonic-pest-repellers-do-they-work">Do Ultrasonic Pest Repellers Work? The Honest Answer</Link></li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada — What Professionals Charge</Link></li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">More independent Canadian pest product research &rarr;</Link>
            </p>
          </div>
        </div>
      </article>

      <CTASection
        heading="Mosquitoes and Ticks Are Our Actual Job"
        subtext="We don't treat drain flies — but standing water and chronic damp around a property drive mosquito pressure the same way they drive drain flies. Free yard assessment across 19 GTA cities."
      />
    </>
  )
}
