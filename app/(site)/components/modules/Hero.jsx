import Image from "next/image";
import RenderBlocks from "../RenderBlocks";
import BorderLines from "../BorderLines";

export default function Hero({ module }) {
  return (
    <BorderLines side="hero" top="top-[1rem]" color="bg-lightBeige">
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
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 h-[100px] w-full bg-gradient-to-b from-transparent to-lightBeige" />
        </div>
        <div className="flex justify-between gap-10 w-full h-full relative top-0 ps-20 pe-10 pt-[14rem] pb-20">
          <div className="hidden lg:flex lg:relative lg:inset-0 lg:w-[100%]">
            {module?.grundprincipper?.map((grundprincip, i) => {
              console.log(grundprincip.content);
              let marginTop = 0;

              // Determine marginTop based on the index
              if (i === 0) {
                marginTop = "mt-[15px]"; // Second grundprincip shifted higher
              } else if (i === 2) {
                marginTop = "mt-[45px]"; // Third grundprincip shifted lower
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
                      innerStyle="p-6"
                    >
                      <RenderBlocks
                        classNameButton="p-4 uppercase font-[15px] w-full text-center"
                        classNameTitle={`font-bold text-lightBeige mb-2 ${marginTop} `}
                        classNameCopy="text-lightBeige mb-6"
                        titleSize="h5"
                        blocks={grundprincip.content}
                        buttonType="trans-light"
                      />
                    </BorderLines>
                  )}
                  {i === 1 && (
                    /* Render the second grundprincip with split BorderLines */
                    <BorderLines side="split" color="bg-lightBeige" innerStyle="p-6">
                      <RenderBlocks
                        classNameButton="p-4 uppercase font-[15px] w-full text-center"
                        classNameTitle={`font-bold text-lightBeige mb-2 ${marginTop}`}
                        classNameCopy="text-lightBeige mb-6"
                        titleSize="h5"
                        blocks={grundprincip.content}
                        buttonType="trans-light"
                      />
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
                      innerStyle="p-6"
                    >
                      <RenderBlocks
                        classNameButton="p-4 uppercase font-[15px] w-full text-center"
                        classNameTitle={`font-bold text-lightBeige mb-2 ${marginTop}`}
                        classNameCopy="text-lightBeige mb-6"
                        titleSize="h5"
                        blocks={grundprincip.content}
                        buttonType="trans-light"
                      />
                    </BorderLines>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative max-w-[880px] inset-y-0 right-0 flex flex-col items-end text-right gap-4 p-4">
            <RenderBlocks
              buttonWrapper="items-end"
              classNameButton="px-14 py-4"
              classNameTitle="font-black text-lightBeige mb-10 leading-[6rem] tracking-wider"
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
