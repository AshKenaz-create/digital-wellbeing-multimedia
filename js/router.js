import { dict, getLang } from "./language.js";
import { initInteraction } from "./interactions.js";

const app = document.getElementById("app");

const SCREEN_IDS = ["m1a", "m1b", "m2a", "m2b", "m3a", "m3b", "m4a", "m4b", "m5a", "m5b"];
const FLOW = ["home", ...SCREEN_IDS, "credits"];

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
    .map(
      (s) => `
      <section class="credits-section" id="ref-${s.id}">
        <h2>${s.title}</h2>
        ${s.intro ? `<p>${s.intro}</p>` : ""}
        <ul class="ref-list">${s.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>`
    )
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

function visualIcon(name) {
  const shapes = {
    notification:
      '<path d="M12 3a5 5 0 0 0-5 5v3.2c0 .8-.3 1.6-.9 2.2L4 15.5h16l-2.1-2.1a3 3 0 0 1-.9-2.2V8a5 5 0 0 0-5-5z"/><path d="M9.5 18a2.5 2.5 0 0 0 5 0"/>',
    check: '<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 7h6M10 17h4"/>',
    distraction:
      '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
    return: '<path d="M4 12a8 8 0 1 1 3 6.3"/><path d="M4 17v-5h5"/>',
    balance:
      '<path d="M12 3v18M6 21h12M12 6 5 8M12 6l7 2M5 8l-2 5a3 3 0 0 0 6 0zM19 8l-2 5a3 3 0 0 0 6 0z"/>',
    study: '<path d="M4 5.5C6 4.5 9 4 12 5.5c3-1.5 6-1 8-.5v13c-2-.5-5-1-8 .5-3-1.5-6-1-8-.5z"/><path d="M12 5.5v13"/>',
    rest: '<path d="M20 13.5A8 8 0 1 1 10.5 4a6.3 6.3 0 0 0 9.5 9.5z"/>',
    relationships:
      '<circle cx="8.5" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.4"/><path d="M3.5 19c.5-3 2.5-4.8 5-4.8s4.5 1.8 5 4.8"/><path d="M14.2 14.8c2.1.2 3.8 1.8 4.3 4.2"/>',
    technology: '<rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M9 19.5h6M12 15v4.5"/>',
    visualBreak:
      '<path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/>',
    movement: '<circle cx="14" cy="4.5" r="1.7"/><path d="M8 20l2.5-5.5-1-3.5 3.5-3 2 2.5 3 1M9.5 11l-4 1.5M12.5 14.5l3 1.5 1.5 4"/>',
    mentalReset:
      '<path d="M9 4a4.5 4.5 0 0 0-3.2 7.6C6.5 12.4 7 13 7 14v1.5h10V14c0-1 .5-1.6 1.2-2.4A4.5 4.5 0 0 0 15 4a4 4 0 0 0-3 1.3A4 4 0 0 0 9 4z"/><path d="M9.5 19h5M10.2 21.5h3.6"/>',
    environment: '<path d="M4 11 12 4l8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
    passphrase: '<circle cx="12" cy="9.5" r="4"/><path d="M12 13.5V19M9.5 16h5M9.5 18h5"/>',
    factor:
      '<path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    link: '<path d="M9 15l6-6"/><path d="M8.5 12 6.6 13.9a3 3 0 0 0 4.2 4.2L13 16"/><path d="M15.5 12l1.9-1.9a3 3 0 0 0-4.2-4.2L11 8"/>',
    privacy: '<rect x="6" y="10.5" width="12" height="9" rx="1.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',
    priorityHigh: '<circle cx="12" cy="12" r="7" fill="currentColor" stroke="none"/>',
    priorityMedium: '<circle cx="12" cy="12" r="7"/><path d="M12 5v14" stroke-width="4"/>',
    priorityLow: '<circle cx="12" cy="12" r="7"/>',
    class: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
    communication: '<path d="M4 5h16v10H8l-4 3z"/><path d="M8 9h8M8 12h5"/>',
    leisure:
      '<circle cx="12" cy="12" r="8"/><path d="M9 10h.01M15 10h.01"/><path d="M8 15c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5"/>',
    windDown: '<path d="M6 8l6 6 6-6"/><path d="M6 14l6 6 6-6" opacity="0.5"/>',
    prepareSleep: '<rect x="5" y="4" width="14" height="16" rx="2"/><path d="M9 9h6M9 13h6M9 17h3"/>',
    task: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9.5 12h5M9.5 15h5"/>',
    postpone: '<circle cx="12" cy="13" r="7"/><path d="M12 9v4l3 2"/><path d="M9 3h6"/>',
    continue: '<path d="M9 6l7 6-7 6z"/>',
    shift: '<path d="M4 12h16"/><path d="M15 7l5 5-5 5"/><path d="M9 7L4 12l5 5"/>',
    reflect: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2 1.5-2 3.5"/><path d="M12 17.5h.01"/>',
    inform: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.5h.01"/>',
    post: '<path d="M12 15V4M8 8l4-4 4 4"/><path d="M5 15v4h14v-4"/>',
    focus: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',
    organize: '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
  };
  return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name] || ""}</svg>`;
}

function stepsVisual(vs) {
  const numbered = vs.type === "sequence";
  const steps = vs.steps
    .map(
      (step, i) => `
      <li class="visual-step">
        ${numbered ? `<span class="visual-step-num" aria-hidden="true">${i + 1}</span>` : ""}
        <span class="visual-step-icon">${visualIcon(step.icon)}</span>
        <p class="visual-step-label">${step.label}</p>
      </li>`
    )
    .join("");
  const loop = vs.file
    ? `<img class="visual-steps-loop" src="assets/illustrations/${vs.file}" alt="${vs.alt}">`
    : "";
  const closing = vs.type === "cycle" && !!vs.centerLabel;
  const message = vs.centerLabel ? `<p class="visual-pill">${vs.centerLabel}</p>` : "";
  const variantClass = numbered
    ? " visual-steps-numbered"
    : vs.type === "timeline"
      ? " visual-steps-timeline"
      : closing
        ? " visual-steps-closing"
        : "";

  return `
    <figure class="visual-steps${variantClass}">
      ${message}
      <ol class="visual-steps-list">${steps}</ol>
      ${loop}
      <figcaption>${vs.caption}</figcaption>
    </figure>`;
}

function flowVisual(vs) {
  const node = (step) => `
      <li class="visual-step">
        <span class="visual-step-icon">${visualIcon(step.icon)}</span>
        <p class="visual-step-label">${step.label}</p>
      </li>`;

  const lead = vs.lead.map(node).join("");
  const branches = vs.branches
    .map(
      (branch) => `
      <div class="visual-flow-branch">
        <ol class="visual-flow-branch-steps">${branch.steps.map(node).join("")}</ol>
      </div>`
    )
    .join("");
  const followUp = vs.followUp ? `<p class="visual-pill">${vs.followUp}</p>` : "";

  return `
    <figure class="visual-flow">
      <ol class="visual-flow-lead">${lead}</ol>
      <div class="visual-flow-branches">${branches}</div>
      ${followUp}
      <figcaption>${vs.caption}</figcaption>
    </figure>`;
}

function mapVisual(vs) {
  const nodes = vs.nodes
    .map(
      (node) => `
      <li class="visual-map-node">
        <span class="visual-step-icon">${visualIcon(node.icon)}</span>
        <p class="visual-step-label">${node.label}</p>
      </li>`
    )
    .join("");

  return `
    <figure class="visual-map">
      <div class="visual-map-center">
        <span class="visual-step-icon">${visualIcon(vs.center.icon)}</span>
        <p class="visual-map-center-label">${vs.center.label}</p>
      </div>
      <ul class="visual-map-nodes">${nodes}</ul>
      <figcaption>${vs.caption}</figcaption>
    </figure>`;
}

function gridVisual(vs) {
  const items = vs.items
    .map(
      (item) => `
      <li class="visual-grid-item">
        <span class="visual-step-icon">${visualIcon(item.icon)}</span>
        <p class="visual-step-label">${item.label}</p>
      </li>`
    )
    .join("");

  return `
    <figure class="visual-grid">
      <ul class="visual-grid-items">${items}</ul>
      <figcaption>${vs.caption}</figcaption>
    </figure>`;
}

function compareVisual(vs) {
  const scatter = Array.from({ length: vs.scatterCount })
    .map(() => `<span class="scatter-chip"></span>`)
    .join("");

  const columns = vs.columns
    .map(
      (col) => `
      <div class="priority-col priority-${col.tier}">
        <p class="priority-col-label">
          <span class="priority-dot">${visualIcon(`priority${col.tier[0].toUpperCase()}${col.tier.slice(1)}`)}</span>
          ${col.label}
        </p>
        ${Array.from({ length: col.count }).map(() => `<span class="scatter-chip"></span>`).join("")}
      </div>`
    )
    .join("");

  return `
    <figure class="visual-compare">
      <div class="visual-compare-panels">
        <div class="visual-compare-panel">
          <h3 class="visual-compare-heading">${vs.beforeLabel}</h3>
          <div class="visual-compare-scatter" aria-hidden="true">${scatter}</div>
        </div>
        <div class="visual-compare-panel">
          <h3 class="visual-compare-heading">${vs.afterLabel}</h3>
          <div class="visual-compare-columns">${columns}</div>
        </div>
      </div>
      <figcaption>${vs.caption}</figcaption>
    </figure>`;
}

const VISUAL_SUMMARY_RENDERERS = {
  cycle: stepsVisual,
  sequence: stepsVisual,
  timeline: stepsVisual,
  map: mapVisual,
  grid: gridVisual,
  compare: compareVisual,
  flow: flowVisual,
};

function visualSummaryHtml(sc, s) {
  if (!sc.visualSummary) return "";
  const vs = sc.visualSummary;
  const render = VISUAL_SUMMARY_RENDERERS[vs.type] || stepsVisual;

  return `
    <section class="screen-block visual-summary-block">
      <h2>${s.sections.visual}</h2>
      ${render(vs)}
    </section>`;
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

  const visualSummary = visualSummaryHtml(sc, s);

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

  return `${intro}${main}${visualSummary}${example}${visual}${interaction}${reflection}${support}`;
}

function screenView(routeId) {
  const d = dict();
  const info = screenInfo(routeId);
  if (!info) return notFoundView();

  const { module, screen } = info;
  const position = FLOW.indexOf(routeId);
  const positionLabel = d.screen.positionLabel.replace("{n}", position);

  const sc = d.screenContent && d.screenContent[routeId];
  if (!sc) return notFoundView();
  const blocks = contentBody(sc, d.screen);

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
