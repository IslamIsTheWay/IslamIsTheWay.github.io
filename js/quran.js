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

    const filtered = SURAHS.filter(s => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.meaning.toLowerCase().includes(q) ||
        String(s.n) === q;
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
    const [arabicRes, translationRes] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/quran-uthmani`),
      fetch(`https://api.alquran.cloud/v1/surah/${surah.n}/en.sahih`)
    ]);

    if (!arabicRes.ok || !translationRes.ok) throw new Error("Network response was not ok");

    const arabicData = await arabicRes.json();
    const translationData = await translationRes.json();

    const arabicAyahs = arabicData.data.ayahs;
    const translationAyahs = translationData.data.ayahs;

    let html = "";
    arabicAyahs.forEach((ayah, i) => {
      const translation = translationAyahs[i] ? translationAyahs[i].text : "";
      html += `
        <div class="ayah-block">
          <div class="arabic-text">${ayah.text}</div>
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
  document.getElementById("surahModal").classList.remove("open");
}
