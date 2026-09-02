/** Dados ilustrativos. Nenhum dado real de cliente. */
const rows = [
  { pos: 1, nome: "Técnico A", os: 138, sucesso: 82, valor: "R$ 14.250" },
  { pos: 2, nome: "Técnico B", os: 121, sucesso: 76, valor: "R$ 12.980" },
  { pos: 3, nome: "Técnico C", os: 114, sucesso: 74, valor: "R$ 11.640" },
  { pos: 4, nome: "Técnico D", os: 97, sucesso: 68, valor: "R$ 9.310" },
  { pos: 5, nome: "Técnico E", os: 83, sucesso: 61, valor: "R$ 7.880" },
];

export default function TechnicianRanking() {
  const max = Math.max(...rows.map((r) => r.os));

  return (
    <div className="p-4 sm:p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <div className="font-display text-sm font-semibold text-white">Ranking da equipe</div>
        <span className="font-mono text-[10px] text-gray-500">por produção no período</span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-bg-1/60">
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-3 border-b border-line px-3.5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-500">
          <span>#</span>
          <span>Técnico</span>
          <span className="text-right">Sucesso</span>
          <span className="text-right">Produção</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.pos}
            className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 border-b border-line px-3.5 py-3 last:border-0"
          >
            <span
              className={
                "inline-flex h-[22px] w-[22px] items-center justify-center rounded-md font-mono text-[10px] font-bold " +
                (r.pos <= 3 ? "bg-gradient-brand text-bg" : "bg-white/5 text-gray-300")
              }
            >
              {r.pos}
            </span>
            <div className="min-w-0">
              <div className="truncate text-xs font-medium text-white">{r.nome}</div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-brand"
                  style={{ width: `${(r.os / max) * 100}%` }}
                />
              </div>
            </div>
            <span
              className={
                "rounded px-1.5 py-0.5 font-mono text-[10px] font-bold " +
                (r.sucesso >= 75
                  ? "bg-success/10 text-success"
                  : r.sucesso >= 65
                    ? "bg-warning/10 text-warning"
                    : "bg-danger/10 text-danger")
              }
            >
              {r.sucesso}%
            </span>
            <span className="text-right font-mono text-[11px] font-semibold text-gray-200">
              {r.valor}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
