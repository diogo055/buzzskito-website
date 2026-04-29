import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'deer-tick-vs-dog-tick-canada'
const DATE = '2026-04-28'
const TITLE = 'Deer Tick vs Dog Tick — Canada Identification (2026)'

const FAQS = [
  {
    question: 'What is the difference between a deer tick and a dog tick?',
    answer: 'Three main differences. (1) Size: Deer ticks (blacklegged ticks, Ixodes scapularis) are 3 mm unfed — sesame seed sized. Dog ticks (American dog ticks, Dermacentor variabilis) are 5 mm unfed — apple seed sized. (2) Pattern: Deer ticks have a plain reddish-black body with no pattern. Dog ticks have a distinctive mottled grey-and-brown patterned shield (scutum). (3) Disease risk: Deer ticks transmit Lyme disease and are the major medical concern in Canada. Dog ticks rarely transmit disease in Canada (Rocky Mountain spotted fever is extraordinarily rare here). If you find a small, plain reddish-black tick, treat it as a deer tick and watch for Lyme symptoms.',
  },
  {
    question: 'Which tick is dangerous — deer tick or dog tick?',
    answer: 'In Canada, deer ticks (blacklegged ticks) are the dangerous one because they transmit Lyme disease — a bacterial infection that can cause chronic joint pain, neurological symptoms, and cardiac issues if untreated. Dog ticks (American dog ticks) rarely transmit any disease in Canada. Lyme cases in Ontario have increased over 1000% in the past decade as blacklegged tick populations expand. The medical priority is identifying and tracking deer tick bites — if you find a small, plain, reddish-black tick attached, save it, note the date, and watch for symptoms over the next 5 months.',
  },
  {
    question: 'How can I tell if a tick is a deer tick or a dog tick?',
    answer: 'Look at three features: SIZE (deer tick = sesame seed sized, dog tick = apple seed sized), PATTERN (deer tick = plain dark body with no markings, dog tick = mottled grey-brown patterned shield), and COLOUR (deer tick = reddish-brown body with darker legs, dog tick = brown body with grey-and-brown shield). If unsure, photograph the tick from above (showing the back) and submit to eTick.ca — Bishop\'s University identifies the species free within 1–3 days.',
  },
  {
    question: 'Do both deer ticks and dog ticks live in Canada?',
    answer: 'Yes — both are widespread across southern Canada. Deer ticks (blacklegged) are concentrated in southern Ontario, southern Quebec, southern Manitoba, parts of the Maritimes, and southern BC. Their range has expanded dramatically northward over the past 20 years due to warmer winters. Dog ticks (American dog ticks) are even more widespread, found in nearly every province south of the boreal forest. In the GTA specifically, both species coexist — deer ticks dominate forested ravines and conservation areas while dog ticks dominate grassy fields and yard edges.',
  },
  {
    question: 'What disease does the deer tick carry?',
    answer: 'The blacklegged tick (deer tick) is the primary vector in Canada for: (1) Lyme disease — the most common, caused by Borrelia burgdorferi bacteria. About 10–30% of blacklegged ticks in Ontario carry it. (2) Anaplasmosis — bacterial infection causing fever and flu-like symptoms. (3) Babesiosis — red blood cell parasite, less common. (4) Powassan virus — rare but severe neurological infection, increasing in Ontario. The 24-hour rule applies: ticks typically need to be attached for 24+ hours to transmit Lyme disease, which is why prompt removal dramatically reduces disease risk.',
  },
  {
    question: 'What does a deer tick look like vs a dog tick photo comparison?',
    answer: 'Deer tick (Ixodes scapularis): small (3 mm), oval, reddish-brown body with distinctly dark legs, smooth shield with no pattern. Engorged it becomes pea-sized and grey-blue. Dog tick (Dermacentor variabilis): larger (5 mm), oval, brown body with a clearly visible mottled grey-and-brown patterned shield (almost like decorative markings). Engorged it becomes cherry-pit sized and grey-blue. Side-by-side, the size difference and the pattern presence/absence are immediately obvious. See our Ontario tick identification guide for photos and descriptions.',
  },
  {
    question: 'Can deer ticks bite dogs?',
    answer: 'Yes. Despite the name "deer tick," blacklegged ticks bite many mammals including dogs, cats, rodents, deer, and humans. Dogs are particularly at risk because they spend time in tick habitat (grass, leaf litter, woods). Lyme disease in dogs is a real concern — symptoms include shifting-leg lameness, lethargy, fever, and swollen lymph nodes appearing 2–5 months after the bite. Vets recommend monthly tick preventatives (Bravecto, NexGard, Simparica, K9 Advantix II) for all dogs in tick-endemic areas, plus daily tick checks after outdoor walks in spring through fall.',
  },
  {
    question: 'Where do you find deer ticks vs dog ticks in your yard?',
    answer: 'Deer ticks prefer leaf litter, damp shaded areas, and the edges where lawn meets woods or dense brush. They overwinter in leaf litter and emerge as nymphs in spring (May–June). Dog ticks prefer grassy areas, meadow-like edges, and yard perimeters with tall vegetation. They overwinter as adults in protected ground spots. For yard treatment, both species are addressed by the same approach: barrier spray applied to lawn edges, leaf litter zones, fence lines, and shaded perimeters. BuzzSkito\'s tick barrier spray treats both species simultaneously.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Deer Tick vs Dog Tick · Canada Identification 2026',
  description: 'How to tell a deer tick (blacklegged) from a dog tick (American dog tick) in Canada. Size, pattern, disease risk, and prevention.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function DeerTickVsDogTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Deer tick vs dog tick comparison for Canada.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Deer Tick vs Dog Tick', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Deer Tick vs Dog Tick</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The Canadian field guide for telling them apart and knowing which one matters medically.</p>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Deer tick vs dog tick — what&rsquo;s the difference?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Deer ticks (blacklegged ticks) are SMALL (3 mm), PLAIN reddish-black, and DANGEROUS — they transmit Lyme disease.</strong> Dog ticks (American dog ticks) are <strong>LARGER (5 mm), have a distinctive PATTERNED grey-and-brown shield, and rarely transmit disease in Canada</strong>. If you find a small, plain, sesame-seed-sized tick, treat it as a Lyme-vector deer tick — save it, note the date, and watch for symptoms over the next 5 months. If you find a larger apple-seed-sized tick with decorative markings on its back, it&rsquo;s a dog tick and the medical risk is low. Both species exist across southern Canada and are addressed by the same yard control approach: barrier spray applied to lawn edges, leaf litter, fence lines, and shaded perimeters.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Side-by-Side Comparison</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Feature</th>
                  <th className="px-3 py-2 text-left">Deer Tick (Blacklegged)</th>
                  <th className="px-3 py-2 text-left">Dog Tick (American Dog Tick)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Scientific name', 'Ixodes scapularis', 'Dermacentor variabilis'],
                  ['Adult size unfed', '3 mm (sesame seed)', '5 mm (apple seed)'],
                  ['Engorged size', '7 mm (small pea)', '15 mm (cherry pit)'],
                  ['Body colour', 'Reddish-brown to black, plain', 'Brown with grey-brown patterned shield'],
                  ['Distinctive marking', 'NONE — plain dark body', 'Mottled grey-and-brown shield (scutum)'],
                  ['Legs', 'Dark / blackish', 'Brown'],
                  ['Habitat', 'Leaf litter, damp shaded forest, ravine edges', 'Grassy fields, meadows, trail edges'],
                  ['Lyme disease', 'YES — primary Canadian vector', 'No'],
                  ['Other diseases', 'Anaplasmosis, babesiosis, Powassan', 'Rocky Mountain spotted fever (rare in CA), tick paralysis in dogs'],
                  ['Range in Canada', 'Southern ON, QC, MB, NB, NS, southern BC', 'Most of southern Canada'],
                  ['Peak activity', 'May–July (nymphs), Aug–Oct (adults)', 'Apr–Jun (primary), Aug–Oct (secondary)'],
                  ['Medical priority', 'HIGH — watch for Lyme symptoms', 'LOW — local irritation usually only'],
                ].map(([feat, deer, dog]) => (
                  <tr key={feat} className="border-t border-navy-50">
                    <td className="px-3 py-2 font-semibold text-brand-800">{feat}</td>
                    <td className="px-3 py-2 text-gray-700">{deer}</td>
                    <td className="px-3 py-2 text-gray-700">{dog}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <h2>The Three-Second Test</h2>
          <p>If you find a tick and need to ID it quickly:</p>
          <ol>
            <li><strong>Is it tiny (sesame seed sized) and plain dark?</strong> → Deer tick. Treat as Lyme risk.</li>
            <li><strong>Is it larger (apple seed sized) with grey-brown decorative markings on its back?</strong> → Dog tick. Low disease risk.</li>
            <li><strong>If unsure</strong> → Photograph from above and submit to <a href="https://etick.ca" target="_blank" rel="noreferrer">eTick.ca</a>. Free identification within 1–3 days.</li>
          </ol>

          <h2>Why the Distinction Matters Medically</h2>
          <p>The deer tick is the entire reason Lyme disease exists in Canada. <strong>About 10–30% of blacklegged ticks in southern Ontario carry <em>Borrelia burgdorferi</em></strong>, the bacterium that causes Lyme. Untreated Lyme can progress to chronic joint pain, neurological symptoms, and cardiac issues. Caught early (within weeks of the bite), it&rsquo;s treatable with a 2–4 week antibiotic course (doxycycline) with full recovery in most cases.</p>
          <p>The dog tick is a much lower medical concern. While theoretically capable of transmitting Rocky Mountain spotted fever and tularemia, both diseases are extraordinarily rare in Canada — fewer than 5 confirmed RMSF cases per year nationwide. The main veterinary concern is tick paralysis in dogs (resolves with prompt tick removal).</p>

          <h2>Where Each One Lives in Your Yard</h2>
          <p>Both species can be in the same yard but prefer different micro-habitats:</p>
          <ul>
            <li><strong>Deer ticks</strong> live in <strong>leaf litter</strong>, especially at the lawn-to-woods transition zone. They thrive in damp, shaded conditions. If your yard backs onto a ravine, conservation area, forested park, or has any wooded edge, deer ticks are likely present. They climb up to about knee height on grass blades and brush, waiting to grab passing hosts.</li>
            <li><strong>Dog ticks</strong> live in <strong>grassy areas</strong>, meadow-like edges, and yard perimeters with tall vegetation. They prefer drier conditions than deer ticks and tolerate sun better. They climb higher up grass blades (waist height) waiting for larger mammal hosts.</li>
          </ul>
          <p>Yards bordering both grassland AND wooded areas (common in the GTA) host both species. Both are controlled by the same yard-spray approach.</p>

          <h2>What to Do When You Find Either One</h2>
          <p>The removal technique is identical for both species. See our complete guides:</p>
          <ul>
            <li><Link href="/blog/how-to-remove-tick-safely">How to Remove a Tick Safely (Humans)</Link></li>
            <li><Link href="/blog/how-to-remove-tick-from-dog-ontario">How to Remove a Tick from a Dog</Link></li>
            <li><Link href="/blog/i-found-tick-on-my-dog-what-to-do">I Found a Tick on My Dog — What to Do</Link></li>
            <li><Link href="/blog/tick-removal-tool-guide">Best Tick Removal Tools 2026</Link></li>
          </ul>

          <h2>Yard Prevention — Same Strategy for Both Species</h2>
          <p>Both species are addressed by the same yard control approach:</p>
          <ol>
            <li><strong>Mow grass to 3–4 inches</strong> — eliminates both species&rsquo; preferred grass-blade waiting positions.</li>
            <li><strong>Remove leaf litter</strong> from yard edges every spring and fall — eliminates deer tick overwintering habitat.</li>
            <li><strong>3-foot wood chip or gravel barrier</strong> between lawn and any wooded or grassy area — both species avoid dry sun-exposed barriers.</li>
            <li><strong>Discourage rodents</strong> (don&rsquo;t feed wildlife, store firewood off the ground) — mice are immature ticks&rsquo; primary host for both species.</li>
            <li><strong>Daily tick checks</strong> on yourself and dogs after walks in tick habitat. Concentrate on ears, armpits, paws, neck, tail base.</li>
            <li><strong>Vet-prescribed monthly tick preventative for dogs</strong> (Bravecto, NexGard, Simparica, K9 Advantix II) — protects against both species.</li>
            <li><strong>Professional yard barrier spray.</strong> <Link href="/tick-control">BuzzSkito&rsquo;s 5-spray tick season program</Link> targets both deer ticks and dog ticks at lawn edges, leaf litter, fence lines, and shaded perimeters. 80–95% population reduction. $597 standalone or tick add-on bundle available on quote.</li>
          </ol>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/american-dog-tick-canada">American Dog Tick — Canada Risk Guide</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario">What Ticks Look Like in Ontario</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026">Ontario Lyme Disease Risk Areas 2026</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Stop Both Tick Species Before They Reach Your Family" subtext="One yard barrier spray handles deer ticks AND dog ticks. From seasonal pricing on quote." variant="dark" />
    </>
  )
}
