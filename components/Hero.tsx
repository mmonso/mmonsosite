import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 lg:pt-16 overflow-hidden bg-gradient-to-br from-sage-100 via-stone-50 to-sage-50">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[40rem] h-[40rem] bg-sage-200/40 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[30rem] h-[30rem] bg-sage-300/20 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="order-2 lg:order-1 flex flex-col space-y-8 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sage-200 text-sage-800 text-xs font-bold tracking-[0.2em] uppercase self-center lg:self-start shadow-sm">
              <div className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.6)]"></div>
              Atendimento Online
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-[1.1] tracking-tight font-normal py-4">
              {CONTENT.heroTitle}
            </h1>

            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Psicoterapia online para quem vive padrões que se repetem, dificuldades de vínculo ou formas de se relacionar que fogem ao convencional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button as="a" href={WHATSAPP_LINK} target="_blank" variant="primary" className="px-8 py-4 text-lg shadow-sage-200/50" trackWhatsApp>
                Fale comigo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-stone-500 font-medium border-t border-sage-200/60 mt-4">
              <span>Psicologia Clínica</span>
              <span className="w-1 h-1 bg-sage-400 rounded-full"></span>
              <span>{CONTENT.crp}</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md lg:max-w-full mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-sage-900/10 group">
              <img
                src="marcelo-hero.jpg"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1537368910025-6000181c363c?q=80&w=800&auto=format&fit=crop";
                  e.currentTarget.onerror = null;
                }}
                alt="Marcelo Monsó sorrindo - Psicólogo Online"
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                fetchPriority="high"
                decoding="sync"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50 border-l-4 border-l-sage-500">
                  <p className="font-serif text-lg md:text-xl text-stone-800 italic leading-relaxed">
                    "{CONTENT.heroQuote}"
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 bottom-8 -left-8 w-3/4 h-3/4 border border-sage-300/50 rounded-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
