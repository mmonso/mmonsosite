import React from 'react';
import { Clock, Video, ShieldCheck } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="atendimento" className="py-24 md:py-32 bg-sage-50/50 text-stone-800 relative overflow-hidden">

      {/* Decorative organic shape */}
      <div className="absolute top-0 left-0 -ml-32 -mt-32 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 -mr-32 -mb-32 w-96 h-96 bg-stone-200 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight text-stone-900">Como funciona o atendimento?</h2>
          <div className="w-20 h-1 bg-sage-300 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            A terapia online oferece a mesma profundidade e acolhimento do presencial,
            com a flexibilidade de estar onde você se sente mais confortável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="group p-8 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-stone-100 transition-all duration-300">
            <div className="w-14 h-14 bg-sage-50 rounded-xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-100 transition-colors">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-stone-900">Duração</h3>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              As sessões têm duração aproximada de <span className="text-sage-700 font-medium">{CONTENT.sessionInfo.duration}</span>, um tempo dedicado exclusivamente a você.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-stone-100 transition-all duration-300">
            <div className="w-14 h-14 bg-sage-50 rounded-xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-100 transition-colors">
              <Video size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-stone-900">Formato</h3>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Realizado através de videochamada ({CONTENT.sessionInfo.platform}), garantindo contato visual.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-stone-100 transition-all duration-300">
            <div className="w-14 h-14 bg-sage-50 rounded-xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-100 transition-colors">
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-stone-900">Sigilo</h3>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Ambiente seguro e ético. O sigilo é absoluto e fundamental para o processo terapêutico.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            as="a"
            href={WHATSAPP_LINK}
            target="_blank"
            variant="primary"
            className="px-10 py-4 text-lg"
            trackWhatsApp
          >
            Agendar Primeira Sessão
          </Button>
        </div>
      </div>
    </section>
  );
};