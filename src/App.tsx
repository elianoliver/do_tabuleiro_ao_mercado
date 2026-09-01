import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  CreditCard,
  Download,
  FileText,
  Infinity as InfinityIcon,
  Lightbulb,
  Mail,
  Menu,
  Quote,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  Ticket,
  TrendingUp,
  Users,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { benefits, chapters, faqs, menuItems, previews, testimonials } from './content';
import { siteConfig, trackCheckout } from './config';

const benefitIcons: Record<string, LucideIcon> = {
  target: Target,
  lightbulb: Lightbulb,
  trending: TrendingUp,
  users: Users,
  book: BookOpen,
  infinity: InfinityIcon,
};

function SectionHeading({ eyebrow, title, accent, description }: { eyebrow?: string; title: string; accent: string; description: string }) {
  return (
    <header className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title} <span>{accent}</span></h2>
      <p>{description}</p>
    </header>
  );
}

function PurchaseLink({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
    <a
      className={className}
      href={siteConfig.checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackCheckout}
    >
      {children}
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="header-shell">
        <a className="brand" href="#inicio" aria-label="Do Tabuleiro ao Mercado — início">
          <img src="/logo.svg" alt="" />
          <span>Do Tabuleiro<br />ao Mercado</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {menuItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="button button-small desktop-cta" href="#comprar">Comprar agora</a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a className="button" href="#comprar" onClick={() => setMenuOpen(false)}>Comprar agora</a>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker"><span /> Um guia prático para quem quer jogar para ganhar</span>
          <h1>Do <em>Tabuleiro</em><br />ao <em>Mercado</em></h1>
          <p>Aprenda empreendedorismo de forma dinâmica e transforme estratégia em decisões que fazem o seu negócio avançar.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#comprar">Garantir meu e-book <ArrowRight /></a>
            <a className="text-link" href="#conteudo">Conhecer o conteúdo <ChevronDown /></a>
          </div>
          <ul className="trust-list" aria-label="Vantagens da compra">
            <li><Download /> 100% digital</li>
            <li><Zap /> Acesso imediato</li>
            <li><ShieldCheck /> Garantia de 7 dias</li>
          </ul>
        </div>

        <div className="book-visual" aria-label="Prévia do e-book Do Tabuleiro ao Mercado">
          <div className="book-halo" />
          <div className="book-token token-one">01</div>
          <div className="book-token token-two"><TrendingUp /></div>
          <img className="book-image" src="/book.png" alt="E-book aberto" />
          <div className="book-badge"><BookOpen /> 150+ páginas</div>
        </div>
      </div>
      <a className="scroll-cue" href="#depoimentos" aria-label="Ir para depoimentos"><span /></a>
    </section>
  );
}

function SocialProof() {
  return (
    <section id="depoimentos" className="section section-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Histórias de quem colocou em prática"
          title="Mais de 500 empreendedores"
          accent="já avançaram no jogo"
          description="Experiências reais de quem transformou conhecimento em movimento."
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <Quote className="quote-icon" />
              <div className="stars" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} fill="currentColor" />)}
              </div>
              <blockquote>“{testimonial.content}”</blockquote>
              <footer>
                <span className="avatar">{testimonial.initials}</span>
                <div><strong>{testimonial.name}</strong><small>{testimonial.role} · {testimonial.company}</small></div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Da ideia à execução"
          title="O que você vai"
          accent="aprender"
          description="Conteúdo estratégico e aplicável para acelerar sua jornada empreendedora."
        />
        <div className="benefit-grid">
          {benefits.map((benefit) => {
            const Icon = benefitIcons[benefit.icon];
            return (
              <article className="benefit-card" key={benefit.title}>
                <span className={`icon-box tone-${benefit.tone}`}><Icon /></span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <dl>
                  <div><dt>Desafio</dt><dd>{benefit.problem}</dd></div>
                  <div><dt>Avanço</dt><dd>{benefit.result}</dd></div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContentPreview() {
  const [openChapter, setOpenChapter] = useState(0);
  const [activePreview, setActivePreview] = useState(0);

  return (
    <section id="conteudo" className="section section-preview">
      <div className="container">
        <SectionHeading
          eyebrow="Veja antes de avançar"
          title="Uma espiada no"
          accent="conteúdo"
          description="Seis capítulos para organizar sua visão e colocar o negócio em movimento."
        />

        <div className="preview-picker" role="tablist" aria-label="Prévia do e-book">
          {previews.map((preview, index) => (
            <button
              key={preview.title}
              type="button"
              role="tab"
              aria-selected={activePreview === index}
              onClick={() => setActivePreview(index)}
            >
              <span><FileText /></span>
              <div><strong>{preview.title}</strong><small>{preview.description}</small></div>
            </button>
          ))}
        </div>

        <div className="content-layout">
          <div>
            <h3 className="content-title">Índice completo do e-book</h3>
            <div className="chapter-list">
              {chapters.map((chapter, index) => {
                const open = openChapter === index;
                return (
                  <article className={`chapter ${open ? 'is-open' : ''}`} key={chapter.number}>
                    <button type="button" aria-expanded={open} onClick={() => setOpenChapter(open ? -1 : index)}>
                      <span className="chapter-number">{chapter.number}</span>
                      <span className="chapter-copy"><strong>{chapter.title}</strong><small>{chapter.description}</small></span>
                      <ChevronDown />
                    </button>
                    <div className="chapter-panel" hidden={!open}>
                      <ul>{chapter.topics.map((topic) => <li key={topic}><Check /> {topic}</li>)}</ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="page-preview" aria-live="polite">
            <div className="preview-page">
              <span className="page-number">0{activePreview + 1}</span>
              <img src="/logo2.svg" alt="" />
              <span className="preview-overline">Do tabuleiro ao mercado</span>
              <h3>{previews[activePreview].label}</h3>
              <p>{previews[activePreview].description}. Conteúdo direto ao ponto, exercícios guiados e exemplos para aplicar agora.</p>
              <div className="preview-lines"><i /><i /><i /></div>
              <strong>150+ <small>páginas práticas</small></strong>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const installments = (siteConfig.product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const includes = [
    'E-book completo em PDF (150+ páginas)',
    'Acesso vitalício ao conteúdo',
    'Atualizações gratuitas',
    'Comunidade exclusiva',
    'Garantia de 7 dias',
  ];

  return (
    <section id="comprar" className="section pricing-section">
      <div className="pricing-pattern" aria-hidden="true" />
      <div className="container pricing-container">
        <SectionHeading
          eyebrow="Seu próximo movimento"
          title="Transforme seu negócio"
          accent="hoje"
          description="Um investimento simples para tomar decisões melhores por muito tempo."
        />
        <div className="price-card">
          <span className="offer-badge"><Zap /> Oferta digital</span>
          <div className="price-copy">
            <span className="old-price">De R$ {siteConfig.product.oldPrice.toFixed(2).replace('.', ',')}</span>
            <p>por apenas</p>
            <div className="price"><sup>R$</sup><strong>{siteConfig.product.price}</strong><span>,00</span></div>
            <small>ou 12x de R$ {installments} sem juros</small>
          </div>
          <ul className="include-list">
            {includes.map((item) => <li key={item}><Check /> {item}</li>)}
          </ul>
          <PurchaseLink className="button button-primary button-purchase">Comprar agora na Hotmart <ArrowRight /></PurchaseLink>
          <p className="guarantee"><ShieldCheck /> Garantia de 7 dias — 100% do seu dinheiro de volta</p>
          <div className="payment-row" aria-label="Formas de pagamento">
            <span><CreditCard /> Cartão</span><span><Smartphone /> PIX</span><span><Ticket /> Boleto</span>
          </div>
        </div>
        <div className="numbers-row">
          <div><strong>500+</strong><span>clientes satisfeitos</span></div>
          <div><strong>4,9/5</strong><span>avaliação média</span></div>
          <div><strong>100%</strong><span>digital e garantido</span></div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container faq-container">
        <SectionHeading
          eyebrow="Sem casas-surpresa"
          title="Perguntas"
          accent="frequentes"
          description="Tudo o que você precisa saber antes de fazer seu investimento."
        />
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const open = openFaq === index;
            return (
              <article className={`faq-item ${open ? 'is-open' : ''}`} key={faq.question}>
                <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : index)}>
                  <span><CircleHelp /> {faq.question}</span><ChevronDown />
                </button>
                <div hidden={!open}><p>{faq.answer}</p></div>
              </article>
            );
          })}
        </div>
        <p className="contact-callout">Ainda tem dúvidas? <a href={`mailto:${siteConfig.email}`}>Fale com a nossa equipe</a>.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <a className="brand brand-dark" href="#inicio"><img src="/logo.svg" alt="" /><span>Do Tabuleiro<br />ao Mercado</span></a>
          <p>Empreendedorismo prático e dinâmico para fazer o seu negócio avançar.</p>
        </div>
        <div><h3>Navegue</h3>{menuItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
        <div><h3>Atendimento</h3><a href={`mailto:${siteConfig.email}`}><Mail /> {siteConfig.email}</a><a href="#faq">Política de reembolso</a></div>
        <div><h3>Acompanhe</h3><div className="social-links"><a href={siteConfig.social.facebook}>Facebook</a><a href={siteConfig.social.instagram}>Instagram</a><a href={siteConfig.social.linkedin}>LinkedIn</a></div></div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Do Tabuleiro ao Mercado. Desenvolvido por <a href="https://elian.dev.br/" target="_blank" rel="noreferrer">elian.dev</a>.</div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <SocialProof />
        <Benefits />
        <ContentPreview />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
