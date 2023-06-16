import Image from "next/image";
import SignUpForm from "../components/SignUpForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="text-darkGreen p-4 flex flex-col gap-8 max-w-[1200px] mx-auto">
      <h1 className="text-orangeAccent">Gør en forskel. Bliv medlem.</h1>
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_minmax(auto,600px)] gap-8">
        <SignUpForm session={session} />
        <div className="flex flex-col gap-4">
          <div className="w-3/4 max-w-[500px]">
            <h3>Det er gratis at være medlem</h3>
            <div className="mt-4">
              <div className="w-full bg-darkGreen h-[1px]" />
              <div className="w-[7px] h-[7px] bg-darkGreen -translate-y-1" />
            </div>
          </div>
          <div className="ml-auto w-3/4 max-w-[500px] text-right">
            <h3>& du vælger selv, hvor meget du vil engagere dig.</h3>
            <div className="flex justify-end mt-4">
              <div className="w-full bg-darkGreen h-[1px]" />
              <div className="w-[7px] h-[7px] bg-darkGreen -translate-y-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h2>Sådan gør du en forskel</h2>
          <p>
            Når du melder dig ind i GRØN BLOK repræsenterer du en del af danmarks grønne stemme og
            du viser dermed virksomhederne, politikerne og dig selv, at du tager stilling og ønsker
            at bidrage til den grønne omstilling. Dit medlemskab betyder derfor, at vi kan indgå en
            dialog med beslutningstagerne med en større forhandlingsstyrke og danmarks grønne stemme
            i ryggen.
          </p>
          <Image
            src="/markus-spiseske.webp"
            width={500}
            height={500}
            alt="Markus Spiske"
            className="object-cover w-full"
          />
        </div>
        <div className="" datatype="numberedInfoList">
          <div className={"flex border-b border-darkGreen"}>
            <div
              className={
                "text-[80px] w-1/4 flex justify-center items-center font-bold py-8 pr-4 items-start relative"
              }
            >
              <div className="sticky top-8 text-orangeAccent text-h2-web">01</div>
            </div>
            <div className="flex flex-col w-3/4 py-8 pl-4 border-l border-darkGreen">
              <div>
                <h3>Giv din mening til kende</h3>
                <p>
                  Når du melder dig ind i GRØN BLOK, angiver du dine grønne mærkesager for at
                  identificere de væsentligste fokusområder hos danskerne. <br /> <br />
                  ■ Identifikation af mærkesager: Medlemmer angiver deres specifikke
                  interesseområder inden for grøn omstilling. <br /> <br /> ■ Tematisering af
                  tiltag: GRØN BLOK analyserer og prioriterer de grønne tiltag baseret på
                  medlemmernes valg.
                </p>
              </div>
            </div>
          </div>
          <div className={"flex border-b border-darkGreen flex-row-reverse"}>
            <div
              className={
                "text-[80px] w-1/4 flex justify-center items-center font-bold py-8 pl-4 items-start relative"
              }
            >
              <div className="sticky top-8 text-orangeAccent text-h2-web">02</div>
            </div>
            <div className="flex flex-col w-3/4 py-8 pr-4 border-r border-darkGreen">
              <div>
                <h3>Vær en del af løsningen</h3>
                <p>
                  Du kan ansøge om at deltage i arbejdsgrupper bestående af frivillige og fagfolk
                  for at udvikle konkrete løsningsforslag. <br /> <br />
                  ■ Ansøgning om deltagelse: Interesserede kan ansøge og dele deres ekspertise og
                  engagement. <br /> <br /> ■ Tværfagligt samarbejde: Arbejdsgrupperne udvikler
                  løsningsforslag i samarbejde med relevante aktører på tværs af alder, ideologi og
                  faglighed.
                </p>
              </div>
            </div>
          </div>
          <div className={"flex"}>
            <div
              className={
                "text-[80px] min-w-[5rem] w-1/4 flex justify-center items-center font-bold py-8 pr-4 items-start relative"
              }
            >
              <div className="sticky top-8 text-orangeAccent text-h2-web">03</div>
            </div>
            <div className="flex flex-col w-3/4 py-8 pl-4 border-l border-darkGreen">
              <div>
                <h3>Skub konkrete tiltag igennem</h3>
                <p>
                  Efter udarbejdelsen af løsningsforslag fokuseres der på intensiv kommunikation og
                  markedsføring for at opnå støtte og implementering at udarbejdede løsningsforslag{" "}
                  <br /> <br />■ Intensiv kommunikation: Grøn Blok arbejder igennem event, SoMe og
                  paid markedføring for at løsningsforslagene når ud til flest mulige mennesker
                  udvikle. <br /> <br /> ■ Præsentation for beslutningstagere: Siden præsenteres
                  forslagene for virksomheder, politikere og andre relevante aktører der kan hjælpe
                  med implementering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
