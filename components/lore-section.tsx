import { LORE } from "@/lib/constants";
import { Reveal } from "./reveal";
import { RichText } from "./rich-text";
import { Section } from "./section";

export function LoreSection() {
  return (
    <Section id={LORE.id} heading={LORE.heading} label={LORE.label}>
      <Reveal className="receipts">
        {LORE.receipts.map((receipt) => (
          <div key={receipt.paper} className="rec">
            <div className="paper-name">{receipt.paper}</div>
            <h3>
              <RichText text={receipt.headline} />
            </h3>
            <p>{receipt.body}</p>
            <span className="src">{receipt.source}</span>
          </div>
        ))}
      </Reveal>

      <Reveal className="lore-note">
        <RichText text={LORE.note.paragraphs.join("\n\n")} />
        <span className="sig">{LORE.note.signature}</span>
      </Reveal>

      <Reveal className="squeeze">
        <div className="kick">{LORE.squeeze.kick}</div>
        <h3>
          <RichText text={LORE.squeeze.heading} />
        </h3>
        <div className="sq-steps">
          {LORE.squeeze.steps.map((step) => (
            <div key={step.step} className="s">
              <span className="g">{step.step}</span>
              <div className="t">{step.title}</div>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
        <p className="sq-note">{LORE.squeeze.footnote}</p>
      </Reveal>
    </Section>
  );
}
