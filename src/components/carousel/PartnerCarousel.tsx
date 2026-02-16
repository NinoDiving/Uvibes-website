import { fetchPartners, PartnerLogo } from "@/services/home/fetchPartners";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import eklore from "../../../public/images/eklore.png";
import fetedesvoisins from "../../../public/images/LogoFeteDesVoisins.png";
import university from "../../../public/images/upvd_logo_hori_rvb.png";
import "../../styles/carousel/PartnerCarousel.css";



export function PartnerCarousel() {
  const [partnerLogos, setPartnerLogos] = useState<PartnerLogo[]>([
    { id: 1, src: university.src, alt: "University of Perpignan" },
    { id: 3, src: eklore.src, alt: "Eklore" },
    { id: 4, src: fetedesvoisins.src, alt: "Fête des voisins" },
    // Defaults to avoid empty carousel initially or on error
  ]);
  const [, setIsFetched] = useState(false);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const partners = await fetchPartners();
        if (partners.length > 0) {
            setPartnerLogos(partners);
            setIsFetched(true);
        }
      } catch (error) {
        console.error("Failed to load partners", error);
      }
    };
    loadPartners();
  }, []);

  return (
    <section className="partner-carousel">
      <h2 className="title-h2-orange partner-carousel-title">
        Nos Partenaires
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={2000}
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={{
          400: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {partnerLogos.map((logo) => (
          <SwiperSlide key={logo.id} className="swiper-slide">
            <div className="slide-wrapper">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="partner-logo"
                width={300}
                height={300}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* If fetched logos are just a few, Swiper might bug with loop=true. 
          Usually usually needs at least slidesPerView * 2 slides. 
          For now assuming client will add enough or it just duplicates. */}
    </section>
  );
}
