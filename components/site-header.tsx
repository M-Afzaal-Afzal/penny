import Image from "next/image";
import { BUY_BUTTON, IMAGES, NAV_LINKS, SITE } from "@/lib/constants";
import { GmeStat } from "./gme-stat";

export function SiteHeader() {
  return (
    <header>
      <a className="masthead" href="#top">
        <Image src={IMAGES.logo} alt={SITE.ticker} width={44} height={44} />
        <span className="t">
          <b>{SITE.name}</b>
          <small>{SITE.tagline}</small>
        </span>
      </a>
      <div className="gme-pill">
        <span className="dot" />
        $GME{" "}
        <b>
          <GmeStat field="price" />
        </b>
      </div>
      <nav className="top">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="buy-btn" href={BUY_BUTTON.href}>
        {BUY_BUTTON.label}
      </a>
    </header>
  );
}
