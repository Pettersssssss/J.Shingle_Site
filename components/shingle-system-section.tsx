import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

const layers = [
  {
    title: "Telha Shingle, linha Oakridge (cor Areia)",
    description: "A camada visível do telhado. Com acabamento em grânulos minerais e tonalidades que variam entre si, ela cria um visual sofisticado e protege contra sol, chuva e vento.",
  },
  {
    title: "Subcobertura",
    description: "Instalada sob as telhas, funciona como uma segunda barreira impermeável. Ela protege a estrutura contra umidade e infiltrações, mesmo em caso de vento forte ou chuva com pressão.",
  },
  {
    title: "Placas de OSB",
    description: "A base do sistema. Resistentes e uniformes, oferecem a superfície firme e plana que sustenta as demais camadas e garante um assentamento seguro.",
  },
];

export function ShingleSystemSection() {
  return <section className="shingle-system-section" aria-labelledby="shingle-system-title">
    <figure className="shingle-system-visual">
      <Image
        src="/jshingle-system-layers.webp"
        alt="Vista explodida da cobertura em três camadas: telhas Shingle, subcobertura e placas de OSB"
        fill
        sizes="(max-width: 760px) 100vw, 50vw"
      />
    </figure>
    <div className="shingle-system-copy">
      <ScrollReveal className="shingle-system-intro">
        <p className="eyebrow eyebrow-dark">Um sistema completo para a sua cobertura</p>
        <h2 id="shingle-system-title">Sistema de instalação da Shingle</h2>
        <p className="shingle-system-lead">A telha shingle da J.Shingle não trabalha sozinha. Ela faz parte de um sistema de camadas que se complementam para entregar durabilidade, conforto e proteção contra infiltrações.</p>
      </ScrollReveal>

      <ScrollReveal className="shingle-system-list-reveal">
        <ol className="shingle-system-layers">
          {layers.map((layer, index) => <li key={layer.title}>
            <span className="shingle-system-number" aria-hidden="true">0{index + 1}</span>
            <div><h3>{layer.title}</h3><p>{layer.description}</p></div>
          </li>)}
        </ol>
      </ScrollReveal>

      <p className="shingle-system-close">Juntas, essas três camadas formam uma cobertura leve, estanque e durável, com acabamento elegante para o seu projeto.</p>
      <a className="button button-primary shingle-system-cta" href="#contato">Fale com a J.Shingle e monte o sistema ideal para a sua obra.</a>
    </div>
  </section>;
}
