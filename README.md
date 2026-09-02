# Site institucional, Tallpa Solutions

Site em produção no domínio [tallpa.com.br](https://tallpa.com.br).

Posiciona a Tallpa como quem **diagnostica operação, transforma dado em decisão e constrói o sistema sob medida**, com cases reais e um único CTA: solicitar diagnóstico gratuito.

---

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção, **rodar antes de todo commit** |
| `npm run start` | Servidor de produção local |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Checagem de tipos |

> **Apple Silicon:** se o build falhar com `Cannot find module '../lightningcss.darwin-arm64.node'`, o `node_modules` foi instalado com um Node x64. Corrija com:
> ```bash
> npm install --no-save lightningcss-darwin-arm64@$(node -p "require('./node_modules/lightningcss/package.json').version")
> ```

---

## Variáveis de ambiente

Ficam em `.env.local` (local) e no dashboard da Vercel (produção). **Nunca commitadas.**

| Variável | Obrigatória | Para quê |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | sim | Gravação dos leads |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | sim | Gravação dos leads |
| `RESEND_API_KEY` | sim | E-mail de notificação de lead |
| `NEXT_PUBLIC_GA_ID` | não | Google Analytics 4 (só injetado com consentimento) |

O formulário é tolerante a falha: se o Supabase estiver fora, o lead **ainda chega por e-mail**, com aviso de que não foi gravado. Só falha para o usuário se os dois canais caírem.

---

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Recharts · Supabase · Resend · Vercel.

Sem `tailwind.config.ts`, os tokens vivem no bloco `@theme` de `src/app/globals.css`.

---

## Estrutura

```
src/
├── app/
│   ├── page.tsx                    Home
│   ├── solucoes/                   As 8 frentes de solução
│   ├── projetos/                   Índice dos cases
│   │   └── [slug]/                 Case individual (estático, via generateStaticParams)
│   ├── sobre/  contato/  privacidade/
│   ├── actions.ts                  Server Action do lead
│   ├── opengraph-image.tsx         OG PNG gerada no build
│   ├── sitemap.ts  robots.ts  globals.css
│
├── content/                        ← TODO O CONTEÚDO EDITÁVEL VIVE AQUI
│   ├── site.ts                     Contatos, redes, CTA, navegação
│   ├── projects.ts                 Os cases
│   ├── solutions.ts                As frentes de solução
│   └── home.ts                     Problemas, método, segmentos, FAQ
│
└── components/
    ├── ui/                         Design system (Button, Card, Section, TallpaMark…)
    ├── layout/                     Navbar, Footer, cookies
    ├── sections/                   Seções da home e o formulário
    ├── cases/                      Card, galeria, moldura de dispositivo
    └── screens/                    Recriações das interfaces dos projetos
```

---

## Como editar o site

### Trocar um texto
Quase todo texto está em `src/content/`. Procure ali primeiro, só recorra ao JSX se não encontrar.

### Cadastrar um projeto novo
Adicione um objeto ao array em [`src/content/projects.ts`](src/content/projects.ts). Só isso: o índice, a rota `/projetos/<slug>`, o sitemap, o JSON-LD e os "projetos relacionados" são derivados desse array.

Os campos obrigatórios estão no tipo `Project`, no topo do arquivo. **Regras de conteúdo, documentadas lá e a serem respeitadas:**

1. Sem nome de cliente, marca ou subdomínio, os cases são descritos pelo segmento atendido.
2. Sem número que não venha dos artefatos do próprio projeto. Nada de ROI ou "redução de X%".
3. Sem dado operacional, nome de pessoa, IP interno ou credencial.

### Adicionar uma frente de solução
Um objeto em [`src/content/solutions.ts`](src/content/solutions.ts). Aparece automaticamente na home, na `/solucoes` (com âncora própria) e no `hasOfferCatalog` do JSON-LD.

### Trocar uma recriação de tela por captura real
As telas em `src/components/screens/` são recriações construídas com os tokens visuais dos projetos, sempre rotuladas como tal. Para usar uma captura real:

1. Coloque a imagem em `public/screens/`.
2. Em [`src/components/screens/registry.tsx`](src/components/screens/registry.tsx), troque `Component` pelo `<Image>` correspondente.
3. Ajuste o aviso em `ScreenGallery` se a tela deixar de ser uma recriação.

A estrutura da galeria não muda.

### Alterar contato, redes ou o CTA
[`src/content/site.ts`](src/content/site.ts). Um só lugar, o rodapé, o JSON-LD e todos os botões leem dali.

---

## Pendências

### 1. Coluna `interest` na tabela `leads`

O formulário passou a qualificar o lead pelo assunto. Rode no SQL Editor do Supabase:

```sql
alter table public.leads add column if not exists interest text;
```

Enquanto a coluna não existir, nada quebra: o código detecta a ausência, regrava sem o campo e o interesse continua chegando no e-mail.

### 2. Verificar o LinkedIn

`linkedin.com/company/tallpa` está no rodapé e no JSON-LD sem verificação. Confirme se o perfil existe: link quebrado em `sameAs` prejudica o reconhecimento da entidade pelo Google.

### 3. Dados institucionais

O JSON-LD declara `foundingDate: "2024"` e endereço apenas como SC/BR. Se quiser exibir cidade ou CNPJ, os valores estão em `src/content/site.ts` e `src/components/SchemaMarkup.tsx`.

---

## Deploy

Push em `main` → deploy automático na Vercel. Domínio `tallpa.com.br` apontado via DNS, SSL automático.

As rotas antigas (`/sistemas`, `/ia-automacao`, `/data-bi`, `/showcase`) têm redirect 308 em `next.config.ts`, não remova sem verificar o que ainda está indexado.
