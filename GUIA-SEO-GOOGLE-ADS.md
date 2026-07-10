# Guia de SEO e Google Ads - Marcelo Monsó

## ✅ Melhorias Implementadas no Site

### 1. SEO On-Page
- ✅ Meta tags otimizadas (title, description, keywords)
- ✅ Schema.org (dados estruturados para Google)
- ✅ Open Graph (compartilhamento redes sociais)
- ✅ Tags geográficas (Florianópolis/SC)
- ✅ Sitemap.xml criado
- ✅ Robots.txt configurado
- ✅ URL canônica
- ✅ Imagens com alt text descritivo

### 2. Estrutura do Site
- ✅ HTML semântico
- ✅ Responsivo (mobile-friendly)
- ✅ Navegação clara
- ✅ Velocidade otimizada
- ✅ HTTPS (quando publicar)

---

## 🚀 Checklist Pós-Deploy

### Depois de publicar no Vercel:

#### 1. Google Search Console
1. Acesse: https://search.google.com/search-console
2. Adicione seu domínio: `marcelomonso.com.br`
3. Verifique a propriedade (Vercel facilita isso)
4. Envie o sitemap: `https://marcelomonso.com.br/sitemap.xml`
5. Solicite indexação das páginas principais

#### 2. Google Meu Negócio (GMB)
1. Crie perfil: https://www.google.com/business/
2. Categoria: "Psicólogo"
3. Adicione:
   - Endereço (mesmo online, use Florianópolis)
   - Telefone: +55 48 99123-4181
   - Site: marcelomonso.com.br
   - Horário de atendimento
   - Fotos profissionais
   - Descrição completa
4. Verifique o perfil

#### 3. Google Analytics 4 (GA4)
1. Crie conta: https://analytics.google.com
2. Configure propriedade GA4
3. Adicione código de rastreamento ao site
4. Configure conversões (cliques WhatsApp)

---

## 📊 Google Ads - Guia Completo

### Configuração Inicial

#### 1. Criar Conta Google Ads
- Acesse: https://ads.google.com
- Use a mesma conta Google do site
- Configure faturamento (cartão de crédito)

#### 2. Estrutura da Campanha Recomendada

**Tipo:** Campanha de Pesquisa (Search)
**Orçamento inicial:** R$ 15-30/dia (R$ 450-900/mês)
**Objetivo:** Conversões (cliques no WhatsApp)

### Palavras-Chave Recomendadas

#### Grupo 1: Intenção Alta (Prioridade Alta)
```
psicólogo online           [correspondência de frase]
terapia online            [correspondência de frase]
psicólogo por videochamada
agendar psicólogo online
consulta psicólogo online
```

#### Grupo 2: Específicas (Prioridade Média)
```
psicanálise online
psicólogo para ansiedade
terapia para ansiedade online
psicólogo lgbtqia+ online
psicólogo online florianópolis
```

#### Grupo 3: Long-tail (Custo menor)
```
como encontrar psicólogo online
preciso de terapia online
psicólogo que atende online
quanto custa terapia online
psicólogo online valores
```

### Exemplos de Anúncios

#### Anúncio 1 (Geral)
```
Título 1: Psicólogo Online | Marcelo Monsó
Título 2: Atendimento por Videochamada
Título 3: Agende Sua Primeira Sessão
Descrição 1: Terapia com abordagem psicanalítica. Acolhimento ético e escuta profunda. CRP 12/27931.
Descrição 2: Atendimento 100% online. Horários flexíveis. Agende via WhatsApp.
```

#### Anúncio 2 (Ansiedade)
```
Título 1: Terapia para Ansiedade Online
Título 2: Psicólogo CRP 12/27931
Título 3: Primeira Sessão Disponível
Descrição 1: Acolhimento seguro para compreender e tratar sua ansiedade. Abordagem psicanalítica.
Descrição 2: Atendimento online em todo Brasil. Fale comigo no WhatsApp.
```

#### Anúncio 3 (Acolhimento)
```
Título 1: Um Espaço Seguro Para Existir
Título 2: Psicoterapia Online | Marcelo Monsó
Título 3: Agende Sua Consulta
Descrição 1: Psicólogo online com abordagem psicanalítica. Respeito à sua singularidade.
Descrição 2: Atendimento ético e acolhedor. CRP 12/27931. Agende via WhatsApp.
```

