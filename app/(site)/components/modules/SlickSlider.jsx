"use client";
import Image from "next/image";
import { EmblaCarousel } from "../EmblaCarousel";

export default function SlickSlider({ module }) {
  return (
    <div className="py-14" datatype="slickSlider">
      <h3 className="">{module?.title}</h3>
      <div className="flex gap-4 justify-evenly items-center">
        {module?.images?.map((image, i) => (
          <div key={i}>
            <Image
              src={image?.url}
              width={200}
              height={200}
              alt={image?.alt}
              className="rounded-sm"
              placeholder={image?.blurDataURL && "blur"}
              blurDataURL={image?.blurDataURL}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}
