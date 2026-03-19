"use client";

import { useActionState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { submitLead } from "@/app/actions";

const valueProps = [
  "Análise de 60 minutos sem compromisso",
  "Diagnóstico personalizado da sua operação",
  "Proposta técnica e comercial detalhada",
];

export default function LeadCapture() {
  const [state, formAction, isPending] = useActionState(submitLead, null);

  return (
    <section id="contato" className="bg-dark-bg py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Coluna esquerda — copy */}
          <div>
            <p className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-3">
              Diagnóstico Gratuito
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light leading-tight">
              Pronto para escalar{" "}
              <span className="text-gradient-electric">
                sua operação?
              </span>
            </h2>
            <p className="mt-4 text-text-muted text-lg leading-relaxed">
              Agende uma conversa com nossos especialistas e descubra como
              sistemas, automação e dados podem eliminar seus gargalos.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {valueProps.map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-muted text-sm">
                  <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0" strokeWidth={1.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita — formulário */}
          <GlassCard className="p-6 sm:p-8">
            {state?.success ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <CheckCircle className="w-12 h-12 text-brand-cyan" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-text-light">
                  Mensagem enviada!
                </h3>
                <p className="text-text-muted text-sm">
                  Obrigado! Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-text-muted text-xs font-medium uppercase tracking-wide">
                      Nome <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="rounded-lg bg-dark-bg border border-dark-border px-4 py-2.5 text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-brand-cyan/60 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-text-muted text-xs font-medium uppercase tracking-wide">
                      E-mail <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="rounded-lg bg-dark-bg border border-dark-border px-4 py-2.5 text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-brand-cyan/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-text-muted text-xs font-medium uppercase tracking-wide">
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nome da sua empresa"
                    className="rounded-lg bg-dark-bg border border-dark-border px-4 py-2.5 text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-brand-cyan/60 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-text-muted text-xs font-medium uppercase tracking-wide">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Descreva brevemente o seu desafio ou projeto..."
                    className="rounded-lg bg-dark-bg border border-dark-border px-4 py-2.5 text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-brand-cyan/60 transition-colors resize-none"
                  />
                </div>

                {state?.error && (
                  <p className="text-red-400 text-xs">{state.error}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isPending}
                  className="mt-1 w-full justify-center gap-2"
                >
                  {isPending ? (
                    "Enviando..."
                  ) : (
                    <>
                      Solicitar Diagnóstico Gratuito
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-text-muted text-xs text-center">
                  Sem spam. Retornamos em até 24h úteis.
                </p>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
