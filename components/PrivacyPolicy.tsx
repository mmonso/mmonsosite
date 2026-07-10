import React from 'react';
import { CONTENT, WHATSAPP_LINK } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <a href="/" className="text-sage-600 hover:text-sage-800 text-sm font-medium transition-colors">
            ← Voltar ao site
          </a>
        </div>

        <h1 className="font-serif text-4xl text-stone-900 mb-4">Política de Privacidade</h1>
        <p className="text-stone-400 text-sm mb-12">Última atualização: junho de 2025</p>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-700 font-light leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">1. Quem somos</h2>
            <p>
              Este site é de titularidade de <strong>Marcelo Monsó</strong>, Psicólogo Clínico (CRP 12/27931),
              com atuação exclusivamente online. Para contato: <a href="mailto:contato@marcelomonso.com.br" className="text-sage-600 hover:underline">contato@marcelomonso.com.br</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">2. Dados coletados</h2>
            <p>Este site pode coletar os seguintes tipos de dados:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de visita — coletados automaticamente por ferramentas de análise (Google Analytics 4).</li>
              <li><strong>Dados de interação:</strong> cliques em botões de contato (WhatsApp), para mensurar o desempenho do site.</li>
              <li><strong>Dados fornecidos voluntariamente:</strong> quando você entra em contato via WhatsApp ou e-mail, suas mensagens são tratadas com sigilo absoluto, conforme o Código de Ética Profissional do Psicólogo.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">3. Finalidade do tratamento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analisar o desempenho e a usabilidade do site</li>
              <li>Mensurar o alcance de campanhas de marketing digital</li>
              <li>Responder a solicitações de contato</li>
              <li>Melhorar continuamente os serviços oferecidos</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">4. Base legal (LGPD)</h2>
            <p>
              O tratamento de dados neste site é realizado com base no <strong>legítimo interesse</strong> para fins de análise de desempenho e, quando aplicável, no seu <strong>consentimento</strong> (cookies e rastreamento). Você pode revogar o consentimento a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">5. Cookies e ferramentas de rastreamento</h2>
            <p>
              Utilizamos o <strong>Google Analytics 4</strong> e o <strong>Google Ads</strong> para analisar o tráfego e mensurar conversões. Essas ferramentas podem usar cookies e tecnologias similares para coletar dados anonimizados.
            </p>
            <p className="mt-3">
              Você pode desativar o rastreamento a qualquer momento através das configurações do seu navegador ou pelo <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:underline">Google Analytics Opt-out</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">6. Compartilhamento de dados</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto com as ferramentas de análise mencionadas (Google), que operam sob suas próprias políticas de privacidade. <strong>Nenhuma informação clínica ou de saúde é coletada por este site.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">7. Sigilo profissional</h2>
            <p>
              Todo conteúdo compartilhado em sessões de psicoterapia é protegido pelo sigilo profissional, conforme o Art. 9º do Código de Ética Profissional do Psicólogo (Resolução CFP nº 010/2005). Isso está além e acima de qualquer política de privacidade digital.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">8. Seus direitos</h2>
            <p>De acordo com a LGPD (Lei 13.709/2018), você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos ou inexatos</li>
              <li>Solicitar a exclusão dos dados</li>
              <li>Revogar o consentimento</li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer desses direitos, entre em contato: <a href="mailto:contato@marcelomonso.com.br" className="text-sage-600 hover:underline">contato@marcelomonso.com.br</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">9. Retenção de dados</h2>
            <p>
              Dados de navegação coletados pelo Google Analytics são retidos por até 14 meses, conforme configuração padrão da plataforma. Comunicações via WhatsApp ou e-mail são mantidas pelo tempo necessário ao atendimento.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">10. Contato</h2>
            <p>
              Dúvidas sobre esta política? Entre em contato:
            </p>
            <ul className="mt-3 space-y-1">
              <li>E-mail: <a href="mailto:contato@marcelomonso.com.br" className="text-sage-600 hover:underline">contato@marcelomonso.com.br</a></li>
              <li>WhatsApp: <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="text-sage-600 hover:underline">+55 48 99123-4181</a></li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};
