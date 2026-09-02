import { content } from "./content.js";

const STORAGE_KEY = "dw_lang";
const SUPPORTED = ["es", "en"];
const DEFAULT_LANG = "es";

let currentLang = DEFAULT_LANG;
const listeners = new Set();

function readStoredLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Persistence is optional; the app keeps working without it.
  }
}

export function getLang() {
  return currentLang;
}

export function dict() {
  return content[currentLang];
}

export function t(path) {
  const value = path
    .split(".")
    .reduce((obj, key) => (obj == null ? undefined : obj[key]), content[currentLang]);
  return typeof value === "string" ? value : path;
}

export function onLangChange(callback) {
  listeners.add(callback);
}

export function applyStaticText(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  root.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
  });
}

function updateLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
    btn.setAttribute("aria-label", t(`langSwitch.${btn.dataset.lang}`));
  });
}

export function setLang(lang) {
  if (!SUPPORTED.includes(lang) || lang === currentLang) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  storeLang(lang);
  applyStaticText();
  updateLangButtons();
  listeners.forEach((cb) => cb(lang));
}

export function initLanguage() {
  const stored = readStoredLang();
  currentLang = SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
  document.documentElement.lang = currentLang;
  applyStaticText();
  updateLangButtons();
}
