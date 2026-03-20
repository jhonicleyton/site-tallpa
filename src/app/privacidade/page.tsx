import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Tallpa Solutions coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <section className="relative min-h-screen flex items-start bg-dark-bg overflow-hidden">
      {/* Glow principal — topo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(0,194,255,0.13) 0%, rgba(0,123,255,0.07) 45%, transparent 72%)",
        }}
      />
      {/* Glow secundário — canto inferior direito */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(0,123,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full z-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-text-light mb-2">
          Política de Privacidade
        </h1>
        <p className="text-text-muted text-sm mb-8 font-sans">
          Última atualização: Março de 2026.
        </p>

        <p className="text-text-muted leading-relaxed mb-4 font-sans">
          A Tallpa Solutions leva sua privacidade a sério. Esta política descreve como
          coletamos, usamos e protegemos seus dados pessoais em conformidade com a Lei
          Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
        </p>

        <h2 className="text-xl font-display font-semibold text-text-light mt-8 mb-4">
          1. Dados que Coletamos
        </h2>
        <p className="text-text-muted leading-relaxed mb-4 font-sans">
          Coletamos informações quando você preenche formulários em nosso site ou
          interage com nossa plataforma. Isso inclui:
        </p>
        <ul className="list-disc list-inside text-text-muted space-y-2 mb-4 ml-4">
          <li>Nome</li>
          <li>E-mail corporativo</li>
          <li>Telefone</li>
          <li>Nome da Empresa</li>
          <li>Mensagem enviada via formulário de diagnóstico</li>
          <li>Dados de navegação (Cookies) para otimização do site</li>
        </ul>

        <h2 className="text-xl font-display font-semibold text-text-light mt-8 mb-4">
          2. Como Usamos Seus Dados
        </h2>
        <p className="text-text-muted leading-relaxed mb-4 font-sans">
          Os dados captados são utilizados exclusivamente para:
        </p>
        <ul className="list-disc list-inside text-text-muted space-y-2 mb-4 ml-4">
          <li>Entrar em contato para agendar diagnósticos e apresentar propostas comerciais</li>
          <li>Melhorar a experiência de navegação e performance do nosso site</li>
          <li>Cumprir obrigações legais ou regulatórias</li>
        </ul>

        <h2 className="text-xl font-display font-semibold text-text-light mt-8 mb-4">
          3. Compartilhamento de Dados
        </h2>
        <p className="text-text-muted leading-relaxed mb-4 font-sans">
          A Tallpa Solutions não vende ou comercializa seus dados pessoais. Compartilhamos
          dados apenas com provedores de infraestrutura essenciais (como Vercel e Supabase)
          que possuem rígidos protocolos de segurança e atuam como operadores sob nossas
          diretrizes.
        </p>

        <h2 className="text-xl font-display font-semibold text-text-light mt-8 mb-4">
          4. Uso de Cookies
        </h2>
        <p className="text-text-muted leading-relaxed mb-4 font-sans">
          Utilizamos cookies para entender como você interage com nosso portal e oferecer
          uma experiência otimizada. Você pode gerenciar suas preferências de cookies
          através do banner exibido na primeira visita ou nas configurações do seu
          navegador.
        </p>

        <h2 className="text-xl font-display font-semibold text-text-light mt-8 mb-4">
          5. Seus Direitos (LGPD)
        </h2>
        <p className="text-text-muted leading-relaxed mb-4 font-sans">
          Você tem o direito de solicitar o acesso, correção, anonimização ou exclusão
          dos seus dados pessoais armazenados em nossos bancos de dados a qualquer momento.
        </p>

        <h2 className="text-xl font-display font-semibold text-text-light mt-8 mb-4">
          6. Contato
        </h2>
        <p className="text-text-muted leading-relaxed mb-4 font-sans">
          Para exercer seus direitos ou tirar dúvidas sobre esta Política, entre em contato
          com nosso Encarregado de Proteção de Dados (DPO) através do e-mail:{" "}
          <a
            href="mailto:contato@tallpa.com.br"
            className="text-brand-cyan hover:underline"
          >
            contato@tallpa.com.br
          </a>
          .
        </p>
      </div>
    </section>
  );
}
