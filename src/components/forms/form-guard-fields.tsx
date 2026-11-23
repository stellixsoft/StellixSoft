"use client";

import { useEffect, useRef } from "react";

/**
 * Hidden anti-bot fields read by `screenEnquiry`: a honeypot people never see,
 * and the time the form became interactive (bots submit within a second or two).
 */
export default function FormGuardFields() {
  const renderedAtRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (renderedAtRef.current) {
      const now = String(Date.now());
      renderedAtRef.current.value = now;
      renderedAtRef.current.defaultValue = now;
    }
  }, []);

  return (
    <>
      <input type="hidden" name="formRenderedAt" ref={renderedAtRef} />
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
    </>
  );
}
