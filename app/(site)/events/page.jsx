import { notFound } from "next/navigation";
import { getEvents } from "../../../sanity/fragments/sanity-utils";
import EventContent from "../components/EventContent";

export default async function Article({ params, searchParams }) {
  const events = await getEvents();

  if (!events) {
    notFound();
  }

  return <EventContent events={events} />;
}
