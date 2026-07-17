import Link from 'next/link'

type Tone = 'default' | 'top' | 'skip'

/**
 * Product-guide card for the Recommended Products hubs. Accent bar + hover-lift
 * + nudging arrow, with optional "Top pick" / "Skip it" tone flags.
 */
export default function GuideCard({
  href,
  title,
  blurb,
  tone = 'default',
}: {
  href: string
  title: string
  blurb: string
  tone?: Tone
}) {
  const accent =
    tone === 'skip'
      ? 'from-gray-300 to-gray-400'
      : tone === 'top'
        ? 'from-amber-400 to-amber-500'
        : 'from-brand-500 to-emerald-500'

  return (
    <Link
      href={href}
      className="hover-lift group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <div className={`h-1.5 bg-gradient-to-r ${accent}`} aria-hidden="true" />
      <div className="p-5 flex flex-col flex-1">
        {tone === 'top' && (
          <span className="self-start mb-2 text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
            ★ Top pick
          </span>
        )}
        {tone === 'skip' && (
          <span className="self-start mb-2 text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
            Skip it
          </span>
        )}
        <h3 className="font-bold text-brand-900 leading-snug mb-1.5 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{blurb}</p>
        <span className="arrow-nudge mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          Read guide
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
