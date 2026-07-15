import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'when-to-worry-about-a-mosquito-bite'
const DATE = '2026-07-15'
const TITLE = 'When to Worry About a Mosquito Bite: Infection Signs, Allergy & When to See a Doctor (2026)'

const FAQS = [
  {
    question: 'When should you worry about a mosquito bite?',
    answer: 'Worry about a mosquito bite when the redness keeps spreading after 48 hours, the area becomes warm, hard, and increasingly painful, pus or yellow crusting appears, red streaks run away from the bite toward the body, or you develop a fever. These are signs of a possible skin infection (cellulitis) rather than a normal reaction, and Health Canada and the CDC advise seeing a healthcare provider. Also seek care if a bite near the eye swells the eye shut, or you have trouble breathing, which needs 911.',
  },
  {
    question: 'What does an infected mosquito bite look like?',
    answer: 'An infected mosquito bite typically shows redness that expands over 1 to 3 days instead of fading, skin that feels warm and firm to the touch, growing pain or tenderness, and sometimes pus, yellow crusting, or a small abscess. Red streaks spreading from the bite, swollen lymph nodes, or fever suggest the infection is spreading and need prompt medical attention. A normal bite, by contrast, is itchy and puffy but starts improving within a day or two.',
  },
  {
    question: 'How do I know if a mosquito bite is infected or just irritated?',
    answer: 'Timing is the clearest clue. A normal irritated bite peaks in the first day, itches, and shrinks over 2 to 3 days. An infected bite gets worse after 48 hours: the redness widens, warmth and pain increase, and pus or crusting may form. Scratching that breaks the skin is the usual entry point for bacteria. If you are tracking a bite, mark the edge of the redness with a pen; if it grows past the mark, contact a healthcare provider.',
  },
  {
    question: 'Can you be allergic to mosquito bites?',
    answer: 'Yes. Reactions to mosquito saliva range from mild to strong. A large, intensely itchy, hot, swollen area, sometimes with blistering or low-grade fever, is often called skeeter syndrome, a well-recognized localized allergic reaction that is uncomfortable but not usually dangerous. True whole-body anaphylaxis to mosquito bites is very rare. If a bite triggers hives across the body, facial or throat swelling, or breathing difficulty, treat it as a medical emergency and call 911.',
  },
  {
    question: 'What is skeeter syndrome?',
    answer: 'Skeeter syndrome is a strong localized allergic reaction to proteins in mosquito saliva. Within hours a bite can swell into a large, hot, red, firm area several centimetres across, sometimes with blistering and a mild fever, and it can be mistaken for a skin infection. Unlike infection, it appears quickly (within hours, not days) and both sides tend to react. It is not dangerous but can be miserable; a healthcare provider or pharmacist can advise on antihistamines and, in severe cases, other treatment.',
  },
  {
    question: 'Why is my mosquito bite purple or looks like a bruise?',
    answer: 'A mosquito bite can look purple or bruise-like when small blood vessels near the surface leak during the reaction, which is more common on thin or sun-aged skin, on the lower legs, and in people who bruise easily or take blood thinners. On its own, a purple or bruised-looking bite that is fading is usually harmless. Be more cautious if the purple area is spreading, very painful, or accompanied by fever, which can occasionally signal a deeper skin infection and warrants a check.',
  },
  {
    question: 'Is a swollen eye or eyelid from a mosquito bite dangerous?',
    answer: 'Bites on the thin skin around the eye often swell dramatically, sometimes closing the eye, because the loose eyelid tissue holds fluid easily. A puffy, itchy eyelid that is not painful and does not affect vision is usually a normal exaggerated reaction that settles in a couple of days. See a healthcare provider urgently if the eye becomes painful, red deep in the socket, vision changes, or the swelling is hot and spreading, as these can indicate an eye-area infection (periorbital or orbital cellulitis) that needs treatment.',
  },
  {
    question: 'How many mosquito bites is dangerous?',
    answer: 'There is no set number of bites that is toxic to a healthy person; even dozens of bites are usually just very itchy. The real risk from mosquitoes is not the number of bites but disease transmission, such as West Nile virus in Ontario, and secondary skin infection from scratching. Very young children or people with many bites can occasionally run a low fever from the combined reaction. Seek care for high fever, confusion, severe headache, or a bite that is becoming infected rather than counting bites.',
  },
  {
    question: 'When could a mosquito bite mean West Nile virus in Ontario?',
    answer: 'Most people bitten by an infected mosquito have no symptoms. According to the Public Health Agency of Canada, about 1 in 5 develop mild illness (fever, headache, body aches, sometimes a rash) roughly 2 to 14 days after the bite, and fewer than 1 in 150 develop serious neurological illness. West Nile cannot be diagnosed from the bite itself. If you develop fever with severe headache, a stiff neck, confusion, or muscle weakness in the weeks after mosquito exposure, seek medical care promptly.',
  },
  {
    question: 'How long should a normal mosquito bite last?',
    answer: 'A typical mosquito bite is most itchy and swollen in the first several hours to a day, then steadily improves and usually resolves within 3 to 7 days. Larger allergic reactions can take up to a week or two to fully settle. If a bite is still worsening after 2 to 3 days rather than fading, that is a reason to look for infection or a stronger allergic reaction and consider seeing a healthcare provider.',
  },
  {
    question: 'Can a mosquito bite cause cellulitis?',
    answer: 'Yes. Cellulitis is a bacterial skin infection that can start when scratching breaks the skin over a bite and bacteria enter. Warning signs include spreading redness, warmth, firmness, increasing pain, and sometimes fever or red streaking. The CDC and Health Canada advise seeing a healthcare provider promptly, as cellulitis usually needs antibiotics. Keeping bites clean and resisting the urge to scratch (short nails, cool compress, covering the bite) greatly lowers the risk.',
  },
  {
    question: 'Should I pop or squeeze a swollen mosquito bite?',
    answer: 'No. Squeezing, digging at, or popping a bite breaks the skin and pushes bacteria in, which is the main way a harmless bite turns into an infection. Instead, wash gently with soap and water, apply a cool compress, and use an anti-itch measure if needed. If a bite forms a genuine pus-filled abscess or keeps worsening, have a healthcare provider assess it rather than draining it yourself.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'When to worry about a mosquito bite: how to spot an infected bite vs a normal reaction, allergic reactions and skeeter syndrome, purple/bruised bites, swollen-eye bites, West Nile signs, and a clear see-a-doctor / call-911 checklist. Ontario 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function WhenToWorryMosquitoBitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A calm, medically-framed triage guide to when a mosquito bite is normal versus when to see a doctor or call 911, for Ontario in 2026.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'When to Worry About a Mosquito Bite', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">When to Worry About a Mosquito Bite</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">When to Worry About a Mosquito Bite</h1>
          <p className="text-xl text-brand-100 max-w-3xl">A calm, plain-language triage guide: how to tell a normal itchy bite from an infected one, what an allergic reaction looks like, why some bites bruise or swell an eye shut, and exactly when to see a doctor or call 911.</p>
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed">
              Most mosquito bites are harmless and just itchy for a few days. Worry when a bite gets <strong>worse after 48 hours</strong> instead of better: spreading redness, warmth, firmness, growing pain, pus, red streaks, or fever can signal a skin infection and mean you should see a healthcare provider. Call 911 for trouble breathing, throat or face swelling, or fainting.
            </p>
          </div>
        </div>
      </div>

      <article className="pb-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <p>A mosquito bite itches because your immune system reacts to proteins in the mosquito&rsquo;s saliva. That reaction &mdash; a raised, pink, itchy bump &mdash; is normal and is not an infection. The vast majority of bites in Ontario need nothing more than patience and maybe an anti-itch measure. This page is about the small minority that deserve a closer look, and how to tell them apart without panicking. For everyday itch relief and treatment steps, see our companion guides on <Link href="/blog/mosquito-bite-treatment-relief">how to treat and relieve a mosquito bite</Link> and <Link href="/blog/why-do-mosquito-bites-itch">why mosquito bites itch</Link>.</p>

          <h2>When should you worry about a mosquito bite?</h2>
          <p>Worry when a bite is getting worse two or more days after you were bitten, rather than settling down. A normal bite peaks quickly and then fades; an infected or seriously reacting bite trends the other way. The specific red flags below are the ones Health Canada, the CDC, and Public Health Ontario point to as reasons to have a bite assessed.</p>
          <p>The single most useful trick is to <strong>mark the edge of the redness with a pen</strong>. Come back in a few hours. If the redness has clearly grown past your line, that spreading pattern is the classic sign of a developing skin infection (cellulitis) and is worth a call to your provider or a walk-in clinic.</p>

          <h2>Normal reaction vs infected bite: what&rsquo;s the difference?</h2>
          <p>The two look similar at first &mdash; both are red and swollen &mdash; but they behave differently over time. Use this comparison to place your bite.</p>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-left">Normal reaction</th>
                  <th className="px-4 py-3 text-left">Possible infection</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Timing', 'Worst in first 24 hrs, then improves', 'Worsens after 48 hrs'],
                  ['Redness', 'Small, stays put or shrinks', 'Spreads outward, often past a pen mark'],
                  ['Warmth', 'Mild or none', 'Distinctly hot to the touch'],
                  ['Pain', 'Itchy more than painful', 'Increasingly tender and painful'],
                  ['Surface', 'Smooth bump', 'Pus, yellow crust, or an abscess'],
                  ['Streaking', 'None', 'Red streaks running toward the body'],
                  ['Whole body', 'You feel fine', 'Fever, chills, swollen glands'],
                ].map(([feature, normal, infected]) => (
                  <tr key={feature} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50">{feature}</td>
                    <td className="px-4 py-2 text-gray-700">{normal}</td>
                    <td className="px-4 py-2 text-gray-700">{infected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Scratching is the usual bridge from &ldquo;itchy&rdquo; to &ldquo;infected&rdquo; &mdash; broken skin lets ordinary bacteria in. Keeping nails short, covering the bite, and using a cool compress instead of scratching is the best way to keep a normal bite normal.</p>

          <h2>What does an infected mosquito bite look like?</h2>
          <p>An infected bite looks angry and expanding rather than calm and shrinking. Expect a widening zone of redness, skin that is warm and firm, and pain that grows instead of fades. You may see pus, a yellow crust, or a small pocket of fluid. When a bacterial skin infection spreads, it can produce <strong>red streaks</strong> leading away from the bite, tender lumps in the nearby lymph nodes (armpit, groin, neck), and fever. The CDC and Health Canada describe this picture as cellulitis, which usually needs a prescription antibiotic, so it is a reason to be seen rather than to wait it out.</p>

          <h2>Can you be allergic to mosquito bites?</h2>
          <p>Yes &mdash; and this is different from infection. Allergy is your immune system over-reacting to mosquito saliva, and it appears <em>quickly</em> (within hours), not slowly over days. A strongly allergic bite can swell into a large, hot, firm, intensely itchy patch several centimetres across, sometimes with a blister on top and a mild fever. This localized reaction is commonly called <strong>skeeter syndrome</strong>. It is uncomfortable and can look alarming, but it is not usually dangerous and settles over several days, sometimes with the help of an antihistamine your pharmacist or doctor can recommend.</p>
          <p>What separates allergy from infection is the clock and the trend. Allergy flares fast and then plateaus; infection builds slowly and keeps worsening after two days. When in doubt, the spreading-past-a-pen-mark test and the presence of pus point toward infection.</p>

          <h2>What does an allergic reaction to a mosquito bite look like?</h2>
          <p>Localized allergic reactions look like an exaggerated version of a normal bite: bigger, hotter, itchier, sometimes blistered. That is skeeter syndrome and it stays in one area. A <strong>whole-body</strong> allergic reaction is different and rare, but it is the one to take seriously. Warning signs of a systemic reaction or anaphylaxis include hives spreading across the body, swelling of the lips, tongue, or throat, wheezing or trouble breathing, dizziness, or fainting. Any of those is a medical emergency &mdash; <strong>call 911</strong> and use an epinephrine auto-injector if one has been prescribed.</p>

          <h2>Why is my mosquito bite purple or looks like a bruise?</h2>
          <p>A bite can turn purple or bruise-like when tiny blood vessels near the surface leak a little during the reaction. This is more common on the lower legs, on thinner or sun-aged skin, and in people who bruise easily or take blood-thinning medication. A purple, bruise-looking bite that is otherwise settling and not very painful is usually nothing to worry about and will fade like a bruise over a week or two. Be more cautious &mdash; and get it checked &mdash; if the purple area is <strong>spreading, very painful, hot, or paired with fever</strong>, since rapidly spreading discolouration with severe pain can rarely signal a deeper infection.</p>

          <h2>Swollen eye or eyelid from a mosquito bite &mdash; should I worry?</h2>
          <p>Bites around the eye tend to swell far more than bites elsewhere because the eyelid skin is thin and loose, so it holds fluid easily. Waking up with a puffy, itchy, half-closed eye after a bite is dramatic but often just a normal exaggerated reaction that eases within a day or two. Cool compresses help.</p>
          <p>Treat it as more serious &mdash; and seek care promptly &mdash; if the eye becomes <strong>painful, the redness moves deep into or around the socket, vision changes, the eye is hard to move, or the swelling is hot and clearly spreading</strong>. Those features can indicate an eye-area infection (periorbital or orbital cellulitis), which is treated urgently. When it is your eye, err toward getting it looked at.</p>

          <h2>How many mosquito bites is dangerous?</h2>
          <p>There is no magic number of bites that becomes toxic in a healthy person. Even dozens of bites are usually just intensely itchy. The genuine risks from mosquitoes are two: <strong>disease transmission</strong> (in Ontario, primarily West Nile virus) and <strong>secondary infection</strong> from scratching bites open. A young child or someone covered in fresh bites can occasionally run a low fever from the sheer volume of reaction, which typically passes. Focus your worry on how a bite is behaving and how you feel overall &mdash; fever, spreading redness, or feeling unwell &mdash; not on counting bumps.</p>

          <h2>When could a mosquito bite signal West Nile virus?</h2>
          <p>You cannot tell West Nile from the look of a bite &mdash; there is no special-looking bite. Risk is about symptoms in the days and weeks afterward, not the bite itself. According to the Public Health Agency of Canada, most people infected have <strong>no symptoms at all</strong>. About 1 in 5 develop a mild illness &mdash; fever, headache, body aches, tiredness, sometimes a rash &mdash; roughly 2 to 14 days after being bitten, and fewer than 1 in 150 develop serious neurological illness.</p>
          <p>Seek medical care promptly if, in the weeks after mosquito exposure, you develop fever with a <strong>severe headache, stiff neck, confusion, muscle weakness, or trouble with balance</strong>. For the Ontario-specific picture &mdash; when risk peaks locally and how to lower your exposure &mdash; see our guide to <Link href="/blog/west-nile-virus-mosquito-risk-ontario">West Nile virus mosquito risk in Ontario</Link>.</p>

          <h2>See a doctor if&hellip; / Call 911 if&hellip;</h2>
          <p>This is the checklist to keep. It is deliberately simple: the top group is &ldquo;get seen soon,&rdquo; the bottom group is &ldquo;emergency, now.&rdquo;</p>
          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
              <p className="text-sm font-extrabold uppercase tracking-wider text-amber-800 mb-3">See a healthcare provider if&hellip;</p>
              <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
                <li>Redness keeps spreading after 48 hours</li>
                <li>The bite is hot, hard, and increasingly painful</li>
                <li>Pus, yellow crust, or an abscess forms</li>
                <li>Red streaks run away from the bite</li>
                <li>You develop a fever, chills, or swollen glands</li>
                <li>An eye-area bite becomes painful or changes your vision</li>
                <li>Fever with headache, stiff neck, or confusion in the weeks after being bitten</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-300 bg-red-50 p-5">
              <p className="text-sm font-extrabold uppercase tracking-wider text-red-700 mb-3">Call 911 if&hellip;</p>
              <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
                <li>Trouble breathing or wheezing</li>
                <li>Swelling of the lips, tongue, or throat</li>
                <li>Hives spreading rapidly over the body</li>
                <li>Dizziness, fainting, or collapse</li>
                <li>Sudden severe confusion or weakness on one side</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">Use a prescribed epinephrine auto-injector immediately if you have one and suspect anaphylaxis.</p>
            </div>
          </div>

          <h2>How long does a normal mosquito bite last?</h2>
          <p>A typical bite does its worst in the first few hours to a day &mdash; that is when the itch and the puffy welt peak &mdash; and then steadily calms down, usually clearing within 3 to 7 days. Larger allergic reactions (skeeter syndrome) can take a week or two to fully settle and may leave a temporary darker or bruise-coloured mark as they heal, which is normal. What matters for triage is the <em>direction of travel</em>: a bite that is fading, even slowly, is reassuring, while a bite that is still enlarging, reddening, or hurting more on day three is the one to have looked at. Bites that blister on top can be part of a strong reaction; keep the blister intact and clean rather than popping it, since broken skin is what invites infection.</p>

          <h2>Who should be a little more careful with bites?</h2>
          <p>Most healthy adults can treat mosquito bites casually. A few groups have a lower threshold for getting a bite checked. <strong>Babies and young children</strong> react more strongly, scratch relentlessly, and are quicker to break the skin, so watch their bites for spreading redness and keep nails trimmed. <strong>Older adults and people with diabetes, poor circulation, or a weakened immune system</strong> are more prone to skin infections and slower healing, so err toward an earlier assessment. People taking <strong>blood thinners</strong> bruise around bites more easily, which looks alarming but is usually harmless. And anyone who is <strong>pregnant</strong> should take standard mosquito precautions during Ontario&rsquo;s West Nile season, since the Public Health Agency of Canada recommends avoiding bites as a sensible precaution. None of these groups need to panic &mdash; they just have a slightly lower bar for picking up the phone.</p>

          <h2>How to keep a normal bite from becoming a problem</h2>
          <p>Prevention of the two real risks &mdash; infection and disease &mdash; comes down to not scratching and not getting bitten in the first place. Keep bites clean with soap and water, cool the itch with a cold compress, keep fingernails short, and cover a bite you cannot stop scratching. Avoid squeezing or popping a swollen bite, which just pushes bacteria in.</p>
          <p>Reducing bites overall is the upstream fix. Wear a Health Canada-approved repellent (DEET or icaridin), remove standing water where mosquitoes breed, and cut mosquito pressure around your yard. A professional <Link href="/mosquito-control">barrier spray</Link> treats the vegetation where mosquitoes rest and can meaningfully lower how many bites your family gets in the first place &mdash; BuzzSkito&rsquo;s treatments start from $99. Fewer bites means fewer chances for the small number that go wrong.</p>

          <div className="not-prose my-8 rounded-xl border-l-4 border-gray-300 bg-gray-50 p-5">
            <p className="text-sm text-gray-600 leading-relaxed"><strong className="text-gray-800">This is general information, not medical advice.</strong> It cannot diagnose your bite or replace an assessment by a qualified professional. If you are worried about a bite or your symptoms, contact a healthcare provider, call Health Connect Ontario (811), or in an emergency call 911. Sources referenced include the Public Health Agency of Canada (PHAC), Health Canada, Public Health Ontario, and the U.S. Centers for Disease Control and Prevention (CDC).</p>
          </div>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-bite-treatment-relief">How to Treat and Relieve a Mosquito Bite</Link></li>
            <li><Link href="/blog/why-do-mosquito-bites-itch">Why Do Mosquito Bites Itch?</Link></li>
            <li><Link href="/blog/west-nile-virus-mosquito-risk-ontario">West Nile Virus Mosquito Risk in Ontario</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Fewer bites, fewer worries" subtext="Cut mosquito pressure around your yard with licensed barrier spray. From $99. Serving 19 GTA cities with 129 five-star reviews." variant="dark" />
    </>
  )
}
