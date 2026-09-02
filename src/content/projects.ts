/**
 * Cases da Tallpa Solutions.
 *
 * REGRAS DE CONTEÚDO (não flexibilizar):
 * 1. Nenhum nome de cliente, marca ou subdomínio. Os cases são descritos
 *    pelo segmento atendido. Decisão do cliente, registrada no PRD.
 * 2. Nenhum número que não venha dos artefatos do próprio projeto.
 *    Sem ROI, sem "redução de X%", sem contagem de usuários.
 * 3. Nenhum dado operacional, nome de pessoa, IP interno ou credencial.
 *
 * Para cadastrar um projeto novo: adicione um objeto a `projects`.
 * Nada mais precisa ser alterado: índice, rotas, sitemap e JSON-LD
 * são derivados daqui.
 */

export type ScreenKey =
  | "kpi-dashboard"
  | "technician-ranking"
  | "indicator-panel"
  | "kanban-dispatch"
  | "mobile-tech";

export type Project = {
  slug: string;
  name: string;
  category: string;
  segment: string;
  tagline: string;
  /** Resumo curto, usado no card do índice. */
  summary: string;
  problem: string[];
  solution: string[];
  /** O fluxo de uso, em etapas. */
  howItWorks: { title: string; description: string }[];
  features: { group: string; items: string[] }[];
  tech: string[];
  challenges: { title: string; description: string }[];
  benefits: string[];
  /** Fatos verificáveis nos artefatos do projeto. Nada estimado. */
  facts: { label: string; value: string }[];
  screens: ScreenKey[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "plataforma-os-e-repasse",
    name: "Plataforma de Ordens de Serviço e Repasse",
    category: "Sistema operacional sob medida",
    segment: "Prestadora de serviços de campo em telecom",
    tagline: "O repasse de uma equipe inteira saiu da planilha e virou processo auditável.",
    summary:
      "Plataforma multi-tenant que importa a produção do sistema da operadora, aplica um motor de regras de preço versionado e calcula o repasse de cada técnico, com fechamento aprovado e conferência do próprio técnico.",
    problem: [
      "O pagamento dos técnicos era calculado à mão, todo mês, sobre uma planilha exportada do sistema da operadora. A regra não é simples: o valor muda conforme o tipo de ordem de serviço, o motivo de uma visita improdutiva, o dia da semana e a existência de um segundo ponto.",
      "O resultado era previsível. O fechamento consumia dias, ninguém conseguia refazer o cálculo de uma visita específica meses depois, e o técnico não tinha como conferir a própria pontuação. Recebia o valor final e a opção de aceitar.",
      "Qualquer mudança de tabela de preço obrigava a recomeçar a planilha do zero, sem forma de simular o efeito antes de valer.",
    ],
    solution: [
      "Construímos uma plataforma que recebe a planilha, entende a produção e devolve o repasse calculado, com o caminho do cálculo visível em cada visita.",
      "O coração é um motor de regras de preço versionado. A tabela vigente nunca é editada: cria-se uma nova versão em rascunho, simula-se o efeito sobre as visitas que já existem e só então ela é ativada. Nenhuma mudança de regra pega a operação de surpresa.",
      "O fechamento deixou de ser um arquivo e virou um ciclo: a gestão solicita a conferência, o técnico aprova ou contesta ordens específicas com justificativa, a gestão responde, e só então o período é fechado e marcado como pago.",
    ],
    howItWorks: [
      {
        title: "Importação",
        description:
          "A planilha de produção do período é enviada pela plataforma. O parser normaliza os dados, identifica ordens e visitas, e registra o upload com contadores e erros. Se algo vier errado, dá para reprocessar.",
      },
      {
        title: "Classificação",
        description:
          "Visitas sem sucesso caem numa fila de motivos. A gestão define, por política, quais motivos são pagos e quais não. A decisão vale dali em diante, sem retrabalho manual.",
      },
      {
        title: "Cálculo",
        description:
          "O motor aplica a tabela de preço vigente a cada visita. O valor de cada linha é rastreável até a regra que o gerou.",
      },
      {
        title: "Conferência",
        description:
          "O técnico recebe o período no próprio app, confere ordem a ordem e contesta o que discorda, com motivo obrigatório. A gestão responde mostrando a pontuação antes e depois.",
      },
      {
        title: "Fechamento",
        description:
          "Com a conferência encerrada, o período é aprovado, fechado e marcado como pago. Reabrir deixa registro.",
      },
    ],
    features: [
      {
        group: "Gestão",
        items: [
          "Dashboard executivo: volume diário, ticket médio, taxa de finalização, improdutividade e ranking de equipe",
          "Motor de regras de preço com versionamento, simulação e ativação controlada",
          "Fila de improdutivas com aprovação e rejeição em lote",
          "Fechamento mensal com aprovação, marcação de pagamento e reabertura auditada",
          "Histórico de uploads com auditoria e reprocessamento",
        ],
      },
      {
        group: "Indicadores",
        items: [
          "Índice de qualidade e produtividade por técnico, com tendência mensal",
          "Distribuição geográfica e motivos de não-conclusão",
          "Drill-down do valor não realizado, visita a visita",
        ],
      },
      {
        group: "Campo",
        items: [
          "App do técnico instalável (PWA) e distribuível como APK Android",
          "Notificação push com o app fechado",
          "Painel pessoal: produção do mês, taxa de sucesso e posição na equipe",
          "Contestação de ordem a qualquer momento, com resposta rastreável",
        ],
      },
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "TanStack Query",
      "Recharts",
      "Vitest",
      "Playwright",
      "Vercel",
    ],
    challenges: [
      {
        title: "Regra de negócio que muda sem quebrar o passado",
        description:
          "Preço não pode ser constante no código nem linha editável no banco. Modelamos a tabela como entidade versionada: cada visita guarda a versão que a precificou, então recalcular o passado é uma decisão explícita, nunca um efeito colateral de editar o presente.",
      },
      {
        title: "Importação idempotente",
        description:
          "A mesma planilha é reenviada com frequência, corrigida ou parcial. A ingestão precisa reconhecer o que já existe e atualizar sem duplicar, mantendo o histórico de cada envio auditável.",
      },
      {
        title: "Isolamento por papel",
        description:
          "Quatro níveis de acesso sobre a mesma base. O técnico não pode enxergar dados de outro técnico, nem a margem da empresa. O corte é feito no banco, com políticas de linha, não na interface.",
      },
      {
        title: "Notificação com o app fechado",
        description:
          "O técnico está em campo, com o app em segundo plano. Foi preciso Web Push com chaves VAPID e service worker próprio, além de empacotar a aplicação como APK para instalação direta em Android.",
      },
    ],
    benefits: [
      "O fechamento virou um processo com etapas, responsáveis e registro, em vez de um arquivo que passa de mão em mão",
      "Cada valor pago é rastreável até a regra que o gerou",
      "Mudança de tabela de preço pode ser simulada antes de valer",
      "O técnico confere e contesta a própria pontuação, o que tira a discussão do WhatsApp e coloca no sistema",
      "A gestão passou a ter indicador de qualidade e produtividade por técnico, com série mensal",
    ],
    facts: [
      { label: "Situação", value: "Em produção desde jun/2026" },
      { label: "Sprints entregues", value: "18" },
      { label: "Decisões documentadas", value: "21 ADRs" },
      { label: "Níveis de acesso", value: "4, isolados por RLS" },
    ],
    screens: ["kpi-dashboard", "technician-ranking", "mobile-tech"],
    featured: true,
  },

  {
    slug: "portal-de-indicadores-operacionais",
    name: "Portal de Indicadores Operacionais",
    category: "Dashboards e indicadores",
    segment: "Provedor regional de internet",
    tagline: "O indicador estava preso num sistema sem API, dentro da rede. Tiramos ele de lá.",
    summary:
      "Coletor agendado que extrai um sistema legado de dentro da rede corporativa e um portal na nuvem que consolida seis módulos de indicador, mais um módulo de ações onde o dado nasce no próprio portal.",
    problem: [
      "Os indicadores da operação viviam num sistema legado sem API, acessível apenas de dentro da rede da empresa. Cada análise significava alguém entrar no sistema, exportar um relatório e montar a leitura à mão.",
      "Isso tinha dois custos. O primeiro é óbvio: tempo. O segundo é pior: como o dado só existia no momento em que alguém o exportava, não havia série histórica. Comparar dois meses era um projeto.",
      "E os planos de ação que nasciam dessas análises viviam em planilha: sem dono, sem prazo e sem histórico de quem mudou o quê.",
    ],
    solution: [
      "Separamos o problema em duas metades, porque elas têm restrições opostas.",
      "Dentro da rede, um coletor agendado faz a extração do sistema legado e envia o resultado para um banco na nuvem. Ele roda sozinho, em horários fixos, e também sob demanda quando alguém pede atualização pelo portal.",
      "Fora da rede, o portal lê apenas esse banco. Ele nunca fala com o sistema legado, e é justamente por isso que a arquitetura funciona: a nuvem não alcança um endereço privado, e insistir nisso seria construir sobre areia.",
      "Sobre essa base, o portal consolida seis módulos de indicador e adiciona um módulo de Ações, onde o dado passa a nascer no próprio portal, com responsável, prazo e histórico.",
    ],
    howItWorks: [
      {
        title: "Coleta agendada",
        description:
          "Dentro da rede, o coletor extrai o sistema legado em horários fixos ao longo do dia. Um monitor registra sinal de vida, então se a coleta parar, a operação sabe.",
      },
      {
        title: "Consolidação",
        description:
          "Os dados são gravados na nuvem de forma incremental. O histórico se acumula sozinho: a série mensal passa a existir sem ninguém montá-la.",
      },
      {
        title: "Leitura",
        description:
          "O portal exibe os módulos com recorte de permissão: cada supervisor enxerga apenas a própria equipe, cada gestor apenas as próprias áreas.",
      },
      {
        title: "Ação",
        description:
          "Da leitura nasce o plano. O módulo de Ações registra responsável, prazo e andamento, com histórico que não se apaga.",
      },
    ],
    features: [
      {
        group: "Indicadores",
        items: [
          "Painel gerencial que desce do indicador para a causa: qualidade → causa raiz → cancelamento → fila de agendamento → avaliação do atendimento",
          "Produtividade da equipe, com recorte por supervisor",
          "Índice de qualidade e reincidência, com série mensal",
          "Acompanhamento de indisponibilidades",
        ],
      },
      {
        group: "Operação",
        items: [
          "Módulo de ações com responsável, prazo, andamento e histórico append-only",
          "Módulo georreferenciado que cruza a malha da rede com uma fonte pública de avisos, com mapa interativo",
          "Transcrição e ata de reunião assistidas por IA, com ata editável",
        ],
      },
      {
        group: "Governança",
        items: [
          "Três papéis independentes: administração, supervisão vinculada a equipes e gestão vinculada a áreas",
          "Sem cadastro público: contas criadas pela administração, senha trocada pelo próprio usuário",
          "Tela de monitoramento da coleta, com sinal de vida e log",
        ],
      },
    ],
    tech: [
      "Python",
      "Flask",
      "Jinja2",
      "Supabase",
      "PostgreSQL",
      "Chart.js",
      "Leaflet",
      "launchd",
      "Vercel",
    ],
    challenges: [
      {
        title: "A nuvem não alcança a rede interna",
        description:
          "O sistema de origem só responde de dentro da rede corporativa, e a aplicação roda na nuvem. Em vez de furar isso, invertemos o fluxo: quem está dentro empurra o dado para fora, em horário agendado. A aplicação nunca precisa alcançar o legado.",
      },
      {
        title: "Extrair de um sistema sem API",
        description:
          "Não havia integração disponível. A extração é feita sobre a interface do próprio sistema, com autenticação, e precisa tolerar mudanças de layout e queda de rede sem corromper o histórico já coletado.",
      },
      {
        title: "Dado que não tem de onde voltar",
        description:
          "Alguns módulos espelham o legado e podem ser recoletados. Outros, como as ações e as ordens de serviço criadas no portal, só existem ali. Tratamos os dois tipos com regras diferentes: histórico append-only e proteção redobrada contra operação destrutiva.",
      },
      {
        title: "Permissão que precisa ser real",
        description:
          "Um supervisor enxergar a equipe de outro não é um detalhe de interface. O recorte é aplicado no servidor, antes de o dado chegar à tela.",
      },
    ],
    benefits: [
      "O indicador saiu da exportação manual e passou a estar sempre atualizado, sem ninguém operar nada",
      "A série histórica passou a existir, e comparar períodos deixou de ser um projeto",
      "O plano de ação ganhou dono, prazo e histórico, no mesmo lugar onde o problema aparece",
      "Cada pessoa enxerga exatamente o recorte que lhe cabe",
      "A operação sabe quando a coleta para, em vez de descobrir por um número estranho na tela",
    ],
    facts: [
      { label: "Situação", value: "Em produção" },
      { label: "Módulos", value: "6" },
      { label: "Coletas por dia", value: "6, agendadas" },
      { label: "Migrations versionadas", value: "11" },
    ],
    screens: ["indicator-panel", "kpi-dashboard"],
    featured: true,
  },

  {
    slug: "erp-crm-e-field-service",
    name: "ERP, CRM e Field Service em uma plataforma",
    category: "Sistema de gestão completo",
    segment: "Empresa de fibra óptica, CFTV e infraestrutura de redes",
    tagline: "Comercial, obra, campo e almoxarifado deixaram de ser quatro ferramentas.",
    summary:
      "Plataforma única que cobre o ciclo inteiro: do funil comercial à obra, da obra ao despacho do técnico, do técnico à baixa de material, com controle de acesso por cargo e trilha de auditoria.",
    problem: [
      "O comercial vivia numa ferramenta, as obras em outra, a agenda dos técnicos numa planilha e o almoxarifado num caderno. Nenhuma dessas peças conversava.",
      "O efeito prático: ninguém tinha a visão completa de um cliente, e a execução em campo só aparecia na gestão depois que alguém digitava.",
      "Havia ainda um problema de acesso: com tudo espalhado, ou a pessoa via demais, ou dependia de outra para ver o mínimo.",
    ],
    solution: [
      "Construímos uma plataforma única, modular, onde cada área tem a própria tela e o mesmo dado por baixo.",
      "O comercial trabalha o funil e enxerga o perfil completo do cliente. A engenharia planeja a obra em fases e despacha os técnicos num quadro de arrastar e soltar, respeitando a capacidade de cada um. O técnico executa e encerra a ordem no celular. O almoxarifado controla produto, localização e movimentação.",
      "Sobre tudo isso, um controle de acesso por cargo: cada pessoa entra e vê apenas o que o cargo dela permite, e o desvio é bloqueado no servidor, não escondido na interface.",
    ],
    howItWorks: [
      {
        title: "Comercial",
        description:
          "A oportunidade entra no funil, com atividades registradas e o histórico completo no perfil do cliente.",
      },
      {
        title: "Obra",
        description:
          "Fechado o negócio, vira projeto com fases acompanháveis, e o cliente continua sendo o mesmo registro.",
      },
      {
        title: "Despacho",
        description:
          "As ordens de serviço são distribuídas num quadro de arrastar e soltar, com capacidade e bloqueios de agenda por técnico.",
      },
      {
        title: "Campo",
        description:
          "O técnico recebe a agenda no celular, executa, dá baixa no material e encerra a ordem. É mobile-first, feito para ser usado em pé.",
      },
      {
        title: "Retorno",
        description:
          "O encerramento realimenta a obra e o estoque na hora. A gestão não espera digitação.",
      },
    ],
    features: [
      {
        group: "Comercial e obras",
        items: [
          "Funil de negócios com registro de atividades",
          "Perfil 360° do cliente, com histórico consolidado",
          "Projetos de obra organizados em fases",
        ],
      },
      {
        group: "Campo",
        items: [
          "Agenda de despacho em quadro, com arrastar e soltar",
          "Capacidade por técnico e bloqueios de agenda com motivo",
          "Aplicativo do técnico (PWA) mobile-first para executar e encerrar ordens",
          "Baixa de material na própria ordem de serviço",
        ],
      },
      {
        group: "Controle",
        items: [
          "Seis cargos com matriz de permissão por rota, aplicada no servidor",
          "Estoque com produtos, localizações e movimentação",
          "Trilha de auditoria por gatilho de banco e registro de consentimento (LGPD)",
        ],
      },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "react-hook-form",
      "Zod",
      "dnd-kit",
      "Vercel",
    ],
    challenges: [
      {
        title: "Permissão que não é decoração",
        description:
          "Esconder um menu não é controle de acesso. Cada rota tem guarda no servidor, e o banco aplica política de linha. Quem tenta acessar o que não lhe cabe é redirecionado, não apenas deixa de ver o botão.",
      },
      {
        title: "Arrastar e soltar que não trava",
        description:
          "O quadro de despacho precisa funcionar com rolagem horizontal e muitas ordens simultâneas, sem perder o item durante o arrasto. Exigiu cuidado específico com a camada de sobreposição e o contexto de rolagem.",
      },
      {
        title: "O celular é o ambiente principal, não a versão reduzida",
        description:
          "O técnico usa o sistema em pé, com uma mão, muitas vezes com sinal ruim. A interface dele foi desenhada primeiro para 375px de largura. O desktop é que é a adaptação.",
      },
      {
        title: "Dado pessoal sob LGPD",
        description:
          "O sistema guarda dado de cliente e de colaborador. Mapeamos o que é sensível, aplicamos política de linha, registramos consentimento e criamos trilha de auditoria automática nas tabelas críticas.",
      },
    ],
    benefits: [
      "Uma plataforma no lugar de quatro ferramentas desconectadas",
      "Visão completa do cliente, do primeiro contato ao encerramento da ordem em campo",
      "A execução em campo chega à gestão no momento em que acontece",
      "Cada cargo entra e vê exatamente o que lhe cabe",
      "Rastreabilidade: quem alterou o quê, e quando",
    ],
    facts: [
      { label: "Situação", value: "Em produção, em evolução contínua" },
      { label: "Módulos entregues", value: "CRM, Obras, Ordens de Serviço, Despacho, App do técnico" },
      { label: "Cargos com permissão própria", value: "6" },
      { label: "Em construção", value: "Estoque e almoxarifado" },
    ],
    screens: ["kanban-dispatch", "mobile-tech"],
    featured: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const relatedProjects = (slug: string, limit = 2) =>
  projects.filter((p) => p.slug !== slug).slice(0, limit);

/** Todas as tecnologias citadas, únicas e ordenadas. Usado no filtro do índice. */
export const allTech = [...new Set(projects.flatMap((p) => p.tech))].sort((a, b) =>
  a.localeCompare(b, "pt-BR"),
);

export const allCategories = [...new Set(projects.map((p) => p.category))];
