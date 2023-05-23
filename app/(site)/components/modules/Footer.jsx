import Link from "next/link";
import BorderLines from "../BorderLines";
import Image from "next/image";

export default function Footer({ module }) {
  return (
    <div className="bg-lightBeige p-4 flex items-center justify-center" datatype="footer">
      <BorderLines className="" side="left">
        <div className="flex justify-between w-[1200px]">
          <div>
            <div className="mb-2">
              <h3 className="text-2xl">Adresse</h3>
              <p className="text-sm">{module?.adresse.street}</p>
              <p className="text-sm">{module?.adresse.city}</p>
              <p className="text-sm">{module?.adresse.zip}</p>
            </div>
            <div className="mb-2">
              <h3 className="text-2xl">E-mail</h3>
              <p className="text-sm">{module?.email}</p>
            </div>
            <div>
              <h3 className="text-2xl">CVR</h3>
              <p className="text-sm">{module?.cvr}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <Link href={"/test-igen"}>Privatpolitik</Link>
            <Link href={"/test-igen"}>Vilkår & betingelser</Link>
            <Link href={"/test-igen"}>Cookie politik</Link>
            <div>
              <Image src={module.image?.url} width={100} height={100}></Image>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl mb-2">Tilmeld dig her</h3>
            <form className="flex gap-1">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="mail@mail.dk"
                  className="border-2  border-darkGreen p-1"
                />
              </div>
              <input type="submit" value="Tilmeld" className="bg-orangeAccent border p-4" />
            </form>
          </div>
        </div>
      </BorderLines>
    </div>
  );
}
