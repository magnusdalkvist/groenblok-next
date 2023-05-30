import BorderLines from "../BorderLines";
import RenderBlocks from "../RenderBlocks";

export default function SkewedImagesWithText({ module }) {
  return (
    <div className="grid grid-cols-2 w-full">
      <BorderLines className="">
        <div className="">
          <RenderBlocks
            classNameButton="px-14 py-3 mt-8 text-[20px]"
            classNameTitle="mb-8 text-darkGreen"
            classNameCopy="max-w-[700px] text-black"
            buttonType="trans"
            blocks={module?.blocks}
            titleSize="h2"
          />
        </div>
      </BorderLines>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-end">
          <div>Link til seneste opslag</div>
          <div>Link til seneste opslag</div>
        </div>
        <div className="mt-4 flex flex-col items-start">
          <div>Link til seneste opslag</div>
          <div>Link til seneste opslag</div>
        </div>
      </div>
    </div>
  );
}
