/* ============================================
   Islam Is The Way — Shared Site Behaviour
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav.main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Highlight active nav link based on current page
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
});

/* ---------- Global "Search a Person" logic ----------
   Used on search.html. Searches PROPHETS + COMPANIONS (from data.js)
   by name, title, or summary text and renders result cards with refs.
------------------------------------------------------- */
function runPersonSearch(query) {
  const resultsEl = document.getElementById("searchResults");
  if (!resultsEl) return;

  const q = query.trim().toLowerCase();
  resultsEl.innerHTML = "";

  if (!q) {
    resultsEl.innerHTML = "";
    return;
  }

  const matches = ALL_PEOPLE.filter(person => {
    return (
      person.name.toLowerCase().includes(q) ||
      person.title.toLowerCase().includes(q) ||
      person.summary.toLowerCase().includes(q) ||
      person.id.toLowerCase().includes(q)
    );
  });

  if (matches.length === 0) {
    resultsEl.innerHTML = `<div class="no-results">No results found for "<strong>${escapeHtml(query)}</strong>". Try names like "Musa", "Ibrahim", "Abu Bakr", or "Aisha".</div>`;
    return;
  }

  matches.forEach(person => {
    const card = document.createElement("div");
    card.className = "result-card";

    const categoryLabel = person.category === "prophet" ? "Prophet" : "Companion (Sahabi)";

    card.innerHTML = `
      <span class="category">${categoryLabel}</span>
      <h3>${person.name} <span style="font-family:'Amiri',serif; color: var(--green); font-size:1.1rem;">${person.arabic}</span></h3>
      <p style="color: var(--gold); font-weight:600; font-size:0.85rem; margin-bottom: 8px;">${person.title}</p>
      <p>${person.summary}</p>
      <div class="refs">
        <strong>References:</strong>
        <ul>${person.refs.map(r => `<li>${r}</li>`).join("")}</ul>
      </div>
    `;
    resultsEl.appendChild(card);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
