'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { rankCandidates, type IdQuizDef } from '@/lib/identifier-quiz'

/**
 * The interactive part of the identifier tools built on lib/identifier-quiz.ts: the tick identifier
 * (/tools/tick-identifier) and the spider identifier (/tools/spider-identifier). Same behaviour and
 * markup as the bug bite identifier (components/BiteQuiz.tsx); only the quiz data and the words
 * around it change. The page (a server component) passes in the quiz, the result copy with its
 * links already checked against lib/article-index.json, one <Photo> per candidate (credited, from
 * the photo ledger) and the safety box shown with every result.
 *
 * Everything stays in the page flow: /tools carries Mediavine ads, and nothing here is fixed to
 * the bottom of the screen (CLAUDE.md, "Fixed bars vs Mediavine's bottom ad").
 *
 * GA4 (existing gtag): quiz_step with quiz = the quiz's id, step = 1..n and choice = the answer
 * picked; then step = "result", choice = the best match (or "unsure") and shown = every candidate
 * on screen. Result links carry data-recirc="quiz_result", so components/RecircClickTracker.tsx
 * counts them as recirculation_click like the other quizzes'.
 */

export type IdLinkView = { path: string; title: string; hook: string }
export type IdResultView = { id: string; name: string; short: string; summary: string; confirm: string[]; caution?: string; links: IdLinkView[] }

/** The words around the result that differ from one tool to the next. */
export type IdQuizCopy = {
  /** Under a named result, before "This is not medical advice." when `medical` is set. */
  namedIntro: string
  /** Heading of the links on a "not clear" result, e.g. "Compare the common ticks". */
  compareHeading: string
  /** Adds "This is not medical advice." under the result headline. */
  medical?: boolean
}

const slugOf = (path: string) => path.split('#')[0].split('/').pop() ?? ''

const LABEL_CLASS = 'text-xs font-extrabold uppercase tracking-widest text-emerald-700'
const SUBHEAD_CLASS = 'text-sm font-extrabold uppercase tracking-wider text-brand-900'
const BUTTON_CLASS =
  'min-h-[44px] rounded-full border border-brand-200 px-5 text-sm font-bold text-brand-900 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700'

