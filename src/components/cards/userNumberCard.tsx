import FetchCitation from "@/services/citation/citation";
import "../../styles/cards/userNumberCard.css";

export default function UserNumberCard() {
  const { userNumber, userNumberTitle } = FetchCitation();
  return (
    <div className="user-number-wrapper">
      <article className="user-number-card-container">
        <div className="user-number-card">
          <h2>{userNumberTitle}</h2>
          <p className="user-number">{userNumber}</p>
        </div>
      </article>
    </div>
  );
}
