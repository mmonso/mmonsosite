import React from 'react';
import { CONTENT } from '../constants';
import { Brain, Ear, Heart } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="group p-8 md:p-10 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 h-full border border-transparent hover:border-sage-100">
    <div className="w-16 h-16 bg-sage-50 rounded-2xl flex items-center justify-center text-sage-600 mb-8 group-hover:bg-sage-100 group-hover:text-sage-800 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="font-serif text-2xl text-stone-900 mb-4 font-medium">{title}</h3>
    <p className="text-stone-600 leading-relaxed text-lg font-light">{description}</p>
  </div>
);

export const Approach: React.FC = () => {
  return (
    <section id="psicanalise" className="py-24 md:py-32 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 tracking-tight">
            A Abordagem Psicanalítica
          </h2>
          <div className="w-24 h-1 bg-sage-400 mx-auto rounded-full mb-8"></div>
          <div className="text-xl text-stone-700 leading-relaxed font-light space-y-6">
            {CONTENT.approachText.slice(0, 2).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard 
            icon={<Ear size={32} strokeWidth={1.5} />}
            title="Escuta Profunda"
            description="Um espaço para investigar os sentidos inconscientes que permeiam seus pensamentos, sem pressa."
          />
          <FeatureCard 
            icon={<Brain size={32} strokeWidth={1.5} />}
            title="Autoconhecimento"
            description="Compreender as camadas mais profundas do psiquismo e suas dinâmicas internas."
          />
          <FeatureCard 
            icon={<Heart size={32} strokeWidth={1.5} />}
            title="Singularidade"
            description="Um processo que respeita seu tempo e não busca adaptar você a padrões externos."
          />
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
           <p className="text-lg text-stone-600 italic font-serif">
             "{CONTENT.approachText[3]}"
           </p>
        </div>

      </div>
    </section>
  );
};