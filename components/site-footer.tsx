import Image from "next/image";
import Link from "@/components/site-link";
import { company } from "@/data/site";

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-main"><div className="footer-brand"><Image src="/jshingle-logo-light.png" alt="J.SHINGLE" width={74} height={74} /><p>Coberturas Shingle para domos, residências e projetos arquitetônicos especiais.</p></div><nav aria-label="Navegação do rodapé"><Link href="/#obras">Obras</Link><Link href="/telhas">Catálogo</Link><Link href="/#contato">Contato</Link><Link href="/privacidade">Privacidade</Link></nav><div className="footer-contact"><span>Vamos conversar sobre sua obra?</span><a className="text-link" href={company.whatsappUrl}>Falar com a J.SHINGLE</a><a className="text-link" href={company.instagram} target="_blank" rel="noopener noreferrer">Instagram @j.shingle</a></div></div><div className="shell footer-bottom"><span>© J.SHINGLE</span><span>Building &amp; Installation</span></div></footer>;
}
