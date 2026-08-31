"use client";

import React, { useCallback, useRef, useState } from "react";
import { ZoomIn } from "lucide-react";

interface MagnifierImageProps {
  src: string;
  alt: string;
  /** wrapper classes — position/size the image box here */
  className?: string;
  /** classes for the <img> itself */
  imgClassName?: string;
  /** magnification factor */
  zoom?: number;
  /** lens diameter in px */
  lensSize?: number;
  /**
   * How long a finger must rest before the lens engages. Below this a
   * swipe is treated as a scroll, so the page stays usable on mobile.
   */
  touchHoldMs?: number;
  /** hide the little "zoom" affordance chip */
  hideHint?: boolean;
  /** lets a parent pause its own tilt/scale while the lens is up */
  onActiveChange?: (active: boolean) => void;
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

export default function MagnifierImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  zoom = 2.4,
  lensSize = 190,
  touchHoldMs = 220,
  hideHint = false,
  onActiveChange
}: MagnifierImageProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const [active, setActive] = useState(false);
  const [lens, setLens] = useState({ x: 0, y: 0, bgX: 0, bgY: 0, bgW: 0, bgH: 0 });

  const setActiveSafe = useCallback(
    (v: boolean) => {
      setActive((prev) => {
        if (prev !== v) onActiveChange?.(v);
        return v;
      });
    },
    [onActiveChange]
  );

  const clearHold = () => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
  };

  /** Map a client point to lens position + background offset. */
  const track = useCallback(
    (clientX: number, clientY: number) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = clamp(clientX - rect.left, 0, rect.width);
      const y = clamp(clientY - rect.top, 0, rect.height);

      const bgW = rect.width * zoom;
      const bgH = rect.height * zoom;

      // Keep the lens fully inside the image box.
      const half = lensSize / 2;
      const lx = clamp(x - half, 0, Math.max(0, rect.width - lensSize));
      const ly = clamp(y - half, 0, Math.max(0, rect.height - lensSize));

      // Show the region under the cursor, clamped to the image bounds.
      const bgX = clamp(-(x * zoom - half), Math.min(0, -(bgW - lensSize)), 0);
      const bgY = clamp(-(y * zoom - half), Math.min(0, -(bgH - lensSize)), 0);

      setLens({ x: lx, y: ly, bgX, bgY, bgW, bgH });
    },
    [zoom, lensSize]
  );

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") return; // mouse engages on enter
    touchStart.current = { x: e.clientX, y: e.clientY };
    track(e.clientX, e.clientY);
    clearHold();
    // Press-and-hold, so a quick swipe still scrolls the page.
    holdTimer.current = setTimeout(() => setActiveSafe(true), touchHoldMs);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      if (active) track(e.clientX, e.clientY);
      return;
    }
    // Touch: a real drag before the hold fires means the user is scrolling.
    if (!active && touchStart.current) {
      const dx = e.clientX - touchStart.current.x;
      const dy = e.clientY - touchStart.current.y;
      if (Math.hypot(dx, dy) > 12) clearHold();
      return;
    }
    if (active) track(e.clientX, e.clientY);
  };

  const endTouch = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") return;
    clearHold();
    touchStart.current = null;
    setActiveSafe(false);
  };

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden ${className}`}
      // touch-action:none while the lens is up suppresses scrolling without
      // needing preventDefault on a passive listener.
      style={{ touchAction: active ? "none" : "pan-y", cursor: active ? "zoom-in" : undefined }}
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        track(e.clientX, e.clientY);
        setActiveSafe(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setActiveSafe(false);
        else endTouch(e);
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endTouch}
      onPointerCancel={endTouch}
    >
      <img src={src} alt={alt} className={imgClassName} draggable={false} />

      {/* Affordance: tells people the image is inspectable. */}
      {!hideHint && !active && (
        <span className="pointer-events-none absolute bottom-3 right-3 z-30 inline-flex items-center gap-1.5 rounded-full border border-slate-300/40 bg-white/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-500 opacity-0 shadow-sm backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <ZoomIn className="h-3 w-3" />
          Hold to zoom
        </span>
      )}

      {active && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-40 rounded-full border-2 border-sky-400/70 shadow-[0_8px_30px_rgba(11,27,58,0.28)] ring-4 ring-white/70"
          style={{
            left: lens.x,
            top: lens.y,
            width: lensSize,
            height: lensSize,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${lens.bgW}px ${lens.bgH}px`,
            backgroundPosition: `${lens.bgX}px ${lens.bgY}px`,
            backgroundColor: "#fff"
          }}
        />
      )}
    </div>
  );
}
