import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Finalmente encontrei um espaço onde posso falar sobre minha vida afetiva sem ter que me explicar ou me justificar. Depois de alguns meses em terapia, percebi que conseguia me comunicar de um jeito completamente diferente.",
    author: "Paciente online",
    detail: "Terapia de relacionamentos",
  },
  {
    text: "Eu repetia os mesmos padrões há anos e não conseguia entender o porquê. As sessões me ajudaram a enxergar de onde esses padrões vinham — e, pela primeira vez, sinto que tenho escolha sobre como agir.",
    author: "Paciente online",
    detail: "Padrões em relacionamentos",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-sage-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl text-stone-900 mb-4 tracking-tight">O que dizem os pacientes</h2>
          <div className="w-12 h-1 bg-sage-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
              <div className="flex mb-5">
                {[1,2,3,4,5].map(j => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
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
  );
};
