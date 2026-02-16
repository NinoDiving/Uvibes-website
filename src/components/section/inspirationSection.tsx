import FetchCitation from "@/services/citation/citation";
import Link from "next/link";
import "../../styles/section/inspirationSection.css";
import Button from "../button/Button";

export default function InspirationSection() {
  const { citation, authorCitation, roleAuthor } = FetchCitation();

  return (
    <div>
    <article className="inspiration-section-container">
      <section className="inspiration-section">
        <div className="inspiration-section-text">
          <h2>Uvibes, la solution qui réinvente les interactions</h2>
          <p className="inspiration-text inspiration-text-citation">
            {citation}
          </p>
          <p className="inspiration-text inspiration-text-autor">
            {authorCitation}
          </p>
          <p className="inspiration-text inspiration-text-work">{roleAuthor}</p>
        </div>
      </section>
    </article>
      <div className="cta-button-container">
        <Link href="/avantages">
          <Button title="Pour tous les collectifs" type="button" />
        </Link>
      </div>
      </div>
  );
}
