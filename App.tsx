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

    let userInteracted = false;
    const markInteraction = () => { userInteracted = true; };
    const interactionEvents = ['wheel', 'touchstart', 'keydown'] as const;
    interactionEvents.forEach((ev) =>
      window.addEventListener(ev, markInteraction, { passive: true })
    );

    const scrollToSection = () => {
      if (userInteracted) return;
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    };

    // Após o primeiro render as seções já existem no DOM
    scrollToSection();
    // Reajusta quando imagens/fontes terminam de carregar e o layout muda
    window.addEventListener('load', scrollToSection, { once: true });
    // Fallback caso o evento load já tenha passado ou demore (CDNs lentas)
    const settleTimer = window.setTimeout(scrollToSection, 1200);

    return () => {
      interactionEvents.forEach((ev) => window.removeEventListener(ev, markInteraction));
      window.removeEventListener('load', scrollToSection);
      window.clearTimeout(settleTimer);
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
