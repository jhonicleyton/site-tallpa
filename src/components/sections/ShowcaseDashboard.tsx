"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  LayoutDashboard,
  BarChart2,
  FileText,
  Settings,
  CircleDollarSign,
  TrendingUp,
  Zap,
} from "lucide-react";
import { clsx } from "clsx";
import GlassCard from "@/components/ui/GlassCard";

// ─── Types ────────────────────────────────────────────────────────────────────
type Period = "7d" | "30d" | "12m";

// ─── Datasets ─────────────────────────────────────────────────────────────────
const datasets: Record<
  Period,
  { label: string; receita: number; custo: number; economia: number }[]
> = {
  "7d": [
    { label: "Seg", receita: 42000, custo: 28000, economia: 8400 },
    { label: "Ter", receita: 38000, custo: 25000, economia: 7200 },
    { label: "Qua", receita: 55000, custo: 35000, economia: 11000 },
    { label: "Qui", receita: 47000, custo: 30000, economia: 9400 },
    { label: "Sex", receita: 63000, custo: 40000, economia: 12600 },
    { label: "Sáb", receita: 29000, custo: 18000, economia: 5800 },
    { label: "Dom", receita: 28000, custo: 17000, economia: 5600 },
  ],
  "30d": [
    { label: "Sem 1", receita: 280000, custo: 185000, economia: 52000 },
    { label: "Sem 2", receita: 310000, custo: 198000, economia: 58000 },
    { label: "Sem 3", receita: 295000, custo: 190000, economia: 56000 },
    { label: "Sem 4", receita: 340000, custo: 215000, economia: 64000 },
  ],
  "12m": [
    { label: "Jan", receita: 890000, custo: 620000, economia: 142000 },
    { label: "Fev", receita: 920000, custo: 635000, economia: 150000 },
    { label: "Mar", receita: 975000, custo: 658000, economia: 162000 },
    { label: "Abr", receita: 1040000, custo: 698000, economia: 178000 },
    { label: "Mai", receita: 1085000, custo: 718000, economia: 186000 },
    { label: "Jun", receita: 1120000, custo: 735000, economia: 196000 },
    { label: "Jul", receita: 1150000, custo: 748000, economia: 204000 },
    { label: "Ago", receita: 1180000, custo: 762000, economia: 210000 },
    { label: "Set", receita: 1220000, custo: 780000, economia: 218000 },
    { label: "Out", receita: 1280000, custo: 820000, economia: 228000 },
    { label: "Nov", receita: 1340000, custo: 855000, economia: 238000 },
    { label: "Dez", receita: 1400000, custo: 880000, economia: 246000 },
  ],
};

// ─── Mini Stats ───────────────────────────────────────────────────────────────
const miniStats: Record<
  Period,
  { label: string; value: string; delta: string }[]
