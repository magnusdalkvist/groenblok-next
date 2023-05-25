import BorderLines from "../BorderLines";
import RenderBlocks from "../RenderBlocks";

export default function SkewedImagesWithText({ module }) {
  console.log(module);
  return (
    <BorderLines className="">
      <div className="grid grid-cols-2 justify-between w-full">
        <div>
          <RenderBlocks blocks={module?.blocks} />
        </div>
        <div className="">
          <div>Link til seneste opslag</div>
          <div>Link til seneste opslag</div>
          <div>Link til seneste opslag</div>
          <div>Link til seneste opslag</div>
        </div>
      </div>
    </BorderLines>
  );
}
