import { useSyncExternalStore } from "react";
import { GME_PAIR_ADDRESS } from "./constants";

/**
 * Live tokenized-$GME quote from Dexscreener (the GME/USDG Uniswap v3 pool on
 * Robinhood Chain). One poller is shared by every subscribed component: it
 * starts with the first subscriber, stops with the last, and keeps the last
 * good quote when a request fails so the readouts never blank out.
 */

export interface GmeQuote {
  priceUsd: number;
  changePct24h: number;
  volumeUsd24h: number;
  liquidityUsd: number;
}

const QUOTE_URL = `https://api.dexscreener.com/latest/dex/pairs/robinhood/${GME_PAIR_ADDRESS}`;
// Dexscreener allows ~300 requests/min; one every 12s is plenty for a price readout.
const POLL_INTERVAL_MS = 12_000;

/** The parts of a Dexscreener pair payload we read. */
interface DexPair {
  priceUsd?: string;
  priceChange?: { h24?: number };
  volume?: { h24?: number };
  liquidity?: { usd?: number };
}

/** Picks the figures we show out of a Dexscreener response; null if the shape is off. */
export function parseGmeQuote(payload: unknown): GmeQuote | null {
  const data = payload as { pair?: DexPair; pairs?: DexPair[] } | null;
  const pair = data?.pair ?? data?.pairs?.[0];
  const priceUsd = Number(pair?.priceUsd);
  if (!pair || !Number.isFinite(priceUsd)) return null;
  return {
    priceUsd,
    changePct24h: Number(pair.priceChange?.h24 ?? 0),
    volumeUsd24h: Number(pair.volume?.h24 ?? 0),
    liquidityUsd: Number(pair.liquidity?.usd ?? 0),
  };
}

let quote: GmeQuote | null = null;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

async function refresh() {
  try {
    const response = await fetch(QUOTE_URL, { cache: "no-store" });
    if (!response.ok) return;
    const next = parseGmeQuote(await response.json());
    if (!next) return;
    quote = next;
    listeners.forEach((notify) => notify());
  } catch {
    // Network hiccup: keep showing the last good quote.
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    void refresh();
    timer = setInterval(refresh, POLL_INTERVAL_MS);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

const getSnapshot = () => quote;
const getServerSnapshot = () => null;

/** The latest $GME quote, or null until the first fetch lands (and during SSR). */
export function useGmeQuote(): GmeQuote | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
