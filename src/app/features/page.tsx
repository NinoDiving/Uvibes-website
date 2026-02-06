"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import { PartnerBanner } from "@/components/banner/partnerBanner";
import { FeaturesCard } from "@/components/cards/FeaturesCard";
import Footer from "@/components/footer/Footer";
import FunctOrganisation from "@/components/funct/functOrganisation";
import FloatingMenu from "@/components/menu/Menu";
import { AppointmentSection } from "@/components/section/appointmentSection";

import PricingTable from "@/components/features/PricingTable";
import mockupFeature from "../../../public/images/mockupFeature.png";
export default function FeaturesPage() {
  return (
    <>
      <main>
        <HeroBanner
          subtitle=""
          title="Uvibes transforme le quotidien des échanges"
          description="Au sein de tous les collectifs : étudiants,
          salariés, seniors, voisins, demandeurs d’emploi, parents isolés, aidants familiaux, personnes en
          parcours de soin ..."
          image={mockupFeature}
          alt="Fonctionnalités de l'application"
        />
        <nav>
          <FloatingMenu />
        </nav>

        <FunctOrganisation />
        <FeaturesCard />
        <PricingTable />
        <PartnerBanner />
        <AppointmentSection />
      </main>
      <Footer />
    </>
  );
}
