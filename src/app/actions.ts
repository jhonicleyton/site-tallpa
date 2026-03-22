"use server";

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type LeadState = {
  success: boolean;
  error?: string;
} | null;

export async function submitLead(
  _prevState: LeadState,
  formData: FormData
): Promise<LeadState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim() || null;
  const company = formData.get("company")?.toString().trim() || null;
  const message = formData.get("message")?.toString().trim() || null;

  if (!name || !email) {
    return { success: false, error: "Nome e e-mail são obrigatórios." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Informe um e-mail válido." };
  }

  const { error } = await supabase
    .from("leads")
    .insert([{ name, email, phone, company, message }]);

  if (error) {
    console.error("[submitLead] Supabase error:", error);
    return { success: false, error: `Erro: ${error.message} (código: ${error.code})` };
  }

  try {
    await resend.emails.send({
      from: "Tallpa Site <site@tallpa.com.br>",
      to: "contato@tallpa.com.br",
      subject: `Novo Lead: ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0A0C10;color:#ffffff;border-radius:8px">
          <h2 style="color:#00C2FF;margin-top:0">Novo Lead — Tallpa Solutions</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#8A9BC0;font-size:13px;width:100px">Nome</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#8A9BC0;font-size:13px">E-mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#007BFF">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#8A9BC0;font-size:13px">Telefone</td><td style="padding:8px 0">${phone ?? "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#8A9BC0;font-size:13px">Empresa</td><td style="padding:8px 0">${company ?? "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#8A9BC0;font-size:13px">Mensagem</td><td style="padding:8px 0;white-space:pre-wrap">${message ?? "—"}</td></tr>
          </table>
        </div>
      `,
    });
  } catch (emailError) {
    console.error("[submitLead] Resend error:", emailError);
  }

  return { success: true };
}
