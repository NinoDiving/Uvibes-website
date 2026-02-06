import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://uvibes.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/uvibes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/features`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/avantages`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mention-legale`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/conditions-dutilisation`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politique-de-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  let blogPosts: MetadataRoute.Sitemap = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?per_page=100&_fields=slug,modified`,
      { next: { revalidate: 3600 } }
    );

    if (res.ok) {
      const posts = await res.json();
      blogPosts = posts.map(
        (post: { slug: string; modified: string }) => ({
          url: `${BASE_URL}/blog/${post.slug}`,
          lastModified: new Date(post.modified),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        })
      );
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des articles pour le sitemap:", error);
  }

  return [...staticPages, ...blogPosts];
}
