import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "@/components/site-link";
import { ShingleInquiry } from "@/components/shingle-inquiry";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { shingles } from "@/data/site";

const number = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 });

export function generateStaticParams() {
  return shingles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = shingles.find((entry) => entry.slug === slug);
  return item ? { title: `Telha ${item.name}`, description: item.description } : { title: "Telha não encontrada" };
}

export default async function ShingleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = shingles.find((entry) => entry.slug === slug);
  if (!item) redirect("/telhas");

  const specs = [
    { label: "Largura da folha", value: `${number.format(item.specs.widthMm)} mm`, help: "Medida da folha no sentido transversal." },
    { label: "Comprimento da folha", value: `${number.format(item.specs.lengthMm)} mm`, help: "Medida da folha no sentido longitudinal." },
    { label: "Peso por pacote", value: `${number.format(item.specs.weightKgPerPack)} kg`, help: "Peso aproximado de um pacote completo." },
    { label: "Espessura da telha", value: `${number.format(item.specs.thicknessMm)} mm`, help: "Espessura nominal deste modelo." },
    { label: "Cobertura por pacote", value: `${number.format(item.specs.coverageM2PerPack)} m²`, help: "Área de referência. Recortes e características do telhado podem alterar a quantidade necessária." },
    { label: "Resistência ao vento", value: `${number.format(item.specs.windKmH)} km/h`, help: "Valor de referência do modelo; o desempenho depende da instalação e do sistema completo." },
    { label: "Embalagem", value: `${number.format(item.specs.sheetsPerPack)} folhas`, help: "Quantidade de folhas por pacote." },
    { label: "Garantia indicada", value: `${number.format(item.specs.warrantyYears)} anos`, help: "Prazo de referência. Consulte as condições de cobertura e aplicação com a equipe." },
  ];

  return <><SiteHeader /><main>
    <section className="detail-hero shell">
      <Link href="/telhas" className="back-link">Voltar para o catálogo</Link>
      <div className="shingle-detail-grid">
        <div className="shingle-detail-copy">
          <p className="eyebrow eyebrow-dark">Telha Shingle</p>
          <h1>Modelo {item.name}</h1>
          <p>{item.description}</p>
          <ShingleInquiry item={item} />
        </div>
        <figure className="shingle-detail-cover">
          <Image src={item.tones[0].image} alt={`Amostra ${item.tones[0].name} da telha ${item.name}`} fill sizes="(max-width: 860px) 100vw, 50vw" priority />
          <figcaption>Acabamento ilustrado: {item.tones[0].name}</figcaption>
        </figure>
      </div>
    </section>
    <section className="shingle-tone-section shell" aria-labelledby="shingle-colors-title">
      <header><p className="eyebrow eyebrow-dark">Acabamentos</p><h2 id="shingle-colors-title">Exemplos de cores do modelo {item.name}.</h2><p>Veja diferentes possibilidades para a cobertura. As cores podem variar entre telas; confirme a amostra física e a disponibilidade com a equipe.</p></header>
      <div className="shingle-tone-grid">
        {item.tones.map((tone) => <figure className="shingle-tone-card" key={tone.name}>
          <div className="shingle-tone-photo"><Image src={tone.image} alt={`Textura da telha ${item.name} na cor ${tone.name}`} fill sizes="(max-width: 650px) 50vw, (max-width: 1050px) 33vw, 25vw" /></div>
          <figcaption>{tone.name}</figcaption>
        </figure>)}
      </div>
    </section>
    <section className="shingle-spec-section shell" aria-labelledby="shingle-specs-title">
      <header><p className="eyebrow eyebrow-dark">Ficha do modelo</p><h2 id="shingle-specs-title">Informações técnicas.</h2><p>Consulte as medidas e características deste modelo para começar a planejar sua cobertura.</p></header>
      <dl className="shingle-spec-grid">
        {specs.map((spec) => <div className="shingle-spec" key={spec.label}>
          <dt>{spec.label}</dt><dd>{spec.value}</dd><p>{spec.help}</p>
        </div>)}
      </dl>
      <p className="shingle-spec-note">A escolha do modelo, o cálculo da quantidade e as condições de garantia dependem do seu projeto e da instalação. Nossa equipe pode orientar você a partir das medidas e dos detalhes da cobertura.</p>
    </section>
  </main><SiteFooter /></>;
}
