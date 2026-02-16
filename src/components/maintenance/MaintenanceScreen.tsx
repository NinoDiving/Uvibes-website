import Image from "next/image";
import Link from "next/link";

export default function MaintenanceScreen() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fff",
        color: "var(--mainColor)",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "300px", marginBottom: "40px" }}>
        <Image
          src="/images/Logo UVIBES.png"
          alt="Uvibes Logo"
          width={200}
          height={60}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1
        style={{
          fontSize: "2.5rem",
          fontFamily: "var(--title-font)",
          marginBottom: "20px",
        }}
      >
        Site en maintenance
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "40px",
          color: "#000",
          maxWidth: "600px",
        }}
      >
        Nous effectuons actuellement des améliorations sur notre plateforme pour
        mieux vous servir. Nous serons de retour très bientôt !
      </p>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          href="mailto:contactuvibes@gmail.com"
          style={{
             padding: "10px 20px",
             backgroundColor: "var(--mainColor)",
             color: "#fff",
             textDecoration: "none",
             borderRadius: "var(--border-radius)",
             fontWeight: "bold",
             fontFamily: "var(--title-font)"
          }}
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
