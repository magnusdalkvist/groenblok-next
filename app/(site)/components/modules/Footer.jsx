import Link from "next/link";
import BorderLinesBox from "../BorderLinesBox";
import Image from "next/image";

export default function Footer({ module }) {
  return (
    <div className="bg-lightBeige w-full p-8" datatype="footer">
      <BorderLinesBox className="w-full">
        <div className="flex w-full justify-between py-20 px-14">
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Link href={"/test-igen"}>Privatpolitik</Link>
              <Link href={"/test-igen"}>Vilkår & betingelser</Link>
              <Link href={"/test-igen"}>Cookie politik</Link>
            </div>
            <div className="justify-self-end">
              <Image src={module?.image.url} width={100} height={100}></Image>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl mb-4">Tilmeld dig her</h3>
            <form className="flex gap-x-5">
              <div className="flex flex-col">
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
              <input
                type="submit"
                value="Tilmeld"
                className="bg-orangeAccent border py-1.5 px-8 self-end"
              />
            </form>
          </div>
        </div>
      </BorderLinesBox>
    </div>
  );
}
