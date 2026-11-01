"use client";

import { useEffect } from "react";
import { trackEvent } from "@/src/lib/analytics";

/**
 * Site-wide lead signals for GA4: contact links, CTA clicks, and Calendly bookings.
 * One delegated listener covers every page, so individual CTAs need no wiring.
 */
/** Referrer hosts and utm_source values that mean the visit came from an AI assistant. */
const AI_SOURCES: Record<string, string> = {
  "chatgpt.com": "chatgpt",
  "chat.openai.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "gemini.google.com": "gemini",
  "bard.google.com": "gemini",
  "claude.ai": "claude",
  "copilot.microsoft.com": "copilot",
  "edgeservices.bing.com": "copilot",
  "chat.deepseek.com": "deepseek",
  "you.com": "you",
  "meta.ai": "meta_ai",
  "grok.com": "grok",
  "chat.mistral.ai": "mistral",
};

function detectAiSource(): string | null {
  const utm = new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase();
  let referrerHost = "";
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname : "";
  } catch {
    /* Malformed referrer: ignore. */
  }
  for (const [host, name] of Object.entries(AI_SOURCES)) {
    if (utm === host || utm === name || referrerHost === host || referrerHost.endsWith(`.${host}`)) {
      return name;
    }
  }
  return null;
}

/** The AI assistant that started this session, if any, for attributing leads. */
export function readAiSource(): string | undefined {
  try {
    return sessionStorage.getItem("stellix-ai-referral") ?? undefined;
  } catch {
    return undefined;
  }
}

export default function LeadTracker() {
  useEffect(() => {
    // Once per session: tag visits from AI assistants so leads can be tied back to them.
    const aiSource = detectAiSource();
    if (aiSource) {
      let seen = false;
      try {
        seen = sessionStorage.getItem("stellix-ai-referral") === aiSource;
        sessionStorage.setItem("stellix-ai-referral", aiSource);
      } catch {
        /* Storage is optional. */
      }
      if (!seen) {
        trackEvent("ai_referral", {
          ai_source: aiSource,
          landing_page: window.location.pathname,
        });
      }
    }

    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest("a, button");
      if (!link) return;

      const label = (link.textContent ?? "").trim().slice(0, 80);
      const page = window.location.pathname;
      const href = link instanceof HTMLAnchorElement ? link.getAttribute("href") ?? "" : "";

      if (href.startsWith("mailto:")) {
        trackEvent("contact_email_click", { page, label });
      } else if (href.startsWith("tel:")) {
        trackEvent("contact_phone_click", { page, label });
      } else if (href.includes("calendly.com")) {
        trackEvent("calendly_open", { page, label });
      } else if (/^(https:\/\/stellixsoft\.com)?\/contact(\/|\?|#|$)/.test(href)) {
        trackEvent("cta_contact_click", { page, label });
      }
    }

    function onMessage(event: MessageEvent) {
      if (!event.origin.endsWith("calendly.com")) return;
      const data = event.data as { event?: string } | null;
      if (data?.event === "calendly.event_scheduled") {
        trackEvent("generate_lead", {
          method: "calendly",
          page: window.location.pathname,
          ai_source: readAiSource(),
        });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return null;
}
