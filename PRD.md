# PRD, Site Institucional Tallpa Solutions
**Versão:** 4.0, Reconstrução completa (02/09/2026)

> Este documento descreve o site **como ele é hoje**. A v3.4 descrevia a versão
> anterior, substituída integralmente. Mudou algo estrutural? Atualize aqui no
> mesmo commit.

---

## 1. Posicionamento

A Tallpa entra em operações de campo, telecom, provedores de internet,
infraestrutura, serviços com equipe distribuída, onde o controle vive em
planilha e sistema de terceiro, e devolve **dado consolidado, indicador
confiável e um sistema que a equipe usa todo dia**.

O site é construído em torno dessa prova. O visitante precisa entender, em
ordem: o que a Tallpa faz, que problema ela resolve, o que ela já construiu,
por que confiar, e como pedir um diagnóstico.

**CTA único em todo o site:** *Solicitar diagnóstico gratuito*. Não há
demonstração nem teste gratuito, não existem hoje, e o site não promete o que
não entrega.

---

## 2. O que mudou da v3.4 para a v4.0

| # | Problema da versão anterior | Resolução |
|---|---|---|
| P1 | Zero prova de trabalho realizado; `/showcase` era dashboard fictício | Três cases narrados em `/projetos`, a partir de sistemas reais em produção |
| P2 | KPIs "37% / 3.2× / +25k horas" apresentados como Impacto Comprovado, sem origem verificável | Removidos. Toda métrica exibida vem dos artefatos dos projetos |
| P3 | Paleta (`#007BFF`) não batia com o gradiente da logo (`#4AF8FF→#1840FF`) | Migração para o Design System v1.0, que é a paleta da própria marca |
| P4 | Tipografia divergente do design system (Manrope) | Poppins (display) · Inter (corpo) · JetBrains Mono (números) |
| P5 | Regra §7.1 obrigava `min-h-screen` na abertura de toda página | Revogada. Altura natural; o componente `Section` padroniza o respiro |
| P6 | Hero sem impacto: logo estática e mockup genérico | A marca se constrói em cena, três pilares subindo em sequência |
| P7 | Copy genérica, contrariando a própria voz do design system | Reescrita: "Menos controles dispersos. Mais dados para decidir." |
| P8 | Formulário sem qualificação, sem anti-spam, e o erro cru do Supabase vazava para a tela | Fluxo em 3 passos, validação por campo, honeypot + tempo mínimo, erro tratado |
| P9 | README era o template do `create-next-app` | Reescrito: setup, variáveis, como editar, pendências |
| P10 | OG image em `.svg`, não renderiza em WhatsApp nem LinkedIn | `opengraph-image.tsx` gera PNG 1200×630 no build |
| P11 | `sitemap.ts` com `lastModified` em 2025 | Derivado do conteúdo, com data correta |
| P12 | Navbar fechava o menu em qualquer scroll; `Services` usava `<a>` | Fecha ao navegar; `next/link` em toda navegação interna |
| P13 | Sem contato dedicado, sem FAQ, sem segmentos | `/contato`, FAQ com JSON-LD e seção de segmentos |

Bugs encontrados na validação em navegador e corrigidos: `overflow-x` no `body`
transformando-o em contêiner de rolagem; `feColorMatrix` com quebras de linha
quebrando a hidratação; gráfico com duas escalas num eixo só; textos abaixo do
contraste AA.

---

## 3. Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16.2.0 (App Router, React Compiler) |
| UI | React 19.2.4 · TypeScript |
| Estilo | Tailwind CSS v4, tokens no `@theme` de `globals.css`, sem config file |
| Animação | Framer Motion (uso pontual: só a marca) |
| Ícones | Lucide React |
| Gráficos | Recharts (carregado só no cliente) |
| Lead | Supabase (persistência) + Resend (notificação) |
| Deploy | Vercel · `tallpa.com.br` |

**Nenhuma dependência foi adicionada na reconstrução.**

---

## 4. Identidade visual

Fonte da verdade: `design-system.html` (Tallpa Design System v1.0). A paleta
dele coincide com o gradiente da logo, foi por isso que ele substituiu a
paleta anterior.

### Tokens (em `src/app/globals.css`)
- **Fundos:** `#050814` base · `#0A0E1A` · `#0F1328` · `#111631` card · `#161C3D` hover · `#1A2040`
- **Rampas:** cyan 50–900, blue 50–900, gray 100–900
- **Gradientes:** `--gradient-primary` (180°) · `--gradient-horizontal` (90°) · `--gradient-accent` (135°)
- **Semânticos:** success `#32DC82` · warning `#FFA532` · danger `#FF4646`
- **Bordas:** `rgba(74,248,255, .08 / .15 / .30)`
- **Glow no lugar de sombra:** `shadow-glow-sm/md/lg`
- **Raios:** 6 / 10 / 16 / 24
- **Motion:** 120 / 200 / 400 / 600ms · `cubic-bezier(.22,1,.36,1)` padrão, `(.34,1.56,.64,1)` só em destaque

