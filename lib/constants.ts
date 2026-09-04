/**
 * Single source of truth for every piece of content on the site.
 *
 * Text fields support a minimal inline markup rendered by <RichText>:
 *   **bold**   *italic*   ==highlight==   ~~strike~~   [label](url)
 * Newlines ("\n") render as line breaks.
 */

/* ---------- token / socials / links ---------- */

// Placeholder at real EVM length — replace with the live contract address.
export const CONTRACT_ADDRESS = "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

/** Tokenized $GME on Robinhood Chain (the other side of the pair). */
export const GME_TOKEN_ADDRESS = "0x1b0E319c6A659F002271B69dB8A7df2F911c153E";

/** GME/USDG Uniswap v3 pool on Robinhood Chain — the deepest $GME pool. The live feed reads it. */
export const GME_PAIR_ADDRESS = "0xe2b46c905e12ab8e2f864e4821a4325884c1b126";
export const GME_DEXSCREENER_URL = `https://dexscreener.com/robinhood/${GME_PAIR_ADDRESS}`;

// Replace "#" with the real community links.
export const SOCIALS = [
  { label: "𝕏 Follow", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "Dexscreener", href: "#" },
];

export const EXTERNAL_LINKS = {
  robinhoodWallet: "#",
  relay: "#",
  uniswap: "#",
  fomo: "https://fomo.family/download",
};

/* ---------- site meta ---------- */

export const SITE = {
  name: "The Penny",
  ticker: "$PENNY",
  tagline: "PAIRED WITH $GME · ROBINHOOD CHAIN",
  title: "$PENNY | Penny stocks are back. This time it's literal.",
  description:
    "$PENNY is a memecoin paired with tokenized $GME on Robinhood Chain. The most shorted stock in history on one side, one cent of pure conviction on the other.",
};

export const IMAGES = {
  logo: "/images/logo.jpg",
  penny: "/images/penny-coin.jpg",
};

/* ---------- live $GME feed ---------- */

/**
 * Which live tokenized-$GME figure a slot shows. Rendered by <GmeStat>,
 * fed by the Dexscreener poller in lib/gme-feed.ts.
 */
export type GmeField = "price" | "change" | "volume" | "liquidity";

/* ---------- navigation ---------- */

export const SECTION_IDS = {
  lore: "lore",
  numbers: "numbers",
  how: "how",
  memes: "memes",
  faq: "faq",
};

export const NAV_LINKS = [
  { label: "Lore", href: `#${SECTION_IDS.lore}` },
  { label: "Numbers", href: `#${SECTION_IDS.numbers}` },
  { label: "How to buy", href: `#${SECTION_IDS.how}` },
  { label: "Memes", href: `#${SECTION_IDS.memes}` },
  { label: "FAQ", href: `#${SECTION_IDS.faq}` },
];

export const BUY_BUTTON = { label: "Buy $PENNY", href: `#${SECTION_IDS.how}` };

/* ---------- top ticker ---------- */

/** CSS classes from the ticker styles: up (green), dn (red), cp (copper). */
export type TickerTone = "up" | "dn" | "cp";

export type TickerItem =
  | { text: string; cls?: TickerTone }
  /** "$GME $19.26" — label followed by the live price. */
  | { label: string; live: "price" }
  /** "▲ 0.18%" — live 24h move, colored up/dn. */
  | { live: "change" };

export const TICKER: TickerItem[] = [
  { text: SITE.ticker, cls: "cp" },
  { text: "▲ literally one cent", cls: "up" },
  { text: "·" },
  { label: "$GME", live: "price" },
  { live: "change" },
  { text: "·" },
  { text: "SHORTS ▼ still not covered", cls: "dn" },
  { text: "·" },
];

/* ---------- hero ---------- */

export const HERO = {
  kicker: "FRONT PAGE · **MEME STOCK** MEETS **MEMECOIN**",
  headline:
    "Penny stocks are back.\nThis time it's *literal*.\n~~Not financial advice.~~",
  dek: "$PENNY is a memecoin paired with **tokenized $GME** on Robinhood Chain. The most shorted stock in history on one side, **one cent of pure conviction** on the other. The papers warned you about penny stocks. So we made one you can actually hold.",
  byline: "By **The Holders** · Robinhood Chain Bureau · Est. one cent",
  ctas: [
    { label: "Buy $PENNY ↗", href: `#${SECTION_IDS.how}`, solid: true },
    { label: "Read the lore", href: `#${SECTION_IDS.lore}` },
  ],
  imageAlt: "The Penny",
  // The design positions exactly three stamps (.s1–.s3) and two clips (.c1–.c2).
  stamps: ["SPECULATIVE ✻", "STILL HOLDING", "EAT THE RICH"],
  clips: [
    {
      quote:
        '"The number of low-price, highly speculative stocks has ==exploded==."',
      source: "Financial Times, Opinion",
    },
    {
      quote:
        '"Penny stocks are ==booming==. The next big opportunity after meme stocks."',
      source: "The New York Times",
    },
  ],
};

