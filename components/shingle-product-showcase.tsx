"use client";

import { useState } from "react";
import Link from "@/components/site-link";
import { PhotoZoom } from "@/components/photo-zoom";
import { shingleProjectUrl, shingleWhatsappUrl, type Shingle } from "@/data/site";

export function ShingleProductShowcase({ item }: { item: Shingle }) {
  const [tone, setTone] = useState(item.tones[0]);

  return <div className="shingle-detail-grid">
    <div className="shingle-detail-copy">
      <p className="eyebrow eyebrow-dark">Telha Shingle</p>
      <h1>Modelo {item.name}</h1>
      <p>{item.description}</p>
      <div className="shingle-inquiry">
        <label htmlFor={`shingle-tone-${item.slug}`}>Cor de interesse</label>
        <select id={`shingle-tone-${item.slug}`} value={tone.name} onChange={(event) => setTone(item.tones.find((option) => option.name === event.target.value) ?? item.tones[0])}>
          {item.tones.map((option) => <option key={option.name} value={option.name}>{option.name}</option>)}
        </select>
        <div className="shingle-inquiry-actions">
          <Link className="button button-primary" href={shingleProjectUrl(item, tone.name)}>Apresentar projeto</Link>
          <a className="button button-outline" href={shingleWhatsappUrl(item, tone.name)}>Falar no WhatsApp</a>
        </div>
      </div>
    </div>
    <figure className="shingle-detail-cover shingle-selected-tone">
      <PhotoZoom src={tone.image} alt={`Amostra ${tone.name} da telha ${item.name}`} className="shingle-selected-tone-image" caption={`Acabamento ilustrado: ${tone.name}`} />
    </figure>
  </div>;
}
