/* ============================================
   Islam Is The Way — Quran Library
   Renders the 114-surah grid and fetches live
   Arabic text + English translation from the
   AlQuran Cloud API (api.alquran.cloud) when a
   surah is opened.
   ============================================ */

/* ---------- Reciters ----------
   Per-ayah audio comes from everyayah.com, where each file is named
   {surah3}{ayah3}.mp3 — e.g. 002255.mp3 is Ayat al-Kursi. Every folder below
   was checked to be live before being listed here. */
const RECITERS = [
  { id: "Alafasy_128kbps",                    name: "Mishary Rashid Alafasy",   ar: "مشاري راشد العفاسي" },
  { id: "Yasser_Ad-Dussary_128kbps",          name: "Yasser Al-Dossary",        ar: "ياسر الدوسري" },
  { id: "Abdurrahmaan_As-Sudais_192kbps",     name: "Abdurrahman As-Sudais",    ar: "عبد الرحمن السديس" },
  { id: "Maher_AlMuaiqly_64kbps",             name: "Maher Al-Muaiqly",         ar: "ماهر المعيقلي" },
  { id: "Abdul_Basit_Murattal_64kbps",        name: "Abdul Basit (Murattal)",   ar: "عبد الباسط عبد الصمد" },
  { id: "Husary_128kbps",                     name: "Mahmoud Al-Husary",        ar: "محمود خليل الحصري" },
  { id: "Minshawy_Murattal_128kbps",          name: "Al-Minshawi (Murattal)",   ar: "محمد صديق المنشاوي" },
  { id: "Saood_ash-Shuraym_128kbps",          name: "Saud Ash-Shuraim",         ar: "سعود الشريم" },
  { id: "Ghamadi_40kbps",                     name: "Saad Al-Ghamdi",           ar: "سعد الغامدي" },
  { id: "Hudhaify_128kbps",                   name: "Ali Al-Hudhaify",          ar: "علي الحذيفي" },
  { id: "Abdullaah_3awwaad_Al-Juhaynee_128kbps", name: "Abdullah Al-Juhany",    ar: "عبد الله الجهني" },
  { id: "Nasser_Alqatami_128kbps",            name: "Nasser Al-Qatami",         ar: "ناصر القطامي" },
  { id: "Salah_Al_Budair_128kbps",            name: "Salah Al-Budair",          ar: "صلاح البدير" },
  { id: "Muhammad_Ayyoub_128kbps",            name: "Muhammad Ayyoub",          ar: "محمد أيوب" },
  { id: "Ali_Jaber_64kbps",                   name: "Ali Jaber",                ar: "علي جابر" },
  { id: "Fares_Abbad_64kbps",                 name: "Fares Abbad",              ar: "فارس عباد" }
];

const RECITER_KEY = "iitw-reciter";

function getReciter() {
  const saved = localStorage.getItem(RECITER_KEY);
  return RECITERS.some(r => r.id === saved) ? saved : RECITERS[0].id;
}

function pad3(n) { return String(n).padStart(3, "0"); }

// ١٢٣ — the ayah number as it appears in a printed mushaf.
function toArabicDigits(n) {
  return String(n).replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[+d]);
}

function ayahAudioUrl(surahNum, ayahNumInSurah) {
  return "https://everyayah.com/data/" + getReciter() + "/" + pad3(surahNum) + pad3(ayahNumInSurah) + ".mp3";
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("surahGrid");
  if (!grid) return;

  renderSurahGrid(SURAHS);

  // Build the reciter dropdown
  const recSel = document.getElementById("reciterSelect");
  if (recSel) {
    recSel.innerHTML = RECITERS
      .map(r => `<option value="${r.id}">${r.name} — ${r.ar}</option>`)
      .join("");
    recSel.value = getReciter();
    recSel.addEventListener("change", () => {
      localStorage.setItem(RECITER_KEY, recSel.value);
      stopAudio();
      // If a surah is open, rebuild its audio links for the new reciter.
      if (window._openSurah) openSurah(window._openSurah);
    });
  }

  const searchInput = document.getElementById("surahSearch");
  const placeFilter = document.getElementById("placeFilter");

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const place = placeFilter.value;

    const rawQ = searchInput.value.trim();
    const filtered = SURAHS.filter(s => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.meaning.toLowerCase().includes(q) ||
        String(s.n) === q ||
        s.arabic.includes(rawQ);
      const matchesPlace = place === "all" || s.place === place;
      return matchesQuery && matchesPlace;
    });

    renderSurahGrid(filtered);
  }

  searchInput.addEventListener("input", applyFilters);
  placeFilter.addEventListener("change", applyFilters);

  // Modal controls
  const overlay = document.getElementById("surahModal");
  const closeBtn = document.getElementById("modalClose");
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });
});

