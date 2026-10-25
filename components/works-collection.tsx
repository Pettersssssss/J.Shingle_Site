"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/site-link";
import { works, workImage, type WorkState } from "@/data/works";

type Filter = WorkState | "all";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "SP", label: "São Paulo" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
];

export function WorksCollection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedWork, setSelectedWork] = useState<(typeof works)[number] | null>(null);
  const imageDialog = useRef<HTMLDialogElement>(null);
  const visibleWorks = filter === "all" ? works : works.filter((work) => work.state === filter);

  useEffect(() => {
    const dialog = imageDialog.current;
    if (!dialog) return;

    if (selectedWork && !dialog.open) dialog.showModal();
    if (!selectedWork && dialog.open) dialog.close();
  }, [selectedWork]);

  return (
    <section className="works-collection shell" aria-label="Projetos da J.SHINGLE">
      <div className="works-filter" role="group" aria-label="Filtrar obras por estado">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="works-cards">
        {visibleWorks.map((work) => (
          <article className="work-card" key={work.slug}>
            <div className="work-card-copy">
              <p>{work.city} · {work.state}</p>
              <h2>{work.title}</h2>
              <p className="work-card-summary">{work.summary}</p>
            </div>
            <button
              className="work-card-media"
              type="button"
              onClick={() => setSelectedWork(work)}
              aria-label={`Ampliar foto de capa da obra ${work.title}`}
            >
              <Image src={workImage(work, 1)} alt={work.coverAlt} fill sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw" unoptimized />
              <span aria-hidden="true">Ampliar foto</span>
            </button>
            <Link className="work-card-link" href={`/obras/${work.slug}`}>Explorar obra <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </div>
      <dialog
        ref={imageDialog}
        className="work-image-dialog"
        aria-label={selectedWork ? `Foto ampliada: ${selectedWork.title}` : "Foto ampliada"}
        onClose={() => setSelectedWork(null)}
        onClick={(event) => {
          if (event.target === imageDialog.current) setSelectedWork(null);
        }}
      >
        {selectedWork && (
          <div className="work-image-dialog-content">
            <button className="work-image-dialog-close" type="button" onClick={() => setSelectedWork(null)} autoFocus>
              <span aria-hidden="true">×</span><span className="sr-only">Fechar foto ampliada</span>
            </button>
            <Image src={workImage(selectedWork, 1)} alt={selectedWork.coverAlt} fill sizes="(max-width: 900px) 96vw, 1200px" unoptimized />
            <p>{selectedWork.title} <span>· {selectedWork.city}, {selectedWork.state}</span></p>
          </div>
        )}
      </dialog>
    </section>
  );
}
