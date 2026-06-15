import React from 'react';
import { Plus, Minus } from 'lucide-react';

const Question = ({ title, answer }: { title: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-stone-100 last:border-0">
      <button
        className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-serif text-xl md:text-2xl transition-colors ${isOpen ? 'text-sage-700' : 'text-stone-800 group-hover:text-sage-700'}`}>
          {title}
        </span>
        <span className={`text-sage-500 transition-all duration-300 ml-4 flex-shrink-0 ${isOpen ? 'rotate-180 text-sage-700' : ''}`}>
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-stone-600 leading-relaxed text-lg font-light pr-8">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-900 mb-4 tracking-tight">Dúvidas Frequentes</h2>
          <div className="w-12 h-1 bg-sage-300 mx-auto rounded-full"></div>
        </div>

        <div className="divide-y divide-stone-100">
          <Question
            title="Como agendar um horário?"
            answer="Basta clicar nos botões de contato deste site. Você será direcionado para o meu WhatsApp, onde poderemos verificar a disponibilidade de agenda que melhor se adapte à sua rotina."
          />
        </div>
      </div>
    </section>
  );
};