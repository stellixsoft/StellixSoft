"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/assets/videos/case-study-bg-image.mp4";

type Props = {
  className?: string;
};

/**
 * Seamless looping Outcomes background via dual-video crossfade.
 */
export default function CaseStudyOutcomesBgVideo({ className }: Props) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"a" | "b">("a");
  const swappingRef = useRef(false);
  const [active, setActive] = useState<"a" | "b">("a");

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    a.src = VIDEO_SRC;
    b.src = VIDEO_SRC;
    a.load();
    b.load();

    const playSafe = (el: HTMLVideoElement) => {
      void el.play().catch(() => {});
    };

    playSafe(a);

    const swap = () => {
      if (swappingRef.current) return;
      const currentKey = activeRef.current;
      const nextKey = currentKey === "a" ? "b" : "a";
      const current = currentKey === "a" ? a : b;
      const next = nextKey === "a" ? a : b;

      if (!current.duration || !Number.isFinite(current.duration)) return;
      if (current.currentTime < current.duration - 0.4) return;

      swappingRef.current = true;
      next.currentTime = 0;
      playSafe(next);
      activeRef.current = nextKey;
      setActive(nextKey);

      window.setTimeout(() => {
        current.pause();
        current.currentTime = 0;
        swappingRef.current = false;
      }, 320);
    };

    const onATime = () => {
      if (activeRef.current === "a") swap();
    };
    const onBTime = () => {
      if (activeRef.current === "b") swap();
    };

    const keepPlaying = () => {
      const current = activeRef.current === "a" ? a : b;
      if (current.paused) playSafe(current);
    };

    a.addEventListener("timeupdate", onATime);
    b.addEventListener("timeupdate", onBTime);
    document.addEventListener("visibilitychange", keepPlaying);
    window.addEventListener("focus", keepPlaying);

    return () => {
      a.removeEventListener("timeupdate", onATime);
      b.removeEventListener("timeupdate", onBTime);
      document.removeEventListener("visibilitychange", keepPlaying);
      window.removeEventListener("focus", keepPlaying);
    };
  }, []);

  const videoClass = (which: "a" | "b") =>
    `absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-linear ${
      active === which ? "opacity-100" : "opacity-0"
    }`;

  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-[var(--color-deepSpace)] ${className ?? ""}`.trim()}
      aria-hidden
    >
      <video
        ref={aRef}
        className={videoClass("a")}
        muted
        playsInline
        preload="auto"
      />
      <video
        ref={bRef}
        className={videoClass("b")}
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
