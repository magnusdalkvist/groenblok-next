import { getHome } from "../../sanity/sanity-utils";
import RenderModules from "./components/RenderModules";

export default async function Home() {
  const home = await getHome();

  return (
    <main>
      <RenderModules modules={home?.modules} />
    </main>
  );
}
