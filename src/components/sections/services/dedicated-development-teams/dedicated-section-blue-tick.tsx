import Image from "next/image";

export const BLUE_TICK_SRC = "/assets/images/blue-tick.svg" as const;

/** Uppercase label next to blue tick — aligns with Custom Ecommerce Website sections. */
export const BLUE_TICK_LABEL_CLASS =
  "text-[11px] font-semibold uppercase tracking-[0.13em] leading-snug text-[rgba(153,161,175,1)] md:text-xs";

/** Sentence-case line next to tick (e.g. pricing features, card bullets). */
export const BLUE_TICK_BODY_CLASS = "text-[rgba(153,161,175,1)]";

/** Title row in tick + title + description lists. */
export const BLUE_TICK_CARD_TITLE_CLASS =
  "mb-0.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-[rgba(153,161,175,1)] md:text-[13px]";

/** Description row under title in tick + title + description lists. */
export const BLUE_TICK_CARD_DESC_CLASS =
  "text-sm leading-relaxed text-[rgba(153,161,175,1)] md:text-[13px]";

export function BlueTickIcon({ className }: { className?: string }) {
  return (
    <Image
      src={BLUE_TICK_SRC}
      alt=""
      width={22}
      height={22}
      className={`shrink-0 object-contain ${className ?? ""}`}
    />
  );
}
