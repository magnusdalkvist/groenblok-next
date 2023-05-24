import Image from "next/image";
import BorderLines from "../BorderLines";
import RenderBlocks from "../RenderBlocks";

export default function ImageWithText({ module }) {
  return (
    <div className="w-full flex justify-between container my-24" datatype="imagesWithText">
      <div className="flex items-center justify-center w-full">
        <Image
          src={module?.leftImage.url}
          width={module.leftImage?.width}
          height={module.leftImage?.height}
          alt={module.leftImage?.alt}
          placeholder={module.leftImage?.blurDataURL && "blur"}
          blurDataURL={module.leftImage?.blurDataURL}
          className="object-cover w-[300px] mt-[16px] rounded-sm"
        />
      </div>
      <BorderLines className="max-w-2xl" side="right">
        <div className="p-4">
          <RenderBlocks blocks={module?.blocks} />
        </div>
      </BorderLines>
    </div>
  );
}
