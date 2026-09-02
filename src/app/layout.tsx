import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import SchemaMarkup from "@/components/SchemaMarkup";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const BASE_URL = site.url;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Tallpa Solutions",
    default: "Tallpa Solutions | Sistemas, indicadores e automação para operações",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: site.name,
    title: "Tallpa Solutions | Sistemas, indicadores e automação para operações",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tallpa Solutions | Sistemas, indicadores e automação",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-bg text-white">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <SchemaMarkup />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
