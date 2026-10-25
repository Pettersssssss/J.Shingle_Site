import { PhotoZoom } from "@/components/photo-zoom";

const finishes = [
  { src: "/acabamentos/janela-shingle.webp", alt: "Janela integrada à cobertura Shingle, com paisagem ao fundo", caption: "Integração com a arquitetura" },
  { src: "/acabamentos/detalhe-telha-madeira.webp", alt: "Detalhe de telhas Shingle e arremate em madeira", caption: "Detalhes de acabamento" },
  { src: "/acabamentos/claraboia-geometrica.webp", alt: "Claraboia geométrica em cobertura Shingle", caption: "Recortes e luz natural" },
];

export function FinishGallery() {
  return <div className="finish-mosaic">
    {finishes.map((item, index) => <PhotoZoom key={item.src} src={item.src} alt={item.alt} caption={item.caption} className={`finish-tile${index === 0 ? " finish-tile-main" : ""}`} />)}
  </div>;
}
