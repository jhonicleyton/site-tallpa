"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const raw = localStorage.getItem("tallpa-cookie-preferences");
        if (raw) {
          const prefs = JSON.parse(raw);
          setHasConsent(prefs.analytics === true);
        } else {
          setHasConsent(false);
        }
      } catch {
        setHasConsent(false);
      }
    };

    checkConsent();
    window.addEventListener("cookieConsentUpdated", checkConsent);
    return () => window.removeEventListener("cookieConsentUpdated", checkConsent);
  }, []);

  if (!hasConsent || !GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
