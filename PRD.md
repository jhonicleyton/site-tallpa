# PRD: Site Institucional - Tallpa Solutions
**Versão:** 3.4 — Atualizado em 22/03/2026 (auditoria completa do projeto: todos os componentes e funcionalidades documentados)

---

## 1. Objetivo do Projeto
Criar um site moderno, de alta performance e visualmente tecnológico para posicionar a Tallpa Solutions como uma Software House premium. O site deve converter visitantes em leads qualificados para projetos de sistemas, automação com IA e BI, e será publicado no domínio `tallpa.com.br`.

---

## 2. Stack Tecnológico (Confirmado e Implementado)
| Camada | Tecnologia |
| :--- | :--- |
| **Frontend** | Next.js 16.2.0 (App Router, TypeScript) |
| **Estilização** | Tailwind CSS v4 (configuração via `@theme` no CSS — sem `tailwind.config.ts`) |
| **Animações** | Framer Motion (disponível, uso pontual e consciente) |
| **Ícones** | Lucide React |
| **Gráficos** | Recharts (para o Showcase) |
| **Utilitários CSS** | clsx + tailwind-merge |
| **E-mail transacional** | Resend (`resend`) |
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
| Mockup dashboard | `public/images/tallpa-dashboard-mockup.svg` | Hero, Showcase, OG image |

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
| `Navbar.tsx` | Fixa no topo (`fixed top-0 z-50`). Transparente no topo, aplica `backdrop-blur-md + bg-dark-bg/90 + border-b` ao rolar. Logo (ícone SVG + texto) à esquerda, links à direita. Menu hambúrguer em mobile com drawer animado. |
| `Footer.tsx` | 3 colunas: logo + descrição \| links rápidos (Soluções) \| contato (Email `mailto:`, LinkedIn, WhatsApp `wa.me` com mensagem pré-preenchida, Instagram `@tallpasolutions`). Bottom bar centralizado com copyright. |
| `CookieBanner.tsx` | Client Component com `useSyncExternalStore`. Glassmorphism, fixo no rodapé (`fixed bottom-0 z-50`). SSR-safe. Botões "Aceitar todos" e "Preferências" (abre `CookieModal`). Link para `/privacidade`. |
| `CookieModal.tsx` | Modal de preferências granulares. Toggles para: Estritamente Necessários (sempre ativo), Analíticos (GA4), Marketing. Botão "Aceitar Todos" e "Salvar Preferências". Fecha ao clicar fora. |

**Chaves localStorage do sistema de cookies:**
- `tallpa-cookie-consent` — valor `accepted` ou `custom`
- `tallpa-cookie-preferences` — JSON com `{ analytics: bool, marketing: bool }`
- Evento customizado: `tallpa-consent-change` (sincroniza entre abas)

### 5.3 Seções — `src/components/sections/`
| Componente | Descrição |
| :--- | :--- |
| `Hero.tsx` | Grid 2 colunas. Esquerda: badge "Software House Premium", H1 "Tecnologia que **transforma** operações em resultados", descrição, CTAs primário ("Diagnóstico Gratuito" → `/#contato`) e ghost ("Nossos Casos" → `/showcase`). Direita: mockup SVG com sombra. |
| `Services.tsx` | 3 GlassCards de serviços com ícone Lucide + link para página de detalhe: Sistemas Sob Demanda (`/sistemas`), IA & Automação (`/ia-automacao`), Data & BI (`/data-bi`). |
| `SocialProof.tsx` | 3 KPIs estáticos em gradiente elétrico: 37% (redução tempo análise), 3.2× (ROI médio 1º ano), +25k (horas manuais eliminadas/ano). Seção "Impacto Comprovado". |
| `LeadCapture.tsx` | Layout 2 colunas. Esquerda: value props com CheckCircle icons. Direita: formulário (nome*, email*, telefone, empresa, mensagem). `useActionState` → `submitLead`. Estados: Enviando / Sucesso (checkmark verde) / Erro (texto vermelho). |
| `ShowcaseDashboard.tsx` | Dashboard ERP Financeiro interativo com Recharts: toggles 7d/30d/12m, mini stats (Receita, ROI, Tasks), `ComposedChart` (barras + linha). Sidebar decorativa. Disclaimer "Dados fictícios". |
| `ShowcaseWidgets.tsx` | 3 widgets Framer Motion (`whileHover`): Agentes IA (pulse), KPIs de Impacto (barras de progresso), Insights Estratégicos (alertas, sugestões, resultados). |

