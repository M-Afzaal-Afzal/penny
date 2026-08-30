import { BUY_BUTTON, FINALE, SOCIALS } from "@/lib/constants";
import { externalLinkProps, RichText } from "./rich-text";

export function FinaleSection() {
  return (
    <section className="finale">
      <h2>
        <RichText text={FINALE.headline} />
      </h2>
      <div className="btns">
        <a className="btn2 solid" href={BUY_BUTTON.href}>
          {BUY_BUTTON.label}
        </a>
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            className="btn2"
            href={social.href}
            {...externalLinkProps(social.href)}
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
