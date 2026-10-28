import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import data from '@/lib/article-index.json'
import BugQuiz, { type QuizLink, type QuizResultView } from '@/components/BugQuiz'
import { QUESTIONS, QUIZ_PATH, RESULTS, type ResultId } from '@/lib/bug-quiz'
import PhotoBugIdentifier from '@/components/PhotoBugIdentifier'
import { PHOTO_ID_ENABLED } from '@/lib/photo-id'
import { RED_FLAGS } from '@/lib/bite-quiz'

/**
 * "What bug is this?" — a five-question pest identifier (retention brief, phase 6, Oct 2026).
 * A tool for the same readers as the articles: it ends in three guides to read next.
 *
 * Not on the ad allow-list (lib/ad-routes.json is changed only on the owner's say-so), so this
 * page loads no Mediavine script. Every result link goes to an article that does, and
 * components/AdNavigationGuard.tsx turns those clicks into full page loads on its own.
 *
 * The questions carry no photographs yet: see the note at the top of lib/bug-quiz.ts.
 *
 * Photo check (Oct 28, 2026): while lib/photo-id.ts is switched on (the owner's Anthropic key is in
 * Vercel), a photo uploader sits above the questions and the title and introduction say so. With
 * the switch off the page is exactly the five-question quiz.
 */

const TITLE = PHOTO_ID_ENABLED ? 'What Bug Is This? Photo & Quiz Bug Identifier' : 'What Bug Is This? 5-Question Pest Identifier'
const DESCRIPTION = PHOTO_ID_ENABLED
  ? 'Upload a photo of the bug, its droppings or its nest, or answer five quick questions. Get the most likely pest, how to confirm it, and the guides to read next.'
  : 'Answer five quick questions about where you found it, its size, how it moves and what it left behind. Get the most likely pest, how to confirm it, and the guides to read next.'

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, canonical: QUIZ_PATH })

type Article = { path: string; title: string; full?: string; hook: string; image: string | null }
const ARTICLES = new Map((data.articles as Article[]).map((a) => [a.path, a]))

function link(kind: QuizLink['kind'], path: string): QuizLink {
  const a = ARTICLES.get(path)
  // Fail the build, not the reader: a result must never link to a page that is gone.
  if (!a) throw new Error(`bug quiz: ${path} is not an article (lib/bug-quiz.ts)`)
  return { kind, path, title: a.title, hook: a.hook, image: a.image }
}

const VIEWS = Object.fromEntries(
  (Object.keys(RESULTS) as ResultId[]).map((id) => {
    const r = RESULTS[id]
    const view: QuizResultView = { id, name: r.name, verdict: r.verdict, confirm: r.confirm, links: [link('identify', r.identify[0]), link('identify', r.identify[1]), link('treat', r.treat)] }
    return [id, view]
  }),
) as Record<ResultId, QuizResultView>

export default function WhatBugIsThisPage() {
  const named = (Object.keys(VIEWS) as ResultId[]).filter((id) => id !== 'unsure')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Learning Centre', url: '/learn' }, { name: 'What Bug Is This?', url: QUIZ_PATH }])) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap gap-1 text-sm text-brand-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/learn" className="hover:text-white">Learning Centre</Link><span>/</span>
            <span className="text-white">What Bug Is This?</span>
          </nav>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">What Bug Is This?</h1>
          <p className="max-w-3xl text-xl text-brand-100">
            {PHOTO_ID_ENABLED ? `Upload a photo, or answer ${QUESTIONS.length} quick questions about where you found it, how big it is, how it moves and what it left behind.` : `${QUESTIONS.length} quick questions about where you found it, how big it is, how it moves and what it left behind.`} You get the most likely pest, how to confirm it, and the guides to read next.
          </p>
        </div>
      </section>

      <div className="bg-brand-50 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-4xl">
          {PHOTO_ID_ENABLED && (
            <>
              <PhotoBugIdentifier redFlags={RED_FLAGS} />
              <h2 id="questions" className="mb-4 mt-10 scroll-mt-32 text-2xl font-extrabold text-brand-900">No photo? Answer {QUESTIONS.length} quick questions</h2>
            </>
          )}
          <BugQuiz results={VIEWS} />
          <p className="mt-4 text-xs leading-relaxed text-gray-600">
            How this works: your answers are scored against the usual traits of {named.length} common household pests, taken from the identification guides on this site. It cannot see your bug, so treat the result as a place to start and confirm it with the guides. Nothing you answer is stored with your name or sent to anyone.
          </p>
        </div>
      </div>

      <section aria-labelledby="all-guides" className="bg-white px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 id="all-guides" className="mb-2 text-2xl font-extrabold text-brand-900">Already have a suspect?</h2>
          <p className="mb-6 text-gray-700">Go straight to its identification guides.</p>
          <ul className="grid gap-5 sm:grid-cols-2">
            {named.map((id) => (
              <li key={id} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="text-lg font-extrabold text-brand-900">{VIEWS[id].name}</h3>
                <ul className="mt-2 space-y-1.5 text-[15px]">
                  {VIEWS[id].links.map((l) => (
                    <li key={l.path}>
                      <Link href={l.path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="list" data-recirc-target={l.path.split('/').pop()} className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">{l.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-gray-500">
            BuzzSkito treats mosquitoes and ticks in the Greater Toronto Area. Our guides on other pests are independent research: we do not treat them. Local?{' '}
            <Link href="/free-yard-assessment" className="underline hover:text-brand-700">Ask for a free yard assessment</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
