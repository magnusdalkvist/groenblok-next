import { getEvents } from "../../../../sanity/fragments/sanity-utils";
import EventListItem from "../EventListItem";

export default async function Events({ module }) {
  const events = await getEvents();
  const date = new Date().toISOString().substring(0, 10);

  events.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <div className="" datatype="events">
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