### 5.4 Analytics — `src/components/analytics/`
| Componente | Descrição |
| :--- | :--- |
| `GoogleAnalytics.tsx` | Client Component. Injeta GA4 (`strategy: "afterInteractive"`) **somente** se `tallpa-cookie-preferences.analytics === true` e `NEXT_PUBLIC_GA_ID` estiver definido. Escuta o evento `cookieConsentUpdated` para reativar sem reload. Retorna `null` sem consentimento (LGPD-compliant). |

### 5.5 SEO — `src/components/`
| Componente | Descrição |
| :--- | :--- |
| `SchemaMarkup.tsx` | Server Component. Renderiza `<script type="application/ld+json">` com schema `@graph`: Organization + LocalBusiness + ProfessionalService + WebSite. Inserido globalmente no `layout.tsx`. |

---

## 6. Arquitetura de Páginas (Sitemap)
| Rota | Arquivo | Conteúdo Principal |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Hero, Serviços (3 cards), Prova Social (KPIs), LeadForm. |
| `/sistemas` | `src/app/sistemas/page.tsx` | Sistemas sob demanda (ERPs, CRMs, Portais). |
| `/ia-automacao` | `src/app/ia-automacao/page.tsx` | Agentes de IA e workflows. |
| `/data-bi` | `src/app/data-bi/page.tsx` | Dados centralizados e dashboards. |
| `/showcase` | `src/app/showcase/page.tsx` | Dashboard interativo + widgets Framer Motion. |
| `/sobre` | `src/app/sobre/page.tsx` | Metodologia IMPACT (6 etapas). |
| `/privacidade` | `src/app/privacidade/page.tsx` | Política de Privacidade LGPD (coleta, uso, direitos do titular, contato DPO). |

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

### 7.4 Padrão de gaps em grids
- Todos os `grid-cols-X` devem usar `gap-6` como máximo.
- Nunca usar `gap-8` ou superior em grids — mantém o layout compacto e consistente.

---

## 8. Navbar — Especificação Final
- **Posição:** `fixed top-0 left-0 right-0 z-50`
- **Estado inicial (topo):** `bg-transparent`
- **Estado ao rolar** (Y > 24px): `bg-dark-bg/90 backdrop-blur-md border-b border-dark-border shadow`
- **Conteúdo esquerdo:** `<Image src="/logo/tallpa-icon-transparent.svg" />` + `<span>Tallpa Solutions</span>`
- **Conteúdo direito (desktop ≥ lg):** Links de navegação (Sistemas, IA & Automação, Data & BI, Showcase, Sobre)
- **Mobile (< lg):** Ícone hambúrguer abre drawer com os mesmos links; backdrop-blur ativo ao abrir.
- **Sem CTA na Navbar** — o CTA fica exclusivamente nas seções de conteúdo.

---

## 9. Funcionalidade Core: Showcase Interativo
- **Dashboard Embed (`ShowcaseDashboard`):** ERP Financeiro interativo com Recharts. Toggles de período (7d/30d/12m), mini-stats e `ComposedChart`. Dados fictícios com disclaimer.
- **Widgets (`ShowcaseWidgets`):** 3 cards com Framer Motion (`whileHover`): Agentes IA (pulse animado), KPIs (barras de progresso), Insights Estratégicos.

---

## 10. Captação de Leads — Supabase + Resend
- **Tabela `leads`:** `id`, `name`, `email`, `phone?`, `company?`, `message?`, `created_at`
- **RLS:** apenas INSERT público habilitado.
- **Server Action `submitLead`** (`src/app/actions.ts`):
  - Valida: name e email obrigatórios; email via regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - Insert no Supabase; erro não bloqueia o fluxo
  - Envia e-mail HTML formatado via Resend para `contato@tallpa.com.br`
    - From: `Tallpa Site <site@tallpa.com.br>`
    - Subject: `Novo Lead: [Nome]`
  - Retorna `LeadState { success: bool, error?: string }`
- **Variáveis de ambiente:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `RESEND_API_KEY`

---

## 11. Conformidade LGPD

### 11.1 Cookie Banner + Modal
- `CookieBanner.tsx` — exibe apenas se consentimento ainda não dado; persiste decisão em localStorage.
- `CookieModal.tsx` — toggles granulares para Analíticos e Marketing.
- Chaves: `tallpa-cookie-consent`, `tallpa-cookie-preferences`.

