"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_VIDEO_SRC } from "@/src/lib/media-urls";

type Props = {
  className?: string;
};

/**
 * Seamless looping hero background: two muted videos crossfade at the loop
 * point so there is no visible stop / restart hitch.
 */
export default function HeroBackgroundVideo({ className }: Props) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"a" | "b">("a");
  const swappingRef = useRef(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<"a" | "b">("a");

  useEffect(() => {
    // The MP4 is ~8 MB. Skip it where it costs the visitor most and adds least:
    // phones, data-saver, slow connections and reduced-motion. The hero keeps
    // its dark background and overlay, which is also what shows before the
    // video starts on desktop.
    if (shouldSkipHeroVideo()) return;
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

    // Only the first player downloads up front. The second one (used for the
    // crossfade at the loop point) gets its source halfway through playback,
    // when the file is in the HTTP cache, instead of a second parallel download.
    a.src = HERO_VIDEO_SRC;
    a.load();
    let bLoaded = false;
    const loadB = () => {
      if (bLoaded) return;
      bLoaded = true;
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
      if (!bLoaded && current.currentTime >= current.duration / 2) loadB();
      if (current.currentTime < current.duration - 0.45) return;

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
    document.addEventListener("visibilitychange", keepPlaying);
    window.addEventListener("focus", keepPlaying);

    return () => {
      a.removeEventListener("timeupdate", onATime);
      b.removeEventListener("timeupdate", onBTime);
      a.removeEventListener("playing", onAReady);
      a.removeEventListener("loadeddata", onAReady);
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
      className={`${className ?? ""} bg-black overflow-hidden`.trim()}
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
            preload="none"
          />
        </>
      ) : null}
    </div>
  );
}

type NetworkInformationLike = { saveData?: boolean; effectiveType?: string };

function shouldSkipHeroVideo(): boolean {
  if (typeof window === "undefined") return true;
  if (window.matchMedia?.("(max-width: 767px)").matches) return true;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return true;
  const conn = (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
  if (conn?.saveData) return true;
  if (conn?.effectiveType && /(^|-)2g$|^3g$/.test(conn.effectiveType)) return true;
  return false;
}
