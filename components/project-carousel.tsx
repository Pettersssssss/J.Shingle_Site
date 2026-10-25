"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Project = { name: string; type: string; image: string; alt: string; href: string };

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const cycle = useRef(0);
  const manual = useRef(false);
  const drag = useRef<{ pointerId: number; startX: number; scrollLeft: number } | null>(null);
  const hovered = useRef(false);
  const rateFrame = useRef<number | null>(null);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useRef(false);
  const visible = useRef(false);

  function easeRate(target: number) {
    const current = animation.current;
    if (!current) return;
    if (rateFrame.current !== null) cancelAnimationFrame(rateFrame.current);
    const from = current.playbackRate;
    if (Math.abs(from - target) < 0.01) {
      if (target === 0) current.pause(); else current.play();
      return;
    }
    if (target > 0) current.play();
    const started = performance.now();
    const step = (now: number) => {
      if (animation.current !== current) return;
      const progress = Math.min(1, (now - started) / 280);
      const eased = 1 - Math.pow(1 - progress, 3);
      current.updatePlaybackRate(from + (target - from) * eased);
      if (progress < 1) rateFrame.current = requestAnimationFrame(step);
      else { rateFrame.current = null; if (target === 0) current.pause(); }
    };
    rateFrame.current = requestAnimationFrame(step);
  }

  function syncPlayback() {
    if (!visible.current || document.hidden || reduced.current || manual.current) {
      if (rateFrame.current !== null) cancelAnimationFrame(rateFrame.current);
      rateFrame.current = null;
      animation.current?.pause();
    } else easeRate(hovered.current ? 0 : 1);
  }

  useEffect(() => {
    const rail = track.current;
    const frame = viewport.current;
    const first = group.current;
    if (!rail || !frame || !first || !("ResizeObserver" in window) || !("IntersectionObserver" in window) || !("animate" in rail)) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    // WAAPI keeps compositor-driven linear motion, while preserving the current
    // offset across resize and manual scroll handoff.
    const rebuild = () => {
      const offset = Number(animation.current?.currentTime ?? 0) / 1000 * 28;
      animation.current?.cancel();
      animation.current = null;
      reduced.current = preference.matches;
      rail.dataset.enhanced = String(!preference.matches);
      cycle.current = first.getBoundingClientRect().width;
      if (preference.matches || !cycle.current) return;
      animation.current = rail.animate([
        { transform: "translateX(0)" },
        { transform: `translateX(-${cycle.current}px)` },
      ], { duration: cycle.current / 28 * 1000, iterations: Infinity, easing: "linear" });
      animation.current.currentTime = (offset % cycle.current) / 28 * 1000;
      if (manual.current) animation.current.cancel();
      syncPlayback();
    };
    const observer = new ResizeObserver(rebuild);
    observer.observe(first);
    const visibility = new IntersectionObserver(entries => {
      visible.current = entries.some(entry => entry.isIntersecting);
      syncPlayback();
    });
    visibility.observe(frame);
    preference.addEventListener("change", rebuild);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer.disconnect(); visibility.disconnect(); animation.current?.cancel();
      if (rateFrame.current !== null) cancelAnimationFrame(rateFrame.current);
      if (wheelTimer.current !== null) clearTimeout(wheelTimer.current);
      preference.removeEventListener("change", rebuild);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  function beginManual() {
    if (manual.current || reduced.current || !animation.current || !viewport.current || !cycle.current) return;
    const offset = (Number(animation.current.currentTime ?? 0) / 1000 * 28) % cycle.current;
    animation.current.cancel();
    animation.current = null;
    manual.current = true;
    viewport.current.scrollLeft += offset;
  }

  function endManual() {
    if (!manual.current || !track.current || !viewport.current || !cycle.current) return;
    const offset = viewport.current.scrollLeft % cycle.current;
    animation.current = track.current.animate([
      { transform: "translateX(0)" },
      { transform: `translateX(-${cycle.current}px)` },
    ], { duration: cycle.current / 28 * 1000, iterations: Infinity, easing: "linear" });
    animation.current.currentTime = offset / 28 * 1000;
    viewport.current.scrollLeft = 0;
    manual.current = false;
    syncPlayback();
  }

  const cards = projects.map((project, index) => (
    <a className={`project-card project-card-${index + 1}`} href={project.href} key={project.name} aria-label={`Ver obra ${project.name}`}>
      <Image src={project.image} alt={project.alt} fill sizes="(max-width: 860px) 82vw, 470px" />
      <div><h3>{project.name}</h3><p>{project.type}</p></div>
    </a>
  ));

  return <div className="project-carousel" role="region" aria-roledescription="carrossel" aria-label="Prévia de obras">
    <div ref={viewport} id="works-viewport" className="project-viewport" tabIndex={0} role="group" aria-label="Galeria de obras. Arraste ou deslize para explorar."
      onPointerEnter={event => { if (event.pointerType === "mouse") { hovered.current = true; syncPlayback(); } }}
      onPointerLeave={event => { if (event.pointerType === "mouse") { hovered.current = false; syncPlayback(); } }}
      onWheel={event => {
        if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) && !event.shiftKey) return;
        beginManual();
        if (wheelTimer.current !== null) clearTimeout(wheelTimer.current);
        wheelTimer.current = setTimeout(endManual, 750);
      }}
      onPointerDown={event => {
        if (event.button !== 0 && event.pointerType === "mouse") return;
        beginManual();
        const frame = viewport.current;
        if (!frame) return;
        drag.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: frame.scrollLeft };
        frame.classList.add("is-dragging");
        frame.setPointerCapture(event.pointerId);
      }}
      onPointerMove={event => {
        const frame = viewport.current;
        if (!frame || drag.current?.pointerId !== event.pointerId) return;
        frame.scrollLeft = drag.current.scrollLeft + drag.current.startX - event.clientX;
      }}
      onPointerUp={event => {
        if (drag.current?.pointerId !== event.pointerId) return;
        drag.current = null;
        viewport.current?.classList.remove("is-dragging");
        endManual();
      }}
      onPointerCancel={() => { drag.current = null; viewport.current?.classList.remove("is-dragging"); endManual(); }}
      onFocus={() => { if (!drag.current) beginManual(); }}
      onBlur={() => { if (!drag.current) endManual(); }}>
      <div ref={track} className="project-track">
        <div ref={group} className="project-group">{cards}</div>
        <div className="project-group project-copy" aria-hidden="true" inert>{cards}</div>
      </div>
    </div>
  </div>;
}
