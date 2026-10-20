"use client";

import { useState } from "react";
import Link from "@/components/site-link";
import { shingleProjectUrl, shingleWhatsappUrl, type Shingle } from "@/data/site";

export function ShingleInquiry({ item }: { item: Shingle }) {
  const [tone, setTone] = useState("");

  return <div className="shingle-inquiry">
    <label htmlFor={`shingle-tone-${item.slug}`}>Cor de interesse</label>
    <select id={`shingle-tone-${item.slug}`} value={tone} onChange={(event) => setTone(event.target.value)}>
      <option value="">Ainda não escolhi</option>
      {item.tones.map((option) => <option key={option.name} value={option.name}>{option.name}</option>)}
    </select>
    <div className="shingle-inquiry-actions">
      <Link className="button button-primary" href={shingleProjectUrl(item, tone || undefined)}>Apresentar projeto</Link>
      <a className="button button-outline" href={shingleWhatsappUrl(item, tone || undefined)}>Falar no WhatsApp</a>
    </div>
  </div>;
}
