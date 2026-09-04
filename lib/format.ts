/** Number formatting shared across the site. */

const TWO_DECIMALS = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const usd = (value: number) => `$${value.toFixed(2)}`;

export const num2 = (value: number) => TWO_DECIMALS.format(value);

export const signedPct = (value: number) =>
  `${value >= 0 ? "▲" : "▼"} ${Math.abs(value).toFixed(2)}%`;
