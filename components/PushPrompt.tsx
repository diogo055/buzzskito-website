'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { PUSH_ASK_AGAIN_DAYS } from '@/lib/push'

/**
 * The "get notified" prompt for browser notifications. See lib/push.ts for the rules it follows.
 *
 * Where it sits, and why there: a slim strip that slides out from under the sticky header.
 *   - Every bottom corner is spoken for: our own bars live on the bottom edge, and so do
 *     Mediavine's sticky ad and its floating video player. Nothing of ours may sit over, under
 *     or in front of a Mediavine unit.
 *   - It never covers an ad. Before it shows, and on every scroll while it is showing, it checks
 *     whether an ad slot is underneath it; if one is, it slides away and comes back when the ad
 *     has scrolled past.
 *   - It is fixed-position and starts off screen, so it cannot shift the page (no layout shift).
 *
 * The browser's permission box is asked for only inside the click on "Yes, notify me". OneSignal's
 * script is loaded only after the reader has allowed notifications, never before.
 *
 * GA4 (existing gtag, no new vendor):
 *   push_prompt_view                      the prompt was shown
 *   push_subscribe  outcome=accepted      the reader allowed notifications
 *   push_subscribe  outcome=dismissed     step=prompt (our "No thanks" / close) or step=browser
 *                                         (said yes to us, then blocked or closed the browser box)
 *   push_subscribe  outcome=error         OneSignal could not be loaded (for example an ad blocker)
 */

const ASKED_KEY = 'bz-push-asked'
const SDK_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js'
// Mediavine's ad slots: in-content boxes, the bottom sticky ad and the video player.
const AD_SLOTS = '.mv-ad-box, .adunitwrapper, .adunit, #fixed_container_bottom, .mediavine-video__target-div, [data-mv-slot]'
const SHOW_AFTER_MS = 30_000
const SHOW_AT_SCROLL = 0.5
const GIVE_UP_AFTER_MS = 25_000

type OneSignalSdk = {
  init: (options: Record<string, unknown>) => Promise<void>
  User: { PushSubscription: { optIn: () => Promise<void> } }
}
type PushWindow = Window & {
  gtag?: (...args: unknown[]) => void
  OneSignalDeferred?: Array<(sdk: OneSignalSdk) => void | Promise<void>>
}

const track = (event: string, params: Record<string, unknown> = {}) => {
  const w = window as PushWindow
  if (typeof w.gtag === 'function') w.gtag('event', event, { page_path: window.location.pathname, ...params })
}

const supported = () => 'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window

let sdk: Promise<OneSignalSdk> | null = null
/** Loads OneSignal once and starts it. Nothing here shows a prompt of any kind. */
function loadOneSignal(appId: string): Promise<OneSignalSdk> {
  if (sdk) return sdk
  sdk = new Promise<OneSignalSdk>((resolve, reject) => {
    const w = window as PushWindow
    w.OneSignalDeferred = w.OneSignalDeferred || []
    w.OneSignalDeferred.push(async (OneSignal) => {
      try {
        await OneSignal.init({
          appId,
          autoResubscribe: true,
          notifyButton: { enable: false },
          welcomeNotification: { disable: true },
          promptOptions: { slidedown: { prompts: [{ type: 'push', autoPrompt: false }] } },
        })
        resolve(OneSignal)
      } catch (e) {
        reject(e)
      }
    })
    const s = document.createElement('script')
    s.src = SDK_SRC
    s.defer = true
    s.onerror = () => reject(new Error('OneSignal script blocked'))
    document.head.appendChild(s)
  })
  sdk.catch(() => {
    sdk = null
  })
  return sdk
}

const askedRecently = () => {
  try {
    const saved = JSON.parse(window.localStorage.getItem(ASKED_KEY) || 'null') as { t: number; r: keyof typeof PUSH_ASK_AGAIN_DAYS } | null
    if (!saved) return false
    return Date.now() - saved.t < (PUSH_ASK_AGAIN_DAYS[saved.r] ?? PUSH_ASK_AGAIN_DAYS.declined) * 86_400_000
  } catch {
    return false
  }
}
const remember = (r: keyof typeof PUSH_ASK_AGAIN_DAYS) => {
  try {
    window.localStorage.setItem(ASKED_KEY, JSON.stringify({ t: Date.now(), r }))
  } catch {
    // storage blocked: the reader may be asked again on a later visit
  }
}

