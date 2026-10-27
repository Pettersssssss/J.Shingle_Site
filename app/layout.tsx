import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: { default: "J.SHINGLE | Coberturas especiais em telhas Shingle", template: "%s | J.SHINGLE" },
  description: "Coberturas em telhas Shingle para domos geodésicos, residências de alto padrão e projetos arquitetônicos especiais.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head><link rel="preload" href="/fonts/montserrat-600.ttf" as="font" type="font/ttf" crossOrigin="anonymous" /></head><body>{children}<WhatsAppFloat /></body></html>;
}
