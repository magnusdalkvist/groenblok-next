"use client";
import Image from "next/image";
import { EmblaCarousel } from "../EmblaCarousel";

export default function SlickSlider({ module }) {
  return (
    <div className="" datatype="slickSlider">
      <h3>Partnere</h3>
      <EmblaCarousel>
        {module?.images?.map((image, i) => (
          <div key={i} className="embla__slide">
            <Image src={image?.url} width={200} height={200}></Image>
          </div>
        ))}
      </EmblaCarousel>
    </div>
  );
}
