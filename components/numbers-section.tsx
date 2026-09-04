import { NUMBERS, type Stat } from "@/lib/constants";
import { GmeStat } from "./gme-stat";
import { Reveal } from "./reveal";
import { externalLinkProps } from "./rich-text";
import { Section } from "./section";

function StatTile({ stat }: { stat: Stat }) {
  const body = (
    <>
      <div className="v">
        {"live" in stat ? <GmeStat field={stat.live} /> : stat.value}
      </div>
      <div className="l">{stat.label}</div>
    </>
  );

  // The live $GME tile links out to its Dexscreener page.
  return stat.href ? (
    <a className="num" href={stat.href} {...externalLinkProps(stat.href)}>
      {body}
    </a>
  ) : (
    <div className="num">{body}</div>
  );
}

export function NumbersSection() {
  return (
    <Section
      id={NUMBERS.id}
      className="dark"
      heading={NUMBERS.heading}
      label={NUMBERS.label}
    >
      <Reveal className="numgrid">
        {NUMBERS.stats.map((stat) => (
          <StatTile key={stat.label} stat={stat} />
        ))}
      </Reveal>
    </Section>
  );
}
