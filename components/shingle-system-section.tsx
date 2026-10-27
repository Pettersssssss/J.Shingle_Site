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
      <h2 id="shingle-system-title">Sistema de instalação da Shingle</h2>
      <p className="shingle-system-lead">A telha shingle da J.Shingle não trabalha sozinha. Ela faz parte de um sistema de camadas que se complementam para entregar durabilidade, conforto e proteção contra infiltrações.</p>
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
        alt="Vista explodida da cobertura em três camadas: telhas Shingle, subcobertura e placas de OSB"
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 900px) 41vw, 36vw"
      />
    </figure>
    <div className="shingle-system-copy">
      <ol className="shingle-system-layers">
        {layers.map((layer, index) => <li key={layer.title}>
          <span className="shingle-system-number" aria-hidden="true">0{index + 1}</span>
          <div><h3>{layer.title}</h3><p>{layer.description}</p></div>
        </li>)}
      </ol>

      <p className="shingle-system-close">Juntas, essas três camadas formam uma cobertura leve, estanque e durável, com acabamento elegante para o seu projeto.</p>
    </div>
  </section>;
}
