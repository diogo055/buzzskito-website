import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS[6]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Spray Safe for Kids & Pets (30 Min)',
  description:
    "Health Canada approval, 30-minute re-entry, and the facts about professional mosquito spray. Safe for GTA kids and pets.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'How long do we need to stay off the lawn after mosquito spray?',
    answer:
      "30 minutes is the standard re-entry interval for Health Canada–approved mosquito barrier spray products. Once the spray has dried on the plant surfaces (typically 20–30 minutes in normal summer conditions), the active ingredient is bound to the leaf surface and no longer in suspension in the air. Children and pets can return to the treated area safely after this window.",
  },
  {
    question: 'What is actually in professional mosquito barrier spray?',
    answer:
      "The most common active ingredient in professional mosquito barrier spray in Canada is a synthetic pyrethroid — usually permethrin, bifenthrin, or lambda-cyhalothrin. These are synthetic versions of pyrethrins, the natural insecticidal compounds found in chrysanthemum flowers. They work by disrupting the sodium channels in insect nerve cells. Mammals, birds, and humans process pyrethroids through their liver enzymes (which insects lack), which is why the margin of safety for people and mammals is wide. Health Canada's regulatory review process confirms this before approving any product for residential use.",
  },
  {
    question: "I have cats — I've heard pyrethroids are dangerous for them?",
    answer:
      "This is a real concern that we take seriously. Cats metabolize pyrethroids differently than dogs and humans because they lack certain liver enzymes. Direct, concentrated exposure — such as a cat walking through wet spray — can cause neurological symptoms in cats. For cat owners, we recommend keeping cats indoors for 2–3 hours after treatment (longer than the standard 30-minute interval) and waiting until the treated areas are fully dry before allowing cat access. We're happy to advise on specific timing based on your cat's habits and outdoor access.",
  },
  {
    question: 'Does mosquito spray harm bees and other pollinators?',
    answer:
      "Pyrethroids are toxic to bees if they contact wet spray directly. The key factor is application method and timing: we treat resting sites (shrub undersides, hedge interiors, and shaded garden borders) rather than open lawn or flowering plants. We also apply in early morning or evening when bees are least active and foraging is minimal. We do not spray onto flowering plants. This responsible application approach dramatically reduces pollinator exposure while maintaining effectiveness against mosquitoes.",
  },
  {
    question: 'Is the spray safe near our vegetable garden?',
    answer:
      "We avoid spraying directly on vegetable or herb garden plants. For properties with food gardens, we treat the surrounding lawn margins, shrub borders, and lawn edges while buffering a safe zone around the edible plants. The residual on surrounding vegetation is minimal and well below any food-safety threshold, but direct application to plants you'll eat is something we avoid as a standard practice.",
  },
]

export default function IsMosquitoSpraySafePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Is Mosquito Spray Safe for Kids & Pets?', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Is Mosquito Spray Safe for Kids &amp; Pets?</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Safety Guide · Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          The number-one question we get from GTA parents and pet owners is some version of: &ldquo;Is this safe for my kids and dog?&rdquo; It&rsquo;s the right question to ask — and it deserves a straight, factual answer. This guide explains what&rsquo;s in professional mosquito spray, how Health Canada&rsquo;s approval process works, what the re-entry windows mean, and what the actual caveats are. See our <Link href="/mosquito-control" className="text-brand-700 underline">mosquito control service page</Link> for treatment details.
        </p>

        <h2>The Direct Answer: Yes, With a 30-Minute Window</h2>
        <p>BuzzSkito uses Health Canada–approved mosquito barrier spray products. After application, the standard re-entry interval is <strong>30 minutes</strong> — the time needed for the spray to dry on plant surfaces. Once dry, the active ingredient is bound to the treated surface and no longer airborne. Children and most pets can return to the treated area after this window.</p>
        <p>This is not marketing language — it&rsquo;s the outcome of Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) review process, which evaluates every registered pest control product for safety around humans, pets, and non-target organisms before approving it for residential use in Canada.</p>

        <h2>What Health Canada Approval Actually Means</h2>
        <p>In Canada, any pest control product used commercially must be registered under the <em>Pest Control Products Act</em>. Registration requires the manufacturer to submit extensive safety data — toxicological studies, environmental fate data, and application rate testing. The PMRA reviews this data and sets the label requirements (application rates, personal protection equipment requirements, re-entry intervals, and prohibited uses) that licensed applicators must follow.</p>
        <p>When BuzzSkito says our products are &ldquo;Health Canada approved,&rdquo; we mean registered under this process. We do not use any product that isn&rsquo;t on this list, and we apply according to label directions — which is both a legal requirement and a practical safety measure.</p>

        <h2>What&rsquo;s in the Spray: Synthetic Pyrethroids Explained</h2>
        <p>The active ingredients in professional mosquito barrier spray are typically <strong>synthetic pyrethroids</strong> — permethrin, bifenthrin, or lambda-cyhalothrin. These are synthetic versions of pyrethrins, compounds that occur naturally in chrysanthemum flowers and have been used as insecticides for centuries.</p>
        <p>How they work: pyrethroids disrupt sodium ion channels in insect nerve cells, causing paralysis and death. The reason they&rsquo;re selective — effective against insects but relatively safe for mammals — is that mammals (including humans and dogs) have liver enzymes that quickly metabolize pyrethroids and eliminate them from the body. Insects lack these enzymes, so the same compounds that are quickly detoxified by a dog&rsquo;s liver are fatal to a mosquito.</p>
        <p>This metabolic difference is the scientific basis for the safety margin. It&rsquo;s not that pyrethroids are completely inert in mammals — in large enough quantities they would cause problems — but the amounts used in professional barrier spray are far below the threshold where mammalian effects occur, and the body clears them quickly once exposure ends.</p>

        <h2>Dogs and the 30-Minute Rule</h2>
        <p>Dogs metabolize pyrethroids well. The standard 30-minute re-entry interval covers dogs as well as humans. After the spray has dried, dogs can run, roll, and lie on treated lawn areas safely. If a dog were to walk through wet spray immediately after application, they might experience some skin irritation or lick the product from their paws — which is why we ask that pets are inside during application and for 30 minutes afterward.</p>

        <h2>The Cat Exception: Important Information for Cat Owners</h2>
        <p>Cats are an exception and this is worth taking seriously. Cats lack certain hepatic glucuronidation enzymes that allow dogs and humans to metabolize pyrethroids efficiently. This means cats are more sensitive to pyrethroid exposure than dogs at equivalent doses. For cat owners, we recommend:</p>
        <ul>
          <li>Keep cats indoors during application and for at least 2–3 hours afterward</li>
          <li>Do not let cats access treated areas until the spray is fully dry (minimum 2 hours, longer in humid conditions)</li>
          <li>If your cat has significant outdoor time in treated areas, discuss this with us — we can advise on application timing and zones</li>
        </ul>
        <p>Permethrin spot-on treatments designed for dogs should <strong>never</strong> be used on cats — that&rsquo;s a direct application at a much higher concentration than barrier spray, and it is genuinely dangerous for cats. Our barrier spray, applied at label rates and allowed to dry, carries a much lower risk, but the caution around cats is real and worth following.</p>

        <h2>Children: What the Research Says</h2>
        <p>Children are not at elevated risk from dried barrier spray at the amounts used in residential applications. Health Canada&rsquo;s PMRA registration process specifically evaluates exposure risks for children, who are treated as a sensitive subpopulation in their risk assessments. The registered label rates and re-entry intervals are set conservatively enough that normal children&rsquo;s activity (playing on the lawn, touching plants, putting hands in mouths) after the re-entry window poses no health risk based on available toxicological data.</p>
        <p>Pregnant women should apply the same common-sense approach as with any chemical product: avoid being present during application, and return to treated areas after the re-entry window has passed.</p>

        <h2>Bees, Pollinators, and Responsible Application</h2>
        <p>We take pollinator protection seriously. Pyrethroids are toxic to bees if they contact wet spray. BuzzSkito addresses this through application technique:</p>
        <ul>
          <li>We apply in early morning or evening when bee foraging activity is minimal</li>
          <li>We target resting sites (shrub undersides, hedge interiors, shaded margins) rather than flowering plants or open lawn</li>
          <li>We do not spray onto flowers, vegetable plants, or other pollinator attractants</li>
        </ul>
        <p>Once dried, the pyrethroid residual on treated plant surfaces is at a concentration that is not meaningfully absorbed by bees walking across it — the risk period is wet spray contact, not dried residual.</p>

        <h2>Related Guides and Services</h2>
        <ul>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control</Link></li>
          <li><Link href="/blog/how-to-choose-mosquito-control-company-gta" className="text-brand-700 hover:underline">How to Choose a Mosquito Control Company in the GTA</Link></li>
        </ul>

        <h2>Your Safety Questions Answered</h2>
        {FAQS.map((faq) => (
          <details key={faq.question} className="not-prose bg-brand-50 border border-brand-100 rounded-xl mb-3 px-5 py-4 open:pb-5">
            <summary className="font-semibold text-brand-900 cursor-pointer">{faq.question}</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </article>

      <CTASection
        heading="Get a Safe, Effective Mosquito Treatment for Your Family"
        subtext="Health Canada–approved formula. Safe for kids and pets after 30 minutes. Free quote, no contracts."
      />
    </>
  )
}
