import Image from "next/image";

export default function SlickSlider({ module }) {
  console.log(module);
  return (
    <div className="w-full my-24" datatype="slickSlider">
      <h3>Partnere</h3>
      <div className="flex gap-2">
        {module?.images?.map((image, i) => (
          <div key={i} className="">
            <Image src={image?.url} width={100} height={100}></Image>
          </div>
        ))}
      </div>
    </div>
  );
}
