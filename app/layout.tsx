import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-archivo",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <noscript>
          {/* Scroll-reveal needs JS; show everything when it's unavailable. */}
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
