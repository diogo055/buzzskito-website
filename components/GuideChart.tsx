import type { ReactNode } from 'react'
import type { GuideBlock } from '@/lib/guides'

type ChartBlock = Extract<GuideBlock, { type: 'chart' }>

/**
 * A bar chart for the guides (content/guides/*.json, block type "chart"), e.g. reported cases
 * by year. Drawn as plain HTML and CSS on the server: no chart library and no client
 * JavaScript, and the text stays at its real size on a phone instead of shrinking with an SVG.
 *
 * Two or three series are stacked in a fixed colour order (blue, amber, green), checked for
 * colour-blind separation on a white background. Segments are split by a 2px white line, the
 * top of each bar is rounded and sits on a flat baseline, only the highest and the latest bar
 * carry a value label, and every number is in the "Show the numbers" table underneath.
 */
const SERIES_COLORS = ['#1d4ed8', '#d97706', '#059669']

const fmt = (n: number) => n.toLocaleString('en-US')
const fmtShort = (n: number) => (n >= 1_000_000 ? `${+(n / 1_000_000).toFixed(1)}M` : n >= 1000 ? `${+(n / 1000).toFixed(1)}K` : fmt(n))

/** A rounded top for the axis and three or four gridlines at round numbers. */
function niceScale(max: number) {
  if (!(max > 0)) return { top: 1, step: 1 }
  const rough = max / 4
  const mag = 10 ** Math.floor(Math.log10(rough))
  const r = rough / mag
  const step = (r > 5 ? 10 : r > 2 ? 5 : r > 1 ? 2 : 1) * mag
  return { top: Math.ceil(max / step) * step, step }
}

export default function GuideChart({ chart, caption, source }: { chart: ChartBlock; caption?: ReactNode; source: ReactNode }) {
  const n = chart.x.length
  const val = (s: number, i: number) => chart.series[s].values[i] ?? 0
  const totals = chart.x.map((_, i) => chart.series.reduce((sum, _s, s) => sum + val(s, i), 0))
  const max = Math.max(...totals)
  const { top, step } = niceScale(max)
  const ticks: number[] = []
  for (let v = 0; v <= top + step / 1000; v += step) ticks.push(Math.round(v * 1000) / 1000)
  const every = n <= 10 ? 1 : n <= 20 ? 2 : 5
  const peak = totals.indexOf(max)
  const last = n - 1
  const multi = chart.series.length > 1
  const id = `chart-${chart.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)}`
  const pct = (v: number) => `${(v / top) * 100}%`

  return (
    <figure className="not-prose my-8" aria-labelledby={`${id}-title`}>
      <p id={`${id}-title`} className="text-base font-bold leading-snug text-brand-900">{chart.title}</p>
      {chart.yLabel && <p className="mt-0.5 text-xs text-gray-500">{chart.yLabel}</p>}
      {multi && (
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-700">
          {chart.series.map((s, i) => (
            <li key={s.name} className="flex items-center gap-1.5">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: SERIES_COLORS[i] }} />
              {s.name}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex gap-2" aria-hidden="true">
        {/* y axis labels */}
        <div className="h-52 w-9 shrink-0 pt-5 sm:h-60">
          <div className="relative h-full">
            {ticks.map((t) => (
              <span key={t} className="absolute right-0 translate-y-1/2 text-[11px] tabular-nums leading-none text-gray-500" style={{ bottom: pct(t) }}>{fmtShort(t)}</span>
            ))}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="h-52 pt-5 sm:h-60">
            <div className="relative h-full border-b border-gray-300">
              {ticks.slice(1).map((t) => (
                <div key={t} className="absolute inset-x-0 border-t border-gray-100" style={{ bottom: pct(t) }} />
              ))}
              <div className="absolute inset-0 flex items-end gap-[2px]">
                {chart.x.map((label, i) => {
                  const segs = chart.series.map((_s, s) => ({ s, v: val(s, i) })).filter((x) => x.v > 0)
                  return (
                    <div key={i} className="group relative flex h-full min-w-0 flex-1 flex-col items-center justify-end">
                      {(i === peak || i === last) && totals[i] > 0 && (
                        <span className="mb-0.5 whitespace-nowrap text-[11px] font-semibold tabular-nums leading-none text-gray-700">{fmtShort(totals[i])}</span>
                      )}
                      <div className="flex w-full max-w-[28px] flex-col-reverse" style={{ height: pct(totals[i]) }}>
                        {segs.map(({ s, v }, k) => (
                          <div
                            key={s}
                            className={`${k > 0 ? 'border-b-2 border-white ' : ''}${k === segs.length - 1 ? 'rounded-t-[4px]' : ''}`}
                            style={{ height: `${(v / totals[i]) * 100}%`, backgroundColor: SERIES_COLORS[s] }}
                          />
                        ))}
                      </div>
                      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[11px] text-white shadow group-hover:block">
                        {label}: {multi ? chart.series.map((s, si) => `${s.name} ${chart.series[si].values[i] == null ? 'no data' : fmt(val(si, i))}`).join(', ') : chart.series[0].values[i] == null ? 'no data' : fmt(totals[i])}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="mt-1 flex gap-[2px]">
            {chart.x.map((l, i) => (
              <span key={i} className="min-w-0 flex-1 overflow-visible whitespace-nowrap text-center text-[11px] leading-tight text-gray-500">{i % every === 0 || i === last ? l : ''}</span>
            ))}
          </div>
        </div>
      </div>

      <details className="mt-3 text-sm">
        <summary className="cursor-pointer font-semibold text-brand-700">Show the numbers</summary>
        <div className="mt-2 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-brand-50">
              <tr>
                <th scope="col" className="px-3 py-1.5 text-left font-bold text-brand-900">&nbsp;</th>
                {chart.series.map((s) => <th key={s.name} scope="col" className="px-3 py-1.5 text-right font-bold text-brand-900">{s.name}</th>)}
                {multi && <th scope="col" className="px-3 py-1.5 text-right font-bold text-brand-900">Total</th>}
              </tr>
            </thead>
            <tbody>
              {chart.x.map((l, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <th scope="row" className="px-3 py-1.5 text-left font-semibold text-brand-800">{l}</th>
                  {chart.series.map((s) => <td key={s.name} className="px-3 py-1.5 text-right tabular-nums text-gray-700">{s.values[i] == null ? '–' : fmt(s.values[i] as number)}</td>)}
                  {multi && <td className="px-3 py-1.5 text-right tabular-nums text-gray-700">{fmt(totals[i])}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      <figcaption className="mt-2 text-xs leading-relaxed text-gray-500">
        {caption}
        {caption ? ' ' : ''}Source: {source}
      </figcaption>
    </figure>
  )
}
