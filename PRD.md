# PRD: Site Institucional - Tallpa Solutions
**Versão:** 3.1 — Atualizado em 19/03/2026 (refinamento global de espaçamento e animações)

---

## 1. Objetivo do Projeto
Criar um site moderno, de alta performance e visualmente tecnológico para posicionar a Tallpa Solutions como uma Software House premium. O site deve converter visitantes em leads qualificados para projetos de sistemas, automação com IA e BI, e será publicado no domínio `tallpa.com.br`.

---

## 2. Stack Tecnológico (Confirmado e Implementado)
| Camada | Tecnologia |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router, TypeScript) |
| **Estilização** | Tailwind CSS v4 (configuração via `@theme` no CSS — sem `tailwind.config.ts`) |
| **Animações** | Framer Motion (disponível, uso pontual e consciente) |
| **Ícones** | Lucide React |
| **Gráficos** | Recharts (para o Showcase) |
| **Utilitários CSS** | clsx + tailwind-merge |
| **Backend/BaaS** | Supabase (captação de leads) |
| **Deploy** | Vercel — domínio `tallpa.com.br` |

---

## 3. Identidade Visual & UI/UX

### 3.1 Tema e Estilo
- **Tema:** Dark Mode fixo e permanente (classe `dark` aplicada globalmente na tag `<html>`).
- **Estilo:** Minimalista, futurista e limpo.
- **Componentes:** Cards com efeito glassmorphism, bordas arredondadas, tipografia geométrica.

### 3.2 Paleta de Cores (CSS variables em `globals.css`)
| Token | Valor | Uso |
| :--- | :--- | :--- |
| `--color-brand-electric` | `#007BFF` | Gradiente, bordas de destaque |
| `--color-brand-cyan` | `#00C2FF` | Eyebrows, acentos, glow |
| `--color-dark-bg` | `#0A0C10` | Fundo principal de todas as páginas |
| `--color-dark-card` | `#111318` | Fundo de cards glassmorphism |
| `--color-dark-border` | `#1E2330` | Bordas sutis de cards e navbar |
| `--color-text-light` | `#FFFFFF` | Texto principal |
| `--color-text-dark` | `#333A44` | Texto em fundos claros |
| `--color-text-muted` | `#8A9BC0` | Texto secundário/descritivo |

**Gradiente elétrico:** `linear-gradient(to top, #007BFF, #00C2FF)` — definido como `--gradient-electric` e exposto via classe CSS `.bg-gradient-electric` e `.text-gradient-electric`.

### 3.3 Tipografia
- **Corpo:** `Inter` — carregada via `next/font/google`, variável CSS `--font-inter`
- **Display/Títulos:** `Manrope` — carregada via `next/font/google`, variável CSS `--font-manrope`
- Uso: `font-sans` para corpo, `font-display` para headlines e destaques.

---

## 4. Assets Estáticos — Regras Absolutas

### 4.1 Caminhos dos arquivos
| Arquivo | Caminho em `public/` | Uso |
| :--- | :--- | :--- |
| Favicon App Router | `src/app/icon.svg` | Automático pelo Next.js |
| Logo dark (completa) | `public/logo/tallpa-logo-dark.svg` | Fundos escuros |
| Logo light (completa) | `public/logo/tallpa-logo-light.svg` | Fundos claros |
| Logo monocromática | `public/logo/tallpa-logo-monochrome.svg` | Uso editorial |
| Ícone (sem texto) | `public/logo/tallpa-icon-transparent.svg` | Navbar, favicons, ícones inline |
| Mockup dashboard | `public/images/tallpa-dashboard-mockup.svg` | Hero, Showcase |

### 4.2 Regra de uso de imagens
- **NUNCA** criar SVGs inline para logos. Sempre usar `<Image />` do `next/image` ou `<img>` nativo apontando para os caminhos acima.
- Sempre incluir `width` e `height` + a classe `w-auto h-{n}` para preservar aspect-ratio.
- Imagens prioritárias (above the fold) devem ter o atributo `priority` na tag `<Image>`.

---