export const MARQUEE = [
  "A penny paired with $GME",
  "On the chain that turned the buy button back on",
  "One penny, one stock: $GME",
  "Eat the rich, tip the penny",
];

/* ---------- lore ---------- */

export const LORE = {
  id: SECTION_IDS.lore,
  heading: "The Lore",
  label: "SEC. 01 · RECEIPTS ATTACHED",
  receipts: [
    {
      paper: "FINANCIAL TIMES",
      headline:
        '"The SEC needs to take action over ==penny stock== listings"',
      body: "The number of low-price, highly speculative stocks on exchanges has exploded, harming investors.",
      source: "Opinion · Markets Insight",
    },
    {
      paper: "The New York Times",
      headline:
        '"==Penny Stocks== Are Booming, Which Is Good News for Swindlers"',
      body: "Retail investors see the tiny companies as the next big opportunity after meme stocks and cryptocurrency.",
      source: "Markets",
    },
    {
      paper: "EVERY PAPER, JAN 2021",
      headline: '"The ==short squeeze== heard around the world"',
      body: "$GME was shorted over 100% of its float. Retail bought, held, and refused to sell. The shorts had to cover, and a video game stock went vertical. Then the buy button disappeared. Nobody forgot.",
      source: "The saga · Jan 2021",
    },
    {
      paper: "NETFLIX, 2022",
      headline: '"Eat the Rich: ==The GameStop Saga=="',
      body: 'They made a whole documentary about it: the subreddit, the diamond hands, the hedge fund that lost billions, the hearings. "I like the stock" entered history. We like the coin.',
      source: "Docuseries · required viewing",
    },
  ],
  note: {
    paragraphs: [
      "They wrote a thousand headlines warning you about penny stocks. They halted the buy button on $GME. So we did the only reasonable thing: **put an actual penny on the chain Robinhood built**, and paired it with **tokenized $GME**. One coin. One stock. The most shorted name in history on one side, one cent of pure conviction on the other. No index, no roadmap, no pivot. **Just the penny and GME, until the shorts cover.**",
    ],
    signature: "One cent. In holders we trust.",
  },
  squeeze: {
    kick: "Field manual · The mechanic we named ourselves after",
    heading: "What is a *short squeeze*? Glad you asked.",
    steps: [
      {
        step: "Step 1",
        title: "They borrow",
        body: "Funds borrow shares of a company they think is dying and sell them, betting on the fall.",
      },
      {
        step: "Step 2",
        title: "We buy",
        body: "Holders buy and refuse to sell. Price rises instead of falling. Diamond hands engage.",
      },
      {
        step: "Step 3",
        title: "They panic",
        body: "Every tick up deepens their losses. Eventually they must buy back the shares they borrowed, at any price.",
      },
      {
        step: "Step 4",
        title: "Vertical",
        body: "Forced buying meets no sellers. The chart goes vertical. That's the squeeze. That's the whole religion.",
      },
    ],
    footnote:
      "$GME is the most shorted stock in history for exactly this reason. Apes together strong.",
  },
};

/* ---------- numbers ---------- */

/** A tile in the Numbers grid: a fixed value, or a live $GME figure. */
export type Stat = { label: string; href?: string } & (
  | { value: string }
  | { live: GmeField }
);

export const NUMBERS = {
  id: SECTION_IDS.numbers,
  heading: "The Numbers",
  label: "SEC. 02 · SIMPLE ON PURPOSE",
  stats: [
    { value: "1B", label: "Total supply" },
    { value: "0/0", label: "Tax" },
    { value: "100%", label: "In pool · LP burned" },
    { live: "price", label: "$GME · tokenized · live", href: GME_DEXSCREENER_URL },
    { live: "volume", label: "$GME onchain volume · 24h" },
    { live: "liquidity", label: "GME/USDG pool liquidity" },
  ] satisfies Stat[],
};

/* ---------- how to buy ---------- */

export interface BuyPath {
  title: string;
  /** The small chip next to the title ("For normies"). */
  level: string;
  /** One-line summary of what the path needs. */
  who: string;
  steps: string[];
  cta: { label: string; href: string };
  /** Inverted (ink) card. */
  dark?: boolean;
}

const BUY_PATHS: BuyPath[] = [
  {
    title: "The easy way",
    level: "For normies",
    who: "FOMO app · Apple Pay · no wallet setup",
    dark: true,
    steps: [
      "Download **FOMO** on iPhone or Android, or open it on web. Sign up with an email in about ten seconds.",
      "Fund with **Apple Pay** or card. No seed phrase, no gas, no bridge. FOMO is multichain and gasless.",
      "Search **$PENNY** or paste the contract address, type an amount, tap buy. That's it. You now hold a penny.",
    ],
    cta: { label: "Get FOMO ↗", href: EXTERNAL_LINKS.fomo },
  },
  {
    title: "The onchain way",
    level: "For degens",
    who: "Your wallet · Robinhood Chain · Uniswap",
    steps: [
      `Get a wallet: [Robinhood Wallet](${EXTERNAL_LINKS.robinhoodWallet}) or MetaMask. Add the **Robinhood Chain** network (instructions in the official docs).`,
      `Bridge some ETH to Robinhood Chain with [Relay](${EXTERNAL_LINKS.relay}). You need a little extra for gas.`,
      "Open **Uniswap**, select Robinhood Chain, paste the **$PENNY contract address** as the output token. Never trust a search result, only the CA on this site.",
      "Enter your ETH amount, set slippage to **2 to 5%**, confirm the swap in your wallet. Done. Add $PENNY to your wallet to see it.",
    ],
    cta: { label: "Open Uniswap ↗", href: EXTERNAL_LINKS.uniswap },
  },
];

