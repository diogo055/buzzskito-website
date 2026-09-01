import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import StickyBuyBar from '@/components/StickyBuyBar'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'mosquito-bite-treatment-relief'
const DATE = '2026-07-13'
const UPDATED = '2026-07-13'
const TITLE = 'Mosquito Bite Treatment: How to Stop the Itch Fast'
const META_TITLE = 'Mosquito Bite Treatment: Stop the Itch Fast'

const FAQS = [
  {
    question: 'How do you get rid of a mosquito bite fast?',
    answer: 'The fastest relief is a cold compress or ice pack held on the bite for 10 minutes, which numbs the nerves and shrinks the swelling. Follow with 1% hydrocortisone cream or an oral antihistamine (such as cetirizine or diphenhydramine) to calm the histamine reaction that causes itching. A dab of after-bite ammonia or a baking-soda paste can also cut the itch. Most bites fade within 3–7 days; the single most important thing is not to scratch, since scratching worsens swelling and can break the skin and cause infection.',
  },
  {
    question: 'Why do mosquito bites itch so much?',
    answer: 'When a female mosquito bites, she injects saliva containing anticoagulant proteins so your blood keeps flowing. Your immune system reacts to those foreign proteins by releasing histamine, which causes the classic red, raised, itchy welt. The itch is an allergic response, not the bite wound itself. That is why antihistamines and hydrocortisone — which blunt the histamine reaction — work better than treating the puncture. People react differently: some barely notice bites while others swell dramatically.',
  },
  {
    question: 'What actually stops mosquito bite itching?',
    answer: 'The methods with the best evidence are cold (ice or a cold compress), topical 1% hydrocortisone, topical antihistamine or calamine, and oral antihistamines for widespread or intense itching. Heat applied briefly (a warm — not scalding — compress or a commercial heat pen around 50°C) can also relieve itch for some people by denaturing the irritant proteins. Baking-soda paste and after-bite ammonia sticks help mildly. What does NOT reliably work: toothpaste, spit, and most folk remedies. Above all, do not scratch.',
  },
  {
    question: 'When should I worry about a mosquito bite?',
    answer: 'See a doctor if a bite shows signs of infection — spreading redness, warmth, increasing pain, pus, or red streaks radiating from the site — or if these come with fever. Also seek care for a large, hot, hard swelling that keeps growing over 24–48 hours (a sign of a bite allergy sometimes called skeeter syndrome), or any sign of a whole-body allergic reaction such as hives away from the bite, facial or lip swelling, or trouble breathing, which is a medical emergency. In areas where mosquitoes carry disease, fever, headache, or body aches after bites also warrant a doctor.',
  },
  {
    question: 'What does an infected mosquito bite look like?',
    answer: 'An infected mosquito bite looks different from a normal itchy welt. Instead of fading over a few days it gets worse: the redness spreads outward, the skin feels warm and increasingly painful or tender, you may see pus or yellow crusting, and sometimes red streaks trail away from the bite. Fever or swollen lymph nodes can accompany it. Infection usually follows scratching that breaks the skin and lets bacteria in. If you see spreading redness or streaking, this can be cellulitis and needs prompt medical attention, often antibiotics.',
  },
  {
    question: 'What is skeeter syndrome?',
    answer: 'Skeeter syndrome is a strong localized allergic reaction to proteins in mosquito saliva. Instead of a small welt, the bite area swells into a large, hot, red, firm patch — sometimes several centimetres across — often within hours, and it can blister or cause a low fever. It is not an infection, though it is easily mistaken for one. It is most common in young children, people new to an area, and those with less prior exposure to local mosquitoes. Oral antihistamines, hydrocortisone, and cold compresses help; severe or recurring cases should see a doctor.',
  },
  {
    question: 'How do you treat mosquito bites on kids?',
    answer: 'Keep it simple and gentle. Wash the bite with soap and water, apply a cold compress, and use age-appropriate anti-itch options: 1% hydrocortisone or calamine on the skin, and a children’s oral antihistamine if a doctor or pharmacist advises it for widespread itching. Trim your child’s nails and cover the bite with a bandage to stop scratching, which is the main cause of infection in kids. Children are more prone to large reactions (skeeter syndrome). Seek care for spreading redness, pus, fever, or swelling that keeps growing.',
  },
  {
    question: 'How long does a mosquito bite last?',
    answer: 'A typical mosquito bite itches most in the first day or two and fades within 3 to 7 days. Larger allergic reactions can last a week or more, and a dark or pinkish mark (post-inflammatory pigmentation) may linger for weeks after the itch is gone, especially if the bite was scratched. Not scratching is the best way to speed healing and avoid lasting marks. If a bite is still worsening after 48 hours rather than improving, that points to infection or a strong allergic reaction and is worth a check-up.',
  },
  {
    question: 'How do you get rid of mosquito bites overnight?',
    answer: 'You cannot make a bite vanish overnight, but you can calm it enough to sleep and speed healing. Before bed, wash the bite, apply a cold compress, and use 1% hydrocortisone cream or an oral antihistamine such as cetirizine to blunt the histamine reaction, then cover it with a bandage so you don\'t scratch in your sleep. Most bites fade within 3 to 7 days. See a healthcare provider if a bite spreads, fills with pus, or comes with fever.',
  },
  {
    question: 'Does Benadryl help with mosquito bites?',
    answer: 'Yes — Benadryl (diphenhydramine), an oral antihistamine, can ease the itching and swelling of mosquito bites by blocking the histamine reaction that drives them, and it is one of the better-supported options. It can cause drowsiness, so many people prefer a non-drowsy antihistamine like cetirizine or loratadine during the day. Topical Benadryl creams are also sold. Follow the label, and check dosing with a pharmacist or healthcare provider, especially for children.',
  },
  {
    question: 'Does aloe vera help with mosquito bites?',
    answer: 'Aloe vera can offer mild, soothing relief for mosquito bites. Its gel is cooling and has anti-inflammatory, skin-calming properties that may take the edge off itching and irritation, though the evidence is limited and it works less reliably than cold, hydrocortisone, or antihistamines. Fresh gel or a pure aloe product dabbed on the bite is a gentle option, including for kids. For intense or spreading reactions, use proven treatments and see a healthcare provider.',
  },
  {
    question: 'How do you reduce mosquito bite swelling?',
    answer: 'Cold is the fastest way to bring down mosquito bite swelling — hold an ice pack or cold compress (wrapped in cloth) on the bite for about 10 minutes. Follow with 1% hydrocortisone cream or an oral antihistamine to calm the histamine reaction driving the swelling, and elevate the area if it is on a limb. Above all, do not scratch, which makes swelling worse. A large, hot lump that keeps growing over 24 to 48 hours should be seen by a healthcare provider.',
  },
  {
    question: 'How do you get rid of mosquito bite scars?',
    answer: 'Most marks left by mosquito bites are post-inflammatory pigmentation, not true scars, and usually fade on their own over weeks to months. You can help by not scratching (which causes most lasting marks), keeping the spot moisturized, and using daily sunscreen so the mark doesn\'t darken. Some people find products with vitamin C, niacinamide, or silicone gel helpful. For raised, persistent, or deeply pigmented scars, a healthcare provider or dermatologist can advise on options.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'How to get rid of mosquito bites and stop the itch fast — cold, antihistamines, and hydrocortisone that actually work, myths that don’t, plus signs of infection, skeeter syndrome, and when to see a doctor.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('mosquito-bite-treatment-relief')

export default function MosquitoBiteTreatmentReliefPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'How to treat a mosquito bite and stop the itch fast, what works vs myths, and when a bite needs a doctor.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Bite Treatment', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Bite Treatment</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">What actually stops the itch, what to skip, and the warning signs that a bite needs a doctor.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">To stop a mosquito-bite itch fast, ice it, treat the histamine, and do not scratch. Hold a cold compress on the bite for about 10 minutes, then apply 1% hydrocortisone cream or take an oral antihistamine like cetirizine. Most bites fade in 3 to 7 days.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Hold a cold compress or ice pack on the bite for about 10 minutes to numb the itch and shrink swelling.</li>
              <li>1% hydrocortisone cream or an oral antihistamine (such as cetirizine or diphenhydramine) calms the histamine reaction that drives itching.</li>
              <li>Most mosquito bites fade within 3 to 7 days; not scratching is the best way to speed healing.</li>
              <li>The itch is an allergic response to proteins in mosquito saliva, not the puncture itself.</li>
              <li>See a doctor if redness spreads, the bite fills with pus, or you develop fever &mdash; signs of an infected bite.</li>
              <li>Whole-body hives, facial or lip swelling, or trouble breathing is a medical emergency &mdash; call 911.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Relief methods table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Bite Relief: What Works, How Fast</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Method</th>
                  <th className="px-3 py-2 text-left">How it helps</th>
                  <th className="px-3 py-2 text-left">Speed</th>
                  <th className="px-3 py-2 text-left">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cold compress / ice', 'Numbs nerves, shrinks swelling', 'Minutes', 'Strong'],
                  ['1% hydrocortisone cream', 'Calms inflammation and itch', '30–60 min', 'Strong'],
                  ['Oral antihistamine (cetirizine, diphenhydramine)', 'Blocks histamine body-wide', '30–60 min', 'Strong'],
                  ['Topical antihistamine / calamine', 'Soothes itch on the skin', '15–30 min', 'Moderate'],
                  ['After-bite (ammonia) stick', 'Neutralizes itch chemically', 'Minutes', 'Moderate'],
                  ['Baking-soda paste', 'Mild itch relief', '15–30 min', 'Weak–moderate'],
                  ['Brief heat (heat pen ~50°C)', 'Denatures irritant proteins', 'Minutes', 'Emerging'],
                  ['Toothpaste, spit, saliva', 'Folk remedy', '—', 'No evidence'],
                  ['Scratching', 'Feels good, makes it worse', '—', 'Harmful'],
                ].map(([method, help, speed, evidence]) => (
                  <tr key={method} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{method}</td>
                    <td className="px-3 py-2 text-gray-700">{help}</td>
                    <td className="px-3 py-2 text-gray-700">{speed}</td>
                    <td className="px-3 py-2 text-gray-700">{evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">General bite-care guidance aligns with the <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) &mdash; Mosquitoes</a>. This article is educational and not a substitute for medical advice.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>Why Mosquito Bites Itch</h2>
          <p>The itch is an allergic reaction, not the puncture. When a female mosquito feeds, she injects a little saliva loaded with anticoagulant proteins so your blood keeps flowing while she drinks. Your immune system flags those proteins as foreign and releases <strong>histamine</strong>, which dilates local blood vessels and irritates nearby nerves. The result is the familiar red, raised, itchy welt. Because histamine drives the whole reaction, the treatments that calm histamine &mdash; antihistamines and hydrocortisone &mdash; work far better than anything aimed at the tiny bite wound itself. It also explains why people react so differently: sensitivity to mosquito saliva varies a lot, and your reaction can change over a season as your body is exposed more. That mechanism is shared, which is precisely why the two get confused &mdash; <Link href="/blog/bed-bug-bites-vs-mosquito-bites" className="text-brand-700 underline">telling a bed bug bite from a mosquito bite</Link> relies on the pattern and the room rather than on the welt itself.</p>

          <h2>Fast Relief, Step by Step</h2>
          <p>When a bite flares up, work through these in order. You will usually feel better within the first two steps.</p>
          <ol>
            <li><strong>Wash the bite</strong> with soap and water. This removes surface irritants and lowers infection risk if you have already scratched.</li>
            <li><strong>Apply cold for about 10 minutes.</strong> An ice pack or cold compress numbs the itch nerves fast and shrinks the swelling. Wrap ice in a cloth rather than putting it directly on skin.</li>
            <li><strong>Treat the histamine.</strong> Dab on 1% hydrocortisone cream, or take an oral antihistamine such as cetirizine, loratadine, or diphenhydramine if the itching is intense or you have several bites. Topical calamine or an antihistamine cream is a good on-the-skin alternative.</li>
            <li><strong>Neutralize what is left.</strong> An after-bite ammonia stick or a paste of baking soda and a little water can take the edge off a stubborn bite.</li>
            <li><strong>Cover it and leave it alone.</strong> A bandage over the bite is the simplest way to stop yourself scratching in your sleep.</li>
          </ol>
          <p className="not-prose text-sm text-gray-600 mb-1">Handy things to keep in the medicine cabinet or camp bag:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="after bite itch relief">Check after-bite relief on Amazon &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="hydrocortisone anti itch cream">Hydrocortisone anti-itch cream &rarr;</BuyLink>
          </div>

          <TopPick tag={AMZ_TAG}
            label="Best for the Itch"
            name="1% Hydrocortisone Anti-Itch Cream"
            blurb="The workhorse of bite relief — a topical steroid that calms the histamine-driven inflammation behind the itch and swelling. The one thing worth keeping in the medicine cabinet before bite season starts."
            search="hydrocortisone anti itch cream"
            score={8.8}
            pros={['Directly targets the histamine reaction', 'Cheap and widely stocked', 'Gentle enough for spot use on kids with a pharmacist’s okay']}
            cons={['Topical only — pair with cold or an oral antihistamine for many bites', 'Not for broken or infected skin']}
          />


          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">The best bite treatment is not getting bitten</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Treating bites one by one is a losing battle if your yard is breeding mosquitoes. A professional barrier spray knocks down the adults resting in your shrubs and shade for weeks at a time. BuzzSkito protects GTA yards with single treatments from $99 and seasonal plans.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/mosquito-control" className="btn-primary-sm">Explore Mosquito Control &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>What Actually Works vs Common Myths</h2>
          <p>Plenty of internet remedies get passed around every summer. Here is the honest split. <strong>Cold, hydrocortisone, and antihistamines</strong> are the workhorses with the best support. <strong>Calamine, baking-soda paste, and after-bite ammonia sticks</strong> help to a mild-to-moderate degree. Brief <strong>heat</strong> &mdash; a warm (not scalding) compress or a purpose-made heat pen around 50&deg;C &mdash; relieves itch for some people, likely by breaking down the irritant proteins; use it carefully to avoid burns.</p>
          <p>The remedies that do <em>not</em> hold up: <strong>toothpaste, spit, and vinegar-soaked folk cures</strong> rarely do more than distract you, and toothpaste can irritate broken skin. The single worst thing you can do is <strong>scratch</strong>. It feels great for a second and then releases more histamine, spreads the reaction, and &mdash; most importantly &mdash; can break the skin and let bacteria in, which is how a harmless itchy bump turns into an infected one.</p>

          <h2>Signs of an Infected Bite or a Bad Reaction</h2>
          <p>A normal mosquito bite is worst on day one or two and steadily improves. Two things should change your plan: signs of <strong>infection</strong>, and signs of an <strong>allergic reaction</strong>.</p>
          <p><strong>Infected bite (often from scratching):</strong> instead of fading, the bite gets worse &mdash; redness spreads outward, the skin feels warm and increasingly painful, and you may see pus, yellow crusting, or red streaks trailing away from the site. Fever or tender, swollen glands can go with it. Spreading redness with streaking can signal <strong>cellulitis</strong>, a skin infection that usually needs antibiotics, so do not wait it out.</p>
          <p><strong>Skeeter syndrome (a bite allergy):</strong> some people, especially young children and those new to an area, react to mosquito saliva with a large, hot, firm, red swelling that can be several centimetres across, sometimes with blistering or a low fever, appearing within hours. It looks alarming and is easy to confuse with infection, but it is an allergic reaction, not bacteria. Cold, oral antihistamines, and hydrocortisone are the mainstays; severe or recurring cases should see a doctor.</p>

          <h2>When to See a Doctor</h2>
          <p>Get medical care promptly if you notice any of the following:</p>
          <ul>
            <li><strong>Spreading redness, warmth, pus, or red streaks</strong> &mdash; possible skin infection or cellulitis.</li>
            <li><strong>Fever, chills, or body aches</strong> after bites &mdash; especially in regions where mosquitoes can carry disease such as West Nile virus.</li>
            <li><strong>A swelling that keeps growing</strong> over 24&ndash;48 hours rather than settling.</li>
            <li><strong>Whole-body reaction</strong> &mdash; hives away from the bite, swelling of the lips or face, dizziness, or any difficulty breathing. This can be anaphylaxis and is a medical emergency &mdash; call 911.</li>
          </ul>
          <p>If you are ever unsure whether a mark is from a mosquito at all, our guide on the <Link href="/blog/tick-bite-vs-mosquito-bite">difference between a tick bite and a mosquito bite</Link> walks through how to tell them apart &mdash; it matters, because tick bites carry a different set of risks like Lyme disease.</p>
          <p>Pain at the moment of the bite is another useful sorting signal. A mosquito is nearly painless going in, so a bite that stung sharply and bled a little points to a horse fly or deer fly &mdash; those flies cut the skin open rather than piercing it, and <Link href="/blog/horse-fly-and-deer-fly-bite-treatment">our horse fly and deer fly bite guide</Link> covers the slightly different care an open cut needs.</p>

          <h2>Treating Mosquito Bites on Kids</h2>
          <p>Children get bitten more, react more strongly, and scratch more &mdash; a recipe for infected bites. Keep treatment simple: wash the bite, apply a cold compress, and use age-appropriate anti-itch options like 1% hydrocortisone or calamine on the skin. A children&rsquo;s oral antihistamine can help with widespread itching, but check the dose with a pharmacist or doctor first. The most useful move is mechanical: <strong>trim nails and cover the bite with a bandage</strong> so scratching cannot break the skin. Kids are the group most prone to skeeter-syndrome swellings, so a big hot lump is usually an allergy rather than an emergency &mdash; but watch for spreading redness, pus, or fever and get it checked if those appear.</p>
          <p>If most of the bites you are treating sit below the knee, that is not coincidence &mdash; socks and closed shoes are one of the cheapest interventions available, and we explain the ground-level physics behind it in <Link href="/blog/why-do-mosquitoes-bite-my-ankles">why mosquitoes bite ankles and feet</Link>.</p>

          <h2>Stop the Bites at the Source</h2>
          <p>Every bite you treat started with a mosquito that was resting somewhere in your yard &mdash; in tall grass, under shrubs, in the shade of the fence line. You can keep antihistamines on hand, but the real fix is fewer mosquitoes. Dump standing water weekly (even a bottle cap breeds them), keep grass trimmed, and consider a barrier treatment that kills the adults where they hide. <Link href="/mosquito-control">BuzzSkito&rsquo;s professional barrier spray</Link> targets those resting zones and gives you 21&ndash;30 days of relief per treatment, so bite-and-scratch season is a lot shorter.</p>
          <p>For quick prevention on the go, a <BuyLink tag={AMZ_TAG} search="bug bite suction tool">bite suction tool</BuyLink> can pull out some saliva right after a bite and blunt the reaction if you use it immediately, and a good repellent with DEET or picaridin stops bites before they happen.</p>

          <h2>Mosquito Bite vs Other Bites</h2>
          <p>Not every itchy welt is a mosquito. If a bite shows up in a line or tight cluster, blisters, or itches out of all proportion to its size, it may be something else. These guides walk through the tell-tale differences:</p>
          <ul>
            <li><Link href="/blog/bed-bug-bites">Bed bug bites</Link> &mdash; often appear in lines or clusters on skin exposed while you sleep.</li>
            <li><Link href="/blog/chigger-bites">Chigger bites</Link> &mdash; intensely itchy welts that cluster around the ankles, waistband, and other snug spots.</li>
            <li><Link href="/blog/flea-bites-on-humans">Flea bites on humans</Link> &mdash; small red dots, usually grouped on the lower legs and ankles.</li>
            <li><Link href="/blog/no-see-um-bites">No-see-um bites</Link> &mdash; tiny biting midges that leave a burning, disproportionately itchy welt.</li>
            <li><Link href="/blog/mosquito-bite-vs-spider-bite">Mosquito bite vs spider bite</Link> &mdash; how to tell a harmless welt from a bite worth watching.</li>
          </ul>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/tick-bite-vs-mosquito-bite">Tick Bite vs Mosquito Bite &mdash; How to Tell the Difference</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
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

      <StickyBuyBar tag={AMZ_TAG} name="1% Hydrocortisone Anti-Itch Cream" search="hydrocortisone anti itch cream" label="Best for the itch" />

      <CTASection heading="Fewer Bites Beat Any Itch Cream" subtext="A professional barrier spray clears the mosquitoes resting in your yard. From $99, same-day protection, 21–30 day residual." variant="dark" />
    </>
  )
}
