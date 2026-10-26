"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const [arrows, setArrows] = useState<string[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateArrows = () => {
      const figure = section.querySelector<HTMLElement>(".shingle-system-visual");
      const image = figure?.querySelector("img");
      const layers = Array.from(section.querySelectorAll<HTMLElement>(".shingle-system-layers li"));
      if (!figure || !image || !image.naturalWidth || !image.naturalHeight || layers.length !== 3) return;

      const sectionRect = section.getBoundingClientRect();
      const figureRect = figure.getBoundingClientRect();
      const scale = Math.min(figureRect.width / image.naturalWidth, figureRect.height / image.naturalHeight);
      const drawnWidth = image.naturalWidth * scale;
      const drawnHeight = image.naturalHeight * scale;
      const imageLeft = figureRect.left - sectionRect.left;
      const imageTop = figureRect.top - sectionRect.top + (figureRect.height - drawnHeight) / 2;
      const layerY = [0.47, 0.62, 0.98];

      setArrows(layers.map((layer, index) => {
        const target = layer.getBoundingClientRect();
        const x1 = imageLeft + drawnWidth * 0.99;
        const y1 = imageTop + drawnHeight * layerY[index];
        const x2 = target.left - sectionRect.left - 10;
        const y2 = target.top - sectionRect.top + target.height / 2;
        const bend = Math.max(18, (x2 - x1) * 0.48);
        return `M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`;
      }));
    };

    const observer = new ResizeObserver(updateArrows);
    observer.observe(section);
    section.querySelectorAll(".shingle-system-visual, .shingle-system-layers li").forEach((element) => observer.observe(element));
    section.querySelector(".shingle-system-visual img")?.addEventListener("load", updateArrows);
    window.addEventListener("resize", updateArrows);
    updateArrows();

    return () => {
      observer.disconnect();
      section.querySelector(".shingle-system-visual img")?.removeEventListener("load", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  return <section ref={sectionRef} className="shingle-system-section" aria-labelledby="shingle-system-title">
    <svg className="shingle-system-arrows" aria-hidden="true" focusable="false">
      <defs>
        <marker id="shingle-arrow-tip" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="currentColor" />
        </marker>
      </defs>
      {arrows.map((path, index) => <path key={index} d={path} markerEnd="url(#shingle-arrow-tip)" />)}
    </svg>
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

      <ol className="shingle-system-layers">
        {layers.map((layer, index) => <li key={layer.title}>
          <span className="shingle-system-number" aria-hidden="true">0{index + 1}</span>
          <div><h3>{layer.title}</h3><p>{layer.description}</p></div>
        </li>)}
      </ol>

      <p className="shingle-system-close">Juntas, essas três camadas formam uma cobertura leve, estanque e durável, com acabamento elegante para o seu projeto.</p>
      <a className="button button-primary shingle-system-cta" href="#contato">Fale com a J.Shingle e monte o sistema ideal para a sua obra.</a>
    </div>
  </section>;
}