export const HOW_TO_BUY = {
  id: SECTION_IDS.how,
  heading: "How to Buy",
  label: "SEC. 03 · TWO WAYS IN",
  paths: BUY_PATHS,
  explainer:
    "**Uniswap, explained in one breath:** there is no order book and no company on the other side. A pool holds ETH and $PENNY. When you buy, you put ETH in and take $PENNY out, and the price moves with the ratio. Slippage is how much price movement you accept while your trade goes through. Bigger buy, bigger move. The pool is public, the contract is public, nobody can pause it.",
  quote: {
    text: '"The question isn\'t whether you can afford to buy a penny. The question is whether you can afford **not** to own the penny. Pick up the phone."',
    who: "Some guy on the trading floor, probably",
  },
};

/* ---------- slogan ---------- */

export const SLOGAN = {
  kick: "They watched the documentary. We lived the comments section.",
  headline: "EAT THE RICH.\n*TIP THE PENNY.*",
  body: "The old slogan was a protest against corporate power and rigged markets. Ours comes with a ticker. The penny points at one stock, the most shorted name on the tape, and lets the holders do the eating.",
};

/* ---------- meme gallery ---------- */

export const MEMES = {
  id: SECTION_IDS.memes,
  heading: "Meme Gallery",
  label: "SEC. 04 · SPREAD THE PENNY",
  items: [
    { src: "/images/meme-01.jpg", alt: "Penny in the broker's hand" },
    { src: "/images/meme-02.jpg", alt: "The rolling penny, editorial style" },
    { src: "/images/meme-03.jpg", alt: "Penny over the trading floor" },
    { src: "/images/meme-04.jpg", alt: "Giant penny, tiny shorts" },
    { src: "/images/meme-05.jpg", alt: "In penny we trust" },
    { src: "/images/meme-06.jpg", alt: "Penny wearing the red headband" },
    { src: "/images/meme-07.jpg", alt: "Penny meets the cat" },
  ],
  communitySlot: "your meme here\n(community slot)",
};

/* ---------- faq ---------- */

export const FAQ = {
  id: SECTION_IDS.faq,
  heading: "FAQ",
  label: "SEC. 05 · COMMON CENTS QUESTIONS",
  items: [
    {
      question: "Is this affiliated with GameStop or Robinhood?",
      answer:
        "No. $PENNY is a community memecoin paired with ==tokenized $GME== on Robinhood Chain. It's fan fiction with a ticker. Please don't sue the penny.",
      defaultOpen: true,
    },
    {
      question: "Why a penny?",
      answer:
        "Penny stocks are the original meme stocks: volatile, hated by the papers, loved by degenerates. $GME is the king of meme stocks. Pairing an actual penny with it is the most honest financial product ever created.",
    },
    {
      question: 'What does "paired with $GME" mean?',
      answer:
        "$PENNY doesn't trade against USD. It trades directly against ==tokenized $GME==, onchain. When the meme stock moves, the penny feels it. A community $GME Vault fed by trading fees is next on the list; when it goes live, it shows up right here.",
    },
    {
      question: "Will it go up?",
      answer:
        "We like the coin. A penny saved is a penny earned. Beyond that, we make no promises. See the disclaimer, then see a financial advisor, then see the chart anyway.",
    },
    {
      question: "What's the contract address?",
      answer: `${CONTRACT_ADDRESS}. Always verify it against our official X and Telegram before swapping.`,
      mono: true,
    },
  ],
};

/* ---------- finale + footer ---------- */

export const FINALE = {
  headline: "In holders we trust.\n*One squeeze at a time.*",
};

export const FOOTER = {
  copyright: "© 2026 THE PENNY · ROBINHOOD CHAIN",
  nav: [
    { label: "Lore", href: `#${SECTION_IDS.lore}` },
    { label: "Numbers", href: `#${SECTION_IDS.numbers}` },
    { label: "Buy", href: `#${SECTION_IDS.how}` },
    { label: "Memes", href: `#${SECTION_IDS.memes}` },
  ],
  legal:
    "$PENNY is a memecoin paired with tokenized $GME. It does not represent GameStop equity. It is, famously, worth about one cent of seriousness. Extremely volatile. Not an investment product. Not affiliated with GameStop Corp., Robinhood Markets, Inc., the U.S. Mint, or Abraham Lincoln. Please don't sue the penny.",
};
