export type AnalyticsEventParams = Record<
  string,
  string | number | boolean | null | undefined
>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: AnalyticsEventParams,
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: AnalyticsEventParams,
): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params);
}
