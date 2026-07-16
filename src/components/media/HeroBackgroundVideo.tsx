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

    a.src = HERO_VIDEO_SRC;
    b.src = HERO_VIDEO_SRC;
    a.load();
    b.load();

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
            preload="auto"
          />
        </>
      ) : null}
    </div>
  );
}
