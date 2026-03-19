"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, Zap, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

// ─── Data ─────────────────────────────────────────────────────────────────────
const aiAgents = [
  { name: "Análise de Crédito", status: "processing" },
  { name: "Previsão de Demanda", status: "done" },
  { name: "Triagem de Leads", status: "processing" },
  { name: "Resumo Financeiro Q2", status: "done" },
];

const kpis = [
  { label: "Tempo economizado hoje", value: "6.4h", bar: 80 },
  { label: "Custo operacional reduzido", value: "R$ 1.8k", bar: 62 },
  { label: "Acurácia do modelo", value: "94.2%", bar: 94 },
];

const insights = [
  {
    text: "Anomalia detectada no fluxo de caixa da unidade Sul.",
    type: "alert",
  },
  {
    text: "Sugestão: Aumentar estoque do item #A-204 — demanda crescendo.",
    type: "suggestion",
  },
  {
    text: "Modelo de churn com 91% de precisão — 3 clientes em risco.",
    type: "alert",
  },
  {
    text: "Receita recorrente acima da meta em 12% neste mês.",
    type: "success",
  },
];

// ─── Shared ───────────────────────────────────────────────────────────────────
const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4 },
};

const transition = { type: "spring" as const, stiffness: 600, damping: 35 };

// ─── Component ────────────────────────────────────────────────────────────────
export default function ShowcaseWidgets() {
  return (
    <section className="bg-dark-bg py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            System Preview
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-light">
            Operação Inteligente
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Widget 1 — Agentes de IA */}
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={cardVariants}
            transition={transition}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Brain className="w-5 h-5 text-brand-cyan" strokeWidth={1.5} />
                <h3 className="font-display text-sm font-semibold text-text-light uppercase tracking-wide">
                  Agentes de IA
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {aiAgents.map(({ name, status }) => (
                  <li key={name} className="flex items-center justify-between gap-3">
                    <span className="text-text-muted text-sm">{name}</span>
                    {status === "processing" ? (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-brand-cyan">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                        Processando
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2} />
                        Concluído
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          {/* Widget 2 — KPIs de Impacto */}
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={cardVariants}
            transition={transition}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-5 h-5 text-brand-cyan" strokeWidth={1.5} />
                <h3 className="font-display text-sm font-semibold text-text-light uppercase tracking-wide">
                  KPIs de Impacto
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {kpis.map(({ label, value, bar }) => (
                  <li key={label} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted text-xs">{label}</span>
                      <span className="text-text-light text-xs font-semibold">
                        {value}
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-dark-bg overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-electric"
                        style={{ width: `${bar}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          {/* Widget 3 — Insights Estratégicos */}
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={cardVariants}
            transition={transition}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Zap className="w-5 h-5 text-brand-cyan" strokeWidth={1.5} />
                <h3 className="font-display text-sm font-semibold text-text-light uppercase tracking-wide">
                  Insights Estratégicos
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {insights.map(({ text, type }) => (
                  <li key={text} className="flex items-start gap-2">
                    {type === "alert" ? (
                      <AlertTriangle
                        className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                    ) : type === "suggestion" ? (
                      <Lightbulb
                        className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                    ) : (
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                    )}
                    <span className="text-text-muted text-sm leading-tight">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
