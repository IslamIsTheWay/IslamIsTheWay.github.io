/* ============================================================
   THE GROUPED-CARD RENDERER — مُصيّر البطاقات المشترك
   Loaded by guidance.html and by judgement.html.

   WHY IT IS A FILE AND NOT INLINE. The grave section is asked
   for on both pages, and the owner's standing rule is that the
   same words are never written twice. One dataset rendered in
   two places obeys that; two copies of a renderer do not, and
   they drift the first time one of them is corrected.

   Everything here was inline in guidance.html and moved across
   unchanged, with one addition: `simple`.

   THE `simple` FIELD IS HIS REQUEST, in his words:

     "add a simple box... because some as you have are somehow
      complicated and not easy to understand."

   So a card may open with two or three very short sentences in
   the plainest words available, rendered above the title's own
   explanation. It is optional — cards without it are unchanged.

   SHAPE A DATASET MUST HAVE:
     { title, titleAr, intro, introAr,
       groups: [ { id, icon, title, titleAr, lead, leadAr,
                   items: [ card ] } ],
       closing, closingAr }

   AND A CARD:
     { id, icon, num?, title, titleAr,
       simple?, simpleAr?,          <- the short version, on top
       plain, plainAr,
       example?, exampleAr?,
       proof?, proofAr?, ref?, refAr?, strength?, strengthAr?,
       extraProof?, extraProofAr?, extraRef?, extraRefAr?,
       note?, noteAr?,              <- rendered by renderGrouped
       link?, linkEn?, linkAr?,
       keys: [] }
   ============================================================ */

    function plBold(t) { return String(t || "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
    function plParas(t, rtl) {
      return String(t || "").split(/\n\s*\n/).filter(Boolean)
        .map(b => `<p${rtl ? ' dir="rtl"' : ""}>${plBold(b)}</p>`).join("");
    }
    function plPair(en, ar) {
      return `${en ? `<div class="en-only">${plParas(en)}</div>` : ""}` +
             `${ar ? `<div class="ar-only pl-ar" dir="rtl">${plParas(ar, true)}</div>` : ""}`;
    }
    /* A proof block. Arabic first and always shown, because the wording
       IS the evidence; the English rendering is a translation of it. */
    function plProof(o, p, pa, r, ra, st, sta) {
      const ar = o[pa], en = o[p], ref = o[r], refAr = o[ra], str = o[st], strAr = o[sta];
      if (!ar && !en) return "";
      return `<div class="pl-proof">
        ${ar ? `<div class="pl-proof-ar" dir="rtl">${ar}</div>` : ""}
        ${en ? `<p class="en-only pl-proof-en">${en}</p>` : ""}
        ${(ref || refAr) ? `<div class="pl-ref"><span class="en-only">${ref || ""}</span><span class="ar-only" dir="rtl">${refAr || ref || ""}</span></div>` : ""}
        ${(str || strAr) ? `<div class="pl-grade"><span class="en-only">${str || ""}</span><span class="ar-only" dir="rtl">${strAr || str || ""}</span></div>` : ""}
      </div>`;
    }
    function plCard(it) {
      return `<div class="pl-card" id="${it.id}">
        <div class="pl-card-head">
          <span class="pl-num">${it.icon || ""}${it.num ? " " + it.num : ""}</span>
          <span class="en-only">${it.title}</span>
          <span class="ar-only" dir="rtl" style="font-family:'Amiri',serif;">${it.titleAr}</span>
        </div>
        ${(it.simple || it.simpleAr) ? `<div class="pl-simple">
          <div class="pl-simple-label">💡 <span class="en-only">The short version</span><span class="ar-only" dir="rtl">باختصار شديد</span></div>
          ${plPair(it.simple, it.simpleAr)}
        </div>` : ""}
        <div class="pl-plain">
          <div class="pl-plain-label"><span class="en-only">In plain words</span><span class="ar-only" dir="rtl">بكلامٍ بسيط</span></div>
          ${plPair(it.plain, it.plainAr)}
        </div>
        ${(it.example || it.exampleAr) ? `<div class="pl-eg">
          <div class="pl-eg-label"><span class="en-only">For example</span><span class="ar-only" dir="rtl">مثال</span></div>
          ${plPair(it.example, it.exampleAr)}
        </div>` : ""}
        ${plProof(it, "proof", "proofAr", "ref", "refAr", "strength", "strengthAr")}
        ${plProof(it, "extraProof", "extraProofAr", "extraRef", "extraRefAr", "strength", "strengthAr")}
        ${it.link ? `<a class="pl-go" href="${it.link}"><span class="en-only">${it.linkEn}</span><span class="ar-only" dir="rtl">${it.linkAr}</span></a>` : ""}
      </div>`;
    }

    function renderGrouped(hostId, D, icon) {
      const host = document.getElementById(hostId);
      if (!host || !D) return;
      const M = D;
      host.innerHTML = `
        <h2 class="section-title"><span class="en-only">${icon} ${M.title}</span><span class="ar-only" dir="rtl" style="font-family:'Amiri',serif;">${icon} ${M.titleAr}</span></h2>
        <div class="rv-intro">${plPair(M.intro, M.introAr)}</div>
        ${M.groups.map(g => `
          <div class="pl-group" id="${g.id}">
            <h3 class="rv-head"><span class="en-only">${g.icon} ${g.title}</span><span class="ar-only" dir="rtl" style="font-family:'Amiri',serif;">${g.icon} ${g.titleAr}</span></h3>
            <div class="pl-lead">${plPair(g.lead, g.leadAr)}</div>
            ${g.items.map(it => plCard(it) + ((it.note || it.noteAr)
              ? `<div class="pl-note pl-note-tight">${plPair(it.note, it.noteAr)}</div>` : "")).join("")}
          </div>`).join("")}
        <div class="pl-closing">${plPair(M.closing, M.closingAr)}</div>`;
    }
