"use server";

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import { contact } from "@/content/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** Erros por campo, para marcar aria-invalid na interface. */
  fieldErrors?: Partial<Record<"name" | "contact" | "interest", string>>;
} | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** 8 a 13 dígitos cobre fixo com DDD e celular com DDI. */
const PHONE_RE = /^\d{8,13}$/;

/** Tempo mínimo, em ms, entre a página carregar e o envio. Robô responde na hora. */
const MIN_FILL_MS = 2500;

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // ── Anti-spam: campo isca (invisível) e tempo de preenchimento ──
  if (formData.get("website")?.toString().trim()) {
    // Robô preencheu o honeypot. Responde sucesso para não ensinar o robô.
    return { status: "success" };
  }
  const startedAt = Number(formData.get("startedAt"));
  if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_MS) {
    return {
      status: "error",
      message: "Envio muito rápido. Confira os dados e tente novamente.",
    };
  }

  const interest = formData.get("interest")?.toString().trim() || null;
  const name = formData.get("name")?.toString().trim() || "";
  const company = formData.get("company")?.toString().trim() || null;
  const email = formData.get("email")?.toString().trim() || "";
  const phoneRaw = formData.get("phone")?.toString().trim() || "";
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  const message = formData.get("message")?.toString().trim() || null;

  // ── Validação ──
  const fieldErrors: NonNullable<LeadState>["fieldErrors"] = {};

  if (!interest) {
    fieldErrors.interest = "Escolha o assunto para começarmos no lugar certo.";
  }
  if (name.length < 2) {
    fieldErrors.name = "Informe o seu nome.";
  }
  if (!email && !phoneDigits) {
    fieldErrors.contact = "Informe um e-mail ou um WhatsApp para podermos responder.";
  } else if (email && !EMAIL_RE.test(email)) {
    fieldErrors.contact = "Esse e-mail parece incompleto. Confira o endereço.";
  } else if (!email && phoneDigits && !PHONE_RE.test(phoneDigits)) {
    fieldErrors.contact = "Esse telefone parece incompleto. Inclua o DDD.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Confira os campos destacados.", fieldErrors };
  }

  const lead = {
    name,
    email: email || null,
    phone: phoneRaw || null,
    company,
    message,
    interest,
  };

  // ── Persistência ──
  // Falha aqui NÃO interrompe o fluxo: o lead ainda chega por e-mail.
  // A versão anterior abortava no erro do Supabase e perdia o contato.
  let stored = true;
  try {
    const { error } = await supabase.from("leads").insert([lead]);
    if (error) {
      // A coluna `interest` pode ainda não existir no banco (ver README).
      // Nesse caso, reenvia sem ela. O interesse segue no e-mail.
      const missingColumn = /interest/i.test(error.message);
      if (missingColumn) {
        const withoutInterest = { ...lead };
        delete (withoutInterest as Partial<typeof lead>).interest;
        const retry = await supabase.from("leads").insert([withoutInterest]);
        stored = !retry.error;
        if (retry.error) console.error("[submitLead] Supabase (retry):", retry.error);
      } else {
        stored = false;
        console.error("[submitLead] Supabase:", error);
      }
    }
  } catch (err) {
    stored = false;
    console.error("[submitLead] Supabase (exceção):", err);
  }

  // ── Notificação ──
  let notified = false;
  try {
    const row = (label: string, value: string) =>
      `<tr><td style="padding:8px 0;color:#9A9FB4;font-size:13px;width:110px;vertical-align:top">${label}</td>` +
      `<td style="padding:8px 0;white-space:pre-wrap">${value}</td></tr>`;

    await resend.emails.send({
      from: "Tallpa Site <site@tallpa.com.br>",
      to: contact.email,
      replyTo: email || undefined,
      subject: `Diagnóstico solicitado: ${name}${company ? ` · ${company}` : ""}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#050814;color:#fff;border-radius:12px">
          <h2 style="color:#1BD8FF;margin:0 0 4px">Nova solicitação de diagnóstico</h2>
          <p style="color:#585D78;font-size:12px;margin:0 0 20px">tallpa.com.br</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            ${row("Interesse", escapeHtml(interest ?? "—"))}
            ${row("Nome", escapeHtml(name))}
            ${row("Empresa", escapeHtml(company ?? "—"))}
            ${row("E-mail", email ? `<a href="mailto:${escapeHtml(email)}" style="color:#4AF8FF">${escapeHtml(email)}</a>` : "—")}
            ${row("WhatsApp", escapeHtml(phoneRaw || "—"))}
            ${row("Gargalo", escapeHtml(message ?? "—"))}
          </table>
          ${
            stored
              ? ""
              : `<p style="margin:20px 0 0;padding:12px;border-radius:8px;background:rgba(255,165,50,.1);color:#FFA532;font-size:12px">
                   ⚠ Não foi possível gravar este lead no banco. Ele existe apenas neste e-mail.
                 </p>`
          }
        </div>
      `,
    });
    notified = true;
  } catch (err) {
    console.error("[submitLead] Resend:", err);
  }

  // Só é erro para o usuário se os dois canais falharem.
  if (!stored && !notified) {
    return {
      status: "error",
      message: `Não conseguimos registrar o seu contato agora. Tente novamente em instantes ou fale direto no WhatsApp ${contact.phoneLabel}.`,
    };
  }

  return { status: "success" };
}
