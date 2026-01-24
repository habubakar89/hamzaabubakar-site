"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollspy(
  sectionIds: string[],
  offset: number = 100
): string | null {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] || null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRatios = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Initialize ratios
    sectionIds.forEach((id) => {
      sectionRatios.current.set(id, 0);
    });

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Update intersection ratios for each entry
      entries.forEach((entry) => {
        sectionRatios.current.set(entry.target.id, entry.intersectionRatio);
      });

      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let maxId: string | null = null;

      sectionIds.forEach((id) => {
        const ratio = sectionRatios.current.get(id) || 0;
        if (ratio > maxRatio) {
          maxRatio = ratio;
          maxId = id;
        }
      });

      // If we have a visible section, set it as active
      if (maxId && maxRatio > 0) {
        setActiveId(maxId);
      } else {
        // Fallback: find the section closest to the top of the viewport
        let closestId: string | null = null;
        let closestDistance = Infinity;

        sectionIds.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - offset);
            if (rect.top <= offset + 100 && distance < closestDistance) {
              closestDistance = distance;
              closestId = id;
            }
          }
        });

        if (closestId) {
          setActiveId(closestId);
        }
      }
    };

    // Create observer with multiple thresholds for smoother tracking
    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: `-${offset}px 0px -50% 0px`,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    // Set initial active section
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        setActiveId(hash);
      }
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds, offset]);

  return activeId;
}
