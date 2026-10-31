# 📋 Architecture Decision Records (ADRs)

Registro formal das decisões técnicas adotadas no projeto Fórmula IF Puma Racing.

---

### ADR 001: Adoção de CSS Nativo Modular em vez de Tailwind CSS
- **Status:** Aceito
- **Contexto:** Necessidade de construir um design motorsport altamente personalizado, com transições controladas e alinhamento rígido às diretrizes anti-slop da equipe.
- **Decisão:** Utilizar variáveis semânticas de CSS em `:root` aliadas a arquivos CSS por componente.
- **Consequências:** Elimina classes utilitárias redundantes no HTML, reduz o bundle final e garante manutenibilidade clara.

---

### ADR 002: Atualização da Motorização para Honda CB 250F Twister
- **Status:** Aceito
- **Contexto:** O projeto anteriormente continha referências genéricas ou desatualizadas de motorização. A equipe do IFBA Campus Jequié padronizou a construção do monoposto no motor Honda CB 250F Twister (monocilíndrico 4T OHC 4 válvulas).
- **Decisão:** Atualizar todas as menções, fichas técnicas e o mock de serviço para refletir estritamente o motor Honda CB 250F Twister e definir o status do carro como "Em Construção / Manufatura".
- **Consequências:** Garante precisão técnica perante patrocinadores, juízes da SAE Brasil e visitantes.

---

### ADR 003: Biblioteca Interna de Ícones SVG (`Icons.jsx`)
- **Status:** Aceito
- **Contexto:** Evitar instalação de pacotes pesados como `lucide-react` ou `react-icons` para apenas ~15 ícones usados, além de cumprir as regras do `skills/SKILL UI.md` que proíbem setas de texto (`→`, `←`).
- **Decisão:** Manter um arquivo centralizado `src/components/Icons.jsx` com ícones vetoriais otimizados, atributos `aria-hidden="true"` e suporte a `className` e `size`.
- **Consequências:** Zero dependências externas de ícones, renderização instantânea e acessibilidade garantida.

---

### ADR 004: Navegação Baseada em Abas e Scroll Suave
- **Status:** Aceito
- **Contexto:** Por ser um site promocional de página única (landing page), a navegação por rotas completas do navegador quebraria a fluidez da experiência do usuário em dispositivos móveis.
- **Decisão:** Manter uma SPA com rolagem suave (`scrollIntoView({ behavior: 'smooth' })`) coordenada pelo estado `activeTab` em `App.jsx`.
- **Consequências:** Interface rápida, sem recarregamentos e com sincronização de foco visual.

