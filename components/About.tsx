import React from 'react';
import { CONTENT } from '../constants';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Foto — no mobile aparece após o título, não sticky */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6 lg:sticky lg:top-24">
            <div className="w-full text-center lg:text-left">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-4 tracking-tight">Sobre Mim</h2>
              <div className="w-16 h-1 bg-sage-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="relative w-full max-w-xs sm:max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-xl shadow-stone-200">
              <img
                src="marcelo-about.jpg"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";
                  e.currentTarget.onerror = null;
                }}
                alt="Marcelo Monsó"
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-4 md:p-6 border-t border-stone-100">
                <p className="font-serif text-lg md:text-xl text-stone-900 font-medium">{CONTENT.name}</p>
                <p className="text-xs md:text-sm text-stone-500 uppercase tracking-widest mt-1">{CONTENT.crp}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:pt-8">
            <p className="text-base md:text-lg text-stone-700 leading-relaxed">
              Olá! Sou Marcelo Monsó, Psicólogo Clínico formado pela UFSC.
            </p>

            <div className="bg-sage-50 border-l-4 border-sage-400 p-6 md:p-10 rounded-r-xl">
              <Quote className="text-sage-300 mb-4 w-7 h-7 md:w-8 md:h-8" />
              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-sage-800 italic leading-relaxed">
                "Não existe uma forma certa de se relacionar ou de existir. Existe a sua."
              </p>
            </div>

            <div className="space-y-4 text-base md:text-lg text-stone-700 leading-relaxed font-light">
              <p>
                Acredito em uma terapia que ofereça um espaço seguro para que você possa existir com liberdade, sem precisar se encaixar em padrões ou justificar quem você é.
              </p>
              <p>
                Meu compromisso é acolher modos de vida que muitas vezes não encontram reconhecimento na sociedade — respeitando profundamente a singularidade de cada experiência humana.
              </p>
              <p>
                Na clínica, trabalho com a <strong className="font-medium text-stone-800">Gestalt-terapia</strong> — uma abordagem que compreende a pessoa em sua totalidade (pensamentos, emoções, corpo e contexto) e foca no presente: o que acontece agora, como você sente, o que se repete. A partir daí, investigamos juntos os padrões que influenciam seus vínculos e sua forma de se comunicar.
              </p>
              <p>
                Aqui você encontra escuta atenta, sigilo absoluto e um ambiente ético. Se você procura um espaço para se sentir visto e respeitado na sua forma única de estar no mundo, ficarei feliz em caminhar com você.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 md:gap-3">
              <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-stone-50 border border-stone-200 rounded-full text-xs md:text-sm text-stone-600 font-medium">Gestalt-terapia</span>
              <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-stone-50 border border-stone-200 rounded-full text-xs md:text-sm text-stone-600 font-medium">UFSC</span>
              <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-stone-50 border border-stone-200 rounded-full text-xs md:text-sm text-stone-600 font-medium">CRP 12/27931</span>
              <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-stone-50 border border-stone-200 rounded-full text-xs md:text-sm text-stone-600 font-medium">Atendimento Online</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