function renderSurahGrid(surahs) {
  const grid = document.getElementById("surahGrid");
  grid.innerHTML = "";

  if (surahs.length === 0) {
    grid.innerHTML = `<div class="no-results">No surahs match your search.</div>`;
    return;
  }

  surahs.forEach(s => {
    const card = document.createElement("div");
    card.className = "surah-card";
    card.innerHTML = `
      <div class="surah-number">${s.n}</div>
      <div class="surah-info">
        <h4>${s.name} <span class="surah-arabic">${s.arabic}</span></h4>
        <div class="surah-meta">${s.meaning} • ${s.verses} verses • ${s.place}</div>
      </div>
    `;
    card.addEventListener("click", () => openSurah(s));
    grid.appendChild(card);
  });
}

async function openSurah(surah) {
  const overlay = document.getElementById("surahModal");
  const title = document.getElementById("modalTitle");
  const arabicTitle = document.getElementById("modalArabicTitle");
  const body = document.getElementById("modalBody");

  window._openSurah = surah;
  title.textContent = `${surah.n}. ${surah.name} — ${surah.meaning}`;
  arabicTitle.textContent = surah.arabic;
  body.innerHTML = `<div class="loading">Loading verses…</div>`;
  overlay.classList.add("open");

  try {
    const [arabicRes, translationRes] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/quran-uthmani`),
      fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/en.sahih`)
    ]);

    if (!arabicRes.ok || !translationRes.ok) throw new Error("Network response was not ok");

    const arabicData = await arabicRes.json();
    const translationData = await translationRes.json();

    const arabicAyahs = arabicData.data.ayahs;
    const translationAyahs = translationData.data.ayahs;

    const current = RECITERS.find(r => r.id === getReciter()) || RECITERS[0];

    let html = `<div class="reciter-bar">
      <div class="reciter-now">🎧 Reciter: <strong>${current.name}</strong> <span dir="rtl" style="font-family:'Amiri',serif;">${current.ar}</span></div>
      <div>
        <button onclick="playAllAyahs()" class="rq-btn rq-play">▶ Play Full Surah</button>
        <button onclick="stopAudio()" class="rq-btn rq-stop">⏹ Stop</button>
      </div>
    </div>`;

    // Per-ayah audio URLs are built directly from the chosen reciter.
    window._ayahAudios = arabicAyahs.map(a => ayahAudioUrl(surah.n, a.numberInSurah));

    /* Each verse carries its number on the Arabic line (in the traditional
       end-of-ayah marker) AND its full surah:ayah reference underneath.
       Without the reference you cannot find a verse again — reading "2:255"
       is what lets someone look it up or quote it correctly. */
    arabicAyahs.forEach((ayah, i) => {
      const translation = translationAyahs[i] ? translationAyahs[i].text : "";
      const audioUrl = ayahAudioUrl(surah.n, ayah.numberInSurah);
      const cite = surah.n + ":" + ayah.numberInSurah;
      html += `
        <div class="ayah-block" id="ayah-${ayah.numberInSurah}">
          <div class="arabic-text">${ayah.text} <span class="ayah-end" title="Verse ${ayah.numberInSurah}">${toArabicDigits(ayah.numberInSurah)}</span> <button onclick="playAyah('${audioUrl}')" style="border:none;background:none;cursor:pointer;font-size:1.2rem;" title="Listen to this verse">🔊</button></div>
          <div class="translation-text"><span class="ayah-num">${ayah.numberInSurah}</span>${translation}</div>
          <div class="ayah-cite">Surah ${surah.name} — <strong>${cite}</strong> <span dir="rtl" style="font-family:'Amiri',serif;">سورة ${surah.arabic || surah.name} — الآية ${toArabicDigits(ayah.numberInSurah)}</span></div>
        </div>
      `;
    });

    body.innerHTML = html;
  } catch (err) {
    body.innerHTML = `
      <div class="error-msg">
        Unable to load this surah right now. Please check your internet connection and try again.<br><br>
        <em>Surah ${surah.name} (${surah.meaning}) — ${surah.verses} verses, ${surah.place}.</em>
      </div>
    `;
  }
}

function closeModal() {
  stopAudio();
  document.getElementById("surahModal").classList.remove("open");
}

let currentAudioEl = null;
let ayahPlayIndex = 0;

function playAyah(url) {
  stopAudio();
  currentAudioEl = new Audio(url);
  currentAudioEl.play();
}

function playAllAyahs() {
  if (!window._ayahAudios || window._ayahAudios.length === 0) return;
  ayahPlayIndex = 0;
  playNextAyah();
}

function playNextAyah() {
  if (ayahPlayIndex >= window._ayahAudios.length) return;
  stopAudio();
  currentAudioEl = new Audio(window._ayahAudios[ayahPlayIndex]);
  currentAudioEl.addEventListener("ended", () => {
    ayahPlayIndex++;
    playNextAyah();
  });
  currentAudioEl.play();
}

function stopAudio() {
  if (currentAudioEl) {
    currentAudioEl.pause();
    currentAudioEl.currentTime = 0;
    currentAudioEl = null;
  }
  window.speechSynthesis && window.speechSynthesis.cancel();
}
