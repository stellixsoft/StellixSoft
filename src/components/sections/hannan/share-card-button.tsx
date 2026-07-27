"use client";

import { useState } from "react";
import { trackEvent } from "@/src/lib/analytics";

type Props = {
  title: string;
  text: string;
  url: string;
};

export default function ShareCardButton({ title, text, url }: Props) {
  const [status, setStatus] = useState<"idle" | "shared" | "copied" | "error">(
    "idle",
  );

  async function handleShare() {
    try {
      if (
        typeof navigator !== "undefined" &&
        typeof navigator.share === "function"
      ) {
        await navigator.share({ title, text, url });
        setStatus("shared");
        trackEvent("business_card_share", {
          card_slug: "hannan",
          method: "native",
        });
        return;
      }

      if (
        typeof navigator !== "undefined" &&
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === "function"
      ) {
        await navigator.clipboard.writeText(url);
        setStatus("copied");
        trackEvent("business_card_share", {
          card_slug: "hannan",
          method: "clipboard",
        });
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "shared"
      ? "Shared."
      : status === "copied"
        ? "Link copied."
        : status === "error"
          ? "Sharing is not available on this device."
          : "Share or copy the link.";

  return (
    <div className="rounded-2xl border border-black/8 bg-white p-4 shadow-[0_8px_30px_rgba(3,2,19,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-[var(--color-deepSpace)]">
            Share this card
          </h2>
          <p className="mt-1 text-sm leading-6 text-[var(--color-neutralGray)]">
            {message}
          </p>
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[var(--color-electricBlue-solid)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-accentOnLight)] transition-colors hover:bg-[color-mix(in_srgb,var(--color-electricBlue-solid)_8%,white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue-solid)] focus-visible:ring-offset-2"
          aria-label="Share this card"
        >
          Share
        </button>
      </div>
    </div>
  );
}
