import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'

const POST = TICK_BLOGS.supporting[1]

export const metadata: Metadata = buildMetadata({
  title: 'What Ticks Look Like in Ontario | ID Guide | BuzzSkito',
  description:
    'Visual guide to Ontario tick species — blacklegged, American dog, and lone star ticks. Nymph vs adult identification.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'How small is a deer tick nymph?', answer: 'A blacklegged tick nymph is approximately 1–1.5 mm — roughly the size of a poppy seed. They are extremely difficult to spot on skin, hair, or clothing, which is why they are responsible for the majority of Lyme disease transmissions in Ontario. Adults are larger (3–5 mm) and somewhat easier to detect.' },
  { question: 'What does a blacklegged tick look like compared to a dog tick?', answer: 'The blacklegged tick (deer tick) is smaller and has a distinctive reddish-orange body with black legs and a black scutum (shield) behind the head on females. The American dog tick is larger, with a mottled brown/cream pattern. After feeding, both species become significantly larger and more round — an engorged blacklegged tick can reach the size of a raisin.' },
  { question: 'Can I tell if a tick is carrying Lyme disease by looking at it?', answer: 'No. You cannot determine whether a tick is infected with Lyme disease or other pathogens by visual inspection alone. If you\'re concerned about a tick bite, contact your healthcare provider. Some provinces offer tick testing services; check with your local public health unit.' },
]

export default function WhatTicksLookLikePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Identify Ticks Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Identify Ticks Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          Knowing what ticks look like — and how small they can be — is the first step in protecting your family. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        <h2>The Three Ticks Ontario Homeowners Need to Know</h2>

        <h3>1. Blacklegged Tick (Deer Tick) — <em>Ixodes scapularis</em></h3>
        <p><strong>Why it matters:</strong> The primary carrier of Lyme disease in Ontario. Population is established and expanding across Southern Ontario.</p>
        <p><strong>Identification:</strong></p>
        <ul>
          <li><strong>Nymph:</strong> ~1–1.5 mm (poppy seed size). Translucent to light brown. 8 legs. Almost impossible to spot without magnification.</li>
          <li><strong>Adult female:</strong> ~3–4 mm unfed. Reddish-orange body with a black scutum (dorsal shield) and dark legs. After feeding: up to 10 mm, dark blue-grey.</li>
          <li><strong>Adult male:</strong> ~2–3 mm. Uniformly dark brown. Males feed less and are less commonly found attached to humans.</li>
        </ul>

        <h3>2. American Dog Tick — <em>Dermacentor variabilis</em></h3>
        <p><strong>Why it matters:</strong> Does not transmit Lyme disease, but can transmit Rocky Mountain Spotted Fever (rare in Ontario) and cause tick paralysis. Commonly found across GTA.</p>
        <p><strong>Identification:</strong></p>
        <ul>
          <li>Larger than blacklegged tick: females ~5 mm unfed, males ~3–4 mm</li>
          <li>Brown with distinctive white/cream mottled markings on the scutum (females) or across entire back (males)</li>
          <li>More likely to be found in open, grassy areas rather than wooded edges</li>
        </ul>

        <h3>3. Lone Star Tick — <em>Amblyomma americanum</em></h3>
        <p><strong>Why it matters:</strong> An emerging species in southwestern Ontario associated with warming temperatures. Can cause alpha-gal syndrome (red meat allergy).</p>
        <p><strong>Identification:</strong></p>
        <ul>
          <li>Medium-sized, reddish-brown</li>
          <li>Adult females have a distinctive single white or silver spot (the "lone star") in the centre of the back</li>
          <li>Currently rare in the GTA; more common in southwestern Ontario</li>
        </ul>

        <h2>Size Comparison: Why Nymphs Are So Dangerous</h2>
        <div className="not-prose bg-brand-50 border border-brand-100 rounded-2xl p-6 my-6">
          <h3 className="font-bold text-brand-900 mb-4 text-base">Blacklegged Tick Size Reference</h3>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            {[
              { stage: 'Larva', size: '< 1 mm', ref: 'Period (.)' },
              { stage: 'Nymph', size: '~1.5 mm', ref: 'Poppy seed' },
              { stage: 'Adult (unfed)', size: '~3–4 mm', ref: 'Sesame seed' },
              { stage: 'Adult (fed)', size: 'Up to 10 mm', ref: 'Small raisin' },
            ].map(({ stage, size, ref }) => (
              <div key={stage} className="bg-white rounded-xl p-3 border border-brand-200">
                <div className="font-bold text-brand-900">{stage}</div>
                <div className="text-amber-700 font-semibold">{size}</div>
                <div className="text-gray-400 text-xs mt-1">{ref}</div>
              </div>
            ))}
          </div>
        </div>

        <h2>Where Ticks Are Found in Ontario Yards</h2>
        <p>Knowing where to look is as important as knowing what to look for. Ticks concentrate at specific microhabitats:</p>
        <ul>
          <li><strong>Lawn/forest edge:</strong> The single most important zone — ticks quest (wait for hosts) on vegetation at the transition between maintained lawn and any naturalized area</li>
          <li><strong>Leaf litter and mulch beds:</strong> Ticks overwinter in leaf litter and emerge from these sites in spring</li>
          <li><strong>Woodpiles:</strong> Mice that carry Lyme disease live near woodpiles, and ticks cluster around these areas</li>
          <li><strong>Under decks and porches:</strong> Dark, humid zones that ticks use when conditions are dry or hot</li>
          <li><strong>Dense shrubs and ground cover:</strong> Ticks rest in humid vegetation between questing periods</li>
        </ul>

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
          <li><Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 hover:underline">How to Remove a Tick Safely</Link></li>
          <li><Link href="/blog/tick-season-ontario-when-are-ticks-active" className="text-brand-700 hover:underline">When Are Ticks Active in Ontario?</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Protect Your Yard from Ticks This Season" subtext="Professional tick spray kills ticks at all life stages. Free quote for your GTA property." variant="dark" />
    </>
  )
}
