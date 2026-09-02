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

export default function ProductionChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={series} margin={{ top: 4, right: 4, bottom: 0, left: -22 }}>
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4AF8FF" stopOpacity={0.85} />
            <stop offset="100%" stopColor="#1840FF" stopOpacity={0.35} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
        <XAxis dataKey="dia" tick={{ fill: "#585D78", fontSize: 10 }} axisLine={false} tickLine={false} />
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
        <Line type="monotone" dataKey="valor" name="Valor (R$)" stroke="#4AF8FF" strokeWidth={2} dot={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
