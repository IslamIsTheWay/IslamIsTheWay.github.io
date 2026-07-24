/* ============================================
   Islam Is The Way — Shared Site Behaviour
   ============================================ */

/* ---------- Anonymous visit analytics ----------
   Counts total visits, per-page visits, and which nav sections are clicked,
   using a free public counter service. No personal data is collected. The
   numbers are read back only inside the admin analytics panel. Everything is
   wrapped in try/catch so a counter outage can never break the site. */
(function () {
  const NS = "iitw-islamistheway-2026";
  function bump(key) {
    try { fetch("https://abacus.jasoncameron.dev/hit/" + NS + "/" + key).catch(() => {}); } catch (e) {}
  }
  try {
    let page = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    page = page.replace(".html", "") || "index";
    // Count each visitor once per browser session to reflect real people.
    if (!sessionStorage.getItem("iitw-session")) {
      bump("total");
      sessionStorage.setItem("iitw-session", "1");
    }
    if (!sessionStorage.getItem("iitw-pv-" + page)) {
      bump("page-" + page);
      sessionStorage.setItem("iitw-pv-" + page, "1");
    }
    document.addEventListener("click", function (e) {
      const a = e.target.closest("nav.main-nav a");
      if (a) {
        const label = (a.textContent || "").trim().toLowerCase().replace(/[^a-z]/g, "");
        if (label) bump("nav-" + label);
      }
    });
  } catch (e) {}
})();

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
      person.id.toLowerCase().includes(q) ||
      person.arabic.includes(query.trim()) ||
      (person.summaryAr && person.summaryAr.includes(query.trim()))
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
      ${person.summaryAr ? `<p dir="rtl" style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.9; color: var(--green-dark); text-align:right; background: var(--green-pale); border-radius:8px; padding:10px 14px; margin-bottom:12px;">${person.summaryAr}</p>` : ""}
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
