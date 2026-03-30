"use client";

import { useEffect, useState } from "react";
import {
  CALENDLY_NEXT_SLOT_FALLBACK_LABEL,
} from "@/src/lib/constants";

type ApiResponse = {
  ok?: boolean;
  configured?: boolean;
  iso?: string | null;
};

function formatSlot(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return CALENDLY_NEXT_SLOT_FALLBACK_LABEL;
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

type Props = {
  fallbackLabel?: string;
  className?: string;
};

export function CalendlyNextAvailableSlot({
  fallbackLabel = CALENDLY_NEXT_SLOT_FALLBACK_LABEL,
  className = "",
}: Props) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/calendly/next-slot")
      .then((r) => r.json() as Promise<ApiResponse>)
      .then((data) => {
        if (cancelled) return;
        if (data.iso) setText(formatSlot(data.iso));
        else setText(fallbackLabel);
      })
      .catch(() => {
        if (!cancelled) setText(fallbackLabel);
      });
    return () => {
      cancelled = true;
    };
  }, [fallbackLabel]);

  return (
    <span className={className} suppressHydrationWarning aria-live="polite">
      {text === null ? "…" : text}
    </span>
  );
}
