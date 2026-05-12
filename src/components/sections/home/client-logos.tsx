"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

type ClientLogo = {
  src: string;
  alt: string;
  href?: string;
};

const clientLogos: ClientLogo[] = [
  {
    src: "/assets/images/docappliance.webp",
    alt: "Doctor Appliance",
    href: "https://doctorappliance.com/",
  },
  {
    src: "/assets/images/epicmasjid.png",
    alt: "Epic Masjid",
    href: "https://www.epicmasjid.org/",
  },
  {
    src: "/assets/images/rentanycar.png",
    alt: "RENT ANY CAR",
    href: "https://rentanycar.ae/",
  },
  {
    src: "/assets/images/primecode.png",
    alt: "Code Prime",
  },
  {
    src: "/assets/images/pazmental.png",
    alt: "PazMental",
    href: "https://pazmentalrd.com/",
  },
  {
    src: "/assets/images/stripe.png",
    alt: "Stripe",
    href: "https://stripe.com/",
  },
  {
    src: "/assets/images/google.png",
    alt: "Google Inc.",
    href: "https://www.google.com/",
  },
];

function wrapOffset(o: number, loopWidth: number): number {
  if (loopWidth <= 0) return o;
  let x = o;
  while (x <= -loopWidth) x += loopWidth;
  while (x > 0) x -= loopWidth;
  return x;
}

const noSelectClass =
  "select-none [user-select:none] [-webkit-user-select:none] [-webkit-touch-callout:none]";

const MARQUEE_LINK_CLASS = "js-marquee-brand-link";

export default function ClientLogos() {
  const regionRef = useRef<HTMLDivElement>(null);
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
    const region = regionRef.current;
    if (!region) return;

    const onWheel = (e: WheelEvent) => {
      const W = loopWidthRef.current;
      if (W <= 0) return;

      const dominant =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (dominant === 0) return;

      offsetRef.current -= dominant;
      offsetRef.current = wrapOffset(offsetRef.current, W);
      const track = trackRef.current;
      if (track) {
        track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }
      e.preventDefault();
    };

    region.addEventListener("wheel", onWheel, { passive: false, capture: true });
    return () => region.removeEventListener("wheel", onWheel, true);
  }, []);

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
    const t = e.target as HTMLElement | null;
    if (t?.closest(`.${MARQUEE_LINK_CLASS}`)) return;

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

  const renderLogoSet = (suffix: string) =>
    clientLogos.map((logo, index) => (
      <div
        key={`${suffix}-${logo.alt}-${index}`}
        className={`flex min-w-[184px] shrink-0 items-center justify-center px-8 opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 md:min-w-[216px] md:px-12 ${noSelectClass}`}
      >
        {logo.href ? (
          <Link
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${MARQUEE_LINK_CLASS} pointer-events-auto flex items-center justify-center outline-none ring-[var(--color-electricBlue)] focus-visible:ring-2 focus-visible:ring-offset-2 ${noSelectClass}`}
            aria-label={`${logo.alt} website (opens in new tab)`}
          >
            <Image
              src={logo.src}
              alt=""
              width={240}
              height={96}
              sizes="120px"
              loading="eager"
              className={`pointer-events-none h-12 max-h-12 w-[120px] object-contain ${noSelectClass}`}
              draggable={false}
            />
          </Link>
        ) : (
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
        )}
      </div>
    ));

  return (
    <section className={`bg-white ${noSelectClass}`}>
      <div
        className="h-1 w-full shrink-0"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      />
      <div
        ref={regionRef}
        role="region"
        aria-label="Trusted by brands — drag, scroll with mouse wheel, or open each logo link in a new tab"
        className={`relative cursor-grab py-10 active:cursor-grabbing md:py-10 ${noSelectClass}`}
        style={{ touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className={`overflow-x-hidden ${noSelectClass}`}>
          <div
            ref={trackRef}
            className={`flex w-max flex-row will-change-transform ${noSelectClass}`}
            style={{ transform: "translate3d(0,0,0)" }}
          >
            <div ref={firstSetRef} className={`flex shrink-0 flex-row ${noSelectClass}`}>
              {renderLogoSet("a")}
            </div>
            <div className={`flex shrink-0 flex-row ${noSelectClass}`}>
              {renderLogoSet("b")}
            </div>
            <div className={`flex shrink-0 flex-row ${noSelectClass}`}>
              {renderLogoSet("c")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
