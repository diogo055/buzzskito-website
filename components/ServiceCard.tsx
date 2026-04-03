import Link from 'next/link'

interface ServiceCardProps {
  name: string
  slug: string
  shortDesc: string
  icon: string
}

export default function ServiceCard({ name, slug, shortDesc, icon }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-brand-100 hover:border-brand-300 transition-all p-6 flex flex-col gap-3">
      <div className="text-4xl" aria-hidden="true">{icon}</div>
      <h3 className="text-xl font-bold text-brand-900">{name}</h3>
      <p className="text-gray-600 text-sm flex-1 leading-relaxed">{shortDesc}</p>
      <Link
        href={`/${slug}`}
        className="text-brand-700 hover:text-brand-500 font-semibold text-sm inline-flex items-center gap-1 mt-auto"
        aria-label={`Learn more about ${name}`}
      >
        Learn more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  )
}
