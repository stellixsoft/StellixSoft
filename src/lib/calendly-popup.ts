import { CALENDLY_URL } from "@/src/lib/constants";

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

function ensureWidgetStyles(): void {
  if (
    document.querySelector(
      'link[href*="calendly.com/assets/external/widget.css"]',
    )
  ) {
    return;
  }
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = WIDGET_CSS;
  document.head.appendChild(l);
}

function ensureWidgetScript(): void {
  if (
    document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')
  ) {
    return;
  }
  const s = document.createElement("script");
  s.src = WIDGET_JS;
  s.async = true;
  document.body.appendChild(s);
}

/**
 * Opens Calendly’s in-page popup. Waits until `window.Calendly` exists (Next.js loads
 * the script asynchronously). Avoids relying on `load` on an already-loaded script.
 */
export function openCalendlyPopup(): void {
  if (typeof window === "undefined") return;

  const tryOpen = (): boolean => {
    if (!window.Calendly?.initPopupWidget) return false;
    try {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return true;
    } catch {
      return false;
    }
  };

  if (tryOpen()) return;

  ensureWidgetStyles();
  ensureWidgetScript();

  let attempts = 0;
  const maxAttempts = 120; // ~6s at 50ms
  const id = window.setInterval(() => {
    attempts += 1;
    if (tryOpen()) {
      window.clearInterval(id);
      return;
    }
    if (attempts >= maxAttempts) {
      window.clearInterval(id);
    }
  }, 50);
}
