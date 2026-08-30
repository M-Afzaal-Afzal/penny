import Image from "next/image";
import { MEMES } from "@/lib/constants";
import { Reveal } from "./reveal";
import { RichText } from "./rich-text";
import { Section } from "./section";

export function MemeGallery() {
  return (
    <Section id={MEMES.id} heading={MEMES.heading} label={MEMES.label}>
      <Reveal className="memes">
        {MEMES.items.map((meme) => (
          <div key={meme.src} className="memec filled">
            <Image
              src={meme.src}
              alt={meme.alt}
              fill
              sizes="(max-width: 980px) 50vw, 25vw"
            />
          </div>
        ))}
        <div className="memec">
          <RichText text={MEMES.communitySlot} />
        </div>
      </Reveal>
    </Section>
  );
}
