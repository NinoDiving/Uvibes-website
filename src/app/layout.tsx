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
    "Uvibes est une application web dédiée aux échanges vidéo autour de thématiques variées. Elle permet aux utilisateurs de partager leurs expériences et leurs connaissances à travers des discussions enrichissantes. Grâce à Uvibes, apprenez des autres et contribuez à une communauté où le savoir se transmet par l'interaction.",
  icons: {
    icon: "/images/iconUvibes.png",
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
