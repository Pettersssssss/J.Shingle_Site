"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const layers = [
  {
    title: "01 — Telha",
    description: "É a camada externa da cobertura, formada por fibra de vidro, asfalto e grânulos minerais. Flexível e resistente às condições climáticas, está disponível em diferentes cores e nos modelos 3 Abas e Laminada, com acabamentos que se adaptam ao estilo de cada projeto.",
  },
  {
    title: "Subcobertura",
    title: "02 — Subcobertura",
    description: "Instalada abaixo das telhas, é uma camada adicional de proteção contra a entrada de água. Ajuda a impedir que a umidade alcance a base do telhado, especialmente em situações de chuva acompanhada de vento.",
  },
  {
    title: "Placas de OSB",
    title: "03 — Placas de OSB",
    description: "Formam uma base contínua e resistente sobre a estrutura do telhado. São responsáveis por oferecer uma superfície firme para a fixação das telhas e devem ser dimensionadas de acordo com as características da cobertura.",
  },
];

export function ShingleSystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [arrows, setArrows] = useState<{ path: string; x: number; y: number }[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateArrows = () => {
      const figure = section.querySelector<HTMLElement>(".shingle-system-visual");
      const image = figure?.querySelector("img");
      const layerHeadings = Array.from(section.querySelectorAll<HTMLElement>(".shingle-system-layers h3"));
      if (!figure || !image || !image.naturalWidth || !image.naturalHeight || layerHeadings.length !== 3) return;

      const sectionRect = section.getBoundingClientRect();
      const figureRect = figure.getBoundingClientRect();
      const scale = Math.min(figureRect.width / image.naturalWidth, figureRect.height / image.naturalHeight);
      const drawnWidth = image.naturalWidth * scale;
      const drawnHeight = image.naturalHeight * scale;
      const imageLeft = figureRect.left - sectionRect.left;
      const imageTop = figureRect.top - sectionRect.top + (figureRect.height - drawnHeight) / 2;
      const layerPoints = [
        { x: 0.78, y: 0.33 },
        { x: 0.76, y: 0.56 },
        { x: 0.75, y: 0.82 },
      ];

      setArrows(layerHeadings.map((heading, index) => {
        const target = heading.getBoundingClientRect();
        const point = layerPoints[index];
        const x1 = imageLeft + drawnWidth * point.x;
        const y1 = imageTop + drawnHeight * point.y;
        const x2 = target.left - sectionRect.left - 12;
        const y2 = target.top - sectionRect.top + target.height / 2;
        return { path: `M ${x1} ${y1} L ${x2} ${y2}`, x: x1, y: y1 };
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
    <ScrollReveal className="shingle-system-intro">
      <p className="eyebrow eyebrow-dark">Um sistema completo para a sua cobertura</p>
      <h2 id="shingle-system-title">Sistema de instalação<br /><span className="shingle-word">SHINGLE</span></h2>
      <p className="shingle-system-lead">A cobertura <span className="shingle-word">SHINGLE</span> combina telhas asfálticas, subcobertura e uma base estrutural contínua. Cada camada tem uma função específica na proteção contra a chuva e na durabilidade do telhado.</p>
    </ScrollReveal>

    <svg className="shingle-system-arrows" aria-hidden="true" focusable="false">
      <defs>
        <marker id="shingle-arrow-tip" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
      {arrows.map((arrow, index) => <g key={index}>
        <circle cx={arrow.x} cy={arrow.y} r="3" />
        <path d={arrow.path} markerEnd="url(#shingle-arrow-tip)" />
      </g>)}
    </svg>
    <figure className="shingle-system-visual">
      <Image
        src="/jshingle-system-layers-black.jpg"
        alt="Vista explodida da cobertura em três camadas: telhas SHINGLE, subcobertura e placas de OSB"
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 900px) 41vw, 36vw"
      />
    </figure>
    <div className="shingle-system-copy">
      <ol className="shingle-system-layers">
        {layers.map((layer, index) => <li key={layer.title}>
          <span className="shingle-system-number" aria-hidden="true">0{index + 1}</span>
          <div><h3>{layer.title}{index === 0 && <> <span className="shingle-word">SHINGLE</span></>}</h3><p>{layer.description}</p></div>
        </li>)}
      </ol>

      <div className="shingle-system-close"><strong>O resultado depende do sistema completo.</strong><p>Além dessas três camadas, a instalação exige atenção à inclinação do telhado, à ventilação, às fixações e aos arremates. A J.Shingle avalia esses detalhes para definir a solução adequada a cada projeto.</p></div>
    </div>
  </section>;
}
