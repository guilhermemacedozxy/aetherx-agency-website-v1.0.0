@AGENTS.md

# AetherX Project Rules

## Idioma

- Todas as respostas devem ser fornecidas em Português do Brasil.

- Explicações técnicas em português.
- Comentários de código em português quando apropriado.
- Commits em português.
- Documentação em português.

## Core Stack

- Utilizar Next.js App Router
- Utilizar TypeScript
- Utilizar GSAP para animações principais
- Utilizar Framer Motion para microinterações
- Utilizar arquitetura componentizada
- Manter código limpo e escalável
- Priorizar performance e organização

## Tailwind CSS Rules

- Utilizar Tailwind CSS em toda a estilização do projeto.

- Evitar CSS puro sempre que for possível.

- Migrar estilos existentes em arquivos `.css` para classes utilitárias do Tailwind.

- Não criar classes CSS manuais para espaçamento, cores, 
tipografia, flexbox, grid ou responsividade quando Tailwind resolver.

- Usar `className` com Tailwind diretamente nos componentes React/Next.js.

- Manter CSS global apenas para:
  - variáveis globais
  - fontes
  - resets necessários
  - configurações base do projeto

- Priorizar responsividade com classes Tailwind como `sm:`, `md:`, `lg:`, `xl:` e `2xl:`.

- Manter o visual fiel ao design original durante a migração.

## Project Structure

- Não recriar o projeto
- Não alterar a arquitetura existente
- Não modificar configurações desnecessárias
- Respeitar a estrutura atual do projeto
- Criar componentes reutilizáveis
- Separar componentes por responsabilidade
- Manter padrão de código consistente
- Utilizar boas práticas de organização



## Design Rules

- Seguir fielmente o design enviado
- Prioridade total para pixel perfect
- Manter estética minimalista e premium
- Visual cinematográfico e sofisticado
- Inspirado em websites Awwwards
- Respeitar alinhamentos originais
- Respeitar espaçamentos do layout
- Respeitar proporções visuais
- Não improvisar elementos fora da referência
- Não alterar identidade visual enviada



## Typography

- Utilizar exclusivamente a fonte Lufga
- Respeitar pesos tipográficos do design
- Respeitar tamanhos do layout original
- Manter hierarquia visual consistente
- Garantir legibilidade premium



## Responsiveness

- Responsividade obrigatória
- Layout totalmente fluido
- Funcionar perfeitamente em desktop e mobile
- Utilizar clamp(), vw, vh e técnicas modernas
- Evitar medidas fixas em mobile
- Manter proporções visuais dos elementos
- Preservar aparência premium em qualquer resolução



## Assets

- Utilizar `logo.svg`
- Utilizar `background-gui-macedo-1.svg`
- Utilizar `background-gui-macedo-2.svg`
- Utilizar `hover-gui-macedo.svg`
- Utilizar `buttom-gui-macedo.svg`
- Utilizar `buttom-gui-macedo-2.svg`



## Navbar Rules

- Navbar totalmente responsiva
- Estrutura fiel ao design
- Layout premium e sofisticado
- Microinterações refinadas
- Hover elegante nos links
- Adicionar underline suave nos links
- Utilizar `hover-gui-macedo.svg` como background hover
- Aplicar transições suaves
- Utilizar easing refinado
- Garantir alinhamento pixel perfect



## Primary Buttons

- Utilizar `buttom-gui-macedo.svg`
- Hover cinematográfico
- Microinterações suaves
- Pequeno scale no hover
- Easing premium
- Feedback visual refinado
- Aparência moderna e tecnológica



## Premium Left Buttons

### Premium Button 01

- Utilizar `buttom-gui-macedo-2.svg` como fundo
- Texto centralizado
- Texto utilizando `background-gui-macedo-1.svg`
- Aplicar `background-clip: text`
- Aplicar texto transparente com preenchimento visual
- Aparência sofisticada e futurista

### Premium Button 02

