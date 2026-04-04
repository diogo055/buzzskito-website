import { redirect } from 'next/navigation'

// Canonical URL moved to /toronto-tick-spray — 301 handled in next.config.mjs
export default function TorontoTickSpray1Redirect() {
  redirect('/toronto-tick-spray')
}
