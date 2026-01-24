import CookieConsent from "@/components/cookieConsent";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
  return (
    <html lang="fr">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-N068M873WC`}
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
              console.log('Google Analytics default consent set to denied');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
