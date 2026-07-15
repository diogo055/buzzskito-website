import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_2, TICK_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS_2[2]

export const metadata: Metadata = buildMetadata({
  title: 'Tick Bite Symptoms & What to Do | Ontario',
  description:
    'Found a tick? Step-by-step guide: safe removal, Lyme disease symptoms to watch for, and when to seek medical care.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'How long does a tick need to be attached to transmit Lyme disease?',
    answer: "In Ontario, the blacklegged tick (Ixodes scapularis) typically needs to be attached for at least 24–36 hours to transmit the Lyme disease bacterium (Borrelia burgdorferi). This is why daily tick checks are so important — finding and removing a tick early dramatically reduces transmission risk.",
  },
  {
    question: 'What does a Lyme disease rash look like?',
    answer: 'The classic Lyme rash (erythema migrans) is a circular or oval expanding red rash that often (but not always) has a clear center — resembling a bull\'s-eye. It typically appears 3–30 days after a bite and can be warm to the touch but is usually not painful or itchy. Not everyone develops this rash.',
  },
  {
    question: 'Should I save the tick after removing it?',
    answer: 'Yes, if possible. Place it in a sealed plastic bag or container with a small piece of damp paper towel. Your doctor may recommend sending it to a lab for testing. Some Ontario public health units offer tick identification and testing services.',
  },
  {
    question: 'What if I cannot remove the tick completely?',
    answer: "If the mouthparts break off during removal, try to remove them with tweezers if possible. If you cannot get them out, leave them — your body will eventually expel them. Clean the area thoroughly. Do not try to burn or squeeze them out.",
  },
  {
    question: 'When should I go to the emergency room after a tick bite?',
    answer: 'Go to the ER immediately if you develop a high fever (above 39°C), severe headache, difficulty breathing, face drooping, or confusion after a tick bite. These can indicate rare but serious conditions like Rocky Mountain spotted fever or Powassan virus, which progress rapidly.',
  },
  {
    question: 'How long should you take doxycycline for a tick bite?',
    answer: 'That depends entirely on your healthcare provider\'s assessment, so do not self-prescribe. For a high-risk blacklegged tick bite in Ontario, doctors may offer a single preventive dose within 72 hours of removal as post-exposure prophylaxis, per Public Health Ontario. A confirmed Lyme disease infection is treated with a longer antibiotic course. The exact drug, dose, and duration are medical decisions — consult a healthcare provider.',
  },
  {
    question: 'How soon do you need antibiotics after a tick bite?',
    answer: 'If preventive antibiotics are warranted, Public Health Ontario notes they are generally most effective when started within 72 hours of removing a high-risk blacklegged tick. Not every bite needs antibiotics, though — the decision depends on the tick species, how long it was attached, and local Lyme disease risk. See a healthcare provider promptly after a bite so they can assess whether treatment is appropriate for you.',
  },
  {
    question: 'What do you do if a tick head is stuck in you?',
    answer: 'If the tick\'s head or mouthparts stay behind after removal, try to lift them out with clean fine-tipped tweezers. If they will not come out easily, leave them alone — your skin will usually push them out over time, much like a splinter. Clean the area with rubbing alcohol or soap and water. Do not dig, burn, or squeeze. If redness, swelling, or a rash develops, see a healthcare provider.',
  },
  {
    question: 'How long does a tick stay attached?',
    answer: 'Left undisturbed, a blacklegged tick can stay attached and feeding for three to seven days before dropping off on its own once fully engorged. That is why prompt removal matters — in Ontario the risk of Lyme disease transmission rises significantly after a tick has been attached 24–36 hours, per Public Health Ontario. Check your body, your children, and your pets daily after time outdoors so a tick never stays on that long.',
  },
  {
    question: 'How can you tell how long a tick has been attached?',
    answer: 'There is no exact way to know, but engorgement is the best clue: a flat, thin tick likely attached recently, while a swollen, balloon-like body suggests it has been feeding for a day or more. Use the last time you did a body check as your reference point. When in doubt, assume longer attachment and consult a healthcare provider, since Ontario Lyme disease risk climbs after 24–36 hours of attachment.',
  },
]