### Extensões de Anúncio (IMPORTANTE!)

**1. Links de Site:**
- Sobre Mim → marcelomonso.com.br/#sobre
- Abordagem → marcelomonso.com.br/#psicanalise
- Atendimento → marcelomonso.com.br/#atendimento

**2. Snippets Estruturados:**
- Serviços: Terapia Online, Psicanálise, Ansiedade, Autoconhecimento
- Diferenciais: CRP 12/27931, Atendimento Online, Horários Flexíveis

**3. Chamadas:**
- Número: +55 48 99123-4181

**4. Callouts:**
- "Agende pelo WhatsApp"
- "Atendimento em todo Brasil"
- "Psicólogo CRP 12/27931"
- "Primeira sessão disponível"
- "Horários flexíveis"

### Configurações Importantes

**Segmentação Geográfica:**
- Inicial: Todo Brasil
- Depois testar: Florianópolis, SC, Região Sul

**Segmentação de Público:**
- Idade: 18-65 anos
- Interesses: Saúde mental, bem-estar, autoconhecimento

**Lance:**
- Estratégia inicial: Maximizar cliques
- Depois de 30 conversões: Maximizar conversões

**Rastreamento de Conversão:**
- Configurar conversão: Clique no botão WhatsApp
- Código de conversão Google Ads + Google Analytics

---

## 🎯 Rastreamento de Conversão — Estado Atual (implementado)

### Como funciona
- **Tag base:** `gtag.js` está no `<head>` da `index.html` com `gtag('config', 'G-CRGBSBGV3L')` (GA4) e `gtag('config', 'AW-18254723187')` (Google Ads). O site é uma SPA (todas as rotas servem a mesma `index.html` via rewrite do Vercel), então a tag base cobre todas as páginas.
- **Snippet de evento:** todo clique em botão/link de WhatsApp chama `trackWhatsAppClick()` (`utils/analytics.ts`), que dispara:
  1. Evento GA4 `click_whatsapp` (engajamento/relatórios);
  2. Evento `conversion` do Google Ads com `send_to: 'AW-18254723187/KtYlCIyE7sccEPPww4BE'` (ação **"Reservar horário"**), `value: 160`, `currency: 'BRL'`.
- **Padrão "medir no clique":** o evento usa `event_callback` + `event_timeout` (2 s), como no snippet oficial do Google. Como os botões abrem o WhatsApp em **nova aba** (`target="_blank"`), a página atual não é descarregada e o hit sempre completa — por isso os handlers não bloqueiam a navegação com `preventDefault`. Se algum link passar a navegar na mesma aba, use o `reportWhatsAppConversion(callback)` exportado no mesmo arquivo.
- **Onde o send_to é trocado:** constante `GOOGLE_ADS_SEND_TO` em `utils/analytics.ts`. Confira se o rótulo bate com o do painel (Metas → Conversões → "Reservar horário" → Gerenciar → Ver snippet de evento).

### No painel do Google Ads
- A ação "Reservar horário" deve estar com origem **Site** e método **"usar o snippet de evento"** (não "carregamento de página").
- O status "problema de configuração" some quando o Google recebe os primeiros eventos `conversion` com o rótulo correto — pode levar até 24–48 h após o deploy e o primeiro tráfego.

### Conversões Otimizadas (Enhanced Conversions) — decisão
Enhanced Conversions exige enviar dados de primeira parte **do visitante** (e-mail/telefone, hasheados) junto com a conversão. Este site não coleta nenhum dado do visitante antes do clique — o fluxo é direto para o WhatsApp.

- **Decisão atual (opção b):** manter o fluxo direto ao WhatsApp. Enhanced Conversions fica **desativada** para esta ação no painel (Configurações da ação de conversão → desmarcar "Conversões otimizadas"). O aviso "não ativas" é informativo, não um erro — sem dados de primeira parte não há o que enviar, e ativar a flag sem enviar `user_data` só geraria um novo alerta de "dados não recebidos".
- **Alternativa futura (opção a):** inserir um mini-formulário (nome + telefone ou e-mail) antes do redirect ao WhatsApp e passar o dado via `gtag('set', 'user_data', {...})` antes do evento `conversion`. Ganho: melhor correspondência de conversões (especialmente iOS/ITP) e habilita a meta "lead qualificado". Custo: fricção extra no funil — para um CTA de WhatsApp, cada campo a mais reduz a taxa de clique; só vale testar se a perda de atribuição se mostrar relevante.

