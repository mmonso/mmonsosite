import React from 'react';
import { Clock, Video, ShieldCheck } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="atendimento" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#2a3d35' }}>

      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: '#529e82' }}></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[20rem] h-[20rem] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: '#96b0a4' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight text-white">Como funciona o atendimento?</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            A terapia online oferece a mesma profundidade e acolhimento do presencial,
            com a flexibilidade de estar onde você se sente mais confortável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group p-8 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-sage-300 mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-white">Duração</h3>
            <p className="text-stone-300 text-lg leading-relaxed font-light">
              As sessões têm duração aproximada de <span className="text-white font-medium">{CONTENT.sessionInfo.duration}</span>, um tempo dedicado exclusivamente a você.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-sage-300 mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
              <Video size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-white">Formato</h3>
            <p className="text-stone-300 text-lg leading-relaxed font-light">
              Realizado através de videochamada ({CONTENT.sessionInfo.platform}), garantindo contato visual.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-sage-300 mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-white">Sigilo</h3>
            <p className="text-stone-300 text-lg leading-relaxed font-light">
              Ambiente seguro e ético. O sigilo é absoluto e fundamental para o processo terapêutico.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#2a3d35] hover:bg-stone-100 font-semibold px-10 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            Agendar Primeira Sessão
          </a>
        </div>
      </div>
    </section>
  );
};