> = {
  "7d": [
    { label: "Receita Total", value: "R$ 302k", delta: "+8.4%" },
    { label: "ROI Atual", value: "3.1×", delta: "+0.3×" },
    { label: "Tasks Automatizadas", value: "48", delta: "+12" },
  ],
  "30d": [
    { label: "Receita Total", value: "R$ 1.22M", delta: "+11.2%" },
    { label: "ROI Atual", value: "3.4×", delta: "+0.5×" },
    { label: "Tasks Automatizadas", value: "186", delta: "+34" },
  ],
  "12m": [
    { label: "Receita Total", value: "R$ 14.6M", delta: "+28.7%" },
    { label: "ROI Atual", value: "3.8×", delta: "+1.1×" },
    { label: "Tasks Automatizadas", value: "2.240", delta: "+892" },
  ],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatTick(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}k`;
  return `${value}`;
}

function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `R$ ${(value / 1_000).toFixed(0)}k`;
  return `R$ ${value}`;
}

const labelMap: Record<string, string> = {
  receita: "Receita",
  custo: "Custo Operacional",
  economia: "Economia com IA",
};

const colorMap: Record<string, string> = {
  receita: "#007BFF",
  custo: "#2A3148",
  economia: "#00C2FF",
};

// ─── Sidebar ──────────────────────────────────────────────────────────────────
const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BarChart2, label: "Relatórios", active: false },
  { icon: FileText, label: "Documentos", active: false },
  { icon: Settings, label: "Configurações", active: false },
];

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-dark-border bg-dark-card/98 backdrop-blur-md px-4 py-3 shadow-xl min-w-[180px]">
      <p className="text-text-muted text-xs font-semibold mb-2.5 pb-2 border-b border-dark-border">
        {label}
      </p>
      <div className="flex flex-col gap-2">
        {payload.map((entry) => (
          <div
            key={entry.name}
            className="flex items-center justify-between gap-6"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: colorMap[entry.name] ?? "#8A9BC0" }}
              />
              <span className="text-text-muted text-xs">
                {labelMap[entry.name] ?? entry.name}
              </span>
            </div>
            <span className="text-text-light text-xs font-semibold">
              {formatCurrency(entry.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ShowcaseDashboard() {
  const [period, setPeriod] = useState<Period>("30d");

  const currentData = datasets[period];
  const currentStats = miniStats[period];

  const statIcons = [CircleDollarSign, TrendingUp, Zap];
  const statColors = ["#007BFF", "#00C2FF", "#00C2FF"];

  return (
    <GlassCard className="overflow-hidden">
      {/* ── App header bar ── */}
      <div className="flex items-center justify-between border-b border-dark-border px-5 py-3 gap-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse flex-shrink-0" />
          <span className="font-display text-sm font-semibold text-text-light truncate">
            Tallpa ERP — Módulo Financeiro
          </span>
        </div>
        {/* Period toggles */}
        <div className="flex items-center gap-1 bg-dark-bg rounded-lg p-1 flex-shrink-0">
          {(["7d", "30d", "12m"] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={clsx(
                "px-3 py-1 text-xs font-medium rounded-md transition-all duration-200",
                period === p
                  ? "bg-brand-electric text-white shadow"
                  : "text-text-muted hover:text-text-light"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="flex">
        {/* ── Sidebar ── */}
        <div className="hidden md:flex flex-col items-center gap-4 py-6 px-3 border-r border-dark-border">
          {sidebarItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              title={label}
              className={clsx(
                "w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-150",
                active
                  ? "bg-brand-cyan/15 text-brand-cyan"
                  : "text-dark-border hover:text-text-muted"
              )}
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </button>
          ))}
        </div>

        {/* ── Main content ── */}
        <div className="flex-1 p-5 sm:p-6 min-w-0">
          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
            {currentStats.map(({ label, value, delta }, i) => {
              const Icon = statIcons[i];
              return (
                <div
                  key={label}
                  className="bg-dark-bg/60 rounded-xl px-3 sm:px-4 py-3 border border-dark-border"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon
                      className="w-3 h-3 flex-shrink-0"
                      style={{ color: statColors[i] }}
                      strokeWidth={1.5}
                    />
                    <span className="text-text-muted text-[10px] sm:text-xs truncate">
                      {label}
                    </span>
                  </div>
                  <p className="font-display text-base sm:text-lg font-bold text-text-light leading-none">
                    {value}
                  </p>
                  <p className="text-emerald-400 text-[10px] mt-1">
                    {delta} vs período anterior
                  </p>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mb-3 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-2.5 rounded-sm bg-brand-electric/80 inline-block" />
              Receita
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-2.5 rounded-sm inline-block border border-dark-border bg-[#2A3148]" />
              Custo
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-0.5 rounded-full bg-brand-cyan inline-block" />
              Economia IA
            </span>
          </div>

          {/* Chart — key forces remount → entry animation on period change */}
          <ResponsiveContainer width="100%" height={240}>
            <ComposedChart
              key={period}
              data={currentData}
              margin={{ top: 4, right: 8, left: -8, bottom: 0 }}
              barCategoryGap="28%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1E2330"
                vertical={false}
              />
              <XAxis
                dataKey="label"
                tick={{ fill: "#8A9BC0", fontSize: 11 }}
                axisLine={{ stroke: "#1E2330" }}
                tickLine={false}
              />
              <YAxis
                tickFormatter={formatTick}
                tick={{ fill: "#8A9BC0", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                width={48}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(30,35,48,0.4)" }}
              />
              <Bar
                dataKey="receita"
                fill="#007BFF"
                fillOpacity={0.85}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="custo"
                fill="#1E2330"
                stroke="#2A3148"
                strokeWidth={1}
                radius={[4, 4, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="economia"
                stroke="#00C2FF"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "#00C2FF", strokeWidth: 0 }}
                activeDot={{
                  r: 5,
                  fill: "#00C2FF",
                  stroke: "#0A0C10",
                  strokeWidth: 2,
                }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </GlassCard>
  );
}
