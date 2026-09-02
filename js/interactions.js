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

const ESCAPE_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ESCAPE_MAP[char]);
}

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
  const key = data.storageKey || "dw_m1b_habits";
  const total = data.statements.length;
  const live = Boolean(data.liveResult);
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
        ${live ? "" : `<button type="submit" class="btn btn-primary">${data.resultLabel}</button>`}
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
    countEl.textContent = data.countLabel.replace("{n}", selected().length).replace("{total}", total);
  };

  const band = (count) => {
    if (count === 0 && data.results.none) return "none";
    if (count <= Math.floor(total / 3)) return "few";
    if (count <= Math.floor((total * 2) / 3)) return "several";
    return "many";
  };

  const showResult = (count) => {
    const result = data.results[band(count)] || data.results.few;
    resultEl.innerHTML = `
      <h3>${result.title}</h3>
      <p>${result.body}</p>
      <p class="selfcheck-reflection"><span>${data.reflectionLabel}:</span> ${data.reflectionPrompt}</p>
      ${data.closing ? `<p class="selfcheck-closing">${data.closing}</p>` : ""}`;
    resultEl.hidden = false;
  };

  const refreshResult = () => {
    const count = selected().length;
    if (count === 0 && !data.results.none) {
      resultEl.hidden = true;
      resultEl.innerHTML = "";
      return;
    }
    showResult(count);
  };

  form.addEventListener("change", () => {
    updateCount();
    storage.set(key, selected());
    if (live) refreshResult();
  });

  if (!live) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showResult(selected().length);
      resultEl.focus();
    });
  }

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
  if (live) refreshResult();
  else if (saved.length) showResult(saved.length);
}

function frequencyQuiz(container, data) {
  const key = "dw_m2a_quiz";
  const count = data.questions.length;
  const stored = storage.get(key);
  const saved = Array.isArray(stored) && stored.length === count ? stored : Array(count).fill(null);

  container.innerHTML = `
    <p class="interaction-intro">${data.instructions}</p>
    <form class="freq-quiz" novalidate>
      <ol class="freq-list">
        ${data.questions
          .map(
            (question, i) => `
          <li class="freq-item">
            <fieldset>
              <legend>${question}</legend>
              <div class="freq-options">
                ${data.options
                  .map(
                    (option, j) => `
                  <label class="freq-option">
                    <input type="radio" name="q${i}" value="${j}"${saved[i] === j ? " checked" : ""}>
                    <span>${option}</span>
                  </label>`
                  )
                  .join("")}
              </div>
            </fieldset>
          </li>`
          )
          .join("")}
      </ol>
      <div class="quiz-actions">
        <button type="submit" class="btn btn-primary">${data.resultLabel}</button>
        <button type="button" class="btn btn-secondary" data-reset>${data.resetLabel}</button>
      </div>
      <p class="quiz-progress" aria-live="polite"></p>
      <p class="selfcheck-note">${data.savedNote}</p>
    </form>
    <div class="quiz-result" role="status" tabindex="-1" hidden></div>`;

  const form = container.querySelector(".freq-quiz");
  const progressEl = container.querySelector(".quiz-progress");
  const resultEl = container.querySelector(".quiz-result");

  const answers = () =>
    [...Array(count)].map((_, i) => {
      const picked = form.querySelector(`input[name="q${i}"]:checked`);
      return picked ? Number(picked.value) : null;
    });

  const answeredCount = () => answers().filter((a) => a !== null).length;

  const updateProgress = (message) => {
    progressEl.textContent =
      message || data.progressLabel.replace("{n}", answeredCount()).replace("{total}", count);
  };

  const band = (score) => {
    const max = count * (data.options.length - 1);
    if (score <= max / 3) return "low";
    if (score <= (max * 2) / 3) return "mid";
    return "high";
  };

  const showResult = (score) => {
    const result = data.results[band(score)];
    resultEl.innerHTML = `
      <h3>${result.title}</h3>
      <p>${result.body}</p>
      <div class="quiz-strategies">
        <h4>${data.strategiesTitle}</h4>
        <ul>${data.strategies.map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>
      <p class="quiz-reflection"><span>${data.reflectionLabel}:</span> ${data.reflectionPrompt}</p>`;
    resultEl.hidden = false;
  };

  form.addEventListener("change", () => {
    storage.set(key, answers());
    updateProgress();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const current = answers();
    if (current.includes(null)) {
      updateProgress(data.incompleteLabel);
      return;
    }
    showResult(current.reduce((sum, value) => sum + value, 0));
    resultEl.focus();
  });

  form.querySelector("[data-reset]").addEventListener("click", () => {
    form.querySelectorAll("input[type=radio]:checked").forEach((el) => {
      el.checked = false;
    });
    storage.remove(key);
    resultEl.hidden = true;
    resultEl.innerHTML = "";
    updateProgress();
  });

  updateProgress();
  if (!saved.includes(null)) showResult(saved.reduce((sum, value) => sum + value, 0));
}

