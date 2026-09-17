() => {
  const out = { badText: [], brokenImg: [], dupIds: [], unnamed: [], links: [], anchorsMissing: [], overflow: 0 };
  const isBad = t => {
    if (t.indexOf("[object Object]") >= 0) return true;
    if (t.indexOf("${") >= 0) return true;
    const words = t.split(/[^A-Za-z]+/);
    return words.indexOf("undefined") >= 0 || words.indexOf("NaN") >= 0;
  };
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) {
    const p = n.parentElement;
    if (!p || ["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA"].includes(p.tagName)) continue;
    const t = n.nodeValue;
    if (isBad(t)) out.badText.push(t.trim().slice(0, 90));
    const words = t.split(/[^A-Za-z]+/);
    if (words.indexOf("null") >= 0) out.badText.push("null: " + t.trim().slice(0, 80));
  }
  document.querySelectorAll("[placeholder],[title],[aria-label],[alt]").forEach(e => {
    ["placeholder", "title", "aria-label", "alt"].forEach(a => {
      const v = e.getAttribute(a);
      if (v && isBad(v)) out.badText.push(a + "=" + v.slice(0, 80));
    });
  });
  document.querySelectorAll("img").forEach(i => {
    const src = i.getAttribute("src");
    if (!src || !i.complete || i.naturalWidth !== 0) return;
    if (i.loading === "lazy" && i.getBoundingClientRect().top > innerHeight * 3) return;
    out.brokenImg.push(src.slice(0, 90));
  });
  const seen = {};
  document.querySelectorAll("[id]").forEach(e => { seen[e.id] = (seen[e.id] || 0) + 1; });
  Object.keys(seen).forEach(k => { if (seen[k] > 1) out.dupIds.push(k + " x" + seen[k]); });
  document.querySelectorAll("a[href], button").forEach(e => {
    if (!e.getClientRects().length) return;
    const img = e.querySelector("img[alt]");
    const name = (e.textContent || "").trim() || e.getAttribute("aria-label") || e.getAttribute("title") ||
      (img && img.getAttribute("alt")) || "";
    if (!name.trim()) {
      const cls = typeof e.className === "string" ? e.className.split(" ")[0] : "";
      out.unnamed.push(e.tagName.toLowerCase() + (e.id ? "#" + e.id : "") + (cls ? "." + cls : "") + " " + (e.getAttribute("href") || "").slice(0, 40));
    }
  });
  document.querySelectorAll("a[href]").forEach(a => out.links.push(a.getAttribute("href")));
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    let id = a.getAttribute("href").slice(1);
    try { id = decodeURIComponent(id); } catch (e) {}
    if (id && !document.getElementById(id) && !document.getElementsByName(id).length) out.anchorsMissing.push("#" + id);
  });
  out.overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  return out;
}
