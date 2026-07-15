"use client";

import { useEffect, useRef, useState } from "react";

type ParsedStat = {
  target: number | null;
  prefix: string;
  suffix: string;
  useCommas: boolean;
};

function parseStatValue(value: string): ParsedStat {
  const match = value.match(/^(.*?)([\d,]+)(.*)$/);
  if (!match) {
    return { target: null, prefix: "", suffix: "", useCommas: false };
  }
  const [, prefix, numStr, suffix] = match;
  return {
    target: Number.parseInt(numStr.replace(/,/g, ""), 10),
    prefix,
    suffix,
    useCommas: numStr.includes(","),
  };
}

function formatNumber(n: number, useCommas: boolean) {
  const rounded = Math.round(n);
  return useCommas ? rounded.toLocaleString("en-US") : String(rounded);
}

type Props = {
  value: string;
  className?: string;
  durationMs?: number;
};

export default function CaseStudyStatCounter({
  value,
  className,
  durationMs = 1400,
}: Props) {
  const parsed = parseStatValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() =>
    parsed.target === null ? value : `${parsed.prefix}0${parsed.suffix}`,
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (parsed.target === null) {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      if (prefersReduced) {
        setDisplay(
          `${parsed.prefix}${formatNumber(parsed.target!, parsed.useCommas)}${parsed.suffix}`,
        );
        return;
      }

      const start = performance.now();
      const target = parsed.target!;

      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        setDisplay(
          `${parsed.prefix}${formatNumber(current, parsed.useCommas)}${parsed.suffix}`,
        );
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, parsed.target, parsed.prefix, parsed.suffix, parsed.useCommas, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
