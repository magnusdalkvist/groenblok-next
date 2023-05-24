"use client";
import Image from "next/image";
import { EmblaCarousel } from "../EmblaCarousel";

export default function SlickSlider({ module }) {
  return (
    <div className="py-14" datatype="slickSlider">
      <h3 className="">Partnere</h3>
      <EmblaCarousel>
        {module?.images?.map((image, i) => (
          <div key={i} className="embla__slide">
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
      </EmblaCarousel>
    </div>
  );
}
