"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_POSTER_SRC, HERO_VIDEO_SRC } from "@/src/lib/media-urls";

type Props = {
  className?: string;
};

/**
 * Seamless looping hero background: two muted videos crossfade at the loop
 * point so there is no visible stop / restart hitch.
 *
 * The 8 MB video only loads on desktop-width screens without reduced motion or
 * data saver. Everyone else (and desktop until the video plays) sees a ~23 KB
 * still frame, which keeps mobile pages light for Core Web Vitals.
 */
function shouldLoadVideo(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  if (!window.matchMedia("(min-width: 768px)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return !connection?.saveData;
}

export default function HeroBackgroundVideo({ className }: Props) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"a" | "b">("a");
  const swappingRef = useRef(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<"a" | "b">("a");

  useEffect(() => {
    if (!shouldLoadVideo()) return;
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
    if (!loadVideo) return;

    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    // Native loop is the fallback if the partner copy isn't ready at the seam.
    a.loop = true;
    b.loop = true;
    a.src = HERO_VIDEO_SRC;
    a.load();
    // The crossfade partner only needs the file once the first copy can play
    // through, so the two elements don't download it in parallel.
    const loadPartner = () => {
      if (b.src) return;
      b.src = HERO_VIDEO_SRC;
      b.load();
    };

    const playSafe = (el: HTMLVideoElement) => {
      void el.play().catch(() => {});
    };

    playSafe(a);

    const swap = (from: "a" | "b") => {
      if (swappingRef.current || activeRef.current !== from) return;
      const current = from === "a" ? a : b;
      const next = from === "a" ? b : a;
      const nextKey = from === "a" ? "b" : "a";

      if (!current.duration || !Number.isFinite(current.duration)) return;
      if (current.currentTime < current.duration - 0.45) return;
      // Partner not buffered yet: this copy keeps looping on its own.
      if (next.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;

      swappingRef.current = true;
      try {
        next.currentTime = 0;
      } catch {
        /* ignore seek errors while buffering */
      }
      playSafe(next);
      activeRef.current = nextKey;
      setActive(nextKey);

      window.setTimeout(() => {
        current.pause();
        try {
          current.currentTime = 0;
        } catch {
          /* ignore */
        }
        swappingRef.current = false;
      }, 350);
    };

    const onATime = () => swap("a");
    const onBTime = () => swap("b");

    const keepPlaying = () => {
      const current = activeRef.current === "a" ? a : b;
      if (current.paused) playSafe(current);
    };

    const onAReady = () => setVisible(true);

    a.addEventListener("timeupdate", onATime);
    b.addEventListener("timeupdate", onBTime);
    a.addEventListener("playing", onAReady);
    a.addEventListener("loadeddata", onAReady);
    a.addEventListener("canplaythrough", loadPartner);
    document.addEventListener("visibilitychange", keepPlaying);
    window.addEventListener("focus", keepPlaying);

    return () => {
      a.removeEventListener("timeupdate", onATime);
      b.removeEventListener("timeupdate", onBTime);
      a.removeEventListener("playing", onAReady);
      a.removeEventListener("loadeddata", onAReady);
      a.removeEventListener("canplaythrough", loadPartner);
      document.removeEventListener("visibilitychange", keepPlaying);
      window.removeEventListener("focus", keepPlaying);
    };
  }, [loadVideo]);

  const videoClass = (which: "a" | "b") =>
    `absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-linear ${
      visible && active === which ? "opacity-100" : "opacity-0"
    }`;

  return (
    <div
      className={`${className ?? ""} bg-black bg-cover bg-center overflow-hidden`.trim()}
      style={{ backgroundImage: `url(${HERO_POSTER_SRC})` }}
      aria-hidden
    >
      {loadVideo ? (
        <>
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
        </>
      ) : null}
    </div>
  );
}
