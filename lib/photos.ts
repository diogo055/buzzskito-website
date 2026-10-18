// The photo ledger (data/god-build/photos.json), read by id: the file name in
// public/guides/photos without ".webp". Every photograph on the site is recorded there with
// its source page, licence, required credit and pixel size; scripts/god-build-photos.mjs
// writes it and scripts/check-photos.mjs fails the build if a page uses a photo it does not
// list.
import ledger from '@/data/god-build/photos.json'
import { LICENSE_LABEL, type GuideLicense } from '@/lib/guides'
import { SITE_URL } from '@/lib/constants'

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

// ── Image metadata (schema.org ImageObject) ──────────────────────────────────────────────
// Google's image-metadata docs ask every photo's ImageObject for contentUrl plus creditText,
// creator, copyrightNotice, license and acquireLicensePage. On Oct 18, 2026 Search Console's
// "Image metadata" report listed all five as missing (81 items). Every value below is read from
// the ledger record; nothing is guessed, and a field the source does not give is left out.

/**
 * The licence URL for the schema. Public domain has no deed, so the visible credit links none;
 * the schema names Creative Commons' Public Domain Mark 1.0, the standard statement that a work
 * is free of known copyright (what the CDC, USDA and other US-government sources say of theirs).
 */
export const PUBLIC_DOMAIN_MARK = 'https://creativecommons.org/publicdomain/mark/1.0/'
export const licenseSchemaUrl = (license: GuideLicense): string => LICENSE_LABEL[license].url ?? PUBLIC_DOMAIN_MARK

export type PhotoCreator = { '@type': 'Person' | 'Organization'; name: string }

// Credited names that are agencies, labs or projects, not people.
const ORGANIZATION = /^(?:CDC|NIAID|USDAgov|USGS|U\.S\. |USFWS|NPS|CSIRO|Insects Unlocked|World Health Organization|Joshua Tree National Park|R6, State & Private Forestry)\b/
// Credits that name nobody.
const NO_NAME = /^(?:unknown author|Employee of US Government)$/i

/**
 * Who made the photo, read from the credit line in the three shapes the ledger uses:
 *   iNaturalist        "(c) Name, some rights reserved (CC BY), via iNaturalist"
 *   CDC PHIL           "Content provider; photo: Photographer (CDC Public Health Image Library, phil.cdc.gov)"
 *   Wikimedia Commons  "Author, CC BY 2.0, via Wikimedia Commons"
 * The name is always text from the credit itself (Commons' " from <place>", " at English
 * Wikipedia", "User:" and upload notes trimmed). No creator when the credit names nobody:
 * iNaturalist's CC0 line ("no rights reserved"), "unknown author", or a PHIL record with a
 * content provider but no photographer (a provider is not necessarily who took the photo).
 */
export function photoCreator(credit: string): PhotoCreator | undefined {
  let name: string | undefined
  let m: RegExpExecArray | null
  if ((m = /^\(c\) (.+?), some rights reserved \(CC BY(?:-SA)?\), via iNaturalist$/.exec(credit))) name = m[1]
  else if ((m = /^(.+) \(CDC Public Health Image Library, phil\.cdc\.gov\)$/.exec(credit))) name = /(?:^|; )photo: (.+)$/.exec(m[1])?.[1]
  else if ((m = /^(.+), (?:CC BY(?:-SA)? [\d.]+|CC0|Public domain), via Wikimedia Commons$/.exec(credit))) {
    name = m[1]
      .replace(/^User:/, '')
      .replace(/\. Uploaded by .*$/, '')
      .replace(/, produced by .*$/, '')
      .replace(/ at English Wikipedia$/, '')
      .replace(/ from [A-Z].*$/, '')
      .replace(/^division, CSIRO$/, 'CSIRO')
      .trim()
  }
  if (!name || NO_NAME.test(name) || !credit.includes(name)) return undefined
  return { '@type': ORGANIZATION.test(name) ? 'Organization' : 'Person', name }
}

/**
 * The copyright notice, only where the source gives one: iNaturalist's "(c) Name" line on a
 * CC BY / CC BY-SA photo. Public-domain and CC0 photos have no copyright to give notice of.
 */
export function photoCopyrightNotice(credit: string): string | undefined {
  const m = /^\(c\) (.+?), some rights reserved \(CC BY(?:-SA)?\), via iNaturalist$/.exec(credit)
  return m ? `© ${m[1]}` : undefined
}

/** The rights fields of a photo's ImageObject: the same credit, licence and source page the caption shows. */
export function photoRights(p: Pick<LedgerPhoto, 'credit' | 'license' | 'sourceUrl'>): Record<string, unknown> {
  const creator = photoCreator(p.credit)
  const copyrightNotice = photoCopyrightNotice(p.credit)
  return {
    creditText: p.credit,
    ...(creator && { creator }),
    ...(copyrightNotice && { copyrightNotice }),
    license: licenseSchemaUrl(p.license),
    acquireLicensePage: p.sourceUrl,
  }
}

/**
 * A photo's whole ImageObject, for markup that shows a ledger photo without <Figure> (a guide's
 * `figure` block, the look-alike cards). <Photo> gets the same fields through <Figure>.
 */
export function photoImageObject(
  p: Pick<LedgerPhoto, 'file' | 'width' | 'height' | 'credit' | 'license' | 'sourceUrl'>,
  text: { alt: string; caption?: string },
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE_URL}${p.file}`,
    url: `${SITE_URL}${p.file}`,
    ...(text.caption && { caption: text.caption }),
    description: text.alt,
    width: p.width,
    height: p.height,
    ...photoRights(p),
  }
}
