import { benefitsData } from "../../features/benefits/benefitsData";
import "../../styles/section/BenefitsHomeSection.css";
import { BenefitsHomeItem } from "./benefitsHomeItem";
import Button from "../button/Button";
import Link from "next/link";

export function BenefitsHomeSection() {
  return (
    <section className="benefices-home-section-container">
      <div className="benefices-home-header-and-data">
        <h2 className="title-h2-orange">
          <span id="benefices-home-title-word">Transformez</span> votre
          quotidien
        </h2>

        <div className="benefices-home-data-container">
          <div className="benefices-home-data">
            {benefitsData.map((item) => (
              <BenefitsHomeItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="benefices-home-button-container">
        <Link href="/avantages">
          <Button title="Découvrir les avantages" type="button" />
        </Link>
      </div>
    </section>
  );
}