## 5. Componentes Base (Implementados)

### 5.1 UI Átomos — `src/components/ui/`
| Componente | Descrição |
| :--- | :--- |
| `Button.tsx` | Variantes `primary` (gradiente elétrico, glow no hover) e `ghost` (borda elétrica, fill no hover) |
| `GlassCard.tsx` | `bg-dark-card/80 + backdrop-blur-md + border-dark-border` — base para todos os cards |

### 5.2 Layout — `src/components/layout/`
| Componente | Descrição |
| :--- | :--- |
| `Navbar.tsx` | Fixa no topo (`fixed top-0 z-50`). Transparente no topo da página, aplica `backdrop-blur-md + bg-dark-bg/90 + border-b` ao rolar. Exibe ícone + "Tallpa Solutions" à esquerda e links de navegação à direita. |

### 5.3 Seções — `src/components/sections/`
| Componente | Descrição |
| :--- | :--- |
| `Hero.tsx` | Seção da Home. Ver especificação completa na Seção 7. |

---

## 6. Arquitetura de Páginas (Sitemap)
| Rota | Arquivo | Conteúdo Principal |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Hero impactante, Proposta de Valor, Resumo dos 3 Serviços, Prova Social (KPIs), LeadForm. |
| `/sistemas` | `src/app/sistemas/page.tsx` | Desenvolvimento sob demanda (ERPs, CRMs, Portais). |
| `/ia-automacao` | `src/app/ia-automacao/page.tsx` | Agentes de IA e workflows que eliminam ineficiências. |
| `/data-bi` | `src/app/data-bi/page.tsx` | Dados centralizados e insights acionáveis. |
| `/showcase` | `src/app/showcase/page.tsx` | Galeria interativa de sistemas e dashboards (Recharts). |
| `/sobre` | `src/app/sobre/page.tsx` | Metodologia IMPACT aplicada ao desenvolvimento tech. |

---

## 7. Regra de Layout — OBRIGATÓRIA para todas as páginas

> **Esta regra deve ser seguida rigorosamente em toda nova página ou seção construída.**

### 7.1 Estrutura da section de abertura de cada página
```tsx
<section className="relative min-h-screen flex items-start bg-dark-bg overflow-hidden">
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 w-full">
    {/* conteúdo da página */}
  </div>
</section>
```

- `items-start` — conteúdo alinhado ao topo, não ao centro.
- `pt-24` (96px) — compensa a Navbar fixa de 64px + 32px de respiro visual.
- `pb-10` — padding inferior compacto.
- `bg-dark-bg` — fundo obrigatório `#0A0C10`.
- `max-w-7xl mx-auto` + padding lateral responsivo — manter em todas as seções.

### 7.2 Seções secundárias dentro da mesma página
```tsx
<section className="bg-dark-bg py-10 sm:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* conteúdo */}
  </div>
</section>
```

### 7.4 Padrão de gaps em grids
- Todos os `grid-cols-X` devem usar `gap-6` como máximo.
- Nunca usar `gap-8` ou superior em grids — mantém o layout compacto e consistente.

### 7.3 Glow radial de fundo (padrão Hero — pode ser reusado)
```tsx
{/* Glow principal — topo */}
<div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
  background: "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(0,194,255,0.13) 0%, rgba(0,123,255,0.07) 45%, transparent 72%)"
}} />
{/* Glow secundário — canto inferior direito */}
<div aria-hidden="true" className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{
  background: "radial-gradient(circle at 80% 80%, rgba(0,123,255,0.08) 0%, transparent 60%)"
}} />
```

---

## 8. Navbar — Especificação Final
- **Posição:** `fixed top-0 left-0 right-0 z-50`
- **Estado inicial (topo):** `bg-transparent`
- **Estado ao rolar:** `bg-dark-bg/90 backdrop-blur-md border-b border-dark-border shadow`
- **Conteúdo esquerdo:** `<Image src="/logo/tallpa-icon-transparent.svg" />` + `<span>Tallpa Solutions</span>`
- **Conteúdo direito:** Links de navegação (Sistemas, IA & Automação, Data & BI, Showcase, Sobre)
- **Sem CTA na Navbar** — o CTA fica exclusivamente nas seções de conteúdo.

