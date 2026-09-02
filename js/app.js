import { initLanguage, setLang, onLangChange } from "./language.js";
import { initRouter, renderCurrent, buildModulesMenu } from "./router.js";

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    const submenu = nav.querySelector(".nav-modules");
    if (submenu) submenu.removeAttribute("open");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  window.addEventListener("hashchange", closeNav);
}

function setupLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

function init() {
  initLanguage();
  setupNav();
  setupLangButtons();
  buildModulesMenu();
  initRouter();

  onLangChange(() => {
    buildModulesMenu();
    renderCurrent();
  });
}

init();
