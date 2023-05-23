import { getMagazine } from "../../../sanity/fragments/sanity-utils";
import MagazineContent from "../components/MagazineContent";

export default async function Page({ params, searchParams }) {
  const magazine = await getMagazine();

  return <MagazineContent magazine={magazine} />;
}
