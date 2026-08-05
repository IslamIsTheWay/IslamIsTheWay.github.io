/* ============================================================
   DIAGRAMS FOR THE RULINGS — رسوم توضيحية
   ============================================================
   Some answers are hard to hold in words. "Loose, thick, covers
   the chest, not tight" is four abstractions in a row; one
   labelled drawing settles it.

   WHY THESE ARE DRAWN HERE RATHER THAN FETCHED FROM THE WEB
   The owner said to take pictures off the internet. These are
   drawn as inline SVG instead, for four reasons that all matter
   for this particular site:

     1. Copyright. A photograph lifted from a search result is
        someone's property, and this site is public.
     2. Nothing to break. An external image is a dead link the
        day that host reorganises. check-images.sh guards local
        files; it cannot guard a URL on someone else's server.
     3. No photograph of a real person. A diagram of a garment
        teaches the conditions without putting a real woman's
        picture on a page about how women should dress.
     4. It is clearer. A photo shows ONE outfit; a labelled
        diagram shows the RULE, with each condition pointing at
        the part of the garment it governs.

   They are plain SVG with the site's own CSS variables, so they
   theme with the rest of the page and cost no extra request.

   A diagram is NEVER the ruling. It illustrates what the card
   above it already says with its evidence and its attributions.
   ============================================================ */

