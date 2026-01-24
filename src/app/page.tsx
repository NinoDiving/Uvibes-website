"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/Footer";
import FloatingMenu from "@/components/menu/Menu";
import FeaturedArticles from "@/components/section/FeaturedArticles";
import FunctSection from "@/components/section/functSection";
import Uvibes from "@/components/uvibes/uvibes";

import UserNumberCard from "@/components/cards/userNumberCard";
import VideoCard from "@/components/cards/videoCard";
import { PartnerCarousel } from "@/components/carousel/PartnerCarousel";
import InspirationSection from "@/components/section/inspirationSection";
import WhyUvibes from "@/components/section/WhyUvibes";
import Testimony from "@/components/testimony/testimony";
import Resize from "@/services/resize/resize";
import mockupHome from "../../public/images/mochupHome.png";
import { BenefitsHomeSection } from "../components/section/BenefitsHomeSection";

import { sanitizeText } from "@/services/blog/sanitize";
import { fetchHomeContent } from "@/services/home/fetchHomeContent";
import { useEffect, useState } from "react";

// ... existing imports

export default function Home() {
  const { isMobile } = Resize();
  const [heroContent, setHeroContent] = useState({
    title: "(Re)Donnez vie à votre collectif",
    description: "La première innovation socio-digitale",
  });

  useEffect(() => {
    const loadContent = async () => {
      try {
        const { title, description } = await fetchHomeContent();
        setHeroContent({
          title: sanitizeText(title),
          description: sanitizeText(description),
        });
      } catch (error) {
        console.error("Failed to load home content", error);
      }
    };
    loadContent();
  }, []);

  return (
    <main>
      <HeroBanner
        subtitle=""
        title={heroContent.title}
        description={heroContent.description}
        image={mockupHome}
        alt="visuel application"
      />
            
      <WhyUvibes />

      <UserNumberCard />
      <VideoCard
        title="Elles y trouvent de la bonne humeur"
        videoSrcDdesktop={"/videos/Lisa-desktop.mp4"}
        videoSrcMobile={"/videos/Lisa-mobile.mp4"}
        width={isMobile ? 300 : 1200}
      />
      <PartnerCarousel />

      <VideoCard
        title="Ils partagent leurs points de vue"
        videoSrcDdesktop={"/videos/Pierre-desktop.mp4"}
        videoSrcMobile={"/videos/Pierre-mobile.mp4"}
        width={isMobile ? 300 : 1200}
      />
      <InspirationSection />
      <VideoCard
        title="Ils créent du lien"
        videoSrcDdesktop={"/videos/Colette-desktop.mp4"}
        videoSrcMobile={"/videos/Colette-mobile.mp4"}
        width={isMobile ? 300 : 1200}
      />
      <Testimony />
      <VideoCard
        title="Ils y trouvent de nouvelles idées"
        videoSrcDdesktop={"/videos/Delphine-desktop.mp4"}
        videoSrcMobile={"/videos/Delphine-mobile.mp4"}
        width={isMobile ? 300 : 1200}
      />
      <FunctSection />
      <VideoCard
        title="Ils élargissent leurs horizons"
        videoSrcDdesktop={"/videos/Nadine-desktop.mp4"}
        videoSrcMobile={"/videos/Nadine-mobile.mp4"}
        width={isMobile ? 300 : 1200}
      />


      <BenefitsHomeSection />
      
      <FeaturedArticles />

      <FloatingMenu />

      <Uvibes />
      <Contact />
      <Footer />
    </main>
  );
}
