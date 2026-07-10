import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ForWho } from './components/ForWho';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PrivacyPolicy } from './components/PrivacyPolicy';

function App() {
  const path = window.location.pathname;

  if (path === '/privacidade') return <PrivacyPolicy />;

  // Redireciona /consulta para a home
  if (path === '/consulta') {
    window.location.replace('/');
    return null;
  }

  // Rolagem inicial até a seção do hash (ex.: sitelinks /#sobre, /#faq).
  // O conteúdo é renderizado pelo React, então a rolagem nativa do navegador
  // acontece antes de as seções existirem no DOM e a página fica no topo.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    // O <html> tem `scroll-behavior: smooth` (classe scroll-smooth). Sem forçar
    // 'instant', qualquer scroll aqui vira animação suave — e o Chrome cancela
    // essa animação quando fontes/imagens terminam de carregar e deslocam o
    // layout, deixando a página travada perto do topo (~40px). Por isso o salto
    // precisa ser SEMPRE instantâneo.
    const HEADER_OFFSET = 88; // compensa o cabeçalho fixo

    // Impede que a restauração de scroll do navegador brigue com o ajuste.
    const prevRestoration = 'scrollRestoration' in history ? history.scrollRestoration : undefined;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    let userInteracted = false;
    const markInteraction = () => { userInteracted = true; };
    const interactionEvents = ['wheel', 'touchstart', 'keydown'] as const;
    interactionEvents.forEach((ev) =>
      window.addEventListener(ev, markInteraction, { passive: true })
    );

    const scrollToSection = () => {
      if (userInteracted) return;
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(top, 0), behavior: 'instant' as ScrollBehavior });
    };

    // Reajusta várias vezes: o alvo se desloca conforme fontes/imagens carregam
    // e a altura da página muda. Salto instantâneo a cada passo não pode ser
    // "cancelado no meio", então cada reajuste apenas corrige a posição final.
    const rafId = requestAnimationFrame(scrollToSection);
    const timers = [0, 150, 400, 800, 1500].map((ms) => window.setTimeout(scrollToSection, ms));
    window.addEventListener('load', scrollToSection);

    return () => {
      interactionEvents.forEach((ev) => window.removeEventListener(ev, markInteraction));
      window.removeEventListener('load', scrollToSection);
      cancelAnimationFrame(rafId);
      timers.forEach((t) => window.clearTimeout(t));
      if (prevRestoration && 'scrollRestoration' in history) history.scrollRestoration = prevRestoration;
    };
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.hash && link.hash.startsWith('#') && link.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-sans text-stone-800 bg-stone-50">
      <Header />
      <main>
        <Hero />
        <ForWho />
        <Services />
        <Testimonials />
        <About />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