const RULING_FIGURES = {

  /* ---------- The conditions of hijab ---------- */
  "fq-hijab-conditions": {
    caption: "The conditions the scholars set, each pointing at the part of the garment it governs. This shows the rule, not one particular outfit — many different styles of dress meet all of it.",
    captionAr: "شروط أهل العلم، كلُّ شرطٍ مشيرٌ إلى موضعه من اللباس. وهذا بيانٌ للقاعدة لا لزيٍّ بعينه، فأنماطٌ كثيرةٌ من اللباس تستوفيها جميعًا.",
    svg: `<svg viewBox="0 0 520 380" role="img" aria-label="Diagram of the conditions a covering must meet" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="figCloth" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e7e45" stop-opacity=".16"/>
      <stop offset="100%" stop-color="#14532d" stop-opacity=".30"/>
    </linearGradient>
  </defs>

  <!-- The outer garment: one continuous line from the head covering to the
       hem, drawn deliberately loose so the shape itself demonstrates the
       condition it is labelled with. -->
  <path d="M260 40 c-34 0-58 24-58 56 0 14 4 24 9 33
           -38 16 -62 46 -70 92 l-14 128 c-1 8 5 14 13 14 h240
           c8 0 14-6 13-14 l-14-128 c-8-46-32-76-70-92
           5-9 9-19 9-33 0-32-24-56-58-56 z"
        fill="url(#figCloth)" stroke="#14532d" stroke-width="2.5" stroke-linejoin="round"/>

  <!-- The khimar drawn down over the chest — the wording of An-Nur 24:31. -->
  <path d="M202 96 c0 34 20 62 58 62 s58-28 58-62"
        fill="none" stroke="#c9a227" stroke-width="2.5" stroke-dasharray="6 5"/>

  <!-- Callout lines -->
  <g stroke="#5b6b61" stroke-width="1.2" stroke-dasharray="3 3">
    <line x1="200" y1="66" x2="120" y2="52"/>
    <line x1="258" y1="150" x2="392" y2="120"/>
    <line x1="150" y1="230" x2="96"  y2="216"/>
    <line x1="368" y1="250" x2="418" y2="240"/>
    <line x1="200" y1="330" x2="120" y2="336"/>
  </g>

  <g font-family="Poppins, sans-serif" font-size="12.5" fill="#14532d" font-weight="600">
    <text x="14"  y="48">Hair, neck and ears</text>
    <text x="14"  y="64" font-size="11" fill="#5b6b61" font-weight="400">covered, not partly</text>

    <text x="398" y="112">Drawn over</text>
    <text x="398" y="128">the chest</text>
    <text x="398" y="144" font-size="11" fill="#5b6b61" font-weight="400">An-Nur 24:31</text>

    <text x="6"   y="212">Loose</text>
    <text x="6"   y="228" font-size="11" fill="#5b6b61" font-weight="400">does not describe</text>
    <text x="6"   y="242" font-size="11" fill="#5b6b61" font-weight="400">the shape</text>

    <text x="424" y="236">Thick</text>
    <text x="424" y="252" font-size="11" fill="#5b6b61" font-weight="400">not see-through</text>

    <text x="6"   y="332">Not an adornment</text>
    <text x="6"   y="348" font-size="11" fill="#5b6b61" font-weight="400">in itself</text>
  </g>

  <text x="260" y="372" text-anchor="middle" font-family="Poppins, sans-serif"
        font-size="11" fill="#5b6b61">The face and hands are a separate question — the scholars differ, see the next card.</text>
</svg>`
  },

  /* ---------- Which part of the sock is wiped ---------- */
  "fq-wiping-socks": {
    caption: "Ali رضي الله عنه said that if the religion were by opinion, the underside would have more right to be wiped — but he saw the Prophet ﷺ wipe the top.",
    captionAr: "قال عليٌّ رضي الله عنه: لو كان الدين بالرأي لكان أسفل الخفّ أولى بالمسح من أعلاه، ولكنه رأى النبي ﷺ يمسح ظاهرهما.",
    svg: `<svg viewBox="0 0 480 250" role="img" aria-label="Diagram showing the top of the foot is wiped, not the sole" xmlns="http://www.w3.org/2000/svg">
  <!-- Foot in profile, toes to the right. -->
  <path d="M60 150 c0-34 14-58 44-70 26-10 58-12 96-6 40 6 74 20 104 40
           14 9 22 20 22 30 0 14-12 22-30 22 H92 c-20 0-32-6-32-16 z"
        fill="#e6f4ea" stroke="#14532d" stroke-width="2.5" stroke-linejoin="round"/>

  <!-- The top surface: what is actually wiped. -->
  <path d="M62 136 c2-30 16-52 42-63 26-10 58-12 96-6 40 6 74 20 104 40"
        fill="none" stroke="#1e7e45" stroke-width="9" stroke-linecap="round" opacity=".85"/>

  <!-- The sole: not wiped. -->
  <line x1="92" y1="166" x2="296" y2="166" stroke="#b5541f" stroke-width="6"
        stroke-linecap="round" stroke-dasharray="10 8" opacity=".8"/>

  <g font-family="Poppins, sans-serif" font-size="13" font-weight="600">
    <text x="150" y="42" fill="#1e7e45">✓ Wipe here — the top</text>
    <text x="150" y="60" font-size="11" fill="#5b6b61" font-weight="400">one wipe with wet hands</text>
    <text x="150" y="212" fill="#b5541f">✗ Not the sole</text>
  </g>

  <g stroke="#5b6b61" stroke-width="1.2" stroke-dasharray="3 3">
    <line x1="200" y1="50" x2="176" y2="96"/>
    <line x1="200" y1="196" x2="190" y2="172"/>
  </g>

  <g font-family="Poppins, sans-serif" font-size="11.5" fill="#14532d">
    <text x="330" y="216" font-weight="600">1 day and night — resident</text>
    <text x="330" y="234" font-weight="600">3 days and nights — traveller</text>
  </g>
</svg>`
  },

  /* ---------- How many rak'ah on a journey ---------- */
  "fq-travel-prayer": {
    caption: "Which prayers shorten and which do not. Maghrib and Fajr are never shortened — this is the part most often got wrong.",
    captionAr: "أيّ الصلوات تُقصر وأيّها لا تُقصر. والمغرب والفجر لا تُقصران أبدًا، وهذا أكثر ما يقع فيه الغلط.",
    svg: `<svg viewBox="0 0 560 260" role="img" aria-label="Diagram of how many rak'ah each prayer becomes on a journey" xmlns="http://www.w3.org/2000/svg">
  <text x="150" y="26" text-anchor="middle" font-family="Poppins, sans-serif" font-size="13"
        font-weight="700" fill="#14532d">At home</text>
  <text x="410" y="26" text-anchor="middle" font-family="Poppins, sans-serif" font-size="13"
        font-weight="700" fill="#14532d">Travelling</text>

  <g font-family="Poppins, sans-serif" font-size="12.5">
    <!-- Fajr -->
    <text x="24" y="66" fill="#14532d" font-weight="600">Fajr</text>
    <g fill="#1e7e45"><circle cx="120" cy="61" r="9"/><circle cx="146" cy="61" r="9"/></g>
    <text x="272" y="66" fill="#5b6b61" font-size="18">→</text>
    <g fill="#1e7e45"><circle cx="380" cy="61" r="9"/><circle cx="406" cy="61" r="9"/></g>
    <text x="440" y="66" fill="#5b6b61" font-size="11">unchanged</text>

    <!-- Dhuhr -->
    <text x="24" y="108" fill="#14532d" font-weight="600">Dhuhr</text>
    <g fill="#1e7e45"><circle cx="120" cy="103" r="9"/><circle cx="146" cy="103" r="9"/><circle cx="172" cy="103" r="9"/><circle cx="198" cy="103" r="9"/></g>
    <text x="272" y="108" fill="#5b6b61" font-size="18">→</text>
    <g fill="#1e7e45"><circle cx="380" cy="103" r="9"/><circle cx="406" cy="103" r="9"/></g>
    <g fill="none" stroke="#c9a227" stroke-width="2" stroke-dasharray="4 3">
      <circle cx="432" cy="103" r="9"/><circle cx="458" cy="103" r="9"/>
    </g>
    <text x="486" y="108" fill="#c9a227" font-size="11" font-weight="600">shortened</text>

    <!-- Asr -->
    <text x="24" y="150" fill="#14532d" font-weight="600">Asr</text>
    <g fill="#1e7e45"><circle cx="120" cy="145" r="9"/><circle cx="146" cy="145" r="9"/><circle cx="172" cy="145" r="9"/><circle cx="198" cy="145" r="9"/></g>
    <text x="272" y="150" fill="#5b6b61" font-size="18">→</text>
    <g fill="#1e7e45"><circle cx="380" cy="145" r="9"/><circle cx="406" cy="145" r="9"/></g>
    <g fill="none" stroke="#c9a227" stroke-width="2" stroke-dasharray="4 3">
      <circle cx="432" cy="145" r="9"/><circle cx="458" cy="145" r="9"/>
    </g>
    <text x="486" y="150" fill="#c9a227" font-size="11" font-weight="600">shortened</text>

    <!-- Maghrib -->
    <text x="24" y="192" fill="#14532d" font-weight="600">Maghrib</text>
    <g fill="#1e7e45"><circle cx="120" cy="187" r="9"/><circle cx="146" cy="187" r="9"/><circle cx="172" cy="187" r="9"/></g>
    <text x="272" y="192" fill="#5b6b61" font-size="18">→</text>
    <g fill="#1e7e45"><circle cx="380" cy="187" r="9"/><circle cx="406" cy="187" r="9"/><circle cx="432" cy="187" r="9"/></g>
    <text x="460" y="192" fill="#b5541f" font-size="11" font-weight="600">never shortened</text>

    <!-- Isha -->
    <text x="24" y="234" fill="#14532d" font-weight="600">Isha</text>
    <g fill="#1e7e45"><circle cx="120" cy="229" r="9"/><circle cx="146" cy="229" r="9"/><circle cx="172" cy="229" r="9"/><circle cx="198" cy="229" r="9"/></g>
    <text x="272" y="234" fill="#5b6b61" font-size="18">→</text>
    <g fill="#1e7e45"><circle cx="380" cy="229" r="9"/><circle cx="406" cy="229" r="9"/></g>
    <g fill="none" stroke="#c9a227" stroke-width="2" stroke-dasharray="4 3">
      <circle cx="432" cy="229" r="9"/><circle cx="458" cy="229" r="9"/>
    </g>
    <text x="486" y="234" fill="#c9a227" font-size="11" font-weight="600">shortened</text>
  </g>
</svg>`
  },

  /* ---------- What backbiting is, and is not ---------- */
  "fq-backbiting": {
    caption: "The line the scholars draw. What decides it is not whether it is true — it is whether they would dislike it being said.",
    captionAr: "الحدّ الذي ذكره أهل العلم. وليس الفيصل صدق الكلام، بل كون صاحبه يكرهه.",
    svg: `<svg viewBox="0 0 520 200" role="img" aria-label="Diagram distinguishing backbiting from slander" xmlns="http://www.w3.org/2000/svg">
  <rect x="16" y="30" width="228" height="150" rx="14" fill="#fdf4ec" stroke="#e0c4ae" stroke-width="2"/>
  <rect x="276" y="30" width="228" height="150" rx="14" fill="#fbe9e0" stroke="#d9a58a" stroke-width="2"/>

  <g font-family="Poppins, sans-serif" text-anchor="middle">
    <text x="130" y="60" font-size="14" font-weight="700" fill="#8a3d1f">Ghibah</text>
    <text x="130" y="80" font-size="11.5" fill="#5b6b61">Saying something TRUE</text>
    <text x="130" y="98" font-size="11.5" fill="#5b6b61">about someone absent</text>
    <text x="130" y="116" font-size="11.5" fill="#5b6b61">that they would dislike</text>
    <text x="130" y="150" font-size="12" font-weight="600" fill="#8a3d1f">Forbidden</text>
    <text x="130" y="168" font-size="11" fill="#5b6b61">unless one of the</text>

    <text x="390" y="60" font-size="14" font-weight="700" fill="#a33417">Buhtan</text>
    <text x="390" y="80" font-size="11.5" fill="#5b6b61">Saying something FALSE</text>
    <text x="390" y="98" font-size="11.5" fill="#5b6b61">about someone absent</text>
    <text x="390" y="150" font-size="12" font-weight="600" fill="#a33417">Worse — slander</text>
  </g>

  <text x="260" y="108" text-anchor="middle" font-family="Poppins, sans-serif"
        font-size="20" fill="#5b6b61">→</text>
</svg>`
  }
};
