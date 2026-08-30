import { TICKER } from "@/lib/constants";
import { RichText } from "./rich-text";
import { ScrollingBanner } from "./scrolling-banner";

export function TickerBar() {
  return (
    <ScrollingBanner className="tickerbar">
      {TICKER.map((item, index) => (
        <span key={index} className={item.cls}>
          <RichText text={item.text} />
        </span>
      ))}
    </ScrollingBanner>
  );
}
