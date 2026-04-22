import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
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

        <h2>Step 1: Don&apos;t Panic — Act Quickly and Carefully</h2>
        <p>The single most important factor in reducing Lyme disease transmission risk is how quickly you remove the tick. The blacklegged tick (deer tick) that transmits Lyme disease in Ontario generally needs to be attached for 24–36 hours to transmit the bacteria. Immediate, proper removal dramatically reduces your risk.</p>

        <h2>Step 2: Remove the Tick Correctly</h2>
        <p><strong>What you need:</strong> Fine-tipped tweezers (not the wide, blunt kind). A tick removal tool also works well.</p>
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
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">View Our Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Protect Your Yard Before a Tick Bites" subtext="BuzzSkito professional tick spray kills ticks at all life stages. Two treatments per season provide full protection." />
    </>
  )
}
