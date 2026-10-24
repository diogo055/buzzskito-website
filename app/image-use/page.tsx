import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { BUSINESS, SITE_URL } from '@/lib/constants'

// Owner's decision, Oct 24, 2026: BuzzSkito's own diagrams and infographics are free to reuse with
// credit and a link (CC BY 4.0). Image schema on those diagrams names this page as
// `acquireLicensePage` (components/Figure.tsx, lib/guides.ts). Photos by other photographers keep
// their own licences, shown in each caption; the logo and brand are not covered.
const IMAGE_USE_PATH = '/image-use'
const UPDATED = '2026-10-24'

export const metadata: Metadata = buildMetadata({
  title: 'Use Our Pest Diagrams Free (with Credit)',
  description: 'BuzzSkito’s pest diagrams and infographics are free to reuse under CC BY 4.0: credit BuzzSkito and link to the page the image came from. How to credit, and what is not covered.',
  canonical: IMAGE_USE_PATH,
})

export default function ImageUsePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Use our diagrams', url: IMAGE_USE_PATH }])) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Use our diagrams</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Use our diagrams, free</h1>
          <p className="text-xl text-brand-100 max-w-xl">Credit BuzzSkito and link back. That&rsquo;s it.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <p className="text-sm text-gray-500">Last updated: October 24, 2026</p>

          <p>
            The diagrams and infographics that {BUSINESS.name} makes for this site (size comparisons, life cycles,
            seasonal charts and the like) are licensed under the{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" rel="license">Creative Commons Attribution 4.0 International licence (CC BY 4.0)</a>.
            You may share and adapt them, in print or online, for any purpose, including commercial use.
          </p>

          <h2>How to credit</h2>
          <p>Name BuzzSkito, link to the page the image came from, and name the licence. For example:</p>
          <blockquote>
            <p>Diagram: <a href={`${SITE_URL}/blog/tick-vs-bed-bug`}>BuzzSkito</a>, CC BY 4.0</p>
          </blockquote>
          <p>If you changed the image (cropped, translated or recoloured it), say so, and don&rsquo;t present the changed version as ours.</p>

          <h2>What this does not cover</h2>
          <ul>
            <li><strong>Photographs by other people.</strong> Most photos on this site come from the CDC, iNaturalist observers, Wikimedia Commons and other sources. Each one keeps its own licence, shown in its caption under &ldquo;Photo&rdquo;. Follow that licence, not this page.</li>
            <li><strong>Our logo and the BuzzSkito name</strong>, beyond the credit line above.</li>
            <li><strong>Endorsement.</strong> Using a diagram doesn&rsquo;t mean BuzzSkito endorses you, your product or your advice.</li>
          </ul>

          <h2>Questions</h2>
          <p>
            For a higher-resolution file or anything this page doesn&rsquo;t answer, <Link href="/contact">contact us</Link>.
          </p>
          <p className="text-sm text-gray-500">This page took effect on {UPDATED}.</p>
        </div>
      </section>
    </>
  )
}
