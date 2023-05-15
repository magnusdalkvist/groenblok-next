import { getPage } from "../../../sanity/sanity-utils";
import { notFound } from "next/navigation";
import RenderModules from "../components/RenderModules";

export default async function Page({ params, searchParams }) {
  const page = await getPage(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div>
      <h1>{page?.title}</h1>
      <RenderModules modules={page.modules} />
    </div>
  );
}
