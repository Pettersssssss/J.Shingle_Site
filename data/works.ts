export type WorkState = "SP" | "MG" | "PA";

export type Work = {
  slug: string;
  title: string;
  city: string;
  state: WorkState;
  summary: string;
  coverAlt: string;
  imageCount: number;
  excludedImageNumbers?: number[];
};

export const works: Work[] = [
  {
    slug: "belem",
    title: "Belém",
    city: "Belém",
    state: "PA",
    summary: "Cobertura Shingle integrada à arquitetura e à vegetação do entorno.",
    coverAlt: "Domo de cobertura Shingle em meio à vegetação de Belém",
    imageCount: 7,
  },
  {
    slug: "sapucai-floresta",
    title: "Domo da floresta",
    city: "Sapucaí",
    state: "MG",
    summary: "Domo revestido de Shingle com deck e espaços de convivência na floresta.",
    coverAlt: "Domo da floresta com cobertura Shingle e deck de madeira",
    imageCount: 6,
    excludedImageNumbers: [5],
  },
  {
    slug: "sarapui",
    title: "Sarapuí",
    city: "Sarapuí",
    state: "SP",
    summary: "Domo de grande escala, da execução da cobertura aos ambientes internos.",
    coverAlt: "Domo de cobertura Shingle em Sarapuí visto de frente",
    imageCount: 5,
  },
];

export function workImage(work: Work, index: number) {
  return `/works/${work.slug}/${String(index).padStart(2, "0")}.webp`;
}
