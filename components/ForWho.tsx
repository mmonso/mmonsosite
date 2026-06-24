import React from 'react';
import { MessageCircle, RefreshCw, Shield, Users, Heart, Compass } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

const Card: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex gap-5 p-6 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300">
    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sage-300 shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
      <p className="text-stone-300 leading-relaxed font-light">{description}</p>
    </div>
  </div>
);

export const ForWho: React.FC = () => {
  return (
    <section id="para-quem" className="py-16 md:py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#2a3d35' }}>
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: '#529e82' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 tracking-tight">
            Você se identifica com alguma dessas situações?
          </h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-stone-300 font-light leading-relaxed">
            Se sim, este pode ser exatamente o espaço que você estava procurando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <Card
            icon={<RefreshCw size={24} strokeWidth={1.5} />}
            title="Padrões que se repetem"
            description="Você percebe que vive as mesmas situações em relacionamentos diferentes — ciúme, distância, dependência — e não sabe como sair."
          />
          <Card
            icon={<MessageCircle size={24} strokeWidth={1.5} />}
            title="Dificuldades de comunicação"
            description="Você sente que não consegue expressar o que precisa, que suas palavras não chegam ao outro, ou que os conflitos nunca se resolvem de verdade."
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
            icon={<Users size={24} strokeWidth={1.5} />}
            title="Relacionamentos não convencionais"
            description="Você vive ou quer viver uma relação não monogâmica e busca um profissional que acolha esse modo de vida sem julgamento."
          />
          <Card
            icon={<Compass size={24} strokeWidth={1.5} />}
            title="Autoconhecimento e identidade"
            description="Você quer entender melhor quem você é, o que precisa e como se relacionar de um jeito mais autêntico e saudável."
          />
        </div>

        <div className="rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto bg-white/10 border border-white/10">
          <p className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed mb-8">
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
