"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_VIDEO_POSTER, HERO_VIDEO_SRC } from "@/src/lib/media-urls";

type Props = {
  className?: string;
};

/**
 * Defers loading the hero MP4 until idle time so LCP can settle on the poster
 * and first-paint content. Visual quality unchanged once the video starts.
 */
export default function HeroBackgroundVideo({ className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const start = () => setLoadVideo(true);
    if (typeof window !== "undefined") {
      const ric = window.requestIdleCallback;
      if (typeof ric === "function") {
        const id = ric.call(window, start, { timeout: 2200 });
        return () => window.cancelIdleCallback(id);
      }
    }
    const t = setTimeout(start, 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!loadVideo || !el) return;
    el.load();
    void el.play().catch(() => {});
  }, [loadVideo]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      poster={HERO_VIDEO_POSTER}
      aria-hidden
    >
      {loadVideo ? <source src={HERO_VIDEO_SRC} type="video/mp4" /> : null}
    </video>
  );
}
