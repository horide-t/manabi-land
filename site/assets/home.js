const apps = Array.isArray(window.MANABI_APPS) ? window.MANABI_APPS : [];
const appGrid = document.querySelector("#app-grid");
const filterBar = document.querySelector("#filter-bar");
const emptyState = document.querySelector("#empty-state");
const appCount = document.querySelector("#app-count");

const subjectLabels = {
  math: "算数",
  japanese: "国語",
  science: "理科",
  social: "社会",
  english: "英語",
  music: "音楽",
  programming: "プログラミング",
  other: "そのほか",
};
const colorClasses = ["card-yellow", "card-blue", "card-coral", "card-green", "card-purple"];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);
}

function renderCards(filter = "all") {
  const visibleApps = filter === "all" ? apps : apps.filter((app) => app.subject === filter);
  appGrid.innerHTML = visibleApps.map((app, index) => {
    const originalIndex = apps.indexOf(app);
    const color = colorClasses.includes(app.color) ? app.color : colorClasses[originalIndex % colorClasses.length];
    return `<a class="app-card ${color}" href="${escapeHTML(app.href)}" data-subject="${escapeHTML(app.subject || "other")}">
      <span class="card-number">${String(originalIndex + 1).padStart(2, "0")}</span>
      <span class="card-icon" aria-hidden="true">${escapeHTML(app.icon || "✎")}</span>
      <span class="card-grade">${escapeHTML(app.grade || "全学年")}</span>
      <h3>${escapeHTML(app.title || "学習アプリ")}</h3>
      <p>${escapeHTML(app.description || "カードをおして はじめよう")}</p>
      <span class="card-go">はじめる <b aria-hidden="true">→</b></span>
    </a>`;
  }).join("");

  appGrid.hidden = visibleApps.length === 0;
  emptyState.hidden = visibleApps.length !== 0;
  if (visibleApps.length === 0 && apps.length > 0) {
    emptyState.querySelector("h3").textContent = "この教科のアプリは まだありません";
    emptyState.querySelector("p").textContent = "ほかの教科も見てみよう！";
  } else {
    emptyState.querySelector("h3").textContent = "学習アプリを じゅんび中です";
    emptyState.querySelector("p").textContent = "もうすこし まっていてね！";
  }
}

function renderFilters() {
  const subjects = [...new Set(apps.map((app) => app.subject || "other"))];
  if (subjects.length < 2) {
    filterBar.hidden = true;
    return;
  }
  const filters = ["all", ...subjects];
  filterBar.innerHTML = filters.map((filter, index) =>
    `<button class="filter-button${index === 0 ? " active" : ""}" type="button" data-filter="${escapeHTML(filter)}" aria-pressed="${index === 0}">${filter === "all" ? "すべて" : escapeHTML(subjectLabels[filter] || filter)}</button>`,
  ).join("");

  filterBar.addEventListener("click", (event) => {
    const selectedButton = event.target.closest(".filter-button");
    if (!selectedButton) return;
    filterBar.querySelectorAll(".filter-button").forEach((button) => {
      const selected = button === selectedButton;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    renderCards(selectedButton.dataset.filter);
  });
}

appCount.textContent = String(apps.length);
renderFilters();
renderCards();
