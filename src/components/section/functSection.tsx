import { LinkStyled } from "@/styles/button/LinkStyled";
import { BookOpenText, MessagesSquare, SmilePlus } from "lucide-react";
import "../../styles/section/functSection.css";
import Button from "../button/Button";
import FunctCards from "../cards/functCards";

export default function FunctSection() {
  return (
    <section className="funct-section">
      <h2 className="title-h2">Découvrir des points de vue inattendus</h2>
      <div className="funct-container">
        <FunctCards
          icone={
            <SmilePlus size="110%" style={{ color: "var(--mainColor)" }} />
          }
          title={"Echanges"}
          subtitle={
            "Partager des témoignages positifs sur un nombre infini de sujets"
          }
        />
        <FunctCards
          icone={
            <MessagesSquare size="100%" style={{ color: "var(--mainColor)" }} />
          }
          title={"Participation"}
          subtitle={"Recueillir régulièrement les avis de son collectif"}
        />
        <FunctCards
          icone={
            <BookOpenText size="100%" style={{ color: "var(--mainColor)" }} />
          }
          title={"Ressources"}
          subtitle={"Accéder à une médiathèque de savoirs sur-mesure "}
        />
      </div>
      <div className="funct-button-container">
        <LinkStyled href="/features">
          <Button title="Une expérience engageante" type="button" />
        </LinkStyled>
      </div>
    </section>
  );
}
