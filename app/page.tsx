import Link from "@/components/site-link";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { FAQSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, shingles } from "@/data/site";
import { ProjectCarousel } from "@/components/project-carousel";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeroTiltLogo } from "@/components/hero-tilt-logo";
import { ShingleModelCard } from "@/components/shingle-model-card";
import { FinishGallery } from "@/components/finish-gallery";
import { works, workImage } from "@/data/works";
import { ShingleSystemSection } from "@/components/shingle-system-section";

const projects = works.map((work) => ({
  name: work.title,
  type: `${work.city} · ${work.state}`,
  image: workImage(work, 1),
  alt: work.coverAlt,
  href: `/obras/${work.slug}`,
}));

export default function HomePage() {
  return (
    <>
      <main>
        <section className="hero">
          <SiteHeader dark />
          <div className="hero-media"><Image src="/jshingle-hero.webp" alt="Domo geodésico com cobertura Shingle em área arborizada" fill priority sizes="100vw" className="hero-photo" /></div>
          <div className="shell hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Coberturas Shingle</p>
              <h1><span>Coberturas que</span>{" "}<span>marcam a arquitetura.</span></h1>
              <p className="hero-lead">Execução especializada para domos, residências e projetos em que a cobertura faz parte da identidade.</p>
              <div className="hero-actions">
                <a className="button button-white" href={company.whatsappUrl}>Solicitar projeto</a>
                <Link className="text-link" href="/#obras">Ver obras</Link>
              </div>
            </div>
            <HeroTiltLogo />
          </div>
        </section>

        <section className="section shell" id="especialidades">
          <header className="center-heading">
            <p className="eyebrow eyebrow-dark">Precisão em cada plano</p>
            <ScrollReveal><h2>Especialistas em cobertura.</h2></ScrollReveal>
            <p>Da leitura da geometria ao acabamento final, cada solução é pensada para a arquitetura do projeto.</p>
          </header>
          <ScrollReveal className="specialty-grid">
            <article className="specialty-card">
              <div className="specialty-media specialty-media-dome"><Image src="/jshingle-specialty-dome.webp" alt="Estrutura com cobertura Shingle em área arborizada de Belém" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
              <div><h3>Domos geodésicos</h3><p>Encaixes, recortes e impermeabilização tratados com atenção à geometria da estrutura.</p></div>
            </article>
            <article className="specialty-card specialty-card-reverse">
              <div className="specialty-media"><Image src="/jshingle-specialty-residential.webp" alt="Residência com cobertura em telhas Shingle de tons terrosos" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
              <div><h3>Residências de alto padrão</h3><p>Coberturas de presença arquitetônica para residências, chalés e empreendimentos especiais.</p></div>
            </article>
          </ScrollReveal>
        </section>

        <ShingleSystemSection />

        <section className="portfolio-section" id="obras">
          <div className="shell">
            <header className="center-heading center-heading-light">
              <p className="eyebrow">Portfólio arquitetônico</p>
              <ScrollReveal><h2>Nossas obras.</h2></ScrollReveal>
              <p>Conheça projetos realizados em Belém, Sapucaí e Sarapuí.</p>
            </header>
            <ProjectCarousel projects={projects} />
            <div className="portfolio-action"><Link className="button button-white" href="/obras">Explorar Obras</Link></div>
          </div>
        </section>

        <section className="section shell" id="telhas">
          <header className="center-heading">
            <p className="eyebrow eyebrow-dark">Telhas Shingle</p>
            <ScrollReveal><h2>Venda e instalação para o seu projeto.</h2></ScrollReveal>
            <p>Conheça exemplos dos modelos 3 Abas e Laminada. A escolha da telha e a instalação são definidas de acordo com as necessidades da sua cobertura.</p>
          </header>
          <ScrollReveal className="shingle-preview-grid">
            {shingles.map((item) => <ShingleModelCard item={item} key={item.slug} />)}
          </ScrollReveal>
          <div className="catalog-action"><Link className="button button-primary" href="/telhas">Ver modelos de telha</Link><Link className="text-link" href="/#contato">Apresentar meu projeto</Link></div>
        </section>

        <section className="finish-section" id="acabamento">
          <div className="shell">
            <header className="center-heading center-heading-light">
              <p className="eyebrow">Execução especializada</p>
              <ScrollReveal><h2>Detalhes que definem o resultado.</h2></ScrollReveal>
              <p>Encontros, recortes, bordas e transições tratados como parte da arquitetura.</p>
            </header>
            <ScrollReveal><FinishGallery /></ScrollReveal>
          </div>
        </section>

        <section className="section instagram-section" id="instagram" aria-labelledby="instagram-title">
          <div className="shell instagram-layout">
            <div className="instagram-copy">
              <p className="eyebrow eyebrow-dark">J.SHINGLE no Instagram</p>
              <ScrollReveal><h2 id="instagram-title">Acompanhe nossas obras de perto.</h2></ScrollReveal>
              <p className="instagram-description">Projetos, detalhes de execução e atualizações no perfil da J.SHINGLE.</p>
              <a className="button button-primary instagram-cta" href={company.instagram}>Ver Instagram</a>
            </div>
            <div className="instagram-art">
              <Image src="/jshingle-instagram-figma.png" alt="Celular com o perfil da J.SHINGLE no Instagram e ícones do aplicativo" width={2095} height={1276} sizes="(max-width: 860px) 200vw, 100vw" unoptimized />
            </div>
          </div>
        </section>

        <section className="section shell" id="depoimentos">
          <header className="center-heading">
            <p className="eyebrow eyebrow-dark">Experiências reais</p>
            <h2>Quem construiu com a J.SHINGLE.</h2>
          </header>
          <div className="story-pending"><p>Depoimentos de clientes e parceiros serão publicados aqui quando estiverem disponíveis e autorizados.</p></div>
        </section>

        <FAQSection />

        <section className="contact-section" id="contato">
          <div className="shell contact-layout">
            <header><p className="eyebrow">Conte sobre a obra</p><h2>Seu projeto começa aqui.</h2><p>Envie as informações iniciais. A equipe organiza o briefing e orienta os próximos passos.</p></header>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
