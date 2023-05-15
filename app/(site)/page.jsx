import { getHome, getPage } from "../../sanity/sanity-utils";
import RenderModules from "./components/RenderModules";

export default async function Home() {
  const page = await getPage("test-igen");

  return <RenderModules modules={page.modules} />;
}
