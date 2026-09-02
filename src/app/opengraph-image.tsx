import { ImageResponse } from "next/og";

export const alt = "Tallpa Solutions: sistemas, indicadores e automação para operações";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG image gerada como PNG no build.
 * Substitui o antigo /images/*.svg, que não renderiza em
 * WhatsApp, LinkedIn nem Twitter.
 *
 * Atenção: ImageResponse (Satori) só suporta flexbox. Nada de grid.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#050814",
          backgroundImage:
            "radial-gradient(900px 600px at 15% 0%, rgba(29,211,255,0.16), transparent 60%), radial-gradient(900px 700px at 100% 100%, rgba(24,64,255,0.18), transparent 60%)",
        }}
      >
        {/* Marca: os três pilares da logo + nome */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="72" height="72" viewBox="0 0 484 500">
            <defs>
              <linearGradient id="g" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4AF8FF" />
                <stop offset="45%" stopColor="#1BD8FF" />
                <stop offset="100%" stopColor="#1840FF" />
              </linearGradient>
            </defs>
            <g transform="translate(-90 -80)">
              <polygon fill="url(#g)" points="110,188 172,156 172,344 110,312" />
              <polygon fill="url(#g)" points="198,138 286,98 286,402 198,362" />
              <polygon fill="url(#g)" points="312,188 374,156 374,344 312,312" />
            </g>
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.1 }}>
              Tallpa Solutions
            </span>
            <span
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#1DD3FF",
                letterSpacing: 5,
                textTransform: "uppercase",
              }}
            >
              Inteligência Operacional
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 62,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 950,
            }}
          >
            Menos controles dispersos. Mais dados para decidir.
          </span>
          <span style={{ fontSize: 26, color: "#9A9FB4", maxWidth: 900, lineHeight: 1.4 }}>
            Sistemas sob medida, indicadores confiáveis e automação, construídos a partir da
            realidade da sua operação.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", width: 120, height: 4, background: "#1BD8FF" }} />
          <span style={{ fontSize: 22, color: "#787D98" }}>tallpa.com.br</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
