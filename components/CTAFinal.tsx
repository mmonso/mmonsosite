import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

export const CTAFinal: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#2a3d35' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-[100px] opacity-20" style={{ backgroundColor: '#529e82' }}></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-sage-300 text-sm font-medium tracking-widest uppercase mb-6">Próximo passo</p>

        <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight mb-6">
          Pronto para entender seus relacionamentos de outra forma?
        </h2>

        <p className="text-stone-300 font-light text-lg leading-relaxed mb-10">
          Entre em contato pelo WhatsApp. Verificamos juntos os horários disponíveis e você já pode agendar sua primeira sessão.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="inline-flex items-center gap-3 bg-white hover:bg-sage-50 text-[#2a3d35] font-semibold px-10 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg active:scale-[0.98]"
        >
          Falar no WhatsApp agora
          <ArrowRight size={20} />
        </a>

        <p className="text-stone-500 text-sm mt-6">Sessões de 50 min · Seg–Sex, 8h–20h · CRP 12/27931</p>
      </div>
    </section>
  );
};
