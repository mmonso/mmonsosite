import React from 'react';
import { ArrowRight, Shield, Clock, Video, CheckCircle } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 lg:pt-16 lg:pb-0 overflow-hidden bg-gradient-to-br from-sage-100 via-stone-50 to-sage-50">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[40rem] h-[40rem] bg-sage-200/40 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[30rem] h-[30rem] bg-sage-300/20 rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

            {/* Texto — sempre primeiro no mobile */}
            <div className="flex flex-col space-y-5 md:space-y-7 text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sage-200 text-sage-800 text-xs font-bold tracking-[0.2em] uppercase self-center lg:self-start shadow-sm">
                <div className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.6)]"></div>
                Vagas disponíveis esta semana
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-stone-900 leading-[1.15] tracking-tight font-normal">
                {CONTENT.heroTitle}
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Psicoterapia para quem quer entender suas relações. Sem julgamento sobre como você vive ou quem você ama.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <Button as="a" href={WHATSAPP_LINK} target="_blank" variant="primary" className="px-6 py-4 text-base md:text-lg" trackWhatsApp>
                  Quero agendar minha primeira sessão
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-6 text-xs md:text-sm text-stone-500 font-medium border-t border-sage-200/60 pt-5">
                <span>Psicologia Clínica</span>
                <span className="w-1 h-1 bg-sage-400 rounded-full hidden sm:block"></span>
                <span>{CONTENT.crp}</span>
                <span className="w-1 h-1 bg-sage-400 rounded-full hidden sm:block"></span>
                <span>UFSC</span>
              </div>
            </div>

            {/* Foto — abaixo do texto no mobile */}
            <div className="relative animate-fade-in">
              <div className="relative aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] max-w-sm sm:max-w-md lg:max-w-full mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-sage-900/10 group">
                <img
                  src="marcelo-hero.jpg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1537368910025-6000181c363c?q=80&w=800&auto=format&fit=crop";
                    e.currentTarget.onerror = null;
                  }}
                  alt="Marcelo Monsó sorrindo - Psicólogo Online"
                  className="object-cover object-top w-full h-full scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                  fetchPriority="high"
                  decoding="sync"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 md:bottom-8 md:left-8 md:right-8">
                  <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50 border-l-4 border-l-sage-500">
                    <p className="font-serif text-sm md:text-lg lg:text-xl text-stone-800 italic leading-relaxed">
                      "{CONTENT.heroQuote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Barra de prova social */}
      <div className="bg-white border-y border-stone-200/60 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-stone-500 font-medium">
          <div className="flex items-center gap-1.5"><Shield size={14} className="text-sage-500 shrink-0" /> Sigilo absoluto garantido</div>
          <div className="flex items-center gap-1.5"><Clock size={14} className="text-sage-500 shrink-0" /> Sessões de 50 minutos</div>
          <div className="flex items-center gap-1.5"><Video size={14} className="text-sage-500 shrink-0" /> 100% online</div>
        </div>
      </div>
    </>
  );
};
