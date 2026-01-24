
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

  // Fetch Title Post if tag exists
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
      // Typically description might be content or title. 
      // Based on user request "modifier le titre et la description", I'll assume:
      // title-homepage -> Title (e.g. "(Re)Donnez vie...")
      // subtitle-homepage -> Description (e.g. "La première innovation...")
      // I'll use the post TITLE for the text to make it easy to edit in the WP interface list.
      description = posts[0].title.rendered;
    }
  }

  return { title, description };
}
