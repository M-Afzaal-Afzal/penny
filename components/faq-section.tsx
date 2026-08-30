import { FAQ } from "@/lib/constants";
import { Reveal } from "./reveal";
import { RichText } from "./rich-text";
import { Section } from "./section";

export function FaqSection() {
  return (
    <Section id={FAQ.id} heading={FAQ.heading} label={FAQ.label}>
      <Reveal>
        {FAQ.items.map((item) => (
          <details key={item.question} open={item.defaultOpen}>
            <summary>
              {item.question} <span className="pm" />
            </summary>
            <div className={item.mono ? "ans ans-mono" : "ans"}>
              <RichText text={item.answer} />
            </div>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}
