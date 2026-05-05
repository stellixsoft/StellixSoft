"use client";

import { useId, useState } from "react";

const DEFAULT_CHAR_THRESHOLD = 280;

type Props = {
  quote: string;
  /** Quotes longer than this show Read more / Show less */
  maxCharsBeforeExpand?: number;
  /** Tailwind line-clamp when collapsed */
  collapsedLines?: 4 | 5 | 6;
  /** Home testimonials: static card */
  variant?: "home" | "about";
};

export function ExpandableTestimonialQuote({
  quote,
  maxCharsBeforeExpand = DEFAULT_CHAR_THRESHOLD,
  collapsedLines = 5,
  variant = "home",
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const isLong = quote.length > maxCharsBeforeExpand;

  const lineClamp =
    collapsedLines === 4
      ? "line-clamp-4"
      : collapsedLines === 6
        ? "line-clamp-6"
        : "line-clamp-5";

  const quoteClasses =
    variant === "about"
      ? "text-[var(--color-neutralGray)] group-hover:text-white italic text-sm md:text-base leading-relaxed transition-colors duration-300"
      : "text-[var(--color-neutralGray)] italic text-sm md:text-base leading-relaxed";

  const buttonClasses =
    variant === "about"
      ? "text-sm font-semibold text-[var(--color-electricBlue-solid)] group-hover:text-white transition-colors self-start rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
      : "text-sm font-semibold text-[var(--color-electricBlue-solid)] self-start rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue-solid)]";

  if (!isLong) {
    return (
      <p className={quoteClasses}>
        &quot;{quote}&quot;
      </p>
    );
  }

  return (
    <div className="flex min-h-0 flex-col gap-2">
      <p
        id={contentId}
        className={`${quoteClasses} ${expanded ? "" : lineClamp}`}
      >
        &quot;{quote}&quot;
      </p>
      <button
        type="button"
        className={buttonClasses}
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
