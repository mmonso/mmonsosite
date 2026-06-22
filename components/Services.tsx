import React from 'react';
import { Clock, Video, ShieldCheck } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="atendimento" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#2a3d35' }}>

      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: '#529e82' }}></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[20rem] h-[20rem] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: '#96b0a4' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Como funciona */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight text-white">Como funciona?</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-300 max-w-xl mx-auto text-lg font-light">
            Três passos simples para começar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { step: "1", title: "Entre em contato", desc: "Mande mensagem pelo WhatsApp para verificar os horários disponíveis. Resposta rápida." },
            { step: "2", title: "Primeira sessão", desc: "50 minutos online para você falar sobre o que te trouxe, no seu ritmo, sem pressa nem roteiro rígido." },
            { step: "3", title: "Seu processo", desc: "Sessões semanais para aprofundar o autoconhecimento e transformar seus padrões relacionais." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="group p-8 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <span className="font-serif text-2xl text-white">{step}</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-white">{title}</h3>
              <p className="text-stone-300 leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>

        {/* Detalhes do atendimento */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl mb-6 text-white">Detalhes do atendimento</h3>
          <div className="w-16 h-1 bg-sage-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group p-8 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-sage-300 mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-white">Duração e valor</h3>
            <p className="text-stone-300 text-lg leading-relaxed font-light">
              Sessões de <span className="text-white font-medium">{CONTENT.sessionInfo.duration}</span>, com investimento de <span className="text-white font-medium">R$ 160</span> por sessão.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-sage-300 mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
              <Video size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-white">Formato</h3>
            <p className="text-stone-300 text-lg leading-relaxed font-light">
              100% online via videochamada ({CONTENT.sessionInfo.platform}). Seg–Sex, das 8h às 20h.
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
          <p className="text-sage-400 text-sm mt-4">As vagas são limitadas — atendo um número reduzido de pacientes por semana.</p>
        </div>
      </div>
    </section>
  );
};
