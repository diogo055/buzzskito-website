'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PHOTO_ID_DAILY_LIMIT, PHOTO_ID_MAX_EDGE, type PhotoConfidence, type PhotoIdError, type PhotoIdResult } from '@/lib/photo-id'

/**
 * The photo half of /tools/what-bug-is-this (lib/photo-id.ts explains the switch, the cost and
 * the limits; app/api/identify-bug does the check). The page renders this only while the switch
 * is on. The photo is shrunk in the browser before it is sent, so a 12 MB phone picture travels
 * as a few hundred kilobytes.
 */

type RedFlags = { emergency: { title: string; items: readonly string[] }; doctor: { title: string; items: readonly string[] } }

const STORE = 'bz_photo_id'
const today = () => new Date().toISOString().slice(0, 10)

function usedToday(): number {
  try {
    const v = JSON.parse(localStorage.getItem(STORE) ?? '{}') as { day?: string; count?: number }
    return v.day === today() ? Number(v.count) || 0 : 0
  } catch {
    return 0
  }
}

function countOne() {
  try {
    localStorage.setItem(STORE, JSON.stringify({ day: today(), count: usedToday() + 1 }))
  } catch {
    // private window or blocked storage: the server still counts
  }
}

const track = (params: Record<string, string>) => {
  const w = window as Window & { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === 'function') w.gtag('event', 'photo_id', params)
}

/** Draw the photo onto a canvas no larger than PHOTO_ID_MAX_EDGE and return it as base64 JPEG. */
async function shrink(file: File): Promise<string> {
  const url = URL.createObjectURL(file)
  try {
    const img = document.createElement('img')
    img.src = url
    await img.decode()
    const scale = Math.min(1, PHOTO_ID_MAX_EDGE / Math.max(img.naturalWidth, img.naturalHeight))
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale))
    canvas.height = Math.max(1, Math.round(img.naturalHeight * scale))
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('canvas')
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    return canvas.toDataURL('image/jpeg', 0.85).split(',')[1] ?? ''
  } finally {
    URL.revokeObjectURL(url)
  }
}

const MESSAGES: Record<PhotoIdError | 'unreadable', string> = {
  off: 'The photo check is resting right now. The five questions below work just as well.',
  resting: 'The photo check is resting right now. The five questions below work just as well.',
  busy: 'The photo check is busy. Try again in a minute, or use the five questions below.',
  limit: `That is today’s ${PHOTO_ID_DAILY_LIMIT} photo checks. Come back tomorrow, or use the five questions below.`,
  too_big: 'That photo is too large to send. Take a screenshot of it and upload the screenshot.',
  bad_image: 'We could not read that photo. Try a JPG or PNG, or take a screenshot of it and upload that.',
  unreadable: 'We could not open that photo on this device. Try a JPG or PNG, or take a screenshot of it and upload that.',
  origin: 'Something went wrong sending the photo. Reload the page and try again.',
  failed: 'Something went wrong sending the photo. Check your connection and try again.',
}

const CONFIDENCE: Record<PhotoConfidence, string> = { high: 'Most likely', medium: 'Possibly', low: 'Hard to tell from this photo' }

type State =
  | { kind: 'idle' }
  | { kind: 'checking'; preview: string }
  | { kind: 'done'; preview: string; result: PhotoIdResult }
  | { kind: 'error'; preview: string | null; message: string }

