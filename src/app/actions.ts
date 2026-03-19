"use server";

import { supabase } from "@/lib/supabase";

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

  return { success: true };
}
