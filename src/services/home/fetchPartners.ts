
type PartnerPost = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_image: string;
  _embedded: {
    "wp:featuredmedia": [
      {
        source_url: string;
      }
    ];
  };
  tags: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface PartnerLogo {
  id: number;
  src: string;
  alt: string;
}

export async function fetchPartners(): Promise<PartnerLogo[]> {
  const tagRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/tags?slug=partner-logo`);
  const tags = await tagRes.json();
  const tagId = tags[0]?.id;

  if (!tagId) return [];

  // Fetch up to 100 partners
  const postsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?tags=${tagId}&per_page=100&_embed`);
  const posts = await postsRes.json();

  return posts.map((post: PartnerPost) => ({
    id: post.id,
    src: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/placeholder-logo.png", // Fallback if image missing
    alt: post.title.rendered,
  })).filter((partner: PartnerLogo) => partner.src !== "/images/placeholder-logo.png"); // Filter out invalid ones if strict, or keep placeholder
}
