import { redirect } from 'next/navigation'

// Canonical URL moved to /brampton-tick-spray — 301 handled in next.config.mjs
export default function BramptonTickSpray1Redirect() {
  redirect('/brampton-tick-spray')
}
