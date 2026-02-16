import {
  BookOpen,
  Calendar,
  CalendarClock,
  ChevronDown,
  ChevronUp,
  Compass,
  Eye,
  Gamepad2,
  GraduationCap,
  Lightbulb,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import "../../styles/funct/functOrganisation.css";
import OrgaCard from "../cards/orgaCard";

export default function FunctOrganisation() {
  const [showThemes, setShowThemes] = useState(false);

  return (
    <section className="funct-orga-container">
      <h2 className="title-h2-orange">
        Comment ça marche pour votre organisation ?
      </h2>

      <article className="funct-orga-card">
        <h3 className="title-text">Vous définissez</h3>

        <div className="funct-orga-section">
          <div
            className="funct-orga-icon-container"
            onClick={() => setShowThemes(!showThemes)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowThemes(!showThemes);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="funct-orga-icon">
              <Compass size={"32px"} style={{ color: "var(--mainColor)" }} />
            </div>
            <p className="title-text-orange" style={{ flexGrow: 1 }}>
              Les thématiques abordées par votre collectif
            </p>
            {showThemes ? (
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span className="text" style={{color: "var(--pinkUvibes)"}}>voir moins</span>
                <ChevronUp size={24} style={{ color: "var(--mainColor)" }} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span className="text" style={{color: "var(--pinkUvibes)"}}>voir plus</span>
                <ChevronDown size={24} style={{ color: "var(--mainColor)" }} />
              </div>
            )}
          </div>

          {showThemes && (
            <div className="funct-orga-card-container funct-orga-card-container--visible">
              <OrgaCard
                icone={
                  <Sparkles size="50%" style={{ color: "var(--bckgColor)" }} />
                }
                title="Réflexions et loisirs"
                description="Aspirations individuelles, séries TV, modèles de réussite, etc.."
                content1="Quelle intrigue de film ou série vous a marqué.e ?"
                content2="Qu'est ce qui vous inspire le plus dans votre quotidien ?"
              />
              <OrgaCard
                icone={
                  <GraduationCap
                    size="50%"
                    style={{ color: "var(--bckgColor)" }}
                  />
                }
                title="Domaines d'expertise et de formation"
                description="Réflexions autour de sujets professionnels et/ou pédagogiques"
                content1="Comment vois-tu le management du futur ?"
                content2="Have you ever innovated in your daily life ?"
              />

              <OrgaCard
                icone={
                  <Lightbulb size="50%" style={{ color: "var(--bckgColor)" }} />
                }
                title="Astuces et bons plans"
                description="Partage d'expériences et conseils pratiques"
                content1="Des recettes de saisons ?"
                content2="Vos conseils pour bien gérer son argent ?"
              />
              <OrgaCard
                icone={
                  <Calendar size="50%" style={{ color: "var(--bckgColor)" }} />
                }
                title="Evénements et actualités"
                description="Octobre rose, cultures locales, Tour de France, etc."
                content1="L'aspect le plus impressionnant du Tour de France ?"
                content2="La tradition préférée de votre territoire ?"
              />
              <OrgaCard
                icone={
                  <Gamepad2 size="50%" style={{ color: "var(--bckgColor)" }} />
                }
                title="Jeux et mises en situation"
                description="Participez à des challenges en équipe et/ou glissez-vous dans un rôle"
                content1="Trouvez six métiers commençant par la lettre M"
                content2="Inventez une histoire en alternant une phrase chacun"
              />
              <OrgaCard
                icone={
                  <MessageSquare
                    size="50%"
                    style={{ color: "var(--bckgColor)" }}
                  />
                }
                title="Débats"
                description="Mettre en commun différents points de vue"
                content1="Bienfaits et limites du progrès"
                content2="Influenceurs : stars ou imposteurs ?"
              />
            </div>
          )}
        </div>

        <div className="funct-orga-section">
          <div className="funct-orga-icon-container">
            <div className="funct-orga-icon">
              <CalendarClock
                size={"32px"}
                style={{ color: "var(--mainColor)" }}
              />
            </div>
            <p className="title-text-orange">
              Le moment et la durée des expériences intéractives
            </p>
          </div>
        </div>

        <div className="funct-orga-section">
          <div className="funct-orga-icon-container">
            <div className="funct-orga-icon">
              <Eye size={"32px"} style={{ color: "var(--mainColor)" }} />
            </div>
            <p className="title-text-orange">
              Les sujets sur lesquels vous souhaitez obtenir la vision de votre
              collectif
            </p>
          </div>
        </div>

        <div className="funct-orga-section">
          <div className="funct-orga-icon-container">
            <div className="funct-orga-icon">
              <BookOpen size={"32px"} style={{ color: "var(--mainColor)" }} />
            </div>
            <p className="title-text-orange">
              Les ressources explorées par votre collectif
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