function scenarios(container, data) {
  const key = data.storageKey || "dw_m2b_scenarios";
  const count = data.scenarios.length;
  const scored = data.scenarios.some((s) => s.options.some((o) => o.recommended !== undefined));
  const stored = storage.get(key);
  const saved = Array.isArray(stored) && stored.length === count ? stored : Array(count).fill(null);

  container.innerHTML = `
    <p class="interaction-intro">${data.instructions}</p>
    <div class="scenario-list">
      ${data.scenarios
        .map(
          (scenario, i) => `
        <div class="scenario" data-scenario="${i}">
          <fieldset>
            <legend><span class="scenario-num">${i + 1}</span> ${scenario.situation}</legend>
            <div class="scenario-options">
              ${scenario.options
                .map(
                  (option, j) => `
                <label class="scenario-option">
                  <input type="radio" name="scenario-${i}" value="${j}"${saved[i] === j ? " checked" : ""}>
                  <span>${option.text}</span>
                </label>`
                )
                .join("")}
            </div>
          </fieldset>
          <div class="scenario-feedback" role="status" hidden></div>
        </div>`
        )
        .join("")}
    </div>
    <div class="scenario-actions">
      <button type="button" class="btn btn-secondary" data-reset>${data.resetLabel}</button>
    </div>
    <p class="scenario-progress" aria-live="polite"></p>
    <p class="selfcheck-note">${data.savedNote}</p>
    <div class="scenario-summary" role="status" tabindex="-1" hidden></div>`;

  const blocks = [...container.querySelectorAll(".scenario")];
  const progressEl = container.querySelector(".scenario-progress");
  const summaryEl = container.querySelector(".scenario-summary");

  const answers = () =>
    blocks.map((block) => {
      const picked = block.querySelector("input:checked");
      return picked ? Number(picked.value) : null;
    });

  const showFeedback = (i, choice) => {
    const scenario = data.scenarios[i];
    const feedbackEl = blocks[i].querySelector(".scenario-feedback");
    feedbackEl.innerHTML =
      `<p>${scenario.options[choice].feedback}</p>` +
      (scenario.reflection
        ? `<p class="scenario-item-reflection"><span>${data.reflectionLabel}:</span> ${scenario.reflection}</p>`
        : "");
    feedbackEl.hidden = false;
  };

  const refresh = () => {
    const current = answers();
    const done = current.filter((a) => a !== null).length;
    progressEl.textContent = data.progressLabel.replace("{n}", done).replace("{total}", count);
    if (done === count) {
      let scoreLine = "";
      if (scored && data.scoreLabel) {
        const recommended = current.reduce(
          (n, choice, i) => n + (data.scenarios[i].options[choice].recommended ? 1 : 0),
          0
        );
        scoreLine = `<p class="scenario-score">${data.scoreLabel.replace("{n}", recommended).replace("{total}", count)}</p>`;
      }
      summaryEl.innerHTML = `
        <h3>${data.summaryTitle}</h3>
        ${scoreLine}
        <p>${data.summary}</p>
        <p class="scenario-reflection"><span>${data.reflectionLabel}:</span> ${data.reflectionPrompt}</p>`;
      summaryEl.hidden = false;
    } else {
      summaryEl.hidden = true;
      summaryEl.innerHTML = "";
    }
  };

  blocks.forEach((block, i) => {
    block.addEventListener("change", (event) => {
      const choice = Number(event.target.value);
      showFeedback(i, choice);
      storage.set(key, answers());
      refresh();
    });
  });

  container.querySelector("[data-reset]").addEventListener("click", () => {
    container.querySelectorAll("input[type=radio]:checked").forEach((el) => {
      el.checked = false;
    });
    container.querySelectorAll(".scenario-feedback").forEach((el) => {
      el.hidden = true;
      el.textContent = "";
    });
    storage.remove(key);
    refresh();
  });

  saved.forEach((choice, i) => {
    if (choice !== null) showFeedback(i, choice);
  });
  refresh();
}

