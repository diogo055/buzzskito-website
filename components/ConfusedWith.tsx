import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { US_GUIDE_BUILT, US_GUIDE_PLANNED } from '@/lib/us-guide-built'
import { ledgerPhoto } from '@/lib/photos'
import { LICENSE_LABEL, type GuideConfusedCard } from '@/lib/guides'

/** One look-alike card: the look-alike's own page, its name, a photo id from the ledger and the one tell. */
export type ConfusedCard = GuideConfusedCard

/** A planned guide that has not been written yet (lib/us-guide-built.ts): its words show, its link waits. */
export const notLiveYet = (href: string) => US_GUIDE_PLANNED.has(href) && !US_GUIDE_BUILT.has(href)

// Two columns on a phone; from 640px rows of three (four cards: one row of four from 768px).
const CONFUSED_GRID: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3',
  6: 'grid-cols-2 sm:grid-cols-3',
}

/**
 * "Commonly confused with": a row of 2 to 6 photo cards, each linking the look-alike's own page.
 * The same component renders a guide's `confused` block (components/GuidePage.tsx) and the row on
 * a hand-written article, so both look identical:
 *
 *   import ConfusedWith from '@/components/ConfusedWith'
 *   <ConfusedWith items={[
 *     { href: '/blog/flea-bites-on-humans', name: 'Flea bites', photo: 'flea-bites-lower-leg', note: 'Small itchy bumps, mostly on the ankles and lower legs' },
 *     { href: '/blog/bed-bug-bites', name: 'Bed bug bites', photo: 'bed-bug-bites-forearm', note: 'Often in lines or clusters on skin left uncovered in bed' },
 *   ]} />
 *
 * On a hand-written page write the cards inline (items={[...]}) with literal photo ids and hrefs:
 * scripts/check-photos.mjs reads them there and fails the build on a photo the ledger does not
 * list, or a card that links a page that neither exists nor is planned.
 *
 * Each photo is shown whole (object-contain, never cropped) in a fixed 4:3 frame, so the row
 * keeps its height while photos load, and every photo is lazy-loaded. The photo, its size, credit
 * and licence come from its record in data/god-build/photos.json (an unknown id fails the build).
 * Credits sit in one line under the row, in full: a card is a link, and a link inside a link is
 * not allowed. A card whose page is planned but not live yet is shown without a link.
 * Clicks are counted by components/RecircClickTracker.tsx (location "confused_with").
 */
export default function ConfusedWith({ items, title }: { items: ConfusedCard[]; title?: string }) {
  const cards = items.map((c) => ({ ...c, rec: ledgerPhoto(c.photo), live: !notLiveYet(c.href) }))
  const box = 'flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white'
  return (
    <section aria-labelledby="look-alike-cards" className="not-prose my-8">
      <h3 id="look-alike-cards" className="mb-3 text-lg font-extrabold leading-tight text-brand-900">{title || 'Commonly confused with'}</h3>
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
