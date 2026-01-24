"use client";
import { Check, X } from "lucide-react";
import "../../styles/features/PricingMobile.css";
import { features, plans } from "./PricingData";

// Swiper imports
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function PricingMobile() {
  return (
    <div className="pricing-mobile-container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView={1.25}
        centeredSlides={true}
        initialSlide={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="pricing-swiper"
      >
        {plans.map((plan, planIndex) => (
          <SwiperSlide key={planIndex}>
            <div className="pricing-card" style={{ borderColor: plan.color }}>
              <div className="pricing-card-header" style={{ backgroundColor: plan.color }}>
                <h3 className="pricing-card-title">{plan.name}</h3>
              </div>
              <div className="pricing-card-body">
                <p className="pricing-card-description">{plan.description}</p>
                <p className="pricing-card-price">{plan.price}</p>
                <p className="pricing-card-price-note">(frais de mise en place inclus)</p>
                
                <ul className="pricing-card-features">
                  {features.slice(2).map((feature, featureIndex) => {
                     const isAvailable = plan.values[featureIndex];
                     return (
                        <li key={featureIndex} className={`pricing-feature-item ${isAvailable ? 'available' : 'unavailable'}`}>
                            <span className="feature-icon">
                                {isAvailable ? <Check size={20} className="icon-check" /> : <X size={20} className="icon-cross" />}
                            </span>
                            <span className="feature-text">{feature.name}</span>
                        </li>
                     );
                  })}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