/** Links out of a result. GA4 link_kind: "identify" for a candidate's own page, "more" for the rest, or `kind` for all. */
function ReadNextLinks({ links, kind }: { links: IdLinkView[]; kind?: string }) {
  return (
    <ul className="mt-2 grid gap-2">
      {links.map((l, i) => (
        <li key={l.path}>
          <Link
            href={l.path}
            prefetch={false}
            data-recirc="quiz_result"
            data-recirc-kind={kind ?? (i === 0 ? 'identify' : 'more')}
            data-recirc-target={slugOf(l.path)}
            className="group block rounded-xl border border-gray-200 bg-white px-4 py-3 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            <span className="block text-[15px] font-bold leading-snug text-brand-900 group-hover:text-brand-700 group-hover:underline">{l.title}</span>
            <span className="mt-0.5 block text-sm leading-relaxed text-gray-600">{l.hook}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function Checklist({ items, mark = '✓' }: { items: string[]; mark?: string }) {
  return (
    <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-gray-700">
      {items.map((line) => (
        <li key={line} className="flex gap-2">
          <span aria-hidden="true" className="mt-0.5 font-extrabold text-emerald-600">{mark}</span>
          <span>{line}</span>
        </li>
      ))}
    </ul>
  )
}

export default function IdentifierQuiz({
  quiz,
  results,
  flags,
  photos,
  safety,
  copy,
}: {
  quiz: IdQuizDef
  /** One view per candidate in quiz.ids, plus "unsure". */
  results: Record<string, IdResultView>
  /** Warnings an answer can raise, by flag id. */
  flags: Record<string, { title: string; text: string }>
  /** One server-rendered <Photo> per candidate (components/Photo.tsx). A candidate without one shows none. */
  photos: Partial<Record<string, ReactNode>>
  /** The safety box, shown with every result. */
  safety: ReactNode
  copy: IdQuizCopy
}) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const heading = useRef<HTMLHeadingElement>(null)
  const started = useRef(false)
  const { questions, quizId } = quiz

  const done = step >= questions.length
  const ranking = done ? rankCandidates(quiz, answers) : null

  const track = (s: number | 'result', choice: string, shown?: string) => {
    const w = window as Window & { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag === 'function') w.gtag('event', 'quiz_step', { quiz: quizId, step: s, choice, ...(shown !== undefined && { shown }) })
  }

  // Move keyboard and screen-reader focus to the new question or the result, but not on the
  // first render (that would scroll the page to the quiz on load).
  useEffect(() => {
    if (!started.current) return
    heading.current?.focus()
  }, [step])

  useEffect(() => {
    if (!ranking) return
    const best = ranking.result === 'named' ? ranking.suspects[0].id : 'unsure'
    track('result', best, ranking.suspects.map((s) => s.id).join(','))
    // one event per finished run
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])

  const choose = (questionId: string, choiceId: string) => {
    started.current = true
    track(step + 1, choiceId)
    setAnswers((a) => ({ ...a, [questionId]: choiceId }))
    setStep((s) => s + 1)
  }
  const back = () => {
    started.current = true
    setStep((s) => Math.max(0, s - 1))
  }
  const restart = () => {
    started.current = true
    setAnswers({})
    setStep(0)
  }

  if (ranking) {
    const named = ranking.result === 'named'
    const top = ranking.suspects[0]
    // a tie at the top is shown as a tie
    const tied = named ? ranking.suspects.filter((s) => s.score === top.score) : []
    const headline = named ? `Most likely: ${tied.map((s) => results[s.id].short).join(' or ')}` : results.unsure.name
    const unsure = results.unsure
    const leads = ranking.leads.map((id) => results[id]).filter((r) => r.links.length > 0)
    return (
      <section aria-labelledby={`${quizId}-result`} className="rounded-3xl border border-brand-100 bg-white p-5 shadow-sm sm:p-8">
        <p className={LABEL_CLASS}>Your result</p>
        <h2 id={`${quizId}-result`} ref={heading} tabIndex={-1} className="mt-1 scroll-mt-32 text-3xl font-extrabold leading-tight text-brand-900 focus:outline-none">{headline}</h2>
        <p className="mt-2 text-base text-gray-700">
          {named ? copy.namedIntro : unsure.summary}
          {copy.medical && ' This is not medical advice.'}
        </p>

        {ranking.flags.map((f) => (
          <div key={f} className="mt-5 rounded-2xl border-2 border-red-300 bg-red-50 p-4 sm:p-5">
            <p className="text-base font-extrabold text-red-800">{flags[f].title}</p>
            <p className="mt-1 text-[15px] leading-relaxed text-red-900">{flags[f].text}</p>
          </div>
        ))}

        {named &&
          ranking.suspects.map((s, i) => {
            const view = results[s.id]
            const photo = photos[s.id]
            const label = i === 0 ? 'Best match' : s.score === top.score ? 'Just as likely' : 'Also possible'
            return (
              <article key={s.id} aria-labelledby={`${quizId}-suspect-${s.id}`} className="mt-6 rounded-2xl border border-gray-200 bg-gray-50/60 p-4 sm:p-6">
                <p className={LABEL_CLASS}>{label}</p>
                <h3 id={`${quizId}-suspect-${s.id}`} className="mt-1 text-2xl font-extrabold leading-tight text-brand-900">{view.name}</h3>
                <p className="mt-1 text-[15px] text-gray-700">{view.summary}</p>
                <div className={photo ? 'mt-4 grid gap-5 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]' : 'mt-4'}>
                  {photo && <div className="[&_figure]:my-0">{photo}</div>}
                  <div>
                    <h4 className={SUBHEAD_CLASS}>Why it fits your answers</h4>
                    <Checklist items={s.why} mark="•" />
                    <h4 className={`mt-5 ${SUBHEAD_CLASS}`}>How to confirm it</h4>
                    <Checklist items={view.confirm} />
                    {view.caution && <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-relaxed text-red-900">{view.caution}</p>}
                  </div>
                </div>
                <h4 className={`mt-6 ${SUBHEAD_CLASS}`}>Read next</h4>
                <ReadNextLinks links={view.links} />
              </article>
            )
          })}

        {!named && (
          <article aria-labelledby={`${quizId}-unsure-next`} className="mt-6 rounded-2xl border border-gray-200 bg-gray-50/60 p-4 sm:p-6">
            <h3 id={`${quizId}-unsure-next`} className={SUBHEAD_CLASS}>What to do next</h3>
            <Checklist items={unsure.confirm} />
            {leads.length > 0 && (
              <>
                <h4 className={`mt-6 ${SUBHEAD_CLASS}`}>Your answers lean a little toward</h4>
                <p className="mt-1 text-sm text-gray-600">Not enough to name it, but worth comparing:</p>
                <ReadNextLinks links={leads.map((r) => r.links[0])} kind="lead" />
              </>
            )}
            <h4 className={`mt-6 ${SUBHEAD_CLASS}`}>{copy.compareHeading}</h4>
            <ReadNextLinks links={unsure.links} kind="compare" />
          </article>
        )}

        <div className="mt-6">{safety}</div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={back} className={BUTTON_CLASS}>
            Change my last answer
          </button>
          <button type="button" onClick={restart} className={BUTTON_CLASS}>
            Start again
          </button>
        </div>
      </section>
    )
  }

  const q = questions[step]
  return (
    <section aria-labelledby={`${quizId}-question`} className="rounded-3xl border border-brand-100 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <p className={LABEL_CLASS}>Question {step + 1} of {questions.length}</p>
        {step > 0 && (
          <button type="button" onClick={back} className="min-h-[44px] px-2 text-sm font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">
            Back
          </button>
        )}
      </div>
      <div aria-hidden="true" className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-50">
        <div className="h-full rounded-full bg-emerald-600 transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${(step / questions.length) * 100}%` }} />
      </div>
      <h2 id={`${quizId}-question`} ref={heading} tabIndex={-1} className="mt-5 scroll-mt-32 text-2xl font-extrabold leading-tight text-brand-900 focus:outline-none">{q.title}</h2>
      {q.hint && <p className="mt-1 text-sm text-gray-600">{q.hint}</p>}
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {q.choices.map((c) => (
          <li key={c.id} className="flex">
            <button
              type="button"
              onClick={() => choose(q.id, c.id)}
              aria-pressed={answers[q.id] === c.id}
              className={`flex min-h-[56px] w-full items-center rounded-2xl border px-4 py-3 text-left text-[15px] font-semibold leading-snug text-brand-900 transition-colors hover:border-emerald-600 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 ${
                answers[q.id] === c.id ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 bg-white'
              }`}
            >
              {c.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
