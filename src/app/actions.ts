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
    .insert([{ name, email, company, message }]);

  if (error) {
    return { success: false, error: "Erro ao enviar. Tente novamente." };
  }

  return { success: true };
}
