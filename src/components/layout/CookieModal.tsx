"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { clsx } from "clsx";
import Button from "@/components/ui/Button";

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}

interface ToggleProps {
  value: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
}

function Toggle({ value, disabled = false, onChange }: ToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={value}
      disabled={disabled}
      onClick={() => onChange(!value)}
      className={clsx(
        "relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 transition-colors duration-200",
        value ? "bg-brand-cyan border-brand-cyan" : "bg-dark-border border-dark-border",
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      )}
    >
      <span
        className={clsx(
          "inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 mt-0.5",
          value ? "translate-x-5" : "translate-x-0.5"
        )}
      />
    </button>
  );
}

export default function CookieModal({ isOpen, onClose, onSave }: CookieModalProps) {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-dark-card/95 border border-dark-border rounded-2xl p-6 w-full max-w-lg shadow-2xl relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 text-text-muted hover:text-text-light transition-colors"
        >
          <X size={20} />
        </button>

        {/* Cabeçalho */}
        <h2 className="text-xl font-display font-bold text-text-light pr-8">
          Preferências de Privacidade
        </h2>
        <p className="text-text-muted text-sm leading-relaxed mt-2">
          Escolha quais categorias de cookies você permite. Suas preferências serão salvas conforme a LGPD.
        </p>

        {/* Categorias */}
        <ul className="mt-4">
          {/* Estritamente Necessários */}
          <li className="flex items-start justify-between gap-4 py-4 border-b border-dark-border">
            <div>
              <p className="text-text-light text-sm font-semibold">Estritamente Necessários</p>
              <p className="text-text-muted text-xs mt-0.5 leading-relaxed">
                Essenciais para o funcionamento do site.
              </p>
            </div>
            <Toggle value={true} disabled onChange={() => {}} />
          </li>

          {/* Analíticos */}
          <li className="flex items-start justify-between gap-4 py-4 border-b border-dark-border">
            <div>
              <p className="text-text-light text-sm font-semibold">Analíticos</p>
              <p className="text-text-muted text-xs mt-0.5 leading-relaxed">
                Permitem entender como os visitantes interagem com o site (ex: Google Analytics).
              </p>
            </div>
            <Toggle value={analytics} onChange={setAnalytics} />
          </li>

          {/* Marketing */}
          <li className="flex items-start justify-between gap-4 py-4">
            <div>
              <p className="text-text-light text-sm font-semibold">Marketing</p>
              <p className="text-text-muted text-xs mt-0.5 leading-relaxed">
                Usados para rastrear visitantes em sites para exibir anúncios relevantes.
              </p>
            </div>
            <Toggle value={marketing} onChange={setMarketing} />
          </li>
        </ul>

        {/* Rodapé */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-2">
          <Button
            variant="primary"
            className="flex-1"
            onClick={() => onSave({ analytics, marketing })}
          >
            Salvar Preferências
          </Button>
          <Button
            variant="ghost"
            className="flex-1 border-brand-cyan"
            onClick={() => onSave({ analytics: true, marketing: true })}
          >
            Aceitar Todos
          </Button>
        </div>
      </div>
    </div>
  );
}
