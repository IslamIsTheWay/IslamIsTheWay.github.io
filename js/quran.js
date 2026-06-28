/* ============================================
   Islam Is The Way — Quran Library
   Renders the 114-surah grid and fetches live
   Arabic text + English translation from the
   AlQuran Cloud API (api.alquran.cloud) when a
   surah is opened.
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("surahGrid");
  if (!grid) return;

  renderSurahGrid(SURAHS);

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

  title.textContent = `${surah.n}. ${surah.name} — ${surah.meaning}`;
  arabicTitle.textContent = surah.arabic;
  body.innerHTML = `<div class="loading">Loading verses…</div>`;
  overlay.classList.add("open");

  try {
    const [arabicRes, translationRes, audioRes] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/quran-uthmani`),
      fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/en.sahih`),
      fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/ar.alafasy`)
    ]);

    if (!arabicRes.ok || !translationRes.ok) throw new Error("Network response was not ok");

    const arabicData = await arabicRes.json();
    const translationData = await translationRes.json();

    const arabicAyahs = arabicData.data.ayahs;
    const translationAyahs = translationData.data.ayahs;
    const audioAyahs = audioRes.ok ? (await audioRes.json()).data.ayahs : [];

    let html = `<div style="margin-bottom:18px;text-align:center;">
      <button onclick="playAllAyahs()" style="padding:10px 24px;border:1px solid #1e7e45;border-radius:8px;background:#e6f4ea;color:#1e7e45;cursor:pointer;font-size:.95rem;">🔊 Play Full Surah Recitation</button>
      <button onclick="stopAudio()" style="padding:10px 24px;border:1px solid #ddd;border-radius:8px;background:#fff;color:#666;cursor:pointer;font-size:.95rem;margin-left:8px;">⏹ Stop</button>
    </div>`;
    window._ayahAudios = audioAyahs.map(a => a.audio);

    arabicAyahs.forEach((ayah, i) => {
      const translation = translationAyahs[i] ? translationAyahs[i].text : "";
      const audioUrl = audioAyahs[i] ? audioAyahs[i].audio : "";
      html += `
        <div class="ayah-block">
          <div class="arabic-text">${ayah.text}${audioUrl ? ` <button onclick="playAyah('${audioUrl}')" style="border:none;background:none;cursor:pointer;font-size:1.2rem;" title="Listen">🔊</button>` : ""}</div>
          <div class="translation-text"><span class="ayah-num">${ayah.numberInSurah}</span>${translation}</div>
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
