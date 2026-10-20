import type { Metadata } from "next";
import Link from "@/components/site-link";
import { ShingleModelCard } from "@/components/shingle-model-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company, shingles } from "@/data/site";

export const metadata: Metadata = {
  title: "Catálogo Shingle",
  description: "Conheça os modelos de telha Shingle 3 Abas e Laminada, seus acabamentos e detalhes técnicos.",
};

export default function ShinglesPage() {
  return <><SiteHeader /><main>
    <section className="page-hero page-hero-centered shell">
      <p className="eyebrow eyebrow-dark">Catálogo de telhas</p>
      <h1>Dois perfis para a sua cobertura.</h1>
      <p>Conheça exemplos de telhas Shingle 3 Abas e Laminada. Nossa equipe ajuda você a escolher e instalar a solução adequada ao seu projeto.</p>
    </section>
    <section className="catalog-grid shell" aria-label="Modelos de telha Shingle">
      {shingles.map((item) => <ShingleModelCard item={item} titleLevel="h2" key={item.slug} />)}
    </section>
    <p className="catalog-source-note shell">As imagens mostram exemplos de acabamentos. A percepção da cor pode variar entre telas; consulte a equipe para confirmar a disponibilidade, a amostra física e as condições técnicas.</p>
    <section className="agenda-cta shell">
      <div><p className="eyebrow eyebrow-dark">Seu projeto</p><h2>Vamos escolher a cobertura com você.</h2></div>
      <div className="catalog-cta-actions"><Link className="button button-primary" href="/#contato">Enviar dados do projeto</Link><a className="text-link" href={company.whatsappUrl}>Falar pelo WhatsApp</a></div>
    </section>
  </main><SiteFooter /></>;
}
