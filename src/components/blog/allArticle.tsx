import BlogExperienceArticle from "@/services/blog/blogExperienceArticle";
import { getExcerpt } from "@/services/blog/getExcerpt";
import "@/styles/blog/blogSection.css";
import type { Article } from "@/types/article/article";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BlogEducationArticle from "../../services/blog/blogEducationArticle";
import BlogEntrepriseArticle from "../../services/blog/blogEntrepriseArticle";
import BlogScienceNSociety from "../../services/blog/blogScienceNSociety";
import BlogUvibesArticle from "../../services/blog/blogUvibesArticle";
import BlogVulnerabilityArticle from "../../services/blog/blogVulnerabilityArticle";
export default function AllArticle() {
  const [allArticles, setAllArticle] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 9;
  const { entrepriseArticle } = BlogEntrepriseArticle();
  const { educationArticle } = BlogEducationArticle();
  const { scienceArticles } = BlogScienceNSociety();
  const { vulnerabilityArticles } = BlogVulnerabilityArticle();
  const { uvibesArticles } = BlogUvibesArticle();
  const { experienceArticles } = BlogExperienceArticle();
  const router = useRouter();
  useEffect(() => {
    const fetchAllArticle = async () => {
      try {
        const fetchEntrepriseArticle = await entrepriseArticle;
        const fetchEducationArticle = await educationArticle;
        const fetchScienceNSocietyArticle = await scienceArticles;
        const fetchVulnerabilityArticle = await vulnerabilityArticles;
        const fetchUvibesArticle = await uvibesArticles;
        const fetchExperienceArticle = await experienceArticles;

        const combinedArticles = [
          ...fetchEntrepriseArticle,
          ...fetchEducationArticle,
          ...fetchScienceNSocietyArticle,
          ...fetchVulnerabilityArticle,
          ...fetchUvibesArticle,
          ...fetchExperienceArticle,
        ];

        // Trier par date décroissante (les plus récents en premier)
        const sortedArticles = combinedArticles.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setAllArticle(sortedArticles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllArticle();
  }, [
    entrepriseArticle,
    educationArticle,
    scienceArticles,
    vulnerabilityArticles,
    uvibesArticles,
    experienceArticles,
  ]);

  const filteredArticles = selectedCategory
    ? allArticles.filter((article) => article.tags.slug === selectedCategory)
    : allArticles;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="article-section">
      <select
        name="category"
        id="categories"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="">Toutes les catégories</option>
        <option value="science-et-societe">Science et Société</option>
        <option value="experiences-inattendues">Expériences inattendues</option>
        <option value="entreprise-article">Entreprise</option>
        <option value="education-article">Education</option>
        <option value="personnes-sensibles-aux-echanges">
          Collectifs sensibles aux échanges
        </option>
        <option value="uvibes-article">Uvibes</option>
      </select>

      {currentArticles.map((article) => (
        <article
          key={article.id}
          className={`blog-article ${article.tags.slug}`}
          onClick={() => router.push(`/blog/${article.slug}`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              router.push(`/blog/${article.slug}`);
            }
          }}
        >
          <Image
            src={article.featured_image}
            alt={article.title.rendered}
            width={200}
            height={200}
          />
          <div className="article-card-content">
            <h3>{article.title.rendered}</h3>
            <p>{getExcerpt(article.content.rendered, 240)}</p>
            <p>
              <strong>{article.acf.auteur_custom}</strong>
            </p>
            <p>{article.date.toLocaleDateString()}</p>
            <Link href={`/blog/${article.slug}`}>Lire la suite</Link>
          </div>
        </article>
      ))}
      <div className="pagination-controls">
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </section>
  );
}
