import Link from 'next/link'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  category?: 'mosquito' | 'tick'
  isPillar?: boolean
}

export default function BlogCard({ slug, title, excerpt, date, category = 'mosquito', isPillar = false }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
  const icon = category === 'tick' ? '🕷️' : '🦟'
  const categoryLabel = category === 'tick' ? 'Tick Control' : 'Mosquito Control'

  return (
    <article className={`bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col ${isPillar ? 'border-brand-400 ring-1 ring-brand-300' : 'border-gray-100'}`}>
      <div className={`h-2 ${category === 'tick' ? 'bg-amber-500' : 'bg-brand-600'}`} aria-hidden="true" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg" aria-hidden="true">{icon}</span>
          <span className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${category === 'tick' ? 'bg-amber-50 text-amber-700' : 'bg-brand-50 text-brand-700'}`}>
            {categoryLabel}
          </span>
          {isPillar && (
            <span className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-brand-900 text-white">
              Pillar Guide
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <time className="text-xs text-gray-400" dateTime={date}>{formattedDate}</time>
          <Link
            href={`/blog/${slug}`}
            className="text-sm font-semibold text-brand-700 hover:text-brand-500 flex items-center gap-1"
            aria-label={`Read: ${title}`}
          >
            Read guide <span className="sr-only">: {title}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
