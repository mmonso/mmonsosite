// Declaração do gtag para TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara evento de clique no WhatsApp para o Google Analytics 4
 */
export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Evento para GA4
    window.gtag('event', 'click_whatsapp', {
      event_category: 'engagement',
      event_label: 'whatsapp_button',
      value: 1
    });
    
    console.log('[Analytics] WhatsApp click tracked');
  }
};
