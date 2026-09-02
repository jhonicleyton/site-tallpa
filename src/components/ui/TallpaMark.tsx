"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useSyncExternalStore } from "react";
import { cn } from "./cn";

/**
 * A marca da Tallpa são três pilares verticais que leem, ao mesmo tempo,
 * como um "T", como barras de gráfico e como pilares de dado.
 *
 * A animação é exatamente isso: os pilares se constroem em sequência,
 * da base para o topo, e assentam formando a marca. Não é enfeite:
 * é a marca sendo construída, que é o que a Tallpa faz.
 *
 * Decisão técnica: SVG + Framer Motion, sem WebGL. São três polígonos;
 * Three.js custaria ~150 KB de bundle e bateria no celular para desenhar
 * o que 3 KB de SVG desenham com mais nitidez.
 *
 * `prefers-reduced-motion` → marca já montada, sem sequência e sem pulso.
 *
 * A animação só existe com a aba em primeiro plano. Em aba de fundo o
 * navegador congela o requestAnimationFrame, e o estado inicial dos
 * polígonos é opacity 0: a marca simplesmente sumiria para quem abrisse
 * o site em nova aba. Fora isso, renderiza a marca pronta.
 */

/** `true` só quando a aba está em primeiro plano. Falso no servidor. */
function usePageVisible() {
  return useSyncExternalStore(
    (onChange) => {
      document.addEventListener("visibilitychange", onChange);
      return () => document.removeEventListener("visibilitychange", onChange);
    },
    () => document.visibilityState === "visible",
    () => false,
  );
}

const PILLARS = [
  { points: "110,188 172,156 172,344 110,312", delay: 0 },
  { points: "198,138 286,98 286,402 198,362", delay: 0.14 },
  { points: "312,188 374,156 374,344 312,312", delay: 0.28 },
] as const;

export default function TallpaMark({
  animated = false,
  glow = true,
  className,
  title = "Tallpa Solutions",
}: {
  animated?: boolean;
  glow?: boolean;
  className?: string;
  title?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const gradientId = `tallpa-grad-${uid}`;
  const glowId = `tallpa-glow-${uid}`;
  const prefersReduced = useReducedMotion();
  const visible = usePageVisible();
  const shouldAnimate = animated && !prefersReduced && visible;

  return (
    <svg
      viewBox="70 58 344 384"
      role="img"
      aria-label={title}
      className={cn("h-auto w-full", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4AF8FF" />
          <stop offset="45%" stopColor="#1BD8FF" />
          <stop offset="100%" stopColor="#1840FF" />
        </linearGradient>
        {glow && (
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              // Uma linha só: quebras de linha aqui viram divergência de
              // hidratação (o servidor serializa literal, o cliente normaliza).
              values="0 0 0 0 0 0 0 0 0 0.78 0 0 0 0 1 0 0 0 0.6 0"
              result="cyanGlow"
            />
            <feMerge>
              <feMergeNode in="cyanGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      <g filter={glow ? `url(#${glowId})` : undefined}>
        {PILLARS.map(({ points, delay }, i) =>
          shouldAnimate ? (
            <motion.polygon
              key={i}
              points={points}
              fill={`url(#${gradientId})`}
              style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{
                scaleY: { duration: 0.85, delay, ease: [0.34, 1.56, 0.64, 1] },
                opacity: { duration: 0.3, delay },
              }}
            />
          ) : (
            <polygon key={i} points={points} fill={`url(#${gradientId})`} />
          ),
        )}
      </g>
    </svg>
  );
}
