import ArticleContent from "@/components/blog/article";
import "@/styles/blog/article.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?slug=${slug}`
  );
  const data = await res.json();
  const post = data[0];

  if (!post) return { title: "Article introuvable" };

  const yoast = post.yoast_head_json;

  return {
    title: yoast?.title,
    description: yoast?.description,
    alternates: {
      canonical: yoast?.canonical,
    },
    openGraph: {
      title: yoast?.og_title,
      description: yoast?.og_description,
      images: yoast?.og_image?.map((img: { url: string }) => img.url),
    },
    twitter: {
      title: yoast?.twitter_title,
      description: yoast?.twitter_description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?slug=${slug}`
  );
  const posts = await res.json();
  const post = posts[0];

  if (!post) return notFound();

  let featuredImage = null;
  if (post?.featured_media) {
    const mediaRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/media/${post.featured_media}`
    );
    const media = await mediaRes.json();
    featuredImage = media.source_url;
  }

  const article = {
    ...post,
    featured_image: featuredImage,
  };

  return <ArticleContent article={article} />;
}
