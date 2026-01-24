export const features = [
  { name: "Objectif", type: "text" },
  { name: "Prix (frais de mise en place inclus)", type: "price" },
  { name: "1 000 Expériences interactives (10 mn) / mois", type: "boolean" },
  { name: "Sondages", type: "boolean" },
  { name: "Baromètre bien-être", type: "boolean" },
  { name: "Statistiques & pilotage", type: "boolean" },
  { name: "Logo de votre entreprise", type: "boolean" },
  { name: "Kit de communication", type: "boolean" },
  { name: "Actualités internes", type: "boolean" },
  { name: "Networking (cartes de visite digitales)", type: "boolean" },
  { name: "Brainstorming (enquêtes post vibes)", type: "boolean" },
  { name: "Employer branding (invités extérieurs)", type: "boolean" },
  { name: "Soft skills (parcours d'entrainement)", type: "boolean" },
];

export const plans = [
  {
    name: "VIBES CONNECTION",
    color: "var(--mainColor)", // #fd6e00
    description: "Favorisez les interactions et suivez l'état d'esprit de votre collectif",
    values: [true, true, true, true, false, false, false, false, false, false, false],
  },
  {
    name: "VIBES PREMIUM",
    color: "var(--yellowUvibes)", // #feb000
    description: "Renforcez la visibilité de votre marque et l'efficacité de votre communication interne",
    values: [true, true, true, true, true, true, true, false, false, false, false],
  },
  {
    name: "VIBES BOOST",
    color: "var(--pinkUvibes)", // #d90a5c
    description: "Boostez la dynamique de votre collectif avec des outils de travail innovants",
    values: [true, true, true, true, true, true, true, true, true, true, true],
  },
];
