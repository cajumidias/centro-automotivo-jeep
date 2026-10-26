# 🧭 GUIA MESTRE DO SISTEMA — CENTRO AUTOMOTIVO JEEP
> **LEITURA E ATUALIZAÇÃO OBRIGATÓRIAS POR TODAS AS INSTÂNCIAS DO ANTIGRAVITY**  
> *Última Atualização: 25/10/2026* | *Versão do Documento: 1.0.0*

---

## ⚠️ PROTOCOLO MANDATÓRIO DO ANTIGRAVITY (LEIA ANTES DE QUALQUER AÇÃO)

Este arquivo é a **bússola oficial e fonte única da verdade** do ecossistema do **Centro Automotivo Jeep**. Para garantir continuidade perfeita, excelência arquitetural e prevenir perda de contexto ao longo do tempo, você DEVE seguir rigorosamente as 3 regras sagradas:

1. 🔍 **CONFERÊNCIA OBRIGATÓRIA ANTES DE QUALQUER ALTERAÇÃO:**  
   Antes de criar, alterar, refatorar ou excluir qualquer arquivo ou banco de dados, você **DEVE consultar este arquivo** para verificar a arquitetura atual, padrões de estilo, módulos existentes e regras de negócio.
2. 📝 **ATUALIZAÇÃO OBRIGATÓRIA APÓS CADA MUDANÇA:**  
   Sempre que concluir qualquer alteração estrutural, adicionar uma nova funcionalidade, modificar o schema do banco ou criar novas rotas/componentes, você **DEVE atualizar este arquivo imediatamente**, registrando a alteração na seção de [Histórico de Alterações](#-histórico-de-atualizações--changelog).
3. 💎 **EXCELÊNCIA VISUAL E TÉCNICA:**  
   O sistema atende proprietários e especialistas em veículos da marca **Jeep** (Renegade, Compass, Commander, Wrangler, Cherokee, Gladiator). O visual deve ser **premium, moderno, robusto e profissional**, evitando designs genéricos ou amadores.

---

## 🎯 1. VISÃO GERAL DO PROJETO

O **Centro Automotivo Jeep** é uma plataforma completa e integrada voltada para oficinas especializadas de alta performance, focada em veículos Jeep e 4x4.

### Principais Objetivos:
- **Para o Cliente Final:** Agendamento simplificado, visualização transparente de orçamentos e acompanhamento do status do seu Jeep em tempo real (check-in, diagnóstico, peças, execução e entrega).
- **Para a Oficina/Gestão:** Controle total do fluxo de entrada e saída, abertura de Ordens de Serviço (OS) com vistoria e fotos, precificação de peças/serviços, envio de orçamentos via WhatsApp e controle de faturamento/estoque.

---

## 🛠️ 2. STACK TECNOLÓGICA E PADRÕES

| Camada | Tecnologia Principal | Descrição / Uso |
| :--- | :--- | :--- |
| **Frontend** | React / Vite (SPA) | Interface ultra-rápida, modular e reativa. |
| **Estilização** | Vanilla CSS Moderno & Design Tokens | CSS flexível, responsivo, com variáveis de tema e micro-interações sem bloat. |
| **Ícones** | Lucide React | Biblioteca moderna de ícones vetoriais limpos e consistentes. |
| **Backend / DB** | Supabase (PostgreSQL + RLS) | Autenticação, Banco Relacional, Storage para vistorias e Realtime. |
| **Comunicação** | WhatsApp API / Deep Links | Notificações de status, envio de orçamentos e agendamentos diretos. |
| **Build & Deploy** | Vite / Vercel / Netlify | Alta performance e carregamento instantâneo. |

### Paleta de Cores e Identidade Visual (Jeep Experience):
- **Preto Chumbo / Dark Base:** `#0F1115` e `#181B20` (fundo sofisticado e imponente)
- **Verde Militar / Jeep Heritage:** `#2D4739` / `#3E5F4C` (identidade autêntica da marca)
- **Laranja / Âmbar Trailhawk (Destaque):** `#E05A1B` / `#FF6F26` (CTAs, status ativos e alertas)
- **Cinza Titânio & Metal:** `#8B949E` / `#C9D1D9` (textos e bordas refinadas)
- **Branco Puro:** `#FFFFFF` (títulos e contraste máximo)
- **Tipografia:** Google Fonts (`Inter` ou `Outfit` para leitura dinâmica; `Montserrat` ou `Barlow` para títulos fortes).

---

## 🏗️ 3. ARQUITETURA MODULAR DO SISTEMA

O sistema é dividido em dois grandes ambientes interligados:

### A. Portal Público & Experiência do Cliente (Landing Page + Rastreamento)
1. **Hero Section:** Apresentação da oficina com apelo visual de alta precisão técnica e especialização Jeep.
2. **Especialidades Jeep:** Diagnósticos eletrônicos originais, suspensão 4x4, câmbio automático, revisões periódicas conforme manual de fábrica e freios.
3. **Agendamento Rápido:** Formulário inteligente para o dono do veículo agendar revisão (Modelo Jeep, Ano, Placa, Quilometragem, Serviço e Data desejada).
4. **Consulta de Status da OS em Tempo Real:** O cliente insere a placa ou código da OS e acompanha a linha do tempo do seu carro com fotos e aprovação de itens.
5. **Botão Flutuante e Contato WhatsApp:** Direcionamento direto para consultores técnicos da oficina.

### B. Painel Administrativo / Gestão da Oficina
1. **Dashboard Operacional:**
   - Carros no pátio hoje.
   - OS em andamento, aguardando peças e prontas para entrega.
   - Faturamento diário/mensal e ticket médio.
2. **Ordens de Serviço (OS):**
   - Entrada de Veículo com Check-in Digital (registro de quilometragem, nível de combustível, avarias na lataria e fotos).
   - Diagnóstico técnico do mecânico.
   - Tabela de Peças (com código original Mopar/paralela homologada) e Mão de Obra.
   - Geração de link ou PDF para aprovação do cliente.
   - Linha do tempo de status: `Aguardando Vistoria` ➔ `Diagnóstico / Orçamento` ➔ `Aguardando Aprovação` ➔ `Em Execução` ➔ `Aguardando Peças` ➔ `Finalizado / Testes` ➔ `Pronto para Retirada` ➔ `Entregue`.
3. **Cadastro de Clientes e Veículos:**
   - Histórico vitalício de todas as manutenções do Jeep por chassi/placa.
4. **Catálogo de Serviços & Tabela de Preços:**
   - Revisões programadas (10k, 20k, 30k... km), troca de fluidos, alinhamento 3D, etc.
5. **Estoque de Insumos & Peças:**
   - Controle de filtros, óleos com viscosidade recomendada, pastilhas, etc.

---

## 🗄️ 4. MODELO DE DADOS & SCHEMAS (SUPABASE POSTGRESQL)

### Tabelas Principais:
- **`clientes`**: `id`, `nome`, `cpf_cnpj`, `telefone_whatsapp`, `email`, `cidade`, `created_at`
- **`veiculos`**: `id`, `cliente_id`, `modelo` (ex: Renegade Longitude, Compass Limited, Wrangler Rubicon), `ano_fabricacao`, `ano_modelo`, `placa`, `chassi`, `cor`, `quilometragem_atual`, `motorizacao` (ex: 1.3 Turbo T270, 2.0 Turbodiesel TD350, 3.6 V6 Pentastar)
- **`ordens_servico`**: `id`, `numero_os`, `veiculo_id`, `cliente_id`, `status`, `km_entrada`, `combustivel_nivel`, `relato_cliente`, `diagnostico_tecnico`, `valor_pecas`, `valor_mao_obra`, `valor_desconto`, `valor_total`, `aprovado_pelo_cliente`, `data_previsao_entrega`, `data_finalizacao`, `created_at`
- **`itens_os`**: `id`, `os_id`, `tipo` (peca | servico), `descricao`, `codigo_referencia`, `quantidade`, `valor_unitario`, `valor_total`, `status_item`
- **`vistoria_fotos`**: `id`, `os_id`, `url_foto`, `tipo_foto` (painel, frente, traseira, lateral_esquerda, lateral_direita, avaria), `observacoes`
- **`agendamentos`**: `id`, `nome_cliente`, `telefone`, `modelo_jeep`, `placa`, `data_agendamento`, `horario`, `servico_solicitado`, `status` (pendente, confirmado, cancelado, convertido_em_os)

---

## 📁 5. ESTRUTURA RECOMENDADA DE DIRETÓRIOS

```text
Centro_automotivo_jeep/
├── GEMINI.md                    # 🧭 Este arquivo (Guia Mestre Obrigatório)
├── index.html                   # HTML Principal com Meta Tags e SEO
├── package.json                 # Dependências e Scripts
├── vite.config.js               # Configuração do Vite
├── public/                      # Imagens estáticas, favicon, logotipos Jeep
│   └── icons/
├── src/
│   ├── assets/                  # Imagens e mídias do projeto
│   ├── components/              # Componentes reutilizáveis
│   │   ├── common/              # Botões, Cards, Modais, Inputs
│   │   ├── layout/              # Navbar, Footer, Sidebar
│   │   ├── os/                  # Linha do tempo, Card de OS, Check-in
│   │   └── agendamento/         # Formulários e seletores de data/horário
│   ├── pages/                   # Páginas da aplicação
│   │   ├── public/              # Home / Landing Page, Rastreamento OS
│   │   └── admin/               # Dashboard, Lista de OS, Clientes, Estoque
│   ├── services/                # Supabase Client, chamadas de API, WhatsApp
│   ├── hooks/                   # Custom React Hooks
│   ├── utils/                   # Formatadores (moeda BRL, placa Mercosul, datas)
│   └── styles/                  # Design System, variáveis CSS e resets
│       ├── global.css
│       └── variables.css
└── supabase/
    └── schema.sql               # Scripts DDL para tabelas, RLS e triggers
```

---

## 📋 6. CHECKLIST DE QUALIDADE PARA CADA ALTERAÇÃO

Antes de finalizar qualquer tarefa, o agente Antigravity deve garantir:
- [ ] O código roda sem erros de compilação ou alertas no console.
- [ ] A interface é 100% responsiva (Mobile, Tablet, Desktop).
- [ ] O design segue a estética robusta e premium da marca Jeep.
- [ ] Validações de formulários (placa de carro, telefone/WhatsApp, valores) estão ativas.
- [ ] Todas as novas telas, rotas ou tabelas foram documentadas neste `GEMINI.md`.

---

## 📜 7. HISTÓRICO DE ATUALIZAÇÕES & CHANGELOG

| Data | Versão | Descrição da Alteração | Responsável |
| :--- | :--- | :--- | :--- |
| **25/10/2026** | `1.0.0` | Criação inicial do `GEMINI.md` definindo o guia mestre do sistema, regras mandatórias de consulta e atualização contínua, arquitetura tecnológica, paleta visual Jeep e modelo de dados. | **Antigravity** |
| **25/10/2026** | `1.1.0` | Implementação completa da Landing Page de Alta Conversão para **InovaÇÃO Centro Automotivo** (Fortaleza/CE) com fidelidade à referência visual: React + TypeScript + Vite, Lucide Icons, Header integrado, Hero com Jeep Compass e destaque vermelho, Seção de Serviços com 6 cards interativos e WhatsApp contextualizado, Diferenciais com mecânico e modelos Jeep, Avaliações Google 4.8 com depoimentos reais, Contato com mapa e Accordion de FAQ, Rodapé e Botão Flutuante de WhatsApp, além de mensuração analítica preparada para Google Ads/GA4. | **Antigravity** |
| **25/10/2026** | `1.2.0` | Refinamento cirúrgico da **Seção de Capa (Header e Hero)** baseado no arquivo oficial `imagem_capa/imagem_capa.png`: integração da fotografia panorâmica nativa com o Jeep Compass, tipografia geométrica precisa (Plus Jakarta Sans + Inter ExtraBold 800), quebras de linha exatas, palavra 'Jeep' em vermelho, botão 'SOLICITAR ATENDIMENTO' com ícone oficial do WhatsApp e seta, detalhe da linha do header com segmento vermelho e menu minimalista funcional. | **Antigravity** |
| **25/10/2026** | `1.3.0` | **Unificação Tipográfica Global:** Aplicação estrita da mesma família tipográfica da capa (`Plus Jakarta Sans` e `Inter` com peso ExtraBold 800 e kerning geométrico) em **todas as seções do site** (Serviços, Diferenciais, Modelos Jeep, Avaliações Google, Contato, FAQ Accordion e Rodapé), garantindo harmonia visual absoluta de ponta a ponta. | **Antigravity** |
| **25/10/2026** | `1.4.0` | **Integração do Google Maps Oficial & Avaliações Reais:** Conexão direta com o perfil oficial da oficina no Google Maps Papicu (`+900 avaliações`, nota `4,8`), incluindo depoimentos reais verificados (destaque para o relato de Markus L. sobre manutenção de Jeep Wrangler/Gladiator, Gabriela Aguiar e Marcio Nicolau), links interativos em cada card e no badge oficial do Google. | **Antigravity** |
| **25/10/2026** | `1.5.0` | **Design Premium de Feedbacks Reais com Prints Originais:** Reestruturação visual completa da seção de Avaliações integrando as imagens reais da pasta `feedbaaks` (`01.png`, `02.png`, `03.png`). Layout em cards modernos com badges personalizadas (`Proprietário Jeep Compass`, `Com Fotos do Serviço Realizado`, `Atendimento & Confiança`), moldura dos prints com hover zoom, botão para ver no Google Maps e Lightbox interativo para visualização ampliada dos prints em alta definição. | **Antigravity** |
| **25/10/2026** | `1.6.0` | **Ajuste no Selo do Google Maps:** Remoção do texto numérico `+ de 900 avaliações`, exibindo agora de forma elegante e limpa `4,8 ★★★★★ Avaliações no Google`, mantendo o link interativo direto para o perfil oficial da oficina no Google Maps. | **Antigravity** |
| **25/10/2026** | `1.7.0` | **Integração do Google Maps Real Interativo & Solicitação de Rotas GPS:** Substituição da imagem estática de preview pelo iframe interativo oficial do Google Maps com o pin exato de `InovaÇÃO Centro Automotivo - Oficina Mecânica Papicu` (-3.7393153, -38.4841722), acompanhado de botões flutuantes para traçar rota direta no GPS (`Google Maps Directions` e `Waze`). | **Antigravity** |
| **25/10/2026** | `1.8.0` | **Integração do Tour Virtual 360° da Oficina Oficial:** Adição do Street View 360° interativo com o código oficial fornecido pelo Google Maps (`CAoSFkNJSE0wb2dLRUlDQWdJRGw2TGFNRFE`). Sistema com abas dinâmicas para alternar instantaneamente entre `TOUR 360° DA OFICINA` e `MAPA & GPS`, indicador animado de giro 360°, e botão de **Tela Cheia** com Lightbox imersivo de alta resolução. | **Antigravity** |
| **25/10/2026** | `1.9.0` | **Criação da Seção 'Sobre Nós' & Desacoplamento do Tour 360°:** Separação do Tour 360° do bloco de mapa. Criação da seção dedicada `Sobre Nós` com a história autêntica da InovaÇÃO (fundada em nov/2015), métrica de autoridade `+10 Anos de experiência`, botão de conversão direta `Faça orçamento via WhatsApp` (`contate.me/55853247165579`) e o visualizador 360° da estrutura em destaque com modal de tela cheia. A seção de contato voltou a ter mapa GPS limpo e exclusivo. | **Antigravity** |
| **25/10/2026** | `1.10.0` | **Atualização da Imagem da Seção 'Por Que Escolher a InovaÇÃO':** Substituição da foto de banco pela fotografia autêntica da pasta `imagem_secao` (`Oficina Jeep com Mecânicos em Ação.png`), exibindo a oficina de alta performance com múltiplos veículos Jeep (Renegade, Wrangler, Compass) nos elevadores hidráulicos e mecânicos em ação, com refinamento de proporções, hover suave e responsividade otimizada. | **Antigravity** |
| **25/10/2026** | `1.11.0` | **Créditos de Desenvolvimento no Rodapé:** Inclusão no rodapé da assinatura com link direto e seguro para o Instagram oficial: `Site desenvolvido pela Agência Caju Mídias` (`https://www.instagram.com/caju_midias/`), com estilização discreta, elegante e hover responsivo. | **Antigravity** |
| **25/10/2026** | `1.12.0` | **Otimização Mobile-First de Alta Conversão para Google Ads:** Adaptação responsiva milimétrica de todas as seções para smartphones (360px a 640px). Botões de ação em largura total (100%) com área de toque mínima de 50-52px para o polegar, tipografia balanceada (H1 fluido, sem quebras indesejadas), menu mobile em tela cheia com backdrop-blur, chips horizontais para os modelos Jeep, cards de serviços em coluna única, tour 360° touch-friendly com modal em tela cheia, feedbacks reais em cards verticais elegantes com lightbox otimizado para toque, botões de rota GPS/Waze proeminentes e botão flutuante de WhatsApp ergonomicamente posicionado. | **Antigravity** |

---

> 📌 **Lembrete Final ao Antigravity:** Qualquer intervenção futura deve primeiro ler este guia, respeitar os padrões estabelecidos e adicionar o registro correspondente nesta tabela de changelog.
