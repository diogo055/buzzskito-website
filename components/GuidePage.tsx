import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import type { ReactNode } from 'react'
import { BUSINESS } from '@/lib/constants'
import { US_GUIDE_BUILT, US_GUIDE_PLANNED } from '@/lib/us-guide-built'
import ReadNext from '@/components/ReadNext'
import NextUp from '@/components/NextUp'
import RelatedLinks from '@/components/RelatedLinks'
import GuideChart from '@/components/GuideChart'
import GuideMap from '@/components/GuideMap'
import { ledgerPhoto } from '@/lib/photos'
import { type Guide, type GuideBlock, CLUSTER_LABEL, GUIDE_HEROES, LICENSE_LABEL, guideParent, guidePath, guideSchemas, regionalPair, slugifyHeading } from '@/lib/guides'

/**
 * Renders one North American pest guide from its JSON file (content/guides/<slug>.json).
 *
 * The article body sits in `.max-w-3xl.mx-auto.prose-brand`, the same container every
 * other article on the site uses and the one Mediavine is told to place in-content ads in.
 * Tables, callouts and the publisher box are `.not-prose`, which is what Mediavine is asked
 * to keep ads away from.
 */

// A planned guide that has not been written yet (lib/us-guide-built.ts): its words show, its link waits.
const notLiveYet = (href: string) => US_GUIDE_PLANNED.has(href) && !US_GUIDE_BUILT.has(href)

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
    else if (m[4].startsWith('/') && notLiveYet(m[4])) out.push(<Inline key={i++} text={m[3]} />)
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
    case 'recipe': {
      const tier = SAFETY[block.safety.tier] ?? SAFETY.caution
      return (
        <section className="not-prose my-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-extrabold leading-tight text-brand-900">{block.title}</h3>
          {block.makes && <p className="mt-1 text-xs text-gray-500">{block.makes}</p>}
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="mb-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700">You need</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">{block.ingredients.map((it, i) => <li key={i}><Inline text={it} /></li>)}</ul>
            </div>
            <div>
              <p className="mb-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700">Steps</p>
              <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-800">{block.steps.map((it, i) => <li key={i}><Inline text={it} /></li>)}</ol>
            </div>
          </div>
          {block.works && <p className="mt-4 text-sm leading-relaxed text-gray-700"><strong className="text-brand-900">What it does: </strong><Inline text={block.works} /></p>}
          {block.limits && <p className="mt-2 text-sm leading-relaxed text-gray-700"><strong className="text-brand-900">Where it stops working: </strong><Inline text={block.limits} /></p>}
          <div className={`mt-4 rounded-xl border p-3.5 ${tier.box}`}>
            <p className={`mb-1 text-xs font-extrabold uppercase tracking-wider ${tier.label}`}>Pets and children: {tier.name}</p>
            <p className="text-sm leading-relaxed text-gray-800"><strong>Pets. </strong><Inline text={block.safety.pets} /></p>
            <p className="mt-1 text-sm leading-relaxed text-gray-800"><strong>Children. </strong><Inline text={block.safety.children} /></p>
          </div>
          {block.source && <p className="mt-3 text-xs text-gray-500">Recipe as published by <Inline text={block.source} /></p>}
        </section>
      )
    }
    case 'checklist':
      return (
        <section className="not-prose my-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6">
          {block.title && <h3 className="mb-3 text-lg font-extrabold leading-tight text-brand-900">{block.title}</h3>}
          <ul className="space-y-2.5">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-800">
                <span aria-hidden="true" className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border-2 border-emerald-600 bg-white" />
                <span><Inline text={it} /></span>
              </li>
            ))}
          </ul>
        </section>
      )
    case 'card':
      return (
        <section data-print-card className="not-prose my-8 rounded-2xl border-2 border-brand-900 bg-white p-5 sm:p-6">
          <p className="mb-1 text-[11px] font-extrabold uppercase tracking-widest text-brand-700">Print or save</p>
          <h3 className="text-xl font-extrabold leading-tight text-brand-900">{block.title}</h3>
          {block.intro && <p className="mt-2 text-sm leading-relaxed text-gray-700"><Inline text={block.intro} /></p>}
          <ol className="mt-4 space-y-2">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-800">
                <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-900 text-xs font-bold text-white">{i + 1}</span>
                <span><Inline text={it} /></span>
              </li>
            ))}
          </ol>
          {block.note && <p className="mt-4 border-t border-gray-200 pt-3 text-xs leading-relaxed text-gray-600"><Inline text={block.note} /></p>}
          <p className="mt-3 text-xs text-gray-500">buzzskito.ca</p>
        </section>
      )
    case 'media':
      return null // a photo or diagram still to be added; see reports/us_pages_media_needed.md
    case 'figure': {
      // A real photograph with the credit its licence requires. Pre-sized WebP, so no image optimizer.
      const lic = LICENSE_LABEL[block.license]
      return (
        <figure className="not-prose my-8">
          <Image src={block.src} alt={block.alt} width={block.width} height={block.height} unoptimized loading="lazy" className="h-auto w-full rounded-xl border border-gray-200 bg-gray-50" />
          <figcaption className="mt-2 text-xs leading-relaxed text-gray-500">
            {block.caption && <><Inline text={block.caption} />{' '}</>}
            Photo: <a href={block.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{block.credit}</a>
            {lic.url ? <>, <a href={lic.url} target="_blank" rel="noopener noreferrer license" className="underline">{lic.name}</a></> : <>, {lic.name}</>}.
          </figcaption>
        </figure>
      )
    }
    case 'chart':
      return <GuideChart chart={block} caption={block.caption ? <Inline text={block.caption} /> : undefined} source={<Inline text={block.source} />} />
    case 'map':
      return <GuideMap map={block} caption={block.caption ? <Inline text={block.caption} /> : undefined} source={<Inline text={block.source} />} />
    case 'confused':
      return <ConfusedWith block={block} />
    default:
      return null
  }
}

