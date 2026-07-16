import Link from 'next/link'
import { MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

/**
 * HelpfulResources — a 3-card "Helpful Resources" block linking to the top
 * pillar guides. Enforces template-level internal links from any page into the
 * highest-authority blog content.
 *
 * Pass a custom `resources` array (max 3 render cleanly) to override, or omit it
 * to get the three defaults: the mosquito pillar guide, the tick pillar guide,
 * and the mosquito-season explainer. Slugs are pulled from lib/constants so they
 * stay correct if a pillar is ever re-slugged. Server component.
 */

export interface HelpfulResource {
  href: string
  title: string
  blurb: string
  category: 'mosquito' | 'tick'
}

const DEFAULT_RESOURCES: HelpfulResource[] = [
  {
    href: `/blog/${MOSQUITO_BLOGS.pillar.slug}`,
    title: 'The Ultimate Backyard Mosquito Control Guide',
    blurb: 'Biology, prevention, barrier spray, and seasonal scheduling — everything GTA homeowners need to eliminate mosquitoes.',
    category: 'mosquito',
  },
  {
    href: `/blog/${TICK_BLOGS.pillar.slug}`,
    title: 'The Ultimate Tick Control Guide for Ontario',
    blurb: 'Ontario tick species, Lyme disease risk, and how to protect your family with professional yard treatment.',
    category: 'tick',
  },
  {
    href: `/blog/${MOSQUITO_BLOGS.supporting[0].slug}`,
    title: 'When Does Mosquito Season Start in the GTA?',
    blurb: 'Exact dates, temperature triggers, and peak activity windows across Toronto, Mississauga, and the wider GTA.',
    category: 'mosquito',
  },
]

export default function HelpfulResources({
  resources = DEFAULT_RESOURCES,
  heading = 'Helpful Resources',
}: {
  resources?: HelpfulResource[]
  heading?: string
}) {
  return (
    <section className="my-10" aria-label={heading}>
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-900 mb-5">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {resources.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="hover-lift group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
          >
            <div
              className={`h-1.5 ${r.category === 'tick' ? 'bg-amber-500' : 'bg-brand-600'}`}
              aria-hidden="true"
            />
            <div className="p-5 flex flex-col flex-1">
              <span
                className={`text-xs font-semibold uppercase tracking-wide mb-2 ${r.category === 'tick' ? 'text-amber-700' : 'text-brand-700'}`}
              >
                {r.category === 'tick' ? 'Tick Control' : 'Mosquito Control'}
              </span>
              <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{r.blurb}</p>
              <span className="arrow-nudge mt-3 text-sm font-semibold text-brand-700 group-hover:text-brand-500 inline-flex items-center gap-1">
                Read guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
