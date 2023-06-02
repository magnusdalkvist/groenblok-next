import clsx from "clsx";
import RenderPortableText from "../RenderPortableText";

export default function NumberedInfoList({ module }) {
  return (
    <div className="" datatype="numberedInfoList">
      {module?.infoList.map((info, i) => (
        <div
          key={i}
          className={clsx(
            "flex text-darkGreen",
            i != module.infoList.length - 1 && "border-b border-darkGreen",
            (i + 1) % 2 == 0 && "flex-row-reverse"
          )}
        >
          <div
            className={clsx(
              "w-1/4 flex justify-center font-bold items-start relative",
              (i + 1) % 2 == 0 ? "border-l border-darkGreen" : "border-r border-darkGreen"
            )}
          >
            <h1 className="sticky py-8 top-20">{i < 10 ? "0" + (i + 1) : i + 1}</h1>
          </div>
          <div className="flex flex-col gap-4 w-3/4 md:w-1/2 px-4 py-8">
            <RenderPortableText content={info.content} />
          </div>
        </div>
      ))}
    </div>
  );
}
