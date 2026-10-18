import type { ReactNode } from 'react'
import Figure from './Figure'
import { ledgerPhoto, photoRights } from '@/lib/photos'
import { LICENSE_LABEL } from '@/lib/guides'

/**
 * A real photograph on a hand-written page, placed by its ledger id:
 *
 *   <Photo id="bed-bug-adult-ruler" caption="An unfed adult bed bug is about 5 mm long." />
 *
 * The credit, the licence and its deed, the source page and the pixel size all come from
 * data/god-build/photos.json, so a page cannot show a photo without the attribution its licence
 * asks for, and an unknown id fails the build. Rendered through <Figure>, so it gets the same
 * tap-to-enlarge and ImageObject schema as the diagrams.
 *
 * Write the caption from the ledger's `sourceDescription`: never say a photo shows more than
 * its source says it does (a mislabelled identification photo is a false claim).
 * Guides (content/guides/*.json) use a `figure` block instead.
 */
export default function Photo({
  id, caption, captionNode, alt, priority = false,
}: {
  id: string
  /** Plain-text caption: shown under the photo and used as the schema caption. */
  caption: string
  /** Optional rich version of the caption (links, emphasis), shown instead of `caption`. */
  captionNode?: ReactNode
  /** Defaults to the ledger's subject line. */
  alt?: string
  /** Only for a photo in the first screen of the page. */
  priority?: boolean
}) {
  const p = ledgerPhoto(id)
  const lic = LICENSE_LABEL[p.license]
  return (
    <Figure
      src={p.file}
      alt={alt ?? p.subject}
      caption={caption}
      captionNode={captionNode}
      width={p.width}
      height={p.height}
      credit={p.credit}
      creditHref={p.sourceUrl}
      license={{ name: lic.name, href: lic.url }}
      rights={photoRights(p)}
      unoptimized
      priority={priority}
    />
  )
}
