/**
 * Campo de partículas do Hero: pontos de dado que respiram.
 *
 * Posições fixas e determinísticas: o servidor e o cliente renderizam
 * exatamente o mesmo markup, sem risco de divergência de hidratação.
 * Escondido abaixo de 768px (custo de bateria sem ganho visual real) e
 * cancelado por prefers-reduced-motion via a regra global.
 */
const PARTICLES = [
  { x: 8, y: 22, d: 0, s: 3 },
  { x: 16, y: 61, d: 1.4, s: 2 },
  { x: 24, y: 12, d: 2.6, s: 2 },
  { x: 31, y: 78, d: 0.7, s: 3 },
  { x: 42, y: 34, d: 3.1, s: 2 },
  { x: 57, y: 18, d: 1.9, s: 2 },
  { x: 66, y: 69, d: 2.2, s: 3 },
  { x: 74, y: 40, d: 0.4, s: 2 },
  { x: 83, y: 25, d: 3.4, s: 3 },
  { x: 90, y: 58, d: 1.1, s: 2 },
  { x: 95, y: 15, d: 2.8, s: 2 },
  { x: 12, y: 44, d: 4.2, s: 2 },
] as const;

export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="animate-drift absolute rounded-full bg-cyan-300"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            animationDelay: `${p.d}s`,
            boxShadow: "0 0 8px rgba(74,248,255,0.8)",
          }}
        />
      ))}
    </div>
  );
}
