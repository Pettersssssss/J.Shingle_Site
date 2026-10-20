import { notFound, redirect } from "next/navigation";

const sections = ["especialidades", "acabamento", "depoimentos", "faq", "contato"] as const;

// Preserve old shared URLs without maintaining duplicate section pages.
export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export default async function SectionRedirect({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.some((item) => item === section)) notFound();
  redirect(`/#${section}`);
}
