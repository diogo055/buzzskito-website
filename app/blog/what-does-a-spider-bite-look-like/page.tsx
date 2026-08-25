import type { Metadata } from 'next'
import Link from 'next/link'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'what-does-a-spider-bite-look-like'
const DATE = '2026-07-19'
const TITLE = 'What Does a Spider Bite Look Like? Identification, Stages & When to Worry (2026)'
const META_TITLE = 'What Does a Spider Bite Look Like? ID Guide'

const FAQS = [
  {
    question: 'What does a spider bite look like?',
    answer: 'Most spider bites look like an ordinary red bump — roughly 0.5–2 cm (about 1/4–3/4 in) across, sometimes mildly swollen, itchy, or tender, and very similar to a mosquito bite or bee sting. Two tiny puncture marks are occasionally visible, but usually are not. The vast majority heal on their own within about a week. In North America, only widow spiders and the brown recluse are considered medically significant, per the CDC, and verified bites from either are uncommon.',
  },
  {
    question: 'How do I know if a bump is a spider bite or something else?',
    answer: 'You usually cannot be sure from the bump alone — even clinicians cannot reliably diagnose a spider bite without the spider. Medical reviews have found that most sores blamed on spiders are actually other conditions, most often bacterial skin infections such as MRSA. A confirmed spider bite really requires seeing the spider do it, ideally with the spider captured or photographed. If you never saw a spider, an expanding, painful, or pus-filled sore deserves medical assessment for infection rather than a spider-bite label.',
  },
  {
    question: 'Do spider bites have two puncture holes?',
    answer: 'Sometimes, but the two-holes sign is unreliable. Spider fangs sit so close together that the marks usually merge into a single point, and plenty of other bites and minor injuries can leave paired marks. Black widow bites are the most likely to show two faint punctures roughly 1–2 mm apart, but even then the skin findings are subtle. Do not rule a spider in or out based on how many holes you can count.',
  },
  {
    question: 'What does a brown recluse bite look like at first?',
    answer: 'Usually like nothing at all. Most brown recluse bites are painless or feel like a faint pinprick at first, with burning pain developing over the following 2–8 hours. The area may then develop a pale or blue-grey sunken centre ringed by redness. Most verified recluse bites heal without serious tissue damage — only a minority progress to the open ulcer the spider is famous for. The recluse also occupies a limited range in the central and southern parts of North America; outside that range, a necrotic-looking wound is far more likely to be an infection.',
  },
  {
    question: 'What does an infected spider bite look like?',
    answer: 'Watch for redness that keeps expanding after the first day or two, growing pain, warmth, swelling, pus, red streaks tracking away from the wound, or fever. A normal bite peaks within 24–48 hours and then improves; an infection keeps getting worse. Because skin infections such as MRSA are frequently mistaken for spider bites in the first place, any sore that enlarges, drains, or comes with fever should be seen by a healthcare provider promptly.',
  },
  {
    question: 'How long does a spider bite last?',
    answer: 'A typical spider bite heals in about 7–10 days, much like a mosquito bite or bee sting. Black widow symptoms usually peak within the first day and settle over 1–3 days with medical care, though aches can linger for a week or more. A brown recluse bite that ulcerates is the outlier: necrotic wounds can take 6–8 weeks or longer to close and may scar. Any bite still getting worse after 48 hours is off the normal healing arc and worth a medical opinion.',
  },
  {
    question: 'Can a spider bite cause fever or flu-like symptoms?',
    answer: 'It can, and that combination is a see-a-doctor sign. Black widow venom can cause muscle cramping, sweating, nausea, and abdominal pain within 30 minutes to 2 hours of the bite. A small share of brown recluse bites cause systemic illness — fever, chills, and rash, with rare blood-cell effects that are of most concern in children. Fever alongside any bite can also signal a spreading bacterial infection. In all three cases the advice is the same: seek medical care rather than waiting it out.',
  },
  {
    question: 'Are spider bites dangerous?',
    answer: 'Rarely. Most spider species either cannot pierce human skin or deliver venom that causes only minor, short-lived irritation — Health Canada pest guidance describes spiders as generally beneficial and reluctant to bite. The CDC flags two North American exceptions: widow spiders, whose venom affects the nervous system, and the brown recluse, whose venom can damage tissue. Deaths are extremely rare with modern medical care, but a suspected bite from either group warrants prompt medical attention.',
  },
  {
    question: 'What is most often mistaken for a spider bite?',
    answer: 'Bacterial skin infections top the list — MRSA abscesses in particular, which produce the painful, red, sometimes necrotic-looking sores people blame on spiders. Other common impostors include bed bug bites (typically in lines or clusters, unlike a single spider bite), flea and mosquito bites, shingles, allergic reactions, ingrown hairs, and infected cysts. Studies reviewing suspected spider bites have repeatedly found that the large majority — in some reviews more than 80% — had another cause entirely.',
  },
  {
    question: 'Should I catch the spider that bit me?',
    answer: 'If you can do it safely, yes — it is the single most useful thing you can bring to a medical appointment. Trap the spider under a clear cup, slide paper underneath, and keep it (even squashed remains help), or take a sharp, well-lit photo next to a coin for scale. Positive identification changes treatment decisions, especially for suspected widow or recluse bites. Never handle a spider bare-handed, and do not delay urgent care to hunt for it.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description:
    'What does a spider bite look like? How to identify one, why most suspected spider bites are something else, brown recluse and black widow warning signs, healing timeline, and when to get urgent care.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function WhatDoesASpiderBiteLookLikePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'A visual identification guide to spider bites: what they look like at each stage, how they differ from mosquito, bed bug, and tick bites, brown recluse and black widow warning signs, and when to seek urgent medical care.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Does a Spider Bite Look Like?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">What Does a Spider Bite Look Like?</span>
          </nav>
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-3">Pest Library &middot; Bite Identification</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            What Does a Spider Bite Look Like?
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            A visual identification guide: what real spider bites look like at each stage, why most sores blamed on spiders are something else, brown recluse and black widow warning signs, and exactly when to get medical care.
          </p>
          <div className="mt-6 text-brand-300 text-sm">Published July 19, 2026 &middot; 10 min read</div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-14 prose-brand">

        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-base text-gray-800 leading-relaxed">
            Most spider bites look like a small red bump with mild swelling or itching &mdash; very similar to a mosquito bite or bee sting &mdash; and heal on their own within about a week. Genuinely dangerous bites are rare, and published medical reviews find that most sores blamed on spiders are actually something else, most often a bacterial skin infection.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>A typical spider bite is a single red bump about 0.5&ndash;2 cm (1/4&ndash;3/4 in) across that fades within 7&ndash;10 days.</li>
            <li>In published medical reviews, more than 80% of suspected &ldquo;spider bites&rdquo; turned out to be other conditions &mdash; most often MRSA skin infections.</li>
            <li>The CDC names only two spider groups of medical concern in North America: widow spiders and the brown recluse.</li>
            <li>A black widow bite feels like a sharp pinprick, with muscle cramping typically starting within 30 minutes to 2 hours.</li>
            <li>A brown recluse bite is usually painless at first, with burning pain developing over 2&ndash;8 hours; only a minority progress to an open ulcer.</li>
            <li>Get urgent care for spreading redness or red streaks, severe pain or cramping, fever, or a bite centre turning dark or sinking.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito &middot; licensed mosquito &amp; tick control professionals</p>
        </div>

        <SpecialistDisclosure pest="spiders" />

        <p>Almost every bug bite starts the same way &mdash; a red bump &mdash; which is why &ldquo;spider bite&rdquo; has become the default label for any sore nobody saw happen. The evidence says that label is usually wrong, and getting it wrong matters: the conditions most often mistaken for spider bites include bacterial infections that need real treatment. This guide covers what spider bites actually look like at each stage, how to separate them from <Link href="/blog/mosquito-bite-vs-spider-bite">mosquito bites</Link> and <Link href="/blog/bed-bug-bites">bed bug bites</Link>, the two genuinely medically significant spiders, and the specific signs that mean see a doctor now.</p>

        <p className="text-sm text-gray-600 italic border-l-4 border-gray-200 pl-4">This is general information, not medical advice. Bite wounds cannot be reliably diagnosed from a description or photo &mdash; if you are worried about a bite, a spreading sore, or any symptoms, contact a healthcare provider or your local poison control service. In an emergency, call your local emergency number.</p>

        <h2>What does a spider bite look like?</h2>
        <p>Most spider bites look surprisingly ordinary: a <strong>single red bump, roughly 0.5&ndash;2 cm (about 1/4&ndash;3/4 in) across</strong>, sometimes with mild swelling, itching, or tenderness &mdash; close enough to a mosquito bite or bee sting that the three are routinely confused. Two tiny puncture marks are occasionally visible where the fangs entered, but the fangs sit so close together that they usually leave what reads as one point.</p>
        <p>Context matters as much as appearance. The overwhelming majority of spiders either cannot pierce human skin at all or deliver venom that causes nothing more than brief, local irritation &mdash; Health Canada&rsquo;s pest guidance describes spiders as generally beneficial and reluctant to bite, and the CDC&rsquo;s occupational guidance identifies only <strong>two spider groups of medical concern in North America</strong>: widow spiders and the brown recluse. Everything else on this continent produces, at worst, a bump that behaves like a bee sting and fades within a week to ten days.</p>
        <p>Spiders also do not feed on blood, so they have no reason to bite repeatedly. A genuine spider bite is <strong>almost always a single mark</strong> &mdash; typically from a spider pressed against skin inside clothing, bedding, gloves, or shoes. Multiple bumps, clusters, or lines of bites point strongly toward something else.</p>

        <h2>Is it actually a spider bite? Probably not</h2>
        <p>Statistically, a sore blamed on a spider is <strong>usually not a spider bite</strong> &mdash; and this is the most important fact on this page. Published medical reviews of suspected spider bites have repeatedly found that the large majority, <strong>in some studies more than 80%</strong>, were actually other conditions. The most common true culprit is a bacterial skin infection, especially <strong>MRSA</strong>, whose painful, red, sometimes necrotic-looking abscesses are near-perfect spider-bite impostors.</p>
        <p>Clinicians consider a spider bite confirmed only when the spider was <strong>seen biting and identified</strong> &mdash; a bar almost no self-diagnosed case clears. Common conditions mistaken for spider bites include:</p>
        <ul>
          <li><strong>Bacterial skin infections</strong> (MRSA and other staph abscesses, cellulitis) &mdash; the leading impostor.</li>
          <li><strong>Other arthropod bites</strong> &mdash; mosquitoes, fleas, mites, and <Link href="/blog/bed-bug-bites">bed bugs</Link>, whose bites arrive in lines or clusters.</li>
          <li><strong>Shingles</strong> &mdash; a painful, blistering band on one side of the body.</li>
          <li><strong>Allergic reactions, ingrown hairs, and inflamed cysts.</strong></li>
          <li><strong>Poor circulation or diabetic skin ulcers</strong>, which can mimic a &ldquo;necrotic bite.&rdquo;</li>
        </ul>
        <p>The misdiagnosis problem cuts the dangerous way, too: calling an MRSA abscess a &ldquo;spider bite&rdquo; delays antibiotic treatment for an infection that spreads. If you never saw a spider and a sore is growing, painful, or draining, the smart assumption is <strong>infection until a clinician says otherwise</strong>.</p>

        <h2>How can you tell a spider bite from other bites?</h2>
        <p>The quickest separators are <strong>count, pattern, and timing</strong>: spider bites are solitary and often noticed hours late, while blood-feeding pests leave itchy bites in multiples. Here is the side-by-side:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-[560px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Feature</th>
                <th className="px-3 py-2 text-left">Spider bite</th>
                <th className="px-3 py-2 text-left">Mosquito bite</th>
                <th className="px-3 py-2 text-left">Bed bug bites</th>
                <th className="px-3 py-2 text-left">Tick bite</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Typical look</td><td className="px-3 py-2">Single red bump; rarely two faint punctures</td><td className="px-3 py-2">Puffy pale or red welt</td><td className="px-3 py-2">Small firm welts in lines or clusters</td><td className="px-3 py-2">Single small bump; tick often still attached</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Number &amp; pattern</td><td className="px-3 py-2">Almost always one</td><td className="px-3 py-2">One to many, random, on exposed skin</td><td className="px-3 py-2">Often 3+ in a row (&ldquo;breakfast, lunch, dinner&rdquo;)</td><td className="px-3 py-2">Usually one, in warm hidden spots</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Sensation</td><td className="px-3 py-2">Often unnoticed; mild sting to sharp pinprick</td><td className="px-3 py-2">Itchy within minutes</td><td className="px-3 py-2">Itchy, frequently intensely so</td><td className="px-3 py-2">Usually painless</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">When you notice</td><td className="px-3 py-2">Sometimes hours later</td><td className="px-3 py-2">Immediately</td><td className="px-3 py-2">Next morning or days later</td><td className="px-3 py-2">Often only when the tick is found</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Later warning sign</td><td className="px-3 py-2">Spreading pain, cramping, dark or sunken centre</td><td className="px-3 py-2">Rarely any</td><td className="px-3 py-2">Infection from scratching</td><td className="px-3 py-2">Expanding bull&rsquo;s-eye rash 3&ndash;30 days later</td></tr>
            </tbody>
          </table>
        </div>
        <p>Two of these confusions have their own deep dives: <Link href="/blog/mosquito-bite-vs-spider-bite">mosquito bite vs spider bite</Link> walks through the most common mix-up feature by feature, and if the &ldquo;spider&rdquo; you found was small, dark, and crawling rather than biting, <Link href="/blog/bugs-that-look-like-ticks">bugs that look like ticks</Link> covers the lookalike arthropods people find on skin and clothing.</p>

        <h2>What does a brown recluse bite look like?</h2>
        <p>At first, usually <strong>like nothing at all</strong> &mdash; most brown recluse bites are painless or feel like a faint pinprick, which is why the early hours give so little warning. The recognizable appearance develops over time, and it is worth stressing up front that <strong>most verified recluse bites heal uneventfully</strong>; the flesh-destroying ulcer the spider is famous for occurs in only a minority of cases.</p>
        <p>A typical progression, in the cases that do react:</p>
        <ul>
          <li><strong>0&ndash;8 hours:</strong> Painless or a mild sting at first; burning pain and itching usually develop within 2&ndash;8 hours, with redness and mild swelling.</li>
          <li><strong>12&ndash;36 hours:</strong> The centre may become pale, blue-grey, or sunken while a red ring spreads around it &mdash; sometimes described as a &ldquo;red, white, and blue&rdquo; pattern. A blister can form at the centre.</li>
          <li><strong>Days 3&ndash;7:</strong> In the minority of bites that turn necrotic, the centre darkens to purple-black and forms a dry, sunken scab (eschar), typically 1&ndash;2 cm (about 3/8&ndash;3/4 in) across, occasionally larger.</li>
          <li><strong>Weeks 2&ndash;8:</strong> The scab sloughs to leave a slow-healing open ulcer that can take 6&ndash;8 weeks or longer to close and may scar.</li>
        </ul>
        <p>Three hedges matter enormously here. First, <strong>range</strong>: brown recluse spiders occupy a limited region of central and southern North America; across the rest of the continent, established populations are rare to absent, and studies have documented far more &ldquo;recluse bite&rdquo; diagnoses than recluse spiders in such areas. Second, <strong>identification</strong>: the famous violin marking is faint, variable, and mimicked by harmless species &mdash; the more reliable trait, six eyes in three pairs rather than the usual eight, is not something most people can check. Third, <strong>diagnosis</strong>: no lab test confirms a recluse bite, and clinicians cannot reliably diagnose one from the wound alone. A dark, ulcerating sore &mdash; especially outside recluse range &mdash; is statistically far more likely to be an infection, and either way it needs medical assessment, not home treatment.</p>

        <h2>What does a black widow bite look like?</h2>
        <p>Often, <strong>very little</strong> &mdash; the skin findings of a black widow bite are usually modest: two faint puncture marks 1&ndash;2 mm apart, mild redness, and slight swelling, sometimes evolving into a pale area with a red ring. The bite itself is typically felt as a <strong>sharp pinprick</strong>, unlike the silent recluse bite.</p>
        <p>What defines a widow bite is not the mark but what follows. Widow venom is a neurotoxin, and per the CDC the symptoms of concern are <strong>systemic</strong>, usually beginning within 30 minutes to 2 hours:</p>
        <ul>
          <li>Aching or cramping pain that spreads from the bite toward the abdomen, back, or chest &mdash; abdominal rigidity can mimic more serious conditions.</li>
          <li>Sweating (sometimes localized around the bite), nausea, restlessness, and elevated blood pressure or heart rate.</li>
          <li>In more pronounced cases: tremors, weakness, and difficulty breathing.</li>
        </ul>
        <p>Adult female widows are glossy black with a red hourglass under a body about 1.5 cm (roughly 1/2 in) long &mdash; leg span up to about 4 cm (1.5 in) &mdash; and bite almost exclusively when pressed against skin. Deaths are extremely rare with modern medical care, but the cramping-after-a-pinprick pattern is a clear signal to <strong>seek medical care promptly</strong> rather than wait at home; antivenom and effective pain management exist, and children, older adults, and pregnant people warrant the most caution.</p>

        <h2>How long does a spider bite take to heal?</h2>
        <p>A typical spider bite heals in <strong>about 7&ndash;10 days</strong> &mdash; the same arc as a mosquito bite or bee sting, peaking in the first day or two and fading steadily after. The exceptions follow the two medically significant spiders: black widow symptoms usually peak within the first day and settle over 1&ndash;3 days with treatment (lingering aches can persist a week or more), while a brown recluse bite that ulcerates can take <strong>6&ndash;8 weeks or longer</strong> to fully close, sometimes with scarring.</p>
        <p>The practical rule is trajectory, not the calendar: a normal bite <strong>gets better every day after the second day</strong>. A bite that is larger, more painful, warmer, or darker at day three than it was at day one is not following the normal script &mdash; that trajectory belongs to infections and necrosis, and it is the cue for medical assessment.</p>

        <h2>How do you treat a spider bite at home?</h2>
        <p>For an ordinary bite with no red-flag signs, home care is simple and the same guidance the CDC gives for suspected spider bites generally:</p>
        <ul>
          <li><strong>Wash the bite</strong> with soap and water as soon as you notice it.</li>
          <li><strong>Apply a cold compress</strong> (ice wrapped in cloth, 10&ndash;15 minutes at a time) to ease pain and swelling.</li>
          <li><strong>Elevate</strong> the limb if the bite is on an arm or leg.</li>
          <li><strong>Resist scratching</strong> &mdash; broken skin is how ordinary bites become infected ones.</li>
          <li>An over-the-counter pain reliever or oral antihistamine may ease symptoms &mdash; follow the label and ask a pharmacist what suits you, especially for children.</li>
          <li><strong>Track it:</strong> trace the redness border with a pen and photograph the bite daily. Growth beyond the line is objective evidence for you and any clinician.</li>
        </ul>
        <p>Just as important is what <strong>not</strong> to do: do not cut, squeeze, or attempt to suck out venom; do not apply a tourniquet; do not apply heat, which can worsen tissue injury; and do not rely on home drawing salves on a wound that is worsening. If you suspect a widow or recluse &mdash; or any systemic symptoms appear &mdash; skip home care and seek medical attention, bringing the spider or a photo if safely possible.</p>

        <h2>When should you see a doctor urgently?</h2>
        <p>Seek <strong>emergency care immediately</strong> (or call your local emergency number) for any of the following after a suspected bite:</p>
        <ul>
          <li>Trouble breathing or swallowing, chest tightness, or swelling of the face, lips, or tongue &mdash; possible severe allergic reaction.</li>
          <li>Severe, spreading muscle cramps or a rigid, painful abdomen.</li>
          <li>Fainting, confusion, or rapid worsening in a child.</li>
        </ul>
        <p>Arrange <strong>same-day medical care</strong> if you notice:</p>
        <ul>
          <li>Redness expanding beyond the pen line, or <strong>red streaks</strong> tracking away from the bite.</li>
          <li>The centre turning <strong>dark, purple-black, or sunken</strong>, or a blister forming over a painful bite.</li>
          <li>Fever, chills, sweating, nausea, or generally feeling unwell after any bite.</li>
          <li>Increasing pain, warmth, swelling, or <strong>pus</strong> &mdash; the signature of infection.</li>
          <li>A bite from a spider you believe was a <strong>widow or recluse</strong>, even with mild early symptoms.</li>
          <li>A bite on the face, neck, or groin, or a bite in a young child, a pregnant person, or anyone immune-compromised or diabetic.</li>
          <li>No improvement after 48 hours, or an open sore that is not healing.</li>
        </ul>
        <p>Both the CDC and Health Canada point people toward professional assessment for exactly these signs &mdash; and poison control centres will advise on suspected venomous bites by phone, free, at any hour. When in doubt, that call is never the wrong move.</p>

        <h2>Related identification guides</h2>
        <ul>
          <li><Link href="/blog/mosquito-bite-vs-spider-bite">Mosquito Bite vs Spider Bite &mdash; How to Tell Them Apart</Link></li>
          <li><Link href="/blog/bed-bug-bites">Bed Bug Bites &mdash; Identification, Patterns &amp; What to Do</Link></li>
          <li><Link href="/blog/bugs-that-look-like-ticks">Bugs That Look Like Ticks &mdash; Lookalike ID Guide</Link></li>
        </ul>

        <h2>Frequently asked questions</h2>
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

        <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
          <p className="text-sm text-brand-900">
            Dealing with the pests that actually bite in multiples? Browse our{' '}
            <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">independent pest product research &rarr;</Link>
          </p>
        </div>

      </article>
    </>
  )
}
