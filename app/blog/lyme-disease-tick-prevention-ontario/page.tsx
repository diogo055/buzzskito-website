import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'

const POST = TICK_BLOGS.supporting[0]

export const metadata: Metadata = buildMetadata({
  title: 'Lyme Disease Ontario: Prevention Guide',
  description: 'Lyme disease Ontario symptoms, risk zones, pet warning signs, and how professional tick spray protects your GTA yard. Updated April 2026.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'What are the early symptoms of Lyme disease in Ontario?',
    answer: 'Early symptoms appear 3–30 days after a tick bite: an expanding bull\'s-eye rash (erythema migrans) at the bite site, fever, chills, fatigue, headache, and muscle or joint aches. Not everyone develops the rash. If you\'ve been bitten and develop any of these symptoms, see a doctor promptly — early antibiotic treatment is highly effective.',
  },
  {
    question: 'How long does a tick need to be attached to transmit Lyme disease?',
    answer: 'A blacklegged tick generally needs to be attached for 24–36 hours before the Lyme bacterium (Borrelia burgdorferi) can transfer. This is why daily tick checks matter — finding and removing a tick within 24 hours of attachment dramatically reduces your risk.',
  },
  {
    question: 'Can my dog or cat get Lyme disease in Ontario?',
    answer: 'Dogs are susceptible to Lyme disease and can develop fever, lameness, swollen joints, and lethargy. Most cats appear resistant to clinical illness, though they can carry ticks into your home. Ask your veterinarian about the Lyme vaccine for dogs and year-round tick preventatives. Never use dog tick products on cats.',
  },
  {
    question: 'Is Lyme disease common in the GTA?',
    answer: 'Yes and growing. Public Health Ontario confirms established blacklegged tick populations across Mississauga, Hamilton, Toronto, Oakville, Burlington, and Brampton. Reported Lyme disease cases in Ontario have increased significantly over the past decade as tick habitat expands northward with milder winters.',
  },
  {
    question: 'Is Lyme disease treatable?',
    answer: 'Yes. Early-stage Lyme disease responds well to a course of antibiotics such as doxycycline or amoxicillin. Caught early, most people recover fully. Late-stage or disseminated Lyme is harder to treat, which is why early diagnosis — and prevention in the first place — makes such a difference.',
  },
  {
    question: 'Does professional tick spray actually reduce Lyme disease risk?',
    answer: 'Yes. Professional barrier spray applied to your yard\'s tick habitats — leaf litter, garden edges, shaded grass, wood borders — kills blacklegged ticks on contact and provides residual protection for up to 30 days. Studies on similar treatments show tick population reductions of up to 90% in treated areas.',
  },
  {
    question: 'What should I do if I find a tick on myself or my child?',
    answer: 'Use fine-tipped tweezers to grasp the tick as close to the skin as possible and pull straight upward with steady pressure. Do not twist, crush, or apply heat. Clean the bite area with rubbing alcohol. Note the date and, if possible, submit the tick to eTick.ca for identification. See a doctor if symptoms develop within 30 days.',
  },
]

