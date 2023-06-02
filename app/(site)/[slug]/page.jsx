import { getPage } from "../../../sanity/fragments/sanity-utils";
import { notFound } from "next/navigation";
import RenderModules from "../components/RenderModules";
import RenderBlocks from "../components/RenderBlocks";

export default async function Page({ params, searchParams }) {
  const page = await getPage(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="p-4 max-w-[1200px] mx-auto flex flex-col gap-5 text-darkGreen">
      <RenderBlocks blocks={page?.blocks} />
      <RenderModules modules={page?.modules} />
    </div>
  );
}
