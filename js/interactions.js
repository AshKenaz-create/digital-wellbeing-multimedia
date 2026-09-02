// Shared browser storage and the interaction registry.
// Individual activities are registered from their module files in later stages.

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
