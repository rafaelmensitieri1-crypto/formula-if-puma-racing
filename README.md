# 🏎️ Fórmula IF Puma Racing - Site Oficial

Site institucional de alto desempenho para a equipe de Fórmula Student a Combustão **Fórmula IF Puma Racing**, do **IFBA (Instituto Federal da Bahia - Campus Jequié)**.

---

## 📸 Identidade Visual & Redes
- **Instagram Oficial:** [@formulaifsae](https://instagram.com/formulaifsae)
- **Hub de Links:** [linktr.ee/formulaif](https://linktr.ee/formulaif)
- **Localização:** IFBA Campus Jequié - Bahia, Brasil
- **Modalidade:** Fórmula SAE Brasil Combustion (Veículo Monoposto a Combustão)

---

## 🎯 Seções e Abas do Projeto

1. **Apresentação do Projeto (`#apresentacao`)**:
   - História da equipe, missão, visão e impacto acadêmico/regional.
   - Subsistemas de engenharia interativos: *Powertrain & Admissão*, *Chassi Spaceframe SAE 4130*, *Suspensão Double Wishbone*, *Telemetria em Tempo Real* e *Gestão & Custos*.
2. **Fotos do Projeto (`#fotos`)**:
   - Galeria filtrável por categorias (*O Carro*, *Garagem & Oficina*, *Eventos & SECITEC*, *Equipe & Simulador*).
   - Modal Lightbox acessível via teclado (ESC, setas) para visualização ampliada.
3. **Patrocínios (`#patrocinios`)**:
   - Por que apoiar a engenharia baiana e o desenvolvimento acadêmico.
   - Cotas estruturadas: *Cota Diamante (Master)*, *Cota Ouro*, *Cota Prata* e *Cota Bronze / Apoio Técnico*.
   - Chamadas diretas para propostas personalizadas e captação de parceiros.
4. **Contatos do Projeto (`#contatos`)**:
   - Cartões diretos para o Instagram `@formulaifsae` e Linktree.
   - Informações de endereço físico e e-mail institucional.
   - Formulário de contato validado com pré-seleção de cotas de patrocínio.

---

## 🧠 Padrões Aplicados (Pasta `skills/` do Projeto)
O projeto foi construído respeitando as diretrizes das habilidades presentes na pasta `skills/`:
- **Acessibilidade WCAG (`skills/Acessibility WCAG`)**: Alto contraste (mínimo 4.5:1), anéis de foco visíveis (`:focus-visible`), targets de toque de no mínimo 44x44px, suporte a leitores de tela (`aria-label`, `role="tab"`, etc.) e respeito a `prefers-reduced-motion`.
- **UI/UX Design Motorsport (`skills/uiux-designer`)**: Estética escura com vermelho corrida (`#E11D48`), tipografia geométrica, badges de telemetria e inspiração em dashboards de competição.
- **Frontend Expert (`skills/frontend-expert`)**: Arquitetura modular de componentes React, isolamento de estilos em CSS, ausência de shifts de layout e código limpo.
- **Regras Anti-Slop (`skills/SKILL UI.md`)**:
  - Eliminação de setas de caractere (`→`, `←`) substituídas por SVGs dedicados.
  - Eliminação de `hover:scale-*` que prejudica `prefers-reduced-motion` e causa shifts no layout.
  - Uso estrito de tokens semânticos de CSS.

---

## 🚀 Como Executar

### 1. Pré-requisito
Ter o [Node.js](https://nodejs.org/) instalado no computador.

### 2. Instalação e Execução
```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse no navegador: `http://localhost:3000`
