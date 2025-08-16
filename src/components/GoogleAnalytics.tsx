"use client";
import Script from "next/script";

export default function GoogleAnalytics({ NEXT_PUBLIC_GA_ID }: { NEXT_PUBLIC_GA_ID: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}
