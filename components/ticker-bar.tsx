import { TICKER, type TickerItem } from "@/lib/constants";
import { GmeStat } from "./gme-stat";
import { RichText } from "./rich-text";
import { ScrollingBanner } from "./scrolling-banner";

function TickerSlot({ item }: { item: TickerItem }) {
  if (!("live" in item)) {
    return (
      <span className={item.cls}>
        <RichText text={item.text} />
      </span>
    );
  }
  if (item.live === "change") return <GmeStat field="change" />;
  return (
    <span>
      {item.label}{" "}
      <b>
        <GmeStat field="price" />
      </b>
    </span>
  );
}

export function TickerBar() {
  return (
    <ScrollingBanner className="tickerbar">
      {TICKER.map((item, index) => (
        <TickerSlot key={index} item={item} />
      ))}
    </ScrollingBanner>
  );
}
