export type WorkState = "SP" | "MG" | "PA";

export type Work = {
  slug: string;
  title: string;
  city: string;
  state: WorkState;
  summary: string;
  coverAlt: string;
  imageCount: number;
};

export const works: Work[] = [
  {
    slug: "jambeiro",
    title: "Jambeiro",
    city: "Jambeiro",
    state: "SP",
    summary: "Domo geodésico com cobertura Shingle, fachada envidraçada e paisagismo.",
    coverAlt: "Domo geodésico de Jambeiro com cobertura escura e fachada de vidro",
    imageCount: 8,
  },
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
  },
  {
    slug: "sapucai-aguas",
    title: "Domo das águas",
    city: "Sapucaí",
    state: "MG",
    summary: "Cobertura e detalhes de um domo geodésico em área arborizada.",
    coverAlt: "Domo das águas com cobertura Shingle em área arborizada",
    imageCount: 11,
  },
  {
    slug: "atibaia",
    title: "Atibaia",
    city: "Atibaia",
    state: "SP",
    summary: "Domo de cobertura Shingle visto do deck, da paisagem e de cima.",
    coverAlt: "Vista aérea do domo com cobertura Shingle em Atibaia",
    imageCount: 12,
  },
  {
    slug: "sarapui",
    title: "Sarapuí",
    city: "Sarapuí",
    state: "SP",
    summary: "Domo de grande escala, da execução da cobertura aos ambientes internos.",
    coverAlt: "Domo de cobertura Shingle em Sarapuí visto de frente",
    imageCount: 18,
  },
  {
    slug: "tiradentes",
    title: "Tiradentes",
    city: "Tiradentes",
    state: "MG",
    summary: "Domo na paisagem mineira visto do pôr do sol e de cima.",
    coverAlt: "Domo geodésico em Tiradentes ao pôr do sol",
    imageCount: 4,
  },
];

export function workImage(work: Work, index: number) {
  return `/works/${work.slug}/${String(index).padStart(2, "0")}.webp`;
}
