import Link from 'next/link'
import Image from 'next/image'
import data from '@/lib/article-index.json'
import { inContentPicks, storedCards } from '@/lib/recirculation'

/**
 * "Keep reading": three cards from the SAME topic cluster, shown at the end of an article in
 * place of the old quote call-to-action.
 *
 * Why (owner's decision, Oct 2026): blog and Learning Centre readers are national and US, far
 * outside the GTA service area. In GA4, 11,757 blog readers in 30 days produced 9 visits to the
 * quote form and 0 leads. For those readers a quote button is a dead end and a related article
 * is another page view. Service and city pages keep their quote CTAs: this component is for
 * articles only.
 *
 * Rendered on the server from lib/article-index.json (built by scripts/build-article-index.mjs),
 * so no article data is shipped to the browser. The three cards are chosen by a fixed rotation
 * through the cluster, which spreads links evenly: every article is recommended by about three
 * of its siblings instead of the same few popular pages collecting every link.
 *
 * It keeps exactly one quiet text link to the quote form, by design. No buttons.
 */

type Article = { path: string; title: string; hook: string; cluster: string; image: string | null }
const ARTICLES = data.articles as Article[]
const FALLBACK = data.fallback as Record<string, string>

const LABEL: Record<string, string> = {
  mosquitoes: 'Mosquitoes', ticks: 'Ticks', 'bed-bugs': 'Bed bugs', mice: 'Mice and rats', ants: 'Ants', cockroaches: 'Cockroaches',
  garden: 'Garden pests', wasps: 'Wasps and bees', flies: 'Flies and biting midges', moisture: 'Damp and humidity', equipment: 'Sprayers and foggers',
  wildlife: 'Wildlife', crawlers: 'Crawling pests', 'pest-control': 'Pest control', general: 'Pest guides',
}

const hash = (s: string) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h }

export function pickReadNext(path: string, count = 3): Article[] {
  // The three cards are decided once and stored (lib/recirculation.json, written by
  // npm run recirculation:backfill), so they do not reshuffle across a whole topic cluster each
  // time an article is added. What follows is only the fallback for a page with nothing stored.
  const stored = storedCards(path)
  if (stored.length === count) return stored
  const self = ARTICLES.find((a) => a.path === path)
  const cluster = self ? self.cluster : 'general'
  const others = (c: string) => ARTICLES.filter((a) => a.cluster === c && a.path !== path)
  let pool = others(cluster)
  // a small cluster borrows from its nearest relative so there are always three cards
  for (let c = cluster, hops = 0; pool.length < count && hops < 3; hops++) { c = FALLBACK[c] || 'mosquitoes'; pool = [...pool, ...others(c).filter((a) => !pool.includes(a))] }
  if (pool.length <= count) return pool
  // pages with their own image go first, then a fixed rotation keyed on this page's address
  const pinned = pool.filter((a) => a.image && /^\/guides\//.test(a.image)).slice(0, 1)
  const rest = pool.filter((a) => !pinned.includes(a))
  const start = hash(path) % rest.length
  const picked = [...pinned]
  for (let i = 0; picked.length < count && i < rest.length; i++) picked.push(rest[(start + i * Math.max(1, Math.floor(rest.length / count))) % rest.length])
  // Never repeat an article the page already offers in its in-content "Next" or "Related" units
  // (components/NextUp.tsx, RelatedLinks.tsx): swap such a card for the next one in the rotation.
  const taken = inContentPicks(path)
  if (!picked.some((a) => taken.has(a.path))) return picked
  const kept = picked.filter((a) => !taken.has(a.path))
  for (let i = 0; kept.length < count && i < rest.length; i++) {
    const c = rest[(start + i) % rest.length]
    if (!taken.has(c.path) && !kept.includes(c)) kept.push(c)
  }
  return kept.length === count ? kept : picked
}

export default function ReadNext({ path, standalone = false }: { path: string; standalone?: boolean }) {
  const cards = pickReadNext(path)
  if (!cards.length) return null
  const block = (
    <section data-read-next aria-labelledby="keep-reading" className="not-prose my-10">
      <h2 id="keep-reading" className="text-2xl font-extrabold text-brand-900 mb-5">Keep reading</h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {cards.map((a) => (
          <li key={a.path} className="flex">
            <Link href={a.path} data-recirc="keep_reading" data-recirc-kind="card" data-recirc-target={a.path.split('/').pop()} className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600">
              {a.image ? (
                a.image.endsWith('.svg') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={a.image} alt="" loading="lazy" decoding="async" width={640} height={360} className="aspect-[16/9] w-full bg-brand-50 object-cover" />
                ) : (
                  <Image src={a.image} alt="" width={640} height={360} sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[16/9] w-full object-cover" />
                )
              ) : (
                // no picture for this article: a short labelled band on phones (a full 16:9 block of
                // plain colour is a lot of scrolling), the same height as picture cards from 640px up
                <div aria-hidden="true" className="flex h-24 w-full items-end bg-gradient-to-br from-brand-900 via-brand-800 to-emerald-800 p-4 sm:aspect-[16/9] sm:h-auto">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-200">{LABEL[a.cluster] || LABEL.general}</span>
                </div>
              )}
              <span className="flex flex-1 flex-col gap-1.5 p-4">
                <span className="text-base font-bold leading-snug text-brand-900 group-hover:text-brand-700">{a.title}</span>
                <span className="text-sm leading-relaxed text-gray-600">{a.hook}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-gray-500">
        BuzzSkito treats mosquitoes and ticks in the Greater Toronto Area. Local?{' '}
        <Link href="/free-yard-assessment" className="underline hover:text-brand-700">Ask for a free yard assessment</Link>.
      </p>
    </section>
  )
  if (!standalone) return block
  return (
    <div className="border-t border-gray-100 bg-white px-4 pb-6 pt-2">
      <div className="mx-auto max-w-4xl">{block}</div>
    </div>
  )
}
