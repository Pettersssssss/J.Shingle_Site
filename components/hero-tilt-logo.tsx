"use client";

import Image from "next/image";
import Link from "@/components/site-link";
import { useRef, type PointerEvent } from "react";

export function HeroTiltLogo() {
  const card = useRef<HTMLDivElement>(null);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = card.current;
    if (!element) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    event.currentTarget.classList.add("is-hover");
    element.classList.add("is-tilting");
    element.style.setProperty("--tilt-ry", `${((x - 0.5) * 22).toFixed(2)}deg`);
    element.style.setProperty("--tilt-rx", `${((0.5 - y) * 22).toFixed(2)}deg`);
    element.style.setProperty("--tilt-gx", `${(x * 100).toFixed(1)}%`);
    element.style.setProperty("--tilt-gy", `${(y * 100).toFixed(1)}%`);
  }

  function leave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.classList.remove("is-hover");
    card.current?.classList.remove("is-tilting");
    card.current?.style.setProperty("--tilt-rx", "0deg");
    card.current?.style.setProperty("--tilt-ry", "0deg");
  }

  return <div className="hero-logo t-tilt" onPointerMove={move} onPointerLeave={leave} onPointerCancel={leave}>
    <div ref={card} className="hero-logo-card t-tilt-card">
      <Link className="hero-logo-link" href="/" aria-label="J.SHINGLE — início">
        <Image src="/jshingle-logo-light.png" alt="" width={520} height={520} priority className="hero-logo-image" />
      </Link>
      <div className="t-tilt-glare" aria-hidden="true" />
    </div>
  </div>;
}
