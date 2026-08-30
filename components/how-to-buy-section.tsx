import { HOW_TO_BUY } from "@/lib/constants";
import { Reveal } from "./reveal";
import { RichText } from "./rich-text";
import { Section } from "./section";

export function HowToBuySection() {
  return (
    <Section
      id={HOW_TO_BUY.id}
      heading={HOW_TO_BUY.heading}
      label={HOW_TO_BUY.label}
    >
      <Reveal className="steps">
        {HOW_TO_BUY.steps.map((step) => (
          <div key={step.number} className="stepc">
            <div className="n">{step.number}</div>
            <h3>{step.title}</h3>
            <p>
              <RichText text={step.body} />
            </p>
          </div>
        ))}
      </Reveal>

      <Reveal className="sell-quote">
        <RichText text={HOW_TO_BUY.quote.text} />
        <span className="who">{HOW_TO_BUY.quote.who}</span>
      </Reveal>
    </Section>
  );
}
