import { getPage } from "../../../sanity/sanity-utils";
import { notFound } from "next/navigation";
import RenderModules from "../components/RenderModules";

export default async function Page({ params, searchParams }) {
  const page = await getPage(params.slug);

  if (!page) {
    return <div>hej</div>;
  }

  return <RenderModules modules={page.modules} />;
}
