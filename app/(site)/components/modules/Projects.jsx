import { getProjects } from "../../../../sanity/fragments/sanity-utils";
import BorderLines from "../BorderLines";
import { EventListItem } from "../EventListItem";

export default async function Projects({ module }) {
  const projects = await getProjects();
  const date = new Date().toISOString().substring(0, 10);

  projects.sort((a, b) => (a.date > b.date ? 1 : -1));

  console.log(projects);

  return (
    <div datatype="projects">
      <h3 className="text-center">{module.title}</h3>
      <div className="grid grid-cols-3 gap-y-4 max-w-[1000px] mx-auto">
        {module.show == "custom" &&
          module?.projects.map((event, i) => (
            <BorderLines side={i % 3 === 2 ? "top" : "right"} innerStyle="p-0">
              <EventListItem key={i} event={event} />
            </BorderLines>
          ))}
        {module.show == "future" &&
          //filter projects that are in the future
          projects
            .filter((_) => _.date >= date)
            .map((event, i) => (
              <BorderLines side={i % 3 === 2 ? "top" : "right"} innerStyle="p-0">
                <EventListItem key={i} event={event} />
              </BorderLines>
            ))}
        {module.show == "previous" &&
          //filter projects that are in the past
          projects
            .filter((_) => _.date < date)
            .map((event, i) => (
              <BorderLines side={i % 3 === 2 ? "top" : "right"} innerStyle="p-0">
                <EventListItem key={i} event={event} />
              </BorderLines>
            ))}
      </div>
    </div>
  );
}
