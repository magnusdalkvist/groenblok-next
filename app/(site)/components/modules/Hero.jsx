import Image from "next/image";
import RenderBlocks from "../RenderBlocks";
import RenderPortableText from "../RenderPortableText";
import BorderLines from "../BorderLines";

export default function Hero({ module }) {
  return (
    <BorderLines side="hero" top="top-[6rem]" color="bg-lightBeige">
      <div className="w-full h-screen relative" datatype="hero">
        <Image
          src={module.backgroundImage?.url}
          alt={module.backgroundImage?.alt}
          className="object-cover h-full w-full absolute"
          width={module.backgroundImage?.width}
          height={module.backgroundImage?.height}
          placeholder={module.backgroundImage?.blurDataURL && "blur"}
          blurDataURL={module.backgroundImage?.blurDataURL}
          //prevents image from stretching in weird ways
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 h-[100px] w-full bg-gradient-to-b from-transparent to-lightBeige" />
        </div>
        <div className="flex justify-between w-full h-full relative top-[100px] p-20 pe-56">
          <div class="flex relative inset-0 w-1/2 p-14">
            {module?.grundprincipper?.map((grundprincip, i) => {
              let marginTop = 0;

              // Determine marginTop based on the index
              if (i === 0) {
                marginTop = 25; // Second grundprincip shifted higher
              } else if (i === 2) {
                marginTop = 50; // Third grundprincip shifted lower
              }

              return (
                <div className="w-1/3" key={i}>
                  {i === 0 && (
                    /* Render the first grundprincip with BorderLines on the left */
                    <BorderLines
                      side="left"
                      color="bg-lightBeige"
                      top="top-[80px]"
                      topBlock="top-[77px]"
                      paddingTop="pt-16"
                      sideline="top-[50px]"
                      left="left-[-30px]"
                    >
                      <h5
                        className="text-xl font-bold text-lightBeige"
                        style={{ marginTop: `${marginTop}px` }}
                      >
                        {grundprincip?.title}
                      </h5>
                      <RenderPortableText content={grundprincip?.content} color="text-lightBeige" />
                    </BorderLines>
                  )}
                  {i === 1 && (
                    /* Render the second grundprincip with split BorderLines */
                    <BorderLines side="split" color="bg-lightBeige">
                      <h5
                        className="font-bold text-lightBeige"
                        style={{ marginTop: `${marginTop}px` }}
                      >
                        {grundprincip?.title}
                      </h5>
                      <RenderPortableText content={grundprincip?.content} color="text-lightBeige" />
                    </BorderLines>
                  )}
                  {i === 2 && (
                    /* Render the third grundprincip with BorderLines on the right */
                    <BorderLines
                      side="right"
                      color="bg-lightBeige"
                      top="top-[105px]"
                      topBlock="top-[102px]"
                      paddingTop="pt-16"
                      sideline="top-[70px]"
                      right="right-[-30px]"
                    >
                      <h5
                        className="text-xl font-bold text-lightBeige"
                        style={{ marginTop: `${marginTop}px` }}
                      >
                        {grundprincip?.title}
                      </h5>
                      <RenderPortableText content={grundprincip?.content} color="text-lightBeige" />
                    </BorderLines>
                  )}
                </div>
              );
            })}
          </div>
          <div className="relative inset-y-0 right-0 flex flex-col items-center text-right gap-4 p-4 pb-[25rem] max-w-[600px] justify-between">
            <RenderBlocks
              classNameButton="px-28 py-4"
              classNameTitle="font-black text-[80px] text-lightBeige tracking-[5px]"
              titleSize="h1"
              blocks={module.blocks}
              buttonType="hero"
            />
          </div>
        </div>
      </div>
    </BorderLines>
  );
}