function routineSlider(container, data) {
  const key = "dw_m3a_slider";
  const count = data.positions.length;
  const stored = Number(storage.get(key));
  const start = Number.isInteger(stored) && stored >= 0 && stored < count ? stored : 0;

  container.innerHTML = `
    <p class="interaction-intro">${data.instructions}</p>
    <div class="routine-slider">
      <label class="routine-slider-label" for="routine-range">${data.sliderLabel}</label>
      <input type="range" id="routine-range" min="0" max="${count - 1}" step="1" value="${start}" aria-describedby="routine-panel">
      <div class="routine-ticks" aria-hidden="true">
        ${data.positions.map((_, i) => `<span>${i + 1}</span>`).join("")}
      </div>
      <div class="routine-panel" id="routine-panel" role="status" tabindex="-1"></div>
      <div class="routine-actions">
        <button type="button" class="btn btn-secondary" data-reset>${data.resetLabel}</button>
      </div>
      <p class="selfcheck-note">${data.savedNote}</p>
      <p class="routine-note">${data.note}</p>
    </div>`;

  const range = container.querySelector("#routine-range");
  const panel = container.querySelector("#routine-panel");

  const render = (index) => {
    const position = data.positions[index];
    panel.innerHTML = `
      <h3>${position.name}</h3>
      <p>${position.description}</p>
      <p class="pair-line"><span>${data.noticeLabel}:</span> ${position.notice}</p>
      <p class="pair-line"><span>${data.ideaLabel}:</span> ${position.idea}</p>
      <p class="pair-line"><span>${data.reflectionLabel}:</span> ${position.reflection}</p>`;
  };

  range.addEventListener("input", () => {
    const index = Number(range.value);
    render(index);
    storage.set(key, index);
  });

  container.querySelector("[data-reset]").addEventListener("click", () => {
    range.value = 0;
    render(0);
    storage.remove(key);
  });

  render(start);
}

function breakSelector(container, data) {
  const key = "dw_m3b_selector";
  const count = data.options.length;
  const stored = Number(storage.get(key));
  const savedIndex = Number.isInteger(stored) && stored >= 0 && stored < count ? stored : null;

  container.innerHTML = `
    <p class="interaction-intro">${data.instructions}</p>
    <form class="break-selector">
      <fieldset>
        <legend>${data.question}</legend>
        <div class="scenario-options break-options">
          ${data.options
            .map(
              (option, i) => `
            <label class="scenario-option">
              <input type="radio" name="notice" value="${i}"${savedIndex === i ? " checked" : ""}>
              <span>${option.label}</span>
            </label>`
            )
            .join("")}
        </div>
      </fieldset>
      <div class="break-actions">
        <button type="button" class="btn btn-secondary" data-reset>${data.resetLabel}</button>
      </div>
      <p class="selfcheck-note">${data.savedNote}</p>
    </form>
    <div class="break-result" role="status" tabindex="-1" hidden></div>`;

  const form = container.querySelector(".break-selector");
  const resultEl = container.querySelector(".break-result");

  const show = (index) => {
    const rec = data.options[index].recommendation;
    resultEl.innerHTML = `
      <h3>${rec.title}</h3>
      <p class="pair-line"><span>${data.whatLabel}:</span> ${rec.what}</p>
      <p class="pair-line"><span>${data.whyLabel}:</span> ${rec.why}</p>
      <p class="break-rationale">${rec.rationale}</p>
      <p class="pair-line"><span>${data.reflectionLabel}:</span> ${rec.reflection}</p>`;
    resultEl.hidden = false;
  };

  form.addEventListener("change", (event) => {
    const index = Number(event.target.value);
    show(index);
    storage.set(key, index);
  });

  form.querySelector("[data-reset]").addEventListener("click", () => {
    form.querySelectorAll("input:checked").forEach((el) => {
      el.checked = false;
    });
    storage.remove(key);
    resultEl.hidden = true;
    resultEl.innerHTML = "";
  });

  if (savedIndex !== null) show(savedIndex);
}

