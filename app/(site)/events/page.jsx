import { notFound } from "next/navigation";
import { getEvents } from "../../../sanity/fragments/sanity-utils";
import EventsContent from "../components/EventsContent";

export default async function Article({ params, searchParams }) {
  const events = await getEvents();

  if (!events || events.length === 0) {
    notFound();
  }

  return <EventsContent events={events} />;
}
