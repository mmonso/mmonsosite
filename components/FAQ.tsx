import React from 'react';
import { Plus, Minus } from 'lucide-react';

const Question = ({ title, answer }: { title: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-stone-100 last:border-0">
      <button
        className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`font-serif text-xl md:text-2xl transition-colors ${isOpen ? 'text-sage-700' : 'text-stone-800 group-hover:text-sage-700'}`}>
          {title}
        </span>
        <span className={`text-sage-500 transition-all duration-300 ml-4 flex-shrink-0 ${isOpen ? 'rotate-180 text-sage-700' : ''}`}>
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-stone-600 leading-relaxed text-lg font-light pr-8">{answer}</p>
      </div>
    </div>
  );
};

const FAQS = [
  {
    title: "Como agendar um horário?",
    answer: "Basta clicar nos botões de contato deste site. Você será direcionado para o meu WhatsApp, onde poderemos verificar a disponibilidade de agenda que melhor se adapte à sua rotina.",
  },
  {
    title: "Qual é o investimento por sessão?",
    answer: "As sessões individuais online têm valor de R$ 160. Para verificar disponibilidade de horários e dar o primeiro passo, basta entrar em contato pelo WhatsApp.",
  },
  {
    title: "Tenho dúvida se realmente preciso de terapia. Como saber?",
    answer: "Se você está fazendo essa pergunta, provavelmente já há algo te incomodando — e isso por si só já é motivo suficiente para buscar um espaço de escuta. Não é preciso estar em crise para começar. Muitas pessoas buscam terapia por desejo de autoconhecimento, dificuldades nos relacionamentos, ansiedade, sensação de estar preso em padrões que se repetem, ou simplesmente pela vontade de viver de forma mais autêntica.",
  },
  {
    title: "O que acontece na primeira sessão?",
    answer: "A primeira sessão é um espaço de acolhimento e escuta. Você pode falar sobre o que te trouxe até aqui, sem nenhuma obrigação de contar tudo de uma vez. É também um momento para tirar dúvidas sobre o processo e perceber se a nossa conexão faz sentido para você. Não há um roteiro rígido — a conversa segue o seu ritmo.",
  },
  {
    title: "A terapia online funciona tão bem quanto a presencial?",
    answer: "Sim. Diversas pesquisas confirmam que a psicoterapia online tem eficácia equivalente à presencial para a grande maioria das pessoas. O formato online oferece ainda vantagens práticas: você pode fazer sua sessão de qualquer lugar, sem deslocamento, com mais conforto e privacidade.",
  },
  {
    title: "As sessões são totalmente sigilosas?",
    answer: "Sim. O sigilo é um princípio ético fundamental da psicologia e está previsto no Código de Ética Profissional. Tudo o que é dito nas sessões permanece absolutamente confidencial. As únicas exceções previstas em lei são situações de risco grave à vida, e mesmo nesses casos o psicólogo atua com responsabilidade e cuidado.",
  },
  {
    title: "Quantas sessões são necessárias para ver resultados?",
    answer: "Não há um número fixo. A terapia é um processo que respeita o tempo de cada pessoa. Algumas mudanças começam a se fazer sentir nas primeiras semanas; outras, mais profundas, surgem com o tempo. O que posso dizer é que a regularidade nas sessões é o principal fator para que o processo avance.",
  },
  {
    title: "Com que frequência devo fazer terapia?",
    answer: "O recomendado é ao menos uma sessão por semana. Essa frequência permite que o processo tenha continuidade e profundidade. Em alguns momentos, pode fazer sentido aumentar a frequência — isso é algo que decidimos juntos, conforme o andamento do seu processo.",
  },
  {
    title: "O que é a Gestalt-terapia e como ela trabalha os relacionamentos?",
    answer: "A Gestalt-terapia é uma abordagem humanista que compreende a pessoa em sua totalidade — pensamentos, emoções, corpo e contexto. Nos relacionamentos, ela é especialmente eficaz porque foca no presente: o que acontece agora, como você sente, como você reage, o que se repete. A partir daí, investigamos juntos os padrões que moldam seus vínculos e sua forma de se comunicar, sem buscar te encaixar em um modelo ideal de pessoa ou de relacionamento.",
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-900 mb-4 tracking-tight">Dúvidas Frequentes</h2>
          <div className="w-12 h-1 bg-sage-300 mx-auto rounded-full"></div>
        </div>

        <div className="divide-y divide-stone-100">
          {FAQS.map((faq) => (
            <Question key={faq.title} title={faq.title} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
