"use client";

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import "../styles/cookie.css";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      // Restore consent if already accepted
      if (typeof window !== "undefined" && window.gtag && GA_ID) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
        // Config is optional here if already in layout, but safe to re-run or rely on layout's config picking up the updated consent
        console.log("Google Analytics consent restored: granted");
      }
    }
  }, [GA_ID]);

  const acceptCookies = () => {
    Cookies.set("cookie-consent", "accepted", { expires: 365 });
    setShowBanner(false);
    
    if (typeof window !== "undefined" && window.gtag && GA_ID) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
      // Force a new config signal to ensure the page view is registered with the new consent
      window.gtag("config", GA_ID, {
         page_path: window.location.pathname,
         debug_mode: true
      });
      console.log("Cookie consent accepted: GA granted");
    }
  };

  const refuseCookies = () => {
    Cookies.set("cookie-consent", "refused", { expires: 365 });
    setShowBanner(false);
    
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
      console.log("Cookie consent refused: GA denied");
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-container">
        <p className="cookie-text">
          Nous utilisons des cookies pour améliorer votre expérience sur notre
          site. En continuant à naviguer, vous acceptez notre utilisation des
          cookies.
        </p>
        <div className="cookie-buttons">
          <button onClick={acceptCookies} className="accept-button">
            Accepter
          </button>
          <button onClick={refuseCookies} className="refuse-button">
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
