import type { ReactNode } from "react";

const TOKEN =
  /\*\*(.+?)\*\*|\*(.+?)\*|==(.+?)==|~~(.+?)~~|\[([^\]]+)\]\(([^)]+)\)|\n/g;

/** Opens external links in a new tab; in-page anchors and placeholders stay put. */
export function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? ({ target: "_blank", rel: "noreferrer" } as const)
    : undefined;
}

/**
 * Renders the minimal inline markup used by the content in lib/constants.ts:
 *   **bold**   *italic*   ==highlight==   ~~strike~~   [label](url)
 * Newlines render as <br />.
 */
export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(TOKEN)) {
    const [raw, bold, italic, highlight, strike, linkLabel, linkHref] = match;
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));

    const key = match.index;
    if (bold !== undefined) nodes.push(<b key={key}>{bold}</b>);
    else if (italic !== undefined) nodes.push(<em key={key}>{italic}</em>);
    else if (highlight !== undefined) nodes.push(<mark key={key}>{highlight}</mark>);
    else if (strike !== undefined)
      nodes.push(
        <span key={key} className="strike">
          {strike}
        </span>,
      );
    else if (linkLabel !== undefined)
      nodes.push(
        <a key={key} href={linkHref} {...externalLinkProps(linkHref)}>
          {linkLabel}
        </a>,
      );
    else nodes.push(<br key={key} />);

    cursor = match.index + raw.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <>{nodes}</>;
}
