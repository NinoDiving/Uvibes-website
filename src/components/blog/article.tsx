"use client";

import { sanitizeText } from "@/services/blog/sanitize";
import "@/styles/blog/article.css";
import type { Article } from "@/types/article/article";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ArticleContent({ article }: { article: Article }) {
  const router = useRouter();

  const title = sanitizeText(article.title.rendered);
  const content = sanitizeText(article.content.rendered);

  function parse(rendered: string): import("react").ReactNode {
    return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
  }

  return (
    <main className="article-main">
      <p className="article-back-button" onClick={() => router.push("/blog")}>
        <ArrowLeft /> Retour
      </p>
      <article className="article-detail-container">
        {article.featured_image && (
          <Image
            src={article.featured_image}
            alt={title}
            width={400}
            height={400}
          />
        )}
        <div className="article-title">{title}</div>
        <div className="article-content">{parse(content)}</div>
      </article>
      <p className="article-back-button" onClick={() => router.push("/blog")}>
        <ArrowLeft /> Retour
      </p>
    </main>
  );
}
