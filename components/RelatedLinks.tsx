import { Fragment } from 'react'
import Link from 'next/link'
import { relatedArticles, shortTitle, fullTitle, slugOf } from '@/lib/recirculation'

/**
 * In-content "Related" line: two or three text links to articles on the same topic, placed
 * mid-article. Companion to components/NextUp.tsx (see the note there for the why).
 *
 * The links come from lib/recirculation.json (npm run recirculation:backfill); hand-set ones go
 * in data/recirculation-overrides.json. They never repeat the page's "Next" article, and
 * "Keep reading" at the end avoids all of them, so one page offers up to seven different
 * articles. Server component: plain HTML links. Renders nothing if the page has no picks.
 */
export default function RelatedLinks({ path }: { path: string }) {
  const links = relatedArticles(path)
  if (links.length < 2) return null
  // short link text, unless two of them would then read the same
  const short = links.map((a) => shortTitle(fullTitle(a)))
  const text = links.map((a, i) => (short.indexOf(short[i]) !== short.lastIndexOf(short[i]) ? fullTitle(a) : short[i]))
  return (
    <aside data-recirc-unit="related" aria-label="Related articles" className="not-prose my-8 border-l-4 border-brand-200 pl-4">
      <p className="text-[15px] leading-relaxed text-gray-700">
        <span className="font-bold text-brand-900">Related:</span>{' '}
        {links.map((a, i) => (
          <Fragment key={a.path}>
            {i > 0 && <span aria-hidden="true" className="mx-1.5 text-gray-400">·</span>}
            <Link
              href={a.path}
              prefetch={false}
              data-recirc="in_content"
              data-recirc-kind="related"
              data-recirc-target={slugOf(a.path)}
              className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2 hover:text-brand-900"
            >
              {text[i]}
            </Link>
          </Fragment>
        ))}
      </p>
    </aside>
  )
}
