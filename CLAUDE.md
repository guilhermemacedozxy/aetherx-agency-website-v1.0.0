@AGENTS.md

# AetherX Project Rules

## Core Stack

- Utilizar Next.js App Router
- Utilizar TypeScript
- Utilizar GSAP para animações principais
- Utilizar Framer Motion para microinterações
- Utilizar arquitetura componentizada
- Manter código limpo e escalável
- Priorizar performance e organização



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



## Git Workflow

- Realizar commits após cada tarefa concluída
- Nunca acumular muitas alterações
- Utilizar commits pequenos e organizados
- Utilizar mensagens claras e profissionais
- Seguir padrão profissional de versionamento

### Commit Examples

```bash id="2r4hif"
git commit -m "feat: implementação da estrutura da navbar"
```

```bash id="e4g3aa"
git commit -m "feat: estilização premium da navbar"
```

```bash id="sv2mwg"
git commit -m "feat: implementação da intro cinematográfica"
```

```bash id="4od63g"
git commit -m "feat: implementação dos botões premium"
```

```bash id="p7jlwm"
git commit -m "feat: refinamento responsivo da interface"
```



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
