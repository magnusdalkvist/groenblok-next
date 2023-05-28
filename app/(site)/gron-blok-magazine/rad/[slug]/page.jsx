import { getAdvice } from "../../../../../sanity/fragments/sanity-utils";
import { notFound } from "next/navigation";
import RenderPortableText from "../../../components/RenderPortableText";
import Link from "next/link";

export default async function Advice({ params, searchParams }) {
  const advice = await getAdvice(params.slug);

  if (!advice) {
    notFound();
  }

  return (
    <div>
      <h1>{advice?.title}</h1>
      {/* <RenderPortableText content={advice?.content} /> */}
      <Link href="/hvad-er-gron-blok">test</Link>
    </div>
  );
}
