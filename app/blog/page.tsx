import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { buildMetadata, breadcrumbSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, TICK_BLOGS, NEW_BLOGS, NEW_BLOGS_2, NEW_BLOGS_3, NEW_BLOGS_4, NEW_BLOGS_5, NEW_BLOGS_6 } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control Blog | GTA',
  description:
    'Expert mosquito and tick control tips for GTA homeowners. Seasonal guides, prevention strategies & professional advice from BuzzSkito.',
  canonical: '/blog',
})

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/blog')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Mosquito &amp; Tick Control Guides</h1>
          <p className="text-xl text-brand-100 max-w-2xl">Expert advice for Ontario homeowners on protecting their families from mosquitoes and ticks. Covering pest seasons, treatment options, Lyme disease prevention, and more.</p>
        </div>
      </section>

      {/* Mosquito Pillar section */}
      <section aria-labelledby="mosquito-guides" className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl" aria-hidden="true">🦟</span>
            <h2 id="mosquito-guides" className="text-3xl font-extrabold text-brand-900">Mosquito Control Guides</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard {...MOSQUITO_BLOGS.pillar} category="mosquito" isPillar />
            {MOSQUITO_BLOGS.supporting.map((post) => (
              <BlogCard key={post.slug} {...post} category="mosquito" />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/mosquito-control" className="text-brand-700 font-semibold hover:underline text-sm">
              → View Mosquito Control Services
            </Link>
          </div>
        </div>
      </section>

      {/* Tick Pillar section */}
      <section aria-labelledby="tick-guides" className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl" aria-hidden="true">🕷️</span>
            <h2 id="tick-guides" className="text-3xl font-extrabold text-brand-900">Tick Control Guides</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard {...TICK_BLOGS.pillar} category="tick" isPillar />
            {TICK_BLOGS.supporting.map((post) => (
              <BlogCard key={post.slug} {...post} category="tick" />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/tick-control" className="text-amber-700 font-semibold hover:underline text-sm">
              → View Tick Control Services
            </Link>
          </div>
        </div>
      </section>

      {/* City & GEO Guides section */}
      <section aria-labelledby="city-guides" className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl" aria-hidden="true">📍</span>
            <h2 id="city-guides" className="text-3xl font-extrabold text-brand-900">City &amp; GEO Guides</h2>
          </div>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">Local mosquito and tick guides for specific GTA cities, neighbourhoods, and property types — covering real landmarks, waterways, and risk zones.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...NEW_BLOGS, ...NEW_BLOGS_2, ...NEW_BLOGS_3, ...NEW_BLOGS_4, ...NEW_BLOGS_5, ...NEW_BLOGS_6].map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mt-6 flex gap-6">
            <Link href="/service-areas" className="text-brand-700 font-semibold hover:underline text-sm">
              → View All Service Areas
            </Link>
            <Link href="/mosquito-control" className="text-brand-700 font-semibold hover:underline text-sm">
              → Mosquito Control Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">Need Professional Help?</h2>
          <p className="text-gray-600 mb-6">BuzzSkito provides professional mosquito and tick control across Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, and the wider GTA.</p>
          <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
