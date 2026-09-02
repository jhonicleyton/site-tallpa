"use client";

import dynamic from "next/dynamic";

/**
 * O gráfico é carregado só no cliente: ResponsiveContainer não tem
 * dimensões durante o SSR e emitiria aviso de largura/altura -1.
 */
const ProductionChart = dynamic(() => import("./ProductionChart"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-lg bg-white/[0.03]" />,
});

/** Dados ilustrativos. Nenhum dado real de cliente. */

const kpis = [
  { label: "Ordens no período", value: "273", foot: "34,1/dia" },
  { label: "Taxa de finalização", value: "78,4%", foot: "214 concluídas" },
  { label: "Ticket médio", value: "R$ 168", foot: "por ordem" },
  { label: "Improdutividade", value: "21,6%", foot: "59 sem sucesso" },
];

export default function KpiDashboard() {
  return (
    <div className="p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="font-display text-sm font-semibold text-white">Painel executivo</div>
          <div className="font-mono text-[10px] text-gray-400">Período: mês corrente</div>
        </div>
        <div className="flex gap-1">
          {["7d", "30d", "12m"].map((p, i) => (
            <span
              key={p}
              className={
                "rounded px-2 py-1 font-mono text-[10px] font-bold " +
                (i === 1 ? "bg-gradient-brand text-bg" : "border border-line text-gray-400")
              }
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="surface-topline rounded-[14px] border border-line bg-gradient-to-b from-bg-1 to-bg-2/60 p-3"
          >
            <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
              {k.label}
            </div>
            <div className="text-gradient mt-1.5 font-display text-xl font-bold leading-none">
              {k.value}
            </div>
            <div className="mt-1.5 font-mono text-[9px] text-gray-400">{k.foot}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-line bg-bg-1/60 p-3">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
          Produção e valor por dia
        </div>
        <div className="h-[180px] w-full">
          <ProductionChart />
        </div>
      </div>
    </div>
  );
}
