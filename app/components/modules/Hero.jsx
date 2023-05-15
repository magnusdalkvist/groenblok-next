"use client";

import Image from "next/image";
import RenderBlocks from "../RenderBlocks";

export default function Hero({ module }) {
  //blurdataurl is like this link https://cdn.sanity.io/images/at6buhh6/production/dfe7a1e3b5cf8f1bd3f6e9406a29fa20740e509a-2880x1800.jpg but take the sizes and make them 1% of the original
  // const blurDataURL = module?.backgroundImage?.url + `?&auto=format&blur=100`;

  return (
    <div className="w-full h-screen relative" datatype="hero">
      <Image
        src={module?.backgroundImage?.url}
        alt={module?.backgroundImage?.alt}
        className="object-cover h-full w-full"
        width={module?.backgroundImage?.width}
        height={module?.backgroundImage?.height}
        //prevents image from stretching in weird ways
        priority={true}
        // placeholder="blur"
        // blurDataURL={blurDataURL}
      />
      <div className="absolute inset-0 flex flex-col justify-center  gap-4 p-4">
        <RenderBlocks blocks={module.blocks} />
      </div>
    </div>
  );
}
