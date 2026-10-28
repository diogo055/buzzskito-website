/**
 * Photo bug identifier on /tools/what-bug-is-this (owner, Oct 28, 2026: "I love the tool...
 * make sure that money-wise, it's not too expensive").
 *
 * OFF until the owner adds ANTHROPIC_API_KEY in Vercel (Settings → Environment Variables) and the
 * site is redeployed. The key is a secret: only the server reads it (app/api/identify-bug and,
 * at build time, the page and the privacy policy, to decide whether to show the uploader and the
 * paragraph about it). A placeholder does not switch it on: a real key starts with "sk-ant-".
 *
 * Why it exists: Google Trends (US, Oct 2026) puts "what bug is this" at about 34,500 searches a
 * month, "bug identifier" 14,300 and "insect identification" 11,700, against about 1,100 for
 * "bug identifier app". People want the answer on a web page, from a photo.
 *
 * Cost (Claude pricing, checked Oct 28, 2026): Claude Haiku 5.5 is US$0.10 per million input
 * tokens and $0.50 per million output tokens. One check is the photo (resized in the browser to
 * PHOTO_ID_MAX_EDGE, about 2,300 tokens), the instructions and the list of our pages (about
 * 4,500) and an answer of about 400, so about US$0.0009: under a dollar per 1,000 photos. The
 * hard ceiling is the prepaid credit in the owner's Claude Console with auto-reload off. When it
 * runs out the API refuses, the tool says so politely and points to the questions; nothing is
 * ever charged beyond it.
 *
 * Limits: PHOTO_ID_DAILY_LIMIT photos per visitor per day (counted in the browser and, best
 * effort, per address on the server), one at a time, requests from this site only, photos over
 * PHOTO_ID_MAX_BYTES refused. Nothing is stored: the photo goes to Anthropic for the check and is
 * dropped.
 *
 * GA4: photo_id with outcome = result | error | limit, subject (what the photo showed), top (the
 * first match, lower case) and confidence. Result links carry data-recirc="photo_id_result", so
 * they count as recirculation_click like the quiz's links.
 */
export const PHOTO_ID_ENABLED = /^sk-ant-/.test((process.env.ANTHROPIC_API_KEY ?? '').trim())

export const PHOTO_ID_MODEL = 'claude-haiku-5-5'
export const PHOTO_ID_DAILY_LIMIT = 10
/** Long edge in pixels after the browser shrinks the photo: Claude reads up to 1,568 px at full detail. */
export const PHOTO_ID_MAX_EDGE = 1568
/** Base64 characters the API route accepts (about 1.1 MB of JPEG). */
export const PHOTO_ID_MAX_BYTES = 1_500_000

/** What the photo showed. "sign" = droppings, a nest, eggs, shed skins or damage. */
export type PhotoSubject = 'creature' | 'sign' | 'bite_or_skin' | 'not_a_pest' | 'unclear'
export type PhotoConfidence = 'high' | 'medium' | 'low'

export type PhotoCandidate = { name: string; scientific: string; confidence: PhotoConfidence; why: string }
export type PhotoLink = { path: string; title: string; hook: string; image: string | null }

export type PhotoIdResult = {
  subject: PhotoSubject
  candidates: PhotoCandidate[]
  confirm: string[]
  safety: string
  photoTip: string
  links: PhotoLink[]
}

/** Error codes the route returns; the uploader turns each into a plain sentence. */
export type PhotoIdError = 'off' | 'origin' | 'bad_image' | 'too_big' | 'limit' | 'busy' | 'resting' | 'failed'
