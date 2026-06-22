import React from 'react';
import { CONTENT } from '../constants';
import { Brain, Ear, Heart } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="group p-8 md:p-10 bg-white/10 hover:bg-white/15 rounded-2xl transition-all duration-500 hover:-translate-y-1 h-full border border-white/10 hover:border-white/20 backdrop-blur-sm">
    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-sage-300 mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="font-serif text-2xl text-white mb-4 font-medium">{title}</h3>
    <p className="text-stone-300 leading-relaxed text-lg font-light">{description}</p>
  </div>
);

export const Approach: React.FC = () => {
  return (
    <section id="abordagem" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#2a3d35' }}>
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: '#529e82' }}></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[20rem] h-[20rem] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: '#96b0a4' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 tracking-tight">
            A Abordagem
          </h2>
          <div className="w-24 h-1 bg-sage-400 mx-auto rounded-full mb-8"></div>
          <div className="text-xl text-stone-300 leading-relaxed font-light space-y-6">
            {CONTENT.approachText.slice(0, 2).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            icon={<Ear size={32} strokeWidth={1.5} />}
            title="Presença no Agora"
            description="Na Gestalt, trabalhamos o que está acontecendo agora — como você sente, como reage, o que se repete nos seus vínculos."
          />
          <FeatureCard
            icon={<Brain size={32} strokeWidth={1.5} />}
            title="Consciência dos Padrões"
            description="Ampliar sua percepção sobre as dinâmicas que moldam seus relacionamentos e sua forma de se comunicar."
          />
          <FeatureCard
            icon={<Heart size={32} strokeWidth={1.5} />}
            title="Escolhas Mais Livres"
            description="Um processo que não busca te encaixar em um modelo ideal, mas fortalecer sua capacidade de viver de forma autêntica."
          />
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
           <p className="text-xl text-stone-300 italic font-serif">
             "{CONTENT.approachText[3]}"
           </p>
        </div>

      </div>
    </section>
  );
};
