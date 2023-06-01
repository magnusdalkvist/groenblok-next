import BorderLines from "../BorderLines";
import RenderBlocks from "../RenderBlocks";
import Image from "next/image";

export default function SkewedImagesWithText({ module }) {
  return (
    <div className="grid grid-cols-2 w-full p-20 pb-0 gap-[40px]">
      <BorderLines side="left" innerStyle="py-6 px-10" bottom="bottom-[50%]">
        <div className="">
          <RenderBlocks
            classNameButton="px-14 py-3 mt-8 text-[20px] font-chivo uppercase"
            classNameTitle="mb-8 text-darkGreen font-black tracking-wide"
            classNameCopy="max-w-[700px] text-black"
            buttonType="trans"
            blocks={module?.blocks}
            titleSize="h2"
          />
        </div>
      </BorderLines>
      <div className="grid grid-cols-2 grid-rows-3 gap-10">
        {module?.images?.map((image, i) => (
          <div
            key={i}
            className={
              i === 1
                ? "row-start-1 row-end-3 col-start-2 col-end-3 my-auto w-2/3 "
                : i === 3
                ? "row-start-2 row-end-4 col-start-2 col-end-3 my-auto w-2/3"
                : "w-2/3 items-center place-self-end"
            }
          >
            <Image
              src={image?.url}
              alt={image?.alt}
              className="object-cover rounded-sm aspect-[3/4]"
              width={image?.width}
              height={image?.height}
              placeholder={image?.blurDataURL && "blur"}
              blurDataURL={image?.blurDataURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
