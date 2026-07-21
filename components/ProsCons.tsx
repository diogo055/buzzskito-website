/**
 * Scannable pros / cons block — the compliant, high-trust substitute for Amazon
 * star ratings. Pure editorial content (our own words); contains NO Amazon
 * reviews, ratings, or prices. Either column may be empty and is then skipped.
 */
export default function ProsCons({
  pros = [],
  cons = [],
}: {
  pros?: string[]
  cons?: string[]
}) {
  if (pros.length === 0 && cons.length === 0) return null
  return (
    <div className="not-prose my-5 grid gap-3 sm:grid-cols-2">
      {pros.length > 0 && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700">Pros</p>
          <ul className="space-y-1.5">
            {pros.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="mt-0.5 font-extrabold text-emerald-600" aria-hidden="true">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cons.length > 0 && (
        <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-rose-700">Cons</p>
          <ul className="space-y-1.5">
            {cons.map((c, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="mt-0.5 font-extrabold text-rose-500" aria-hidden="true">✕</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
