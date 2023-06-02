"use client";
import Image from "next/image";

export default function SlickSlider({ module }) {
  console.log(module);
  return (
    <div className="py-40 px-24 green-gradient" datatype="slickSlider">
      {module?.sliders?.map((slider, i) => (
        <div className="py-24">
          <h3 className="font-chivo font-black text-orangeAccent py-10">{slider?.sliderTitle}</h3>
          <div className="flex gap-20 items-center flex-wrap">
            {slider?.images?.map((image, i) => (
              <div key={i} className="">
                <Image
                  src={image?.url}
                  width={150}
                  height={150}
                  alt={image?.alt}
                  className="rounded"
                  placeholder={image?.blurDataURL && "blur"}
                  blurDataURL={image?.blurDataURL}
                ></Image>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