// The quick-ID table's minimum width by column count: two or three columns fit a phone screen.
const QUICK_ID_MIN_W: Record<number, string> = { 2: 'min-w-[280px]', 3: 'min-w-[320px]', 4: 'min-w-[480px]', 5: 'min-w-[560px]' }

// ── "Commonly confused with": photo cards linking each look-alike's own page ────
// Two columns on a phone; from 640px rows of three (four cards: one row of four from 768px).
const CONFUSED_GRID: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3',
  6: 'grid-cols-2 sm:grid-cols-3',
}

/**
 * Each photo is shown whole (object-contain, never cropped) in a fixed 4:3 frame, so the row
 * keeps its height while photos load, and every photo is lazy-loaded. The photo, its size, credit
 * and licence come from its record in data/god-build/photos.json (an unknown id fails the build).
 * Credits sit in one line under the row, in full: a card is a link, and a link inside a link is
 * not allowed. A card whose page is planned but not live yet is shown without a link.
 * Clicks are counted by components/RecircClickTracker.tsx (location "confused_with").
 */
function ConfusedWith({ block }: { block: Extract<GuideBlock, { type: 'confused' }> }) {
  const cards = block.items.map((c) => ({ ...c, rec: ledgerPhoto(c.photo), live: !notLiveYet(c.href) }))
  const box = 'flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white'
  return (
    <section aria-labelledby="look-alike-cards" className="not-prose my-8">
      <h3 id="look-alike-cards" className="mb-3 text-lg font-extrabold leading-tight text-brand-900">{block.title || 'Commonly confused with'}</h3>
      <ul className={`grid gap-3 ${CONFUSED_GRID[cards.length] ?? CONFUSED_GRID[6]}`}>
        {cards.map((c) => {
          const inner = (
            <>
              {/* the frame, not the photo, sets the height: an aspect-ratio box alone grows to fit a tall photo */}
              <span className="relative block aspect-[4/3] overflow-hidden border-b border-gray-100 bg-gray-50">
                <Image src={c.rec.file} alt={c.alt || c.name} width={c.rec.width} height={c.rec.height} unoptimized loading="lazy" className="absolute inset-0 h-full w-full object-contain" />
              </span>
              <span className="flex flex-1 flex-col gap-1 p-3">
                <span className={`text-sm font-bold leading-snug text-brand-900${c.live ? ' group-hover:text-brand-700 group-hover:underline' : ''}`}>{c.name}</span>
                <span className="text-xs leading-snug text-gray-600">{c.note}</span>
              </span>
            </>
          )
          return (
            <li key={c.href} className="flex">
              {c.live ? (
                <Link
                  href={c.href}
                  prefetch={false}
                  data-recirc="confused_with"
                  data-recirc-kind="card"
                  data-recirc-target={c.href.split('/').pop()}
                  className={`group ${box} transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600`}
                >
                  {inner}
                </Link>
              ) : (
                <div className={box}>{inner}</div>
              )}
            </li>
          )
        })}
      </ul>
      <p className="mt-2 text-xs leading-relaxed text-gray-500">
        {cards.length > 1 ? 'Photos' : 'Photo'}:
        {cards.map((c) => {
          const lic = LICENSE_LABEL[c.rec.license]
          return (
            <Fragment key={c.href}>
              {' '}{c.name}: <a href={c.rec.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{c.rec.credit}</a>
              {lic.url ? <>, <a href={lic.url} target="_blank" rel="noopener noreferrer license" className="underline">{lic.name}</a></> : <>, {lic.name}</>}.
            </Fragment>
          )
        })}
      </p>
    </section>
  )
}

const SAFETY: Record<string, { box: string; label: string; name: string }> = {
  'lower-risk': { box: 'border-emerald-200 bg-emerald-50', label: 'text-emerald-700', name: 'lower risk' },
  caution: { box: 'border-amber-300 bg-amber-50', label: 'text-amber-700', name: 'use with caution' },
  'keep-away': { box: 'border-red-200 bg-red-50', label: 'text-red-700', name: 'keep well away' },
}

const DISCLAIMER: Record<string, string> = {
  health:
    'This guide is general educational information, not medical advice. If you have symptoms or concerns after a bite or exposure, contact a healthcare provider.',
  pesticide:
    'Use any pesticide exactly as its label directs. The label is the law, and what is registered and sold varies by state.',
  // the Canadian province pages (locale en-CA)
  'pesticide-ca':
    'Use any pest control product exactly as its label directs. In Canada, pest control products are registered by Health Canada’s Pest Management Regulatory Agency: look for the PCP registration number on the label. Some provinces restrict certain products further.',
}

const longDate = (iso: string) => new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

/**
 * Who stands behind the page, stated accurately.
 *
 * These guides were drafted with AI assistance and fact-checked by a second AI pass, so they
 * do NOT carry the site's usual "By <person>" byline: Google asks for accurate authorship and
 * Mediavine does not monetize undisclosed AI content. The publisher is named instead.
 *
 * When a person has actually read and approved a guide, add "reviewedBy" and "reviewedOn" to
 * that guide's JSON file. The byline and the note at the foot of the page then say so. Only
 * add them when it is true.
 */
function Byline({ guide }: { guide: Guide }) {
  const reviewed = Boolean(guide.reviewedBy && guide.reviewedOn)
  return (
    <div className="not-prose flex items-center gap-3 py-4 border-y border-gray-200 my-6 text-sm text-gray-700">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white flex items-center justify-center font-bold flex-shrink-0" aria-hidden="true">B</div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-brand-900">
          {reviewed ? (
            <>Reviewed by <Link href={BUSINESS.author.url} className="hover:underline">{guide.reviewedBy}</Link></>
          ) : (
            <>Published by <Link href="/buzzskito-history" className="hover:underline">BuzzSkito Mosquito &amp; Tick Control</Link></>
          )}
        </p>
        <p className="text-xs text-gray-600">
          Published {longDate(guide.datePublished)}
          {guide.dateModified && guide.dateModified !== guide.datePublished ? <> · Updated {longDate(guide.dateModified)}</> : null}
          {' '}· Drafted with AI assistance and fact-checked against the <a href="#sources" className="underline">sources listed below</a>
        </p>
      </div>
    </div>
  )
}

/**
 * Who publishes the page. Deliberately NOT a call to action: blog and Learning Centre readers
 * are national and US (owner's decision, Oct 2026), so the quote buttons that used to sit here
 * are gone. The one quiet link to the quote form lives in the Keep reading block.
 */
function PublisherBox({ guide }: { guide: Guide }) {
  const ours = guide.cluster === 'mosquitoes' || guide.cluster === 'ticks'
  const pest = CLUSTER_LABEL[guide.cluster]
  return (
    <aside aria-label="About BuzzSkito" className="not-prose my-10 rounded-2xl border border-navy-100 bg-brand-50 p-5 sm:p-6">
      <p className="text-[11px] font-extrabold uppercase tracking-widest text-brand-700 mb-2">Who wrote this</p>
      <h3 className="text-lg font-extrabold leading-tight text-brand-900 mb-2">
        {ours ? 'Written by a mosquito and tick control company' : guide.cluster === 'pest-control' ? 'We treat mosquitoes and ticks. Nothing else.' : <>We research {pest}. We don&rsquo;t treat them.</>}
      </h3>
      <p className="text-sm leading-relaxed text-gray-700">
        {ours ? (
          <>BuzzSkito treats <strong>mosquitoes and ticks</strong> for a living. This guide is written for readers anywhere in North America, and its factual claims are cited to public-health and university sources. No brand pays to appear in it.</>
        ) : (
          <>BuzzSkito is a licensed <strong>mosquito and tick</strong> control company, and those are the only two pests we treat. We publish source-cited guides on other pests because readers keep asking. No brand pays to appear in them, and we do not sell the products they mention.</>
        )}
      </p>
    </aside>
  )
}

// ── where the in-content recirculation units go in a guide ─────────────────────
// Same rules as scripts/insert-recirculation.mjs uses for hand-written pages (guides carry no
// Amazon buttons, so the "below the first buy button" rule does not arise here):
//   Next     inside the first section, after its third block, between two paragraphs; if the
//            first section is too short for that, in front of the next H2
//   Related  in front of the H2 about 60% of the way through, at least two sections after
//            Next, and never in the last section
// Neither unit ever goes in front of the second or later heading of a numbered run
// ("2. Baking Soda", "Step 3"): a boxed "Next" between two steps reads as the end of the steps.
const NUMBERED_H2 = /^(?:(?:step|layer|tell|tip|sign|stage|phase|rule|mistake|reason|myth|method|way|option|purchase|pick|part|lesson|day|week)\s*#?\s*(\d+)\b|#?(\d+)\s*[.):—–-]\s)/i
function recircSpots(body: GuideBlock[]): { nextAt: number; relatedAt: number } {
  const none = { nextAt: -1, relatedAt: -1 }
  const h2At = body.map((b, i) => (b.type === 'h2' ? i : -1)).filter((i) => i >= 0)
  if (h2At.length < 2) return none
  const numberOf = (i: number) => {
    const b = body[i]
    const m = b.type === 'h2' ? b.text.match(NUMBERED_H2) : null
    return m ? Number(m[1] || m[2]) : 0
  }
  const allowed = (ord: number) => numberOf(h2At[ord]) < 2
  let nextAt = -1
  let anchor = 0
  let early = false
  if (!numberOf(h2At[0]) && numberOf(h2At[1]) < 2) {
    for (let j = h2At[0] + 4; j < h2At[1]; j++) {
      const prev = body[j - 1]
      const cur = body[j]
      if (prev.type === 'p' && cur.type === 'p' && !/[:,;]\s*$/.test(prev.text)) { nextAt = j; early = true; break }
    }
  }
  if (nextAt < 0) {
    anchor = h2At.findIndex((_, ord) => ord >= 1 && allowed(ord))
    if (anchor < 0) return none
    nextAt = h2At[anchor]
  }
  const min = anchor + (early ? 3 : 2)
  const max = h2At.length - 2
  const want = Math.max(min, Math.round((h2At.length - 1) * 0.6))
  let rel = -1
  for (let o = want; o <= max && rel < 0; o++) if (allowed(o)) rel = o
  for (let o = want - 1; o >= min && rel < 0; o--) if (o <= max && allowed(o)) rel = o
  return { nextAt, relatedAt: rel >= 0 ? h2At[rel] : -1 }
}

export default function GuidePage({ guide }: { guide: Guide }) {
  const path = guidePath(guide)
  const hubCrumb = guide.kind === 'spoke' ? guideParent(guide) : undefined
  // a parent that is the section index itself (/learn or /blog) is already in the breadcrumb
  const pillar = hubCrumb && hubCrumb.href !== path && hubCrumb.href !== '/learn' && hubCrumb.href !== '/blog' ? hubCrumb : undefined
  const inLearn = path.startsWith('/learn/')
  const hero = GUIDE_HEROES[path]
  const pair = regionalPair(path)
  const headings = guide.body.filter((b): b is Extract<GuideBlock, { type: 'h2' }> => b.type === 'h2')
  const disclaimers = guide.disclaimer === 'both' ? ['health', 'pesticide'] : guide.disclaimer ? [guide.disclaimer] : []
  // In-content recirculation (Oct 2026). Both units render nothing when the page has no pick.
  const { nextAt, relatedAt } = recircSpots(guide.body)

  return (
    <>
      {guideSchemas(guide).map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex flex-wrap gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            {inLearn ? (
              <><Link href="/learn" className="hover:text-white">Learning Centre</Link><span>/</span></>
            ) : (
              <><Link href="/blog" className="hover:text-white">Blog</Link><span>/</span></>
            )}
            {pillar && <><Link href={pillar.href} className="hover:text-white">{pillar.name}</Link><span>/</span></>}
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

      {hero && (
        <section className="bg-white px-4 pb-4" aria-label="Printable guide">
          <figure className="mx-auto max-w-md">
            <a href={hero.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <Image src={hero.src} alt={guide.heroAlt || guide.h1} width={hero.width} height={hero.height} sizes="(min-width: 640px) 448px, 92vw" priority className="h-auto w-full" />
            </a>
            <figcaption className="mt-2 text-center text-xs text-gray-500">
              The one-page version. <a href={hero.src} target="_blank" rel="noopener noreferrer" className="underline">Open it full size to print or save</a>. The details, sources and safety notes are below.
            </figcaption>
          </figure>
        </section>
      )}

      {guide.facts && (
        <section className="pb-2 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-extrabold text-brand-900 mb-4">{guide.facts.title}</h2>
            <div className="rounded-xl border border-gray-200 overflow-x-auto">
              {guide.facts.head ? (
                // a quick-ID table: one row per suspect (or per trait on an "X vs Y" page). On a phone
                // it scrolls sideways inside its box, and the first column stays put so the reader
                // always sees which bug a cell belongs to.
                <table className={`w-full text-sm ${QUICK_ID_MIN_W[guide.facts.head.length] ?? QUICK_ID_MIN_W[5]}`}>
                  <thead className="bg-brand-50">
                    <tr>{guide.facts.head.map((h, i) => <th key={i} scope="col" className={`px-4 py-2 text-left font-bold text-brand-900${i === 0 ? ' sticky left-0 bg-brand-50 shadow-[1px_0_0_#e5e7eb]' : ''}`}><Inline text={h} /></th>)}</tr>
                  </thead>
                  <tbody>
                    {guide.facts.rows.map((row, r) => (
                      <tr key={r} className="border-t border-gray-100 align-top">
                        {row.map((cell, c) => (c === 0 ? (
                          <th key={c} scope="row" className="sticky left-0 bg-white px-4 py-2 text-left font-semibold text-brand-800 shadow-[1px_0_0_#e5e7eb]"><Inline text={cell} /></th>
                        ) : (
                          <td key={c} className="px-4 py-2 text-gray-700"><Inline text={cell} /></td>
                        )))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
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
              )}
            </div>
            {guide.facts.caption && <p className="mt-2 text-xs text-gray-500"><Inline text={guide.facts.caption} /></p>}
          </div>
        </section>
      )}

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <Byline guide={guide} />

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

          {guide.body.map((block, i) => (
            <Fragment key={i}>
              {i === nextAt && <NextUp path={path} />}
              {i === relatedAt && <RelatedLinks path={path} />}
              <Block block={block} />
            </Fragment>
          ))}

          {disclaimers.map((d) => (
            <p key={d} className="text-sm text-gray-500 italic mt-6">{DISCLAIMER[d === 'pesticide' && guide.locale === 'en-CA' ? 'pesticide-ca' : d]}</p>
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
            How this guide was made: it was researched and drafted with AI assistance from the sources listed above. A second, independent AI pass then checked each factual claim against those sources.
            {guide.reviewedBy && guide.reviewedOn ? <> It was then read and approved by {guide.reviewedBy} on {longDate(guide.reviewedOn)}.</> : null}
            {' '}Found an error? Email {BUSINESS.email}.
          </p>

          <PublisherBox guide={guide} />
        </div>
      </article>

      <ReadNext path={path} standalone />
    </>
  )
}