export default function PushPrompt({ appId }: { appId: string }) {
  // idle: not shown yet · open: on screen · parked: due, but an ad or a dialog is in the way
  // thanks: brief confirmation · done: finished for this page view
  const [stage, setStage] = useState<'idle' | 'open' | 'parked' | 'thanks' | 'done'>('idle')
  const [top, setTop] = useState(0)
  const [busy, setBusy] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  const viewed = useRef(false)
  const stageNow = useRef(stage)
  stageNow.current = stage

  /** True when the strip would sit on an ad slot or under one of our own dialogs. */
  const blocked = useCallback(() => {
    const header = document.querySelector('header')
    const from = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0
    const to = from + (box.current?.offsetHeight ?? 120)
    setTop(from)
    if (document.querySelector('[data-site-dialog]')) return true
    for (const ad of Array.from(document.querySelectorAll<HTMLElement>(AD_SLOTS))) {
      const r = ad.getBoundingClientRect()
      if (r.width > 0 && r.height > 0 && r.bottom > from && r.top < to) return true
    }
    return false
  }, [])

  // Decide whether to ask at all, then wait for 30 seconds or half-way down the article.
  useEffect(() => {
    if (!supported()) return
    if (Notification.permission === 'granted') {
      // Already a subscriber: start OneSignal quietly once the page is idle so the subscription
      // stays current. No prompt.
      const start = () => loadOneSignal(appId).catch(() => {})
      const idle = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback
      const id = idle ? idle(start, { timeout: 8000 }) : window.setTimeout(start, 4000)
      return () => {
        if (!idle) window.clearTimeout(id)
      }
    }
    if (Notification.permission !== 'default' || askedRecently()) return

    let due = false
    let frame = 0
    const tryShow = () => {
      frame = 0
      if (!due) {
        const room = document.documentElement.scrollHeight - window.innerHeight
        if (room > 0 && window.scrollY / room >= SHOW_AT_SCROLL) due = true
      }
      if (!due) return
      const s = stageNow.current
      if (s === 'idle') {
        // Put it in the page off screen first, so the next frame can slide it in.
        setStage('parked')
        frame = window.requestAnimationFrame(tryShow)
        return
      }
      if (s !== 'parked' && s !== 'open') return
      const next = blocked() ? 'parked' : 'open'
      if (next !== s) setStage(next)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(tryShow)
    }
    const timer = window.setTimeout(() => {
      due = true
      if (!document.hidden) tryShow()
    }, SHOW_AFTER_MS)
    const onVisible = () => {
      if (!document.hidden) onScroll()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    document.addEventListener('visibilitychange', onVisible)
    // A reader who is already past half-way when this starts (a restored scroll position, or a
    // fast scroll before the page finished loading) would otherwise wait for the next scroll.
    onScroll()
    return () => {
      window.clearTimeout(timer)
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [appId, blocked])

  // Count the first showing, and stop asking if the reader simply reads on.
  useEffect(() => {
    if (stage !== 'open') return
    if (!viewed.current) {
      viewed.current = true
      track('push_prompt_view')
    }
    const t = window.setTimeout(() => {
      if (busy) return
      remember('ignored')
      setStage('done')
    }, GIVE_UP_AFTER_MS)
    return () => window.clearTimeout(t)
  }, [stage, busy])

  useEffect(() => {
    if (stage !== 'thanks') return
    const t = window.setTimeout(() => setStage('done'), 3500)
    return () => window.clearTimeout(t)
  }, [stage])

  const decline = () => {
    remember('declined')
    track('push_subscribe', { outcome: 'dismissed', step: 'prompt' })
    setStage('done')
  }

  const accept = async () => {
    setBusy(true)
    // The browser's box must be asked for directly inside the click, before anything is awaited.
    let permission: NotificationPermission = 'default'
    try {
      permission = await Notification.requestPermission()
    } catch {
      permission = Notification.permission
    }
    if (permission !== 'granted') {
      remember('declined')
      track('push_subscribe', { outcome: 'dismissed', step: 'browser', permission })
      setStage('done')
      return
    }
    try {
      const OneSignal = await loadOneSignal(appId)
      await OneSignal.User.PushSubscription.optIn()
      track('push_subscribe', { outcome: 'accepted' })
      setStage('thanks')
    } catch {
      track('push_subscribe', { outcome: 'error' })
      setStage('done')
    } finally {
      setBusy(false)
    }
  }

  const visible = stage === 'open' || stage === 'thanks'
  return (
    // The empty marker is in the server HTML so the build check can see which pages carry the
    // prompt. The strip itself is only created once it is due, and it is attached to <body>, not
    // here: this marker sits inside the article, where an ancestor could capture a fixed element.
    <div data-push-prompt>
      {stage !== 'idle' && stage !== 'done' && createPortal(
        <div
          ref={box}
          role="region"
          aria-label="Browser notifications"
          aria-hidden={!visible}
          style={{ top }}
          className={`fixed inset-x-0 z-40 border-b border-white/10 bg-ink-950 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-[transform,opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
            visible ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-full opacity-0'
          }`}
        >
          {stage === 'thanks' ? (
            <p role="status" className="mx-auto max-w-3xl px-4 py-4 text-sm font-bold">
              Done. We will let you know when a new guide is published.
            </p>
          ) : (
            <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold leading-snug">Notify you when we publish a new guide?</p>
                <p className="mt-0.5 text-xs leading-snug text-white/70">An occasional browser notification. No email needed. Turn it off any time.</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={accept}
                  disabled={busy || !visible}
                  className="min-h-[44px] rounded-full bg-gradient-to-b from-amber-500 to-amber-600 px-5 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-70"
                >
                  Yes, notify me
                </button>
                <button
                  type="button"
                  onClick={decline}
                  disabled={busy || !visible}
                  className="min-h-[44px] rounded-full px-4 text-sm font-semibold text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  No thanks
                </button>
              </div>
            </div>
          )}
        </div>,
        document.body,
      )}
    </div>
  )
}
