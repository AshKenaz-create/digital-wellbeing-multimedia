// Shared browser storage and the interaction registry.
// Each activity renders itself into the container provided by the router.

export const storage = {
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      // Ignore unavailable storage.
    }
  },
};

const handlers = new Map();

export function registerInteraction(type, handler) {
  handlers.set(type, handler);
}

export function initInteraction(type, container, data, lang) {
  const handler = handlers.get(type);
  if (!handler) return false;
  return handler(container, data, lang);
}

function conceptIcon(name) {
  const shapes = {
    balance:
      '<path d="M12 3v18M6 21h12M12 6 5 8M12 6l7 2M5 8l-2 5a3 3 0 0 0 6 0zM19 8l-2 5a3 3 0 0 0 6 0z"/>',
    regulation:
      '<circle cx="12" cy="13" r="7"/><path d="M12 13V9M12 3v2M5 6l1.5 1.5M19 6l-1.5 1.5"/>',
    shield: '<path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    wellbeing: '<path d="M12 20S3.5 15 3.5 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.5 2.5C20.5 15 12 20 12 20z"/>',
  };
  return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name] || ""}</svg>`;
}

function conceptCards(container, data) {
  container.innerHTML = `
    <p class="interaction-intro">${data.instructions}</p>
    <div class="concept-cards">
      ${data.cards
        .map(
          (card, i) => `
        <div class="concept-card">
          <button class="concept-card-toggle" type="button" aria-expanded="false" aria-controls="concept-panel-${i}">
            <span class="concept-card-icon">${conceptIcon(card.icon)}</span>
            <span class="concept-card-name">${card.name}</span>
            <span class="concept-card-chevron" aria-hidden="true"></span>
          </button>
          <div class="concept-card-panel" id="concept-panel-${i}" hidden>
            <p>${card.explanation}</p>
            <p class="concept-card-example"><span>${data.exampleLabel}:</span> ${card.example}</p>
          </div>
        </div>`
        )
        .join("")}
    </div>`;

  container.querySelectorAll(".concept-card-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      btn.setAttribute("aria-label", `${open ? data.expandLabel : data.collapseLabel}: ${btn.querySelector(".concept-card-name").textContent}`);
      panel.hidden = open;
      btn.closest(".concept-card").classList.toggle("is-open", !open);
    });
  });
}

function habitsSelfCheck(container, data) {
  const key = "dw_m1b_habits";
  const total = data.statements.length;
  const saved = Array.isArray(storage.get(key)) ? storage.get(key).filter((n) => n >= 0 && n < total) : [];

  container.innerHTML = `
    <p class="interaction-intro">${data.instructions}</p>
    <form class="selfcheck" novalidate>
      <fieldset>
        <legend class="sr-only">${data.legend}</legend>
        ${data.statements
          .map(
            (text, i) => `
          <label class="selfcheck-item">
            <input type="checkbox" name="habit" value="${i}"${saved.includes(i) ? " checked" : ""}>
            <span>${text}</span>
          </label>`
          )
          .join("")}
      </fieldset>
      <div class="selfcheck-actions">
        <button type="submit" class="btn btn-primary">${data.resultLabel}</button>
        <button type="button" class="btn btn-secondary" data-reset>${data.resetLabel}</button>
      </div>
      <p class="selfcheck-count" aria-live="polite"></p>
      <p class="selfcheck-note">${data.savedNote}</p>
    </form>
    <div class="selfcheck-result" role="status" tabindex="-1" hidden></div>`;

  const form = container.querySelector(".selfcheck");
  const countEl = container.querySelector(".selfcheck-count");
  const resultEl = container.querySelector(".selfcheck-result");

  const selected = () =>
    [...form.querySelectorAll('input[name="habit"]:checked')].map((el) => Number(el.value));

  const updateCount = () => {
    countEl.textContent = data.countLabel
      .replace("{n}", selected().length)
      .replace("{total}", total);
  };

  const band = (count) => {
    if (count <= Math.floor(total / 3)) return "few";
    if (count <= Math.floor((total * 2) / 3)) return "several";
    return "many";
  };

  const showResult = (count) => {
    const result = data.results[band(count)];
    resultEl.innerHTML = `
      <h3>${result.title}</h3>
      <p>${result.body}</p>
      <p class="selfcheck-reflection"><span>${data.reflectionLabel}:</span> ${data.reflectionPrompt}</p>`;
    resultEl.hidden = false;
  };

  form.addEventListener("change", () => {
    updateCount();
    storage.set(key, selected());
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showResult(selected().length);
    resultEl.focus();
  });

  form.querySelector("[data-reset]").addEventListener("click", () => {
    form.querySelectorAll('input[name="habit"]:checked').forEach((el) => {
      el.checked = false;
    });
    storage.remove(key);
    updateCount();
    resultEl.hidden = true;
    resultEl.innerHTML = "";
  });

  updateCount();
  if (saved.length) showResult(saved.length);
}

registerInteraction("conceptCards", conceptCards);
registerInteraction("habitsSelfCheck", habitsSelfCheck);
