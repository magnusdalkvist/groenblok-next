import { getHome } from "../sanity/sanity-utils";
import RenderModules from "./components/RenderModules";
import Link from "next/link";

export default async function Home() {
  const home = await getHome();

  return (
    <>
      <Link href="/articles/test">hej</Link>
      <RenderModules modules={home.modules} />
    </>
  );
}
