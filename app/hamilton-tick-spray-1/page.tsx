import { redirect } from 'next/navigation'

// Canonical URL moved to /hamilton-tick-spray — 301 handled in next.config.mjs
export default function HamiltonTickSpray1Redirect() {
  redirect('/hamilton-tick-spray')
}
