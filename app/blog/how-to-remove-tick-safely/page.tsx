import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'

const POST = TICK_BLOGS.supporting[2]

export const metadata: Metadata = buildMetadata({
  title: 'How to Remove a Tick Safely (Ontario Guide) | BuzzSkito',
  description: 'Step-by-step tick removal using fine-tipped tweezers, what NOT to do, post-removal monitoring timeline, and when to seek medical advice in Ontario.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'Should I save the tick after removing it?', answer: 'Yes — place it in a small sealed container or ziplock bag with a moist paper towel. Note the date of removal. Some Ontario public health units offer tick identification and testing. Your healthcare provider may also want to see it if you develop symptoms. Ontario residents can submit ticks to etick.ca for identification.' },
  { question: 'Do I need antibiotics after every tick bite?', answer: 'Not necessarily. The decision to use preventive antibiotics (post-exposure prophylaxis) depends on the type of tick, how long it was attached, where you were bitten, and local tick infection rates. Contact your healthcare provider within 72 hours of removing a blacklegged tick that was attached for more than 24 hours for an assessment.' },
  { question: 'What if part of the tick\'s head stays in the skin?', answer: 'If mouth parts remain after removal, try to remove them with clean tweezers. If you can\'t, leave the area clean and let it heal naturally — the body will eventually expel the remaining parts. Contact your doctor if the area shows signs of infection (increasing redness, swelling, warmth, or discharge).' },
]

export default function RemoveTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Remove a Tick', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'tick' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Remove a Tick</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          <strong>Medical disclaimer:</strong> This article provides general first-aid information. Always consult a licensed healthcare provider for medical advice after a tick bite. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        <h2>What You Need</h2>
        <ul>
          <li>Fine-tipped tweezers (not blunt-nosed household tweezers)</li>
          <li>Rubbing alcohol or soap and water</li>
          <li>A small sealed container or ziplock bag (to save the tick)</li>
        </ul>

        <h2>Step-by-Step Tick Removal</h2>

        <h3>Step 1: Get Fine-Tipped Tweezers</h3>
        <p>Use proper fine-tipped tweezers — not blunt-nosed household tweezers. Fine-tipped tweezers allow you to grasp the tick's mouthparts close to the skin surface without squeezing the body.</p>

        <h3>Step 2: Grasp the Tick Close to the Skin</h3>
        <p>Position the tweezers as close to the skin surface as possible — you want to grab the tick's mouthparts (where it's attached), not the body. Grasping the engorged body risks squeezing infected fluids into the bite wound.</p>

        <h3>Step 3: Pull Straight Up with Steady, Even Pressure</h3>
        <p>Pull upward with slow, steady, even pressure. Do not twist or jerk — this can cause the mouthparts to break off and remain in the skin. Maintain consistent upward pressure until the tick releases.</p>

        <h3>Step 4: Clean the Bite Area</h3>
        <p>Once the tick is removed, clean the bite site and your hands thoroughly with rubbing alcohol or soap and water.</p>

        <h3>Step 5: Save the Tick</h3>
        <p>Place the removed tick in a sealed container with a slightly moist paper towel. Label it with the date of removal. You may be able to submit it to your local public health unit for identification and testing. Ontario residents can use <strong>etick.ca</strong> for tick identification.</p>

        <h3>Step 6: Monitor for Symptoms</h3>
        <p>Watch the bite site and your general health for the following 30 days:</p>
        <ul>
          <li>A bull's-eye rash (expanding ring around the bite site) — Lyme disease indicator</li>
          <li>Fever, chills, fatigue, headache, or muscle aches</li>
          <li>Joint pain or swelling</li>
        </ul>
        <p>If any symptoms develop, contact your healthcare provider promptly. Early treatment is highly effective.</p>

        <h2>What NOT to Do When Removing a Tick</h2>
        <div className="not-prose bg-red-50 border border-red-200 rounded-2xl p-6 my-6">
          <h3 className="font-bold text-red-900 mb-3">❌ Do NOT:</h3>
          <ul className="space-y-2 text-sm text-red-800">
            <li>✗ Crush or squeeze the tick's body — this can force infected fluid into the wound</li>
            <li>✗ Twist or jerk the tick — mouthparts can break off and remain embedded</li>
            <li>✗ Use petroleum jelly, nail polish, or heat to "suffocate" the tick — these methods are ineffective and may stimulate the tick to release more fluid</li>
            <li>✗ Use your fingers to remove the tick — use tweezers</li>
            <li>✗ Dispose of the tick before identifying it or saving it for testing</li>
          </ul>
        </div>

        <h2>When to See a Doctor in Ontario</h2>
        <p>Contact your healthcare provider if:</p>
        <ul>
          <li>You removed a blacklegged tick that was attached for 24+ hours</li>
          <li>You develop a rash within 30 days of a tick bite (even without the classic bull's-eye pattern)</li>
          <li>You develop fever, fatigue, headache, or joint pain in the weeks after a tick bite</li>
          <li>The bite site shows signs of infection (increasing redness, swelling, warmth, or discharge)</li>
        </ul>
        <p>Lyme disease is highly treatable when caught early. Don't wait if you're concerned.</p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                <span>{question}</span>
                <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Prevent Tick Bites Before They Happen" subtext="Professional yard treatment reduces tick populations at the source. Free quote available." variant="dark" />
    </>
  )
}
