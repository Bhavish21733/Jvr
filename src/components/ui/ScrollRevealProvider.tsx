"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    });

    const initRevealElements = () => {
      // Find all content sections and cards, skipping the top hero
      const elements = document.querySelectorAll<HTMLElement>(
        "main section:not(:first-child), main article, .reveal-target"
      );

      elements.forEach((el) => {
        // Check if element is already in initial viewport on page load
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("reveal-visible");
        } else {
          el.classList.add("reveal-on-scroll");
          observer.observe(el);
        }
      });
    };

    // Run after DOM has painted
    const timer = setTimeout(initRevealElements, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
