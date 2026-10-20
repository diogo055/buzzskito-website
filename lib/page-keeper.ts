/**
 * "Page keeper": puts the server-rendered page back if the app wipes it (Oct 20, 2026).
 *
 * Why: Google sometimes stores a broken render of our pages (a blank page after an incomplete
 * HTML load, or Next.js's "Application error" screen when a script file arrives without its
 * code). Those copies carry no title, canonical or text, so Google files them as duplicates of
 * other Next.js sites showing the same screen ("Duplicate without user-selected canonical", with a
 * casino or cinema site as the canonical). 7 of 105 freshly crawled guides were folded that way
 * on Oct 20. Our HTML is correct; the app wiping it is the problem. Next.js only added its own
 * fallback for this in 15.4. Evidence and test harness: data/god-build/research/foreign-canonical.md.
 *
 * What it does: when the server HTML is complete (DOMContentLoaded) it keeps references to the
 * page's own head and body nodes (no copying). After an error, and once a second after load, it
 * checks whether the canonical tag vanished or the text is gone; only then does it put the
 * original nodes back, once. On a healthy page it does nothing. Tested on a guide, a hub, a city
 * page and the homepage: 16 of 16 broken loads restored, 4 healthy loads unchanged.
 */
export const PAGE_KEEPER_JS = `(function () {
  try {
    var head = null, body = null, hadCanonical = false, done = false;
    document.addEventListener('DOMContentLoaded', function () {
      head = Array.prototype.slice.call(document.head.childNodes);
      body = Array.prototype.slice.call(document.body.childNodes);
      hadCanonical = !!document.querySelector('link[rel="canonical"]');
    }, true);
    function broken() {
      return (hadCanonical && !document.querySelector('link[rel="canonical"]')) ||
        document.body.innerText.trim().length < 50;
    }
    function restore() {
      if (done || !head || !broken()) return;
      done = true;
      var keepBody = new Set(body), keepHead = new Set(head);
      Array.prototype.slice.call(document.body.childNodes).forEach(function (n) { if (!keepBody.has(n)) n.remove(); });
      Array.prototype.slice.call(document.head.childNodes).forEach(function (n) {
        if (!keepHead.has(n) && n.tagName !== 'SCRIPT' && n.tagName !== 'LINK') n.remove();
      });
      document.documentElement.removeAttribute('id');
      document.documentElement.classList.remove('anim');
      head.forEach(function (n) { if (!n.isConnected) document.head.appendChild(n); });
      body.forEach(function (n) { if (!n.isConnected) document.body.appendChild(n); });
    }
    window.addEventListener('error', function () { setTimeout(restore, 0); });
    window.addEventListener('load', function () { setTimeout(restore, 1000); });
  } catch (e) {}
})();`
