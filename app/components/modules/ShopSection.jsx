import Image from "next/image";

export default function ShopSection({ module }) {
  return (
    <div
      className="w-full flex flex-col justify-center relative bg-lightGreen"
      datatype="shopSection"
    >
      <h2 className="text-center pt-20 font-black text-7xl text-darkGreen ">{module?.title}</h2>
      <div className="flex p-20 pb-32 pt-10 gap-x-20">
        {module?.imageButtons.map((imageButton, i) => (
          <div key={i} className="group  relative rounded">
            <a href={imageButton.link} className="w-full">
              <div className="opacity-0 group-hover:opacity-40 rounded absolute inset-0 bg-darkGreen transition duration-300"></div>
              <h3 className="opacity-0 group-hover:opacity-100 p-4 absolute z-10 bottom-0 left-0 font-bold text-2xl text-yellowAccent transition duration-300">
                {imageButton.title}
              </h3>
              <Image
                src={imageButton.image.url}
                width={imageButton.image.width}
                height={imageButton.image.height}
                alt=""
                className="rounded"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
