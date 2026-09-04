"use client";

import type { GmeField } from "@/lib/constants";
import { signedPct, usd, usdWhole } from "@/lib/format";
import { useGmeQuote } from "@/lib/gme-feed";

/**
 * One live tokenized-$GME readout. Shows a placeholder until the first quote
 * lands, then updates in place as the shared poller refreshes.
 *
 * "change" renders its own <span> carrying the ticker's up/dn color class;
 * the other fields render bare text so the caller controls the wrapper.
 */
export function GmeStat({ field }: { field: GmeField }) {
  const quote = useGmeQuote();

  switch (field) {
    case "price":
      return <>{quote ? usd(quote.priceUsd) : "$—"}</>;
    case "volume":
      return <>{quote ? usdWhole(quote.volumeUsd24h) : "$—"}</>;
    case "liquidity":
      return <>{quote ? usdWhole(quote.liquidityUsd) : "$—"}</>;
    case "change": {
      const change = quote?.changePct24h ?? 0;
      return (
        <span className={change >= 0 ? "up" : "dn"}>{signedPct(change)}</span>
      );
    }
  }
}
