const whatsappNumber = "5511976993021";

export const company = {
  name: "J.SHINGLE",
  descriptor: "Coberturas especiais",
  email: "[CONFIRMAR E-MAIL]",
  instagram: "https://www.instagram.com/j.shingle/",
  serviceArea: "[CONFIRMAR REGIÕES ATENDIDAS]",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, J.SHINGLE. Gostaria de conversar sobre um projeto de cobertura.")}`,
};

export type Shingle = {
  slug: string;
  name: string;
  line: "Standart" | "Premium";
  profile: string;
  description: string;
  tones: { name: string; image: string }[];
  specs: {
    widthMm: number;
    lengthMm: number;
    weightKgPerPack: number;
    thicknessMm: number;
    coverageM2PerPack: number;
    windKmH: number;
    sheetsPerPack: number;
    warrantyYears: number;
  };
};

export const shingles: Shingle[] = [
  {
    slug: "3-abas",
    name: "3 Abas",
    line: "Standart",
    profile: "Recorte clássico em três abas, com linhas regulares na cobertura.",
    description: "A telha Shingle 3 Abas cria uma paginação uniforme e oferece diferentes possibilidades de acabamento para o seu projeto.",
    tones: [
      { name: "Ocean Blue", image: "/telhas/3-abas-ocean-blue.webp" },
      { name: "Desert Tan", image: "/telhas/3-abas-desert-tan.webp" },
      { name: "Estate Gray", image: "/telhas/3-abas-estate-gray.webp" },
      { name: "Bark Brown", image: "/telhas/3-abas-bark-brown.webp" },
      { name: "Chapel Gray", image: "/telhas/3-abas-chapel-gray.webp" },
      { name: "Cloud Gray", image: "/telhas/3-abas-cloud-gray.webp" },
    ],
    specs: { widthMm: 333, lengthMm: 1000, weightKgPerPack: 27, thicknessMm: 2.68, coverageM2PerPack: 3.1, windKmH: 100, sheetsPerPack: 21, warrantyYears: 20 },
  },
  {
    slug: "laminada",
    name: "Laminada",
    line: "Standart",
    profile: "Camadas sobrepostas que dão profundidade e relevo ao telhado.",
    description: "A telha Shingle Laminada apresenta um acabamento dimensional, com textura e variações de tonalidade que valorizam a cobertura.",
    tones: [
      { name: "Desert Tan", image: "/telhas/laminada-desert-tan.webp" },
      { name: "Estate Gray", image: "/telhas/laminada-estate-gray.webp" },
    ],
    specs: { widthMm: 333, lengthMm: 1000, weightKgPerPack: 27, thicknessMm: 5.2, coverageM2PerPack: 2.32, windKmH: 100, sheetsPerPack: 16, warrantyYears: 30 },
  },
];

export function shingleProjectUrl(item: Shingle, tone?: string) {
  const query = new URLSearchParams({ telha: item.slug });
  if (tone) query.set("cor", tone);
  return `/?${query.toString()}#contato`;
}

export function shingleWhatsappUrl(item: Shingle, tone?: string) {
  const color = tone ? `, cor ${tone}` : "";
  const message = `Olá, J.SHINGLE. Tenho interesse na telha ${item.name} (Linha ${item.line})${color}. Gostaria de avaliar esse modelo no meu projeto.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const faqs = [
  { question: "O que é telha Shingle?", answer: "É um sistema de cobertura flexível, com acabamento mineral e diferentes perfis visuais. A especificação final depende da base, da inclinação e das condições de cada projeto." },
  { question: "Shingle pode ser aplicada em domos?", answer: "A flexibilidade do material favorece aplicações em geometrias complexas. A viabilidade e os detalhes de execução precisam ser avaliados para cada estrutura." },
  { question: "A J.SHINGLE trabalha com residências?", answer: "A estrutura de atendimento contempla residências, chalés, domos e projetos arquitetônicos especiais. O escopo é validado a partir das informações iniciais da obra." },
  { question: "Como solicitar uma avaliação?", answer: "Envie o formulário desta página com os dados básicos do projeto. A equipe receberá uma mensagem organizada para iniciar a conversa pelo WhatsApp." },
  { question: "Quais informações preciso enviar?", answer: "Cidade, estado, tipo de projeto, tipo de cobertura, previsão de início e uma breve descrição ajudam na avaliação inicial." },
  { question: "Existem diferentes modelos de Shingle?", answer: "Sim. Você pode conhecer exemplos dos modelos 3 Abas e Laminada no catálogo. A escolha final depende das características do seu projeto." },
  { question: "Como funciona a escolha da telha?", answer: "A escolha considera a linguagem arquitetônica, a geometria, a base da cobertura e o acabamento desejado. A indicação definitiva depende da análise do projeto." },
  { question: "A J.SHINGLE atende outras regiões?", answer: "A área de atendimento ainda será confirmada. Informe cidade e estado no formulário para que a viabilidade seja analisada." },
];
