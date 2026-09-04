import { FaqSection } from "@/components/faq-section";
import { FinaleSection } from "@/components/finale-section";
import { Hero } from "@/components/hero";
import { HowToBuySection } from "@/components/how-to-buy-section";
import { LoreSection } from "@/components/lore-section";
import { Marquee } from "@/components/marquee";
import { MemeGallery } from "@/components/meme-gallery";
import { NumbersSection } from "@/components/numbers-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SloganSection } from "@/components/slogan-section";
import { TickerBar } from "@/components/ticker-bar";

export default function Home() {
  return (
    <>
      <TickerBar />
      <SiteHeader />
      <main id="top">
        <Hero />
        <Marquee />
        <LoreSection />
        <NumbersSection />
        <HowToBuySection />
        <SloganSection />
        <MemeGallery />
        <FaqSection />
        <FinaleSection />
      </main>
      <SiteFooter />
    </>
  );
}
