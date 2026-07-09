"use client";

import { useState } from "react";
import SchedulingModal from "./SchedulingModal";

type Props = {
  eventSlug: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ScheduleMeetingButton({
  eventSlug,
  label = "Schedule Meeting",
  children,
  className,
  onClick,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onClick?.();
          setOpen(true);
        }}
        className={
          className ??
          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        }
        style={
          className
            ? undefined
            : { backgroundColor: "var(--color-electricBlue-solid)" }
        }
      >
        {children ?? label}
      </button>
      <SchedulingModal
        eventSlug={eventSlug}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
