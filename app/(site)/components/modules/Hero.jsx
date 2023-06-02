import Image from "next/image";
import RenderBlocks from "../RenderBlocks";
import BorderLines from "../BorderLines";
import Button from "../Button";

export default function Hero({ module }) {
  return (
    <div className="w-full flex flex-col min-h-screen relative" datatype="hero">
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
      {/* <BorderLines side="hero" top="top-[1rem]" color="bg-lightBeige"></BorderLines> */}
      <div className="max-w-[1200px] mx-auto z-10 flex flex-col-reverse justify-center xl:grid xl:grid-cols-[1.5fr_1fr] gap-8 p-4 pb-20 items-center flex-1 text-lightBeige">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          {module?.grundprincipper?.map((grundprincip, i) => {
            let marginTop = 0;

            // Determine marginTop based on the index
            if (i === 0) {
              marginTop = "mt-[15px]"; // Second grundprincip shifted higher
            } else if (i === 2) {
              marginTop = "mt-[45px]"; // Third grundprincip shifted lower
            }

            return (
              <div key={i} className="hidden xl:block">
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
                    innerStyle="p-4"
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
                  <BorderLines side="split" color="bg-lightBeige" innerStyle="p-4">
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
                    innerStyle="p-4"
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
          <div className="xl:hidden">
            <BorderLines
              color="bg-lightBeige"
              side="left"
              innerStyle="p-4 flex flex-col gap-4 items-center justify-center"
            >
              <h3>Grøn Bloks arbejdsområder</h3>
              <p>Læs mere om hvordan du kan bidrage til Grøn Blok og rede verden</p>
              <div className="flex flex-col gap-4">
                <Button href="/events" type="trans-light" className="px-6 py-2 text-center">
                  EVENTS
                </Button>
                <Button href="/projekter" type="trans-light" className="px-6 py-2 text-center">
                  PROJEKTER
                </Button>
                <Button
                  href="/gron-blok-magazine"
                  type="trans-light"
                  className="px-6 py-2 text-center"
                >
                  NYHEDER
                </Button>
              </div>
            </BorderLines>
          </div>
        </div>
        <div className="relative max-w-[880px] inset-y-0 right-0 flex flex-col items-end text-right gap-4">
          <RenderBlocks
            buttonWrapper="items-end"
            classNameButton="py-2 px-6 sm:px-14 sm:py-4"
            classNameTitle="font-black text-lightBeige mb-10 leading-[6rem] tracking-wider"
            titleSize="h1"
            blocks={module.blocks}
            buttonType="hero"
          />
        </div>
      </div>
    </div>
  );
}
