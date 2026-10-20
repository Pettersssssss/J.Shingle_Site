import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "J.SHINGLE | Coberturas especiais em telhas Shingle", template: "%s | J.SHINGLE" },
  description: "Coberturas em telhas Shingle para domos geodésicos, residências de alto padrão e projetos arquitetônicos especiais.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head><link rel="preload" href="/fonts/montserrat-600.ttf" as="font" type="font/ttf" crossOrigin="anonymous" /></head><body>{children}</body></html>;
}
