import DOMPurify from "dompurify";
import { useCallback, useEffect, useState } from "react";

export interface PricingItem {
  planName: string;
  price: string;
}

export default function usePricing() {
  const [pricingData, setPricingData] = useState<PricingItem[]>([]);

  const sanitizeText = useCallback((text: string): string => {
    if (typeof window === 'undefined') return text;
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
    const slug = 'pricing'; 

    fetch(`${apiUrl}/wp-json/wp/v2/tags?slug=${slug}`)
      .then((res) => res.json())
      .then((tags) => {
        const tagId = tags[0]?.id;
        if (!tagId) {
          console.warn("Pricing tag not found");
          setPricingData([]);
          return;
        }

        return fetch(`${apiUrl}/wp-json/wp/v2/posts?tags=${tagId}`)
          .then((res) => res.json())
          .then((data) => {
            const mappedPricing = data.map(
              (item: { title: { rendered: string }; content: { rendered: string } }) => ({
                planName: sanitizeText(item.title.rendered).toUpperCase(), // Ensure uppercase to match static data
                price: sanitizeText(item.content.rendered),
              })
            );
            setPricingData(mappedPricing);
          });
      })
      .catch((error) => {
        console.error("Error fetching pricing:", error);
        setPricingData([]);
      });
  }, [sanitizeText]);

  return pricingData;
}
