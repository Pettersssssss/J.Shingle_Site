"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Narrative groups: once on entry, 620ms ease-out / 70ms stagger.
// Content is visible by default; cancellation, anchors and reduced motion are instant.
export function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    let skipped = preference.matches || Boolean(location.hash) || element.getBoundingClientRect().top < innerHeight;
    const cancel = () => { skipped = true; animations.forEach(animation => animation.cancel()); };
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      if (skipped || preference.matches || element.contains(document.activeElement)) return;
      Array.from(element.children).forEach((child, index) => {
        animations.push(child.animate([
          { opacity: 0.2, transform: "translateY(20px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 620, delay: Math.min(index, 2) * 70, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }));
      });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    observer.observe(element);
    preference.addEventListener("change", cancel);
    window.addEventListener("hashchange", cancel);
    window.addEventListener("pageshow", cancel);
    element.addEventListener("focusin", cancel);
    return () => {
      observer.disconnect(); cancel();
      preference.removeEventListener("change", cancel);
      window.removeEventListener("hashchange", cancel);
      window.removeEventListener("pageshow", cancel);
      element.removeEventListener("focusin", cancel);
    };
  }, []);
  return <div ref={root} className={className}>{children}</div>;
}
