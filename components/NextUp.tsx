import Link from 'next/link'
import { nextArticle, headline, slugOf } from '@/lib/recirculation'

/**
 * In-content "Next" unit: one large linked headline and a short teaser, placed early in an
 * article (and never above the first Amazon button).
 *
 * Why (owner's decision, Oct 2026): articles exist to keep readers on the site. Most readers
 * leave long before the "Keep reading" cards at the end, so the next article is offered where
 * they still are. One destination only: a list of choices gets fewer clicks than one clear one.
 *
 * Which article it shows comes from lib/recirculation.json (npm run recirculation:backfill);
 * to choose one by hand, or to switch the units off for a page, use
 * data/recirculation-overrides.json.
 *
 * Server component: plain HTML link, so search engines see it and nothing ships to the browser.
 * It is ordinary content inside the article (not fixed, not floating), so it cannot sit over an
 * ad slot. Clicks are counted by components/RecircClickTracker.tsx through the data-recirc
 * attributes. prefetch is off because every click on an article page is a full page load
 * (components/AdNavigationGuard.tsx), so a prefetched payload could never be used.
 * Renders nothing if the page has no pick.
 */
export default function NextUp({ path }: { path: string }) {
  const next = nextArticle(path)
  if (!next) return null
  return (
    <aside data-recirc-unit="next" aria-label="Next article" className="not-prose my-8 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4 sm:px-6 sm:py-5">
      <Link
        href={next.path}
        prefetch={false}
        data-recirc="in_content"
        data-recirc-kind="next"
        data-recirc-target={slugOf(next.path)}
        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
      >
        <span className="block text-[11px] font-extrabold uppercase tracking-widest text-brand-700">Next</span>
        <span className="mt-1 block text-xl font-extrabold leading-snug text-brand-900 underline decoration-brand-300 decoration-2 underline-offset-4 group-hover:text-brand-700 sm:text-2xl">
          {headline(next)} <span aria-hidden="true">→</span>
        </span>
        {/* no `block` here: line-clamp sets its own display, and `block` would switch the clamp off */}
        <span className="mt-1.5 text-sm leading-relaxed text-gray-600 line-clamp-2">{next.hook}</span>
      </Link>
    </aside>
  )
}
