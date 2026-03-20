"use client";

import { useSyncExternalStore } from "react";
import Button from "@/components/ui/Button";

const CONSENT_KEY = "tallpa-cookie-consent";
const CONSENT_EVENT = "tallpa-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

function getSnapshot() {
  return !localStorage.getItem(CONSENT_KEY);
}

function getServerSnapshot() {
  return false;
}

export default function CookieBanner() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  const dismiss = () => {
    localStorage.setItem(CONSENT_KEY, "dismissed");
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-dark-card/80 backdrop-blur-md border border-dark-border rounded-2xl px-6 py-5 shadow-lg">
        <div className="flex-1">
          <p className="text-text-light font-semibold mb-1">Controle sua Privacidade</p>
          <p className="text-text-muted text-sm leading-relaxed">
            Utilizamos cookies para otimizar sua experiência e analisar o tráfego conforme nossa{" "}
            <span className="text-brand-cyan">Política de Privacidade</span>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button variant="ghost" onClick={dismiss}>Preferências</Button>
          <Button variant="primary" onClick={accept}>Aceitar</Button>
        </div>
      </div>
    </div>
  );
}
