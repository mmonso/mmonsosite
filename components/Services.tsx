import React from 'react';
import { Clock, Video, ShieldCheck } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="atendimento" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-sage-100">

      <div className="absolute top-0 left-0 -ml-40 -mt-40 w-[30rem] h-[30rem] bg-sage-200/60 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-[20rem] h-[20rem] bg-sage-200/60 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Como funciona */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight text-stone-900">Como funciona?</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-600 max-w-xl mx-auto text-lg font-light">
            Três passos simples para começar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { step: "1", title: "Entre em contato", desc: "Mande mensagem pelo WhatsApp para verificar os horários disponíveis. Resposta rápida." },
            { step: "2", title: "Primeira sessão", desc: "50 minutos online para você falar sobre o que te trouxe, no seu ritmo, sem pressa nem roteiro rígido." },
            { step: "3", title: "Seu processo", desc: "Sessões semanais para aprofundar o autoconhecimento e transformar seus padrões relacionais." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="group p-8 rounded-2xl bg-white shadow-sm border border-sage-200 hover:shadow-md hover:border-sage-300 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-sage-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-white">{step}</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-stone-900">{title}</h3>
              <p className="text-stone-600 leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>

        {/* Detalhes do atendimento */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-6 text-stone-900">Detalhes do atendimento</h3>
          <div className="w-16 h-1 bg-sage-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group p-8 rounded-2xl bg-white border border-sage-200 hover:shadow-md hover:border-sage-300 transition-all duration-300">
            <div className="w-14 h-14 bg-sage-100 border border-sage-200 rounded-xl flex items-center justify-center text-sage-700 mb-6">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-stone-900">Duração e valor</h3>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Sessões de <span className="text-stone-900 font-medium">{CONTENT.sessionInfo.duration}</span>. O valor é informado pelo WhatsApp.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white border border-sage-200 hover:shadow-md hover:border-sage-300 transition-all duration-300">
            <div className="w-14 h-14 bg-sage-100 border border-sage-200 rounded-xl flex items-center justify-center text-sage-700 mb-6">
              <Video size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-stone-900">Formato</h3>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              100% online via videochamada ({CONTENT.sessionInfo.platform}). Seg–Sex, das 8h às 20h.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white border border-sage-200 hover:shadow-md hover:border-sage-300 transition-all duration-300">
            <div className="w-14 h-14 bg-sage-100 border border-sage-200 rounded-xl flex items-center justify-center text-sage-700 mb-6">
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-3 text-stone-900">Sigilo</h3>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Ambiente seguro e ético. O sigilo é absoluto e fundamental para o processo terapêutico.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full font-semibold px-10 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] text-white"
            style={{ backgroundColor: '#2a3d35' }}
          >
            Agendar Primeira Sessão
          </a>
          <p className="text-stone-500 text-sm mt-4">As vagas são limitadas — atendo um número reduzido de pacientes por semana.</p>
        </div>
      </div>
    </section>
  );
};
