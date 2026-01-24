import "@/styles/avantages/avantagesContentDesktop.css";
import {
  Brain,
  Building,
  CircleGauge,
  DotIcon,
  Handshake,
  Heart,
  Home,
  School,
  Smile,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";
import AvantagesCard from "../cards/avantagesCard";
import LastAvantagesCard from "../cards/LastAvantagesCard";

export default function AvantagesContentDesktop() {
  const [openTab, setOpenTab] = useState<"entreprise" | "ecole" | "collectif">(
    "entreprise"
  );

  return (
    <article className="avantages-desktop-container">
      <div className="avantages-button">
        <div className="button">
          <button onClick={() => setOpenTab("entreprise")} type="button">
            <Building size={100} />
          </button>
          <p>Entreprise</p>
        </div>
        <div className="button">
          <button onClick={() => setOpenTab("ecole")} type="button">
            <School size={100} />
          </button>
          <p>Ecole</p>
        </div>
        <div className="button">
          <button onClick={() => setOpenTab("collectif")} type="button">
            <Heart size={100} />
          </button>
          <p>Collectif</p>
        </div>
      </div>
      {openTab === "entreprise" && (
        <section className="avantages-section">
          <hgroup>
            <h3>Entreprise</h3>
            <h4>
              Dans le monde du travail, Uvibes stimule le bien-être individuel
              pour renforcer la performance collective
            </h4>
          </hgroup>
          <div className="avantages-section-content">
            <AvantagesCard
              icone={
                <CircleGauge
                  style={{ color: "var(--secondaryColor)" }}
                  size={50}
                />
              }
              title="Performance : améliorer sa prise de décision et renforcer l’engagement"
              stats="En France, 93 % des salariés sont non engagés ou activement désengagés (Etude Gallup mars 2025)"
              content="Uvibes stimule la réflexion, offre une meilleure connaissance de son collectif et suscite l'adhésion collective"
            />
            <AvantagesCard
              icone={
                <UsersIcon size={50} style={{ color: "var(--mainColor)" }} />
              }
              title="Lien d’appartenance : créer une culture commune"
              stats="Pour 62 % des dirigeants et salariés, la culture d’entreprise est le principal frein à la transformation (Rapport The digital culture challenge)."
              content="Uvibes renforce le lien affectif qui relie l’entreprise à ses équipes"
            />
            <LastAvantagesCard
              icone={
                <Handshake
                  size={50}
                  style={{ color: "var(--secondaryColor)" }}
                />
              }
              title="RSE : augmenter le bien-être individuel et collectif"
              stats={
                <ul>
                  <div className="last-avantages-card-content">
                    <DotIcon
                      size={24}
                      style={{ color: "var(--secondaryColor)" }}
                    />
                    <li className="last-avantages-list">
                      Satisfaire le besoin relationnel de ses collaborateurs
                    </li>
                  </div>
                  <div className="last-avantages-card-content">
                    <DotIcon
                      size={24}
                      style={{ color: "var(--secondaryColor)" }}
                    />
                    <li className="last-avantages-list">
                      Alléger les managers de la gestion émotionnelle de leurs
                      équipes
                    </li>
                  </div>
                  <div className="last-avantages-card-content">
                    <DotIcon
                      size={24}
                      style={{ color: "var(--secondaryColor)" }}
                    />
                    <li className="last-avantages-list">
                      Favoriser une intégration rapide et harmonieuse des
                      nouveaux arrivants
                    </li>
                  </div>
                </ul>
              }
            />
          </div>
        </section>
      )}
      {openTab === "ecole" && (
        <section className="avantages-section">
          <hgroup>
            <h3>Etablissement d&apos;enseignement</h3>
            <h4>
              Dans la sphère éducative, Uvibes améliore la sociabilité des
              apprenants
            </h4>
          </hgroup>
          <div className="avantages-section-content">
            <AvantagesCard
              icone={
                <UsersIcon
                  style={{ color: "var(--secondaryColor)" }}
                  size={50}
                />
              }
              title="Santé mentale : soutenir le bien-être des jeunes"
              stats="41% des étudiants présentent des symptômes dépressifs contre 26% avant le COVID (Etude Université Bordeaux, 2024)."
              content="Uvibes encourage des échanges bienveillants entre apprenants de tous horizons. Il élimine les facteurs de cyberharcèlement et de dévalorisation de soi."
            />
            <AvantagesCard
              icone={<Brain size={50} style={{ color: "var(--mainColor)" }} />}
              title="Soft skills : développer les savoir-agir relationnels"
              stats="62 % des managers sont prêts à recruter un collaborateur sur la base de ses soft skills, même si ses compétences techniques ne correspondent pas entièrement au poste (Etude cadremploi 2020)"
              content="Uvibes est le premier service qui offre un espace d'entraînement continu et de valorisation des compétences interpersonnelles."
            />
            <LastAvantagesCard
              icone={
                <Handshake
                  size={50}
                  style={{ color: "var(--secondaryColor)" }}
                />
              }
              title="Appartenance : renforcer le lien avec ses apprenants"
              stats={
                <ul>
                  <div className="last-avantages-card-content">
                    <DotIcon
                      size={24}
                      style={{ color: "var(--secondaryColor)" }}
                    />
                    <li className="last-avantages-list">
                      Booster leur participation et disposer d&apos;informations
                      inédites
                    </li>
                  </div>
                  <div className="last-avantages-card-content">
                    <DotIcon
                      size={24}
                      style={{ color: "var(--secondaryColor)" }}
                    />
                    <li className="last-avantages-list">
                      Répondre à leur envie d&apos;échanges gamifiés et
                      bienveillants
                    </li>
                  </div>
                  <div className="last-avantages-card-content">
                    <DotIcon
                      size={24}
                      style={{ color: "var(--secondaryColor)" }}
                    />
                    <li className="last-avantages-list">
                      Faire vivre son réseau alumni
                    </li>
                  </div>
                  <div className="last-avantages-card-content">
                    <DotIcon
                      size={24}
                      style={{ color: "var(--secondaryColor)" }}
                    />
                    <li className="last-avantages-list">
                      Initier des mentorats enrichissants
                    </li>
                  </div>
                </ul>
              }
            />
          </div>
        </section>
      )}
      {openTab === "collectif" && (
        <section className="avantages-section">
          <hgroup>
            <h3>Collectif</h3>
            <h4>
              Dans la sphère du prendre soin, Uvibes est une nouvelle
              respiration
            </h4>
          </hgroup>
          <div className="avantages-section-content">
            <AvantagesCard
              icone={
                <UsersIcon
                  style={{ color: "var(--secondaryColor)" }}
                  size={50}
                />
              }
              title="Lien social : rompre l’isolement et stimuler les capacités cognitives"
              stats="Entretenir une vie sociale dynamique réduit de 38% le risque de démence (Rush University, 2025)"
              content="Uvibes nous redonne l'envie et la facilité de discuter"
            />
            <AvantagesCard
              icone={<Smile size={50} style={{ color: "var(--mainColor)" }} />}
              title="Epanouissement : révéler chacun et cultiver le vivre-ensemble"
              stats="Parler à des inconnus augmente l'estime de soi et transforme notre perception de l'autre (Etude 2014 Epley et Shroeder)"
              content="En mettant en avant l’unicité de chacun, Uvibes renforce la confiance en soi et en son entourage"
            />
            <AvantagesCard
              icone={
                <Home style={{ color: "var(--secondaryColor)" }} size={50} />
              }
              title="Transmission : créer des communautés d’entraide"
              stats="Partager une expérience commune, c'est mieux comprendre ce qu'on vit"
              content="Uvibes valorise les savoirs issus de l'expérience et permet de créer des échanges entre pairs"
            />
          </div>
        </section>
      )}
    </article>
  );
}
