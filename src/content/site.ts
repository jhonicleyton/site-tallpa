/**
 * Fonte única dos dados institucionais.
 * Antes, estes valores estavam duplicados em Footer, SchemaMarkup e páginas.
 * Alterar aqui atualiza o site inteiro, incluindo o JSON-LD.
 */

export const site = {
  name: "Tallpa Solutions",
  shortName: "Tallpa",
  url: "https://tallpa.com.br",
  tagline: "Inteligência operacional, dados e sistemas sob medida",
  description:
    "Diagnosticamos operações, transformamos dados em indicadores confiáveis e construímos os sistemas que a sua equipe usa todo dia.",
  locale: "pt-BR",
  region: "SC",
  country: "BR",
} as const;

export const contact = {
  email: "contato@tallpa.com.br",
  phone: "+5547997769646",
  phoneLabel: "+55 47 9 9776-9646",
  whatsappMessage:
    "Olá! Vi o site da Tallpa e gostaria de solicitar um diagnóstico da minha operação.",
} as const;

export const whatsappUrl = `https://wa.me/${contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const social = {
  instagram: "https://www.instagram.com/tallpasolutions",
  linkedin: "https://www.linkedin.com/company/tallpa",
  github: "https://github.com/tallpa",
} as const;

/** CTA único do site — decisão de projeto, ver PRD §7. */
export const cta = {
  label: "Solicitar diagnóstico gratuito",
  labelShort: "Diagnóstico gratuito",
  href: "/contato",
  promise: "Retorno em até 24h úteis. Sem proposta e sem compromisso.",
} as const;

export const nav = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;
