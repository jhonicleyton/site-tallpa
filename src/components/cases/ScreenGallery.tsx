"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import type { ScreenKey } from "@/content/projects";
import { screens } from "@/components/screens/registry";
import DeviceFrame from "./DeviceFrame";
import { cn } from "@/components/ui/cn";

/**
 * Galeria das interfaces do case.
 *
 * As telas são recriações fiéis dos layouts, construídas com os tokens
 * visuais dos próprios projetos — e sempre rotuladas como tal. Quando
 * houver capturas reais, basta trocar `Component` por `<Image>` no
 * registry: a estrutura não muda.
 */
export default function ScreenGallery({ keys }: { keys: readonly ScreenKey[] }) {
  const [active, setActive] = useState<ScreenKey>(keys[0]);
  const spec = screens[active];
  const { Component } = spec;

  return (
    <div className="flex flex-col gap-5">
      {keys.length > 1 && (
        <div role="tablist" aria-label="Telas do projeto" className="flex flex-wrap gap-2">
          {keys.map((k) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={active === k}
              onClick={() => setActive(k)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-150",
                active === k
                  ? "border-cyan-400 bg-cyan-300/10 text-cyan-300"
                  : "border-line text-gray-400 hover:border-line-default hover:text-gray-200",
              )}
            >
              {screens[k].label}
            </button>
          ))}
        </div>
      )}

      <div className={cn(spec.device === "mobile" && "flex justify-center")}>
        <DeviceFrame variant={spec.device} label={spec.label}>
          <Component />
        </DeviceFrame>
      </div>

      <p className="text-sm leading-relaxed text-gray-400">{spec.caption}</p>

      <p className="flex items-start gap-2 rounded-lg border border-line bg-bg-1/50 p-3 text-xs leading-relaxed text-gray-400">
        <Info className="mt-px h-3.5 w-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
        <span>
          Recriação da interface, construída com os tokens visuais do projeto. Os números exibidos
          são ilustrativos — nenhum dado real de cliente é reproduzido.
        </span>
      </p>
    </div>
  );
}
