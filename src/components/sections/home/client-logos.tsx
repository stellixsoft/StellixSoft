"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { CLIENT_BRAND_LOGOS, type ClientBrandLogo } from "@/src/data/client-logos";

/** Horizontal movement past this counts as a drag (vertical jitter won’t block logo clicks) */
const CLICK_DRAG_THRESHOLD_PX = 12;

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
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, offset: 0 });
  const gestureWasDragRef = useRef(false);
  const suppressNextClickRef = useRef(false);
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
    // Avoid capturing when pressing a logo link — capture retargets pointerup away from <a>,
    // so the browser never synthesizes a click and links won't open.
    const target = e.target as HTMLElement | null;
    if (target?.closest("a[data-logo-link]")) return;

    gestureWasDragRef.current = false;
    suppressNextClickRef.current = false;
    draggingRef.current = true;
    dragStartRef.current = {
      pointerX: e.clientX,
      pointerY: e.clientY,
      offset: offsetRef.current,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const mx = e.clientX - dragStartRef.current.pointerX;
    if (Math.abs(mx) > CLICK_DRAG_THRESHOLD_PX) gestureWasDragRef.current = true;

    offsetRef.current = dragStartRef.current.offset + mx;
    const W = loopWidthRef.current;
    if (W > 0) offsetRef.current = wrapOffset(offsetRef.current, W);
    const el = trackRef.current;
    if (el) el.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    if (gestureWasDragRef.current) suppressNextClickRef.current = true;
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* not captured */
    }
    const W = loopWidthRef.current;
    if (W > 0) offsetRef.current = wrapOffset(offsetRef.current, W);
  };

  /** Logo slot: fixed width column; horizontal spacing from parent `gap-x` */
  const slotClass =
    `flex h-14 w-[120px] shrink-0 items-center justify-center md:h-16 opacity-80 grayscale transition-[opacity,filter] duration-300 hover:grayscale-0 hover:opacity-100 ${noSelectClass}`;

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

    const wrap =
      logo.href != null && logo.href !== "" ? (
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${slotClass} cursor-pointer rounded-lg outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-electricBlue-solid)] active:cursor-grabbing`}
          data-logo-link=""
          draggable={false}
          onClick={(ev) => {
            if (suppressNextClickRef.current) {
              ev.preventDefault();
              suppressNextClickRef.current = false;
            }
          }}
        >
          {inner}
        </a>
      ) : (
        <div className={`${slotClass} cursor-grab active:cursor-grabbing`}>{inner}</div>
      );

    return (
      <div key={`${suffix}-${logo.alt}-${index}`} className="flex shrink-0">
        {wrap}
      </div>
    );
  };

  const renderLogoSet = (suffix: string) =>
    CLIENT_BRAND_LOGOS.map((logo, index) => logoCell(logo, suffix, index));

  const gapRowClass = `flex shrink-0 flex-row items-center gap-x-8 md:gap-x-12 ${noSelectClass}`;

  const marquee = (
    <div
      className={`relative flex min-h-28 flex-col justify-center md:min-h-32 ${noSelectClass} cursor-grab active:cursor-grabbing`}
      style={{ touchAction: "none" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        role="region"
        aria-label="Client logos — drag horizontally to scroll; click a logo to open its website when a link is available."
        className={`flex flex-col justify-center overflow-x-hidden rounded-lg ${noSelectClass}`}
      >
        <div
          ref={trackRef}
          className={`flex w-max flex-row items-center will-change-transform ${noSelectClass}`}
          style={{ transform: "translate3d(0,0,0)" }}
        >
          <div ref={firstSetRef} className={gapRowClass}>
            {renderLogoSet("a")}
          </div>
          <div className={gapRowClass}>{renderLogoSet("b")}</div>
          <div className={gapRowClass}>{renderLogoSet("c")}</div>
        </div>
      </div>
      <p className="sr-only">
        Drag this band to scroll logos horizontally. Click a logo with a link to open it in a new tab.
      </p>
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
