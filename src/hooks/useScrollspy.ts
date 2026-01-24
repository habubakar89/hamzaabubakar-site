"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useScrollspy(
  sectionIds: string[],
  offset: number = 100
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // Find all visible sections
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id);

      if (visibleSections.length > 0) {
        // Get the first visible section (topmost)
        const sortedVisible = sectionIds.filter((id) =>
          visibleSections.includes(id)
        );
        if (sortedVisible.length > 0) {
          setActiveId(sortedVisible[0]);
        }
      }
    },
    [sectionIds]
  );

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: `-${offset}px 0px -40% 0px`,
      threshold: [0, 0.1, 0.5],
    });

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    // Set initial active section based on hash or first section
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        setActiveId(hash);
      } else {
        setActiveId(sectionIds[0]);
      }
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds, offset, handleIntersect]);

  return activeId;
}