function taskPlanner(container, data) {
  const key = "dw_m5a_planner";
  const LEVELS = ["high", "medium", "low"];
  let tasks = (storage.get(key) || []).filter(
    (task) => task && typeof task.name === "string" && LEVELS.includes(task.priority)
  );

  container.innerHTML = `
    <p class="interaction-intro">${data.instructions}</p>
    <form class="planner-form">
      <div class="planner-field">
        <label for="planner-name">${data.nameLabel}</label>
        <input type="text" id="planner-name" maxlength="80" autocomplete="off" required>
      </div>
      <div class="planner-field">
        <label for="planner-priority">${data.priorityLabel}</label>
        <select id="planner-priority">
          <option value="high">${data.priorities.high}</option>
          <option value="medium" selected>${data.priorities.medium}</option>
          <option value="low">${data.priorities.low}</option>
        </select>
      </div>
      <div class="planner-field">
        <label for="planner-time">${data.timeLabel}</label>
        <input type="text" id="planner-time" maxlength="40" autocomplete="off" placeholder="${data.timePlaceholder}">
      </div>
      <button type="submit" class="btn btn-primary">${data.addLabel}</button>
    </form>
    <div class="planner-view" aria-live="polite"></div>
    <div class="planner-actions"></div>
    <p class="selfcheck-note">${data.savedNote}</p>`;

  const form = container.querySelector(".planner-form");
  const nameInput = container.querySelector("#planner-name");
  const priorityInput = container.querySelector("#planner-priority");
  const timeInput = container.querySelector("#planner-time");
  const view = container.querySelector(".planner-view");
  const actionsEl = container.querySelector(".planner-actions");

  const save = () => storage.set(key, tasks);

  const orderedTasks = () =>
    tasks
      .map((task, index) => ({ task, index }))
      .sort(
        (a, b) =>
          LEVELS.indexOf(a.task.priority) - LEVELS.indexOf(b.task.priority) || a.index - b.index
      );

  const feedback = () => {
    if (tasks.length === 1) return data.feedback.one;
    const high = tasks.filter((task) => task.priority === "high").length;
    if (high >= 3) return data.feedback.manyHigh;
    return data.feedback.several;
  };

  const render = () => {
    if (tasks.length === 0) {
      view.innerHTML = `<p class="planner-empty">${data.emptyLabel}</p>`;
      actionsEl.innerHTML = "";
      return;
    }
    const rows = orderedTasks()
      .map(
        ({ task, index }) => `
        <li class="planner-task priority-${task.priority}">
          <span class="planner-badge">${data.priorities[task.priority]}</span>
          <span class="planner-name">${escapeHtml(task.name)}</span>
          ${task.time ? `<span class="planner-time">${escapeHtml(task.time)}</span>` : ""}
          <span class="planner-row-actions">
            <button type="button" data-edit="${index}">${data.editLabel}</button>
            <button type="button" data-remove="${index}">${data.removeLabel}</button>
          </span>
        </li>`
      )
      .join("");
    view.innerHTML = `
      <p class="planner-note">${data.orderNote}</p>
      <ol class="planner-list">${rows}</ol>
      <div class="planner-feedback">${feedback()}</div>`;
    actionsEl.innerHTML = `<button type="button" class="btn btn-secondary" data-reset>${data.resetLabel}</button>`;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return;
    tasks.push({ name, priority: priorityInput.value, time: timeInput.value.trim() });
    save();
    form.reset();
    priorityInput.value = "medium";
    render();
    nameInput.focus();
  });

  container.addEventListener("click", (event) => {
    const editBtn = event.target.closest("[data-edit]");
    const removeBtn = event.target.closest("[data-remove]");
    const resetBtn = event.target.closest("[data-reset]");
    if (editBtn) {
      const index = Number(editBtn.dataset.edit);
      const task = tasks[index];
      nameInput.value = task.name;
      priorityInput.value = task.priority;
      timeInput.value = task.time || "";
      tasks.splice(index, 1);
      save();
      render();
      nameInput.focus();
    } else if (removeBtn) {
      tasks.splice(Number(removeBtn.dataset.remove), 1);
      save();
      render();
    } else if (resetBtn) {
      tasks = [];
      storage.remove(key);
      render();
    }
  });

  render();
}

registerInteraction("conceptCards", conceptCards);
registerInteraction("habitsSelfCheck", habitsSelfCheck);
registerInteraction("frequencyQuiz", frequencyQuiz);
registerInteraction("scenarios", scenarios);
registerInteraction("routineSlider", routineSlider);
registerInteraction("breakSelector", breakSelector);
registerInteraction("taskPlanner", taskPlanner);