---

## 9. Funcionalidade Core: Showcase Interativo
- **Dashboard Embed:** Frame interativo com Recharts (dados mock) respeitando a paleta da marca.
- **System Preview:** Simulação de UI de sistema com microinterações via Framer Motion.

---

## 10. Captação de Leads — Supabase
- Tabela `leads`: `id`, `name`, `email`, `phone?`, `company?`, `message?`, `created_at`
- RLS: apenas INSERT público habilitado.
- Implementação: Server Action `submitLead()` em `src/app/actions.ts`.
- Variáveis de ambiente: `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

---

## 11. Copys e Gatilhos Mentais
- **Autoridade:** Enfatizar trajetória sólida no mercado.
- **Eficiência:** Redução de 36% no tempo de análise e ROI de 3.2× no primeiro ano.
- **CTA Principal:** "Solicitar Diagnóstico Gratuito" (análise de 60 min).
- **Copy Hero atual:** "Escale sua operação com tecnologia sob medida. Desenvolvemos sistemas, automações com IA e painéis de dados que eliminam gargalos, cortam custos invisíveis e preparam sua empresa para o próximo nível."

---

## 12. Deploy
- Repositório GitHub → Vercel (deploy automático no push).
- Variáveis de ambiente configuradas no dashboard da Vercel.
- Domínio `tallpa.com.br` apontado via DNS para a Vercel — SSL automático.

---

## 13. Status de Implementação

### Concluído ✅

- [x] Configuração Base (Next.js 15, Tailwind CSS v4, Fontes Inter + Manrope, paleta de cores via `@theme`)
- [x] Navbar (`src/components/layout/Navbar.tsx`) — fixa, scroll-aware, ícone + nome
- [x] Hero (`src/components/sections/Hero.tsx`) — seção de abertura da Home
- [x] Seção de Serviços (`src/components/sections/Services.tsx`) — 3 cards glassmorphism (Sistemas, IA & Automação, Data & BI)
- [x] Prova Social / KPIs (`src/components/sections/SocialProof.tsx`) — cabeçalho "Impacto Comprovado" + 3 blocos com gradiente elétrico (37%, 3.2×, +25k)
- [x] LeadForm (`src/components/sections/LeadCapture.tsx`) — layout 2 colunas, `useActionState`, feedback de "Enviando..." e confirmação de sucesso
- [x] Server Action `submitLead` (`src/app/actions.ts`) — validação de campos, insert Supabase, tratamento de erro
- [x] Supabase client (`src/lib/supabase.ts`) — singleton via `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- [x] Footer (`src/components/layout/Footer.tsx`) — 3 colunas (logo + desc, links rápidos, contato), bottom bar com copyright centralizado. Inserido globalmente em `layout.tsx`.

### Home (`/`) — Concluída ✅
Todas as seções da Home estão implementadas: Hero → Serviços → Prova Social → LeadForm → Footer.

### Showcase (`/showcase`) — Concluída ✅

- [x] `src/app/showcase/page.tsx` — Server Component; abertura §7.1 com glow §7.3, título "Tecnologia em Movimento", CTA final com âncora `/#contato`
- [x] `src/components/sections/ShowcaseDashboard.tsx` — ERP Financeiro interativo: toggles 7d/30d/12m, mini stats (Receita, ROI, Tasks), `ComposedChart` (barras receita/custo + linha economia IA), tooltip dark mode, sidebar decorativa, aviso "Dados fictícios"
- [x] `src/components/sections/ShowcaseWidgets.tsx` — 3 widgets com Framer Motion (`whileHover`): Agentes de IA (pulse), KPIs de Impacto (barras de progresso), Insights Estratégicos (alertas, sugestões, resultados)

### Páginas de Serviço — Concluídas ✅

