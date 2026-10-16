import type { ReactNode } from 'react'

// The quick-ID table's minimum width by column count: two or three columns fit a phone screen.
const QUICK_ID_MIN_W: Record<number, string> = { 2: 'min-w-[280px]', 3: 'min-w-[320px]', 4: 'min-w-[480px]', 5: 'min-w-[560px]' }

/**
 * The box under a guide's quick answer (components/GuidePage.tsx renders a guide's `facts` with
 * it) and the quick-ID table on a hand-written article (the default export below), so both look
 * identical. With `head` it is a quick-ID table: one row per suspect (or per trait on an "X vs Y"
 * page), the first cell naming the row. On a phone the table scrolls sideways inside its box and
 * the first column stays put, so the reader always sees which bug a cell belongs to. Without
 * `head` it is the two-column "at a glance" list (rows of [label, value]), used by guides only.
 */
export function QuickIdBox({ title, head, rows, caption }: { title: ReactNode; head?: ReactNode[]; rows: ReactNode[][]; caption?: ReactNode }) {
  return (
    <>
      <h2 className="text-xl font-extrabold text-brand-900 mb-4">{title}</h2>
      <div className="rounded-xl border border-gray-200 overflow-x-auto">
        {head ? (
          <table className={`w-full text-sm ${QUICK_ID_MIN_W[head.length] ?? QUICK_ID_MIN_W[5]}`}>
            <thead className="bg-brand-50">
              <tr>{head.map((h, i) => <th key={i} scope="col" className={`px-4 py-2 text-left font-bold text-brand-900${i === 0 ? ' sticky left-0 bg-brand-50 shadow-[1px_0_0_#e5e7eb]' : ''}`}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, r) => (
                <tr key={r} className="border-t border-gray-100 align-top">
                  {row.map((cell, c) => (c === 0 ? (
                    <th key={c} scope="row" className="sticky left-0 bg-white px-4 py-2 text-left font-semibold text-brand-800 shadow-[1px_0_0_#e5e7eb]">{cell}</th>
                  ) : (
                    <td key={c} className="px-4 py-2 text-gray-700">{cell}</td>
                  )))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full text-sm min-w-[480px]">
            <tbody>
              {rows.map(([k, v], r) => (
                <tr key={r} className="border-b border-gray-100 last:border-0">
                  <th scope="row" className="px-4 py-2 text-left font-semibold text-brand-800 bg-brand-50 w-1/2 sm:w-1/3">{k}</th>
                  <td className="px-4 py-2 text-gray-700">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {caption && <p className="mt-2 text-xs text-gray-500">{caption}</p>}
    </>
  )
}

/**
 * The quick-ID table on a hand-written article (app/blog/<slug>/page.tsx), placed right after the
 * article's quick answer or first paragraph, inside the article body:
 *
 *   import QuickIdTable from '@/components/QuickIdTable'
 *   <QuickIdTable
 *     title="Mosquito bite or something else? Quick ID"
 *     head={['Bite', 'What it looks like', 'Where on the body', 'How long the itch lasts']}
 *     rows={[
 *       ['Mosquito', 'A puffy white-to-red bump', 'Any uncovered skin', 'About a week'],
 *       ['Flea', 'Small red bumps, often in groups', 'Ankles and lower legs', 'Up to a few weeks'],
 *     ]}
 *     caption={<>Sources: <a href="https://www.cdc.gov/...">CDC</a> and the pages linked below.</>}
 *   />
 *
 * 2 to 5 columns (3 or 4 read best on a phone), 4 to 12 rows. Every cell is a fact the page
 * already states or a source linked on the page supports; the caption names those sources.
 * Cells and the caption take text or JSX (a <Link> in a cell is fine). `.not-prose` keeps the
 * article's prose styles off the table and tells Mediavine not to place an ad inside it.
 */
export default function QuickIdTable({ title, head, rows, caption }: { title: string; head: ReactNode[]; rows: ReactNode[][]; caption?: ReactNode }) {
  return (
    <section aria-label={title} className="not-prose my-8">
      <QuickIdBox title={title} head={head} rows={rows} caption={caption} />
    </section>
  )
}
