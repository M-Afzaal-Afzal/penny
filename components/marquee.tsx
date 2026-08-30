import { Fragment } from "react";
import { MARQUEE } from "@/lib/constants";
import { ScrollingBanner } from "./scrolling-banner";

export function Marquee() {
  return (
    <ScrollingBanner className="marquee">
      {MARQUEE.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span>✦</span>
        </Fragment>
      ))}
    </ScrollingBanner>
  );
}