export default function PhotoBugIdentifier({ redFlags }: { redFlags: RedFlags }) {
  const [state, setState] = useState<State>({ kind: 'idle' })
  const input = useRef<HTMLInputElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const preview = state.kind === 'idle' ? null : state.preview

  // Free the previous photo's object URL when a new one replaces it.
  useEffect(() => () => {
    if (preview) URL.revokeObjectURL(preview)
  }, [preview])

  useEffect(() => {
    if (state.kind === 'done' || state.kind === 'error') heading.current?.focus()
  }, [state.kind])

  const pick = () => input.current?.click()

  const check = async (file: File) => {
    const shown = URL.createObjectURL(file)
    if (usedToday() >= PHOTO_ID_DAILY_LIMIT) {
      track({ outcome: 'limit' })
      setState({ kind: 'error', preview: shown, message: MESSAGES.limit })
      return
    }
    setState({ kind: 'checking', preview: shown })
    let image = ''
    try {
      image = await shrink(file)
    } catch {
      track({ outcome: 'error', subject: 'unreadable' })
      setState({ kind: 'error', preview: null, message: MESSAGES.unreadable })
      return
    }
    try {
      countOne()
      const res = await fetch('/api/identify-bug', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image }),
      })
      const json = (await res.json().catch(() => ({}))) as { result?: PhotoIdResult; error?: PhotoIdError }
      if (!res.ok || !json.result) {
        const code = json.error && json.error in MESSAGES ? json.error : 'failed'
        track({ outcome: code === 'limit' ? 'limit' : 'error', subject: code })
        setState({ kind: 'error', preview: shown, message: MESSAGES[code] })
        return
      }
      const top = json.result.candidates[0]
      track({ outcome: 'result', subject: json.result.subject, top: (top?.name ?? '').toLowerCase().slice(0, 60), confidence: top?.confidence ?? '' })
      setState({ kind: 'done', preview: shown, result: json.result })
    } catch {
      track({ outcome: 'error', subject: 'network' })
      setState({ kind: 'error', preview: shown, message: MESSAGES.failed })
    }
  }

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (file) void check(file)
  }

  const button = (label: string) => (
    <button
      type="button"
      onClick={pick}
      disabled={state.kind === 'checking'}
      className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-emerald-700 px-6 text-base font-extrabold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 disabled:opacity-60"
    >
      {label}
    </button>
  )

  return (
    <section aria-labelledby="photo-id-title" className="rounded-3xl border border-brand-100 bg-white p-5 shadow-sm sm:p-8">
      <input ref={input} id="photo-id-file" type="file" accept="image/*" onChange={onFile} className="sr-only" tabIndex={-1} aria-hidden="true" />

      {state.kind === 'idle' && (
        <>
          <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">Photo check</p>
          <h2 id="photo-id-title" className="mt-1 text-2xl font-extrabold leading-tight text-brand-900">Identify it from a photo</h2>
          <p className="mt-2 text-base text-gray-700">Take or upload a clear photo of the bug, its droppings or its nest. You get the most likely match in a few seconds, how to confirm it and what to read next.</p>
          <div className="mt-5">{button('Take or choose a photo')}</div>
        </>
      )}

      {state.kind === 'checking' && (
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={state.preview} alt="Your photo" className="h-28 w-28 rounded-2xl object-cover" />
          <div>
            <h2 id="photo-id-title" className="text-2xl font-extrabold text-brand-900">Checking your photo…</h2>
            <p className="mt-1 text-gray-700" role="status">This takes a few seconds.</p>
          </div>
        </div>
      )}

      {state.kind === 'error' && (
        <>
          <h2 id="photo-id-title" ref={heading} tabIndex={-1} className="text-2xl font-extrabold text-brand-900 focus:outline-none">The photo check did not work</h2>
          <p className="mt-2 text-base text-gray-700" role="status">{state.message}</p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            {button('Try another photo')}
            <a href="#questions" className="text-sm font-bold text-brand-700 underline underline-offset-2">Answer the five questions</a>
          </div>
        </>
      )}

      {state.kind === 'done' && <Result result={state.result} preview={state.preview} heading={heading} redFlags={redFlags} again={button('Check another photo')} />}

      {(state.kind === 'idle' || state.kind === 'done') && (
        <p className="mt-5 text-xs leading-relaxed text-gray-600">
          Free, up to {PHOTO_ID_DAILY_LIMIT} photos a day. An AI model (Claude, made by Anthropic) looks at your photo and compares it with what it knows about common pests; it can be wrong, so confirm the match with the guides it suggests. Your photo is sent to Anthropic for the check and BuzzSkito does not keep it.{' '}
          <Link href="/privacy-policy" className="underline hover:text-brand-700">Privacy policy</Link>.
        </p>
      )}
    </section>
  )
}

