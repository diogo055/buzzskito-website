import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import BlogCard from '@/components/BlogCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, CITIES, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control GTA | Safe for Kids & Pets – BuzzSkito',
  description:
    'Professional tick yard spray serving the GTA. Kills ticks at all life stages. Safe for children and pets after 30 min. Mississauga, Toronto, Brampton, Vaughan, Oakville, Burlington & more. Free quotes.',
  canonical: '/tick-control',
})

const FAQS = [
  { question: 'How long does tick spray last?', answer: "BuzzSkito's professional tick treatment provides up to 30 days of protection per application. We recommend two seasonal treatments — one in late May/June and one in August/September — for season-long coverage." },
  { question: 'Is tick control yard spray safe for children?', answer: 'Yes. Our Health Canada–approved formula is safe for children once it has dried — approximately 30 minutes after application. During that drying window, children should stay off the treated area. After 30 minutes, kids can play on the grass and use the yard normally. The product bonds to leaf surfaces and vegetation where ticks rest — not to grass blades at ground level where children play. We also observe buffer zones around vegetable gardens and sandboxes on every property we treat.' },
  { question: 'Is tick spray safe for dogs and cats?', answer: 'Yes. Pets can return to the treated yard 30 minutes after application, once the product has fully dried. The formula is applied to vegetation and lawn edges — not directly to pet areas like kennel runs or dog beds. We recommend keeping pets indoors during application and for the 30-minute drying period. After that, there is no exposure risk.' },
  { question: 'Is tick control available near me in the GTA?', answer: 'BuzzSkito provides tick control across 19 GTA cities including Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Woodbridge, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, and Thornhill. We also cover York Region communities including Kleinburg, Nobleton, and Schomberg. Call (289) 216-5030 to confirm service at your specific address.' },
  { question: 'What tick species are found in Ontario?', answer: 'The primary species in Ontario are the blacklegged tick (deer tick), which transmits Lyme disease, and the American dog tick. Both are active across the GTA and can be found in lawns, gardens, and wooded areas adjacent to conservation lands.' },
  { question: 'Does tick spray kill ticks at all life stages?', answer: 'Yes. Our professional barrier spray targets adult ticks, nymphs (the smallest and most dangerous stage for Lyme disease transmission), and larvae, providing comprehensive protection across the full tick lifecycle.' },
  { question: 'Where do ticks hide in a yard?', answer: 'Ticks concentrate at lawn edges, under leaf litter, in garden beds, along fence lines, under woodpiles, and in shaded areas bordering woods or tall grass. Our treatment specifically targets these high-risk zones.' },
  { question: 'Which GTA cities have the highest tick risk?', answer: 'The highest tick activity in the GTA is found near the Oak Ridges Moraine (Richmond Hill, Caledon, King City), Rouge National Urban Park (Scarborough, Markham), Humber River valley (Vaughan, Woodbridge, Etobicoke), and Credit River corridor (Mississauga, Georgetown, Halton Hills). York Region communities near the Moraine — including King City, Kleinburg, and Nobleton — are among the highest-risk areas in the GTA. All 19 cities we serve have meaningful tick risk.' },
]

