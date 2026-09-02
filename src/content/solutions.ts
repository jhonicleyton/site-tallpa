import {
  Blocks,
  Boxes,
  GaugeCircle,
  LayoutDashboard,
  Plug,
  Search,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  id: string;
  title: string;
  icon: LucideIcon;
  /** A frase curta do card. */
  summary: string;
  /** O texto da página /solucoes. */
  body: string;
  deliverables: string[];
};

export const solutions: Solution[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico operacional",
    icon: Search,
    summary: "Antes de propor sistema, entendemos onde o processo trava e o que isso custa.",
    body: "Mapeamos o fluxo real da operação, não o que está no organograma. Onde o dado é digitado duas vezes, onde a decisão espera alguém montar uma planilha, onde o controle depende da memória de uma pessoa. O resultado é uma leitura objetiva do que dá para resolver com processo, do que exige integração e do que só um sistema resolve.",
    deliverables: [
      "Mapa do fluxo atual, com os pontos de retrabalho",
      "Lista priorizada de oportunidades, por esforço e impacto",
      "Recomendação do que fazer primeiro, e do que não vale a pena fazer",
    ],
  },
  {
    id: "sistemas",
    title: "Sistemas sob medida",
    icon: Blocks,
    summary: "ERPs, portais e plataformas construídos a partir da realidade da sua operação.",
    body: "Quando o processo é o diferencial da empresa, forçar ele dentro de um sistema de prateleira custa mais do que construir. Desenvolvemos a plataforma que segue o seu fluxo, com controle de acesso por papel, trilha de auditoria e a disciplina de engenharia necessária para que ela dure e continue evoluindo.",
    deliverables: [
      "Aplicação web responsiva, em produção",
      "Controle de acesso por papel, aplicado no servidor e no banco",
      "Documentação de arquitetura e das decisões tomadas",
    ],
  },
  {
    id: "indicadores",
    title: "Dashboards e indicadores",
    icon: LayoutDashboard,
    summary: "Painéis que respondem perguntas de gestão, não telas bonitas cheias de gráfico.",
    body: "Um painel útil desce do indicador para a causa. Construímos a leitura na ordem em que a gestão pensa: o número, o que explica o número e o que dá para fazer a respeito. Com série histórica, para que comparar períodos deixe de ser um projeto.",
    deliverables: [
      "Painel com recorte de permissão por pessoa ou área",
      "Série histórica acumulada automaticamente",
      "Drill-down do indicador até o registro que o compõe",
    ],
  },
  {
    id: "kpis",
    title: "Estruturação de KPIs",
    icon: Target,
    summary: "Definir o indicador certo, com fórmula acordada e fonte única.",
    body: "Boa parte das discussões sobre número não é sobre desempenho. É sobre qual conta está certa. Estruturamos o indicador antes de exibi-lo: o que ele mede, de onde vem, como é calculado, quem responde por ele e a partir de qual valor ele exige ação.",
    deliverables: [
      "Dicionário de indicadores com fórmula e fonte",
      "Definição de meta e faixa de alerta",
      "Responsável nomeado por indicador",
    ],
  },
  {
    id: "automacao",
    title: "Automação de processos",
    icon: Workflow,
    summary: "O que é repetitivo e tem regra clara não precisa de gente.",
    body: "Coleta agendada, conferência de arquivo, cálculo que segue tabela, notificação que depende de uma condição, relatório que alguém monta toda segunda-feira. Automatizamos com registro do que rodou, do que falhou e do que precisa de atenção, porque automação sem monitoramento só transfere o problema.",
    deliverables: [
      "Rotina automatizada com agendamento",
      "Registro de execução e alerta de falha",
      "Reprocessamento seguro quando algo dá errado",
    ],
  },
  {
    id: "integracoes",
    title: "Integrações e ETL",
    icon: Plug,
    summary: "Tirar o dado de onde ele está preso, inclusive de sistema sem API.",
    body: "Nem todo sistema oferece integração, e nem todo sistema está acessível pela internet. Já resolvemos os dois casos: extração sobre a própria interface do sistema de origem, e arquitetura em que quem está dentro da rede envia o dado para fora, em vez de a nuvem tentar entrar.",
    deliverables: [
      "Pipeline de extração, normalização e carga",
      "Ingestão idempotente: reenviar não duplica",
      "Auditoria de cada carga, com reprocessamento",
    ],
  },
  {
    id: "portais",
    title: "Portais de gestão",
    icon: Boxes,
    summary: "Um lugar só, com recorte diferente para cada pessoa que entra.",
    body: "Centralizamos indicador, atividade e equipe num portal onde cada perfil enxerga exatamente o que lhe cabe. Diretoria, coordenação, supervisão e campo entram pelo mesmo endereço e encontram leituras diferentes, sem versões paralelas de planilha circulando.",
    deliverables: [
      "Portal com autenticação e papéis independentes",
      "Recorte de dado aplicado no servidor",
      "Gestão de usuários pela própria administração do cliente",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoria operacional e tecnológica",
    icon: GaugeCircle,
    summary: "Decidir o que construir, o que comprar e o que simplesmente parar de fazer.",
    body: "Nem todo problema operacional se resolve com software, e nem todo software precisa ser feito do zero. Ajudamos a tomar essa decisão com critério técnico, considerando o custo de manter o que for construído, e não apenas o de entregar.",
    deliverables: [
      "Avaliação técnica de alternativas, com trade-offs explícitos",
      "Desenho de arquitetura e plano de evolução",
      "Acompanhamento da execução",
    ],
  },
];

export const getSolution = (id: string) => solutions.find((s) => s.id === id);
