"use client";

import { HeroBanner } from "@/components/banner/heroBanner";
import Footer from "@/components/footer/Footer";
import FloatingMenu from "@/components/menu/Menu";
import { AppointmentSection } from "@/components/section/appointmentSection";
import TeamSection from "@/components/section/TeamSection";
import HelloAssoDon from "@/components/uvibes/HelloAssoDon";
import Resize from "@/services/resize/resize";
import { DotIcon } from "lucide-react";
import Image from "next/image";
import logoUvibes from "../../../public/images/Logo VI blanc.png";
import logoEclatense from "../../../public/images/LogoEclatens.png";
import uvibesTeam from "../../../public/images/TeamUvibes.jpg";
import "../../styles/page/uvibes.css";

export default function uvibes() {
  const { isMobile } = Resize();
  return (
    <>
      <HeroBanner
        subtitle=""
        title="Qui sommes-nous ?"
        description="Découvrez l'histoire de Uvibes, notre vision et les personnes qui donnent vie à cette dynamique innovante de renouveau relationnel"
        image={logoUvibes}
        alt="Fonctionnalités de l'application"
      />
      <nav>
        <FloatingMenu />
      </nav>
      <main>
        <section className="uvibes-aboutUs uvibes-container">
          <h2 className="title-h2-orange uvibes-title">
            La naissance de l’idée
          </h2>
          <p className="text">
            Et si on se parlait vraiment ? <br />
            <br />
            La plus longue étude menée par Harvard montre que la qualité de nos
            relations est le premier facteur de bonheur (Vaillant, 2002). Sur
            les réseaux sociaux traditionnels, les algorithmes nous relient à
            ceux qui pensent comme nous. Dans la vraie vie, on reste entre
            groupes familiers, on commente plus qu’on ne dialogue, et petit à
            petit... on perd la richesse de la diversité humaine. <br />
            <br />
            Chez Uvibes, nous croyons à :
          </p>
          <ul>
            <div className="uvibes-list">
              <DotIcon size={24} style={{ color: "var(--mainColor)" }} />
              <li className="text">La magie des témoignages</li>
            </div>
            <div className="uvibes-list">
              <DotIcon size={24} style={{ color: "var(--mainColor)" }} />
              <li className="text">Au partage des expériences personnelles</li>
            </div>
            <div className="uvibes-list">
              <DotIcon size={24} style={{ color: "var(--mainColor)" }} />
              <li className="text">Et à la richesse des visions nouvelles.</li>
            </div>
          </ul>
          <p className="text" style={{ paddingTop: 10 }}>
            Au sein d’une université, d’une entreprise, ou de tout autre
            collectif, beaucoup aimeraient échanger ainsi, mais n’osent pas.{" "}
            <br />
            Uvibes facilite ces rencontres inattendues, par un jeu de questions
            ouvertes et positives.
            <br />
            <br />
            Parce que c’est en allant vers l’inconnu que naissent les plus
            belles conversations.
          </p>

          <section className="uvibes-container">
            <h2 className="title-h2-orange uvibes-title">Sa concrétisation</h2>
            <TeamSection />
          </section>
          <h2 className="title-h2-orange uvibes-title">
            Notre engagement éthique
          </h2>
          <ul style={{ paddingLeft: 20 }}>
            <li className="text" style={{ paddingBottom: 5 }}>
              Un service digital respectueux, pensé pour la qualité des
              discussions, l’inclusion et la confidentialité des données.
            </li>
            <li className="text" style={{ paddingBottom: 5 }}>
              Une conduite de projet alignée avec nos valeurs, basée sur
              l’écoute, la collaboration, et la responsabilité environnementale.
            </li>
            <li className="text" style={{ paddingBottom: 5 }}>
              Des partenariats responsables, choisis pour leur transparence,
              leur impact positif et leur engagement sociétal.
            </li>
          </ul>
          <p className="text" style={{ paddingTop: 5 }}>
            Explorez la rubrique « Uvibes » de notre blog pour en savoir plus
            sur nos principes éthiques et leur mise en œuvre concrète.
          </p>
        </section>
        <section className="uvibes-container ">
          <h2 className="title-h2-orange uvibes-title">Le portage du projet</h2>
          <div className="uvibes-portage">
            <article className="uvibes-eclatens-card">
              <Image
                src={logoEclatense}
                alt="team-staff"
                width={500}
                height={500}
                className="uvibes-eclatens-logo"
              />
              <h3 className="title-h3 uvibes-title">Un modèle non lucratif</h3>
              <p className="text">
                Tous les bénéfices générés par Uvibes sont réinvestis dans le
                projet ou dans d’autres initiatives portées par
                l&apos;association
              </p>
            </article>
          </div>
        </section>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: isMobile ? "30dvh" : "60vh",
          }}
        >
          <Image
            src={isMobile ? uvibesTeam : uvibesTeam}
            alt="visuel équipe Uvibes"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
            loading="lazy"
          />
        </div>

        <section className="uvibes-contact-container">
          <div className="uvibes-contact-text">
            <h2 className="title-h2-white uvibes-title">
              Rejoignez l&apos;aventure Uvibes
            </h2>
            <p className="text-white">
              Prenez part à une dynamique qui réinvente nos façons d’interagir
              en ouvrant notre esprit à des visions nouvelles
            </p>
          </div>
          <div className="uvibes-contact-button-container">
            <a
              href="mailto:contactuvibes@gmail.com"
              className="uvibes-contact-button"
            >
              Nous contacter
            </a>
            <a
              href="mailto:contactuvibes@gmail.com"
              className="uvibes-contact-button"
            >
              Devenir partenaire
            </a>
            <HelloAssoDon />
          </div>
        </section>
        <AppointmentSection />
      </main>
      <Footer />
    </>
  );
}
