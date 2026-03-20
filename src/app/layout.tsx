import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://tallpa.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Tallpa Solutions",
    default: "Tallpa Solutions | Software House Premium",
  },
  description:
    "Desenvolvimento de sistemas sob demanda, automações com IA e soluções de BI para empresas que precisam de tecnologia que realmente funciona.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Tallpa Solutions",
    title: "Tallpa Solutions | Software House Premium",
    description:
      "Desenvolvimento de sistemas sob demanda, automações com IA e soluções de BI para empresas que precisam de tecnologia que realmente funciona.",
    images: [
      {
        url: "/images/tallpa-dashboard-mockup.svg",
        width: 1200,
        height: 630,
        alt: "Tallpa Solutions — Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tallpa Solutions | Software House Premium",
    description:
      "Desenvolvimento de sistemas sob demanda, automações com IA e soluções de BI.",
    images: ["/images/tallpa-dashboard-mockup.svg"],
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
      className={`${inter.variable} ${manrope.variable} dark h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-text-light">
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
