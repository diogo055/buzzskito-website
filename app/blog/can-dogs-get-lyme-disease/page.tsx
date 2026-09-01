import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'can-dogs-get-lyme-disease'
const DATE = '2026-07-15'
const TITLE = 'Can Dogs Get Lyme Disease From Ticks? Signs, Stages & Treatment (2026)'
const META_TITLE = 'Can Dogs Get Lyme Disease? Signs & 3 Stages'

const FAQS = [
  {
    question: 'Can dogs get Lyme disease from ticks?',
    answer: 'Yes. Dogs get Lyme disease when they are bitten by an infected blacklegged tick (also called a deer tick, Ixodes scapularis) carrying the bacterium Borrelia burgdorferi. The tick generally has to stay attached for 24 to 48 hours before it can pass the infection along, which is why prompt tick removal matters so much. Blacklegged ticks are now well established across southern Ontario and the GTA, so any dog that spends time in grass, leaf litter, or wooded edges is potentially exposed from spring through late fall. The good news is that most infected dogs never become clinically ill, and Lyme is not spread from dog to dog, dog to cat, or dog to human directly. If you find an attached tick, remove it promptly and talk to your veterinarian about whether testing is warranted.',
  },
  {
    question: 'How long after a tick bite do Lyme symptoms appear in dogs?',
    answer: 'When dogs do develop signs, they usually appear 2 to 5 months after the bite of an infected tick — not within days. This long lag is one reason Lyme is easy to miss: by the time a dog starts limping or running a fever, the tick that caused it is long gone and often unnoticed. Because the incubation period is so delayed, a dog can seem perfectly healthy in the weeks right after a bite and still develop Lyme disease months later. If your dog was bitten by a tick, note the date and watch for lameness, fever, or lethargy over the following months, and mention the exposure to your veterinarian.',
  },
  {
    question: 'What are the first signs of Lyme disease in dogs?',
    answer: 'The most recognizable early sign is lameness — often shifting-leg lameness, where the limp moves from one leg to another over days. This happens because the bacteria settle in the joints and cause inflammation. Other early signs include fever, lethargy, reduced appetite, stiffness or a reluctance to move, and swollen, painful joints or lymph nodes. Unlike people, dogs do not develop the classic bull’s-eye rash, so there is no obvious skin clue to watch for. Any new limping, fever, or unexplained tiredness in a dog with possible tick exposure is worth a call to your veterinarian.',
  },
  {
    question: 'What are the symptoms of Lyme disease in dogs?',
    answer: 'Common symptoms include recurrent or shifting-leg lameness, swollen and painful joints, fever, lethargy, loss of appetite, swollen lymph nodes, and general stiffness. A smaller number of dogs develop a serious kidney complication called Lyme nephritis, which can cause vomiting, increased thirst and urination, weight loss, and fluid swelling in the limbs or abdomen. Lyme nephritis is a medical emergency. Certain breeds — including Labrador and Golden Retrievers, Bernese Mountain Dogs, and Shetland Sheepdogs — appear more prone to the kidney form. Because symptoms overlap with many other conditions, a veterinarian diagnoses Lyme using a combination of history, physical exam, and blood testing.',
  },
  {
    question: 'What are the 3 stages of Lyme disease in dogs?',
    answer: 'Veterinary sources often describe three broad phases. The acute (early) stage occurs roughly 2 to 5 months after an infected bite, with fever, lethargy, swollen lymph nodes, and reduced appetite. The subacute (disseminated) stage follows as bacteria settle in the joints, producing the classic shifting-leg lameness and swollen, painful joints. The chronic (late) stage can develop months to years later, with recurring arthritis and, in a small subset of dogs, Lyme nephritis (kidney damage). Staging in dogs is less clearly defined than in humans, and many dogs never progress past the earliest phase — or show no signs at all. Your veterinarian can explain where a specific dog falls.',
  },
  {
    question: 'Is Lyme disease curable in dogs?',
    answer: 'In most cases, the clinical signs of Lyme disease in dogs respond well to a course of antibiotics prescribed by a veterinarian, and dogs with joint symptoms often improve within a few days of starting treatment. However, "curable" is nuanced: the bacteria are not always fully cleared from the body, some dogs relapse and need repeat treatment, and blood tests can stay positive for months or years after recovery. Dogs that develop Lyme nephritis (the kidney form) have a much more guarded outlook and need intensive veterinary care. The best outcomes come from early detection and following your veterinarian’s treatment plan closely.',
  },
  {
    question: 'How is Lyme disease treated in dogs?',
    answer: 'Lyme disease in dogs is treated with prescription antibiotics — doxycycline is the most commonly used — typically over a multi-week course determined by your veterinarian. Never give your dog human medication or leftover antibiotics, and never dose without veterinary guidance. Dogs with joint pain may also receive supportive care for comfort. Dogs with the kidney form (Lyme nephritis) need more aggressive treatment, which can include hospitalization, IV fluids, and specialized medications. Your veterinarian will decide whether an antibiotic course is appropriate, since a positive test in a dog with no symptoms is not always treated the same way as an actively ill dog.',
  },
  {
    question: 'Can dogs die from Lyme disease?',
    answer: 'It is uncommon, but yes — dogs can die from Lyme disease, almost always because of Lyme nephritis, the kidney complication. When the kidneys are damaged, the condition can progress to kidney failure, which is frequently fatal even with treatment. This is why any signs of vomiting, increased thirst and urination, weight loss, or limb swelling in a dog with possible tick exposure should be treated as urgent. The straightforward joint form of Lyme disease is rarely life-threatening and usually responds to antibiotics, but the kidney form is serious. If you are worried your dog is very unwell, contact your veterinarian or an emergency animal hospital right away.',
  },
  {
    question: 'Can cats get Lyme disease from ticks?',
    answer: 'Cats can pick up ticks and can be infected with the Lyme bacterium in laboratory settings, but naturally occurring clinical Lyme disease in cats is extremely rare and is essentially not seen in everyday veterinary practice. Cats appear far more resistant to developing illness than dogs do. That said, cats — especially those that go outdoors — should still be protected from ticks, because ticks can carry other pathogens and because a tick on your cat can end up in your home. There is no Lyme vaccine for cats. Only use tick-prevention products that are specifically labelled as safe for cats, and check with your veterinarian first, since some dog products are toxic to cats.',
  },
  {
    question: 'Is there a Lyme vaccine for dogs in Canada?',
    answer: 'Yes. A Lyme (Borrelia) vaccine is available for dogs in Canada and is often recommended by veterinarians for dogs living in or travelling to high-risk tick areas — which now includes much of southern Ontario. The vaccine is not automatically given to every dog; your veterinarian will weigh your dog’s exposure risk, lifestyle, and health when deciding. Vaccination does not replace tick prevention. The most effective approach combines a veterinarian-recommended tick preventive, daily tick checks after time outdoors, prompt tick removal, and — where appropriate — vaccination.',
  },
  {
    question: 'Is Lyme disease in dogs contagious to humans or other pets?',
    answer: 'A dog with Lyme disease cannot give it directly to you, to another dog, or to a cat — the infection is spread by tick bites, not by contact between animals or people. The shared risk is environmental: if your dog is picking up ticks in the yard or on walks, the people and other pets in the household are being exposed to the same ticks. An infected tick that rides in on your dog could bite a person. That is why household tick prevention — treating pets, doing tick checks, and reducing ticks in the yard — protects everyone, not just the dog.',
  },
  {
    question: 'Should I test my dog for Lyme disease after a tick bite?',
    answer: 'Not immediately. Antibody tests such as the in-clinic 4Dx/C6 test do not turn positive until several weeks after infection, so testing the day after a bite is not useful. Most veterinarians recommend removing the tick promptly, noting the date, and — if testing is warranted — checking several weeks later, often as part of a routine annual heartworm and tick-borne disease screen. A positive test in a dog with no symptoms does not always mean treatment is needed. Your veterinarian will interpret the result alongside your dog’s signs and exposure history and advise on next steps.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Can dogs get Lyme disease from ticks? Yes. The first signs (shifting-leg lameness, fever), the 3 stages, whether it is curable, treatment, and whether cats can get it. Ontario vet-informed guide, 2026.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function CanDogsGetLymeDiseasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Can dogs (and cats) get Lyme disease from ticks? First signs, symptoms, the 3 stages, treatment, and whether it is curable — an Ontario vet-informed guide.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Can Dogs Get Lyme Disease?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Can Dogs Get Lyme Disease?</span>
          </nav>
          <div className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-3">Tick Control &middot; Pet Health</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-2xl">Ticks pass Lyme disease to dogs across Ontario every season. Here are the first signs, the stages, whether it is curable, how it is treated, and whether cats are at risk.</p>
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
              Yes &mdash; dogs can get Lyme disease from the bite of an infected blacklegged (deer) tick carrying <em>Borrelia burgdorferi</em>. Most infected dogs never show signs, and it is not spread dog-to-dog or dog-to-human, but any dog with possible tick exposure should be watched and seen by a veterinarian if it develops lameness or fever.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>An infected tick usually must stay attached 24&ndash;48 hours before it can transmit <em>Borrelia burgdorferi</em>.</li>
              <li>Only about 5&ndash;10% of infected dogs ever develop clinical signs of Lyme disease.</li>
              <li>When symptoms appear, they typically show up 2&ndash;5 months after the bite, not within days.</li>
              <li>The classic early sign is shifting-leg lameness; dogs do not get the bull&rsquo;s-eye rash people do.</li>
              <li>Lyme in dogs is treated with vet-prescribed antibiotics (commonly doxycycline) over a multi-week course.</li>
              <li>A Lyme vaccine is available for dogs in Canada; there is no Lyme vaccine for cats.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <article className="py-4 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <p>Lyme disease is the most common tick-borne illness affecting dogs in Ontario, and cases have climbed alongside the spread of blacklegged ticks across the GTA and southern Ontario. According to the Public Health Agency of Canada (PHAC), the range of blacklegged ticks has expanded significantly over the past decade, pushing risk into suburban yards, ravines, and parks that were once considered low-risk. Dogs are natural tick magnets &mdash; they push through tall grass and brush exactly where ticks wait &mdash; so understanding how Lyme affects them, what the first signs look like, and what to do is essential for any Ontario pet owner. This guide is general information for pet owners, not a substitute for veterinary care; always consult your veterinarian about your specific dog.</p>

          <h2>Can dogs get Lyme disease from ticks?</h2>
          <p>Yes. Dogs contract Lyme disease when an infected blacklegged tick (deer tick, <em>Ixodes scapularis</em>) attaches and feeds long enough to transmit <em>Borrelia burgdorferi</em>, the corkscrew-shaped bacterium responsible for the disease. The tick typically must remain attached for 24 to 48 hours before transmission occurs, which is why fast, correct tick removal is one of the most powerful prevention tools you have.</p>
          <p>Not every blacklegged tick carries the bacterium, and not every dog bitten by an infected tick becomes sick. In fact, veterinary consensus is that only about 5&ndash;10% of infected dogs ever develop clinical signs &mdash; the majority mount an immune response and remain outwardly healthy. That is reassuring, but it also means Lyme can quietly infect a dog without any obvious warning. Blacklegged ticks are active any time the temperature is above roughly 4&deg;C, so in the GTA that can mean risk from early spring through late fall, and even on mild winter days.</p>
          <p>If you have just found a tick on your dog, work through <Link href="/blog/i-found-tick-on-my-dog-what-to-do">what to do when you find a tick on your dog</Link> and follow a proper <Link href="/blog/how-to-remove-tick-from-dog-ontario">tick removal technique for dogs in Ontario</Link> &mdash; how you remove it affects infection risk.</p>

          <h2>Is Lyme disease in dogs contagious to other pets or people?</h2>
          <p>No &mdash; not directly. Lyme disease spreads through tick bites, not through contact between animals. An infected dog cannot pass Lyme to another dog, to a cat, or to a human by licking, sharing bowls, or being in the same house. The real shared risk is the ticks themselves: if your dog is bringing ticks home from the yard or the trail, the whole household is exposed to those same ticks. An unfed tick that hitches a ride on your dog can later attach to a person. This is why tick control is a household project, not just a pet-care task.</p>

          <h2>What are the first signs of Lyme disease in dogs?</h2>
          <p>The earliest and most telling sign is lameness &mdash; and specifically <strong>shifting-leg lameness</strong>, where a limp appears in one leg, resolves, then shows up in a different leg days later. This happens because the bacteria trigger inflammation in the joints. Unlike humans, dogs do <em>not</em> develop a bull&rsquo;s-eye rash, so there is no skin clue to look for.</p>
          <p>First signs and symptoms to watch for include:</p>
          <ul>
            <li><strong>Shifting-leg lameness</strong> &mdash; limping that moves from limb to limb</li>
            <li><strong>Stiffness</strong>, reluctance to move, or a hunched, walking-on-eggshells posture</li>
            <li><strong>Fever</strong> &mdash; often in the 39.5&ndash;40.5&deg;C (103&ndash;105&deg;F) range</li>
            <li><strong>Lethargy</strong> and noticeably lower energy</li>
            <li><strong>Loss of appetite</strong></li>
            <li><strong>Swollen, warm, or painful joints</strong></li>
            <li><strong>Swollen lymph nodes</strong>, sometimes near the bite site</li>
          </ul>
          <p>Because these signs typically appear <strong>2 to 5 months</strong> after the infected bite, most owners have no memory of the tick that caused it. If your dog starts limping for no clear reason or seems feverish and tired, mention any possible tick exposure to your veterinarian &mdash; it is a key piece of the puzzle. For the bite itself and what a fresh tick bite looks like, see our guide on <Link href="/blog/tick-bite-on-dog-symptoms">tick bite symptoms on dogs</Link>.</p>

          <h2>What are the 3 stages of Lyme disease in dogs?</h2>
          <p>Veterinary sources often describe Lyme disease in dogs in three broad phases. Staging in dogs is less clearly defined than in people, and many dogs never move past the first phase &mdash; or show no signs at all &mdash; but this framework helps explain how the disease can progress if left unchecked.</p>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-brand-800">Stage</th>
                  <th className="px-3 py-2 text-left font-bold text-brand-800">Typical timing</th>
                  <th className="px-3 py-2 text-left font-bold text-brand-800">What is happening</th>
                  <th className="px-3 py-2 text-left font-bold text-brand-800">Common signs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-navy-50">
                  <td className="px-3 py-2 font-semibold text-brand-800">1. Acute / early</td>
                  <td className="px-3 py-2">~2&ndash;5 months after bite</td>
                  <td className="px-3 py-2">Bacteria spread from the bite site through the body</td>
                  <td className="px-3 py-2">Fever, lethargy, swollen lymph nodes, low appetite</td>
                </tr>
                <tr className="border-t border-navy-50 bg-gray-50">
                  <td className="px-3 py-2 font-semibold text-brand-800">2. Subacute / disseminated</td>
                  <td className="px-3 py-2">Weeks to months later</td>
                  <td className="px-3 py-2">Bacteria settle in the joints</td>
                  <td className="px-3 py-2">Shifting-leg lameness, swollen and painful joints, stiffness</td>
                </tr>
                <tr className="border-t border-navy-50">
                  <td className="px-3 py-2 font-semibold text-brand-800">3. Chronic / late</td>
                  <td className="px-3 py-2">Months to years later</td>
                  <td className="px-3 py-2">Persistent immune response; possible kidney involvement</td>
                  <td className="px-3 py-2">Recurring arthritis and, rarely, Lyme nephritis (kidney failure)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>The third stage is where Lyme becomes dangerous. <strong>Lyme nephritis</strong> &mdash; kidney damage caused by the immune response to the infection &mdash; is uncommon but can be fatal, and certain breeds appear predisposed, including Labrador and Golden Retrievers, Bernese Mountain Dogs, and Shetland Sheepdogs.</p>

          <div className="not-prose my-6 rounded-xl bg-red-50 border-l-4 border-red-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-red-800">Kidney (Lyme nephritis) warning signs &mdash; call your vet urgently:</strong> vomiting, increased thirst and urination, weight loss, and fluid swelling of the limbs or belly. Lyme nephritis is a medical emergency. If your dog is seriously unwell, contact your veterinarian or an emergency animal hospital right away.
            </p>
          </div>

          <h2>Can dogs die from Lyme disease?</h2>
          <p>Yes, but it is uncommon &mdash; and when it happens, it is almost always due to Lyme nephritis rather than the joint form. The classic arthritis version of canine Lyme disease is rarely life-threatening and usually responds well to treatment. The kidney form is different: once the kidneys are damaged, the condition can progress to kidney failure, which is often fatal even with intensive care. This stark difference in outcomes is exactly why early recognition and veterinary follow-up matter so much. A limping dog caught early has an excellent outlook; a dog in kidney failure does not.</p>

          <h2>Is Lyme disease curable in dogs?</h2>
          <p>In most cases, yes &mdash; the clinical signs respond well to a veterinarian-prescribed course of antibiotics, and dogs with joint pain often improve dramatically within a few days of starting treatment. But "cured" deserves an honest caveat. The bacteria are not always completely eliminated from the body, some dogs relapse and need another round of treatment, and antibody blood tests can remain positive for months or years even after a dog feels fine. Dogs that develop Lyme nephritis have a much more guarded prognosis and need ongoing veterinary management. The best results come from catching the disease early and following your veterinarian&rsquo;s plan.</p>

          <h2>How is Lyme disease treated in dogs?</h2>
          <p>Treatment is prescription antibiotics, chosen and dosed by your veterinarian &mdash; <strong>doxycycline</strong> is the most commonly used, typically over a multi-week course. We will not list doses here: never give your dog human medication or leftover antibiotics, and never dose without veterinary direction. Some dogs also receive supportive care to keep them comfortable while the antibiotics take effect.</p>
          <p>Diagnosis usually starts with an in-clinic antibody test (the 4Dx or C6 test) that many veterinarians run as part of an annual heartworm and tick-borne disease screen, sometimes followed by a confirmatory quantitative test and urine testing to check the kidneys. Importantly, a <em>positive test in a dog with no symptoms</em> is not automatically treated the same way as an actively ill dog &mdash; your veterinarian decides based on the whole picture. Dogs with the kidney form need far more aggressive treatment, potentially including hospitalization, IV fluids, and specialized medications.</p>

          <h2>Can cats get Lyme disease from ticks?</h2>
          <p>Cats can carry ticks and can be infected with the Lyme bacterium in laboratory experiments, but <strong>naturally occurring clinical Lyme disease in cats is extremely rare</strong> and is essentially not seen in everyday veterinary practice. Cats appear to be far more resistant to becoming ill than dogs are. So while the honest answer is "technically possible, practically almost never," that does not mean ticks are harmless to cats.</p>
          <p>Outdoor cats still pick up ticks, and those ticks can carry other pathogens and can end up loose in your home. There is <strong>no Lyme vaccine for cats</strong>. Critically, only use tick-prevention products specifically labelled as safe for cats, and check with your veterinarian first &mdash; some tick products made for dogs (including certain permethrin-based ones) are highly toxic to cats and can be fatal.</p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-brand-800">Question</th>
                  <th className="px-3 py-2 text-left font-bold text-brand-800">Dogs</th>
                  <th className="px-3 py-2 text-left font-bold text-brand-800">Cats</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-navy-50">
                  <td className="px-3 py-2 font-semibold text-brand-800">Can be bitten / carry ticks?</td>
                  <td className="px-3 py-2">Yes</td>
                  <td className="px-3 py-2">Yes</td>
                </tr>
                <tr className="border-t border-navy-50 bg-gray-50">
                  <td className="px-3 py-2 font-semibold text-brand-800">Develop clinical Lyme disease?</td>
                  <td className="px-3 py-2">~5&ndash;10% of infected dogs</td>
                  <td className="px-3 py-2">Extremely rare / not seen in practice</td>
                </tr>
                <tr className="border-t border-navy-50">
                  <td className="px-3 py-2 font-semibold text-brand-800">Typical signs</td>
                  <td className="px-3 py-2">Lameness, fever, sometimes kidney disease</td>
                  <td className="px-3 py-2">Rarely any</td>
                </tr>
                <tr className="border-t border-navy-50 bg-gray-50">
                  <td className="px-3 py-2 font-semibold text-brand-800">Lyme vaccine available?</td>
                  <td className="px-3 py-2">Yes (often advised in high-risk areas)</td>
                  <td className="px-3 py-2">No</td>
                </tr>
                <tr className="border-t border-navy-50">
                  <td className="px-3 py-2 font-semibold text-brand-800">Tick prevention still needed?</td>
                  <td className="px-3 py-2">Yes</td>
                  <td className="px-3 py-2">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Preventing Lyme disease in your dog</h2>
          <p>Because the tick has to feed for a day or more to transmit Lyme, prevention is genuinely effective when you layer a few habits together:</p>
          <ol>
            <li><strong>Use a veterinarian-recommended tick preventive.</strong> Modern oral and topical products are the backbone of protection. Our guide to <Link href="/blog/tick-repellent-for-dogs-ontario">tick repellent and prevention for dogs in Ontario</Link> covers the options and what to avoid.</li>
            <li><strong>Do daily tick checks</strong> after outdoor time &mdash; run your hands through the coat and feel around the ears, neck, armpits, groin, and between the toes.</li>
            <li><strong>Remove ticks promptly and correctly,</strong> ideally within 24 hours, using the right technique.</li>
            <li><strong>Ask your veterinarian about the Lyme vaccine,</strong> which is available for dogs in Canada and often recommended for higher-risk lifestyles in southern Ontario.</li>
            <li><strong>Reduce ticks in the yard,</strong> where your dog spends the most unsupervised time.</li>
          </ol>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Fewer ticks in the yard, fewer chances to get bitten</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Your dog picks up most of its ticks right at home. BuzzSkito&rsquo;s professional tick barrier spray targets the lawn edges, shrub lines, and leaf litter where ticks wait &mdash; from $597 for the season, or $497 when bundled with a mosquito plan. It complements (never replaces) your vet&rsquo;s tick preventive.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>When to call your veterinarian</h2>
          <p>Call your veterinarian if your dog develops unexplained lameness, fever, tiredness, or reduced appetite &mdash; particularly if there is any chance of tick exposure in the previous few months. Treat vomiting, increased drinking and urination, or limb swelling as urgent, since these can signal the kidney form. And if you are ever unsure whether a symptom is serious, it is always reasonable to phone your clinic or an emergency animal hospital for advice. Early attention consistently produces the best outcomes with canine Lyme disease.</p>

          <p className="text-sm text-gray-500 italic mt-6">This article is general information for pet owners and is not a substitute for professional veterinary advice, diagnosis, or treatment. Always consult your veterinarian about your specific pet, and never medicate a dog or cat without veterinary guidance. Tick-range and Lyme information reflects Public Health Agency of Canada (PHAC) surveillance and general veterinary consensus as of 2026.</p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/blog/tick-repellent-for-dogs-ontario">Tick Repellent &amp; Prevention for Dogs in Ontario</Link></li>
            <li><Link href="/blog/tick-bite-on-dog-symptoms">Tick Bite on a Dog: Symptoms &amp; What to Watch For</Link></li>
            <li><Link href="/blog/how-to-remove-tick-from-dog-ontario">How to Remove a Tick From a Dog (Ontario Guide)</Link></li>
            <li><Link href="/blog/i-found-tick-on-my-dog-what-to-do">I Found a Tick on My Dog &mdash; What to Do</Link></li>
            <li><Link href="/tick-control">BuzzSkito Professional Tick Control Service</Link></li>
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

      <CTASection heading="Cut Down the Ticks in Your Own Backyard" subtext="Professional tick barrier spray for GTA yards — targets the lawn edges and leaf litter where ticks wait. From $597/season, or $497 bundled with a mosquito plan. Free quote." variant="dark" />
    </>
  )
}
