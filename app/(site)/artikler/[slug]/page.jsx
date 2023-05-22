import { getArticle } from "../../../../sanity/fragments/sanity-utils";
import { notFound } from "next/navigation";
import RenderPortableText from "../../components/RenderPortableText";
import Link from "next/link";

export default async function Article({ params, searchParams }) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <h1>{article?.title}</h1>
      <RenderPortableText content={article?.content} />
      <Link href="/hvad-er-gron-blok">hej</Link>
    </div>
  );
}
