
export async function fetchHomeContent() {
  const [titleRes, subtitleRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/tags?slug=title-homepage`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/tags?slug=subtitle-homepage`),
  ]);

  const [titleTags, subtitleTags] = await Promise.all([titleRes.json(), subtitleRes.json()]);
  
  const titleTagId = titleTags[0]?.id;
  const subtitleTagId = subtitleTags[0]?.id;

  let title = "(Re)Donnez vie à votre collectif";
  let description = "La première innovation socio-digitale";

  if (titleTagId) {
    const postsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?tags=${titleTagId}&per_page=1`);
    const posts = await postsRes.json();
    if (posts.length > 0) {
      title = posts[0].title.rendered;
    }
  }

  // Fetch Subtitle/Description Post if tag exists
  if (subtitleTagId) {
    const postsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?tags=${subtitleTagId}&per_page=1`);
    const posts = await postsRes.json();
    if (posts.length > 0) {
      description = posts[0].title.rendered;
    }
  }

  return { title, description };
}
