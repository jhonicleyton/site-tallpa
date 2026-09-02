/** Dados ilustrativos. Nenhum dado real de cliente. */
const causas = [
  { label: "Infraestrutura externa", pct: 34, tone: "bg-gradient-brand" },
  { label: "Configuração do cliente", pct: 26, tone: "bg-[linear-gradient(90deg,#2EE6A8,#1EB47C)]" },
  { label: "Equipamento", pct: 21, tone: "bg-[linear-gradient(90deg,#FFB547,#FF8A47)]" },
  { label: "Rede interna", pct: 19, tone: "bg-[linear-gradient(90deg,#FF5470,#FF1F47)]" },
];

const meses = [62, 58, 64, 55, 49, 46, 44, 41];

export default function IndicatorPanel() {
  const max = Math.max(...meses);

  return (
    <div className="p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="font-display text-sm font-semibold text-white">Qualidade e causa raiz</div>
          <div className="font-mono text-[10px] text-gray-400">
            Última sincronização: hoje, 16h
          </div>
        </div>
        <span className="rounded-full border border-line-default bg-cyan-300/5 px-2.5 py-1 font-mono text-[9px] font-bold text-cyan-300">
          ● COLETA ATIVA
        </span>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-line bg-bg-1/60 p-3.5">
          <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            Índice de reincidência · tendência mensal
          </div>
          <div className="flex h-[110px] items-end gap-2">
            {meses.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-blue-400/40 to-cyan-300/90"
                  style={{ height: `${(v / max) * 92}px` }}
                />
                <span className="font-mono text-[8px] text-gray-400">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 border-t border-line pt-3">
            <span className="rounded bg-success/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-success">
              ↓ tendência de queda
            </span>
            <span className="text-[10px] text-gray-400">8 meses de série acumulada</span>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-bg-1/60 p-3.5">
          <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            Causa raiz · distribuição
          </div>
          <div className="flex flex-col gap-3">
            {causas.map((c) => (
              <div key={c.label}>
                <div className="mb-1.5 flex items-baseline justify-between gap-2">
                  <span className="truncate text-[11px] text-gray-300">{c.label}</span>
                  <span className="font-mono text-[10px] font-bold text-gray-200">{c.pct}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div className={`h-full rounded-full ${c.tone}`} style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-line bg-bg-2/50 p-2.5">
            <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
              Fila de agendamento
            </div>
            <div className="text-gradient mt-1 font-display text-lg font-bold leading-none">
              47 <span className="font-sans text-[10px] font-medium text-gray-400">aguardando</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