export default function TickControlPage() {
  const primaryCities = CITIES.slice(0, 6)
  const extendedCities = CITIES.slice(6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Tick Control', description: 'Professional tick barrier spray service for residential lawns and properties across the Greater Toronto Area. Kills ticks at all life stages.', slug: '/tick-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/tick-control')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Tick Control</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Professional Tick Control<br />
              <span className="text-amber-400">for GTA Homes</span>
            </h1>
            <p className="text-xl text-brand-100 max-w-2xl leading-relaxed mb-8">
              Barrier spray that kills ticks at all life stages and provides up to 30-day protection. Serving 19 cities across the GTA — from Mississauga to Caledon, Scarborough to King City.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">
                Get a Free Quote
              </Link>
              <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">
                {BUSINESS.phone}
              </a>
            </div>
            <p className="mt-5 text-brand-300 text-sm">
              Also offering <Link href="/mosquito-control" className="text-brand-400 underline hover:text-white">mosquito control</Link> — bundle both services for complete yard protection.
            </p>
          </div>
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
            <Image
              src="/spray-pool.jpg"
              alt="BuzzSkito technician treating a pool-area garden for ticks"
              width={700}
              height={520}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why tick control matters */}
      <section aria-labelledby="why-tick-control" className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 id="why-tick-control" className="text-3xl font-extrabold text-brand-900 mb-6">Why Tick Control Matters in the GTA</h2>
          <div className="prose-brand max-w-none">
            <p>
              Tick populations in Ontario — particularly the blacklegged tick (<em>Ixodes scapularis</em>) — have expanded significantly northward over the past decade due to warmer winters. The blacklegged tick is the primary vector for <strong>Lyme disease</strong> in Canada, and its range now covers much of southern Ontario including every city BuzzSkito serves.
            </p>
            <p>
              Unlike mosquitoes, ticks don't fly or jump. They wait on grass blades and brush at the edges of your lawn, attaching to passing hosts. This means your backyard — not the woods — is the primary tick risk zone for most GTA homeowners. Properties near conservation areas, river valleys, ravines, and the Oak Ridges Moraine face the highest exposure.
            </p>
            <p>
              Professional barrier spray is the most effective way to reduce tick populations in your yard. Unlike DIY products, BuzzSkito's treatment targets the specific micro-habitats where ticks concentrate: leaf litter, lawn edges, fence lines, and shaded garden borders.
            </p>
            <p>
              Learn more in our <Link href="/blog/ultimate-tick-control-guide-ontario" className="text-brand-700 underline hover:text-brand-500">Ultimate Tick Control Guide for Ontario Homeowners</Link> or read about{' '}
              <Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 underline hover:text-brand-500">Lyme disease prevention in Ontario</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section aria-labelledby="tick-included" className="py-14 px-4 bg-brand-50">
        <div className="max-w-5xl mx-auto">
          <h2 id="tick-included" className="text-3xl font-extrabold text-brand-900 mb-10 text-center">What's Included in Every Tick Treatment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'High-Risk Zone Targeting', desc: 'Lawn edges, leaf litter, garden beds, fence lines, under decks, woodpiles — all the areas where ticks concentrate.' },
              { icon: '🔬', title: 'All Life Stages Eliminated', desc: 'Our formula kills adult ticks, nymphs (tiny and hard to spot), and larvae on contact.' },
              { icon: '🛡️', title: 'Up to 30-Day Protection', desc: 'One treatment keeps your yard protected for up to 30 days — far longer than mosquito treatments.' },
              { icon: '💧', title: 'Health Canada–Approved', desc: 'Our tick spray is fully approved for residential use in Ontario, safe for gardens, pets, and pollinators after drying.' },
              { icon: '👶', title: 'Safe After 30 Minutes', desc: 'Kids and pets can return to the yard 30 minutes after the treatment has fully dried.' },
              { icon: '🔁', title: 'Free Retreatment Guarantee', desc: 'If ticks return within the protection window, we retreat your property at no additional cost.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
                <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal plan */}
      <section aria-labelledby="tick-schedule" className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="tick-schedule" className="text-3xl font-extrabold text-brand-900 mb-4">Recommended Tick Treatment Schedule</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">Two strategic treatments per season provide complete coverage during peak tick activity windows in Ontario.</p>
          <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
              <div className="text-amber-700 font-extrabold uppercase text-xs tracking-wide mb-2">Treatment 1</div>
              <div className="text-2xl font-extrabold text-brand-900">Late May / June</div>
              <p className="text-gray-500 text-xs mt-2">Targets nymphs emerging in spring — the highest Lyme disease risk period</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
              <div className="text-amber-700 font-extrabold uppercase text-xs tracking-wide mb-2">Treatment 2</div>
              <div className="text-2xl font-extrabold text-brand-900">August / September</div>
              <p className="text-gray-500 text-xs mt-2">Targets adult tick emergence in late summer and early fall</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            Bundle with our <Link href="/mosquito-control" className="text-brand-700 underline">mosquito control service</Link> for complete protection in one visit.
          </p>
        </div>
      </section>

      {/* City links — all 19 */}
      <section aria-labelledby="tick-cities" className="py-14 px-4 bg-brand-50">
        <div className="max-w-5xl mx-auto">
          <h2 id="tick-cities" className="text-3xl font-extrabold text-brand-900 mb-4 text-center">Tick Control by City</h2>
          <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">Select your city for local tick risk information and service details specific to your area.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {primaryCities.map((city) => (
              <Link
                key={city.name}
                href={city.tickSlug}
                className="block bg-white border border-amber-200 rounded-xl p-5 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all group"
              >
                <h3 className="font-extrabold text-brand-900 group-hover:text-white mb-1">{city.name}</h3>
                <p className="text-xs text-gray-500 group-hover:text-amber-100 line-clamp-2">{city.tickBlurb}</p>
                <div className="text-amber-600 group-hover:text-amber-200 text-xs font-semibold mt-2">View service →</div>
              </Link>
            ))}
          </div>
          <h3 className="text-lg font-bold text-brand-900 mb-3">Also serving across the GTA:</h3>
          <div className="flex flex-wrap gap-2">
            {extendedCities.map((city) => (
              <Link
                key={city.name}
                href={city.tickSlug}
                className="text-sm bg-white border border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-full transition-colors font-medium"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            See all 19 cities on our <Link href="/service-areas" className="text-brand-700 underline">full service areas page</Link>, or view the <Link href="/tick-control-ontario" className="text-amber-700 underline">Ontario tick control overview</Link>.
          </p>
        </div>
      </section>

      {/* Blog links */}
      <section aria-labelledby="tick-guides" className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 id="tick-guides" className="text-2xl font-extrabold text-brand-900 mb-3">Tick Control Guides</h2>
          <p className="text-gray-500 mb-8 text-sm">Start with our comprehensive tick control guide, then explore specific topics.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <BlogCard {...TICK_BLOGS.pillar} category="tick" isPillar />
            {TICK_BLOGS.supporting.map((post) => (
              <BlogCard key={post.slug} {...post} category="tick" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="tick-faq" className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 id="tick-faq" className="text-3xl font-extrabold text-brand-900 text-center mb-8">Tick Control FAQ</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            More questions? See our <Link href="/frequently-asked-question" className="text-brand-700 underline">full FAQ</Link> or call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a>.
          </p>
        </div>
      </section>

      <CTASection heading="Protect Your Family from Ticks This Season" subtext="Get a free tick control quote for your GTA property. No contracts — just results." variant="dark" />
    </>
  )
}
