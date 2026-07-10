declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// send_to da ação "Reservar horário" (Google Ads → Metas → Conversões →
// Gerenciar → Ver snippet de evento). Se o rótulo exibido no painel for
// diferente deste, basta atualizar esta constante.
const GOOGLE_ADS_SEND_TO = 'AW-18254723187/KtYlCIyE7sccEPPww4BE';

// Tempo máximo (ms) de espera pelo event_callback antes de seguir em frente.
const EVENT_TIMEOUT_MS = 2000;

/**
 * Padrão "medir no clique" do Google Ads: dispara o snippet de evento
 * `conversion` no clique e usa event_callback/event_timeout para executar
 * `onComplete` sem depender da resposta da rede — ou seja, sem nunca
 * bloquear a navegação.
 *
 * Os botões do site abrem o WhatsApp em nova aba (target="_blank"), então a
 * página atual continua viva e o hit sempre tem tempo de sair — por isso os
 * handlers atuais não fazem preventDefault nem passam onComplete. Se algum
 * link passar a navegar na MESMA aba, use:
 *
 *   onClick={(e) => {
 *     e.preventDefault();
 *     reportWhatsAppConversion(() => { window.location.href = url; });
 *   }}
 */
export const reportWhatsAppConversion = (onComplete?: () => void) => {
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    onComplete?.();
  };

  if (typeof window === 'undefined' || !window.gtag) {
    finish();
    return;
  }

  // Evento GA4 (relatórios de engajamento e importação no Google Ads)
  window.gtag('event', 'click_whatsapp', {
    event_category: 'engagement',
    event_label: 'whatsapp_button',
  });

  // Snippet de evento da conversão "Reservar horário"
  window.gtag('event', 'conversion', {
    send_to: GOOGLE_ADS_SEND_TO,
    value: 160,
    currency: 'BRL',
    event_callback: finish,
    event_timeout: EVENT_TIMEOUT_MS,
  });

  // Garantia extra: se o gtag.js for bloqueado (adblock) o callback nunca
  // dispara, então destravamos por conta própria após o timeout.
  window.setTimeout(finish, EVENT_TIMEOUT_MS);
};

// Handler usado pelos botões/CTAs de WhatsApp. Não recebe parâmetros para
// poder ser passado direto como onClick sem capturar o evento do React.
export const trackWhatsAppClick = () => {
  reportWhatsAppConversion();
};
