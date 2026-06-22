declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// ID de conversão do Google Ads — substitua pelo seu após criar a conversão no painel
const GOOGLE_ADS_CONVERSION_ID = ''; // ex: 'AW-XXXXXXXXX/YYYYYYYYYYYYYYY'

export const trackWhatsAppClick = () => {
  if (typeof window === 'undefined' || !window.gtag) return;

  // Evento para GA4 (usado para otimização de campanhas via importação de conversão)
  window.gtag('event', 'click_whatsapp', {
    event_category: 'engagement',
    event_label: 'whatsapp_button',
    value: 160,
  });

  // Conversão nativa do Google Ads (ativa quando o ID estiver preenchido)
  if (GOOGLE_ADS_CONVERSION_ID) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSION_ID,
      value: 160,
      currency: 'BRL',
    });
  }
};
