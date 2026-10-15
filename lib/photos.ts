// The photo ledger (data/god-build/photos.json), read by id: the file name in
// public/guides/photos without ".webp". Every photograph on the site is recorded there with
// its source page, licence, required credit and pixel size; scripts/god-build-photos.mjs
// writes it and scripts/check-photos.mjs fails the build if a page uses a photo it does not
// list.
import ledger from '@/data/god-build/photos.json'
import { LICENSE_LABEL, type GuideLicense } from '@/lib/guides'

export type LedgerPhoto = {
  file: string
  subject: string
  sourceUrl: string
  license: GuideLicense
  credit: string
  width: number
  height: number
  sourceDescription?: string
}

const PREFIX = '/guides/photos/'
const BY_ID = new Map((ledger.photos as LedgerPhoto[]).map((p) => [p.file.slice(PREFIX.length, -'.webp'.length), p]))

export function ledgerPhoto(id: string): LedgerPhoto {
  const p = BY_ID.get(id)
  if (!p) throw new Error(`Photo "${id}" is not in data/god-build/photos.json. Add it with scripts/god-build-photos.mjs first.`)
  if (!LICENSE_LABEL[p.license]) throw new Error(`Photo "${id}" has a licence this site does not use: ${p.license}`)
  return p
}

/**
 * A photo for a page's share card (og:image) and its BlogPosting `image`. Only public-domain
 * and CC0 photos qualify: a share card or a search thumbnail shows no credit line, and CC BY
 * and CC BY-SA require one wherever the photo appears.
 */
export function shareImage(id: string): { url: string; width: number; height: number; alt: string } {
  const p = ledgerPhoto(id)
  if (p.license !== 'public-domain' && p.license !== 'CC0-1.0') {
    throw new Error(`Photo "${id}" is ${p.license}, which needs a visible credit, so it cannot be a share image. Use a public-domain or CC0 photo.`)
  }
  return { url: p.file, width: p.width, height: p.height, alt: p.subject }
}
