import { num2, signedPct, usd } from "./format";

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

// Replace "#" with the real community links.
export const SOCIALS = [
  { label: "𝕏 Follow", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "Dexscreener", href: "#" },
];

export const EXTERNAL_LINKS = {
  robinhoodWallet: "#",
  relay: "#",
};

/* ---------- site meta ---------- */

export const SITE = {
  name: "The Penny",
  ticker: "$PENNY",
  tagline: "PAIRED WITH $GME · ROBINHOOD CHAIN",
  title: "$PENNY | Penny stocks are back. This time it's literal.",
  description:
    "$PENNY is a memecoin paired with tokenized $GME on Robinhood Chain. The most shorted stock in history on one side, one cent of pure conviction on the other. Every trade stacks the Vault.",
};

export const IMAGES = {
  logo: "/images/logo.jpg",
  penny: "/images/penny-coin.jpg",
};

/* ---------- market data (demo values — wire to live feeds) ---------- */

export const MARKET = {
  gmePrice: 28.42,
  gmeChangePct: 3.1,
  vaultGme: 24310.55,
  lpGme: 118204.87,
};

export const VAULT_SHARES = MARKET.vaultGme + MARKET.lpGme;
export const VAULT_USD = VAULT_SHARES * MARKET.gmePrice;

/* ---------- navigation ---------- */

export const SECTION_IDS = {
  lore: "lore",
  index: "index",
  numbers: "numbers",
  how: "how",
  memes: "memes",
  faq: "faq",
};

export const NAV_LINKS = [
  { label: "Lore", href: `#${SECTION_IDS.lore}` },
  { label: "Index", href: `#${SECTION_IDS.index}` },
  { label: "Numbers", href: `#${SECTION_IDS.numbers}` },
  { label: "How to buy", href: `#${SECTION_IDS.how}` },
  { label: "Memes", href: `#${SECTION_IDS.memes}` },
  { label: "FAQ", href: `#${SECTION_IDS.faq}` },
];

export const BUY_BUTTON = { label: "Buy $PENNY", href: `#${SECTION_IDS.how}` };

/* ---------- top ticker ---------- */

export interface TickerItem {
  text: string;
  /** CSS class from the ticker styles: up (green), dn (red), cp (copper). */
  cls?: "up" | "dn" | "cp";
}

export const TICKER: TickerItem[] = [
  { text: SITE.ticker, cls: "cp" },
  { text: "▲ literally one cent", cls: "up" },
  { text: "·" },
  { text: `$GME **${usd(MARKET.gmePrice)}**` },
  { text: signedPct(MARKET.gmeChangePct), cls: MARKET.gmeChangePct >= 0 ? "up" : "dn" },
  { text: "·" },
  { text: `VAULT **${num2(MARKET.vaultGme)}** GME` },
  { text: "·" },
  { text: "SHORTS ▼ still not covered", cls: "dn" },
  { text: "·" },
];

/* ---------- hero ---------- */

export const HERO = {
  kicker: "FRONT PAGE · **MEME STOCK** MEETS **MEMECOIN**",
  headline:
    "Penny stocks are back.\nThis time it's *literal*.\n~~Not financial advice.~~",
  dek: "$PENNY is a memecoin paired with **tokenized $GME** on Robinhood Chain. The most shorted stock in history on one side, **one cent of pure conviction** on the other. Every trade stacks the Vault. The papers warned you about penny stocks. So we made one you can actually hold.",
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
  "The index of the meme stocks",
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
      "They wrote a thousand headlines warning you about penny stocks. They halted the buy button on $GME. So we did the only reasonable thing: **put an actual penny on the chain Robinhood built**, and paired it with **tokenized $GME**.",
      "But $GME is only the first name on the list. **$PENNY is built to become THE penny stock: one coin indexing the meme stocks.** The low caps. The left-for-dead tickers. The most shorted companies on the tape, squeeze candidates every one. The same stocks the papers called dangerous, pooled behind one cent.",
      "Every new pool gets added the only way that would be legitimate: **the community votes the next ticker in**. One penny, many battlegrounds. The suits pick their shorts. **We pick our fights.**",
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
      "Every pool in the Index targets a high-short-interest ticker for exactly this reason. Apes together strong.",
  },
};

/* ---------- the index ---------- */

export interface Pool {
  number: string;
  title: string;
  body: string;
  status: { label: string; tone: "live" | "pending" | "locked" };
  dark?: boolean;
}

