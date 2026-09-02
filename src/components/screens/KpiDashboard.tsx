"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/** Dados ilustrativos. Nenhum dado real de cliente. */
const series = [
  { dia: "01", os: 26, valor: 4200 },
  { dia: "05", os: 31, valor: 5100 },
  { dia: "09", os: 24, valor: 3800 },
  { dia: "13", os: 38, valor: 6400 },
  { dia: "17", os: 33, valor: 5600 },
  { dia: "21", os: 41, valor: 7100 },
  { dia: "25", os: 36, valor: 6200 },
  { dia: "29", os: 44, valor: 7800 },
];

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
          <div className="font-mono text-[10px] text-gray-500">Período: mês corrente</div>
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
            <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-500">
              {k.label}
            </div>
            <div className="text-gradient mt-1.5 font-display text-xl font-bold leading-none">
              {k.value}
            </div>
            <div className="mt-1.5 font-mono text-[9px] text-gray-500">{k.foot}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-line bg-bg-1/60 p-3">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
          Produção e valor por dia
        </div>
        <div className="h-[160px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={series} margin={{ top: 4, right: 4, bottom: 0, left: -22 }}>
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4AF8FF" stopOpacity={0.85} />
                  <stop offset="100%" stopColor="#1840FF" stopOpacity={0.35} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis
                dataKey="dia"
                tick={{ fill: "#585D78", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis tick={{ fill: "#585D78", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ fill: "rgba(74,248,255,0.04)" }}
                contentStyle={{
                  background: "#0A0E1A",
                  border: "1px solid rgba(74,248,255,0.15)",
                  borderRadius: 8,
                  fontSize: 11,
                }}
                labelStyle={{ color: "#9A9FB4" }}
              />
              <Bar dataKey="os" name="Ordens" fill="url(#barGrad)" radius={[3, 3, 0, 0]} />
              <Line
                type="monotone"
                dataKey="valor"
                name="Valor (R$)"
                stroke="#4AF8FF"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
