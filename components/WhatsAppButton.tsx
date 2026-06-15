import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    trackWhatsAppClick();
  };

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:bg-[#4ade80] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
      aria-label="Agendar via WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" strokeWidth={1.5} />
    </a>
  );
};