const POOLS: Pool[] = [
  {
    number: "⚔",
    title: "PENNY / GME",
    body: "The genesis pool. The king of meme stocks, live on Robinhood Chain. The Vault stacks it on every trade.",
    status: { label: "● LIVE", tone: "live" },
    dark: true,
  },
  {
    number: "02",
    title: "PENNY / ???",
    body: "The second battleground. Nominations open to any tokenized ticker with short interest worth fighting. The community votes it in.",
    status: { label: "◌ VOTE PENDING", tone: "pending" },
  },
  {
    number: "03",
    title: "PENNY / ???",
    body: "One campaign at a time. Each time a pool succeeds, the next nomination opens. Every heavily shorted meme stock is a candidate. One penny, the whole index, eventually.",
    status: { label: "◌ UNLOCKS AFTER CAMPAIGN 02", tone: "locked" },
  },
];

export const INDEX = {
  id: SECTION_IDS.index,
  heading: "The Index",
  label: "SEC. 02 · ONE PENNY, MANY BATTLEGROUNDS",
  intro:
    "$PENNY is the ==index of the meme stocks==: every pool pairs the penny against a tokenized, high-short-interest ticker. $GME opens the index. The community votes each new stock in, pool by pool. High short interest gets you on the ballot, and the cadence is simple: **one campaign at a time. Each successful campaign unlocks the next nomination.** The holders decide who we squeeze next.",
  pools: POOLS,
  quote: {
    text: "\"They built indexes of the S&P 500. We're building an index of everything they bet against. High short interest isn't a warning label anymore. It's **an application form**.\"",
    who: "The Index thesis, one cent edition",
  },
};

/* ---------- numbers ---------- */

export const NUMBERS = {
  id: SECTION_IDS.numbers,
  heading: "The Numbers",
  label: "SEC. 03 · LIVE · AUDITED BY VIBES",
  vaultLabel: "LIVE · $GME IN THE VAULT",
  vaultSharesLabel: "TOKENIZED $GME SHARES",
  stats: [
    { value: "1B", label: "Total supply" },
    { value: "0/0", label: "Tax" },
    { value: "100%", label: "In pool · LP burned" },
    { value: usd(MARKET.gmePrice), label: "$GME · tokenized" },
  ],
};

/* ---------- how to buy ---------- */

export const HOW_TO_BUY = {
  id: SECTION_IDS.how,
  heading: "How to Buy",
  label: "SEC. 04 · SO EASY A SUIT COULD DO IT",
  steps: [
    {
      number: "01",
      title: "Get the wallet",
      body: `Download [Robinhood Wallet](${EXTERNAL_LINKS.robinhoodWallet}), or use any wallet and add the Robinhood Chain network.`,
    },
    {
      number: "02",
      title: "Bridge funds",
      body: `Bridge over to Robinhood Chain. We recommend [Relay](${EXTERNAL_LINKS.relay}), but any bridge in the official docs works.`,
    },
    {
      number: "03",
      title: "Swap for $PENNY",
      body: "Open the DEX, paste the contract address, swap. Congratulations, you now hold an actual penny.",
    },
  ],
  quote: {
    text: '"The question isn\'t whether you can afford to buy a penny. The question is whether you can afford **not** to own the penny. Pick up the phone."',
    who: "Some guy on the trading floor, probably",
  },
};

/* ---------- slogan ---------- */

export const SLOGAN = {
  kick: "They watched the documentary. We lived the comments section.",
  headline: "EAT THE RICH.\n*TIP THE PENNY.*",
  body: "The old slogan was a protest against corporate power and rigged markets. Ours comes with a ticker. Every pool in the Index points the penny at the most shorted corporations on the tape and lets the holders do the eating.",
};

/* ---------- meme gallery ---------- */

export const MEMES = {
  id: SECTION_IDS.memes,
  heading: "Meme Gallery",
  label: "SEC. 05 · SPREAD THE PENNY",
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
  label: "SEC. 06 · COMMON CENTS QUESTIONS",
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
        "$PENNY doesn't trade against USD. It trades directly against ==tokenized $GME==, onchain. When the meme stock moves, the penny feels it. Trading fees stack tokenized $GME in the community Vault.",
    },
    {
      question: "What's the Index?",
      answer:
        "$PENNY starts paired with $GME, but the plan is bigger: an ==index of meme stocks==, low caps and high-short-interest names, each added as a new pool. New tickers get in one way only: ==the community votes them in==. One campaign at a time: ==each successful campaign opens the next nomination==. The suits pick their shorts; the holders pick the fights.",
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
    "$PENNY is a memecoin paired with tokenized $GME. It does not represent GameStop equity, and holders cannot redeem assets from the Vault. It is, famously, worth about one cent of seriousness. Extremely volatile. Not an investment product. Not affiliated with GameStop Corp., Robinhood Markets, Inc., the U.S. Mint, or Abraham Lincoln. Please don't sue the penny.",
};
