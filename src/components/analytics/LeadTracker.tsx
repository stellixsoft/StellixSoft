"use client";

import { useEffect } from "react";
import { trackEvent } from "@/src/lib/analytics";

/**
 * Site-wide lead signals for GA4: contact links, CTA clicks, and Calendly bookings.
 * One delegated listener covers every page, so individual CTAs need no wiring.
 */
export default function LeadTracker() {
  useEffect(() => {
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
