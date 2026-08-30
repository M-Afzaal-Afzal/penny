import { SLOGAN } from "@/lib/constants";
import { RichText } from "./rich-text";

export function SloganSection() {
  return (
    <section className="slogan">
      <div className="wrap">
        <p className="slogan-kick">{SLOGAN.kick}</p>
        <h2>
          <RichText text={SLOGAN.headline} />
        </h2>
        <p className="slogan-sub">{SLOGAN.body}</p>
      </div>
    </section>
  );
}
