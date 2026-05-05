"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { CLIENT_BRAND_LOGOS, type ClientBrandLogo } from "@/src/data/client-logos";

function wrapOffset(o: number, loopWidth: number): number {
  if (loopWidth <= 0) return o;
  let x = o;
  while (x <= -loopWidth) x += loopWidth;
  while (x > 0) x -= loopWidth;
  return x;
}

const noSelectClass =
  "select-none [user-select:none] [-webkit-user-select:none] [-webkit-touch-callout:none]";

type ClientLogosProps = {
  /** Omit outer section + top accent bar (e.g. embed inside Contact “Trusted by”) */
  embedded?: boolean;
};

export default function ClientLogos({ embedded = false }: ClientLogosProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ pointerX: 0, offset: 0 });
  const rafRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const measure = useCallback(() => {
    const setEl = firstSetRef.current;
    if (!setEl) return;
    const w = setEl.offsetWidth;
    if (w <= 0) return;
    loopWidthRef.current = w;
    offsetRef.current = wrapOffset(offsetRef.current, w);
    const el = trackRef.current;
    if (el) el.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const setEl = firstSetRef.current;
    const track = trackRef.current;
    if (!setEl || !track) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(setEl);
    ro.observe(track);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speedPxPerSec = reduceMotion ? 0 : 42;

    const tick = (now: number) => {
      const last = lastTimeRef.current ?? now;
      lastTimeRef.current = now;
      const dt = (now - last) / 1000;
      const W = loopWidthRef.current;

      if (!draggingRef.current && speedPxPerSec > 0 && W > 0) {
        offsetRef.current -= speedPxPerSec * dt;
        offsetRef.current = wrapOffset(offsetRef.current, W);
      }

      const el = trackRef.current;
      if (el) {
        el.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    draggingRef.current = true;
    dragStartRef.current = { pointerX: e.clientX, offset: offsetRef.current };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.pointerX;
    offsetRef.current = dragStartRef.current.offset + dx;
    const W = loopWidthRef.current;
    if (W > 0) offsetRef.current = wrapOffset(offsetRef.current, W);
    const el = trackRef.current;
    if (el) el.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* not captured */
    }
    const W = loopWidthRef.current;
    if (W > 0) offsetRef.current = wrapOffset(offsetRef.current, W);
  };

  const logoCell = (logo: ClientBrandLogo, suffix: string, index: number) => {
    const inner = (
      <Image
        src={logo.src}
        alt={logo.alt}
        width={240}
        height={96}
        sizes="120px"
        loading="eager"
        className={`pointer-events-none h-12 max-h-12 w-[120px] object-contain ${noSelectClass}`}
        draggable={false}
      />
    );

    const shellClass = `flex min-w-[184px] shrink-0 items-center justify-center px-8 opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 md:min-w-[216px] md:px-12 ${noSelectClass}`;

    const wrap =
      logo.href != null && logo.href !== "" ? (
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${shellClass} cursor-pointer`}
          data-logo-link=""
          onPointerDown={(ev) => ev.stopPropagation()}
        >
          {inner}
        </a>
      ) : (
        <div className={shellClass}>{inner}</div>
      );

    return (
      <div key={`${suffix}-${logo.alt}-${index}`}>
        {wrap}
      </div>
    );
  };

  const renderLogoSet = (suffix: string) =>
    CLIENT_BRAND_LOGOS.map((logo, index) => logoCell(logo, suffix, index));

  const marquee = (
    <div className={`relative py-10 md:py-10 ${noSelectClass}`}>
      <div
        role="region"
        aria-label="Client logos — drag horizontally or open linked sites where available"
        className={`cursor-grab overflow-x-hidden active:cursor-grabbing ${noSelectClass}`}
        style={{ touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          ref={trackRef}
          className={`flex w-max flex-row will-change-transform ${noSelectClass}`}
          style={{ transform: "translate3d(0,0,0)" }}
        >
          <div ref={firstSetRef} className={`flex shrink-0 flex-row ${noSelectClass}`}>
            {renderLogoSet("a")}
          </div>
          <div className={`flex shrink-0 flex-row ${noSelectClass}`}>{renderLogoSet("b")}</div>
          <div className={`flex shrink-0 flex-row ${noSelectClass}`}>{renderLogoSet("c")}</div>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return <div className={`bg-white ${noSelectClass}`}>{marquee}</div>;
  }

  return (
    <section className={`bg-white ${noSelectClass}`}>
      <div
        className="h-1 w-full shrink-0"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      />
      {marquee}
    </section>
  );
}
