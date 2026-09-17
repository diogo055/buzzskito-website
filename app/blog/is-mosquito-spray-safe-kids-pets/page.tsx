import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogPostCTA from '@/components/BlogPostCTA'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'

const POST = NEW_BLOGS[6]
const UPDATED = POST.date

export const metadata: Metadata = buildMetadata({
  // Layout appends ' | BuzzSkito' (12 chars) — keep this <= 48. 47 here.
  // Geo token is honest on this page: the answer turns on Canadian PMRA
  // registration and the PCP-numbered label a licensed Ontario operator follows.
  title: 'Is Mosquito Yard Spray Safe for Dogs in Canada?',
  description:
    "Is mosquito yard spray safe for dogs? Yes, once it dries, about 30 minutes. Cats need 2-3 hours indoors. How registration works, plus bees and gardens.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'How long do we need to stay off the lawn after mosquito spray?',
    answer:
      "30 minutes is the standard re-entry interval for the mosquito barrier spray products we use, and the label direction is to stay off treated areas until the spray has dried — typically 20–30 minutes in normal summer conditions. Drying takes longer in shade, humidity, or cool weather, so let the surfaces be your guide. Keep children and pets indoors during the application itself, and let them back onto treated areas once the spray has dried.",
  },
  {
    question: 'What is actually in professional mosquito barrier spray?',
    answer:
      "The most common active ingredient in professional mosquito barrier spray in Canada is a synthetic pyrethroid — usually permethrin, bifenthrin, or lambda-cyhalothrin. These are synthetic versions of pyrethrins, the natural insecticidal compounds found in chrysanthemum flowers. They work by disrupting the sodium channels in insect nerve cells. Mammals, birds, and humans process pyrethroids through their liver enzymes (which insects lack), which is a main reason their toxicity differs so much between insects and mammals. Before any product can be sold in Canada, Health Canada's Pest Management Regulatory Agency reviews it and sets the label directions — application rates, re-entry, and precautions — that applicators must follow.",
  },
  {
    question: "I have cats — I've heard pyrethroids are dangerous for them?",
    answer:
      "This is a real concern that we take seriously. Cats metabolize pyrethroids differently than dogs and humans because they lack certain liver enzymes. Direct, concentrated exposure — such as a cat walking through wet spray — can cause neurological symptoms in cats. For cat owners, we recommend keeping cats indoors for 2–3 hours after treatment — longer than the standard 30-minute interval — and waiting until the treated areas are fully dry before allowing cat access. We're happy to advise on specific timing based on your cat's habits and outdoor access.",
  },
  {
    question: 'Does mosquito spray harm bees and other pollinators?',
    answer:
      "Pyrethroids are toxic to bees, and product labels carry bee precautions. The key factor is application method and timing: we treat resting sites (shrub undersides, hedge interiors, and shaded garden borders) rather than open lawn or flowering plants. We also apply in early morning or evening when bees are least active and foraging is minimal. We do not spray onto flowering plants. This approach is designed to reduce pollinator exposure, following the label directions for the product used.",
  },
  {
    question: 'Is the spray safe near our vegetable garden?',
    answer:
      "We avoid spraying directly on vegetable or herb garden plants. For properties with food gardens, we treat the surrounding lawn margins, shrub borders, and lawn edges while leaving an untreated buffer around the edible plants. Direct application to plants you'll eat is something we avoid as a standard practice, and we follow the product label's directions on food crops.",
  },
  {
    question: 'What repellent is safe to put on my kids when we leave the yard?',
    answer:
      "For personal (on-skin) repellent, picaridin — also called icaridin — is a well-studied alternative to DEET that Health Canada rates as comparably effective. Health Canada does not recommend DEET for infants under 6 months, while icaridin (picaridin) products may be used on children as young as 6 months. Always follow the concentration and age directions on the specific product label. Yard barrier spray and personal repellent do different jobs: the barrier treatment reduces mosquitoes in your space, and a personal repellent protects skin when you go elsewhere.",
  },
]

