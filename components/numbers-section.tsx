import { NUMBERS } from "@/lib/constants";
import { Reveal } from "./reveal";
import { Section } from "./section";

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
          <div key={stat.label} className="num">
            <div className="v">{stat.value}</div>
            <div className="l">{stat.label}</div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
