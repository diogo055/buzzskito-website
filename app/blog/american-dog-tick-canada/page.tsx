import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'american-dog-tick-canada'
const DATE = '2026-04-28'
const TITLE = 'American Dog Tick — Canada Identification & Risk Guide (2026)'

const FAQS = [
  {
    question: 'What is an American dog tick?',
    answer: 'The American dog tick (Dermacentor variabilis) is one of the most common tick species in eastern Canada, including Ontario. Adults are 5 mm long when unfed (apple-seed sized) and engorge to 15 mm after a blood meal. Distinctive feature: a mottled grey-and-brown patterned shield (scutum) on the back, distinguishing them from the smaller, plainer blacklegged tick. They prefer dogs and large mammals as hosts but will bite humans. American dog ticks rarely transmit Lyme disease but can carry Rocky Mountain spotted fever (rare in Canada) and tularemia.',
  },
  {
    question: 'Are American dog ticks dangerous in Canada?',
    answer: 'In Canada, American dog ticks are a low-to-moderate disease risk compared to blacklegged ticks. They CAN transmit: Rocky Mountain spotted fever (very rare in Canada — fewer than 5 confirmed cases per year nationally), tularemia (extremely rare), and tick paralysis (rare, occurs only when an attached tick remains attached for 4-7 days, mostly in dogs). They do NOT typically transmit Lyme disease — that is the blacklegged tick (Ixodes scapularis). The bite itself can cause local irritation and infection if not removed properly.',
  },
  {
    question: 'Where are American dog ticks found in Canada?',
    answer: 'American dog ticks are widespread across southern Canada from British Columbia to the Maritimes, with highest density in southern Ontario, southern Quebec, southern Manitoba, and Saskatchewan. They prefer grassy fields, meadows, hiking trails, and yard edges with tall vegetation — NOT dense forests where blacklegged ticks dominate. In Ontario they are common across the entire GTA and rural areas. Peak activity: April through September, with two peaks (May–June and August–September).',
  },
  {
    question: 'How do I tell an American dog tick from a deer tick?',
    answer: 'Three key differences: (1) Size — adult American dog ticks are 5 mm unfed (apple-seed sized); blacklegged "deer" ticks are 3 mm unfed (sesame-seed sized). (2) Pattern — American dog ticks have a distinctive mottled grey-and-brown patterned shield. Blacklegged ticks have a plain reddish-black body with no pattern. (3) Disease risk — American dog ticks rarely carry Lyme; blacklegged ticks are the main Lyme vector in Canada. If you find a tick that looks like it has decorative markings on its back, it\'s probably an American dog tick.',
  },
  {
    question: 'How do you remove an American dog tick?',
    answer: 'Same as any tick: use fine-tipped tweezers or a Tick Twister tool. Grasp the tick at the head, as close to your skin (or your pet\'s skin) as possible. Pull straight up with steady, even pressure — do not twist, jerk, or squeeze the body. The tick will release in 5–15 seconds. Clean the bite with rubbing alcohol or soap and water. Save the tick in a sealed plastic bag with a damp paper towel for potential identification. Wash your hands. Do NOT use Vaseline, matches, or alcohol applied to the attached tick — these methods cause regurgitation and increase disease risk.',
  },
  {
    question: 'Can American dog ticks make my dog sick?',
    answer: 'Yes, though the risk is lower than with blacklegged ticks. Health risks for dogs from American dog ticks include: tick paralysis (a toxin from saliva that causes progressive weakness if a tick remains attached 4-7 days — resolves within 24-72 hours of tick removal), babesiosis (rare red blood cell parasitic disease), and severe local reactions to bites. Ehrlichiosis is also possible but uncommon. Use a vet-prescribed monthly tick preventative (Bravecto, NexGard, K9 Advantix II) for protection. Daily tick checks after walks in grassy areas remain essential.',
  },
  {
    question: 'When are American dog ticks most active?',
    answer: 'In Ontario, American dog ticks have two activity peaks per year: a primary peak from late April through June (highest density), and a secondary peak from August through October. They are most active on warm, dry days in grassy and meadow habitats. Adults overwinter in leaf litter and emerge when soil temperatures consistently exceed 4°C. Larvae and nymphs are active during summer but rarely bite humans (they prefer small mammals like mice).',
  },
  {
    question: 'How do I prevent American dog ticks in my yard?',
    answer: 'Habitat modification first: keep grass mowed under 4 inches, clear leaf litter from yard edges, create a 3-foot wood chip or gravel barrier between lawn and any tall grass, woods, or trails. For dogs: monthly vet-prescribed preventative + daily tick checks after outdoor walks. For yard-level control, professional barrier spray applied to lawn edges, fence lines, and garden borders is the most effective option — BuzzSkito\'s 5-spray season program reduces yard tick populations by 80–95%, including American dog ticks and blacklegged ticks together.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'American Dog Tick · Canada ID & Risk Guide 2026',
  description: 'How to identify the American dog tick in Canada, where they live, disease risk, removal, and yard prevention. Ontario-focused tick guide.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function AmericanDogTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'American dog tick identification and risk guide for Canada.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'American Dog Tick', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">American Dog Tick</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Identification, disease risk, removal, and prevention for Canada&rsquo;s most common patterned tick species.</p>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">What is the American dog tick?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>The American dog tick (<em>Dermacentor variabilis</em>) is one of Canada&rsquo;s most common tick species — distinctive mottled grey-and-brown shield, 5 mm unfed (apple-seed sized), found in grassy fields and yard edges across southern Canada.</strong> They prefer dogs and large mammals but bite humans. <strong>They rarely transmit Lyme disease</strong> (that&rsquo;s the smaller blacklegged tick), but can carry Rocky Mountain spotted fever (very rare in Canada) and cause tick paralysis in dogs if attached 4–7 days. Peak activity in Ontario: late April–June and August–October. Remove with fine-tipped tweezers, save the tick, and watch for symptoms over the following weeks. The most effective yard-level prevention is professional barrier spray applied to lawn edges, fence lines, and shaded perimeters.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">American Dog Tick Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Scientific name', 'Dermacentor variabilis'],
                  ['Common names', 'American dog tick, wood tick'],
                  ['Adult unfed size', '5 mm long (apple-seed sized)'],
                  ['Adult engorged size', '15 mm long (cherry pit sized)'],
                  ['Distinctive feature', 'Mottled grey-and-brown patterned shield (scutum)'],
                  ['Habitat', 'Grassy fields, meadows, trail edges, yard perimeters'],
                  ['Range in Canada', 'Southern Ontario, Quebec, Manitoba, Saskatchewan, Maritimes, parts of BC'],
                  ['Peak activity', 'April–June (primary), August–October (secondary)'],
                  ['Primary hosts', 'Dogs, large mammals; will bite humans'],
                  ['Transmits Lyme?', 'NO — that\'s the blacklegged tick'],
                  ['Diseases (rare)', 'Rocky Mountain spotted fever, tularemia, tick paralysis'],
                  ['Best removal', 'Fine-tipped tweezers, pull straight up'],
                  ['Yard prevention', 'Mow short, clear leaf litter, professional barrier spray'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <h2>How to Identify an American Dog Tick</h2>
          <p>The American dog tick is the most visually distinctive tick species you&rsquo;ll find in Canada. Three identifying features:</p>
          <ol>
            <li><strong>Size:</strong> Adults are 5 mm long when unfed — about the size of an apple seed. After feeding for several days, they engorge to 15 mm (cherry pit sized) and turn grey-blue.</li>
            <li><strong>Patterned shield (scutum):</strong> The dorsal shield has distinct mottled grey, white, and brown markings — almost ornamental looking. Females have markings on the front half only; males have markings covering the entire back.</li>
            <li><strong>Long mouthparts:</strong> Visible from above, palpate-shaped. Longer than the blacklegged tick&rsquo;s short mouth.</li>
          </ol>
          <p>Compare to the <strong>blacklegged tick (deer tick)</strong>: smaller (3 mm), plain reddish-black body, no patterned markings, and the medical concern (Lyme disease vector). See our <Link href="/blog/what-ticks-look-like-ontario">full Ontario tick identification guide</Link> for visual differences.</p>

          <h2>Where They Live in Canada</h2>
          <p>American dog ticks are widespread across southern Canada with highest population density in:</p>
          <ul>
            <li>Southern Ontario (entire GTA, southern cottage country)</li>
            <li>Southern Quebec</li>
            <li>Southern Manitoba and Saskatchewan</li>
            <li>Maritimes (NB, NS, PEI)</li>
            <li>Parts of southern British Columbia (less common)</li>
          </ul>
          <p>Their preferred habitats: grassy fields, meadows, hiking trails with tall grass, yard edges with unmowed vegetation, and brushy areas. They are NOT dense-forest specialists like blacklegged ticks. If your yard borders a meadow, agricultural field, or unkept brush — that&rsquo;s prime American dog tick habitat.</p>

          <h2>Disease Risk in Canada — The Honest Numbers</h2>
          <h3>Low risk for humans</h3>
          <ul>
            <li><strong>Rocky Mountain spotted fever:</strong> Theoretically possible but extraordinarily rare in Canada. Fewer than 5 confirmed cases per year nationwide.</li>
            <li><strong>Tularemia:</strong> Extremely rare — most Canadian cases are in Indigenous communities of the prairie provinces with rabbit/rodent exposure.</li>
            <li><strong>Lyme disease:</strong> Essentially zero — American dog ticks are not the Lyme vector in Canada.</li>
          </ul>

          <h3>Moderate risk for dogs</h3>
          <ul>
            <li><strong>Tick paralysis:</strong> A toxin from female saliva. If a tick remains attached for 4–7 days, dogs may develop progressive weakness, ascending from rear legs to front legs to respiratory paralysis. Treatment is removal of the tick — full recovery within 24–72 hours. Severe untreated cases can be fatal but are rare with modern preventatives.</li>
            <li><strong>Babesiosis:</strong> A red blood cell parasite causing anemia. Rare but increasing.</li>
            <li><strong>Ehrlichiosis:</strong> Possible but uncommon.</li>
          </ul>

          <h2>What to Do When You Find One</h2>
          <h3>On a human</h3>
          <ol>
            <li>Use fine-tipped tweezers (or a Tick Twister tool).</li>
            <li>Grasp the tick at the head, as close to skin as possible — NOT the body.</li>
            <li>Pull straight up with steady pressure. Don&rsquo;t twist or jerk. Tick releases in 5–15 seconds.</li>
            <li>Clean the bite with rubbing alcohol.</li>
            <li>Save the tick in a sealed bag with a damp paper towel.</li>
            <li>Note the date and bite location. Watch for fever, rash, or fatigue over 14 days. See a doctor if anything appears.</li>
          </ol>

          <h3>On a dog</h3>
          <p>Same removal technique. After removal, watch for: lethargy, weakness in rear legs progressing forward (potential tick paralysis), excessive licking at the bite site, fever, swollen lymph nodes. Contact your vet if any appear. See our detailed <Link href="/blog/how-to-remove-tick-from-dog-ontario">tick removal guide for dogs</Link>.</p>

          <h2>Yard Prevention — What Actually Works</h2>
          <p>For yards near grassy fields, meadows, or trails where American dog ticks live:</p>
          <ol>
            <li><strong>Mow grass to 3 inches or less.</strong> Tall grass is tick highway.</li>
            <li><strong>Remove leaf litter and brush</strong> from yard edges every spring and fall.</li>
            <li><strong>Create a 3-foot wood chip or gravel barrier</strong> between lawn and any wooded/grassy area or trail.</li>
            <li><strong>Discourage rodents</strong> — they&rsquo;re the immature tick&rsquo;s primary host. Don&rsquo;t leave food out, store firewood off the ground.</li>
            <li><strong>Daily tick checks on dogs and yourself</strong> after time in tick habitat.</li>
            <li><strong>Vet-prescribed monthly tick preventative for dogs</strong> (Bravecto, NexGard, Simparica, K9 Advantix II).</li>
            <li><strong>Professional yard barrier spray.</strong> <Link href="/tick-control">BuzzSkito&rsquo;s 5-spray tick season program</Link> targets ticks at lawn edges, fence lines, and shaded perimeters where they actually live. Reduces yard tick populations by 80–95%, including both American dog ticks and blacklegged ticks. $597 standalone or tick add-on bundle available on quote.</li>
          </ol>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/deer-tick-vs-dog-tick-canada">Deer Tick vs Dog Tick — Canada Comparison</Link></li>
            <li><Link href="/blog/what-ticks-look-like-ontario">What Ticks Look Like in Ontario</Link></li>
            <li><Link href="/blog/lyme-disease-tick-prevention-ontario">Lyme Disease Prevention in Ontario</Link></li>
            <li><Link href="/blog/how-to-remove-tick-from-dog-ontario">How to Remove a Tick from a Dog</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Stop Finding Dog Ticks (And Deer Ticks) in Your Yard" subtext="Professional barrier spray reduces yard tick populations 80-95%. From seasonal pricing on quote." variant="dark" />
    </>
  )
}
