/**
 * BuzzSkito's OWN editorial score (out of 10). This is the compliant substitute
 * for Amazon star ratings / review counts, which may NOT be displayed outside a
 * live API. It is unambiguously labelled as our own editorial rating — never
 * styled to look like an Amazon customer rating or review-count aggregate.
 */
export default function EditorialScore({
  score,
  label = 'BuzzSkito rating',
}: {
  score: number
  label?: string
}) {
  return (
    <span className="not-prose inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-800 whitespace-nowrap">
      <span className="text-amber-500" aria-hidden="true">★</span>
      <span className="font-mono tabular-nums">{score.toFixed(1)}</span>
      <span className="font-semibold text-brand-400">/10</span>
      <span className="font-medium text-gray-400">· {label}</span>
    </span>
  )
}
