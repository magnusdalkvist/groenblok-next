import { getHome } from "../../sanity/sanity-utils";
import RenderModules from "./components/RenderModules";

export default async function Home({ home }) {
  return <RenderModules modules={home.modules} />;
}

export async function getServerSideProps(context) {
  const home = await getHome();

  return {
    props: { home }, // will be passed to the page component as props
  };
}
