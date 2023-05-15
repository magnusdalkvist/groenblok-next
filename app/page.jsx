"use client";

// import { createContext } from "react";
import { getEvents, getHome } from "../sanity/sanity-utils";
import RenderModules from "./components/RenderModules";
import Link from "next/link";

// export const rootData = createContext();

export default async function Home() {
  const home = await getHome();
  const events = await getEvents();

  return (
    // <rootData.Provider value={{ events: events }}>
    <>
      <Link href="/articles/test">hej</Link>
      <RenderModules modules={home.modules} events={events} />
    </>
    // </rootData.Provider>
  );
}
