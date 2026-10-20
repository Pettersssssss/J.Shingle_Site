import Image from "next/image";
import Link from "@/components/site-link";
import type { Shingle } from "@/data/site";

export function ShingleModelCard({ item, titleLevel = "h3" }: { item: Shingle; titleLevel?: "h2" | "h3" }) {
  const Title = titleLevel;

  return <article className="shingle-model-card">
    <Link className="shingle-model-cover" href={`/telhas/${item.slug}`} aria-label={`Conhecer telha ${item.name}`}>
      <Image src={item.tones[0].image} alt={`Amostra ${item.tones[0].name} da telha ${item.name}`} fill sizes="(max-width: 700px) 100vw, 50vw" />
      <span>Modelo {item.name}</span>
    </Link>
    <div className="shingle-model-body">
      <Title>{item.name}</Title>
      <p>{item.profile}</p>
      <Link className="text-link" href={`/telhas/${item.slug}`}>Conhecer o modelo e seus acabamentos</Link>
    </div>
  </article>;
}