### Regra de contraste
Nenhum texto legível abaixo de **4.5:1**. Na prática: `gray-400` (4.93:1) é o
tom mais escuro permitido para texto. `gray-500` e `gray-600` reprovam em AA e
não devem ser usados em texto.

### Hero
Os três polígonos da logo sobem da base em sequência (0 / 140 / 280ms), com
preenchimento em gradiente e bloom de glow. Campo de partículas discreto atrás,
escondido abaixo de 768px.

**Decisão registrada:** SVG + Framer Motion, sem Three.js/WebGL. São três
polígonos, WebGL custaria ~150 KB de bundle e bateria no celular para desenhar
com menos nitidez o que o SVG desenha. `prefers-reduced-motion: reduce` entrega
a marca já montada, sem partículas.

---

## 5. Arquitetura

| Rota | Conteúdo |
|---|---|
| `/` | Hero → problemas → soluções → projetos → método → segmentos → CTA → FAQ |
| `/solucoes` | As 8 frentes, cada uma com âncora própria |
| `/projetos` | Índice dos cases |
| `/projetos/[slug]` | Case completo (SSG via `generateStaticParams`) |
| `/sobre` | Posicionamento, princípios, método, o que está rodando |
| `/contato` | Formulário de diagnóstico + canais diretos |
| `/privacidade` | LGPD (preservado da v3.4) |

**Redirects 308** em `next.config.ts`: `/sistemas` · `/ia-automacao` ·
`/data-bi` → `/solucoes#âncora` · `/showcase` → `/projetos`.

### Conteúdo como dado
`src/content/`, `site.ts`, `projects.ts`, `solutions.ts`, `home.ts`.
Cadastrar um projeto ou uma solução é adicionar um objeto. Índice, rotas,
sitemap e JSON-LD derivam daí. Ver README.

---

## 6. Cases, regras de conteúdo (vinculantes)

Os três projetos são de clientes reais e estão **anonimizados por decisão do
cliente**. Ao editar `src/content/projects.ts`:

1. **Sem nome de cliente, marca ou subdomínio.** O case é descrito pelo segmento.
2. **Sem número que não venha dos artefatos do projeto.** Nada de ROI, "redução
   de X%" ou contagem de usuários.
3. **Sem dado operacional, nome de pessoa, IP interno ou credencial.**

As interfaces em `src/components/screens/` são **recriações** construídas com os
tokens visuais dos projetos, com dados ilustrativos e aviso visível na galeria.
Nenhuma captura de tela real de cliente é exibida.

---

## 7. Conversão

Fluxo em `DiagnosticForm`: **interesse → identificação → gargalo → envio →
confirmação**.

- Interesse por chips: diagnóstico da operação · sistema sob medida · dashboards
  e indicadores · automação de processo · ainda não sei
- E-mail **ou** WhatsApp, um dos dois basta
- Validação client e server, com `aria-invalid` e `aria-describedby`
- Anti-spam sem dependência: honeypot + tempo mínimo de preenchimento (2,5s)
- Confirmação explícita: retorno em até 24h úteis, sem proposta e sem compromisso

### Server Action (`src/app/actions.ts`)
- Erro do Supabase **nunca** chega ao usuário, vai para o log do servidor
- Falha do banco **não perde o lead**: o e-mail sai mesmo assim, sinalizado
- Se a coluna `interest` não existir, regrava sem ela
- Valores escapados antes de montar o HTML do e-mail

**Pendência:** `alter table public.leads add column if not exists interest text;`

---

## 8. SEO

- `opengraph-image.tsx` gera PNG 1200×630 no build (global e por case)
- `generateMetadata` com canonical por rota
- JSON-LD: Organization/LocalBusiness/ProfessionalService + WebSite (global),
  FAQPage (home), BreadcrumbList + CreativeWork (cases), derivados de `content/`
- `sitemap.ts` cobre 9 URLs; `robots.ts` libera tudo
- Um `<h1>` por página; `alt` descritivo em toda imagem

---

## 9. LGPD (preservado da v3.4, sem alteração funcional)

`CookieBanner` + `CookieModal` com toggles granulares; GA4 injetado apenas com
`analytics: true`; `/privacidade` com direitos do titular.
Chaves: `tallpa-cookie-consent`, `tallpa-cookie-preferences`.

---

## 10. Validação antes de publicar

```bash
npm run lint && npx tsc --noEmit && npm run build
```

Checklist manual: hero em 1440/768/375px · `prefers-reduced-motion` · navegação
por teclado com foco visível · formulário (erro, sucesso, e-mail recebido) ·
console do navegador limpo · redirects antigos respondendo · contraste AA ·
**busca por nome de cliente em `src/` e `public/` retornando zero**.
