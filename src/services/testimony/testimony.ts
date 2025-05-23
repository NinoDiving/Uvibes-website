import { TestimonyCardProps } from "@/components/cards/testimonyCard";
import { useEffect, useState } from "react";
import { fetchPostsByTagSlug } from "../blog/article";
import { sanitizeText } from "../blog/sanitize";

export default function FetchTestimony() {
  const [testimonies, setTestimonies] = useState<TestimonyCardProps[]>([]);

  useEffect(() => {
    const fetchTestimony = async () => {
      const testimonies = await fetchPostsByTagSlug("temoignage");
      const processedTestimonies = testimonies.map((testimony) => ({
        id: testimony.id,
        testimony: sanitizeText(testimony.title.rendered),
        auteur_temoignage: sanitizeText(testimony.acf.auteur_temoignage),
        role_et_entreprise_temoignage: sanitizeText(
          testimony.acf.role_et_entreprise_temoignage
        ),
      }));
      setTestimonies(processedTestimonies);
      console.log(processedTestimonies);
    };
    fetchTestimony();
  }, []);

  return testimonies;
}
