import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WorksCollection } from "@/components/works-collection";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Obras",
  description: "Explore as obras da J.SHINGLE por projeto e veja as fotografias de cada cobertura.",
};

export default function WorksPage() {
  return <><SiteHeader /><main>
    <section className="page-hero page-hero-centered shell works-page-hero">
      <p className="eyebrow eyebrow-dark">Portfólio arquitetônico</p>
      <h1>Nossas obras.</h1>
      <p>Explore os projetos por local e abra cada obra para ver sua galeria de fotografias.</p>
    </section>
    <WorksCollection />
    <section className="agenda-cta shell"><div><p className="eyebrow eyebrow-dark">Seu projeto</p><h2>Converse com a J.SHINGLE.</h2></div><a className="button button-primary" href={company.whatsappUrl}>Solicitar projeto</a></section>
  </main><SiteFooter /></>;
}
