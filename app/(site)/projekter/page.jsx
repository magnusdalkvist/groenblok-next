import { notFound } from "next/navigation";
import { getProjects } from "../../../sanity/fragments/sanity-utils";
import ProjectsContent from "../components/ProjectsContent";

export default async function Article({ params, searchParams }) {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    notFound();
  }

  return <ProjectsContent projects={projects} />;
}
