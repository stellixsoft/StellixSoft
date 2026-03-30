"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_VIDEO_SRC } from "@/src/lib/media-urls";

type Props = {
  className?: string;
};

/**
 * Defers loading the hero MP4 until idle time so LCP can settle on foreground
 * content. Uses a black backing (no poster) to avoid a visible poster→video swap
 * when the source attaches. Fades in once the first frame is available.
 */
export default function HeroBackgroundVideo({ className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [visible, setVisible] = useState(false);

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
    setVisible(false);
    el.load();
    void el.play().catch(() => {});
  }, [loadVideo]);

  const reveal = () => setVisible(true);

  return (
    <div
      className={`${className ?? ""} bg-black overflow-hidden`.trim()}
      aria-hidden
    >
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        onLoadedData={reveal}
        onPlaying={reveal}
      >
        {loadVideo ? <source src={HERO_VIDEO_SRC} type="video/mp4" /> : null}
      </video>
    </div>
  );
}
