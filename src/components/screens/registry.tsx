import type { ScreenKey } from "@/content/projects";
import KpiDashboard from "./KpiDashboard";
import TechnicianRanking from "./TechnicianRanking";
import IndicatorPanel from "./IndicatorPanel";
import KanbanDispatch from "./KanbanDispatch";
import MobileTechApp from "./MobileTechApp";

export type ScreenSpec = {
  label: string;
  caption: string;
  device: "desktop" | "mobile";
  Component: () => React.JSX.Element;
};

/**
 * Recriações das interfaces, construídas com os tokens visuais reais
 * dos projetos. Os dados exibidos são ilustrativos, e nenhum dado de
 * cliente é reproduzido. Ver aviso em <ScreenGallery />.
 */
export const screens: Record<ScreenKey, ScreenSpec> = {
  "kpi-dashboard": {
    label: "Painel executivo",
    caption:
      "Volume, ticket médio e taxa de finalização no topo; abaixo, a série do período cruzando produção e valor.",
    device: "desktop",
    Component: KpiDashboard,
  },
  "technician-ranking": {
    label: "Ranking da equipe",
    caption:
      "Produção por técnico com taxa de sucesso, ordenada. O drill-down abre a lista de visitas que compõem cada linha.",
    device: "desktop",
    Component: TechnicianRanking,
  },
  "indicator-panel": {
    label: "Painel de indicadores",
    caption:
      "A leitura desce do indicador para a causa: qualidade, causa raiz e a fila que explica o número.",
    device: "desktop",
    Component: IndicatorPanel,
  },
  "kanban-dispatch": {
    label: "Agenda de despacho",
    caption:
      "Ordens distribuídas por técnico em quadro de arrastar e soltar, com capacidade e bloqueios de agenda.",
    device: "desktop",
    Component: KanbanDispatch,
  },
  "mobile-tech": {
    label: "App do técnico",
    caption:
      "Painel pessoal do técnico, desenhado primeiro para 375px: produção do período, taxa de sucesso e conferência.",
    device: "mobile",
    Component: MobileTechApp,
  },
};
