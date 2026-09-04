import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import Figure from '@/components/Figure'
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
  {
    question: 'How soon after a mosquito bite does it start to itch?',
    answer: 'A mosquito bite usually starts to itch 5 to 20 minutes after the mosquito feeds. The U.S. Centers for Disease Control and Prevention (CDC) describes a puffy, reddish bump appearing a few minutes after the bite, followed a day or so later by a harder, itchier, reddish-brown bump. The bite itself is normally painless, so many people never feel the mosquito and only notice the welt once the histamine reaction is underway. If nothing appears within the first hour, a delayed bump can still surface the next morning.',
  },
  {
    question: 'Why does scratching a mosquito bite make it itch more?',
    answer: 'Scratching releases more histamine into the skin and restarts the exact reaction that caused the itch. It also irritates the nerve endings that report itch to the brain, which sets up a self-feeding itch-scratch cycle, and it can break the skin surface and let bacteria in. A bite you leave alone typically stops itching in 2 to 4 days, while a bite you keep scratching can stay irritated for a week or more and is far more likely to leave a lasting mark.',
  },
  {
    question: 'How long does a mosquito bite stay swollen?',
    answer: 'A normal mosquito bite stays swollen for about 1 to 3 days and flattens as the histamine clears. A large local allergic reaction — a hot, firm patch 5 cm (about 2 inches) or wider — can stay raised for up to two weeks. The swelling is leaked plasma, not pus or infection, so it settles on its own once the immune reaction fades. Mayo Clinic notes that these larger reactions are most common in young children and in people newly exposed to a mosquito species. Swelling that is still growing 48 hours after the bite, or that comes with fever or spreading redness, should be looked at by a healthcare provider.',
  },
  {
    question: 'What is skeeter syndrome?',
    answer: 'Skeeter syndrome is the informal name for a large local allergic reaction to mosquito saliva. Instead of a small welt, the skin swells into a hot, red, firm patch 5 cm (about 2 inches) or wider within hours of the bite, sometimes with blistering or a low-grade fever. Mayo Clinic notes that these severe reactions are most common in young children and in people newly exposed to a mosquito species. It is an allergy rather than an infection, and it usually settles with cold compresses, antihistamines, and 1% hydrocortisone.',
  },
  {
    question: 'Do only female mosquitoes bite?',
    answer: 'Only female mosquitoes bite. They need the protein and iron in a blood meal to develop their eggs, so biting is a reproductive requirement rather than a food source. Male mosquitoes feed entirely on flower nectar and plant sugars and cannot pierce skin. That means every itchy welt you have ever had came from a female. It also explains why mosquito control works the way it does: killing the resting adults in shaded vegetation removes the females before they ever reach you.',
  },
  {
    question: 'Do mosquito bites leave scars?',
    answer: 'Mosquito bites rarely leave true scars. The itchy welt forms in the upper layers of skin and heals without damaging the deeper tissue that produces scarring. What lingers is post-inflammatory pigmentation — a flat brown, pink, or greyish mark that fades over several weeks to a few months and is more visible, and slower to clear, on darker skin tones. Permanent marks almost always come from scratching deep enough to break the skin or from picking the scab. The U.S. Centers for Disease Control and Prevention (CDC) advises against scratching bites, because breaking the skin surface can lead to infection.',
  },
  {
    question: 'When should you see a doctor about a mosquito bite?',
    answer: 'See a healthcare provider if a mosquito bite shows spreading redness, growing warmth, increasing pain, pus, or red streaks trailing from the site, especially alongside a fever — those point to infection rather than a normal reaction. Call 911 for hives away from the bite, swelling of the lips or face, dizziness, or trouble breathing, which can signal anaphylaxis. The Public Health Agency of Canada also notes that mosquitoes in parts of Ontario carry West Nile virus, so fever, headache, or body aches in the days after being bitten are worth reporting to a doctor.',
  },
  {
    question: 'When are mosquito bites worst in Ontario?',
    answer: 'Mosquito season in Ontario runs from May through September, and bites peak in June and July once spring rain and warm nights have produced the largest broods. Public Health Ontario carries out West Nile virus mosquito surveillance each summer, and the Culex species that carry the virus feed most heavily at dusk and dawn from July into September. In the GTA that means the worst bite pressure sits squarely over backyard season, which is why barrier treatments here are scheduled from May through September rather than as one-off visits.',
  },
  {
    question: 'How can you tell a mosquito bite from a bed bug bite?',
    answer: 'A mosquito bite is a single round, puffy welt that appears within minutes on skin left uncovered outdoors, while bed bug bites usually appear overnight in lines or tight clusters of three or four on skin that was against the mattress. Mosquito welts fade in 3 to 7 days; bed bug bites often take longer and keep reappearing night after night because the source is indoors. Location and pattern are the fastest tell: outdoors and scattered points to mosquitoes, indoors and lined up points to bed bugs.',
  },
  {
    question: 'Why do some mosquito bites last longer than others?',
    answer: 'Five factors explain almost every long-lasting bite. Scratching is the biggest — it releases fresh histamine and routinely turns a 3-day bite into 7 to 14 days. How sensitised your immune system is matters next: children and people new to a region react hardest and longest. A cluster of bites at once keeps the whole area inflamed longer than any single welt would. Bite location counts, because thin, loose skin like eyelids, ankles and the tops of the feet swells more and stays raised longer. And friction from a sock elastic, waistband, or watch strap re-irritates the bite every time you move.',
  },
  {
    question: 'How long do mosquito bites take to disappear?',
    answer: 'There are two answers. The bump disappears in 3 to 7 days, or up to two weeks for a strong allergic reaction. The mark can take several weeks to a few months, because that flat brown or pink spot is post-inflammatory pigmentation rather than an active bite. The practical test is whether you can feel it: a raised, itchy, warm bump is still reacting, while a flat, painless, discoloured patch has finished healing and is simply fading. Keeping the spot out of direct sun helps it even out faster.',
  },
  {
    question: 'What are the stages of mosquito bite healing?',
    answer: 'Mosquito bite healing runs through five stages. The bite itself is usually painless. An immediate pale, itchy welt rises within 5 to 20 minutes. A firmer, redder, delayed bump peaks 24 to 48 hours later and is the itchiest point. Between days 3 and 5 the swelling starts going down and the redness fades from the centre outward. Most bites are flat and no longer itchy by day 5 to 7. A flat discoloured mark may then remain for several weeks to a few months. Bites that were scratched open, or that swelled into a large local allergic reaction, run the same sequence roughly twice as slowly.',
  },
  {
    question: 'How long do mosquito bites last on a child?',
    answer: 'Children’s mosquito bites typically last longer than adults’ — commonly 5 to 10 days rather than 3 to 7 — because a child’s immune system has had the fewest previous exposures to mosquito saliva and reacts most strongly. A large local reaction in a young child can take up to about 10 days to heal completely. Mayo Clinic notes that these severe local reactions are most common in young children and in people newly exposed to a mosquito species. Keeping fingernails short and covering the bite shortens the timeline more than anything applied to it.',
  },
  {
    question: 'Are mosquito bites worse after 2 days?',
    answer: 'A bite getting worse on day two is normal — that is the delayed immune reaction peaking at 24 to 48 hours. A bite still getting worse on day three is not. The useful rule is direction of travel: a normal bite improves after about 48 hours, so a bite that is redder, hotter, more painful, or larger on day 3 than on day 2 should be looked at. Allergy and infection run on opposite clocks — an allergic reaction is worst within hours and then eases, while a bacterial infection escalates day over day. Mayo Clinic names increasing pain, a change in skin colour, and oozing as the signs to check.',
  },
  {
    question: 'Why is my mosquito bite still itching after a week?',
    answer: 'A bite still itching after seven days is outside the normal 3 to 7 day range but is usually still benign. Four causes account for nearly all of them: it has been scratched repeatedly, so the histamine reaction keeps restarting; it was a large local allergic reaction from the start, which can legitimately stay itchy for up to two weeks; the skin has been broken and become infected, which brings spreading redness, warmth, pain, or pus; or it was never a mosquito bite. A flat, discoloured, non-itchy mark at one week is not a bite that is lasting — it is post-inflammatory pigmentation and fades on its own.',
  },
  {
    question: 'Do mosquito bites last longer if you scratch them?',
    answer: 'Yes, substantially. Scratching triggers more histamine release and restarts the reaction you were waiting out. A bite left alone typically stops itching in 2 to 4 days and is gone in under a week; the same bite scratched repeatedly can stay inflamed for one to two weeks, is far more likely to leave a lasting discoloured mark, and can be broken open enough to let bacteria in. This is the one variable fully under your control, and it moves the timeline more than any product. Covering the bite with a plaster is more reliable than willpower.',
  },
  {
    question: 'What helps mosquito bites go away quicker?',
    answer: 'The fastest measures target histamine and the itch nerves rather than the puncture: a cold compress for about 10 minutes, 0.5% to 1% hydrocortisone cream, an oral antihistamine when you have several bites at once, and calamine lotion or a paste of baking soda and water — the last two are among the home remedies Mayo Clinic lists for insect bites. Covering the bite so it cannot be scratched shortens the timeline more than any of them. Keeping the fading mark out of direct sun stops post-inflammatory pigmentation from lingering. Antibiotic ointment on an uninfected bite does nothing.',
  },
  {
    question: 'How long after a mosquito bite do West Nile symptoms appear?',
    answer: 'The Public Health Agency of Canada describes West Nile virus symptoms appearing 2 to 14 days after an infected mosquito bite, and also notes that most people who are infected never develop symptoms at all. Because the bite and any illness are separated by more than a week in most cases, people rarely connect the two — so if you develop fever, headache, or body aches in the one to two weeks after being bitten, tell your doctor when and where the bites happened. In Ontario, West Nile is carried by Culex mosquitoes, which feed most heavily at dusk and dawn from July into September.',
  },
  {
    question: 'Do mosquito bites last longer than bed bug bites?',
    answer: 'No — mosquito bites are the shorter of the two. A mosquito welt appears on uncovered skin, is itchiest at 24 to 48 hours, and is essentially finished within 3 to 7 days. Bed bug bites appear on skin that was against the mattress, often take one to two weeks, and keep arriving night after night because the source is indoors. That recurrence, more than the appearance of any single bite, is what settles it: outdoors, scattered and gone in a week points to mosquitoes; indoors, lined up and repeating points to bed bugs.',
  },
  {
    question: 'Can a mosquito bite cause Lyme disease?',
    answer: 'No. The Public Health Agency of Canada attributes Lyme disease to blacklegged (deer) ticks, not mosquitoes. The relevant red flag is an expanding bull’s-eye rash spreading outward in a ring over days, which points to a tick bite rather than a mosquito bite and warrants medical assessment. Mosquitoes in Ontario are associated with West Nile virus instead, with symptoms appearing 2 to 14 days after an infected bite. If a mark is growing outward rather than shrinking, have it assessed rather than treating it as a slow-healing mosquito bite.',
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
          <p className="text-sm text-gray-700 leading-relaxed mt-4">In plain language: the bite itself takes seconds and is usually painless. An itchy welt appears 5 to 20 minutes later. The bump is firmest and itchiest 24 to 48 hours after the bite. A normal mosquito bite settles within 3 to 7 days. A strong allergic reaction can stay swollen and itchy for up to two weeks. A flat brown or pink mark can remain for several weeks after the itch has gone.</p>
          <p className="text-xs text-gray-500 mt-3">General timeline; individual reactions vary. Educational information aligned with public-health guidance from the Public Health Agency of Canada (PHAC) and the U.S. Centers for Disease Control and Prevention (CDC) &mdash; not a substitute for medical advice.</p>
        </div>
      </section>

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} />

          <h2>Why do mosquito bites itch?</h2>
          <p>Mosquito bites itch because your immune system reacts to proteins in the mosquito&rsquo;s saliva, not because of the puncture. Mast cells release histamine, which leaks fluid into the skin and fires the nerve endings that signal itch. The U.S. Centers for Disease Control and Prevention (CDC) describes the result as a puffy, reddish bump that turns harder and itchier a day later.</p>
          <Figure
            src="/diagrams/mosquito-bite-mechanism.svg"
            alt="Diagram showing how a mosquito pierces skin with six mouthparts, injects saliva, and why the immune reaction to that saliva causes the itch"
            caption="The itch is an immune reaction to mosquito saliva, not to the puncture. She injects it first to stop your blood clotting, which is also why you rarely feel the bite happening."
            width={720}
            height={420}
            priority
          />
          <p>Mosquito bites itch because of an allergic reaction to the mosquito&rsquo;s saliva &mdash; not because of the tiny puncture wound. When a female mosquito feeds, she injects a small amount of saliva loaded with anticoagulant and other proteins that stop your blood from clotting so she can drink freely. Your immune system flags those proteins as foreign invaders and orders specialized cells (mast cells) to release <strong>histamine</strong>. Histamine is the chemical behind the whole reaction: it widens local blood vessels, makes them leak fluid into the surrounding skin, and stimulates the nerve endings that report itch to your brain.</p>
          <p>That is why the classic mosquito welt is red, raised, and maddeningly itchy all at once &mdash; it is your body&rsquo;s defence system overreacting to a harmless bit of insect spit. And it is why the treatments that actually work target the histamine, not the bite: antihistamines and 1% hydrocortisone calm the immune reaction, while picking at the puncture does nothing. Our companion guide on <Link href="/blog/mosquito-bite-treatment-relief">how to stop a mosquito bite from itching</Link> walks through exactly what to reach for.</p>

          <h2>Why are mosquito bites itchy for some people and not others?</h2>
          <p>Sensitivity to mosquito saliva differs from person to person and shifts over a lifetime. People bitten thousands of times often become desensitized and barely react, while children and newcomers to a region react hardest. Mayo Clinic notes that severe reactions are most common in young children and in people newly exposed to a mosquito species. Being bitten more and reacting more are two separate things.</p>
          <p>Your reaction depends on how sensitized your immune system is to the specific saliva proteins of the mosquitoes biting you &mdash; and that changes over a lifetime. Allergists describe a rough sequence people move through with repeated exposure: at first no reaction at all, then a delayed itchy bump a day later, then both an immediate welt and a delayed bump, and finally &mdash; after enough bites &mdash; the reaction fades and many people barely respond. This is why long-time residents of a cottage often shrug off bites that leave visitors covered in welts.</p>
          <p>Children tend to react most strongly because they have had the fewest bites, and people who move to a new region can flare up for a season or two before their immune systems adjust to the local species. Genetics and overall immune status matter too. None of this changes how <em>attractive</em> you are to mosquitoes in the first place &mdash; that is a separate question we cover in <Link href="/blog/what-attracts-mosquitoes-to-you">what attracts mosquitoes to you</Link>.</p>

          <h2>What happens when a mosquito bites you?</h2>
          <p>A biting mosquito is always a female, and she is after blood protein for her eggs. She pierces the skin with a needle-like proboscis, injects saliva that stops your blood clotting, and feeds for up to about 60 seconds. Everything you feel afterwards &mdash; itch, welt, swelling &mdash; is your immune reaction to the saliva she left behind, not damage from the puncture.</p>
          <p>Only female mosquitoes bite, because they need protein from a blood meal to develop their eggs. When one lands on you, she uses a slender mouthpart called a proboscis to probe through the skin until she finds a small blood vessel. As she draws blood &mdash; a process that can take up to a minute &mdash; she pumps saliva into the wound to keep the blood flowing and the vessel relaxed. When she is full, she flies off, leaving that saliva behind in your skin.</p>
          <p>The bite itself is usually painless, which is why you often do not notice it happening. Everything you feel afterward &mdash; the itch, the welt, the swelling &mdash; is your immune response to the leftover saliva, not damage from the puncture. That delay is exactly why you tend to discover mosquito bites after the fact, sometimes clustered on ankles, wrists, and other spots where skin is thin and blood vessels sit close to the surface.</p>

          <h2>How long do mosquito bites last (and how long do they itch)?</h2>
          <p>Most mosquito bites last 3 to 7 days and itch for about 2 to 4 days. The itch peaks 24 to 48 hours after the bite, then fades as your body clears the histamine. A strong allergic reaction can stay swollen and itchy for up to two weeks. Scratching adds days to either timeline, and a flat mark can remain for several weeks afterwards.</p>
          <p>Most mosquito bites last 3 to 7 days and itch worst in the first 24 to 48 hours. The welt rises quickly, peaks as the delayed part of the immune reaction kicks in on the second day, then gradually flattens and stops itching as your body clears the histamine. For a routine bite that you leave alone, the itch is usually mostly gone within 2 to 4 days.</p>
          <p>Two things stretch that timeline out. A strong allergic reaction can keep a bite swollen and itchy for a week or two. And scratching &mdash; the most tempting and most counterproductive response &mdash; releases fresh histamine, re-inflames the skin, and can break the surface, which both prolongs the itch and opens the door to infection. Even after the bump is gone, a flat brown or pinkish mark (post-inflammatory pigmentation) can linger for several weeks, especially on darker skin or where a bite was scratched raw. The single best thing you can do to make a bite go away faster is to not scratch it.</p>

          <h2>Why do some mosquito bites last longer than others?</h2>
          <p>Two bites from the same evening can be gone in three days and still itching in ten. The difference is rarely the mosquito &mdash; it is scratching, how sensitised your immune system already is, how many bites landed at once, where on the body the bite sits, and whether clothing keeps rubbing it. Those five factors explain almost every unusually long-lasting bite.</p>

          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Factor</th>
                  <th className="px-3 py-2 text-left">Effect on how long the bite lasts</th>
                  <th className="px-3 py-2 text-left">What helps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Scratching', 'The biggest single factor — routinely turns a 3-day bite into 7–14 days, and is the main route to infection and a lasting mark', 'Cold compress, 1% hydrocortisone, an oral antihistamine, or simply covering the bite with a plaster so fingers cannot reach it'],
                  ['How sensitised you are', 'Children and people newly arrived in a region react hardest and longest; long-term residents often settle in 2–3 days', 'Nothing to fix — the reaction shrinks naturally with years of exposure'],
                  ['Several bites at once', 'A cluster of bites keeps total histamine high, so the whole area stays inflamed longer than any single bite would', 'Treat the whole area at once; an oral antihistamine works better than spot-treating six welts'],
                  ['Where the bite is', 'Thin, loose skin — eyelids, ankles, tops of feet, backs of hands — swells far more and stays raised longer than skin on the forearm', 'Cold compress and elevation on ankles and feet, where gravity keeps the fluid in place'],
                  ['Friction from clothing', 'A bite under a sock elastic, waistband, bra strap, or watch strap is re-irritated every time you move, which restarts the itch cycle', 'Loose clothing over the spot until the welt flattens'],
                  ['Broken skin', 'Once the surface is broken the timeline is no longer a bite timeline — a bacterial infection gets worse day over day instead of better', 'Clean it, keep it covered, and see a healthcare provider if redness or pain is spreading'],
                  ['Sun on the fading mark', 'UV darkens post-inflammatory pigmentation, so the flat brown spot left behind lingers weeks longer', 'Keep the healing spot covered or shaded until the colour has evened out'],
                ].map(([factor, effect, help]) => (
                  <tr key={factor} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{factor}</td>
                    <td className="px-3 py-2 text-gray-700">{effect}</td>
                    <td className="px-3 py-2 text-gray-700">{help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The cluster factor is worth spelling out, because people routinely assume a bad night means one relentless mosquito. It often does &mdash; a single interrupted female will return and feed again, which is why bites arrive in threes and fours. We work through that in <Link href="/blog/how-many-times-can-a-mosquito-bite-you">how many times one mosquito can bite you</Link>, and it matters here because the more welts you are carrying at once, the longer the whole area stays inflamed.</p>

          <h2>How long does it take for mosquito bites to stop itching?</h2>
          <p>A mosquito bite you leave alone usually stops itching in 2 to 4 days. The itch is at its sharpest somewhere between hour 24 and hour 48, when the delayed part of the immune reaction arrives, then tapers off as your body clears the histamine. By day three most people notice the bite only when something brushes it.</p>
          <p>That figure assumes you are not scratching. Every scratch releases fresh histamine into the skin and restarts the reaction from the beginning, which is why a bite that is picked at can stay actively itchy for a week or more. If the itch is stopping you sleeping, the fastest interventions are the ones aimed at histamine rather than at the bite: an oral antihistamine, 1% hydrocortisone cream, and a cold compress to numb the nerve endings while the cream works.</p>

          <h2>How long do mosquito bites take to disappear?</h2>
          <p>There are two answers, and mixing them up is why people think their bite is dragging on. The <strong>bump</strong> disappears in 3 to 7 days &mdash; up to two weeks for a strong allergic reaction. The <strong>mark</strong> can take several weeks to a few months, because that flat brown or pink spot is post-inflammatory pigmentation, not a bite that is still going.</p>
          <p>The practical test is whether you can feel it. A raised, itchy, warm bump is still an active reaction. A flat, painless, discoloured patch is finished healing and is simply fading. If a bite has flattened and stopped itching but the colour remains, nothing is wrong and nothing needs treating &mdash; keep it out of direct sun and it will even out on its own.</p>

          <h2>Stages of mosquito bite healing, day by day</h2>
          <p>Mosquito bite healing runs through five stages: the painless bite itself, an immediate welt at 5 to 20 minutes, a firmer delayed bump peaking at 24 to 48 hours, flattening and fading between days 3 and 7, and a flat discoloured mark that clears over the following weeks.</p>
          <ul>
            <li><strong>Day 0, the first hour.</strong> The bite is usually painless. A pale, soft, itchy welt rises within about 5 to 20 minutes as histamine leaks fluid into the skin.</li>
            <li><strong>Day 1 to 2, the peak.</strong> Immune cells arrive and the welt becomes firmer, redder, and hotter. This delayed phase is the itchiest point for most people &mdash; a bite that seemed trivial at bedtime is often worst the next morning.</li>
            <li><strong>Day 3 to 5, the turn.</strong> Swelling starts to go down and the redness fades from the centre outward. A normal bite should be clearly <em>improving</em> by now; this is the point where a bite that is still getting worse stops being a normal bite.</li>
            <li><strong>Day 5 to 7, resolution.</strong> The bump flattens and the itch stops. Most mosquito bites are finished here.</li>
            <li><strong>Week 2 and beyond, the aftermark.</strong> A flat brown, pink, or greyish patch of post-inflammatory pigmentation may remain and fades over several weeks to a few months, more slowly on darker skin tones and on bites that were scratched.</li>
          </ul>
          <p>Bites that were scratched open, or that swelled into a large local allergic reaction, run this sequence roughly twice as slowly &mdash; expect up to two weeks rather than one.</p>

          <h2>How long do mosquito bites last on a child?</h2>
          <p>Children&rsquo;s mosquito bites typically last longer than adults&rsquo; &mdash; commonly 5 to 10 days rather than 3 to 7 &mdash; because a child&rsquo;s immune system has had the fewest previous exposures to mosquito saliva and mounts the strongest reaction. A large local reaction in a young child can take up to about 10 days to heal completely.</p>
          <p>Mayo Clinic notes that the severe local reactions sometimes called skeeter syndrome are most common in young children and in people newly exposed to a mosquito species, which is exactly the combination most parents are dealing with in a first or second summer. A toddler&rsquo;s bite that swells to the size of a loonie, feels hot and firm, and appears within hours of being outside is usually this allergic reaction rather than an infection &mdash; alarming to look at, and not dangerous in itself.</p>
          <p>Two things shorten a child&rsquo;s bite more than anything applied to it: keeping fingernails short, and covering the bite so it cannot be scratched. For prevention, Health Canada&rsquo;s repellent guidance is age-banded rather than one-size-fits-all &mdash; no DEET at all under 6 months, up to 10% DEET for children aged 6 months to 12 years, and icaridin (the Canadian name for picaridin) at 20% permitted from 6 months of age. We set the products against those age bands in <Link href="/blog/best-bug-spray-for-kids-canada">the best bug spray for kids in Canada</Link>. If a child&rsquo;s bite comes with a fever, spreading redness, or swelling that is still growing after two days, see a healthcare provider.</p>

          <h2>Do mosquito bites last longer if you scratch them?</h2>
          <p>Yes, substantially. Scratching mechanically triggers more histamine release, which restarts the reaction you were waiting out. A bite left alone typically stops itching in 2 to 4 days and is gone in under a week; the same bite scratched repeatedly can stay inflamed for one to two weeks, is far more likely to leave a lasting discoloured mark, and can be broken open enough to let bacteria in.</p>
          <p>This is the one variable on the whole page that is fully under your control, and it moves the timeline more than any product. If willpower is not enough &mdash; and at 2am it usually is not &mdash; the reliable trick is physical: cover the bite with a plaster or a light dressing so a sleeping hand cannot reach it.</p>

          <h2>What helps mosquito bites go away quicker?</h2>
          <p>The fastest-acting measures target histamine and the itch nerves, not the puncture: a cold compress for about 10 minutes, 0.5% to 1% hydrocortisone cream, an oral antihistamine, and calamine lotion or a paste of baking soda and water &mdash; the last two are among the home remedies Mayo Clinic lists for insect bites. Above all, do not scratch, which is what actually determines whether the bite takes three days or ten.</p>
          <ul>
            <li><strong>Cold, first.</strong> A cold compress or a cloth-wrapped ice pack held on for around 10 minutes constricts the leaky blood vessels and numbs the nerve endings reporting the itch. It works within seconds and can be repeated.</li>
            <li><strong>Hydrocortisone 0.5&ndash;1%.</strong> An over-the-counter steroid cream calms the inflammation driving the swelling. Apply thinly, a few times a day, on unbroken skin.</li>
            <li><strong>An oral antihistamine.</strong> Better than any cream when you are dealing with a cluster of bites rather than one, since it works on the whole reaction at once.</li>
            <li><strong>Calamine lotion or baking-soda paste.</strong> Both are listed by Mayo Clinic among its home remedies for insect bites and stings; they soothe the surface itch without a steroid.</li>
            <li><strong>Cover it.</strong> A plaster over the bite removes the scratching variable entirely, which shortens the timeline more than anything on this list.</li>
            <li><strong>Keep the fading mark out of the sun.</strong> UV darkens post-inflammatory pigmentation and makes the leftover spot last weeks longer.</li>
          </ul>
          <p>What does not speed anything up: antibiotic ointment on a bite that is not infected, heat, or squeezing the welt. Our full step-by-step, including what to reach for at 2am, is in <Link href="/blog/mosquito-bite-treatment-relief">the mosquito bite treatment guide</Link>.</p>

          <h2>Do mosquito bites leave marks or scars?</h2>
          <p>Mosquito bites rarely leave true scars. What lingers is post-inflammatory pigmentation &mdash; a flat brown, pink, or greyish mark that fades over several weeks to a few months and shows longer on darker skin. Permanent marks come from scratching deep enough to break the skin. The U.S. Centers for Disease Control and Prevention (CDC) advises against scratching bites, because breaking the skin surface can lead to infection.</p>
          <p>Most mosquito bites do not scar, because the reaction plays out in the upper layers of the skin and heals without damaging the deeper tissue that forms true scars. What people usually notice weeks later is a flat brown, pink, or greyish spot called <strong>post-inflammatory pigmentation</strong> &mdash; the skin&rsquo;s temporary response to inflammation, not a scar. These marks fade on their own over several weeks to a few months and are more noticeable, and slower to clear, on darker skin tones.</p>
          <p>True scarring almost always comes from the same culprit that causes infection: scratching. Digging at a bite hard enough to break the skin, or picking at the scab that forms, can damage deeper skin and leave a small permanent mark. Two simple habits keep bites from leaving anything behind &mdash; resist the urge to scratch, and keep the healing spot out of strong sun, since UV exposure darkens post-inflammatory marks and makes them linger. If a bite mark is raised, growing, or changing long after the itch is gone, mention it to a healthcare provider.</p>

          <h2>Why are mosquito bites worse at night?</h2>
          <p>Mosquito bites feel worse at night because the body&rsquo;s own brake on itching relaxes after dark. Cortisol, your natural anti-inflammatory hormone, falls to its lowest overnight, while skin temperature and water loss rise &mdash; all of which amplify itch. A quiet, dark room also leaves your brain nothing else to notice.</p>
          <p>If your bites seem to flare the moment your head hits the pillow, you are not imagining it &mdash; several factors line up against you at night. The leading explanation is your body clock: levels of cortisol, your body&rsquo;s own anti-inflammatory hormone, fall to their lowest point overnight, so there is less natural braking on the itch. Researchers studying nocturnal itch have also noted that skin temperature rises and the skin loses more water in the evening, both of which are known to intensify the sensation of itching.</p>
          <p>On top of the biology, there is attention. During the day, work, movement, and a hundred small distractions crowd out the itch; lying still in a quiet, dark room, your brain has nothing else to focus on, so the same signal feels much stronger. Timing plays a part too &mdash; many Ontario mosquitoes, including the <em>Culex</em> species tied to West Nile virus, feed most at dusk, so bites collected at a summer-evening barbecue are often reaching peak itch right at bedtime.</p>

          <div className="not-prose my-8 rounded-xl bg-emerald-50 border border-emerald-200 p-5">
            <p className="text-sm text-gray-800 leading-relaxed"><strong className="text-emerald-800">Quick relief note:</strong> a cold compress numbs the itch nerves fast, and 1% hydrocortisone or an oral antihistamine calms the histamine reaction. We keep the full step-by-step in <Link href="/blog/mosquito-bite-treatment-relief" className="text-emerald-700 underline font-semibold">our bite-treatment guide</Link> &mdash; this page is about the <em>why</em>, that one is about the <em>fix</em>.</p>
          </div>

          <h2>Why do mosquito bites swell up &mdash; and why is mine so big?</h2>
          <p>Mosquito bite swelling is leaked fluid, not infection. Histamine makes nearby blood vessels leaky, so plasma seeps into the skin and lifts a firm welt called a wheal. The stronger your immune reaction to the saliva, the bigger the welt. A bite that swells past about 5 cm (2 inches) and turns hot and hard is a large local allergic reaction, not a bacterial one.</p>
          <p>The swelling is simply fluid. When histamine makes the blood vessels around the bite leaky, plasma seeps out into the skin and raises a firm, puffy welt called a wheal. The stronger your immune reaction to the saliva proteins, the more histamine floods the area and the bigger the swelling gets. That is why the same person can have a pinprick bump on one arm and a swollen lump on an ankle or eyelid, where the skin is thin and looser and puffs up more dramatically.</p>
          <p>Ankles collect more of those welts in the first place, too. Exhaled carbon dioxide is denser than air and pools near the ground, which is exactly where low-flying <em>Aedes</em> species hunt — the reason behind it is in <Link href="/blog/why-do-mosquitoes-bite-my-ankles">why mosquitoes go for your ankles</Link>.</p>
          <p>When a bite swells into a large, hot, hard, red patch several centimetres across &mdash; sometimes with blistering or a low-grade fever, usually within hours &mdash; that is a strong localized allergic reaction often nicknamed <strong>skeeter syndrome</strong>. It is most common in young children and in people newly exposed to an area&rsquo;s mosquitoes. It looks alarming and is easy to mistake for an infection, but it is an allergy, not bacteria, and it typically settles with cold compresses, antihistamines, and hydrocortisone. Because infection and a big allergic reaction can look similar, it is worth reading <Link href="/blog/when-to-worry-about-a-mosquito-bite">when to worry about a mosquito bite</Link> to tell them apart.</p>

          <h2>Do mosquito bites itch more the next day?</h2>
          <p>Yes &mdash; for many people the second day is the worst. A mosquito bite produces two waves: an immediate welt within 5 to 20 minutes, then a delayed reaction that peaks 24 to 48 hours later. Mayo Clinic describes that delayed stage as a hard, itchy, reddish-brown bump appearing a day or so after the bite.</p>
          <p>For a lot of people, yes. The mosquito-bite reaction commonly comes in two waves: an <strong>immediate</strong> welt within minutes, driven by the first histamine release, and a <strong>delayed</strong> reaction that builds over the following 24 to 48 hours as immune cells migrate to the site and stir up deeper inflammation. That delayed phase is often the itchiest, which is why a bite that seemed trivial at bedtime can be at its worst the next morning. As you accumulate lifelong exposure to local mosquitoes, the delayed wave tends to shrink, and eventually many people are left with only the brief immediate welt &mdash; or no reaction at all.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">The only bite that never itches is the one you never get</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Understanding the itch is useful; having fewer bites to treat is better. A professional barrier spray knocks down the adult mosquitoes resting in your shrubs, shade, and fence lines for weeks at a time. BuzzSkito protects GTA yards with single treatments from $99 and seasonal plans.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/mosquito-control" className="btn-primary-sm">Explore Mosquito Control &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>How soon after a mosquito bite does it start to itch?</h2>
          <p>A mosquito bite usually starts to itch 5 to 20 minutes after the mosquito feeds. The CDC describes a puffy, reddish bump appearing a few minutes after the bite, followed a day or so later by a harder, itchier, reddish-brown one. The bite itself is normally painless, so most people never feel the mosquito and only find the welt afterwards.</p>
          <p>If nothing shows up in the first hour, that does not mean you escaped. The delayed half of the reaction can surface the next morning as a firm bump, which is why bites collected at an evening barbecue are often discovered at breakfast.</p>

          <h2>Why does scratching a mosquito bite make it itch more?</h2>
          <p>Scratching releases more histamine into the skin and restarts the exact reaction that caused the itch. It also irritates the nerve endings that report itch to the brain, setting up a self-feeding itch&ndash;scratch cycle. A bite left alone typically stops itching in 2 to 4 days; a bite you keep scratching can stay irritated for a week or more.</p>
          <p>Scratching is also the single biggest cause of the two outcomes people actually mind: infection, when a fingernail breaks the skin surface and lets bacteria in, and a lasting discoloured mark. The U.S. Centers for Disease Control and Prevention (CDC) advises against scratching bites for this reason. A cold compress interrupts the cycle without doing either.</p>

          <h2>How long does a mosquito bite stay swollen?</h2>
          <p>A normal mosquito bite stays swollen for about 1 to 3 days and flattens as the histamine clears. A large local allergic reaction &mdash; a hot, firm patch 5 cm (about 2 inches) or wider &mdash; can stay raised for up to two weeks. The swelling is leaked plasma rather than pus, so it settles on its own once the immune reaction fades. Mayo Clinic notes that these larger reactions are most common in young children and in people newly exposed to a mosquito species.</p>

          <h2>What is skeeter syndrome?</h2>
          <p>Skeeter syndrome is the informal name for a large local allergic reaction to mosquito saliva. Instead of a small welt, the skin swells into a hot, red, firm patch 5 cm (about 2 inches) or wider within hours of the bite, sometimes with blistering or a low-grade fever. Mayo Clinic notes these severe reactions are most common in young children.</p>
          <p>It is an allergy, not an infection &mdash; the two look similar because both produce heat, redness, and swelling. The practical difference is timing: an allergic reaction is at its worst within hours and then improves, while an infection keeps getting worse after the first day or two.</p>

          <h2>Do only female mosquitoes bite?</h2>
          <p>Only female mosquitoes bite. They need the protein and iron in a blood meal to develop their eggs, so biting is a reproductive requirement rather than a food source. Male mosquitoes feed entirely on flower nectar and plant sugars and cannot pierce skin. Every itchy welt you have ever had came from a female.</p>

          <h2>When are mosquito bites worst in Ontario?</h2>
          <p>Mosquito season in Ontario runs from May through September, and bites peak in June and July once spring rain and warm nights have produced the largest broods. Public Health Ontario runs West Nile virus mosquito surveillance each summer, and the <em>Culex</em> species that carry the virus feed most heavily at dusk and dawn from July into September.</p>
          <p>In the GTA that peak sits squarely over backyard season, which is why <Link href="/mosquito-control">barrier treatments here</Link> are scheduled across May to September rather than booked as one-off visits after the bites have already started.</p>

          <h2>Are mosquito bites worse after 2 days? The day-3 rule</h2>
          <p>A mosquito bite getting worse on day two is normal &mdash; that is the delayed immune reaction peaking at 24 to 48 hours. A bite still getting worse on day three is not. The single most useful thing to know about bite timing is the direction of travel: a normal bite improves after about 48 hours, so <strong>a bite that is redder, hotter, more painful, or larger on day 3 than it was on day 2 is the signal to have it looked at</strong>.</p>
          <p>That rule works because allergy and infection run on opposite clocks. A large local allergic reaction is at its worst within hours to a day and then eases; a bacterial skin infection is mild at first and escalates day over day. Mayo Clinic names the signs to check for alongside the timing &mdash; increasing pain, a change in skin colour around the site, and oozing &mdash; and pain in particular is telling, because a normal mosquito bite itches rather than hurts.</p>
          <p>Put together, the practical version is: <em>peaks at 48 hours then improves</em> is a bite; <em>keeps escalating past 72 hours</em>, or hurts more than it itches, or comes with a fever, is a reason to see a healthcare provider. We break the visual signs down side by side in <Link href="/blog/when-to-worry-about-a-mosquito-bite">when to worry about a mosquito bite</Link>.</p>

          <h2>My mosquito bite is still itching after a week &mdash; what now?</h2>
          <p>A bite still itching after seven days is outside the normal 3 to 7 day range but is usually still benign. Four things account for nearly all of them: it has been scratched repeatedly, it was a large local allergic reaction from the start, the skin has been broken and become infected, or it was never a mosquito bite.</p>
          <ul>
            <li><strong>It has been scratched.</strong> By far the most common answer. Each scratch restarts the histamine reaction, so the clock never gets a chance to run out. Cover it, and the itch usually resolves within a couple of days.</li>
            <li><strong>It was a large local reaction.</strong> A hot, firm patch 5 cm (about 2 inches) or wider can legitimately stay itchy and raised for up to two weeks. It should be shrinking, even if slowly. Antihistamines and hydrocortisone are the right tools.</li>
            <li><strong>It is infected.</strong> Spreading redness, warmth, increasing pain, pus, or red streaks &mdash; particularly with a fever &mdash; mean this is no longer a bite reaction. See a healthcare provider; in Ontario, Health Connect Ontario at 811 can advise on urgency.</li>
            <li><strong>It is not a mosquito bite.</strong> Bites that persist for weeks, recur nightly, arrive in lines, or cluster where clothing sits tight are usually something else. Compare against <Link href="/blog/bed-bug-bites-vs-mosquito-bites">bed bug bites versus mosquito bites</Link> and <Link href="/blog/chigger-bites">chigger bites</Link> before assuming a mosquito.</li>
          </ul>
          <p>A flat, discoloured, <em>non-itchy</em> mark at the one-week point is a different thing entirely and is not a bite that is lasting &mdash; it is post-inflammatory pigmentation, and it fades on its own over weeks.</p>

          <h2>How long after a mosquito bite would disease symptoms appear?</h2>
          <p>Mosquito-borne illness does not follow the bite immediately &mdash; there is an incubation period of days to weeks. In Ontario the one to know is <strong>West Nile virus</strong>, which the Public Health Agency of Canada describes as producing symptoms 2 to 14 days after an infected bite, though it also notes that most people infected never develop symptoms at all. Everything else on the list below is travel-acquired in Canada rather than picked up in a GTA backyard.</p>

          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm min-w-[620px]">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Illness</th>
                  <th className="px-3 py-2 text-left">Mosquito group</th>
                  <th className="px-3 py-2 text-left">Symptoms appear</th>
                  <th className="px-3 py-2 text-left">Relevance in Canada</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['West Nile virus', 'Culex', '2–14 days', 'Locally acquired in southern Ontario, including the GTA; Public Health Ontario runs mosquito surveillance each summer'],
                  ['Eastern equine encephalitis', 'Culiseta, Aedes', '4–10 days', 'Rare but present in parts of Ontario and Quebec'],
                  ['Dengue', 'Aedes', '4–10 days', 'Travel-acquired — the Aedes species that spread it are not established here'],
                  ['Zika virus', 'Aedes', '3–14 days', 'Travel-acquired; Health Canada issues travel advice for pregnancy'],
                  ['Chikungunya', 'Aedes', '3–7 days', 'Travel-acquired'],
                  ['Malaria', 'Anopheles', '7 days to several months', 'Travel-acquired; Canada has been free of locally transmitted malaria for decades'],
                  ['Yellow fever', 'Aedes', '3–6 days', 'Travel-acquired; vaccine-preventable'],
                ].map(([illness, genus, onset, relevance]) => (
                  <tr key={illness} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{illness}</td>
                    <td className="px-3 py-2 text-gray-700 whitespace-nowrap"><em>{genus}</em></td>
                    <td className="px-3 py-2 text-gray-700 whitespace-nowrap">{onset}</td>
                    <td className="px-3 py-2 text-gray-700">{relevance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Incubation ranges as described by the Public Health Agency of Canada, Health Canada travel health notices, and the U.S. Centers for Disease Control and Prevention. Educational information only.</p>
          <p>The timing matters because the bite and the illness are separated by more than a week in most cases, so people rarely connect the two. If you develop fever, headache, body aches, or a rash in the one to two weeks after being bitten &mdash; or after returning from travel &mdash; tell the doctor when and where you were bitten. Our Ontario-specific rundown is in <Link href="/blog/west-nile-virus-symptoms">West Nile virus symptoms</Link>.</p>
          <p>One red flag that is <em>not</em> a mosquito problem: an expanding <strong>bull&rsquo;s-eye rash</strong>. That pattern points to Lyme disease, which the Public Health Agency of Canada attributes to blacklegged (deer) ticks &mdash; mosquitoes do not transmit Lyme disease. If a mark is spreading outward in a ring over days rather than shrinking, read <Link href="/blog/tick-bite-vs-mosquito-bite">tick bite versus mosquito bite</Link> and <Link href="/blog/lyme-disease-symptoms-guide">the Lyme disease symptoms guide</Link>, and see a healthcare provider.</p>

          <h2>When a mosquito bite is more than just an itch</h2>
          <h3>When should you see a doctor about a mosquito bite?</h3>
          <p>See a healthcare provider if a bite shows spreading redness, growing warmth, increasing pain, pus, or red streaks trailing from the site, especially with a fever &mdash; those point to infection rather than a normal reaction. Call 911 for hives away from the bite, swelling of the lips or face, dizziness, or trouble breathing, which can signal anaphylaxis.</p>
          <p>The vast majority of mosquito bites are harmless and heal on their own. But a few signs mean it is time to stop watching and see a healthcare provider. Get medical care if a bite shows signs of <strong>infection</strong> &mdash; spreading redness, warmth, increasing pain, pus, or red streaks trailing from the site, especially with a fever &mdash; which usually follows scratching that breaks the skin. Seek urgent care for any whole-body allergic reaction, such as hives away from the bite, swelling of the lips or face, dizziness, or trouble breathing; that can be anaphylaxis, and in an emergency you should call 911.</p>
          <p>The Public Health Agency of Canada also notes that mosquitoes in parts of Ontario can carry <strong>West Nile virus</strong>, so fever, headache, or body aches in the days after being bitten are worth mentioning to a doctor. For a full walkthrough of the warning signs versus a normal reaction, see <Link href="/blog/when-to-worry-about-a-mosquito-bite">when to worry about a mosquito bite</Link>. And if you are not certain a mark even came from a mosquito, comparing it against <Link href="/blog/why-mosquitoes-bite-some-people-more">why mosquitoes bite some people more than others</Link> can help you rule things in or out.</p>

          <p className="text-sm text-gray-500 italic mt-6">This article is general educational information and is not medical advice. It does not diagnose or treat any condition. For any bite that concerns you &mdash; or any symptom that is severe, spreading, or accompanied by fever or difficulty breathing &mdash; contact a healthcare provider, or call 911 in an emergency.</p>

          <h2>Mosquito Bite vs Other Bites</h2>
          <p>A mosquito bite is a single round, puffy welt that appears within minutes on uncovered skin and fades in 3 to 7 days, while bed bug bites arrive overnight in lines or clusters, flea bites cluster as small red dots on the lower legs and ankles, chigger bites cluster where clothing sits tight against the skin, and no-see-um bites burn far out of proportion to their size.</p>
          <p>If a bite does not itch, swell, or heal the way this page describes, it may not be a mosquito at all. When bites arrive in lines or clusters, blister, or itch far out of proportion to their size, compare them against these common look-alikes:</p>
          <ul>
            <li><Link href="/blog/bed-bug-bites">Bed bug bites</Link> &mdash; often appear in lines or clusters on skin exposed while you sleep.</li>
            <li><Link href="/blog/chigger-bites">Chigger bites</Link> &mdash; intensely itchy welts that cluster around the ankles, waistband, and other snug spots.</li>
            <li><Link href="/blog/flea-bites-on-humans">Flea bites on humans</Link> &mdash; small red dots, usually grouped on the lower legs and ankles.</li>
            <li><Link href="/blog/no-see-um-bites">No-see-um bites</Link> &mdash; tiny biting midges that leave a burning, disproportionately itchy welt.</li>
            <li><Link href="/blog/mosquito-bite-vs-spider-bite">Mosquito bite vs spider bite</Link> &mdash; how to tell a harmless welt from a bite worth watching.</li>
          </ul>

          <h2>How long do other bites last, compared with a mosquito bite?</h2>
          <p>Duration is one of the most reliable ways to tell bites apart, and it is the reason so many people searching &ldquo;how long do mosquito bites last&rdquo; are actually looking at something else. Mosquito bites are the <em>short</em> ones. If a bite is still going strong at day ten, or new ones keep appearing every morning, the duration itself is the clue.</p>

          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Bite</th>
                  <th className="px-3 py-2 text-left">Typically lasts</th>
                  <th className="px-3 py-2 text-left">The giveaway</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mosquito', '3–7 days (up to 2 weeks if strongly allergic)', 'One round puffy welt on uncovered skin, itchiest at 24–48 hours, then improving'],
                  ['Bed bug', 'Often 1–2 weeks, and new ones appear night after night', 'Lines or tight clusters on skin that was against the mattress; the source is indoors, so it recurs'],
                  ['Flea', 'Roughly 1–2 weeks', 'Small red dots grouped on the lower legs and ankles, usually where a pet has been'],
                  ['Chigger', 'Itch peaks at 1–2 days; welts can persist 1–2 weeks', 'Clusters exactly where clothing sits tight — sock line, waistband'],
                  ['No-see-um (biting midge)', 'Itch for several days; marks can linger 1–2 weeks', 'A burn far out of proportion to a nearly invisible bite, often at dusk near water'],
                  ['Tick', 'The attachment mark is minor; a spreading rash can develop over days to weeks', 'The tick may still be attached; an expanding bull’s-eye rash needs medical assessment'],
                ].map(([bite, lasts, tell]) => (
                  <tr key={bite} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{bite}</td>
                    <td className="px-3 py-2 text-gray-700">{lasts}</td>
                    <td className="px-3 py-2 text-gray-700">{tell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Typical ranges for otherwise healthy adults; individual reactions vary widely. General educational information, not a diagnosis.</p>
          <p>The single most useful contrast here is the first two rows. Mosquito welts appear on skin that was uncovered outdoors and are essentially finished inside a week; bed bug bites appear on skin that was covered in bed, take longer, and &mdash; crucially &mdash; keep arriving each night because the source is in the room with you. That recurrence, more than the look of any one bite, is what settles it. We put them side by side in <Link href="/blog/bed-bug-bites-vs-mosquito-bites">bed bug bites vs mosquito bites</Link>, and against the bite people most often fear in <Link href="/blog/tick-bite-vs-mosquito-bite">tick bite vs mosquito bite</Link>.</p>

          <h2>Fewer bites to wait out: what Health Canada actually registers</h2>
          <p>Every timeline on this page is a waiting game. The only way to shorten it to zero is to be bitten less. For personal protection in Canada, Health Canada describes <strong>DEET</strong> and <strong>icaridin</strong> as the most effective personal insect repellents available here &mdash; icaridin being the name used in Canada for what the US market calls picaridin. Health Canada also registers other actives for use on skin, including p-menthane-3,8-diol (oil of lemon eucalyptus) and soybean oil, but they give shorter protection per application.</p>
          <ul>
            <li><strong>DEET</strong> &mdash; Health Canada permits up to 30% for adults, up to 10% for children aged 2 to 12, and 10% applied no more than once a day for infants aged 6 months to 2 years. It is not recommended at all under 6 months. Higher concentrations do not repel better; they last longer between applications. We cover the safety evidence in <Link href="/blog/is-deet-safe">is DEET safe</Link>.</li>
            <li><strong>Icaridin (picaridin)</strong> &mdash; registered in Canada at up to 20%, odourless, and it does not damage plastics and synthetic fabrics the way DEET can. The Canadian Paediatric Society favours icaridin 20% for children from 6 months of age, which makes it the usual first choice for families. The head-to-head is in <Link href="/blog/picaridin-vs-deet">picaridin vs DEET</Link>.</li>
            <li><strong>Permethrin 0.5% on clothing and gear</strong> &mdash; the U.S. Centers for Disease Control and Prevention recommends treating clothing, boots, and camping gear with 0.5% permethrin, and is explicit that it is applied to fabric and <em>never</em> to skin. Treated clothing is far more common in the US than in Canada, so check availability and the label before assuming you can buy it here.</li>
            <li><strong>Cover the skin that gets bitten.</strong> Mosquitoes can and do bite through thin, tight fabric &mdash; the physics of that is in <Link href="/blog/can-mosquitoes-bite-through-clothes">can mosquitoes bite through clothes</Link> &mdash; so loose and long beats thin and tight.</li>
          </ul>
          <p>Repellent protects the person wearing it. Reducing the number of mosquitoes in the yard in the first place is a different job: adult females rest through the day in shaded shrubs, under decks, and along fence lines, and a <Link href="/mosquito-control">barrier treatment</Link> targets them there before they ever reach the patio.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-bite-treatment-relief">Mosquito Bite Treatment &mdash; How to Stop the Itch Fast</Link></li>
            <li><Link href="/blog/when-to-worry-about-a-mosquito-bite">When to Worry About a Mosquito Bite</Link></li>
            <li><Link href="/blog/what-attracts-mosquitoes-to-you">What Attracts Mosquitoes to You?</Link></li>
            <li><Link href="/blog/why-mosquitoes-bite-some-people-more">Why Mosquitoes Bite Some People More Than Others</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/blog/bed-bug-bites-vs-mosquito-bites">Bed Bug Bites vs Mosquito Bites</Link> &mdash; the duration and recurrence test, side by side</li>
            <li><Link href="/blog/west-nile-virus-symptoms">West Nile Virus Symptoms</Link> &mdash; what the 2-to-14-day window after a bite actually looks like in Ontario</li>
            <li><Link href="/blog/how-many-times-can-a-mosquito-bite-you">How Many Times Can One Mosquito Bite You?</Link> &mdash; why bites arrive in clusters, and why clusters last longer</li>
            <li><Link href="/blog/picaridin-vs-deet">Picaridin vs DEET</Link> &mdash; choosing between the two repellents Health Canada calls the most effective for skin</li>
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
