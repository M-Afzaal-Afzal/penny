import { HOW_TO_BUY } from "@/lib/constants";
import { Reveal } from "./reveal";
import { externalLinkProps, RichText } from "./rich-text";
import { Section } from "./section";

export function HowToBuySection() {
  return (
    <Section
      id={HOW_TO_BUY.id}
      heading={HOW_TO_BUY.heading}
      label={HOW_TO_BUY.label}
    >
      <Reveal className="paths">
        {HOW_TO_BUY.paths.map((path) => (
          <div key={path.title} className={path.dark ? "path path-dark" : "path"}>
            <div className="ph">
              <h3>{path.title}</h3>
              <span className="lvl">{path.level}</span>
            </div>
            <div className="who">{path.who}</div>
            <ol>
              {path.steps.map((step, index) => (
                <li key={index}>
                  <span className="n">{index + 1}</span>
                  <span>
                    <RichText text={step} />
                  </span>
                </li>
              ))}
            </ol>
            <a
              className="cta"
              href={path.cta.href}
              {...externalLinkProps(path.cta.href)}
            >
              {path.cta.label}
            </a>
          </div>
        ))}
      </Reveal>

      <Reveal className="explain">
        <RichText text={HOW_TO_BUY.explainer} />
      </Reveal>

      <Reveal className="sell-quote">
        <RichText text={HOW_TO_BUY.quote.text} />
        <span className="who">{HOW_TO_BUY.quote.who}</span>
      </Reveal>
    </Section>
  );
}
