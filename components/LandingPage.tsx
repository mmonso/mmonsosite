import React from 'react';
import { CheckCircle, ArrowRight, Star, Clock, Shield, Video } from 'lucide-react';
import { WHATSAPP_LINK, CONTENT } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

const benefits = [
  "Atendimento 100% online — de onde você estiver",
  "Sem julgamentos sobre sua forma de se relacionar",
  "Especializado em relacionamentos, comunicação e vínculos",
  "Sessões de 50 minutos via Google Meet ou WhatsApp Video",
  "Psicólogo registrado no CRP (CRP 12/27931)",
  "Horários de segunda a sexta, das 8h às 20h",
];

const testimonials = [
  {
    text: "Finalmente encontrei um espaço onde posso falar sobre minha vida afetiva sem ter que me explicar ou me justificar. Depois de poucos meses em terapia, percebi que conseguia me comunicar de um jeito completamente diferente.",
    author: "Paciente online",
    detail: "Terapia de relacionamentos",
  },
  {
    text: "Eu repetia os mesmos padrões há anos e não conseguia entender o porquê. As sessões me ajudaram a enxergar de onde esses padrões vinham — e, pela primeira vez, sinto que tenho escolha sobre como agir.",
    author: "Paciente online",
    detail: "Padrões em relacionamentos",
  },
];

