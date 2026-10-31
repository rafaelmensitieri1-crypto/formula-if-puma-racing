# 🗺️ Roadmap de Desenvolvimento - Fórmula IF Puma Racing

Este documento registra as funcionalidades entregues, os débitos técnicos e o backlog priorizado do projeto.

---

## 🏁 Entregas Realizadas (Concluído)

- [x] Configuração inicial do projeto React 18 + Vite 5.
- [x] Design System Motorsport com tokens semânticos e modo escuro nativo.
- [x] Barra de navegação responsiva com gaveta mobile acessível.
- [x] Seção Hero inspirada em layouts de alta densidade (Motorsport) com especificações da Twister CB 250 e SECITEC 2026.
- [x] Apresentação do projeto com navegador interativo dos **7 setores oficiais**:
  - Powertrain, Chassi, Eletrônica, Design & Aerodinâmica, Freio & Suspensão, Comunicações e Secretaria.
- [x] Galeria de fotos filtrável por categorias com modal Lightbox e navegação por teclado (ESC, setas).
- [x] Tabela de cotas de patrocínio (Bronze, Prata, Ouro e Diamante Master) com redirecionamento contextual para contato.
- [x] Seção de contatos com cards diretos para Instagram (@formulaifsae), Linktree e formulário validado.
- [x] Conformidade de acessibilidade WCAG 2.2 (alto contraste, alvos de toque >= 44px, `prefers-reduced-motion`).
- [x] Remoção de arquivos órfãos de template (`Features`, `Header`, `Home`).
- [x] Configuração da política de execução do PowerShell no ambiente Windows local.

---

## 🛠️ Backlog Priorizado (Próximas Etapas)

### Prioridade Alta (Sprint 1)
- [ ] **Integração Real do Formulário de Contato:**
  - Substituir o mock atual (`setTimeout`) por um serviço de envio (ex: Formspree, Resend ou endpoint serverless) para que os e-mails cheguem à diretoria.
- [ ] **Banco de Imagens Reais na Galeria:**
  - Substituir as imagens repetidas (`puma-feed.jpg`) por fotos dedicadas para cada categoria (Oficina, Chassi, Eventos e Simulador).

### Prioridade Média (Sprint 2)
- [ ] **Dados Técnicos Reativos:**
  - Conectar os dados de `src/services/api.js` para alimentar dinamicamente os cartões de especificações do protótipo.
- [ ] **Otimização de Mídias e SEO:**
  - Converter imagens PNG/JPG grandes para formato moderno WebP.
  - Implementar OpenGraph Tags e Twitter Cards para compartilhamento enriquecido no WhatsApp, Instagram e LinkedIn.

### Prioridade Baixa / Futuro (Sprint 3)
- [ ] **Testes Automatizados:**
  - Adicionar testes de acessibilidade e regressão visual com Vitest e Playwright.
- [ ] **Área de Membros / Notícias:**
  - Espaço dinâmico para comunicados de processos seletivos e editais do IFBA.

