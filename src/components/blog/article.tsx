"use client";

import { sanitizeText } from "@/services/blog/sanitize";
import "@/styles/blog/article.css";
import type { Article } from "@/types/article/article";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function ArticleContent({ slug }: { slug: string }) {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?slug=${slug}`
      );
      const posts = await res.json();
      if (!posts.length) return;
      const post = posts[0];

      let featuredImage = null;
      if (post.featured_media) {
        const mediaRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/media/${post.featured_media}`
        );
        const media = await mediaRes.json();
        featuredImage = media.source_url;
      }

      setArticles([
        {
          ...post,
          featured_image: featuredImage,
          title: {
            ...post.title,
            rendered: sanitizeText(post.title.rendered),
          },
          content: {
            ...post.content,
            rendered: sanitizeText(post.content.rendered),
          },
        },
      ]);
    };

    if (slug) fetchArticle();
  }, [slug]);

  if (!articles.length) return <div>Chargement...</div>;

  const article = articles[0];
  if (!article) return <div>Article non trouvé</div>;

  function parse(rendered: string): import("react").ReactNode {
    return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
  }

  return (
    <article className="article-container">
      {article.featured_image && (
        <Image
          src={article.featured_image}
          alt={article.title.rendered}
          width={400}
          height={400}
        />
      )}
      <div className="article-content">{parse(article.content.rendered)}</div>
    </article>
  );
}
