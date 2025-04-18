import type { BeneficesItemProps } from "@/types/section/BeneficesItemProps";
import "../../styles/section/beneficesHomeItem.css";

export function BeneficesHomeItem({ icon, title }: BeneficesItemProps) {
  return (
    <div className="benefices-home-item-container">
      <div className="benefices-home-item-icon">{icon}</div>
      <h3 className="benefices-home-data-title">{title}</h3>
    </div>
  );
}
