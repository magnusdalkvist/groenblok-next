import { getHome } from "../../sanity/fragments/sanity-utils";
import RenderModules from "./components/RenderModules";
import BorderLines from "./components/BorderLines";

export default async function Home() {
  const home = await getHome();
  return (
    <main>
      <RenderModules modules={home?.modules} />
      <div className="flex">
        <BorderLines side="right">Hej med dig</BorderLines>
        <BorderLines side="center">Hej med dig</BorderLines>
        <BorderLines side="left">Hej med dig</BorderLines>
      </div>
    </main>
  );
}
