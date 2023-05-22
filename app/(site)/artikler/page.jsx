import { getArticles } from "../../../sanity/fragments/sanity-utils";
import RenderArticles from "../components/RenderArticles";

export default async function Page({ params, searchParams }) {
  const articles = await getArticles(params.slug);
  //sort articles by date
  articles.sort((a, b) => {
    return new Date(b._createdAt) - new Date(a._createdAt);
  });

  //   const searchPramsTag = Array.isArray(searchParams.tag) ? searchParams.tag : [searchParams.tag];
  const tags = [...new Set(articles.map((article) => article.tags).flat())];

  return (
    <div className="pt-[140px]">
      <h1>Test</h1>
      <RenderArticles tags={tags} articles={articles} />
    </div>
  );
}
