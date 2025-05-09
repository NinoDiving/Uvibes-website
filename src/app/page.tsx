"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/Footer";
import FloatingMenu from "@/components/menu/Menu";
import Resize from "@/services/resize/resize";
import { BenefitsHomeSection } from "../components/section/BenefitsHomeSection";
import mockupHome from "../../public/images/mockupHome.png";
import Uvibes from "@/components/uvibes/uvibes";
import FunctSection from "@/components/section/functSection";
import visuelHome1Mobile from "../../public/images/visuel-homepage1.jpg";
import visuelHome1Desktop from "../../public/images/visuelHome1Desktop.jpg";
import visuelHome2Mobile from "../../public/images/visuel-homepage2.jpg";
import visuelHome2Desktop from "../../public/images/visuelHome2Desktop.jpg";
import Image from "next/image";
import InspirationSection from "@/components/section/inspirationSection";
import UserNumberCard from "@/components/cards/userNumberCard";
import { PartnerCarousel } from "@/components/carousel/PartnerCarousel";

export default function Home() {
  const { isMobile } = Resize();
  return (
    <main>
      <HeroBanner
        subtitle=""
        title="Ouvrir notre esprit à des visions nouvelles"
        description="La première application qui transforme notre perception de l'autre et nous inspire"
        imageMobile={mockupHome}
        imageDesktop={mockupHome}
        alt="visuel application"
      />
      <FunctSection />
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: isMobile ? "4/3" : "16/9",
        }}
      >
        <Image
          src={isMobile ? visuelHome1Mobile : visuelHome1Desktop}
          alt="visuel homme avec téléphone"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
      </div>
      <BenefitsHomeSection />
      <InspirationSection />
      {isMobile && <UserNumberCard />}
      <FloatingMenu />
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: isMobile ? "4/3" : "16/9",
        }}
      >
        <Image
          src={isMobile ? visuelHome2Mobile : visuelHome2Desktop}
          alt="visuel homme avec téléphone"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
      </div>
      <PartnerCarousel />
      <Uvibes />
      <Contact />
      <Footer />
    </main>
  );
}