### 11.2 Google Analytics 4
- Injetado **condicionalmente** por `GoogleAnalytics.tsx` somente com `analytics: true` em `tallpa-cookie-preferences`.
- Variável de ambiente: `NEXT_PUBLIC_GA_ID`.
- Ativação dinâmica via evento `cookieConsentUpdated` sem reload.

### 11.3 Política de Privacidade (`/privacidade`)
- Cobre: dados coletados (nome, email, telefone, empresa, mensagem, cookies), finalidade, compartilhamento (apenas Vercel/Supabase), gestão de cookies, direitos do titular (LGPD art. 18), contato DPO (`contato@tallpa.com.br`).
- Atualizada em março de 2026.

---

## 12. Copys e Gatilhos Mentais
- **Autoridade:** Enfatizar trajetória sólida no mercado.
- **Eficiência:** Redução de 37% no tempo de análise e ROI de 3.2× no primeiro ano.
- **CTA Principal:** "Diagnóstico Gratuito" (análise de 60 min).
- **Copy Hero atual:** "Tecnologia que **transforma** operações em resultados. Desenvolvemos sistemas, automações com IA e painéis de dados que eliminam gargalos, cortam custos invisíveis e preparam sua empresa para o próximo nível."

---

## 13. Deploy
- Repositório GitHub (`jhonicleyton/site-tallpa`) → Vercel (deploy automático no push para `main`).
- Variáveis de ambiente configuradas no dashboard da Vercel.
- Domínio `tallpa.com.br` apontado via DNS para a Vercel — SSL automático.

---

## 14. SEO & Visibilidade para IAs

### Metadata Global (`src/app/layout.tsx`)
- `metadataBase: new URL("https://tallpa.com.br")`
- `title.template: "%s | Tallpa Solutions"` — sufixo automático
- `title.default: "Tallpa Solutions | Software House Premium"` — fallback
- `openGraph`: type `website`, locale `pt_BR`, siteName, imagem OG `/images/tallpa-dashboard-mockup.svg` (1200×630)
- `twitter.card: "summary_large_image"`
- `robots: { index: true, follow: true }`

### Metadata por Página
| Rota | Title | Canonical | OG Image | BreadcrumbList |
| :--- | :--- | :---: | :---: | :---: |
| `/` | `Tallpa Solutions \| Software House, IA e BI em Santa Catarina` + keywords | ✅ | via layout | — |
| `/sistemas` | `Sistemas Sob Demanda` | ✅ | ✅ | ✅ |
| `/ia-automacao` | `IA & Automação` | ✅ | ✅ | ✅ |
| `/data-bi` | `Data & BI` | ✅ | ✅ | ✅ |
| `/showcase` | `Showcase` | — | via layout | — |
| `/sobre` | `Sobre a Tallpa` | ✅ | ✅ | ✅ |
| `/privacidade` | `Política de Privacidade` | — | via layout | — |

**Keywords da Home:** `software house`, `sistemas sob demanda`, `IA`, `inteligência artificial`, `automação`, `Business Intelligence`, `BI`, `ERP`, `CRM`, `Santa Catarina`, `Tallpa`, `Tallpa Solutions`, `desenvolvimento de software`, `dashboards`

### JSON-LD Schema Markup (`src/components/SchemaMarkup.tsx`)
Server Component inserido globalmente no `layout.tsx`. Renderiza `@graph` com:
- **Organization + LocalBusiness + ProfessionalService:**
  - `name`, `url`, `logo` (icon.svg 512×512), `image` (OG mockup 1200×630)
  - `telephone: "+5547997769646"`, `foundingDate: "2024"`
  - `description`, `address` (SC, BR), `areaServed` (Brasil)
  - `hasOfferCatalog` com 3 serviços (URLs incluídas)
  - `sameAs`: Instagram, LinkedIn, GitHub
  - `priceRange: "$$"`, `knowsLanguage: "pt-BR"`
- **WebSite:** url, name, description, publisher
- **Validado** pelo Google Rich Results Test como **"Organização"** ✅

### Indexação
- **`src/app/sitemap.ts`** — 7 rotas com datas fixas reais:
  | Rota | Priority | Change Frequency |
  | :--- | :---: | :--- |
  | `/` | 1.0 | monthly |
  | `/sistemas` | 0.9 | monthly |
  | `/ia-automacao` | 0.9 | monthly |
  | `/data-bi` | 0.9 | monthly |
  | `/showcase` | 0.7 | monthly |
  | `/sobre` | 0.6 | yearly |
  | `/privacidade` | 0.3 | yearly |
- **`src/app/robots.ts`** — `Allow: /` para todos os crawlers + link para `/sitemap.xml`
