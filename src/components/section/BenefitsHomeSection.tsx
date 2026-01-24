import Link from "next/link";
import { benefitsData } from "../../features/benefits/benefitsData";
import "../../styles/section/BenefitsHomeSection.css";
import Button from "../button/Button";
import { BenefitsHomeItem } from "./benefitsHomeItem";

export function BenefitsHomeSection() {
  return (
    <section className="benefices-home-section-container">
      <div className="benefices-home-header-and-data">
        <h2 className="title-h2-orange">
          <span id="benefices-home-title-word">Transformez</span> le quotidien
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
        <Link href="/features">
          <Button title="Pour tous les collectifs" type="button" />
        </Link>
      </div>
    </section>
  );
}
