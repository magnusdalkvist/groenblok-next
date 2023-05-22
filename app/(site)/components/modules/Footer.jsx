import Link from "next/link";
import BorderLines from "../BorderLines";

export default function Footer({ module }) {
  return (
    <div className="bg-lightBeige p-4 flex items-center justify-center" datatype="footer">
      <BorderLines className="" side="left">
        <div className="flex justify-between w-[1200px]">
          <div>
            <h3>Adresse</h3>
            <p>{module?.adresse}</p>
            <h3>E-mail</h3>
            <p>{module?.email}</p>
            <h3>CVR</h3>
            <p>{module?.cvr}</p>
          </div>
          <div className="flex flex-col">
            <Link href={"/test-igen"}>Privatpolitik</Link>
            <Link href={"/test-igen"}>Vilkår & betingelser</Link>
            <Link href={"/test-igen"}>Cookie politik</Link>
          </div>
          <div className="relative">
            <h3>Tilmeld dig her</h3>
            <form className="flex gap-1">
              <label htmlFor="email" className="flex flex-col gap-2 ">
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="mail@mail.dk"
                  className="border-2  border-darkGreen p-1"
                />
              </label>
              <input type="submit" value="Tilmeld" className="bg-orangeAccent border p-1" />
            </form>
          </div>
        </div>
      </BorderLines>
    </div>
  );
}
