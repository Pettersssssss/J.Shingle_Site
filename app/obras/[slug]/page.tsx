import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "@/components/site-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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

  const remainingImages = Array.from({ length: work.imageCount - 1 }, (_, index) => workImage(work, index + 2));

  return <><SiteHeader /><main>
    <section className="work-detail shell">
      <Link href="/obras" className="back-link">Voltar para obras</Link>
      <div className="work-detail-heading">
        <div><p className="eyebrow eyebrow-dark">{work.city} · {work.state}</p><h1>{work.title}</h1></div>
        <p>{work.summary}</p>
      </div>
      <div className="work-detail-cover">
        <Image src={workImage(work, 1)} alt={work.coverAlt} fill sizes="100vw" priority unoptimized />
      </div>
    </section>
    <section className="work-gallery-section shell" aria-labelledby="work-gallery-title">
      <h2 id="work-gallery-title">Galeria da obra</h2>
      <div className="work-gallery">
        {remainingImages.map((src, index) => (
          <figure className="work-gallery-item" key={src}>
            <Image
              src={src}
              alt={`Registro fotográfico da obra ${work.title} em ${work.city}, vista ${index + 2}`}
              fill
              sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw"
              unoptimized
            />
          </figure>
        ))}
      </div>
    </section>
    <section className="agenda-cta shell"><div><p className="eyebrow eyebrow-dark">Seu projeto</p><h2>Converse com a J.SHINGLE.</h2></div><a className="button button-primary" href={company.whatsappUrl}>Solicitar projeto</a></section>
  </main><SiteFooter /></>;
}
