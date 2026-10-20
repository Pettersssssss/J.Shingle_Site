"use client";

import { useState } from "react";
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
  const visibleWorks = filter === "all" ? works : works.filter((work) => work.state === filter);

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
          <Link className="work-card" href={`/obras/${work.slug}`} key={work.slug}>
            <div className="work-card-media">
              <Image src={workImage(work, 1)} alt={work.coverAlt} fill sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw" unoptimized />
            </div>
            <div className="work-card-copy">
              <p>{work.city} · {work.state}</p>
              <h2>{work.title}</h2>
              <span>Ver obra</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
