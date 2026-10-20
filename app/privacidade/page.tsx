import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Política de Privacidade", description: "Estrutura provisória da Política de Privacidade da J.SHINGLE." };
const sections = [
  ["Dados coletados", "O formulário reúne os dados informados voluntariamente para iniciar a conversa sobre um projeto."],
  ["Finalidade", "As informações são usadas para avaliar o contato inicial, compreender o escopo e responder à solicitação."],
  ["WhatsApp", "O envio abre o WhatsApp com uma mensagem organizada. O tratamento posterior também estará sujeito aos termos da plataforma."],
  ["Cookies e métricas", "As ferramentas de métricas e respectivos cookies serão descritos depois que a configuração final for definida."],
  ["Retenção", "Os prazos e critérios de retenção serão confirmados na revisão jurídica e operacional."],
  ["Direitos do usuário", "A versão final indicará os canais e procedimentos para solicitações relacionadas aos dados pessoais."],
  ["Contato e atualizações", "O canal oficial para solicitações será informado na versão definitiva. Alterações relevantes deverão atualizar a data desta política."],
];
export default function PrivacyPage() { return <><SiteHeader /><main><article className="legal shell"><p className="eyebrow eyebrow-dark">Privacidade</p><h1>Política de Privacidade</h1><div className="legal-warning">CONTEÚDO PROVISÓRIO — revisar antes da publicação final.</div><p>Esta página organiza os tópicos que deverão compor a política definitiva da J.SHINGLE. O texto atual não constitui aconselhamento jurídico.</p>{sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}</article></main><SiteFooter /></>; }