### Como validar (Tag Assistant)
1. Abra https://tagassistant.google.com e conecte ao domínio `marcelomonso.com.br` (ou ao preview do deploy).
2. Na aba do site aberta pelo Tag Assistant, clique em qualquer botão de WhatsApp (pode fechar a aba do WhatsApp que abrir).
3. No Tag Assistant, selecione a tag `AW-18254723187` e confira na linha do tempo o evento **conversion** com o rótulo `KtYlCIyE7sccEPPww4BE`.
4. No DevTools (aba Network, filtro `googleadservices`), o clique deve gerar uma requisição `pagead/conversion/18254723187/…` — e o console não deve mostrar erros.
5. Em 3–24 h, em Metas → Conversões, a coluna "Status" da ação deve mudar para "Registrando conversões".

---

## 💰 Estimativas de Custo

### Google Ads (mensais)
- **Básico:** R$ 450/mês (~R$ 15/dia) - 3-5 cliques/dia
- **Médio:** R$ 900/mês (~R$ 30/dia) - 7-10 cliques/dia
- **Agressivo:** R$ 1.500/mês (~R$ 50/dia) - 12-15 cliques/dia

**CPC Médio:** R$ 3-6 por clique (varia por palavra-chave)
**Taxa de conversão estimada:** 5-10% (cliques → agendamentos)

### Exemplo Prático
- Orçamento: R$ 900/mês
- Cliques esperados: ~200 cliques/mês
- Agendamentos: 10-20/mês
- Custo por agendamento: R$ 45-90

---

## 📈 Otimização Contínua

### Semana 1-2
- ✅ Testar diferentes anúncios
- ✅ Identificar palavras-chave com melhor desempenho
- ✅ Ajustar lances

### Mês 1
- ✅ Pausar palavras-chave de baixo desempenho
- ✅ Aumentar lance nas melhores palavras
- ✅ Adicionar palavras-chave negativas

### Palavras-Chave Negativas (adicionar logo)
```
grátis
gratuito
curso
faculdade
formação
emprego
salário
pdf
```

---

## 🎯 Métricas para Acompanhar

### Google Ads
- CTR (Taxa de cliques): Meta >5%
- CPC (Custo por clique): R$ 3-6
- Taxa de conversão: >5%
- Custo por conversão: <R$ 100

### Google Analytics
- Sessões
- Taxa de rejeição: <40%
- Tempo na página: >2 minutos
- Páginas por sessão: >2

### Conversões
- Cliques no WhatsApp
- Envios de mensagem
- Agendamentos realizados

---

## 🔧 Ferramentas Úteis

1. **Google Search Console** - Ver como Google vê seu site
2. **Google Analytics 4** - Acompanhar visitantes
3. **Google Ads** - Gerenciar anúncios
4. **Google Keyword Planner** - Pesquisar palavras-chave
5. **Google PageSpeed Insights** - Testar velocidade

---

## 📞 Próximos Passos

1. ✅ Publicar site no Vercel
2. ✅ Registrar domínio .psi.br ou .com.br
3. ✅ Configurar Google Search Console
4. ✅ Criar Google Meu Negócio
5. ✅ Instalar Google Analytics 4
6. ✅ Criar campanha Google Ads
7. ✅ Monitorar e otimizar semanalmente

---

## 💡 Dicas Extras

### Para Resultados Orgânicos (Grátis)
1. Publique conteúdo no site (blog futuro)
2. Peça avaliações no Google Meu Negócio
3. Compartilhe link nas redes sociais
4. Publique artigos no LinkedIn
5. Participe de fóruns sobre saúde mental

### Para Melhorar Google Ads
1. Crie páginas específicas para cada serviço
2. Use número de telefone com rastreamento
3. Configure remarketing (anúncios para quem visitou)
4. Teste diferentes horários de exibição
5. Acompanhe semanalmente e ajuste

---

**Importante:** Comece devagar com Google Ads (R$ 15-30/dia) e aumente conforme os resultados. O SEO orgânico leva 3-6 meses, mas é gratuito a longo prazo.
