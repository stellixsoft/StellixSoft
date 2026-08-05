"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { trackEvent, type AnalyticsEventParams } from "@/src/lib/analytics";

type Props = ComponentPropsWithoutRef<"a"> & {
  eventName?: string;
  eventParams?: AnalyticsEventParams;
  children: ReactNode;
};

export default function AnalyticsLink({
  eventName,
  eventParams,
  onClick,
  children,
  ...props
}: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        if (eventName) {
          trackEvent(eventName, eventParams);
        }
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
