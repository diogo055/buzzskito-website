import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'

const POST = TICK_BLOGS.supporting[0]

export const metadata: Metadata = buildMetadata({
  title: 'Lyme Disease Prevention in Ontario: A Homeowner\'s Complete Guide | BuzzSkito',
  description: 'Ontario Lyme disease risk zones, blacklegged tick lifecycle, prevention strategies for your yard, and what to do after a tick bite — for GTA and Southern Ontario homeowners.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'What are the symptoms of Lyme disease?', answer: 'Early Lyme disease (3–30 days after tick bite) symptoms include a characteristic expanding bull\'s-eye rash (erythema migrans) at the bite site, fever, chills, headache, fatigue, muscle and joint aches. Not everyone develops the rash. If you\'ve had a tick bite and develop these symptoms, see a doctor promptly. Early treatment with antibiotics is highly effective.' },
  { question: 'How long does a tick need to be attached to transmit Lyme disease?', answer: 'Research indicates that a blacklegged tick generally needs to be attached for 24–36 hours to transmit the Lyme disease bacterium (Borrelia burgdorferi). This is why prompt tick removal is so important — finding and removing ticks within 24 hours of attachment significantly reduces transmission risk.' },
  { question: 'Is Lyme disease treatable?', answer: 'Yes. Lyme disease caught in the early stage (localized infection) is very effectively treated with a course of antibiotics (typically doxycycline or amoxicillin). Early treatment prevents progression to more serious stages. Disseminated or late-stage Lyme disease is more complex to treat, reinforcing the importance of early detection and prevention.' },
]

export default function LymeDiseasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Lyme Disease Prevention Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Lyme Disease Prevention Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          <strong>Medical disclaimer:</strong> This article provides general public health information about Lyme disease risk in Ontario. Always consult a licensed healthcare provider for medical advice, diagnosis, and treatment. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        <h2>Lyme Disease in Ontario: A Growing Concern</h2>
        <p>Lyme disease has become one of the fastest-growing infectious diseases in Canada. The Public Health Agency of Canada reported significant increases in confirmed cases over the past decade, driven primarily by the northward expansion of the blacklegged tick (<em>Ixodes scapularis</em>) as Ontario's winters warm. Cases have been confirmed in every GTA municipality, and the geographic risk zone expands each year.</p>
        <p>Ontario Public Health now classifies much of Southern Ontario — including Mississauga, Hamilton, Oakville, Toronto, and Brampton — as areas with established blacklegged tick populations and ongoing Lyme disease risk.</p>

        <h2>How Lyme Disease Is Transmitted</h2>
        <p>Lyme disease is caused by the bacterium <em>Borrelia burgdorferi</em>, which is carried by blacklegged ticks. The tick acquires the bacterium by feeding on infected rodents (primarily white-footed mice) in its larval or nymph stages. When that infected tick later feeds on a human, it can transmit the pathogen through its saliva.</p>
        <p>Key facts about transmission:</p>
        <ul>
          <li>Not all blacklegged ticks carry Lyme disease — infection rates in Ontario tick populations vary by location and year</li>
          <li>Transmission generally requires the tick to be attached for at least 24–36 hours</li>
          <li>Nymphs (tiny, poppy-seed–sized) are responsible for most human Lyme disease cases because they are hard to see and often feed unnoticed</li>
          <li>You cannot get Lyme disease from another person, from pets directly, or from the environment</li>
        </ul>

        <h2>Ontario Lyme Disease Risk Areas</h2>
        <p>The highest-risk areas in Southern Ontario for Lyme disease exposure are regions with established blacklegged tick populations:</p>
        <ul>
          <li><strong>Mississauga / Peel Region:</strong> Confirmed blacklegged tick populations in Credit Valley, Rattray Marsh, and adjacent Conservation Areas. See: <Link href="/mississauga-tick-spray" className="text-brand-700 hover:underline">Mississauga tick control</Link></li>
          <li><strong>Hamilton:</strong> Dundas Valley, Cootes Paradise, and escarpment areas are high-risk zones. See: <Link href="/hamilton-tick-spray-1" className="text-brand-700 hover:underline">Hamilton tick control</Link></li>
          <li><strong>Toronto:</strong> Don Valley, High Park, and ravine corridors confirmed. See: <Link href="/toronto-tick-spray-1" className="text-brand-700 hover:underline">Toronto tick control</Link></li>
          <li><strong>Oakville / Burlington:</strong> Bronte Creek, RBG, Escarpment trails. See: <Link href="/oakville-tick-spray-1" className="text-brand-700 hover:underline">Oakville</Link> and <Link href="/burlington-tick-spray" className="text-brand-700 hover:underline">Burlington tick control</Link></li>
        </ul>

        <h2>Prevention Strategies: Your Layers of Defense</h2>
        <h3>Layer 1: Reduce Ticks in Your Yard</h3>
        <p>Professional <Link href="/tick-control" className="text-brand-700 hover:underline">tick barrier spray</Link> reduces tick populations in the highest-risk zones of your property by up to 90%. Combined with habitat modification (leaf removal, lawn maintenance, wood-edge barriers), this is the most effective way to reduce your family's tick exposure at home.</p>

        <h3>Layer 2: Personal Protection</h3>
        <ul>
          <li>Wear light-coloured clothing so ticks are easier to spot</li>
          <li>Tuck pants into socks when in long grass or wooded areas</li>
          <li>Apply DEET or icaridin repellent to skin and clothing</li>
          <li>Use permethrin-treated clothing for frequent outdoor activities</li>
        </ul>

        <h3>Layer 3: Tick Checks</h3>
        <p>After being outdoors, do a thorough tick check of yourself, children, and pets. Check:</p>
        <ul>
          <li>Scalp and hairline</li>
          <li>Behind ears</li>
          <li>Armpits and groin</li>
          <li>Behind knees</li>
          <li>Between toes</li>
        </ul>
        <p>Shower within 2 hours of coming indoors — this helps find ticks and may wash off unattached ones.</p>

        <h3>Layer 4: Prompt Removal</h3>
        <p>If you find a tick attached, remove it promptly with fine-tipped tweezers. See: <Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 hover:underline">How to Remove a Tick Safely</Link></p>

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
          <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></li>
          <li><Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 hover:underline">How to Remove a Tick Safely</Link></li>
          <li><Link href="/blog/tick-season-ontario-when-are-ticks-active" className="text-brand-700 hover:underline">When Are Ticks Active in Ontario?</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Reduce Your Family's Lyme Disease Risk This Season" subtext="Professional tick spray significantly reduces tick populations in your yard. Free quote available." variant="dark" />
    </>
  )
}
