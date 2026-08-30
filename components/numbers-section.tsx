import { NUMBERS, VAULT_SHARES, VAULT_USD } from "@/lib/constants";
import { num2 } from "@/lib/format";
import { CountUp } from "./count-up";
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
      <div className="vault-line">
        <span className="dot" /> {NUMBERS.vaultLabel}
      </div>
      <Reveal className="vault-big">
        <CountUp value={VAULT_USD} />
      </Reveal>
      <div className="vault-sub">
        <b>{num2(VAULT_SHARES)}</b> {NUMBERS.vaultSharesLabel}
      </div>

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
