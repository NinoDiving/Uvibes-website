import { useEffect, useState, useCallback } from "react";
import DOMPurify from "dompurify";
import logoUvibes from "../../../public/images/Logo VI blanc.png";
import type { TeamProps } from "@/types/team/teamProps";

export default function useTeamByTag(slug: string) {
  const [team, setTeam] = useState<TeamProps[]>([]);

  const sanitizeText = useCallback((text: string): string => {
    const tempDiv = document.createElement("p");
    tempDiv.innerHTML = text;
    return DOMPurify.sanitize(tempDiv.innerHTML, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    })
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }, []);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!slug) return;

    fetch(`${apiUrl}/wp-json/wp/v2/tags?slug=${slug}`)
      .then((res) => res.json())
      .then((tags) => {
        const tagId = tags[0]?.id;
        if (!tagId) {
          setTeam([]);
          return;
        }

        return fetch(`${apiUrl}/wp-json/wp/v2/posts?tags=${tagId}&_embed`)
          .then((res) => res.json())
          .then((data) => {
            const mappedTeam = data.map(
              (item: {
                title: { rendered: string };
                content: { rendered: string };
                slug: string;
                _embedded?: {
                  "wp:featuredmedia"?: { source_url?: string }[];
                };
              }) => {
                const image =
                  item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  logoUvibes;

                return {
                  name: sanitizeText(item.title.rendered),
                  position: sanitizeText(item.content.rendered),
                  image,
                  alt: `Photo de ${sanitizeText(item.title.rendered)}`,
                  team: slug,
                };
              }
            );
            setTeam(mappedTeam);
          });
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'équipe :", error);
        setTeam([]);
      });
  }, [slug, sanitizeText]);

  return team;
}
