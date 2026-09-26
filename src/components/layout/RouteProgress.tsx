"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Minimal, dependency-free route-transition indicator. Starts a fast fake-progress
 * animation on every pathname change and completes it shortly after — App Router
 * doesn't expose real navigation-start/end events, so this approximates the common
 * "instant nav, then settle" feel without blocking anything. Deliberately avoids
 * useSearchParams so it never forces a Suspense boundary at the layout root.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 420);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1" aria-hidden="true">
      {visible && (
        <div className="h-full w-full origin-[right] animate-[route-progress_0.4s_ease-out] bg-primary" />
      )}
    </div>
  );
}
