import { benefitsData } from "../../data/benefits/benefitsData";
import "../../styles/section/BenefitsHomeSection.css";
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

      
    </section>
  );
}
