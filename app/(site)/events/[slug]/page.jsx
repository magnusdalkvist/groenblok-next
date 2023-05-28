import { notFound } from "next/navigation";
import Link from "next/link";
import { getEvent } from "../../../../sanity/fragments/sanity-utils";

export default async function Event({ params, searchParams }) {
  const event = await getEvent(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div>
      <h1>{event?.title}</h1>
      {/* <RenderPortableText content={event?.content} /> */}
      <Link href="/hvad-er-gron-blok">test</Link>
    </div>
  );
}
