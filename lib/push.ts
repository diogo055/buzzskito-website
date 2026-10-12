/**
 * Browser ("web push") notifications through OneSignal — the retention brief's phase 4, Oct 2026.
 *
 * OFF until the owner adds the app ID. The ID comes from OneSignal's dashboard (Settings → Keys
 * & IDs) and goes into Vercel as NEXT_PUBLIC_ONESIGNAL_APP_ID. It is a public identifier, not a
 * secret: OneSignal's own snippet prints it in the page. Until a real ID is there, nothing is
 * rendered and no OneSignal code is loaded. A placeholder such as "TODO" does not switch it on:
 * a real ID is a UUID, and anything else is treated as "not set".
 *
 * How it works when it is on (components/PushPrompt.tsx):
 *   - Articles only (it is mounted by components/ReadNext.tsx, which only articles render).
 *     Never on service, city, pricing or quote pages, the product hubs or the local posts.
 *   - Our own small prompt slides out from under the header after 30 seconds or at half-way
 *     down the article, whichever comes first. The browser's own permission box appears only
 *     after the reader presses "Yes" on ours. Never on page load.
 *   - OneSignal's script is not on the page at all until a reader says yes (or has said yes on
 *     an earlier visit), so it costs the other readers nothing.
 *   - No email address is asked for anywhere.
 *   - No welcome notification and nothing automatic: a notification goes out only when the
 *     owner sends one from OneSignal's dashboard.
 *
 * Mediavine's Grow was checked first (Oct 12, 2026): it offers favourites, sharing, search,
 * recommended content and email sign-up, but no browser notifications, so this is the gap.
 */
const raw = (process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID ?? '').trim()

export const ONESIGNAL_APP_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(raw) ? raw : ''
export const PUSH_ENABLED = ONESIGNAL_APP_ID !== ''

/** How long before a reader who said no (or ignored the prompt) is asked again. */
export const PUSH_ASK_AGAIN_DAYS = { declined: 60, ignored: 14 } as const
