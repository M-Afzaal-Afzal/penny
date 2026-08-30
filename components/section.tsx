import type { ReactNode } from "react";

/** Standard page section: anchor id, centered wrap, double-ruled heading row. */
export function Section({
  id,
  className,
  heading,
  label,
  children,
}: {
  id: string;
  className?: string;
  heading: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={className}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{heading}</h2>
          <span className="idx">{label}</span>
        </div>
        {children}
      </div>
    </section>
  );
}
