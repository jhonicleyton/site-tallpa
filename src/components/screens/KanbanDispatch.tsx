/** Dados ilustrativos. Nenhum dado real de cliente. */
const colunas = [
  {
    tecnico: "Técnico A",
    capacidade: "4/6",
    tone: "text-success",
    cards: [
      { os: "OS-2841", tipo: "Instalação", hora: "08:00", tag: "cyan" },
      { os: "OS-2847", tipo: "Manutenção", hora: "10:30", tag: "cyan" },
      { os: "OS-2853", tipo: "Vistoria", hora: "14:00", tag: "neutral" },
    ],
  },
  {
    tecnico: "Técnico B",
    capacidade: "6/6",
    tone: "text-warning",
    cards: [
      { os: "OS-2839", tipo: "Instalação", hora: "08:30", tag: "cyan" },
      { os: "OS-2844", tipo: "Reparo", hora: "11:00", tag: "amber" },
      { os: "OS-2851", tipo: "Instalação", hora: "13:30", tag: "cyan" },
    ],
  },
  {
    tecnico: "Não atribuídas",
    capacidade: "5",
    tone: "text-gray-400",
    cards: [
      { os: "OS-2858", tipo: "Reparo", hora: "—", tag: "amber" },
      { os: "OS-2861", tipo: "Vistoria", hora: "—", tag: "neutral" },
    ],
  },
];

const tagTone: Record<string, string> = {
  cyan: "bg-cyan-300/12 text-cyan-300",
  amber: "bg-warning/12 text-warning",
  neutral: "bg-white/5 text-gray-400",
};

export default function KanbanDispatch() {
  return (
    <div className="p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="font-display text-sm font-semibold text-white">Agenda de despacho</div>
          <div className="font-mono text-[10px] text-gray-400">Arraste uma ordem para atribuir</div>
        </div>
        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] text-gray-400">
          HOJE
        </span>
      </div>

      <div className="scroll-slim flex gap-3 overflow-x-auto pb-1">
        {colunas.map((col) => (
          <div
            key={col.tecnico}
            className="w-[190px] shrink-0 rounded-xl border border-line bg-bg-1/60 p-2.5"
          >
            <div className="mb-2.5 flex items-center justify-between gap-2 border-b border-line pb-2">
              <span className="truncate text-[11px] font-semibold text-white">{col.tecnico}</span>
              <span className={`font-mono text-[9px] font-bold ${col.tone}`}>{col.capacidade}</span>
            </div>
            <div className="flex flex-col gap-2">
              {col.cards.map((c) => (
                <div
                  key={c.os}
                  className="rounded-lg border border-line bg-bg-2/70 p-2.5 transition-colors hover:border-line-default"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold text-gray-200">{c.os}</span>
                    <span className="font-mono text-[9px] text-gray-400">{c.hora}</span>
                  </div>
                  <span
                    className={`mt-1.5 inline-block rounded px-1.5 py-0.5 font-mono text-[9px] font-bold ${tagTone[c.tag]}`}
                  >
                    {c.tipo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
