import { redirect } from 'next/navigation'

// Canonical URL moved to /mississauga-mosquito-control — 301 handled in next.config.mjs
export default function MosquitoControlSaugaRedirect() {
  redirect('/mississauga-mosquito-control')
}
