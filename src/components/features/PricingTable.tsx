"use client";
import usePricing from "@/services/pricing/usePricing";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import "../../styles/features/PricingTable.css";
import { features, plans } from "./PricingData";
import PricingMobile from "./PricingMobile";

export default function PricingTable() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const pricingData = usePricing();

  const mergedPlans = plans.map((plan) => {
    const dynamicPrice = pricingData.find(
      (p) => p.planName === plan.name.toUpperCase()
    )?.price;
    return { ...plan, price: dynamicPrice || "-" }; // Fallback to "-" if loading or not found
  });

  useEffect(() => {
    // Only executed on the client
    setRootElement(document.getElementById("root") || document.body);
  }, []);

  return (
    <div className="pricing-container">
      <PricingMobile />
      <div className="pricing-table-wrapper">
        <table className="pricing-table">
          <thead>
            <tr>
              <th className="feature-header"></th>
              {mergedPlans.map((plan, index) => (
                <th key={index} className="plan-header" style={{ color: plan.color }}>
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Objectif Row */}
            <tr className="row-text">
              <td className="feature-name">Objectif</td>
              {mergedPlans.map((plan, index) => (
                <td key={index} className="plan-text">
                  {plan.description}
                </td>
              ))}
            </tr>
            {/* Prix Row */}
            <tr className="row-price">
              <td className="feature-name">Prix <span className="small-text">(frais de mise en place inclus)</span></td>
              {mergedPlans.map((plan, index) => (
                <td key={index} className="plan-price">
                  {plan.price}
                </td>
              ))}
            </tr>
            {/* Boolean Features */}
            {features.slice(2).map((feature, featureIndex) => (
              <tr key={featureIndex} className={featureIndex % 2 === 0 ? "row-even" : "row-odd"}>
                <td className="feature-name">{feature.name}</td>
                {mergedPlans.map((plan, planIndex) => (
                  <td key={planIndex} className="plan-value">
                    {plan.values[featureIndex] ? (
                      <Check className="icon-check" size={24} />
                    ) : (
                      <X className="icon-cross" size={24} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pricing-cta-banner">
        <div className="cta-content">
          <h3>Vous avez des besoins spécifiques et êtes une petite structure ? Parlons-en.</h3>
          <div className="cta-buttons">
            {rootElement && (
                <PopupButton
                    url="https://calendly.com/uvibescommunication/30min"
                    rootElement={rootElement}
                    text="Prendre RDV"
                    className="btn-cta secondary"
                />
            )}
            <button  className="btn-cta primary">
              <Link href="/#contact">NOUS CONTACTER</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
