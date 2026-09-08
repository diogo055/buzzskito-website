import Link from 'next/link'

/**
 * Inline related-reading block, placed roughly 40% of the way down an article.
 *
 * Why inline and not in the footer: measured scroll depth on this site is 19.74%, so a
 * related-content module at the bottom of the page is seen by almost nobody. Anything that
 * needs to route a reader somewhere has to sit inside the part of the article people actually
 * reach. Keep it above the halfway mark.
 *
 * Each item is one internal link and one short reason to follow it. The reason is the whole
 * point — a bare list of titles reads as boilerplate and gets skipped. Say what the reader gets.
 */

export type RelatedItem = {
  /** Site-relative path, e.g. `/blog/permethrin-canada-yard-clothing-spray`. */
  href: string
  /** Link text. Write it as the answer to a question, not as a page title. */
  title: string
  /** One line on why this is worth the click. Keep it under ~90 characters. */
  why: string
}

export default function RelatedProducts({
  items,
  heading = 'Keep reading',
}: {
  items: RelatedItem[]
  heading?: string
}) {
  if (!items?.length) return null

  return (
    <aside
      className="not-prose my-8 rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-6 shadow-sm"
      aria-label={heading}
    >
      <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-3">
        {heading}
      </p>

      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="group block rounded-xl border border-emerald-100 bg-white px-4 py-3 transition hover:border-emerald-400 hover:shadow-sm"
            >
              <span className="block font-bold text-brand-900 leading-snug group-hover:text-emerald-800">
                {it.title}
                <span aria-hidden="true" className="ml-1 text-emerald-600">&rarr;</span>
              </span>
              <span className="mt-0.5 block text-sm text-gray-600 leading-relaxed">{it.why}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
