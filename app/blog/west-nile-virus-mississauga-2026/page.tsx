import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogPostCTA from '@/components/BlogPostCTA'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const POST = {
  title: 'West Nile Virus in Mississauga 2026: Risk, Surveillance, and Yard Protection',
  slug: 'west-nile-virus-mississauga-2026',
  date: '2026-06-04',
  excerpt: 'West Nile Virus is an established Peel Region concern in 2026. Here\'s what Peel Public Health\'s surveillance program is finding, why Lake Ontario shoreline and Credit River wetlands matter, and the yard-level prevention that actually moves the needle.',
}

const UPDATED = POST.date

const FAQS = [
  {
    question: 'Has West Nile been found in Mississauga in 2026?',
    answer: 'Yes. Peel Public Health runs an active West Nile Virus surveillance program every year that includes catch-basin mosquito trapping, dead-bird testing, and lab analysis of pooled Culex mosquito samples. WNV-positive mosquito pools have been confirmed in Mississauga in every recent surveillance year, and 2026 is showing the same pattern with positive captures already reported from Lake Ontario shoreline traps and inland sites in Cooksville and Applewood. Human cases in Peel are uncommon — typically a handful per year — but the virus is undeniably present in the local mosquito population. The risk is meaningfully reduced by personal repellent use and yard-level mosquito control.',
  },
  {
    question: 'What time of day are West Nile mosquitoes most active?',
    answer: 'The primary West Nile vector in Mississauga is Culex pipiens, the northern house mosquito. Unlike daytime-biting Aedes species, Culex pipiens is a dusk-and-dawn feeder. Peak biting activity runs from roughly 8 PM to 11 PM in June and July, and from 5 AM to 8 AM at the other end. They\'re weak fliers, rarely travelling more than 200 metres from their breeding site, which makes yard-level prevention surprisingly effective — if you eliminate breeding habitat on your property and your immediate neighbours\' properties, you significantly reduce the local Culex pipiens population biting your family. The dusk hours overlap exactly with summer evening backyard time, which is why barrier spray timing matters.',
  },
  {
    question: 'Does Mississauga spray for West Nile?',
    answer: 'Mississauga does not adulticide spray for West Nile — meaning the City does not fog neighbourhoods. What Peel Public Health does run is an annual catch-basin larviciding program. Methoprene briquettes are placed in roadside storm-water catch basins across the region to kill mosquito larvae before they emerge as biting adults. This program targets the single biggest Culex pipiens breeding habitat in any urban environment. It is effective at suppressing background populations, but it does not protect any individual property — your yard\'s standing water (gutters, birdbaths, plant saucers, low spots) breeds mosquitoes that the City\'s catch-basin program never touches. That\'s where homeowner action matters.',
  },
  {
    question: 'Can I get West Nile from my own backyard?',
    answer: 'Yes — and this is what most homeowners don\'t realize. Culex pipiens breeds in containers as small as a bottle cap of water. A clogged gutter holding a litre of water for 7 days can produce hundreds of biting adults. A plant saucer, a tarp fold, an unused kiddie pool, an old tire, a buckled patio stone holding water, a rain barrel without a screen — all of these are functional Culex breeding habitat. The mosquitoes that emerge fly less than 200 metres, meaning your own breeding sites bite your own family. Eliminating standing water in your yard, on a weekly check, is the single most effective West Nile prevention step any Mississauga homeowner can take.',
  },
  {
    question: 'How does professional mosquito control reduce West Nile risk?',
    answer: 'A professional barrier spray program reduces West Nile risk through two mechanisms. First, it kills adult mosquitoes resting on the underside of leaves and on shaded vegetation during the day — including the Culex pipiens that would otherwise bite your family at dusk. Second, the residual barrier creates a kill zone for incoming mosquitoes flying in from neighbouring properties or public green space, dropping the biting pressure in your yard by 85-90% for roughly 30 days per treatment. Combined with weekly standing water elimination and personal repellent use after dusk, professional barrier spray reduces the effective WNV exposure window in your own yard to a fraction of what it would be untreated.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'West Nile Virus Mississauga 2026: Risk, Surveillance + Yard Protection',
  description:
    "West Nile Virus is an established Peel Region concern in 2026. What Peel Public Health\'s surveillance finds, why Lake Ontario + Credit River wetlands matter, and yard prevention that works.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const AMZ_TAG = tagForSlug('west-nile-virus-mississauga-2026')

export default function WestNileMississaugaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'West Nile Virus Mississauga 2026', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">West Nile Virus Mississauga 2026</span>
          </nav>
          <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full mb-4 inline-block font-bold uppercase tracking-wider">Mississauga · 2026 Public Health Update</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By Alex &amp; The BuzzSkito Team</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={POST.date} dateModified={UPDATED} />

        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">West Nile Virus is confirmed in Mississauga&rsquo;s Culex pipiens mosquitoes every surveillance year, including 2026, but human cases in Peel remain uncommon; the dusk-biting mosquitoes are bred mostly in local standing water, so weekly water removal and yard-level control are the highest-leverage prevention.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Peel Public Health confirms WNV-positive mosquito pools in Mississauga every recent surveillance year; human cases in Peel stay uncommon &mdash; typically a handful per year.</li>
            <li>The main vector, Culex pipiens, feeds at dusk and dawn, with peak biting roughly 8&ndash;11 PM in June and July.</li>
            <li>Culex pipiens is a weak flier, rarely travelling more than 200 metres from where it breeds, so local standing water drives local biting.</li>
            <li>It breeds in water as small as a bottle cap; a clogged gutter holding water for 7 days can produce hundreds of adults.</li>
            <li>Peel runs catch-basin larviciding but does not adulticide (fog) neighbourhoods, so yard standing water is the homeowner&rsquo;s responsibility.</li>
            <li>A professional barrier spray reduces yard biting pressure by 85&ndash;90% for roughly 30 days per treatment.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          <p className="mt-1.5 text-xs text-gray-500">Health information for general education, not medical advice. Contact Peel Public Health or a healthcare provider about West Nile symptoms or concerns.</p>
        </div>

        <BlogPostCTA />

        <aside className="not-prose mb-6 rounded-xl bg-brand-50 border-l-4 border-brand-700 px-5 py-4">
          <p className="text-xs font-extrabold text-brand-700 uppercase tracking-wider mb-1.5">★ Data drawn from</p>
          <p className="text-sm text-brand-900 leading-relaxed">
            <strong>Peel Public Health</strong> West Nile surveillance program · <strong>Public Health Ontario</strong> integrated mosquito surveillance · <strong>Credit Valley Conservation</strong> wetland habitat data · <strong>Mississauga.ca</strong> storm-water and catch-basin reporting.
          </p>
        </aside>

        <p className="text-lg text-gray-700 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8 leading-relaxed">
          <strong>TL;DR:</strong> West Nile Virus is confirmed in Mississauga\'s Culex pipiens mosquito population every year, including 2026. Peel Public Health runs surveillance and catch-basin larviciding but does not adulticide spray. The mosquitoes biting your family at dusk are bred mostly in your own yard\'s standing water and your immediate neighbours\'. Weekly water elimination plus a professional barrier spray program is the highest-leverage homeowner response.
        </p>

        <h2>The 2026 picture: West Nile is established here</h2>
        <p>West Nile Virus is not a hypothetical threat in Peel Region. It has been confirmed in local Culex pipiens populations every surveillance year since the early 2000s, when it first reached Ontario. Peel Public Health operates an integrated mosquito surveillance program in coordination with Public Health Ontario and the Public Health Agency of Canada — trapping adult mosquitoes at fixed sites across Mississauga, Brampton, and Caledon, sorting them by species, pooling the Culex pipiens captures, and lab-testing those pools for WNV genetic material.</p>
        <p>In 2026, positive WNV mosquito pools have already been reported from Mississauga sites this season, with the first detections clustering along the Lake Ontario shoreline and in inland sites in Cooksville and central Mississauga. This is the normal pattern — WNV detection typically begins in late June, expands through July and August, and peaks in late August when adult mosquito populations are at their highest. Human cases lag mosquito detection by several weeks.</p>

        <h2>Understanding the vector: Culex pipiens</h2>
        <p>Roughly 60 species of mosquito are found in Ontario. Only a handful are competent West Nile vectors, and the dominant one in Mississauga is Culex pipiens — the northern house mosquito. Its behavioural quirks matter for prevention.</p>

        <h3>Breeding habitat is small and urban</h3>
        <p>Culex pipiens does not need a marsh or pond. It breeds in stagnant, organically rich, small-volume standing water — exactly the kind of water you find in clogged eavestroughs, plant saucers, tarp folds, abandoned containers, and storm-water catch basins. This is why the City\'s catch-basin larviciding program exists: roadside catch basins are the single largest Culex pipiens breeding habitat in an urban environment. But your gutters, your plant saucers, and your neighbour\'s old wheelbarrow are right behind them.</p>

        <h3>Short flight range concentrates the risk locally</h3>
        <p>Culex pipiens is a weak flier. Most individuals never travel more than 200 metres from where they emerge. That means the mosquito biting you at dusk almost certainly bred within a couple hundred metres of where you\'re standing — your yard, your neighbour\'s yard, the catch basin in front of your house, the rain barrel on the property behind you. This is a meaningful prevention insight: yard-level action genuinely does suppress the local biting population in a way that\'s impossible for, say, a long-flying Aedes species that travels kilometres.</p>

        <h3>Dusk-and-dawn feeding behaviour</h3>
        <p>Culex pipiens is crepuscular — most active in the hour before sunset, the hour after sunset, and again in the early morning. This overlaps almost perfectly with summer backyard dinners, evening dog walks, and patio time. It also tells you when personal repellent and barrier spray protection matter most.</p>

        <h2>Why Mississauga\'s geography supports West Nile transmission</h2>
        <h3>Lake Ontario shoreline acts as a bird amplifier</h3>
        <p>West Nile is fundamentally a bird disease — mosquitoes pick the virus up from infected birds and occasionally transmit it to humans. The Lake Ontario shoreline through Mississauga is a critical migratory stopover, especially around Rattray Marsh, Jack Darling Park, the Lakefront Promenade, and Marie Curtis Park. Resident bird populations (American crows, blue jays, American robins) plus seasonal migrants create a sustained reservoir of WNV-positive birds along the shoreline. The mosquitoes feeding on those birds are exactly the ones detected by Peel\'s shoreline surveillance traps.</p>

        <h3>Credit River wetlands provide habitat continuity</h3>
        <p>The Credit River corridor and its associated wetland sections — including the marshes around Riverwood Conservancy and the lower river mouth at Port Credit — support both bird populations and Culex breeding habitat. Riparian areas hold standing water longer than upland sites, which extends the breeding season for mosquito larvae.</p>

        <h3>Storm-water infrastructure as breeding habitat</h3>
        <p>Mississauga\'s storm-water system, like every urban system, includes thousands of roadside catch basins that fill with rainwater. Without the City\'s larviciding program these would each be a substantial Culex pipiens breeder. Even with the program, missed basins and atypical pooling spots produce mosquitoes that bite within a few blocks of where they emerge.</p>

        <h2>What Peel Public Health does — and what it doesn\'t do</h2>
        <p>Peel Public Health\'s WNV response has three components: surveillance (trapping, dead-bird reporting, lab testing), public education (advisories during high-risk weeks), and catch-basin larviciding using methoprene briquettes placed in roadside storm-water infrastructure. The larviciding is genuinely effective at suppressing the background Culex population, which is why human case counts in Peel are typically much lower than they would be without the program.</p>
        <p>What Peel Public Health does not do is adulticide spraying. The region does not fog neighbourhoods for adult mosquitoes. That decision is deliberate — adulticide programs are expensive, controversial, and provide short-lived protection — but it also means no public-health agency is removing the adult Culex pipiens biting you in your yard. That responsibility falls to homeowners and the private barrier-spray industry.</p>

        <h2>What actually works at the yard level</h2>
        <h3>Eliminate standing water — weekly check</h3>
        <p>The single highest-leverage action any Mississauga homeowner can take. Walk the property weekly during May through September. Empty plant saucers, birdbaths, kiddie pools, wheelbarrows, tarps, and any container holding water. Clean gutters in spring and again in mid-summer. Drill drainage holes in tire swings and rain barrels (or screen rain barrel openings with fine mesh). Fix low spots in the yard that pool after rain.</p>

        <h3>Treat ornamental ponds and water features</h3>
        <AffiliateDisclosure />
        <p>If you have a backyard pond, fountain, or water feature, either keep the water moving constantly (Culex won\'t breed in moving water) or use Bti products like Mosquito Dunks or Mosquito Bits — they kill mosquito larvae but are safe for fish, birds, pets, and beneficial insects. One dunk treats up to 100 sq ft of water surface for 30 days. <BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks on Amazon.ca →</BuyLink> For small containers, rain barrels, and low spots that need a faster knockdown, granular Mosquito Bits release Bti immediately rather than over weeks. <BuyLink tag={AMZ_TAG} search="summit mosquito bits">Check Mosquito Bits on Amazon.ca →</BuyLink></p>

        <TopPick tag={AMZ_TAG}
          label="Best DIY for Standing Water"
          name="Summit Mosquito Dunks (Bti larvicide)"
          blurb="For the standing water you can't drain — ponds, rain barrels, low spots — a Bti dunk kills Culex pipiens larvae before they hatch into the dusk-biting adults that carry West Nile, while staying safe for fish, birds, pets, and beneficial insects. One dunk treats up to 100 sq ft of water surface for about 30 days, making it the single highest-value product a Mississauga homeowner can add to a weekly water-elimination routine."
          search="summit mosquito dunks"
          score={8.7}
          pros={['Targets larvae before they can bite', 'Safe for fish, birds, and pets', 'Each dunk lasts about 30 days']}
          cons={['Only treats water you can reach', 'Does nothing for adult mosquitoes']}
        />

        <h3>Professional barrier spray for adult mosquitoes</h3>
        <p>Standing water elimination handles the larvae you can find. A professional barrier spray handles the adults that flew in from sites you can\'t. Targeted to shaded resting habitat — the underside of leaves, dense shrub interiors, mulched beds, fence-line vegetation — a barrier spray reduces yard mosquito biting pressure by 85-90% for roughly 30 days per treatment. For a meaningful season-long impact in a Mississauga yard, the BuzzSkito Standard Season runs 10 biweekly treatments from May through September.</p>

        <h3>Personal protection during dusk hours</h3>
        <p>Even with all of the above, plan for repellent during the 8-11 PM dusk window in June and July. Picaridin (20%), DEET (20-30%), or oil of lemon eucalyptus all work. Long sleeves and pants help. Move dinners and dog walks earlier when possible.</p>

        <h2>Same-week mosquito service across Mississauga</h2>
        <p>BuzzSkito provides same-week barrier spray service across every Mississauga neighbourhood — from the Port Credit waterfront and Lorne Park ravines to inland Erin Mills, Churchill Meadows, and Meadowvale. The Standard Season program runs 10 biweekly treatments timed to peak Culex pipiens activity. Combined <Link href="/mississauga-mosquito-control" className="text-brand-700 underline">Mississauga mosquito control</Link> and <Link href="/mississauga-tick-spray" className="text-brand-700 underline">Mississauga tick spray</Link> programs save $100 versus standalone services. Quotes go out within 24 hours.</p>

        <h2>Related guides</h2>
        <ul>
          <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 underline">Mosquito Season GTA: When Does It Start?</Link></li>
          <li><Link href="/blog/black-flies-ontario-when-they-come-out" className="text-brand-700 underline">Black Flies Ontario: When They Come Out</Link></li>
          <li><Link href="/gta-mosquito-pressure-map" className="text-brand-700 underline">GTA Mosquito Pressure Map</Link></li>
          <li><Link href="/yard-risk-report" className="text-brand-700 underline">Free Yard Risk Report — your address-specific score</Link></li>
        </ul>

        <p className="text-sm text-gray-600 mt-8">Stay safe out there.<br/>— Alex &amp; The BuzzSkito Team</p>
      </article>

      <CTASection heading="West Nile is established in Mississauga — protect your yard before peak season" subtext="Free custom quote based on your address and lot size. Sent within 24 hours. Same-week barrier spray service across every Mississauga neighbourhood." />
    </>
  )
}
