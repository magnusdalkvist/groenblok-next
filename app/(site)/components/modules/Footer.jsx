import Link from "next/link";

export default function Footer({ module }) {
  return (
    <div className="bg-darkGreen h-[40vh] flex items-center justify-center" datatype="footer">
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
          <form
            className="flex flex-col bg-lightGreen border-solid border-2 border-darkGreen p-8 absolute right-[50px] bottom-[170px] justify-between"
            action=""
          >
            <label htmlFor="fname">
              Fornavn
              <input type="text" id="fname" name="fname" />
            </label>
            <label htmlFor="lname">
              Efternavn
              <input type="text" id="lname" name="lname" />
            </label>
            <label htmlFor="email">
              E-mail
              <input type="email" />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
