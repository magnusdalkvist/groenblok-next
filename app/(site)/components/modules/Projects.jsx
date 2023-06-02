import Link from "next/link";
import { getProjects } from "../../../../sanity/fragments/sanity-utils";
import BorderLines from "../BorderLines";
import Button from "../Button";
import { EventListItem } from "../EventListItem";

export default async function Projects({ module }) {
  const projects = await getProjects();
  const date = new Date().toISOString().substring(0, 10);

  projects.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <div className="flex flex-col items-center gap-8 p-4 py-32" datatype="projects">
      <h2 className="text-center text-darkGreen font-chivo tracking-wide font-black">
        {module.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 max-w-[1000px]">
        {module.show == "custom" &&
          module?.projects.map((event, i) => (
            <BorderLines key={i} side="right" innerStyle="p-0">
              <EventListItem event={event} />
            </BorderLines>
          ))}
        {module.show == "future" &&
          //filter projects that are in the future
          projects
            .filter((_) => _.date >= date)
            .map((event, i) => (
              <BorderLines key={i} side="right" innerStyle="p-0">
                <EventListItem event={event} />
              </BorderLines>
            ))}
        {module.show == "previous" &&
          //filter projects that are in the past
          projects
            .filter((_) => _.date < date)
            .map((event, i) => (
              <BorderLines key={i} side="right" innerStyle="p-0">
                <EventListItem event={event} />
              </BorderLines>
            ))}
      </div>
      <Button type="trans" className="px-8 py-2" href="/projekter">
        Se alle projekter
      </Button>
    </div>
  );
}
