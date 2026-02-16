import { fetchFeaturedArticles } from "@/services/blog/featuredArticles";
import { getExcerpt } from "@/services/blog/getExcerpt";
import { sanitizeText } from "@/services/blog/sanitize";
import { Article } from "@/types/article/article";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/cards/blogHomepage.css";

// Reusing global component styles
// If new specific styles are needed, we can create a new CSS file.
// For now, adhering to "reprend le design des cards du blog".

export default function FeaturedArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const fetchedArticles = await fetchFeaturedArticles();
        // Sanitize content
        const sanitizedArticles = fetchedArticles.map((article: Article) => ({
            ...article,
            title: {
              ...article.title,
              rendered: sanitizeText(article.title.rendered),
            },
            content: {
              ...article.content,
              rendered: sanitizeText(article.content.rendered),
            },
            date: new Date(article.date),
          }));
        setArticles(sanitizedArticles);
      } catch (error) {
        console.error("Failed to load featured articles", error);
      }
    };
    loadArticles();
  }, []);

  if (articles.length === 0) return null;

  return (
    <section className="article-section featured-articles" style={{ padding: "50px 0" }}>
      <h2 className="title-section">
        Article mis en avant
      </h2>
      <div className="article-container">
      {articles.map((article) => (
        <article key={article.id} className="blog-article uvibes-article">
           {article.featured_image && (
                <div className="article-image-wrapper">
                    <Image
                        src={article.featured_image}
                        alt={article.title.rendered}
                        fill
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>
            )}
            
          <div className="article-card-content">
            <h3>{article.title.rendered}</h3>
            <p>{getExcerpt(article.content.rendered, 150)}</p>
            {/* Show author if available locally or via ACF, handling generic fallback */}
            {article.acf?.auteur_custom && (
                <p><strong>{article.acf.auteur_custom}</strong></p>
            )}
            <p>{article.date.toLocaleDateString()}</p>
            <Link href={`/blog/${article.slug}`}>Lire la suite</Link>
          </div>
        </article>
      ))}
      </div>
    </section>
  );
}
