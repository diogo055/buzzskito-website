import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'do-cedar-trees-attract-mosquitoes'
const DATE = '2026-04-26'
const UPDATED = '2026-07-12'
const TITLE = 'Do Cedar Trees Attract Mosquitoes? The Honest Answer'
const EXCERPT = 'Cedar trees do not attract mosquitoes — cedar oil actually repels them. But dense cedar hedges create damp, shaded micro-environments where mosquitoes rest during the day. Here is what to do.'

const FAQS = [
  {
    question: 'Do cedar trees attract mosquitoes?',
    answer: 'No — cedar trees do not attract mosquitoes. In fact, cedar wood and cedar oil contain natural compounds (thujone, cedrol) that mildly repel many insects including mosquitoes. The misconception comes from the fact that dense cedar hedges create damp, shaded conditions on their interior and underside that mosquitoes use as resting habitat during the day. The cedar itself is not the attractant — the micro-environment the hedge creates is. A single specimen cedar tree on a lawn does not increase mosquito pressure. A dense, untrimmed cedar hedge along a property edge can.',
  },
  {
    question: 'Do cedars repel mosquitoes?',
    answer: 'Cedar oil is a recognized natural insect repellent and is used in some commercial mosquito and tick products. However, the level of repellent compounds released by a living cedar tree into the surrounding air is far too low to meaningfully reduce mosquito populations in your yard. You cannot replace mosquito control by planting cedars. Cedar oil products applied directly to skin or fabric, by contrast, do provide short-term repellent effect — though shorter than DEET or picaridin.',
  },
  {
    question: 'Should I remove my cedar hedge to control mosquitoes?',
    answer: 'No — removing a cedar hedge is rarely necessary and almost always overkill. Cedar hedges provide privacy, wind protection, wildlife habitat, and property value. The right answer is to manage them: open up the interior with periodic pruning, remove dead branches and accumulated leaf litter from the base, ensure good air circulation, and apply professional barrier spray to the underside and interior canopy where mosquitoes actually rest. This addresses the resting-habitat problem without removing a valuable landscape feature.',
  },
  {
    question: 'What plants actually repel mosquitoes?',
    answer: 'Several plants release small amounts of mosquito-repellent compounds when their leaves are crushed or warmed in sunlight, including citronella grass, lemongrass, lavender, basil, catnip, marigolds, and rosemary. The repellent effect is real but localized — these plants do not create a yard-wide repellent zone. They work best when planted near outdoor seating areas where leaves can be brushed against, releasing the aromatic oils. For meaningful yard-wide protection, plant-based options must be combined with professional barrier spray treatment.',
  },
  {
    question: 'Why do mosquitoes hide in cedar hedges?',
    answer: 'Mosquitoes are not active hunters during the heat of the day. They rest in cool, shaded, humid micro-environments and only emerge to feed at dawn, dusk, and after dark. Dense cedar hedges, with their interior darkness, retained moisture, and low air circulation, are ideal daytime resting habitat. This is true of cedar hedges, dense yew hedges, boxwood, juniper, and any other tightly-branched evergreen. The plant species itself is less important than the structural density and the moisture retained within.',
  },
  {
    question: 'Do cedar trees attract ticks?',
    answer: 'Not directly — cedar wood and oil actually contain compounds (thujone, cedrol) that mildly deter insects. But a dense, untrimmed cedar hedge creates exactly the cool, shaded, humid, leaf-litter-filled micro-environment ticks need to survive, so ticks can shelter along the base and interior. As with mosquitoes, it is the habitat the hedge creates, not the cedar itself, that matters. Clear leaf litter at the base and treat the hedge edge to reduce tick pressure.',
  },
  {
    question: 'Do emerald cedars attract bugs?',
    answer: 'Emerald cedars (Thuja occidentalis \'Smaragd\'), one of the most widely planted privacy hedges in the GTA, do not attract bugs chemically — cedar mildly repels insects. But when planted as a dense hedge and left untrimmed, they trap shade, moisture, and still air, giving mosquitoes and ticks an ideal daytime resting spot. A single specimen tree in open lawn causes no problem. The fix is management: prune to open the interior, clear the base, and treat the foliage.',
  },
  {
    question: 'Do juniper trees attract mosquitoes?',
    answer: 'No more than cedars do. Junipers do not chemically attract mosquitoes, but dense juniper screens and low, spreading juniper shrubs create the same shaded, humid, low-airflow conditions mosquitoes use to rest during the day. The tighter and more untrimmed the planting, the more resting habitat it offers. The plant species matters far less than the structural density. Manage the planting and treat the underside where mosquitoes rest rather than removing it.',
  },
  {
    question: 'Do spruce and evergreen trees attract mosquitoes?',
    answer: 'Evergreens do not attract mosquitoes chemically, but dense spruce, fir, and other tightly-branched evergreens create the shaded, humid, sheltered micro-environment mosquitoes rest in through the heat of the day. Any dense vegetation — evergreen or not — does this; yew, boxwood, and juniper behave the same way. A well-spaced specimen tree with good air circulation is not a problem. It is the density and trapped moisture, not the tree type, that creates resting habitat.',
  },
  {
    question: 'Does cedar actually repel or deter mosquitoes?',
    answer: 'Cedar oil is a genuine, recognized insect deterrent — it is a registered active ingredient in some mosquito and tick products. But a living cedar tree releases far too little of these compounds into the air to protect your yard, so you cannot repel mosquitoes simply by planting cedars. Applied cedar-oil products give a short-term repellent effect on skin or fabric, though shorter-lasting than DEET or picaridin. For yard-wide control, cedar planting is not enough.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Do Cedar Trees Attract Mosquitoes? Hedge vs Tree',
  description: 'Cedar trees do not attract mosquitoes — cedar oil mildly repels them. Dense untrimmed hedges are the problem: prune, clear the base, treat the underside.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('do-cedar-trees-attract-mosquitoes')

export default function CedarTreesMosquitoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: EXCERPT, slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Do Cedar Trees Attract Mosquitoes?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Do Cedar Trees Attract Mosquitoes?</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(DATE).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · Updated {new Date(UPDATED).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">No &mdash; cedar trees don&rsquo;t attract mosquitoes, and cedar oil actually mildly repels them. What draws mosquitoes is the shade, trapped moisture, and still air inside a dense cedar hedge, which they use as a cool daytime resting spot before pouring out to feed at dusk. Manage the hedge &mdash; you don&rsquo;t need to remove it.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Cedar wood and oil contain thujone and cedrol, compounds that mildly repel insects &mdash; cedar is a deterrent, not an attractant.</li>
            <li>The interior of a 2-metre cedar hedge can be 5&ndash;8&deg;C cooler than the open lawn on a hot afternoon, with higher humidity and almost no airflow.</li>
            <li>Mosquitoes rest in that shade by day and pour out to feed at dawn, dusk, and after dark.</li>
            <li>A single specimen cedar tree in open lawn does not increase mosquito pressure; a dense, untrimmed hedge does.</li>
            <li>Dense yew, boxwood, and juniper create the same resting habitat &mdash; structure matters more than the plant species.</li>
            <li>Professional barrier spray treats the underside and interior canopy where mosquitoes rest and stays active for several weeks.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>

        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          The short answer: <strong>no &mdash; but there is a catch.</strong> Cedar trees do not attract mosquitoes, and cedar oil actually <em>mildly repels</em> them. The catch is the <em>micro-environment</em> a dense cedar hedge creates: damp, shaded, still air that mosquitoes rest in all day, then pour out of at dusk. So the fix is not ripping out your cedars &mdash; it is managing that habitat. Here is the honest answer, including what is true, what is myth, and what actually matters for mosquito control.
        </p>

        <AffiliateDisclosure />
        <AuthorByline datePublished={DATE} dateModified={UPDATED} />

        <h2>Why People Think Cedars Attract Mosquitoes</h2>
        <p>This belief is widespread among GTA homeowners, and it almost always traces back to the same observation: &quot;Whenever I walk past my cedar hedge, I get swarmed by mosquitoes.&quot; That observation is real. The conclusion drawn from it — that the cedar is somehow attracting mosquitoes — is wrong, but the experience is not.</p>
        <p>What is actually happening is more subtle and more useful to understand. Mosquitoes do not behave the way most people imagine. They are not actively flying around looking for prey for most of the day. They are <strong>resting</strong> — and your cedar hedge is one of the best resting environments on your property.</p>

        <h2>The Real Science: Cedar Oil Repels Insects</h2>
        <p>Cedar wood (eastern white cedar, <em>Thuja occidentalis</em>, the species most commonly used for hedges across the GTA) contains aromatic compounds including thujone, thujaplicins, and cedrol. These compounds are well-documented insect deterrents — which is why cedar chests and cedar closets have been used for centuries to protect wool and fabric from moths and other insects.</p>
        <p>Cedar oil is also a registered active ingredient in some commercial mosquito and tick products, used specifically because of its mild repellent properties. So if cedar were going to do anything to local mosquito populations, the effect would be slightly <em>repellent</em> — not attractant.</p>
        <p>The catch: the amount of these aromatic compounds released by a living cedar tree into the surrounding air is extremely small. Far too small to create a meaningful repellent zone in your yard. You cannot solve a mosquito problem by planting cedars. But you also cannot create one by planting cedars.</p>

        <h2>What Actually Happens: Cedars Create Resting Habitat</h2>
        <p>Mosquitoes spend the majority of their adult lives resting, not flying. They are not strong fliers. They are not heat-tolerant. They cannot survive direct midday sun for long. To get from one feeding bout to the next, they need a refuge that meets very specific conditions:</p>
        <ul>
          <li><strong>Shade</strong> — direct sun dehydrates and kills resting mosquitoes</li>
          <li><strong>High humidity</strong> — mosquitoes lose body water rapidly in dry air</li>
          <li><strong>Low air circulation</strong> — mosquitoes are easily dislodged by wind</li>
          <li><strong>Vertical structure</strong> — they prefer to perch on leaves and branches, not ground</li>
          <li><strong>Cool temperature</strong> — slightly cooler than the open yard</li>
        </ul>
        <p>A dense, untrimmed cedar hedge meets every one of these requirements. The interior of a 2-metre cedar hedge can be 5–8°C cooler than the open lawn on a hot summer afternoon, with substantially higher humidity and almost no air movement. From a mosquito&apos;s perspective, that is a five-star hotel.</p>
        <p>This is also why mosquitoes seem to swarm out of cedar hedges when you brush past them. They are not attracted to you walking by — they were already there, sheltering from the heat, and your movement disturbed the canopy. The same thing happens with dense yew hedges, juniper screens, and tightly-branched boxwood — but cedars are by far the most common privacy hedge in GTA yards, so they get blamed disproportionately.</p>

        <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 — backed by 150+ five-star reviews and serving 19 GTA cities.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
            <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
          </div>
        </aside>

        <h2>Cedar Hedge vs Cedar Tree: A Critical Distinction</h2>
        <p>Not all cedars create resting habitat. The structural density and pruning matters enormously.</p>

        <h3>A specimen cedar tree on a lawn</h3>
        <p>A single cedar tree growing in open lawn — pyramidal in form, with daylight reaching most of the canopy and good air circulation around the trunk — provides almost no useful resting habitat for mosquitoes. The interior is too exposed, too dry, and too breezy. These trees do not increase mosquito pressure.</p>

        <h3>A trimmed cedar hedge with open structure</h3>
        <p>A well-maintained cedar hedge that has been pruned to keep the interior open, with dead inner branches removed and good vertical air circulation, provides only modest resting habitat. Mosquitoes will use the outer foliage but not in heavy concentrations.</p>

        <h3>A dense, untrimmed cedar hedge with leaf litter at the base</h3>
        <p>This is the worst case. A 2-to-3-metre cedar hedge that has been allowed to grow into itself, with a dense interior of dead branches, leaf and needle litter accumulated at the base, and limited air movement, can shelter remarkable numbers of mosquitoes. On a hot July afternoon, hundreds of mosquitoes can rest in a 10-metre stretch of dense hedge — only to come pouring out at dusk to feed on whoever is sitting on the patio.</p>

        <h2>Other Yard Features That Create Resting Habitat</h2>
        <p>Cedar hedges are not unique. Any dense vegetation creates similar conditions. The same daytime resting behaviour applies to:</p>
        <ul>
          <li>Yew hedges (<em>Taxus</em>)</li>
          <li>Boxwood and dense privet</li>
          <li>Juniper screens</li>
          <li>Mature ornamental beds with thick ground cover (hosta, ferns, ivy)</li>
          <li>Tall ornamental grasses</li>
          <li>Areas under decks and porches</li>
          <li>The undersides of low-skirted patio furniture</li>
          <li>Compost bins, woodpiles, and garden sheds</li>
        </ul>
        <p>If you can identify the resting habitats on your property, you can target them — the same logic behind our <Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 underline">12 ways to prevent mosquitoes in your backyard</Link>. This is exactly what professional barrier spray does — and why the application technique matters as much as the product itself.</p>

        <h2>What to Do About Your Cedar Hedge (Without Removing It)</h2>
        <p>You do not need to rip out your cedars. They provide privacy, wind protection, wildlife habitat, year-round colour, and significant property value. Removing a mature cedar hedge to fix a mosquito problem is like demolishing your kitchen because you have ants. Manage instead.</p>

        <h3>1. Open up the interior</h3>
        <p>Have your cedars professionally pruned every 2–3 years to remove dead inner branches and create some vertical air movement. This reduces both mosquito habitat and the risk of disease in the cedar itself (cedar leaf blight thrives in the same conditions).</p>

        <h3>2. Clear the base</h3>
        <p>Remove accumulated needle litter, leaves, and debris from the base of the hedge each spring. This is also a major mosquito (and tick) hiding zone.</p>

        <h3>3. Improve drainage</h3>
        <p>Make sure the soil at the base of the hedge is not retaining standing water after rainfall. Re-grade or add mulch as needed. Standing water at the base of dense vegetation is a double problem: a breeding source and a resting refuge stacked together.</p>

        <h3>4. Apply professional barrier spray</h3>
        <p>This is the highest-leverage step. A properly applied <Link href="/mosquito-control" className="text-brand-700 underline">professional mosquito spray</Link> treats the underside and interior canopy of dense vegetation — exactly the surfaces where mosquitoes rest. The Health Canada–approved residual formula remains active for several weeks, killing mosquitoes that come into contact with the treated foliage. We focus heavily on cedar hedges, ornamental beds, and the lawn-bed transition zone for this reason.</p>

        <h3>5. Limit other resting habitat too</h3>
        <p>While you are at it, address the rest of the resting micro-environment on the property: trim back overgrown shrubs, clear leaf litter from garden beds, and check our <Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 underline">hidden mosquito breeding spots guide</Link> for the standing-water sources that are quietly producing mosquitoes alongside your hedge.</p>
        <p>For the patio itself &mdash; the spot the mosquitoes head for at dusk once they pour out of the hedge &mdash; a spot repellent device creates a protection zone around outdoor seating without spraying anything on skin. Thermacell units use a heat-activated mat that disperses a pyrethroid repellent (metofluthrin/prallethrin) over a roughly 20-square-metre area, which is useful for a defined seating area on a still evening. <BuyLink tag={AMZ_TAG} search="thermacell mosquito repeller">Check Thermacell patio repellers on Amazon.ca &rarr;</BuyLink> It is a complement to barrier spray, not a replacement &mdash; the device protects the people sitting on the patio, while the barrier spray reduces the population resting in the hedge in the first place.</p>

        <TopPick tag={AMZ_TAG}
          label="Best for the Patio at Dusk"
          name="Thermacell Patio Repeller"
          blurb="For the seating area the mosquitoes head for once they pour out of the hedge, a heat-activated Thermacell mat creates a repellent zone around outdoor furniture — no spray on skin, no cords. It protects a defined seating area on a still evening and pairs naturally with barrier spray on the hedge itself."
          search="thermacell mosquito repeller"
          score={8.3}
          pros={['Fast, spray-free protection zone for a seating area', 'Cordless models are portable around the deck', 'No lotion or scent on skin']}
          cons={['Covers a defined zone, not the whole yard', 'Wind and open airflow reduce its effect', 'Needs refill mats and fuel over the season']}
        />

        <h2>Are There Plants That Actually Repel Mosquitoes?</h2>
        <p>Yes — but the effect is small and localized. Several <Link href="/blog/mosquito-repellent-plants-ontario" className="text-brand-700 underline">mosquito-repelling plants for Ontario gardens</Link> release low levels of mosquito-deterrent compounds when their leaves are crushed, brushed, or warmed in direct sunlight:</p>
        <ul>
          <li><strong>Citronella grass</strong> — modest repellent, requires direct contact with leaves</li>
          <li><strong>Lemongrass</strong> — same active compound as citronella</li>
          <li><strong>Lavender</strong> — pleasant scent, mild repellent effect</li>
          <li><strong>Basil</strong> — some research supports mild repellent effect</li>
          <li><strong>Catnip</strong> — the active compound (nepetalactone) has demonstrated repellent activity in lab studies</li>
          <li><strong>Marigolds</strong> — long believed to repel insects, modest evidence</li>
          <li><strong>Rosemary</strong> — aromatic, mild repellent</li>
        </ul>
        <p>These plants are worth growing — they look good, smell good, and contribute marginally to a less-attractive yard. But they will not solve a mosquito problem on their own. The realistic role for mosquito-repelling plants is around outdoor seating areas, where you can brush against the leaves and release the oils, combined with broader barrier spray treatment on the rest of the yard.</p>

        <h2>The Big Picture: It Is Not the Plant, It Is the Habitat</h2>
        <p>Cedar trees are not the enemy. They are not attracting mosquitoes any more than a parking garage is attracting cars. What is actually happening is that dense, undisturbed vegetation provides the daytime shelter mosquitoes need to survive between feeding bouts. The plant species barely matters. The structure does.</p>
        <p>Manage the structure — open up dense plantings, clear leaf litter, improve drainage, and treat the underside of resting habitat with a professional barrier spray — and your cedar hedge becomes a feature of your yard rather than a refuge for the insects that ruin your evenings on it.</p>

        <h2>Get Your Yard Treated Properly</h2>
        <p>If you have cedar hedges, dense ornamental beds, or any of the other structural mosquito refuges discussed in this article, a properly applied barrier spray makes a substantial difference. Book a <Link href="/free-yard-assessment" className="text-brand-700 underline">free yard assessment</Link> and we will walk the property, identify the rest zones, and give you an honest quote for treatment. We service 19 cities across the GTA — most new customers can be scheduled within the same week during the season.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-repellent-plants-ontario" className="text-brand-700 hover:underline">Best Mosquito-Repelling Plants for Ontario Gardens</Link></li>
          <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
          <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
        </ul>
      </article>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
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
        </div>
      </section>

      <CTASection heading="Treat the Resting Habitat — Not the Hedge" subtext="Professional barrier spray targets the underside of cedars, ornamental beds, and lawn edges. Free quote available." />
    </>
  )
}
