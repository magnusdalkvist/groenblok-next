import { getHome } from "../../sanity/sanity-utils";
import RenderModules from "./components/RenderModules";
import Link from "next/link";

export default async function Home() {
  const home = await getHome();

  return (
    <>
      <h1>{home?.title}</h1>
      {/* <Link href="/articles/test">hej</Link> */}
      {/* <RenderModules modules={home.modules} /> */}
    </>
  );
}
