import { dict, getLang } from "./language.js";
import { initInteraction } from "./interactions.js";

const app = document.getElementById("app");

const SCREEN_IDS = ["m1a", "m1b", "m2a", "m2b", "m3a", "m3b", "m4a", "m4b", "m5a", "m5b"];
const FLOW = ["home", ...SCREEN_IDS, "credits"];
const SECTION_KEYS = ["intro", "content", "example", "visual", "interaction", "reflection", "sources"];

function currentRoute() {
  const raw = window.location.hash.replace(/^#\/?/, "").trim();
  if (raw === "") return "home";
  if (raw === "credits") return "credits";
  if (SCREEN_IDS.includes(raw)) return raw;
  return "not-found";
}

function screenInfo(id) {
  for (const module of dict().modules) {
    const screen = module.screens.find((s) => s.id === id);
    if (screen) return { module, screen };
  }
  return null;
}

function flowTarget(targetId) {
  const d = dict();
  if (targetId === "home") return { href: "#/", label: d.pager.toHome };
  if (targetId === "credits") return { href: "#/credits", label: d.pager.toCredits };
  const info = screenInfo(targetId);
  return { href: `#/${targetId}`, label: `${info.screen.code} · ${info.screen.title}` };
}

function pagerHtml(routeId) {
  const d = dict();
  const pos = FLOW.indexOf(routeId);
  const prev = pos > 0 ? flowTarget(FLOW[pos - 1]) : null;
  const next = pos < FLOW.length - 1 ? flowTarget(FLOW[pos + 1]) : null;

  const link = (item, dir, cls) => `
    <a class="pager-link ${cls}" href="${item.href}">
      <span class="pager-dir">${dir}</span>
      <span class="pager-title">${item.label}</span>
    </a>`;

  return `
    <nav class="pager" aria-label="${d.pager.label}">
      ${prev ? link(prev, d.pager.previous, "pager-prev") : "<span></span>"}
      ${next ? link(next, d.pager.next, "pager-next") : "<span></span>"}
    </nav>`;
}

function homeView() {
  const d = dict();
  const cards = d.modules
    .map(
      (m) => `
      <a class="module-card" href="#/${m.screens[0].id}">
        <span class="module-card-num">${d.screen.moduleWord} ${m.n}</span>
        <span class="module-card-title">${m.title}</span>
        <span class="module-card-screens">${m.screens.map((s) => s.code).join(" · ")}</span>
      </a>`
    )
    .join("");
  const guide = d.home.guide.map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="home">
      <div class="home-hero">
        <p class="eyebrow">${d.home.eyebrow}</p>
        <h1>${d.home.title}</h1>
        <p class="home-lead">${d.home.lead}</p>
        <a class="btn btn-primary" href="#/m1a">${d.home.startCta}</a>
        <p class="home-hint">${d.home.startHint}</p>
      </div>

      <img class="home-illustration" src="assets/illustrations/home-balance.svg" alt="">

      <section class="home-modules">
        <h2>${d.home.modulesTitle}</h2>
        <p>${d.home.modulesIntro}</p>
        <div class="module-grid">${cards}</div>
      </section>

      <section class="home-guide">
        <h2>${d.home.guideTitle}</h2>
        <ul class="guide-list">${guide}</ul>
      </section>
    </section>`;
}

function creditsView() {
  const d = dict();
  const sections = d.credits.sections
    .map((s) => {
      const body =
        s.items && s.items.length
          ? `<ul class="ref-list">${s.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
          : `<p class="pending-note" data-placeholder>${d.credits.pending}</p>`;
      return `
      <section class="credits-section" id="ref-${s.id}">
        <h2>${s.title}</h2>
        ${body}
      </section>`;
    })
    .join("");

  return `
    <article class="page credits">
      <header class="page-header">
        <p class="eyebrow">${d.credits.eyebrow}</p>
        <h1>${d.credits.title}</h1>
        <p class="page-lead">${d.credits.lead}</p>
      </header>
      ${sections}
      <section class="credits-section">
        <h2>${d.credits.toolsTitle}</h2>
        <p>${d.credits.tools}</p>
      </section>
      ${pagerHtml("credits")}
    </article>`;
}

function placeholderBody(s) {
  return SECTION_KEYS.map(
    (key) => `
      <section class="screen-block placeholder-block" data-placeholder>
        <h2>${s.sections[key]}</h2>
        <p>${s.placeholder}</p>
      </section>`
  ).join("");
}

