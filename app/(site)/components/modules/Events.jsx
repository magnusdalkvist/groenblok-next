import { getEvents } from "../../../../sanity/fragments/sanity-utils";
import BorderLines from "../BorderLines";
import Button from "../Button";
import { EventListItem } from "../EventListItem";

export default async function Events({ module }) {
  const events = await getEvents();
  const date = new Date().toISOString().substring(0, 10);

  events.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <div className="flex flex-col items-center gap-8 p-8" datatype="events">
      <h3 className="text-center">{module.title}</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 max-w-[1000px]">
        {module.show == "custom" &&
          module?.events.map((event, i) => (
            <BorderLines key={i} side="right" innerStyle="p-0">
              <EventListItem event={event} />
            </BorderLines>
          ))}
        {module.show == "future" &&
          //filter events that are in the future
          events
            .filter((_) => _.date >= date)
            .map((event, i) => (
              <BorderLines key={i} side="right" innerStyle="p-0">
                <EventListItem event={event} />
              </BorderLines>
            ))}
        {module.show == "previous" &&
          //filter events that are in the past
          events
            .filter((_) => _.date < date)
            .map((event, i) => (
              <BorderLines key={i} side="right" innerStyle="p-0">
                <EventListItem event={event} />
              </BorderLines>
            ))}
      </div>
      <Button type="trans" className="px-8 py-2" href="/projekter">
        Se alle events
      </Button>
    </div>
  );
}
