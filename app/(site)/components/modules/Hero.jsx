import Image from "next/image";
import RenderBlocks from "../RenderBlocks";

export default function Hero({ module }) {
  return (
    <div className="w-full h-screen relative" datatype="hero">
      <Image
        src={module.backgroundImage?.url}
        alt={module.backgroundImage?.alt}
        className="object-cover h-full w-full"
        width={module.backgroundImage?.width}
        height={module.backgroundImage?.height}
        placeholder={module.backgroundImage?.blurDataURL && "blur"}
        blurDataURL={module.backgroundImage?.blurDataURL}
        //prevents image from stretching in weird ways
        priority={true}
      />
      <div className="absolute inset-0 flex flex-col items-end text-right max-w-[50%] gap-4 p-4">
        <RenderBlocks blocks={module.blocks} />
      </div>
    </div>
  );
}