const AMZ_TAG = tagForSlug('is-mosquito-spray-safe-kids-pets')

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
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-10">
        <BlogPostCTA />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={POST.date} dateModified={UPDATED} />
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The product label answers this, not a marketing promise. Every barrier spray product used in Canada must be registered, and its label sets the re-entry directions: keep kids and pets off treated areas until the spray has dried, which takes about 30 minutes. Cats get longer — 2 to 3 hours indoors.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>The standard re-entry interval is 30 minutes — the time the spray needs to dry on plant surfaces. Drying takes longer in shade, humidity, or cool weather.</li>
            <li>Professional barrier sprays use synthetic pyrethroids (permethrin, bifenthrin, or lambda-cyhalothrin), which mammals&rsquo; livers metabolize but insects cannot.</li>
            <li>Cats are more sensitive to pyrethroids — keep cats indoors for at least 2 to 3 hours after treatment, until surfaces are fully dry.</li>
            <li>Every registered product is reviewed by Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA) before residential use.</li>
            <li>Pyrethroids are toxic to bees, so BuzzSkito treats resting sites in the early morning or evening and avoids flowering plants, following label directions.</li>
            <li>Health Canada does not recommend DEET for infants under 6 months, while icaridin (picaridin) may be used from 6 months.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
        </div>
        {/* "What to do right now" — aftercare module. The BlogPostCTA quote bar renders
            above the <article>, so the service arm holds the top slot and this sits below
            it, per the service-arm rule. Disclosure renders immediately above the first
            affiliate link. Step 1 is free and needs no product. Every claim here is either
            a label instruction or a mechanism already stated further down this page; no
            "safe", no registration endorsement, no protection-duration claim. */}
        <AffiliateDisclosure />
        <div className="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-3">What to do right now &mdash; the layers that put nothing on a child or a pet</p>
          <ol className="space-y-3 text-[15px] text-gray-800 leading-relaxed list-decimal pl-5 marker:font-bold marker:text-amber-700">
            <li>
              <strong>Tip out every container holding water &mdash; free, and it does the most work.</strong> Plant saucers, a forgotten bucket, toys, a sagging tarp, the tray under an air conditioner. Anything you empty today is a batch that never hatches. Repeat after rain.
            </li>
            <li>
              <strong>For the water you keep on purpose, use a BTI larvicide.</strong> BTI (<em>Bacillus thuringiensis israelensis</em>) is a soil bacterium registered in Canada as a larvicide; its toxin acts on the larvae of mosquitoes and a few related flies in standing water, and it goes into the water rather than onto vegetation. Dunks are the slow-release format for a rain barrel or ornamental pond; the granular version suits a container you refresh often. Read the label for the water types each one is cleared for.
              <span className="mt-2 block"><BuyLink tag={AMZ_TAG} search="summit mosquito dunks bti">Check price on Amazon.ca &rarr;</BuyLink></span>
            </li>
            <li>
              <strong>Point a fan across the seating area for the evening.</strong> Mosquitoes are weak fliers and struggle to hold a course in a steady breeze, so an oscillating outdoor fan keeps them off a deck or a play mat for as long as it runs. It is the layer we suggest first to parents who would rather not add anything else at all, and it works during the drying window after any treatment.
              <span className="mt-2 block"><BuyLink tag={AMZ_TAG} search="outdoor oscillating patio fan">Check price on Amazon.ca &rarr;</BuyLink></span>
            </li>
          </ol>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            None of these three replaces a barrier treatment for adult mosquitoes arriving from a neighbour&apos;s yard or a nearby ravine &mdash; that is covered below. They are the layers you can start this afternoon without waiting for anyone.
          </p>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          The number-one question we get from GTA parents and pet owners is some version of: &ldquo;Is this safe for my kids and dog?&rdquo; It&rsquo;s the right question to ask — and it deserves a straight, factual answer. This guide explains what&rsquo;s in professional mosquito spray, how pesticide registration in Canada works, what the label&rsquo;s re-entry directions mean, and what the actual caveats are. See our <Link href="/mosquito-control" className="text-brand-700 underline">mosquito control service page</Link> for treatment details.
        </p>

        <h2>The Direct Answer: Yes, With a 30-Minute Window</h2>
        <p>BuzzSkito uses only mosquito barrier spray products registered for this use in Canada, applied by a licensed operator ({PROMISES.licence}) according to label directions. After application, the standard re-entry interval is <strong>30 minutes</strong> — the time needed for the spray to dry on plant surfaces, which is what the label direction turns on. Drying takes longer in shade, humidity, or cool weather. Keep children and pets indoors during the application, and let them back onto treated areas once the spray has dried.</p>
        <p>Those re-entry directions are not our marketing language. They come from Health Canada&rsquo;s Pest Management Regulatory Agency (PMRA), which reviews each pest control product&rsquo;s health and environmental data before it can be registered, and writes the resulting precautions into the label.</p>

        <h2>What Pesticide Registration Actually Means</h2>
        <p>In Canada, any pest control product used commercially must be registered under the <em>Pest Control Products Act</em>. Registration requires the manufacturer to submit extensive safety data — toxicological studies, environmental fate data, and application rate testing. The PMRA reviews this data and sets the label requirements (application rates, personal protection equipment requirements, re-entry intervals, and prohibited uses) that licensed applicators must follow.</p>
        <p>Registration is not a government endorsement, and Canadian pesticide advertising rules don&rsquo;t allow it to be presented as one. What BuzzSkito can tell you is exactly what we do: we use only products registered for this use in Canada, each with a PCP registration number on its label, and we apply them according to label directions, which is a legal requirement.</p>

        <h2>What&rsquo;s in the Spray: Synthetic Pyrethroids Explained</h2>
        <p>The active ingredients in professional mosquito barrier spray are typically <strong>synthetic pyrethroids</strong> — permethrin, bifenthrin, or lambda-cyhalothrin. These are synthetic versions of pyrethrins, compounds that occur naturally in chrysanthemum flowers and have been used as insecticides for centuries.</p>
        <p>How they work: pyrethroids disrupt sodium ion channels in insect nerve cells, causing paralysis and death. The reason they&rsquo;re selective — effective against insects but far less toxic to mammals — is that mammals (including humans and dogs) have liver enzymes that quickly metabolize pyrethroids and eliminate them from the body. Insects lack these enzymes, so the same compounds that are quickly detoxified by a dog&rsquo;s liver are fatal to a mosquito.</p>
        <p>This metabolic difference is the scientific basis for the difference in toxicity. It&rsquo;s not that pyrethroids are inert in mammals — in large enough quantities they cause problems — which is why the label sets application rates, re-entry directions, and precautions, and why an applicator has to follow them.</p>

        <h2>Dogs and the 30-Minute Rule</h2>
        <p>Dogs metabolize pyrethroids far more efficiently than cats do. The standard 30-minute re-entry interval covers dogs as well as humans: keep them off treated areas until the spray has dried. If a dog were to walk through wet spray immediately after application, they might experience some skin irritation or lick the product from their paws — which is why we ask that pets are inside during application and for 30 minutes afterward.</p>

        <h2>The Cat Exception: Important Information for Cat Owners</h2>
        <p>Cats are an exception and this is worth taking seriously. Cats lack certain hepatic glucuronidation enzymes that allow dogs and humans to metabolize pyrethroids efficiently. This means cats are more sensitive to pyrethroid exposure than dogs at equivalent doses. For cat owners, we recommend:</p>
        <ul>
          <li>Keep cats indoors during application and for at least 2&ndash;3 hours afterward</li>
          <li>Do not let cats access treated areas until the spray is fully dry (minimum 2 hours, longer in humid conditions)</li>
          <li>If your cat has significant outdoor time in treated areas, discuss this with us — we can advise on application timing and zones</li>
        </ul>
        <p>Permethrin spot-on treatments designed for dogs should <strong>never</strong> be used on cats — that&rsquo;s a direct application at a much higher concentration than barrier spray, and it is genuinely dangerous for cats. Barrier spray applied at label rates and allowed to dry is a very different exposure from a concentrated spot-on, but the caution around cats is real and worth following.</p>

        <h2>Children: What the Research Says</h2>
        <p>Under the <em>Pest Control Products Act</em>, Health Canada&rsquo;s PMRA has to consider the different sensitivities of groups such as infants and children when it assesses a product, and residential assessments look at the ways children are actually exposed: playing on the lawn, touching plants, putting hands in mouths. The label rates and re-entry directions that come out of that review are the rules to follow. In practice that means keeping children off treated areas until the spray has dried, as the label directs.</p>
        <p>Pregnant women should apply the same common-sense approach as with any chemical product: avoid being present during application, and return to treated areas only after the spray has dried, as the label directs.</p>

        <h2>A Different Kind of Yard Layer: BTI Larvicide</h2>
        <p>If the pyrethroid question is what brought you here, it is worth knowing there is one yard-level product that works very differently from a barrier spray. <strong>BTI</strong> (<em>Bacillus thuringiensis israelensis</em>) is a naturally occurring soil bacterium, registered in Canada as a larvicide, whose toxin acts on the larvae of mosquitoes and a few related flies in standing water. Sold as Mosquito Dunks (donut-shaped, one per month) or Mosquito Bits (granular, faster knockdown), you drop it into rain barrels, ornamental ponds, blocked drainage, birdbaths, and anything else on the property that holds water and cannot be emptied.</p>
        <p>Be clear about what it does and does not do: BTI kills larvae, so it stops the next generation breeding on your own property. It has no effect on adult mosquitoes already flying in from a neighbour&rsquo;s yard or a nearby ravine — that is the job barrier spray does. It goes into water rather than onto vegetation, which makes it a natural first move for a household that would rather start with the breeding sources. Because the bacterium acts specifically on the larvae of mosquitoes and a few related flies such as black flies, it is the product people usually reach for in an ornamental pond or a rain barrel; check the label for where it can be used. Which format you want depends on the water: a Dunk is the slow-release tablet for a barrel or pond you leave alone for a month, while granular <Link href="/blog/mosquito-bits-canada-vs-dunks" className="text-brand-700 underline">mosquito bits</Link> clear a container within about 24 hours and suit water you refresh often.</p>
        <AffiliateDisclosure />
        <p><BuyLink tag={AMZ_TAG} search="summit mosquito dunks bti">Check BTI Mosquito Dunks on Amazon.ca →</BuyLink></p>
        <p>Which format you want comes down to how often the water turns over. A dunk is built to sit in the same rain barrel or pond for about a month; the granular version disperses on contact and clears a container within roughly a day, which is what you want for a birdbath, a plant saucer, or the tray under an air conditioner that you empty and refill every few days. Read the label for the water types each one is cleared for.</p>
        <p><BuyLink tag={AMZ_TAG} search="mosquito bits granular bti">Check granular BTI Mosquito Bits on Amazon.ca →</BuyLink></p>
        <p>There is a step before larvicide on the containers you keep on purpose. A rain barrel with a fine-mesh screen clipped over the inlet never has eggs laid in it at all, which saves treating it every month and keeps leaves out of the watering can at the same time. Look for a mesh sized to stop insects rather than a loose garden netting, and check it still sits tight after a windy week.</p>
        <p><BuyLink tag={AMZ_TAG} search="rain barrel mesh screen cover">Check fine-mesh rain barrel covers on Amazon.ca →</BuyLink></p>
        <p>Blocked eavestroughs are the water source most households never think to look at. A trough packed with maple keys and shingle grit holds a shallow film of water for weeks after a storm, out of sight above head height, and the common house mosquito will use it. Clearing them each autumn fixes it; a guard over the trough stops them filling in the first place.</p>
        <p><BuyLink tag={AMZ_TAG} search="gutter guard leaf screen">Check eavestrough leaf guards on Amazon.ca →</BuyLink></p>

        <h2>Choosing a Kid-Friendly Personal Repellent</h2>
        <p>Barrier spray treats your yard; a personal repellent protects skin when you leave it. Many parents are wary of DEET on young children, and there is a gentler, well-studied alternative: <strong>picaridin</strong> (also called icaridin). Health Canada rates picaridin as effective as DEET at comparable concentrations, and it&rsquo;s odourless, non-greasy, and won&rsquo;t damage plastics or clothing — which is why it&rsquo;s our go-to recommendation for a family personal repellent.</p>
        <p>On age limits, follow the label. Health Canada&rsquo;s guidance is that <strong>DEET is not recommended for infants under 6 months</strong>, and that <strong>icaridin (picaridin) products may be used on children as young as 6 months</strong> — one reason picaridin is often the more practical pick for young families. Always confirm the concentration and age directions on the specific product label. See Health Canada&rsquo;s <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" rel="noopener" className="text-brand-700 underline">pesticides and pest management guidance</a> for the official position.</p>
        <TopPick tag={AMZ_TAG}
          label="Our Top Pick — Kid-Friendly Repellent"
          name="Picaridin (Icaridin) Insect Repellent"
          blurb="For on-skin protection when you leave the yard, a picaridin (icaridin) repellent is our go-to for families — Health Canada rates it as effective as DEET at comparable concentrations, it's odourless and non-greasy, won't damage plastics or clothing, and may be used on children as young as six months. Always follow the concentration and age directions on the specific product label."
          search="picaridin insect repellent canada"
          score={8.8}
          pros={['Rated as effective as DEET at comparable strength', 'Odourless, non-greasy, gentle on skin', 'Usable on kids from 6 months (per label)']}
          cons={['Not for infants under 6 months', 'Personal repellent only — not a yard treatment']}
        />
        <p><BuyLink tag={AMZ_TAG} search="picaridin insect repellent canada">Check picaridin (icaridin) kid-friendly repellents on Amazon.ca →</BuyLink></p>
        <p>For a fuller breakdown of concentrations, formats, and application tips by age, read our guide to the <Link href="/blog/best-bug-spray-for-kids-canada" className="text-brand-700 underline">best bug spray for kids in Canada</Link>.</p>
        <p>Below six months there is no on-skin option at all: Health Canada does not recommend DEET under 6 months, and icaridin products start at 6 months. For a baby that young the layer that does the work is physical rather than chemical &mdash; fine mesh over the stroller, the playpen, or the car seat, fitted so there is no gap at the hood. It is also the one layer that does not need reapplying, which matters on a long afternoon outside.</p>
        <p><BuyLink tag={AMZ_TAG} search="stroller mosquito net">Check fine-mesh stroller and playpen nets on Amazon.ca →</BuyLink></p>
        <p>Moving air is the other layer that puts nothing on anyone&rsquo;s skin. Mosquitoes are weak fliers and struggle to hold a course in a steady breeze, so an oscillating fan aimed across the deck or the play mat keeps them off a seating area for as long as it runs. It is the first thing we suggest to parents who would rather not add anything else to the evening, and it costs nothing to run for an hour after dinner.</p>
        <p><BuyLink tag={AMZ_TAG} search="outdoor oscillating patio fan">Check outdoor patio fans on Amazon.ca →</BuyLink></p>

        <h2>Bees, Pollinators, and Responsible Application</h2>
        <p>We take pollinator protection seriously. Pyrethroids are toxic to bees, and product labels carry bee precautions. BuzzSkito addresses this through application technique:</p>
        <ul>
          <li>We apply in early morning or evening when bee foraging activity is minimal</li>
          <li>We target resting sites (shrub undersides, hedge interiors, shaded margins) rather than flowering plants or open lawn</li>
          <li>We do not spray onto flowers, vegetable plants, or other pollinator attractants</li>
        </ul>
        <p>The aim is to keep product off the plants bees visit and to apply when they are least likely to be foraging, following the directions on the label of the product used.</p>

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

      <StickyBuyBar
        name="BTI Mosquito Dunks (Bacillus thuringiensis israelensis)"
        search="summit mosquito dunks bti"
        label="Larvae-only yard layer"
        tag={AMZ_TAG}
      />

      <CTASection
        heading="Get a Licensed Mosquito Treatment for Your Yard"
        subtext={`${PROMISES.licence}. ${PROMISES.labelLine}. Free quote, no contracts.`}
      />
    </>
  )
}
