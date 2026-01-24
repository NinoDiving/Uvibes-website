import "../../styles/section/whyUvibes.css";

export default function WhyUvibes() {
  return (
    <section className="why-uvibes-section">
      <div className="why-uvibes-container">
        <div className="why-uvibes-text-container">
          <h2 className="title-h2-orange uvibes-title">
            Pourquoi « Uvibes » ?
          </h2>
          <article className="why-uvibes-article">
            <p className="text-regular why-uvibes-text">
              Uvibes est né pour activer la richesse des échanges humains au
              sein des collectifs, en y faisant naître des rencontres
              inattendues.
            </p>
            <p className="text-regular why-uvibes-text">
              “Vibes”, en anglais, évoque ces vibrations, ces sensations que
              l&apos;on ressent quand on se connecte à quelqu’un, notamment une
              personne encore inconnue. Et ce “U”, c’est pour You, celui qui vit
              l&apos;expérience .{" "}
            </p>{" "}
            <p className="text-regular why-uvibes-text">
              Chaque rencontre sur Uvibes est une aventure pour (re)découvrir
              quelqu’un de son collectif autour de questions ouvertes et
              positives. L’émerveillement se crée, et les conversations prennent
              vie.
            </p>
          </article>
        </div>
      </div>
      <video
        src="/videos/Isaline-desktop.mp4"
        muted
        autoPlay
        loop
        width={300}
        className="why-uvibes-video"
      ></video>
    </section>
  );
}
