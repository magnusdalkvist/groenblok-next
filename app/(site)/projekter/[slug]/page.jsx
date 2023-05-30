import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject } from "../../../../sanity/fragments/sanity-utils";

export default async function Project({ params, searchParams }) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1>{project?.title}</h1>
      {/* <RenderPortableText content={project?.content} /> */}
      <Link href="/hvad-er-gron-blok">test</Link>
    </div>
  );
}
