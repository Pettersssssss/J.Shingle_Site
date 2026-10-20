import Link from "@/components/site-link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() { return <><SiteHeader dark /><main className="not-found"><div className="not-found-geometry" aria-hidden="true" /><div className="shell"><h1>Essa peça não encaixou.</h1><p>A página que você procura não faz parte desta estrutura.</p><Link className="button button-white" href="/">Voltar ao início</Link></div></main></>; }
