import { redirect } from 'next/navigation'

// Canonical URL moved to /oakville-tick-spray — 301 handled in next.config.mjs
export default function OakvilleTickSpray1Redirect() {
  redirect('/oakville-tick-spray')
}
