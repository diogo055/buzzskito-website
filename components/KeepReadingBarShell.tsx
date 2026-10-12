'use client'

import { useEffect, useState } from 'react'

const HIDDEN_KEY = 'bz-keep-reading-bar-hidden'

/**
 * CLIENT shell for the fixed "keep reading" bar: it only decides when the bar is on screen.
 * The link inside `children` is rendered on the server (components/KeepReadingBar.tsx).
 *
 * When it shows:
 *   - not at the top of the article: only after the reader has scrolled past the in-content
 *     "Next" box (the bar offers the same article, so showing both at once is noise). On a page
 *     without that box, after about 30% of the page.
 *   - not at the end: it slides away as the "Keep reading" cards come into view, so it never
 *     covers them or the footer.
 *   - never again in this tab once the reader closes it.
 *
 * It starts hidden in the server HTML and is fixed-position, so it cannot shift page content.
 * Position and the hide animation live in app/globals.css next to the other fixed bars, because
 * that is where the rules that keep our bars clear of Mediavine's bottom ad are.
 */
export default function KeepReadingBarShell({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(HIDDEN_KEY) === '1') {
        setClosed(true)
        return
      }
    } catch {
      // storage blocked: the bar simply cannot remember being closed
    }
    let frame = 0
    const measure = () => {
      frame = 0
      const y = window.scrollY
      const viewport = window.innerHeight
      const full = document.documentElement.scrollHeight
      const nextBox = document.querySelector('[data-recirc-unit="next"]')
      const endCards = document.querySelector('[data-read-next]')
      const from = nextBox ? nextBox.getBoundingClientRect().bottom + y : Math.max(900, (full - viewport) * 0.3)
      const until = endCards ? endCards.getBoundingClientRect().top + y - viewport + 40 : full - viewport - 400
      setShow(y > from && y < until)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const close = () => {
    setClosed(true)
    try {
      window.sessionStorage.setItem(HIDDEN_KEY, '1')
    } catch {
      // ignore
    }
  }

  const visible = show && !closed
  return (
    <div
      data-keep-reading-bar
      role="complementary"
      aria-label="Next article"
      aria-hidden={!visible}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950 text-white shadow-[0_-8px_24px_rgba(0,0,0,0.25)]"
    >
      <div className="mx-auto flex max-w-3xl items-stretch">
        {children}
        <button
          type="button"
          onClick={close}
          aria-label="Hide the next-article bar"
          className="grid w-11 shrink-0 place-items-center text-white/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
        >
          <span aria-hidden="true" className="text-xl leading-none">×</span>
        </button>
      </div>
    </div>
  )
}