function contentBody(sc, s) {
  const intro = `
    <div class="screen-intro">
      ${sc.intro.map((p) => `<p>${p}</p>`).join("")}
    </div>`;

  const dimensions = `
    <div class="dimension-grid">
      ${sc.main.dimensions
        .map((dm) => `<div class="dimension"><h3>${dm.name}</h3><p>${dm.text}</p></div>`)
        .join("")}
    </div>`;

  const extra = sc.main.extra ? sc.main.extra.map((p) => `<p>${p}</p>`).join("") : "";
  const main = `
    <section class="screen-block">
      <h2>${s.sections.content}</h2>
      <p>${sc.main.lead}</p>
      ${dimensions}
      ${extra}
      ${sc.main.note ? `<p class="category-note">${sc.main.note}</p>` : ""}
    </section>`;

  const example = `
    <section class="screen-block example-block">
      <h2>${s.sections.example}</h2>
      <p>${sc.example.text}</p>
      ${sc.example.note ? `<p class="example-note">${sc.example.note}</p>` : ""}
    </section>`;

  const visual = `
    <figure class="screen-figure">
      <img src="assets/illustrations/${sc.visual.file}" alt="${sc.visual.alt}">
      <figcaption>${sc.visual.caption}</figcaption>
    </figure>`;

  const interaction = `
    <section class="screen-block screen-interaction">
      <h2>${s.sections.interaction}</h2>
      <div class="interaction" data-interaction="${sc.interaction.type}"></div>
    </section>`;

  const reflection = `
    <section class="screen-block reflection-block">
      <h2>${s.sections.reflection}</h2>
      <p class="reflection-prompt">${sc.reflection.prompt}</p>
    </section>`;

  const support = `
    <section class="support-note">
      <h2>${s.sections.sources}</h2>
      <p>${sc.support.text}</p>
      <ul>${sc.support.refs.map((ref) => `<li>${ref}</li>`).join("")}</ul>
      <p class="support-link"><a href="#/credits">${s.sourcesLink}</a></p>
    </section>`;

  return `${intro}${main}${example}${visual}${interaction}${reflection}${support}`;
}

function screenView(routeId) {
  const d = dict();
  const info = screenInfo(routeId);
  if (!info) return notFoundView();

  const { module, screen } = info;
  const position = FLOW.indexOf(routeId);
  const positionLabel = d.screen.positionLabel.replace("{n}", position);

  const sc = d.screenContent && d.screenContent[routeId];
  const blocks = sc ? contentBody(sc, d.screen) : placeholderBody(d.screen);

  return `
    <article class="page screen" data-screen="${screen.id}">
      <nav class="breadcrumb" aria-label="${d.breadcrumb.label}">
        <a href="#/">${d.breadcrumb.home}</a>
        <span aria-hidden="true">/</span>
        <span>${d.screen.moduleWord} ${module.n}</span>
        <span aria-hidden="true">/</span>
        <span aria-current="page">${d.screen.screenWord} ${screen.code}</span>
      </nav>

      <header class="page-header screen-header">
        <p class="eyebrow">${d.screen.moduleWord} ${module.n} · ${d.screen.screenWord} ${screen.code}</p>
        <h1>${screen.title}</h1>
        <p class="screen-position">${positionLabel}</p>
        <div class="progress" aria-hidden="true"><span style="width:${position * 10}%"></span></div>
        <p class="screen-objective">
          <span class="screen-objective-label">${d.screen.objectiveLabel}</span>
          ${screen.objective}
        </p>
      </header>

      <div class="screen-body">${blocks}</div>

      ${pagerHtml(routeId)}
    </article>`;
}

function notFoundView() {
  const d = dict();
  return `
    <section class="page not-found">
      <h1>${d.notFound.title}</h1>
      <p>${d.notFound.body}</p>
      <a class="btn btn-primary" href="#/">${d.notFound.back}</a>
    </section>`;
}

function updateActiveNav(routeId) {
  document.querySelectorAll("[data-nav]").forEach((link) => link.removeAttribute("aria-current"));
  const navKey = routeId === "home" || routeId === "credits" ? routeId : null;
  if (navKey) {
    const link = document.querySelector(`[data-nav="${navKey}"]`);
    if (link) link.setAttribute("aria-current", "page");
  }
  document.querySelectorAll(".nav-modules-list a").forEach((a) => {
    if (a.getAttribute("href") === `#/${routeId}`) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  const modulesItem = document.querySelector(".nav-item-modules");
  if (modulesItem) modulesItem.classList.toggle("is-active", SCREEN_IDS.includes(routeId));
}

function updateDocTitle(routeId) {
  const d = dict();
  if (routeId === "home") document.title = `${d.brand.name} · ${d.home.title}`;
  else if (routeId === "credits") document.title = `${d.credits.title} · ${d.brand.name}`;
  else {
    const info = screenInfo(routeId);
    document.title = info ? `${info.screen.title} · ${d.brand.name}` : d.brand.name;
  }
}

export function renderCurrent() {
  const routeId = currentRoute();
  if (routeId === "home") app.innerHTML = homeView();
  else if (routeId === "credits") app.innerHTML = creditsView();
  else if (routeId === "not-found") app.innerHTML = notFoundView();
  else app.innerHTML = screenView(routeId);

  window.scrollTo(0, 0);
  const heading = app.querySelector("h1");
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }
  updateActiveNav(routeId);
  updateDocTitle(routeId);
  mountInteraction(routeId);
}

function mountInteraction(routeId) {
  const d = dict();
  const sc = d.screenContent && d.screenContent[routeId];
  if (!sc || !sc.interaction) return;
  const host = app.querySelector(".interaction");
  if (host) initInteraction(sc.interaction.type, host, sc.interaction, getLang());
}

export function buildModulesMenu() {
  const list = document.getElementById("nav-modules-list");
  if (!list) return;
  const d = dict();
  list.innerHTML = d.modules
    .map(
      (m) => `
      <li class="nav-modules-group">
        <span class="nav-modules-heading">${d.screen.moduleWord} ${m.n} · ${m.title}</span>
        <ul>
          ${m.screens
            .map((s) => `<li><a href="#/${s.id}">${s.code} · ${s.title}</a></li>`)
            .join("")}
        </ul>
      </li>`
    )
    .join("");
}

export function initRouter() {
  if (!window.location.hash) {
    history.replaceState(null, "", "#/");
  }
  window.addEventListener("hashchange", renderCurrent);
  renderCurrent();
}
