import React from 'react';
import { MessageCircle, RefreshCw, Shield, Users, Heart, Compass } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

const Card: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex gap-5 p-6 rounded-2xl bg-white border border-stone-100 hover:border-sage-200 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300">
    <div className="flex-shrink-0 w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center text-sage-600">
      {icon}
    </div>
    <div>
      <h3 className="font-serif text-xl text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-600 leading-relaxed font-light">{description}</p>
    </div>
  </div>
);

export const ForWho: React.FC = () => {
  return (
    <section id="para-quem" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[30rem] h-[30rem] bg-sage-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 tracking-tight">
            Para quem é essa terapia?
          </h2>
          <div className="w-20 h-1 bg-sage-300 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            Se você se identifica com alguma dessas situações, este pode ser o espaço que você estava procurando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <Card
            icon={<MessageCircle size={24} strokeWidth={1.5} />}
            title="Dificuldades de comunicação"
            description="Você sente que não consegue expressar o que precisa, que suas palavras não chegam ao outro, ou que os conflitos nunca se resolvem de verdade."
          />
          <Card
            icon={<RefreshCw size={24} strokeWidth={1.5} />}
            title="Padrões que se repetem"
            description="Você percebe que vive as mesmas situações em relacionamentos diferentes — ciúme, distância, dependência — e não sabe como sair."
          />
          <Card
            icon={<Users size={24} strokeWidth={1.5} />}
            title="Relacionamentos não convencionais"
            description="Você vive ou quer viver uma relação não monogâmica e busca um profissional que acolha esse modo de vida sem julgamento."
          />
          <Card
            icon={<Heart size={24} strokeWidth={1.5} />}
            title="Ciúme e insegurança nos vínculos"
            description="O medo de perder o outro, a dificuldade de confiar ou a sensação de nunca ser suficiente interferem nos seus relacionamentos."
          />
          <Card
            icon={<Shield size={24} strokeWidth={1.5} />}
            title="Dinâmicas relacionais desgastantes"
            description="Você sente que se perde dentro das suas relações, que coloca o outro antes de você mesmo, ou que os relacionamentos te esgotam mais do que te nutrem."
          />
          <Card
            icon={<Compass size={24} strokeWidth={1.5} />}
            title="Autoconhecimento e identidade"
            description="Você quer entender melhor quem você é, o que precisa e como se relacionar de um jeito mais autêntico e saudável."
          />
        </div>

        <div className="bg-sage-50 border border-sage-100 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl text-sage-900 italic leading-relaxed mb-8">
            "Aqui você não precisa justificar quem você é ou como você se relaciona."
          </p>
          <Button as="a" href={WHATSAPP_LINK} target="_blank" variant="primary" className="px-8 py-4 text-lg" trackWhatsApp>
            Quero começar
          </Button>
        </div>
      </div>
    </section>
  );
};
