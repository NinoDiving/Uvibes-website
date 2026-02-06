import CookieConsent from "@/components/cookieConsent";
import MaintenanceWrapper from "@/components/maintenance/MaintenanceWrapper";
import { getMaintenanceStatus } from "@/lib/maintenanceState";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Uvibes",
  description:
    //prettier-ignore
    "L’outil numérique pour apprendre, progresser et renforcer le bien-être au sein des collectifs.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMaintenanceMode = getMaintenanceStatus();

  return (
    <html lang="fr">
      <head>
        {/* ... scripts ... */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                debug_mode: true
              });
              console.log('Google Analytics initialized with denied consent');
            `,
          }}
        />
      </head>
      <body>
        <MaintenanceWrapper isMaintenanceMode={isMaintenanceMode}>
            {children}
            <CookieConsent />
        </MaintenanceWrapper>
      </body>
    </html>
  );
}
