// Run something only when the visitor is not in the middle of a scroll (Nov 13, 2026).
// Starting a video decoder or a map mid-fling is what makes a phone stutter; the same work a quarter of a
// second after the finger stops is invisible. The scroll listener is passive and installed once, on import.

let lastScroll = 0
let installed = false

function install() {
  if (installed || typeof window === 'undefined') return
  installed = true
  window.addEventListener(
    'scroll',
    () => {
      lastScroll = performance.now()
    },
    { passive: true }
  )
}
install()

/** Calls `cb` once no scroll event has fired for `quietMs`. Returns a cancel function. */
export function whenScrollIdle(cb: () => void, quietMs = 220): () => void {
  install()
  let timer = 0
  let done = false
  const check = () => {
    if (done) return
    const since = performance.now() - lastScroll
    if (lastScroll === 0 || since >= quietMs) {
      done = true
      cb()
    } else {
      timer = window.setTimeout(check, quietMs - since + 10)
    }
  }
  timer = window.setTimeout(check, 0)
  return () => {
    done = true
    window.clearTimeout(timer)
  }
}
