import Image from "next/image";
import RenderBlocks from "../RenderBlocks";

export default function Hero({ module }) {
  console.log(module);

  return (
    <div className="w-full h-screen relative" datatype="hero">
      <Image
        src={module?.backgroundImage?.url}
        alt={module?.backgroundImage?.alt}
        className="object-cover h-full w-full"
        width={module?.backgroundImage?.width}
        height={module?.backgroundImage?.height}
        placeholder="blur"
        blurDataURL={module?.backgroundImage?.blurDataURL}
        //prevents image from stretching in weird ways
        priority={true}
      />
      <div className="absolute inset-0 flex flex-col justify-center  gap-4 p-4">
        <RenderBlocks blocks={module.blocks} />
      </div>
    </div>
  );
}
