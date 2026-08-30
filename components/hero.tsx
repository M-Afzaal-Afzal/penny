import Image from "next/image";
import { HERO, IMAGES } from "@/lib/constants";
import { ContractAddressLine } from "./contract-address";
import { RichText } from "./rich-text";

export function Hero() {
  return (
    <div className="hero">
      <div>
        <div className="kicker">
          <span className="dot" /> <RichText text={HERO.kicker} />
        </div>
        <h1>
          <RichText text={HERO.headline} />
        </h1>
        <p className="dek">
          <RichText text={HERO.dek} />
        </p>
        <div className="byline">
          <RichText text={HERO.byline} />
        </div>
        <div className="hero-ctas">
          {HERO.ctas.map((cta) => (
            <a
              key={cta.href}
              className={cta.solid ? "btn2 solid" : "btn2"}
              href={cta.href}
            >
              {cta.label}
            </a>
          ))}
        </div>
        <ContractAddressLine />
      </div>
      <div className="hero-art">
        <div className="penny-wrap">
          <Image
            className="penny"
            src={IMAGES.penny}
            alt={HERO.imageAlt}
            width={680}
            height={680}
            priority
          />
          {HERO.stamps.map((stamp, index) => (
            <div key={stamp} className={`stamp s${index + 1}`}>
              {stamp}
            </div>
          ))}
          {HERO.clips.map((clip, index) => (
            <div key={clip.source} className={`clip c${index + 1}`}>
              <RichText text={clip.quote} />
              <span className="src">{clip.source}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
