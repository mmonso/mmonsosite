import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Nunca tinha conseguido falar sobre certas coisas sem me sentir julgada. Com o Marcelo foi diferente desde a primeira sessão. Hoje consigo perceber coisas em mim que antes eu simplesmente não via.",
    name: "Ana L.",
    detail: "São Paulo, SP",
    initials: "AL",
    color: "bg-sage-700",
  },
  {
    text: "Eu sabia que tinha alguma coisa se repetindo nos meus relacionamentos, mas não conseguia ver o quê. As sessões foram abrindo isso aos poucos. Mudou bastante a forma como eu me relaciono com as pessoas.",
    name: "Rafael M.",
    detail: "Curitiba, PR",
    initials: "RM",
    color: "bg-stone-600",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-5">
    {[1,2,3,4,5].map(i => (
      <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
    ))}
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#2a3d35' }}>
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: '#529e82' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-tight">O que dizem os pacientes</h2>
          <div className="w-12 h-1 bg-sage-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-7 md:p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <Stars />
                <p className="text-stone-200 font-light leading-relaxed italic text-base md:text-lg">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-7 pt-6 border-t border-white/10">
                <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-sm font-semibold tracking-wide">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs mt-0.5">{t.detail} · Paciente online</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-500 text-xs mt-8">
          Nomes abreviados e cidades preservadas com autorização dos pacientes.
        </p>
      </div>
    </section>
  );
};
