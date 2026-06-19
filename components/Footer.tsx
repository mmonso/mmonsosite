import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20">

          {/* Coluna 1: Identidade */}
          <div className="flex flex-col items-start space-y-6">
            <div>
              <h3 className="font-serif text-3xl text-stone-900 tracking-tight mb-2">{CONTENT.name}</h3>
              <p className="text-lg font-light text-stone-500">{CONTENT.title}</p>
            </div>

            <div className="inline-flex items-center px-4 py-2 bg-stone-50 rounded-full border border-stone-100">
              <span className="w-2 h-2 bg-sage-400 rounded-full mr-3"></span>
              <span className="text-xs tracking-widest uppercase text-stone-500 font-medium">
                {CONTENT.crp}
              </span>
            </div>

            <p className="text-stone-400 text-sm font-light max-w-md leading-relaxed pt-2">
              Psicoterapia online especializada em relacionamentos e comunicação. Atendimento ético e sem julgamento, onde quer que você esteja.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div className="flex flex-col justify-center">
            <div className="bg-sage-50/50 rounded-2xl p-8 border border-sage-100/50 w-full">
              <h4 className="font-serif text-xl text-stone-900 mb-6">Vamos conversar?</h4>
              <p className="text-stone-600 font-light mb-8 leading-relaxed">
                O primeiro passo é sempre o mais importante. Entre em contato para verificar disponibilidade de horários.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="group flex items-center justify-between w-full bg-white hover:bg-sage-50 border border-stone-200 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-md hover:border-sage-200"
              >
                <span className="font-medium text-stone-800 group-hover:text-sage-900">Agendar via WhatsApp</span>
                <ArrowUpRight className="text-stone-400 group-hover:text-sage-600 transition-colors" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-400 font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} Marcelo Monsó. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 items-center">
            <span className="text-sm text-stone-400 font-light">Psicologia com Ética</span>
            <a href="/privacidade" className="text-sm text-stone-400 font-light hover:text-sage-600 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};