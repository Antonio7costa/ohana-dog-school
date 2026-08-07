"use client";

import { useEffect, useRef } from "react";

type Options = {
  rootMargin?: string;
  threshold?: number;
};

export function useScrollReveal(options?: Options) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      el.dataset.reveal = "shown";
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "shown";
          el.classList.add("reveal-in");
          observer.disconnect();
        }
      },
      {
        rootMargin: options?.rootMargin ?? "0px 0px -10% 0px",
        threshold: options?.threshold ?? 0.15,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options?.rootMargin, options?.threshold]);

  return ref;
}