export default function TickBiteSymptomsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Tick Bite Symptoms Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick Bite Symptoms Ontario</span>
          </nav>
          <span className="bg-amber-700 text-amber-100 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <p className="text-amber-900 font-semibold text-sm">⚠️ Medical Disclaimer</p>
          <p className="text-amber-800 text-sm mt-1">This guide is for informational purposes only. If you have been bitten by a tick or are experiencing symptoms, consult a licensed medical professional. In emergencies, call 911 or go to the nearest emergency room.</p>
        </div>

        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          Finding a tick on yourself, your child, or your pet is alarming — but knowing exactly what to do makes all the difference. This step-by-step guide covers everything Ontario homeowners need to know from the moment of discovery to medical follow-up. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario</Link>.
        </p>

        <div className="not-prose bg-brand-50 border-l-4 border-brand-500 rounded-r-xl px-5 py-4 mb-8">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-700 mb-1">Quick answer · Updated July 2026</p>
          <p className="speakable text-gray-800 leading-relaxed">
            A fresh tick bite usually looks like a small, firm red bump — much like a mosquito bite — sometimes with the tick still attached. Watch the site for 3–30 days: an expanding red or bull&apos;s-eye rash (erythema migrans) that grows over several days signals possible Lyme disease and needs a doctor.
          </p>
        </div>

        <AffiliateDisclosure />

        <h2>Tick Bite vs. Mosquito Bite vs. Spider Bite: How to Tell the Difference</h2>
        <p>The first thing most people want to know is what the mark actually is. Use this comparison table to tell a tick bite apart from the two things it&apos;s most often confused with. When in doubt, treat an expanding rash after outdoor exposure as a tick bite until a doctor says otherwise.</p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-50 text-left">
                <th className="border border-gray-200 px-3 py-2 font-semibold text-brand-900"> </th>
                <th className="border border-gray-200 px-3 py-2 font-semibold text-brand-900">Tick bite</th>
                <th className="border border-gray-200 px-3 py-2 font-semibold text-brand-900">Mosquito bite</th>
                <th className="border border-gray-200 px-3 py-2 font-semibold text-brand-900">Spider bite</th>
              </tr>
            </thead>
            <tbody className="align-top text-gray-700">
              <tr>
                <td className="border border-gray-200 px-3 py-2 font-semibold">Appearance</td>
                <td className="border border-gray-200 px-3 py-2">Small firm red bump; tick may still be attached; sometimes a later expanding bull&apos;s-eye ring</td>
                <td className="border border-gray-200 px-3 py-2">Puffy raised welt with a small central dot; no attached insect</td>
                <td className="border border-gray-200 px-3 py-2">Often two close puncture marks; may swell, redden or blister</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2 font-semibold">Timing</td>
                <td className="border border-gray-200 px-3 py-2">Bump right away; bull&apos;s-eye rash appears 3–30 days later</td>
                <td className="border border-gray-200 px-3 py-2">Reaction within minutes to hours; fades in a few days</td>
                <td className="border border-gray-200 px-3 py-2">Pain or swelling within minutes to hours</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 font-semibold">Itch / pain</td>
                <td className="border border-gray-200 px-3 py-2">Usually painless and not very itchy — easy to miss</td>
                <td className="border border-gray-200 px-3 py-2">Intensely itchy</td>
                <td className="border border-gray-200 px-3 py-2">Often painful or stinging</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2 font-semibold">When to worry</td>
                <td className="border border-gray-200 px-3 py-2">Expanding rash, fever or flu-like symptoms within 30 days — see a doctor</td>
                <td className="border border-gray-200 px-3 py-2">Rarely serious; watch for signs of infection from scratching</td>
                <td className="border border-gray-200 px-3 py-2">Spreading redness, ulcer or severe pain — seek care</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">Source: <a href="https://www.publichealthontario.ca/" target="_blank" rel="noopener" className="text-brand-700 underline">Public Health Ontario</a> and the <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener" className="text-brand-700 underline">Government of Canada Lyme disease</a> resources.</p>

        <h2>Step 1: Don&apos;t Panic — Act Quickly and Carefully</h2>
        <p>The single most important factor in reducing Lyme disease transmission risk is how quickly you remove the tick. The blacklegged tick (deer tick) that transmits Lyme disease in Ontario generally needs to be attached for 24–36 hours to transmit the bacteria. Immediate, proper removal dramatically reduces your risk.</p>

        <h2>Step 2: Remove the Tick Correctly</h2>
        <p><strong>What you need:</strong> Fine-tipped tweezers (not the wide, blunt kind). A dedicated tick removal tool also works well and makes it easier to grip close to the skin — see our <Link href="/blog/tick-removal-tool-guide" className="text-brand-700 hover:underline">tick removal tool guide</Link> for the options we recommend. <BuyLink search="tick removal tool tweezers">Check tick-removal tools on Amazon.ca →</BuyLink></p>
        <ol>
          <li>Grasp the tick as close to the skin surface as possible with the tweezers.</li>
          <li>Pull upward with steady, even pressure — do not twist or jerk. Twisting can cause the mouthparts to break off and remain in the skin.</li>
          <li>Do not squeeze the tick&apos;s body — this can force bacteria into the bite wound.</li>
          <li>After removal, thoroughly clean the bite area with rubbing alcohol or soap and water.</li>
          <li>Dispose of the tick by placing it in a sealed bag, submerging it in alcohol, or flushing it down the toilet.</li>
        </ol>

        <h2>Step 3: What NOT to Do</h2>
        <p>Several commonly shared methods are dangerous and can increase infection risk:</p>
        <ul>
          <li><strong>Do not</strong> use petroleum jelly, nail polish, or heat to make the tick back out — these methods can cause the tick to release more bacteria into the wound.</li>
          <li><strong>Do not</strong> squeeze or crush the tick&apos;s body with your fingers.</li>
          <li><strong>Do not</strong> use a lit match or cigarette near the bite.</li>
        </ul>

        <h2>Step 4: Record Key Information</h2>
        <p>Note the following for your medical records:</p>
        <ul>
          <li>The date and time you found the tick</li>
          <li>Where on your body it was attached</li>
          <li>How long you estimate it may have been attached (use the last time you checked as a reference)</li>
          <li>Whether the tick was engorged (swollen with blood) — indicating it had been feeding for some time</li>
        </ul>
        <p>Save the tick in a sealed bag if possible — your doctor may recommend identification or testing.</p>

        <h2>Step 5: Monitor for Symptoms</h2>
        <p>Over the 30 days following a tick bite, monitor yourself and any affected family members for the following:</p>

        <h3>Early Lyme Disease Symptoms (Days 3–30)</h3>
        <ul>
          <li>Expanding red rash (erythema migrans) — often bull&apos;s-eye shaped, appearing at or near the bite site</li>
          <li>Flu-like symptoms: fatigue, fever, chills, headache, muscle aches, joint pain</li>
          <li>Swollen lymph nodes near the bite area</li>
        </ul>
        <p>Important: not everyone with Lyme disease develops a rash. Approximately 20–30% of confirmed Ontario Lyme cases show no bull&apos;s-eye pattern. If you develop any flu-like symptoms following a tick bite, contact your doctor even without a rash.</p>

        <h3>Symptoms Requiring Emergency Care</h3>
        <p>Go to the emergency room immediately if you develop any of the following:</p>
        <ul>
          <li>High fever above 39°C / 102°F</li>
          <li>Severe headache or stiff neck</li>
          <li>Facial drooping or paralysis (Bell&apos;s palsy)</li>
          <li>Confusion or disorientation</li>
          <li>Heart palpitations or chest pain</li>
          <li>Difficulty walking or extreme weakness</li>
        </ul>
        <p>These can indicate serious conditions including Powassan virus (rare, but present in Ontario) and neurological Lyme disease, both of which progress rapidly.</p>

        <h2>Step 6: When to See a Doctor</h2>
        <p>Contact your family doctor or a walk-in clinic if:</p>
        <ul>
          <li>You found an engorged tick (suggesting attachment of more than 24 hours)</li>
          <li>You cannot completely remove the tick</li>
          <li>You develop any rash at or near the bite site within 30 days</li>
          <li>You develop flu-like symptoms within 30 days of a tick bite</li>
          <li>You are immunocompromised or pregnant</li>
        </ul>
        <p>Your doctor may prescribe a single preventive dose of doxycycline antibiotic if the bite meets certain criteria — this has been shown to reduce Lyme disease risk when given within 72 hours of tick removal.</p>

        <h2>Ontario Tick Risk by Region</h2>
        <p>Blacklegged tick populations are established across much of Southern Ontario, with the highest confirmed activity in:</p>
        <ul>
          <li>The Oak Ridges Moraine (Richmond Hill, King City, Caledon, Aurora)</li>
          <li>Long Point and Point Pelee</li>
          <li>Rouge National Urban Park (Scarborough, Markham)</li>
          <li>Rattray Marsh, Credit River valley (Mississauga, Georgetown)</li>
          <li>Halton Hills and the Niagara Escarpment corridor</li>
        </ul>

        <h2>Prevention: The Best Strategy</h2>
        <p>The most effective approach is ensuring ticks never get established in your yard. Professional tick barrier spray from BuzzSkito targets the lawn edges, garden borders, and wooded property lines where ticks concentrate — killing them at all life stages (larvae, nymphs, adults) and providing up to 30 days of residual protection.</p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-amber-50 rounded-xl border border-amber-100">
              <summary className="cursor-pointer px-5 py-3 font-semibold text-brand-900 list-none">{question}</summary>
              <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 hover:underline">How to Remove a Tick Safely</Link></li>
          <li><Link href="/blog/tick-removal-tool-guide" className="text-brand-700 hover:underline">Best Tick Removal Tools (Buyer&apos;s Guide)</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">View Our Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Protect Your Yard Before a Tick Bites" subtext="BuzzSkito professional tick spray kills ticks at all life stages. Our tick season program includes 5 treatments for full-season protection." />
    </>
  )
}
