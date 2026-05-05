export {};

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initBadgeWidget: (options: Record<string, unknown>) => void;
      initInlineWidget: (options: Record<string, unknown>) => void;
    };
  }
}
