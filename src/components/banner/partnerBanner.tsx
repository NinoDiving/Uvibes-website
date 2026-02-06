import "../../styles/banner/partnerBanner.css";

import PartnerGroup from "./PartnerGroup";

export function PartnerBanner() {
  return (
    <div className="partner-banner-container">
      <div className="partner-banner-content">
        <h2 className="title-h2-white">
          Prêt à un boost d&apos;énergie positive ?
        </h2>
        <div className="partner-banner-text">
          <p className="partner-banner-description">
            Rejoignez les organisations qui utilisent déjà Uvibes pour
            encourager et valoriser l&apos;intelligence émotionnelle au sein de
            leur collectif
          </p>
          <div className="partner-info">
            <PartnerGroup />
            <p className="number-user">L’inattendu commence ici</p>
          </div>
        </div>
      </div>
    </div>
  );
}
