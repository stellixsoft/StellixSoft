"use client";

import type { CSSProperties, ReactNode } from "react";
import { openCalendlyPopup } from "@/src/lib/calendly-popup";

type Props = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Runs before opening the Calendly popup (e.g. close mobile menu). */
  onClick?: () => void;
};

export default function CalendlyScheduleButton({
  className,
  style,
  children,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openCalendlyPopup();
      }}
      className={`border-0 font-inherit ${className ?? ""}`.trim()}
      style={style}
    >
      {children}
    </button>
  );
}
