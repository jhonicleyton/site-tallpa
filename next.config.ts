import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  /**
   * As rotas antigas foram consolidadas em /solucoes e /projetos.
   * Redirect permanente (308) preserva o que já está indexado.
   */
  async redirects() {
    return [
      { source: "/sistemas", destination: "/solucoes#sistemas", permanent: true },
      { source: "/ia-automacao", destination: "/solucoes#automacao", permanent: true },
      { source: "/data-bi", destination: "/solucoes#indicadores", permanent: true },
      { source: "/showcase", destination: "/projetos", permanent: true },
    ];
  },
};

export default nextConfig;
