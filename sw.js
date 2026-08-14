/* ============================================================
   SERVICE WORKER — the site working without a connection
   ============================================================
   READ THIS BEFORE CHANGING ANYTHING IN THIS FILE.

   THE RULE THAT MUST NEVER BREAK. The worst thing that has happened to this
   project is the owner reloading and seeing no change. A cache-first worker
   would make that permanent and stop bump-version.sh working. So for
   ANYTHING SERVED FROM THIS SITE the strategy is NETWORK FIRST — the network
   always wins when it is available, and the cache is only reached when the
   network fails.

   WHAT VERSION 1 GOT WRONG, reported by the owner:

     "I wanted to check if the Quran section was working without Internet.
      It's not... why should I be connected to the Internet to be able to
      open the Quran? If it's like this, I can just get the book itself."

   He was right, and there were two separate causes:

     1. ONLY SIX FILES WERE PRECACHED. Every other page worked offline only
        if it had already been visited. A reader who installed the app and
        went offline had almost nothing.

     2. THE QURAN TEXT IS NOT ON THIS SITE. It is fetched from
        api.alquran.cloud, which is CROSS-ORIGIN — and version 1 explicitly
        did not touch cross-origin requests. So even a cached quran.html
        opened to an empty reader. That is the whole of his complaint.

   WHAT THIS VERSION DOES:

     · Precaches every page, the stylesheet and every data file — about
       3.5MB, once. All the written content of this site (the hadith, the
       Sunnah, the stories, the Golden Age, the Judgement page, the guidance,
       the tadabbur) lives in those files, so all of it works with no
       connection at all.

     · Caches the Quran text CACHE-FIRST. The Quran does not change, so
       there is nothing to go stale, and a surah read once is then available
       for ever. This is the fix for the actual complaint.

     · Leaves the recitation audio alone. everyayah.com serves hundreds of
       megabytes; caching it silently would fill the reader's phone. Audio
       needs a connection, and the page says so.
   ============================================================ */

const CACHE_VERSION = "iitw-v2";
const QURAN_CACHE   = "iitw-quran-v1";   // separate: immutable, never purged with the rest

/* SPLIT IN TWO, AND THE SPLIT MATTERS.

   A service worker's install is killed if it takes too long. Trying to pull
   all 3.5MB down inside install left the cache with eleven files and no
   report — the browser had terminated the worker part way, and it reported
   itself installed anyway. A reader would have gone offline believing the
   site was saved.

   So install now takes only the SHELL: small, fast, and certain. The heavy
   content files are pulled afterwards by iitwWarmOfflineCache() in main.js,
   from the page, where nothing kills the work half-done — they land in this
   same cache through the fetch handler below. */
const PRECACHE_SHELL = [
  "./", "./index.html", "./quran.html", "./offline.html",
  "./css/style.css",
  "./manifest.webmanifest",
  "./img/icon-192.png", "./img/favicon.png", "./img/logo-emblem.png",
  "./js/main.js", "./js/i18n.js"
];

/* Fetched after activation, from the page. Everything a reader needs for the
   site to be genuinely usable with no connection. */
const PRECACHE_CONTENT = [
  "./prophets.html", "./companions.html", "./hadith.html", "./sunnah.html",
  "./stories.html", "./judgement.html", "./golden.html", "./guidance.html",
  "./courses.html", "./search.html",
  "./img/icon-512.png",

  "./js/data.js", "./js/quran.js", "./js/tadabbur.js", "./js/concepts.js",
  "./js/account.js", "./js/wird.js", "./js/lives.js", "./js/sunnah.js",
  "./js/adhkar.js", "./js/scholars.js", "./js/scholars-books.js",
  "./js/terms.js", "./js/figures.js", "./js/revival.js", "./js/bidah.js",
  "./js/judgement.js", "./js/judgement-closing.js", "./js/angels.js",
  "./js/signs.js", "./js/rise.js", "./js/golden.js", "./js/golden-lives.js",
  "./js/golden-mirror.js", "./js/golden-closing.js"
];

/* Hosts handled specially. */
const QURAN_API = "api.alquran.cloud";     // the text — immutable, cache-first
const AUDIO_HOSTS = ["everyayah.com", "cdn.islamic.network"];   // never cached

/* Fetch the list in small batches rather than all at once.
   `addAll` is not used because it rejects the whole batch if any single file
   404s, which would leave the worker uninstalled and the reader with no
   offline support at all.

   And the batching is not cosmetic: firing forty simultaneous requests
   overwhelms a modest server — the local dev server here is single-threaded
   and dropped every one of them, so the cache came out EMPTY while the worker
   reported itself installed. A phone on a weak connection behaves the same
   way. Six at a time is polite enough to survive both. */
async function iitwPrecache(cache, urls, size) {
  const failed = [];
  for (let i = 0; i < urls.length; i += size) {
    const batch = urls.slice(i, i + size);
    await Promise.all(batch.map(u =>
      cache.add(u).catch(err => { failed.push(u + " :: " + (err && err.message)); })
    ));
  }
  /* A report the page can read back, so a silent precache failure is never
     invisible again. Written into the cache itself because a service worker
     has no console the page can see. */
  try {
    await cache.put("iitw-precache-report", new Response(JSON.stringify({
      attempted: urls.length, failed: failed.length, examples: failed.slice(0, 4)
    }), { headers: { "Content-Type": "application/json" } }));
  } catch (e) {}
  return failed;
}

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => iitwPrecache(cache, PRECACHE_SHELL, 4))
  );
});

/* The page asks for the content list so it can warm the cache itself. Keeping
   the list here means there is one copy of it, next to the shell it extends. */
self.addEventListener("message", event => {
  if (event.data === "iitw-content-list" && event.ports && event.ports[0]) {
    event.ports[0].postMessage(PRECACHE_CONTENT);
  }
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names
          // The Quran cache is deliberately kept across versions — the text
          // never changes, and re-downloading it would be pure waste.
          .filter(n => n !== CACHE_VERSION && n !== QURAN_CACHE)
          .map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // ---- Recitation audio: never cached, straight to the network ----
  if (AUDIO_HOSTS.some(h => url.hostname.indexOf(h) !== -1)) return;

  // ---- The Quran text: CACHE FIRST ----
  /* Safe precisely because the Quran does not change. This is what makes the
     reader work with no connection, which is the point of the whole file. */
  if (url.hostname.indexOf(QURAN_API) !== -1) {
    event.respondWith(
      caches.open(QURAN_CACHE).then(cache =>
        cache.match(req).then(hit => {
          if (hit) return hit;
          return fetch(req).then(res => {
            if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
            return res;
          }).catch(() => new Response(
            JSON.stringify({ offline: true }),
            { status: 503, headers: { "Content-Type": "application/json" } }
          ));
        })
      )
    );
    return;
  }

  // ---- Any other cross-origin request: left completely alone ----
  if (url.origin !== self.location.origin) return;

  // ---- This site's own files: NETWORK FIRST, always ----
  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then(hit => {
          if (hit) return hit;
          /* A page asked for with nothing cached. Ignore the query string on
             the second look — every asset here carries ?v=<stamp>, and after
             a deploy the stamp changes, so an exact match would miss a file
             that IS cached under the previous stamp. Serving the older copy
             beats serving nothing when there is no connection. */
          return caches.match(req, { ignoreSearch: true }).then(loose => {
            if (loose) return loose;
            if (req.mode === "navigate") return caches.match("./offline.html");
            return new Response("", { status: 504, statusText: "Offline" });
          });
        })
      )
  );
});

self.addEventListener("message", event => {
  if (event.data === "iitw-skip-waiting") self.skipWaiting();
});
