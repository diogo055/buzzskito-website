import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'why-do-mosquito-bites-itch'
const DATE = '2026-07-15'
const TITLE = 'Why Do Mosquito Bites Itch — and How Long Do They Last?'
// SERP title only (H1 + schema keep TITLE). Layout appends ' | BuzzSkito' (12 chars) — keep <= 48.
const SEO_TITLE = 'How Long Do Mosquito Bites Last? Full Timeline'

const FAQS = [
  {
    question: 'Why do mosquito bites itch?',
    answer: 'Mosquito bites itch because of an allergic immune reaction, not the puncture itself. When a female mosquito feeds, she injects saliva containing anticoagulant proteins so your blood keeps flowing. Your immune system recognizes those proteins as foreign and triggers mast cells to release histamine, which dilates blood vessels, leaks fluid into the skin (the raised welt), and irritates nearby nerve endings — which your brain reads as itch. Because histamine drives the reaction, antihistamines and hydrocortisone relieve the itch better than anything applied to the bite wound.',
  },
  {
    question: 'Why are mosquito bites so itchy for me but not for other people?',
    answer: 'Sensitivity to mosquito saliva varies enormously from person to person and even changes over your lifetime. Repeated exposure gradually reshapes your immune response — many people cycle from no reaction, to a delayed itchy bump, to an immediate welt plus delayed bump, and eventually toward little reaction at all as they become desensitized. Children and people newly exposed to a region tend to react most strongly. Genetics, prior exposure, and immune status all play a role, which is why two people bitten at the same barbecue can have completely different reactions.',
  },
  {
    question: 'How long do mosquito bites last?',
    answer: 'A typical mosquito bite is itchiest in the first 24 to 48 hours and fades within 3 to 7 days. Larger allergic reactions, or bites that have been scratched raw, can take a week or two to settle. A flat brown or pinkish mark (post-inflammatory pigmentation) may linger for several weeks after the itch is gone, especially on darker skin or if the bite was scratched. Not scratching is the single best way to speed healing and avoid a lasting mark.',
  },
  {
    question: 'How long do mosquito bites itch for?',
    answer: 'Most mosquito bites itch for about 2 to 4 days, peaking in the first day or two and then tapering off. The itch comes from histamine, so it usually eases as your body clears the reaction. Scratching restarts the cycle by releasing more histamine and irritating the skin, which is why a bite you leave alone stops itching far sooner than one you keep scratching. Bites with a strong allergic reaction can itch on and off for a week or more.',
  },
  {
    question: 'How long does it take for a mosquito bite to go away?',
    answer: 'Most mosquito bites go away completely within 3 to 7 days. The welt flattens as the histamine reaction resolves, and the redness fades from the centre outward. Bites that swell dramatically (a strong allergic reaction sometimes called skeeter syndrome) can take up to two weeks, and a faint discoloured mark can persist for weeks after the bump is gone. If a bite is still getting worse rather than better after 48 hours, that points to infection or a strong allergic reaction and is worth having checked.',
  },
  {
    question: 'Why are mosquito bites worse at night?',
    answer: 'Bites often feel worse at night for several overlapping reasons. Your body’s natural anti-inflammatory hormone, cortisol, dips to its lowest levels overnight, so the itch is less suppressed. Skin temperature rises and the skin loses more moisture at night, both of which heighten itch. And with the day’s distractions gone, your brain simply has more attention to spare for the sensation. Many mosquitoes also bite at dusk, so the reaction is peaking just as you are trying to fall asleep.',
  },
  {
    question: 'Why do mosquito bites swell up?',
    answer: 'The swelling is fluid. Histamine released by your immune system makes nearby blood vessels leaky, so plasma seeps into the surrounding skin and raises a firm, puffy welt (a wheal). The more strongly your body reacts to the saliva proteins, the more histamine is released and the bigger the swelling. That is why bites can range from a tiny pinprick bump to a swollen patch several centimetres across, and why the same person may swell more on some parts of the body, like the ankles or eyelids, where the skin is thinner.',
  },
  {
    question: 'Why is my mosquito bite so big?',
    answer: 'An unusually large, hot, firm mosquito bite is usually a strong localized allergic reaction to mosquito saliva, sometimes called skeeter syndrome. Instead of a small welt, the area swells into a red patch that can be several centimetres wide, occasionally with blistering or a low fever, often within hours of the bite. It is most common in young children, people new to an area, and those with less prior exposure to local mosquitoes. It looks alarming but is an allergy, not an infection — though the two can be hard to tell apart, so see a doctor if you are unsure or it keeps growing.',
  },
  {
    question: 'What happens when a mosquito bites you?',
    answer: 'A female mosquito lands and probes your skin with her proboscis, a needle-like mouthpart that pierces down to a small blood vessel. As she feeds, she injects saliva containing anticoagulants and other proteins that stop your blood from clotting and keep the vessel open. She draws blood for up to a minute, then flies off. The saliva left behind is what your immune system reacts to — releasing histamine and producing the itchy, swollen welt over the following minutes to hours. Only females bite, because they need a blood meal to develop eggs.',
  },
  {
    question: 'Do mosquito bites itch more the next day?',
    answer: 'Often, yes. Many people have a two-part response: an immediate welt within minutes, followed by a delayed reaction that peaks 24 to 48 hours later as a firmer, itchier bump. This delayed hypersensitivity is driven by immune cells arriving at the site over the following day, so a bite that seemed minor at bedtime can be at its itchiest the next morning. As you gain lifelong exposure to local mosquitoes, the delayed reaction often fades and only the quick welt remains.',
  },
  {
    question: 'Why do some people not react to mosquito bites at all?',
    answer: 'People who barely react have usually been bitten so many times that their immune system has become desensitized to the local mosquito saliva proteins — the same way repeated exposure can dial a reaction down. Long-term residents of an area often react far less than visitors. A minority of people are naturally low reactors from the start. It does not mean they are being bitten less; their skin simply mounts little histamine response, so there is no welt and no itch even though the bite happened.',
  },
  {
    question: 'Can a mosquito bite itch for two weeks?',
    answer: 'Yes, though it is not the norm. Ordinary bites resolve in 3 to 7 days, but a strong allergic reaction can stay itchy and swollen for a week or two. Constant scratching also prolongs things by re-triggering histamine and irritating the skin, and it risks breaking the skin and causing infection, which itches and hurts in a different way. If a bite is still worsening after two days, oozing pus, spreading redness, or accompanied by fever, see a healthcare provider rather than waiting it out.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: SEO_TITLE,
  description: 'How long do mosquito bites last? Most fade in 3-7 days, but the delayed reaction peaks at 24-48 hours. Stage-by-stage timeline and why night is worse.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function WhyDoMosquitoBitesItchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'The science of why mosquito bites itch and swell, how long they last, and why they feel worse at night.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Why Mosquito Bites Itch', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Why Mosquito Bites Itch</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The science of the itch, the day-by-day timeline, why bites feel worse at night, and why some swell up so big.</p>
        </div>
      </section>

      {/* Quick Answer — AI-extraction capsule */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed">
              Mosquito bites itch because your immune system reacts to proteins in the mosquito&rsquo;s saliva, releasing <strong>histamine</strong> that swells the skin and irritates nearby nerves. It is an allergic response, not the puncture. Most bites itch worst in the first 24&ndash;48 hours and fade within <strong>3 to 7 days</strong>, though strong reactions can last up to two weeks. Not scratching is the fastest way to make one go away.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>The itch comes from histamine released by your immune system, not from the puncture wound itself.</li>
              <li>An immediate itchy welt appears within about 5 to 20 minutes of the bite.</li>
              <li>A delayed reaction builds over 24 to 48 hours and is often the itchiest phase.</li>
              <li>Most bites last 3 to 7 days; strong allergic reactions can stay swollen and itchy for up to two weeks.</li>
              <li>Only female mosquitoes bite, because they need blood protein to develop their eggs.</li>
              <li>Antihistamines and 1% hydrocortisone target the histamine reaction; scratching releases fresh histamine and prolongs the itch.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Reaction timeline table */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Bite Timeline: What Happens and When</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Stage</th>
                  <th className="px-3 py-2 text-left">When</th>
                  <th className="px-3 py-2 text-left">What&rsquo;s happening</th>
                  <th className="px-3 py-2 text-left">What you feel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['The bite', 'Seconds', 'Mosquito injects saliva while feeding', 'Usually nothing — often painless'],
                  ['Immediate reaction', '5–20 min', 'Histamine released; blood vessels leak fluid', 'Pale, raised, itchy welt (wheal)'],
                  ['Delayed reaction', '24–48 hrs', 'Immune cells arrive; deeper inflammation', 'Firmer red bump — often the itchiest point'],
                  ['Resolution', '3–7 days', 'Histamine clears; swelling settles', 'Itch fades, welt flattens'],
                  ['Strong / allergic', 'Up to 2 weeks', 'Large localized allergic response', 'Big hot swelling; slow to settle'],
                  ['Aftermark', 'Weeks', 'Post-inflammatory pigmentation', 'Flat brown/pink spot, no itch'],
                ].map(([stage, when, whats, feel]) => (
                  <tr key={stage} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{stage}</td>
                    <td className="px-3 py-2 text-gray-700 whitespace-nowrap">{when}</td>
                    <td className="px-3 py-2 text-gray-700">{whats}</td>
                    <td className="px-3 py-2 text-gray-700">{feel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">General timeline; individual reactions vary. Educational information aligned with public-health guidance from the Public Health Agency of Canada (PHAC) and the U.S. Centers for Disease Control and Prevention (CDC) &mdash; not a substitute for medical advice.</p>
        </div>
      </section>

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} />

          <h2>Why do mosquito bites itch?</h2>
          <p>Mosquito bites itch because of an allergic reaction to the mosquito&rsquo;s saliva &mdash; not because of the tiny puncture wound. When a female mosquito feeds, she injects a small amount of saliva loaded with anticoagulant and other proteins that stop your blood from clotting so she can drink freely. Your immune system flags those proteins as foreign invaders and orders specialized cells (mast cells) to release <strong>histamine</strong>. Histamine is the chemical behind the whole reaction: it widens local blood vessels, makes them leak fluid into the surrounding skin, and stimulates the nerve endings that report itch to your brain.</p>
          <p>That is why the classic mosquito welt is red, raised, and maddeningly itchy all at once &mdash; it is your body&rsquo;s defence system overreacting to a harmless bit of insect spit. And it is why the treatments that actually work target the histamine, not the bite: antihistamines and 1% hydrocortisone calm the immune reaction, while picking at the puncture does nothing. Our companion guide on <Link href="/blog/mosquito-bite-treatment-relief">how to stop a mosquito bite from itching</Link> walks through exactly what to reach for.</p>

          <h2>Why are mosquito bites itchy for some people and not others?</h2>
          <p>Your reaction depends on how sensitized your immune system is to the specific saliva proteins of the mosquitoes biting you &mdash; and that changes over a lifetime. Allergists describe a rough sequence people move through with repeated exposure: at first no reaction at all, then a delayed itchy bump a day later, then both an immediate welt and a delayed bump, and finally &mdash; after enough bites &mdash; the reaction fades and many people barely respond. This is why long-time residents of a cottage often shrug off bites that leave visitors covered in welts.</p>
          <p>Children tend to react most strongly because they have had the fewest bites, and people who move to a new region can flare up for a season or two before their immune systems adjust to the local species. Genetics and overall immune status matter too. None of this changes how <em>attractive</em> you are to mosquitoes in the first place &mdash; that is a separate question we cover in <Link href="/blog/what-attracts-mosquitoes-to-you">what attracts mosquitoes to you</Link>.</p>

          <h2>What happens when a mosquito bites you?</h2>
          <p>Only female mosquitoes bite, because they need protein from a blood meal to develop their eggs. When one lands on you, she uses a slender mouthpart called a proboscis to probe through the skin until she finds a small blood vessel. As she draws blood &mdash; a process that can take up to a minute &mdash; she pumps saliva into the wound to keep the blood flowing and the vessel relaxed. When she is full, she flies off, leaving that saliva behind in your skin.</p>
          <p>The bite itself is usually painless, which is why you often do not notice it happening. Everything you feel afterward &mdash; the itch, the welt, the swelling &mdash; is your immune response to the leftover saliva, not damage from the puncture. That delay is exactly why you tend to discover mosquito bites after the fact, sometimes clustered on ankles, wrists, and other spots where skin is thin and blood vessels sit close to the surface.</p>

          <h2>How long do mosquito bites last (and how long do they itch)?</h2>
          <p>Most mosquito bites last 3 to 7 days and itch worst in the first 24 to 48 hours. The welt rises quickly, peaks as the delayed part of the immune reaction kicks in on the second day, then gradually flattens and stops itching as your body clears the histamine. For a routine bite that you leave alone, the itch is usually mostly gone within 2 to 4 days.</p>
          <p>Two things stretch that timeline out. A strong allergic reaction can keep a bite swollen and itchy for a week or two. And scratching &mdash; the most tempting and most counterproductive response &mdash; releases fresh histamine, re-inflames the skin, and can break the surface, which both prolongs the itch and opens the door to infection. Even after the bump is gone, a flat brown or pinkish mark (post-inflammatory pigmentation) can linger for several weeks, especially on darker skin or where a bite was scratched raw. The single best thing you can do to make a bite go away faster is to not scratch it.</p>

          <h2>Do mosquito bites leave marks or scars?</h2>
          <p>Most mosquito bites do not scar, because the reaction plays out in the upper layers of the skin and heals without damaging the deeper tissue that forms true scars. What people usually notice weeks later is a flat brown, pink, or greyish spot called <strong>post-inflammatory pigmentation</strong> &mdash; the skin&rsquo;s temporary response to inflammation, not a scar. These marks fade on their own over several weeks to a few months and are more noticeable, and slower to clear, on darker skin tones.</p>
          <p>True scarring almost always comes from the same culprit that causes infection: scratching. Digging at a bite hard enough to break the skin, or picking at the scab that forms, can damage deeper skin and leave a small permanent mark. Two simple habits keep bites from leaving anything behind &mdash; resist the urge to scratch, and keep the healing spot out of strong sun, since UV exposure darkens post-inflammatory marks and makes them linger. If a bite mark is raised, growing, or changing long after the itch is gone, mention it to a healthcare provider.</p>

          <h2>Why are mosquito bites worse at night?</h2>
          <p>If your bites seem to flare the moment your head hits the pillow, you are not imagining it &mdash; several factors line up against you at night. The leading explanation is your body clock: levels of cortisol, your body&rsquo;s own anti-inflammatory hormone, fall to their lowest point overnight, so there is less natural braking on the itch. Researchers studying nocturnal itch have also noted that skin temperature rises and the skin loses more water in the evening, both of which are known to intensify the sensation of itching.</p>
          <p>On top of the biology, there is attention. During the day, work, movement, and a hundred small distractions crowd out the itch; lying still in a quiet, dark room, your brain has nothing else to focus on, so the same signal feels much stronger. Timing plays a part too &mdash; many Ontario mosquitoes, including the <em>Culex</em> species tied to West Nile virus, feed most at dusk, so bites collected at a summer-evening barbecue are often reaching peak itch right at bedtime.</p>

          <div className="not-prose my-8 rounded-xl bg-emerald-50 border border-emerald-200 p-5">
            <p className="text-sm text-gray-800 leading-relaxed"><strong className="text-emerald-800">Quick relief note:</strong> a cold compress numbs the itch nerves fast, and 1% hydrocortisone or an oral antihistamine calms the histamine reaction. We keep the full step-by-step in <Link href="/blog/mosquito-bite-treatment-relief" className="text-emerald-700 underline font-semibold">our bite-treatment guide</Link> &mdash; this page is about the <em>why</em>, that one is about the <em>fix</em>.</p>
          </div>

          <h2>Why do mosquito bites swell up &mdash; and why is mine so big?</h2>
          <p>The swelling is simply fluid. When histamine makes the blood vessels around the bite leaky, plasma seeps out into the skin and raises a firm, puffy welt called a wheal. The stronger your immune reaction to the saliva proteins, the more histamine floods the area and the bigger the swelling gets. That is why the same person can have a pinprick bump on one arm and a swollen lump on an ankle or eyelid, where the skin is thin and looser and puffs up more dramatically.</p>
          <p>Ankles collect more of those welts in the first place, too. Exhaled carbon dioxide is denser than air and pools near the ground, which is exactly where low-flying <em>Aedes</em> species hunt — the reason behind it is in <Link href="/blog/why-do-mosquitoes-bite-my-ankles">why mosquitoes go for your ankles</Link>.</p>
          <p>When a bite swells into a large, hot, hard, red patch several centimetres across &mdash; sometimes with blistering or a low-grade fever, usually within hours &mdash; that is a strong localized allergic reaction often nicknamed <strong>skeeter syndrome</strong>. It is most common in young children and in people newly exposed to an area&rsquo;s mosquitoes. It looks alarming and is easy to mistake for an infection, but it is an allergy, not bacteria, and it typically settles with cold compresses, antihistamines, and hydrocortisone. Because infection and a big allergic reaction can look similar, it is worth reading <Link href="/blog/when-to-worry-about-a-mosquito-bite">when to worry about a mosquito bite</Link> to tell them apart.</p>

          <h2>Do mosquito bites itch more the next day?</h2>
          <p>For a lot of people, yes. The mosquito-bite reaction commonly comes in two waves: an <strong>immediate</strong> welt within minutes, driven by the first histamine release, and a <strong>delayed</strong> reaction that builds over the following 24 to 48 hours as immune cells migrate to the site and stir up deeper inflammation. That delayed phase is often the itchiest, which is why a bite that seemed trivial at bedtime can be at its worst the next morning. As you accumulate lifelong exposure to local mosquitoes, the delayed wave tends to shrink, and eventually many people are left with only the brief immediate welt &mdash; or no reaction at all.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">The only bite that never itches is the one you never get</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Understanding the itch is useful; having fewer bites to treat is better. A professional barrier spray knocks down the adult mosquitoes resting in your shrubs, shade, and fence lines for weeks at a time. BuzzSkito protects GTA yards with single treatments from $99 and seasonal plans.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/mosquito-control" className="btn-primary-sm">Explore Mosquito Control &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>When a mosquito bite is more than just an itch</h2>
          <p>The vast majority of mosquito bites are harmless and heal on their own. But a few signs mean it is time to stop watching and see a healthcare provider. Get medical care if a bite shows signs of <strong>infection</strong> &mdash; spreading redness, warmth, increasing pain, pus, or red streaks trailing from the site, especially with a fever &mdash; which usually follows scratching that breaks the skin. Seek urgent care for any whole-body allergic reaction, such as hives away from the bite, swelling of the lips or face, dizziness, or trouble breathing; that can be anaphylaxis, and in an emergency you should call 911.</p>
          <p>The Public Health Agency of Canada also notes that mosquitoes in parts of Ontario can carry <strong>West Nile virus</strong>, so fever, headache, or body aches in the days after being bitten are worth mentioning to a doctor. For a full walkthrough of the warning signs versus a normal reaction, see <Link href="/blog/when-to-worry-about-a-mosquito-bite">when to worry about a mosquito bite</Link>. And if you are not certain a mark even came from a mosquito, comparing it against <Link href="/blog/why-mosquitoes-bite-some-people-more">why mosquitoes bite some people more than others</Link> can help you rule things in or out.</p>

          <p className="text-sm text-gray-500 italic mt-6">This article is general educational information and is not medical advice. It does not diagnose or treat any condition. For any bite that concerns you &mdash; or any symptom that is severe, spreading, or accompanied by fever or difficulty breathing &mdash; contact a healthcare provider, or call 911 in an emergency.</p>

          <h2>Mosquito Bite vs Other Bites</h2>
          <p>If a bite does not itch, swell, or heal the way this page describes, it may not be a mosquito at all. When bites arrive in lines or clusters, blister, or itch far out of proportion to their size, compare them against these common look-alikes:</p>
          <ul>
            <li><Link href="/blog/bed-bug-bites">Bed bug bites</Link> &mdash; often appear in lines or clusters on skin exposed while you sleep.</li>
            <li><Link href="/blog/chigger-bites">Chigger bites</Link> &mdash; intensely itchy welts that cluster around the ankles, waistband, and other snug spots.</li>
            <li><Link href="/blog/flea-bites-on-humans">Flea bites on humans</Link> &mdash; small red dots, usually grouped on the lower legs and ankles.</li>
            <li><Link href="/blog/no-see-um-bites">No-see-um bites</Link> &mdash; tiny biting midges that leave a burning, disproportionately itchy welt.</li>
            <li><Link href="/blog/mosquito-bite-vs-spider-bite">Mosquito bite vs spider bite</Link> &mdash; how to tell a harmless welt from a bite worth watching.</li>
          </ul>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-bite-treatment-relief">Mosquito Bite Treatment &mdash; How to Stop the Itch Fast</Link></li>
            <li><Link href="/blog/when-to-worry-about-a-mosquito-bite">When to Worry About a Mosquito Bite</Link></li>
            <li><Link href="/blog/what-attracts-mosquitoes-to-you">What Attracts Mosquitoes to You?</Link></li>
            <li><Link href="/blog/why-mosquitoes-bite-some-people-more">Why Mosquitoes Bite Some People More Than Others</Link></li>
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

      <CTASection heading="Fewer Bites Beat Any Itch Science" subtext="A professional barrier spray clears the mosquitoes resting in your yard. From $99, same-day protection, 21–30 day residual." variant="dark" />
    </>
  )
}