- [x] `src/app/sistemas/page.tsx` — H1: "O software que a sua empresa merecia desde o início." · 4 GlassCards de benefícios (processo exclusivo, ERPs/CRMs, visibilidade, arquitetura escalável) · diferenciais rápidos (sem mensalidade, código é seu, integrações sem limite) · 2 CTAs → `/#contato`
- [x] `src/app/ia-automacao/page.tsx` — H1: "IA & Automação Inteligente." · Subtítulo: "Elimine os gargalos manuais que travam o seu crescimento. Substitua processos repetitivos por fluxos inteligentes que escalam com a sua empresa." · 4 GlassCards (tarefas eliminadas, escala sem headcount, agentes contextuais, workflows integrados) · stats rápidos (80%, 24/7, 3.2×) · 2 CTAs → `/#contato`
- [x] `src/app/data-bi/page.tsx` — H1: "Seus dados existem. Falta clareza para usá-los." · 4 GlassCards (fonte única de verdade, clareza para quem decide, métricas de causa, análise histórica + previsão) · stats rápidos (37%, 1 fonte, +25k) · 2 CTAs → `/#contato`

**Padrão aplicado em todas:** abertura §7.1 (`min-h-screen`, `items-start`, `pt-20`), glow radial §7.3 (topo + canto inferior direito), eyebrow `text-brand-cyan`, headline `font-display` com `text-gradient-electric`, `metadata` com title e description para SEO.

### Sobre (`/sobre`) — Concluída ✅

- [x] `src/app/sobre/page.tsx` — H1: "Engenharia de Software focada em Resultados Reais." · Subtítulo: "Não somos apenas codificadores. Somos parceiros estratégicos que usam tecnologia para resolver problemas complexos de negócios." · Grid 3 colunas com 6 GlassCards da Metodologia IMPACT (Imersão, Mapeamento, Prototipagem, Arquitetura, Código, Tração) · cada card exibe letra IMPACT em gradiente elétrico + ícone Lucide `text-brand-cyan` + label + descrição · CTA final: "Fale com um Engenheiro" → `/#contato`

### SEO — Concluído ✅

#### Metadata Global (`src/app/layout.tsx`)
- `metadataBase: new URL("https://tallpa.com.br")` — resolve todos os caminhos relativos de imagens OG
- `title.template: "%s | Tallpa Solutions"` — sufixo aplicado automaticamente a todas as páginas filhas
- `title.default: "Tallpa Solutions | Software House Premium"` — fallback para a Home
- `openGraph` completo: type `website`, locale `pt_BR`, url, siteName, imagem `/images/tallpa-dashboard-mockup.svg` (1200×630)
- `twitter.card: "summary_large_image"` com mesma imagem
- `robots: { index: true, follow: true }`

#### Títulos por página (sem sufixo — template do layout adiciona `| Tallpa Solutions`)
| Rota | `title` no código | Resultado renderizado |
| :--- | :--- | :--- |
| `/` | *(default)* | `Tallpa Solutions \| Software House Premium` |
| `/sistemas` | `"Sistemas Sob Demanda"` | `Sistemas Sob Demanda \| Tallpa Solutions` |
| `/ia-automacao` | `"IA & Automação"` | `IA & Automação \| Tallpa Solutions` |
| `/data-bi` | `"Data & BI"` | `Data & BI \| Tallpa Solutions` |
| `/showcase` | `"Showcase"` | `Showcase \| Tallpa Solutions` |
| `/sobre` | `"Sobre a Tallpa"` | `Sobre a Tallpa \| Tallpa Solutions` |

#### Indexação
- [x] `src/app/sitemap.ts` — 6 rotas com `changeFrequency` e `priority` calibrados. Gerado em `/sitemap.xml`.
  - Home: `priority: 1`, `changeFrequency: "monthly"`
  - Serviços (/sistemas, /ia-automacao, /data-bi): `priority: 0.9`
  - Showcase: `priority: 0.7`
  - Sobre: `priority: 0.6`, `changeFrequency: "yearly"`
- [x] `src/app/robots.ts` — `Allow: /` para todos os crawlers, aponta para `https://tallpa.com.br/sitemap.xml`. Gerado em `/robots.txt`.