function Result({ result, preview, heading, redFlags, again }: { result: PhotoIdResult; preview: string; heading: React.RefObject<HTMLHeadingElement>; redFlags: RedFlags; again: React.ReactNode }) {
  const [top, ...others] = result.candidates
  const title =
    result.subject === 'bite_or_skin' ? 'A photo cannot identify a bite'
    : result.subject === 'not_a_pest' ? 'We could not find a bug in this photo'
    : result.subject === 'unclear' || !top ? 'This photo is hard to read'
    : top.name
  const eyebrow = top && (result.subject === 'creature' || result.subject === 'sign') ? CONFIDENCE[top.confidence] : 'Result'

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={preview} alt="Your photo" className="h-28 w-28 shrink-0 rounded-2xl object-cover" />
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">{eyebrow}</p>
          <h2 id="photo-id-title" ref={heading} tabIndex={-1} className="mt-1 scroll-mt-32 text-3xl font-extrabold text-brand-900 focus:outline-none">{title}</h2>
          {top?.scientific && <p className="mt-0.5 text-sm italic text-gray-600">{top.scientific}</p>}
          {top && <p className="mt-2 text-base text-gray-700">{top.why}</p>}
          {result.subject === 'bite_or_skin' && (
            <p className="mt-2 text-base text-gray-700">Bites from bed bugs, fleas, mosquitoes, spiders and mites can look alike, so the marks alone do not show what bit you. The bite identifier asks the questions that narrow it down.</p>
          )}
          {(result.subject === 'not_a_pest' || result.subject === 'unclear') && (
            <p className="mt-2 text-base text-gray-700">{result.photoTip || 'Try a sharp, close photo of the bug on a plain surface, in good light.'} Or answer the five questions below.</p>
          )}
        </div>
      </div>

      {others.length > 0 && (
        <>
          <h3 className="mt-6 text-sm font-extrabold uppercase tracking-wider text-brand-900">Could also be</h3>
          <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-gray-700">
            {others.map((c) => (
              <li key={c.name}><strong className="text-brand-900">{c.name}</strong> <span className="text-gray-500">({CONFIDENCE[c.confidence].toLowerCase()})</span>: {c.why}</li>
            ))}
          </ul>
        </>
      )}

      {result.confirm.length > 0 && (
        <>
          <h3 className="mt-6 text-sm font-extrabold uppercase tracking-wider text-brand-900">How to confirm it</h3>
          <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-gray-700">
            {result.confirm.map((line) => (
              <li key={line} className="flex gap-2"><span aria-hidden="true" className="mt-0.5 font-extrabold text-emerald-600">✓</span><span>{line}</span></li>
            ))}
          </ul>
        </>
      )}

      {result.safety && <p className="mt-5 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900"><strong>Stay safe:</strong> {result.safety}</p>}
      {result.photoTip && top && <p className="mt-4 text-sm text-gray-600"><strong>For a surer answer:</strong> {result.photoTip}</p>}

      {result.subject === 'bite_or_skin' && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          <p className="font-extrabold">{redFlags.emergency.title}</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">{redFlags.emergency.items.map((i) => <li key={i}>{i}</li>)}</ul>
          <p className="mt-3 font-extrabold">{redFlags.doctor.title}</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">{redFlags.doctor.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      )}

      {result.links.length > 0 && (
        <>
          <h3 className="mt-7 text-sm font-extrabold uppercase tracking-wider text-brand-900">Read next</h3>
          <ul className="mt-3 grid gap-4 sm:grid-cols-3">
            {result.links.map((l) => (
              <li key={l.path} className="flex">
                <Link
                  href={l.path}
                  prefetch={false}
                  data-recirc="photo_id_result"
                  data-recirc-kind="card"
                  data-recirc-target={l.path.split('/').pop()}
                  className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                >
                  {l.image && !l.image.endsWith('.svg') && (
                    <Image src={l.image} alt="" width={640} height={360} sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[16/9] w-full object-cover" />
                  )}
                  <span className="flex flex-1 flex-col gap-1.5 p-4">
                    <span className="text-base font-bold leading-snug text-brand-900 group-hover:text-brand-700">{l.title}</span>
                    <span className="text-sm leading-relaxed text-gray-600">{l.hook}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {again}
        <a href="#questions" className="text-sm font-bold text-brand-700 underline underline-offset-2">Or answer the five questions</a>
      </div>
    </div>
  )
}
