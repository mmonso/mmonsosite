import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ForWho } from './components/ForWho';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