export default function LymeDiseasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date, dateModified: '2026-04-20' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Lyme Disease Prevention Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Lyme Disease Prevention Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Lyme Disease in Ontario: Symptoms, Risk Areas, and How to Protect Your Family
          </h1>
          <p className="text-brand-300 text-sm">
            Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · Updated April 20, 2026 · By BuzzSkito
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">

        {/* Medical disclaimer */}
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          <strong>Medical disclaimer:</strong> This article provides general public health information about Lyme disease risk in Ontario. Always consult a licensed healthcare provider for medical advice, diagnosis, and treatment. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        {/* Hook */}
        <p>
          Last June, a Brampton mom found a tiny dark speck on the back of her nine-year-old's knee after an afternoon at Chinguacousy Park. She almost mistook it for a freckle. It wasn't. The tick had been attached long enough that her doctor ordered a precautionary course of antibiotics. Her daughter was fine. But she called us the next day asking what she could do so it never happened again.
        </p>
        <p>
          That story is not unusual. Lyme disease is now the most commonly reported vector-borne illness in Canada, and southern Ontario sits squarely in the highest-risk zone. Here is what every GTA homeowner needs to know.
        </p>

        {/* What is Lyme disease */}
        <h2>What Is Lyme Disease?</h2>
        <p>
          Lyme disease is a bacterial infection caused by <em>Borrelia burgdorferi</em>, transmitted to humans through the bite of an infected blacklegged tick (<em>Ixodes scapularis</em>), also called the deer tick. The tick picks up the bacterium by feeding on white-footed mice and other small mammals during its larval and nymph stages. When that same tick later feeds on a person, it can pass the pathogen into the bloodstream.
        </p>
        <p>
          It is not contagious between people or between pets and people. You cannot catch it from touching a tick that is not attached, and a bite does not guarantee infection — not every blacklegged tick carries the bacterium. But given how difficult ticks are to spot (nymphs are the size of a poppy seed) and how serious late-stage Lyme can become, prevention is far better than treatment.
        </p>

        {/* Is it in Ontario */}
        <h2>Is Lyme Disease a Real Risk in Ontario?</h2>
        <p>
          Yes — and the risk has grown substantially. Public Health Ontario surveillance data shows a steady increase in confirmed Lyme disease cases province-wide over the past decade. The primary driver is range expansion: blacklegged ticks have moved northward into southern and central Ontario as milder winters allow them to survive and reproduce in areas that were previously too cold.
        </p>
        <p>
          Public Health Ontario currently identifies the following as areas with established or growing blacklegged tick populations:
        </p>
        <ul>
          <li><strong>Mississauga / Peel Region:</strong> Credit Valley, Rattray Marsh, and adjacent conservation corridors. See our <Link href="/mississauga-tick-spray" className="text-brand-700 hover:underline">Mississauga tick control</Link> service.</li>
          <li><strong>Hamilton:</strong> Dundas Valley, Cootes Paradise, and the Niagara Escarpment trails carry some of the highest tick densities in the province. See our <Link href="/hamilton-tick-spray" className="text-brand-700 hover:underline">Hamilton tick control</Link> service.</li>
          <li><strong>Toronto:</strong> Don Valley ravines, High Park, and connected green corridors have confirmed populations. See our <Link href="/toronto-tick-spray" className="text-brand-700 hover:underline">Toronto tick control</Link> service.</li>
          <li><strong>Oakville and Burlington:</strong> Bronte Creek, Royal Botanical Gardens, and escarpment greenways are active risk zones. See our <Link href="/oakville-tick-spray" className="text-brand-700 hover:underline">Oakville</Link> and <Link href="/burlington-tick-spray" className="text-brand-700 hover:underline">Burlington tick control</Link> services.</li>
          <li><strong>Brampton:</strong> Humber River corridor and park edges. See our <Link href="/brampton-tick-spray" className="text-brand-700 hover:underline">Brampton tick control</Link> service.</li>
        </ul>
        <p>
          If your backyard backs onto a ravine, a greenbelt, a conservation area, or even an unmaintained neighbour's lot, blacklegged ticks can migrate onto your property on deer and small mammals.
        </p>

        {/* Symptoms in humans */}
        <h2>Symptoms of Lyme Disease in Humans</h2>
        <h3>Early localised (3–30 days after bite)</h3>
        <ul>
          <li>Bull's-eye rash (erythema migrans) expanding outward from the bite site — present in roughly 70–80% of cases</li>
          <li>Fever and chills</li>
          <li>Fatigue that feels out of proportion to activity</li>
          <li>Headache</li>
          <li>Muscle and joint aches</li>
          <li>Swollen lymph nodes near the bite</li>
        </ul>
        <p>
          The absence of a rash does not rule out infection. Some people develop no visible rash at all, or the rash appears in a location that is easy to miss (scalp, behind the knee, in a skin fold).
        </p>
        <h3>Early disseminated (days to weeks after bite)</h3>
        <ul>
          <li>Multiple rashes appearing elsewhere on the body</li>
          <li>Bell's palsy (facial drooping on one or both sides)</li>
          <li>Severe headaches and neck stiffness</li>
          <li>Heart palpitations or irregular heartbeat (Lyme carditis)</li>
          <li>Shooting pain, numbness, or tingling in the hands and feet</li>
        </ul>
        <h3>Late disseminated (months after bite, if untreated)</h3>
        <ul>
          <li>Severe arthritis, particularly in the knees</li>
          <li>Cognitive difficulties, memory problems, brain fog</li>
          <li>Chronic fatigue</li>
        </ul>
        <p>
          If you develop any of these symptoms and have had a tick bite, or have been in tick habitat in the GTA recently, see your doctor and mention the possible exposure. Early antibiotic treatment almost always results in full recovery.
        </p>

        {/* Symptoms in pets */}
        <h2>Lyme Disease Symptoms in Dogs and Cats</h2>
        <p>
          Your pets spend more time low to the ground than you do, which makes them effective tick magnets. A dog that walks the same ravine trail you do is likely picking up more ticks — and carrying some of them back into your home.
        </p>
        <h3>Dogs</h3>
        <p>Dogs are genuinely susceptible to Lyme disease. Symptoms often appear 2–5 months after infection and can include:</p>
        <ul>
          <li>Sudden lameness that shifts from leg to leg over days</li>
          <li>Swollen, painful joints</li>
          <li>Fever (above 39.5°C)</li>
          <li>Loss of appetite and lethargy</li>
          <li>Swollen lymph nodes</li>
          <li>In rare severe cases, kidney disease (Lyme nephropathy)</li>
        </ul>
        <p>
          A Lyme vaccine is available for dogs and is worth discussing with your veterinarian if you live near ravines or conservation areas. Year-round tick preventatives are also recommended for dogs in the GTA.
        </p>
        <h3>Cats</h3>
        <p>
          Cats appear more resistant to clinical Lyme disease than dogs, but they can still carry ticks into your home and onto furniture. If your cat goes outdoors in tick habitat and develops unexplained lethargy, fever, or limping, raise tick exposure with your vet. Never apply dog-specific tick treatments to cats — many are toxic to felines.
        </p>

        {/* Transmission */}
        <h2>How Lyme Disease Transmission Works</h2>
        <p>
          Understanding the timeline of transmission explains why prompt tick removal is so effective:
        </p>
        <ul>
          <li>A tick must be attached and feeding for approximately 24–36 hours before it can transmit <em>Borrelia burgdorferi</em></li>
          <li>Nymph-stage ticks (tiny, hard to see) cause the majority of human Lyme cases because they go unnoticed longer</li>
          <li>Peak nymph activity in Ontario runs May through July — overlapping with garden season, children's outdoor sports, and dog walking</li>
          <li>Adult ticks are active in spring and again in fall, and are easier to spot due to their larger size</li>
          <li>Ticks do not jump or fly — they quest by holding onto tall grass or brush with their back legs and reaching forward with their front legs, waiting for a host to brush past</li>
        </ul>

        {/* What to do if you find a tick */}
        <h2>What to Do If You Find a Tick</h2>
        <p>Stay calm. The 24–36 hour transmission window means you have time to act correctly:</p>
        <ol>
          <li><strong>Use fine-tipped tweezers.</strong> Grasp the tick as close to the skin as possible. Do not use your fingers.</li>
          <li><strong>Pull straight up with steady, even pressure.</strong> Do not twist or jerk — this can cause mouthparts to break off in the skin.</li>
          <li><strong>Do not crush, burn, or apply petroleum jelly.</strong> These methods are ineffective and may increase transmission risk.</li>
          <li><strong>Clean the area</strong> with rubbing alcohol or soap and water.</li>
          <li><strong>Save the tick</strong> in a sealed bag or container with the date noted. You can submit it for identification at <a href="https://etick.ca" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">eTick.ca</a>, a free Public Health Agency of Canada tool that provides species identification and risk assessment.</li>
          <li><strong>Monitor for symptoms</strong> for 30 days. See a doctor if a rash, fever, or flu-like illness develops. Mention the tick bite and the date.</li>
        </ol>
        <p>
          For a detailed step-by-step guide including what to do with the tick after removal, see our post on <Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 hover:underline">how to remove a tick safely</Link>.
        </p>

        {/* Prevention — conversion section */}
        <h2>How to Protect Your Family from Lyme Disease This Season</h2>
        <p>
          The most effective approach combines several layers. None of them are particularly hard — the trick is doing all of them rather than picking one.
        </p>
        <h3>In your yard</h3>
        <p>
          Ticks don't live in the middle of a sunny lawn. They concentrate in the transition zones: where the mowed grass meets a garden bed, a wood edge, a leaf pile, or a shaded fence line. Reducing these microhabitats helps:
        </p>
        <ul>
          <li>Keep grass mowed short and clear leaf litter regularly</li>
          <li>Move woodpiles away from the house and off the ground</li>
          <li>Place a 60–90 cm barrier of wood chips or gravel between lawn and wooded borders</li>
          <li>Discourage deer with fencing if your property backs onto a greenbelt</li>
        </ul>
        <p>
          For the most reliable yard protection, professional tick barrier spray treats exactly the zones where blacklegged ticks hide and wait. Our <Link href="/tick-control" className="text-brand-700 hover:underline">tick control treatments</Link> apply a Health Canada-registered residual formula to garden edges, foundation plantings, shaded turf, and wood borders — the areas that matter. One treatment provides up to 30 days of protection; we recommend two applications timed to spring nymph season and fall adult activity.
        </p>
        <p>
          Your kids shouldn't have to stay off the grass. Your dog shouldn't come home from the backyard with a passenger. Professional treatment is the one layer that works while you're not thinking about it.
        </p>
        <h3>On your body</h3>
        <ul>
          <li>Apply Health Canada-approved repellent containing DEET (20–30%) or icaridin to exposed skin</li>
          <li>Wear light-coloured clothing — ticks are easier to spot on pale fabric</li>
          <li>Tuck pants into socks in long grass or wooded areas</li>
          <li>Permethrin-treated clothing provides excellent protection for people who spend a lot of time outdoors</li>
        </ul>
        <h3>After being outdoors</h3>
        <ul>
          <li>Do a full tick check of yourself, children, and pets within two hours of coming inside — pay attention to the scalp, behind the ears, armpits, groin, and behind the knees</li>
          <li>Shower within two hours; this helps rinse off unattached ticks and makes a full check easier</li>
          <li>Tumble dry clothing on high heat for 10 minutes — heat kills ticks that clothing removal alone may miss</li>
        </ul>
        <h3>For your pets</h3>
        <ul>
          <li>Ask your veterinarian about the Lyme vaccine and tick preventatives suitable for your dog's size and lifestyle</li>
          <li>Check pets after every outing near natural areas</li>
          <li>Keep dogs on trails rather than bushwhacking through long grass</li>
        </ul>

        {/* FAQ */}
        <h2>Frequently Asked Questions About Lyme Disease in Ontario</h2>
        <div className="not-prose space-y-3 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                <span>{question}</span>
                <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        {/* Related guides */}
        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></li>
          <li><Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 hover:underline">How to Remove a Tick Safely</Link></li>
          <li><Link href="/blog/tick-season-ontario-when-are-ticks-active" className="text-brand-700 hover:underline">When Are Ticks Active in Ontario?</Link></li>
          <li><Link href="/blog/best-tick-control-yard-treatment" className="text-brand-700 hover:underline">Best Tick Control for Your Yard: Ontario Comparison Guide</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
        </ul>

        {/* Author bio */}
        <p className="text-sm text-gray-500 mt-10 pt-6 border-t border-gray-200">
          BuzzSkito is a licensed mosquito and tick control provider serving Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, and the broader GTA. Our technicians are trained in integrated pest management and apply only Health Canada-registered products. For medical advice on tick bites or Lyme disease, consult a licensed healthcare provider. For tick identification, visit <a href="https://etick.ca" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">eTick.ca</a> or <a href="https://www.publichealthontario.ca" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">Public Health Ontario</a>.
        </p>

      </article>

      <CTASection
        heading="Protect Your Yard from Lyme Disease Ticks This Season"
        subtext="Professional barrier spray reduces tick populations in your yard by up to 90%. Serving Mississauga, Brampton, Oakville, Burlington, Hamilton, and the GTA. Get a free quote."
        variant="dark"
      />
    </>
  )
}
