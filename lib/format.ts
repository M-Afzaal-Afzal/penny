/** Number formatting shared across the site. */

const WHOLE_DOLLARS = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

/** "$19.26" — prices. */
export const usd = (value: number) => `$${value.toFixed(2)}`;

/** "$38,408,541" — volume and liquidity. */
export const usdWhole = (value: number) => `$${WHOLE_DOLLARS.format(value)}`;

/** "▲ 0.18%" / "▼ 1.42%" — percentage moves. */
export const signedPct = (value: number) =>
  `${value >= 0 ? "▲" : "▼"} ${Math.abs(value).toFixed(2)}%`;