- Fundo totalmente transparente
- Utilizar apenas borda estilizada
- Borda utilizando `background-gui-macedo-2.svg`
- Texto utilizando `background-gui-macedo-2.svg`
- Utilizar pseudo-elements, mask ou border-image
- Aparência clean e premium
- Hover suave e cinematográfico



## Intro Animation Rules

- Intro obrigatória ao carregar o site
- Tela inicial totalmente preta
- Fade-in suave da `logo.svg`
- Fade-out elegante da logo
- Surgimento dos dois painéis
- Abertura lateral cinematográfica
- Revelação suave do conteúdo principal
- Sensação premium e futurista

### Intro Technical Rules

- Utilizar GSAP Timeline
- Utilizar `power4.inOut`
- Utilizar animações fluidas
- Bloquear scroll durante intro
- Liberar scroll após finalizar
- Remover intro do DOM após execução
- Executar apenas uma vez
- Evitar flickering
- Evitar travamentos
- Priorizar suavidade absoluta



## Panel Rules

### Base Dimensions (1920x1080)

- Width: 912px
- Height: 864px
- Gap: 42px

### Responsive Rules

- Essas medidas são apenas referência visual
- Escalonamento totalmente fluido
- Manter proporções visuais
- Utilizar cálculos responsivos modernos
- Preservar alinhamento centralizado
- Garantir estética premium em qualquer resolução



## Performance Rules

- Utilizar `transform: translate3d()`
- Utilizar `will-change`
- Priorizar GPU acceleration
- Evitar layout shift
- Evitar flickering
- Não animar width/height/top/left
- Utilizar transform para movimentações
- Código otimizado e performático
- Priorizar suavidade em mobile



## Animation Rules

- Todas as animações devem ser suaves
- Priorizar sensação cinematográfica
- Utilizar easing premium
- Evitar animações bruscas
- Garantir transições refinadas
- Microinterações modernas
- Feedback visual elegante



## Git Workflow (Prioridade Máxima)

- Sempre concluir uma tarefa → realizar commit → iniciar próxima tarefa.

- Nunca acumular múltiplas alterações grandes sem commit.

- Commits devem acontecer IMEDIATAMENTE após finalizar cada ajuste relevante.

- Commits devem ser pequenos, organizados e objetivos.

- Escolher dinamicamente o tipo correto do commit dependendo da tarefa executada.

## Tipos de commit obrigatórios

- feat: para novas funcionalidades

- fix: para correções de bugs

- refactor: para refatorações

- style: para ajustes visuais sem alterar lógica

- perf: para melhorias de performance

- chore: para tarefas técnicas/configurações

- docs: documentação

- build: mudanças de build/configuração

- test: testes

## Fluxo obrigatório

- Receber tarefa

- Implementar

- Validar visualmente / funcionalmente

- Realizar commit

- Prosseguir para próxima tarefa

## Exemplos dinâmicos

- git commit -m "fix: Correção da introdução inicial da aplicação."

- git commit -m "style: Refinamento visual da navbar principal."

- git commit -m "feat: Implementação dos efeitos de hover da navegação."

- git commit -m "perf: Otimização das animações dos painéis."

- git commit -m "refactor: Reorganização estrutural dos componentes da interface."

## IMPORTANTE:

- Escolher automaticamente o tipo correto.

- NÃO usar sempre feat.

- NÃO acumular mudanças.

- Commitar após cada tarefa concluída.

- Prioridade total para organização profissional.



## Code Quality Rules

- Código limpo
- Código legível
- Componentização organizada
- Evitar duplicação
- Evitar código desnecessário
- Manter padrão consistente
- Nomeação profissional
- Estrutura escalável



## Final Goal

- Resultado visual extremamente premium
- Aparência cinematográfica
- Estética moderna e sofisticada
- Sensação futurista
- Experiência fluida
- Website nível Awwwards
- Fidelidade total ao design enviado
- Interface visualmente impactante
- Performance premium desktop e mobile
