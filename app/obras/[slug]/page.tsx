import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/components/site-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import InteractiveImageBentoGallery, { type BentoGalleryImage } from "@/components/ui/bento-gallery";
import { company } from "@/data/site";
import { works, workImage } from "@/data/works";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  return work
    ? { title: `${work.title} · Obras`, description: work.summary }
    : { title: "Obra não encontrada" };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) notFound();

  const imageItems: BentoGalleryImage[] = Array.from({ length: work.imageCount }, (_, index) => ({
    id: index + 1,
    title: `${work.title} · Foto ${String(index + 1).padStart(2, "0")}`,
    desc: `${work.city} · ${work.state}`,
    url: workImage(work, index + 1),
    alt: index === 0
      ? work.coverAlt
      : `Registro fotográfico ${index + 1} da obra ${work.title}, em ${work.city}`,
    span: index === 0
      ? "work-bento-card--large"
      : index % 6 === 2
        ? "work-bento-card--tall"
        : index % 6 === 5
          ? "work-bento-card--wide"
          : undefined,
  }));

  return <><SiteHeader /><main>
    <section className="work-detail shell">
      <Link href="/obras" className="back-link">Voltar para obras</Link>
      <InteractiveImageBentoGallery
        imageItems={imageItems}
        title={work.title}
        description={`${work.city} · ${work.state} — ${work.summary}`}
      />
    </section>
    <section className="agenda-cta shell"><div><p className="eyebrow eyebrow-dark">Seu projeto</p><h2>Converse com a J.SHINGLE.</h2></div><a className="button button-primary" href={company.whatsappUrl}>Solicitar projeto</a></section>
  </main><SiteFooter /></>;
}