const WhatsAppCTA: React.FC<{ label?: string; className?: string }> = ({
  label = "Agendar minha primeira sessão",
  className = "",
}) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    onClick={trackWhatsAppClick}
    className={`inline-flex items-center gap-3 bg-[#356a57] hover:bg-[#2a5545] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-lg ${className}`}
  >
    {label}
    <ArrowRight size={20} />
  </a>
);

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">

      {/* Header */}
      <header className="bg-white border-b border-stone-100 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <span className="font-serif text-xl text-stone-900">{CONTENT.name}</span>
            <span className="text-stone-400 text-sm ml-3">{CONTENT.title} · {CONTENT.crp}</span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="hidden sm:inline-flex items-center gap-2 bg-[#356a57] hover:bg-[#2a5545] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
          >
            Falar agora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 bg-sage-50 border border-sage-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#25D366] rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs text-sage-700 font-medium tracking-wide uppercase">Vagas disponíveis esta semana</span>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl text-stone-900 leading-tight mb-6">
              Cansado de repetir os mesmos padrões nos seus relacionamentos?
            </h1>

            <p className="text-stone-600 text-lg font-light leading-relaxed mb-4">
              Se você sente que os mesmos problemas aparecem em vínculos diferentes — comunicação travada, ciúme, distância, dependência — a terapia pode ajudar você a entender o porquê e a mudar isso.
            </p>

            <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
              Atendimento <strong className="font-medium text-stone-800">100% online</strong>, especializado em relacionamentos e comunicação. Sem julgamentos sobre quem você é ou como você se relaciona.
            </p>

            <WhatsAppCTA />

            <div className="mt-6 flex items-center gap-4">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-stone-500 text-sm">Atendimento ético · CRP 12/27931 · UFSC</p>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/marcelo-hero.jpg"
              alt="Marcelo Monsó — Psicólogo Online especializado em relacionamentos"
              className="w-full rounded-2xl object-cover aspect-[4/5] shadow-xl"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Prova social rápida */}
      <section className="bg-stone-100/60 border-y border-stone-200/60 py-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-stone-500 font-medium">
          <div className="flex items-center gap-2"><Shield size={15} className="text-sage-500" /> Sigilo absoluto garantido</div>
          <div className="flex items-center gap-2"><Clock size={15} className="text-sage-500" /> Sessões de 50 minutos</div>
          <div className="flex items-center gap-2"><Video size={15} className="text-sage-500" /> Online — de onde você estiver</div>
          <div className="flex items-center gap-2"><CheckCircle size={15} className="text-sage-500" /> R$ 160 por sessão</div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-stone-900 mb-4 text-center">Você se identifica com alguma dessas situações?</h2>
          <p className="text-center text-stone-500 font-light mb-10 max-w-xl mx-auto">
            Se sim, a terapia especializada em relacionamentos pode ser exatamente o que você precisa.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Repete os mesmos padrões em relacionamentos diferentes",
              "Sente dificuldade de se comunicar sem conflito",
              "Vive ciúme, insegurança ou medo de ser abandonado(a)",
              "Sente que se perde dentro dos seus relacionamentos",
              "Vive uma relação não convencional e precisa de um profissional sem preconceito",
              "Quer se conhecer melhor para se relacionar de forma mais saudável",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-stone-100 bg-stone-50">
                <CheckCircle size={18} className="text-sage-500 mt-0.5 shrink-0" />
                <span className="text-stone-700 font-light">{item}</span>
              </div>
            ))}
          </div>
          <blockquote className="text-center bg-sage-50 rounded-2xl p-8 border border-sage-100">
            <p className="font-serif text-xl text-stone-700 italic leading-relaxed">
              "Aqui você não precisa justificar quem você é ou como você se relaciona."
            </p>
            <cite className="text-sm text-stone-400 mt-3 block not-italic">— Marcelo Monsó, Psicólogo Clínico</cite>
          </blockquote>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-14 px-6 bg-sage-50/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-stone-900 mb-10 text-center">Como funciona o atendimento?</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl text-sage-700">1</span>
              </div>
              <h3 className="font-serif text-lg text-stone-900 mb-2">Entre em contato</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">Mande mensagem pelo WhatsApp para verificar os horários disponíveis.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl text-sage-700">2</span>
              </div>
              <h3 className="font-serif text-lg text-stone-900 mb-2">Primeira sessão</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">50 minutos online para você falar sobre o que te trouxe, no seu ritmo, sem pressa.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl text-sage-700">3</span>
              </div>
              <h3 className="font-serif text-lg text-stone-900 mb-2">Seu processo</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">Sessões semanais para aprofundar o autoconhecimento e transformar seus padrões relacionais.</p>
            </div>
          </div>
          <div className="text-center">
            <WhatsAppCTA />
            <p className="text-stone-400 text-sm mt-3">R$ 160 por sessão · Seg–Sex, 8h–20h</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-stone-900 mb-10 text-center">O que dizem os pacientes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(j => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-stone-700 font-light leading-relaxed italic mb-6">"{t.text}"</p>
                <div>
                  <span className="text-stone-500 text-sm font-medium">— {t.author}</span>
                  <span className="text-stone-300 text-sm"> · {t.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o psicólogo — credibilidade */}
      <section className="py-14 px-6 bg-sage-50/40">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl text-stone-900 mb-4">Quem vai te atender</h2>
            <p className="text-stone-600 font-light leading-relaxed mb-4">
              Sou <strong className="font-medium text-stone-800">Marcelo Monsó</strong>, Psicólogo Clínico formado pela UFSC (CRP 12/27931), com orientação pela Gestalt-terapia e especialização em relacionamentos, comunicação e vínculos afetivos.
            </p>
            <p className="text-stone-600 font-light leading-relaxed mb-6">
              Atendo pessoas que vivem padrões que se repetem, dificuldades de vínculo ou formas de se relacionar que fogem ao convencional — sem julgamento, com ética e cuidado.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Gestalt-terapia", "UFSC", "CRP 12/27931", "Atendimento Online"].map(tag => (
                <span key={tag} className="inline-flex items-center px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs text-stone-600 font-medium">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <img
              src="/marcelo-hero.jpg"
              alt="Marcelo Monsó — Psicólogo Online"
              className="w-full rounded-2xl object-cover aspect-square shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-stone-900 mb-10 text-center">Por que fazer terapia online comigo?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-stone-50 rounded-xl p-5 border border-stone-100">
                <CheckCircle size={18} className="text-sage-500 mt-0.5 shrink-0" />
                <span className="text-stone-700 font-light leading-snug text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-[#2a3d35]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
            Dê o primeiro passo hoje
          </h2>
          <p className="text-sage-200 font-light text-lg mb-2">
            As vagas são limitadas — atendo um número reduzido de pacientes para garantir qualidade no acompanhamento.
          </p>
          <p className="text-sage-300 font-light text-base mb-8">
            Entre em contato pelo WhatsApp e verifique a disponibilidade de horários.
          </p>
          <WhatsAppCTA
            label="Falar no WhatsApp agora"
            className="bg-white text-[#2a3d35] hover:bg-sage-50 !text-[#2a3d35] shadow-lg hover:shadow-xl"
          />
          <p className="text-sage-400 text-sm mt-4">Sessões de 50 min · R$ 160 · Online · CRP 12/27931</p>
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
