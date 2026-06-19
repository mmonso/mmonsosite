import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, CONTENT } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

const benefits = [
  "Atendimento 100% online — de onde você estiver",
  "Sem julgamentos sobre sua forma de se relacionar",
  "Especializado em relacionamentos, comunicação e vínculos",
  "Sessões de 50 minutos via Google Meet ou WhatsApp Video",
  "Psicólogo experiente (CRP 12/27931)",
];

const testimonials = [
  {
    text: "Finalmente encontrei um espaço onde posso falar sobre minha vida afetiva sem ter que me explicar ou me justificar.",
    author: "Paciente online",
  },
  {
    text: "As sessões me ajudaram a entender padrões que eu repetia há anos nos meus relacionamentos.",
    author: "Paciente online",
  },
];

export const LandingPage: React.FC = () => {
  const handleWhatsApp = () => {
    trackWhatsAppClick();
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">

      {/* Header simples */}
      <header className="bg-white border-b border-stone-100 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <span className="font-serif text-xl text-stone-900">{CONTENT.name}</span>
            <span className="text-stone-400 text-sm ml-3">{CONTENT.title} · {CONTENT.crp}</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 bg-sage-50 border border-sage-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-sage-400 rounded-full mr-2"></span>
              <span className="text-xs text-sage-700 font-medium tracking-wide uppercase">Psicoterapia Online</span>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl text-stone-900 leading-tight mb-6">
              Seus relacionamentos merecem um espaço sem julgamento
            </h1>

            <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
              Psicoterapia online especializada em relacionamentos e comunicação — para quem vive padrões que se repetem, dificuldades de vínculo ou formas de se relacionar que fogem ao convencional.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 bg-[#356a57] hover:bg-[#529e82] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-lg"
            >
              Agendar minha primeira sessão
              <ArrowRight size={20} />
            </a>

            <p className="text-stone-400 text-sm mt-4">Via WhatsApp · Resposta em até 24h</p>
          </div>

          <div className="hidden md:block">
            <img
              src="/marcelo-hero.jpg"
              alt="Marcelo Monsó — Psicólogo Online"
              className="w-full rounded-2xl object-cover aspect-[4/5] shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-14 px-6 bg-sage-50/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-stone-900 mb-10 text-center">Por que escolher a terapia online comigo?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
                <CheckCircle size={20} className="text-sage-500 mt-0.5 shrink-0" />
                <span className="text-stone-700 font-light leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-stone-900 mb-4 text-center">Para quem é este atendimento?</h2>
          <p className="text-center text-stone-500 font-light mb-10 max-w-xl mx-auto">
            Atendo pessoas que buscam compreender e transformar suas dinâmicas relacionais — seja qual for a forma como se relacionam.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Dificuldades de comunicação em relacionamentos",
              "Padrões que se repetem em vínculos afetivos",
              "Relacionamentos não convencionais (não monogamia, poliamor)",
              "Ciúme, insegurança e dependência emocional",
              "Dinâmicas relacionais que causam sofrimento",
              "Autoconhecimento e construção de identidade",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-stone-100 bg-stone-50">
                <span className="w-2 h-2 bg-sage-400 rounded-full shrink-0"></span>
                <span className="text-stone-700 font-light">{item}</span>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 text-center">
            <p className="font-serif text-xl text-stone-700 italic">
              "Aqui você não precisa justificar quem você é ou como você se relaciona."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-14 px-6 bg-sage-50/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-stone-900 mb-10 text-center">O que dizem os pacientes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
                <p className="text-stone-700 font-light leading-relaxed italic mb-6">"{t.text}"</p>
                <span className="text-stone-400 text-sm">— {t.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-[#356a57]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="text-sage-100 font-light text-lg mb-8">
            Entre em contato agora pelo WhatsApp para verificar disponibilidade de horários.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-white text-[#356a57] hover:bg-sage-50 font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Falar no WhatsApp agora
            <ArrowRight size={20} />
          </a>
          <p className="text-sage-200 text-sm mt-4">Sessões de 50 min · R$ 160 · Online</p>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="bg-white border-t border-stone-100 py-6 px-6 text-center">
        <p className="text-stone-400 text-sm font-light">
          &copy; {new Date().getFullYear()} {CONTENT.name} · {CONTENT.crp} ·{' '}
          <a href="/privacidade" className="hover:text-sage-600 transition-colors">Política de Privacidade</a>
        </p>
      </footer>

    </div>
  );
};
