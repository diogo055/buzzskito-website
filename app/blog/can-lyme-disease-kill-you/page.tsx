import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = 'can-lyme-disease-kill-you'
const DATE = '2026-07-15'
const TITLE = 'Can Lyme Disease Kill You, and Is It Curable? (2026 Canada Facts)'

const FAQS = [
  {
    question: 'Can Lyme disease kill you?',
    answer: 'Death from Lyme disease is extremely rare. The Public Health Agency of Canada (PHAC) reports that most people recover fully, especially when treated early with antibiotics. The rare mechanism that can be life-threatening is Lyme carditis, when the bacteria affect the heart’s electrical system and slow the heartbeat. The U.S. CDC has documented a small number of fatal Lyme carditis cases. Lyme carditis is treatable when caught in time, which is why any fainting, chest pain, shortness of breath, or heart palpitations after a tick bite should be assessed by a doctor immediately.',
  },
  {
    question: 'Is Lyme disease curable?',
    answer: 'Yes. According to PHAC and Health Canada, Lyme disease is treated with antibiotics, and most people recover completely — particularly when treatment starts in the early stage. Early localized Lyme disease treated promptly has a cure rate approaching 100 percent. Later-stage or untreated Lyme disease can still be treated, but recovery may take longer and may require a longer or intravenous antibiotic course. Only a healthcare provider can diagnose Lyme disease and prescribe treatment — there is no reliable home cure.',
  },
  {
    question: 'Is Lyme disease contagious?',
    answer: 'No. Lyme disease is not contagious from person to person. The CDC states there is no evidence Lyme disease spreads through touching, kissing, sexual contact, coughing, sneezing, or sharing food and drink. You also cannot catch it directly from a pet. It is only transmitted through the bite of an infected blacklegged tick (Ixodes scapularis). Pets can, however, carry infected ticks into your home or yard, so those ticks can then bite people.',
  },
  {
    question: 'Is Lyme disease fatal?',
    answer: 'Lyme disease is very rarely fatal. The vast majority of Canadians diagnosed with Lyme disease recover after antibiotic treatment. Serious outcomes are almost always tied to late-stage, untreated infection — most notably Lyme carditis, which can disrupt the heart rhythm. Because early treatment is so effective, prompt tick removal, watching for symptoms, and seeing a doctor when they appear keep the risk of a fatal outcome extremely low.',
  },
  {
    question: 'Is Lyme disease permanent?',
    answer: 'For most people, no. After a course of antibiotics the infection is cleared and symptoms resolve. A minority of patients experience lingering symptoms such as fatigue, body aches, and difficulty concentrating for six months or more after treatment — a condition PHAC and the CDC call Post-Treatment Lyme Disease Syndrome (PTLDS). PTLDS is not an active, ongoing infection, and research shows most people gradually improve over months to a few years. Untreated Lyme disease is more likely to cause lasting joint or neurological problems, which is why early treatment matters.',
  },
  {
    question: 'How long does Lyme disease last?',
    answer: 'With early treatment, a typical antibiotic course lasts 10 to 21 days and symptoms usually improve within weeks. PHAC notes that most people recover fully. Later-stage disease may need a longer course. When post-treatment symptoms (PTLDS) occur, they can persist for six months or more before gradually resolving. Timelines vary from person to person, so follow the guidance of your own healthcare provider.',
  },
  {
    question: 'What happens if Lyme disease is left untreated?',
    answer: 'Untreated Lyme disease can spread from the bite site over weeks to months. The CDC and PHAC describe possible complications including additional erythema migrans rashes, facial (Bell’s) palsy, severe headaches from meningitis, nerve pain, heart-rhythm problems (Lyme carditis), and arthritis — often in the knees. Most of these can still be treated with antibiotics once diagnosed, but recovery may take longer. This is why an expanding rash, fever, or unexplained joint pain after possible tick exposure should be checked by a doctor.',
  },
  {
    question: 'Is Lyme disease deadly in Canada?',
    answer: 'Deaths from Lyme disease in Canada are very rare. PHAC tracks Lyme disease as a nationally notifiable illness and reports thousands of cases per year, the large majority of which are treated successfully. Ontario has the highest number of reported cases, concentrated in established blacklegged tick areas. The realistic risk for most Canadians is not death but weeks of illness — avoidable with prompt tick removal and early medical care.',
  },
  {
    question: 'Can you get Lyme disease from another person?',
    answer: 'No. There is no evidence that Lyme disease passes between people through everyday contact, kissing, or sexual contact, according to the CDC. It is a tick-borne infection, not a communicable disease like a cold or flu. The only established route of infection is the bite of an infected blacklegged tick.',
  },
  {
    question: 'Can dogs or cats give humans Lyme disease?',
    answer: 'Not directly. Your dog or cat cannot transmit Lyme disease to you by contact. However, pets can carry infected ticks indoors on their fur, and those ticks may then attach to a person. Checking pets for ticks after time outdoors — and treating your yard where ticks live — reduces the chance of a tick making it into your home.',
  },
  {
    question: 'Is there a cure or vaccine for Lyme disease?',
    answer: 'The cure for an active infection is antibiotics prescribed by a doctor, which resolve most cases. As of 2026 there is no widely available human Lyme disease vaccine in Canada, though candidate vaccines have been in clinical trials. Because there is no vaccine you can rely on, prevention — tick-safe clothing, repellents registered by Health Canada, daily tick checks, and yard treatment — is the frontline defence.',
  },
  {
    question: 'How do I lower my family’s Lyme disease risk in Ontario?',
    answer: 'Reduce tick bites in the places you spend the most time — usually your own yard. Keep grass short, clear leaf litter, and create a barrier between lawn and woodland edges. Wear light-coloured long sleeves and use a Health Canada–registered repellent (DEET, icaridin, or oil of lemon eucalyptus) in tick habitat, do a full-body tick check after being outdoors, and remove any attached tick promptly with fine-tipped tweezers. Professional tick barrier spray targets the lawn edges, leaf litter, and shrub lines where blacklegged ticks wait.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Can Lyme disease kill you? Is it curable or contagious? Plain-English, PHAC- and CDC-cited answers for Canadians — early antibiotics are near-100% effective, deaths are very rare, and it does not spread person-to-person. Updated 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function CanLymeDiseaseKillYouPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Plain-English facts and prognosis for Lyme disease in Canada: whether it can kill you, whether it is curable, contagious, or permanent, cited to PHAC, Health Canada, and the CDC.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Can Lyme Disease Kill You?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, DATE)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Can Lyme Disease Kill You?</span>
          </nav>
          <div className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-3">Tick Control &middot; Health</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Can Lyme Disease Kill You,<br />and Is It Curable?
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            The scary questions answered plainly, with Canadian framing and sources from the Public Health Agency of Canada, Health Canada, and the CDC. Published July 15, 2026 &middot; 9 min read.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
            Lyme disease can very rarely be fatal &mdash; almost always through untreated Lyme carditis affecting the heart &mdash; but deaths are extremely rare and it is curable. PHAC and Health Canada confirm antibiotics clear most cases, early treatment is near-100% effective, and Lyme disease is not contagious between people.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Death from Lyme disease is extremely rare and almost always tied to untreated Lyme carditis.</li>
            <li>The CDC estimates Lyme carditis occurs in roughly 1 in 100 reported Lyme disease cases.</li>
            <li>Early localized Lyme disease treated promptly has a cure rate approaching 100%.</li>
            <li>A standard early-stage antibiotic course typically runs 10&ndash;21 days.</li>
            <li>Lyme disease spreads only through the bite of an infected blacklegged tick &mdash; not person to person.</li>
            <li>As of 2026 there is no widely available human Lyme vaccine in Canada, so prevention is the frontline defence.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 pb-14 prose-brand">

        <p>
          If you or someone in your family has just found an attached tick &mdash; or received a Lyme disease diagnosis &mdash; the internet can be a frightening place. This guide answers the questions people actually search at 2 a.m., in plain English, with the reassuring context that reputable Canadian and North American health authorities provide. The short version: for the overwhelming majority of people, Lyme disease is a treatable, curable infection with a good outlook, especially when caught early. This is general information, not medical advice; for diagnosis and treatment, see your own healthcare provider.
        </p>

        <p>
          For a symptom-by-symptom walkthrough (including what the bull&rsquo;s-eye rash looks like and the stages of infection), pair this page with our detailed <Link href="/blog/lyme-disease-symptoms-guide" className="text-brand-700 hover:underline">Lyme disease symptoms guide</Link>. This article focuses on prognosis &mdash; the &ldquo;how bad can it get&rdquo; questions.
        </p>

        <h2>What is Lyme disease?</h2>
        <p>
          Lyme disease is a bacterial infection caused by <em>Borrelia burgdorferi</em> (and, less commonly in North America, <em>Borrelia mayonii</em>). In Ontario and across Canada, it is spread to people through the bite of an infected blacklegged tick &mdash; also called the deer tick, <em>Ixodes scapularis</em>. According to the Public Health Agency of Canada (PHAC), a tick usually needs to be attached for a day or more before the bacteria are transmitted, which is why prompt tick removal dramatically lowers the risk.
        </p>
        <p>
          Lyme disease is the most commonly reported tick-borne illness in Canada, and reported cases have climbed over the past decade as blacklegged tick populations expand across southern Ontario, including the Greater Toronto Area. You can follow local case counts and risk areas on our <Link href="/ontario-lyme-disease-tracker-2026" className="text-brand-700 hover:underline">Ontario Lyme disease tracker for 2026</Link>. Ticks can carry more than Lyme, too &mdash; in parts of North America a tick bite can trigger <Link href="/blog/alpha-gal-syndrome" className="text-brand-700 hover:underline">alpha-gal syndrome</Link>, a delayed allergy to red meat that the CDC links to certain tick bites. Understanding what the disease is &mdash; a treatable bacterial infection, not a mysterious incurable condition &mdash; is the first step to putting the scarier questions in perspective.
        </p>

        <h2>Can Lyme disease kill you? Is it fatal or deadly?</h2>
        <p>
          Death from Lyme disease is extremely rare. The realistic outcome for almost everyone diagnosed is full recovery after antibiotics. When Lyme disease does become life-threatening, it is nearly always because an infection went untreated long enough to cause <strong>Lyme carditis</strong> &mdash; a condition in which the bacteria interfere with the heart&rsquo;s electrical signalling and slow the heartbeat (heart block).
        </p>
        <p>
          The U.S. Centers for Disease Control and Prevention (CDC) has documented a small number of fatal Lyme carditis cases, and estimates that Lyme carditis occurs in roughly 1 in 100 reported Lyme disease cases. Crucially, Lyme carditis is treatable and usually reversible when it is identified in time. The warning signs are worth memorizing: fainting or near-fainting, chest pain, shortness of breath, heart palpitations, or a noticeably slow or irregular pulse in the days or weeks after a possible tick bite. Any of those symptoms warrants urgent medical assessment. In an emergency &mdash; for example, someone collapses or has severe chest pain &mdash; call 911.
        </p>
        <p>
          So &ldquo;can Lyme disease kill you?&rdquo; The honest answer is: very rarely, and almost always only when it goes untreated. It is not a disease that kills quickly or unpredictably, and prompt care makes a fatal outcome exceedingly unlikely.
        </p>

        <h2>Is Lyme disease curable? Can it be cured?</h2>
        <p>
          Yes. PHAC and Health Canada are clear that Lyme disease is treated with antibiotics and that most people recover completely. There is a genuine cure for the active infection &mdash; it is not a lifelong condition for the typical patient. The single biggest factor in outcome is timing:
        </p>
        <ul>
          <li><strong>Early localized stage</strong> (days to a few weeks after the bite, often with a bull&rsquo;s-eye rash): a short oral antibiotic course clears the infection in the large majority of cases, with cure rates approaching 100 percent.</li>
          <li><strong>Early disseminated / late stage</strong> (weeks to months later, if untreated): still curable with antibiotics, but may need a longer course or, in some cases, intravenous antibiotics. Recovery can take longer.</li>
        </ul>
        <p>
          Only a healthcare provider can diagnose Lyme disease and prescribe the right antibiotic, dose, and duration &mdash; this varies by stage, age, pregnancy status, and other factors, and is not something to self-treat. There is no reliable home or herbal cure for Lyme disease. If you think you have been exposed, book an appointment; early treatment is both simpler and more effective.
        </p>

        <h2>How long does Lyme disease last?</h2>
        <p>
          With early treatment, a standard antibiotic course typically runs 10 to 21 days, and symptoms usually improve within a few weeks. PHAC notes that most people recover fully after treatment. Later-stage disease can require a longer course and a longer recovery. The chart below summarizes the general picture &mdash; individual timelines vary, so treat this as orientation, not a substitute for your doctor&rsquo;s guidance.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-900 text-white">
                <th className="p-3 text-left">Stage</th>
                <th className="p-3 text-left">Typical timing after bite</th>
                <th className="p-3 text-left">Treatment</th>
                <th className="p-3 text-left">General outlook</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Early localized', '3–30 days', 'Oral antibiotics, ~10–21 days', 'Near-complete recovery; cure rate approaching 100%'],
                ['Early disseminated', 'Weeks to a few months', 'Oral or IV antibiotics', 'Very good with treatment; recovery may take longer'],
                ['Late / untreated', 'Months or more', 'Longer or IV antibiotic course', 'Usually treatable; higher chance of lingering joint or nerve symptoms'],
                ['Post-treatment (PTLDS)', 'After a completed course', 'Supportive care; symptoms managed', 'Most improve gradually over months to a few years'],
              ].map(([stage, timing, tx, outlook]) => (
                <tr key={stage} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="p-3 font-medium text-brand-900">{stage}</td>
                  <td className="p-3 text-gray-700">{timing}</td>
                  <td className="p-3 text-gray-700">{tx}</td>
                  <td className="p-3 text-gray-700">{outlook}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Sources: <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener" className="text-brand-700 hover:underline">Public Health Agency of Canada &mdash; Lyme disease</a> and <a href="https://www.cdc.gov/lyme/" target="_blank" rel="noopener" className="text-brand-700 hover:underline">CDC &mdash; Lyme disease</a>. Educational only, not a substitute for medical advice.
        </p>

        <h2>Is Lyme disease permanent? What about chronic Lyme?</h2>
        <p>
          For most people, Lyme disease is not permanent &mdash; antibiotics clear the infection and symptoms resolve. But a minority of patients continue to experience symptoms such as fatigue, muscle and joint aches, and difficulty concentrating for six months or longer after finishing treatment. PHAC and the CDC refer to this as <strong>Post-Treatment Lyme Disease Syndrome (PTLDS)</strong>.
        </p>
        <p>
          A few points help keep PTLDS in perspective. First, it is not an active, ongoing infection that antibiotics failed to kill &mdash; studies have not shown a benefit from long-term antibiotic use for these symptoms, and prolonged antibiotics carry their own risks. Second, the term &ldquo;chronic Lyme disease&rdquo; is used loosely online and sometimes applied to people who were never diagnosed with Lyme disease at all; it is a contested label, whereas PTLDS is the term health authorities use for lingering symptoms after confirmed, treated Lyme. Third, and most reassuringly, research indicates most people with PTLDS improve gradually over time. If you have ongoing symptoms after treatment, that is a conversation to have with your healthcare provider, who can rule out other causes and help you manage them.
        </p>

        <h2>Is Lyme disease contagious?</h2>
        <p>
          No. Lyme disease is not spread from person to person. The CDC states there is no evidence it passes through touching, kissing, sexual contact, coughing, sneezing, or sharing food and drink. You cannot &ldquo;catch&rdquo; Lyme disease from a friend, partner, or family member the way you catch a cold. It is transmitted only by the bite of an infected blacklegged tick.
        </p>
        <p>
          Two common worries deserve a direct answer. Can you get it from your dog or cat? Not directly &mdash; pets cannot transmit the bacteria to you by contact. However, dogs and cats can carry infected ticks indoors on their fur, and those ticks can then bite a person, so pet tick checks matter. And there is no evidence of casual environmental spread between people. The takeaway: managing tick exposure &mdash; on yourself, your family, and your pets &mdash; is what actually reduces risk, not isolating from an infected person.
        </p>

        <h2>Straight answers to the scary questions</h2>
        <p>
          Because these questions cluster together, here is a quick-reference summary you can scan in seconds. Each row reflects the general consensus of PHAC, Health Canada, and the CDC.
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-900 text-white">
                <th className="p-3 text-left">Question</th>
                <th className="p-3 text-left">Short answer</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Can Lyme disease kill you?', 'Very rarely — almost only via untreated Lyme carditis'],
                ['Is it curable?', 'Yes — antibiotics cure most cases'],
                ['Can it be cured early?', 'Yes — early treatment is near-100% effective'],
                ['Is it fatal?', 'Very rarely; deaths are exceptional'],
                ['Is it deadly?', 'Not for the typical treated patient'],
                ['Is it contagious?', 'No — not spread person to person'],
                ['Is it permanent?', 'Usually no; a minority have lingering PTLDS symptoms'],
                ['How long does it last?', 'Weeks with early treatment; PTLDS can last 6+ months'],
                ['Is there a cure?', 'Yes — antibiotics; no widely available human vaccine yet'],
              ].map(([q, a]) => (
                <tr key={q} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="p-3 font-medium text-brand-900">{q}</td>
                  <td className="p-3 text-gray-700">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>When should you see a doctor?</h2>
        <p>
          Reach out to a healthcare provider promptly if, after a tick bite or possible exposure in tick habitat, you develop any of the following: an expanding rash (including the bull&rsquo;s-eye pattern), fever or chills, severe headache, facial drooping, joint pain and swelling, or the heart symptoms described earlier (fainting, chest pain, palpitations, shortness of breath). Tell the clinician you had a tick bite or were in an area with ticks, and when. Early Lyme disease is far easier to treat than late-stage disease.
        </p>
        <p>
          If you still have the tick, our <Link href="/blog/tick-bite-symptoms-what-to-do-ontario" className="text-brand-700 hover:underline">tick-bite symptoms and what-to-do guide for Ontario</Link> walks through safe removal and next steps. For an emergency &mdash; collapse, severe chest pain, or trouble breathing &mdash; call 911.
        </p>
        <div className="not-prose my-6 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-sm text-gray-800 leading-relaxed">
            <strong className="text-amber-900">This is general information, not medical advice.</strong> It cannot diagnose Lyme disease, replace a clinical assessment, or guide dosing. Only a qualified healthcare provider can diagnose and treat Lyme disease. If you are worried about symptoms, contact your doctor, and in an emergency call 911.
          </p>
        </div>

        <h2>Prevention is the real win</h2>
        <p>
          Every one of the frightening questions above becomes moot if you avoid the tick bite in the first place. Because there is no widely available human Lyme vaccine in Canada as of 2026, prevention is the frontline defence. The highest-value steps for Ontario families:
        </p>
        <ul>
          <li>Do a full-body tick check after time outdoors &mdash; especially the scalp, behind the knees, waistband, and armpits.</li>
          <li>Remove any attached tick promptly with fine-tipped tweezers, pulling straight up with steady pressure.</li>
          <li>Wear light-coloured long sleeves and use a Health Canada&ndash;registered repellent (DEET, icaridin, or oil of lemon eucalyptus) in tick habitat.</li>
          <li>Keep grass short, clear leaf litter, and treat the lawn edges and shrub lines where blacklegged ticks wait for a host.</li>
        </ul>
        <p>
          For the full playbook, see our <Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme disease and tick prevention guide for Ontario</Link>. If your property backs onto a ravine, conservation area, or wooded edge, professional yard treatment adds a meaningful layer: BuzzSkito&rsquo;s tick barrier spray targets the lawn-to-woods transition zones, leaf litter, and fence lines where ticks concentrate, at $597 for the season (or $497 when bundled with a mosquito plan). It won&rsquo;t replace tick checks, but it reduces how many ticks are lying in wait in the areas your family actually uses.
        </p>

        <h2>The bottom line</h2>
        <p>
          Lyme disease is serious enough to take seriously and treatable enough not to panic about. It is curable with antibiotics, it does not spread from person to person, and it is only very rarely fatal &mdash; and even that rare risk is tied almost entirely to infections left untreated. Remove ticks promptly, watch for symptoms, and see a doctor early. That combination keeps the outlook, for the vast majority of Canadians, very good.
        </p>

      </article>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Can Lyme Disease Kill You? Common Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            Have more questions? Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a> or see our <Link href="/frequently-asked-question" className="text-brand-700 underline">full FAQ</Link>.
          </p>
        </div>
      </section>

      <CTASection heading="Fewer Ticks in the Yard Your Family Uses" subtext="Professional tick barrier spray targets the lawn edges and leaf litter where blacklegged ticks wait. Serving 19 GTA cities." variant="dark" />
    </>
  )
}
