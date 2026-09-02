import { ClipboardCheck, Home, TrendingUp, User } from "lucide-react";

/** Dados ilustrativos. Nenhum dado real de cliente. */
export default function MobileTechApp() {
  return (
    <div className="flex h-[520px] flex-col">
      <div className="border-b border-line px-4 pb-3 pt-8">
        <div className="text-[10px] text-gray-400">Olá,</div>
        <div className="font-display text-base font-semibold text-white">Técnico</div>
        <div className="mt-0.5 font-mono text-[9px] text-cyan-500">PERÍODO CORRENTE</div>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-4 py-3.5">
        <div className="surface-topline rounded-[14px] border border-line bg-gradient-to-b from-bg-1 to-bg-2/60 p-3.5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
            Produção do período
          </div>
          <div className="text-gradient mt-1.5 font-display text-[26px] font-bold leading-none">
            1.842 <span className="font-sans text-xs font-medium text-gray-400">pts</span>
          </div>
          <div className="mt-2 font-mono text-[9px] text-gray-400">138 ordens com sucesso</div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-line bg-bg-1/60 p-3">
            <div className="text-[9px] uppercase tracking-[0.1em] text-gray-400">Sucesso</div>
            <div className="mt-1 font-display text-lg font-bold text-success">72,6%</div>
          </div>
          <div className="rounded-xl border border-line bg-bg-1/60 p-3">
            <div className="text-[9px] uppercase tracking-[0.1em] text-gray-400">Posição</div>
            <div className="mt-1 font-display text-lg font-bold text-white">
              1º<span className="text-xs font-medium text-gray-400"> de 8</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-cyan-300/25 bg-cyan-300/5 p-3">
          <div className="flex items-start gap-2.5">
            <ClipboardCheck className="mt-px h-4 w-4 shrink-0 text-cyan-300" strokeWidth={1.5} />
            <div>
              <div className="text-[11px] font-semibold text-white">Ordens para conferir</div>
              <div className="mt-0.5 text-[10px] leading-snug text-gray-400">
                12 ordens aguardando sua aprovação ou contestação.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-bg-1/60 p-3">
          <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
            Maiores fontes
          </div>
          {[
            { l: "Instalação", p: 68 },
            { l: "Manutenção", p: 44 },
            { l: "Vistoria", p: 22 },
          ].map((r) => (
            <div key={r.l} className="mb-2 last:mb-0">
              <div className="mb-1 flex justify-between text-[10px] text-gray-400">
                <span>{r.l}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${r.p}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav className="flex border-t border-line bg-bg-1/80 px-2 py-2.5">
        {[
          { Icon: Home, label: "Painel", active: true },
          { Icon: ClipboardCheck, label: "Ordens", active: false },
          { Icon: TrendingUp, label: "Histórico", active: false },
          { Icon: User, label: "Perfil", active: false },
        ].map(({ Icon, label, active }) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-1">
            <Icon
              className={`h-4 w-4 ${active ? "text-cyan-300" : "text-gray-400"}`}
              strokeWidth={1.5}
            />
            <span className={`text-[8px] ${active ? "text-cyan-300" : "text-gray-400"}`}>
              {label}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}
