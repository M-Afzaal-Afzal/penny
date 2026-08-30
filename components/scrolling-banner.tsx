import type { ReactNode } from "react";

/**
 * Endless horizontal scroller (the ticker and marquee bars). Content is
 * rendered twice inside the animated track so the loop wraps seamlessly;
 * the `scroll` keyframes in globals.css translate the track by -50%.
 */
export function ScrollingBanner({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div className={className} aria-hidden="true">
      <div className="track">
        {children}
        {children}
      </div>
    </div>
  );
}
