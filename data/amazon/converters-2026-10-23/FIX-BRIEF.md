# Amazon box fixes: brief for the agents (owner approved, Oct 25, 2026: "Yes fix Amazon boxes")

Source of truth: `OWNER-DECISIONS.md` in this folder. It lists every verified problem with its evidence. Fix
only what is listed there.

## What the owner approved

**1. Wording fixes.** Make each box's product name, specs and claims match the product's label and maker page.
Typical fixes:
- "foam" becomes "jet spray";
- "9V" becomes "4 AA";
- "X-Large ~32-inch" becomes the real size;
- remove "refill";
- remove "mattress-safe" and every other "safe";
- remove "registered" and "Legal" where they are false;
- remove label-contradicting uses ("frames", "residual", "ground-nest", "water-based").

**2. Swaps.** Where a box sells a product that is not registered in Canada, or does not exist, point it at
the registered alternative that THE SAME PAGE (or its sibling page) already recommends:
- Reuse that product's existing `search=` term or `asin=`, so the link is already proven.
- Keep the element type, its position and its tag. The number of Amazon elements on the page stays the same.
- Never invent a new product or search term. If the page has no registered alternative, reword the box
  honestly instead (for example, "not registered as a pesticide in Canada; check the PCP number on any product
  you buy").

**3. Fit items (detector, steamer).** Keep the picks, and make the box text honest: what sticky monitors can't
do, and the capacity compared with the University of Minnesota's 4 L advice.

## Rules

- **Registration status.** Use only what the checkers verified: Health Canada's Oct 3, 2026 registry export,
  and the label files and maker pages cited in OWNER-DECISIONS.md. If you cannot confirm a status, do not claim
  it either way; tell readers to check the PCP number on the label.
- **Banned claims.** No "safe", "non-toxic" or "Health Canada approved". No prices, no "we tested".
- **Tags.** Keep every `tag` exactly as it is. The build's check:amazon fails on any tag change.
- **Edits.** Insert or replace lines only. No git, no builds. Read PDFs with WebFetch only.
- **Change log.** Append every changed affiliate line to `data/amazon/converters-2026-10-23/FIX-LOG.md`:
  - page and line;
  - before;
  - after;
  - the evidence (a URL or the decisions-file row).
- **Final message:** under 70 words. Give pages fixed, the number of lines changed, and any item you left
  unchanged, with the reason.
