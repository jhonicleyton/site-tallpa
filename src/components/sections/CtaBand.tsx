import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { cta, whatsappUrl } from "@/content/site";

export default function CtaBand() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="surface-topline overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-bg-1 to-bg-2/50 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
            Vamos olhar a sua operação <span className="text-gradient">antes de propor qualquer coisa</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-300">
            Uma conversa de diagnóstico. Você descreve o gargalo, nós apontamos o que dá para
            resolver — inclusive quando a resposta é que não precisa de sistema agora.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={cta.href} size="lg">
              {cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={whatsappUrl} variant="secondary" size="lg">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar no WhatsApp
            </ButtonLink>
          </div>
          <p className="mt-5 text-xs text-gray-500">{cta.promise}</p>
        </div>
      </Container>
    </section>
  );
}
