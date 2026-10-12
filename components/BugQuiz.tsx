'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { QUESTIONS, QUIZ_ID, scoreAnswers, type ResultId } from '@/lib/bug-quiz'

/**
 * The interactive part of /tools/what-bug-is-this. Questions and scoring live in
 * lib/bug-quiz.ts; the result links are looked up on the server (the page) and passed in, so no
 * article data beyond the eight results is shipped to the browser.
 *
 * GA4 (existing gtag): quiz_step with step = 1..5 and choice = the answer picked, then one more
 * with step = "result" and choice = the pest named. Result links carry data-recirc="quiz_result",
 * so components/RecircClickTracker.tsx counts them as recirculation_click like every other
 * "keep reading" link.
 */

export type QuizLink = { kind: 'identify' | 'treat'; path: string; title: string; hook: string; image: string | null }
export type QuizResultView = { id: ResultId; name: string; verdict: string; confirm: string[]; links: QuizLink[] }

const track = (step: number | 'result', choice: string) => {
  const w = window as Window & { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === 'function') w.gtag('event', 'quiz_step', { quiz: QUIZ_ID, step, choice })
}

export default function BugQuiz({ results }: { results: Record<ResultId, QuizResultView> }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const heading = useRef<HTMLHeadingElement>(null)
  const started = useRef(false)

  const done = step >= QUESTIONS.length
  const outcome = done ? scoreAnswers(answers) : null

  // Move keyboard and screen-reader focus to the new question or the result, but not on the
  // first render (that would scroll the page to the quiz on load).
  useEffect(() => {
    if (!started.current) return
    heading.current?.focus()
  }, [step])

  useEffect(() => {
    if (outcome) track('result', outcome.winner)
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

  if (outcome) {
    const result = results[outcome.winner]
    const also = outcome.runnerUp ? results[outcome.runnerUp] : null
    const alsoLink = also?.links.find((l) => l.kind === 'identify')
    return (
      <section aria-labelledby="quiz-result" className="rounded-3xl border border-brand-100 bg-white p-5 shadow-sm sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">{outcome.winner === 'unsure' ? 'Result' : 'Most likely'}</p>
        <h2 id="quiz-result" ref={heading} tabIndex={-1} className="mt-1 scroll-mt-32 text-3xl font-extrabold text-brand-900 focus:outline-none">{result.name}</h2>
        <p className="mt-2 text-base text-gray-700">{result.verdict} This is a starting point from five answers, not a confirmed identification.</p>

        <h3 className="mt-6 text-sm font-extrabold uppercase tracking-wider text-brand-900">{outcome.winner === 'unsure' ? 'What to do next' : 'How to confirm it'}</h3>
        <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-gray-700">
          {result.confirm.map((line) => (
            <li key={line} className="flex gap-2"><span aria-hidden="true" className="mt-0.5 font-extrabold text-emerald-600">✓</span><span>{line}</span></li>
          ))}
        </ul>

        {also && alsoLink && (
          <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Your answers also fit <strong>{also.name.toLowerCase()}</strong>. Compare with{' '}
            <Link href={alsoLink.path} prefetch={false} data-recirc="quiz_result" data-recirc-kind="also" data-recirc-target={alsoLink.path.split('/').pop()} className="font-semibold underline">{alsoLink.title}</Link>.
          </p>
        )}

        <h3 className="mt-7 text-sm font-extrabold uppercase tracking-wider text-brand-900">Read next</h3>
        <ul className="mt-3 grid gap-4 sm:grid-cols-3">
          {result.links.map((l) => (
            <li key={l.path} className="flex">
              <Link
                href={l.path}
                prefetch={false}
                data-recirc="quiz_result"
                data-recirc-kind={l.kind}
                data-recirc-target={l.path.split('/').pop()}
                className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {l.image && !l.image.endsWith('.svg') && (
                  <Image src={l.image} alt="" width={640} height={360} sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[16/9] w-full object-cover" />
                )}
                <span className="flex flex-1 flex-col gap-1.5 p-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">{outcome.winner === 'unsure' ? 'Look-alikes' : l.kind === 'treat' ? 'What to do' : 'Identify it'}</span>
                  <span className="text-base font-bold leading-snug text-brand-900 group-hover:text-brand-700">{l.title}</span>
                  <span className="text-sm leading-relaxed text-gray-600">{l.hook}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button type="button" onClick={restart} className="mt-6 min-h-[44px] rounded-full border border-brand-200 px-5 text-sm font-bold text-brand-900 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700">
          Start again
        </button>
      </section>
    )
  }

  const q = QUESTIONS[step]
  return (
    <section aria-labelledby="quiz-question" className="rounded-3xl border border-brand-100 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">Question {step + 1} of {QUESTIONS.length}</p>
        {step > 0 && (
          <button type="button" onClick={back} className="min-h-[44px] px-2 text-sm font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">
            Back
          </button>
        )}
      </div>
      <div aria-hidden="true" className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-50">
        <div className="h-full rounded-full bg-emerald-600 transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
      </div>
      <h2 id="quiz-question" ref={heading} tabIndex={-1} className="mt-5 scroll-mt-32 text-2xl font-extrabold leading-tight text-brand-900 focus:outline-none">{q.title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {q.choices.map((c) => (
          <li key={c.id} className="flex">
            <button
              type="button"
              onClick={() => choose(q.id, c.id)}
              aria-pressed={answers[q.id] === c.id}
              className={`flex min-h-[56px] w-full flex-col overflow-hidden rounded-2xl border text-left text-[15px] font-semibold leading-snug text-brand-900 transition-colors hover:border-emerald-600 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 ${
                answers[q.id] === c.id ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 bg-white'
              }`}
            >
              {c.photo && (
                <span className="block w-full">
                  <Image src={c.photo.src} alt={c.photo.alt} width={c.photo.width} height={c.photo.height} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                  {c.photo.credit && <span className="block px-4 pt-1 text-[11px] font-normal text-gray-500">Photo: {c.photo.credit}</span>}
                </span>
              )}
              <span className="flex flex-1 items-center px-4 py-3">{c.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
