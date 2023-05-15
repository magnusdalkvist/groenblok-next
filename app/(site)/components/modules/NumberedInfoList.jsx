import clsx from "clsx";
import RenderBlocks from "../RenderBlocks";

export default function NumberedInfoList({ module }) {
  return (
    <div className="w-full h-screen relative" datatype="numberedInfoList">
      {module?.infoList.map((info, i) => (
        <div
          key={i}
          className={clsx("flex border-b border-black", (i + 1) % 2 == 0 && "flex-row-reverse")}
        >
          <div
            className={clsx(
              "text-[80px] w-1/4 flex justify-center font-bold py-8 items-start relative",
              (i + 1) % 2 == 0 ? "border-l border-black" : "border-r border-black"
            )}
          >
            <div className="sticky top-8">{i < 10 ? "0" + (i + 1) : i + 1}</div>
          </div>
          <div className="flex flex-col w-1/2 px-4 py-8">
            <RenderBlocks blocks={info.blocks} />
          </div>
        </div>
      ))}
    </div>
  );
}
