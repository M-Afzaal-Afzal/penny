import { INDEX } from "@/lib/constants";
import { Reveal } from "./reveal";
import { RichText } from "./rich-text";
import { Section } from "./section";

export function IndexSection() {
  return (
    <Section id={INDEX.id} heading={INDEX.heading} label={INDEX.label}>
      <p className="index-intro">
        <RichText text={INDEX.intro} />
      </p>

      <Reveal className="steps">
        {INDEX.pools.map((pool) => (
          <div
            key={pool.title}
            className={pool.dark ? "stepc stepc-dark" : "stepc"}
          >
            <div className="n">{pool.number}</div>
            <h3>{pool.title}</h3>
            <p>{pool.body}</p>
            <p className={`pool-status pool-status-${pool.status.tone}`}>
              {pool.status.label}
            </p>
          </div>
        ))}
      </Reveal>

      <Reveal className="sell-quote">
        <RichText text={INDEX.quote.text} />
        <span className="who">{INDEX.quote.who}</span>
      </Reveal>
    </Section>
  );
}
