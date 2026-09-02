import {
  ClipboardList,
  EyeOff,
  FileSpreadsheet,
  RefreshCw,
  ShieldAlert,
  Split,
  type LucideIcon,
} from "lucide-react";

/** Os problemas que o visitante reconhece na própria operação. */
export const problems: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: FileSpreadsheet,
    title: "O controle mora numa planilha",
    description:
      "Ela funciona até o dia em que duas pessoas editam a mesma versão, ou em que quem a mantinha sai de férias.",
  },
  {
    icon: RefreshCw,
    title: "O mesmo dado é digitado duas vezes",
    description:
      "Sai de um sistema, entra em outro. Cada passagem é uma chance de erro e um tempo que ninguém contabiliza.",
  },
  {
    icon: EyeOff,
    title: "O número aparece tarde demais",
    description:
      "Quando o relatório fica pronto, o mês já fechou. O indicador vira histórico em vez de decisão.",
  },
  {
    icon: Split,
    title: "Cada área tem a própria verdade",
    description:
      "Duas planilhas, dois números, e a reunião vira uma discussão sobre qual conta está certa.",
  },
  {
    icon: ShieldAlert,
    title: "Todo mundo enxerga tudo, ou quase nada",
    description:
      "Sem recorte por papel, ou a informação vaza, ou a pessoa depende de outra para ver o mínimo do trabalho dela.",
  },
  {
    icon: ClipboardList,
    title: "O plano de ação não tem dono",
    description:
      "A análise aponta o problema, o plano nasce na ata e morre lá. Sem responsável, sem prazo, sem histórico.",
  },
];

/** Como a Tallpa trabalha. Versão curta do método, para a home. */
export const method: { step: string; title: string; description: string }[] = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos o fluxo real antes de propor qualquer coisa. Se o problema for de processo, dizemos isso, mesmo que signifique um projeto menor.",
  },
  {
    step: "02",
    title: "Desenho",
    description:
      "Definimos escopo, arquitetura e o que fica de fora. Decisão técnica registrada é decisão que não se refaz a cada reunião.",
  },
  {
    step: "03",
    title: "Construção em ciclos",
    description:
      "Entregas curtas, cada uma com algo utilizável de ponta a ponta. Você vê funcionando antes de estar pronto.",
  },
  {
    step: "04",
    title: "Produção e evolução",
    description:
      "Publicamos, acompanhamos o uso real e seguimos evoluindo. Sistema que ninguém mantém envelhece em meses.",
  },
];

export const segments: { title: string; description: string }[] = [
  {
    title: "Telecom e provedores de internet",
    description:
      "Produtividade de campo, qualidade de atendimento, reincidência, indisponibilidades e repasse de equipe terceirizada.",
  },
  {
    title: "Infraestrutura e serviços de campo",
    description:
      "Obras em fases, despacho de técnicos, ordens de serviço, controle de material e execução em campo pelo celular.",
  },
  {
    title: "Operações com equipe distribuída",
    description:
      "Quem coordena gente fora do escritório e precisa que a informação chegue no momento em que acontece, não na digitação do dia seguinte.",
  },
  {
    title: "Empresas presas a sistema legado",
    description:
      "O sistema atende, mas não tem integração, não exporta direito e não deixa você enxergar o próprio dado.",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "O que é o diagnóstico gratuito?",
    a: "Uma conversa em que entendemos o seu processo e apontamos onde estão as oportunidades reais de ganho. Você sai dela com uma leitura objetiva do problema, mesmo que a conclusão seja que não precisa de um sistema agora. Não é apresentação comercial e não tem compromisso.",
  },
  {
    q: "Vocês trabalham com sistema pronto ou desenvolvem do zero?",
    a: "Depende do problema, e essa é uma resposta honesta. Quando existe uma solução de mercado que atende, dizemos isso. Construímos do zero quando o processo é o diferencial da empresa e forçá-lo dentro de um sistema de prateleira sairia mais caro do que desenvolvê-lo.",
  },
  {
    q: "Meu sistema atual não tem integração. Dá para aproveitar o dado?",
    a: "Na maioria dos casos, sim. Já extraímos dados de sistemas sem API, inclusive de sistemas acessíveis apenas de dentro da rede da empresa. A extração é feita sobre a própria interface do sistema de origem, com autenticação e tolerância a falha.",
  },
  {
    q: "Quanto tempo leva um projeto?",
    a: "Trabalhamos em ciclos curtos, e cada ciclo termina com algo utilizável de ponta a ponta. Isso significa que você vê o sistema funcionando bem antes de ele estar completo. O prazo total depende do escopo, e ele é fechado no diagnóstico, não estimado por telefone.",
  },
  {
    q: "Vocês dão suporte depois de entregar?",
    a: "Sim. Sistema em produção precisa de acompanhamento, porque o uso real sempre revela coisas que o planejamento não previu. O formato do acompanhamento é combinado caso a caso.",
  },
];
