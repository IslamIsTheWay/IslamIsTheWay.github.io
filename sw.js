/* ============================================================
   SERVICE WORKER — offline support, and nothing else
   ============================================================
   READ THIS BEFORE CHANGING ANYTHING IN THIS FILE.

   The single worst thing that has ever happened to this project is the owner
   reloading the site and seeing no change. It cost hours before
   bump-version.sh existed, and it is written at the top of CLAUDE.md as the
   rule that matters most.

   A service worker is the one thing that can bring that problem back
   PERMANENTLY — worse than before, because a cache-first worker will keep
   serving an old page even after the version stamp changes, and the owner
   cannot fix it by reloading. bump-version.sh would stop working.

   So this worker is deliberately the least aggressive kind that still gives
   offline support:

       NETWORK FIRST, ALWAYS. The cache is a fallback for when the
       network fails, and it is never preferred over the network.

   When online the site behaves EXACTLY as it did before this file existed —
   every request goes to the network and the freshest copy wins. When offline,
   the last successfully-fetched copy of a page is served instead of the
   browser's error page. That is the whole feature.

   Rules for anyone editing this:
     · Never change to cache-first for HTML. Not for speed, not for anything.
     · Bump CACHE_VERSION on every deploy that changes this file.
     · Cross-origin requests are not touched at all — the Quran API, the
       per-ayah audio (hundreds of MB) and the hadith API go straight to the
       network. Caching audio here would fill the user's storage.
   ============================================================ */

const CACHE_VERSION = "iitw-v1";

/* Pages worth having available offline after the first visit. Deliberately
   short: the big data files (tadabbur.js is ~520KB, data.js ~325KB) are
   cached on demand by the fetch handler when they are actually requested,
   rather than all downloaded up front on a phone connection. */
const PRECACHE = [
  "./",
  "./index.html",
  "./quran.html",
  "./offline.html",
  "./css/style.css",
  "./img/icon-192.png",
  "./manifest.webmanifest"
];

self.addEventListener("install", event => {
  // Take over as soon as possible so an update is never one reload behind.
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache =>
      // addAll rejects the whole batch if any single file 404s, which would
      // leave the worker uninstalled. Each file is added on its own instead.
      Promise.all(PRECACHE.map(url =>
        cache.add(url).catch(() => {/* a missing file must not break install */})
      ))
    )
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names.filter(n => n !== CACHE_VERSION).map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;

  // Only GET, and only this site. Everything else is left completely alone.
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then(res => {
        /* Store a copy for offline use. Opaque and error responses are not
           cached — caching a 404 would serve that 404 offline forever. */
        if (res && res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        /* The network failed — this is the only path that reads the cache. */
        caches.match(req).then(hit => {
          if (hit) return hit;
          // A page request with nothing cached gets the offline notice.
          if (req.mode === "navigate") return caches.match("./offline.html");
          return new Response("", { status: 504, statusText: "Offline" });
        })
      )
  );
});

/* The page asks for the worker to step aside and update immediately when the
   reader taps "reload to update". */
self.addEventListener("message", event => {
  if (event.data === "iitw-skip-waiting") self.skipWaiting();
});
