"use client";

import { useActionState, useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { submitLead, type LeadState } from "@/app/actions";
import Button, { ButtonLink } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Alert from "@/components/ui/Alert";
import { Help, Input, Label, Textarea } from "@/components/ui/Field";
import { cn } from "@/components/ui/cn";
import { contact, whatsappUrl } from "@/content/site";

const INTERESTS = [
  "Diagnóstico da operação",
  "Sistema sob medida",
  "Dashboards e indicadores",
  "Automação de processo",
  "Ainda não sei",
] as const;

export default function DiagnosticForm() {
  const [state, formAction, isPending] = useActionState<LeadState, FormData>(submitLead, null);
  const [interest, setInterest] = useState<string>("");
  const [startedAt, setStartedAt] = useState<number>(0);

  // Carimbo de tempo definido no cliente: entra na checagem anti-spam.
  useEffect(() => setStartedAt(Date.now()), []);

  const errors = state?.fieldErrors;

  if (state?.status === "success") {
    return (
      <Card variant="stat" className="flex flex-col items-center gap-4 p-8 text-center sm:p-10">
        <CheckCircle2 className="h-12 w-12 text-success" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-white">Recebemos a sua solicitação</h3>
        <p className="max-w-sm text-sm leading-relaxed text-gray-400">
          Você recebe um retorno em até <strong className="text-gray-200">24h úteis</strong> pelo
          canal informado. O primeiro contato é uma conversa de diagnóstico — sem proposta e sem
          compromisso.
        </p>
        <ButtonLink href={whatsappUrl} variant="secondary" size="sm" className="mt-1">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Prefere adiantar pelo WhatsApp?
        </ButtonLink>
      </Card>
    );
  }

  return (
    <Card variant="stat" className="p-6 sm:p-8">
      <form action={formAction} className="flex flex-col gap-6" noValidate>
        <input type="hidden" name="startedAt" value={startedAt} />

        {/* Isca anti-spam — invisível para pessoas, visível para robôs. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Não preencha este campo</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {/* 1 — Interesse */}
        <fieldset>
          <legend className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">
            1. Sobre o que quer conversar?
            <span className="ml-1 text-cyan-400" aria-hidden="true">
              *
            </span>
          </legend>
          <input type="hidden" name="interest" value={interest} />
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={interest === item}
                onClick={() => setInterest(item)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13px] font-medium transition-colors duration-150",
                  interest === item
                    ? "border-cyan-400 bg-cyan-300/10 text-cyan-300"
                    : "border-line text-gray-400 hover:border-line-default hover:text-gray-200",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          {errors?.interest && (
            <Help id="err-interest" error>
              {errors.interest}
            </Help>
          )}
        </fieldset>

        {/* 2 — Identificação */}
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-1 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">
            2. Quem é você?
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name" required>
                Nome
              </Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Como devemos te chamar"
                aria-invalid={Boolean(errors?.name)}
                aria-describedby={errors?.name ? "err-name" : undefined}
              />
              {errors?.name && (
                <Help id="err-name" error>
                  {errors.name}
                </Help>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                name="company"
                autoComplete="organization"
                placeholder="Nome da empresa"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="voce@empresa.com.br"
                aria-invalid={Boolean(errors?.contact)}
                aria-describedby="hint-contato"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone">WhatsApp</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(47) 9 0000-0000"
                aria-invalid={Boolean(errors?.contact)}
                aria-describedby="hint-contato"
              />
            </div>
          </div>
          <Help id="hint-contato" error={Boolean(errors?.contact)}>
            {errors?.contact ?? "Basta um dos dois — usamos o canal que você preferir."}
          </Help>
        </fieldset>

        {/* 3 — Contexto */}
        <fieldset className="flex flex-col gap-1.5">
          <legend className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">
            3. Qual o principal gargalo hoje?
          </legend>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Ex.: o fechamento do mês leva três dias de planilha, e ninguém consegue refazer o cálculo depois."
            aria-describedby="hint-msg"
          />
          <Help id="hint-msg">
            Duas ou três frases bastam. Quanto mais concreto, mais útil é a primeira conversa.
          </Help>
        </fieldset>

        {state?.status === "error" && state.message && (
          <Alert tone="danger" role="alert">
            {state.message}
          </Alert>
        )}

        <div className="flex flex-col gap-3">
          <Button type="submit" size="lg" loading={isPending} className="w-full">
            {isPending ? "Enviando…" : "Solicitar diagnóstico gratuito"}
            {!isPending && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
          </Button>
          <p className="text-center text-xs leading-relaxed text-gray-500">
            Retorno em até 24h úteis. Sem proposta e sem compromisso.
            <br />
            Prefere falar agora?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline-offset-2 hover:underline"
            >
              {contact.phoneLabel}
            </a>
          </p>
        </div>
      </form>
    </Card>
  );
}
