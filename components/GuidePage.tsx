import Link from 'next/link'
import type { ReactNode } from 'react'
import AuthorByline from '@/components/AuthorByline'
import { BUSINESS } from '@/lib/constants'
import { US_GUIDE_BUILT, US_GUIDE_PLANNED } from '@/lib/us-guide-built'
import { type Guide, type GuideBlock, CLUSTER_LABEL, CLUSTER_PILLAR, guidePath, guideSchemas, regionalPair, slugifyHeading } from '@/lib/guides'

/**
 * Renders one North American pest guide from its JSON file (content/guides/<slug>.json).
 *
 * The article body sits in `.max-w-3xl.mx-auto.prose-brand`, the same container every
 * other article on the site uses and the one Mediavine is told to place in-content ads in.
 * Tables, callouts and the publisher box are `.not-prose`, which is what Mediavine is asked
 * to keep ads away from.
 */

// ── inline text: **bold**, *italic*, [text](href) ───────────────────────────────
const TOKEN = /\*\*([^*]+)\*\*|\*([^*\s][^*]*)\*|\[([^\]]+)\]\(([^)\s]+)\)/g

function Inline({ text }: { text: string }): ReactNode {
  const out: ReactNode[] = []
  let last = 0
  let i = 0
  for (const m of Array.from(text.matchAll(TOKEN))) {
    const at = m.index ?? 0
    if (at > last) out.push(text.slice(last, at))
    if (m[1] !== undefined) out.push(<strong key={i++}><Inline text={m[1]} /></strong>)
    else if (m[2] !== undefined) out.push(<em key={i++}>{m[2]}</em>)
    // a planned guide that has not been written yet: show the words, hold the link (see lib/us-guide-built.ts)
    else if (m[4].startsWith('/') && US_GUIDE_PLANNED.has(m[4]) && !US_GUIDE_BUILT.has(m[4])) out.push(<Inline key={i++} text={m[3]} />)
    else if (m[4].startsWith('/')) out.push(<Link key={i++} href={m[4]}><Inline text={m[3]} /></Link>)
    else out.push(<a key={i++} href={m[4]} target="_blank" rel="noopener noreferrer"><Inline text={m[3]} /></a>)
    last = at + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}

const CALLOUT: Record<string, { box: string; label: string; name: string }> = {
  tip: { box: 'border-emerald-200 bg-emerald-50', label: 'text-emerald-700', name: 'Tip' },
  warning: { box: 'border-amber-300 bg-amber-50', label: 'text-amber-700', name: 'Caution' },
  note: { box: 'border-navy-100 bg-brand-50', label: 'text-brand-700', name: 'Note' },
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 id={slugifyHeading(block.text)} className="scroll-mt-28"><Inline text={block.text} /></h2>
    case 'h3':
      return <h3><Inline text={block.text} /></h3>
    case 'p':
      return <p><Inline text={block.text} /></p>
    case 'ul':
      return <ul>{block.items.map((it, i) => <li key={i}><Inline text={it} /></li>)}</ul>
    case 'ol':
      return <ol>{block.items.map((it, i) => <li key={i}><Inline text={it} /></li>)}</ol>
    case 'table':
      return (
        <div className="not-prose my-6">
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm min-w-[520px]">
              <thead className="bg-brand-50">
                <tr>{block.head.map((h, i) => <th key={i} scope="col" className="px-3 py-2 text-left font-bold text-brand-900"><Inline text={h} /></th>)}</tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className="border-t border-gray-100 align-top">
                    {row.map((cell, c) => (
                      <td key={c} className={c === 0 ? 'px-3 py-2 font-semibold text-brand-800' : 'px-3 py-2 text-gray-700'}><Inline text={cell} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && <p className="mt-2 text-xs text-gray-500"><Inline text={block.caption} /></p>}
        </div>
      )
    case 'callout': {
      const tone = CALLOUT[block.tone ?? 'note'] ?? CALLOUT.note
      return (
        <aside className={`not-prose my-6 rounded-xl border p-4 sm:p-5 ${tone.box}`}>
          <p className={`mb-1.5 text-xs font-extrabold uppercase tracking-wider ${tone.label}`}>{block.title ?? tone.name}</p>
          <p className="text-sm leading-relaxed text-gray-800"><Inline text={block.text} /></p>
        </aside>
      )
    }
    case 'media':
      return null // a photo or diagram still to be added; see reports/us_pages_media_needed.md
    default:
      return null
  }
}

const DISCLAIMER: Record<string, string> = {
  health:
    'This guide is general educational information, not medical advice. If you have symptoms or concerns after a bite or exposure, contact a healthcare provider.',
  pesticide:
    'Use any pesticide exactly as its label directs. The label is the law, and what is registered and sold varies by state.',
}

function PublisherBox({ guide }: { guide: Guide }) {
  const ours = guide.cluster === 'mosquitoes' || guide.cluster === 'ticks'
  const pest = CLUSTER_LABEL[guide.cluster]
  return (
    <aside aria-label="About BuzzSkito" className="not-prose my-10 rounded-2xl border border-navy-100 bg-brand-50 p-5 sm:p-6">
      <p className="text-[11px] font-extrabold uppercase tracking-widest text-brand-700 mb-2">Who wrote this</p>
      <h3 className="text-lg font-extrabold leading-tight text-brand-900 mb-2">
        {ours ? 'Written by a mosquito and tick control company' : guide.cluster === 'pest-control' ? 'We treat mosquitoes and ticks. Nothing else.' : <>We research {pest}. We don&rsquo;t treat them.</>}
      </h3>
      <p className="text-sm leading-relaxed text-gray-700 mb-3">
        {ours ? (
          <>BuzzSkito treats <strong>mosquitoes and ticks</strong> for a living. This guide is written for readers anywhere in North America, and its factual claims are cited to public-health and university sources. No brand pays to appear in it.</>
        ) : (
          <>BuzzSkito is a licensed <strong>mosquito and tick</strong> control company, and those are the only two pests we treat. We publish source-cited guides on other pests because readers keep asking. No brand pays to appear in them, and we do not sell the products they mention.</>
        )}
      </p>
      <p className="text-sm leading-relaxed text-gray-700 mb-4">
        If you are in the <strong>Greater Toronto Area</strong> and the problem is mosquitoes or ticks in your yard, that part we handle.
      </p>
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <Link href="/free-yard-assessment" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-extrabold text-white shadow transition-colors hover:bg-amber-400">
          Get a yard quote &rarr;
        </Link>
        <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center rounded-full border border-brand-300 px-5 py-2.5 text-sm font-bold text-brand-800 transition-colors hover:bg-white">
          {BUSINESS.phone}
        </a>
      </div>
    </aside>
  )
}

export default function GuidePage({ guide }: { guide: Guide }) {
  const path = guidePath(guide)
  const pillar = guide.kind === 'spoke' ? CLUSTER_PILLAR[guide.cluster] : undefined
  const pair = regionalPair(path)
  const headings = guide.body.filter((b): b is Extract<GuideBlock, { type: 'h2' }> => b.type === 'h2')
  const disclaimers = guide.disclaimer === 'both' ? ['health', 'pesticide'] : guide.disclaimer ? [guide.disclaimer] : []

  return (
    <>
      {guideSchemas(guide).map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex flex-wrap gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            {guide.kind === 'pillar' ? (
              <><Link href="/learn" className="hover:text-white">Learning Centre</Link><span>/</span></>
            ) : (
              <>
                <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                {pillar && <><Link href={pillar.href} className="hover:text-white">{pillar.name}</Link><span>/</span></>}
              </>
            )}
            <span className="text-white">{guide.breadcrumb}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{guide.h1}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">{guide.dek}</p>
        </div>
      </section>

      <section className="bg-white px-4" aria-label="Quick answer">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium"><Inline text={guide.quickAnswer.lead} /></p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              {guide.quickAnswer.bullets.map((b, i) => <li key={i}><Inline text={b} /></li>)}
            </ul>
          </div>
        </div>
      </section>

      {guide.facts && (
        <section className="pb-2 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-extrabold text-brand-900 mb-4">{guide.facts.title}</h2>
            <div className="rounded-xl border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm min-w-[480px]">
                <tbody>
                  {guide.facts.rows.map(([k, v]) => (
                    <tr key={k} className="border-b border-gray-100 last:border-0">
                      <th scope="row" className="px-4 py-2 text-left font-semibold text-brand-800 bg-brand-50 w-1/2 sm:w-1/3">{k}</th>
                      <td className="px-4 py-2 text-gray-700"><Inline text={v} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={guide.datePublished} dateModified={guide.dateModified} />

          {pair && pair.us === path && (
            <p className="not-prose -mt-2 mb-6 rounded-lg border border-navy-100 bg-brand-50 px-4 py-2.5 text-sm text-gray-700">
              Reading from Canada? Product rules and what is sold there differ.{' '}
              <Link href={pair.ca} className="font-semibold text-brand-700 underline">See the Canadian edition</Link>.
            </p>
          )}

          {guide.kind === 'pillar' && headings.length > 3 && (
            <nav aria-label="On this page" className="not-prose my-6 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">On this page</p>
              <ol className="grid gap-1.5 text-sm sm:grid-cols-2 list-decimal pl-5 text-gray-700">
                {headings.map((h) => (
                  <li key={h.text}><a href={`#${slugifyHeading(h.text)}`} className="text-brand-700 hover:underline">{h.text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*/g, '')}</a></li>
                ))}
              </ol>
            </nav>
          )}

          {guide.body.map((block, i) => <Block key={i} block={block} />)}

          {disclaimers.map((d) => (
            <p key={d} className="text-sm text-gray-500 italic mt-6">{DISCLAIMER[d]}</p>
          ))}

          <h2 id="faq" className="scroll-mt-28">Frequently Asked Questions</h2>
          <div className="not-prose space-y-4">
            {guide.faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
                <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                  {question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <h2 id="sources" className="scroll-mt-28">Sources</h2>
          <ol>
            {guide.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a> &mdash; {s.publisher}
              </li>
            ))}
          </ol>
          {/* Mediavine does not monetize "undisclosed" AI content, so the method is stated plainly.
              Keep this sentence true: it describes how these guides were actually produced. */}
          <p className="text-sm text-gray-500 mt-4">
            How this guide was made: it was researched and drafted with AI assistance from the sources listed above, then every factual claim was checked against those sources in a separate review pass. Found an error? Email {BUSINESS.email}.
          </p>

          <PublisherBox guide={guide} />
        </div>
      </article>
    </>
  )
}
