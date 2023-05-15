import { getEvents } from "../../../../sanity/sanity-utils";
import Image from "next/image";

export default async function Events({ module }) {
  const events = await getEvents();
  const date = new Date().toISOString().substring(0, 10);

  console.log(module);

  events.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <div className="w-full h-screen relative" datatype="hero">
      <div className="grid grid-cols-3 gap-y-4">
        {module.show == "custom" &&
          module?.events.map((event, i) => <EventListItem key={i} event={event} />)}
        {module.show == "future" &&
          //filter events that are in the future
          events
            .filter((_) => _.date >= date)
            .map((event, i) => <EventListItem key={i} event={event} />)}
        {module.show == "previous" &&
          //filter events that are in the past
          events
            .filter((_) => _.date < date)
            .map((event, i) => <EventListItem key={i} event={event} />)}
      </div>
    </div>
  );
}

function EventListItem({ event }) {
  return (
    <div className="eventList p-4 flex flex-col gap-2">
      <h2 className="text-2xl mb-8 flex-1">{event.title}</h2>
      <div className="flex items-end justify-between">
        <div className="flex flex-col text-xs">
          {event.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <span className="font-bold text-2xl">
          {new Date(event.date).toLocaleDateString("da-dk", { day: "2-digit", month: "2-digit" })}
        </span>
      </div>
      <Image
        src={event.image.url}
        alt={event.image.alt}
        width={event.image.width}
        height={event.image.height}
        placeholder="blur"
        blurDataURL={event.image.blurDataURL}
      />
    </div>
  );
}
